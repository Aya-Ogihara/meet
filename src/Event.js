import React, { Component } from 'react';
import { format, subDays } from 'date-fns';

export class Event extends Component {
  state = {
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    const date = format(new Date(event.start.dateTime), 'yyyy/MMM/dd');
    const time = format(new Date(event.start.dateTime), 'h:mm aaa');
    return (
      <div className='event'>
        <div className='event-title'>
          <h2 className='event-summary'>{event.summary}</h2>
        </div>
        <div className='event-content'>
          <div className='event-display'>
            <div>
              <p className='event-location'>📍 {event.location}</p>
              <p className='event-date event-time-zone'>
                {date} | {time}~ ({event.start.timeZone} Time)
              </p>
            </div>
            <button className='toggle-btn' onClick={() => this.handleClick()}>
              {collapsed ? 'More details' : 'Hide details'}
            </button>
          </div>
          {collapsed ? (
            <div className='event-detail--hide'></div>
          ) : (
            <div className='event-detail--show'>
              <h3 className='event-description-title'>
                What is the event about?
              </h3>
              <p className='event-description'>{event.description}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Event;

// import React from 'react';

// const Event = () => {
//   return (
//     <div className='details'>
//       <button>details</button>
//     </div>
//   )
// }

// export default Event;
