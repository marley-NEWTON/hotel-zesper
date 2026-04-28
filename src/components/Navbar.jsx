import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Rooms', 'Services', 'Restaurant', 'Events', 'Contact'];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'solid' : 'transparent'}`}>
      <div className="navbar__inner">

        {/* Logo */}
        <button
          className="navbar__logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          {/* <img src="/logo.svg" alt="Hotel Zesper Logo" className="navbar__logo-img" /> */}
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">ZESPER</span>
            <span className="navbar__logo-sub">HOTEL · KISII</span>
          </div>
        </button>

        {/* Desktop navigation */}
        <div className="navbar__links">
          {links.map((link) => (
            <button
              key={link}
              className="navbar__link"
              onClick={() => scrollTo(link)}
            >
              {link}
            </button>
          ))}
          <button className="navbar__book" onClick={() => scrollTo('Contact')}>
            Book Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <button key={link} className="navbar__link" onClick={() => scrollTo(link)}>
            {link}
          </button>
        ))}
        <button className="navbar__book" onClick={() => scrollTo('Contact')}>
          Book Now
        </button>
      </div>
    </nav>
  );
}
