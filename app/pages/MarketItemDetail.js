import React, { Component } from 'react';
import { Container, List, Content, Text, Thumbnail, Input} from 'native-base';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import { FooterBar, HeaderBar, Comment, SearchInput, MarketItem } from '../components';
import { SPACE_SPEC, WIDTH_1PX } from '../components/Helper';

class MarketplaceItemDetails extends Component {    
    
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
        var av1 = require('../images/mock/pc.png');    
        var av2 = require('../images/mock/sofa.jpg');
        var av3 = require('../images/mock/sofa2.jpg');     
        const filters = [{key:'1',text:'flat'},{key:'2',text:'two doors'},{key:'3',text:'small'}];
        return (
            <Container>
                 <Content style={{backgroundColor:'#fff'}}>
                    <Image source='' resizeMode='curtainer'/>
                </Content>
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

export default MarketplaceItemDetails;