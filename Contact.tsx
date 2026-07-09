import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { MonospaceTag, SparkleDivider, RevealSection } from '../components/Typography';
import { personalInfo } from '../data/projects';
import { staggerContainer, fadeInUp, EASE_OUT_EXPO } from '../lib/animations';
export function Contact() {
  return (
    <Layout>
      {/* Header */}
      <section className="page-container" style={{ paddingBottom: 'var(--sp-72)' }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.1, 0.05)}
        >
          <motion.div variants={fadeInUp} style={{ marginBottom: '24px' }}>
            <MonospaceTag>05-N CONTACT</MonospaceTag>
          </motion.div>
          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              className="t-display"
              variants={{
                hidden: { y: '100%' },
                visible: { y: 0, transition: { duration: 1, ease: EASE_OUT_EXPO } },
              }}
            >
              SAY<br />HELLO
            </motion.h1>
          </div>
        </motion.div>
      </section>
      <div
        className="page-container"
        style={{ borderTop: '1px solid var(--color-foil-gray)', marginBottom: 'var(--sp-72)' }}
      />
      <section
        className="page-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 6vw, 96px)',
          paddingBottom: 'var(--sp-144)',
          alignItems: 'start',
        }}
      >
        <RevealSection>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-subheading)',
              lineHeight: 1.7,
              color: 'var(--color-press-ink)',
              opacity: 0.7,
              maxWidth: '500px',
            }}
          >
            Whether you have a project in mind, a question about my work, or just want to start a conversation — my inbox is always open.
          </p>
        </RevealSection>
        <RevealSection delay={0.15}>
          <div style={{ marginBottom: '40px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--color-mute-gray)',
                marginBottom: '12px',
              }}
            >
              EMAIL
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-heading-sm)',
                fontWeight: 600,
                textDecoration: 'underline',
                textUnderlineOffset: '6px',
                color: 'var(--color-press-ink)',
                transition: 'opacity 0.3s',
                display: 'block',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.5'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
            >
              {personalInfo.email}
            </a>
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--color-mute-gray)',
                marginBottom: '12px',
              }}
            >
              LOCATION
            </div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-heading-sm)',
                fontWeight: 500,
              }}
            >
              {personalInfo.location}
            </p>
          </div>
        </RevealSection>
      </section>
      <SparkleDivider />
    </Layout>
  );
}
