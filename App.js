import React, {Component} from 'react';

import MainNavigator from './MainNavigator';
import {Notifications} from 'expo';
import {Provider} from 'react-redux';
import store from './store';
import registerForNotif from './services/push_notifications';


class App extends Component{


  componentDidMount() {
    registerForNotif();
    Notifications.addListener((notification) => {
        const {data: {text}, origin} = notification;   
        if(origin === 'received' && text){

        
      Alert.alert(
          'New Push Notification',
          text,
          [{text: 'Ok.'}]

        );
        
      }
    });
  }
  
  render(){

    return(
      <Provider store={store}>
          <MainNavigator/>
      </Provider>


    );


  }
}


export default App;