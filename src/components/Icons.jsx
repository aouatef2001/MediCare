export const Icon = ({ children, size = 24, stroke = 1.6, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    {children}
  </svg>
);
export const I = {
  calendar: (p) => <Icon {...p}><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M8 3v4M16 3v4" /></Icon>,
  arrow: (p) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>,
  heart: (p) => <Icon {...p}><path d="M12 20s-8-5-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15 12 20 12 20z" /></Icon>,
  pulse: (p) => <Icon {...p}><path d="M12 20s-8-5-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15 12 20 12 20z" /><path d="M6 12h3l1.5-3 2 5 1.5-2h3" /></Icon>,
  tooth: (p) => <Icon {...p}><path d="M7 4c-2.5 0-4 2-4 4.5 0 3 1.5 4.5 2 7.5.4 2.5 1 4 2 4s1.5-4 3-4h4c1.5 0 2 4 3 4s1.6-1.5 2-4c.5-3 2-4.5 2-7.5C21 6 19.5 4 17 4c-2 0-3 1-5 1S9 4 7 4z" /></Icon>,
  face: (p) => <Icon {...p}><circle cx="12" cy="12" r="8" /><path d="M9 10h.01M15 10h.01M9 14c2 2 4 2 6 0" /></Icon>,
  child: (p) => <Icon {...p}><circle cx="12" cy="9" r="5" /><path d="M5 21c0-4 3-6 7-6s7 2 7 6M10 8h.01M14 8h.01" /></Icon>,
  shield: (p) => <Icon {...p}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></Icon>,
  user: (p) => <Icon {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.5 3.5-7 8-7s8 2.5 8 7" /></Icon>,
  steth: (p) => <Icon {...p}><path d="M6 3v6a4 4 0 0 0 8 0V3M10 13v3a4 4 0 0 0 8 0v-2" /><circle cx="18" cy="12" r="2" /></Icon>,
  people: (p) => <Icon {...p}><circle cx="12" cy="8" r="3" /><circle cx="5" cy="10" r="2" /><circle cx="19" cy="10" r="2" /><path d="M7 20c0-3 2-5 5-5s5 2 5 5M1 19c0-2 1.5-3.5 4-3.5M23 19c0-2-1.5-3.5-4-3.5" /></Icon>,
  headset: (p) => <Icon {...p}><path d="M4 15v-3a8 8 0 0 1 16 0v3" /><rect x="3" y="14" width="4" height="6" rx="1.5" /><rect x="17" y="14" width="4" height="6" rx="1.5" /></Icon>,
  moon: (p) => <Icon {...p}><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" /></Icon>,
  sun: (p) => <Icon {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></Icon>,
  chevron: (p) => <Icon {...p}><path d="M6 9l6 6 6-6" /></Icon>,
  menu: (p) => <Icon {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Icon>,
  check: (p) => <Icon {...p}><path d="M5 12l5 5 9-10" /></Icon>,
};