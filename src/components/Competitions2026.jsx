import { useRef } from 'react';
import { Camera, UtensilsCrossed, Gamepad2, Film, Compass, Bot, Music2, ChevronLeft, ChevronRight } from 'lucide-react';
import { competitions2026 as fallbackCompetitions2026 } from '../data/siteContent';
import useApiContent from '../hooks/useApiContent';

const iconBySlug = {
  'dance-battle-2026': Music2,
  'food-vlogger-2026': UtensilsCrossed,
  'gaming-2026': Gamepad2,
  'photography-2026': Camera,
  'documentary-film-2026': Film,
  'treasure-hunt-2026': Compass,
  'ai-creator-2026': Bot,
};

export default function Competitions2026() {
  const trackRef = useRef(null);
  const { data: competitions } = useApiContent('/competitions?year=2026', fallbackCompetitions2026);

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  if (!competitions?.length) return null;

  return (
    <section id="competitions-2026" className="border-t border-panel-line bg-ink px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-flare">
              Live Now — 2026
            </p>
            <h2 className="font-display text-4xl uppercase leading-[0.95] text-bone sm:text-5xl">
              Competitions
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-fog">
            Ready to compete where creativity meets community? From capturing powerful frames to
            battling it out on stage, this season&rsquo;s competitions are all about turning ideas
            into impact.
          </p>
        </div>

        <div className="relative mt-12">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous competition"
            className="focus-flare absolute left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-bone text-ink shadow-lg shadow-black/40 transition-colors hover:bg-flare lg:flex"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next competition"
            className="focus-flare absolute right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-bone text-ink shadow-lg shadow-black/40 transition-colors hover:bg-flare lg:flex"
          >
            <ChevronRight size={26} />
          </button>

          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {competitions.map((c) => {
              const Icon = iconBySlug[c.slug] || Camera;
              return (
                <article
                  key={c._id || c.slug}
                  className="flex h-auto w-[280px] shrink-0 snap-start flex-col sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4.5rem)/4)]"
                >
                  <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-panel to-charcoal">
                    {c.coverImage?.url ? (
                      <img
                        src={c.coverImage.url}
                        alt={c.coverImage.altText || c.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Icon size={52} strokeWidth={1} className="text-fog" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h3 className="mt-6 font-display text-2xl uppercase text-bone">{c.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-fog">
                      {c.copy || c.shortDescription}
                    </p>
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