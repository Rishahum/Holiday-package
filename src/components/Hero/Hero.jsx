import './Hero.scss';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__tag">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 17.5L19 6.5M19 6.5H13M19 6.5V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Explore. Dream. Discover.
        </p>
        <h1 className="hero__title">
          Discover Amazing
          <span className="hero__title-script"> Places with Us</span>
        </h1>
        <p className="hero__subtitle">
          Find the best tours, hotels and flights: everything<br />
          you need for the perfect trip.
        </p>
        <a href="#" className="hero__cta">
          Explore Now
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
