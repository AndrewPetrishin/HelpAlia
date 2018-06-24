import React, { Component } from 'react';
import {  View, TextInput, Image, Dimensions} from 'react-native';

const window = Dimensions.get('window');

const AddComment = ({avatar, style}) => {
    return (
        <View style={[style, styles.commentContainer]}>
            <Image source={avatar} style={styles.commentAvatar} />  
            <TextInput autoCorrect={false} underlineColorAndroid={'rgba(0,0,0,0)'} style={styles.commentInput} placeholder="Your comment"/>
        </View>
    );
}

export default AddComment;

const styles = {
    commentContainer :{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    commentAvatar : {
        height:32,
        width:32
    },
    commentInput:{
        paddingLeft : 15,
        paddingRight: 15,
        marginLeft : 20,
        borderRadius: 60,
        borderColor: '#cecece',
        borderStyle: 'solid',
        borderWidth: 1,
        height: 64,        
        width : window.width - 100
    }
};
