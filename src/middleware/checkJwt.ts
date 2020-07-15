import * as env from "dotenv";
env.config();

const config = {
    validDuration: "7d",
    privateKey: process.env.JWT_PRIVATE_KEY || "",
}

export default config;