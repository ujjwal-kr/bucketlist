import axios from 'axios';
import { ENDPOINT } from '../url';

export const WeeklyService = {
    getItems: async function(token: string, id: string, code: string) {
        return await axios.get(ENDPOINT+'weekly/'+id, {
            headers: {'authorization': token, passcode: code}
        })
    },

    postItem: async function(token: string, id: string, data: any) {
        return await axios.post(ENDPOINT+'weekly/'+id, data, {
            headers: {'authorization': token}
        })
    },

    deleteItem: async function(token: string, id: string) {
        return await axios.delete(ENDPOINT+'weekly/'+id, {
            headers: {'authorization': token}
        })
    }

}