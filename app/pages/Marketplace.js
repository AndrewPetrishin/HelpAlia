import React, { Component } from 'react';
import { Container, List, Content, Text, Thumbnail, Input} from 'native-base';
import { View, FlatList, Image } from 'react-native';
import { FooterCommit, HeaderBar, Comment } from '../components/';

class Marketplace extends Component {    
    
    showHeader = (filters) => {    
        const filtersView = () => {
            for (let filter of filters) {
                
            }
        }
        return (
            <View>
                {/* <Searchbar /> */}
                {/* <ListFilters> */}
            </View>
        );    
    }

    render() {
        var av1 = require('../images/mock/lamp.jpg');
        var av2 = require('../images/mock/new-desks.jpg');
        var av3 = require('../images/mock/pc.png');    
        var av4 = require('../images/mock/sofa.jpg');
        var av5 = require('../images/mock/sofa2.jpg');
        
        var items = [{key:'1', thumbnail: av2, title:'Rent a flat for familly', date:'Today 15:19', location:'Tel Aviv', price:'1200 USD', type: 'vip'},
        {key:'2', thumbnail: av1, title:'Lamp antiquare!!!!!!', date:'Yesterday 10:00', vip: false, location:'Tel Aviv', price:'4200 USD', type: 'new'},
        {key:'3', thumbnail: av3, title:'Super puper computer ', date:'22.12.2018 12:00', vip: false, location:'Lod', price:'10000 USD', type: 'vip'},
        {key:'4', thumbnail: av4, title:'Divan NEW', date:'20.12.2018 11:00', vip: false, location:'Bat Yam', price:'100 USD', type: 'vip'}, ];

        return (
            <Container style={{backgroundColor:'#fff'}}>
                <HeaderBar>
                    Marketplace
                </HeaderBar>
                <FlatList
                    data={items}
                    ListHeaderComponent = { this.showHeader() }
                    renderItem={({item}) => <MarketplaceItem data = {item} nav={this.props.navigation.navigate}/>
                }/>
                <FooterCommit thumbnailSrc = {userAvatar}/>
            </Container>
        );
    }
}

const styles = {
    itemContainer:{
        borderBottomColor: '#b8b8b8'
    },
    itemOwnerContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    itemThumbnail:{       
        borderColor : 'black', 
    },
    itemOwnerName:{
        color: '#262626',
        fontWeight: 'bold',
    },
    itemMainImage:{
        width: window.width,
    },  
    itemMargin:{
    },
    descriptionComments: {
        fontWeight: 'normal',
        color: '#a8a8a8'
      }
}

export default Marketplace;