import React, { Component } from 'react'

export default class NumberOfEvents extends Component {
  state = {
    NumberOfEvent: 32
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({
      NumberOfEvent: value
    })
  }
  
  render() {
    return (
      <div>
        <input type="text" value={this.state.NumberOfEvent} className='number-of-event' onChange={this.handleChange} />
      </div>
    )
  }
}
