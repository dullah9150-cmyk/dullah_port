import React, { useState } from 'react'

const Education = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const educationData = [

    {
      id: 1,
      degree: "Bachelor of Engineering - Computer Science",
      institution: "FXEC (Francis Xavier Engineering College)",
      year: "2021 - 2025",
      gpa: "8.0/10.0",
      courses: [ "Web Development", "Database Management", "Operating Systems"],
      icon: "bi-laptop-fill",
      description: "Focused on Software Engineering and Web Technologies. Led multiple group projects."
    },
        {
      id: 2,
      degree: "Higher Studies ",
      institution: "Rose Mary Matriculation Higher Secondary School",
      year: "2010 - 2021",
      gpa: "86%",
      courses: ["Advanced Algorithms", "Distributed Systems", "Machine Learning", "Cloud Computing"],
      icon: "bi-mortarboard-fill",
      description: "Specialized in Full-Stack Development and Cloud Architecture. Graduated with honors."
    },
    {
      id: 3,
      degree: "React js Developer Certification",
      institution: "Dhatchan Academy",
      year: "2024",
      credential: "Verified Certification",
      courses: ["React Advanced", "Node.js Mastery", "MongoDB Expert", "AWS Cloud Practitioner"],
      icon: "bi-award-fill",
      description: "Intensive program focused on modern full-stack development practices."
    }
  ]

  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon", year: "2023", icon: "bi-cloud-check" },
    { name: "MongoDB Certified Developer", issuer: "MongoDB", year: "2022", icon: "bi-database-check" },
    { name: "React Advanced Certification", issuer: "Meta", year: "2023", icon: "bi-code-square" },
    { name: "Node.js Certified Developer", issuer: "OpenJS Foundation", year: "2022", icon: "bi-node-plus" }
  ]

  return (
    <section id="education" className="py-5" style={{ background: '#000000' }}>
      <div className="container py-5">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="badge px-3 py-2 rounded-pill" style={{ background: '#2A1A0A', color: '#FF6B00', fontWeight: 'bold' }}>
            Academic Background
          </span>
          <h2 className="display-5 fw-bold mt-3" style={{ color: '#ffffff' }}>
            Education & <span style={{ color: '#FF6B00' }}>Certifications</span>
          </h2>
          <p style={{ color: '#b0b0b0' }} className="w-75 mx-auto">
            My academic journey and professional certifications
          </p>
        </div>

        {/* Education Cards */}
        <div className="row g-4 mb-5">
          {educationData.map((edu) => (
            <div className="col-md-6 col-lg-4" key={edu.id}
              onMouseEnter={() => setHoveredCard(edu.id)}
              onMouseLeave={() => setHoveredCard(null)}>
              <div className="card h-100 rounded-4 border-0 shadow-sm" style={{
                background: '#111111',
                border: `1px solid ${hoveredCard === edu.id ? '#FF6B00' : '#2a2a2a'}`,
                transition: 'all 0.3s',
                transform: hoveredCard === edu.id ? 'translateY(-10px)' : 'translateY(0)'
              }}>
                <div className="card-body p-4">
                  {/* Icon */}
                  <div className="text-center mb-3">
                    <div style={{
                      background: 'linear-gradient(135deg, #FF6B00, #FF8533)',
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      boxShadow: hoveredCard === edu.id ? '0 0 20px rgba(255,107,0,0.5)' : 'none'
                    }}>
                      <i className={`${edu.icon} fs-1`} style={{ color: '#000000' }}></i>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h4 className="fw-bold text-center mb-2" style={{ color: '#ffffff' }}>{edu.degree}</h4>
                  <p className="text-center mb-2" style={{ color: '#FF6B00', fontWeight: 'bold' }}>{edu.institution}</p>
                  <p className="text-center small mb-3" style={{ color: '#888' }}>
                    <i className="bi bi-calendar3 me-1"></i> {edu.year}
                    {edu.gpa && <span className="ms-2"><i className="bi bi-star-fill me-1" style={{ color: '#FF6B00' }}></i> GPA: {edu.gpa}</span>}
                  </p>
                  <p className="small" style={{ color: '#b0b0b0', lineHeight: '1.6' }}>{edu.description}</p>
                  
                  {/* Courses */}
                  <div className="mt-3">
                    <small style={{ color: '#FF6B00', fontWeight: 'bold' }}>Key Courses:</small>
                    <div className="d-flex flex-wrap gap-1 mt-2">
                      {edu.courses.map((course, idx) => (
                        <span key={idx} className="badge" style={{ background: '#1a1a1a', color: '#FF6B00', fontSize: '0.7rem' }}>
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-5">
          <h3 className="text-center fw-bold mb-4" style={{ color: '#ffffff' }}>
            Professional <span style={{ color: '#FF6B00' }}>Certifications</span>
          </h3>
          <div className="row g-3 justify-content-center">
            {certifications.map((cert, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="card rounded-4 border-0 text-center p-3" style={{
                  background: '#111111',
                  border: '1px solid #2a2a2a',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.borderColor = '#FF6B00'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = '#2a2a2a'
                }}>
                  <i className={`${cert.icon} fs-1 mb-2`} style={{ color: '#FF6B00' }}></i>
                  <h6 className="fw-bold mb-1" style={{ color: '#ffffff' }}>{cert.name}</h6>
                  <p className="small mb-1" style={{ color: '#FF6B00' }}>{cert.issuer}</p>
                  <p className="small" style={{ color: '#666' }}>{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Style Alternative (Optional) */}
        <div className="mt-5 pt-4">
          <div className="text-center mb-4">
            <h4 className="fw-bold" style={{ color: '#ffffff' }}>
              <i className="bi bi-clock-history me-2" style={{ color: '#FF6B00' }}></i>
              Education <span style={{ color: '#FF6B00' }}>Timeline</span>
            </h4>
          </div>
          <div className="position-relative" style={{ paddingLeft: '30px' }}>
            {educationData.map((edu, idx) => (
              <div key={idx} className="position-relative mb-4" style={{ paddingLeft: '30px' }}>
                {/* Timeline line */}
                {idx !== educationData.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    left: '-15px',
                    top: '20px',
                    bottom: '-30px',
                    width: '2px',
                    background: 'linear-gradient(180deg, #FF6B00, #FF8533)',
                    opacity: 0.3
                  }}></div>
                )}
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: '-20px',
                  top: '5px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#FF6B00',
                  boxShadow: '0 0 10px rgba(255,107,0,0.5)'
                }}></div>
                
                <div className="card rounded-3 p-3" style={{ background: '#111111', border: '1px solid #2a2a2a' }}>
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div>
                      <h6 className="fw-bold mb-0" style={{ color: '#FF6B00' }}>{edu.degree}</h6>
                      <small style={{ color: '#888' }}>{edu.institution} • {edu.year}</small>
                    </div>
                    {edu.gpa && <span className="badge" style={{ background: '#FF6B00', color: '#000000' }}>GPA: {edu.gpa}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education