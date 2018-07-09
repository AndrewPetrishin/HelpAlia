import { PixelRatio } from 'react-native';

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

