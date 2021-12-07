import { useState, useEffect } from 'react';
import './main.css';
import CountryCard from '../countryCard/countryCard';
import { getCountries } from '../../services/countries';

export default function Main() {
  const [country, setCountry] = useState([]);
  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountry(data);
    };
    fetchData();
  }, []);

  function filterCountries() {
    return country.filter((c) => {
      return c.name.includes(query);
    });
  }
  return (
    <section className="main">
      <input
        placeholder="search countries"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <select value={continent} onChange={(e) => setContinent(e.target.value)}>
        <option value="">All</option>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="north-america">North America</option>
        <option value="south-america">South America</option>
        <option value="antarctica">Antarctica</option>
        <option value="australia">Australia</option>
      </select>

      <div className="cards">
        {filterCountries().map((item) => {
          return <CountryCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
