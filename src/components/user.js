import sprinklesAPI from "../config/api";
import { getToken } from "./authentication"

export async function getUser(id){
    const response = await sprinklesAPI.get(`/api/auth/user/${id}`, { headers: {"Authorization" : `Bearer ` + getToken()}});
    return response.data
}

