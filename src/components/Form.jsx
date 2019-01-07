import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
        <form onSubmit ={this.props.getWeather}>
          <input type="text" name="city" placeholder="City..."/>
          <input type="text" name="Country" placeholder="Country..."/>
          <button>Get Weather</button>
        </form>
      
    )
  }
}

export default Form;
