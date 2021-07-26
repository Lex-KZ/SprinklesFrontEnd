import sprinklesAPI from '../config/api'

export async function getCakes() {
    const response = await sprinklesAPI.get('/api/cakes')
    return response.data
}
