import React, { useState } from 'react'

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  
  const projectsData = [
    { 
      title: 'Medical Care', 
      desc: 'Full-stack Medical care solution with React, Node.js, MongoDB, and Stripe integration.', 
      tech: 'React, Node.js, MongoDB, Express', 
      imgIcon: 'bi-cart4',
      github: 'https://github.com/dullah9150-cmyk/Medicocare',
      liveDemo: '#', // Add your live demo URL when available
      features: ['REST API', 'JWT Auth', 'Payment Gateway']
    },
    { 
      title: 'Chat App', 
      desc: 'A chat app is a real-time messaging application that allows users to send and receive messages instantly. It can include features like one-to-one chat, group conversations, online status, notifications, media sharing, and secure authentication', 
      tech: 'React, Express, Socket.io, PostgreSQL', 
      imgIcon: 'bi-chat-dots',
      github: 'https://github.com/dullah9150-cmyk/Chatapp', // Update with your actual repo
      liveDemo: '#',
      features: ['Real-time Chat', 'Group Conversations', 'Media Sharing']
    },
    { 
      title: 'Role Based Access Control', 
      desc: 'Role based access control with user roles, and Employee roles.', 
      tech: 'Next.js, Node.js, MongoDB, JWT', 
      imgIcon: 'bi-shield-lock',
      github: 'https://github.com/dullah9150-cmyk/Role_Based_Access_Control',
      liveDemo: '#',
      features: ['User Roles', 'Permissions', 'Access Management']
    },
    { 
      title: 'Simple Data Connection', 
      desc: 'Scalable API gateway with rate limiting, caching, and microservices architecture.', 
      tech: 'Node.js, Express, JWT', 
      imgIcon: 'bi-database',
      github: 'https://github.com/dullah9150-cmyk/Simple_Data_Connection',
      liveDemo: '#',
      features: ['API Gateway', 'Rate Limiting', 'Microservices']
    },
    { 
      title: 'Contact System', 
      desc: 'Complete contact management system with CRUD operations and user authentication.', 
      tech: ' Node.js, MongoDB, Express', 
      imgIcon: 'bi-person-lines-fill',
      github: 'https://github.com/dullah9150-cmyk/Contact-System',
      liveDemo: '#',
      features: ['CRUD Operations', 'User Auth', 'Contact Management']
    }
  ]

  const openLink = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      alert('Live demo coming soon!')
    }
  }

  return (
    <section id="projects" className="py-5" style={{ background: '#0a0a0a' }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="badge px-3 py-2 rounded-pill" style={{ background: '#2A1A0A', color: '#FF6B00', fontWeight: 'bold' }}>Featured Work</span>
          <h2 className="display-5 fw-bold mt-3" style={{ color: '#ffffff' }}>Full-Stack <span style={{ color: '#FF6B00' }}>Projects</span></h2>
          <p style={{ color: '#b0b0b0' }} className="w-75 mx-auto">Real-world applications built with modern tech stack</p>
        </div>
        <div className="row g-4">
          {projectsData.map((project, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}>
              <div className="card h-100 rounded-4 overflow-hidden border-0 shadow-sm" style={{ 
                background: '#111111', 
                border: `1px solid ${hoveredIndex === idx ? '#FF6B00' : '#2a2a2a'}`,
                transition: 'all 0.3s',
                transform: hoveredIndex === idx ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: hoveredIndex === idx ? '0 10px 30px rgba(255,107,0,0.2)' : 'none'
              }}>
                <div className="d-flex align-items-center justify-content-center" style={{ 
                  height: '200px', 
                  background: 'linear-gradient(145deg, #1a1a1a, #0d0d0d)',
                  borderBottom: `2px solid ${hoveredIndex === idx ? '#FF6B00' : '#2a2a2a'}`
                }}>
                  <i className={`${project.imgIcon} display-1`} style={{ color: '#FF6B00', transition: 'transform 0.3s', transform: hoveredIndex === idx ? 'scale(1.1)' : 'scale(1)' }}></i>
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold" style={{ color: '#ffffff' }}>{project.title}</h5>
                  <p className="card-text" style={{ color: '#b0b0b0', fontSize: '0.95rem' }}>{project.desc}</p>
                  <div className="mb-2">
                    {project.features.map((feature, i) => (
                      <small key={i} className="d-block" style={{ color: '#FF6B00' }}>
                        <i className="bi bi-check-circle-fill me-1" style={{ fontSize: '10px' }}></i> {feature}
                      </small>
                    ))}
                  </div>
                  <div><span className="badge me-1 px-3 py-2" style={{ background: '#2A1A0A', color: '#FF6B00' }}>{project.tech}</span></div>
                </div>
                <div className="card-footer bg-transparent border-0 pb-4 px-4 d-flex gap-2" style={{ borderTop: 'none' }}>
                  <button 
                    onClick={() => openLink(project.github)}
                    className="btn btn-sm rounded-pill px-3" 
                    style={{ background: 'linear-gradient(135deg, #FF6B00, #FF8533)', color: '#000000', border: 'none', fontWeight: 'bold' }}>
                    <i className="bi bi-github me-1"></i>GitHub Repo
                  </button>
                  <button 
                    onClick={() => openLink(project.liveDemo)}
                    className="btn btn-sm rounded-pill px-3" 
                    style={{ border: '2px solid #FF6B00', background: 'transparent', color: '#FF6B00', fontWeight: 'bold' }}>
                    <i className="bi bi-box-arrow-up-right me-1"></i>Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects