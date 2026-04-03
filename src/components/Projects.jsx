import React, { useState } from 'react'

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  
  const projectsData = [
    { 
      title: 'E-Commerce Platform', 
      desc: 'Full-stack e-commerce solution with React, Node.js, MongoDB, and Stripe integration.', 
      tech: 'React, Node.js, MongoDB, Stripe', 
      imgIcon: 'bi-cart4',
      features: ['REST API', 'JWT Auth', 'Payment Gateway']
    },
    { 
      title: 'Task Management App', 
      desc: 'Real-time task management with drag-drop, user roles, and WebSocket notifications.', 
      tech: 'React, Express, Socket.io, PostgreSQL', 
      imgIcon: 'bi-check2-square',
      features: ['Real-time Updates', 'Drag & Drop', 'Team Collaboration']
    },
    { 
      title: 'Social Media Dashboard', 
      desc: 'Analytics dashboard for social media metrics with data visualization and reports.', 
      tech: 'Next.js, Node.js, Chart.js, Redis', 
      imgIcon: 'bi-graph-up',
      features: ['Data Visualization', 'Real-time Analytics', 'Export Reports']
    },
    { 
      title: 'REST API Gateway', 
      desc: 'Scalable API gateway with rate limiting, caching, and microservices architecture.', 
      tech: 'Node.js, Express, Redis, JWT', 
      imgIcon: 'bi-hdd-stack',
      features: ['Rate Limiting', 'Caching', 'Microservices']
    },
    { 
      title: 'Portfolio CMS', 
      desc: 'Headless CMS for developer portfolios with Markdown support and dynamic routing.', 
      tech: 'React, Node.js, MongoDB, GraphQL', 
      imgIcon: 'bi-file-earmark-code',
      features: ['GraphQL API', 'Markdown Editor', 'Dynamic Routing']
    }
  ]

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
                  <button className="btn btn-sm rounded-pill px-3" style={{ background: 'linear-gradient(135deg, #FF6B00, #FF8533)', color: '#000000', border: 'none', fontWeight: 'bold' }}>
                    <i className="bi bi-github me-1"></i>Code
                  </button>
                  <button className="btn btn-sm rounded-pill px-3" style={{ border: '2px solid #FF6B00', background: 'transparent', color: '#FF6B00', fontWeight: 'bold' }}>
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