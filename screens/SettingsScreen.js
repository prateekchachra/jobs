//import liraries
import React, { Component } from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import {clearLikedJobs} from '../actions';
import { Button } from 'react-native-elements';



// create a component
class SettingsScreen extends Component {

    static navigationOptions = {
        header: {
            style:
            {marginTop: Platform.OS === 'android' ? 24 : 0}
        }



    }

    render() {
        return (
        <View>
            <Button 
            title="Reset Liked Jobs"
            large
            icon={{name='delete-forever'}}
            backgroundColor="#F44336"
            onPress={() => this.props.clearLikedJobs()}/>
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
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default  connect(null, {clearLikedJobs})(SettingsScreen);
