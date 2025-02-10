import Header from "./components/Header/header";
import HeroCallingBanner from "./components/hero-calling-banner/hero-calling-banner";
import HeroPrivateBanner from "./components/hero-private-banner/hero-private-banner";
import HeroVideoBanner from "./components/hero-video-banner/hero-video-banner";
import HeroBanner from "./components/HeroBanner/heroBanner";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroBanner />
      <HeroVideoBanner />
      <HeroCallingBanner />
      <HeroPrivateBanner />
    </div>
  );
}
