import Header from '@/components/Header';
import SearchBar from "@/components/SearchBar";
import FilterByRegoin from "@/components/FilterByRegion";

export default function Home() {
  return (
    // TODO: fix grid styling
    <div className="grid">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* TODO: finish both the searchbar and the filter*/}
        <SearchBar />
        <FilterByRegoin />
      </main>
    </div>
  );
}
