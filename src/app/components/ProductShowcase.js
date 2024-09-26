
import ProductShowcaseSlider from "./ProductShowcaseSlider";

export default function ProductShowCase() {
  return (
    <div className='border-t-[#00000033] border-t-[1px]'>
      <div className='max-w-[1400px] mx-auto relative pt-[32px] md:pt-[64px] px-6'>
        <div className='flex-col md:flex gap-x-[110px]'>
          <h2 className='max-w-[385px] text-[24px] md:text-[35px] font-medium leading-[50px] basis-[100%]'>
            Born in Gujrat, India making waves across the world
          </h2>
          <p className='text-[16px] md:text-[18px] leading-[30px]'>
            Astral stands for innovation and setting new trends in the piping
            industry. Bringing newer piping technologies and continuous
            innovation in existing as well as new products has been the focal
            point at Astral. This special emphasis helps the brand set the bar
            higher and lead amongst others by example.
          </p>
        </div>
      </div>
      <div className='bg-[#EEECEC80] w-full '>
        <div className='max-w-[1400px] mx-auto '>
          <div className='mt-[73px]'>
            <h2 className='text-[24px] md:text-[35px] font-medium leading-[50px] pt-6 md:pt-[73px] px-6 md:px-0'>
              {" "}
              We have the best quality products
            </h2>
          </div>

          <div>
            <ProductShowcaseSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
