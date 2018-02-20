import React from 'react';
import {
  addNavigationHelpers
} from 'react-navigation';
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import Store from '../store'
import Navigator from '../Navigators';  

const addListener = createReduxBoundAddListener('root');

class Root extends React.Component {
  render() {
    return (
      <Navigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener,
      })} />
    );
  }
}

const mapStateToProps = (state) => {
    return {
        nav: state.nav
    }
};

const AppWithNavigationState = connect(mapStateToProps)(Root);

export default AppWithNavigationState;