import React from 'react';
import sprinklesAPI from '../config/api';

export async function signUp(data){
    const response = await sprinklesAPI.post('/api/auth/sign_up', data)
    return response.data
}

export async function signIn(data) {
    const response = await sprinklesAPI.post('/api/auth/sign_in', data)
    return response.data;
    // return Promise.resolve(setToken('123'));
}

export function signOut() {
    return Promise.resolve(removeToken());
}

const TOKEN_KEY = 'token'

export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
    return token;
}

function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
    return true;
}