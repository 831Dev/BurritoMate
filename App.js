import React from 'react';
import {
  Provider
} from 'react-redux';
import Store from './store';
import Root from './components/Root';

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Root />
      </Provider>
    );
  }
}

export default App;