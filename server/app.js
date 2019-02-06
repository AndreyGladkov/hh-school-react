const serve = require("koa-static");
const Koa = require("koa");

const Router =  require('./router');

const app = new Koa();
const router = Router();

app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve("build", { index: "index.html", maxage: 0 }));
app.listen(9200);
