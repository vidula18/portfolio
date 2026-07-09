import type { ReactNode, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { textReveal, fadeInUp, viewportOnce } from '../lib/animations';
// ─── DISPLAY HEADLINE ────────────────────────────────────────────────────────
interface HeadlineProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'div';
  animate?: boolean;
}
export function DisplayHeadline({ children, className = '', as: Tag = 'h1', animate = false }: HeadlineProps) {
  if (animate) {
    return (
      <div className="overflow-hidden">
        <motion.div
          className={`t-display ${className}`}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={textReveal}
        >
          {/* @ts-ignore */}
          <Tag style={{ display: 'inherit' }}>{children}</Tag>
        </motion.div>
      </div>
    );
  }
  // @ts-ignore
  return <Tag className={`t-display ${className}`}>{children}</Tag>;
}
// ─── SECTION HEADING ─────────────────────────────────────────────────────────
export function SectionHeading({ children, className = '', as: Tag = 'h2' }: HeadlineProps) {
  // @ts-ignore
  return <Tag className={`t-heading ${className}`}>{children}</Tag>;
}
// ─── MONOSPACE TAG ────────────────────────────────────────────────────────────
interface MonoTagProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}
export function MonospaceTag({ children, className = '', style }: MonoTagProps) {
  return (
    <span className={`t-caption block ${className}`} style={{ color: 'var(--color-press-ink)', ...style }}>
      [{children}]
    </span>
  );
}
// ─── BODY MANIFESTO ───────────────────────────────────────────────────────────
export function BodyManifesto({ children, className = '', centered = true }: { children: ReactNode; className?: string; centered?: boolean }) {
  return (
    <p className={`t-body ${centered ? 'text-center mx-auto' : ''} ${className}`} style={{ maxWidth: '680px' }}>
      {children}
    </p>
  );
}
// ─── SPARKLE DIVIDER ─────────────────────────────────────────────────────────
export function SparkleDivider({ count = 5 }: { count?: number }) {
  return (
    <div className="sparkle-divider">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 1L14.39 8.26L22 12L14.39 15.74L12 23L9.61 15.74L2 12L9.61 8.26L12 1Z" />
        </svg>
      ))}
    </div>
  );
}
// ─── HANDWRITTEN ANNOTATION ───────────────────────────────────────────────────
export function HandwrittenAnnotation({ children }: { children: ReactNode }) {
  return <span className="annotation">{children}</span>;
}
// ─── TAG CHIP ─────────────────────────────────────────────────────────────────
export function TagChip({ children }: { children: ReactNode }) {
  return <span className="tag-chip">{children}</span>;
}
// ─── SECTION REVEAL WRAPPER ───────────────────────────────────────────────────
export function RevealSection({
  children,
  className = '',
  delay = 0,
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: fadeInUp.hidden,
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
