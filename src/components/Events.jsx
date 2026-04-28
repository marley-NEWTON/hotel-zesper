import { Users, Presentation, Coffee, Award } from 'lucide-react';

const eventTypes = [
  { Icon: Presentation, title: 'Conferences',       desc: 'Professional setup for corporate presentations and seminars' },
  { Icon: Users,        title: 'Meetings',          desc: 'Intimate boardroom settings for focused business discussions' },
  { Icon: Coffee,       title: 'Private Gatherings',desc: 'Curated spaces for personal celebrations and events' },
  { Icon: Award,        title: 'Workshops',         desc: 'Flexible layouts suited for training and interactive sessions' },
];

export default function Events() {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="events" className="events">
      <div className="events__inner">

        {/* Header */}
        <div className="events__header">
          <div className="reveal-left">
            <div className="section-label">
              <span className="gold-line" />
              <span>Venues</span>
            </div>
            <h2 className="section-heading">
              Events &amp; <em>Meetings</em>
            </h2>
          </div>
          <p className="events__intro reveal-right">
            Hotel Zesper offers modern, well-equipped event spaces designed for productivity and
            professionalism. From intimate boardroom sessions to larger conference setups, our
            venues adapt to your needs.
          </p>
        </div>

        {/* Event cards */}
        <div className="events__grid">
          {eventTypes.map(({ Icon, title, desc }, i) => (
            <div
              key={title}
              className="event-card reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Icon className="event-card__icon" strokeWidth={1.5} />
              <h3 className="event-card__title">{title}</h3>
              <p className="event-card__desc">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="events__cta reveal">
          <div>
            <p className="events__cta-eyebrow">Plan your next event</p>
            <h3 className="events__cta-title">Let us make it unforgettable</h3>
          </div>
          <button className="btn-primary" onClick={scrollToContact}>
            Enquire Now
          </button>
        </div>

      </div>
    </section>
  );
}
