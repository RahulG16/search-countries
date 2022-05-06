import React, {useEffect, useState} from "react";
import "./CountryInfoPage.css";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Modal from "./Modal";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#252b32",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
  height: "120px",
}));

function InfoBox({ countryInfo }: any) {

  let [weatherInfo, setWeatherInfo] = useState<any>({})

  let API_Key = "195ad91fafc3f5e4e14596f1b639bac7";

  useEffect(() => {
    getWeatherInfo(countryInfo.capital[0]);
  }, [countryInfo])

  async function getWeatherInfo(capital: string) {
    let response = await fetch(
      `http://api.weatherstack.com/current?access_key=${API_Key}&query=${capital}`
    );
    let data = await response.json();
    
    setWeatherInfo(data);
  }

  return (
    <Box
      className="container"
      sx={{
        flexGrow: 1,
        height: "auto",
        backgroundColor: "#1a2027",
        padding: "25px",
        borderRadius: "10px",
      }}
    >
      <header className="title">About {countryInfo.name.common}</header>
      <Grid container spacing={2}>
        <Grid item xs={4} className="capital-box">
          <Item>
            {weatherInfo.success !== false && Object.keys(weatherInfo).length > 2 ? (
              <Modal weatherData={weatherInfo} />
            ) : (
              <h3>Capital</h3>
            )}
            <h1>{countryInfo.capital[0]}</h1>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <h3>Populution: </h3>
            <h1>{countryInfo.population}</h1>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className="flat">
            <h3>Latitude: </h3>
            <h1>{countryInfo.latlng[0]}</h1>
            <h3>Longitude : </h3>
            <h1>{countryInfo.latlng[1]}</h1>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item className="flat">
            <img
              src={countryInfo.flags.png}
              alt="flag-img"
              className="flag-img"
            />
          </Item>
        </Grid>
        <Grid item xs={3.5}>
          <Item>
            <h3>Sub Region: </h3>
            <h1>{countryInfo.subregion}</h1>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <h3>Area: </h3>
            <h2>
              {countryInfo.area} km<sup>2</sup>
            </h2>
          </Item>
        </Grid>
        <Grid item xs={4.5}>
          <Item>
            <h3>Official Name: </h3>
            <h2>
              {countryInfo.name.official}
            </h2>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default InfoBox;
