import React from 'react';
import { FaDiscord, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/CommunityPage.css';

const CommunityPage = () => {
  return (
    <div className="communityContainer">
      <div className="communityBanner">
        <h1 className="communityTitle">Join the NFTEduMint Community</h1>
        <p className="communityDescription">
          Connect, learn, and grow with other NFT enthusiasts. Join us in creating the future of dynamic, educational NFTs.
        </p>
        <div className="socialIcons">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="socialLink">
            <FaDiscord className="icon discord" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="socialLink">
            <FaTwitter className="icon twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="socialLink">
            <FaInstagram className="icon instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="socialLink">
            <FaLinkedin className="icon linkedin" />
          </a>
        </div>
      </div>

      <div className="featuredEvents">
        <h2 className="sectionTitle">Featured Events</h2>
        <div className="eventsGrid">
          <div className="eventCard">
            <img src="../../Wallpaper/2.avif" alt="Event 1" className="eventImage" />
            <h3 className="eventTitle">NFT Workshop</h3>
            <p className="eventDescription">Learn the basics of creating dynamic NFTs with industry experts.</p>
            <button className="eventButton">Join Event</button>
          </div>
          <div className="eventCard">
            <img src="../../Wallpaper/1.avif" alt="Event 2" className="eventImage" />
            <h3 className="eventTitle">Community AMA</h3>
            <p className="eventDescription">Join our community AMA to ask questions and share ideas.</p>
            <button className="eventButton">Learn More</button>
          </div>
          <div className="eventCard">
            <img src="../../Wallpaper/3.avif" alt="Event 3" className="eventImage" />
            <h3 className="eventTitle">Governance Meeting</h3>
            <p className="eventDescription">Participate in our governance meeting to shape the future of NFTEduMint.</p>
            <button className="eventButton">Participate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
