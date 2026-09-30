export default function PastCollaborations() {
  return (
    <div className="grid gap-10 pb-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:pb-14">
      <div>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-flare">
          Creator Season 2026
        </p>
        <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
          <span className="text-bone">Past </span>
          <span className="bg-gradient-to-r from-marigold via-flare to-magenta bg-clip-text text-transparent">
            Collaborations
          </span>
        </h2>
        <p className="mt-3 text-sm text-fog">Brands that trusted us previously &amp; their feedback</p>

        <p className="mt-8 max-w-lg text-sm leading-relaxed text-fog">
          BCS 2025 brought together a strong mix of national brands, local businesses and leading
          institutions, creating meaningful opportunities for brands to connect with Bhopal&rsquo;s
          growing creator community. These collaborations helped us build trust, credibility and
          stronger brand-creator connections, while proving the potential of BCS as a platform for
          brands to engage with the creative ecosystem.
        </p>
        <p className="mt-4 max-w-lg text-sm font-semibold text-bone">
          This year, with BCS 2026 Season 4, we&rsquo;re taking that collaboration ecosystem even
          further.
        </p>
      </div>

      <div className="mx-auto w-full max-w-md sm:max-w-lg">
        <img
          src="/past-collaborations/2025-sponsors.webp"
          alt="BCS 2025 sponsors and partners: Canon, Snapchat, IndiGo, Madhya Pradesh Tourism, Pandav Hotels, OM System, Lucia, BNI Bhopal and SAM Global University"
          width="1200"
          height="1573"
          className="block h-auto w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}