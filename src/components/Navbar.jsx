import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  
  const navItems = ['home', 'about', 'skills','Education', 'projects', 'contact']
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item))
      const scrollPos = window.scrollY + 100
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPos) {
          setActiveLink(navItems[i])
          break
        }
      }
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top py-3" style={{ 
      backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.8)', 
      backdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${scrolled ? '#FF6B00' : 'rgba(255, 107, 0, 0.3)'}`,
      boxShadow: scrolled ? '0 2px 20px rgba(255, 107, 0, 0.1)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home') }} style={{ 
          background: 'linear-gradient(135deg, #FF6B00, #FF8533)', 
          WebkitBackgroundClip: 'text', 
          backgroundClip: 'text', 
          color: 'transparent',
          letterSpacing: '-0.5px'
        }}>
          Dullah<span className="fw-light">Portfolio</span>
        </a>
        <button className="navbar-toggler border-0" type="button" onClick={() => setIsOpen(!isOpen)} style={{ background: 'transparent' }}>
          <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'} fs-2`} style={{ color: '#FF6B00' }}></i>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            {navItems.map(item => (
              <li className="nav-item" key={item}>
                <button 
                  className={`nav-link btn btn-link text-decoration-none text-capitalize fw-semibold`}
                  onClick={() => handleNavClick(item)} 
                  style={{ 
                    cursor: 'pointer', 
                    color: activeLink === item ? '#FF6B00' : '#e0e0e0',
                    background: 'transparent',
                    border: 'none',
                    transition: 'all 0.2s',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => { e.target.style.color = '#FF6B00'; e.target.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={(e) => { e.target.style.color = activeLink === item ? '#FF6B00' : '#e0e0e0'; e.target.style.transform = 'translateY(0)' }}
                >
                  {item}
                  {activeLink === item && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-5px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '30px',
                      height: '2px',
                      background: '#FF6B00',
                      borderRadius: '2px'
                    }}></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar