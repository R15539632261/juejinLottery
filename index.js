//需要使用的包文件
const axios = require("axios");
//相关参数保存在文件内
const { nuggets, pushPlus } = require("./config");
//'http'是开启本地服务器的模块
var http = require("http");

/**
 * 获取当前时间的格式化时间
 * @param {String} key 调用js日期函数字符串
 * @returns 当前时间格式化的字符串
 */
const getNowTime = (key) => {
  let nowTime = ``;
  try {
    nowTime = new Date()[key]();
  } catch (e) {
    nowTime = `获取时间函数错误！`;
    console.error(`请传入日期函数 —— ${e}`);
  }
  return nowTime;
};

/**
 * 掘金自动签到 请求方法
 */
const hacpaiSignRequest = async () => {
  console.log(
    `\n\n------${getNowTime(`toLocaleDateString`)} - 开始签到123------\n`
  );
  const { headers, signInUrl } = nuggets; //签到相关参数
  const res = await axios({
    url: signInUrl,
    method: `post`,
    headers,
  });
  if (res && res.data) {
    // console.log(res);
    let jsonMsg = JSON.stringify(res.data);
    console.log(
      `\n ${jsonMsg} \n \n ------ ${getNowTime(
        `toLocaleTimeString`
      )} 签到成功 ------\n`
    );
  } else {
    console.log(res);
    console.log(
      `\n ------ ${getNowTime(`toLocaleTimeString`)} 签到失败 ------ \n`
    );
  }
};

/**
 * 掘金自动抽奖 请求方法
 */
const automatic = async () => {
  console.log(
    `\n\n------${getNowTime(`toLocaleDateString`)} - 开始签到123------\n`
  );
  const { headers, drawUrl, datas } = nuggets; //签到相关参数
  const res = await axios({
    url: drawUrl,
    method: `post`,
    headers,
    data: datas,
  });
  if (res && res.data) {
    let jsonMsg = JSON.stringify(res.data);
    console.log(
      `\n ${jsonMsg} \n \n ------ ${getNowTime(
        `toLocaleTimeString`
      )} 抽奖成功 ------\n`
    );
  } else {
    console.log(res);
    console.log(
      `\n ------ ${getNowTime(`toLocaleTimeString`)} 抽奖失败 ------ \n`
    );
  }
};

var server = http.createServer();

// 开启服务器
server.listen(3000, function () {
  console.log("Server running at 192.168.0.244:3000");
  //开始执行任务
  console.log(`开始执行任务-${getNowTime("toLocaleString")}`);

  setInterval(() => {
    const date = new Date();
    const xs = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const fz =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

    const time = xs + ":" + fz;
    // 每天定时签到抽奖
    if (time === "08:48") {
      hacpaiSignRequest(); //签到函数
    }
    if (time === "08:49") {
      automatic(); //签到函数
    }
  }, 10000);
});
