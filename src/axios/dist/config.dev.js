"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var base_url = "";

if (process.env.NODE_ENV === "development") {
  base_url = "http://localhost:3000";
} else if (process.env.NODE_ENV === "production") {
  base_url = "https://nicemusic-api.lxhcool.cn/";
}

var _default = {
  base_url: base_url
};
exports["default"] = _default;