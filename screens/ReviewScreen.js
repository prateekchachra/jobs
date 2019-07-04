//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView, Linking } from 'react-native';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {Card, Button, Icon} from 'react-native-elements';
import {MapView} from 'react-native-maps';
import * as actions from 'actions';
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
        tabBar: {
            icon: ({tintColor}) => {
                return <Icon name="favorite" size={30} color={tintColor}></Icon>
            } 

        }
        }
}
    renderLikedJobs(){
    return this.props.likedJobs.map(job => {

        const { company, formattedRelativeTime, 
            url, jobTitle, jobKey} = job;
        const initialRegion = {
            latitude: job.latitude,
            longitude : job.longitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02,

        }
        return(
            <Card key={jobKey} title={jobTitle}>
                
                <View style={{height: 200}}>
                <MapView 
                scrollEnabled={false}
                 
                 style={{flex: 1}}
                     cacheEnabled={Platform.OS === 'android'}
                     initialRegion={initialRegion}>
                         
                </MapView>
                    <View style={styles.detailedWrapper}>
                        <Text style={styles.italics}>
                            {company}
                        </Text >
                        <Text style={styles.italics}>
                            {formattedRelativeTime}
                        </Text>
                    </View>
                    <Button title="Apply Now!"
                    backgroundColor="#03A9F4"
                    onPress={() => Linking.openURL(url)}/>
                </View>
            </Card>

        );

    });

}

    render() {
        return (
            <ScrollView>
                {this.renderLikedJobs()}
            </ScrollView>
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
    detailedWrapper: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',


    },
    italics: {
        fontStyle: 'italic'
    }
});


const mapStateToProps = (state) => {
return {likedJobs : state.likedJobs};

}

//make this component available to the app
export default connect(mapStateToProps, actions) (ReviewScreen);
