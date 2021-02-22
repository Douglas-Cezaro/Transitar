import { createConnection } from "typeorm";
import * as http from "http";

import app from "./app";

createConnection()
  .then((connection) => {
    const server = http.createServer(app);

    server.listen(process.env.PORT, () => {
      console.log(`Application is running on port ${process.env.PORT} !!`);
    });
  })
  .catch((error) => {
    console.log("TypeORM dont connected: %s", error);
  });
