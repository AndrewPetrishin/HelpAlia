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

class HeaderController extends Component {

    mainFooter = (nav, currentPage) => {
    }

    _onPressFooterBtn = (nav, page) => {
    }
   
    render() {   
        const { nav } = this.props;
        const currentPage = this.props.currentPage; 
        switch(currentPage){
            case PAGE_NAME_CHAT_ROOM: return <FooterSendMessage />;
            case PAGE_NAME_RSS_COMMENTS: return <FooterCommit />;
            default: return <FooterSendMessage />
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
    return {currentPage: state.currentPage};//{ title: state.header.title, leftBtn: state.header.left, rightBtn: state.header.right, search: state.header.search };
}

export default connect(mapStateToProps, actions)(HeaderController);