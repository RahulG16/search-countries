import React, { useState, useEffect } from "react";
import InfoBox from "./InfoBox";

interface Props {
  countryName: string;
}

function CountryInfoPage({ countryName }: Props) {
  let [countryInfo, setCountryInfo] = useState<any>([]);

  useEffect(() => {
    
    if(countryName !== "") {
      localStorage.setItem('countryname', countryName)
    }

    fetchCountryInfo(localStorage.getItem('countryname') || '');
  }, [countryName]);

  const fetchCountryInfo = async (country: string) => {
    let response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    let data = await response.json();
    
    setCountryInfo(data);
  };

  return (
    <div>
      {countryInfo.length > 0 ? (
        <InfoBox countryInfo={countryInfo[0]} />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default CountryInfoPage;
