import './PopularDestinations.scss';

const destinations = [
  {
    name: 'Thailand',
    location: 'Phuket',
    price: '$699',
    badge: 'Bestseller',
    badgeColor: 'green',
    img: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=600&q=80',
  },
  {
    name: 'France',
    location: 'Paris',
    price: '$799',
    badge: 'Popular',
    badgeColor: 'purple',
    img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80',
  },
  {
    name: 'Bali, Indonesia',
    location: 'Ubud',
    price: '$599',
    badge: 'Trending',
    badgeColor: 'orange',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
  },
  {
    name: 'Dubai, UAE',
    location: 'Dubai',
    price: '$899',
    badge: 'Bestseller',
    badgeColor: 'green',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
  },
];

const PinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2.5"/>
  </svg>
);

export default function PopularDestinations() {
  return (
    <section className="destinations">
      <div className="destinations__container">
        <div className="destinations__header">
          <div className="destinations__header-left">
            <h2 className="destinations__title">Popular Destinations</h2>
            <svg className="destinations__plane" width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M5 17.5L19 6.5M19 6.5H13M19 6.5V12.5" stroke="#1e6be6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <a href="#" className="destinations__view-all">
            View All Destinations
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="destinations__grid">
          {destinations.map((dest, i) => (
            <div key={i} className="dest-card">
              <img src={dest.img} alt={dest.name} className="dest-card__img" loading="lazy" />
              <span className={`dest-card__badge dest-card__badge--${dest.badgeColor}`}>
                {dest.badge}
              </span>
              <div className="dest-card__info">
                <div className="dest-card__info-left">
                  <h3 className="dest-card__name">{dest.name}</h3>
                  <p className="dest-card__location">
                    <PinIcon /> {dest.location}
                  </p>
                </div>
                <div className="dest-card__price">
                  <span className="dest-card__from">From</span>
                  <span className="dest-card__amount">{dest.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
