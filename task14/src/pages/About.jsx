import './pages.css'

function About() {
  return (
    <div className="page-container">
      <section className="about-section">
        <h1>About ShopHub</h1>
        <p className="lead">
          ShopHub is a leading e-commerce platform dedicated to providing quality products
          and exceptional customer service since 2020.
        </p>
      </section>

      <section className="about-content">
        <div className="about-item">
          <h2>Our Mission</h2>
          <p>
            To revolutionize online shopping by offering a diverse range of high-quality products,
            competitive prices, and an unmatched customer experience. We believe in making shopping
            convenient, affordable, and enjoyable for everyone.
          </p>
        </div>

        <div className="about-item">
          <h2>Our Vision</h2>
          <p>
            To become the world's most customer-centric e-commerce platform, known for innovation,
            reliability, and exceptional value. We strive to empower customers to discover products
            that enhance their lives and connect them with quality brands.
          </p>
        </div>

        <div className="about-item">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li><strong>Customer First:</strong> Your satisfaction is our priority</li>
            <li><strong>Quality:</strong> We ensure only the best products reach you</li>
            <li><strong>Transparency:</strong> Honest pricing and clear communication</li>
            <li><strong>Innovation:</strong> Continuously improving our platform</li>
            <li><strong>Sustainability:</strong> Responsible business practices</li>
          </ul>
        </div>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">👨‍💼</div>
            <h3>John Smith</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👩‍💼</div>
            <h3>Sarah Johnson</h3>
            <p>VP Operations</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👨‍💻</div>
            <h3>Michael Chen</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👩‍💻</div>
            <h3>Emma Davis</h3>
            <p>Head of Marketing</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
