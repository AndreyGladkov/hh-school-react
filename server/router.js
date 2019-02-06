const Router = require("koa-router");

const data = {
  "1549341230310eb804464227c82c7fc9": {
    "hh-jlogic": [
      {
        timestamp: "2019-02-05 07:33:50.320+0300",
        message:
          '[ru.hh.jclient.common.HttpClientImpl]\tmdc={"controller":"EmployerResource#getEmployerInsiders","thread":"AsyncHttpClient-3-8","rid":"1549341230310eb804464227c82c7fc9"}\tASYNC_HTTP_RESPONSE: 200 OK in 2 ms on GET http://192.168.1.208:2800/rs/employer/00000003/insiderService?replicaOnlyRq=true',
        hostname: "docker32",
        lvl: "INFO",
        index: "service",
        hasCurrentRid: true
      },
      {
        timestamp: "2019-02-05 07:33:50.321+0300",
        message:
          "192.168.2.126\t1549341230310eb804464227c82c7fc9\t200\t3 ms\tGET\t/employer/00000003/insider?lang=RU&site=hh.ru",
        hostname: "docker32",
        index: "requests",
        hasCurrentRid: true
      }
    ],
    logic: [
      {
        timestamp: "2019-02-05 07:33:50.318+0300",
        message:
          '[frontik.routing]\tmdc={"thread":11,"rid":"1549341230310eb804464227c82c7fc9"}\trequested url: /employerview/page?mobile=True&id=00000003',
        hostname: "docker11",
        lvl: "INFO",
        index: "service",
        hasCurrentRid: true
      },
      {
        timestamp: "2019-02-05 07:33:50.323+0300",
        message:
          '[http_client]\tmdc={"controller":"hhlogic.pages.employerview.page.Page","thread":11,"rid":"1549341230310eb804464227c82c7fc9"}\tgot 404 93 bytes, final GET http://192.168.1.2:2800/rs/employer/00000003/short.json?replicaOnlyRq=true in 3.50ms',
        hostname: "docker11",
        lvl: "INFO",
        index: "service",
        hasCurrentRid: true
      },
      {
        timestamp: "2019-02-05 07:33:50.324+0300",
        message:
          '[stages]\tmdc={"controller":"hhlogic.pages.employerview.page.Page","thread":11,"rid":"1549341230310eb804464227c82c7fc9"}\ttimings for hhlogic.pages.employerview.page.Page : prepare=0.97 session=0.11 page=4.90 page=0.07 postprocess=0.13 flush=0.30 total=6.48 code=404',
        hostname: "docker11",
        lvl: "INFO",
        index: "service",
        hasCurrentRid: true
      },
      {
        timestamp: "2019-02-05 07:33:50.324+0300",
        message:
          "185.181.245.124\t1549341230310eb804464227c82c7fc9\t404\t6 ms\tGET\t/employerview/page?mobile=True&id=00000003",
        hostname: "docker11",
        index: "requests",
        hasCurrentRid: true
      },
      {
        timestamp: "2019-02-05 07:33:50.324+0300",
        message:
          '[frontik.futures]\tmdc={"controller":"hhlogic.pages.employerview.page.Page","thread":11,"rid":"1549341230310eb804464227c82c7fc9"}\taborting AsyncGroup(name=finish) due to unhandled exception in callback',
        hostname: "docker11",
        lvl: "ERROR",
        index: "service",
        hasCurrentRid: true
      }
    ],
    "hh-session": [
      {
        timestamp: "2019-02-05 07:33:50.315+0300",
        message:
          "192.168.2.126\t1549341230310eb804464227c82c7fc9\t200\t2 ms\tGET\t/hh-session/full?lang=RU",
        hostname: "docker22",
        index: "requests",
        hasCurrentRid: true
      }
    ],
    hhid: [
      {
        timestamp: "2019-02-05 07:33:50.311+0300",
        message:
          "192.168.1.199\t1549341230310eb804464227c82c7fc9\t200\t0 ms\tGET\t/session/json?update-session-count=true",
        hostname: "docker21",
        index: "requests",
        hasCurrentRid: true
      }
    ],
    "hh-xmlback": [
      {
        timestamp: "2019-02-05 07:33:50.320+0300",
        message:
          "192.168.2.126\t1549341230310eb804464227c82c7fc9\t200\t2 ms\tGET\t/rs/employer/00000003/insiderService?replicaOnlyRq=true",
        hostname: "docker11",
        index: "requests",
        hasCurrentRid: true
      },
      {
        timestamp: "2019-02-05 07:33:50.321+0300",
        message:
          "192.168.2.126\t1549341230310eb804464227c82c7fc9\t404\t4 ms\tGET\t/rs/employer/00000003/single?site=1",
        hostname: "docker41",
        index: "requests",
        hasCurrentRid: true
      },
      {
        timestamp: "2019-02-05 07:33:50.324+0300",
        message:
          "192.168.1.208\t1549341230310eb804464227c82c7fc9\t404\t3 ms\tGET\t/rs/employer/00000003/short.json?replicaOnlyRq=true",
        hostname: "docker39",
        index: "requests",
        hasCurrentRid: true
      }
    ]
  }
};

module.exports = function() {
  const router = new Router({
    prefix: "/api"
  });

  router
    .get("/logs", ctx => {
      const rid = ctx.query.rid;
      if (data[rid]) {
        ctx.body = data[rid];
      } else {
        ctx.throw(404, "Not found");
      }
    })
    .get("/feelinglucky", ctx => {
      ctx.body = { rid: "1549341230310eb804464227c82c7fc9" };
    });

  return router;
};
