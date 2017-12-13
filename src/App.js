import React, { Component } from 'react';
import { Translate, Localize } from 'react-redux-i18n'
import LocaleSelectorContainer from './containers/LocaleSelectorContainer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const username = 'John'

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            <Translate value="application.title" />
          </h1>
        </header>
        <p className="App-intro">
          <Translate value="application.hello" name={username} />
        </p>
        <p className="App-intro">
          <Translate value="application.intro" dangerousHTML />
        </p>
        <p>
          <Localize value={Date.now()} dateFormat="date.long"/>
        </p>
        <LocaleSelectorContainer />
      </div>
    );
  }
}

export default App;
