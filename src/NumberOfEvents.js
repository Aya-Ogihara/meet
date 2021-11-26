import React, { Component } from 'react';

export default class NumberOfEvents extends Component {
  render() {
    return (
      <div className='number-of-events'>
        <label>Number of Events to Display: </label>
        <input
          type='text'
          value={this.props.numberOfEvents}
          className='number-of-event'
          onChange={(event) => this.props.updateNumberOfEvents(event)}
        />
      </div>
    );
  }
}
