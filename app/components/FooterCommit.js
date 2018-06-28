import React from 'react';
import { Footer, FooterTab, Item, Input, Thumbnail } from 'native-base';
import { View, } from 'react-native';

const FooterCommit = (props) => {
    var { thumbnailSrc } = props;       
    var thumbnail = thumbnailSrc; //{uri: thumbnailSrc}
    const mainStyle = [styles.footerStyle, globalStyles.borderTopWidth2PX];
    const mainContainer = [styles.mainContainer, globalStyles.marginLeftSpec, globalStyles.marginRightSpec];
    const itemThumbnail = [styles.itemThumbnail,  globalStyles.marginRightSpec, globalStyles.borderWidth1PX];
    return (
        <Footer style={mainStyle}>            
            <View style={mainContainer}>
                <Thumbnail small source={thumbnail} style={itemThumbnail}/>
                <Item rounded style={{flex:1}}>
                    <Input placeholder='Your comment' style={{flex:1}}/>
                </Item>
            </View>             
        </Footer>    
    )
}

const globalStyles = require('../stylesheet');

const styles = {
    footerStyle: {
        backgroundColor:'#fff',
        borderTopColor: '#d9d9d9', 
        alignItems:'center',
        justifyContent:'center',        
    },
    itemThumbnail:{
        borderColor : '#000'
    },
    mainContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',     
        alignItems:'center',   
    }
}

export { FooterCommit };