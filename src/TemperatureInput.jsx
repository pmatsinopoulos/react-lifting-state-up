import React from 'react'

const scales = {
  'c': 'Celsius',
  'f': 'Fahrenheit'
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onTemperatureChange(event.target.value)
  }

  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Enter the temperature in {scales[scale]}</legend>
        <input value={temperature} onChange={this.handleChange}/>
      </fieldset>
    )
  }
}

export default TemperatureInput