import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import './styles/custom.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // 2 seconds loading screen
    
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner-container">
          <div className="neon-spinner"></div>
          <div className="spinner-text">
            <span style={{ color: '#FF6B00' }}>&lt;</span>
            <span className="rotating-text">ReactJSDev</span>
            <span style={{ color: '#FF6B00' }}>/&gt;</span>
          </div>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
          <p className="loading-subtitle">Loading portfolio...</p>
        </div>
      </div>
    )
  }

  return <Home />
}

export default App