import { Wifi, Clock, UtensilsCrossed, Bell, Car, Mountain } from 'lucide-react';

const services = [
  { name: 'Free WiFi',       Icon: Wifi,            desc: 'High-speed internet throughout the property' },
  { name: '24/7 Reception',  Icon: Clock,           desc: 'Round-the-clock assistance at your service' },
  { name: 'Restaurant & Bar',Icon: UtensilsCrossed, desc: 'Fine dining and curated beverages on-site' },
  { name: 'Room Service',    Icon: Bell,            desc: 'In-room dining delivered right to your door' },
  { name: 'Secure Parking',  Icon: Car,             desc: 'Safe, monitored parking for all our guests' },
  { name: 'Hilltop Views',   Icon: Mountain,        desc: 'Breathtaking panoramic scenery of Kisii' },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__inner">

        {/* Header */}
        <div className="services__header reveal">
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span className="gold-line" />
            <span>Amenities</span>
            <span className="gold-line" />
          </div>
          <h2 className="section-heading">What We <em>Offer</em></h2>
          <p>Every service at Hotel Zesper is designed with your comfort and convenience in mind.</p>
        </div>

        {/* Grid */}
        <div className="services__grid">
          {services.map(({ name, Icon, desc }, i) => (
            <div
              key={name}
              className="service-card reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="service-card__icon-box">
                <Icon strokeWidth={1.5} />
              </div>
              <h3 className="service-card__name">{name}</h3>
              <p className="service-card__desc">{desc}</p>
              <div className="service-card__bar" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
