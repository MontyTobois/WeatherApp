import React, { Component } from 'react';
import Titles from  './components/Titles';
import Form from  './components/Form';
import Weather from  './components/Weather';
import './App.css';

//  Added You Own Api Key.
const API_KEY = "2c76e45c74caa212c1f0ebfdf66025d0";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humdity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
  const api_fetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}
  &units=metric`)

  const data = await api_fetch.json();

  console.log(data);

  }


  render() {
    return (
      <div className="App">
      <Titles  />
      <Form  getWeather={this.getWeather}/>
      <Weather />
      </div>
    );
  }
}

export default App;
