import React from 'react';
import { View, Image } from 'react-native';
import { Item, Input } from 'native-base';
import { SPACE_SPEC, WIDTH_1PX } from './Helper';

const SearchInput = (props) => {
    const searchImg = require('../images/header/search.png');
    return (        
        <View style={styles.mainContainer}>
            <Item rounded style={styles.searchContainer}>
                <Image source={searchImg} style={styles.imageStyle}/>
                <Input placeholderTextColor={'#c2c2c2'} placeholder='search' style={styles.inputStyle}/>
            </Item>
        </View>
    );
}

const styles={
    mainContainer: {
        flex:1, 
        margin:SPACE_SPEC, 
        marginBottom:SPACE_SPEC
    },
    searchContainer: {
        height:30, 
        paddingHorizontal:SPACE_SPEC,
        backgroundColor:'#ededed',
        borderColor:'#dbdbdb'
    },
    imageStyle: { 
        marginLeft : SPACE_SPEC
    },
    inputStyle: {
        color : '#c2c2c2',
    }
};

export { SearchInput };