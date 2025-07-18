import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import { SearchBar } from "./SearchBar";

export function Header() {
  const isMobile = useIsMobile();

  const handleSearch = (search: string) => {
    console.log("Header search:", search);
    // implementing the search logic is not required for this task
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
      <div className="flex items-center gap-2">
        <img src="/task1/logo.png" alt="Wortionary Logo" className="w-8 h-8" />
        <span className="text-white font-semibold text-lg">Wortionary</span>
      </div>

      {!isMobile && (
        <div className="flex items-center gap-4">
          <SearchBar
            initialValue=""
            onSearch={handleSearch}
            placeholder="Search"
            compact={true}
          />
          <Avatar className="w-8 h-8">
            <AvatarImage src="/avatar.jpg" alt="User profile" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      )}
    </header>
  );
}