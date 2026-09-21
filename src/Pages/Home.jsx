// Home.jsx
import { Link } from 'react-router-dom';
import './Styles/Home.css';

import Navbar from '../Components/Nav';
import Footer from '../Components/Footer'
import useScrollReveal from '../hooks/useScrollReveal';

//images
import HeroImg from '../assets/Hero.png'
import Interior1 from '../assets/restaurant-interior.png'

const dishes = Object.values(import.meta.glob('../assets/dish-*.png', {eager: true, import: 'default'}))

const featuredDishes = [
  {
    name: 'Wood-Fired Salmon',
    description: 'Cedar-plank salmon, charred lemon, herb butter.',
    price: '$28',
    image: dishes[0],
  },
  {
    name: 'Slow-Braised Short Rib',
    description: 'Red wine reduction, roasted root vegetables.',
    price: '$32',
    image: dishes[1],
  },
  {
    name: 'Charred Heirloom Tomato Tart',
    description: 'Whipped ricotta, basil oil, flaky crust.',
    price: '$19',
    image: dishes[2],
  },
];

// Marquee row 1
const foodImages = Object.values(
  import.meta.glob('../assets/Food-*.png', { eager: true, import: 'default' })
);

// Marquee row 2
const atmosphereImages = Object.values(
  import.meta.glob('../assets/atmosphere-*.png', { eager: true, import: 'default' })
);

//Marquee row 3
const drinksImages = Object.values(
  import.meta.glob('../assets/drinks-*.png', { eager: true, import: 'default' })
);

function GalleryRow({ images, direction, label }) {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="gallery-row" aria-label={label}>

      <div className="gallery-track-wrap">
        <div className={`gallery-track gallery-row-${direction}`}>
          {duplicatedImages.map((src, i) => {
            const duplicate = i >= images.length;

            return (
              <div
                className="gallery-item"
                key={`${label}-${i}`}
                aria-hidden={duplicate}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
            );
          })}
        </div>
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
      <section className="hero home-hero">
        <div className="hero-media">
          <img
            src={HeroImg}
            alt=""
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <Navbar />
        <div className="hero-content">
          <h1 className="hero-title">Amber & Oak</h1>

          <p className="hero-subtitle">
            Wood-fired dishes, warm evenings, and a table always waiting for you.
          </p>

          <div className="hero-actions">
            <Link to="/" className="btn btn-primary">
              Reserve a Table
            </Link>

            <Link to="/" className="btn btn-secondary hero-cta-secondary">
              Explore the Menu{' '}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="hero-meta">
            <span>Tue–Sun</span>
            <span>5pm–11pm</span>
            <span>Walk-ins welcome</span>
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
              <article className="card featured-dish-card" key={dish.name}>
                <div className="featured-dish-image">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="dish-tag">Wood-fired</span>
                </div>

                <div className="card-body">
                  <div className="featured-dish-header">
                    <h3>{dish.name}</h3>
                    <span className="featured-dish-price">{dish.price}</span>
                  </div>

                  <p className="text-small">{dish.description}</p>

                  <Link to="/" className="dish-link">
                    Explore dish <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <Link to="/" className="btn btn-primary">
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
        <GalleryRow images={drinksImages} direction="left" label="Drinks & Bar" />
      </div>
    </section>
    <Footer />
    </div>
  );
}