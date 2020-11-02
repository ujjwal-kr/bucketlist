import axios from 'axios';
import { ENDPOINT } from '../url';

export const UserService = {
    register: async function({username, entryCode, password, taskCode}: any) {
       return await axios.post(ENDPOINT+"auth/register", {username, entryCode, password, taskCode})
    },

    login: async function({username, password}: any) {
        return await axios.post(ENDPOINT+"auth/login", {username, password})
    },

    getUser: async function(id: string) {
        return await axios.get(ENDPOINT+"users/"+id)
    },

    getAll: async function() {
        return await axios.get(ENDPOINT+"users", {
            headers: {'authorization': "token"}
        })
    },

    getTasks: async function(token: string, id: string, code: string) {
        return await axios.get(ENDPOINT+"users/"+id+"/tasks", {
            headers: {
                'authorization': token,
                'taskCode': code
            }
        })
    },

    deleteUser: async function(id: string, token: string) {
        return await axios.delete(ENDPOINT+"users/"+id, {
            headers: {'authorization': token}
        })
    },

    check: async function(token: string) {
        return await axios.get(ENDPOINT+"auth/check", {
            headers: {'authorization': token}
        })
    }
}