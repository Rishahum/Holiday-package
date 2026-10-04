import './WhyChoose.scss';
import holidayImg from '../../assets/holiday.jpg';

const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#1e6be6" strokeWidth="2"/>
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" stroke="#1e6be6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Wide Range of Choices',
    desc: 'Choose from thousands of flights, hotels and tours worldwide.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" stroke="#1e6be6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" stroke="#1e6be6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Trusted by Travelers',
    desc: 'Join millions of happy travelers around the world.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#1e6be6" strokeWidth="2"/>
        <path d="M8 21h8M12 17v4" stroke="#1e6be6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Flexible & Easy Booking',
    desc: 'Book with ease and adjust your plans if needed.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="#1e6be6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Exclusive Deals',
    desc: 'Get access to exclusive discounts and special offers.',
  },
];

export default function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="why-choose__container">
        <div className="why-choose__left">
          <h2 className="why-choose__title">
            Why Choose{' '}
            <span className="why-choose__title-script">Wanderly?</span>
          </h2>
          <div className="why-choose__divider" />
          <div className="why-choose__grid">
            {reasons.map((r, i) => (
              <div key={i} className="why-choose__item">
                <div className="why-choose__item-icon">{r.icon}</div>
                <div>
                  <h4 className="why-choose__item-title">{r.title}</h4>
                  <p className="why-choose__item-desc">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="why-choose__right">
          <img src={holidayImg} alt="Adventure" className="why-choose__img" />
          <div className="why-choose__card">
            <p className="why-choose__card-tag">LET&apos;S GO!</p>
            <h3 className="why-choose__card-title">
              Your Next Adventure<br />Awaits!
            </h3>
            <p className="why-choose__card-desc">
              Discover breathtaking places and create unforgettable memories.
            </p>
            <a href="#" className="why-choose__card-btn">
              Plan Your Trip
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
