import React, { useState } from "react";

import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    contry: "IN",
    deg: 249,
    feelsLike: 34.94,
    gust: 9.96,
    humidity: 68,
    name: "Jūnāgadh",
    speed: 8.21,
    temp: 30.16,
    tempMax: 30.16,
    tempMin: 30.16,
    weather: "overcast clouds",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </>
  );
}

export default WeatherApp;
