import {Router} from "express";
import AuthController from "../app/auth/AuthController";

const router = Router();

const authRoute = (app: Router) => {
  app.use('/auth', router);
  router.post('/login', AuthController.validatorEmailLogin, AuthController.loginEmail);
}

export default authRoute;