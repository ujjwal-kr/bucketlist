import { Request, Response } from "https://deno.land/x/oak/mod.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.12.1/mod.ts";

const client = new MongoClient();
client.connectWithUri("mongodb://localhost:27017");

const db = client.database("bucketlist");

export default {
    getAll: ({request, response}: {request: Request, response: Response}) => {},
    getItem: ({request, response}: {request: Request, response: Response}) => {},
    postItem: ({request, response}: {request: Request, response: Response}) => {},
    editItem: ({request, response}: {request: Request, response: Response}) => {},
    deleteItem: ({request, response}: {request: Request, response: Response}) => {}
}