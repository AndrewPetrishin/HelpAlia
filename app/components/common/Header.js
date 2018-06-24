import React from 'react';
import { View, Dimensions, Text } from 'react-native';

const window = Dimensions.get('window');

const Header = (props) => {
    const { mainContainer } = styles;
    return (        
        <View style = {mainContainer}>
           <Text>{ props.children }</Text>
        </View>
    );
};

const styles = {
    mainContainer : {
        height : 80, 
        width : window.width,
        backgroundColor: '#f7f7f7', 
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor:'#d9d9d9',
        borderBottomWidth: 0.2,
    }
}

export {Header};
