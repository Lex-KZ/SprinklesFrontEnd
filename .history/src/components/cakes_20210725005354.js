import faker from 'faker';
import sprinklesAPI from '../config/api'

const cakes = [
    { 
        id: 1,
        name: faker.commerce.productName(), 
        image: faker.image.food(), 
        price:faker.commerce.price(), 
        ingredients:faker.lorem.words(), 
        description: faker.commerce.productDescription()
    },
    { 
        id: 2,
        name: faker.commerce.productName(), 
        image: faker.image.food(), 
        price:faker.commerce.price(), 
        ingredients:faker.lorem.words(), 
        description: faker.commerce.productDescription()
    },
    { 
        id:3 ,
        name: faker.commerce.productName(), 
        image: faker.image.food(), 
        price:faker.commerce.price(), 
        ingredients:faker.lorem.words(), 
        description: faker.commerce.productDescription()
    }
]  

export async function getCakes() {
    // return Promise.resolve(cakes);
    const response = await sprinklesAPI.get('/api/cakes')
    console.log(response);
    return response.data
}

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