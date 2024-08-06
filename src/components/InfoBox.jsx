import React from "react";
import "./InfoBox.css";
function InfoBox({ info }) {
  const cold_url = <img src="../assets/cloudy-night-3.svg" />;
  const hot_url = <img src="../assets/cloudy-day-3.svg" />;
  const rain_url = <img src="../assets/rainy-7.svg" />;

  return (
    <div>
      <div className="cardContainer">
        <div className="card">
          <p className="city">{info.name}</p>
          <p className="weather">{info.contry}</p>
          {info.humidity > 80 ? (
            <img src="/assets/rainy-7.svg" />
          ) : info.temp > 15 ? (
            <img src="/assets/cloudy-day-3.svg" />
          ) : (
            <img src="/assets/cloudy-night-3.svg" />
          )}
          <p className="temp">{info.temp}°</p>
          <div className="minmaxContainer">
            <div className="min">
              <p className="minHeading">Min</p>
              <p className="minTemp">{info.tempMin}°</p>
            </div>
            <div className="max">
              <p className="maxHeading">Max</p>
              <p className="maxTemp">{info.tempMax}°</p>
            </div>
            <div className="max">
              <p className="maxHeading">Speed</p>
              <p className="maxTemp">{info.speed}</p>
            </div>
            <div className="max">
              <p className="maxHeading">Humidity</p>
              <p className="maxTemp">{info.humidity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;
