import React, { Component } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native';
import { Text } from 'native-base';
import { SPACE_SPEC, WIDTH_1PX, GET_MARKET_BG_COLOR, MAIN_BORDER_COLOR, MARKET_TYPE_VIP, MARKET_TYPE_ADV } from './Helper';

const MarketItem = (props) => {
    const { data, nav } = props;  
    if(data.type === MARKET_TYPE_ADV){
        return (
            <View>
                <Image source={data.thumbnail} style={{ width: 400}} resizeMode={'stretch'}/>
            </View>
        );
    }
    const mainContainer =[styles.mainContainer, { backgroundColor : GET_MARKET_BG_COLOR(data.type) }];
    return (       
        <View style={mainContainer}>
            <View style={styles.thumbnailContainer}>
                <Image source={data.thumbnail} resizeMode='cover' style={styles.thumbnailImage} />
            </View>   
            <View style={styles.mainTextContainer}>
                <View style={styles.textHeaderContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleStyle}>{data.title}</Text>
                    </View>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateStyle}>{data.date}</Text>
                    </View>
                </View>
                <View style={styles.textFooterContainer}>
                    <View style={styles.priceContainer}>                        
                        {this.showAdress(data)}
                    </View>
                    <View style={styles.vipContainer}>
                        {this.showVipImage(data.type)}
                    </View>
                </View>
            </View>                             
        </View>       
    );    
}

showAdress = (data) =>{
    const adressFormat = data.location ? data.location : 'no location';
    const price = data.price;
    const priceText = data.priceText;    
    const pinImg = require('../images/pin.png');
    return (
        <View>
            <View style={styles.locationContainer}>
                <Image source={pinImg} style={{width:10, height:14}}/>
                <Text style={styles.localStyle}>{adressFormat}</Text>
            </View>
             <Text style={styles.priceStyle}>{priceText}{price}</Text>            
        </View>
    );
}

showVipImage = (type) =>{
    if(type === MARKET_TYPE_VIP) {
        const vipImg = require('../images/vip.png');
        return <Image source={vipImg}/>;
    }
}

const styles = StyleSheet.create({
    mainContainer: {       
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-start',
        margin:  SPACE_SPEC,
        borderRadius: 2 * SPACE_SPEC,
        borderColor: MAIN_BORDER_COLOR,
        borderWidth: WIDTH_1PX,
    },
    thumbnailContainer:{
        margin: 5,
    }, 
    thumbnailImage:{
        borderRadius: 2 * SPACE_SPEC,
        width: 100,
        height: 100
    },
    mainTextContainer:{        
        margin: SPACE_SPEC,  
        flex:1,
        alignItems:'stretch'     
    },
    textHeaderContainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'stretch',
    },
    titleContainer:{
        flex:1,
        justifyContent:'flex-start',
    },    
    dateContainer:{
        justifyContent:'flex-start',
        marginHorizontal: SPACE_SPEC,
    },
    textFooterContainer:{
        flexDirection: 'row',
        alignItems:'stretch'          
    },
    priceContainer:{  
        flex:1,      
        justifyContent:'flex-end',
    },
    locationContainer:{
        flexDirection:'row',        
        alignItems:'center',
        justifyContent:'flex-start'
    },
    vipContainer:{
        justifyContent:'flex-end',
        margin: SPACE_SPEC
    },
    titleStyle:{
        color: '#686d71',
    },
    dateStyle:{
        color: '#141623',
        fontSize: 12,        
        lineHeight: 22,
    },
    priceStyle:{
        color: '#141623',
        fontWeight : 'bold',
    },
    localStyle:{
        color: '#686d71',
        marginHorizontal: SPACE_SPEC,
        fontSize: 12,   
    },
    vipIconStyle:{

    }    
});

export { MarketItem };