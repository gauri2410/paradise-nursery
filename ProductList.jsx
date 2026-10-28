import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './CartSlice';
import { allPlants, plantCategories } from './data/plants';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartIds = new Set(cartItems.map((item) => item.id));

  return (
    <main className="listing-page">
      <section className="listing-hero">
        <p className="eyebrow">The plant edit</p>
        <h1>Find your new <i>favorite</i> leaf.</h1>
        <p>Curated houseplants for sunny windows, cozy corners, and everything in between.</p>
        <span className="plant-count">{allPlants.length} plants · 3 collections</span>
      </section>
      {plantCategories.map((category) => (
        <section className="category-section" key={category.name}>
          <div className="category-heading">
            <div>
              <p className="eyebrow">Collection</p>
              <h2>{category.name}</h2>
            </div>
            <p>{category.description}</p>
          </div>
          <div className="product-grid">
            {category.plants.map((plant) => {
              const isAdded = cartIds.has(plant.id);
              return (
                <article className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <div className="product-info">
                    <div>
                      <h3>{plant.name}</h3>
                      <p>Easy-care houseplant</p>
                    </div>
                    <strong>${plant.price.toFixed(2)}</strong>
                  </div>
                  <button
                    className={isAdded ? 'add-button added' : 'add-button'}
                    disabled={isAdded}
                    onClick={() => dispatch(addToCart(plant))}
                  >
                    {isAdded ? 'Added to cart' : 'Add to cart'}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
