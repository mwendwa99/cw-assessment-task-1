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
    <header className="flex items-center justify-between px-6 py-4 bg-[#121417] border-b border-white">
      <div className="flex items-center gap-2">
        <img src="/task1/logo.png" alt="Worctionary Logo" className="w-8 h-8" />
        <span className="text-white font-semibold text-[18px]">Worctionary</span>
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
            <AvatarImage src="/task1/avatar.png" alt="User profile" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      )}
    </header>
  );
}