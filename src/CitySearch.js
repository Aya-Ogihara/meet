import React, { Component } from 'react';
import { InfoAlert } from './Alert';

export class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: false,
    infoText: ''
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true })
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'There is no upcoming event in the city you entered. Please try another city.'
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: ''
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
      infoText: ''
    });
    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <div className='city-search'>
        <InfoAlert text={this.state.infoText} />
        <h3>Search City</h3>
        <input
          type='text'
          className='city'
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => {
            this.setState({ showSuggestions: true });
          }}
          placeholder='Search for a city'
        />
        <ul
          className='suggestions'
          style={this.state.showSuggestions ? {} : { display: 'none' }}
        >
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li key='all' onClick={() => this.handleItemClicked('all')}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;

// const CitySearch = () => {
//   const [query, setQuery] = useState('');
//   return (
//     <div className="CitySearch">
//       <input type="text" className="city" />
//       <ul className="suggestions">

//       </ul>
//     </div>
//   )
// }

// export default CitySearch
