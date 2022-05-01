import React, { useState } from "react";
import "./App.css";
import SearchPage from "./Components/SearchPage/SearchPage";
import CountryInfoPage from "./Components/CountryInfoPage/CountryInfoPage";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

function App() {
  let [country, setCountry] = useState<string>("");

  function handleSubmit(country: string) {
    setCountry(country);
  }

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<SearchPage handleSubmit={handleSubmit} />}
          />
          <Route
            path="/countryinfo/:country"
            element={<CountryInfoPage countryName={country} />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
