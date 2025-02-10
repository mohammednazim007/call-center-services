import Header from "./components/Header/header";
import HeroVideoBanner from "./components/hero-video-banner/hero-video-banner";
import HeroBanner from "./components/HeroBanner/heroBanner";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroBanner />
      <HeroVideoBanner />
    </div>
  );
}
