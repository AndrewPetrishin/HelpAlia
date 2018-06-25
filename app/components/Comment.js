import React from 'react';
import { View, Image, PixelRatio } from 'react-native';
import { Thumbnail, Text, List, ListItem, Left, Right, Body } from 'native-base';

AddPhoto = (image) => {
    if(image != undefined && image){
        return (
            <View style={styles.thumbnailContainer}>
                <Thumbnail small source={image} style={styles.thumbnail} />          
            </View>
        );
    }    
    return;
}

var marginSpec = 50 / PixelRatio.get();

const Comment = ({from, message, thumbnail, marginLeft}) => {
    if(message.length > 120){
        var small_msg = message.substring(0 , 180) + ' ...';
    }
    marginSpec = marginLeft?marginLeft:marginSpec;
    return (
        <View style={styles.mainContainer}>          
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
        margin: marginSpec,        
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
        marginRight : marginSpec
    },
    thumbnail:{    
        borderColor : 'black', 
        borderWidth : 1 / PixelRatio.get(),      
    }
};