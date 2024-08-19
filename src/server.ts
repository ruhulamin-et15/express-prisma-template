import app from "./app";
import { config } from "./config";

async function main() {
  try {
    app.listen(config.serverPort, () => {
      console.log(`Example app listening on port ${config.serverPort}`);
    });
  } catch (err: any) {
    console.log(err.message);
  }
}

main();
