// @flow
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createRenderer } from 'fela'
import { Provider } from 'react-fela'
import StyledComponent from './components/FelaComponent'
import ConnectedComponent from './components/FelaConnectComponent'


const renderer = createRenderer();

class App extends React.Component<*> {
  render() {
    return (
        <Provider renderer={renderer}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <div className="App-intro">
                <StyledComponent as="h1" color="tomato">Fela component as tomato H1</StyledComponent>
                <StyledComponent as="small" color="lime">Fela component as small lime</StyledComponent>

                <hr />

                {/* This should cause a flow error for missing title and children */}
                <ConnectedComponent />

            </div>
          </div>
        </Provider>
    );
  }
}

export default App;
