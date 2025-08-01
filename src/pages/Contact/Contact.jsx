import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faClock,
  faPaperPlane,
  faUser,
  faCommentDots,
  faUtensils,
  faHeadset,
  faShieldAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setShowAlert(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setShowAlert(false), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: faPhone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "success"
    },
    {
      icon: faEnvelope,
      title: "Email Us",
      details: ["support@Let's_eats.com", "orders@Let's_eats.com"],
      color: "primary"
    },
    {
      icon: faMapMarkerAlt,
      title: "Visit Us",
      details: ["123 Food Street", "Flavor City, FC 12345"],
      color: "danger"
    },
    {
      icon: faClock,
      title: "Working Hours",
      details: ["Mon - Sun: 24/7", "Customer Support Available"],
      color: "info"
    }
  ];

  const features = [
    {
      icon: faUtensils,
      title: "Quality Food",
      description: "Fresh ingredients from trusted restaurants"
    },
    {
      icon: faHeadset,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance"
    },
    {
      icon: faShieldAlt,
      title: "Secure Orders",
      description: "Safe and secure payment processing"
    }
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={6}>
              <div className="hero-content">
                <h1 className="hero-title">
                  Get in <span className="text-light">Touch</span>
                </h1>
                <p className="hero-subtitle">
                  Have questions about your order? Need help with our app? 
                  We're here to help you 24/7. Reach out to us anytime!
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <strong>1000+</strong>
                    <span>Happy Customers</span>
                  </div>
                  <div className="stat-item">
                    <strong>24/7</strong>
                    <span>Support Available</span>
                  </div>
                  <div className="stat-item">
                    <strong>&lt;5min</strong>
                    <span>Response Time</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="hero-image">
                <div className="contact-illustration">
                  <FontAwesomeIcon icon={faHeadset} className="main-icon" />
                  <div className="floating-icons">
                    <FontAwesomeIcon icon={faEnvelope} className="float-icon icon-1" />
                    <FontAwesomeIcon icon={faPhone} className="float-icon icon-2" />
                    <FontAwesomeIcon icon={faCommentDots} className="float-icon icon-3" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact-info-section">
        <Container>
          <Row>
            {contactInfo.map((info, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <div className="contact-info-card">
                  <div className={`card-icon bg-${info.color}`}>
                    <FontAwesomeIcon icon={info.icon} />
                  </div>
                  <h4>{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="contact-form-section">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="contact-form-wrapper">
                <div className="form-header">
                  <h2>Send us a Message</h2>
                  <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>

                {showAlert && (
                  <Alert variant="success" className="mb-4">
                    <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                    Thank you for your message! We'll get back to you within 24 hours.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <FontAwesomeIcon icon={faUser} className="me-2" />
                          Full Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                          Email Address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <FontAwesomeIcon icon={faCommentDots} className="me-2" />
                      Subject
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>
                      <FontAwesomeIcon icon={faCommentDots} className="me-2" />
                      Message
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                  </Form.Group>
                  
                  <Button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </Form>
              </div>
            </Col>
            
            <Col lg={4}>
              <div className="contact-features">
                <h3>Why Choose Us?</h3>
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">
                      <FontAwesomeIcon icon={feature.icon} />
                    </div>
                    <div className="feature-content">
                      <h5>{feature.title}</h5>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
                
                <div className="social-connect">
                  <h4>Connect With Us</h4>
                  <div className="social-links">
                    <a href="#" aria-label="Facebook">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="#" aria-label="Twitter">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#" aria-label="Instagram">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;