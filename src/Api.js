import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://192.168.100.13:3000',
});

export default Api;