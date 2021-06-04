import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator'
import './error-button.css';

export default class ErrorButton extends Component {

  state = {
    renderError: false
  };

  render() {
    if (this.state.renderError) {
      this.foo.bar = 0;
    }

    return (
      <button
        className="error-button btn btn-danger btn-lg marge"
        onClick={() => this.setState({renderError: true})}>
        Throw Error
      </button>
    );
  }
}