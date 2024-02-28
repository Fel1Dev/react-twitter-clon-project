import { Country } from "../pages/countries/Countires.Page";

export interface CountryProps {
  country: Country;
}

const CountryCard = (props: CountryProps): JSX.Element => {
  return <li>{props.country.name.common}, {props.country.capital}</li>;
};

export default CountryCard;
