import React from 'react'
import BoilingVerdict from "./BoilingVerdict";

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: 0
    }
    this.handleChangeOnInputForTemperature = this.handleChangeOnInputForTemperature.bind(this)
  }

  handleChangeOnInputForTemperature(event) {
    this.setState({temperature: event.target.value})
  }

  render() {
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value={this.state.temperature} onChange={this.handleChangeOnInputForTemperature}/>
        <BoilingVerdict celsius={this.state.temperature}/>
      </fieldset>
    )
  }
}

export default Calculator