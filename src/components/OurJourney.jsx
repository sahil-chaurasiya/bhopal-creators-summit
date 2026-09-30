import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import useApiContent from '../hooks/useApiContent';
import { journeyStats as journeyStatsFallback, previousYearsFallback, siteSettings2026 } from '../data/siteContent';

export default function OurJourney() {
  const { data: years } = useApiContent('/previous-years?limit=50', previousYearsFallback);
  const { data: settings } = useApiContent('/settings', { journeyStats: journeyStatsFallback }, 'settings');
  const journeyStats = settings?.journeyStats?.length ? settings.journeyStats : journeyStatsFallback;
  const publishedYears = [...years]
    .filter((y) => y.isPublished === true)
    .sort((a, b) => a.year - b.year)
    .slice(0, 3);

  const cards = publishedYears.length > 0 ? publishedYears : previousYearsFallback;

  return (
    <section id="journey" className="bg-ink px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Journey So Far"
          title="3 Years of Bhopal Creators Summit"
          align="center"
          className="mx-auto max-w-3xl"
        />
        <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-fog">
          From a single room of ambitious creators to Madhya Pradesh&rsquo;s largest creator
          gathering &mdash; here&rsquo;s the story of how the Summit grew, one edition at a time.
        </p>

        {/* Journey stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-y border-dashed border-panel-line py-12 sm:grid-cols-3 lg:grid-cols-5">
          {journeyStats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl text-flare sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm font-semibold text-bone">{s.label}</p>
              {s.sub && <p className="mt-1 text-xs text-fog">{s.sub}</p>}
            </div>
          ))}
        </div>

        {/* Year timeline cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((y) => {
            const published = y.isPublished === true;
            const CardTag = published ? Link : 'div';
            return (
              <CardTag
                key={y.year}
                {...(published ? { to: `/previous-years/${y.slug}` } : {})}
                className={`focus-flare group flex h-full flex-col justify-between rounded-2xl border border-panel-line bg-panel p-6 transition-colors ${
                  published ? 'hover:border-flare/60' : 'opacity-80'
                }`}
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-flare">
                    Bhopal Creators Summit
                  </p>
                  <p className="mt-2 font-display text-4xl text-bone group-hover:text-flare">
                    {y.year}
                  </p>
                  {(y.theme || y.summary) && (
                    <p className="mt-3 text-sm leading-relaxed text-fog">{y.theme && `${y.theme}. `}{y.summary}</p>
                  )}
                </div>
                {published ? (
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-flare">
                    View Edition <ArrowRight size={14} />
                  </span>
                ) : (
                  <span className="mt-6 inline-block text-xs font-bold uppercase tracking-wide text-fog">
                    Publishing Soon
                  </span>
                )}
              </CardTag>
            );
          })}

          {/* 2026 tile — the next chapter, and tickets for it are already live */}
          <a
            href={siteSettings2026.ticketUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-flare group flex h-full flex-col justify-between rounded-2xl border border-flare/40 bg-gradient-to-br from-panel to-charcoal p-6 transition-colors hover:border-flare"
          >
            <div>
              <p className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.25em] text-marigold">
                <Sparkles size={13} /> Now Booking
              </p>
              <p className="mt-2 font-display text-4xl text-bone group-hover:text-flare">2026</p>
              <p className="mt-3 text-sm leading-relaxed text-fog">
                The next chapter of the Summit is on its way &mdash; and tickets are already open.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-marigold">
              Get Tickets <ArrowRight size={14} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}