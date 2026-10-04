import './Navbar.scss';

const navLinks = ['Home', 'Destinations', 'Tours', 'Flights', 'Hotels', 'Blog', 'About Us'];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="#" className="navbar__logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M4 18L14 4L24 18" stroke="#1e6be6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 4L20 14H8L14 4Z" fill="#1e6be6" fillOpacity="0.2"/>
            <circle cx="14" cy="22" r="3" fill="#1e6be6"/>
          </svg>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Wanderly</span>
            <span className="navbar__logo-tagline">TRAVEL THE WORLD</span>
          </div>
        </a>

        <ul className="navbar__links">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a href="#" className={i === 0 ? 'active' : ''}>{link}</a>
            </li>
          ))}
        </ul>

        <div className="navbar__right">
          <div className="navbar__phone">
            <div className="navbar__phone-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="#1e6be6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="navbar__phone-label">Need Help?</span>
              <span className="navbar__phone-number">+1 234 567 8900</span>
            </div>
          </div>
          <button className="navbar__user">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
