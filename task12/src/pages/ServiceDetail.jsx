import { useParams, Link } from 'react-router-dom'
import './pages.css'

function ServiceDetail() {
  const { id } = useParams()

  const serviceDetails = {
    1: {
      title: 'Free Shipping',
      description: 'Fast and reliable shipping options',
      content: `Our shipping service is designed to get your products to you as quickly and safely as possible.
      
      We partner with leading logistics providers to ensure your packages arrive in perfect condition.
      
      Every order is tracked in real-time, and you'll receive updates at each stage of delivery.`,
      benefits: [
        'No hidden fees',
        'Insurance included',
        'Professional handling',
        'Real-time tracking'
      ]
    },
    2: {
      title: 'Payment Options',
      description: 'Safe and secure payment methods',
      content: `We accept multiple payment methods to give you flexibility and convenience.
      
      All transactions are encrypted and processed through industry-leading security protocols.
      
      Choose the payment method that works best for you - we support them all!`,
      benefits: [
        'SSL encryption',
        'Fraud protection',
        'Instant confirmation',
        'Secure transactions'
      ]
    },
    3: {
      title: 'Customer Support',
      description: 'Always here to help',
      content: `Our customer support team is available 24/7 to assist you with any questions or concerns.
      
      We pride ourselves on quick response times and effective solutions.
      
      Your satisfaction is our top priority.`,
      benefits: [
        'Multilingual support',
        'Fast response time',
        'Expert assistance',
        'Problem resolution'
      ]
    },
    4: {
      title: 'Product Warranty',
      description: 'Protection for your purchases',
      content: `Every product comes with a comprehensive warranty for your peace of mind.
      
      We stand behind the quality of our products and offer hassle-free warranty claims.
      
      If something goes wrong, we'll make it right.`,
      benefits: [
        'Full coverage',
        'Easy claims process',
        'No deductibles',
        'Quick replacements'
      ]
    },
    5: {
      title: 'Loyalty Program',
      description: 'Rewards for your loyalty',
      content: `Join our loyalty program and earn rewards on every purchase you make.
      
      Accumulate points that can be redeemed for discounts and exclusive offers.
      
      The more you shop, the more you save!`,
      benefits: [
        'Point accumulation',
        'Exclusive perks',
        'Special pricing',
        'Early access'
      ]
    },
    6: {
      title: 'Easy Returns',
      description: 'Shop with confidence',
      content: `We offer a 30-day return policy with no questions asked.
      
      If you're not satisfied with your purchase, simply return it for a full refund or exchange.
      
      Your satisfaction guarantee is our commitment to you.`,
      benefits: [
        'No restocking fee',
        'Free returns',
        'Full refunds',
        'Quick processing'
      ]
    }
  }

  const service = serviceDetails[id] || serviceDetails[1]

  return (
    <div className="page-container">
      <Link to="/services" className="back-link">← Back to Services</Link>

      <section className="service-detail">
        <h1>{service.title}</h1>
        <p className="lead">{service.description}</p>

        <div className="detail-content">
          <p>{service.content}</p>

          <h3>Key Benefits:</h3>
          <div className="benefits-list">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="detail-cta">
          <Link to="/products" className="cta-button">
            Explore Our Products
          </Link>
          <Link to="/contact" className="secondary-button">
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail
