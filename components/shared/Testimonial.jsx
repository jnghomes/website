import React from 'react';
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Heading from './Heading';
import Image from 'next/image';

const Testimonial = () => {
  const sliderRef = React.useRef(null);

  // Custom Previous Arrow
  const PrevArrow = ({ onClick }) => (
    <button
      aria-label="Previous slide"
      onClick={onClick}
      className="rounded-full border border-primaryText p-3 text-primaryText hover:bg-primaryText hover:text-secondaryText"
    >
      <FaAngleLeft />
    </button>
  );

  // Custom Next Arrow
  const NextArrow = ({ onClick }) => (
    <button
      aria-label="Next slide"
      onClick={onClick}
      className="rounded-full border border-primaryText p-3 text-primaryText hover:bg-primaryText hover:text-secondaryText"
    >
      <FaAngleRight />
    </button>
  );

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="max-w-7xl items-center justify-between sm:flex sm:pe-6 lg:pe-8">
          <Heading text="Read trusted reviews from our customers" />

          <div className="flex gap-4 lg:mt-0">
            {/* Navigation buttons positioned side by side */}
            <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
            <NextArrow onClick={() => sliderRef.current.slickNext()} />
          </div>
        </div>

        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
          <Slider ref={sliderRef} {...settings}>
            <div className="px-4">
              <blockquote className="flex h-full flex-col justify-between bg-secondaryText p-6 shadow-sm sm:p-8 lg:p-12 rounded-lg">
                <div>
                  <div className="flex gap-0.5 text-primaryAccent">
                    {/* Add your star icons here */}
                  </div>
                  <div className="mt-4">
                    <Image
                      src="/images/logo.png"
                      alt="avatar.jpg"
                      width={50}
                      height={50}
                      className="inline rounded-full"
                    />
                    <p className="mt-4 leading-relaxed text-primaryText">
                      No, Rose, they are not breathing. And they have no arms or legs…
                    </p>
                  </div>
                </div>
                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; Michael Scott
                </footer>
              </blockquote>
            </div>
            <div className="px-4">
              <blockquote className="flex h-full flex-col justify-between bg-secondaryText p-6 shadow-sm sm:p-8 lg:p-12 rounded-lg">
                <div>
                  <div className="flex gap-0.5 text-primaryAccent">
                    {/* Add your star icons here */}
                  </div>
                  <div className="mt-4">
                    <Image
                      src="/images/logo.png"
                      alt="avatar.jpg"
                      width={50}
                      height={50}
                      className="inline rounded-full"
                    />
                    <p className="mt-4 leading-relaxed text-primaryText">
                      No, Rose, they are not breathing. And they have no arms or legs…
                    </p>
                  </div>
                </div>
                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; Michael Scott
                </footer>
              </blockquote>
            </div>
            {/* Repeat for more slides */}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
