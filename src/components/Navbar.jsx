import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const itemCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-mark">✦</span>
        <span>Paradise <em>Nursery</em></span>
      </Link>
      <nav aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-link">
          Cart <span className="cart-count" aria-label={`${itemCount} items`}>{itemCount}</span>
        </NavLink>
      </nav>
    </header>
  );
}
