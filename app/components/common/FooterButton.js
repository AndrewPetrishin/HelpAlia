import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';

const FooterButton = ({link, icon, width}) => {
    var {container} = styles;
    var image ={
        height : 32,
        width : width != undefined ? width : 32
    }
    return (        
        <TouchableOpacity onPress={()=>{ alert(link);}}>
            <View style={container}>
                <Image source={icon} style={image}/>
            </View>
        </TouchableOpacity>
    );
}

const styles ={
    container : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export {FooterButton};