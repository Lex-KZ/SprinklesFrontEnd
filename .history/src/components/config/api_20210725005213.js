import axios from 'axio';

const sprinklesAPI = axios.create({
    baseURL: 'http://localhost:3000'
})

export default sprinklesAPI;