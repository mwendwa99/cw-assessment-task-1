import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import { SearchBar } from "./SearchBar";
import { useState } from "react";
import {  Menu } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export function Header() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const handleSearch = (search: string) => {
    setOpen(false);
    console.log("Header search:", search);
  };

  return (
    <header className={`flex items-center justify-between px-4 py-3 bg-[#121417] border-b border-white ${isMobile ? "flex-col gap-3" : "px-6 py-4"} relative`}>
      <div className="flex items-center gap-2 w-full justify-between">
        <div className="flex items-center gap-2">
          {isMobile && (
            <button onClick={() => setOpen(true)} className="p-2"><Menu className="text-white w-6 h-6" /></button>
          )}
          <img src="/task1/logo.png" alt="Worctionary Logo" className="w-8 h-8" />
          <span className="text-white font-semibold text-[18px]">Worctionary</span>
        </div>
        {!isMobile && (
          <div className="flex items-center gap-4 w-auto mt-0">
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
      </div>
      {isMobile && (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="left" className="p-6 flex flex-col gap-8 w-100" style={{ backgroundColor: '#293038' }}>
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex justify-center mt-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="/task1/avatar.png" alt="User profile" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </div>
              <SearchBar
                initialValue=""
                onSearch={handleSearch}
                placeholder="Search"
                compact={false}
                className="w-full"
              />
            </div>
          </SheetContent>
        </Sheet>
      )}
    </header>
  );
}