// Home.jsx
import { Link } from 'react-router-dom';
import './Styles/Home.css';

import Navbar from '../Components/Nav';
import useScrollReveal from '../hooks/useScrollReveal';

//images
import Salmon from '../assets/dish-salmon.png'
import Rib from '../assets/dish-shortrib.png'

const featuredDishes = [
  {
    name: 'Wood-Fired Salmon',
    description: 'Cedar-plank salmon, charred lemon, herb butter.',
    price: '$28',
    image: '../assets/dish-salmon.png',
  },
  {
    name: 'Slow-Braised Short Rib',
    description: 'Red wine reduction, roasted root vegetables.',
    price: '$32',
    image: '../assets/dish-shortrib.png',
  },
  {
    name: 'Charred Heirloom Tomato Tart',
    description: 'Whipped ricotta, basil oil, flaky crust.',
    price: '$19',
    image: '../assets/dish-tart.png',
  },
];

export default function Home() {
  const [aboutRef, aboutVisible] = useScrollReveal();
  const [dishesRef, dishesVisible] = useScrollReveal();

  return (
    <div className="home page">
      {/* Hero Section — excluded from scroll-reveal, navbar lives here */}
      <section
        className="hero home-hero"
        // style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
      >
        <Navbar />
        <div className="hero-content">
          <h1 className="hero-title">Amber & Oak</h1>
          <p className="hero-subtitle">
            Wood-fired dishes, warm evenings, and a table always waiting for you.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Reserve a Table</button>
            <Link to="/menu" className="btn btn-secondary">
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About/Story Teaser Section */}
      <section
        ref={aboutRef}
        className={`about-teaser section reveal ${aboutVisible ? 'reveal-visible' : ''}`}
      >
        <div className="container about-teaser-grid">
          <div className="about-teaser-image">
            <img src="../assets/restaurant-interior.png" alt="Inside Amber & Oak" />
          </div>

          <div className="about-teaser-content">
            <h2>Our Story</h2>
            <p>
              Founded on a simple idea — honest ingredients, cooked with care,
              served without pretension. Every dish on our table carries a
              little piece of where we came from.
            </p>
            <Link to="/menu" className="btn btn-primary">
              See the Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section
        ref={dishesRef}
        className={`featured-dishes section section-alt reveal ${dishesVisible ? 'reveal-visible' : ''}`}
      >
        <div className="container">
          <h2>Featured Dishes</h2>
          <p>A few of the plates our regulars keep coming back for.</p>

          <div className="grid grid-3 featured-dishes-grid">
            {featuredDishes.map((dish) => (
              <div className="card featured-dish-card" key={dish.name}>
                <img src={dish.image} alt={dish.name} />
                <div className="card-body">
                  <div className="featured-dish-header">
                    <h3>{dish.name}</h3>
                    <span className="featured-dish-price">{dish.price}</span>
                  </div>
                  <p className="text-small">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/menu" className="btn btn-primary">
            View Full Menu
          </Link>
        </div>
      </section>

      {/* Remaining sections (Gallery, Testimonials, CTA, Footer) go here later */}
    </div>
  );
}