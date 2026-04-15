import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-5" style={{ background: '#0a0a0a' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="badge px-3 py-2 rounded-pill" style={{ background: '#2A1A0A', color: '#FF6B00', fontWeight: 'bold' }}>About me</span>
          <h2 className="display-5 fw-bold mt-3" style={{ color: '#ffffff' }}>Full-Stack <span style={{ color: '#FF6B00' }}>Developer</span></h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-sm rounded-4 p-4 p-lg-5" style={{ background: '#111111', border: '1px solid #2a2a2a', transition: 'transform 0.3s' }}>
              <div className="row g-4 align-items-center">
                {/* Image on Left */}
                <div className="col-md-5 text-center">
                  <div style={{
                    position: 'relative',
                    display: 'inline-block'
                  }}>
                    {/* Glow effect behind image */}
                    <div style={{
                      position: 'absolute',
                      inset: '-10px',
                      background: 'linear-gradient(135deg, #FF6B00, #FF8533)',
                      borderRadius: '20px',
                      opacity: 0.3,
                      filter: 'blur(20px)',
                      zIndex: 0
                    }}></div>
                    
                    {/* Main Image */}
                    <img 
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop" 
                      alt="Developer coding" 
                      style={{
                        width: '100%',
                        maxWidth: '280px',
                        height: 'auto',
                        borderRadius: '20px',
                        border: '3px solid #FF6B00',
                        boxShadow: '0 0 30px rgba(255,107,0,0.2)',
                        position: 'relative',
                        zIndex: 1,
                        objectFit: 'cover'
                      }}
                    />
                    
                    {/* Overlay icon */}
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      background: '#000000',
                      border: '2px solid #FF6B00',
                      borderRadius: '50%',
                      padding: '8px',
                      zIndex: 2
                    }}>
                      <i className="bi bi-laptop-fill" style={{ color: '#FF6B00', fontSize: '1.2rem' }}></i>
                    </div>
                  </div>
                </div>
                
                {/* Content on Right */}
                <div className="col-md-7">
                  <h3 className="fw-semibold" style={{ color: '#ffffff' }}>I build <span style={{ color: '#FF6B00' }}>full-stack applications</span> that scale.</h3>
                  <p style={{ color: '#b0b0b0', lineHeight: '1.7' }}>With 4+ years of experience in full-stack development, I specialize in creating robust, scalable web applications using the MERN stack. I'm passionate about writing clean code, optimizing performance, and building seamless user experiences.</p>
                  <p style={{ color: '#b0b0b0' }} className="mb-0">
                    <strong style={{ color: '#FF6B00' }}>🎯 Career goal:</strong> To architect and build high-impact Applications that solve real-world problems while mentoring the next generation of developers.
                  </p>
                  <div className="mt-3">
                    <i className="bi bi-check-circle-fill me-2" style={{ color: '#FF6B00' }}></i> 10+ Completed Projects
                    <br />
                    <i className="bi bi-check-circle-fill me-2" style={{ color: '#FF6B00' }}></i> 3+ Years of Node.js Experience
                    <br />
                    <i className="bi bi-check-circle-fill me-2" style={{ color: '#FF6B00' }}></i> 15+ Happy Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About