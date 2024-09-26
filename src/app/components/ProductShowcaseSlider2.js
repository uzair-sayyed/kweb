"use client";

import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import product1 from "../../assets/images/p1.png";
import product2 from "../../assets/images/p2.png";
import product3 from "../../assets/images/p3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
const categories = [
  {
    id: 1,
    name: "Plumbing Pipes & Fittings",
    products: [
      {
        id: 1,
        title: "CPVC PRO",
        description: "CPVC - Hot & Cold Water Plumbing System",
        image: product1,
      },
      {
        id: 2,
        title: "PEX - A PRO",
        description: "Cross-linked PE - Hot & Cold Water Plumbing System",
        image: product2,
      },
      {
        id: 3,
        title: "MULTIPEX",
        description: "Cross-linked PE - Hot & Cold Water Plumbing System",
        image: product3,
      },
    ],
  },
  {
    id: 2,
    name: "Sewerage Drainage Pipes & Fittings",
    products: [
      {
        id: 4,
        title: "Sewer PRO",
        description: "Advanced Sewerage Drainage System",
        image: product1,
      },
      {
        id: 5,
        title: "Drain PRO",
        description: "High Durability Drainage Solution",
        image: product2,
      },
      {
        id: 5,
        title: "Drain PRO",
        description: "High Durability Drainage Solution",
        image: product2,
      },
    ],
  },
  {
    id: 3,
    name: "Agriculture Pipes & Fittings",
    products: [
      {
        id: 6,
        title: "Agri PIPE",
        description: "Reliable Agriculture Irrigation System",
        image: product3,
      },
      {
        id: 7,
        title: "Agri FLEX",
        description: "Flexible Pipes for Agriculture",
        image: product1,
      },
      {
        id: 7,
        title: "Agri FLEX",
        description: "Flexible Pipes for Agriculture",
        image: product1,
      },
    ],
  },
  {
    id: 4,
    name: "Water Tanks",
    products: [
      {
        id: 1,
        title: "CPVC PRO",
        description: "CPVC - Hot & Cold Water Plumbing System",
        image: product1,
      },
      {
        id: 2,
        title: "PEX - A PRO",
        description: "Cross-linked PE - Hot & Cold Water Plumbing System",
        image: product2,
      },
      {
        id: 3,
        title: "MULTIPEX",
        description: "Cross-linked PE - Hot & Cold Water Plumbing System",
        image: product3,
      },
    ],
  },
  {
    id: 5,
    name: "Industrial Pipes & Fittings",
    products: [
      {
        id: 6,
        title: "Agri PIPE",
        description: "Reliable Agriculture Irrigation System",
        image: product3,
      },
      {
        id: 7,
        title: "Agri FLEX",
        description: "Flexible Pipes for Agriculture",
        image: product1,
      },
      {
        id: 7,
        title: "Agri FLEX",
        description: "Flexible Pipes for Agriculture",
        image: product1,
      },
    ],
  },
  {
    id: 6,
    name: "Cable Protection",
    products: [
      {
        id: 6,
        title: "Agri PIPE",
        description: "Reliable Agriculture Irrigation System",
        image: product3,
      },
      {
        id: 7,
        title: "Agri FLEX",
        description: "Flexible Pipes for Agriculture",
        image: product1,
      },
      {
        id: 7,
        title: "Agri FLEX",
        description: "Flexible Pipes for Agriculture",
        image: product1,
      },
    ],
  },
  {
    id: 7,
    name: "Fire Sprinklers Pipes & Fittings",
    products: [
      {
        id: 1,
        title: "CPVC PRO",
        description: "CPVC - Hot & Cold Water Plumbing System",
        image: product1,
      },
      {
        id: 2,
        title: "PEX - A PRO",
        description: "Cross-linked PE - Hot & Cold Water Plumbing System",
        image: product2,
      },
      {
        id: 3,
        title: "MULTIPEX",
        description: "Cross-linked PE - Hot & Cold Water Plumbing System",
        image: product3,
      },
      {
        id: 3,
        title: "MULTIPEX",
        description: "Cross-linked PE - Hot & Cold Water Plumbing System",
        image: product3,
      },
    ],
  },
  {
    id: 8,
    name: "Urban Infrstructure",
    products: [
      {
        id: 6,
        title: "Agri PIPE",
        description: "Reliable Agriculture Irrigation System",
        image: product3,
      },
      {
        id: 7,
        title: "Agri FLEX",
        description: "Flexible Pipes for Agriculture",
        image: product1,
      },
      {
        id: 7,
        title: "Agri FLEX",
        description: "Flexible Pipes for Agriculture",
        image: product1,
      },
    ],
  },
];

export default function ProductShowcaseSlider2() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='max-w-[1400px] mx-auto py-8 mt-[30px] product_slider'>
      <div className='grid md:grid-cols-12'>
        {/* Left side category list */}
        <div className='border-l border-gray-300 pl-[30px] w-full md:w-auto col-span-3'>
          <ul className="!max-w-[100wv]">
            {categories.map((category) => (
              <li
                key={category.id}
                className={`cursor-pointer ${
                  activeCategory.id === category.id
                    ? "font-medium text-[#0D63AD] text-[18px] mb-[18px] leading-[35px] w-max"
                    : "font-medium text-[18px] mb-[18px] leading-[35px] w-max"
                }`}
                onClick={() => {
                  setActiveCategory(category);
                }}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Products slider */}
        <div className='md:col-span-9 w-full'>
          <div className='products_slider relative px-2'>
            <Slider {...settings}>
              {activeCategory.products.map((product) => (
                <div
                  key={product.id}
                  className='max-h-max max-w-[300px] border hover:border-[#0D63AD] hover:shadow-md rounded-[20px] mx-auto'
                >
                  <div className='bg-white border rounded-[20px] p-[13px] text-center flex flex-col gap-y-2'>
                    <div className='bg-[#F3F6FA] rounded-[20px] h-[282px]'>
                      <Image
                        src={product.image}
                        alt={product.title}
                        className='h-[100%] rounded-[20px]'
                      />
                    </div>
                    <div className='bg-[#F3F6FA] rounded-[20px] h-[126px] p-[13px]'>
                      <h3 className='font-bold text-[25px] text-[#0D63AD] mt-4 leading-[35px]'>
                        {product.title}
                      </h3>
                      <p className='text-lg'>{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Responsive layout - category on top, slider below */}
      {/* <div className='block md:hidden w-full mt-10'>
        <ul className='border-t border-gray-300 pt-4'>
          {categories.map((category) => (
            <li
              key={category.id}
              className={`cursor-pointer ${
                activeCategory.id === category.id
                  ? "font-medium text-[#0D63AD] text-[18px] mb-[18px] leading-[35px] w-max"
                  : "font-medium text-[18px] mb-[18px] leading-[35px] w-max"
              }`}
              onClick={() => {
                setActiveCategory(category);
              }}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div> */}

      {/* <div className='block md:hidden w-full mt-4'>
        <Slider {...settings}>
          {activeCategory.products.map((product) => (
            <div
              key={product.id}
              className='max-h-[446px] max-w-[300px] pb-4 border hover:border-[#0D63AD] hover:shadow-md rounded-[20px] mx-auto'
            >
              <div className='bg-white border rounded-[20px] p-[13px] text-center flex flex-col gap-y-2'>
                <div className='bg-[#F3F6FA] rounded-[20px] h-[282px]'>
                  <Image
                    src={product.image}
                    alt={product.title}
                    className='h-[100%] rounded-[20px]'
                  />
                </div>
                <div className='bg-[#F3F6FA] rounded-[20px] h-[126px] p-[13px]'>
                  <h3 className='font-bold text-[25px] text-[#0D63AD] mt-4 leading-[35px]'>
                    {product.title}
                  </h3>
                  <p className='text-lg'>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`custom-arrow next-arrow ${className}`}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "20px",
        top: "-10%",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer",
        color: "#0D63AD",
      }}
      onClick={onClick}
    >
      <FaArrowRightLong className='text-[20px]' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`custom-arrow prev-arrow ${className}`}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: "20px",
        top: "-10%",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer",
        color: "#0D63AD",
      }}
      onClick={onClick}
    >
      <FaArrowLeftLong className='text-[20px]' />
    </div>
  );
}
