import React from 'react';
import { View, Image, PixelRatio } from 'react-native';
import { Thumbnail, Text, List, ListItem, Left, Right, Body } from 'native-base';

AddPhoto = (image) => {    
    if(image != undefined && image){
        const thumbnailContainer = [styles.thumbnailContainer, globalStyles.marginRightSpec];
        const thumbnail = [styles.thumbnail, globalStyles.borderWidth1PX];
        return (
            <View style={thumbnailContainer}>
                <Thumbnail small source={image} style={thumbnail} />          
            </View>
        );
    }    
    return;
}

AddTimestamp = (time) => {
    const timeStyle = [styles.timeStyle];
    if(time != undefined && time){
        return (       
            <View style={globalStyles.marginTopSpec}>
                <Text style={timeStyle}>{time}</Text>
            </View>
        );
    }
}

const globalStyles = require('../stylesheet');

const Comment = ({from, message, thumbnail, time, shortLength, borderBottom}) => {
    if(shortLength && message.length > shortLength){        
        var small_msg = message.substring(0 , shortLength) + ' ...';
    }    
    const mainContainer = [styles.mainContainer, globalStyles.marginSpec];    
    const thumbnailContainer = [styles.thumbnailContainer, globalStyles.marginRightSpec];
    const borderStyle = borderBottom ? globalStyles.borderBottomWidth1PX : {};
    return (
        <View style={borderStyle}>
            <View style={mainContainer}>          
                {this.AddPhoto(thumbnail)}
                <View style={styles.bodyContainer}>            
                    <Text style={styles.owner}>{from}:&nbsp;
                        <Text style={styles.message}>{ small_msg ? small_msg : message }</Text>
                    </Text> 
                    {this.AddTimestamp(time)}
                </View>             
            </View>   
        </View>
    );
}

export { Comment };

const styles = {
    mainContainer:{
        flex:1,   
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    bodyContainer :{           
        flexDirection:'row',
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    owner:{
        color: '#000000',
        fontWeight: 'bold',
    },
    message: {
        color: '#475566',
        fontWeight: 'normal'
    },
    thumbnailContainer:{
        flexDirection:'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    thumbnail:{    
        borderColor : 'black',     
    },
    timeStyle:{
        color:'#999999',
        fontSize : 12
    }
};