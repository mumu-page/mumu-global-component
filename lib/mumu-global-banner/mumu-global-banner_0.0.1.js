"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react")),r={name:"mumu-global-banner",description:"banner组件1",version:"0.0.1",snapshot:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",schema:{type:"object",properties:{src:{title:"图片地址",type:"string",format:"image"},link:{title:"跳转链接",type:"string",format:"url"}},required:["src"]},data:{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}},a="index-module_global-banner__SDIOM";var n=function(e){var r=e.data;return t.default.createElement("a",{href:r.link},t.default.createElement("img",{className:a,src:r.src,alt:"图片"}))};exports.Component=n,exports.config=r;