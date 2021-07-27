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
    return response.data
}

export async function createEnquiry(data) {
    const response = await sprinklesAPI.post('/api/enquiries', data, { headers: {"Authorization" : `Bearer ` + getToken()}})
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
