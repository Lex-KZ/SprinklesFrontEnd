import React from 'react';

export function signIn() {
    return Promise.resolve(setToken('123'));
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