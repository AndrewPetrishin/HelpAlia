import React from 'react';
import { View } from 'react-native';
import { RssEvents, RssItem } from './';

const RssItems = ({item, index, events, nav}) => {  
    if(index==0){
        return (        
        <View>
            <RssEvents data = {events} nav={nav}/>
            <RssItem data = {item}/>
        </View>      
        );        
    }
    return <RssItem data = {item}/>;
}

export { RssItems };