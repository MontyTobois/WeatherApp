import React, { Component } from 'react';
import Titles from  './components/Titles';
import Form from  './components/Form';
import Weather from  './components/Weather';
import './App.css';

const API_KEY  = f9b6f6ec6c33bfc5a154cdc19f667016;


class App extends Component {

  getWeather = async () => {
    const api_fetch = await fetch()
  }
  const data = await api_fetch.JSON();
  console.log(data);

  render() {
    return (
      <div className="App">
      Hello!!!
      <Titles  />
      <Form  getWeather={this.getWeather}/>
      <Weather />
      </div>
    );
  }
}

export default App;
