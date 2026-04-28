import { hotelData } from '../data/hotelData';

const navLinks = [
  ['About', 'about'], ['Rooms', 'rooms'], ['Services', 'services'],
  ['Restaurant', 'restaurant'], ['Events', 'events'], ['Contact', 'contact'],
];

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer__main">

        {/* Brand */}
        <div>
          <div className="footer__brand-logo">
            {/* <img src="/logo.svg" alt="Hotel Zesper Logo" /> */}
            <div>
              <span className="footer__brand-name">ZESPER</span>
              <span className="footer__brand-sub">HOTEL · KISII</span>
            </div>
          </div>
          <p className="footer__brand-desc">
            A serene hilltop modern hotel offering comfort, privacy and value for money
            in Kisii, Kenya.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <div className="footer__col-title">Navigation</div>
          <div className="footer__nav-grid">
            {navLinks.map(([label, id]) => (
              <button key={id} className="footer__nav-link" onClick={() => scrollTo(id)}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="footer__col-title">Contact</div>
          <div className="footer__contact-list">
            <a href={`tel:${hotelData.contact.phone}`} className="footer__contact-link">
              {hotelData.contact.phone}
            </a>
            <a href={`mailto:${hotelData.contact.email}`} className="footer__contact-link">
              {hotelData.contact.email}
            </a>
            <span className="footer__contact-link">{hotelData.contact.location}</span>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p>© {new Date().getFullYear()} Hotel Zesper. All rights reserved.</p>
          <p>Nyanchwa, Kisii, Kenya</p>
        </div>
      </div>
    </footer>
  );
}
