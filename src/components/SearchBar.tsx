import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  initialValue: string;
  onSearch: (search: string) => void;
  className?: string;
  placeholder?: string;
}

export function SearchBar({ 
  initialValue = "", 
  onSearch, 
  className,
  placeholder = "Type to search..." 
}: SearchBarProps) {
  const [searchValue, setSearchValue] = useState(initialValue);

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
        placeholder={placeholder}
        className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-10"
        aria-label={placeholder}
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