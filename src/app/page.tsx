import LandingPage from "@/container/LandingPage";
import FAQ from "@/container/LandingPage/FAQ";
import HeroSection from "@/container/LandingPage/HeroSection";
import { redirect } from "next/navigation";


export default function Home() {
  redirect("/home");
  return null;
}
