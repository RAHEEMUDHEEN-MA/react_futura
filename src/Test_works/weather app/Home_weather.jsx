import "../weather app/Home_weather.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import searchicon from "./Assets/icons8-search-48.png";
import dayIMG from "./Assets/day.jpg";
import nightIMg from "./Assets/night.jpg";

function HomeWeather() {
  const [data, setdata] = useState([]);

  const [location, setlocation] = useState("kozhikode");
  const [longitude, setlongitude] = useState("");
  const [latitude, setlatitude] = useState("");
  const [data_time, setdata_time] = useState("");
  const [day, setday] = useState("day");

  // const handle = (event) => {
  //   setlocation(event.target.value);

  // };

  const search = (event) => {
    console.log(location);
    if (event.key === "Enter") {
    }

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c0d290eeee9dd399b017a6d2ba64be7e`
      )
      .then((demo) => {
        setdata([demo.data]);

        console.log("weather!!:", location, demo.data);
        setlongitude(demo.data.coord.lon);
        setlatitude(demo.data.coord.lat);
        console.log(longitude, latitude);
      })
      .catch((error) => {
        alert("Location not found");
        console.error("Error weather data:", error);
      });
  };

  // const search=()=>{
  //   console.log("hieee",location)

  // };

  const getWeatherIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/w/${iconCode}.png`;
  };

  useEffect(() => {
    if (latitude && longitude) {
      axios
        .get(
          `http://api.timezonedb.com/v2.1/get-time-zone?key=JYS1MQ3Z26B1&format=json&by=position&lat=${latitude}&lng=${longitude}`
        )
        .then((demo) => {
          const timeZoneData = demo.data;
          console.log(timeZoneData);

          const CurTime = timeZoneData.formatted.slice(11, -3);
          setdata_time(CurTime);
          console.log(CurTime);

          if (CurTime.slice(0, -3) <= 19) {
            setday("day");
          } else {
            setday("night");
          }
          console.log(day);
        })
        .catch((error) => {
          console.error("Error fetching time zone:", error);
        });
    }
  }, [latitude, longitude]);

  const googleMapUrl = `https://www.google.com/maps/embed/v1/place?q=${latitude},${longitude}&zoom=13&key=AIzaSyAq15HbfCRMW7RqNb5LUNyOLyfzpYI0wl4`;
  let mainBarStyle = {};
  if (day == "day") {
    mainBarStyle = {
      backgroundImage: `url(${dayIMG})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      color: "white",

      // filter: 'brightness(70%)'
    };
  } else {
    mainBarStyle = {
      backgroundImage: `url(${nightIMg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      // filter: 'brightness(70%)',
      color: "white",
    };
  }

  return (
    <div>
      <div className="TopBar">
        <div className="TopBarContaniner">
          <a href="">Weather.com</a>
          <div className="searchBar">
            <input
              type="text"
              placeholder="search a city"
              value={location}
              onChange={(e) => setlocation(e.target.value)}
              // onKeyPress={search}
            />
            <button onClick={search}>
              <img src={searchicon} alt="" />
            </button>
          </div>
          <p>°C</p>
        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}

      <div className="mainBar" style={mainBarStyle}>
        {data.map((demo) => (
          <div className="mainBarContainer" key={demo.id}>
            <h1>{demo.name}</h1>
            <h1>{demo.main && Math.round(demo.main.temp - 273.15)}°C</h1>
            {data.map((demo) => (
          <div key={demo.id}>
            {demo.weather.map((weather) => (
              <div key={weather.id}>
                <h2>{weather.description}</h2>
              </div>
            ))}
          </div>
        ))}
          </div>
        ))}

       
      </div>

      {/* -------------------------------------------------------------------------------- */}

      <div className="thirdBar">
        <div className="thirdBarContainer"></div>
      </div>
    </div>
  );
}

export default HomeWeather;

{
  /* 
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
            <h2>{demo.name}</h2>
            <h1>{demo.main && Math.round(demo.main.temp - 273.15)} °C</h1>
          </div>
        ))}

        {data.map((demo) => (
          <div key={demo.id} className="">
            <p>
              Humidity
              <WiHumidity />:{demo.main.humidity}%
            </p>
            <p id="wind">
              Wind
              <WiStrongWind />:{demo.wind.speed}m/s
            </p>
            <p>
              cordinates:{demo.coord.lat},{demo.coord.lon}
            </p>
            <p>time:{data_time}</p>
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
                  height={70}
                />
              </div>
            ))}
          </div>
        ))}

        {location && (
          <iframe
            title="Google Map"
            width="100%"
            height="450"
            allowFullScreen
            zoo
            src={googleMapUrl}
          />
        )}
      </div> */
}
