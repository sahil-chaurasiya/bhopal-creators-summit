import { Mic, Heart, Presentation, Sparkles } from 'lucide-react';
import { aboutContent2026 } from '../data/siteContent';
import useApiContent from '../hooks/useApiContent';

const icons = { Mic, Heart, Presentation };

export default function About2026() {
  const { data: settings } = useApiContent('/settings', { about2026: aboutContent2026 }, 'settings');
  const about = settings?.about2026?.paragraphs?.length ? settings.about2026 : aboutContent2026;
  const images = settings?.about?.images || [];

  return (
    <section id="about" className="bg-ink px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Photo collage — falls back to the announcement panel until images are uploaded */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-2xl bg-flare p-6">
            {images[0]?.url ? (
              <img
                src={images[0].url}
                alt={images[0].altText || 'Bhopal Creators Summit 2026'}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <>
                <Sparkles className="absolute right-6 top-6 text-ink/40" size={28} />
                <p className="font-display text-2xl uppercase leading-[0.95] text-ink">
                  Bhopal Creators
                  <br />
                  Summit 2026
                </p>
              </>
            )}
          </div>
          <div className="aspect-square overflow-hidden rounded-2xl bg-panel">
            {images[1]?.url ? (
              <img
                src={images[1].url}
                alt={images[1].altText || 'Bhopal Creators Summit'}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center text-fog">
                <p className="font-display text-4xl uppercase">4th</p>
                <p className="px-4 text-xs font-semibold uppercase tracking-[0.2em]">Edition</p>
              </div>
            )}
          </div>
          <div className="col-span-2 aspect-[16/10] overflow-hidden rounded-2xl bg-panel">
            {images[2]?.url ? (
              <img
                src={images[2].url}
                alt={images[2].altText || 'Bhopal Creators Summit photos and video'}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-panel-line text-center">
                <p className="font-display text-xl uppercase tracking-wide text-fog">Photos &amp; Video</p>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-flare">Coming Soon</p>
              </div>
            )}
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-flare">
            {about.eyebrow}
          </p>
          <h2 className="font-display text-4xl normal-case leading-[0.95] text-bone sm:text-5xl">
            {about.title}
          </h2>

          <div className="mt-6 space-y-4 text-fog">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 space-y-8">
            {(about.highlights || []).map((h) => {
              const Icon = icons[h.icon] || Mic;
              return (
                <div key={h.title} className="flex gap-4">
                  <Icon className="mt-1 shrink-0 text-flare" size={26} strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display text-xl normal-case tracking-wide text-bone">{h.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-fog">{h.copy}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}