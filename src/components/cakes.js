import faker from 'faker';

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

export function getCakes() {
    // return Promise.resolve(cakes);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() >= 0.0) {
                resolve(cakes);
            } else {
                reject();
            }
        }, 1500);
    })
}