import React, { Component } from 'react';
import Titles from  './components/Titles';
import Form from  './components/Form';
import Weather from  './components/Weather';
import './App.css';

//  Added You Own Api Key.
const API_KEY = "XXXXXXXXXXXXXXXXX";

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
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humdity: data.main.humdity,
      description:  data.weather[0].description,
      error: ""
    })
  }


  render() {
    return (
      <div className="App">
      <Titles  />
      <Form  getWeather={this.getWeather}/>
      <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humdity={this.state.humdity}
        description={this.state.description}
        error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
