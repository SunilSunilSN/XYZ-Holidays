import { Link } from 'react-router-dom'
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Plane,
  Globe
} from 'lucide-react'

import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">

      {/* Main Footer */}
      <div className="footer-main">

        <div className="footer-container">

          {/* Brand */}
          <div className="footer-brand">

            <Link to="/" className="footer-logo">
              <span className="footer-logo-icon">
                <Plane size={23} />
              </span>

              <span className="footer-logo-content">
                <strong>
                  XYZ <span>HOLIDAYS</span>
                </strong>
                <small>EXPLORE THE WORLD</small>
              </span>
            </Link>

            <p>
              Discover unforgettable journeys with carefully
              designed holidays, personalized travel planning
              and experiences that create memories for a lifetime.
            </p>

            <div className="footer-socials">
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                IG
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                f
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
                ▶
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                in
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div className="footer-column">

            <h3>Quick Links</h3>

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/packages">Holiday Packages</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>

          </div>

          {/* Destinations */}
          <div className="footer-column">

            <h3>Popular Destinations</h3>

            <ul>
              <li><Link to="/destinations">Dubai</Link></li>
              <li><Link to="/destinations">Abu Dhabi</Link></li>
              <li><Link to="/destinations">Maldives</Link></li>
              <li><Link to="/destinations">Singapore</Link></li>
              <li><Link to="/destinations">Thailand</Link></li>
            </ul>

          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">

            <h3>Get In Touch</h3>

            <div className="footer-contact-item">
              <MapPin size={19} />
              <div>
                <span>Our Location</span>
                <p>India</p>
              </div>
            </div>

            <div className="footer-contact-item">
              <Phone size={19} />
              <div>
                <span>Call Us</span>
                <p>+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={19} />
              <div>
                <span>Email Us</span>
                <p>info@xyzh​olidays.com</p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Newsletter / CTA */}
      <div className="footer-newsletter">
        <div className="footer-container footer-newsletter-inner">

          <div>
            <span>YOUR NEXT ADVENTURE STARTS HERE</span>
            <h3>Let's plan something unforgettable.</h3>
          </div>

          <Link to="/contact" className="footer-newsletter-button">
            Plan Your Trip
            <ArrowRight size={17} />
          </Link>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">

        <div className="footer-container footer-bottom-inner">

          <p>
            © {new Date().getFullYear()} XYZ Holidays.
            All rights reserved.
          </p>

          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>

          <div className="footer-made">
            <Globe size={14} />
            Explore the world
          </div>

        </div>

      </div>

    </footer>
  )
}
