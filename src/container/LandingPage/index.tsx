import FAQ from "@/container/LandingPage/FAQ";
import HeroSection from "@/container/LandingPage/HeroSection";
import FeaturesSection from "./Features";
import TypesOfContent from "./TypesOfContent";
import TrustedByBrands from "./TrustedByBrands";
import HowItWorks from "./HowItWorks";


export default function LandingPage() {
  return (
   <>
   <HeroSection/>
   <FeaturesSection/>
   <TrustedByBrands/>
   <TypesOfContent/>
   <HowItWorks/>
   <FAQ/>
   </>
  );
}
