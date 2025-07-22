import FeaturedWorks from "@/components/FeaturedWorks";
import Hero from "@/components/Hero";
import RecentPost from "@/components/RecentPost";

export default function Home() {
  return (
    <div>
      <Hero />
      <RecentPost />
      <FeaturedWorks />
    </div>
  );
}
