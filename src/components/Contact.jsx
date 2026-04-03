import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`✅ Message sent! I'll get back to you within 24 hours.`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-5" style={{ background: '#000000' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="badge px-3 py-2 rounded-pill" style={{ background: '#2A1A0A', color: '#FF6B00', fontWeight: 'bold' }}>Get in Touch</span>
          <h2 className="display-5 fw-bold mt-3" style={{ color: '#ffffff' }}>Let's <span style={{ color: '#FF6B00' }}>collaborate</span></h2>
          <p style={{ color: '#b0b0b0' }}>Open for freelance, full-time opportunities, or tech discussions</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow rounded-4 p-4 p-md-5" style={{ background: '#111111', border: '1px solid #2a2a2a' }}>
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold" style={{ color: '#e0e0e0' }}>Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      className="form-control rounded-3 py-2" 
                      style={{ 
                        background: '#1a1a1a', 
                        border: `2px solid ${focused === 'name' ? '#FF6B00' : '#2a2a2a'}`,
                        color: '#ffffff',
                        transition: 'all 0.2s'
                      }} 
                      placeholder="John Doe" 
                      value={formData.name} 
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      required 
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold" style={{ color: '#e0e0e0' }}>Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      className="form-control rounded-3 py-2" 
                      style={{ 
                        background: '#1a1a1a', 
                        border: `2px solid ${focused === 'email' ? '#FF6B00' : '#2a2a2a'}`,
                        color: '#ffffff',
                        transition: 'all 0.2s'
                      }} 
                      placeholder="hello@example.com" 
                      value={formData.email} 
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      required 
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold" style={{ color: '#e0e0e0' }}>Message</label>
                    <textarea 
                      rows="4" 
                      name="message" 
                      className="form-control rounded-3" 
                      style={{ 
                        background: '#1a1a1a', 
                        border: `2px solid ${focused === 'message' ? '#FF6B00' : '#2a2a2a'}`,
                        color: '#ffffff',
                        transition: 'all 0.2s'
                      }} 
                      placeholder="Tell me about your project or collaboration idea..." 
                      value={formData.message} 
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      required>
                    </textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn px-5 py-2 rounded-pill fw-semibold" style={{ 
                      background: 'linear-gradient(135deg, #FF6B00, #FF8533)', 
                      color: '#000000',
                      border: 'none',
                      fontWeight: 'bold',
                      fontSize: '1.1rem'
                    }}>
                      <i className="bi bi-send-fill me-2"></i>Send Message
                    </button>
                  </div>
                </div>
              </form>
              <hr className="my-4" style={{ background: '#2a2a2a' }} />
              <div className="d-flex justify-content-center gap-4">
                <a href="#" className="fs-2" style={{ color: '#FF6B00', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.target.style.color = '#FF8533'; e.target.style.transform = 'translateY(-3px)'; e.target.style.display = 'inline-block' }} onMouseLeave={(e) => { e.target.style.color = '#FF6B00'; e.target.style.transform = 'translateY(0)' }}><i className="bi bi-github"></i></a>
                <a href="#" className="fs-2" style={{ color: '#FF6B00', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.target.style.color = '#FF8533'; e.target.style.transform = 'translateY(-3px)'; e.target.style.display = 'inline-block' }} onMouseLeave={(e) => { e.target.style.color = '#FF6B00'; e.target.style.transform = 'translateY(0)' }}><i className="bi bi-linkedin"></i></a>
                <a href="#" className="fs-2" style={{ color: '#FF6B00', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.target.style.color = '#FF8533'; e.target.style.transform = 'translateY(-3px)'; e.target.style.display = 'inline-block' }} onMouseLeave={(e) => { e.target.style.color = '#FF6B00'; e.target.style.transform = 'translateY(0)' }}><i className="bi bi-twitter-x"></i></a>
                <a href="#" className="fs-2" style={{ color: '#FF6B00', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.target.style.color = '#FF8533'; e.target.style.transform = 'translateY(-3px)'; e.target.style.display = 'inline-block' }} onMouseLeave={(e) => { e.target.style.color = '#FF6B00'; e.target.style.transform = 'translateY(0)' }}><i className="bi bi-stack-overflow"></i></a>
              </div>
              <div className="text-center mt-3">
                <small style={{ color: '#666' }}>
                  <i className="bi bi-envelope me-1"></i> dullah9787@example.com
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact