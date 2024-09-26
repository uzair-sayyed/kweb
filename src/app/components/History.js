"use client"

import React from "react";
import Slider from "react-slick";

import { FaArrowRightLong , FaArrowLeftLong } from "react-icons/fa6";

const History = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='relative  mx-auto py-6 md:py-12 history px-4 md-px-0'>
      <h2 className='text-[24px] md:text-[35px] font-medium mb-12 max-w-[1400px] mx-auto px-6'>
        1<sup>st</sup> to Introduce in India
      </h2>

      <Slider {...settings}>
        {timelineData.map((item, index) => (
          <div key={index} className='relative px-2 md:px-0'>
            <div className='grid rounded-lg'>
              <h3 className='text-xl font-bold text-[#0D63AD] mb-2 md:p-4 py-4 pl-1'>
                {item.year}
              </h3>
              <div className='relative w-full'>
                <div className='absolute top-1/2 w-full h-0.5 bg-[#0000004F] transform -translate-y-1/2'></div>
                <div className="border border-[#0D63AD] rounded-full p-[5px] absolute top-1/2 left-[5%] md:left-[7%] transform -translate-x-1/2 -translate-y-1/2">
                  <div className='w-[12px] h-[12px] bg-[#0D63AD] rounded-full'></div>
                </div>
              </div>
              <p className='text-gray-600 mt-6 md:pl-4 py-4 pr-4 text-[14px] md:text-[18px]'>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <div
    className='slick-arrow slick-next right-[10%] md:right-[20%]  top-[-30px] md:top-[-75px] rounded-full p-3 cursor-pointer text-white'
    onClick={onClick}
  >
    <FaArrowRightLong size={20} className="text-[#0D63AD] text-[30px]" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className='slick-arrow slick-prev left-[76%] top-[-30px] md:top-[-75px] rounded-full p-3 cursor-pointer  text-white'
    onClick={onClick}
  >
    <FaArrowLeftLong size={20} className="text-[#0D63AD] text-[30px]" />
  </div>
);

const timelineData = [
  {
    year: "1998",
    description: "1st to introduce CPVC piping system in India",
  },
  {
    year: "2004",
    description: "1st to introduce lead-free uPVC Plumbing piping system in India",
  },
  {
    year: "2007",
    description: "1st to get National Sanitation Foundation (NSF) approval in India",
  },
  {
    year: "2008",
    description: "1st to introduce Triple Layer Foamcore PVC Pipes in India",
  },
  {
    year: "2010",
    description: "1st to launch Low-Noise Drainage piping system in India",
  },
  {
    year: "2012",
    description: "1st to launch lead-free uPVC column pipes in India",
  },
];

export default History;
