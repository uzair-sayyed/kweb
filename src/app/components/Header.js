"use client"

import { useState } from "react";
import Link from "next/link";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <header className="z-10 absolute w-full">
      <nav className="max-w-[1400px] mx-auto flex justify-between items-center py-4 px-4">
        <div>
          <Image src={logo} alt='logo' className="h-[55px] md:h-[80px] w-auto mix-blend-multiply" />
        </div>

        <div className="hidden md:flex items-center">
          <div className="text-[#0D63AD] text-[18px] font-medium flex gap-x-6">
            <Link href=''>Products</Link>
            <Link href=''>About us</Link>
            <Link href=''>News & Media</Link>
            <Link href=''>Become a Partner</Link>
            <Link href=''>Careers</Link>
            <Link href=''>Contact us</Link>
          </div>
          <div className="flex items-center">
            <button>
              <CiSearch className="text-[#0D63AD] text-[35px] ml-6" />
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <AiOutlineClose className="text-[#0D63AD] text-[35px]" />
            ) : (
              <AiOutlineMenu className="text-[#0D63AD] text-[35px]" />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg w-[90%] mx-auto rounded">
          <div className="flex flex-col text-[#0D63AD] text-[18px] font-medium p-4 leading-[40px]">
            <Link href='/products' onClick={() => setIsOpen(false)}>Products</Link>
            <Link href='/about-us' onClick={() => setIsOpen(false)}>About us</Link>
            <Link href='/news-media' onClick={() => setIsOpen(false)}>News & Media</Link>
            <Link href='/partner' onClick={() => setIsOpen(false)}>Become a Partner</Link>
            <Link href='/careers' onClick={() => setIsOpen(false)}>Careers</Link>
            <Link href='/contact-us' onClick={() => setIsOpen(false)}>Contact us</Link>
          </div>
        </div>
      )}
    </header>
  );
}
