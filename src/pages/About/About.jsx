import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faUtensils,
  faStar,
  faEnvelope,
  faPhone,
  faQuoteLeft,
  faUsers,
  faClock,
  faShieldAlt,
  faHeart,
  faTruck,
  faAward,
  faQuoteRight
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";

const AboutUs = () => {
  const stats = [
    { number: "10K+", label: "Happy Customers", icon: faUsers },
    { number: "500+", label: "Restaurant Partners", icon: faUtensils },
    { number: "24/7", label: "Customer Support", icon: faClock },
    { number: "99%", label: "Satisfaction Rate", icon: faAward }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <Container>
          <h1 className="fade-in-up">About Let's Eats</h1>
          <p className="lead fade-in-up delay-1">
            Your favorite food delivery companion, bringing delicious meals from the best
            restaurants straight to your doorstep with love and care.
          </p>
        </Container>
      </section>

      <Container className="py-5">
        <div className="welcome-section mb-5 p-4 fade-in-up delay-2">
          <h3 className="mb-3">
            <FontAwesomeIcon icon={faUtensils} className="me-2 text-primary" />
            Welcome to Let's Eats!
          </h3>
          <p>
            We're not just a food delivery app—we're your hunger companion, your
            late-night snack savior, and your weekend food planner. Whether it's a lazy
            Sunday or a busy Monday, we bring the best food from your favorite
            restaurants straight to your doorstep with lightning-fast delivery and
            exceptional service.
          </p>
        </div>

        <div className="stats-section fade-in-up delay-3">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <FontAwesomeIcon icon={stat.icon} className="mb-2" style={{fontSize: '2rem', color: 'var(--primary-color)'}} />
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <Row className="mb-4">

          <Col md={6} className="mb-4">
            <div className="content-card p-4 h-100 fade-in-up delay-4">
              <h4 className="mb-3">
                <FontAwesomeIcon icon={faBullseye} className="me-2 text-success" />
                Our Mission
              </h4>
              <p>
                To revolutionize the food delivery experience by connecting you to your favorite
                meals faster, fresher, and more reliably than ever before. We aim to
                support local businesses, create jobs, and satisfy cravings one order at a time
                while building a sustainable food ecosystem.
              </p>
            </div>
          </Col>


          <Col md={6} className="mb-4">
            <div className="content-card p-4 h-100 fade-in-up delay-4">
              <h4 className="mb-3">
                <FontAwesomeIcon icon={faUtensils} className="me-2 text-warning" />
                What We Offer
              </h4>
              <ul>
                <li>Top-rated restaurants & home chefs</li>
                <li>Lightning-fast delivery (under 30 mins)</li>
                <li>Real-time tracking & order updates</li>
                <li>Secure payment options</li>
                <li>Personalized recommendations</li>
                <li>24/7 customer support</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row className="mb-4">

          <Col md={6} className="mb-4">
            <div className="content-card p-4 h-100 fade-in-up delay-4">
              <h4 className="mb-3">
                <FontAwesomeIcon icon={faStar} className="me-2 text-info" />
                Why Choose Us?
              </h4>
              <ul>
                <li>Widest cuisine selection in the city</li>
                <li>Trusted by 10,000+ happy customers</li>
                <li>Intuitive app with seamless experience</li>
                <li>Available 24/7 across multiple cities</li>
                <li>Contactless delivery options</li>
                <li>Best price guarantee</li>
              </ul>
            </div>
          </Col>

          <Col md={6} className="mb-4">
            <div className="content-card p-4 h-100 fade-in-up delay-4">
              <h4 className="mb-3">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                Get in Touch
              </h4>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <strong>Email:</strong> support@Let's_eats.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p>
                <FontAwesomeIcon icon={faTruck} className="me-2" />
                <strong>Delivery:</strong> Available 24/7
              </p>
              <p>
                <FontAwesomeIcon icon={faShieldAlt} className="me-2" />
                <strong>Safety:</strong> Contactless delivery
              </p>
            </div>
          </Col>
        </Row>

        
        <div className="quote-section fade-in-up delay-4">
          <p className="quote-text">
            <FontAwesomeIcon icon={faQuoteLeft} className="me-2" />
            Good food is good mood. Let us deliver happiness to your doorstep, one meal at a time.
            <FontAwesomeIcon icon={faHeart} className="ms-2 text-danger" />
             <FontAwesomeIcon icon={faQuoteRight} className="me-2" />
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
