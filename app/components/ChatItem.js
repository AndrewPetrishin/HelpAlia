import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Thumbnail, Text } from 'native-base';

const ChatItem = ({item, style, header}) => {  
    const mainContainer = header ? [styles.mainContainer, styles.mainContainerHeader] : styles.mainContainer;       
    const textHeaderColor = header ? {color:'#fff'} : {color:'#000'};
    const textSubHeaderColor = header ? {color:'#fff'} : {color:'#8e8e8e'}; 
    const thumbnail = item.thumbnail ? item.thumbnail : require('../images/footer/no_user.png');
    const rigthContainer = header ? styles.rigthContainer: [styles.rigthContainer, styles.borderBottom];
    return (        
        <View style={mainContainer}>
            <View style={styles.thumbnail}>
                <Thumbnail source={thumbnail}/>
            </View>
            <View style={rigthContainer}>
                <View style={styles.innerTextContainer}>
                    <Text style={[styles.innerTextHeader, textHeaderColor]}>{item.name}</Text>
                    <Text style={[styles.innerTextSubHeader, textSubHeaderColor]}>{item.description}</Text>
                </View>
                <View style={styles.goToChat}>
                    <Text style={styles.goToChatText}>></Text>
                </View>
            </View>
        </View>      
    );        
}

const styles = StyleSheet.create({    
    mainContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'stretch',
    },
    thumbnail:{
        marginLeft: 10,   
        marginTop: 10,
        marginBottom:10     
    },
    mainContainerHeader:{
        backgroundColor:'#579ffb'        
    },
    innerContainer:{
        margin:25,
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'stretch',
    },
    innerTextContainer:{
        flex:20,
        marginLeft: 15,
        justifyContent:'center',
    },
    innerTextHeader:{ 
        fontSize: 18,
        fontWeight:'bold'
    },
    innerTextSubHeader:{ 
        fontSize: 14,
    },
    goToChat:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
        marginRight:15
    },
    goToChatText:{
        color: '#c8c7cc'
    },
    rigthContainer:{
        flex:1,
        flexDirection:'row',   
        justifyContent:'flex-start',
        alignItems:'stretch'                     
    },
    borderBottom:{
        borderBottomWidth: 1,
        borderBottomColor: '#b8b8b8',
    }
});

export { ChatItem };