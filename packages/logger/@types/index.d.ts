declare const logger: {
    log: (message: string) => void;
    info: (message: string) => void;
    warn: (message: string) => void;
    debug: (message: string) => void;
    fatal: (message: string) => void;
    error: (message: string) => void;
    ok: (message: string) => void;
};
export default logger;
