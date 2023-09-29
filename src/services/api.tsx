import axios from 'axios';

const api = axios.create({
    baseURL: 'http://188.222.168.108:3333',
});

export { api };