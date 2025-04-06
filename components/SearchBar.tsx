'use client';

import { Input } from "@/components/ui/input";

// TODO: add event for handling search input
const SearchBar = () => {

  const inputChaning = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }

  return (
    <Input onChange={inputChaning} type="text" placeholder="Search for a country..." />
  )
};

export default SearchBar;