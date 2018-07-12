import React, { Component } from 'react';
import { Container, List, Content, Text, Thumbnail, Input} from 'native-base';
import { View, FlatList, Image } from 'react-native';
import { FooterCommit, HeaderBar, Comment } from '../components';

class Comments extends Component {    
  render() {
    var userAvatar = require('../images/mock/47.png');
    var news_image = require('../images/mock/Isreal-land.jpg');
    var mainData = {mainImage: news_image, key:'0', thumbnail: userAvatar, from:"Administrator", message: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee', time:'26.03.2018'};
    
    var data = [{key:'1', thumbnail: userAvatar, from:'Lusiy',message: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ', time:'1 min'},
    {key:'2', thumbnail: userAvatar, from:'Daddys', message: 'Molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ', time:'4 min'},
    {key:'3', thumbnail: userAvatar, from:'Abramovich', message: ' pleasure and praising pain was born ', time:'2 min'},
    {key:'4', thumbnail: userAvatar, from:'Lusiy',message: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ', time:'1 min'},
    {key:'5', thumbnail: userAvatar, from:'Daddys', message: 'Molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ', time:'4 min'},
    {key:'6', thumbnail: userAvatar, from:'Abramovich', message: ' pleasure and praising pain was born ', time:'2 min'}];

    var items = [mainData, ...data];
    console.log('Comments nav = ' + this.props.navigation.navigate);
    return (
        <Container style={{backgroundColor:'#fff'}}>
            <HeaderBar left='HomeScreen' nav={this.props.navigation.navigate}>                                
                Comments
            </HeaderBar>
            <FlatList                 
                    data = {items}                    
                    renderItem = {({item, index}) => index==0?    
                    <View key={index}>
                        {/* <Image source={item.mainImage} /> */}
                        <Comment thumbnail={item.thumbnail} message={item.message} from={item.from} time={item.time} borderBottom/>
                    </View> 
                    : 
                    <View key={index}>
                        <Comment thumbnail={item.thumbnail} message={item.message} from={item.from} time={item.time}/>
                    </View>
                }/> 
            <FooterCommit thumbnailSrc = {userAvatar}/>
        </Container>
    );
  }
}

var globalStyles = require('../stylesheet');

const styles = {
    itemContainer:{
        borderBottomColor: '#b8b8b8'
    },
    itemOwnerContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    itemThumbnail:{       
        borderColor : 'black', 
    },
    itemOwnerName:{
        color: '#262626',
        fontWeight: 'bold',
    },
    itemMainImage:{
        width: window.width,
    },  
    itemMargin:{
    },
    descriptionComments: {
        fontWeight: 'normal',
        color: '#a8a8a8'
      }
}

export default Comments;