import React, { useState } from 'react';
import './App.css';

function App() {
  // Navigation tabs: 'home' | 'summary' | 'links'
  const [activeTab, setActiveTab] = useState('home');
  
  // Track open case study detail view: null | 'flowstate' | 'pulse' | 'vortex'
  const [activeProject, setActiveProject] = useState(null);

  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div className="canvas-wrapper">
      {/* Cinematic Pulse Glow Orbs */}
      <div className="glow-orb glow-orb-primary"></div>
      <div className="glow-orb glow-orb-secondary"></div>

      <div className="glass-window">
        {/* ==========================================
           TAB ROUTER
           ========================================== */}
        <div className="tab-content">
          
          {/* ----------------------------------------
             TAB 1: HOME (HERO)
             ---------------------------------------- */}
          {activeTab === 'home' && !activeProject && (
            <div className="view-slide active">
              <div className="hero-slide">
                <div className="hero-left">
                  
                  {/* Title & Status Badge */}
                  <div className="hero-header-row">
                    <div className="status-badge">
                      <span className="status-dot"></span>
                      Open to work
                    </div>
                  </div>

                  {/* Main Bio Content */}
                  <div className="hero-content-area">
                    <span className="designer-tag">Lead UX/UI Designer & Motion Architect</span>
                    <h1 className="hero-name">Tyrone<br />Brooks</h1>
                    
                    {/* Contact Details Grid with gold icons */}
                    <div className="hero-contact-grid">
                      <a href="mailto:tyrone.brooks@design.io" className="contact-item">
                        <span className="contact-icon">
                          <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                        </span>
                        tyrone.brooks@design.io
                      </a>
                      <a href="https://linkedin.com/in/tyronebrooks" target="_blank" rel="noreferrer" className="contact-item">
                        <span className="contact-icon">
                          <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                        </span>
                        linkedin.com/in/tyronebrooks
                      </a>
                      <a href="tel:+14045558902" className="contact-item">
                        <span className="contact-icon">
                          <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        </span>
                        +1 (404) 555-8902
                      </a>
                      <div className="contact-item">
                        <span className="contact-icon">
                          <svg viewBox="0 0 24 24"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
                        </span>
                        Atlanta, Georgia, US
                      </div>
                    </div>
                  </div>

                  {/* Core Design Philosophy */}
                  <div className="hero-philosophy">
                    <p className="philosophy-text">
                      "Design is not just what it looks like and feels like. Design is how it works. My goal is to build digital structures that stand at the intersection of cinematic art and human logic."
                    </p>
                  </div>

                  {/* Call-to-action button */}
                  <div>
                    <a href="#summary" className="btn-cv" onClick={(e) => { e.preventDefault(); setActiveTab('summary'); }}>
                      Explore Works & Resume
                      <svg viewBox="0 0 24 24" style={{ width: '13px', height: '13px', marginLeft: '8px', fill: 'none', stroke: 'currentColor', strokeWidth: '3px' }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                  </div>

                  {/* Trusted By Client Logobar */}
                  <div className="hero-clients">
                    <div className="clients-title">Trusted By Premium Brands</div>
                    <div className="clients-logos">
                      {/* Nike Logo */}
                      <svg className="client-logo-svg" viewBox="0 0 24 24" style={{ height: '14px' }}>
                        <path d="M21 6.5c-2 2-6.5 5.5-11 7-2 1-3.5 1-4.5.5s-1.5-1.5-1-3c.5-1.5 2-4 4.5-6.5-1.5.5-3 2-3.5 3.5s-.5 2.5.5 3c1 .5 3 0 5.5-1.5 3-1.5 7.5-5 9.5-10z" />
                      </svg>
                      {/* Apple Logo */}
                      <svg className="client-logo-svg" viewBox="0 0 24 24" style={{ height: '18px' }}>
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.64.74-1.2 1.88-1.05 3 .99.08 2.34-.62 3-1.44z" />
                      </svg>
                      {/* Stripe Logo */}
                      <svg className="client-logo-svg" viewBox="0 0 24 24" style={{ height: '16px' }}>
                        <path d="M13.9 9.8c0-1 .7-1.4 1.9-1.4 1.4 0 2.8.4 3.7.9V5.5c-.9-.4-2.1-.6-3.5-.6-3.4 0-5.7 1.8-5.7 5.1 0 3.5 2.8 4.3 5.4 4.9 1.4.3 1.9.7 1.9 1.4 0 .9-.8 1.4-2.1 1.4-1.6 0-3.3-.5-4.4-1.1v3.9c1.2.5 2.8.7 4.3.7 3.5 0 5.9-1.8 5.9-5.1-.1-3.6-2.9-4.3-5.4-4.9-.7-.2-1.5-.4-1.5-1zm-9.3-.9h4V5.1h-4v3.8zm0 10.2h4V10.1h-4v9zm2-15.6C7.2 3.5 8 4.3 8 5.5s-.8 2-1.8 2-1.9-.8-1.9-2 .8-2 1.7-2z" />
                      </svg>
                      {/* Figma Logo */}
                      <svg className="client-logo-svg" viewBox="0 0 24 24" style={{ height: '18px' }}>
                        <path d="M12 2a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4 4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm-4 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4h4v-8H8zm8 0v4a4 4 0 0 1-4 4 4 4 0 0 1-4-4v-4h8zm-8 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4h4v-8H8zm8-8a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4v8z" />
                      </svg>
                    </div>
                  </div>

                </div>

                {/* Right Side silhouette placement */}
                <div className="hero-right">
                  <div className="silhouette-container">
                    <div className="silhouette-glow"></div>
                    <img 
                      src="./tyrone_silhouette.png" 
                      alt="Tyrone Brooks Silhouette" 
                      className="silhouette-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ----------------------------------------
             TAB 2: SUMMARY & WORK EXPERIENCE (Long Vertical Scroll)
             ---------------------------------------- */}
          {activeTab === 'summary' && !activeProject && (
            <div className="view-slide active">
              <div className="summary-slide">
                
                {/* 1. SKILLS GRID SECTION */}
                <div className="full-width-block">
                  <div className="block-header">
                    <h2 className="block-title">Skills & Technologies</h2>
                    <p className="block-subtitle">Expertise in creative direction, vector UI, 3D assets, and dynamic front-end frameworks.</p>
                  </div>

                  <div className="skills-grid">
                    {/* Framer */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--accent-gold)"><path d="M5 2h14v6.8l-7 7.2v6l7-7v7H5l7-7.2v-6l-7 7z"/></svg>
                      </div>
                      <span className="skill-name">Framer</span>
                    </div>

                    {/* Figma */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--accent-gold)"><path d="M8 2h8v4H8zm0 4h8v4H8zm0 4h4v4H8zm4 0h4a4 4 0 0 1-4 4zm-4 4h4v4H8zm4 4h4a4 4 0 0 1-4 4z"/></svg>
                      </div>
                      <span className="skill-name">Figma</span>
                    </div>

                    {/* Photoshop */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="var(--accent-gold)"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9.6 15.6H8.2V9.4h3.1c1.5 0 2.2.7 2.2 1.9 0 1.3-.8 1.9-2.2 1.9H9.6v2.4zm5.7-1.1h1.4c0 .8.6 1.3 1.5 1.3s1.4-.4 1.4-1c0-.7-.6-.9-1.6-1.2-1.5-.4-2.5-.8-2.5-2.2 0-1.3 1-2.2 2.5-2.2 1.5 0 2.4.8 2.5 2.1h-1.4c0-.7-.5-1.1-1.2-1.1s-1.2.3-1.2.9c0 .6.5.7 1.5 1 1.6.4 2.6.9 2.6 2.3 0 1.4-1.1 2.3-2.7 2.3-1.7.1-2.8-.8-2.9-2.2zM9.6 11.8h1.4c.6 0 .9-.3.9-.8s-.3-.7-.9-.7H9.6v1.5z"/></svg>
                      </div>
                      <span className="skill-name">Photoshop</span>
                    </div>

                    {/* Illustrator */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="var(--accent-gold)"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9.7 15.6H8.2l2.6-6.2h1.6l2.6 6.2h-1.5l-.6-1.5H9.7v1.5zm.9-2.6h2.2l-1.1-2.8-1.1 2.8zm7.1 2.6h-1.5V11.2h1.5v4.4zm0-5.4h-1.5V9.4h1.5v.8z"/></svg>
                      </div>
                      <span className="skill-name">Illustrator</span>
                    </div>

                    {/* Sketch */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--accent-gold)"><path d="M12 2L2 9l10 13 10-13zM4.1 9.5L12 3.8l7.9 5.7L12 20.2z"/></svg>
                      </div>
                      <span className="skill-name">Sketch</span>
                    </div>

                    {/* Midjourney */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--accent-gold)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H9v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                      </div>
                      <span className="skill-name">Midjourney</span>
                    </div>

                    {/* Spline */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--accent-gold)"><path d="M12 2L2 7l10 5 10-5zm-1 9.5v10.5l-9-4.5v-10.5zm2 10.5V11.5l9-4.5v10.5z"/></svg>
                      </div>
                      <span className="skill-name">Spline 3D</span>
                    </div>

                    {/* Blender */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--accent-gold)"><path d="M12 2a10 10 0 0 0-3.9 19.2c.2.1.4 0 .4-.2v-2.1c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7.9.7 1.9v2.9c0 .2.2.3.4.2A10 10 0 0 0 12 2z"/></svg>
                      </div>
                      <span className="skill-name">Blender</span>
                    </div>

                    {/* React */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--accent-gold)"><path d="M12 8.66c-1.84 0-3.33 1.49-3.33 3.34s1.49 3.33 3.33 3.33 3.33-1.49 3.33-3.33-1.49-3.34-3.33-3.34zm8.67 3.34c0 .54-.04 1.07-.12 1.59l2.42 1.89c.22.17.28.48.14.73l-2.3 3.97c-.15.25-.45.35-.71.25l-2.85-1.15a8.27 8.27 0 0 1-2.75 1.59l-.43 3.03c-.04.27-.27.47-.55.47h-4.6c-.28 0-.51-.2-.55-.47l-.43-3.03a8.27 8.27 0 0 1-2.75-1.59l-2.85 1.15c-.26.1-.56 0-.71-.25l-2.3-3.97c-.14-.25-.08-.56.14-.73l2.42-1.89a8.67 8.67 0 0 1 0-3.18L1.64 8.7c-.22-.17-.28-.48-.14-.73l2.3-3.97c.15-.25.45-.35.71-.25l2.85 1.15a8.27 8.27 0 0 1 2.75-1.59l.43-3.03c.04-.27.27-.47.55-.47h4.6c.28 0 .51.2.55.47l.43 3.03a8.27 8.27 0 0 1 2.75 1.59l2.85-1.15c.26-.1.56 0 .71.25l2.3 3.97c.14.25.08.56-.14.73l-2.42 1.89c.08.52.12 1.05.12 1.59z"/></svg>
                      </div>
                      <span className="skill-name">React JS</span>
                    </div>

                    {/* TailwindCSS */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--accent-gold)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H9v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                      </div>
                      <span className="skill-name">Tailwind</span>
                    </div>

                    {/* Node.js */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--accent-gold)"><path d="M12 2.69l5.66 3.27v6.53L12 15.77l-5.66-3.28V5.96L12 2.69m0-1.5L4.5 5.5v11L12 21l7.5-4.5V5.5L12 1.19z"/></svg>
                      </div>
                      <span className="skill-name">Node.js</span>
                    </div>

                    {/* Webflow */}
                    <div className="skill-card">
                      <div className="skill-icon-wrap">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--accent-gold)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H9v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                      </div>
                      <span className="skill-name">Webflow</span>
                    </div>

                  </div>
                </div>

                {/* 2. SPLIT SECTION: Resume timeline on left, Extended job details on right */}
                <div className="summary-split-section">
                  
                  {/* Left Column (Timelines, Education, Languages) */}
                  <div className="summary-split-col">
                    
                    {/* Education Card */}
                    <div>
                      <h3 className="section-title">Education</h3>
                      <div className="edu-list">
                        <div className="edu-item">
                          <span className="edu-bullet"></span>
                          <div className="edu-school">Savannah College of Art and Design (SCAD)</div>
                          <div className="edu-degree">B.F.A. in Interactive Design & Game Development (Honors, 2012 — 2016)</div>
                        </div>
                        <div className="edu-item">
                          <span className="edu-bullet"></span>
                          <div className="edu-school">Georgia Institute of Technology</div>
                          <div className="edu-degree">Human-Computer Interaction (HCI) Certification (2017)</div>
                        </div>
                      </div>
                    </div>

                    {/* Certifications Card */}
                    <div>
                      <h3 className="section-title">Certificates</h3>
                      <div className="edu-list">
                        <div className="edu-item">
                          <span className="edu-bullet"></span>
                          <div className="edu-school">Nielsen Norman Group (NN/g)</div>
                          <div className="edu-degree">UX Master Certified (ID: 40827, 2021)</div>
                        </div>
                        <div className="edu-item">
                          <span className="edu-bullet"></span>
                          <div className="edu-school">Google Design & Career Academy</div>
                          <div className="edu-degree">Google UX Design Professional Certificate (2020)</div>
                        </div>
                        <div className="edu-item">
                          <span className="edu-bullet"></span>
                          <div className="edu-school">Interaction Design Foundation</div>
                          <div className="edu-degree">Advanced Interaction Design Specialization (2018)</div>
                        </div>
                      </div>
                    </div>

                    {/* Languages Section */}
                    <div>
                      <h3 className="section-title">Languages</h3>
                      <div className="languages-list">
                        <div className="language-item">
                          <div className="language-header">
                            <span>English</span>
                            <span>Native / Bilingual</span>
                          </div>
                          <div className="progress-track"><div className="progress-fill" style={{ width: '100%' }}></div></div>
                        </div>
                        <div className="language-item">
                          <div className="language-header">
                            <span>Spanish</span>
                            <span>Professional (85%)</span>
                          </div>
                          <div className="progress-track"><div className="progress-fill" style={{ width: '85%' }}></div></div>
                        </div>
                        <div className="language-item">
                          <div className="language-header">
                            <span>German</span>
                            <span>Conversational (40%)</span>
                          </div>
                          <div className="progress-track"><div className="progress-fill" style={{ width: '40%' }}></div></div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right Column (Extended Professional Experience) */}
                  <div className="summary-split-col">
                    <div>
                      <h3 className="section-title">Professional Experience</h3>
                      <div className="experience-list">
                        
                        {/* Experience 1 */}
                        <div className="exp-item">
                          <div className="exp-header">
                            <span className="exp-role">Senior Product Designer</span>
                            <span className="exp-date">2022 — Present</span>
                          </div>
                          <div className="exp-company">Flowstate Web Application</div>
                          <p className="exp-desc">
                            Spearheading end-to-end UX/UI and micro-interactions for a high-end web app. Reduced user onboarding drop-off by 20% in three months. Collaborated directly with VP of Design to build a responsive, cohesive token-based design library, achieving 100% vector-alignment across engineering teams.
                          </p>
                        </div>

                        {/* Experience 2 */}
                        <div className="exp-item">
                          <div className="exp-header">
                            <span className="exp-role">Lead Interaction Designer</span>
                            <span className="exp-date">2019 — 2022</span>
                          </div>
                          <div className="exp-company">Pixel & Pulse Lab</div>
                          <p className="exp-desc">
                            Designed fluid interactive animations, customized SVG graphical layouts, and responsive desktop interfaces for mobile streaming clients. Oversaw design QA, aligning user flows across multiple cross-functional Scrum structures.
                          </p>
                        </div>

                        {/* Experience 3 */}
                        <div className="exp-item">
                          <div className="exp-header">
                            <span className="exp-role">UX Specialist</span>
                            <span className="exp-date">2016 — 2019</span>
                          </div>
                          <div className="exp-company">Creative Agency Vortex</div>
                          <p className="exp-desc">
                            Conducted comprehensive research studies, developed high-fidelity functional click-through prototypes, and structured visual assets for e-commerce platforms. Improved user checkout completion rates by 15%.
                          </p>
                        </div>

                        {/* Experience 4 */}
                        <div className="exp-item">
                          <div className="exp-header">
                            <span className="exp-role">Interactive Design Intern</span>
                            <span className="exp-date">2015 — 2016</span>
                          </div>
                          <div className="exp-company">Atlanta Design Co.</div>
                          <p className="exp-desc">
                            Assisted senior visual designers in creating brand design layouts, mapping wireframe structures, and organizing complex Photoshop and Illustrator asset sheets.
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>

                {/* 3. MULTIPLE FEATURED PROJECTS SHOWCASE GRID */}
                <div className="full-width-block">
                  <div className="block-header">
                    <h2 className="block-title">Featured Showcases</h2>
                    <p className="block-subtitle">Deep dive into three premium design case studies. Click on any card to view detailed mockups and metric highlights.</p>
                  </div>

                  <div className="projects-grid">
                    
                    {/* Project Card 1: Flowstate */}
                    <div className="featured-project-preview" onClick={() => setActiveProject('flowstate')}>
                      <div className="project-preview-header">
                        <span className="project-tag">UX/UI & Web App</span>
                        <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'none', stroke: 'var(--accent-gold)', strokeWidth: '2.5px' }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                      <div>
                        <h3 className="project-preview-title">Flowstate Web Application</h3>
                        <p className="project-preview-desc">A premium glassmorphic, performance-oriented tracking and analysis dashboard for design systems.</p>
                      </div>
                      <div className="project-tech-pills">
                        <span className="tech-pill">Framer</span>
                        <span className="tech-pill">Figma</span>
                        <span className="tech-pill">Spline</span>
                      </div>
                    </div>

                    {/* Project Card 2: Pulse Music */}
                    <div className="featured-project-preview" onClick={() => setActiveProject('pulse')}>
                      <div className="project-preview-header">
                        <span className="project-tag">Audio Interface</span>
                        <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'none', stroke: 'var(--accent-gold)', strokeWidth: '2.5px' }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                      <div>
                        <h3 className="project-preview-title">Pulse Audio Platform</h3>
                        <p className="project-preview-desc">An interactive audio streaming interface featuring responsive circular wave motion grids.</p>
                      </div>
                      <div className="project-tech-pills">
                        <span className="tech-pill">Motion Design</span>
                        <span className="tech-pill">SVG</span>
                        <span className="tech-pill">React</span>
                      </div>
                    </div>

                    {/* Project Card 3: Vortex 3D */}
                    <div className="featured-project-preview" onClick={() => setActiveProject('vortex')}>
                      <div className="project-preview-header">
                        <span className="project-tag">3D Assets Dashboard</span>
                        <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'none', stroke: 'var(--accent-gold)', strokeWidth: '2.5px' }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                      <div>
                        <h3 className="project-preview-title">Vortex Immersive Asset Tool</h3>
                        <p className="project-preview-desc">A highly robust 3D model asset browser and custom editor optimized for mobile web browsers.</p>
                      </div>
                      <div className="project-tech-pills">
                        <span className="tech-pill">Spline</span>
                        <span className="tech-pill">Blender</span>
                        <span className="tech-pill">Webflow</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* 4. PREMIUM TESTIMONIALS SECTION */}
                <div className="full-width-block">
                  <div className="block-header">
                    <h2 className="block-title">Client Recommendations</h2>
                    <p className="block-subtitle">Endorsements from design leaders, product managers, and engineering partners.</p>
                  </div>

                  <div className="testimonials-grid">
                    
                    {/* Testimonial 1 */}
                    <div className="testimonial-card">
                      <svg className="quote-svg" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="testimonial-text">
                        "Tyrone has a rare capability to merge motion, high-definition glassmorphic aesthetics, and deep architectural UX logic. His designs drove our user engagement up by 40%."
                      </p>
                      <div className="reviewer-info">
                        <div className="reviewer-avatar-placeholder">SJ</div>
                        <div className="reviewer-details">
                          <span className="reviewer-name">Sarah Jenkins</span>
                          <span className="reviewer-title">VP of Product, Flowstate App</span>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="testimonial-card">
                      <svg className="quote-svg" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="testimonial-text">
                        "Tyrone is a developer's dream designer. His spec assets are highly logical, and his absolute command of responsive CSS grids makes translation to React effortless."
                      </p>
                      <div className="reviewer-info">
                        <div className="reviewer-avatar-placeholder">MT</div>
                        <div className="reviewer-details">
                          <span className="reviewer-name">Marcus Thorne</span>
                          <span className="reviewer-title">Director of Engineering, Pulse Lab</span>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="testimonial-card">
                      <svg className="quote-svg" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="testimonial-text">
                        "A cinematic visionary. Tyrone doesn't just design pages; he designs memorable sensory experiences. His understanding of backlighting and contrast is absolutely stunning."
                      </p>
                      <div className="reviewer-info">
                        <div className="reviewer-avatar-placeholder">ER</div>
                        <div className="reviewer-details">
                          <span className="reviewer-name">Elena Rostova</span>
                          <span className="reviewer-title">Design Director, Vortex Studio</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ----------------------------------------
             TAB 3: SOCIAL LINKS & CONTACT FORM (Verically scrollable layout)
             ---------------------------------------- */}
          {activeTab === 'links' && !activeProject && (
            <div className="view-slide active">
              <div className="summary-slide">
                
                {/* Social links block */}
                <div className="full-width-block">
                  <div className="block-header">
                    <h2 className="block-title">Developer & Creative Portfolios</h2>
                    <p className="block-subtitle">Access raw resources, public mockups, design assets, and active community releases.</p>
                  </div>

                  <div className="projects-grid">
                    
                    {/* Figma */}
                    <a href="https://figma.com/@tyronebrooks" target="_blank" rel="noreferrer" className="featured-project-preview" style={{ textDecoration: 'none' }}>
                      <div className="project-preview-header">
                        <span className="project-tag" style={{ color: '#0acf83' }}>Figma Community</span>
                        <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'none', stroke: '#0acf83', strokeWidth: '2.5px' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                      </div>
                      <div>
                        <h3 className="project-preview-title">Figma Creator Profile</h3>
                        <p className="project-preview-desc">Free access to interactive wireframe UI bundles and dark-glassmorphism component libraries.</p>
                      </div>
                      <div className="project-tech-pills">
                        <span className="tech-pill">12k Followers</span>
                        <span className="tech-pill">Vector UI</span>
                      </div>
                    </a>

                    {/* Dribbble */}
                    <a href="https://dribbble.com/tyronebrooks" target="_blank" rel="noreferrer" className="featured-project-preview" style={{ textDecoration: 'none' }}>
                      <div className="project-preview-header">
                        <span className="project-tag" style={{ color: '#ea4c89' }}>Dribbble Showcase</span>
                        <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'none', stroke: '#ea4c89', strokeWidth: '2.5px' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                      </div>
                      <div>
                        <h3 className="project-preview-title">Dribbble Motion Shots</h3>
                        <p className="project-preview-desc">Explore visual captures of dynamic screen flows, rim light renders, and Spline 3D designs.</p>
                      </div>
                      <div className="project-tech-pills">
                        <span className="tech-pill">Cinematic Shots</span>
                        <span className="tech-pill">3D Art</span>
                      </div>
                    </a>

                    {/* Behance */}
                    <a href="https://behance.net/tyronebrooks" target="_blank" rel="noreferrer" className="featured-project-preview" style={{ textDecoration: 'none' }}>
                      <div className="project-preview-header">
                        <span className="project-tag" style={{ color: '#0057ff' }}>Behance Portfolio</span>
                        <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'none', stroke: '#0057ff', strokeWidth: '2.5px' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                      </div>
                      <div>
                        <h3 className="project-preview-title">Behance Case Studies</h3>
                        <p className="project-preview-desc">Extended project breakdowns, UX persona flows, wireframe models, and comprehensive wireframes.</p>
                      </div>
                      <div className="project-tech-pills">
                        <span className="tech-pill">Featured Work</span>
                        <span className="tech-pill">UX Research</span>
                      </div>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/tyronebrooks-design" target="_blank" rel="noreferrer" className="featured-project-preview" style={{ textDecoration: 'none' }}>
                      <div className="project-preview-header">
                        <span className="project-tag" style={{ color: '#f8fafc' }}>GitHub Source</span>
                        <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'none', stroke: '#f8fafc', strokeWidth: '2.5px' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                      </div>
                      <div>
                        <h3 className="project-preview-title">GitHub Repositories</h3>
                        <p className="project-preview-desc">Open-source CSS libraries, React animations, and functional glassmorphic sandbox files.</p>
                      </div>
                      <div className="project-tech-pills">
                        <span className="tech-pill">Open Source</span>
                        <span className="tech-pill">CSS / JS</span>
                      </div>
                    </a>

                  </div>
                </div>

                {/* 2. FUNCTIONAL GLASSMORPHIC CONTACT FORM */}
                <div className="full-width-block" style={{ alignItems: 'center' }}>
                  <div className="block-header" style={{ width: '100%', maxWidth: '780px' }}>
                    <h2 className="block-title">Start a Project Consultation</h2>
                    <p className="block-subtitle">Drop a secure message. Let's design something memorable and logically flawless.</p>
                  </div>

                  <div className="contact-form-card">
                    {formSubmitted ? (
                      <div style={{ textAlign: 'center', padding: '40px 0' }}>
                        <svg viewBox="0 0 24 24" style={{ width: '48px', height: '48px', stroke: '#10b981', fill: 'none', strokeWidth: '2px', marginBottom: '16px' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px', color: '#10b981' }}>Message Received Successfully!</h3>
                        <p style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>Thank you for reaching out. Tyrone will get back to you within 24 hours.</p>
                      </div>
                    ) : (
                      <form className="contact-form" onSubmit={handleContactSubmit}>
                        <div>
                          <label className="form-label">Full Name</label>
                          <input type="text" className="form-input" placeholder="e.g., Sarah Jenkins" required />
                        </div>
                        <div>
                          <label className="form-label">Email Address</label>
                          <input type="email" className="form-input" placeholder="e.g., sarah@company.com" required />
                        </div>
                        <div className="form-group-full">
                          <label className="form-label">Subject</label>
                          <input type="text" className="form-input" placeholder="e.g., Redesigning our core Dashboard Interface" required />
                        </div>
                        <div className="form-group-full">
                          <label className="form-label">Message Details</label>
                          <textarea className="form-input form-textarea" placeholder="Describe the objectives, timelines, and scope of your project..." required></textarea>
                        </div>
                        <div className="form-group-full" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                          <button type="submit" className="btn-cv">
                            Send Secure Message
                            <svg viewBox="0 0 24 24" style={{ width: '13px', height: '13px', marginLeft: '8px', fill: 'none', stroke: 'currentColor', strokeWidth: '3px' }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ==========================================
             CASE STUDY SCREENS (Overlay Detail Views)
             ========================================== */}
          {activeProject && (
            <div className="view-slide active">
              <div className="project-slide">
                
                {/* Left details panel */}
                <div className="project-left">
                  
                  {/* Back button */}
                  <button className="back-btn" onClick={() => setActiveProject(null)}>
                    <svg className="back-icon" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    Back to Resume Overview
                  </button>

                  {/* Flowstate Case Study Details */}
                  {activeProject === 'flowstate' && (
                    <div>
                      <span className="project-tag">Case Study — Featured Product</span>
                      <h2 className="project-title">Flowstate</h2>
                      <p className="project-subtitle">UX/UI & Web App Redesign</p>

                      <div className="project-detail-section">
                        <h4 className="project-detail-label">About the Project</h4>
                        <p className="project-detail-text">
                          Flowstate is an elite performance tracking analytics dashboard. The scope of the project was to transform complex, multi-layered data feeds into simple, actionable visual metrics utilizing highly clean responsive components and premium cinematic styling.
                        </p>
                      </div>

                      <div className="project-detail-section">
                        <h4 className="project-detail-label">Key Achievements & Impact</h4>
                        <p className="project-detail-text">
                          - Reduced user onboarding drop-off by <span className="achievement-highlight">20% within three months</span>.<br />
                          - Established a unified, token-based Figma design library for engineering scale.<br />
                          - Improved data readability scores by 35% through HSL color and vector grid refinement.
                        </p>
                      </div>

                      <div className="project-detail-section">
                        <h4 className="project-detail-label">Technologies Employed</h4>
                        <p className="project-detail-text">
                          Figma, Framer, HSL Color Systems, React, Webflow.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Pulse Case Study Details */}
                  {activeProject === 'pulse' && (
                    <div>
                      <span className="project-tag">Case Study — Audio Interface</span>
                      <h2 className="project-title">Pulse Audio</h2>
                      <p className="project-subtitle">Interactive Audio Interface</p>

                      <div className="project-detail-section">
                        <h4 className="project-detail-label">About the Project</h4>
                        <p className="project-detail-text">
                          Pulse Audio is a premium mobile and web audio streaming platform. The design goal was to conceptualize a highly unique music visualizer that reacts with linear-motion waveforms, maintaining flawless accessibility controls and extremely smooth 60fps transitions.
                        </p>
                      </div>

                      <div className="project-detail-section">
                        <h4 className="project-detail-label">Key Achievements & Impact</h4>
                        <p className="project-detail-text">
                          - Designed and deployed custom react-motion wave components.<br />
                          - Increased daily user session duration by <span className="achievement-highlight">18% through ambient interactions</span>.<br />
                          - Developed interactive circular player grids that resize perfectly on all screens.
                        </p>
                      </div>

                      <div className="project-detail-section">
                        <h4 className="project-detail-label">Technologies Employed</h4>
                        <p className="project-detail-text">
                          Motion Design, SVGs, CSS Keyframe Animations, React.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Vortex Case Study Details */}
                  {activeProject === 'vortex' && (
                    <div>
                      <span className="project-tag">Case Study — Immersive Tool</span>
                      <h2 className="project-title">Vortex 3D</h2>
                      <p className="project-subtitle">Immersive Asset Dashboard</p>

                      <div className="project-detail-section">
                        <h4 className="project-detail-label">About the Project</h4>
                        <p className="project-detail-text">
                          Vortex is a powerful web-based application designed to browse, configure, and download interactive 3D assets. The UI leverages a fully custom dark-glassmorphism sidebar and fluid pedestal backlighting to highlight each three-dimensional model dynamically.
                        </p>
                      </div>

                      <div className="project-detail-section">
                        <h4 className="project-detail-label">Key Achievements & Impact</h4>
                        <p className="project-detail-text">
                          - Implemented fully responsive Blender/Spline canvas layers.<br />
                          - Sped up WebGL model loading times by <span className="achievement-highlight">40% through asset asset structure QA</span>.<br />
                          - Voted "Best of E-Commerce UI" by the Savannah Design Collective in 2024.
                        </p>
                      </div>

                      <div className="project-detail-section">
                        <h4 className="project-detail-label">Technologies Employed</h4>
                        <p className="project-detail-text">
                          Spline 3D, Blender, Webflow, CSS Glassmorphism.
                        </p>
                      </div>
                    </div>
                  )}

                </div>

                {/* Right Pedestal phone mockup panel */}
                <div className="project-right">
                  <div className="mockup-media-card">
                    {/* Standard generated pedestal phone mockup is displayed elegantly */}
                    <img 
                      src="./flowstate_mockup.png" 
                      alt={`${activeProject} Mockup Graphic`} 
                      className="mockup-img"
                    />
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* ==========================================
           FLOATING BOTTOM NAVIGATION PILL (Fixed viewport)
           ========================================== */}
        {!activeProject && (
          <nav className="floating-navbar">
            <button 
              className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => setActiveTab('home')}
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5px"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>
              Home
            </button>
            <button 
              className={`nav-item ${activeTab === 'summary' ? 'active' : ''}`}
              onClick={() => setActiveTab('summary')}
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5px"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
              Resume & Showcases
            </button>
            <button 
              className={`nav-item ${activeTab === 'links' ? 'active' : ''}`}
              onClick={() => setActiveTab('links')}
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              Links & Contact
            </button>
          </nav>
        )}

      </div>
    </div>
  );
}

export default App;
