import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TagList } from "@/components/TagList";

export default function App() {
  // Separate trending and for you tags for better maintainability
  const trendingTags = [
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ];
  
  const forYouTags = [
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ];

  return (
    <main className="bg-[#121417] min-h-screen text-white">
      <Header />
      <HeroSection />
      <TagList title="Trending" tags={trendingTags} />
      <TagList title="For you" tags={forYouTags} />
    </main>
  );
}