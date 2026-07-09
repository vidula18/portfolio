// Work page — grid listing of all projects
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { MonospaceTag, SparkleDivider, TagChip } from '../components/Typography';
import { projects } from '../data/projects';
import { staggerContainer, fadeInUp, EASE_OUT_EXPO } from '../lib/animations';
export function Work() {
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
            <MonospaceTag>02-N WORK</MonospaceTag>
          </motion.div>
          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              className="t-display"
              variants={{
                hidden: { y: '100%' },
                visible: { y: 0, transition: { duration: 1, ease: EASE_OUT_EXPO } },
              }}
            >
              SELECTED<br />WORK
            </motion.h1>
          </div>
        </motion.div>
      </section>
      <div
        className="page-container"
        style={{ borderTop: '1px solid var(--color-foil-gray)', marginBottom: 'var(--sp-72)' }}
      />
      {/* Projects list */}
      <section className="page-container" style={{ paddingBottom: 'var(--sp-144)' }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.15, 0.2)}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Link
                to={`/project/${project.slug}`}
                style={{ display: 'block', textDecoration: 'none' }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr 400px',
                    gap: '40px',
                    alignItems: 'center',
                    padding: '40px 0',
                    borderBottom: '1px solid var(--color-foil-gray)',
                    transition: 'opacity 0.3s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.opacity = '0.5';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.opacity = '1';
                  }}
                >
                  {/* Index */}
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '0.06em',
                      color: 'var(--color-mute-gray)',
                    }}
                  >
                    {project.index}
                  </span>
                  {/* Title + subtitle */}
                  <div>
                    <h2
                      className="t-heading"
                      style={{ fontSize: 'clamp(32px, 4vw, 56px)', marginBottom: '8px' }}
                    >
                      {project.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 'var(--text-body)',
                        color: 'var(--color-press-ink)',
                        opacity: 0.55,
                      }}
                    >
                      {project.subtitle}
                    </p>
                  </div>
                  {/* Tags + year */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      gap: '12px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        letterSpacing: '0.06em',
                        color: 'var(--color-mute-gray)',
                      }}
                    >
                      {project.year}
                    </span>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                      {project.tags.slice(0, 2).map(tag => (
                        <TagChip key={tag}>{tag}</TagChip>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <SparkleDivider />
    </Layout>
  );
}
