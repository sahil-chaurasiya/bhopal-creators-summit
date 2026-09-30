import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { footerLinks, siteSettings, socialLinksFallback } from '../data/siteContent';
import useApiContent from '../hooks/useApiContent';

function InstagramGlyph(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookGlyph(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5H16l.5-3.2h-3V8.2c0-.9.3-1.6 1.7-1.6H16.6V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.4v3.2H10V21h3.5Z" />
    </svg>
  );
}

function YoutubeGlyph(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinGlyph(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="7.2" cy="8" r="1.3" />
      <path d="M6.2 10.5h2v7h-2v-7Zm4 0h1.9v1c.5-.7 1.3-1.2 2.4-1.2 1.8 0 2.9 1.2 2.9 3.4v3.8h-2v-3.5c0-1-.4-1.8-1.4-1.8-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.8v3.4h-2v-7Z" />
    </svg>
  );
}

function XGlyph(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M4 4l7 8.5L4.4 20H6.9l5.6-6.4L17 20h3l-7.4-9L19.6 4h-2.5l-5.1 5.9L8 4H4Z" />
    </svg>
  );
}

const socialGlyphs = {
  instagram: InstagramGlyph,
  facebook: FacebookGlyph,
  youtube: YoutubeGlyph,
  linkedin: LinkedinGlyph,
  twitter: XGlyph,
  x: XGlyph,
};

export default function Footer() {
  const { data: settings } = useApiContent('/settings', { socialLinks: socialLinksFallback }, 'settings');
  const socialLinks = (settings?.socialLinks?.length ? settings.socialLinks : socialLinksFallback).filter(
    (s) => s.isActive !== false && s.url
  );
  const email = settings?.contactEmail || siteSettings.email;
  const phones = settings?.contactPhones?.length ? settings.contactPhones : siteSettings.phones;
  const venueFull = settings?.venueFullAddress || siteSettings.venueFull;
  const aboutCopy =
    settings?.footerAbout ||
    "The Bhopal Creators Summit brings India\u2019s creative minds together in the heart of Madhya Pradesh. Fueled by digital ambition and cultural roots, it\u2019s more than a SUMMIT\u2014it\u2019s a MOVEMENT.";
  const links = settings?.footerLinks?.length ? settings.footerLinks : footerLinks;
  // Legal/policy links live in the bottom bar; the "Links" column keeps only
  // the primary site navigation.
  const legalHrefs = ['/privacy-policy', '/terms', '/shipping-policy'];
  const allLinks = links;
  const navFooterLinks = allLinks.filter((l) => !legalHrefs.includes(l.href));
  const legalLinks = allLinks.filter((l) => legalHrefs.includes(l.href));

  return (
    <footer id="contact" className="bg-charcoal px-5 pb-8 pt-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-base uppercase text-bone">About the Summit</h3>
            <p className="mt-5 text-sm leading-relaxed text-fog">{aboutCopy}</p>
            <img
              src="/i-am-a-bhopali-creator-2025.webp"
              alt="iAMA Bhopali Creator - Bhopal Creators Summit"
              className="mt-5 h-14 w-auto object-contain"
            />
          </div>

          <div>
            <h3 className="font-display text-base uppercase text-bone">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-fog">
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-flare" />
                <a href={`mailto:${email}`} className="focus-flare hover:text-flare">
                  {email}
                </a>
              </li>
              {phones.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <Phone size={15} className="text-flare" />
                  <a href={`tel:${p.replace(/\s/g, '')}`} className="focus-flare hover:text-flare">
                    {p}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <MapPin size={15} className="text-flare" />
                {venueFull}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base uppercase text-bone">Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-fog">
              {navFooterLinks.map((l) => (
                <li key={l.label}>
                  {l.href.startsWith('/') ? (
                    <Link to={l.href} className="focus-flare hover:text-flare">
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} className="focus-flare hover:text-flare">
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base uppercase text-bone">Get in Touch</h3>
            <p className="mt-5 text-sm leading-relaxed text-fog">
              Follow along and reach out&mdash;we reply fast during summit season.
            </p>
            {socialLinks.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((s) => {
                  const Glyph = socialGlyphs[s.platform?.toLowerCase()] || InstagramGlyph;
                  return (
                    <a
                      key={s.platform + s.url}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.platform}
                      className="focus-flare flex h-10 w-10 items-center justify-center rounded-full border border-panel-line text-bone transition-colors hover:border-flare hover:text-flare"
                    >
                      <Glyph />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-panel-line pt-6 text-xs text-fog sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
            <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
            {legalLinks.length > 0 && (
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {legalLinks.map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} className="focus-flare hover:text-flare">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <p>
            Site designed &amp; Managed by:{' '}
            <a href="https://toflymediaa.com/" target="_blank" rel="noreferrer" className="focus-flare font-semibold text-bone hover:text-flare">
              Tofly Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}