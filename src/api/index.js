const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getWeatherDataFromCity = async ( city )=>{
    const url = `${BASE_URL}&q=${city}&api=yes`;
    const response = await fetch(url)
    return response.json();
}

export const getWeatherDataFromLocation = async ( lat, lon )=>{
    const response = await fetch(`${BASE_URL}&q=${lat},${lon}&api=yes`)
    return response.json();
}