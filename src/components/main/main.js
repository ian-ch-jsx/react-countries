import { useState, useEffect } from 'react';
import './main.css';
import CountryCard from '../countryCard/countryCard';
import { getCountries } from '../../services/countries';

export default function Main() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountry(data);
    };
    fetchData();
  }, []);
  return (
    <section className="main">
      {country.map((item) => {
        return <CountryCard key={item.id} {...item} />;
      })}
    </section>
  );
}
