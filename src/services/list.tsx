import axios from 'axios';
import { ENDPOINT } from '../url';

export const ListService = {
    getLItem: async function(id: string) {
        return axios.get(ENDPOINT+"lists/"+id)
    },

    postItem: async function(token: string, text: string, description: string) {
        return axios.post(ENDPOINT+"lists", {text, description}, {
            headers: {'authorization': token}
        })
    },

    editItem: async function(id: string, item: any, token: string) {
        return axios.patch(ENDPOINT+"lists/"+id, item, {
            headers: {'authorization': token}
        })
    },

    deleteItem: async function(id: string, token: string) {
        return await axios.delete(ENDPOINT+"lists/"+id, {
            headers: {'authorization': token}
        })
    }
}