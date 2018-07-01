import React, { Component } from 'react';
import { Container, List, Content, Text, Thumbnail, Input, Button} from 'native-base';
import { View, FlatList, Image } from 'react-native';
import { FooterBar, HeaderBar, Comment, ChatListItems } from '../components/';

class ChatMain extends Component {       

    onPressScrollUp = () => {
        this.scroll.scrollToOffset( {offset: -1})
    }

  render() {
        var newMessageRssCount = 2;
        var newMessageChatCount = 10;
        var av1 = require('../images/mock/heroes/bouny_hunter.png');
        var av2 = require('../images/mock/heroes/earthspirit.png');
        var av3 = require('../images/mock/heroes/oracle.png');
        var av4 = require('../images/mock/heroes/skywrath_mage.png');
        var av5 = require('../images/mock/heroes/templar_assasin.png');
        var avMain = require('../images/footer/47.png');
        var data = [{key:'main', name:'Ariel group chat', thumbnail:avMain, description:'344 users count'},
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
      return (
        <Container>
            <HeaderBar>List chats</HeaderBar>
            <Content style={{backgroundColor:'#fff'}}>
                <FlatList  
                    horizontal={false}                  
                    ref={(s) => {this.scroll = s}}
                    data={data}
                    renderItem={({item, index}) => <ChatListItems item={item} index={index}/>
                    }/>
                <Button onPress={this.onPressScrollUp}><Text>Text Text PressME</Text></Button>
            </Content>
            <FooterBar newMessageChatCount={newMessageChatCount} newMessageRssCount={newMessageRssCount} selected ={2}/>
        </Container>
    );
  }
}

export default ChatMain;