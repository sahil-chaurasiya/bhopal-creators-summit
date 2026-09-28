// This file mimics the shape data will come back in from the future CMS API
// (GET /api/content/home, /api/content/site-settings, etc). Keeping it as one
// typed module now means swapping in a real fetch later touches this file only.

export const siteSettings = {
  brand: 'iAMA Bhopali Creator',
  eventName: 'Bhopal Creators Summit 2025',
  tagline: 'UNITE. CREATE. CELEBRATE.',
  date: '31 AUG',
  dateFull: '31-AUG-2025',
  venue: 'Hotel Pride Kolar',
  venueFull: 'Hotel Pride Kolar, Bhopal',
  email: 'bhopalcreatorssummit@gmail.com',
  phones: ['+91 91 79 5523 97', '+91-8319527668'],
  instagramHandle: '@iamabhopalicreator',
  volunteerFormUrl: '',
};

// Fallback social links, used until /api/settings returns live data (set from the admin panel).
export const socialLinksFallback = [
  { platform: 'instagram', url: 'https://www.instagram.com/bhopalcreatorssummit/', isActive: true },
];

// Nav shown on the main site (default homepage = 2026).
export const navLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Journey', href: '#journey' },
  { label: 'Season', href: '#season' },
  { label: 'Challenges', href: '#challenges' },
  { label: 'Competitions', href: '#competitions-2026' },
  { label: 'Activities', href: '#activities-2026' },
  { label: 'Community', href: '#community' },
  { label: 'Awards', href: '#awards' },
  { label: 'Partner With Us', href: '/partner-with-us' },
  { label: '2025', href: '/2025' },
];

// Nav shown on the archived /2025 page (identical to the original site nav,
// except the old "2026" teaser link now points at the live 2026 homepage).
export const navLinks2025 = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Journey', href: '#journey' },
  { label: 'Competitions', href: '#competitions' },
  { label: 'Workshops', href: '#workshops' },
  { label: 'Awards', href: '#awards' },
  { label: '2026', href: '/' },
  { label: 'Tickets', href: '#tickets' },
];

export const aboutContent = {
  eyebrow: 'UNITE. CREATE. CELEBRATE.',
  title: 'About the Summit',
  paragraphs: [
    "The Bhopal Creators Summit returns in 2025, bigger and bolder with the continued support of MP Tourism. After three impactful editions, including one that brought together 450+ creators and over 30M+ in reach, this year's summit aims to take creative networking and collaboration to the next level.",
    "As one of the region's largest creator gatherings, it celebrates digital talent across fields while spotlighting the rich culture and artistic spirit of Madhya Pradesh.",
  ],
  highlights: [
    {
      icon: 'Mic',
      title: 'Live Performances',
      copy: 'Featuring electrifying dance acts, soul-stirring music, and hilarious stand-up comedy.',
    },
    {
      icon: 'Heart',
      title: 'Collaboration Zone',
      copy: 'A dedicated space for creators and brands to collaborate, exchange ideas, and form partnerships that pave the way for groundbreaking projects.',
    },
    {
      icon: 'Presentation',
      title: 'Creator Talks',
      copy: 'Candid conversations and panel discussions with the creators shaping the region\u2019s digital culture.',
    },
  ],
};

export const stats = [
  { value: '450+', label: 'Creators Attended' },
  { value: '20M+', label: 'Overall Reach' },
  { value: '1L+', label: 'Impressions' },
  { value: '20+', label: 'Brands Associations' },
  { value: '\u221E', label: 'Networking' },
];

// "3 Years of Bhopal Creators Summit" journey section — the big-picture numbers
// that tell the community-growth story across every edition.
export const journeyStats = [
  { value: '3', label: 'Years of the Summit', sub: '2023 \u2013 2025, and counting' },
  { value: '450+', label: 'Creators Connected', sub: 'Photographers, filmmakers, influencers & more' },
  { value: '30M+', label: 'Combined Reach', sub: 'Generated across every edition' },
  { value: '6+', label: 'Workshops Every Edition', sub: 'Hands-on sessions with industry mentors' },
  { value: '15+', label: 'Award Categories', sub: 'Recognising the region\u2019s best creators' },
];

// Fallback previous-year cards, shown until /api/previous-years is seeded/published from the admin panel.
export const previousYearsFallback = [
  {
    year: 2023,
    slug: '2023',
    theme: 'Where It All Began',
    summary: 'The founding edition \u2014 the first time Bhopal\u2019s creators, photographers and digital storytellers came together under one roof.',
    isPublished: false,
  },
  {
    year: 2024,
    slug: '2024',
    theme: 'The Movement Grows',
    summary: 'A bigger stage, more workshops and the community\u2019s first big creator awards night.',
    isPublished: false,
  },
  {
    year: 2025,
    slug: '2025',
    theme: 'Unite. Create. Celebrate.',
    summary: '450+ creators, MP Tourism on board, and the biggest edition yet \u2014 competitions, workshops, awards and a DJ night to close it out.',
    isPublished: false,
  },
];

export const comingSoon2026 = {
  eyebrow: 'Bhopal Creators Summit \u2014 2026',
  title: 'The Next Chapter Is Coming',
  copy:
    'Four years of building Madhya Pradesh\u2019s largest creator community \u2014 and 2026 is set to be the biggest one yet. Registrations and passes open soon. Follow along so you don\u2019t miss the drop.',
  notifyHref: 'https://www.instagram.com/bhopalcreatorssummit/',
  notifyLabel: 'Follow for Updates',
};

export const sponsors = [
  { name: 'SAM Global University' },
  { name: 'Ratnesh Communications' },
  { name: 'Snapchat' },
  { name: 'Canon' },
  { name: 'Pride Hotel Bhopal' },
  { name: 'OM System' },
  { name: '94.3 My FM' },
  { name: 'bv' },
  { name: 'Vistaar WebX' },
  { name: 'US Media Works' },
];

// Fallback logo grid for the "Past Collaborations" panel above the sponsor
// CTA. Pulls from the same /sponsors admin resource as `sponsors` above, so
// logos uploaded/reordered from the admin panel show here automatically —
// this local array only renders until that API call resolves.
export const pastCollaborationsFallback = [
  { name: 'Canon', logo: { url: '/past-collaborations/canon.png' } },
  { name: 'Snapchat', logo: { url: '/past-collaborations/snapchat.png' } },
  { name: 'IndiGo', logo: { url: '/past-collaborations/indigo.png' } },
  { name: 'Madhya Pradesh Tourism', logo: { url: '/past-collaborations/mp-tourism.png' } },
  { name: 'Pandav Hotels', logo: { url: '/past-collaborations/pandav-hotels.png' } },
  { name: 'OM System', logo: { url: '/past-collaborations/om-system.png' } },
  { name: 'Lucia', logo: { url: '/past-collaborations/lucia.png' } },
  { name: 'BNI Bhopal', logo: { url: '/past-collaborations/bni-bhopal.png' } },
  { name: 'SAM Global University', logo: { url: '/past-collaborations/sam-global-university.png' } },
];

// Fallback "Our Core & Key Influencers" spotlight cards, shown until
// /api/influencers is seeded/published from the admin panel.
export const influencersFallback = [
  {
    name: 'Mayank Tiwari',
    role: 'Founder, Bhopal Creator Community',
    handle: '',
    followers: '',
    bio: "Meet Mayank Tiwari, the Founder of Bhopal Creators Community and one of the key forces behind Bhopal\u2019s growing creator ecosystem. A talented photographer, creator, and community builder, Mayank has dedicated his journey to connecting artists, photographers, filmmakers, influencers, and creative minds under one platform. He is also known for being the first person from India to be featured on Instagram, marking a special milestone in his digital journey. Behind every strong community is someone who believes in its people \u2014 for Bhopal Creators Community, that person is Mayank Tiwari.",
    photo: { url: '/influencers/mayank-tiwari.png' },
  },
  {
    name: 'Shivansh Choubey',
    role: 'Organizer, BCS 2026',
    handle: '@shivanshchoubeyy',
    followers: '',
    bio: 'Shivansh Choubey is a singer, event entrepreneur, artist manager, and creative professional working across music, entertainment, events, and creator culture. As the founder of Rambo Entertainments, he has worked across artist management, live performances, event production, brand collaborations, and large-scale entertainment experiences with artists including Vishal Shekhar, Zakir Khan, Mohit Chauhan, Aditya Rikhari, Mika Singh, Farhan Akhtar, and several emerging artists.',
    photo: { url: '/influencers/shivansh-choubey.png' },
  },
  {
    name: 'Vanshdeep Singh Sisodia',
    role: 'Content Creator & Travel Photographer',
    handle: '@1shdeep',
    followers: '102K Followers',
    bio: 'From aspiring engineer to a celebrated content creator and travel photographer, Vanshdeep has built a community of 1 lakh+ followers through his passion for storytelling and visual creativity. From collaborations with leading brands to his journey of embracing the challenges behind content creation, he continues to inspire creators to turn their passion into purpose.',
    photo: { url: '/influencers/vanshdeep-singh-sisodia.png' },
  },
  {
    name: 'Priyansh M. Jain',
    role: 'Aerial DOP & Travel Photographer',
    handle: '@shotbypriyansh',
    followers: '239K Followers',
    bio: 'A talented aerial DOP, travel photographer, and content creator who has carved a unique identity through cinematic storytelling. From capturing breathtaking landscapes to stories around travel, cars, and lifestyle, his creative vision continues to inspire. With a community of 2 lakh+ followers, Priyansh is one of the emerging visual storytellers from Bhopal making a mark across India.',
    photo: { url: '/influencers/priyansh-jain.png' },
  },
  {
    name: 'Damini Tripathi',
    role: 'Digital Marketer & Business Coach',
    handle: '@damini.creator',
    followers: '809K Followers',
    bio: 'Damini Tripathi is one of India\u2019s fastest-growing digital marketers, inspiring thousands with her journey. With 750k+ followers on Instagram and 270K+ subscribers on YouTube, she simplifies digital marketing, making it easy and accessible for everyone. With 6+ years of hands-on experience, Damini has not only coached over 2,000 students but also helped scale multiple businesses from scratch to \u20b91 crore per month in revenue \u2014 be it eCommerce ventures or service-based brands.',
    photo: { url: '/influencers/damini-tripathi.png' },
  },
];

export const competitions = [
  {
    slug: 'photography',
    title: 'Photography',
    copy: 'Hey photographers! Ready to show MP the way you see it? Your vision. Your lens. Your rules.',
    image: 'camera',
  },
  {
    slug: 'collabverse-2025',
    title: 'Content Collaboration',
    copy: 'A unique virtual competition where creators from different art forms collaborate to make something original.',
    image: 'collab',
  },
];

export const workshops = [
  {
    title: 'AI Integration in Content',
    facilitator: 'Naman Deshmukh',
    copy: 'Decode the future\u2014how AI can power up your content game.',
    image: 'ai',
  },
  {
    title: 'Entrepreneurship',
    facilitator: 'Harsh Surana',
    copy: 'From ideas to income\u2014build, brand, and break through.',
    image: 'entrepreneurship',
  },
  {
    title: 'Theatre Workshop',
    facilitator: null,
    copy: 'Channel emotion, own the stage\u2014where stories come alive.',
    image: 'theatre',
  },
  {
    title: 'Marketing Workshop',
    facilitator: null,
    copy: 'Crack the algorithm\u2014turn attention into audience.',
    image: 'marketing',
  },
  {
    title: 'Photography & Videography',
    facilitator: null,
    copy: 'Frame it, shoot it, tell it\u2014craft visuals that stop the scroll.',
    image: 'photo',
  },
  {
    title: 'Music Workshop',
    facilitator: null,
    copy: 'Find your sound and learn to share it with the room.',
    image: 'music',
  },
];

export const awards = [
  { title: 'Most Engaging Male Creator', copy: "Every post, a hook\u2014he's got the audience on their toes." },
  { title: 'Most Engaging Female Creator', copy: 'She doesn\u2019t just post, she pulls you in\u2014scroll-stopping energy.' },
  { title: 'Most Influential Male Creator', copy: 'More than followers\u2014it\u2019s the ripple effect of his voice.' },
  { title: 'Most Influential Female Creator', copy: 'When she speaks, trends follow\u2014impact beyond numbers.' },
  { title: 'Creator of the Year', copy: 'The all-rounder who raised the bar and redefined the game.' },
  { title: 'Most Innovative Creator', copy: 'For the one who dared to do different\u2014and nailed it.' },
  { title: 'Trendsetter of the Year', copy: "They didn't follow trends, they made them." },
  { title: 'Community Champion', copy: 'Building, supporting, uplifting\u2014a creator who creates space for others.' },
  { title: 'Most Consistent Creator', copy: 'No off days\u2014just pure, passionate posting day after day.' },
  { title: 'Creator for Social Impact', copy: 'For using content as a catalyst for change.' },
  { title: 'Storyteller of the Year', copy: 'Words, visuals, or reels\u2014they turn stories into magic.' },
  { title: 'Visual Aestheticist', copy: 'Painting the city through the lens\u2014beauty, culture, and soul.' },
  { title: 'Best Collaborative Creator', copy: 'Teamwork that hits different\u2014creating magic with others.' },
  { title: 'Creator Beyond Age', copy: 'Proof that great content has no age limit.' },
  { title: 'Fastest Growing Influencer', copy: 'From unknown to unstoppable\u2014skyrocketing reach, one post at a time.' },
];

export const activities = [
  {
    title: 'Photography Exhibition',
    copy: '50 frames. Endless stories. A visual love letter to Madhya Pradesh.',
    image: 'exhibition',
  },
  {
    title: 'Panel Discussion with Top-Tier Creators',
    copy: 'Real talk, raw journeys, and unfiltered insights from the best in the game.',
    image: 'panel',
  },
  {
    title: '6 Workshops Across Different Categories',
    copy: 'Skill up, level up \u2014 hands-on sessions to fuel your creative fire.',
    image: 'workshops-grid',
  },
];

export const testimonials = [
  {
    handle: '@nanukasafar',
    quote: 'Honoured to receive the Youngest Creator Award.',
  },
  {
    handle: '@bazarvilleindia',
    quote: 'This event truly pushed our creative boundaries.',
  },
  {
    handle: '@techplusgadgets',
    quote: 'One of the best creator events I\u2019ve ever been part of.',
  },
];

export const tickets = [
  {
    id: 'first100',
    label: 'FIRST 100',
    date: '31-AUG-2025',
    price: 300,
    originalPrice: null,
    status: 'sold-out',
  },
  {
    id: 'early-bird',
    label: 'Early Bird',
    date: '31-AUG-2025',
    price: 500,
    originalPrice: 750,
    status: 'available',
  },
  {
    id: 'standard',
    label: 'Standard',
    date: '31-AUG-2025',
    price: null,
    startsFrom: '25th August',
    status: 'upcoming',
  },
];

export const agenda = [
  {
    title: 'Power-Packed Workshops',
    time: '11:00 AM \u2013 2:00 PM',
    open: true,
    body: 'intro',
    items: [
      'AI Integration in content',
      'Marketing Workshop',
      'Entrepreneurship Workshop',
      'Photography & Videography',
      'Theatre & Acting',
      'Music Workshop',
      'Stage Presence',
    ],
  },
  {
    title: 'Panel Discussions & Keynote Sessions',
    time: '2:30 PM \u2013 4:30 PM',
    open: false,
    items: [],
  },
  {
    title: 'Awards & Performances',
    time: '5:00 PM \u2013 8:00 PM',
    open: false,
    items: [],
  },
  {
    title: 'Live Music & DJ Night',
    time: '8:30 PM \u2013 10:00 PM',
    open: false,
    items: [],
  },
];

export const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Our Journey', href: '#journey' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Highlights', href: '#highlights' },
  { label: '2026 \u2013 Coming Soon', href: '#coming-soon-2026' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Shipping & Delivery Policy', href: '/shipping-policy' },
];

// ---------------------------------------------------------------------------
// 2026 edition content — powers the new default homepage ("/"). The 2025
// exports above are untouched and continue to power the archived /2025 page.
// ---------------------------------------------------------------------------

export const siteSettings2026 = {
  ...siteSettings,
  eventName: 'Bhopal Creators Summit 2026',
  tagline: 'BCS IS BACK.',
  date: '24 OCT',
  dateFull: '24 October 2026',
  venue: 'Taj Lakefront',
  venueFull: 'Taj Lakefront, Bhopal',
  // Live ticketing link for the 2026 edition (eventman.live). Centralised here
  // so every 2026 CTA — navbar, hero, coming-soon, section CTAs, floating
  // button — points at the same place and only needs updating in one spot.
  ticketUrl: 'https://qr.eventman.live/event/6a884051c58033bcd9e2a8dd',
};

export const aboutContent2026 = {
  eyebrow: 'BHOPAL CREATORS SUMMIT — 2026',
  title: 'About the Summit',
  paragraphs: [
    "BCS is back. After three editions and a community that's grown louder every year, the Bhopal Creators Summit returns in 2026 to bring Madhya Pradesh's creators together once again — bigger stages, deeper collaborations, and a lot more surprises in store.",
    "We're still finalising the date, the venue, and everything in between. But the mission stays the same: celebrate the region's creative talent and give every kind of creator — photographers, filmmakers, influencers, and everyone in between — a room worth showing up for.",
  ],
  highlights: [
    {
      icon: 'Mic',
      title: 'Live Performances',
      copy: 'Dance, music, and stand-up comedy are coming back to the stage — details dropping soon.',
    },
    {
      icon: 'Heart',
      title: 'Collaboration Zone',
      copy: 'A space for creators and brands to meet, exchange ideas, and kick off projects worth watching.',
    },
    {
      icon: 'Presentation',
      title: 'Creator Talks',
      copy: 'Candid conversations with the creators shaping the region\u2019s digital culture — now in its 4th year.',
    },
  ],
};

export const stats2026 = [
  { value: '1200+', label: 'Creators Attended' },
  { value: '50M+', label: 'Overall Reach' },
  { value: '5L+', label: 'Impressions' },
  { value: '20+', label: 'Brands Associations' },
  { value: '\u221E', label: 'Networking' },
];

// ---------------------------------------------------------------------------
// Creator Season 2026 — general event content, sourced from the official
// sponsorship PDF. Powers the 2026 homepage (the parts that describe the
// season itself, not the sponsorship pitch — that lives in sponsorship2026
// below and powers /partner-with-us).
// ---------------------------------------------------------------------------

export const bigIdea2026 = {
  eyebrow: 'THE BIG IDEA',
  title: 'From a One-Day Summit to a 30-Day Creator Carnival',
  copy: "Bhopal Creator Summit has already completed its Third Edition and hosted 1500+ creators, performers and artists. For 2026, we're rebuilding it as Central India's largest creator ecosystem \u2014 a month-long Creator Carnival for photographers, filmmakers, dancers, musicians, painters and digital creators alike, culminating in a flagship one-day summit and awards ceremony.",
  quote:
    'Like a film festival or a startup summit, the goal is to build this into an annual intellectual property \u2014 one that compounds creator engagement, sponsor ROI and media reach every year it returns.',
  stats: [
    { value: '30', label: 'Days of Creator Carnival' },
    { value: '1500+', label: 'Creators, past editions' },
    { value: '50M+', label: 'Combined creator reach' },
    { value: '16', label: 'Sponsorship properties' },
  ],
};

export const seasonStructure2026 = {
  eyebrow: 'SEASON STRUCTURE',
  title: 'The Creator Season Journey',
  intro:
    'Four phases across 30 days, engineered to generate continuous content, community activity and sponsor touchpoints before the flagship finale.',
  phases: [
    {
      number: '01',
      title: 'Early Sponsor Reveal',
      days: 'Day 1',
      items: [
        'Early sponsor reveal & partnership announcements',
        'Registrations open',
        'Digital creator kits distributed',
        'Community activation & theme reveal',
      ],
    },
    {
      number: '02',
      title: 'Creator Challenges',
      days: 'Days 2\u201320',
      items: [
        'Photography, Reels, Film, Podcast, AI, Gaming, Art, Music',
        'Weekly highlights, public voting & creator spotlights',
        'Mentorship from industry leaders',
        'Leaderboard & rewards',
      ],
    },
    {
      number: '03',
      title: 'Community Engagement',
      days: 'Days 5\u201328',
      items: [
        'Workshops & masterclasses',
        'Photo walks, creator meetups & mentorship sessions',
        'Heritage walks & local business connect drives',
        'Running throughout the creator season',
      ],
    },
    {
      number: '04',
      title: 'Grand Finale',
      days: 'Day 30',
      items: [
        'One-day festival: keynotes, panels, exhibitions & performances',
        'Marketplace, live challenges & brand experiences',
        'Creator Awards Night & closing celebration',
        'Live concert & entertainment',
      ],
    },
  ],
};

export const challengeCategories2026 = {
  eyebrow: 'PHASE 02 \u2014 DAYS 2\u201320',
  title: 'Challenges Across Every Art Form',
  intro:
    'Parallel competitions spanning visual, digital and performing arts \u2014 each with weekly highlights, public voting, jury selection and dedicated sponsor integration.',
  groups: [
    {
      title: 'Visual & Travel',
      items: [
        'Photography Championship',
        'Short Film Festival',
        'Documentary Competition',
        'Drone Photography & Film',
        'Mobile Photography',
        'Mobile Filmmaking',
        'Travel Storytelling',
        'Portrait Photography',
      ],
    },
    {
      title: 'Digital & Modern',
      items: [
        'Reel Championship',
        'Editing Challenge',
        'AI Content Challenge',
        'Podcast Competition',
        'Graphic Design Challenge',
        'Thumbnail Design Challenge',
        'Live Streaming Challenge',
        'UGC Trend Challenge',
      ],
    },
    {
      title: 'Performing & Fine Arts',
      items: [
        'Live Painting / Art Battle',
        'Dance Performance Championship',
        'Live Music Competition',
        'Street Theatre & Skit',
        'Spoken Word & Poetry Slam',
        'Stand-Up Comedy Challenge',
        'Calligraphy & Craft',
        'Sculpture & Installation Art',
      ],
    },
  ],
  note: 'Every category \u2014 electronic or non-electronic \u2014 is a sponsorable Category Partner property.',
};

// Live-and-open 2026 competitions & activities (workshops for 2026 haven't
// been announced yet, so workshops2026 stays empty for now — the section
// just won't render on the live site until items exist, see Workshops2026.jsx).
// These fallbacks mirror the shape returned by GET /competitions?year=2026,
// GET /activities?year=2026 and GET /workshops?year=2026 respectively.
export const competitions2026 = [
  {
    slug: 'dance-battle-2026',
    title: 'Dance Battle',
    shortDescription: 'Bring your best moves and battle it out on stage \u2014 solo or crew, your call.',
    icon: 'dance',
  },
  {
    slug: 'food-vlogger-2026',
    title: 'Food Vlogger Competition',
    shortDescription: 'Camera in one hand, plate in the other \u2014 show us how Bhopal eats.',
    icon: 'food',
  },
  {
    slug: 'gaming-2026',
    title: 'Gaming',
    shortDescription: 'Squad up and battle it out \u2014 bragging rights and prizes on the line.',
    icon: 'gaming',
  },
  {
    slug: 'photography-2026',
    title: 'Photography',
    shortDescription: 'Your city, your frame, your story \u2014 capture Bhopal like only you can.',
    icon: 'photography',
  },
  {
    slug: 'documentary-film-2026',
    title: 'Documentary Film',
    shortDescription: 'Short, sharp and real \u2014 tell a true story that needs to be seen.',
    icon: 'documentary',
  },
  {
    slug: 'treasure-hunt-2026',
    title: 'Treasure Hunt',
    shortDescription: 'Clues, chaos and creators \u2014 race across the city to crack it first.',
    icon: 'treasure',
  },
  {
    slug: 'ai-creator-2026',
    title: 'AI Creator',
    shortDescription: 'Prompt it, generate it, own it \u2014 show us what AI-powered creativity looks like.',
    icon: 'ai',
  },
];

export const activities2026 = [
  { title: 'Bike Rally', copy: 'Kick off the season on two wheels \u2014 creators riding together through the city.' },
  { title: 'Jamming', copy: 'Open mic, open strings \u2014 creators jamming together, no script needed.' },
  { title: 'Painting Competition / Wall Art', copy: 'Blank walls, bold colours \u2014 live painting that turns the venue into a canvas.' },
  { title: 'Cleanliness Drive', copy: 'Creators giving back \u2014 a community clean-up with content that actually matters.' },
  { title: 'Sports', copy: 'Friendly matches, real competition \u2014 creators trade cameras for jerseys for a day.' },
  { title: 'Shayari', hostedBy: 'Raghav Singh', copy: 'An evening of verses and vibe, hosted by Raghav Singh.' },
  { title: 'Rap Battle', copy: 'Bars for bars \u2014 an open rap battle for the boldest voices in the room.' },
  { title: 'Fitness', copy: 'Sweat it out together \u2014 a high-energy fitness session to start the day right.' },
  { title: 'Plantation Drive', copy: 'Creators planting more than content \u2014 a green initiative for the city.' },
  { title: 'Fashion', hostedBy: 'Tapti Thakur', copy: 'A styled walk curated by Tapti Thakur, showcasing Bhopal\u2019s fashion-forward creators.' },
  { title: 'Gen Run', copy: 'A community run for every generation of creators \u2014 pace optional, energy mandatory.' },
  { title: 'Well-being', copy: 'Slow down for a bit \u2014 sessions on mindfulness and staying sane in the content grind.' },
  { title: 'Traffic Police', copy: 'A collaboration with Bhopal Traffic Police on road safety awareness, creator-style.' },
  { title: 'Singing', copy: 'Open floor, open mic \u2014 creators showing off their vocal side.' },
  { title: 'Photowalk', copy: 'A guided walk through Bhopal\u2019s most photogenic corners, camera in hand.' },
  { title: 'Flash Mob', copy: 'Unscripted, unexpected \u2014 a flash mob to keep the energy unpredictable.' },
];

// Empty on purpose \u2014 2026 workshops haven't been announced. Workshops2026.jsx
// renders nothing when there's no data, so this just keeps the section hidden
// until real workshops are added from the admin panel.
export const workshops2026 = [];

export const communityEngagement2026 = {
  eyebrow: 'PHASE 03 \u2014 DAYS 5\u201328',
  title: 'Community Engagement, All Month Long',
  intro: 'Recurring, on-ground activities that keep content flowing between the launch and the finale.',
  items: [
    { title: 'Weekend Photo Walks', copy: "Curated walks through Bhopal's lakes & heritage sites" },
    { title: 'Creator Meetups', copy: 'Informal meets for creators to network & collaborate' },
    { title: 'Mentor Sessions', copy: '1:1 and group sessions with established creators' },
    { title: 'Creator Caf\u00e9s', copy: 'Casual pop-up hangouts across the city' },
    { title: 'Local Business Story Project', copy: "Creators tell the stories of Bhopal's small businesses" },
    { title: 'Heritage Walks', copy: "Documenting Bhopal's culture & architecture on camera" },
    { title: 'Networking Mixers', copy: 'Structured brand-creator introductions' },
    { title: 'Community Content Drives', copy: 'Themed weekly prompts driving UGC volume' },
  ],
};

export const grandFinale2026 = {
  eyebrow: 'PHASE 04 \u2014 DAY 30',
  title: 'Grand Finale: A Festival, Not a Conference',
  intro:
    'Multiple parallel experiences running through the day, so every attendee has a reason to be on the floor.',
  items: [
    'Opening Ceremony',
    'Industry Keynotes',
    'Panel Discussions',
    'Workshops',
    'Photography Exhibition',
    'Artwork & Craft Exhibition',
    'Film Festival Screening',
    'Live Performance Stage',
    'Creator Marketplace',
    'Live Podcast Studio',
    'Brand Experience Zone',
    'Networking Lounge',
    'Portfolio Reviews',
    'Sponsor Pavilion',
    'Live Creator Challenges',
    'Awards Ceremony',
  ],
};

export const signatureExperiences2026 = {
  eyebrow: 'WHAT MAKES THIS DIFFERENT',
  title: 'Signature Experiences',
  intro: 'Unique, high-concept formats built to become the identity of the summit.',
  items: [
    { number: '01', title: 'One Battery Challenge' },
    { number: '02', title: '10-Minute Documentary Challenge' },
    { number: '03', title: 'One Location, 100 Stories' },
    { number: '04', title: 'Silent Storytelling Challenge' },
    { number: '05', title: 'One Lens Championship' },
    { number: '06', title: 'Creator Relay' },
    { number: '07', title: 'Sponsor Storytelling Challenge' },
    { number: '08', title: 'Bhopal Time Capsule Project' },
  ],
};

export const creatorAwards2026 = {
  eyebrow: 'SEASON FINALE',
  title: 'The Creator Awards',
  intro:
    'Closing the season by recognising winners from every competition \u2014 the marquee moment of the finale.',
  categories: [
    'Creator of the Year',
    'Emerging Creator',
    'Photographer of the Year',
    'Filmmaker of the Year',
    'Best Reel',
    'Best Documentary',
    'Best AI Creation',
    'Best Travel Story',
    'Best Portrait',
    'Best Performance',
    'Best Visual Artwork',
    'Community Impact Award',
    'Audience Choice Award',
    'Sponsor Choice Award',
  ],
};

// ---------------------------------------------------------------------------
// Creator Season 2026 — Sponsorship deck content, sourced from the official
// sponsorship PDF. Powers the /partner-with-us page.
// ---------------------------------------------------------------------------

export const sponsorship2026 = {
  hero: {
    eyebrow: 'CREATOR SEASON 2026',
    title: 'Partner With Central India\u2019s Largest Creator Ecosystem',
    subtitle:
      '30 days of creator challenges, culture & community \u2014 culminating in a flagship summit & awards night.',
    location: "Central India's Largest Creator Ecosystem \u2014 Bhopal, Madhya Pradesh",
    stats: [
      { value: '1500+', label: 'Creators' },
      { value: '50M+', label: 'Digital Reach' },
      { value: '30', label: 'Days of Creator Season' },
      { value: '100+', label: 'Brand Partners' },
    ],
  },

  whyPartner: {
    eyebrow: 'THE CASE FOR PARTNERSHIP',
    title: 'Why Brands Partner With the Summit',
    reasons: [
      {
        number: '1',
        title: 'On-Site Branding',
        copy: 'Prominent placement at key venue locations, visible to every attendee across the finale.',
      },
      {
        number: '2',
        title: '30 Days of Visibility',
        copy: 'Unlike a one-day event, your brand is present across the full season \u2014 not just one afternoon.',
      },
      {
        number: '3',
        title: 'Positive Brand Association',
        copy: 'Align with a community-first event built around collaboration, creativity and mutual support.',
      },
      {
        number: '4',
        title: 'Live Mentions & Stage Access',
        copy: 'Exclusive stage time by tier, plus live mentions across sessions, workshops and panels.',
      },
      {
        number: '5',
        title: 'Organic Creator Content',
        copy: 'Sponsor-briefed challenges generate real user-generated content, not paid placements.',
      },
      {
        number: '6',
        title: 'Direct Creator Access',
        copy: 'Engage directly with 30\u201350+ creators per property \u2014 the people shaping regional culture online.',
      },
    ],
  },

  properties: {
    eyebrow: 'SPONSORSHIP STRATEGY',
    title: 'Multiple Ownable Properties, Not One Title',
    intro:
      'Instead of selling a single title sponsorship, the Creator Season is built as a portfolio of ownable properties \u2014 giving brands the choice to own a single activity or a slice of the entire season.',
    items: [
      { number: '01', title: 'Photography Championship' },
      { number: '02', title: 'Film Festival' },
      { number: '03', title: 'Reel League' },
      { number: '04', title: 'AI Challenge' },
      { number: '05', title: 'Performing Arts Stage' },
      { number: '06', title: 'Art Battle & Exhibition' },
      { number: '07', title: 'Photo Walk Series' },
      { number: '08', title: 'Podcast Studio' },
      { number: '09', title: 'Creator Marketplace' },
      { number: '10', title: 'Awards Night' },
      { number: '11', title: 'Networking Lounge' },
      { number: '12', title: 'Brand Experience Zone' },
      { number: '13', title: 'Collaboration Zone' },
      { number: '14', title: 'Tech Experience Zone' },
      { number: '15', title: 'Memory Creation Zone' },
      { number: '16', title: 'Marketing Zone' },
    ],
    note: 'Brands can own an individual property outright, or step in at Title, Powered By, Associate or Category Partner level across the whole season.',
  },

  tiers: {
    eyebrow: 'THE OFFER',
    title: 'Sponsorship Tiers',
    target: '\u20b955,00,000',
    rows: [
      { number: '01', tier: 'Title Sponsor', investment: '\u20b915,00,000', unit: 'each', availability: '1' },
      { number: '02', tier: 'Powered By Sponsor', investment: '\u20b910,00,000', unit: 'each', availability: '1' },
      { number: '03', tier: 'Co-Powered By Sponsor', investment: '\u20b97,00,000', unit: 'each', availability: '1' },
      { number: '04', tier: 'Associate Sponsor', investment: '\u20b95,00,000', unit: 'each', availability: '2' },
      { number: '05', tier: 'Category Partner', investment: '\u20b91,00,000', unit: 'each', availability: '6' },
      { number: '06', tier: 'Zone Partner', investment: '\u20b960,000', unit: 'each', availability: '5' },
      { number: '07', tier: 'Activity Partner', investment: '\u20b950,000', unit: 'each', availability: '8' },
      { number: '08', tier: 'Community Supporter', investment: '\u20b950,000', unit: 'each', availability: 'Unlimited' },
    ],
    note: 'Choose one property \u2014 or own the entire Creator Season.',
  },

  tierDetails: [
    {
      tier: 'TIER 01 \u2014 EXCLUSIVE',
      title: 'Title Sponsor',
      investment: '\u20b915,00,000 each',
      availability: '1 only',
      groups: [
        {
          heading: 'Naming & Deliverables',
          items: [
            'Official naming rights \u2014 "[Your Brand] presents Bhopal Creator Summit 2026"',
            'Top-tier logo on main stage, entry arch, ID cards & all event materials',
            'Opening/closing ceremony speaking slot for a brand representative',
            'Prominent brand experience booth at the finale venue',
          ],
        },
        {
          heading: 'Media, Season & Extras',
          items: [
            'Title billing across all 30 days \u2014 launch, challenges & finale content',
            'Title logo in recap film, teaser reels & all press coverage',
            'Custom co-branded reels on official + partner creator handles',
            'One-on-one creator meet slot, brand video screening & custom QR placements',
            'Dedicated 20 VIP sitting area (Pre + During + Post Event)',
            'Full-scale social media promotion (Pre + During + Post Event)',
            'Opportunity to address the audience on stage',
            'Top visibility in YouTube full event video',
            'Featured in press releases & media coverage',
            'Co-branded stage backdrop & media wall',
          ],
        },
      ],
    },
    {
      tier: 'TIER 02 \u2014 EXCLUSIVE',
      title: 'Powered By Sponsor',
      subtitle: 'High impact visibility with strong brand recall',
      investment: '\u20b910,00,000 each',
      availability: '1 only',
      groups: [
        {
          heading: 'Benefits',
          items: [
            'Second-highest logo visibility across event creatives',
            'Branding across key venue touchpoints (stage sides, standees, banners)',
            'Presence in selected outdoor branding in the city',
            'Premium stall space in prime visitor zone',
            'Multiple social media promotions & brand mentions',
            'On-stage acknowledgements during key moments',
            'Logo inclusion in official YouTube event video',
            'Dedicated 15 VIP sitting area',
            'Opportunity for brand activations / engagement',
            'Inclusion in digital marketing campaigns',
            'Featured in limited media coverage mention',
          ],
        },
      ],
    },
    {
      tier: 'TIER 03 \u2014 EXCLUSIVE',
      title: 'Co-Sponsor',
      subtitle: 'Strong brand presence & community connect',
      investment: '\u20b97,00,000 each',
      availability: 'Limited',
      groups: [
        {
          heading: 'Benefits',
          items: [
            'Small-sized logo placement across promotional creatives',
            'Branding at entry points & common areas',
            'Presence in digital promotions & social media campaigns',
            'Dedicated 5 sitting in VIP area',
            'Stage mentions (selective) during event',
            'Space for standee / kiosk setup',
          ],
        },
      ],
    },
    {
      tier: 'TIER 04 \u2014 PREMIUM PARTNER',
      title: 'Associate Sponsor',
      subtitle: 'Supportive brand presence & community visibility',
      investment: '\u20b95,00,000 each',
      availability: '2 only',
      groups: [
        {
          heading: 'Benefits',
          items: [
            'Logo placement on selected event creatives',
            'Branding across shared venue spaces',
            '1\u20132 social media mentions',
            'Dedicated 10 VIP sitting area',
            'Logo inclusion in YouTube end credits',
            'Limited on-stage mentions during the event',
          ],
        },
      ],
    },
  ],

  partnershipTiers: {
    eyebrow: 'PARTNER WITH IMPACT',
    title: 'Partnership Tiers & Benefits',
    intro: 'Choose the right partnership. Maximize your brand impact.',
    highlights: ['Maximum Visibility', 'Creator Connect', 'Brand Growth', 'Business Impact'],
    rows: [
      {
        tier: 'Category Partner',
        investment: '\u20b91,00,000 each',
        benefits: [
          'Logo on all relevant event creatives in your category',
          'On-stage category partner acknowledgement',
          'Branding at category specific zones & backdrops',
          'Digital promotions & social media mentions',
        ],
      },
      {
        tier: 'Zone Partner',
        investment: '\u20b960,000 each',
        benefits: [
          'Branding in a specific zone at the venue',
          'Logo on zone signage & directional branding',
          'Digital promotions & social media mentions',
          'Opportunity for on-ground brand visibility',
        ],
      },
      {
        tier: 'Activity Partner',
        investment: '\u20b950,000 each',
        benefits: [
          'Logo on activity-specific promotions',
          'Branding at activity area',
          'Announcements during activity sessions',
          'Social media mentions',
        ],
      },
      {
        tier: 'Community Supporter',
        investment: '\u20b950,000 each',
        benefits: [
          'Logo on select event creatives',
          'Logo on website & digital thank you page',
          'Social media mention',
          'Certificate of appreciation',
        ],
      },
    ],
    why: {
      title: 'Why Partner With Us?',
      copy: "Be part of Central India's biggest creator movement that connects brands with millions of engaged audiences.",
      stats: [
        { value: '50M+', label: 'Digital Reach' },
        { value: '1000+', label: 'Creators' },
        { value: '30 DAYS', label: 'Creator Carnival' },
        { value: 'MAXIMUM', label: 'Brand Visibility' },
      ],
    },
  },

  cta: {
    eyebrow: 'JOIN US',
    title: 'Partner With Us for Creator Season 2026',
    copy: "The Bhopal Creator Summit is more than an event \u2014 it's a celebration of creativity, collaboration and community. Partner with us for Creator Season 2026 and put your brand at the centre of Central India's largest creator ecosystem.",
    phones: ['+91 7974579553', '+91 8871663113'],
  },
};