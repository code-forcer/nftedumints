import { SectionWrapper, Features, Download } from '../components';
import assets from '../assets';

const HomePage = () => (
  <>
    <SectionWrapper 
      title="NFTEduMint: Your Gateway to the NFT Revolution"
      description="Explore a world of unique digital assets! Discover, collect, and showcase evolving NFTs in a vibrant community. Join millions on the NFTEduMint Marketplace and unlock the future of digital ownership."
      showBtn
      mockupImg={assets.homeHero}
      banner="banner"
    />
    <SectionWrapper 
      title="Experience Effortless Navigation"
      description="Dive into a seamless and interactive UI designed for all users. At NFTEduMint, we prioritize your experience, ensuring every click brings you closer to your dream NFT."
      mockupImg={assets.homeCards}
      reverse
    />
    <Features />
    <SectionWrapper 
      title="NFT Access Anytime, Anywhere"
      description="Whether on your desktop, tablet, or smartphone, NFTEduMint offers a fully responsive platform that adapts to your lifestyle. Enjoy the same great features on any device!"
      mockupImg={assets.feature}
      reverse
    />
    <SectionWrapper 
      title="Display Your Digital Treasures"
      description="Showcase your unique NFT collection in a beautiful and user-friendly interface. Share your passion with others and gain recognition within the NFTEduMint community."
      mockupImg={assets.mockup}
      banner="banner02"
    />
    <Download 
      title="Get Started Today!"
      description="Download the NFTEduMint app now and embark on your NFT journey. Available on both the Play Store and Apple Store."
      ctaText="Download Now"
    />
  </>
);

export default HomePage;
