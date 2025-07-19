import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  initialValue: string;
  onSearch: (search: string) => void;
  className?: string;
  placeholder?: string;
  compact?: boolean;
}

export function SearchBar({ 
  initialValue = "", 
  onSearch, 
  className,
  placeholder = "Type to search...",
  compact = false
}: SearchBarProps) {
  const [searchValue, setSearchValue] = useState(initialValue);

  // Update internal state when initialValue prop changes
  useEffect(() => {
    setSearchValue(initialValue);
  }, [initialValue]);

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

  if (compact) {
    return (
      <div className={cn("relative", className)}>
        <Search 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
          size={16} 
          aria-hidden="true" 
        />
        <Input
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="pl-9 bg-[#293038] text-[#9EABB8] border-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-9 w-[200px]"
          aria-label={placeholder}
        />
      </div>
    );
  }

  return (
    <div className={cn(
      "flex items-center bg-[#1C2126] px-4 py-2 rounded-[12px] w-full max-w-xl shadow-lg",
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
        className="bg-blue-600 hover:bg-blue-[#1A80E5] text-white ml-4 px-6"
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
}