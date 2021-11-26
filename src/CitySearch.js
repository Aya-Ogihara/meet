import React, { Component } from 'react';

export class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
    });
    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <div className='city-search'>
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
