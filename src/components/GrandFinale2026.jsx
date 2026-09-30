import { Ticket } from 'lucide-react';
import Button from './Button';
import { grandFinale2026, siteSettings2026 } from '../data/siteContent';

export default function GrandFinale2026() {
  const g = grandFinale2026;
  return (
    <section id="finale" className="bg-ink px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-flare">{g.eyebrow}</p>
        <h2 className="font-display text-4xl uppercase leading-[0.95] text-bone sm:text-5xl">{g.title}</h2>
        <p className="mt-5 max-w-2xl text-fog">{g.intro}</p>

        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
          {g.items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm font-semibold text-bone">
              <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-flare" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <p className="text-sm text-fog">Don&rsquo;t watch the finale from the outside.</p>
          <Button href={siteSettings2026.ticketUrl} target="_blank" rel="noreferrer" variant="flare" className="gap-2">
            <Ticket size={16} />
            Get Tickets
          </Button>
        </div>
      </div>
    </section>
  );
}