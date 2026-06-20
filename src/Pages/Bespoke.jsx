import React from 'react';
import '../App.css'
import useScrollReveal from '../hooks/useScrollReveal';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Bespoke = () => {
  useScrollReveal();
  return (
    <>
      <Navbar />
      <main className="page-wrapper">
        <div className="page-load-line"></div>

        {/* 1. HERO SECTION */}
        <section className="hero-section text-center">
          <div className="hero-overlay"></div>
          <div className="container hero-content px-4 reveal-stagger">
            <span className="hero-subtitle mb-3 d-block reveal-up">Bespoke Atelier</span>
            <h1 className="hero-title serif-heading reveal-up">Private Commissions</h1>
          </div>
        </section>

        {/* 2. INTRODUCTORY ESSAY */}
        <section className="container text-center px-4">
          <div className="intro-section reveal-stagger">
            <span className="section-label d-block mb-4 reveal-up">Aurae Luna Capa</span>
            <p className="intro-text serif-italic reveal-up">
              From concepts into physical reality, our bespoke commission framework delivers uniquely tailored architectural pieces, furniture fixtures, and light designs specific to the environment they occupy. Each build marries uncompromising craftsmanship with spatial philosophy.
            </p>
          </div>
        </section>

        {/* 3. PROCESS METHODS */}
        <section className="process-section">
          <div className="container px-4 px-md-5">
            <div className="row mb-5 reveal-stagger">
              <div className="col-6"><span className="section-label reveal-up">Framework</span></div>
              <div className="col-6 text-end"><span className="section-label reveal-up">Methodology</span></div>
            </div>

            <div className="row g-4 g-lg-5 reveal-stagger">
              <div className="col-12 col-sm-6 col-lg-3 reveal-up">
                <span className="step-num">01</span>
                <h3 className="step-title">Consultation</h3>
                <p className="step-desc">Discussing design parameters, material profiles, and spatial contexts to define architectural limits and primary aesthetic briefs.</p>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 reveal-up">
                <span className="step-num">02</span>
                <h3 className="step-title">Drafting</h3>
                <p className="step-desc">Translating conceptual goals into rigorous spatial drawings, technical modeling schemes, and raw texture exploration profiles.</p>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 reveal-up">
                <span className="step-num">03</span>
                <h3 className="step-title">Prototyping</h3>
                <p className="step-desc">Refining mockups and specific joints to balance structural integrity with pure minimalist visual presence.</p>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 reveal-up">
                <span className="step-num">04</span>
                <h3 className="step-title">Final Realization</h3>
                <p className="step-desc">Material fabrication, treatment, on-site assembly alignment, and final spatial integration oversight.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SELECTED PORTFOLIO WORKS */}
        <section className="works-section">
          <div className="container px-4 px-md-5">
            <div className="text-center mb-5 pb-4 reveal">
              <span className="section-label">Case Studies</span>
            </div>

            {/* Featured Feature (Large Row) */}
            <div className="row g-4 g-md-5 align-items-center work-card justify-content-between">
              <div className="col-12 col-md-7">
                <div className="work-img-wrapper reveal" style={{ maxHeight: '520px' }}>
                  <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000" alt="The Monolith Seat" className="work-img work-img-reveal reveal" />
                </div>
              </div>
              <div className="col-12 col-md-4 reveal-stagger">
                <span className="work-category reveal-up">Custom Furniture</span>
                <h3 className="work-title serif-heading reveal-up">The Monolith Seat</h3>
                <p className="work-desc reveal-up">A study on physical gravity and raw stone materials. Tailored to align seamlessly with skylight columns to shift character and shadow outlines throughout the day.</p>
                <a href="#view" className="inline-link reveal-up">View Project</a>
              </div>
            </div>

            {/* Split Elements Row */}
            <div className="row g-4 g-md-5 pt-5">
              <div className="col-12 col-md-5 work-card reveal-stagger">
                <div className="work-img-wrapper reveal" style={{ maxHeight: '400px' }}>
                  <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800" alt="Fluted Wall Sconce" className="work-img work-img-reveal reveal" />
                </div>
                <span className="work-category reveal-up">Lighting System</span>
                <h3 className="work-title serif-heading reveal-up" style={{ fontSize: '0.95rem' }}>Fluted Wall Sconce</h3>
                <p className="work-desc reveal-up" style={{ fontSize: '0.8rem' }}>Cast glass diffusion experiments.</p>
              </div>

              <div className="col-12 col-md-6 offset-md-1 work-card mt-md-5 reveal-stagger">
                <div className="work-img-wrapper reveal" style={{ maxHeight: '450px' }}>
                  <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800" alt="The Travertine Atelier Desk" className="work-img work-img-reveal reveal" />
                </div>
                <span className="work-category reveal-up">Private Residence</span>
                <h3 className="work-title serif-heading reveal-up" style={{ fontSize: '0.95rem' }}>The Travertine Atelier Desk</h3>
                <p className="work-desc reveal-up" style={{ fontSize: '0.8rem' }}>Dual-pillar assembly tailored for personal work studios.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CONTACT FORM (START A DIALOGUE) */}
        <section className="contact-section text-center reveal-stagger">
          <div className="container px-4">
            <h2 className="form-title serif-heading reveal-up">Start a Dialogue</h2>
            <p className="form-subtitle reveal-up">To request details regarding bespoke commissions, allocations, or material systems, contact our studio desk via the terminal form below.</p>

            <form className="custom-form reveal-stagger">
              <div className="form-group-custom reveal-up">
                <label className="form-label-custom">Full Name</label>
                <input type="text" className="form-control-custom" required />
              </div>

              <div className="form-group-custom reveal-up">
                <label className="form-label-custom">Email Address</label>
                <input type="email" className="form-control-custom" required />
              </div>

              <div className="form-group-custom reveal-up">
                <label className="form-label-custom">Project Brief & Spatial Context</label>
                <textarea className="form-control-custom" rows="2" required></textarea>
              </div>

              <button type="submit" className="btn-submit-light reveal-up">Send Request</button>
            </form>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Bespoke;