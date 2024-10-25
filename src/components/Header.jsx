import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing menu and close icons
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="navbar">
        <a target="_blank" href="/">
          <span className="logo"><img src="/favicon.png" alt="Logo" /></span>
        </a>

        <nav className={`nav ${isMobileMenuOpen ? 'mobileNavOpen' : ''}`}>
          <ul>
            <li>
              <a href="/" className="navItem activeNavItem">Home</a>
            </li>
            <li>
              <a href="/explore" className="navItem">Explore</a>
            </li>
            <li>
              <a href="/create" className="navItem">Create</a>
            </li>
            <li>
              <a href="/marketplace" className="navItem">Marketplace</a>
            </li>
            <li>
              <a href="/community" className="navItem">Community</a>
            </li>
          </ul>
        </nav>

        <button className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <form className="searchForm">
        <input
          type="text"
          placeholder="Search NFTs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="searchInput"
        /> &nbsp;
        <button type="submit" className="searchButton">Search</button>
      </form>
    </header>
  );
};

export default Header;
