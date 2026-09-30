import { Ticket } from 'lucide-react';
import Button from './Button';
import { signatureExperiences2026, siteSettings2026 } from '../data/siteContent';

export default function SignatureExperiences2026() {
  const s = signatureExperiences2026;
  return (
    <section className="bg-charcoal px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-flare">{s.eyebrow}</p>
        <h2 className="font-display text-4xl uppercase leading-[0.95] text-bone sm:text-5xl">{s.title}</h2>
        <p className="mt-5 max-w-2xl text-fog">{s.intro}</p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {s.items.map((item) => (
            <div key={item.number} className="rounded-xl border border-panel-line bg-panel p-5">
              <p className="font-display text-2xl text-flare">{item.number}</p>
              <h3 className="mt-2 font-display text-base uppercase leading-tight text-bone">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={siteSettings2026.ticketUrl} target="_blank" rel="noreferrer" variant="outline" className="gap-2">
            <Ticket size={16} />
            Get Tickets
          </Button>
        </div>
      </div>
    </section>
  );
}