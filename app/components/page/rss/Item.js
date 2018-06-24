import React from 'react';
import {  View, Text, Image, Dimensions } from 'react-native';
import AddComment from './AddComment';
import Comment from './Comment';

const window = Dimensions.get('window');

const Item = (props) => {
    var {key, avatar, name, news_image, message, count_comments, userAvatar, style} = props.data;
    var fontSize = props.fontSize ? { fontSize : props.fontSize }: {fontSize : 22};
    //var itemOwnerNameStyle = {...styles.itemOwnerName, fontSize};
    var itemOwnerNameStyle = {...styles.itemOwnerName};
    var commentStyle = {...styles.comment};
    var descCommentStyle = {...styles.descriptionComments};
    return (
        <View style={styles.itemContainer} key={key}>
            <View style={styles.itemOwnerContainer}>
                <Image source={avatar} style={styles.itemAvatar}/>
                <Text style={itemOwnerNameStyle}>{name}</Text>
            </View>
            <Image source={news_image} style={styles.itemMainImage}/> 
            <Comment name={name} message={message} style={commentStyle}/>
            <View style={styles.comment}>               
                <Text style={descCommentStyle}>Comments ({count_comments})</Text>
            </View>
            <AddComment avatar={userAvatar} style={{marginLeft:20}}/>
        </View>
    );
}

const styles = {
    itemContainer:{
        borderBottomColor: '#b8b8b8',
        borderStyle: 'solid',
        borderBottomWidth: 0.2,
    },
    itemOwnerContainer:{
        margin : 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    itemAvatar:{
        width:32,
        height:32,
        borderRadius: 32,
    },
    itemOwnerName:{
        fontSize: 30,
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

export default Item;