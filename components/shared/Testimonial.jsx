import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Heading from "./Heading";

const Testimonial = () => {
  const sliderRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const keenSliderInstance = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 2.5,
              spacing: 32,
            },
          },
        },
      });

      // Set up event listeners for navigation buttons
      prevRef.current.addEventListener("click", () => keenSliderInstance.prev());
      nextRef.current.addEventListener("click", () => keenSliderInstance.next());

      return () => {
        keenSliderInstance.destroy();
      };
    }
  }, []);

  return (
    <section className="bg-gra">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <Heading text="Read reviews from our customers"></Heading>

          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              ref={prevRef}
              className="rounded-full border border-primaryText p-3 text-primaryText transition hover:bg-primaryText hover:text-secondaryText"
            >
              <FaAngleLeft></FaAngleLeft>
            </button>

            <button
              aria-label="Next slide"
              ref={nextRef}
              className="rounded-full border border-primaryText p-3 text-primaryText transition hover:bg-primaryText hover:text-secondaryText"
            >
              <FaAngleRight></FaAngleRight>
            </button>
          </div>
        </div>

        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-secondaryText p-6 shadow-sm sm:p-8 lg:p-12 rounded-lg">
                <div>
                  <div className="flex gap-0.5 text-primaryAccent">{/* Add your star icons here */}</div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-primasecondaryText sm:text-3xl">Stayin' Alive</p>
                    <p className="mt-4 leading-relaxed text-primaryText">
                      No, Rose, they are not breathing. And they have no arms or legs…
                    </p>
                  </div>
                </div>
                <footer className="mt-4 text-sm font-medium text-gray-500 sm:mt-6">&mdash; Michael Scott</footer>
              </blockquote>
            </div>
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-secondaryText p-6 shadow-sm sm:p-8 lg:p-12 rounded-lg">
                <div>
                  <div className="flex gap-0.5 text-primaryAccent">{/* Add your star icons here */}</div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-primaryAccent sm:text-3xl">Stayin' Alive</p>
                    <p className="mt-4 leading-relaxed text-primaryText">
                      No, Rose, they are not breathing. And they have no arms or legs…
                    </p>
                  </div>
                </div>
                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">&mdash; Michael Scott</footer>
              </blockquote>
            </div>

            {/* Repeat for more slides */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
