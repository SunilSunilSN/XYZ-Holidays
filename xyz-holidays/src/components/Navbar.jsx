import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Packages', path: '/packages' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="site-header">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-symbol">✧</span>

          <span className="logo-content">
            <span className="logo-name">
              XYZ <span>HOLIDAYS</span>
            </span>
            <span className="logo-tagline">EXPLORE THE WORLD</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/910000000000"
          target="_blank"
          rel="noreferrer"
          className="navbar-cta"
        >
          Plan Your Trip <span>↗</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-button ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-navigation ${menuOpen ? 'show' : ''}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end={link.path === '/'}
            onClick={closeMenu}
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? 'active' : ''}`
            }
          >
            {link.name}
            <span>→</span>
          </NavLink>
        ))}

        <a
          href="https://wa.me/910000000000"
          target="_blank"
          rel="noreferrer"
          className="mobile-cta"
          onClick={closeMenu}
        >
          Plan Your Trip ↗
        </a>
      </div>
    </header>
  )
}
