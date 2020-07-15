import * as env from "dotenv";
import {Options} from "sequelize";

env.config();

const config: Options = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME ?? "",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: "mariadb",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}


export default config;