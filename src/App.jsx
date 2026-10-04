import './styles/global.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SearchBox from './components/SearchBox/SearchBox';
import Features from './components/Features/Features';
import PopularDestinations from './components/PopularDestinations/PopularDestinations';
import WhyChoose from './components/WhyChoose/WhyChoose';
import Newsletter from './components/Newsletter/Newsletter';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SearchBox />
        <Features />
        <PopularDestinations />
        <WhyChoose />
        <Newsletter />
      </main>
    </>
  );
}
