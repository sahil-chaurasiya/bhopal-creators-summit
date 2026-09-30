import { bigIdea2026 } from '../data/siteContent';

export default function BigIdea2026() {
  const b = bigIdea2026;
  return (
    <section className="bg-ink px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-flare">{b.eyebrow}</p>
          <h2 className="font-display text-2xl normal-case leading-[0.95] text-bone sm:text-4xl">{b.title}</h2>
          <p className="mt-6 leading-relaxed text-fog">{b.copy}</p>
          <blockquote className="mt-6 border-l-2 border-flare pl-5 italic text-bone/90">
            &ldquo;{b.quote}&rdquo;
          </blockquote>
        </div>

        <div className="grid grid-cols-2 gap-4 self-start">
          {b.stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-panel-line bg-panel p-5">
              <p className="font-display text-2xl text-bone">{stat.value}</p>
              <p className="mt-1 text-sm text-fog">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}