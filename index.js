// import library to help create component
import React from 'react';
import {AppRegistry,View} from 'react-native';
import Header from './src/components/headers';
import AlbumsList from './src/components/AlbumsList';

const App = () => {

    return (
       <View style={{flex: 1}}>
          <Header headerText="Albums"/>
          <AlbumsList/>
       </View>         
    );
};

// render it to the Device
AppRegistry.registerComponent("albums" , () => App);
