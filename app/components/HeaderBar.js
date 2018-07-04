import React from 'react';
import { Image } from 'react-native';
import { Header, Left, Body, Right, Title, Button, Icon, Text, Item, Input } from 'native-base';

// androidStatusBarColor="#f7f7f7"

const HeaderBar = (props) => {
    const mainContainer = [styles.headerMainContainer, globalStyles.borderBottomWidth1PX];
    const headerText = props.children;
    const nav = props.nav;
    const {left, right} = props;
    return (
        <Header style={mainContainer} transparent>  
            {this.showLeft(left, nav)}
            <Body >
                <Title style={{color:'black'}}>{headerText}</Title>
            </Body>
            {this.showRight(right)}
        </Header>
    )
}

showLeft = (base, nav) => {
    if(base){
        const imgBack = require('../images/header/back.png');
        return (
        <Left>
            <Button onPress={() => nav(base)} style={{backgroundColor : '#f7f7f7', borderColor : '#f7f7f7', height:40}}>               
                <Image source= {imgBack} />
            </Button>
        </Left>);
    }
    return <Left/>;    
}

showRight = (base) => {
    return <Right/>
            // <Right>
            //     <Button >
            //         <Text style={{color:'black'}}>{PixelRatio.get()}</Text>
            //     </Button>
            // </Right> 
}

const globalStyles = require('../stylesheet');

const styles = {
    headerMainContainer: {
        backgroundColor:'#f7f7f7',
        borderBottomColor: '#d9d9d9',
    }
}

export { HeaderBar };