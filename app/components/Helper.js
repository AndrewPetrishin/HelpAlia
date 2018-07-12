import { PixelRatio } from 'react-native';
import HomeScreen from '../pages/Rss';
import RssComments from '../pages/Comments';
import ChatList from '../pages/ChatList';
import Chat from '../pages/Chat';
import Marketplace from '../pages/Marketplace';
import MarketplaceItemDetail from '../pages/MarketItemDetail';

export const MESSAGE_TYPE_ADMIN = 'admin';
export const MESSAGE_TYPE_LOCAL = 'local';
export const WIDTH_1PX = 1 / PixelRatio.get();
export const SPACE_SPEC = 20 / PixelRatio.get();

export const MARKET_TYPE_VIP = 'vip';
export const MARKET_TYPE_ADV = 'adv';
export const MARKET_TYPE_SIMPLE = 'simple';
export const MARKET_TYPE_NEW = 'new';

// COLORS
export const MAIN_BORDER_COLOR = 'grey';
export const MARKET_BG_COLOR = '#f7f7f7';
export const MARKET_VIP_BG_COLOR = '#eef5ff';
export const MARKET_NEW_BG_COLOR = '#eef5ff';

export const GET_MARKET_BG_COLOR = (type) => {
    switch(type){
        case MARKET_TYPE_VIP : return MARKET_VIP_BG_COLOR;
        case MARKET_TYPE_NEW : return MARKET_NEW_BG_COLOR;
        default: return MARKET_BG_COLOR;
    }
}

export const REDUX_ACTION_SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

// PAGES NAMING AND NAVIGATION
export const PAGE_NAME_RSS = 'HomeScreen';
export const PAGE_NAME_RSS_COMMENTS = 'RssComments';
export const PAGE_NAME_CHAT_LIST = 'ChatList';
export const PAGE_NAME_CHAT_ROOM = 'Chat';
export const PAGE_NAME_MARKETPLACE = 'Marketplace';
export const PAGE_NAME_MARKET_ITEM = 'MarketItemDateils';
export const PAGE_NAME_SERVICES = 'Services';
export const PAGE_NAME_USERINFO = 'UserInfo';

export const NAVIGATOR_ROUTER = {
    HomeScreen : { screen : HomeScreen},
    RssComments : { screen : RssComments},
    ChatList : { screen : ChatList},
    Chat : { screen : Chat},
    Marketplace : { screen : Marketplace},
    MarketItemDateils : { screen : MarketplaceItemDetail}
  };

export const NAVIGATOR_ROUTER_INIT =  {
    initialRouteName: PAGE_NAME_RSS,
    headerMode: 'none'
}

// PAGES NAMING AND NAVIGATION