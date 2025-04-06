import Header from '@/components/Header';
import SearchBar from "@/components/SearchBar";
import FilterByRegion from "@/components/FilterByRegion";
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <div className="grid">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* TODO: finish both the searchbar and the filter*/}
        <SearchBar />
        <FilterByRegion />
        <Cards />
      </main>
    </div>
  );
}
