import axios from 'axios';
import { ENDPOINT } from '../url';

export const UserService = {
    register: async function({name, email, password}: any) {
       return await axios.post(ENDPOINT+"/auth/register", {name, email, password})
    },

    login: async function({email, password}: any) {
        return await axios.post(ENDPOINT+"auth/login", {name, password})
    }
}