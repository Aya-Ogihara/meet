import React, { Component } from 'react'

export class Event extends Component {
  state = {
    collapsed: true
  }

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    const { event } = this.props
    const { collapsed } =this.state
    return (
      <div className='event'>
        <h2 className='event-summary'>{event.summary}</h2>
        <h3 className='event-location'>Location: {event.location}</h3>
        <h4 className='event-date'>Date: {event.start.dateTime}</h4>
        <p className='event-time-zone'>Time Zone: {event.start.timeZone}</p>
        <button className='toggle-btn' onClick={() => this.handleClick()} >{collapsed? 'More details' : 'Hide details'}</button>
        {collapsed ? (
        <div className='event-detail--hide'></div>
        ) : (
          <div className='event-detail--show'>
            <h3>Event description</h3>
            <p className='event-description'>{event.description}</p>
            <h4>Organizer</h4>
            <p className='event-organizer'>{event.organizer.email}</p>
          </div>
        )}
          
      </div>  
    )
  }
}

export default Event


// import React from 'react';

// const Event = () => {
//   return (
//     <div className='details'>
//       <button>details</button>
//     </div>
//   )
// }

// export default Event;
