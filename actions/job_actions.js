
import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';



import {
    FETCH_JOBS,
    LIKE_JOB,
    CLEAR_LIKED_JOBS
    } from './types';

    const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?'
    const JOB_QUERY_PARAMS = {
        publisher: '4201738803816157',
        format: 'json',
        v: '2',
        latlong: 1,
        radius: 10,
        q: 'javascript'
    };

    const key = "AIzaSyB2wKiyQcjq3PUmJrwneW0kryH3o4F_p_E";
    const buildJobsUrl = (zip) => {
        const query = qs.stringify({...JOB_QUERY_PARAMS, l: zip});
        return `${JOB_ROOT_URL}${query}`
    };



    export const fetchJobs = (region, callback)  => async (dispatch)  => {
            try{
                let zip =  await reverseGeocode(region, key);

                const url = buildJobsUrl(zip);
                let {data} = await axios.get(url);
                    dispatch({type: FETCH_JOBS, payload: data});
                    callback();

            } catch(err){
                console.log(err);
            }


};


export const likeJob = (job) => {
    return{
        payload: job,
        type: LIKE_JOB

    };


};


export const clearLikedJobs = (job) => {

    return{
        type: CLEAR_LIKED_JOBS

    }


}

