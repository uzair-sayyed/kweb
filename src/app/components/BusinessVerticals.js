import vert1 from "../../assets/images/vert1.png";
import vert2 from "../../assets/images/vert2.png";
import vert3 from "../../assets/images/vert3.png";
import vert4 from "../../assets/images/vert4.png";
import vert5 from "../../assets/images/vert5.png";
import Image from "next/image";

export default function BusinessVerticals() {
  return (
    <div
      className=' bg-[#f6f5f5] pb-10 '
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-[20px] md:mb-[60px]">
          <h2 className='text-[24px] md:text-[35px] font-medium pt-8'>
            Our Business Verticals
          </h2>
        </div>
        <div className='grid text-center grid-cols-3 md:grid-cols-5 gap-16 md:pt-4'>
          <div className=' h-[134px] flex flex-col gap-y-3'>
            <Image src={vert1} alt='Adhesives, Sealants & Putty' className="h-[84px] w-auto object-contain mix-blend-multiply" />
            <p>Adhesives, Sealants & Putty</p>
          </div>
          <div className=' h-[134px] flex flex-col gap-y-3'>
            <Image src={vert2} alt='Faucets & Sanitaryware' className="h-[84px] w-auto object-contain mix-blend-multiply" />
            <p>Faucets & Sanitaryware</p>
          </div>
          <div className=' h-[134px] flex flex-col gap-y-3'>
            <Image src={vert3} alt='Interior & Exterior Paints' className="h-[84px] w-auto object-contain mix-blend-multiply" />
            <p>Interior & Exterior Paints</p>
          </div>
          <div className=' h-[134px] flex flex-col gap-y-3'>
            <Image src={vert4} alt='Construction Chemicals & Waterproofing' className="h-[84px] w-auto object-contain mix-blend-multiply" />
            <p>Construction Chemicals & Waterproofing</p>
          </div>
          <div className=' h-[134px] flex flex-col gap-y-3'>
            <Image src={vert5} alt='Adhesives, Sealants & Putty' className="h-[84px] w-auto object-contain mix-blend-multiply" />
            <p>Adhesives, Sealants & Putty</p>
          </div>
        </div>
      </div>
    </div>
  );
}
