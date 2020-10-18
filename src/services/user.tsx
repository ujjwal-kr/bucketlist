import axios from 'axios';
import { ENDPOINT } from '../url';

export const UserService = {
    register: async function({name, email, password}: any) {
       return await axios.post(ENDPOINT+"/auth/register", {name, email, password})
    },

    login: async function({email, password}: any) {
        return await axios.post(ENDPOINT+"auth/login", {email, password})
    },

    getUser: async function(id: string) {
        return await axios.get(ENDPOINT+"users/"+id)
    },

    getAll: async function() {
        return await axios.get(ENDPOINT+"users")
    },

    deleteUser: async function(id: string, token: string) {
        return await axios.delete(ENDPOINT+"users/"+id, {
            headers: {'authorization': token}
        })
    }
}