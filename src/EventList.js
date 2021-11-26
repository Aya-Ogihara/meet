import React from 'react';

//Component
import Event from './Event';

const EventList = (props) => {
  const { events } = props;

  return (
    <div className='events-wrapper'>
      <ul className='EventList'>
        {events.map((event) => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
