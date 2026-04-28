const hours = [
  { meal: 'Breakfast', time: '7am – 10am' },
  { meal: 'Lunch',     time: '12pm – 3pm' },
  { meal: 'Dinner',    time: '6pm – 10pm' },
];

export default function Restaurant() {
  return (
    <section id="restaurant" className="restaurant">
      <div className="restaurant__inner">

        {/* Text */}
        <div className="restaurant__text reveal-left">
          <div className="section-label">
            <span className="gold-line" />
            <span>Dining</span>
          </div>
          <h2 className="section-heading">
            A Culinary <em>Experience</em>
          </h2>

          <p className="restaurant__body">
            Our restaurant is a celebration of local flavours and international cuisine — crafted
            with care, served with warmth. Whether you're beginning your morning with a hearty
            breakfast or unwinding with a sundowner at our bar, every meal is an occasion.
          </p>
          <p className="restaurant__body">
            The calm, open-air ambiance makes every dining moment feel like a retreat in itself.
          </p>

          <div className="restaurant__hours">
            {hours.map(({ meal, time }) => (
              <div key={meal}>
                <div className="restaurant__hour-line" />
                <div className="restaurant__meal">{meal}</div>
                <div className="restaurant__time">{time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="restaurant__image-wrap reveal-right">
          <div className="restaurant__image-frame">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
              alt="Hotel Zesper Restaurant"
            />
            <div className="restaurant__image-overlay" />
          </div>
          <div className="restaurant__deco-box" />
          <div className="restaurant__deco-bg" />
        </div>

      </div>
    </section>
  );
}
