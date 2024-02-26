// Create a simplke React aplication that displays a list of countries and their capitals.

import { useEffect, useState } from 'react';
import axios from 'axios';

// The application should have the following features:

// The list of countries and capitals should be fetched from an API.
// The list should be displayed in the `CountriesPage`
// Each country should be displayed in a separated component.
// The user should be able to filter the list by capitals.

//import SELECt form "@/components/ui/Select";

/**
 * To get all countries cities, use the `/all` endpoint.
 */
const BASE_URL: String = 'https://restcountries.com/v3.1';

/**
 * To filter by capital city, use the `/capital/{capital}` endpint.
 */

const FILTERABLE_CAPITALS: String[] = [
  'Tallinn',
  'Helsinki',
  'Stockholm',
  'Oslo',
  'Copenhagen',
  'Reykjavik',
] as const;

type Capital = (typeof FILTERABLE_CAPITALS)[number];

interface Country {
  name: {
    common: string;
  };
  capital: string;
}

const CountriesPage = () => {
  const [countries, setCountries] = useState(String);

  useEffect(() => {
    console.log('effect');
    axios.get(`{BASE_URL}/all`).then((response) => {
      console.log(response);
      setCountries(response.data);
    });
  }, []);
  console.log('render', countries.length, 'countries');

  return (
    <>
      <div className="p-4">React Interview</div>
      <countries list={countries} />
    </>
  );
};

export default CountriesPage;
