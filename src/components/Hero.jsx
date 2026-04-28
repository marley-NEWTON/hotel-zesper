import { useState, useEffect } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const cls = loaded ? 'loaded' : '';

  return (
    <section id="hero" className="hero">
      {/* Background */}
      <div className={`hero__bg ${cls}`} />

      {/* Overlays */}
      <div className="hero__overlay" />
      <div className="hero__overlay-side" />

      {/* Gold edge lines */}
      <div className="hero__gold-top" />
      <div className="hero__gold-bottom" />

      {/* Main content */}
      <div className="hero__content">
        <div className={`hero__eyebrow ${cls}`}>
          <span className="hero__eyebrow-line" />
          <span className="hero__eyebrow-text">Nyanchwa · Kisii · Kenya</span>
          <span className="hero__eyebrow-line" />
        </div>

        <h1 className={`hero__title ${cls}`}>
          Hotel <em>Zesper</em>
        </h1>

        <p className={`hero__tagline ${cls}`}>A serene hilltop retreat</p>

        <div className={`hero__ctas ${cls}`}>
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Reserve a Room
          </button>
          <button className="btn-outline-white" onClick={() => scrollTo('rooms')}>
            Explore Rooms
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`hero__scroll ${cls}`}>
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line" />
      </div>

      {/* Corner accents */}
      <div className="hero__corner hero__corner--tl" />
      <div className="hero__corner hero__corner--tr" />
      <div className="hero__corner hero__corner--bl" />
      <div className="hero__corner hero__corner--br" />
    </section>
  );
}
