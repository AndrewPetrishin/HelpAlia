import React, { Component } from 'react';
import {  View, FlatList } from 'react-native';
import { Header, Footer } from '../../common/';
import Item from './Item';

export default class RssMain extends Component {
 
  render() {
    var userAvatar = require('../../../images/mock/47.png')
    var news_image = require('../../../images/mock/Isreal-land.jpg');
    var data = [{key : '1', avatar : userAvatar, name : 'Admin', news_image : news_image, message : ' Shalom sang skjf gnskjfdngkjsndgjksnkfj j kj nkj   Shalom sang skjf gnskjfdngkjsndgjksnkfj j kj nkj  Shalom sang skjf gnskjfdngkjsndgjksnkfj j kj nkj kjgk n', count_comments : 15, userAvatar:userAvatar}, 
    {key : '2', avatar : userAvatar, name : 'Admin', news_image : news_image, message : 'Shalom another text', count_comments : 3, userAvatar:userAvatar}];
    
   
    return (
      <View style={{flex:1}}>
        <Header>
          Rss
        </Header>
        <FlatList
          data={data}
          renderItem={({item}) => <Item data={item} fontSize={40}/>}
          style={{backgroundColor:'#fff'}}
        />
        <Footer/>
      </View>
    );
  }
}
