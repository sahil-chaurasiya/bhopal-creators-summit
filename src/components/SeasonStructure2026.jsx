import { seasonStructure2026 } from '../data/siteContent';

export default function SeasonStructure2026() {
  const s = seasonStructure2026;
  return (
    <section id="season" className="bg-charcoal px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-flare">{s.eyebrow}</p>
        <h2 className="font-display text-4xl uppercase leading-[0.95] text-bone sm:text-5xl">{s.title}</h2>
        <p className="mt-5 max-w-2xl text-fog">{s.intro}</p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {s.phases.map((phase) => (
            <div key={phase.number} className="rounded-2xl border border-panel-line bg-panel p-6">
              <p className="font-display text-4xl text-flare">{phase.number}</p>
              <h3 className="mt-2 font-display text-xl normal-case leading-tight text-bone">{phase.title}</h3>
              <span className="mt-3 inline-block rounded-full bg-flare px-4 py-1 text-xs font-bold text-ink">
                {phase.days}
              </span>
              <ul className="mt-4 space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-fog">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-flare" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}