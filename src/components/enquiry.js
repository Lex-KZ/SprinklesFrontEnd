import sprinklesAPI from '../config/api'
import { getToken } from './authentication';

export const topics = [
	{	id: 1, name: 'Booking' }, 
	{   id: 2, name: 'Question'}, 
	{	id: 3, name: 'Complaint'}, 
	{	id: 4, name: 'Other'}
]

export async function getEnquiries() {
    const response = await sprinklesAPI.get('/api/enquiries', { headers: {"Authorization" : `Bearer ` + getToken()}})
    console.log(response)
    return response.data
}

export async function createEnquiry(data) {
    const response = await sprinklesAPI.post('/api/enquiries', data, { headers: {"Authorization" : `Bearer ` + getToken()}})
    console.log(response.data)
    return response.data
}

export async function getEnquiry(id) {
    const response = await sprinklesAPI.get(`/api/enquiries/${id}`)
    return response.data
}

export async function updateEnquiry(data, id) {
    const response = await sprinklesAPI.put(`/api/enquiries/${id}`, data)
    return response.data
}

export async function deleteEnquiry(id) {
    const response = await sprinklesAPI.delete(`/api/enquiries/${id}`)
    return response.data
}

export async function getTopics() {
    const response = await sprinklesAPI.get('/api/topics')
    return response.data
}

// export async function signUp(data){
//     const response = await sprinklesAPI.post('/api/auth/sign_up', data)
//     return response.data
// }

// export async function signIn(data) {
//     const response = await sprinklesAPI.post('/api/auth/sign_in', data)
//     return response.data;
//     // return Promise.resolve(setToken('123'));
// }

// export function signOut() {
//     return Promise.resolve(removeToken());
// }

// const TOKEN_KEY = 'token'

// export function getToken() {
//     return localStorage.getItem(TOKEN_KEY);
// }

// export function setToken(token) {
//     localStorage.setItem(TOKEN_KEY, token)
//     return token;
// }

// function removeToken() {
//     localStorage.removeItem(TOKEN_KEY);
//     return true;
// }