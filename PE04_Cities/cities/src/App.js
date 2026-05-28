import { Routes, Route, Navigate, Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

import CityList from './CityList';
import CityDetails from './CityDetails';
import AddCity from './AddCity';

function Layout() {
  return (
    <div className="container">
      <header>
        <h1>Cities Application</h1>

        <nav>
          <Link to="/cities">Cities List</Link>
          <Link to="/add-city">Add City</Link>
        </nav>
      </header>

      <Outlet />
    </div>
  );
};

function App() {
  const [cities, setCities] = useState([]);

  const addCity = (city) => {
    setCities([...cities, city])
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/cities" />} />

      <Route path="/cities" element={<Layout />}>
        <Route index element={<CityList cities={cities} />} />

        <Route
          path=":id"
          element={<CityDetails cities={cities} />}
        />
      </Route>

      <Route
        path="/add-city"
        element={<AddCity addCity={addCity} />}
      />
    </Routes>
  );
};

export default App;