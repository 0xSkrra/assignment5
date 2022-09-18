import axios from 'axios';
import 'dotenv/config';

const API = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers:{
        'Content-type': 'application/json',
        'X-API-KEY': process.env.REACT_APP_API_KEY
    }
})

export default API