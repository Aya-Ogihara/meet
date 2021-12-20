import React, { Component } from 'react';

export default class NumberOfEvents extends Component {
  render() {
    return (
      <div className='number-of-events'>
        <h3>Number of Events to Display</h3>
        <label>1  </label>
        <input
          type='range'
          min={1}
          max={30}
          value={this.props.numberOfEvents}
          className='number-of-event slider'
          onChange={(event) => this.props.updateNumberOfEvents(event)}
        />
        <label>  30</label>
      </div>
    );
  }
}
