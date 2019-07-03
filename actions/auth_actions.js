import {AsyncStorage} from 'react-native';
import * as Facebook from 'expo-facebook';


import {
    FB_LOGIN_SUCCESS,
    FB_LOGIN_FAIL
} from './types';



export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');
    if(token){
        //Dispatch an action saying FB login is done.
        dispatch({
            type: FB_LOGIN_SUCCESS,
            payload: token

        });

    }
    else {

        // Start FB Login process
        doFacebookLogin(dispatch);
    }
}

const doFacebookLogin =  async dispatch => {
    let {type, token} = await Facebook.logInWithReadPermissionsAsync('2032839333558007', 
    {
        permissions: ['public_profile']
    });

    if(type === 'cancel'){
        return dispatch({type: FB_LOGIN_FAIL})

    }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({type: FB_LOGIN_SUCCESS, payload: token});

}