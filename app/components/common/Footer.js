import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import { FooterButton } from './';

const window = Dimensions.get('window');

const Footer = () => {
    var {mainContainer, footerContainer} = styles;
    var rss_icon = require('../../images/footer/rss.png');
    var messenger_icon = require('../../images/footer/messenger.png');
    var marketplace_icon = require('../../images/footer/marketplace.png');
    var services_icon = require('../../images/footer/services.png');
    var cabinet_icon = require('../../images/footer/no_user.png');
    return (    
        <View style={footerContainer}>
            <View style={mainContainer}>
                <FooterButton link='rss' icon={rss_icon} width={33}/>
                <FooterButton link='messenger' icon={messenger_icon}/>
                <FooterButton link='marketplace' icon={marketplace_icon} width={36}/>
                <FooterButton link='service' icon={services_icon}/>
                <FooterButton link='cabinet' icon={cabinet_icon}/>            
            </View>
        </View>
    )
}

const styles = {
    footerContainer :{
        position :'absolute',
        bottom:0,
        flex:1,
        height : 80, 
        width : window.width,
        backgroundColor: '#fff',
        borderTopColor: '#d9d9d9', 
        borderTopWidth: 0.2,
    },
    mainContainer : {
        backgroundColor: '#fff', 
        justifyContent: 'space-around',
        alignItems: 'center',
        flex : 1,
        flexDirection: 'row',
    }
}

export {Footer};
