import React from 'react';
import { View, Text, Image } from 'react-native';

AddPhoto = (photo) => {
    if(photo){
        return (
            <Image source={photo} style={commentAvatar}/>
        );
    }
    return photo;
}

const Comment = ({name, message, photo, style}) => {
    if(message.length > 120){
        var small_msg = message.substring(0 , 120) + '...';
    }
    return (
        <View style={[styles.commentContainer, style]}>
            {this.AddPhoto(photo)}
            <Text style={styles.commentOwner}>{name} : 
                <Text style={styles.commentMessage}>{small_msg? small_msg : message}</Text>
            </Text> 
        </View>
    );
}

export default Comment;

const styles = {
    commentContainer :{
        flex : 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    commentOwner:{
        color: '#000000',
        fontWeight: 'bold',
    },
    commentMessage: {
        color: '#475566',
        fontWeight: 'normal'
    },
    commentAvatar:{
        width : 64,
        height : 64
    }
};