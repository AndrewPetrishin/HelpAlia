import React from 'react';
import { Button, Text, Badge, Container } from 'native-base';
import { Image } from 'react-native';

const FooterButton = (props) => {
        var { messageCount, icon, widthIcon, badge } = props;        
        var iconStyle ={
            height : 32,
            width : widthIcon != undefined ? widthIcon : 32
        }  
        var text = props.children;     
        return (         
            <Button badge>
                {this.ShowBadge(badge, messageCount)}
                <Image source={icon} style={iconStyle}/>
                {this.ShowText(text)}
            </Button>         
        );
}

ShowBadge = (isShow, count) =>{
    if(isShow != undefined){
        return (
            <Container style={styles.badgeContainer}>
                <Badge style={styles.badgeStyle}>
                    <Text style={styles.badgeText}>{count}</Text>
                </Badge>
            </Container>
            );
    }
}

ShowText = (text) => {
    if(text != undefined){
        return (
           <Text>{text}</Text>
        );
    }
}

const styles = {
    badgeContainer : {
        position: 'absolute', 
        top: 1, 
        right:0, 
        zIndex: 99, 
        height:18
    },
    badgeStyle : {
        height: 18
    },
    badgeText : {
        fontSize:12, 
        lineHeight: 18
    }
}

export { FooterButton };