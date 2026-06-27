import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useFetch } from '../hooks/useCustomHooks'
import './pages.css'

function Products() {
  const [filter, setFilter] = useState('all')
  const { addToCart } = useContext(CartContext)
  const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products')

  const categories = ['all', 'electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing']
  const filteredProducts = products
    ? products.filter(p => filter === 'all' || p.category === filter)
    : []

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="page-container">
        <div className="error-state">
          <p>Error loading products: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page-container">
      <h1>Our Products</h1>

      <div className="filter-section">
        <h3>Filter by Category:</h3>
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-content">
              <h3>{product.title}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-description">{product.description.substring(0, 100)}...</p>
              <div className="product-footer">
                <div className="product-rating">
                  <span className="stars">⭐ {product.rating.rate}</span>
                  <span className="reviews">({product.rating.count} reviews)</span>
                </div>
                <div className="product-price">
                  <span className="price">${product.price}</span>
                </div>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="empty-state">
          <p>No products found in this category</p>
        </div>
      )}
    </div>
  )
}

export default Products
