import axios from 'axios';

const API = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers:{
        'Content-type': 'application/json',
        // make sure api key cant be undefined
        'X-API-KEY': process.env.REACT_APP_API_KEY || ''
    }
})

export default API