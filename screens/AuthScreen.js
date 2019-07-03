import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';


class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();

    //THIS CODE IS ONLY FOR DEVELOPMENT, TO BE REMOVED.

  }
  
  componentWillReceiveProps(nextProps){
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props){

    if(props.token){
      this.props.navigation.navigate('map');
    }
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        
      </View>
    );
  }
}


const mapStateToProps = ({auth}) => ({
  token: auth.token


})


export default connect(mapStateToProps ,actions)(AuthScreen);