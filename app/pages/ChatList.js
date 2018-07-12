import React, { Component } from 'react';
import { Container, Content, Text, Item, Input} from 'native-base';
import { View, FlatList, Image, TextInput} from 'react-native';
import { HeaderBar, Comment, ChatItem, FooterBar, SearchInput } from '../components';
import { SPACE_SPEC, WIDTH_1PX, PAGE_NAME_CHAT_LIST } from '../components/Helper';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ChatList extends Component {      

    constructor(props){
        super(props);        
        this.state = { buttonDown : false};
        this._onScroll = this._onScroll.bind(this);
    }

    _onScroll = (event) =>{        
        const currentOffset = event.nativeEvent.contentOffset.y;
        console.log(currentOffset);        
        if(currentOffset > 50){
            if( !this.state.buttonDown){
                this.setState({buttonDown : true});
            }
        }
        else{
            this.setState({buttonDown : false});
        }
    }
    showFooterForChatList = (item, nav) => {
        return (        
            <View style={styles.mainContainer}>
                <SearchInput />
                <ChatItem item={item} header nav={nav} />
                <View style={styles.innerContainer}>
                    <Text style={styles.insideText}>Your messages</Text>
                </View>
            </View>      
        );     
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
        var data = [
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

        var headerData = {key:'main', name:'Ariel group chat', thumbnail:avMain, description:'344 members'};
        const nav = this.props.navigation.navigate;
        return (
            <Container>
                <HeaderBar noborder = {this.state.buttonDown}>List chats</HeaderBar>
                <Content style={{backgroundColor:'#fff'}}>
                    <FlatList  
                        horizontal={false}                                      
                        data={data}
                        ListHeaderComponent = { this.showFooterForChatList(headerData, nav) }
                        renderItem={({item}) => <ChatItem small item={item} nav={nav}/>}
                        onScroll = { this._onScroll }
                        
                        />                
                </Content>
            </Container>
    );
  }
}

const styles ={
    mainContainer:{
        flex:1,
        backgroundColor:'#f7f7f7',
    },
    innerContainer:{
    },
    insideText:{
        margin: 2 * SPACE_SPEC,
        color:'#c8c7cc'
    }
};

export default ChatList;