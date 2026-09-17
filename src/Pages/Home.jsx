// Home.jsx
import { Link } from 'react-router-dom';
import './Styles/Home.css';

import Navbar from '../Components/Nav';
import useScrollReveal from '../hooks/useScrollReveal';

//images
import Salmon from '../assets/dish-salmon.png'
import Rib from '../assets/dish-shortrib.png'
import Tart from '../assets/dish-tart.png'
import Interior1 from '../assets/restaurant-interior.png'

import food1 from '../assets/Food-1.png'
import food2 from '../assets/Food-2.png'
import food3 from '../assets/Food-3.png'
import food4 from '../assets/Food-4.png'
import food5 from '../assets/Food-5.png'
import food6 from '../assets/Food-6.png'
import food7 from '../assets/Food-7.png'
import food8 from '../assets/Food-8.png'

import atmosphere1 from '../assets/atmosphere-1.png'
import atmosphere2 from '../assets/atmosphere-2.png'
import atmosphere3 from '../assets/atmosphere-3.png'
import atmosphere4 from '../assets/atmosphere-4.png'
import atmosphere5 from '../assets/atmosphere-5.png'
import atmosphere6 from '../assets/atmosphere-6.png'
import atmosphere7 from '../assets/atmosphere-7.png'
import atmosphere8 from '../assets/atmosphere-8.png'

import drinks1 from '../assets/drinks-1.png'
import drinks2 from '../assets/drinks-2.png'
import drinks3 from '../assets/drinks-3.png'
import drinks4 from '../assets/drinks-4.png'
import drinks5 from '../assets/drinks-5.png'
import drinks6 from '../assets/drinks-6.png'
import drinks7 from '../assets/drinks-7.png'
import drinks8 from '../assets/drinks-8.png'

const featuredDishes = [
  {
    name: 'Wood-Fired Salmon',
    description: 'Cedar-plank salmon, charred lemon, herb butter.',
    price: '$28',
    image: Salmon,
  },
  {
    name: 'Slow-Braised Short Rib',
    description: 'Red wine reduction, roasted root vegetables.',
    price: '$32',
    image: Rib,
  },
  {
    name: 'Charred Heirloom Tomato Tart',
    description: 'Whipped ricotta, basil oil, flaky crust.',
    price: '$19',
    image: Tart,
  },
];

// Row 1 — Food close-ups (swap these paths for your real assets)
const foodImages = [
  food1,
  food2,
  food3,
  food4,
  food5,
  food6,
  food7,
  food8
]

// Row 2 — Atmosphere / interior
const atmosphereImages = [
  atmosphere1,
  atmosphere2,
  atmosphere3,
  atmosphere4,
  atmosphere5,
  atmosphere6,
  atmosphere7,
  atmosphere8,
];

// Row 3 — People & moments
const drinksImages = [
  drinks1,
  drinks2,
  drinks3,
  drinks4,
  drinks5,
  drinks6,
  drinks7,
  drinks8,
];

function GalleryRow({ images, direction, label }) {
  // Duplicate the row once so the marquee can loop seamlessly
  const looped = [...images, ...images];

  return (
    <div className={`gallery-row`} aria-label={label}>
      <div className={`gallery-track gallery-row-${direction}`}>
        {looped.map((src, i) => (
          <div className="gallery-item" key={`${label}-${i}`}>
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [aboutRef, aboutVisible] = useScrollReveal();
  const [dishesRef, dishesVisible] = useScrollReveal();
  const [galleryRef, galleryVisible] = useScrollReveal();

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
            <img src={Interior1} alt="Inside Amber & Oak" />
          </div>

          <div className="about-teaser-content">
            <h2>Our Story</h2>
            <p>
              Founded on a simple idea — honest ingredients, cooked with care,
              served without pretension. Every dish on our table carries a
              little piece of where we came from.
            </p>
            <Link to="/" className="btn btn-primary">
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

      <section className={`gallery section reveal ${galleryVisible ? 'reveal-visible':''}`} ref={galleryRef}>
      <div className="container">
        <h2>Gallery</h2>
        <p>A glimpse at what to expect.</p>
      </div>

      <div className="gallery-rows">
        <GalleryRow images={foodImages} direction="left" label="Food" />
        <GalleryRow images={atmosphereImages} direction="right" label="Atmosphere" />
        <GalleryRow images={drinksImages} direction="left" label="Moments" />
      </div>
    </section>
    </div>
  );
}