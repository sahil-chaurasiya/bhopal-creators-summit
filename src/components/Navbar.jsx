import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Ticket, X } from 'lucide-react';
import Button from './Button';
import {
  navLinks as navLinksFallback,
  navLinks2025 as navLinks2025Fallback,
  siteSettings,
  siteSettings2026,
} from '../data/siteContent';
// Login/Register (and useAccount) are temporarily disabled on the frontend —
// see App.jsx for the note. Not deleted, just not wired up for now.
// import { useAccount } from '../context/AccountContext';
import useApiContent from '../hooks/useApiContent';

function NavAnchor({ href, basePath, className, onClick, children }) {
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  if (href.startsWith('#')) {
    // Anchor links resolve against whichever page we're currently on
    // (basePath is "/" on the 2026 homepage, "/2025" on the archived page).
    return (
      <Link to={`${basePath}${href}`} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

// Season-related anchors are grouped under a single "Program" dropdown on the
// desktop nav so the top level stays at 6 items instead of 10+. The mobile
// menu still lists every link flat.
const PROGRAM_LABELS = ['Season', 'Challenges', 'Competitions', 'Activities', 'Community'];

function groupDesktopLinks(links) {
  const out = [];
  let group = null;
  links.forEach((link) => {
    if (PROGRAM_LABELS.includes(link.label)) {
      if (!group) {
        group = { type: 'group', label: 'Program', items: [] };
        out.push(group);
      }
      group.items.push(link);
    } else {
      out.push({ type: 'link', ...link });
    }
  });
  return out;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isLegacy2025 = location.pathname === '/2025' || location.pathname.startsWith('/2025/');
  const basePath = isLegacy2025 ? '/2025' : '/';
  // "Get Tickets" only makes sense on the live 2026 homepage — the 2025 page
  // is an archive of a past, sold-out edition.
  const isHome2026 = location.pathname === '/';

  // Nav links are fixed in code on both pages (not CMS-driven). The live
  // /settings API can hold a stale navLinks array from before the 2026
  // relaunch, so we deliberately never let it override this list — otherwise
  // the "2025" link and correctly-scoped anchors would get clobbered by
  // whatever is currently saved in the database.
  const { data: settings } = useApiContent('/settings', siteSettings, 'settings');
  const navLinks = isLegacy2025 ? navLinks2025Fallback : navLinksFallback;
  const desktopLinks = isLegacy2025
    ? navLinks.map((l) => ({ type: 'link', ...l }))
    : groupDesktopLinks(navLinks);
  const eventName = isLegacy2025
    ? settings?.eventName || siteSettings.eventName
    : siteSettings2026.eventName;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link to="/" className="flex items-center gap-3 focus-flare">
          <img
            src="/i-am-a-bhopali-creator-2025.webp"
            alt="iAMA Bhopali Creator - Bhopal Creators Summit"
            className="h-16 w-auto object-contain sm:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {desktopLinks.map((item) =>
            item.type === 'group' ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className="focus-flare inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-bone/90 transition-colors hover:text-flare group-focus-within:text-flare"
                >
                  {item.label}
                  <ChevronDown size={14} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                </button>
                <div className="absolute left-1/2 top-full z-50 hidden -translate-x-1/2 pt-3 group-focus-within:block group-hover:block">
                  <div className="min-w-[190px] rounded-xl border border-panel-line bg-ink p-2 shadow-xl">
                    {item.items.map((sub) => (
                      <NavAnchor
                        key={sub.label}
                        href={sub.href}
                        basePath={basePath}
                        onClick={(e) => e.currentTarget.blur()}
                        className="focus-flare block whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold text-bone/90 transition-colors hover:bg-panel hover:text-flare"
                      >
                        {sub.label}
                      </NavAnchor>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavAnchor
                key={item.label}
                href={item.href}
                basePath={basePath}
                className="focus-flare whitespace-nowrap text-sm font-semibold text-bone/90 transition-colors hover:text-flare"
              >
                {item.label}
              </NavAnchor>
            )
          )}
        </nav>

        <div className="hidden items-center gap-6 xl:flex">
          {/* Cart and Login/Register links disabled for now — see App.jsx note */}
          {isHome2026 && (
            <Button
              href={siteSettings2026.ticketUrl}
              target="_blank"
              rel="noreferrer"
              variant="flare"
              className="shrink-0 gap-2 whitespace-nowrap !px-5 !py-2.5 text-xs"
            >
              <Ticket size={15} />
              Get Tickets
            </Button>
          )}
        </div>

        <button
          className="focus-flare text-bone xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-panel-line bg-ink px-5 pb-6 pt-2 xl:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavAnchor
                key={link.label}
                href={link.href}
                basePath={basePath}
                onClick={() => setOpen(false)}
                className="focus-flare rounded-md px-2 py-3 text-base font-semibold text-bone hover:bg-panel hover:text-flare"
              >
                {link.label}
              </NavAnchor>
            ))}
            {/* Login/Register link disabled for now — see App.jsx note */}
            {isHome2026 && (
              <Button
                href={siteSettings2026.ticketUrl}
                target="_blank"
                rel="noreferrer"
                variant="flare"
                onClick={() => setOpen(false)}
                className="mt-3 gap-2"
              >
                <Ticket size={16} />
                Get Tickets
              </Button>
            )}
          </nav>
        </div>
      )}
      <p className="sr-only">{eventName}</p>
    </header>
  );
}