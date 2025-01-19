import React, { useState, useEffect } from "react";
import "./Banner.css";

const banners = [
  {
    id: 1,
    title: "Welcome to Our Clinic",
    subtitle: "Your health, our priority",
    image:
      "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1737191399/zrwflnu8oo9siyrwf8ji.jpg",
  },
  {
    id: 2,
    title: "Expert Care",
    subtitle: "Professional and personalized healthcare",
    image:
      "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1737191399/az33uhudyffi2fjtafx4.jpg",
  },
  {
    id: 3,
    title: "State-of-the-Art Facilities",
    subtitle: "Equipped with the latest technology",
    image:
      "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1737191399/oybz7snsfkl8wdm8cczy.jpg",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='banner'>
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`banner-slide ${current === index ? "active" : ""}`}>
          <div className='banner-content'>
            <h1>{banner.title}</h1>
            <p>{banner.subtitle}</p>
            <div className='banner-buttons'>
              <button className='banner-btn primary-btn'>Learn More</button>
              <button className='banner-btn secondary-btn'>Contact Us</button>
            </div>
          </div>
          <div
            className='banner-image-container'
            style={{ backgroundImage: `url(${banner.image})` }}></div>
        </div>
      ))}
    </section>
  );
};

export default Banner;
