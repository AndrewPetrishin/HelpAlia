import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import { ChatItem } from './';

const ChatListItems = ({item, index, nav}) => {  
    if(index==0){
        return (        
            <View style={styles.mainContainer}>
                <ChatItem item={item} header nav={nav} />
                <View style={styles.innerContainer}>
                    <Text style={styles.insideText}>Your messages</Text>
                </View>
            </View>      
        );        
    }
    return (<ChatItem item={item} nav={nav}/>);
}

const styles ={
    mainContainer:{
        flex:1,
        backgroundColor:'#f7f7f7',
    },
    innerContainer:{
        margin:10,
    },
    insideText:{
        color:'#c8c7cc'
    }
};

export { ChatListItems };