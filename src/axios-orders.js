import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cart-e15a6.firebaseio.com/' 
})

export default instance;