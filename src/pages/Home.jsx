import Hero from "../components/home/Hero";
import AvailabilityStrip from "../components/home/AvailabilityStrip";
import Intro from "../components/home/Intro";
import RecentBrides from "../components/home/RecentBrides";
import PackagesPreview from "../components/home/PackagesPreview";
import AboutFeeniya from "../components/home/AboutFeeniya";
import HowItWorks from "../components/home/HowItWorks";
import Faq from "../components/home/Faq";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AvailabilityStrip />
      <Intro />
      <RecentBrides />
      <PackagesPreview />
      <AboutFeeniya />
      <HowItWorks />
      <Faq />
      <Footer />
    </>
  );
}
