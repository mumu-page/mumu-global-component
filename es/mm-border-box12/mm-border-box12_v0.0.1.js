import o from"react";import{BorderBox12 as r}from"@jiaminghi/data-view-react";var e={name:"mm-border-box12",description:"边框",version:"0.0.1",snapshot:"https://cloud.resonance.fun/?explorer/share/file&hash=e362NNScLNH1CHAl4NBh0hnq6sWYxIx07nXLo7QG9AK8GsYeGy2nBvozmUbgZtXDYStq",schema:{type:"object",properties:{color:{title:"自定义颜色",type:"color",format:"color"},backgroundColor:{title:"背景色",type:"color",format:"color"}},required:[]},data:{color:"",backgroundColor:""}},t="index-module_objectContainer__KYwgX";function n(r){var e=r.children;return o.createElement("div",{id:"object-container",className:t},e)}function c(e){var t=e.color,c=e.backgroundColor;return o.createElement(r,{color:t,backgroundColor:c},o.createElement(n,null))}export{c as Component,e as config};