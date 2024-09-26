import Image from "next/image";
import aboutimg from "../../assets/images/aboutimg.png";
import playbtn from "../../assets/images/playbtn.png";

export default function About() {
  return (
<div className='grid md:grid-cols-2 max-w-[1400px] mx-auto gap-x-16 py-[50px] md:py-[100px] px-6'>
  <div className='relative order-1 md:order-2 mb-6 md:mb-0'>
    <Image
      src={aboutimg}
      alt='about video'
      className='max-h-[467px] max-w-[706px] h-full w-full'
    />
    <Image
      src={playbtn}
      alt='play button'
      className='absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
    />
  </div>


  <div className='flex flex-col order-2 md:order-1'>
    <h2 className="font-medium text-[24px] md:text-[35px] leading-[35px] mb-[15px] md:mb-[25px]">India's No.1 Pipe Brand</h2>
    <p className="text-[16px] md:text-[18px] leading-[30px] mb-[20px] md:mb-[30px]">
      Born in <span className="text-[#0D63AD]">Gujarat in 1996,</span> Astral Pipes has revolutionized the piping
      industry with world-class, innovative solutions. <span className="text-[#0D63AD]">A pioneer in bringing
      CPVC to India</span> and launching the country’s first lead-free uPVC pipes,
      Astral sets the benchmark for quality and innovation. Known for its
      commitment to uncompromised excellence, Astral continues to shape the
      industry and deliver cutting-edge piping technologies, making waves
      both in India and globally.
    </p>
    <div className='grid grid-cols-3 gap-4 mb-[30px]'>
      <div>
        <h3 className="text-[30px] md:text-[50px] font-bold text-[#0D63AD]">31+</h3>
        <span className="text-[16px] md:text-[18px] leading-[30px]">Countries Served</span>
      </div>
      <div>
        <h3 className="text-[30px] md:text-[50px] font-bold text-[#0D63AD]">8.5k+</h3>
        <span className="text-[16px] md:text-[18px] leading-[30px]">Employee</span>
      </div>
      <div>
        <h3 className="text-[30px] md:text-[50px] font-bold text-[#0D63AD]">25</h3>
        <span className="text-[16px] md:text-[18px] leading-[30px]">Manufacturing</span>
      </div>
    </div>
    <div className='flex gap-x-[10px]'>
      <button className="bg-[#0D63AD] text-white text-[16px] md:text-lg py-[13px] px-[23px]">Read More</button>
      <button className="border border-[#0d63ad] text-[#0D63AD] text-[16px] md:text-lg py-[13px] px-[25px]">Astral Group</button>
    </div>
  </div>
</div>

  );
}
