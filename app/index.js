import React, { Component } from 'react';
import {Header, Footer} from './components/common/'
import { View, Text } from 'react-native';

class Main extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header>
          Rss
        </Header>
        <Text style={{flex : 20}}>RSS LIST</Text>
        <Footer/>
      </View>
    );
  }
}

export default Main;
