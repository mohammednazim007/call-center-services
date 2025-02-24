import ClientChatBanner from "./components/client-chat-banner/client-chat-banner";
import HeroCallingBanner from "./components/hero-calling-banner/hero-calling-banner";
import HeroPrivateBanner from "./components/hero-private-banner/hero-private-banner";
import HeroSecureBanner from "./components/hero-secure-banner/hero-secure-banner";
import HeroTranslationBanner from "./components/hero-translation-banner/hero-translation-banner";
import HeroVerticalReviews from "./components/hero-vertical-review/hero-vertical-reviews";
import HeroVideoBanner from "./components/hero-video-banner/hero-video-banner";
import HeroBanner from "./components/HeroBanner/heroBanner";

export default async function Home() {
  await setTimeout(() => {
    console.log("Home page loaded");
  }, 5000);
  return (
    <div className="">
      <HeroBanner />
      <HeroVideoBanner />
      <HeroCallingBanner />
      <ClientChatBanner />
      <HeroPrivateBanner />
      <HeroSecureBanner />
      <HeroTranslationBanner />
      <HeroVerticalReviews />
    </div>
  );
}
