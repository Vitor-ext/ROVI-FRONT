import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://192.168.36.41:3000',
});

export default Api;