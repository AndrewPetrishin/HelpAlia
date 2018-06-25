import React from 'react';
import { Header, Left, Body, Right, Title, Button, Icon, Text } from 'native-base';

// androidStatusBarColor="#f7f7f7"

const HeaderBar = (props) => {
    const mainContainer = [styles.headerMainContainer, globalStyles.borderBottomWidth1PX];
    return (
        <Header style={mainContainer}>  
            {/* <Left>
                <Button transparent>
                    <Icon name='arrow-back' />
                </Button>
            </Left> */}
            <Left/>
            <Body>
                <Title style={{color:'black'}}>{props.children}</Title>
            </Body>
            <Right/>
            {/* <Right>
                <Button >
                    <Text style={{color:'black'}}>{PixelRatio.get()}</Text>
                </Button>
            </Right> */}
        </Header>
    )
}

const globalStyles = require('../stylesheet');

const styles = {
    headerMainContainer: {
        backgroundColor:'#f7f7f7',
        borderBottomColor: '#d9d9d9',
    }
}

export { HeaderBar };