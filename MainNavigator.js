import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';


const MainNavigator = createBottomTabNavigator({
    welcome : {screen: WelcomeScreen},  
    auth: {screen: AuthScreen},
    main:{
      screen: createBottomTabNavigator({
        map: {screen: MapScreen},
        deck: {screen: DeckScreen},
        review: {screen: createStackNavigator({
          review: {screen: ReviewScreen},
          settings: {screen: SettingsScreen},
        },
        {
          navigationOptions:{
          tabBarVisible: false
      }})}


      },
      {
        
        navigationOptions:{
            tabBarVisible: false
        },
        tabBarOptions: {
          labelStyle: {fontSize: 12}
        }
  })
    },
  }, {
      lazy: true,
navigationOptions:{
    tabBarVisible: false
}});

export default createAppContainer(MainNavigator);