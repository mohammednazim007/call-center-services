import ClientChatBanner from "./components/client-chat-banner/client-chat-banner";
import Header from "./components/Header/header";
import HeroCallingBanner from "./components/hero-calling-banner/hero-calling-banner";
import HeroPrivateBanner from "./components/hero-private-banner/hero-private-banner";
import HeroSecureBanner from "./components/hero-secure-banner/hero-secure-banner";
import HeroVideoBanner from "./components/hero-video-banner/hero-video-banner";
import HeroBanner from "./components/HeroBanner/heroBanner";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroBanner />
      <HeroVideoBanner />
      <HeroCallingBanner />
      <ClientChatBanner />
      <HeroPrivateBanner />
      <HeroSecureBanner />
    </div>
  );
}
