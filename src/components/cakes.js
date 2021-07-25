import sprinklesAPI from '../config/api'

export async function getCakes() {
    // return Promise.resolve(cakes);
    const response = await sprinklesAPI.get('/api/cakes')
    return response.data
}

// export async function createCake(id) {

// }

// export function getCakes() {
//     // return Promise.resolve(cakes);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > -1) {
//                 resolve(cakes);
//             } else {
//                 reject();
//             }
//         }, 0);
//     })
// }