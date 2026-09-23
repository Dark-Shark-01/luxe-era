import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Call us",
    value: "+91 00000 00000",
    href: "tel:+910000000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@luxeera.com",
    href: "mailto:hello@luxeera.com",
  },
  {
    icon: MapPin,
    label: "Studio",
    value: "Kolkata, West Bengal, India",
  },
];

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-info-list">
        {contactItems.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            className="contact-info-item"
            aria-label={`${label}: ${value}`}
          >
            <span className="contact-info-icon">
              <Icon size={18} strokeWidth={1.35} />
            </span>

            <span className="contact-info-content">
              <span className="contact-info-label">{label}</span>
              <strong>{value}</strong>
            </span>

            <ArrowUpRight size={17} strokeWidth={1.35} />
          </a>
        ))}
      </div>

      <div className="contact-info-hours">
        <span className="contact-info-hours-icon">
          <Clock3 size={17} strokeWidth={1.35} />
        </span>

        <div>
          <span>Studio hours</span>
          <strong>Mon — Sat · 10:00 AM — 7:00 PM</strong>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;