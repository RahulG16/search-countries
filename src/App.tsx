import React, { useState } from "react";
import "./App.css";
import SearchPage from "./Components/SearchPage/SearchPage";
import CountryInfoPage from "./Components/CountryInfoPage/CountryInfoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let [country, setCountry] = useState<string>("");

  function handleSubmit(country: string) {
    setCountry(country);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/search-countries"
            element={<SearchPage handleSubmit={handleSubmit} />}
          />
          <Route
            path="/search-countries/countryinfo/:country"
            element={<CountryInfoPage countryName={country} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
