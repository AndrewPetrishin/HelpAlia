import React from 'react';
import {Root} from 'native-base';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Rss';
import RssComments from './Comments';
import ChatList from './ChatList';
import Chat from './Chat';

const AppNavigator = createStackNavigator({
        HomeScreen : { screen : HomeScreen},
        RssComments : { screen : RssComments},
        ChatList : { screen : ChatList},
        Chat : { screen : Chat},
    },
    {
        initialRouteName: 'HomeScreen',
        headerMode: 'none'
      }
);

export default () =>
<Root>
    <AppNavigator/>
</Root>
