import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { siteConfig } from "../../data/site";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <header className="site-header premium-header">
      <div className="header-inner premium-header-inner">
        <Link
          to="/"
          className="brand premium-brand"
          aria-label="Luxe Era home"
          onClick={closeMenu}
        >
          <span className="brand-name">LUXE ERA</span>

          <span className="brand-subtitle">
            {siteConfig.brand.descriptor}
          </span>
        </Link>

        <nav
          className="main-navigation premium-navigation"
          aria-label="Primary navigation"
        >
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={isActive(item.path) ? "is-active" : ""}
              aria-current={isActive(item.path) ? "page" : undefined}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="premium-header-actions">
          <button
            type="button"
            className="premium-search-button"
            aria-label="Search"
          >
            <Search size={20} strokeWidth={1.35} />
          </button>

          <span
            className="premium-header-divider"
            aria-hidden="true"
          />

          <button
            type="button"
            className="menu-toggle premium-menu-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? (
              <X size={29} strokeWidth={1.15} />
            ) : (
              <Menu size={32} strokeWidth={1.15} />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-navigation premium-mobile-navigation ${
          menuOpen ? "is-open" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="premium-mobile-navigation-inner">
          <p className="premium-mobile-eyebrow">
            {siteConfig.brand.descriptor}
          </p>

          <nav aria-label="Mobile navigation">
            {siteConfig.navigation.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={isActive(item.path) ? "is-active" : ""}
                aria-current={isActive(item.path) ? "page" : undefined}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <Link
            className="premium-mobile-contact"
            to="/contact"
            onClick={closeMenu}
          >
            <span>Start a Project</span>
            <span>Get a Consultation</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;