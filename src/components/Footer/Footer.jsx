import "./Footer.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Let's Eats Food Delivery" />
          <p>
            Your favorite food delivery app bringing delicious meals from the best
            restaurants straight to your doorstep. Fast, fresh, and always satisfying!
          </p>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with us on LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li onClick={() => handleNavigation("/")}>Home</li>
            <li onClick={() => handleNavigation("/about")}>About Us</li>
            <li onClick={() => handleNavigation("/contact")}>Contact Us</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <span>+1-123-456-7890</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>contact@Let's_eats.com</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>123 Food Street, Flavor City</span>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Let's Eats.com - Made with <FontAwesomeIcon icon={faHeart} className="heart-icon" /> for food lovers
      </p>
    </footer>
  );
};

export default Footer;
