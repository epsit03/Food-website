import React, { useContext, useState, useCallback, useMemo } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUtensils,
  faEnvelope,
  faSearch,
  faShoppingCart,
  faUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
const Navbar = React.memo(({ setShowLogin }) => {
  const context = useContext(StoreContext);
  const location = useLocation();

  const totalQuantity = useMemo(() => (context ? context.getTotalQuantity : 0), [context]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log(`Searching for: ${searchTerm}`);
      setSearchTerm("");
      setIsMobileMenuOpen(false);
    }
  }, [searchTerm]);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const isActiveLink = useCallback((path) => {
    return location.pathname === path;
  }, [location.pathname]);

  const navigationItems = useMemo(
    () => [
      { path: "/", label: "Home", icon: faHome },
      { path: "/about", label: "About Us", icon: faUtensils },
      { path: "/contact", label: "Contact Us", icon: faEnvelope },
    ],
    []
  );

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-brand">
        <Link to="/" onClick={handleLinkClick} aria-label="Let's - Home">
          <img src={assets.logo} alt="Let's Eats" className="logo" />
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="mobile-menu-toggle"
        onClick={handleMobileMenuToggle}
        aria-expanded={isMobileMenuOpen}
        aria-controls="navbar-menu"
        aria-label="Toggle navigation menu"
      >
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </button>

      {/* Navigation Menu */}
      <ul
        className={`navbar-menu ${isMobileMenuOpen ? "navbar-menu--open" : ""}`}
        id="navbar-menu"
      >
        {navigationItems.map(({ path, label, icon }) => (
          <li key={path}>
            <Link
              to={path}
              onClick={handleLinkClick}
              className={isActiveLink(path) ? "active" : ""}
              aria-current={isActiveLink(path) ? "page" : undefined}
            >
              <FontAwesomeIcon icon={icon} aria-hidden="true" />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Side Actions */}
     <div className="navbar-actions">

        {/* Search Form */}
        <form onSubmit={handleSearch} className="navbar-search" role="search">
          <label htmlFor="search-input" className="sr-only">
            Search for food items
          </label>
          <input
            id="search-input"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search food..."
            className="search-input"
            autoComplete="off"
          />
          <button
            type="submit"
            className="search-button"
            aria-label="Submit search"
            disabled={!searchTerm.trim()}
          >
            <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
          </button>
        </form>

        {/* Cart Icon */}
        <Link
          to="/cart"
          className="cart-link"
          aria-label={`Shopping cart with ${totalQuantity} items`}
          onClick={handleLinkClick}
        >
          <div className="cart-icon-container">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" aria-hidden="true" />
            {totalQuantity > 0 && (
              <span className="cart-badge" aria-label={`${totalQuantity} items in cart`}>
                {totalQuantity > 99 ? "99+" : totalQuantity}
              </span>
            )}
          </div>
        </Link>

     
        <button
          onClick={() => {
            setShowLogin(true);
            setIsMobileMenuOpen(false);
          }}
          className="sign-in-button"
          aria-label="Sign in to your account"
        >
          <FontAwesomeIcon icon={faUser} aria-hidden="true" />
          <span className="sign-in-text">Sign In</span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={handleMobileMenuToggle}
          aria-hidden="true"
        />
      )}
    </nav>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;