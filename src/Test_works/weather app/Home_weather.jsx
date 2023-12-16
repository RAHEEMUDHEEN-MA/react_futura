import axios from 'axios';
import React, { useState } from 'react';
import { WiStrongWind } from 'react-icons/wi';
import { WiHumidity } from 'react-icons/wi';

function HomeWeather() {
  const [data, setdata] = useState([]);
  const [location, setlocation] = useState('');

  const handle = (event) => {
    setlocation(event.target.value);
  };

  const search = (event) => {
    if (event.key === 'Enter') {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c0d290eeee9dd399b017a6d2ba64be7e`)
        .then((demo) => {
          setdata([demo.data]);
          console.log("weather!!:", location, demo.data);
        })
        .catch((error) => {
          alert('Location not found');
          console.error('Error weather data:', error);
        });
    }
  };

  const getWeatherIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/w/${iconCode}.png`;
  };

  const googleMapUrl = `https://www.google.com/maps/embed/v1/place?q=${location}&key=AIzaSyAq15HbfCRMW7RqNb5LUNyOLyfzpYI0wl4`;

  return (
    <div>
      <h2>Enter a location</h2>
      <div>
        <div>
          <input
            type="text"
            value={location}
            placeholder="Search"
            onChange={handle}
            onKeyPress={search}
          />
        </div>

        {data.map((demo) => (
          <div key={demo.id}>
            <h4>{demo.name}</h4>
            <h1>{demo.main &&Math.round(demo.main.temp - 273.15)} °C</h1>
          </div>
        ))}

        {data.map((demo) => (
          <div key={demo.id} className="">
            <p>
              Humidity<WiHumidity />:{demo.main.humidity}%
            </p>
            <p id='wind'>
              Wind<WiStrongWind />:{demo.wind.speed}m/s
            </p>
          </div>
        ))}

        {data.map((demo) => (
          <div key={demo.id}>
            {demo.weather.map((weather) => (
              <div key={weather.id}>
                <p>{weather.description}</p>
                <img
                  src={getWeatherIconUrl(weather.icon)}
                  alt={weather.description}
                />
              </div>
            ))}
          </div>
        ))}

       
        {location && (
          <iframe
            title="Google Map"
            width="600"
            height="450"
            
            allowFullScreen
            src={googleMapUrl}
          />
        )}
      </div>
    </div>
  );
}

export default HomeWeather;
