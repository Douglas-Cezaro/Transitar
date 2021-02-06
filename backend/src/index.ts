import { createConnection } from "typeorm";
import * as http from "http";

import app from "./app";

createConnection()
  .then((connection) => {
    const server = http.createServer(app);

    server.listen(3000, () => {
      console.log("Application is running on port 3000 !!");
    });
  })
  .catch((error) => {
    console.log("TypeORM dont connected: %s", error);
  });
