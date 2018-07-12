import React, {Component} from 'react';
import { Footer, FooterTab, Thumbnail } from 'native-base';
import { FooterButton } from '.';
import { NavigationActions } from 'react-navigation';
import { PAGE_NAME_RSS, PAGE_NAME_CHAT_LIST, PAGE_NAME_MARKETPLACE, PAGE_NAME_SERVICES, WIDTH_1PX } from './Helper';

_onPress = (page) => {
    console.log('props = ' + this.props);
    console.log('onPress = ' + page);
    ///nav.dispatch(NavigationActions.navigate({ routeName: page }));
}

const FooterBar = (props) => {  
    var { newMessageRssCount, newMessageChatCount, userIcon, selected, nav } = props;    
    var rss_icon = selected && selected == PAGE_NAME_RSS ? require('../images/footer/rss_selected.png') : require('../images/footer/rss.png');
    var messenger_icon = selected && selected == PAGE_NAME_CHAT_LIST ? require('../images/footer/messenger.png') : require('../images/footer/messenger.png');
    var marketplace_icon = selected && selected == PAGE_NAME_MARKETPLACE ? require('../images/footer/marketplace_selected.png') : require('../images/footer/marketplace.png');
    var services_icon = selected && selected == PAGE_NAME_SERVICES ? require('../images/footer/services_selected.png') : require('../images/footer/services.png');
    var cabinet_icon = userIcon != undefined ? { uri:userIcon } : require('../images/footer/no_user.png');
    return (
        <Footer>
            <FooterTab style={styles.footerStyle}>
                <FooterButton icon={rss_icon} badge messageCount={newMessageRssCount} onPress={() => nav.dispatch(NavigationActions.navigate({ routeName: PAGE_NAME_RSS }))}/>
                <FooterButton icon={messenger_icon} badge messageCount={newMessageChatCount} onPress={() => nav._navigation.navigate(PAGE_NAME_CHAT_LIST)}/>                    
                <FooterButton icon={marketplace_icon} widthIcon={36} onPress={() => nav.dispatch(NavigationActions.navigate({ routeName: PAGE_NAME_MARKETPLACE }))}/>
                <FooterButton icon={services_icon} onPress={this._onPress("ddd")}/>
                <FooterButton icon={cabinet_icon} cabinet onPress={() => nav.dispatch(NavigationActions.navigate({ routeName: PAGE_NAME_MARKETPLACE }))}/>
            </FooterTab>
        </Footer>    
    )    
}

const styles = {
    footerStyle: {
        backgroundColor:'#fff',
        borderTopColor: '#d9d9d9', 
        borderTopWidth: WIDTH_1PX * 2,
    }
}

export { FooterBar };