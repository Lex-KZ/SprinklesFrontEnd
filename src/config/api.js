import axios from 'axios';

const sprinklesAPI = axios.create({
    baseURL: 'https://sprinkles-of-joy-api.herokuapp.com'
})

export default sprinklesAPI;