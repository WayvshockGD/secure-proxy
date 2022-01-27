import { blacklist } from "../config";
import { IAPIPromiseObject, IController } from "../types/API";
import CreateResponse from "../util/CreateResponse";
import Dialog from "../util/Dialog";

interface StatusObject {
    stat: "200";
    type: "PROMISE_RESOLVED"
}

export let controlRequest = function (ctx: IController) {
    return new Promise<IAPIPromiseObject<StatusObject>>((resolve, reject) => {
        let { hostname } = ctx.req.getUrl();

        if (hostname && blacklist.includes(hostname)) {
            return CreateResponse(ctx.res, Dialog.BLOCKED(hostname), { code: 400 });
        }

        resolve({
            status: "200",
            reason: "Page is not blocked, passed",
            type: "PROMISE_RESOLVED",
        });
    });
}