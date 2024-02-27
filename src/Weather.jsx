import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  return (
    <div className="WeatherApp container">
      <h2>Joburg</h2>
      <div className="row">
        <div className="col-6">
          <img
            href="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt="weather image"
          />
          <h2>18</h2>
          <ul>
            <li>Precipitation: 25%</li>
            <li>Humidity:92%</li>
            <li>Wind:10 km/h</li>
          </ul>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}
