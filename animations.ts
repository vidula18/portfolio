// ─── ANIMATION VARIANTS ─────────────────────────────────────────────────────
// Shared framer-motion variants used across the site.
// Import and spread into motion components.
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;
// Fade in from below — used for hero text, section intros
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: EASE_OUT_EXPO,
    },
  },
};
// Fade in — used for images, cards
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: EASE_OUT_EXPO,
    },
  },
};
// Scale in — used for hero images
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: EASE_OUT_EXPO,
    },
  },
};
// Stagger container — apply to parent of staggered children
export const staggerContainer = (stagger = 0.1, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});
// Reveal text line-by-line
export const textReveal = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: EASE_OUT_EXPO,
    },
  },
};
// Slide in from left
export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASE_OUT_EXPO,
    },
  },
};
// Slide in from right
export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASE_OUT_EXPO,
    },
  },
};
// Page transition wrapper
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: {
    duration: 0.5,
    ease: EASE_OUT_EXPO,
  },
};
// Viewport options for scroll-triggered animations
export const viewportOnce = {
  once: true,
  margin: '-100px',
};
