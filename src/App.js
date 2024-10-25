import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage.jsx';
import ExplorePage from './pages/ExplorePage';
import CreatePage from './pages/CreatePage';
import MarketplacePage from './pages/MarketplacePage';
import CommunityPage from './pages/CommunityPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
