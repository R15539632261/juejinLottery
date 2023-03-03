//config.js

module.exports = {
  //掘金相关参数
  nuggets: {
    signInUrl: `https://api.juejin.cn/growth_api/v1/check_in`, //签到接口
    freeCheckUrl: `https://api.juejin.cn/growth_api/v1/lottery_config/get`, //免费抽奖次数查询
    drawUrl: `https://api.juejin.cn/growth_api/v1/lottery/draw`, //抽奖接口
    headers: {
      Referer: "https://juejin.cn/",
      "Upgrade-Insecure-Requests": 1,
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36",
      cookie: `自己的cookie`, //用自己的
    }, //相关请求头
    // 抽奖时请求的参数1
    datas: {
      aid: 0,
      uuid: 0,
      spider: 0,
      _signature: "",
    },
  },
};
