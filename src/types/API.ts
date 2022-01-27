import { Next, Request, Response } from "restify";
import { IBucketMaps } from "./IBuckets";

export interface APIServer {
    req: Request;
    res: Response;
    next: Next;
    buckets: IBucketMaps;
}

export interface IController {
    req: Request;
    res: Response;
}
export type IAPICodes = "200" | "400";

export interface IAPIPromiseObject<T extends { stat: string, type: string }> {
    status: T["stat"];
    type: T["type"];
    reason: string;
}