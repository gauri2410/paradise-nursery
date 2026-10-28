import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decreaseQuantity, increaseQuantity, removeFromCart } from './CartSlice';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!items.length) {
    return (
      <main className="cart-page empty-cart">
        <p className="eyebrow">Your cart</p>
        <h1>A little empty in here.</h1>
        <p>Choose a leafy companion and it will appear here.</p>
        <Link className="primary-button" to="/plants">Browse plants</Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-header">
        <div>
          <p className="eyebrow">Your cart</p>
          <h1>Good choices.</h1>
        </div>
        <p>{items.length} unique plant{items.length === 1 ? '' : 's'}</p>
      </div>
      <div className="cart-layout">
        <section className="cart-items" aria-label="Shopping cart items">
          {items.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div>
                  <h2>{item.name}</h2>
                  <p>${item.price.toFixed(2)} each</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => dispatch(decreaseQuantity(item.id))} aria-label={`Decrease ${item.name} quantity`}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))} aria-label={`Increase ${item.name} quantity`}>+</button>
                </div>
              </div>
              <div className="cart-item-total">
                <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            </article>
          ))}
        </section>
        <aside className="order-summary">
          <p className="eyebrow">Order summary</p>
          <div><span>Plants</span><strong>${total.toFixed(2)}</strong></div>
          <div><span>Delivery</span><span className="free">Free</span></div>
          <hr />
          <div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
          <button className="primary-button checkout-button" onClick={() => window.alert('Coming Soon!')}>Checkout</button>
          <Link className="continue-link" to="/plants">← Continue shopping</Link>
        </aside>
      </div>
    </main>
  );
}
