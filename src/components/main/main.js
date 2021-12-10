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
      return (
        c.name.toLowerCase().includes(query) && (c.continent === continent || continent === 'All')
      );
    });
  }

  return (
    <section className="main">
      <div className="search">
        <input
          placeholder="search by name"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value.toLowerCase());
          }}
        />
        <select value={continent} onChange={(e) => setContinent(e.target.value)}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="cards">
        {filterCountries().map((item) => {
          return <CountryCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
