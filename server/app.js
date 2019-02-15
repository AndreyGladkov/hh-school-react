const Koa = require("koa");
const serve = require("koa-static");
const cors = require("@koa/cors");

const Router = require("./router");

const app = new Koa();
const router = Router();

app.use(cors({ "Access-Control-Allow-Origin": "*" }));
app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve("build", { index: "index.html", maxage: 0 }));
app.listen(9200);
