import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [projectOpen, setProjectOpen] = useState(false);

  // Smooth progress bar animation trigger
  const [animateProgress, setAnimateProgress] = useState(false);
  useEffect(() => {
    if (activeTab === 'summary' || activeTab === 'skills') {
      const timer = setTimeout(() => setAnimateProgress(true), 150);
      return () => clearTimeout(timer);
    } else {
      setAnimateProgress(false);
    }
  }, [activeTab]);

  const handleNavClick = (tab) => {
    setProjectOpen(false);
    setActiveTab(tab);
  };

  const openProject = () => {
    setProjectOpen(true);
  };

  const closeProject = () => {
    setProjectOpen(false);
    setActiveTab('home');
  };

  return (
    <div className="canvas-wrapper">
      {/* Cinematic Backlight Glow Orbs */}
      <div className="glow-orb glow-orb-primary"></div>
      <div className="glow-orb glow-orb-secondary"></div>

      {/* Floating Glass Dashboard */}
      <div className={`glass-window ${projectOpen ? 'project-mode' : ''}`}>
        
        {/* Navigation Tab Contents */}
        <div className="tab-content">
          
          {/* VIEW 1: HERO / HOME */}
          <div className={`view-slide ${activeTab === 'home' && !projectOpen ? 'active' : ''}`}>
            <div className="hero-slide">
              <div className="hero-left">
                {/* Header elements inside the card */}
                <div className="hero-header-row">
                  <div className="status-badge">
                    <span className="status-dot"></span>
                    Open to work
                  </div>
                  <a href="#download" className="btn-cv" onClick={(e) => { e.preventDefault(); alert("Downloading Tyrone Brooks' CV..."); }}>
                    Download CV
                  </a>
                </div>

                {/* Hero text */}
                <div className="hero-content-area">
                  <div className="designer-tag">UX/UI Designer</div>
                  <h1 className="hero-name">Tyrone<br />Brooks</h1>
                  
                  {/* Contact Info (2x2 Grid) */}
                  <div className="hero-contact-grid">
                    <a href="mailto:tyrone.brooks@gmail.com" className="contact-item">
                      <span className="contact-icon">
                        <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
                      </span>
                      tyrone.brooks@gmail.com
                    </a>
                    <a href="https://linkedin.com/in/tyrone-brooks" target="_blank" rel="noopener noreferrer" className="contact-item">
                      <span className="contact-icon">
                        <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                      </span>
                      linkedin.com/in/tyrone-brooks
                    </a>
                    <a href="tel:+14045559876" className="contact-item">
                      <span className="contact-icon">
                        <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      </span>
                      +1 404-555-9876
                    </a>
                    <div className="contact-item">
                      <span className="contact-icon">
                        <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      </span>
                      Atlanta, US
                    </div>
                  </div>
                </div>

                {/* Bottom row: empty helper space to push nav up nicely */}
                <div style={{ height: '36px' }}></div>
              </div>

              {/* Backlit Silhouette Side */}
              <div className="hero-right">
                <div className="silhouette-container">
                  <div className="silhouette-glow"></div>
                  <img 
                    src="/tyrone_silhouette.png" 
                    alt="Tyrone Brooks Silhouette" 
                    className="silhouette-img" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* VIEW 2: SUMMARY, SKILLS, EXPERIENCE, EDUCATION */}
          <div className={`view-slide ${(activeTab === 'summary' || activeTab === 'skills' || activeTab === 'experience') && !projectOpen ? 'active' : ''}`}>
            <div className="summary-slide">
              
              {/* Left Side: Skills, Languages & Education */}
              <div className="summary-left">
                {/* Skills Section */}
                <div className="section-block">
                  <h2 className="section-title">Skills &amp; Technologies</h2>
                  <div className="skills-grid">
                    
                    {/* 1. Framer */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffffff">
                          <path d="M5 2h14v6H5V2zm0 6h14l-7 7H5V8zm7 7l7 7H5l7-7z"/>
                        </svg>
                      </div>
                      <span className="skill-name">Framer</span>
                    </div>

                    {/* 2. Figma */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 32 32" width="22" height="22">
                          <path fill="#F24E1E" d="M12 2C9.8 2 8 3.8 8 6s1.8 4 4 4h4V2h-4z"/>
                          <path fill="#FF7262" d="M20 10c2.2 0 4-1.8 4-4s-1.8-4-4-4h-4v8h4z"/>
                          <path fill="#A259FF" d="M12 10c-2.2 0-4 1.8-4 4s1.8 4 4 4h4v-8h-4z"/>
                          <path fill="#1ABC9C" d="M16 22c2.2 0 4-1.8 4-4s-1.8-4-4-4v8z"/>
                          <path fill="#0ACF83" d="M8 22c0 2.2 1.8 4 4 4s4-1.8 4-4v-4H12c-2.2 0-4 1.8-4 4z"/>
                        </svg>
                      </div>
                      <span className="skill-name">Figma</span>
                    </div>

                    {/* 3. Photoshop */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 32 32" width="22" height="22">
                          <rect width="32" height="32" rx="6" fill="#001829" stroke="#00c8ff" strokeWidth="1.5"/>
                          <text x="16" y="21" fontFamily="system-ui" fontSize="12" fontWeight="800" fill="#00c8ff" textAnchor="middle">Ps</text>
                        </svg>
                      </div>
                      <span className="skill-name">Photoshop</span>
                    </div>

                    {/* 4. Illustrator */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 32 32" width="22" height="22">
                          <rect width="32" height="32" rx="6" fill="#261300" stroke="#ff9a00" strokeWidth="1.5"/>
                          <text x="16" y="21" fontFamily="system-ui" fontSize="12" fontWeight="800" fill="#ff9a00" textAnchor="middle">Ai</text>
                        </svg>
                      </div>
                      <span className="skill-name">Illustrator</span>
                    </div>

                    {/* 5. Sketch */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
                          <path d="M16 2L5 10l5 13 6 7 6-7 5-13L16 2z" fill="#fdb300" opacity="0.3"/>
                          <path d="M16 2L10 10h12L16 2z" fill="#fdb300"/>
                          <path d="M10 10L5 10l5 13 6-13H10z" fill="#ea6c00"/>
                          <path d="M22 10h5l-5 13-6-13h6z" fill="#ea6c00"/>
                          <path d="M10 10l6 13 6-13H10z" fill="#ffc300"/>
                        </svg>
                      </div>
                      <span className="skill-name">Sketch</span>
                    </div>

                    {/* 6. Midjourney */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 32 32" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M4 22c2.5-4 7-6 12-6s9.5 2 12 6M6 18c2-3 5.5-4.5 10-4.5s8 1.5 10 4.5" stroke="#cbd5e1"/>
                          <path d="M16 6v7M12 9l4-4 4 4M8 25s4-2 8-2 8 2 8 2" stroke="#ffb800" strokeWidth="2"/>
                        </svg>
                      </div>
                      <span className="skill-name">Midjourney</span>
                    </div>

                    {/* 7. Spline */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
                          <path d="M8 22c0-3.3 2.7-6 6-6h4c3.3 0 6-2.7 6-6s-2.7-6-6-6S12 6.7 12 10" stroke="#ff007f" strokeWidth="2.5" strokeLinecap="round"/>
                          <circle cx="12" cy="10" r="2.5" fill="#ff007f"/>
                          <circle cx="20" cy="22" r="2.5" fill="#00f0ff"/>
                          <path d="M24 10c0 3.3-2.7 6-6 6h-4c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6" stroke="#00f0ff" strokeWidth="2.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span className="skill-name">Spline</span>
                    </div>

                    {/* 8. Blender */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
                          <circle cx="16" cy="17" r="5" stroke="#ea6c00" strokeWidth="2.5"/>
                          <circle cx="16" cy="17" r="2" fill="#0096ff"/>
                          <path d="M16 12c-4 0-7 3-7 7M22 10l-4 4M25 15l-5 1.5M22 21l-4-1.5" stroke="#ea6c00" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span className="skill-name">Blender</span>
                    </div>
                  </div>
                </div>

                {/* Languages Section */}
                <div className="section-block">
                  <h2 className="section-title">Languages</h2>
                  <div className="languages-list">
                    <div className="language-item">
                      <div className="language-header">
                        <span>English</span>
                        <span>Native / Bilingual</span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: animateProgress ? '100%' : '0%' }}></div>
                      </div>
                    </div>
                    
                    <div className="language-item">
                      <div className="language-header">
                        <span>Spanish</span>
                        <span>Professional Working (80%)</span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: animateProgress ? '80%' : '0%' }}></div>
                      </div>
                    </div>

                    <div className="language-item">
                      <div className="language-header">
                        <span>French</span>
                        <span>Limited Working (35%)</span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: animateProgress ? '35%' : '0%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education & Certificates Section */}
                <div className="section-block">
                  <h2 className="section-title">Education &amp; Certificates</h2>
                  <div className="edu-list">
                    <div className="edu-item">
                      <span className="edu-bullet"></span>
                      <div className="edu-school">Savannah College of Art and Design (SCAD)</div>
                      <div className="edu-degree">Bachelor of Fine Arts in User Experience Design — 2016</div>
                    </div>
                    <div className="edu-item">
                      <span className="edu-bullet"></span>
                      <div className="edu-school">Google UX Design Certificate</div>
                      <div className="edu-degree">August 2022</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Professional Experience & Featured Project Card */}
              <div className="summary-right">
                
                {/* Professional Info */}
                <div className="info-section">
                  <h2 className="section-title">Professional Summary</h2>
                  <p className="profile-desc">
                    Highly analytical and creative UX/UI designer with 7+ years of experience crafting interactive visual systems, dynamic desktop dashboards, and optimized mobile applications. Dedicated to merging technical fidelity with clean, modern human-centered designs.
                  </p>
                </div>

                {/* Work Experience */}
                <div className="info-section">
                  <h2 className="section-title">Selected Experience</h2>
                  <div className="experience-list">
                    <div className="exp-item">
                      <div className="exp-header">
                        <span className="exp-role">Senior UX Designer</span>
                        <span className="exp-date">2021 – Present</span>
                      </div>
                      <div className="exp-company">TechFlow Solutions</div>
                      <p className="exp-desc">
                        Led design for high-scale SaaS dashboards, improving interface completion speed by 28% and modernizing front-end design systems.
                      </p>
                    </div>

                    <div className="exp-item">
                      <div className="exp-header">
                        <span className="exp-role">Interaction Designer</span>
                        <span className="exp-date">2017 – 2021</span>
                      </div>
                      <div className="exp-company">Aura Digital Studio</div>
                      <p className="exp-desc">
                        Collaborated with global retail clients to architect e-commerce wireframes, dynamic micro-interactions, and mobile checkouts.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Featured Project Clickable Card */}
                <div className="info-section">
                  <h2 className="section-title">Featured Project Showcase</h2>
                  <div className="featured-project-preview" onClick={openProject}>
                    <div className="project-preview-header">
                      <span className="project-tag">Case Study</span>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                    <div className="project-preview-title">Flowstate Web Application</div>
                    <p className="project-preview-desc">
                      Redesigning the mobile shopping experience for a luxury apparel company. Click to open full cinematic case study details.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* VIEW 3: DEDICATED PROJECT DETAIL VIEW (FLOWSTATE) */}
          <div className={`view-slide ${projectOpen ? 'active' : ''}`}>
            <div className="project-slide">
              
              {/* Left Column: Details */}
              <div className="project-left">
                <button className="back-btn" onClick={closeProject}>
                  <svg viewBox="0 0 24 24" className="back-icon"><path d="m15 18-6-6 6-6"/></svg>
                  Back to Home Page
                </button>

                <h1 className="project-title">Flowstate</h1>
                <div className="project-subtitle">Web Application Case Study</div>

                <div className="project-detail-section">
                  <div className="project-detail-label">About The Project</div>
                  <p className="project-detail-text">
                    Redesigned the online shopping experience for a mid-sized fashion brand. Focused on creating an elegant, mobile-first design with seamless navigation and interactive product displays. Integrated a robust filtering system for faster product discovery.
                  </p>
                </div>

                <div className="project-detail-section">
                  <div className="project-detail-label">Achievements</div>
                  <p className="project-detail-text">
                    Improved conversion rates by <span className="achievement-highlight">20% within three months</span> post-launch. Increased average session duration by 1.5 minutes and significantly reduced cart abandonment rates across all key mobile segments.
                  </p>
                </div>

                <div className="project-detail-section">
                  <div className="project-detail-label">Technologies Used</div>
                  <p className="project-detail-text" style={{ color: 'var(--accent-gold)', fontWeight: 500 }}>
                    Framer • Figma • React • Spline 3D • CSS Custom Grid
                  </p>
                </div>
              </div>

              {/* Right Column: Pedestal Mockup Graphic */}
              <div className="project-right">
                <div className="mockup-media-card">
                  <img 
                    src="/flowstate_mockup.png" 
                    alt="Flowstate Smartphone Mockup on concrete block" 
                    className="mockup-img"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* VIEW 4: LINKS TAB */}
          <div className={`view-slide ${activeTab === 'links' && !projectOpen ? 'active' : ''}`}>
            <div className="summary-slide" style={{ padding: '44px 48px', flexDirection: 'column' }}>
              <h2 className="section-title" style={{ fontSize: '24px', marginBottom: '24px' }}>Professional Profiles &amp; Links</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '18px', width: '100%', maxWidth: '780px' }}>
                <a href="https://figma.com/@tyrone-brooks" target="_blank" rel="noopener noreferrer" className="featured-project-preview" style={{ marginTop: 0 }}>
                  <div className="project-preview-header">
                    <span className="project-tag" style={{ color: '#1abc9c' }}>Figma Community</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#1abc9c" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
                  </div>
                  <div className="project-preview-title">Figma UI Kits &amp; Templates</div>
                  <p className="project-preview-desc">Explore open-source dark mode mobile design systems, glassmorphism templates, and interactive component libraries.</p>
                </a>

                <a href="https://dribbble.com/tyrone-brooks" target="_blank" rel="noopener noreferrer" className="featured-project-preview" style={{ marginTop: 0 }}>
                  <div className="project-preview-header">
                    <span className="project-tag" style={{ color: '#ea4c89' }}>Dribbble</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#ea4c89" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
                  </div>
                  <div className="project-preview-title">Creative Shots &amp; UI Concepts</div>
                  <p className="project-preview-desc">Browse elegant aesthetic interactions, dark UI elements, product mockups, and quick video walkthroughs.</p>
                </a>

                <a href="https://behance.net/tyrone-brooks" target="_blank" rel="noopener noreferrer" className="featured-project-preview" style={{ marginTop: 0 }}>
                  <div className="project-preview-header">
                    <span className="project-tag" style={{ color: '#0057ff' }}>Behance</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#0057ff" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
                  </div>
                  <div className="project-preview-title">Full Visual Case Studies</div>
                  <p className="project-preview-desc">Comprehensive case studies demonstrating user research, persona creation, wireframing, and design iterations.</p>
                </a>

                <a href="https://github.com/tyrone-brooks" target="_blank" rel="noopener noreferrer" className="featured-project-preview" style={{ marginTop: 0 }}>
                  <div className="project-preview-header">
                    <span className="project-tag" style={{ color: '#fff' }}>GitHub</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
                  </div>
                  <div className="project-preview-title">Creative Code Repositories</div>
                  <p className="project-preview-desc">Access React experiments, custom glassmorphism styling frameworks, and clean CSS animation repositories.</p>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Floating Glass Navigation Bar */}
        <nav className="floating-navbar">
          <button 
            className={`nav-item ${activeTab === 'home' && !projectOpen ? 'active' : ''}`} 
            onClick={() => handleNavClick('home')}
          >
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Home
          </button>
          <button 
            className={`nav-item ${activeTab === 'summary' && !projectOpen ? 'active' : ''}`} 
            onClick={() => handleNavClick('summary')}
          >
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Summary
          </button>
          <button 
            className={`nav-item ${activeTab === 'experience' && !projectOpen ? 'active' : ''}`} 
            onClick={() => handleNavClick('experience')}
          >
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            Experience
          </button>
          <button 
            className={`nav-item ${activeTab === 'skills' && !projectOpen ? 'active' : ''}`} 
            onClick={() => handleNavClick('skills')}
          >
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Skills
          </button>
          <button 
            className={`nav-item ${activeTab === 'links' || projectOpen ? 'active' : ''}`} 
            onClick={() => handleNavClick('links')}
          >
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            Links
          </button>
        </nav>

      </div>
    </div>
  );
}

export default App;

