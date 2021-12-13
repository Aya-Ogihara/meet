// import React from 'react';
// import './App.css';
// import './nprogress.css';
// import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
// import { ErrorAlert, WarningAlert } from './Alert';

// // Component
// import EventList from './EventList';
// import CitySearch from './CitySearch';
// import NumberOfEvents from './NumberOfEvents';
// import WelcomeScreen from './WelcomeScreen';

// class App extends React.Component {
//   state = {
//     events: [],
//     locations: [],
//     numberOfEvents: 32,
//     selectedLocation: 'all',
//     errorInfo: '',
//     warningInfo: 'Your internet connection is good',
//     showWelcomeScreen: undefined,
//   };

//   updateEvents = (location, eventCount) => {
//     getEvents().then((events) => {
//       const locationEvents =
//         location === 'all'
//           ? events
//           : events.filter((event) => event.location === location);

//       const inputNumberOfEvents = locationEvents.slice(0, eventCount);
//       this.setState({
//         events: inputNumberOfEvents,
//         selectedLocation: location,
//       });
//     });
//   };

//   updateNumberOfEvents = async (event) => {
//     const value = event.target.value;
//     if (value < 0 || value >= 32) {
//       await this.setState({
//         errorInfo: 'Please enter 1 - 32',
//       });
//     } else {
//       await this.setState({
//         numberOfEvents: value,
//         errorInfo: '',
//       });
//       this.updateEvents(this.state.selectedLocation, this.state.numberOfEvents);
//     }
//   };

//   async componentDidMount() {
//     this.mounted = true;
//     const accessToken = localStorage.getItem('access_token');
//     const isTokenValid = (await checkToken(accessToken)).error ? false : true;
//     const searchParams = new URLSearchParams(window.location.search);
//     const code = searchParams.get('code');

//     this.setState({ showWelcomeScreen: !(code || isTokenValid) });
//     if ((code || isTokenValid) && this.mounted) {
//       getEvents().then((events) => {
//         if (this.mounted) {
//           this.setState({ events, locations: extractLocations(events) });
//         }

//         if (!navigator.onLine) {
//           this.setState({
//             warningInfo: 'Warning: Your internet connection is offline',
//           });
//         } else {
//           this.setState({
//             warningInfo: 'Your internet connection is still good',
//           });
//         }
//       });
//     }
//   }

//   componentWillUnmount() {
//     this.mounted = false;
//   }

//   render() {
//     if (this.state.showWelcomeScreen === undefined)
//       return <div className='App' />;
//     return (
//       <div className='App'>
//         <h1 className='logo'>Meet App</h1>
//         <CitySearch
//           locations={this.state.locations}
//           updateEvents={this.updateEvents}
//         />
//         <ErrorAlert text={this.state.errorInfo} />
//         <NumberOfEvents
//           numberOfEvents={this.state.numberOfEvents}
//           updateNumberOfEvents={this.updateNumberOfEvents}
//         />
//         <WarningAlert text={this.state.warningInfo} />
//         <EventList events={this.state.events} />
//         <WelcomeScreen
//           showWelcomeScreen={this.state.showWelcomeScreen}
//           getAccessToken={() => {
//             getAccessToken();
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import './App.css';
import './nprogress.css';
import { extractLocations, getEvents } from './api';
import { ErrorAlert, WarningAlert } from './Alert';

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
    errorInfo: '',
    warningInfo: '',
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
    if (value < 0 || value >= 32) {
      await this.setState({
        errorInfo: 'Please enter 1 - 32',
      });
    } else {
      await this.setState({
        numberOfEvents: value,
        errorInfo: '',
      });
      this.updateEvents(this.state.selectedLocation, this.state.numberOfEvents);
    }
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }

      if (!navigator.onLine) {
        this.setState({
          warningInfo: 'Warning: Your internet connection is offline',
        });
      } else {
        this.setState({
          warningInfo: '',
        });
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
        <ErrorAlert text={this.state.errorInfo} />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateNumberOfEvents={this.updateNumberOfEvents}
        />
        <WarningAlert text={this.state.warningInfo} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;