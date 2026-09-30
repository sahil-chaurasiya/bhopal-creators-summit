import Hero2026 from '../components/Hero2026';
import About2026 from '../components/About2026';
import Stats2026 from '../components/Stats2026';
import BigIdea2026 from '../components/BigIdea2026';
import SeasonStructure2026 from '../components/SeasonStructure2026';
import ChallengeCategories2026 from '../components/ChallengeCategories2026';
import Competitions2026 from '../components/Competitions2026';
import Activities2026 from '../components/Activities2026';
import Workshops2026 from '../components/Workshops2026';
import CommunityEngagement2026 from '../components/CommunityEngagement2026';
import InfluencerBoard2026 from '../components/InfluencerBoard2026';
import KeyInfluencers2026 from '../components/KeyInfluencers2026';
import GrandFinale2026 from '../components/GrandFinale2026';
import SignatureExperiences2026 from '../components/SignatureExperiences2026';
import CreatorAwards2026 from '../components/CreatorAwards2026';
import SponsorCTA from '../components/SponsorCTA';
import OurJourney from '../components/OurJourney';
import ComingSoon2026 from '../components/ComingSoon2026';
import InstagramCTA from '../components/InstagramCTA';
import TicketFloatingCTA from '../components/TicketFloatingCTA';
import SectionJumpNav from '../components/SectionJumpNav';

// Default homepage ("/") — the 2026 edition. The 2025 site lives, unmodified,
// at /2025 via Home2025.jsx.
//
// Note: Tickets and Agenda are intentionally left out here — their fallback
// data is hardcoded to 31-AUG-2025 (sold-out/early-bird tiers, 2025 dates),
// which would contradict the "date & venue TBA" messaging for 2026. Add them
// back once real 2026 ticket data exists.
export default function Home() {
  return (
    <>
      <Hero2026 />
      <About2026 />
      <Stats2026 />
      <BigIdea2026 />
      <SeasonStructure2026 />
      <ChallengeCategories2026 />
      <Competitions2026 />
      <Activities2026 />
      <Workshops2026 />
      <CommunityEngagement2026 />
      <KeyInfluencers2026 />
      <InfluencerBoard2026 />
      <GrandFinale2026 />
      <SignatureExperiences2026 />
      <CreatorAwards2026 />
      <SponsorCTA />
      <OurJourney />
      <ComingSoon2026 />
      <InstagramCTA />
      <TicketFloatingCTA />
      <SectionJumpNav />
    </>
  );
}