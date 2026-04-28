import { hotelData } from '../data/hotelData';

const roomImages = [
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80',
  'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=700&q=80',
  'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=700&q=80',
];

export default function Rooms() {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="rooms" className="rooms">
      <div className="rooms__inner">

        {/* Header */}
        <div className="rooms__header reveal">
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span className="gold-line" />
            <span>Accommodations</span>
            <span className="gold-line" />
          </div>
          <h2 className="section-heading" style={{ color: '#ffffff' }}>
            Our <em>Rooms</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="rooms__grid">
          {hotelData.rooms.map((room, i) => (
            <div key={room.name} className="room-card reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              {/* Image */}
              <div className="room-card__img-wrap">
                <img src={roomImages[i]} alt={room.name} />
                <div className="room-card__img-overlay" />
                <div className="room-card__price">
                  {room.price}<sub> / night</sub>
                </div>
              </div>

              {/* Body */}
              <div className="room-card__body">
                <div className="room-card__divider" />
                <h3 className="room-card__name">{room.name}</h3>
                <p className="room-card__desc">{room.description}</p>

                <div className="room-card__features">
                  {room.features.map((f) => (
                    <span key={f} className="room-card__feature">{f}</span>
                  ))}
                </div>

                <button className="room-card__btn" onClick={scrollToContact}>
                  Book This Room
                </button>
              </div>

              <div className="room-card__bar" />
            </div>
          ))}
        </div>

        <p className="rooms__note">
          All rates include complimentary breakfast · Prices subject to availability
        </p>
      </div>
    </section>
  );
}
