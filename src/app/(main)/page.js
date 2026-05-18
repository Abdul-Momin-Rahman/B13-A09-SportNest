import BannerSection from "@/components/BannerSection";
import ChooseUsSection from "@/components/ChooseUsSection";
import ExtraSection from "@/components/ExtraSection";
import FeaturedSection from "@/components/FeaturedSection";


export default function Home() {
  return (
    <div>
      <BannerSection></BannerSection>
      <FeaturedSection></FeaturedSection>
      <ChooseUsSection></ChooseUsSection>
      <ExtraSection></ExtraSection>
    </div>
  );
}
