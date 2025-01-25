import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className='root-container'>
      {/* Main Content Section */}
      <main className='about-page'>
        <section className='about-us'>
          <div className='about-container'>
            {/* About Us Section */}
            <h1>About Healwise Homeopathy</h1>
            <p>
              At Healwise Homeopathy, our mission is to provide holistic and
              natural healing through the power of pure homeopathy. We aim to
              support the body's ability to heal itself and maintain health and
              wellness without relying on chemicals or invasive procedures. Our
              clinic offers personalized care with a focus on understanding each
              patient's unique needs, fostering trust, and promoting long-term
              health.
            </p>

            {/* Services Section */}
            <div className='services'>
              <h2>Our Services</h2>
              <ul>
                <li>
                  <strong>Homeopathic Consultations:</strong> One-on-one
                  consultations to understand the root causes of health issues
                  and provide customized homeopathic remedies for effective and
                  lasting results.
                </li>
                <li>
                  <strong>Pure Homeopathy Treatments:</strong> Healing chronic
                  conditions, acute illnesses, and improving overall well-being
                  with 100% natural remedies.
                </li>
                <li>
                  <strong>Homeopathy Cosmetic Products:</strong> Healwise
                  provides homeopathic-based skincare products to help maintain
                  beautiful, healthy skin without harmful chemicals.
                </li>
              </ul>
            </div>

            {/* Team Section */}
            <div className='team'>
              <h2>Meet Our Founder</h2>
              <div className='team-member'>
                <img
                  src='https://res.cloudinary.com/dcmgkwzbw/image/upload/v1737268989/Healwise%20homoepathu/yxyu4ldsv64rwvgsamnn.png'
                  alt='Dr. Drashti Miyani'
                />
                <h3>Dr. Drashti Miyani</h3>
                <p>Founder & Certified Homeopath</p>
              </div>
              <p>
                Dr. Drashti Miyani is a certified homeopath with years of
                experience in the field. As the founder of Healwise Homeopathy,
                Dr. Drashti Miyani is committed to offering the highest standard
                of care. With a deep understanding of the body's natural healing
                capabilities, Dr. Drashti Miyani uses proven homeopathic methods
                to treat various health conditions and support patients' overall
                wellness.
              </p>
            </div>

            {/* Location & Contact Section */}
            <div className='location-contact'>
              <h2>Location & Contact Details</h2>
              <p>
                <strong>Address:</strong> 216, Rangeela Park, Beside Dumeru City
                Mall, Sudama Chowk, Mota Varchha, Surat - 394101
              </p>
              <p>
                <strong>Contact:</strong> +91 8160609527
              </p>
            </div>

            {/* Testimonials Section */}
            <div className='testimonials'>
              <h2>Patient Testimonials</h2>
              <div className='testimonial'>
                <p>
                  "I've been suffering from chronic migraines for years, and
                  after seeing Dr. [Doctor Name], I finally found relief. The
                  homeopathic remedies have helped me tremendously, and I feel
                  like a new person!"
                </p>
                <span>- A Satisfied Patient</span>
              </div>
              <div className='testimonial'>
                <p>
                  "I've always been wary of using chemical skincare products,
                  but the homeopathic cosmetic products at Healwise are amazing.
                  My skin feels smoother and healthier than ever!"
                </p>
                <span>- Another Happy Customer</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AboutPage;
