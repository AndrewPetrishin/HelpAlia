import {StyleSheet, PixelRatio} from 'react-native';

const borderWidth1PX = 1 / PixelRatio.get();
var marginSpec = 35 * borderWidth1PX;

module.exports = StyleSheet.create({
    borderTopWidth2PX:{
        borderTopWidth: 2 * borderWidth1PX
    },    
    borderBottomWidth1PX:{
        borderBottomWidth : borderWidth1PX,
    },
    marginTopSpec:{
        marginTop: marginSpec,
    },
    marginBottomSpec:{
        marginBottom: marginSpec,
    },
    marginLeftSpec:{
        marginLeft : marginSpec,
    },    
    marginSpec:{
        margin: marginSpec,
    },
    borderWidth1PX:{
        borderWidth : borderWidth1PX ,
    },
    marginRightSpec:{
        marginRight : marginSpec,
    },    
    borderWidth2PX:{
        borderWidth : 2 * borderWidth1PX ,
    },
    borderWidth5PX:{
        borderWidth : 10 * borderWidth1PX ,
    },
    paddingBottomSpec:{
        paddingBottom : marginSpec
    }
});