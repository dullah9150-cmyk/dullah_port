import React from 'react'

const Skills = () => {
  const frontendSkills = [
    { name: 'React.js', icon: 'bi-bootstrap-reboot', level: '92%', color: '#61DAFB' },

    { name: 'JavaScript/ES6', icon: 'bi-filetype-js', level: '90%', color: '#F7DF1E' },
    { name: 'TypeScript', icon: 'bi-filetype-tsx', level: '82%', color: '#3178C6' },
    { name: 'Tailwind CSS', icon: 'bi-palette', level: '88%', color: '#06B6D4' }
  ]
  
  const backendSkills = [
    { name: 'Node.js', icon: 'bi-node-plus', level: '90%', color: '#339933' },
    { name: 'Express.js', icon: 'bi-server', level: '88%', color: '#000000' },
    { name: 'Python', icon: 'bi-filetype-py', level: '78%', color: '#3776AB' },
    { name: 'MongoDB', icon: 'bi-database', level: '85%', color: '#47A248' },
  ]
  
  const tools = [
    { name: 'Git/GitHub', icon: 'bi-github' },
    { name: 'VS Code', icon: 'bi-microsoft' },
    { name: 'Postman', icon: 'bi-send' },
  ]

  return (
    <section id="skills" className="py-5" style={{ background: '#000000' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="badge px-3 py-2 rounded-pill" style={{ background: '#2A1A0A', color: '#FF6B00', fontWeight: 'bold' }}>Technical Expertise</span>
          <h2 className="display-5 fw-bold mt-3" style={{ color: '#ffffff' }}>My <span style={{ color: '#FF6B00' }}>Tech Stack</span></h2>
          <p style={{ color: '#b0b0b0' }}>Modern tools and technologies I work with daily</p>
        </div>
        
        <div className="row g-4">
          {/* Frontend Section */}
          <div className="col-md-6">
            <div className="card h-100 rounded-4 p-4 border-0 shadow-sm" style={{ background: '#111111', border: '1px solid #2a2a2a' }}>
              <h4 className="fw-semibold mb-4" style={{ color: '#ffffff' }}><i className="bi bi-window-sidebar me-2" style={{ color: '#FF6B00' }}></i>Frontend Development</h4>
              <div className="row g-3">
                {frontendSkills.map(skill => (
                  <div className="col-12" key={skill.name}>
                    <div className="d-flex align-items-center gap-3 p-2 rounded-3">
                      <i className={`${skill.icon} fs-2`} style={{ color: '#FF6B00', minWidth: '40px' }}></i>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between mb-1">
                          <span style={{ color: '#e0e0e0' }} className="fw-medium">{skill.name}</span>
                          <span style={{ color: '#FF6B00' }} className="small">{skill.level}</span>
                        </div>
                        <div className="progress" style={{ height: '6px', background: '#2a2a2a' }}>
                          <div className="progress-bar" style={{ width: skill.level, background: 'linear-gradient(90deg, #FF6B00, #FF8533)', borderRadius: '3px' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Backend Section */}
          <div className="col-md-6">
            <div className="card h-100 rounded-4 p-4 border-0 shadow-sm" style={{ background: '#111111', border: '1px solid #2a2a2a' }}>
              <h4 className="fw-semibold mb-4" style={{ color: '#ffffff' }}><i className="bi bi-server me-2" style={{ color: '#FF6B00' }}></i>Backend & Database</h4>
              <div className="row g-3">
                {backendSkills.map(skill => (
                  <div className="col-12" key={skill.name}>
                    <div className="d-flex align-items-center gap-3 p-2 rounded-3">
                      <i className={`${skill.icon} fs-2`} style={{ color: '#FF6B00', minWidth: '40px' }}></i>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between mb-1">
                          <span style={{ color: '#e0e0e0' }} className="fw-medium">{skill.name}</span>
                          <span style={{ color: '#FF6B00' }} className="small">{skill.level}</span>
                        </div>
                        <div className="progress" style={{ height: '6px', background: '#2a2a2a' }}>
                          <div className="progress-bar" style={{ width: skill.level, background: 'linear-gradient(90deg, #FF6B00, #FF8533)', borderRadius: '3px' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Tools Section */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="card rounded-4 p-4 border-0 shadow-sm" style={{ background: '#111111', border: '1px solid #2a2a2a' }}>
              <h4 className="fw-semibold mb-3" style={{ color: '#ffffff' }}><i className="bi bi-tools me-2" style={{ color: '#FF6B00' }}></i>Development Tools & DevOps</h4>
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
                {tools.map(tool => (
                  <div className="col" key={tool.name}>
                    <div className="d-flex flex-column align-items-center gap-2 p-3 rounded-3 text-center" style={{ background: '#1a1a1a', transition: 'all 0.2s' }}>
                      <i className={`${tool.icon} fs-2`} style={{ color: '#FF6B00' }}></i>
                      <span style={{ color: '#e0e0e0', fontSize: '0.9rem' }} className="fw-medium">{tool.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills