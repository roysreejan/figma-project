import Link from "next/link";
import { Heebo } from "next/font/google";
import RecentPostCard from "./RecentPostCard";

const heebo = Heebo({ subsets: ["latin"] });

const RecentPost = () => {
  return (
    <div className="recentBackground my-[66px] py-8 md:h-[502px] flex flex-col justify-evenly">
      <div className="w-full max-w-[1030px] px-6 mx-auto flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h2 className={`${heebo.className} text-[20px] md:text-[22px] font-medium`}>
            Recent Post
          </h2>
          <Link
            className={`${heebo.className} text-[20px] md:text-[22px] myPink font-medium`}
            href={""}
          >
            View all
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-4">
          <RecentPostCard />
          <RecentPostCard />
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
