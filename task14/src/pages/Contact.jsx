import { useFormValidation } from '../hooks/useCustomHooks'
import './pages.css'

function Contact() {
  const validate = (values) => {
    const errors = {}
    if (!values.name.trim()) errors.name = 'Name is required'
    if (!values.email.trim()) errors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Email is invalid'
    if (!values.subject.trim()) errors.subject = 'Subject is required'
    if (!values.message.trim()) errors.message = 'Message is required'
    if (values.message.length < 10) errors.message = 'Message must be at least 10 characters'
    return errors
  }

  const onSubmit = async (values) => {
    console.log('Form submitted:', values)
    alert('Thank you for contacting us! We will get back to you soon.')
  }

  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } =
    useFormValidation(
      { name: '', email: '', subject: '', message: '' },
      onSubmit,
      validate
    )

  return (
    <div className="page-container">
      <h1>Contact Us</h1>

      <div className="contact-layout">
        <section className="contact-info">
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

          <div className="contact-details">
            <div className="contact-item">
              <h3>📞 Phone</h3>
              <p>+1 (555) 123-4567</p>
              <p>Mon - Fri: 9 AM - 6 PM</p>
            </div>

            <div className="contact-item">
              <h3>📧 Email</h3>
              <p>support@shophub.com</p>
              <p>info@shophub.com</p>
            </div>

            <div className="contact-item">
              <h3>📍 Address</h3>
              <p>123 Commerce Street</p>
              <p>New York, NY 10001</p>
            </div>

            <div className="contact-item">
              <h3>⏰ Hours</h3>
              <p>Monday - Friday: 9 AM - 6 PM</p>
              <p>Saturday - Sunday: 10 AM - 4 PM</p>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.name && errors.name ? 'error' : ''}
              />
              {touched.name && errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.email && errors.email ? 'error' : ''}
              />
              {touched.email && errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.subject && errors.subject ? 'error' : ''}
              />
              {touched.subject && errors.subject && <span className="error-message">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.message && errors.message ? 'error' : ''}
              />
              {touched.message && errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Contact
