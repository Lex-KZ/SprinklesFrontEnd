import axios from 'axios';

const sprinklesAPI = axios.create({
    baseURL: 'http://localhost:3000'
})

export default sprinklesAPI;