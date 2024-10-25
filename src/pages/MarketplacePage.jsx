import React from 'react';
import '../styles/MarketplacePage.css';

const nftItems = [
  {
    id: 1,
    title: "The Journey Begins",
    creator: "Creator A",
    price: "2.5 ETH",
    imageUrl: "../wallpaper/1235837929767829526.jpeg",
  },
  {
    id: 2,
    title: "Ocean of Dreams",
    creator: "Creator B",
    price: "3.0 ETH",
    imageUrl: "../wallpaper/1235837965133942814.jpeg",
  },
  {
    id: 3,
    title: "Digital Evolution",
    creator: "Creator C",
    price: "1.8 ETH",
    imageUrl: "../wallpaper/1235839521699008513.jpeg",
  },
  {
    id: 4,
    title: "Colorful Journey",
    creator: "Creator D",
    price: "2.2 ETH",
    imageUrl: "../wallpaper/1235839159931764756.jpeg",
  },
  {
    id: 5,
    title: "Virtual Landscape",
    creator: "Creator E",
    price: "4.5 ETH",
    imageUrl: "../wallpaper/1247942154572267550.jpeg",
  },
];

const MarketplacePage = () => (
  <div className="marketplaceContainer">
    <h1 className="marketplaceTitle">NFT Marketplace</h1>
    <p className="marketplaceDescription">
      Explore and purchase unique NFTs from a range of creators on NFTEduMint Marketplace.
    </p>
    
    <div className="nftGrid">
      {nftItems.map(nft => (
        <div key={nft.id} className="nftCard">
          <img src={nft.imageUrl} alt={nft.title} className="nftImage" />
          <h2 className="nftTitle">{nft.title}</h2>
          <p className="nftCreator">by {nft.creator}</p>
          <p className="nftPrice">{nft.price}</p>
          <button className="buyButton">Buy Now</button>
        </div>
      ))}
    </div>
  </div>
);

export default MarketplacePage;
