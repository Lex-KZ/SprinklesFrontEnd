import sprinklesAPI from "../config/api";

const user = {
    username: 'Example',
    name: 'first-name last-name',
    email: 'example@example.com',
    meetings: [
        {date: '2/2/21', with: 'Nancy', about:'Wedding cake design.'},
        {date: '17/2/21', with: 'Nancy', about:'Wedding cake tasting.'},
    ]
}

export async function getUser(){
    const userResponse = await sprinklesAPI.get('/api/user');
    console.log(userResponse);
    return Promise.resolve(user);
}