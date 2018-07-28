import * as express from "express";
import * as compression from "compression";  // compresses requests
import * as bodyParser from "body-parser";
import * as logger from "./util/logger";
import * as path from "path";
import * as cookieParser from "cookie-parser";
// import { MONGODB_URI, SESSION_SECRET } from "./util/secrets";

import { IndexRoute } from "./routes/index";



// Load environment variables from .env file, where API keys and passwords are configured
// dotenv.config({ path: ".env.example" });

export class App {
  public app: express.Application;
  public static bootstrap(): App {
    return new App();
  }
  constructor() {
    // create expressjs application
    this.app = express();

    // configure application
    this.config();

    // add routes
    this.routes();

    // add api
    this.api();
  }

  /**
   * Configuracion de la api
   */
  public api() {
    // No api en esta applicacion
  }

  /**
   * Configuracion de la aplicacion
   */
  public config() {
    // rutas estaticas
  //  this.app.use(compression());
    this.app.use(express.static(path.join(__dirname, "wpa-app")));

//    this.app.use(express.static(path.join(__dirname, "public")));

    // configuracion de vistas por default y pug
    // this.app.set("views", path.join(__dirname, "../views"));
    // this.app.set("view engine", "pug");

    // mount json form parser
    this.app.use(bodyParser.json());

    // mount query string parser
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    // mount cookie parser middleware
    this.app.use(cookieParser("D7YKPqfH65W7vCZRD5Ql"));

    // catch 404 and forward to error handler
    this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      err.status = 404;
      next(err);
    });
  }

  private routes() {
    let router: express.Router;
    router = express.Router();

    // IndexRoute
    IndexRoute.create(router);

    // use router middleware
    this.app.use(router);
  }

}
const app = App.bootstrap().app;
export default app;