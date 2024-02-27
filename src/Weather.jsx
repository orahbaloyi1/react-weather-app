import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="WeatherApp container mt-5 p-4">
      <h1>Joburg</h1>
      <ul className="weather-info">
        <li>Tuesday 11:00</li>
        <li>Light rain</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="weather image"
                className="img-fluid"
              />
            </div>
            <div className="col-3">
              <h2>18 C</h2>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="weather-description">
            <ul>
              <li>Precipitation: 25%</li>
              <li>Humidity:92%</li>
              <li>Wind:10 km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-2 ps-4">Tues</div>
        <div className="col-2 ps-4">Wed</div>
        <div className="col-2 ps-4">Thu</div>
        <div className="col-2 ps-4">Fri</div>
        <div className="col-2 ps-4">Sat</div>
        <div className="col-2 ps-4">Sun</div>
      </div>
      <div className="row">
        <div className="col-2">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather-image"
          />
        </div>
        <div className="col-2">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather-image"
          />
        </div>
        <div className="col-2">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather-image"
          />
        </div>
        <div className="col-2">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather-image"
          />
        </div>
        <div className="col-2">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather-image"
          />
        </div>
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
        </div>
        <div className="col-2">
          <span className="me-2">12</span>
          <span>12</span>
        </div>
        <div className="col-2">
          <span className="me-2">12</span>
          <span>12</span>
        </div>
        <div className="col-2">
          <span className="me-2">12</span>
          <span>12</span>
        </div>
        <div className="col-2">
          <span className="me-2">12</span>
          <span>12</span>
        </div>
        <div className="col-2">
          <span className="me-2">12</span>
          <span>12</span>
        </div>
      </div>
    </div>
  );
}
