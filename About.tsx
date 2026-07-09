import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { MonospaceTag, SparkleDivider, RevealSection } from '../components/Typography';
import { personalInfo } from '../data/projects';
import { staggerContainer, fadeInUp, EASE_OUT_EXPO } from '../lib/animations';
export function About() {
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
            <MonospaceTag>03-N ABOUT</MonospaceTag>
          </motion.div>
          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              className="t-display"
              variants={{
                hidden: { y: '100%' },
                visible: { y: 0, transition: { duration: 1, ease: EASE_OUT_EXPO } },
              }}
            >
              ABOUT
            </motion.h1>
          </div>
        </motion.div>
      </section>
      <div
        className="page-container"
        style={{ borderTop: '1px solid var(--color-foil-gray)', marginBottom: 'var(--sp-72)' }}
      />
      {/* Bio */}
      <section
        className="page-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 6vw, 96px)',
          paddingBottom: 'var(--sp-72)',
          alignItems: 'start',
        }}
      >
        <RevealSection>
          <h2
            className="t-heading"
            style={{ fontSize: 'clamp(36px, 5vw, 65px)', lineHeight: 0.95, marginBottom: '40px' }}
          >
            {personalInfo.name}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-subheading)',
              lineHeight: 1.7,
              color: 'var(--color-press-ink)',
              opacity: 0.7,
            }}
          >
            {personalInfo.bio}
          </p>
        </RevealSection>
        <RevealSection delay={0.15}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--color-mute-gray)',
              marginBottom: '16px',
            }}
          >
            ROLE
          </div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-body)',
              fontWeight: 500,
              marginBottom: '40px',
            }}
          >
            {personalInfo.role}
          </p>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--color-mute-gray)',
              marginBottom: '16px',
            }}
          >
            LOCATION
          </div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-body)',
              fontWeight: 500,
              marginBottom: '40px',
            }}
          >
            {personalInfo.location}
          </p>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--color-mute-gray)',
              marginBottom: '16px',
            }}
          >
            CONTACT
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
        </RevealSection>
      </section>
      <SparkleDivider />
      {/* Education */}
      <section className="page-container" style={{ paddingBottom: 'var(--sp-72)' }}>
        <RevealSection style={{ marginBottom: '40px' } as React.CSSProperties}>
          <MonospaceTag>EDUCATION</MonospaceTag>
        </RevealSection>
        {personalInfo.education.map((edu, i) => (
          <RevealSection key={i} delay={i * 0.1}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '24px',
                padding: '32px 0',
                borderBottom: '1px solid var(--color-foil-gray)',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-heading-sm)',
                    fontWeight: 600,
                    marginBottom: '8px',
                  }}
                >
                  {edu.institution}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-body)',
                    color: 'var(--color-press-ink)',
                    opacity: 0.6,
                  }}
                >
                  {edu.degree}
                </p>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.06em',
                  color: 'var(--color-mute-gray)',
                  textTransform: 'uppercase',
                  alignSelf: 'center',
                }}
              >
                {edu.year}
              </span>
            </div>
          </RevealSection>
        ))}
      </section>
      <SparkleDivider />
      {/* Experience */}
      <section className="page-container" style={{ paddingBottom: 'var(--sp-144)' }}>
        <RevealSection style={{ marginBottom: '40px' } as React.CSSProperties}>
          <MonospaceTag>EXPERIENCE</MonospaceTag>
        </RevealSection>
        {personalInfo.experience.map((exp, i) => (
          <RevealSection key={i} delay={i * 0.1}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '24px',
                padding: '32px 0',
                borderBottom: '1px solid var(--color-foil-gray)',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-heading-sm)',
                    fontWeight: 600,
                    marginBottom: '4px',
                  }}
                >
                  {exp.role}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--color-mute-gray)',
                    marginBottom: '16px',
                  }}
                >
                  {exp.company}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-body)',
                    color: 'var(--color-press-ink)',
                    opacity: 0.6,
                    maxWidth: '500px',
                    lineHeight: 1.6,
                  }}
                >
                  {exp.description}
                </p>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.06em',
                  color: 'var(--color-mute-gray)',
                  textTransform: 'uppercase',
                  alignSelf: 'flex-start',
                  paddingTop: '4px',
                }}
              >
                {exp.period}
              </span>
            </div>
          </RevealSection>
        ))}
      </section>
    </Layout>
  );
}
