import { MonospaceTag } from './Typography';
import { personalInfo } from '../data/projects';
export function Footer() {
  return (
    <footer className="footer">
      <div className="page-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          {/* Left — wordmark */}
          <div style={{ fontSize: 'var(--text-caption)', fontFamily: 'var(--font-sans)', lineHeight: 1.5 }}>
            <div>{personalInfo.name} /</div>
            <div>We share /</div>
            <div>Our pleasure</div>
          </div>
          {/* Center — tag */}
          <MonospaceTag>PORTFOLIO</MonospaceTag>
          {/* Right — copyright + links */}
          <div
            style={{
              textAlign: 'right',
              fontSize: 'var(--text-caption)',
              fontFamily: 'var(--font-mono)',
              lineHeight: 2,
            }}
          >
            <div>© {new Date().getFullYear()} India</div>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{ color: 'var(--color-press-ink)', textDecoration: 'none' }}
            >
              {personalInfo.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
