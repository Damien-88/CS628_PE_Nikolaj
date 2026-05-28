import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCity({ addCity }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    country: '',
    population: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const newCity = {
      id: Date.now(),
      ...formData
    };

    addCity(newCity);
    navigate('/cities');
  };

  return (
    <div className="form-container">
      <h2>Add New City</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="City Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="population"
          placeholder="Population"
          value={formData.population}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <button type="submit">Add City</button>
      </form>
    </div>
  );
};

export default AddCity;