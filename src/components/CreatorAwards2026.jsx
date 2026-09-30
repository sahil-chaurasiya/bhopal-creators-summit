import { Ticket } from 'lucide-react';
import Button from './Button';
import { creatorAwards2026, siteSettings2026 } from '../data/siteContent';

export default function CreatorAwards2026() {
  const a = creatorAwards2026;
  return (
    <section id="awards" className="bg-ink px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-flare">{a.eyebrow}</p>
          <h2 className="font-display text-4xl uppercase leading-[0.95] text-bone sm:text-5xl">{a.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-fog">{a.intro}</p>
        </div>

        <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {a.categories.map((cat) => (
            <li key={cat} className="flex items-center gap-3 text-sm font-semibold text-bone">
              <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-flare" />
              {cat}
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Button href={siteSettings2026.ticketUrl} target="_blank" rel="noreferrer" variant="flare" className="gap-2">
            <Ticket size={16} />
            Get Tickets
          </Button>
        </div>
      </div>
    </section>
  );
}