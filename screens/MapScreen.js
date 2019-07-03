//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
// create a component
class MapScreen extends Component {


    state = {
        region: {
            longitude: -122 ,
            latitude: 37,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09,
        }
            
    }


    render() {
        return (
            <View style={styles.container}>
              <MapView
              region={this.state.region}
              style={{flex:1}}/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MapScreen;
