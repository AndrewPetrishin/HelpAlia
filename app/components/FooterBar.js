import React from 'react';
import { Footer, FooterTab, Thumbnail } from 'native-base';
import { PixelRatio} from 'react-native';
import { FooterButton } from './';
import { withNavigation } from 'react-navigation';

const FooterBar = (props) => {
    var { newMessageRssCount, newMessageChatCount, userIcon, selected, nav } = props;
    var rss_icon = selected && selected == 1 ? require('../images/footer/rss_selected.png') : require('../images/footer/rss.png');
    var messenger_icon = selected && selected == 2 ? require('../images/footer/messenger.png') : require('../images/footer/messenger.png');
    var marketplace_icon = selected && selected == 3 ? require('../images/footer/marketplace_selected.png') : require('../images/footer/marketplace.png');
    var services_icon = selected && selected == 4 ? require('../images/footer/services_selected.png') : require('../images/footer/services.png');
    var cabinet_icon = userIcon != undefined ? { uri:userIcon } : require('../images/footer/no_user.png');
    const mainStyle = [styles.footerStyle, globalStyles.borderTopWidth2PX];
    return (
        <Footer>
            <FooterTab style={mainStyle}>
                <FooterButton icon={rss_icon} badge messageCount={newMessageRssCount} onPress={() => nav('HomeScreen')}/>
                <FooterButton icon={messenger_icon} badge messageCount={newMessageChatCount} onPress={() => nav('ChatList')}/>                    
                <FooterButton icon={marketplace_icon} widthIcon={36} onPress={() => console.log(4)}/>
                <FooterButton icon={services_icon} onPress={() => nav('HomeScreen')}/>
                <FooterButton icon={cabinet_icon} cabinet onPress={() => nav('HomeScreen')}/>
            </FooterTab>
        </Footer>    
    )
}

const globalStyles = require('../stylesheet');

const styles = {
    footerStyle: {
        backgroundColor:'#fff',
        borderTopColor: '#d9d9d9', 
    }
}

export {FooterBar};