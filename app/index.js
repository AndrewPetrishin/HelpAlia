
import React, { Component } from 'react';
import { View, StatusBar} from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

import reducers from './reducers/index';
import Components from './pages/index';

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const reducer = combineReducers(reducers);
const store = createStore(reducers);

export default class Index extends Component {
  render() {
    return (
      <View
       style={{ flex:1 }}>
       <StatusBar barStyle="light-content" />
       <Provider store={store}>
        <Components/>
       </Provider>
      </View>
    );
  }
}