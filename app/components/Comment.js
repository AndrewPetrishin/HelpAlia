import React from 'react';
import { View, Image, PixelRatio } from 'react-native';
import { Thumbnail, Text, List, ListItem, Left, Right, Body } from 'native-base';

AddPhoto = (photo) => {
    if(photo != undefined && photo){
        return (
            <Left>
            <Thumbnail small source={photo} style={styles.thumbnail} />
          </Left>
        );
    }    
    return <Left/>;
}

const Comment = ({from, message, thumbnail}) => {
    if(message.length > 120){
        var small_msg = message.substring(0 , 150) + ' ...';
    }
    return (
        <List>
            <ListItem thumbnail>
                {this.AddPhoto(thumbnail)}
                <Body style={styles.bodyContainer}>
                    <Text style={styles.owner}>{from} :&nbsp;
                        <Text style={styles.message}>{ small_msg ? small_msg : message }</Text>
                    </Text> 
                </Body>             
            </ListItem>
        </List>   
    );
}

export { Comment };

const styles = {
    bodyContainer :{     
        marginLeft:0,
        paddingLeft:0                     
    },
    owner:{
        color: '#000000',
        fontWeight: 'bold',
    },
    message: {
        color: '#475566',
        fontWeight: 'normal'
    },
    thumbnail:{      
        borderColor : 'black', 
        borderWidth : 1 / PixelRatio.get(),
        paddingTop: 0,
        marginTop:0,
        alignSelf:'flex-start'
    }
};