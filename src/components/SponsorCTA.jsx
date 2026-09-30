import { Link } from 'react-router-dom';
import { ArrowUpRight, Handshake } from 'lucide-react';
import PastCollaborations from './PastCollaborations';

export default function SponsorCTA() {
  return (
    <section className="bg-ink px-5 pb-4 pt-20 sm:px-8 sm:pt-24">
      <div className="mx-auto max-w-7xl">
        <PastCollaborations />

        <Link
          to="/partner-with-us"
          className="focus-flare group relative flex flex-col items-start gap-6 overflow-hidden rounded-2xl border border-flare/40 bg-gradient-to-br from-panel via-panel to-charcoal p-8 transition-colors hover:border-flare sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-flare/10 blur-3xl transition-opacity group-hover:opacity-80"
          />
          <div className="relative flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-flare text-ink">
              <Handshake size={22} />
            </span>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-flare">
                Creator Season 2026
              </p>
              <h3 className="mt-1 font-display text-2xl uppercase leading-tight text-bone">
                Partner With the Summit
              </h3>
              <p className="mt-2 max-w-xl text-sm text-fog">
                16 ownable sponsorship properties, 8 partnership tiers, 30 days of visibility. See the full
                sponsorship deck and put your brand at the centre of Central India&rsquo;s largest creator
                ecosystem.
              </p>
            </div>
          </div>

          <span className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-flare px-7 py-3 text-sm font-bold tracking-wide text-ink transition-colors group-hover:bg-flare-hot">
            View Sponsorship Details
            <ArrowUpRight size={18} />
          </span>
        </Link>
      </div>
    </section>
  );
}