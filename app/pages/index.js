import React from 'react';
import {Root} from 'native-base';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Rss';
import RssComments from './Comments';
import MainChat from './MainChat';
import Chats from './Chat';

const AppNavigator = createStackNavigator({
        HomeScreen : { screen : HomeScreen},
        RssComments : { screen : RssComments},
        MainChat : { screen : MainChat},
        Chat : { screen : Chats},
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
