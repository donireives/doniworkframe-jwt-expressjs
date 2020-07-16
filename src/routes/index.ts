import {Router} from "express";
import test from "../app/test";
import authRoute from "./authRoute";

const indexRoute = Router();

export default () => {

  indexRoute.get("/", function (req, res) {
    res.json({
      "error": "Doni Was Here"
    });
  });

  indexRoute.use("/test", test);
  
  authRoute(indexRoute);
  
  return indexRoute;
};