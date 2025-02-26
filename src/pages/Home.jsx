import React from "react";
import "./HomePage.css"; // Import the CSS file
import Banner from "../components/layout/Banner";


const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <h2>Why Choose Healwise?</h2>
        <div className="why-choose-us-grid">
          <div className="why-choose-us-card">
            <h3>Personalized Care</h3>
            <p>
              We tailor our treatments to your unique needs, ensuring the best
              possible results.
            </p>
          </div>
          <div className="why-choose-us-card">
            <h3>Natural Healing</h3>
            <p>
              Our remedies are 100% natural, free from harmful chemicals and
              side effects.
            </p>
          </div>
          <div className="why-choose-us-card">
            <h3>Experienced Practitioners</h3>
            <p>
              Our team of certified homeopaths has years of experience in
              treating various conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Homeopathic Consultations</h3>
            <p>
              Personalized consultations to understand your health concerns and
              provide tailored remedies.
            </p>
          </div>
          <div className="service-card">
            <h3>Chronic Condition Treatment</h3>
            <p>
              Effective homeopathic treatments for chronic illnesses like
              arthritis, asthma, and more.
            </p>
          </div>
          <div className="service-card">
            <h3>Skin Care Solutions</h3>
            <p>
              Natural, chemical-free skincare products to rejuvenate and heal
              your skin.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Patients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              "I’ve been suffering from migraines for years, and after visiting
              Healwise, I finally found relief. Highly recommended!"
            </p>
            <span>- Sarah L.</span>
          </div>
          <div className="testimonial-card">
            <p>
              "The homeopathic skincare products are amazing! My skin has never
              felt better."
            </p>
            <span>- Priya M.</span>
          </div>
          <div className="testimonial-card">
            <p>
              "Dr. Miyani is incredibly knowledgeable and caring. I feel so much
              better after just a few sessions."
            </p>
            <span>- Rajesh K.</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <p>
            <strong>Address:</strong> 216, Rangeela Park, Surat - 394101
          </p>
          <p>
            <strong>Phone:</strong> +91 8160609527
          </p>
          <p>
            <strong>Email:</strong> info@healwise.com
          </p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;