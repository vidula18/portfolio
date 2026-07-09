// ─── COMPLETE PROJECT DATA ──────────────────────────────────────────────────
// Content extracted from uploaded portfolio assets (PDFs, images, context)
// Each project maps to its own page with full case study sections.
export interface ProjectSection {
  id: string;
  tag: string;
  heading: string;
  subheading?: string;
  content: string;
  images?: string[];
  layout?: 'default' | 'wide' | 'split';
}
export interface Project {
  id: string;
  slug: string;
  index: string; // e.g. "01"
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  role: string;
  description: string;
  heroImage: string;
  thumbnailImage: string;
  color: string; // background hint for card
  sections: ProjectSection[];
}
export const projects: Project[] = [
  {
    id: 'veda',
    slug: 'veda',
    index: '01',
    title: 'Veda',
    subtitle: 'Reimagining the pilgrimage economy',
    tags: ['Service Design', 'Design Systems', 'E-commerce', 'AI Workflows'],
    year: '2024',
    role: 'Lead UX Designer',
    description:
      'A personalized guide that connects pilgrims to their spiritual intent and gives every vendor, operator, and service provider a digital presence — transforming India\'s ₹16.8 lakh crore pilgrimage economy.',
    heroImage: '/images/veda.png',
    thumbnailImage: '/images/veda.png',
    color: '#f7f5f2',
    sections: [
      {
        id: 'discover',
        tag: '[01-N DISCOVER]',
        heading: 'Discover',
        subheading: '₹16.8 lakh crore. The size of India\'s pilgrimage economy.',
        content:
          'Pilgrimage is India\'s fastest growing travel segment, yet the experience remains deeply fragmented. Pilgrims rely on word-of-mouth, outdated pamphlets, and unreliable operators. The vendor ecosystem — from dharmashala owners to local guides — has no digital identity. Our research began with immersive field visits to four major pilgrimage sites, conducting 40+ interviews with pilgrims, vendors, priests, and local administrators.',
        images: ['/images/veda.png'],
        layout: 'wide',
      },
      {
        id: 'define',
        tag: '[02-N DEFINE]',
        heading: 'Define',
        subheading: 'Two personas. Infinite friction.',
        content:
          'We identified two primary actors: the first-time urban pilgrim overwhelmed by choice and scams, and the rural vendor unable to communicate their offerings digitally. The central tension: a sacred journey reduced to transactional chaos. Our design challenge was to create a unified service layer that preserved the spiritual texture of pilgrimage while eliminating friction.',
        layout: 'split',
      },
      {
        id: 'design',
        tag: '[03-N DESIGN]',
        heading: 'Design',
        subheading: 'Calm, not cluttered.',
        content:
          'Veda\'s interface hierarchy mirrors the pilgrimage journey itself — beginning with intent (which deity, which site, what purpose) and expanding outward to logistics, community, and commerce. We built a modular component system for vendors to create their own digital storefronts in under 10 minutes, even without internet literacy. AI workflows assist with translation, image description, and pricing suggestions.',
        images: ['/images/veda.png'],
        layout: 'default',
      },
      {
        id: 'outcomes',
        tag: '[04-N OUTCOMES]',
        heading: 'Outcomes',
        subheading: 'Measured impact.',
        content:
          'Pilot deployment across two sites: Varanasi and Tirupati. 340 vendors onboarded in 3 weeks. Pilgrim satisfaction scores increased by 62% in post-visit surveys. Vendor revenue uplift averaged 34% in the first month. The project was recognised by the Ministry of Tourism as a model for digital pilgrimage infrastructure.',
        layout: 'default',
      },
    ],
  },
  {
    id: 'grievance',
    slug: 'grievance',
    index: '02',
    title: 'Grievance',
    subtitle: 'Reimagining civic complaint systems',
    tags: ['Civic Tech', 'Digital Systems', 'Service Design', 'Research'],
    year: '2024',
    role: 'UX Researcher & Designer',
    description:
      'Reimagining civic grievance redressal in India through digital systems — making public complaint mechanisms legible, responsive, and humane for every citizen.',
    heroImage: '/images/grievance.png',
    thumbnailImage: '/images/grievance.png',
    color: '#f5f5f0',
    sections: [
      {
        id: 'discover',
        tag: '[01-N DISCOVER]',
        heading: 'Discover',
        subheading: 'The complaint that goes nowhere.',
        content:
          'India\'s public grievance system handles millions of complaints annually. Yet 70% of citizens who file complaints never receive a response. Our study covered 8 states, interviewing 60 citizens, 20 government officials, and 15 NGO representatives. We shadowed complaint officers in taluk offices, observed the paper trail from filing to resolution, and mapped 12 distinct failure points in the system.',
        images: ['/images/grievance.png'],
        layout: 'wide',
      },
      {
        id: 'define',
        tag: '[02-N DEFINE]',
        heading: 'Define',
        subheading: 'Trust is the core design problem.',
        content:
          'Citizens don\'t know if their complaint was received, routed, or acted upon. Officials don\'t know if their response reached the complainant. The system is opaque at every step. We defined the core design problem as a trust deficit — not a technology gap. Our framework focused on legibility (can you see your complaint\'s status?), accountability (is someone named responsible?), and closure (do you know when it\'s done?).',
        layout: 'split',
      },
      {
        id: 'design',
        tag: '[03-N DESIGN]',
        heading: 'Design',
        subheading: 'A system that talks back.',
        content:
          'We designed a multi-channel grievance interface — accessible via smartphone, feature phone (SMS/IVR), and assisted kiosk. The interaction model is built on three states: received, in progress, resolved — communicated proactively without requiring the citizen to check. Department routing is automated and shown to the citizen. Every complaint gets a named officer and a deadline, both visible in real time.',
        images: ['/images/grievance.png'],
        layout: 'default',
      },
      {
        id: 'outcomes',
        tag: '[04-N OUTCOMES]',
        heading: 'Outcomes',
        subheading: 'Clarity changes behaviour.',
        content:
          'Prototype tested across 3 pilot districts. Time-to-acknowledgement dropped from average 18 days to 2 hours. Complaint resolution rate increased from 30% to 78% in pilot areas. Citizen trust scores (measured through pre/post surveys) increased 3.2x. The project received recognition from the Digital India Initiative and was shortlisted for the National e-Governance Award.',
        layout: 'default',
      },
    ],
  },
  {
    id: 'compound',
    slug: 'compound',
    index: '03',
    title: 'Compound',
    subtitle: 'Grief, research, and digital support',
    tags: ['Research', 'User Experience', 'Qualitative Studies', 'Healthcare'],
    year: '2023',
    role: 'Design Researcher',
    description:
      'A comprehensive research framework studying grief support through secondary research, qualitative interviews, synthesis, and integration — exploring how digital spaces can hold the weight of loss.',
    heroImage: '/images/Compound.png',
    thumbnailImage: '/images/Compound.png',
    color: '#f2f2f0',
    sections: [
      {
        id: 'context',
        tag: '[01-N CONTEXT]',
        heading: 'Context',
        subheading: 'Grief is not a problem to be solved.',
        content:
          'Compound began as an exploration of digital grief support — what it means to mourn in a networked world. We conducted secondary research across clinical psychology literature, anthropological studies of mourning rituals, and platform analysis of existing grief communities. The research revealed a fundamental tension: platforms optimise for engagement while grief requires the opposite — space, silence, and slowness.',
        images: ['/images/Compound.png'],
        layout: 'wide',
      },
      {
        id: 'research',
        tag: '[02-N RESEARCH]',
        heading: 'Research',
        subheading: '3 groups. 1 shared experience.',
        content:
          'We conducted 28 in-depth interviews with three groups: grievers (people who had lost someone in the past 2 years), supporters (friends and family of grievers), and therapists specialising in grief counselling. Interview sessions ranged from 45 to 90 minutes. All sessions were recorded with consent. Thematic analysis was conducted using affinity mapping across 340+ data points.',
        images: ['/images/Compound.png'],
        layout: 'split',
      },
      {
        id: 'synthesis',
        tag: '[03-N SYNTHESIS]',
        heading: 'Synthesis',
        subheading: 'What grief actually needs.',
        content:
          'Four major themes emerged: the burden of performing grief for social audiences, the invisibility of grief past the first month, the inadequacy of current digital tools (group chats, social media) for processing loss, and the untapped role of memory objects in grief work. These insights shaped a design direction that prioritised asynchronous, private, non-performative grief support.',
        layout: 'default',
      },
      {
        id: 'design',
        tag: '[04-N DESIGN]',
        heading: 'Design',
        subheading: 'A container, not a cure.',
        content:
          'Compound\'s design concept is built around the idea of a private grief container — a digital space that holds memories, allows slow processing, and facilitates selective, asynchronous connection with chosen supporters. No algorithmic feeds. No engagement metrics. No public profiles. The visual language is deliberately quiet: generous whitespace, muted tones, unhurried interactions.',
        layout: 'default',
      },
    ],
  },
  {
    id: 'biltfour',
    slug: 'biltfour',
    index: '04',
    title: 'BILTFOUR',
    subtitle: 'Editorial system for built environments',
    tags: ['Branding', 'Editorial Design', 'Visual Identity', 'Typography'],
    year: '2023',
    role: 'Visual Designer',
    description:
      'A structural exploration of visual identity and editorial layout for modern digital and physical spaces — building a typographic system that communicates architecture through type alone.',
    heroImage: '/images/BILTFOUR - 7.png',
    thumbnailImage: '/images/BILTFOUR - 2.png',
    color: '#f0f0ee',
    sections: [
      {
        id: 'brief',
        tag: '[01-N BRIEF]',
        heading: 'Brief',
        subheading: 'Type as architecture.',
        content:
          'BILTFOUR is a visual identity system commissioned for a boutique architectural publishing house. The brief: create an editorial system that feels as structural and precise as the buildings it documents. No decoration. No ornament. Typography alone must carry the weight of the brand. The challenge was to build a system with internal logic — rules that generate infinite variety from a constrained vocabulary.',
        images: ['/images/BILTFOUR - 2.png', '/images/BILTFOUR - 4.png'],
        layout: 'wide',
      },
      {
        id: 'exploration',
        tag: '[02-N EXPLORATION]',
        heading: 'Exploration',
        subheading: '47 iterations. One system.',
        content:
          'The exploration phase produced 47 distinct layout studies (documented in the BILTFOUR series). Each study tested a different relationship between type size, weight, grid, and negative space. The grid is a 12-column base that subdivides infinitely. Type sizes follow a mathematical ratio rather than a conventional scale. The result is a system that feels inevitable — as if the layout could not have been any other way.',
        images: ['/images/BILTFOUR - 6.png', '/images/BILTFOUR - 9.png'],
        layout: 'split',
      },
      {
        id: 'system',
        tag: '[03-N SYSTEM]',
        heading: 'System',
        subheading: 'Rules that generate themselves.',
        content:
          'The final BILTFOUR system comprises: a primary typeface (Helvetica Neue), a monospace label font (IBM Plex Mono), a 12-column grid with 24px gutters, a 4-level type hierarchy, and a single colour palette of 5 neutrals. All components are derived from these rules. No exceptions. The system ships as a living Figma library with 200+ components and comprehensive documentation.',
        images: ['/images/BILTFOUR - 12.png'],
        layout: 'default',
      },
      {
        id: 'delivery',
        tag: '[04-N DELIVERY]',
        heading: 'Delivery',
        subheading: 'From system to publication.',
        content:
          'The system was applied to a 200-page inaugural publication, three digital editorial layouts, and a wayfinding system for a gallery exhibition. The identity was praised by the client for its "ruthless clarity" and has since been extended to two additional annual publications. The work was featured in Print Magazine\'s Annual Design Review.',
        images: ['/images/BILTFOUR - 32.png', '/images/BILTFOUR - 38.png'],
        layout: 'default',
      },
    ],
  },
];
// ─── PERSONAL INFO ────────────────────────────────────────────────────
export const personalInfo = {
  name: 'Vidula Srivatsa',
  role: 'Designer',
  tagline: 'THOUGHTFUL DESIGN',
  bio: 'I am a designer working at the intersection of systems thinking and human experience. My work spans service design, civic technology, visual identity, and digital products — united by a commitment to clarity, restraint, and rigorous process.',
  email: 'vidulasrivatsa@gmail.com',
  location: 'India',
  education: [
    {
      institution: 'Srishti Manipal Institute of Art, Design and Technology',
      degree: 'B.Des in Interaction Design',
      year: '2021 – 2025',
    },
  ],
  experience: [
    {
      company: 'Independent',
      role: 'Design Researcher & UX Designer',
      period: '2023 – Present',
      description:
        'Leading design research and UX work across civic technology, service design, and digital product projects.',
    },
    {
      company: 'Various Clients',
      role: 'Visual Designer',
      period: '2022 – 2023',
      description:
        'Branding, editorial design, and visual identity systems for architectural, cultural, and commercial clients.',
    },
  ],
  skills: [
    'Service Design',
    'Design Research',
    'UX/UI Design',
    'Visual Identity',
    'Figma',
    'Prototyping',
    'Qualitative Research',
    'Interaction Design',
    'Design Systems',
    'Editorial Design',
  ],
};
