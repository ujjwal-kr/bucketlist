import axios from 'axios';
import { ENDPOINT } from '../url';

export const TasksService = {

    postItem: async function(token: string, id: string, data: any) {
        return await axios.post(ENDPOINT+'tasks/'+id, data, {
            headers: {'authorization': token}
        })
    },

    deleteItem: async function(token: string, id: string) {
        return await axios.delete(ENDPOINT+'tasks/'+id, {
            headers: {'authorization': token}
        })
    }

}