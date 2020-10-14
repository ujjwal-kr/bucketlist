import { Request, Response } from "https://deno.land/x/oak/mod.ts";

export default {
    register: ({request, response}: {request: Request, response: Response}) => {},
    login: ({request, response}: {request: Request, response: Response}) => {},
    getUser: ({request, response}: {request: Request, response: Response}) => {},
    getAll: ({request, response}: {request: Request, response: Response}) => {},
    deleteUser: ({request, response}: {request: Request, response: Response}) => {}
}