import React from 'react';
import { Header, Left, Body, Right, Title, Button, Icon, Text } from 'native-base';

// androidStatusBarColor="#f7f7f7"

const HeaderBar = (props) => {
    const mainContainer = [styles.headerMainContainer, globalStyles.borderBottomWidth1PX];
    const headerText = props.children;
    const {left, right} = props;
    return (
        <Header style={mainContainer}>  
            {this.showLeft(left)}
            <Body>
                <Title style={{color:'black'}}>{headerText}</Title>
            </Body>
            {this.showRight(right)}
        </Header>
    )
}

showLeft = (base) => {
    if(base){
        return (
        <Left>
            <Button onPress={() => this.props.navigation.goBack()}>               
                <Icon name='arrow-back' />
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