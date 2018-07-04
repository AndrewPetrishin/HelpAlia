import React from 'react';
import { List, Text } from 'native-base';
import { View } from 'react-native';
import { RssEvent } from './';

const RssEvents = ({data, nav}) => {  
    const mainContainer = [styles.mainContainer, globalStyles.borderBottomWidth1PX];
    const textContainer = [styles.textContainer, globalStyles.marginSpec];
    return (        
        <View style={mainContainer}>
            <Text style={textContainer}>Events</Text>
            <List dataArray={data} horizontal={true}
                renderRow={(item) => <RssEvent data={item} nav={nav}/>}>
            </List>
        </View>
    );        
}

const globalStyles = require('../stylesheet');

const styles = {
    mainContainer:{
    },
    textContainer:{
    }
}

export { RssEvents };