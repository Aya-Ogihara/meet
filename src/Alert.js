import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.fontSize = '14px';
  }

  getStyle = () => {
    return {
      color: this.color,
      fontSize: this.fontSize,
    };
  };

  render() {
    return (
      <div className='Alert'>
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#d328ae';
  }

  getStyle = () => {
    return {
      color: this.color,
      fontSize: '20px',
    };
  };
}

export { InfoAlert, ErrorAlert, WarningAlert };
