import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  // console.log(props.coordinates.lat);

  const apiKey = "7b2103381278d28203d89c397e41d56e";
  let latitude = props.coordinates.lat;
  let longitute = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitute}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForest">
      <div className="row">
        <div className="col-2 ps-4">Tues</div>
      </div>
      <div className="row">
        <div className="col-2">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather-image"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <span className="me-2">12</span>
          <span>12</span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
