import { Navigation } from 'react-native-navigation';
import Rss from './Rss';
import RssComments from './Comments';

export function registerScreens(Provider, store) {
    Navigation.registerComponent('main.Rss', () => Rss, store, Provider);
    Navigation.registerComponent('main.RssComments', () => RssComments, store, Provider);    
}