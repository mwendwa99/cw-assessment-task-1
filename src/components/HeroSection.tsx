import { SearchBar } from "@/components/SearchBar";

export function HeroSection() {
  const handleSearch = (search: string) => {
    console.log(search);
    // implementing the search logic is not required for this task
  };

  return (
    <section 
      className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8"
      aria-labelledby="hero-heading"
    >
      <img 
        src="/task1/hero-bg.png" 
        className="w-full h-[24rem] object-cover" 
        alt=""
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 id="hero-heading" className="text-3xl md:text-5xl font-bold text-white max-w-3xl">
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