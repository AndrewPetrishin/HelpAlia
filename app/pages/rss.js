import React, { Component } from 'react';
import { Container, Header, Content, Button, Left, Body, Right,Title } from 'native-base';
import {FlatList} from 'react-native';
import { FooterBar, HeaderBar, RssItem } from '../components/';

class Main extends Component {
    
  render() {
    var newMessageRssCount = 4;
    var newMessageChatCount = 100000;
    var userAvatar = require('../images/mock/47.png')
    var news_image = require('../images/mock/Isreal-land.jpg');
    var data = [{key : '1', thumbnail : userAvatar, from : 'Admin', news_image : news_image, message : 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee', count_comments : 15, userAvatar:userAvatar}, 
    {key : '2', thumbnail : userAvatar, from : 'Larisa', news_image : news_image, message : 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects', count_comments : 3, userAvatar:userAvatar}];
    return (
        <Container>
            <HeaderBar>
                RSS NEWS
            </HeaderBar>
            <Content>
            <FlatList
                data={data}
                renderItem={({item}) => <RssItem data={item}/>}
            />
            </Content>
            <FooterBar newMessageChatCount={newMessageChatCount} newMessageRssCount={newMessageRssCount} />
        </Container>
    );
  }
}

export default Main;
