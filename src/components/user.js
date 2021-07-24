const user = {
    username: 'Example',
    name: 'first-name last-name',
    email: 'example@example.com',
    meetings: [
        {date: '2/2/21', with: 'Nancy', about:'Wedding cake design.'},
        {date: '17/2/21', with: 'Nancy', about:'Wedding cake tasting.'},
    ]
}

export function getUser(){
    console.log(user)
    return Promise.resolve(user);
}