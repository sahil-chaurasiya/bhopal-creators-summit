import { Sparkles, Ticket } from 'lucide-react';
import Button from './Button';
import { comingSoon2026 as comingSoonFallback, siteSettings2026 } from '../data/siteContent';
import useApiContent from '../hooks/useApiContent';

export default function ComingSoon2026() {
  const { data: settings } = useApiContent('/settings', { comingSoon: comingSoonFallback }, 'settings');
  const comingSoon2026 = settings?.comingSoon?.title ? settings.comingSoon : comingSoonFallback;

  return (
    <section
      id="coming-soon-2026"
      className="relative overflow-hidden bg-charcoal px-5 py-28 text-center sm:px-8"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-flare), transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-3xl">
        <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-flare/40 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-flare">
          <Sparkles size={14} /> {comingSoon2026.eyebrow}
        </p>

        <h2 className="mt-6 font-display text-5xl uppercase leading-[0.95] text-bone sm:text-6xl">
          {comingSoon2026.title}
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-fog">{comingSoon2026.copy}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            href={siteSettings2026.ticketUrl}
            target="_blank"
            rel="noreferrer"
            variant="flare"
            className="gap-2"
          >
            <Ticket size={16} />
            Get Tickets
          </Button>
          <Button href={comingSoon2026.notifyHref} target="_blank" rel="noreferrer" variant="outline">
            {comingSoon2026.notifyLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}