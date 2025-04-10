
import mongoose from 'mongoose';

import { Server } from 'http';
import config from './app/config';
import app from './app';

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () => {
      console.log(`App listening on port http://localhost:${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
