// Create a simplke React aplication that displays a list of countries and their capitals.

import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryCard from '../../components/CountryCard';

//import { ListElement } from '../../components/ElemetList.tsx'

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

const FILTERABLE_CAPITALS: string[] = [
  'Tallinn',
  'Helsinki',
  'Stockholm',
  'Oslo',
  'Copenhagen',
  'Reykjavik',
] as const;

export type Capital = (typeof FILTERABLE_CAPITALS)[number];

export interface Country {
  name: {
    common: string;
  };
  capital: string;
}

const CountriesPage = () => {
  const [countries, setCountries] = useState<Country[]>();
  const [capital, setCapital] = useState<Capital>();

  useEffect(() => {
    console.log('effect');
    const url = `${BASE_URL}/all`;

    axios.get<Country[]>(url).then((response: any) => {
      setCountries(response.data as Country[]);
    });
  }, []);

  console.log('render', countries ? countries.length : 0, 'countries');

  return (
    <>
      <h1>React Countries Interview</h1>

      <div>
        <label>
          Select a Capital
          <select name="selectCapital">
            {FILTERABLE_CAPITALS.map((capital) => {
              return <option value={capital}>{capital}</option>;
            })}
          </select>
        </label>
      </div>

      {countries && (
        <div>
          <br />
          <div>
            {countries.map((country: Country) => (
              <CountryCard key={country.name.common} country={country} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CountriesPage;
