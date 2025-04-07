import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilterByRegionProps {
  value: string;
  onChange: (value: string) => void;
}

const FilterByRegion: React.FC<FilterByRegionProps> = ({ value, onChange }) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter by Region" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Regions</SelectLabel>
          <SelectItem value="test-for-now">All Regions</SelectItem>
          {regions.map((region) => (
            <SelectItem key={region} value={region}>
              {region}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterByRegion;