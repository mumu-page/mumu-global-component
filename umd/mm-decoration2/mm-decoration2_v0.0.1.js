!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("@jiaminghi/data-view-react")):"function"==typeof define&&define.amd?define(["exports","react","@jiaminghi/data-view-react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["mm-decoration2_v0_0_1"]={},e.React,e.datav)}(this,(function(e,t,o){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(t),i={name:"mm-decoration2",description:"装饰",version:"0.0.1",snapshot:"https://cloud.resonance.fun/?explorer/share/file&hash=e362NNScLNH1CHAl4NBh0hnq6sWYxIx07nXLo7QG9AK8GsYeGy2nBvozmUbgZtXDYStq",schema:{type:"object",properties:{color:{title:"自定义颜色",type:"color",format:"color"},style:{title:"背景色",type:"color",format:"color"}},required:[]},data:{color:"",style:{}}};e.Component=function(e){var t=e.color,r=e.style;return n.default.createElement(o.Decoration2,{reverse:!0,style:r,color:t})},e.config=i,Object.defineProperty(e,"__esModule",{value:!0})}));
