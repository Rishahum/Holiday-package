import { useState } from 'react';
import './SearchBox.scss';

const tabs = [
  {
    label: 'Flights',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M5 17.5L19 6.5M19 6.5H13M19 6.5V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Hotels',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: 'Tours',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Packages',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
];

export default function SearchBox() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="search-box">
      <div className="search-box__container">
        <div className="search-box__card">
          <div className="search-box__tabs">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`search-box__tab ${activeTab === i ? 'active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          <div className="search-box__form">
            <div className="search-box__field">
              <label>From</label>
              <div className="search-box__input-wrap">
                <input type="text" defaultValue="New York (NYC)" />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 17.5L19 6.5M19 6.5H13M19 6.5V12.5" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="search-box__field">
              <label>To</label>
              <div className="search-box__input-wrap">
                <input type="text" placeholder="Where to?" />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#9ca3af" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="#9ca3af" strokeWidth="2"/>
                </svg>
              </div>
            </div>

            <div className="search-box__field">
              <label>Depart</label>
              <div className="search-box__input-wrap">
                <input type="text" defaultValue="May 20, 2024" />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="#9ca3af" strokeWidth="2"/>
                  <path d="M16 2v4M8 2v4M3 10h18" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <div className="search-box__field">
              <label>Return</label>
              <div className="search-box__input-wrap">
                <input type="text" defaultValue="May 27, 2024" />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="#9ca3af" strokeWidth="2"/>
                  <path d="M16 2v4M8 2v4M3 10h18" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <div className="search-box__field">
              <label>Travelers</label>
              <div className="search-box__input-wrap">
                <input type="text" defaultValue="2 Adults, 1 Child" />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="9" cy="7" r="4" stroke="#9ca3af" strokeWidth="2"/>
                  <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.87" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <button className="search-box__btn">
              Search
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2.5"/>
                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
