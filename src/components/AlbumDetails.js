import React from 'react';
import {Text,View , Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({album}) => {

  // const {title,artist,thumbnail_image} = album;

    return(
     <Card>
       <CardSection>
           <View style={styles.thumbnailContainerStyle}>
               <Image source={{uri: album.thumbnail_image}} style={styles.thumbnailStyle}/>
           </View>
           <View style={styles.headercontentStyle}>
             <Text style={styles.headertextStyle}>{album.title}</Text>
             <Text>{album.artist}</Text>
           </View>
       </CardSection>
       <CardSection>
          <Image source={{uri : album.image}} style={styles.ImageStyle}/>    
       </CardSection>
       <CardSection>
           <Button onPress={() => {Linking.openURL(album.url)}}>
               Buy Now
           </Button>
       </CardSection>  
     </Card>
    );

};

const styles = {
    headercontentStyle: {
        flexDirection: "column",
        justifyContent : "space-around"
    },
    thumbnailStyle: {
        width : 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: "center",
        alignItems : "center",
        marginLeft : 10,
        marginRight : 10
    },
    headertextStyle: {
        fontSize : 18
    },
    ImageStyle: {
        height: 300,
        width : null,
        flex : 1

    }
};

export default AlbumDetails;