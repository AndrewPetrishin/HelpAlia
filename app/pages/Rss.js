import React, { Component } from 'react';
import { Container, Content, Text, List } from 'native-base';
import { View, FlatList} from 'react-native';
import { RssItem, RssEvent } from '../components';
import { connect } from 'react-redux';
import { SPACE_SPEC, WIDTH_1PX, PAGE_NAME_RSS } from '../components/Helper';
import * as actions from '../actions/'

class Rss extends Component {
    styles = () => {
        return {
            eventsMainContainer:{
                borderBottomWidth : WIDTH_1PX,
            },
            eventsTextContainer:{
                margin : SPACE_SPEC,
            }
        }
    }
    
    componentDidMount(){      
        this.props.setCurrentPage(PAGE_NAME_RSS);        
    }

    showEvents = (data) => {
        const styles = this.styles();
        return (
            <View style={styles.eventsMainContainer}>
                <Text style={styles.eventsTextContainer}>Events</Text>
                <List dataArray={data} horizontal={true}
                    renderRow={(item) => <RssEvent data={item} nav={this.props.navigation.navigate}/>}>
                </List>
            </View>
        );
    }
    
  render() {
    var userAvatar = require('../images/mock/47.png')
    var news_image = require('../images/mock/Isreal-land.jpg');
    /// mock
    var data = [{key : '1', thumbnail : userAvatar, from : 'Admin', news_image : news_image, message : 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee', count_comments : 15, userAvatar:userAvatar}, 
    {key : '2', thumbnail : userAvatar, from : 'Larisa', news_image : news_image, message : 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects', count_comments : 3, userAvatar:userAvatar}];
    var events = [{key: '1', thumbnail : userAvatar, text:'Sukkot'}, {key: '2', thumbnail : userAvatar, text:'Rosh Hashana'}, {key: '3', thumbnail : userAvatar, text:'Hag 1'}, {key: '6', thumbnail : userAvatar, text:'Hag 6'}, {key: '4', thumbnail : userAvatar, text:'Hag 123'}, {key: '5', thumbnail : userAvatar, text:'Hag 3455'}];
    const avatar = this.props.user.thumbnail;
    /// mock   
    
    return (
        <Content style={{backgroundColor:'#fff'}}>
            <FlatList
                data={data}
                ListHeaderComponent = { this.showEvents(events) }
                renderItem={({item}) => <RssItem data = {item} nav={this.props.navigation.navigate}/>
            }/>            
        </Content>
    );
  }
}

const mapStateToProps = state => {
    return { user : state.user };
}

export default connect(mapStateToProps, actions)(Rss);
