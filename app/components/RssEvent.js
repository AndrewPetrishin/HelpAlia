import React from 'react';
import { Thumbnail, Text } from 'native-base';
import { View } from 'react-native';

const globalStyles = require('../stylesheet');

const RssEvent = (props) => {
    var {key, thumbnail, text} = props.data;  
    const container = [styles.eventContainer, globalStyles.marginLeftSpec, globalStyles.marginRightSpec]; 
    const thumbnailStyle = [styles.eventThumbnail, globalStyles.borderWidth5PX];
    const textStyle = [styles.eventText, globalStyles.marginTopSpec, globalStyles.marginBottomSpec];
    if(text.length > 9){
        var smallText = text.substring(0 , 8) + '...';
    }    
    return (        
        <View style={container} key={key}>                      
                <Thumbnail source={thumbnail} style={thumbnailStyle}/>
                <Text style={textStyle}>{smallText?smallText:text}</Text>
        </View>
    );
}

export { RssEvent };

const styles = {
    eventContainer:{        
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    eventThumbnail:{
        borderColor:'#579ffb',
    },
    eventText:{
        fontSize:11,
    }
}