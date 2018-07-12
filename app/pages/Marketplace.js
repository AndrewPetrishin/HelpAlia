import React, { Component } from 'react';
import { Container, List, Content, Text, Thumbnail, Input} from 'native-base';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import { FooterBar, HeaderBar, Comment, SearchInput, MarketItem } from '../components';
import { SPACE_SPEC, WIDTH_1PX, PAGE_NAME_MARKETPLACE } from '../components/Helper';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Marketplace extends Component {  
    constructor(props)  {
        super(props);
    }
    
    showHeader = (filters) => {    
        const filtersView = filters.map(({key, text}) => (
            <View key={key} style={styles.filterSubContainer}>
                <View style={styles.filterTextContainer}>
                    <Text style={styles.filterText}>{text}</Text>   
                </View>                              
                <TouchableOpacity onPress={() => alert('delete filter with key=' + key)}>
                    <View style={ styles.filterCloseContainer }>
                        <Text>x</Text>
                    </View>
                </TouchableOpacity>
            </View>
          )
        );
        return (
            <View style={styles.filterContainer}>                                
                {filtersView}                
            </View>
        );    
    }

    render() {
        this.props.setCurrentPage(PAGE_NAME_MARKETPLACE);
        var av1 = require('../images/header/search.png');
        var av2 = require('../images/mock/new-desks.jpg');
        var av3 = require('../images/mock/pc.png');    
        var av4 = require('../images/mock/sofa.jpg');
        var av5 = require('../images/mock/sofa2.jpg');
        var adv1 = require('../images/mock/adv/cars.gif');
        var newMessageRssCount = 4;
        var newMessageChatCount = 6;
        
        var items = [{key:'1', thumbnail: av2, title:'Rent a flat for famillyRent a flat for familly', date:'Today 15:19', location:'Tel Aviv', price:'1200 USD', type: 'vip'},
        {key:'2', thumbnail: av1, title:'Lamp antiquare!!!!!!', date:'Yesterday 10:00', vip: false, location:'Tel Aviv', price:'4200 USD', type: 'new'},
        {key:'3', thumbnail: av3, title:'Super puper computer ', date:'22.12.2018 12:00', vip: false, location:'Lod', price:'10000 USD', type: 'simple'},
        {key:'111', type:'adv', thumbnail: adv1},
        {key:'4', thumbnail: av4, title:'Divan NEW', date:'20.12.2018 11:00', vip: false, location:'Bat Yam', price:'100 USD', type: 'simple'},
        {key:'5', thumbnail: av5, title:'Divan NEW 2', date:'01.12.2018 07:35', vip: false, location:'Lod', price:'10000 USD', type: 'simple'}, ];

        const filters = [{key:'1',text:'flat poor aflat poor simple text'},{key:'2',text:'Filter2'},{key:'3',text:'Filter3  simple text  simple text  simple text'}];
        return (
            <Container>
                <HeaderBar>
                    Marketplace          
                </HeaderBar>                          
                 <Content style={{backgroundColor:'#fff'}}>
                    <FlatList
                        data={items}
                        ListHeaderComponent = { this.showHeader(filters) }
                        renderItem={({item}) => <MarketItem data = {item} nav={this.props.navigation.navigate}/>
                    }/>
                </Content>
                {/* <FooterBar newMessageRssCount={newMessageRssCount} selected ={3} nav={this.props.navigation.navigate}/> */}
            </Container>
        );
    }
}

const styles = {
    filterContainer:{
        flex: 1,
        flexDirection: 'row',       
        alignItems:'center',
        flexWrap:'wrap',
    },
    filterSubContainer:{
        margin: SPACE_SPEC,
        paddingHorizontal: SPACE_SPEC,
        flexDirection: 'row',      
        alignItems:'center',
        borderRadius: 2 * SPACE_SPEC, 
        borderColor: '#dbdbdb', 
        borderWidth: WIDTH_1PX, 
        backgroundColor: '#ededed',        
    },
    filterTextContainer:{
        justifyContent:'flex-start',
        paddingHorizontal: SPACE_SPEC
    },
    filterCloseContainer:{
        justifyContent:'flex-end',
    },  
    filterText: {
        color: 'grey',
        fontSize : 14
    }
}

export default connect(null, actions)(Marketplace);