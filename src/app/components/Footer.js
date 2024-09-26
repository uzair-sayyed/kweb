"use client";
import Link from "next/link";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa6";
import socialIcon from "../../assets/images/socialmediafooter.png";
import logo from "../../assets/images/logo.png";
import img1 from "../../assets/images/footerimg1.png";
import img2 from "../../assets/images/footerimg2.png";
import img3 from "../../assets/images/footerimg3.png";
export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className='pt-16'>
      <div className='max-w-[1400px] mx-auto grid md:grid-cols-4 gap-4 md:gap-8 px-4 leading-[35px]'>
        <div>
          <h4 className='text-[20px] font-medium mb-4'>Products</h4>
          <ul className='hidden md:block'>
            <li>
              <Link href='/products/adhesives' className='hover:text-[#0D63AD]'>
                Plumbing Pipes & Fittings
              </Link>
            </li>
            <li>
              <Link href='/products/paints' className='hover:text-[#0D63AD]'>
                Sewerage Drainage Pipes & Fittings
              </Link>
            </li>
            <li>
              <Link href='/products/faucets' className='hover:text-[#0D63AD]'>
                Agriculture Pipes & Fittings
              </Link>
            </li>
            <li>
              <Link href='/products/sealants' className='hover:text-[#0D63AD]'>
                Water Tanks
              </Link>
            </li>
            <li>
              <Link href='/products/sealants' className='hover:text-[#0D63AD]'>
                Industrial Pipes & Fittings
              </Link>
            </li>
            <li>
              <Link href='/products/sealants' className='hover:text-[#0D63AD]'>
                Cable Protection
              </Link>
            </li>
          </ul>

          <ul className='block md:hidden'>
            <li>
              <Link href='/products/adhesives' className='hover:text-[#0D63AD]'>
                Plumbing Pipes & Fittings
              </Link>
            </li>
            <li>
              <Link href='/products/paints' className='hover:text-[#0D63AD]'>
                Sewerage Drainage Pipes & Fittings
              </Link>
            </li>
            <li>
              <Link href='/products/faucets' className='hover:text-[#0D63AD]'>
                Agriculture Pipes & Fittings
              </Link>
            </li>
            <li>
              <Link href='/products/sealants' className='hover:text-[#0D63AD]'>
                Water Tanks
              </Link>
            </li>
            <li>
              <Link href='/products/sealants' className='hover:text-[#0D63AD]'>
                Industrial Pipes & Fittings
              </Link>
            </li>
            <li>
              <Link href='/products/sealants' className='hover:text-[#0D63AD]'>
                Cable Protection
              </Link>
            </li>
            <li>
              <Link href='/news/latest' className='hover:text-[#0D63AD]'>
                Fire Sprinklers Pipes & Fittings
              </Link>
            </li>
            <li>
              <Link href='/news/events' className='hover:text-[#0D63AD]'>
                Urban Infrastructure
              </Link>
            </li>
            <li>
              <Link
                href='/news/press-releases'
                className='hover:text-[#0D63AD]'
              >
                Ancillary Products
              </Link>
            </li>
            <li>
              <Link
                href='/news/press-releases'
                className='hover:text-[#0D63AD]'
              >
                Solvent Cement
              </Link>
            </li>
            <li>
              <Link
                href='/news/press-releases'
                className='hover:text-[#0D63AD]'
              >
                Insulation Tube
              </Link>
            </li>
            <li>
              <Link
                href='/news/press-releases'
                className='hover:text-[#0D63AD]'
              >
                Specialty Fittings
              </Link>
            </li>
          </ul>
        </div>

        <div className='hidden md:block'>
          <h4 className='text-[20px] font-medium mb-4 invisible '>.</h4>
          <ul>
            <li>
              <Link href='/news/latest' className='hover:text-[#0D63AD]'>
                Fire Sprinklers Pipes & Fittings
              </Link>
            </li>
            <li>
              <Link href='/news/events' className='hover:text-[#0D63AD]'>
                Urban Infrastructure
              </Link>
            </li>
            <li>
              <Link
                href='/news/press-releases'
                className='hover:text-[#0D63AD]'
              >
                Ancillary Products
              </Link>
            </li>
            <li>
              <Link
                href='/news/press-releases'
                className='hover:text-[#0D63AD]'
              >
                Solvent Cement
              </Link>
            </li>
            <li>
              <Link
                href='/news/press-releases'
                className='hover:text-[#0D63AD]'
              >
                Insulation Tube
              </Link>
            </li>
            <li>
              <Link
                href='/news/press-releases'
                className='hover:text-[#0D63AD]'
              >
                Specialty Fittings
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-[20px] font-medium mb-4 '>News & Media</h4>
          <ul>
            <li>
              <Link href='/news/latest' className='hover:text-[#0D63AD]'>
                About us
              </Link>
            </li>
            <li>
              <Link href='/news/events' className='hover:text-[#0D63AD]'>
                Piping Guidelines
              </Link>
            </li>
            <li>
              <Link
                href='/news/press-releases'
                className='hover:text-[#0D63AD]'
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-[20px] font-medium mb-4'>Contact Us</h4>
          <p className='hover:text-[#0D63AD]'>
            ASTRAL HOUSE 207/1, Behinde Rajpath Club, Off. S.G. Highway,
            Ahmedabad - 380059. India.
          </p>
          <p className=''>
            Phone:{" "}
            <a href='tel: +91-79-66212000' className='hover:text-[#0D63AD]'>
              +91-79-66212000
            </a>
          </p>
          <p className=''>
            Telefax:{" "}
            <a href='tel:+91-79-66212121' className='hover:text-[#0D63AD]'>
              +91-79-66212121
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href='mailto:info@astralpipes.com'
              className='hover:text-[#0D63AD]'
            >
              info@astralpipes.com
            </a>
          </p>
          <div className='mt-4'>
            <Image src={socialIcon} />
          </div>
        </div>
      </div>

      <div className='border-y border-y-[#0000004F] max-w-[1400px] mx-auto mt-[50px]'>
        <div className='max-w-[85%] flex flex-col md:flex-row items-center gap-6 md:gap-10 py-[40px] mx-auto md:mx-[0px]'>
          <div>
            <Image src={logo} className='h-[48px] md:!h-[72px] w-auto' />
          </div>

          <div className='text-center md:text-left'>
            <h2 className='text-[18px] md:text-[20px] leading-[30px] md:leading-[35px] font-semibold text-[#0D63AD]'>
              Proudly Associated With
            </h2>
          </div>

          <div className='grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-x-10 text-center'>
            <div className='flex flex-col items-center md:items-start'>
              <Image
                src={img1}
                className='h-[40px] md:h-[60px] md:h-[72px] w-auto object-contain'
              />
              <span className='leading-[30px] md:leading-[35px]'>
                Official Partner
              </span>
            </div>
            <div className='flex flex-col items-center md:items-start'>
              <Image
                src={img2}
                className='h-[40px] md:h-[60px] md:h-[72px] w-auto object-contain'
              />
              <span className='leading-[30px] md:leading-[35px]'>
                Associate Partner
              </span>
            </div>
            <div className='flex flex-col items-center md:items-start'>
              <Image
                src={img3}
                className='h-[40px] md:h-[60px] md:h-[72px] w-auto object-contain'
              />
              <span className='leading-[30px] md:leading-[35px]'>
                Associate Partner
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[50px] mb-[42px] max-w-[1400px] mx-auto px-6'>
        <div>
          <h4 className='font-medium text-[20px] mb-3'>Products</h4>
          <p className='leading-[35px] cursor-pointer'>
            <span className='hover:text-[#0D63AD]'>Air Admittance Valve</span> |
            <span className='hover:text-[#0D63AD]'> Aquarius </span> |
            <span className='hover:text-[#0D63AD]'> Aquarius+ </span> |
            <span className='hover:text-[#0D63AD]'> Aquasafe </span> |
            <span className='hover:text-[#0D63AD]'> Back Flow </span> |
            <span className='hover:text-[#0D63AD]'> Preventer Valve </span> |
            <span className='hover:text-[#0D63AD]'> Basin Trap </span> |
            <span className='hover:text-[#0D63AD]'> Bore-well </span> |
            <span className='hover:text-[#0D63AD]'> Case-Well </span> |
            <span className='hover:text-[#0D63AD]'> Chem Pro </span> |
            <span className='hover:text-[#0D63AD]'> Clamps & Hangers </span> |
            <span className='hover:text-[#0D63AD]'> Cleo </span> |
            <span className='hover:text-[#0D63AD]'> CPVC PRO </span> |
            <span className='hover:text-[#0D63AD]'> D-Rex </span> |
            <span className='hover:text-[#0D63AD]'> Delta </span> |
            <span className='hover:text-[#0D63AD]'> Drain Hulk </span> |
            <span className='hover:text-[#0D63AD]'> Drain Pro </span> |
            <span className='hover:text-[#0D63AD]'> Drain Top </span> |
            <span className='hover:text-[#0D63AD]'> Drainmaster </span> |
            <span className='hover:text-[#0D63AD]'> Droplet </span> |
            <span className='hover:text-[#0D63AD]'> ECO PRO </span> |
            <span className='hover:text-[#0D63AD]'> Fire Pro </span> |
            <span className='hover:text-[#0D63AD]'> Foamcore </span> |
            <span className='hover:text-[#0D63AD]'> Geo-Rex </span> |
            <span className='hover:text-[#0D63AD]'> Gully Trap </span> |
            <span className='hover:text-[#0D63AD]'> Insu PRO </span> |
            <span className='hover:text-[#0D63AD]'> MultiPex </span> |
            <span className='hover:text-[#0D63AD]'> Opta </span> |
            <span className='hover:text-[#0D63AD]'> Pex-a PRO </span> |
            <span className='hover:text-[#0D63AD]'> Pio </span> |
            <span className='hover:text-[#0D63AD]'> Pipe Fix </span> |
            <span className='hover:text-[#0D63AD]'> Plus+StiRex </span> |
            <span className='hover:text-[#0D63AD]'> Power Drain </span> |
            <span className='hover:text-[#0D63AD]'> Power Flex </span> |
            <span className='hover:text-[#0D63AD]'> Pre-StiRex </span> |
            <span className='hover:text-[#0D63AD]'> Rainway </span> |
            <span className='hover:text-[#0D63AD]'> Sarita </span> |
            <span className='hover:text-[#0D63AD]'> Silencio </span> |
            <span className='hover:text-[#0D63AD]'> Sylo </span> |
            <span className='hover:text-[#0D63AD]'> TeleRex </span> |
            <span className='hover:text-[#0D63AD]'>
              {" "}
              Thermoplastic Ball Valve{" "}
            </span>{" "}
            |<span className='hover:text-[#0D63AD]'> Underground </span> |
            <span className='hover:text-[#0D63AD]'> Vito </span> |
            <span className='hover:text-[#0D63AD]'> WELD-ON </span> |
            <span className='hover:text-[#0D63AD]'> Wire Guard </span> |
            <span className='hover:text-[#0D63AD]'> Y-STRAINER </span>
          </p>
        </div>
      </div>
      <div className='max-w-[1400px] mx-auto px-6'>
        <p className='leading-[35px]'>
          Please note that the claim "India's No. 1 Pipe Brand" is based on
          findings from TRA's Brand Reports spanning from 2016, 2019 to 2024,
          along with Superbrands awards received in 2017, 2019, 2020, 2021-2022,
          and 2023. Also, Astral Pipes has been ranked as The Most Desired Brand
          in the studies conducted by TRA. These accolades suggest a strong
          market presence and consumer recognition, and it's important to
          consider various factors that influence brand rankings and
          perceptions. This claim should be interpreted within the context of
          the specific reports and awards mentioned. Such consumer preferences,
          market dynamics, and methodologies employed in brand assessments
          impact the positioning of brands within the respective industries.
        </p>
      </div>

      <div className='text-center mt-8 bg-[#EEECEC80] pb-[18px] px-6'>
        <div className='flex justify-center flex-col items-center gap-y-2'>
          <div
            className='h-[30px] md:h-[50px] w-[30px] md:w-[50px] bg-[#0D63AD] rounded-full flex items-center justify-center mt-[-12px] md:mt-[-20px] cursor-pointer'
            onClick={handleScrollToTop}
          >
            <FaArrowUp className='text-white text-[16px] md:text-[22px]' />
          </div>
          <p className='text-[14px] mt-2 md:mt-0 md:text-[16px]'>
            © 2024-2025 ASTRAL PIPES ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
