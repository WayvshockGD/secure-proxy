import { Server } from "restify";

export default class ServerWrapper {
    public server: Server;

    public constructor(server: Server) {
        this.server = server;

        this.init();
    }

    public init() {
        return this.server.listen(3000);
    }
}