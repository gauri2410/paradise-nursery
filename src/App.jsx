import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

function LandingPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Welcome to your happy place</p>
          <h1>Bring home a little <i>paradise.</i></h1>
          <p className="hero-copy">Beautiful, healthy houseplants chosen to make everyday spaces feel a little more alive.</p>
          <Link className="primary-button" to="/plants">Get Started <span>→</span></Link>
        </div>
        <div className="hero-note">Grown with care<br />Packed with love</div>
      </section>
      <AboutUs />
    </main>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
      <footer>© 2025 Paradise Nursery · Let’s grow something beautiful.</footer>
    </div>
  );
}
