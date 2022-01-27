import Restify from "restify";
import api from "./api";
import { IBucketMapUsers } from "./types/IBuckets";

let users = new Map<string, IBucketMapUsers>();

let server = Restify.createServer({
    name: "SecureProxy",
    version: "1.0.0"
});

server.get("/api", (req, res, next) => api({ 
    req, 
    res, 
    next, 
    buckets: { 
        users
    } 
}));