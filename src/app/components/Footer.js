import Link from "next/link";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa6";
import socialIcon from "../../assets/images/socialmediafooter.png";
import logo from "../../assets/images/logo.png";
import img1 from "../../assets/images/footerimg1.png";
import img2 from "../../assets/images/footerimg2.png";
import img3 from "../../assets/images/footerimg3.png";
export default function Footer() {
  return (
    <footer className='pt-16'>
      <div className='max-w-[1400px] mx-auto grid md:grid-cols-4 gap-8 px-4 leading-[35px]'>
        <div>
          <h4 className='text-[20px] font-medium mb-4'>Products</h4>
          <ul>
            <li>
              <Link href='/products/adhesives' className=''>
                Plumbing Pipes & Fittings
              </Link>
            </li>
            <li>
              <Link href='/products/paints' className=''>
                Sewerage Drainage Pipes & Fittings
              </Link>
            </li>
            <li>
              <Link href='/products/faucets' className=''>
                Agriculture Pipes & Fittings
              </Link>
            </li>
            <li>
              <Link href='/products/sealants' className=''>
                Water Tanks
              </Link>
            </li>
            <li>
              <Link href='/products/sealants' className=''>
                Industrial Pipes & Fittings
              </Link>
            </li>
            <li>
              <Link href='/products/sealants' className=''>
                Cable Protection
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-[20px] font-medium mb-4 invisible'>
            News & Media
          </h4>
          <ul>
            <li>
              <Link href='/news/latest' className=' '>
                Fire Sprinklers Pipes & Fittings
              </Link>
            </li>
            <li>
              <Link href='/news/events' className=' '>
                Urban Infrastructure
              </Link>
            </li>
            <li>
              <Link href='/news/press-releases' className=' '>
                Ancillary Products
              </Link>
            </li>
            <li>
              <Link href='/news/press-releases' className=' '>
                Solvent Cement
              </Link>
            </li>
            <li>
              <Link href='/news/press-releases' className=' '>
                Insulation Tube
              </Link>
            </li>
            <li>
              <Link href='/news/press-releases' className=' '>
                Specialty Fittings
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-[20px] font-medium mb-4 '>News & Media</h4>
          <ul>
            <li>
              <Link href='/news/latest' className=' '>
                About us
              </Link>
            </li>
            <li>
              <Link href='/news/events' className=' '>
                Piping Guidelines
              </Link>
            </li>
            <li>
              <Link href='/news/press-releases' className=' '>
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-[20px] font-medium mb-4'>Contact Us</h4>
          <p className=''>
            ASTRAL HOUSE 207/1, Behinde Rajpath Club, Off. S.G. Highway,
            Ahmedabad - 380059. India.
          </p>
          <p className=''>
            Phone:{" "}
            <a href='tel: +91-79-66212000' className=''>
              +91-79-66212000
            </a>
          </p>
          <p className=''>
            Telefax:{" "}
            <a href='tel:+91-79-66212121' className=''>
              ++91-79-66212121
            </a>
          </p>
          <p className=''>
            Email:{" "}
            <a href='mailto:info@astralpipes.com'>info@astralpipes.com</a>
          </p>
          <div className='mt-4'>
            <Image src={socialIcon} />
          </div>
        </div>
      </div>

      <div className='border-y border-y-[#0000004F] max-w-[1400px] mx-auto mt-[50px]'>
        <div className='max-w-[85%] flex items-center gap-10 py-[40px]'>
          <div>
            {" "}
            <Image src={logo} className='!h-[72px] w-auto' />
          </div>
          <div>
            <h2 className='text-[20px] leading-[35px] font-semibold text-[#0D63AD]'>
              Proudly Associated With
            </h2>
          </div>
          <div className='grid md:grid-cols-3 gap-x-10'>
            <div>
              <Image src={img1} className='h-[72px] w-auto object-contain' />
              <span className='leading-[35px]'>Official Partner</span>
            </div>
            <div>
              <Image src={img2} className='h-[72px] w-auto object-contain' />
              <span className='leading-[35px]'>Associate Partner</span>
            </div>
            <div>
              <Image src={img3} className='h-[72px] w-auto object-contain' />
              <span className='leading-[35px]'>Associate Partner</span>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[50px] mb-[42px] max-w-[1400px] mx-auto'>
        <div>
          <h4 className='font-medium text-[20px] mb-3'>Products</h4>
          <p className='leading-[35px]'>
            Air Admittance Valve | Aquarius | Aquarius+ | Aquasafe | Back Flow
            Preventer Valve | Basin Trap | Bore-well | Case-Well | Chem Pro
            Clamps & Hangers | Cleo | CPVC PRO | D-Rex | Delta | Drain Hulk |
            Drain Pro | Drain Top | Drainmaster | Droplet | ECO PRO | Fire pro |
            Foamcore | Geo-Rex | Gully Trap | Insu PRO | MultiPex | Opta | Pex-a
            PRO | Pio | Pipe Fix | Plus+StiRex | Power Drain | Power Flex |
            Pre-StiRex | Rainway | Sarita | Silencio | Sylo | TeleRex |
            Thermoplastic Ball Valve | Underground | Vito | WELD-ON | Wire Guard
            | Y-STRAINER
          </p>
        </div>
      </div>
      <div className='max-w-[1400px] mx-auto'>
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

      <div className='text-center mt-8 bg-[#EEECEC80] pb-[18px]'>
        <div className='flex justify-center flex-col items-center gap-y-2'>
          <div className='h-[50px] w-[50px] bg-[#0D63AD] rounded-full flex items-center justify-center mt-[-20px]'>
            <FaArrowUp className='text-white text-[22px]' />
          </div>
          <p className=''>© 2024-2025 ASTRAL PIPES ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}
