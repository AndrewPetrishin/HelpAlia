import React, { Component } from 'react';
import { Container, List, Content, Text, Thumbnail, Input, Button} from 'native-base';
import { View, FlatList, Image } from 'react-native';
import { HeaderBar, Comment, ChatListItems, FooterBar } from '../components/';

class MainChat extends Component {       

  render() {
        var newMessageRssCount = 2;
        var newMessageChatCount = 10;
        var av1 = require('../images/mock/heroes/bouny_hunter.png');
        var av2 = require('../images/mock/heroes/earthspirit.png');
        var av3 = require('../images/mock/heroes/oracle.png');
        var av4 = require('../images/mock/heroes/skywrath_mage.png');
        var av5 = require('../images/mock/heroes/templar_assasin.png');
        var avMain = require('../images/footer/47.png');
        var data = [{key:'main', name:'Ariel group chat', thumbnail:avMain, description:'344 members'},
        {key:'1', thumbnail:av1, name:'Steve',description:'How many people your kill?'},
        {key:'2', thumbnail:av2, name:'Orli',description:'HI. It\'s here now?'},
        {key:'3', thumbnail:av3, name:'Maks',description:'Hello'},
        {key:'4', thumbnail:av4, name:'Shalom',description:'I am not went to work today %('},
        {key:'5', thumbnail:av5, name:'Fifus',description:'It iss hard without you!'},
        {key:'6', thumbnail:av1, name:'Steve',description:'How many people your kill?'},
        {key:'7', thumbnail:av2, name:'Orli',description:'HI. It\'s here now?'},
        {key:'8', thumbnail:av3, name:'Maks',description:'Hello'},
        {key:'9', thumbnail:av4, name:'Shalom',description:'I am not went to work today %('},
        {key:'10', thumbnail:av5, name:'Fifus',description:'It iss hard without you!'}];

        const nav = this.props.navigation.navigate;
        return (
            <Container>
                <HeaderBar>List chats</HeaderBar>
                <Content style={{backgroundColor:'#fff'}}>
                    <FlatList  
                        horizontal={false}                                      
                        data={data}
                        ListFooterComponent
                        renderItem={({item, index}) => <ChatListItems item={item} index={index} nav={nav}/>
                        }/>                
                </Content>
                <FooterBar newMessageChatCount={newMessageChatCount} newMessageRssCount={newMessageRssCount} selected ={2} nav={nav}/>
            </Container>
    );
  }
}

export default MainChat;