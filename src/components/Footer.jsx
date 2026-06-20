import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Custom Styles for Typography and Fine-Tuning */}
      <style>{`
        .custom-footer {
          background-color: #f7f6f3;
          color: #1a1a1a;
          font-family: 'Inter', sans-serif; /* Fallback font, adjust to match your site */
          padding-top: 5rem;
          padding-bottom: 2rem;
        }
        
        .footer-brand {
          font-family: 'Didot', 'Bodoni MT', 'Cormorant Garamond', serif;
          letter-spacing: 0.3em;
          font-weight: 400;
          font-size: 1.5rem;
        }

        .footer-heading {
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          font-weight: 600;
          margin-bottom: 1.8rem;
          text-transform: uppercase;
        }

        .footer-link-list {
          list-style: none;
          padding-left: 0;
          margin-bottom: 0;
        }

        .footer-link-list li {
          margin-bottom: 0.9rem;
        }

        .footer-link-list a {
          color: #1a1a1a;
          text-decoration: none;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: opacity 0.2s ease;
        }

        .footer-link-list a:hover {
          opacity: 0.6;
        }

        /* Email Input Styling */
        .email-input-wrapper {
          position: relative;
          border-bottom: 1px solid #1a1a1a;
          padding-bottom: 0.5rem;
          max-width: 260px;
        }

        .email-input {
          border: none;
          background: transparent;
          width: 100%;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1a1a1a;
          padding-right: 2rem;
        }

        .email-input::placeholder {
          color: #b0b0b0;
        }

        .email-input:focus {
          outline: none;
        }

        .email-submit-btn {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        /* Journal Section Text */
        .journal-text {
          font-family: 'Georgia', serif;
          font-style: italic;
          font-size: 1.1rem;
          color: #4a4a4a;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        /* Social Button Outlines */
        .btn-social-outline {
          border: 1px solid #d3d3d3;
          background: transparent;
          color: #1a1a1a;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          padding: 0.6rem 1.5rem;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-block;
          transition: all 0.2s ease;
        }

        .btn-social-outline:hover {
          border-color: #1a1a1a;
          background-color: #1a1a1a;
          color: #ffffff;
        }

        /* Bottom Copyright Bar */
        .footer-bottom-text {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1a1a1a;
        }

        .footer-bottom-links a {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1a1a1a;
          text-decoration: none;
        }
        
        .footer-bottom-links a:hover {
          opacity: 0.6;
        }
      `}</style>

      <footer className="custom-footer">
        <div className="container-fluid px-4 px-md-5">
          {/* Main Footer Content */}
          <div className="row g-4 mb-5 justify-content-between">
            
            {/* Column 1: Brand & Newsletter */}
            <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div className="footer-brand mb-4">AURÆ LUNA</div>
              <div className="footer-heading mb-3">Stay Informed</div>
              <form onSubmit={(e) => e.preventDefault()} className="email-input-wrapper">
                <input 
                  type="email" 
                  className="email-input" 
                  placeholder="Enter Your Email" 
                  required 
                />
                <button type="submit" className="email-submit-btn" aria-label="Submit email">
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L17 6L12 11M17 6H1" stroke="#1A1A1A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>

            {/* Column 2: Collections */}
            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
              <h2 className="footer-heading">Collections</h2>
              <ul className="footer-link-list">
                <li><a href="#living-room">Living Room</a></li>
                <li><a href="#dining">Dining</a></li>
                <li><a href="#bedroom">Bedroom</a></li>
                <li><a href="#lighting">Lighting</a></li>
                <li><a href="#materiality">Materiality</a></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
              <h2 className="footer-heading">Services</h2>
              <ul className="footer-link-list">
                <li><a href="#interior-design">Interior Design</a></li>
                <li><a href="#custom-atelier">Custom Atelier</a></li>
                <li><a href="#virtual-showroom">Virtual Showroom</a></li>
                <li><a href="#book-consultation">Book a Consultation</a></li>
              </ul>
            </div>

            {/* Column 4: Company */}
            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
              <h2 className="footer-heading">Company</h2>
              <ul className="footer-link-list">
                <li><a href="#our-story">Our Story</a></li>
                <li><a href="#press">Press</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact-us">Contact Us</a></li>
                <li><a href="#showroom-locations">Showroom Locations</a></li>
              </ul>
            </div>

            {/* Column 5: Journal */}
            <div className="col-12 col-md-6 col-lg-3 mt-4 mt-lg-0">
              <h2 className="footer-heading">Journal</h2>
              <p className="journal-text">Visual notes on the philosophy of living.</p>
              <div className="d-flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="btn-social-outline">Instagram</a>
                <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="btn-social-outline">Pinterest</a>
              </div>
            </div>

          </div>

          <hr className="border-secondary opacity-20 my-4" />

          {/* Bottom Bar */}
          <div className="row pt-2 align-items-center">
            <div className="col-12 col-md-4 text-center text-md-start mb-3 mb-md-0">
              <span className="footer-bottom-text">
                &copy; {new Date().getFullYear()} AURÆ LUNA. ALL RIGHTS RESERVED.
              </span>
            </div>
            <div className="col-12 col-md-8 text-center text-md-end">
              <div className="footer-bottom-links d-flex flex-wrap justify-content-center justify-content-md-end gap-3 gap-md-4">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#cookie">Cookie Policy</a>
                <a href="#accessibility">Accessibility</a>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;