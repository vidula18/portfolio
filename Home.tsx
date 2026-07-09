import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import {
  SparkleDivider,
  MonospaceTag,
  HandwrittenAnnotation,
  RevealSection,
} from '../components/Typography';
import { ProjectCarousel } from '../components/ProjectCarousel';
import { projects, personalInfo } from '../data/projects';
import { Link } from 'react-router-dom';
import { staggerContainer, fadeInUp, viewportOnce, EASE_OUT_EXPO } from '../lib/animations';
export function Home() {
  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: 'calc(90vh - 120px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: 'var(--sp-72)',
          paddingTop: 'var(--sp-72)',
        }}
      >
        <div className="page-container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.12, 0.1)}
          >
            {/* Tag */}
            <motion.div variants={fadeInUp} style={{ marginBottom: '32px' }}>
              <MonospaceTag>01-N INTRODUCTION</MonospaceTag>
            </motion.div>
            {/* Display headline */}
            <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
              <motion.div
                variants={{
                  hidden: { y: '100%' },
                  visible: { y: 0, transition: { duration: 1, ease: EASE_OUT_EXPO } },
                }}
              >
                <DisplayHeadline as="h1">Vidula</DisplayHeadline>
              </motion.div>
            </div>
            <div style={{ overflow: 'hidden', position: 'relative', marginBottom: '64px' }}>
              <motion.div
                variants={{
                  hidden: { y: '100%' },
                  visible: { y: 0, transition: { duration: 1, ease: EASE_OUT_EXPO, delay: 0.08 } },
                }}
                style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}
              >
                <DisplayHeadline as="div">Srivatsa</DisplayHeadline>
                <motion.div
                  initial={{ opacity: 0, rotate: -8 }}
                  animate={{ opacity: 1, rotate: -4 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <HandwrittenAnnotation>designer</HandwrittenAnnotation>
                </motion.div>
              </motion.div>
            </div>
            {/* Bio + location row */}
            <motion.div
              variants={fadeInUp}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '40px',
                alignItems: 'end',
                maxWidth: '900px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-subheading)',
                  lineHeight: 1.5,
                  color: 'var(--color-press-ink)',
                  opacity: 0.7,
                }}
              >
                {personalInfo.bio}
              </p>
              <div style={{ textAlign: 'right' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-caption)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--color-mute-gray)',
                    marginBottom: '8px',
                  }}
                >
                  Based in {personalInfo.location}
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 500,
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                    color: 'var(--color-press-ink)',
                  }}
                >
                  {personalInfo.email}
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* ── SPARKLE ──────────────────────────────────────────────────── */}
      <div className="page-container">
        <div
          style={{
            borderTop: '1px solid var(--color-foil-gray)',
            marginBottom: 'var(--sp-72)',
          }}
        />
      </div>
      {/* ── SELECTED WORK CAROUSEL ────────────────────────────────────── */}
      <ProjectCarousel projects={projects} />
      <SparkleDivider />
      {/* ── MANIFESTO / ABOUT ─────────────────────────────────────────── */}
      <section className="page-container" style={{ paddingTop: 'var(--sp-72)', paddingBottom: 'var(--sp-72)' }}>
        <RevealSection style={{ marginBottom: '40px' } as React.CSSProperties}>
          <MonospaceTag>03-N ABOUT</MonospaceTag>
        </RevealSection>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(40px, 6vw, 96px)',
            alignItems: 'center',
          }}
        >
          <div>
            <RevealSection>
              <div style={{ overflow: 'hidden' }}>
                <div className="t-heading" style={{ fontSize: 'clamp(44px, 6vw, 80px)' }}>
                  THOUGHTFUL<br />DESIGN
                </div>
              </div>
            </RevealSection>
          </div>
          <RevealSection delay={0.15}>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-subheading)',
                lineHeight: 1.7,
                color: 'var(--color-press-ink)',
                opacity: 0.75,
                marginBottom: '32px',
              }}
            >
              {personalInfo.bio}
            </p>
            <Link
              to="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-caption)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '12px 24px',
                border: '1px solid var(--color-press-ink)',
                borderRadius: '100px',
                color: 'var(--color-press-ink)',
                transition: 'background 0.3s, color 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'var(--color-press-ink)';
                (e.currentTarget as HTMLElement).style.color = 'white';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.color = 'var(--color-press-ink)';
              }}
            >
              Full biography →
            </Link>
          </RevealSection>
        </div>
      </section>
      <SparkleDivider />
      {/* ── SKILLS ────────────────────────────────────────────────────── */}
      <section className="page-container" style={{ paddingBottom: 'var(--sp-72)' }}>
        <RevealSection style={{ marginBottom: '48px' } as React.CSSProperties}>
          <MonospaceTag>04-N EXPERTISE</MonospaceTag>
        </RevealSection>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.05, 0)}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}
        >
          {personalInfo.skills.map(skill => (
            <motion.div key={skill} variants={fadeInUp}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--text-body)',
                  fontWeight: 500,
                  padding: '10px 24px',
                  border: '1px solid var(--color-press-ink)',
                  borderRadius: '100px',
                  cursor: 'default',
                  transition: 'background 0.3s, color 0.3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--color-press-ink)';
                  (e.currentTarget as HTMLElement).style.color = 'white';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = 'var(--color-press-ink)';
                }}
              >
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <SparkleDivider />
      {/* ── CONTACT CTA ───────────────────────────────────────────────── */}
      <section
        className="page-container"
        style={{
          paddingTop: 'var(--sp-72)',
          paddingBottom: 'var(--sp-144)',
          textAlign: 'center',
        }}
      >
        <RevealSection style={{ marginBottom: '24px' } as React.CSSProperties}>
          <MonospaceTag>05-N CONTACT</MonospaceTag>
        </RevealSection>
        <RevealSection delay={0.1}>
          <a
            href={`mailto:${personalInfo.email}`}
            style={{ display: 'block', textDecoration: 'none' }}
          >
            <div
              className="t-heading"
              style={{
                fontSize: 'clamp(36px, 6vw, 80px)',
                transition: 'opacity 0.3s',
                lineHeight: 1.1,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.5'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
            >
              SAY HELLO
            </div>
          </a>
        </RevealSection>
        <RevealSection delay={0.2}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-caption)',
              color: 'var(--color-mute-gray)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginTop: '24px',
            }}
          >
            {personalInfo.email}
          </p>
        </RevealSection>
      </section>
    </Layout>
  );
}
