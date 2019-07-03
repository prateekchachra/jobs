//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Platform } from 'react-native';
import {Button} from 'react-native-elements';
// create a component
class ReviewScreen extends Component {


    static navigationOptions = ({navigation}) => {
         
        return{
            title: 'Review Jobs',
            headerRight: (
                <Button title="Settings"
                onPress={() => navigation.navigate('settings')}
                backgroundColor="rgba(0,0,0,0)"
                color="rgba(0,122,255,1)"
                ></Button>
  
        ),
        }
}

    render() {
        return (
            <View style={styles.container}>
                <Text>ReviewScreen</Text>
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
        backgroundColor: '#FFFFFF',
    },
});

//make this component available to the app
export default ReviewScreen;
