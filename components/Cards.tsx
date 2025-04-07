import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Country {
  name: string;
  region: string;
  capital: string;
  population: number;
}

interface CardsProps {
  countries: Country[];
}

const Cards: React.FC<CardsProps> = ({ countries }) => {
  return (
    <>
      {countries?.map((country) => (
        <Card key={country.name}>
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
      ))}
    </>
  );
};

export default Cards;