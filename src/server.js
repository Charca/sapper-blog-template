require("dotenv").config();
import * as sapper from "@sapper/server";
import compression from "compression";
import helmet from "helmet";
import polka from "polka";
import sirv from "sirv";
import volleyball from "volleyball";

const { PORT, NODE_ENV } = process.env;

const dev = NODE_ENV === "development";

polka()
  .use(volleyball.custom())
  .use(helmet())
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT || 5000, (err) => {
    if (err) {
      console.log("error", err);
      throw err;
    }

    console.log(JSON.stringify(process.env.PORT));
    console.log(`🎈 Server listening on port ${PORT}`);
  });
