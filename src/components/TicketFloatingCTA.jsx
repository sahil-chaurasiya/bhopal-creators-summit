import { Ticket } from 'lucide-react';
import { siteSettings2026 } from '../data/siteContent';

// Persistent floating "Get Tickets" pill for the 2026 homepage — stays
// reachable no matter how far the visitor has scrolled, on top of the
// ticket CTAs already placed inside individual sections. Fixed positioning
// only, so it never affects the page's normal document flow/layout.
export default function TicketFloatingCTA() {
  return (
    <a
      href={siteSettings2026.ticketUrl}
      target="_blank"
      rel="noreferrer"
      className="focus-flare fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-flare px-7 py-3 text-sm font-bold tracking-wide text-ink shadow-lg shadow-ink/40 transition-colors hover:bg-flare-hot sm:bottom-7 sm:right-7"
    >
      <Ticket size={17} />
      Get Tickets
    </a>
  );
}