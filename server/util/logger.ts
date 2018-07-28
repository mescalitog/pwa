import * as winston from "winston";

const logger = winston.createLogger({
    transports: [
        new (winston.transports.Console)({ level: process.env.NODE_ENV === "production" ? "error" : "debug" }),
        new (winston.transports.File)({ filename: "debug.log", level: "debug"})
    ]
});

if (process.env.NODE_ENV !== "production") {
    logger.debug("La generacion de logs se inicio en nivel debug");
}

export default logger;