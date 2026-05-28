import { useParams } from 'react-router-dom'

function CityDetails({ cities }) {
  const { id } = useParams();
  const city = cities.find((city) => city.id === Number(id));

  if (!city) {
    return <h2>City not found</h2>
  };

  return (
    <div className="details-card">
      <h2>{city.name}</h2>

      <p>
        <strong>Country:</strong> {city.country}
      </p>

      <p>
        <strong>Population:</strong> {city.population}
      </p>

      <p>
        <strong>Description:</strong> {city.description}
      </p>
    </div>
  );
};

export default CityDetails;