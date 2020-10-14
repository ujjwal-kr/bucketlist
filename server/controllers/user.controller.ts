import { v4 } from "https://deno.land/std@0.74.0/uuid/mod.ts";

export default {
    getAllUsers: () => {},
    getUser: () => {},

    register: async ({request, response }: any) => {
        const body = await request.body().value;
        let newUser = {
            id: v4.generate(),
            name: body.name,
            isCompleted: false
        }

        response.body = {
            message: "here is your User",
            user: newUser
        }
    },
    login: () => {},
    
    deleteUser: () => {}
}