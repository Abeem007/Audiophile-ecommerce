import Image from "next/image";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import ZX9SpeakerSection from "./components/ZX9SpeakerSection";
import EarphonesSection from "./components/EarphonesSection";
import ZX7SpeakerSection from "./components/ZX7SpeakerSection";
import ManSection from "./components/ManSection";

export default function Home() {
  return (
    <main >
      <HeroSection  />
      <CategorySection />
      <ZX9SpeakerSection />
      <ZX7SpeakerSection />
      <EarphonesSection />
      <ManSection />

    </main>
  );
}
