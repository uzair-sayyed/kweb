import vert1 from "../../assets/images/vert1.png";
import vert2 from "../../assets/images/vert2.png";
import vert3 from "../../assets/images/vert3.png";
import vert4 from "../../assets/images/vert4.png";
import vert5 from "../../assets/images/vert5.png";
import Image from "next/image";
import bgImg from "../../assets/images/verticalbg.png";

export default function BusinessVerticals() {
  return (
    <div
      className=' bg-cover bg-no-repeat h-[376px]'
      style={{ backgroundImage: `url(${bgImg.src})` }} // Using inline style for the background image
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-[60px]">
          <h2 className='text-[35px] font-medium pt-8'>
            Our Business Verticals
          </h2>
        </div>
        <div className='grid text-center md:grid-cols-5 gap-12 pt-4'>
          <div className=' h-[134px] flex flex-col gap-y-3'>
            <Image src={vert1} alt='Adhesives, Sealants & Putty' className="h-[84px] w-auto object-contain" />
            <p>Adhesives, Sealants & Putty</p>
          </div>
          <div className=' h-[134px] flex flex-col gap-y-3'>
            <Image src={vert2} alt='Faucets & Sanitaryware' className="h-[84px] w-auto object-contain" />
            <p>Faucets & Sanitaryware</p>
          </div>
          <div className=' h-[134px] flex flex-col gap-y-3'>
            <Image src={vert3} alt='Interior & Exterior Paints' className="h-[84px] w-auto object-contain" />
            <p>Interior & Exterior Paints</p>
          </div>
          <div className=' h-[134px] flex flex-col gap-y-3'>
            <Image src={vert4} alt='Construction Chemicals & Waterproofing' className="h-[84px] w-auto object-contain" />
            <p>Construction Chemicals & Waterproofing</p>
          </div>
          <div className=' h-[134px] flex flex-col gap-y-3'>
            <Image src={vert5} alt='Adhesives, Sealants & Putty' className="h-[84px] w-auto object-contain" />
            <p>Adhesives, Sealants & Putty</p>
          </div>
        </div>
      </div>
    </div>
  );
}
