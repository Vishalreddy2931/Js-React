import { useState } from 'react'
import { Link } from 'react-router-dom'
import './pages.css'

function Services() {
  const [activeService, setActiveService] = useState(null)

  const services = [
    {
      id: 1,
      title: 'Free Shipping',
      description: 'Orders over $50 ship free. Express options available for faster delivery.',
      icon: '📦',
      details: [
        'Standard shipping: 5-7 business days',
        'Express shipping: 2-3 business days',
        'Same-day delivery in select areas',
        'Free returns shipping'
      ]
    },
    {
      id: 2,
      title: 'Payment Options',
      description: 'Multiple secure payment methods for your convenience.',
      icon: '💳',
      details: [
        'Credit/Debit cards',
        'Digital wallets (Apple Pay, Google Pay)',
        'Buy now, pay later options',
        'Bank transfers'
      ]
    },
    {
      id: 3,
      title: 'Customer Support',
      description: '24/7 dedicated support team ready to help.',
      icon: '🎧',
      details: [
        'Live chat support',
        'Email support within 2 hours',
        'Phone support 9 AM - 9 PM',
        'Video call assistance available'
      ]
    },
    {
      id: 4,
      title: 'Product Warranty',
      description: 'Comprehensive warranty and protection plans.',
      icon: '✅',
      details: [
        '1-year manufacturer warranty',
        'Extended warranty options',
        'Accidental damage protection',
        'Replacement guarantee'
      ]
    },
    {
      id: 5,
      title: 'Loyalty Program',
      description: 'Earn rewards on every purchase.',
      icon: '⭐',
      details: [
        '1 point per dollar spent',
        'Exclusive member discounts',
        'Early access to sales',
        'Birthday special offers'
      ]
    },
    {
      id: 6,
      title: 'Easy Returns',
      description: '30-day hassle-free return policy.',
      icon: '🔄',
      details: [
        '30-day money-back guarantee',
        'Free return shipping',
        'No questions asked policy',
        'Full refund or exchange'
      ]
    }
  ]

  return (
    <div className="page-container">
      <section className="services-header">
        <h1>Our Services</h1>
        <p>Comprehensive solutions to make your shopping experience seamless</p>
      </section>

      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button
              className="learn-more-btn"
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              {activeService === service.id ? 'Show Less' : 'Learn More'}
            </button>
            {activeService === service.id && (
              <div className="service-details">
                <ul>
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                <Link to={`/services/${service.id}`} className="view-details-link">
                  View Full Details →
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
