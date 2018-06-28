import { Navigation } from 'react-native-navigation';
import Rss from './Rss';
import RssComments from './Comments';

export function registerScreens() {
    Navigation.registerComponent('main.Rss', () => Rss);
    Navigation.registerComponent('example.Actions', () => RssComments);    
}