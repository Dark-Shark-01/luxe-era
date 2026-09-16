import {
  ArrowUpRight,
  Camera,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Calculator", path: "/calculator" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer premium-footer">
      <div className="footer-inner premium-footer-inner">
        <div className="footer-brand premium-footer-brand">
          <Link className="footer-logo premium-footer-logo" to="/">
            LUXE ERA
          </Link>

          <p>
            Thoughtfully designed interiors and expertly executed construction
            solutions, created around the way you live and work.
          </p>

          <span className="premium-footer-location">
            <MapPin size={14} strokeWidth={1.4} />
            Kolkata, India
          </span>
        </div>

        <div className="footer-column premium-footer-column">
          <p className="footer-heading">Explore</p>

          <nav aria-label="Footer navigation">
            {footerLinks.map((link, index) => (
              <Link key={link.path} to={link.path}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-column premium-footer-column">
          <p className="footer-heading">Contact</p>

          <a href="mailto:hello@luxeera.com">
            <Mail size={14} strokeWidth={1.4} />
            <span>hello@luxeera.com</span>
          </a>

          <a href="tel:+910000000000">
            <Phone size={14} strokeWidth={1.4} />
            <span>+91 00000 00000</span>
          </a>

          <span className="premium-footer-contact-note">
            Available for residential,
            <br />
            commercial & interior projects.
          </span>
        </div>

        <div className="footer-column premium-footer-column premium-footer-start">
          <p className="footer-heading">Start a Project</p>

          <Link className="footer-project-link premium-footer-project-link" to="/contact">
            <span>
              <small>Let&apos;s discuss</small>
              Get a Consultation
            </span>

            <ArrowUpRight size={19} strokeWidth={1.35} />
          </Link>

          <div className="footer-socials premium-footer-socials" aria-label="Social media">
            <a
              href="#"
              aria-label="Luxe Era on Instagram"
              onClick={(event) => event.preventDefault()}
            >
              <Camera size={17} strokeWidth={1.4} />
            </a>

            <a
              href="#"
              aria-label="Luxe Era on LinkedIn"
              onClick={(event) => event.preventDefault()}
            >
              <BriefcaseBusiness size={17} strokeWidth={1.4} />
            </a>
          </div>
        </div>
      </div>

      <div className="premium-footer-divider" />

      <div className="footer-bottom premium-footer-bottom">
        <p>© {currentYear} Luxe Era. All rights reserved.</p>

        <div className="premium-footer-bottom-center" aria-hidden="true">
          <span />
          <span>LUXE ERA</span>
          <span />
        </div>

        <p>Construction &amp; Interior Solutions</p>
      </div>
    </footer>
  );
}

export default Footer;