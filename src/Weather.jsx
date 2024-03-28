import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState("London");
  const [cityInput, setCityInput] = useState(``);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      urlIcon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      city: response.data.name,
      ready: true,
    });
    setReady(true);
  }
  function searchCity() {
    const apiKey = "7b2103381278d28203d89c397e41d56e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setCity(cityInput);
    searchCity();
  }
  function handleChange(event) {
    return setCityInput(event.target.value);
  }

  if (ready) {
    return (
      <div className="WeatherApp container mt-5 p-4 w-50">
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                className="form-control p-3"
                type="search"
                placeholder="Enter city"
                value={cityInput}
                onChange={handleChange}
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
        <h1 className="mb-0">{city}</h1>
        <ul className="weather-info">
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row mb-4">
          <div className="col-6 align-items-middle">
            <img
              src={weatherData.urlIcon}
              alt="weather image"
              className="weather-image img-fluid"
            />
            <WeatherTemperature celcius={weatherData.temperature} />
          </div>
          <div className="col-6 d-flex align-items-center">
            <div className="weather-description">
              <ul>
                <li>Humidity:{weatherData.humidity}%</li>
                <li>Wind:{weatherData.wind}km/h</li>
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
  } else {
    searchCity();
    return "Loading...";
  }
}
