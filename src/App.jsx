import { useEffect } from 'react'
import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button'
import './App.css'
import { useWeather } from './context/Weather'

function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect(()=>{
    weather.fetchUserCurrentLocationData();
  },[])

  return (
    <div className='App'>
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value={"Search"}/>
      <Card />
      <Button onClick={weather.searchCity ? weather.fetchData : weather.fetchUserCurrentLocationData} value={"Refresh"}/>
    </div>
  )
}

export default App
