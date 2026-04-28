import { useState } from 'react';
import { Phone, MapPin, Mail, Send } from 'lucide-react';
import { hotelData } from '../data/hotelData';

const fields = [
  { id: 'name',     label: 'Full Name',      type: 'text',  placeholder: 'Your full name',   full: true  },
  { id: 'email',    label: 'Email Address',   type: 'email', placeholder: 'your@email.com',   full: false },
  { id: 'phone',    label: 'Phone Number',    type: 'tel',   placeholder: '+254 …',           full: false },
  { id: 'checkin',  label: 'Check-in Date',   type: 'date',  placeholder: '',                 full: false },
  { id: 'checkout', label: 'Check-out Date',  type: 'date',  placeholder: '',                 full: false },
];

const contactItems = [
  { Icon: Phone, label: 'Phone',    key: 'phone',    href: (v) => `tel:${v}` },
  { Icon: Mail,  label: 'Email',    key: 'email',    href: (v) => `mailto:${v}` },
  { Icon: MapPin,label: 'Location', key: 'location', href: () => '#' },
];

export default function Contact() {
  const empty = { name: '', email: '', phone: '', checkin: '', checkout: '', message: '' };
  const [form, setForm]   = useState(empty);
  const [sent, setSent]   = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm(empty);
    setTimeout(() => setSent(false), 4500);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">

        {/* Header */}
        <div className="contact__header reveal">
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span className="gold-line" />
            <span>Reservations</span>
            <span className="gold-line" />
          </div>
          <h2 className="section-heading" style={{ color: '#ffffff' }}>
            Get in <em>Touch</em>
          </h2>
        </div>

        <div className="contact__layout">

          {/* Info panel */}
          <div className="reveal-left">
            <p className="contact__info-intro">
              We'd love to host you. Reach out to make a reservation, enquire about our services,
              or plan your next event at Hotel Zesper.
            </p>

            <div className="contact__items">
              {contactItems.map(({ Icon, label, key, href }) => (
                <a
                  key={label}
                  href={href(hotelData.contact[key])}
                  className="contact__item"
                >
                  <div className="contact__item-icon">
                    <Icon strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="contact__item-label">{label}</div>
                    <div className="contact__item-value">{hotelData.contact[key]}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact__hours">
              <div className="contact__hours-label">Opening Hours</div>
              <div className="contact__hours-value">Reception open 24 hours, 7 days a week</div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-grid">
                {fields.map(({ id, label, type, placeholder, full }) => (
                  <div key={id} className={`form-group${full ? ' full' : ''}`}>
                    <label htmlFor={id}>{label}</label>
                    <input
                      id={id}
                      type={type}
                      value={form[id]}
                      placeholder={placeholder}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                    />
                  </div>
                ))}
                <div className="form-group full">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    placeholder="Tell us about your stay or enquiry…"
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <button type="submit" className="btn-primary">
                  {sent ? 'Enquiry Sent!' : 'Send Enquiry'}
                  <Send size={14} />
                </button>
                {sent && (
                  <p className="form-success">Thank you! We'll be in touch within 24 hours.</p>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
