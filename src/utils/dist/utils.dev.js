"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  /**
   * 时间戳转分秒
   */

  /*
  * 格式化时间戳
  */
  formatDate: function formatDate(time, number) {
    var date = new Date(time); // 如果time是13位, 则不需要乘1000

    var Y = date.getFullYear() + "-";
    var M = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) + "-" : date.getMonth() + 1 + "-";
    var D = (date.getDay() < 10 ? "0" + date.getDay() : date.getDay()) + " ";
    var h = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
    var m = (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":";
    var s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    switch (number) {
      case 3:
        return h + m + s;

      case 6:
        return Y + M + D + h + m + s;

      default:
        return Y + M + D;
    }
  }
};
exports["default"] = _default;