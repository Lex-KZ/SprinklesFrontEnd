import sprinklesAPI from '../config/api'

export async function getCakes() {
    // return Promise.resolve(cakes);
    const response = await sprinklesAPI.get('/api/cakes')
    return response.data
}
