import { motion } from 'framer-motion';
import { Ticket } from 'lucide-react';
import Button from './Button';
import { siteSettings2026 } from '../data/siteContent';

// Hero content is fixed in code (not CMS-driven) — the live /settings API
// holds the old 2025 singleton (tagline "Unite. Create. Celebrate.", old
// date/venue), which would silently override this section if we read from
// it. Same reasoning as Navbar.jsx.
export default function Hero2026() {
  const settings = siteSettings2026;

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-ink pt-24">
      {/* Background video — same footage as the 2025 hero, reused until 2026-specific footage exists */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/favicon.svg"
      />

      {/* Dark overlay so the text/buttons stay legible over any footage */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-ink/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="font-mono text-xs font-semibold normal-case tracking-[0.15em] text-flare">
            Bhopal Creators Summit
          </p>
          <h1 className="mt-3 font-display text-6xl uppercase leading-[0.92] text-bone sm:text-8xl">
            {settings.tagline}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 flex flex-col gap-5 sm:flex-row sm:gap-12"
        >
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-flare">Date</p>
            <p className="mt-1 font-display text-2xl normal-case text-bone">{settings.dateFull}</p>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-flare">Venue</p>
            <p className="mt-1 font-display text-2xl normal-case text-bone">{settings.venueFull}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Button href={settings.ticketUrl} target="_blank" rel="noreferrer" variant="flare" className="gap-2">
            <Ticket size={17} />
            Get Tickets
          </Button>
          <Button
            href={settings.volunteerFormUrl || '#contact'}
            target={settings.volunteerFormUrl ? '_blank' : undefined}
            rel={settings.volunteerFormUrl ? 'noreferrer' : undefined}
            variant="light"
          >
            Volunteer
          </Button>
        </motion.div>
      </div>
    </section>
  );
}