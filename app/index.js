
import React, { Component } from 'react';
import { View, StatusBar, I18nManager} from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';

// import thunk from 'redux-thunk';
import { Container, Content, Text, List } from 'native-base';
import reducers from './reducers';
import { NAVIGATOR_ROUTER, NAVIGATOR_ROUTER_INIT } from './components/Helper';
import FooterController from './components/FooterController';
import HeaderController from './components/HeaderController'
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const reducer = combineReducers(reducers);
const store = createStore(reducers);
I18nManager.allowRTL(false);

const AppNavigator = createStackNavigator(NAVIGATOR_ROUTER, NAVIGATOR_ROUTER_INIT);

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = { navigator : ''};
  }
  
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar barStyle="light-content" />
        <Provider store={store}>
          <View style={{flex:1, backgroundColor: '#fff'}}>
            <HeaderController nav={ this.state.navigator }/>   
            <View style={{flex:1, backgroundColor: '#fff'}}>
              <AppNavigator ref={nav => { !this.state.navigator && this.setState({navigator : nav}) }}/>         
            </View>   
            <FooterController nav={ this.state.navigator }/>
          </View>
        </Provider>
      </View>
    );
  }
}