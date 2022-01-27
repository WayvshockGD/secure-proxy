import { Response } from "restify";

export = function(res: Response, content: string, opt?: Options) {
    return void res.send((opt && opt.code ? opt.code : 200), content);
}

interface Options {
    code: number;
}