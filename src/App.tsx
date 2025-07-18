import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface TagListProps {
  title: string;
  tags: string[];
}

function TagList({ title, tags }: TagListProps) {
  return (
    <section className="mt-8 px-6 max-w-5xl mx-auto">
      <h2 className="text-white text-lg font-semibold mb-4">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer border-none py-1.5 px-4"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </section>
  );
}

interface SearchBarProps {
  initialValue: string;
  onSearch: (search: string) => void;
  className?: string;
}

function SearchBar({ initialValue, onSearch, className }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState(initialValue);
  const isMobile = useIsMobile();

  const handleSearch = () => {
    if (searchValue.trim()) {
      onSearch(searchValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={cn(
      "flex items-center bg-black/80 px-4 py-2 rounded-full w-full max-w-xl shadow-lg",
      className
    )}>
      <Search className="text-gray-400 mr-3" size={20} aria-hidden="true" />
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-10"
        aria-label="Search for words, phrases and meanings"
      />
      <Button 
        className="bg-blue-600 hover:bg-blue-700 text-white ml-4 px-6"
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
}

function HeroSection() {
  const handleSearch = (search: string) => {
    console.log(search);
    // implementing the search logic is not required for this task
  };

  return (
    <section className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8">
      <img 
        src="/task1/hero-bg.png" 
        className="w-full h-[24rem] object-cover" 
        alt="Dictionary background"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl">
          Search for words, phrases and meanings
        </h1>
        <SearchBar 
          initialValue="" 
          onSearch={handleSearch} 
          className="mt-8"
        />
      </div>
    </section>
  );
}

function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
      <div className="flex items-center gap-2">
        <img src="/task1/logo.png" alt="Wortionary Logo" className="w-8 h-8" />
        <span className="text-white font-semibold text-lg">Wortionary</span>
      </div>

      {!isMobile && (
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
              size={16} 
              aria-hidden="true" 
            />
            <Input
              type="search"
              placeholder="Search"
              className="pl-9 bg-gray-800 text-white border-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full h-9 w-[200px]"
              aria-label="Search"
            />
          </div>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/avatar.jpg" alt="User profile" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      )}
    </header>
  );
}

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
    <main className="bg-black min-h-screen text-white">
      <Header />
      <HeroSection />
      <TagList title="Trending" tags={trendingTags} />
      <TagList title="For you" tags={forYouTags} />
    </main>
  );
}