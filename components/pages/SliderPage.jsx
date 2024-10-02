"use client";
import React from "react";
import Heading from '../shared/Heading';
import Slider from "react-slick";

function SliderPage() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false
  };

  return (
    <div className="flex flex-col gap-8 py-16">
      <Heading text="Slider text" />
      <div className="columns-1 md:columns-2 text-sm/relaxed text-gray-500 text-justify">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque ipsum non mauris condimentum, nec blandit libero
          fermentum. Curabitur non nisi libero. Donec consectetur nisi ut diam
          placerat, et convallis nunc gravida. Etiam ullamcorper suscipit
          mauris, ac fermentum eros viverra in. Proin convallis arcu id libero
          aliquet, ut dapibus turpis ultricies. Vivamus bibendum est nec eros
          vehicula, ut vehicula felis dictum. Vestibulum volutpat consequat
          lacus, id vehicula mi aliquet nec.
        </p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="w-full aspect-video bg-primaryAccent rounded-lg">
              <h1 className="text-black">{item}</h1>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderPage;
