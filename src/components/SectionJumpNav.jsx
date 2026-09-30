import { useEffect, useState } from 'react';
import { List, X } from 'lucide-react';

// The 2026 homepage is a long single page, so this floating "Jump to" menu
// lets visitors skip straight to any section (with the current section
// highlighted) instead of scrolling through every grid of cards.
const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'season', label: 'Season' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'competitions-2026', label: 'Competitions' },
  { id: 'activities-2026', label: 'Activities' },
  { id: 'workshops-2026', label: 'Workshops' },
  { id: 'community', label: 'Community' },
  { id: 'key-influencers', label: 'Influencers' },
  { id: 'finale', label: 'Grand Finale' },
  { id: 'awards', label: 'Awards' },
  { id: 'journey', label: 'Our Journey' },
  { id: 'coming-soon-2026', label: 'Coming Soon' },
];

export default function SectionJumpNav() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [available, setAvailable] = useState(SECTIONS);

  // Only list sections that actually rendered (some return null when empty).
  useEffect(() => {
    const t = setTimeout(() => {
      setAvailable(SECTIONS.filter((s) => document.getElementById(s.id)));
    }, 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const els = available.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!els.length) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [available]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <div className="fixed bottom-5 left-5 z-40 sm:bottom-7 sm:left-7">
      {open && (
        <nav
          aria-label="Jump to section"
          className="mb-3 max-h-[60vh] w-56 overflow-y-auto rounded-2xl border border-panel-line bg-panel/95 p-2 shadow-xl shadow-ink/40 backdrop-blur-md"
        >
          {available.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => jump(s.id)}
              aria-current={activeId === s.id ? 'true' : undefined}
              className={`focus-flare block w-full rounded-lg px-3 py-2 text-left text-sm font-semibold transition-colors hover:bg-charcoal hover:text-flare ${
                activeId === s.id ? 'bg-charcoal text-flare' : 'text-bone'
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close section menu' : 'Jump to section'}
        className="focus-flare flex items-center gap-2 rounded-full border border-panel-line bg-panel/95 px-5 py-3 text-sm font-bold tracking-wide text-bone shadow-lg shadow-ink/40 backdrop-blur-md transition-colors hover:border-flare hover:text-flare"
      >
        {open ? <X size={17} /> : <List size={17} />}
        Jump to
      </button>
    </div>
  );
}