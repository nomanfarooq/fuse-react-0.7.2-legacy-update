import io from 'socket.io-client';
import FuseUtils from '../../../@fuse/utils';

class SocketService extends FuseUtils.EventEmitter {
    constructor() {
        super();
        this.url = import.meta.env.MODE === "production" ? "" : "";
        this.globalSocket = null;
        this.isAlive = false;
        this.pingInterval = null;
        this.jwtToken = null;
    }

    setJwtToken(token) {
        this.jwtToken = token;
    }

    initializeSocket() {
        if (!this.jwtToken) {
            console.warn("JWT Token is not set before initializing the socket.");
            return;
        }

        this.globalSocket = io(this.url, {
            secure: true,
            transports: ["websocket"],
            rejectUnauthorized: false,
            auth: {
                token: this.jwtToken,
            },
        });

        this.globalSocket.on("connect", this.onConnect.bind(this));
        this.globalSocket.on("pong", this.onPong.bind(this));
        this.globalSocket.on("disconnect", this.onDisconnect.bind(this));
        this.globalSocket.on("connect_error", this.onConnectError.bind(this));
        this.onStartPing();
    }

    onConnect() {
        console.log("SOCKET_CONNECTED");
        this.emit("onSocketConnect", "Live Connection Established");
    }

    onPong() {
        this.isAlive = true;
        this.emit("onSocketPingPong", { alive: this.isAlive });
    }

    onDisconnect() {
        console.log("SOCKET_DISCONNECTED!");
        this.isAlive = false;
        this.emit("onSocketDisconnect", "Retrying Live Connection");
        this.globalSocket.connect();
    }

    onConnectError(error) {
        console.error("CONNECTION_ERROR", error);
        this.isAlive = false;
        this.emit("onSocketError", "Live Connection Error");
        this.globalSocket = io(this.url, {
            secure: true,
            transports: ["websocket"],
            rejectUnauthorized: false,
            auth: {
                token: this.jwtToken,
            },
        });
        this.globalSocket.connect();
    }

    onStartPing() {
        if (this.pingInterval) {
            clearInterval(this.pingInterval);
        }
        this.pingInterval = setInterval(() => {
            if (this.globalSocket && this.globalSocket.connected) {
                const data = { jwt: this.jwtToken }
                this.globalSocket.emit("ping", data);
            } else {
                console.warn("SOCKET_PING NOT_CONNECTED");
                this.isAlive = false;
                this.emit("onSocketCheckFailed", "Connection Not Alive");
            }
        }, 5000);
    }

    stopPing() {
        if (this.pingInterval) {
            clearInterval(this.pingInterval);
            this.pingInterval = null;
        }
    }

    emitEvent(event, data) {
        if (this.globalSocket && this.globalSocket.connected) {
            this.globalSocket.emit(event, data);
        } else {
            this.emit("onSocketEmitError", "Live Connection Emitting Error");
            console.warn("SOCKET_NOT_CONNECTED. UNABLE_TO_EMIT_EVENT.");
        }
    }

    onEvent(event, callback) {
        if (this.globalSocket) {
            this.globalSocket.on(event, callback);
        } else {
            this.emit("onSocketListenError", "Live Connection Event Error");
            console.warn("SOCKET_NOT_INITIALIZED. UNABLE_TO_REGISTER_EVENT_LISTENER.");
        }
    }

    offEvent(event) {
        if (this.globalSocket) {
            this.globalSocket.off(event);
        } else {
            this.emit("onSocketNotInitialize", "Live Connection Not Working Properly");
            console.warn("SOCKET_NOT_INITIALIZED. UNABLE_TO_UNREGISTER_EVENT_LISTENER.");
        }
    }
}

const socketService = new SocketService();
export const onSocketJwtToken = (token) => socketService.setJwtToken(token);
export default socketService;
