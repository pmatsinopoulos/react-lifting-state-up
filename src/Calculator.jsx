import React from 'react'
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";
import {toCelsius, toFahrenheit, tryConvert} from "./helpers";

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: '0',
      scale: 'c'
    }
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }

  handleCelsiusChange(temperature) {
    this.setState({temperature: temperature, scale: 'c'})
  }

  handleFahrenheitChange(temperature) {
    this.setState({temperature: temperature, scale: 'f'})
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

    return (
      <div>
        <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
        <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
        <BoilingVerdict celsius={parseFloat(celsius)}/>
      </div>
    )
  }
}

export default Calculator