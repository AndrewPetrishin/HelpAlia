import React from 'react';
import { View } from 'react-native';
import { RssEvents, RssItem } from './';

const RssItems = ({item, index, events}) => {  
    if(index==0){
        return (        
        <View>
            <RssEvents data = {events}/>
            <RssItem data = {item}/>
        </View>      
        );        
    }
    return <RssItem data = {item}/>;
}

export { RssItems };