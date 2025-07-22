import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"] });

const RecentPostCard = () => {
  return (
    <div className="w-full md:w-[483px] h-auto md:h-[356px] flex items-center bg-white p-6 md:p-0">
      <div className="m-auto w-full md:w-[391px] h-auto md:h-[286px] flex flex-col items-start justify-between gap-6 md:gap-4">
        <h2 className={`${heebo.className} text-[22px] md:text-[26px] font-bold`}>
          Making a design system from scratch
        </h2>

        <div className="flex flex-wrap gap-2 items-center text-[16px] md:text-[18px] text-black/70">
          <p className={`${heebo.className}`}>22 July 2025</p>
          <span>|</span>
          <p className={`${heebo.className}`}>Design, Pattern</p>
        </div>

        <p className={`${heebo.className} text-[14px] md:text-[16px]`}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  );
};

export default RecentPostCard;