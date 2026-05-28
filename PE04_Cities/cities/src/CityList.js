import { Link } from 'react-router-dom'

function CityList({ cities }) {
  return (
    <div>
      <h2>Available Cities</h2>

      <div className="city-grid">
        {cities.map((city) => (
          <div className="city-card" key={city.id}>
            <h3>{city.name}</h3>
            <p>{city.country}</p>

            <Link to={`/cities/${city.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityList;