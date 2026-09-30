import { useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Bike,
  Music2,
  Paintbrush2,
  Sparkles,
  Trophy,
  Mic2,
  Mic,
  Dumbbell,
  TreePine,
  Shirt,
  Footprints,
  HeartHandshake,
  TrafficCone,
  Camera,
  PartyPopper,
} from 'lucide-react';
import { activities2026 as fallbackActivities2026 } from '../data/siteContent';
import useApiContent from '../hooks/useApiContent';

// Sliding card carousel — same treatment as the Competitions section above it
// (scroll-snapped track, arrow buttons on desktop, native swipe on mobile,
// identical card widths/gap so the two sections line up). Each card has a real
// image slot so a photo uploaded from the admin panel shows up. A marigold
// eyebrow keeps it visually distinct from Competitions (flare/orange).
const iconBySlug = {
  'bike-rally': Bike,
  jamming: Music2,
  'painting-competition-wall-art': Paintbrush2,
  'cleanliness-drive': Sparkles,
  sports: Trophy,
  shayari: Mic2,
  'rap-battle': Mic,
  fitness: Dumbbell,
  'plantation-drive': TreePine,
  fashion: Shirt,
  'gen-run': Footprints,
  'well-being': HeartHandshake,
  'traffic-police': TrafficCone,
  singing: Mic2,
  photowalk: Camera,
  'flash-mob': PartyPopper,
};

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function Activities2026() {
  const trackRef = useRef(null);
  const { data: activities } = useApiContent('/activities?year=2026', fallbackActivities2026);

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  if (!activities?.length) return null;

  return (
    <section id="activities-2026" className="bg-charcoal px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-marigold">
              On Ground — 2026
            </p>
            <h2 className="font-display text-4xl uppercase leading-[0.95] text-bone sm:text-5xl">
              Activities
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-fog">
            Beyond the competitions — rallies, drives, jams and everything in between. Rotating,
            recurring and one-off moments that keep the season buzzing.
          </p>
        </div>

        <div className="relative mt-12">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous activity"
            className="focus-flare absolute left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-bone text-ink shadow-lg shadow-black/40 transition-colors hover:bg-flare lg:flex"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next activity"
            className="focus-flare absolute right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-bone text-ink shadow-lg shadow-black/40 transition-colors hover:bg-flare lg:flex"
          >
            <ChevronRight size={26} />
          </button>

          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {activities.map((a) => {
              const slug = a.slug || slugify(a.title);
              const Icon = iconBySlug[slug] || Sparkles;
              return (
                <article
                  key={a._id || a.title}
                  className="flex h-auto w-[280px] shrink-0 snap-start flex-col sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4.5rem)/4)]"
                >
                  {/* Every card gets the same 4:3 image box so all cards are
                      identical in size. The activity artwork is landscape
                      (4:3), so it fills the box without being cropped. */}
                  <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-panel to-ink">
                    {a.coverImage?.url ? (
                      <img
                        src={a.coverImage.url}
                        alt={a.coverImage.altText || a.title}
                        className="h-full w-full object-cover object-center"
                        loading="lazy"
                      />
                    ) : (
                      <Icon size={52} strokeWidth={1} className="text-fog" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h3 className="mt-6 font-display text-2xl uppercase text-bone">{a.title}</h3>
                    {a.hostedBy && <p className="mt-1 text-xs italic text-marigold">by {a.hostedBy}</p>}
                    {(a.copy || a.description) && (
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-fog">
                        {a.copy || a.description}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}