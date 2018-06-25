import React from 'react';
import { View, Image, PixelRatio } from 'react-native';
import { Thumbnail, Text, List, ListItem, Left, Right, Body } from 'native-base';

AddPhoto = (image) => {    
    if(image != undefined && image){
        var thumbnailContainer = [styles.thumbnailContainer, globalStyles.marginRightSpec];
        var thumbnail = [styles.thumbnail, globalStyles.borderWidth1PX];
        return (
            <View style={thumbnailContainer}>
                <Thumbnail small source={image} style={thumbnail} />          
            </View>
        );
    }    
    return;
}

const globalStyles = require('../stylesheet');

const Comment = ({from, message, thumbnail, marginLeft}) => {
    if(message.length > 120){
        var small_msg = message.substring(0 , 180) + ' ...';
    }    

    const mainContainer = [styles.mainContainer, globalStyles.marginSpec];
    const thumbnailContainer = [styles.thumbnailContainer, globalStyles.marginRightSpec];
    return (
        <View style={mainContainer}>          
            {this.AddPhoto(thumbnail)}
            <View style={styles.bodyContainer}>            
                <Text style={styles.owner}>{from}:&nbsp;
                    <Text style={styles.message}>{ small_msg ? small_msg : message }</Text>
                </Text> 
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
    }
};