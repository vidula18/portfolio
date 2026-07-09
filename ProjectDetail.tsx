import { useParams, Navigate, Link } from 'react-router-dom';
import { useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import {
  SparkleDivider,
  MonospaceTag,
  TagChip,
  RevealSection,
} from '../components/Typography';
import { projects } from '../data/projects';
import { staggerContainer, fadeInUp, scaleIn, viewportOnce, EASE_OUT_EXPO } from '../lib/animations';
export function ProjectDetail() {
  const { id } = useParams();
  const projectIndex = projects.findIndex(p => p.slug === id);
  const project = projects[projectIndex];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);
  if (!project) return <Navigate to="/" replace />;
  const nextProject = projects[(projectIndex + 1) % projects.length];
  return (
    <Layout>
      {/* ── PROJECT HEADER ──────────────────────────────────────────── */}
      <section className="page-container" style={{ paddingBottom: 'var(--sp-48)' }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.1, 0.05)}
        >
          <motion.div variants={fadeInUp} style={{ marginBottom: '24px' }}>
            <MonospaceTag>PROJECT / {project.index}</MonospaceTag>
          </motion.div>
          <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
            <motion.h1
              className="t-display"
              variants={{
                hidden: { y: '100%' },
                visible: { y: 0, transition: { duration: 1, ease: EASE_OUT_EXPO } },
              }}
            >
              {project.title}
            </motion.h1>
          </div>
          <motion.p
            variants={fadeInUp}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-subheading)',
              color: 'var(--color-press-ink)',
              opacity: 0.6,
              marginBottom: '32px',
              maxWidth: '600px',
            }}
          >
            {project.subtitle}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}
          >
            {project.tags.map(tag => <TagChip key={tag}>{tag}</TagChip>)}
          </motion.div>
          {/* Meta row */}
          <motion.div
            variants={fadeInUp}
            style={{
              display: 'flex',
              gap: '48px',
              paddingTop: '32px',
              borderTop: '1px solid var(--color-foil-gray)',
            }}
          >
            {[
              { label: 'Year', value: project.year },
              { label: 'Role', value: project.role },
            ].map(({ label, value }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--color-mute-gray)',
                    marginBottom: '6px',
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 500,
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      {/* ── HERO IMAGE ──────────────────────────────────────────────── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={scaleIn}
        style={{
          width: '100%',
          padding: '0 var(--page-px)',
          marginBottom: 'var(--sp-72)',
        }}
      >
        <div
          style={{
            width: '100%',
            aspectRatio: '16 / 7',
            borderRadius: 'var(--r-image)',
            overflow: 'hidden',
            border: '1px solid var(--color-foil-gray)',
            background: project.color,
            position: 'relative',
          }}
        >
          <img
            src={project.heroImage}
            alt={`${project.title} hero`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Caption overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: '28px',
              left: '28px',
              background: 'var(--color-paper-white)',
              border: '1px solid var(--color-press-ink)',
              borderRadius: 'var(--r-card)',
              padding: '16px 24px',
              maxWidth: '440px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-body)',
                lineHeight: 1.55,
              }}
            >
              {project.description}
            </p>
          </div>
        </div>
      </motion.div>
      {/* ── CASE STUDY SECTIONS ──────────────────────────────────────── */}
      <div className="page-container">
        {project.sections.map((section, idx) => (
          <Fragment key={section.id}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer(0.12, 0)}
              style={{
                display: 'grid',
                gridTemplateColumns: '280px 1fr',
                gap: 'clamp(40px, 6vw, 96px)',
                paddingTop: 'var(--sp-72)',
                paddingBottom: 'var(--sp-72)',
                alignItems: 'start',
              }}
            >
              {/* Sticky left label */}
              <motion.div variants={fadeInUp} style={{ position: 'sticky', top: '120px' }}>
                <MonospaceTag className="mb-4">
                  {section.tag.replace('[', '').replace(']', '')}
                </MonospaceTag>
                <h2
                  className="t-heading"
                  style={{ fontSize: 'clamp(36px, 5vw, 65px)', lineHeight: 0.95 }}
                >
                  {section.heading}
                </h2>
              </motion.div>
              {/* Content */}
              <div>
                {section.subheading && (
                  <motion.p
                    variants={fadeInUp}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'var(--text-subheading)',
                      fontWeight: 600,
                      lineHeight: 1.4,
                      marginBottom: '24px',
                    }}
                  >
                    {section.subheading}
                  </motion.p>
                )}
                <motion.p
                  variants={fadeInUp}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-body)',
                    lineHeight: 1.8,
                    color: 'var(--color-press-ink)',
                    opacity: 0.8,
                    marginBottom: section.images?.length ? '40px' : 0,
                    maxWidth: '640px',
                  }}
                >
                  {section.content}
                </motion.p>
                {/* Images */}
                {section.images && section.images.length > 0 && (
                  <motion.div
                    variants={staggerContainer(0.1)}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: section.images.length > 1 ? '1fr 1fr' : '1fr',
                      gap: '16px',
                    }}
                  >
                    {section.images.map((img, imgIdx) => (
                      <motion.div
                        key={imgIdx}
                        variants={scaleIn}
                        style={{
                          aspectRatio: '4/3',
                          borderRadius: 'var(--r-card)',
                          overflow: 'hidden',
                          border: '1px solid var(--color-foil-gray)',
                          background: project.color,
                        }}
                      >
                        <img
                          src={img}
                          alt={`${section.heading} image ${imgIdx + 1}`}
                          loading="lazy"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
            {idx < project.sections.length - 1 && (
              <div style={{ borderTop: '1px solid var(--color-foil-gray)' }} />
            )}
          </Fragment>
        ))}
      </div>
      <SparkleDivider />
      {/* ── NEXT PROJECT ─────────────────────────────────────────────── */}
      <section
        className="page-container"
        style={{ paddingTop: 'var(--sp-72)', paddingBottom: 'var(--sp-144)' }}
      >
        <RevealSection style={{ marginBottom: '32px' } as React.CSSProperties}>
          <MonospaceTag>NEXT PROJECT</MonospaceTag>
        </RevealSection>
        <Link
          to={`/project/${nextProject.slug}`}
          style={{ display: 'block', textDecoration: 'none' }}
        >
          <motion.div
            initial={{ opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            style={{ transition: 'opacity 0.5s ease' }}
          >
            <h2
              className="t-display"
              style={{ transition: 'opacity 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.5'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
            >
              {nextProject.title}
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-subheading)',
                color: 'var(--color-press-ink)',
                opacity: 0.5,
                marginTop: '16px',
              }}
            >
              {nextProject.subtitle} →
            </p>
          </motion.div>
        </Link>
      </section>
    </Layout>
  );
}
