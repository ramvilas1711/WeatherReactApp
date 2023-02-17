import React, { useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCloud } from "@fortawesome/free-solid-svg-icons";


const Weather = ()=>{

  const[city,setCity] = useState("");
  const[search,setSearch] = useState("Ghazipur");

  const fetchApi = async ()=>{
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d05821b3633fe549402a70eba9347808`;
    const response = await fetch(apiURL);
    const resJson = await response.json();
    console.log(resJson);
    setCity(resJson.main);
    console.log(city);
  };

  useEffect(()=>{
    fetchApi();
  },[search])

  const weatherCheck = (event)=>{
    let data = event.target.value;
    setSearch(data);
  }

  return(
    <>
      <div className="body-section">
      <div className="weather-section">
      <div className="search-section">
             <input type="search" name="city" onChange={weatherCheck} placeholder="Enter city name" />
          </div>
        {
          !city ?(
            <p className="No-data-found">No data found</p>
          ):(
            <>
          
        <div className="city-section">
            <FontAwesomeIcon icon={faCloud} className="icon"></FontAwesomeIcon>
      
           <div className="min-max-temp">
            <h1>{search}</h1>
            <h3>{city.temp} °C</h3>
            <h4>Min: {city.temp_max} °C <br /> Max: {city.temp_min} °C</h4>
          </div> 
        </div>
          <div className="waterflow">

          </div>
          </>
          )
          }

        </div>
      </div>
    </>
  )
}

export default Weather;