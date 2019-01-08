import React, { Component } from 'react'

export class Weather extends Component {
  render() {
    return (
      <div>
       <p>Location: { this.props.city },{ this.props.country }</p> 
       <p>Temperature: { this.props.temperature }</p> 
       <p>Humdity: { this.props.humdmity }</p> 
      <p>Conditions: { this.props.description }</p>
      </div>
    )
  }
}

export default Weather
