import sprinklesAPI from "../config/api";
import { getToken } from "./authentication"

export async function getUser(id){
    const response = await sprinklesAPI.get(`/api/auth/user/${id}`, { headers: {"Authorization" : `Bearer ` + getToken()}});
    console.log(`getUser` + response)
    return response.data
}

export async function deleteUser(id){
    const response = await sprinklesAPI.delete(`/api/auth/delete/${id}`, { headers: {"Authorization" : `Bearer ` + getToken()}});
    console.log(`deleteUser` + response)
    return response.data
}