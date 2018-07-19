import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderBar } from './HeaderBar';
import { BackHandler } from 'react-native';
import { PAGE_NAME_RSS, PAGE_NAME_CHAT_ROOM, PAGE_NAME_CHAT_LIST, PAGE_NAME_RSS_COMMENTS, PAGE_NAME_MARKETPLACE, PAGE_NAME_SERVICES, WIDTH_1PX } from './Helper';
import { FooterSendMessage } from './FooterSendMessage';
import { FooterCommit } from './FooterCommit';
import { Footer, FooterTab } from 'native-base';
import { NavigationActions } from 'react-navigation';
import * as actions from '../actions';
import { FooterButton } from './';

class HeaderController extends Component {

    constructor(props) {
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

    mainFooter = (nav, currentPage) => {
    }

    _onPressFooterBtn = (nav, page) => {
    }
   
    render() {   
        const { nav, title } = this.props;
        return (<HeaderBar>{title}</HeaderBar>);
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
    return {title: state.currentPage.header};//{ title: state.header.title, leftBtn: state.header.left, rightBtn: state.header.right, search: state.header.search };
}

export default connect(mapStateToProps, actions)(HeaderController);