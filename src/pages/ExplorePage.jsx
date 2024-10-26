import React from 'react';
import '../styles/ExplorePage.css';

const nftData = [
  {
    id: 1,
    title: "Digital Skill Mastery",
    description: "Earn badges and track skill levels with evolving NFTs based on your learning progress.",
    imageUrl: "../Wallpaper/1235837944728915968.jpeg",
  },
  {
    id: 2,
    title: "Project-Based Learning",
    description: "Showcase applied knowledge with NFTs evolving as you complete real-world projects.",
    imageUrl: "../Wallpaper/1235837922792706099.jpeg",
  },
  {
    id: 3,
    title: "Consistency Streak",
    description: "Maintain a streak and watch your NFT garden grow with each login.",
    imageUrl: "../Wallpaper/1235837929767829526.jpeg",
  },
  {
    id: 4,
    title: "Peer Mentorship",
    description: "NFTs that evolve as you help others and contribute knowledge to the community.",
    imageUrl: "../Wallpaper/1235838683068764200.jpeg",
  },
];

const ExplorePage = () => (
  <div className="exploreContainer">
    <h1 className="exploreTitle">Explore Educational NFTs</h1>
    <p className="exploreDescription">
      Discover a collection of dynamic, educational NFTs that evolve with your learning achievements and milestones.
    </p>
    <div className="nftGrid">
      {nftData.map(nft => (
        <div key={nft.id} className="nftCard">
          <img src={nft.imageUrl} alt={nft.title} className="nftImage" />
          <h2 className="nftTitle">{nft.title}</h2>
          <p className="nftDescription">{nft.description}</p>
          <button className="nftButton">View NFT</button>
        </div>
      ))}
    </div>
  </div>
);

export default ExplorePage;
