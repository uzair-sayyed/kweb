import Link from "next/link";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <header className="z-10 absolute w-full">
      <nav className="max-w-[1400px] mx-auto flex justify-between items-center py-4"> {/* Center the nav */}
        <div>
          <Image src={logo} alt='logo' className="h-[80px] w-auto mix-blend-multiply" />
        </div>

        <div className="flex items-center">
          <div className="text-[#0D63AD] text-[18px] font-medium flex gap-x-6">
            <Link href='/products'>Products</Link>
            <Link href='/about-us'>About us</Link>
            <Link href='/news-media'>News & Media</Link>
            <Link href='/partner'>Become a Partner</Link> {/* Fixed typo 'parnter' */}
            <Link href='/careers'>Careers</Link>
            <Link href='/contact-us'>Contact us</Link>
          </div>
          <div className="flex items-center">
            <button>
              <CiSearch className="text-[#0D63AD] text-[35px] ml-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
