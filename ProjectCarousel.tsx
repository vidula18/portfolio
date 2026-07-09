// ─── HORIZONTAL PROJECT CAROUSEL ──────────────────────────────────────────────
// Physics-based dial-style carousel:
// • drag / trackpad / mouse wheel / keyboard / touch
// • active card centred and full-scale
// • adjacent cards scale down by distance from centre
// • weighted spring transitions (Framer Motion)
import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import { MonospaceTag, TagChip } from './Typography';
const CARD_WIDTH = 520;
const CARD_GAP = 40;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
interface CarouselProps {
  projects: Project[];
}
export function ProjectCarousel({ projects }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  // Motion values for the track x position
  const rawX = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 240, damping: 36, mass: 1 });
  const snapToIndex = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(projects.length - 1, index));
      setActiveIndex(clamped);
      const containerWidth = containerRef.current?.offsetWidth ?? window.innerWidth;
      const offset = containerWidth / 2 - CARD_WIDTH / 2 - clamped * CARD_STEP;
      animate(rawX, offset, { type: 'spring', stiffness: 240, damping: 36, mass: 1 });
    },
    [projects.length, rawX]
  );
  // ── Initial position
  useEffect(() => {
    snapToIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // ── Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') snapToIndex(activeIndex + 1);
      if (e.key === 'ArrowLeft') snapToIndex(activeIndex - 1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex, snapToIndex]);
  // ── Mouse wheel / trackpad navigation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let accum = 0;
    const threshold = 80;
    const onWheel = (e: WheelEvent) => {
      // Only hijack horizontal or nearly-horizontal scrolls on trackpad
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY) * 0.4 && Math.abs(e.deltaX) < 10) return;
      e.preventDefault();
      accum += e.deltaX;
      if (accum > threshold) {
        snapToIndex(activeIndex + 1);
        accum = 0;
      } else if (accum < -threshold) {
        snapToIndex(activeIndex - 1);
        accum = 0;
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [activeIndex, snapToIndex]);
  // ── Drag handling
  const dragStartX = useRef(0);
  const dragStartRaw = useRef(0);
  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(false);
    dragStartX.current = e.clientX;
    dragStartRaw.current = rawX.get();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 4) setIsDragging(true);
    rawX.set(dragStartRaw.current + delta);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const delta = e.clientX - dragStartX.current;
    const directionIndex =
      Math.abs(delta) > 60
        ? activeIndex - Math.sign(delta)
        : activeIndex;
    snapToIndex(Math.round(directionIndex));
  };
  return (
    <section
      style={{ overflow: 'hidden', paddingBottom: 'var(--sp-72)' }}
      aria-label="Selected projects carousel"
      role="region"
    >
      <div className="page-container" style={{ marginBottom: '40px' }}>
        <MonospaceTag>02-N SELECTED WORK</MonospaceTag>
      </div>
      {/* Track */}
      <div
        ref={containerRef}
        style={{ position: 'relative', cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        role="listbox"
        aria-label="Projects"
        tabIndex={0}
        aria-activedescendant={`project-card-${projects[activeIndex].id}`}
      >
        <motion.div
          style={{
            x: springX,
            display: 'flex',
            gap: `${CARD_GAP}px`,
            width: 'max-content',
            padding: `0 ${(typeof window !== 'undefined' ? window.innerWidth : 1200) / 2 - CARD_WIDTH / 2}px`,
          }}
        >
          {projects.map((project, index) => {
            const distance = Math.abs(index - activeIndex);
            const scale = 1 - distance * 0.06;
            const opacity = 1 - distance * 0.25;
            return (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                role="option"
                aria-selected={index === activeIndex}
                style={{
                  width: CARD_WIDTH,
                  flexShrink: 0,
                  scale,
                  opacity,
                  transformOrigin: 'center bottom',
                  transition: 'scale 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease',
                }}
                onClick={() => {
                  if (!isDragging) snapToIndex(index);
                }}
              >
                <Link
                  to={`/project/${project.slug}`}
                  style={{ display: 'block', pointerEvents: isDragging ? 'none' : 'auto' }}
                  tabIndex={index === activeIndex ? 0 : -1}
                  aria-label={`View ${project.title} case study`}
                >
                  {/* Card Image */}
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '4 / 3',
                      overflow: 'hidden',
                      borderRadius: 'var(--r-image)',
                      border: '1px solid var(--color-foil-gray)',
                      background: project.color,
                      position: 'relative',
                    }}
                  >
                    <img
                      src={project.thumbnailImage}
                      alt={project.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                        display: 'block',
                      }}
                      onMouseEnter={e => {
                        if (index === activeIndex)
                          (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                      }}
                    />
                    {/* Index badge */}
                    <span
                      style={{
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        letterSpacing: '0.06em',
                        background: 'var(--color-paper-white)',
                        border: '1px solid var(--color-press-ink)',
                        borderRadius: '100px',
                        padding: '4px 12px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {project.index}
                    </span>
                  </div>
                  {/* Card Meta */}
                  <div style={{ marginTop: '24px', paddingLeft: '4px' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '12px',
                      }}
                    >
                      <h3 className="t-heading-sm">{project.title}</h3>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          color: 'var(--color-mute-gray)',
                          marginTop: '2px',
                        }}
                      >
                        {project.year}
                      </span>
                    </div>
                    <p
                      className="t-body"
                      style={{
                        marginBottom: '16px',
                        color: 'var(--color-press-ink)',
                        opacity: 0.7,
                        fontSize: '15px',
                        maxWidth: '420px',
                      }}
                    >
                      {project.subtitle}
                    </p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {project.tags.slice(0, 3).map(tag => (
                        <TagChip key={tag}>{tag}</TagChip>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      {/* Dot indicators + arrow controls */}
      <div
        className="page-container"
        style={{ marginTop: '48px', display: 'flex', alignItems: 'center', gap: '24px' }}
      >
        {/* Prev */}
        <button
          onClick={() => snapToIndex(activeIndex - 1)}
          disabled={activeIndex === 0}
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: '1px solid var(--color-press-ink)',
            background: 'transparent',
            cursor: activeIndex === 0 ? 'default' : 'pointer',
            opacity: activeIndex === 0 ? 0.3 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 0.3s',
            flexShrink: 0,
          }}
          aria-label="Previous project"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        {/* Dots */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => snapToIndex(i)}
              style={{
                width: i === activeIndex ? 40 : 6,
                height: 6,
                borderRadius: 100,
                background: i === activeIndex ? 'var(--color-press-ink)' : 'var(--color-foil-gray)',
                border: 'none',
                cursor: 'pointer',
                transition: 'width 0.4s cubic-bezier(0.16,1,0.3,1), background 0.3s ease',
                padding: 0,
              }}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
        {/* Next */}
        <button
          onClick={() => snapToIndex(activeIndex + 1)}
          disabled={activeIndex === projects.length - 1}
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: '1px solid var(--color-press-ink)',
            background: 'transparent',
            cursor: activeIndex === projects.length - 1 ? 'default' : 'pointer',
            opacity: activeIndex === projects.length - 1 ? 0.3 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 0.3s',
            flexShrink: 0,
          }}
          aria-label="Next project"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        {/* Active label */}
        <div
          style={{
            marginLeft: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--color-mute-gray)',
          }}
        >
          {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </div>
      </div>
    </section>
  );
}
