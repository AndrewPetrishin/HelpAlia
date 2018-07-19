import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FooterBar } from './FooterBar';
import { PAGE_NAME_RSS, PAGE_NAME_CHAT_ROOM, PAGE_NAME_CHAT_LIST, PAGE_NAME_RSS_COMMENTS, PAGE_NAME_MARKETPLACE, PAGE_NAME_SERVICES, WIDTH_1PX } from './Helper';
import { FooterSendMessage } from './FooterSendMessage';
import { FooterCommit } from './FooterCommit';
import { Footer, FooterTab } from 'native-base';
import { NavigationActions } from 'react-navigation';
import * as actions from '../actions';
import { FooterButton } from './';

class FooterController extends Component {

    mainFooter = (nav) => {        
        const { currentPage } = this.props;
        const userThumbnail = this.props.user.thumbnail;
        const newRSSmessage = this.props.user.rssMsg;
        const newChatMessage = this.props.user.chatMsg;        
        const rss_icon = currentPage && currentPage == PAGE_NAME_RSS ? require('../images/footer/rss_selected.png') : require('../images/footer/rss.png');
        const messenger_icon = currentPage && currentPage == PAGE_NAME_CHAT_LIST ? require('../images/footer/messenger.png') : require('../images/footer/messenger.png');
        const marketplace_icon = currentPage && currentPage == PAGE_NAME_MARKETPLACE ? require('../images/footer/marketplace_selected.png') : require('../images/footer/marketplace.png');
        const services_icon = currentPage && currentPage == PAGE_NAME_SERVICES ? require('../images/footer/services_selected.png') : require('../images/footer/services.png');
        const cabinet_icon = userThumbnail != undefined ? { uri:userThumbnail } : require('../images/footer/no_user.png');
        return (
            <Footer>
                <FooterTab style={styles.footerStyle}>
                    <FooterButton icon={rss_icon} badge messageCount={newRSSmessage} onPress={() => this._onPressFooterBtn(nav, PAGE_NAME_RSS)}/>
                    <FooterButton icon={messenger_icon} badge messageCount={newChatMessage} onPress={() => this._onPressFooterBtn(nav, PAGE_NAME_CHAT_LIST)}/>                    
                    <FooterButton icon={marketplace_icon} widthIcon={36} onPress={() => this._onPressFooterBtn(nav, PAGE_NAME_MARKETPLACE)}/>
                    <FooterButton icon={services_icon} onPress={() => this._onPressFooterBtn(nav, PAGE_NAME_RSS)}/>
                    <FooterButton icon={cabinet_icon} cabinet onPress={() => this._onPressFooterBtn(nav, PAGE_NAME_RSS)}/>
                </FooterTab>
            </Footer>    
        )        
    }

    _onPressFooterBtn = (nav, page) => {
        this.props.setCurrentPage(page);
        nav.dispatch(NavigationActions.navigate({ routeName: page }));
    }
   
    render() {   
        const { nav, currentPage } = this.props; 
        switch(currentPage){
            case PAGE_NAME_CHAT_ROOM: return <FooterSendMessage />;
            case PAGE_NAME_RSS_COMMENTS: return <FooterCommit />;
            default: return this.mainFooter(nav);
        }
    }
}

const styles = {
    footerStyle: {
        backgroundColor:'#fff',
        borderTopColor: '#d9d9d9', 
        borderTopWidth: WIDTH_1PX * 2,
    }
}

const mapStateToProps = state => {
    return { currentPage : state.currentPage.name, user : state.user };
}

export default connect(mapStateToProps, actions)(FooterController);