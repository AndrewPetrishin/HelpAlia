import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Header, Left, Body, Right, Title, Button, Icon, Text, Item, Input } from 'native-base';
import { SPACE_SPEC, WIDTH_1PX } from './Helper';

// androidStatusBarColor="#f7f7f7"

const HeaderBar = (props) => {
    const headerText = props.children;
    const nav = props.nav;
    const {back, left, right, noborder} = props;
    const mainContainer = noborder? styles.headerMainContainer : [styles.headerMainContainer , styles.headerMainContainerWithBorder];
    const titleContainer = styles.titleContainer;//left? styles.titleContainerAlignLeft : styles.titleContainer;
    return (
        <Header style={mainContainer}>  
            {this.showBackBtn(left, nav)}
            <View style={ titleContainer }>
                <Title style={{color:'black'}}>{headerText}</Title>
            </View>
            {this.showRight(right, nav)}
        </Header>
    )
}

showBackBtn = (base, nav) => {
    if(base){
        const imgBack = require('../images/header/back.png');
        return (
            <View style={{alignItems:'center', justifyContent : 'center'}}>
                <TouchableOpacity onPress={() => nav(base)}>               
                    <Image source= {imgBack} style={{ width:14, height:14  }}/>
                </TouchableOpacity>
            </View>
        );
    }    
}

showRight = (base) => {
    return ;
            // <Right>
            //     <Button >
            //         <Text style={{color:'black'}}>{PixelRatio.get()}</Text>
            //     </Button>
            // </Right> 
}

const styles = {
    headerMainContainer: {
        backgroundColor:'#f7f7f7',
    },
    headerMainContainerWithBorder :{
        borderBottomColor: '#d9d9d9',
        borderBottomWidth : WIDTH_1PX
    },
    titleContainer: {
        flex:1, 
        alignItems:'center', 
        justifyContent : 'center'
    },
    titleContainerAlignLeft: {
        flex:1, 
        alignItems:'flex-start', 
        marginLeft: SPACE_SPEC,
        justifyContent : 'center'
    }
}

export { HeaderBar };