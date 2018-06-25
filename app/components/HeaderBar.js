import React from 'react';
import { Header, Left, Body, Right, Title, Button, Icon, Text } from 'native-base';
import { PixelRatio } from 'react-native';

// androidStatusBarColor="#f7f7f7"

const HeaderBar = (props) => {
    return (
        <Header style={styles.mainContainer}>  
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

const styles = {
    mainContainer: {
        backgroundColor:'#f7f7f7',
        borderBottomColor: '#d9d9d9',
        borderBottomWidth: 2 / PixelRatio.get(),
    }
}

export { HeaderBar };