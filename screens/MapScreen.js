//import liraries
import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';

import * as actions from '../actions';
// create a component


const {width, height} = Dimensions.get('window');
class MapScreen extends Component {


    state = {
        mapLoaded: false,
        region: {
            longitude: -122 ,
            latitude: 37,
            longitudeDelta: 0.02,
            latitudeDelta: 0.05,
        }
    
    }

    componentDidMount() {
        this.setState({mapLoaded: true})
    }
    
    onRegionChangeComplete = (region) => {

        this.setState({region})

    }

    onButtonPress = () => {
        this.props.fetchJobs(this.state.region, () => {
            this.props.navigation.navigate('deck'); //Callback function
        });


    }

    render() {
        if(!this.state.mapLoaded){
            return (
                <View style={{flex: 1, justifyContent: 'center'  }}>
                    <ActivityIndicator size="large" />
                </View>

            );
        }
        return (
            <View style={styles.container}>
              <MapView
              provider={PROVIDER_GOOGLE}
              region={this.state.region}
              onRegionChangeComplete={this.onRegionChangeComplete}
              style={{flex:1, width, height}}/>
              <View style={styles.buttonContainer}>
                  <Button
                  large
                  title="Search This Area"
                  backgroundColor="#009688"
                  icon={{name: 'search'}}
                  onPress={this.onButtonPress}></Button>
              </View>
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
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,

    }
});

export default connect(null, actions)(MapScreen);
