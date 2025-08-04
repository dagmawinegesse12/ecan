
// components/HeroCarousel.tsx
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export interface Slide {
  src: string;
  alt: string;
}

interface HeroCarouselProps {
  slides: Slide[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="mt-16">
      <Slider {...settings} className="relative">
        {slides.map((slide, idx) => (
          <div key={idx} className="relative h-[60vh] w-full">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              style={{ objectFit: "cover" }}
              objectPosition="top center"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h1 className="text-white text-5xl md:text-6xl font-extrabold text-center px-4">
                Ethiopian Community Association<br />of Nashville
              </h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;