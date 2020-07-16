import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from "./routes/index";

const startServer = () => {
  dotenv.config();

  const PORT: number = parseInt(process.env.PORT as string, 10);

  const app = express();

  app.use(express.urlencoded(
    {
      extended: true,
    }
  ));
  app.use(helmet());
  app.use(cors());
  app.use(routes());

  app.listen(PORT, (e) => {
    if (e) {
      return console.log(e);
    }

    return console.log(`Server running on http://127.0.0.1:${PORT}`);
  });

}

startServer();
