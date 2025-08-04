import { createContext, useContext, useState } from "react";
import { getWeatherDataFromCity , getWeatherDataFromLocation } from "../api";

const WeatherContext = createContext(null);

export const useWeather=()=>{
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) =>{

    const [data , setData] = useState(null);
    const [searchCity , setSearchCity] = useState("");

    const fetchData = async ()=>{
        const response = await getWeatherDataFromCity(searchCity);
        setData(response);
    }

    const fetchUserCurrentLocationData = async()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            getWeatherDataFromLocation(position.coords.latitude , position.coords.longitude).then(data=>setData(data));
        })
    }

    return(
        <WeatherContext.Provider value={{data , searchCity , fetchData  , setSearchCity , fetchUserCurrentLocationData}}>
            {props.children}
        </WeatherContext.Provider>
    )
}
