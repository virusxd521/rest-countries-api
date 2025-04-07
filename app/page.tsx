"use client"

import { useQuery } from "@tanstack/react-query";
import { useEffect,useState } from "react";

import Cards from "@/components/Cards";
import FilterByRegion from "@/components/FilterByRegion";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import useCountryFilter from "@/hooks/UseCountryFilter";
import { fetchCountries } from "@/services/countries";

export default function Home() {
  const [initialCountries, setInitialCountries] = useState([]);

  const { data: allCountries, isLoading: isAllCountriesLoading, error: allCountriesError } = useQuery<any>({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  const {
    searchTerm,
    setSearchTerm,
    selectedRegion,
    setSelectedRegion,
    filteredCountries,
    isLoading : isFilteredCountriesLoading,
    error : filteredCountriesError,
  } = useCountryFilter();

  useEffect(() => {
    if (allCountries && allCountries.length > 0) {
      setInitialCountries(allCountries.slice(0,6));
    }
  }, [allCountries])

  const displayCountries = initialCountries.length > 0 ? initialCountries : filteredCountries;
  const isLoading = isAllCountriesLoading || isFilteredCountriesLoading;
  const isError = allCountriesError || filteredCountriesError;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: Something went wrong.</p>;

  // TODO: add skeleton loading state 
  return (
    <div className="grid">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <FilterByRegion value={selectedRegion} onChange={setSelectedRegion} />
        <Cards countries={displayCountries} />
      </main>
    </div>
  );
}
