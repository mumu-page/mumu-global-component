"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("@jiaminghi/data-view-react");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=o(e),n={name:"mm-border-box11",description:"边框",version:"0.0.1",snapshot:"https://cloud.resonance.fun/?explorer/share/file&hash=e362NNScLNH1CHAl4NBh0hnq6sWYxIx07nXLo7QG9AK8GsYeGy2nBvozmUbgZtXDYStq",schema:{type:"object",properties:{color:{title:"自定义颜色",type:"color",format:"color"},backgroundColor:{title:"背景色",type:"color",format:"color"},title:{title:"边框标题",type:"string"},titleWidth:{title:"标题宽度",type:"number"}},required:[]},data:{color:"",backgroundColor:""}},l="index-module_objectContainer__KYwgX";function a(e){var t=e.children;return r.default.createElement("div",{id:"object-container",className:l},t)}exports.Component=function(e){var o=e.color,n=e.backgroundColor;return r.default.createElement(t.BorderBox11,{color:o,backgroundColor:n},r.default.createElement(a,null))},exports.config=n;
