import * as errorHandler from "errorhandler";
import * as dotenv from "dotenv";
import app from "./app";
import * as http from "http";

dotenv.config({ path: ".env.example" });

const httpPort = normalizePort(process.env.PORT || 8000);

/**
 * Error Handler. Provides full stack - no se usa en entorno de produccion.
 */
if (process.env.NODE_ENV !== "production") {
  app.use(errorHandler());
}

app.set("port", httpPort);
// create http server
const httpServer = http.createServer(app);
// Inicio el server express
httpServer.listen(httpPort);
httpServer.on("error", onError);
httpServer.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: any) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof httpPort === "string"
    ? "Pipe " + httpPort
    : "Port " + httpPort;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requiere elevacion de privilegios");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " esta en uso");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = httpServer.address();
  const bind = typeof addr === "string"
    ? "pipe " + addr
    : "port " + addr.port;
    console.log(
      "  La app se inicio en en http://localhost:%d in %s mode",
      app.get("port"),
      app.get("env")
    );
    console.log("  Precionar CTRL-C para detenerla\n");
}

// export default server;