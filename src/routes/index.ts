import authRoute from "./authRoute";
import {Router} from "express";

const indexRoute = Router();

export default () => {

  indexRoute.get("/", function (req, res) {
    res.json({
      "error": "Doni Was Here"
    });
  });

  authRoute(indexRoute);
  
  return indexRoute;
};