import { Request, Response } from "https://deno.land/x/oak/mod.ts";

export default {
    getAll: ({request, response}: {request: Request, response: Response}) => {},
    getItem: ({request, response}: {request: Request, response: Response}) => {},
    postItem: ({request, response}: {request: Request, response: Response}) => {},
    editItem: ({request, response}: {request: Request, response: Response}) => {},
    deleteItem: ({request, response}: {request: Request, response: Response}) => {}
}