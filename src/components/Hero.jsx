import React from 'react'
import dullah from '../assets/dullah.png'

const Hero = () => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center pt-5" style={{ 
      background: 'radial-gradient(circle at 30% 50%, #1a0a00 0%, #000000 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255,107,0,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '-250px',
        right: '-250px',
        animation: 'pulse 4s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255,107,0,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        bottom: '-150px',
        left: '-150px',
        animation: 'pulse 6s ease-in-out infinite reverse'
      }}></div>
      
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
      `}</style>
      
      <div className="container py-5 position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start order-lg-1 order-2">
            <div className="badge px-3 py-2 rounded-pill mb-3 d-inline-block" style={{ 
              background: 'linear-gradient(135deg, #FF6B00, #FF8533)', 
              color: '#000000',
              fontWeight: 'bold',
              boxShadow: '0 0 15px rgba(255, 107, 0, 0.3)'
            }}>
              🚀 React & Node.js Developer
            </div>
            <h1 className="display-4 fw-bold mb-3" style={{ color: '#ffffff' }}>
              Building <span style={{ color: '#FF6B00', textShadow: '0 0 20px rgba(255,107,0,0.5)' }}>scalable</span> web applications with modern tech
            </h1>
            <p className="lead mb-4" style={{ color: '#b0b0b0', fontSize: '1.2rem' }}>
              I'm Mohamed Abdullah— Full-Stack Developer specializing in React, Node.js, and building robust backend systems that power exceptional user experiences.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              <button className="btn px-4 py-2 rounded-pill fw-semibold" style={{ 
                background: 'linear-gradient(135deg, #FF6B00, #FF8533)', 
                border: 'none', 
                color: '#000000', 
                fontWeight: 'bold',
                boxShadow: '0 2px 15px rgba(255,107,0,0.4)',
                transition: 'all 0.3s'
              }} 
              onMouseEnter={(e) => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 5px 25px rgba(255,107,0,0.6)' }}
              onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 2px 15px rgba(255,107,0,0.4)' }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                <i className="bi bi-code-square me-2"></i>View Projects
              </button>
             <a 
  href="/Abdullah.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  className="btn px-4 py-2 rounded-pill fw-semibold"
  style={{ 
    border: '2px solid #FF6B00', 
    background: 'transparent', 
    color: '#FF6B00',
    transition: 'all 0.3s'
  }}
  onMouseEnter={(e) => { 
    e.target.style.background = '#FF6B00'; 
    e.target.style.color = '#000000'; 
    e.target.style.transform = 'translateY(-3px)' 
  }}
  onMouseLeave={(e) => { 
    e.target.style.background = 'transparent'; 
    e.target.style.color = '#FF6B00'; 
    e.target.style.transform = 'translateY(0)' 
  }}
>
  <i className="bi bi-download me-2"></i>
  View Resume
</a>
            </div>
            
            {/* Tech Stack Badges */}
            <div className="mt-4 d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
              <span className="badge" style={{ background: '#1a1a1a', color: '#FF6B00', padding: '8px 15px' }}>React.js</span>
              <span className="badge" style={{ background: '#1a1a1a', color: '#FF6B00', padding: '8px 15px' }}>Node.js</span>
              <span className="badge" style={{ background: '#1a1a1a', color: '#FF6B00', padding: '8px 15px' }}>Express.js</span>
              <span className="badge" style={{ background: '#1a1a1a', color: '#FF6B00', padding: '8px 15px' }}>MongoDB</span>
              <span className="badge" style={{ background: '#1a1a1a', color: '#FF6B00', padding: '8px 15px' }}>MySQL</span>
            </div>
          </div>
          <div className="col-lg-6 text-center order-lg-2 order-1">
            <div className="position-relative d-inline-block">
              <div style={{
                position: 'absolute',
                inset: '-10px',
                background: 'linear-gradient(135deg, #FF6B00, #FF8533)',
                borderRadius: '50%',
                opacity: 0.3,
                filter: 'blur(20px)',
                zIndex: 0
              }}></div>
              <img src={dullah}
                alt="Profile" 
                className="rounded-circle shadow-lg" 
                style={{ 
                  width: '220px', 
                  height: '220px', 
                  objectFit: 'cover', 
                  border: '3px solid #FF6B00',
                  boxShadow: '0 0 40px rgba(255,107,0,0.4)',
                  position: 'relative',
                  zIndex: 1
                }} />
              <div className="position-absolute bottom-0 end-0 rounded-circle p-2 shadow" style={{ background: '#000000', border: '2px solid #FF6B00', zIndex: 2 }}>
                <i className="bi bi-terminal-fill fs-4" style={{ color: '#FF6B00' }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero