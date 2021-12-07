import './countryCard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="country-card">
      <p className="name">{name}</p>
      <div className="image">
        <img src={`https://flagcdn.com/84x63/${iso2.toLowerCase()}.png`}></img>
      </div>
    </div>
  );
}
