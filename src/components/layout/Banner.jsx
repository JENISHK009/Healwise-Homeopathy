import React, { Component } from "react";
import "./Banner.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      isTransitioning: false,
    };

    this.banners = [
      {
        id: 1,
        title: "Welcome to Our Clinic",
        subtitle: "Experience the power of natural healing",
        description:
          "Discover personalized homeopathic treatments tailored to your unique needs.",
        image:
          "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1737191399/zrwflnu8oo9siyrwf8ji.jpg",
      },
      {
        id: 2,
        title: "Expert Care",
        subtitle: "Professional and compassionate healthcare",
        description:
          "Our experienced practitioners are dedicated to your well-being and optimal health.",
        image:
          "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1737191399/az33uhudyffi2fjtafx4.jpg",
      },
      {
        id: 3,
        title: "State-of-the-Art Facilities",
        subtitle: "Modern care with traditional wisdom",
        description:
          "Combining contemporary facilities with time-tested homeopathic principles.",
        image:
          "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1737191399/oybz7snsfkl8wdm8cczy.jpg",
      },
    ];
  }

  componentDidMount() {
    this.startSlideshow();
  }

  componentWillUnmount() {
    this.stopSlideshow();
  }

  startSlideshow = () => {
    this.slideInterval = setInterval(this.nextSlide, 7000);
  };

  stopSlideshow = () => {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  };

  nextSlide = () => {
    if (this.state.isTransitioning) return;

    this.setState((prevState) => ({
      isTransitioning: true,
      current: (prevState.current + 1) % this.banners.length,
    }));

    setTimeout(() => this.setState({ isTransitioning: false }), 800);
  };

  prevSlide = () => {
    if (this.state.isTransitioning) return;

    this.setState((prevState) => ({
      isTransitioning: true,
      current:
        (prevState.current - 1 + this.banners.length) % this.banners.length,
    }));

    setTimeout(() => this.setState({ isTransitioning: false }), 800);
  };

  goToSlide = (index) => {
    if (this.state.isTransitioning || index === this.state.current) return;

    this.setState({
      isTransitioning: true,
      current: index,
    });

    setTimeout(() => this.setState({ isTransitioning: false }), 800);
  };

  render() {
    const { current } = this.state;

    return (
      <div className='banner-wrapper'>
        <div className='banner-slider'>
          {this.banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`banner-slide ${current === index ? "active" : ""}`}>
              <div
                className='banner-background'
                style={{ backgroundImage: `url(${banner.image})` }}
              />
              <div className='banner-overlay' />
              <div className='banner-container'>
                <div className='banner-content'>
                  <h1 className='banner-title'>{banner.title}</h1>
                  <h2 className='banner-subtitle'>{banner.subtitle}</h2>
                  <p className='banner-description'>{banner.description}</p>
                  <div className='banner-buttons'>
                    <button className='banner-btn primary-btn'>
                      Book Appointment
                    </button>
                    <button className='banner-btn secondary-btn'>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            className='banner-nav prev'
            onClick={this.prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button
            className='banner-nav next'
            onClick={this.nextSlide}>
            <ChevronRight size={24} />
          </button>

          <div className='banner-indicators'>
            {this.banners.map((_, index) => (
              <button
                key={index}
                className={`indicator ${current === index ? "active" : ""}`}
                onClick={() => this.goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
