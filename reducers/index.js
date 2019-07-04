import {combineReducers} from 'redux';
import auth from './authReducer';
import jobs from './jobsReducer';
import likedJobs from './likeReducer';


export default combineReducers({
    auth,
    jobs,
    likedJobs

});