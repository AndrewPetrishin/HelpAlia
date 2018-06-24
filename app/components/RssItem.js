import React from 'react';
import { Header, Left, Body, Right, Title, Button, Icon, Text, Thumbnail, Item, Input } from 'native-base';
import { PixelRatio, View, Image } from 'react-native';
import { Comment } from './';

const RssItem = (props) => {
    var {key, thumbnail, from, news_image, message, count_comments, userAvatar, style} = props.data;
    var itemOwnerNameStyle = {...styles.itemOwnerName};
    var commentStyle = {...styles.comment};
    var descCommentStyle = {...styles.descriptionComments};



    return (
        <View style={styles.itemContainer} key={key}>
            <View style={styles.itemOwnerContainer}>
                <Thumbnail small source={thumbnail} style={styles.itemThumbnail}/>
                <Text style={itemOwnerNameStyle}>{from}</Text>
            </View>
            <Image source={news_image} style={styles.itemMainImage}/> 
            <Comment from={from} message={message} thumbnail={thumbnail}/>
            <View style={styles.comment}>               
                <Text style={descCommentStyle}>Comments ({count_comments})</Text>
            </View>

            <View style={styles.itemOwnerContainer}>
                <Thumbnail small source={userAvatar} style={styles.itemThumbnail}/>
                {/* <Input placeholder='yours comment' style={{paddingLeft:20, paddingRight:20, borderRadius:20, borderWidth:1/PixelRatio.get(), borderColor:'red', height:32, fontSize:14, lineHeight:32, marginLeft:10}}/> */}
            </View>
        </View>
    );
}

const styles = {
    itemContainer:{
        borderBottomColor: '#b8b8b8',
        borderBottomWidth: 1 / PixelRatio.get(),
    },
    itemOwnerContainer:{
        margin : 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    itemThumbnail:{       
        borderColor : 'black', 
        borderWidth : 1 / PixelRatio.get()
    },
    itemOwnerName:{
        marginLeft: 10,
        color: '#262626',
        fontWeight: 'bold',
    },
    itemMainImage:{
        width: window.width
    },  
    comment :{
        margin:10,
    },
    descriptionComments: {
        fontWeight: 'normal',
        color: '#a8a8a8'
      }
}

export { RssItem };