import React from 'react';
import './App.css';
import './nprogress.css';
import { extractLocations, getEvents } from './api';

// Component
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

class App extends React.Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    selectedLocation: 'all',
  };

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);

      const inputNumberOfEvents = locationEvents.slice(0, eventCount);
      this.setState({
        events: inputNumberOfEvents,
        selectedLocation: location,
      });
    });
  };

  updateNumberOfEvents = async (event) => {
    const value = event.target.value;
    await this.setState({
      numberOfEvents: value,
    });
    this.updateEvents(this.state.selectedLocation, this.state.numberOfEvents);
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className='App'>
        <h1 className='logo'>Meet App</h1>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateNumberOfEvents={this.updateNumberOfEvents}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
