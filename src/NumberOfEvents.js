import React, { Component } from 'react';

export default class NumberOfEvents extends Component {
  render() {
    return (
      <div className='number-of-events'>
        <h3>Number of Events to Display</h3>
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
