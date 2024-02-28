import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="WeatherApp container mt-5 p-4 w-50">
      <form className="mb-4">
        <div className="row">
          <div className="col-8">
            <input
              className="form-control p-3"
              type="search"
              placeholder="Enter city"
            />
          </div>
          <div className="col-4">
            <input
              className="btn btn-primary p-3 w-50"
              type="submit"
              value="Search"
            />
          </div>
        </div>
      </form>
      <h1 className="mb-0">Joburg</h1>
      <ul className="weather-info">
        <li>Tuesday 11:00</li>
        <li>Light rain</li>
      </ul>
      <div className="row mb-4">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather image"
            className="weather-image img-fluid"
          />
          <span className="temperature">
            18<span className="units">C</span>
          </span>
        </div>
        <div className="col-6 d-flex align-items-center">
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
