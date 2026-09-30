import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { influencersFallback } from '../data/siteContent';
import useApiContent from '../hooks/useApiContent';

// lucide-react's brand icon set (Instagram, etc.) was removed upstream —
// InstagramCTA.jsx works around this the same way, with a small inline glyph.
function InstagramGlyph(props) {
  return (
    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ProfileMeta({ p, size = 'md' }) {
  const avatar = size === 'lg' ? 'h-20 w-20 text-2xl' : 'h-16 w-16 text-xl';
  return (
    <div className="flex items-center gap-4">
      {p.photo?.url ? (
        <img
          src={p.photo.url}
          alt={p.name}
          className={`${avatar} shrink-0 rounded-full object-cover`}
          loading="lazy"
        />
      ) : (
        <div
          className={`flex ${avatar} shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-marigold to-magenta font-display text-ink`}
        >
          {p.name?.[0]}
        </div>
      )}
      <div className="min-w-0">
        <h3 className="truncate font-display text-xl uppercase text-bone">{p.name}</h3>
        {p.role && <p className="truncate text-xs font-semibold text-flare">{p.role}</p>}
        {(p.handle || p.followers) && (
          <p className="mt-0.5 flex items-center gap-1 truncate text-xs text-fog">
            {p.handle && (
              <span className="inline-flex items-center gap-1">
                <InstagramGlyph /> {p.handle}
              </span>
            )}
            {p.handle && p.followers && <span>&middot;</span>}
            {p.followers}
          </p>
        )}
      </div>
    </div>
  );
}

// Full-bio lightbox — opened from a card's "Read more". Keeps the carousel
// cards themselves short and uniform while still making the complete bio
// available, rather than cutting it off with no way to read the rest.
function ProfileModal({ person, onClose }) {
  useEffect(() => {
    if (!person) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [person, onClose]);

  if (!person) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-panel-line bg-panel p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={person.name}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="focus-flare absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-panel-line text-fog transition-colors hover:border-flare hover:text-flare"
        >
          <X size={16} />
        </button>

        <ProfileMeta p={person} size="lg" />

        {person.bio && (
          <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-fog">{person.bio}</p>
        )}
      </div>
    </div>
  );
}

// "Our Core & Key Influencers" — from the BCS 2026 sponsor deck. Rendered as
// a single fixed-height, horizontally swipeable/scroll-snapped carousel
// (drag on desktop, native touch-scroll on mobile, arrow buttons + dot nav)
// instead of a tall stacked list, so the section stays compact no matter how
// many profiles the admin panel adds. Bios are truncated on the card with a
// "Read more" that opens the full text in a lightbox, so nothing is lost.
// Content is admin-manageable via the "Key Influencers" resource (name,
// role, handle, followers, bio, photo).
export default function KeyInfluencers2026() {
  const { data } = useApiContent('/influencers', influencersFallback);
  const list = data?.length ? data : influencersFallback;

  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(null);
  // Carousel controls are only useful when the cards overflow the track.
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    const check = () => setOverflowing(track.scrollWidth > track.clientWidth + 4);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(track);
    window.addEventListener('resize', check);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', check);
    };
  }, [list.length]);

  const scrollToIndex = (i) => {
    const track = trackRef.current;
    const card = track?.children[i];
    if (track && card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    }
    setActive(i);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    let closest = 0;
    let min = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const d = Math.abs(child.offsetLeft - track.offsetLeft - track.scrollLeft);
      if (d < min) {
        min = d;
        closest = i;
      }
    });
    setActive(closest);
  };

  return (
    <section id="key-influencers" className="bg-charcoal px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-flare">
              Bhopal Creator Summit 2026
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
              <span className="text-bone">Our Core &amp; </span>
              <span className="bg-gradient-to-r from-marigold via-flare to-magenta bg-clip-text text-transparent">
                Key Influencers
              </span>
            </h2>
          </div>

        </div>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {list.map((p, i) => {
            // Rough heuristic for whether the bio actually overflows 6 lines,
            // so "Read more" only shows up when it's needed.
            const isLong = (p.bio?.length ?? 0) > 260;
            return (
              <article
                key={p.name ?? i}
                className="flex w-[86%] shrink-0 snap-center flex-col rounded-2xl border border-panel-line bg-panel p-6 sm:w-[47%] lg:w-[31.5%]"
              >
                <ProfileMeta p={p} />

                {p.bio && (
                  <>
                    <p className="mt-4 line-clamp-6 text-sm leading-relaxed text-fog">{p.bio}</p>
                    {isLong && (
                      <button
                        type="button"
                        onClick={() => setExpanded(p)}
                        className="focus-flare mt-3 inline-flex min-h-[44px] items-center gap-1.5 self-start rounded-full border border-flare/40 px-4 py-2 text-xs font-bold uppercase tracking-wide text-flare transition-colors hover:border-flare hover:bg-flare/10 hover:text-flare-hot"
                      >
                        Read more
                        <ArrowRight size={14} aria-hidden />
                      </button>
                    )}
                  </>
                )}
              </article>
            );
          })}
        </div>

        {overflowing && (
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollToIndex(Math.max(0, active - 1))}
            disabled={active === 0}
            aria-label="Previous influencer"
            className="focus-flare flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bone text-ink shadow-lg shadow-black/40 transition-colors hover:bg-flare disabled:opacity-30"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="flex flex-wrap items-center justify-center">
            {list.map((p, i) => (
              <button
                key={p.name ?? i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to ${p.name}`}
                aria-current={i === active ? 'true' : undefined}
                className="focus-flare group flex h-6 items-center justify-center px-1"
              >
                <span
                  className={`block h-2.5 rounded-full transition-all group-hover:bg-flare ${
                    i === active ? 'w-7 bg-flare' : 'w-2.5 bg-fog/60'
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToIndex(Math.min(list.length - 1, active + 1))}
            disabled={active === list.length - 1}
            aria-label="Next influencer"
            className="focus-flare flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bone text-ink shadow-lg shadow-black/40 transition-colors hover:bg-flare disabled:opacity-30"
          >
            <ArrowRight size={18} />
          </button>
        </div>
        )}
      </div>

      <ProfileModal person={expanded} onClose={() => setExpanded(null)} />
    </section>
  );
}