import React, {Component} from 'react';

import MainNavigator from './MainNavigator';

import {Provider} from 'react-redux';
import store from './store';


class App extends Component{
  render(){

    return(
      <Provider store={store}>
          <MainNavigator/>
      </Provider>


    );


  }
}


export default App;