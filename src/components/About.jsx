export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">

        {/* Image column */}
        <div className="about__image-wrap reveal-left">
          <div className="about__image-frame">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
              alt="Hotel Zesper interior"
            />
            <div className="about__image-caption">
              <p>Est. Kisii, Kenya</p>
            </div>
          </div>
          <div className="about__accent-box" />
          <div className="about__accent-bg" />
          <div className="about__stat">
            <div className="about__stat-num">3+</div>
            <div className="about__stat-label">Room Categories</div>
          </div>
        </div>

        {/* Text column */}
        <div className="about__text reveal-right">
          <div className="section-label">
            <span className="gold-line" />
            <span>Our Story</span>
          </div>

          <h2 className="section-heading" style={{ color: '#1a1a1a', marginBottom: '2rem' }}>
            Where Serenity Meets <em>Comfort</em>
          </h2>

          <p className="about__body">
            Perched on a tranquil hilltop in the heart of Kisii, Hotel Zesper is a sanctuary of
            modern elegance. We believe hospitality is an art — one perfected through attention to
            detail, genuine warmth, and an unwavering commitment to your comfort.
          </p>
          <p className="about__body">
            From the moment you arrive, every aspect of your stay is curated to ensure peace of
            mind, privacy, and an experience that leaves you refreshed. Our hilltop setting offers
            fresh air, scenic surroundings, and the perfect retreat from the city's pace.
          </p>

          <div className="about__pillars">
            {['Comfort', 'Privacy', 'Value'].map((label) => (
              <div key={label}>
                <div className="about__pillar-line" />
                <div className="about__pillar-name">{label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
