import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer style={{ 
      background: '#050505', 
      borderTop: '2px solid #FF6B00', 
      color: '#e0e0e0',
      position: 'relative',
      overflow: 'hidden'
    }} className="pt-5 pb-4">
      {/* Animated background line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #FF6B00, #FF8533, transparent)',
        animation: 'slideGlow 3s ease-in-out infinite'
      }}></div>
      
      <style>{`
        @keyframes slideGlow {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }
      `}</style>
      
      <div className="container">
        <div className="row gy-4">
          {/* Logo & Description */}
          <div className="col-md-4 text-center text-md-start">
            <h4 className="fw-bold" style={{ 
              background: 'linear-gradient(135deg, #FF6B00, #FF8533)', 
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text', 
              color: 'transparent', 
              fontSize: '1.8rem',
              marginBottom: '1rem'
            }}>
              dullah<span className="fw-light">Portfolio</span>
            </h4>
            <p className="small mb-0 opacity-75" style={{ lineHeight: '1.6' }}>
              Building scalable web applications with modern tech stack.
              <br />
              React • Node.js • Full-Stack Development
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-md-4 text-center">
            <h6 className="fw-bold mb-3" style={{ color: '#FF6B00' }}>Quick Links</h6>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href="#home" className="text-decoration-none" style={{ color: '#b0b0b0', transition: 'color 0.2s' }} 
                 onMouseEnter={(e) => e.target.style.color = '#FF6B00'} 
                 onMouseLeave={(e) => e.target.style.color = '#b0b0b0'}>
                Home
              </a>
              <a href="#about" className="text-decoration-none" style={{ color: '#b0b0b0', transition: 'color 0.2s' }} 
                 onMouseEnter={(e) => e.target.style.color = '#FF6B00'} 
                 onMouseLeave={(e) => e.target.style.color = '#b0b0b0'}>
                About
              </a>
              <a href="#skills" className="text-decoration-none" style={{ color: '#b0b0b0', transition: 'color 0.2s' }} 
                 onMouseEnter={(e) => e.target.style.color = '#FF6B00'} 
                 onMouseLeave={(e) => e.target.style.color = '#b0b0b0'}>
                Skills
              </a>
              <a href="#projects" className="text-decoration-none" style={{ color: '#b0b0b0', transition: 'color 0.2s' }} 
                 onMouseEnter={(e) => e.target.style.color = '#FF6B00'} 
                 onMouseLeave={(e) => e.target.style.color = '#b0b0b0'}>
                Projects
              </a>
              <a href="#contact" className="text-decoration-none" style={{ color: '#b0b0b0', transition: 'color 0.2s' }} 
                 onMouseEnter={(e) => e.target.style.color = '#FF6B00'} 
                 onMouseLeave={(e) => e.target.style.color = '#b0b0b0'}>
                Contact
              </a>
            </div>
          </div>
          
          {/* Social & Copyright */}
          <div className="col-md-4 text-center text-md-end">
            <h6 className="fw-bold mb-3" style={{ color: '#FF6B00' }}>Connect</h6>
            <div className="d-flex justify-content-center justify-content-md-end gap-3 mb-3">
              <a href="#" className="d-inline-block" style={{ color: '#FF6B00', fontSize: '1.4rem', transition: 'all 0.2s' }} 
                 onMouseEnter={(e) => { e.target.style.color = '#FF8533'; e.target.style.transform = 'translateY(-3px)' }} 
                 onMouseLeave={(e) => { e.target.style.color = '#FF6B00'; e.target.style.transform = 'translateY(0)' }}>
                <i className="bi bi-github"></i>
              </a>
              <a href="#" className="d-inline-block" style={{ color: '#FF6B00', fontSize: '1.4rem', transition: 'all 0.2s' }} 
                 onMouseEnter={(e) => { e.target.style.color = '#FF8533'; e.target.style.transform = 'translateY(-3px)' }} 
                 onMouseLeave={(e) => { e.target.style.color = '#FF6B00'; e.target.style.transform = 'translateY(0)' }}>
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="d-inline-block" style={{ color: '#FF6B00', fontSize: '1.4rem', transition: 'all 0.2s' }} 
                 onMouseEnter={(e) => { e.target.style.color = '#FF8533'; e.target.style.transform = 'translateY(-3px)' }} 
                 onMouseLeave={(e) => { e.target.style.color = '#FF6B00'; e.target.style.transform = 'translateY(0)' }}>
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="d-inline-block" style={{ color: '#FF6B00', fontSize: '1.4rem', transition: 'all 0.2s' }} 
                 onMouseEnter={(e) => { e.target.style.color = '#FF8533'; e.target.style.transform = 'translateY(-3px)' }} 
                 onMouseLeave={(e) => { e.target.style.color = '#FF6B00'; e.target.style.transform = 'translateY(0)' }}>
                <i className="bi bi-stack-overflow"></i>
              </a>
              <a href="#" className="d-inline-block" style={{ color: '#FF6B00', fontSize: '1.4rem', transition: 'all 0.2s' }} 
                 onMouseEnter={(e) => { e.target.style.color = '#FF8533'; e.target.style.transform = 'translateY(-3px)' }} 
                 onMouseLeave={(e) => { e.target.style.color = '#FF6B00'; e.target.style.transform = 'translateY(0)' }}>
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
            <p className="small mb-0 opacity-75">
              © {currentYear} Dullah Moha. All rights reserved.
              <br />
              <span style={{ fontSize: '0.7rem' }}>Crafted with <i className="bi bi-heart-fill" style={{ color: '#FF6B00', fontSize: '0.6rem' }}></i> using React & Node.js</span>
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <hr className="my-3" style={{ background: '#2a2a2a' }} />
        <div className="text-center">
          <p className="small mb-0 opacity-50" style={{ fontSize: '0.7rem' }}>
            <i className="bi bi-code-slash me-1"></i> Built with React + Vite | 
            <i className="bi bi-database ms-2 me-1"></i> Node.js Backend Ready |
            <i className="bi bi-shield-check ms-2 me-1"></i> Secure & Scalable
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer