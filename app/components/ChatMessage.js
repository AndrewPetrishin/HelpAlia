import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Thumbnail, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { MESSAGE_TYPE_LOCAL, MESSAGE_TYPE_ADMIN, WIDTH_1PX, SPACE_SPEC} from './Helper'

showThumbnail = (thumbnail) => {
    return (
        <View style={styles.thumbnailContainer}>
            <Thumbnail small source={thumbnail} style={styles.thumbnailImage}/>
        </View>
    );
}

showAttach = (data) => {
    return;
}

showMessageBox = (data) => {
    var headerName = styles.headerName;
    var headerTime = styles.headerTime;
    var messageText = styles.messageText;
    var mainContainerBox = styles.mainContainerBox;
    switch(data.type){        
        case MESSAGE_TYPE_ADMIN:
            headerName = styles.headerNameAdmin;
            headerTime = styles.headerTimeAdmin;
            messageText = styles.messageTextAdmin;    
            mainContainerBox = [mainContainerBox, styles.mainContainerBg];               
        break;
        case MESSAGE_TYPE_LOCAL:
            mainContainerBox = styles.mainContainerBoxLocal;
            headerName = styles.headerNameLocal;
            headerTime = styles.headerTimeLocal;
            messageText = styles.messageTextLocal;    
            mainContainerBox = [mainContainerBox, styles.mainContainerBgLocal];
        break;
        default:
            mainContainerBox = [mainContainerBox, styles.mainContainerBg];
        };
    return (
        <View style={ mainContainerBox }>
            <View style={ styles.headerMessageBox }> 
                <View style={ styles.headeLeftContainer }>
                    <Text style={headerName}>{data.owner}</Text>
                </View>
                <View style={ styles.headeRightContainer }>
                    <Text style={headerTime}>{data.time}</Text>
                </View>
            </View>    
            { this.showAttach(data) }        
            <View style = {styles.containerText}>
                <Text style={messageText}>{data.text}</Text>
            </View>
        </View>
    );
}

const ChatMessage = (props) => {  
    const { data, nav } = props;
    switch(data.type){
        case  MESSAGE_TYPE_ADMIN:
            return (
                <TouchableOpacity onPress = {() => nav('HomeScreen', { id : 3 })}>
                <View style={styles.mainContainer}>                            
                        {this.showMessageBox(data)}                    
                        {this.showThumbnail(data.thumbnail)}                     
                </View>
            </TouchableOpacity> );     
        case MESSAGE_TYPE_LOCAL:
            return (
                <View style={styles.mainContainer}>   
                    {this.showMessageBox(data)}
                    {this.showThumbnail(data.thumbnail)}      
                </View>);
        default:
            return (
                <View style={styles.mainContainer}>
                    {this.showThumbnail(data.thumbnail)}      
                    {this.showMessageBox(data)}                           
                </View>);
    }    
}

const styles = StyleSheet.create({    
    mainContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'stretch',
        flexWrap : 'nowrap'
    },
    thumbnailContainer:{
        margin: SPACE_SPEC,
        justifyContent:'flex-end',
    },
    thumbnailImage :{
        borderWidth: 1,
        borderColor:'#000',
    },   
    headerName:{
        color : '#686d71',
        fontWeight : 'bold'
    },
    headerNameAdmin:{
        color : '#579ffb',
        fontWeight : 'bold'
    },
    headerNameLocal:{
        color : '#fff',
        fontWeight : 'bold'
    },
    headerTime:{
        color : '#686d71',
    },
    headerTimeAdmin:{
        color : '#579ffb',
    },
    headerTimeLocal:{
        color : '#fff',
    },
    messageText:{
        color : '#22212a',
    },
    messageTextAdmin:{
        color : '#22212a',
    },
    messageTextLocal:{
        color : '#fff',
    },
    mainContainerBg:{
        backgroundColor:'#eff0f0',
    },
    mainContainerBgLocal:{
        margin: SPACE_SPEC,
        padding : SPACE_SPEC,
        flex:1,        
        borderRadius: 20,
        backgroundColor:'#579ffb',
    },
    mainContainerBox:{
        margin: SPACE_SPEC,
        padding : SPACE_SPEC,
        flex:1,        
        borderRadius: 20
    },
    headerMessageBox:{    
        marginLeft: SPACE_SPEC,
        marginRight: SPACE_SPEC,    
        paddingBottom : SPACE_SPEC,        
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-start',
    },
    headeLeftContainer:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    headeRightContainer:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    containerText:{
        flex:1,
        marginLeft: SPACE_SPEC,
        marginRight: SPACE_SPEC,     
        marginBottom: SPACE_SPEC,    
    }
});

export { ChatMessage };