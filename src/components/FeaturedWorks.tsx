import { Heebo } from "next/font/google";
import Image from "next/image";

const heebo = Heebo({ subsets: ["latin"] });

const cardData = [
  {
    image: "/assets/Rectangle 30.png",
    title: "Designing Dashboards",
    year: "2025",
    tag: "Dashboard",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    image: "/assets/Rectangle 32.png",
    title: "Designing Dashboards",
    year: "2025",
    tag: "Dashboard",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    image: "/assets/Rectangle 34.png",
    title: "Designing Dashboards",
    year: "2025",
    tag: "Dashboard",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

const FeaturedWorks = () => {
  return (
    <div className="max-w-[919px] w-full mx-auto px-4 sm:px-6 lg:px-0">
      <h2 className={`${heebo.className} text-[22px] font-medium`}>
        Featured works
      </h2>

      <div className="flex flex-col gap-[111px] mt-8">
        {cardData.map((card, i) => (
          <div
            key={i}
            className="flex flex-col lg:flex-row gap-4 w-full rounded-lg"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={246}
              height={184}
              className="w-full max-w-[246px] h-[184px] object-cover rounded-lg"
            />
            <div className="flex flex-col justify-center w-full h-full pt-4 lg:pt-0 px-1 lg:px-5">
              <h2
                className={`${heebo.className} text-[24px] sm:text-[26px] lg:text-[30px] font-bold`}
              >
                {card.title}
              </h2>
              <div className="flex items-center gap-x-5 mt-2 h-[24px]">
                <div className="w-[68px] h-[24px] flex items-center justify-center bg-myPink rounded-full">
                  <p
                    className={`${heebo.className} text-[14px] font-bold text-white`}
                  >
                    {card.year}
                  </p>
                </div>
                <p
                  className={`${heebo.className} text-[18px] sm:text-[20px] font-normal text-black/62`}
                >
                  {card.tag}
                </p>
              </div>
              <p
                className={`${heebo.className} text-[16px] sm:text-[17px] lg:text-[18px] font-light text-black mt-4`}
              >
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedWorks;
