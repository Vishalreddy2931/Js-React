import './pages.css'

function Home() {
  return (
    <div className="page-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ShopHub</h1>
          <p>Your one-stop destination for quality products and exceptional service</p>
          <button className="cta-button">Start Shopping</button>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">🛒</div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Shipping</h3>
            <p>Get your orders delivered quickly with our express shipping options</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Secure Payment</h3>
            <p>Your transactions are protected with industry-leading security</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Easy Returns</h3>
            <p>30-day money-back guarantee on all products</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎁</div>
            <h3>Great Deals</h3>
            <p>Enjoy exclusive discounts and special offers daily</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat">
          <h3>10K+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat">
          <h3>50K+</h3>
          <p>Products Available</p>
        </div>
        <div className="stat">
          <h3>100+</h3>
          <p>Brand Partners</p>
        </div>
        <div className="stat">
          <h3>24/7</h3>
          <p>Customer Support</p>
        </div>
      </section>
    </div>
  )
}

export default Home
