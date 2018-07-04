import React, { Component } from 'react';
import { Container, List, Content, Text, Thumbnail, Input} from 'native-base';
import { View, FlatList, Image, Dimensions, TouchableOpacity, LayoutAnimation } from 'react-native';
import { FooterSendMessage, HeaderBar, ChatMessage } from '../components/';

class Chat extends Component {      
    constructor(props){
        super(props);
        this.state = { buttonDown : false, offsetMax : Dimensions.get('window').height / 2};
        this._onScroll = this._onScroll.bind(this);
        console.log('window = ' + Dimensions.get('window').height + ' screen = ' + Dimensions.get('screen').height);        
    }

    _onScroll = (event) =>{        
        const currentOffset = event.nativeEvent.contentOffset.y;
        console.log(currentOffset);        
        if(currentOffset > this.state.offsetMax){
            if( !this.state.buttonDown){
                this.setState({buttonDown : true});
            }
        }
        else{
            this.setState({buttonDown : false});
        }
    }

    showButtonDown = () => {        
        return this.state.buttonDown? (
           
                <View style={{position:'absolute', bottom:100, right:0}}>
                    <TouchableOpacity onPress = {() => {
                       this.refs.flatList.scrollToOffset({offset : 0, animated : true});
                    }}>
                        <Image source={require('../images/footer/send.png')}/>
                    </TouchableOpacity>
                </View>            
        ) : null;
    }

  render() {
    var userAvatar = require('../images/mock/47.png');
    var av1 = require('../images/mock/heroes/bouny_hunter.png');
    var av2 = require('../images/mock/heroes/earthspirit.png');
    var av3 = require('../images/mock/heroes/oracle.png');
    var av4 = require('../images/mock/heroes/skywrath_mage.png');
    var av5 = require('../images/mock/heroes/templar_assasin.png');  
    
    var data = [{key:'1', owner:'Robbie Williams', time:'1:20pm', text:'Lipo danko if djyer', thumbnail: av1},
    {key:'2', owner:'Admin Ariel', time:'1:22pm', text:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque', thumbnail: userAvatar, type:'admin'},
    {key:'3', owner:'I am a user', time:'1:24pm', text:'A accusamus et iusto odio dignissimos ducimus qui cusamus et iusto odio dignissimos ducimus qui ', thumbnail: av2, type:'local'},
    {key:'4', owner:'Shalom', time:'1:24pm', text:'Wooow it\'s work', thumbnail: av3},
    {key:'5', owner:'Robbie Williams', time:'1:20pm', text:'Lipo accusamus et iusto odio dignissimos ducimus qui cusamus et iusto odio if djyer  eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum ', thumbnail: av4},
    {key:'6', owner:'Robbie Williams', time:'1:20pm', text:'Lipo danko if djyer', thumbnail: av5},
    {key:'7', owner:'Robbie Williams', time:'1:20pm', text:'Lipo danko if djyer', thumbnail: av1},
    {key:'8', owner:'Admin Ariel', time:'1:22pm', text:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque', thumbnail: userAvatar, type:'admin'},
    {key:'9', owner:'I am a user', time:'1:24pm', text:'A accusamus et iusto odio dignissimos ducimus qui cusamus et iusto odio dignissimos ducimus qui ', thumbnail: av2, type:'local'},
    {key:'10', owner:'Shalom', time:'1:24pm', text:'Wooow it\'s work', thumbnail: av3},
    {key:'11', owner:'Robbie Williams', time:'1:20pm', text:'Lipo accusamus et iusto odio dignissimos ducimus qui cusamus et iusto odio if djyer  eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum ', thumbnail: av4},
    {key:'12', owner:'Robbie Williams', time:'1:20pm', text:'Lipo danko if djyer', thumbnail: av5}];

    const nav = this.props.navigation.navigate;    
    return (
        <Container style={{backgroundColor:'#fff'}}>
            <HeaderBar left='MainChat' nav={this.props.navigation.navigate}>                                
                Chat
            </HeaderBar>
            <FlatList       
                ref="flatList"          
                inverted
                data = {data}                    
                renderItem = {({ item }) => <ChatMessage data = {item} nav={nav}/>}           
                onScroll = { this._onScroll }/>
                { this.showButtonDown() }
            <FooterSendMessage/>
        </Container>
    );
  }
}

export default Chat;