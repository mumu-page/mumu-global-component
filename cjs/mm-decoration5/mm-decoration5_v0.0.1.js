"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("@jiaminghi/data-view-react");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=o(e),a={name:"mm-decoration5",description:"装饰",version:"0.0.1",snapshot:"https://cloud.resonance.fun/?explorer/share/file&hash=e362NNScLNH1CHAl4NBh0hnq6sWYxIx07nXLo7QG9AK8GsYeGy2nBvozmUbgZtXDYStq",schema:{type:"object",properties:{color:{title:"自定义颜色",type:"color",format:"color"},style:{title:"背景色",type:"color",format:"color"}},required:[]},data:{color:"",style:{}}};exports.Component=function(e){var o=e.color,a=e.style,c=void 0===a?{width:"300px",height:"40px"}:a;return r.default.createElement(t.Decoration5,{style:c,color:o})},exports.config=a;
