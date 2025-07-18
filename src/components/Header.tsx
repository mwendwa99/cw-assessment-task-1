import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
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