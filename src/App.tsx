import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Globis from './containers/Globis';

const logo = require('./logo.svg');

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <BrowserRouter>
          <Route path="/globis" component={Globis} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
