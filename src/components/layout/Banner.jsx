import React, { Component } from "react";
import "./Banner.css";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      isAnimating: false,
    };

    this.banners = [
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

    this.touchStartX = 0;
  }

  componentDidMount() {
    this.startSlideshow();
    this.addTouchListeners();
  }

  componentWillUnmount() {
    this.stopSlideshow();
    this.removeTouchListeners();
  }

  startSlideshow = () => {
    this.slideInterval = setInterval(this.nextSlide, 5000);
  };

  stopSlideshow = () => {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  };

  addTouchListeners = () => {
    const banner = document.querySelector(".banner");
    banner.addEventListener("touchstart", this.handleTouchStart, {
      passive: true,
    });
    banner.addEventListener("touchmove", this.handleTouchMove, {
      passive: true,
    });
  };

  removeTouchListeners = () => {
    const banner = document.querySelector(".banner");
    banner.removeEventListener("touchstart", this.handleTouchStart);
    banner.removeEventListener("touchmove", this.handleTouchMove);
  };

  handleTouchStart = (e) => {
    this.touchStartX = e.touches[0].clientX;
  };

  handleTouchMove = (e) => {
    if (this.state.isAnimating) return;

    const touchEndX = e.touches[0].clientX;
    const diff = this.touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
      this.touchStartX = 0;
    }
  };

  nextSlide = () => {
    if (this.state.isAnimating) return;

    this.setState((prevState) => ({
      isAnimating: true,
      current: (prevState.current + 1) % this.banners.length,
    }));

    setTimeout(() => this.setState({ isAnimating: false }), 500);
  };

  prevSlide = () => {
    if (this.state.isAnimating) return;

    this.setState((prevState) => ({
      isAnimating: true,
      current:
        prevState.current === 0
          ? this.banners.length - 1
          : prevState.current - 1,
    }));

    setTimeout(() => this.setState({ isAnimating: false }), 500);
  };

  setCurrentSlide = (index) => {
    if (this.state.isAnimating || index === this.state.current) return;

    this.setState({
      isAnimating: true,
      current: index,
    });

    setTimeout(() => this.setState({ isAnimating: false }), 500);
  };

  render() {
    const { current } = this.state;

    return (
      <div className='banner-wrapper'>
        <div className='banner'>
          {this.banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`banner-slide ${current === index ? "active" : ""} 
                         ${index < current ? "slide-left" : "slide-right"}`}>
              <div className='banner-container'>
                <div className='banner-flex'>
                  <div className='banner-content'>
                    <div className='content-wrapper'>
                      <h1 className='banner-title'>{banner.title}</h1>
                      <p className='banner-subtitle'>{banner.subtitle}</p>
                      <div className='banner-buttons'>
                        <button className='banner-btn primary-btn'>
                          Learn More
                          <span className='btn-hover'></span>
                        </button>
                        <button className='banner-btn secondary-btn'>
                          Contact Us
                          <span className='btn-hover'></span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className='banner-image-container'>
                    <div className='banner-image-wrapper'>
                      <img
                        src={banner.image}
                        alt={banner.title}
                        className='banner-image'
                      />
                      <div className='image-overlay'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className='banner-nav'>
            <button
              className='nav-btn prev-btn'
              onClick={this.prevSlide}
              aria-label='Previous slide'>
              ‹
            </button>
            <button
              className='nav-btn next-btn'
              onClick={this.nextSlide}
              aria-label='Next slide'>
              ›
            </button>
          </div>

          <div className='banner-indicators'>
            {this.banners.map((_, index) => (
              <button
                key={index}
                onClick={() => this.setCurrentSlide(index)}
                className={`indicator ${current === index ? "active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}>
                <span className='indicator-progress'></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
