import React from 'react';
import { Header, Left, Body, Right, Title, Button, Icon, Text, Thumbnail, Item, Input, List } from 'native-base';
import { View, Image } from 'react-native';
import { Comment } from './';

const RssItem = (props) => {
    var {key, thumbnail, from, news_image, message, count_comments, userAvatar, style} = props.data;
   
    var itemOwnerName = [styles.itemOwnerName, globalStyles.marginSpec];
    var itemMarginSpec = [styles.itemMargin, globalStyles.marginLeftSpec, globalStyles.marginRightSpec];
    var itemMainContainer = [styles.itemContainer, globalStyles.borderBottomWidth1PX, globalStyles.paddingBottomSpec];
    var itemOwnerContainer = [styles.itemOwnerContainer, globalStyles.marginSpec];
    var itemThumbnail = [styles.itemThumbnail, globalStyles.borderWidth1PX];
    return (        
        <View>        
            <View style={itemMainContainer} key={key}>            
                <View style={itemOwnerContainer}>
                    <Thumbnail small source={thumbnail} style={itemThumbnail}/>
                    <Text style={itemOwnerName}>{from}</Text>
                </View>
                <Image source={news_image} style={styles.itemMainImage}/> 
                <Comment from={from} message={message}/>
                <View style={itemMarginSpec}>               
                    <Text style={styles.descriptionComments}>Comments ({count_comments})</Text>
                </View>                
                {/* <View style={styles.itemOwnerContainer}>
                    <Thumbnail small source={userAvatar} style={itemThumbnail}/>
                    <Input placeholder='yours comment' style={{paddingLeft:20, paddingRight:20, borderRadius:20, borderWidth:1/PixelRatio.get(), borderColor:'red', height:32, fontSize:14, lineHeight:32, marginLeft:10}}/>
                </View> */}
            </View>
        </View>        
    );
}

const globalStyles = require('../stylesheet');

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

export { RssItem };