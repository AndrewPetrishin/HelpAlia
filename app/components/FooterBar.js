import React from 'react';
import { Footer, FooterTab } from 'native-base';
import { PixelRatio } from 'react-native';
import { FooterButton } from './';

const FooterBar = (props) => {
    var { newMessageRssCount, newMessageChatCount, userIcon } = props;
    var rss_icon = require('../images/footer/rss.png');
    var messenger_icon = require('../images/footer/messenger.png');
    var marketplace_icon = require('../images/footer/marketplace.png');
    var services_icon = require('../images/footer/services.png');
    var cabinet_icon = userIcon != undefined ? userIcon : require('../images/footer/no_user.png');

    return (
        <Footer>
            <FooterTab style={styles.footerStyle}>
                <FooterButton icon={rss_icon} badge messageCount={newMessageRssCount}/>
                <FooterButton icon={messenger_icon} badge messageCount={newMessageChatCount}/>                    
                <FooterButton icon={marketplace_icon} widthIcon={36}/>
                <FooterButton icon={services_icon}/>
                <FooterButton icon={cabinet_icon}/>
            </FooterTab>
        </Footer>    
    )
}

const styles = {
    footerStyle: {
        backgroundColor:'#fff',
        borderTopColor: '#d9d9d9', 
        borderTopWidth: 2 / PixelRatio.get()
    }
}

export { FooterBar };