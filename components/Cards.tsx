'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchCountries } from "@/services/countries";
import { useQuery } from '@tanstack/react-query';

const Cards = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  // TODO: add key
  // TODO: add context for searching  and filtering
  return (
    <>
      {
        data?.length > 0 && data.map((country: any) => (
          <Card>
            <CardHeader>
              <CardTitle>{country.name}</CardTitle>
              <CardDescription>{country.region}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Capital: {country.capital}</p>
              <p>Population: {country.population}</p>
            </CardContent>
            <CardFooter>
            </CardFooter>
          </Card>
        ))
      }
    </>

  )
}

export default Cards;