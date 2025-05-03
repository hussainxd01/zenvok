"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const swiperRef = useRef(null);
  const cardsRef = useRef([]);

  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation for cards
    const cards = cardsRef.current;

    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".slider-container",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  // Handle hover to pause/resume autoplay
  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  // Add card to refs
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div className="slider-container w-full max-w-7xl mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Rejoice at a Glance.</h2>
        <a href="mailto:hello@rejoice.com" className="text-lg">
          hello@rejoice.com
        </a>
      </div>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SwiperSlide>
          <div
            ref={addToRefs}
            className="bg-black text-white p-8 h-80 flex flex-col justify-between rounded-lg"
          >
            <div>
              <h3 className="text-4xl font-bold">60 brands</h3>
              <p className="text-xl mt-2">successfully</p>
              <p className="text-xl">launched since 2013.</p>
            </div>
            <div className="flex justify-end">
              <div className="text-white text-3xl font-bold">MOXON</div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            ref={addToRefs}
            className="bg-gradient-to-b from-blue-900 to-blue-700 text-white p-8 h-80 flex flex-col justify-between rounded-lg relative overflow-hidden"
          >
            <div className="z-10">
              <div className="space-y-2">
                <p className="text-xl">Software</p>
                <p className="text-xl font-bold">Consumer Goods</p>
                <p className="text-xl">Transportation</p>
                <p className="text-xl">Hospitality</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-40">
              <div className="w-full h-full rounded-full border-8 border-yellow-400 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-b from-blue-200 to-blue-400"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            ref={addToRefs}
            className="bg-gray-100 p-8 h-80 flex flex-col justify-between rounded-lg"
          >
            <div>
              <h3 className="text-4xl font-bold">70+ industry-</h3>
              <p className="text-xl mt-2">recognized</p>
              <p className="text-xl">awards.</p>
            </div>
            <div className="flex justify-end">
              <div className="font-bold">WORTHY COMPANY</div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            ref={addToRefs}
            className="bg-gray-100 p-8 h-80 flex flex-col justify-between rounded-lg"
          >
            <div>
              <h3 className="text-4xl font-bold">70+ industry-</h3>
              <p className="text-xl mt-2">recognized</p>
              <p className="text-xl">awards.</p>
            </div>
            <div className="flex justify-end">
              <div className="font-bold">WORTHY COMPANY</div>
            </div>
          </div>
        </SwiperSlide>

        {/* You can add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default Slider;
