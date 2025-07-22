import { Heebo } from "next/font/google";
import Image from "next/image";

const heebo = Heebo({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="my-[66px] p-6 mx-auto max-w-[1030px] w-full h-auto md:h-[308px] flex flex-col-reverse md:flex-row items-center justify-between">
      
      {/* Text Content */}
      <div className="w-full md:w-[521px] h-auto md:h-[305px] flex flex-col justify-between items-start text-left gap-6 md:gap-0">
        <h1 className={`${heebo.className} text-[36px] md:text-[48px] font-black myBlack leading-tight`}>
          Hi, I am John, <br />
          Creative Technologist
        </h1>
        <p className={`${heebo.className} text-[16px] font-normal myBlack`}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button
          className={`${heebo.className} w-[205px] h-[50px] bg-myPink text-white text-[18px] font-medium rounded-sm shadow-md shadow-black/60`}
        >
          Download Resume
        </button>
      </div>

      {/* Image */}
      <div className="relative w-[292px] h-[299px] mb-6 md:mb-0">
        <Image
          className="z-50"
          src="/assets/image.png"
          alt="image"
          width={292}
          height={299}
        />
        <div className="heroElipse w-[292px] h-[299px] -z-10 rounded-full absolute top-2 right-2" />
      </div>
    </div>
  );
};

export default Hero;
