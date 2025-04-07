import { useQuery} from "@tanstack/react-query";
import { useCallback,useState } from "react";

import { fetchCountries } from "@/services/countries";


const useCountryFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const {data: allCountries, isLoading, error} = useQuery<any>({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  })
  
  const filteredCountries = useCallback(() => {
    if (!allCountries) return;

    return allCountries
      .filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((country) =>
        selectedRegion ? country.region === selectedRegion : true
      )
      .slice(0, 6);

  }, [allCountries, searchTerm, selectedRegion])

  return {
    searchTerm,
    setSearchTerm,
    selectedRegion,
    setSelectedRegion,
    filteredCountries: filteredCountries(),
    isLoading,
    error,
  }
}

export default useCountryFilter;