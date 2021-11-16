import './App.css';

// Component
import EventList from './EventList';
import CitySearch from './CitySearch';

function App() {
  return (
    <div className="App">
      <CitySearch />
      <EventList />
    </div>
  );
}

export default App;
