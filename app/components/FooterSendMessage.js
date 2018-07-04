import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { SPACE_SPEC } from './Helper';

class FooterSendMessage extends Component{
    constructor(props){
        super(props);
        this.state = { typing : ''};
    }

    sendMessage = () =>{
        alert(this.state.typing);
    }
   
    render(){
        var sendImg = require('../images/footer/send.png');
        return (       
                <View style={styles.footer}>
                    <TextInput
                        value = {this.state.typing}
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Type something nice"
                        onChangeText={text => this.setState({ typing: text })}
                        />
                    <TouchableOpacity onPress={this.sendMessage}>
                        <Image style={styles.send} source={sendImg}/>
                    </TouchableOpacity>
                </View>       
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#fff',
        borderTopColor: '#d9d9d9', 
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 2 * SPACE_SPEC
    },
    input: {      
      fontSize: 16,      
      flex: 1,
    },
    send: {        
      alignSelf: 'center',      
    }
  });

export { FooterSendMessage };