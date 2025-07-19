import { SearchBar } from "@/components/SearchBar";

export function HeroSection() {
  const handleSearch = (search: string) => {
    console.log(search);
  };

  return (
    <section 
      className="relative w-full max-w-5xl mx-auto rounded-[12px] overflow-hidden mt-8"
      aria-labelledby="hero-heading"
    >
      <img 
        src="/task1/hero-bg.png" 
        className="w-[928px] h-[480px] object-contain" 
        alt=""
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 id="hero-heading" className="text-[48px] font-bold text-white max-w-3xl">
          Search for words, phrases and meanings
        </h1>
        <SearchBar 
          initialValue="" 
          onSearch={handleSearch} 
          className="mt-8 bg-[#1C2126]"
        />
      </div>
    </section>
  );
}