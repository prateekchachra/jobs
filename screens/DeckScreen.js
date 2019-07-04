//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Swipe from '../components/Swipe';
import {MapView} from 'react-native-maps';
import {Card} from 'react-native-elements';


// create a component
class DeckScreen extends Component {

    static navigationOptions = {
        title: 'Jobs',
        tabBar: {
            icon: ({tintColor}) => {
                return <Icon name="description" size={30} color={tintColor}></Icon>
            } 

        }
    }

    renderCard(job){    

        const initialRegion = {
            latitude: job.latitude,
            longitude : job.longitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02,

        }
        return (
            <Card title={job.jobTitle}>
                <View style={{width: 300, height: 300}} >
                <MapView 
                scrollEnabled={false}
                 
                 style={{flex: 1}}
                     cacheEnabled={Platform.OS === 'android'}
                     initialRegion={initialRegion}>
                </MapView>
                </View>
                <View style={styles.detailWrapper}>
                    <Text>{job.company}</Text>
                    <Text>{job.formattedRelativeTime}</Text>
                </View>
                <Text>
                    {job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '') }   
                </Text>
            </Card>
        );
    }

    renderNoMoreCards = () => {
        return(
            <Card title="No More Jobs">
                <Button 
                title="Back To Maps"
                large
                icon={{name: 'my-location'}}
                backgroundColor= "#03A9F4"
                onPress={() => this.props.navigation.navigate('map')}></Button>
            </Card>
        );

    }


    render() {
        return (
            <View style={styles.container}>
               <Swipe 
               data={this.props.jobs} 
               renderCard={this.renderCard}
               renderNoMoreCards={this.renderNoMoreCards}
               onSwipeRight={job => this.props.likeJob(job)}

               keyProp="jobKey"
               />

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
        marginTop: 10,
    },
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    }
});



const mapStateToProps = ({jobs}) => {
    return {jobs: jobs.results};

}
//make this component available to the app
export default connect(mapStateToProps, actions)(DeckScreen);
