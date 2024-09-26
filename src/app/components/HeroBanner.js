"use client"; 
import Slider from "react-slick";
import Image from "next/image";
import bannerImg from "../../assets/images/banner.png"; 
import bannerImg2 from "../../assets/images/banner2.png"; 
import { useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
const images = [bannerImg, bannerImg2];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

export default function HeroBanner() {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className='relative w-full h-screen overflow-hidden z-0 hero_banner'>
      <Slider ref={sliderRef} {...settings} className='h-full'>
        {images.map((src, index) => (
          <div key={index} className='relative w-full h-full'>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout='fill'
              objectFit='cover'
              className='absolute inset-0'
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>

      <div className='absolute md:bottom-[97px] bottom-[40px] right-[50%] -translate-x-[-50%] md:right-[155px] flex max-w-[114px]'>
        <button onClick={prevSlide} className='bg-white text-white p-2 transition rounded-s-[30px]'>
          <FaArrowLeftLong className='text-[#0D63AD] w-[30.5px] ' />
        </button>
        <button
          onClick={nextSlide}
          className='bg-white text-white p-2 transition rounded-e-[30px]'
        >
          <FaArrowRightLong className='text-[#0D63AD] w-[30.5px]' />
        </button>
      </div>
    </div>
  );
}
