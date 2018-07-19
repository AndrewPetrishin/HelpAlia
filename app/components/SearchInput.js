import React from 'react';
import { View, Image } from 'react-native';
import { Item, Input } from 'native-base';
import { SPACE_SPEC} from '../components/Helper';
import {StyleSheet} from 'react-native';
const SearchInput = (props) => {
    // const mainContainer = [styles.mainContainer, {margin:SPACE_SPEC}];
    // const searchContainer = [styles.searchContainer, {paddingHorizontal: SPACE_SPEC}];
    // const imageStyle = [styles.imageStyle, ]
    console.log(SPACE_SPEC);
    const searchImg = require('../images/header/search.png');
    return (        
        <View style={styles.mainContainer}>
            <Item rounded style={{
            height:30, 
            backgroundColor:'#ededed',
            borderColor:'#dbdbdb',
            paddingHorizontal: SPACE_SPEC,
            backgroundColor:'red'
        }}>
                <Image source={searchImg} style={styles.imageStyle}/>
                <Input placeholderTextColor={'#c2c2c2'} placeholder='search' style={styles.inputStyle}/>
            </Item>
        </View>
    );
}

export const styles = StyleSheet.create({ 
        mainContainer: {
            flex:1, 
            margin:SPACE_SPEC,
        },
        searchContainer: {
            height:30, 
            backgroundColor:'#ededed',
            borderColor:'#dbdbdb',
            paddingHorizontal: SPACE_SPEC,
            backgroundColor:'red'
        },
        imageStyle: { 
            marginLeft : SPACE_SPEC
        },
        inputStyle: {
            color : '#c2c2c2',
        }
    });

export { SearchInput };