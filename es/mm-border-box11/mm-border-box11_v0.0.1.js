import e from"react";import{BorderBox11 as o}from"@jiaminghi/data-view-react";var r={name:"mm-border-box11",description:"边框",version:"0.0.1",snapshot:"https://cloud.resonance.fun/?explorer/share/file&hash=e362NNScLNH1CHAl4NBh0hnq6sWYxIx07nXLo7QG9AK8GsYeGy2nBvozmUbgZtXDYStq",schema:{type:"object",properties:{color:{title:"自定义颜色",type:"color",format:"color"},backgroundColor:{title:"背景色",type:"color",format:"color"},title:{title:"边框标题",type:"string"},titleWidth:{title:"标题宽度",type:"number"}},required:[]},data:{color:"",backgroundColor:""}},t="index-module_objectContainer__KYwgX";function n(o){var r=o.children;return e.createElement("div",{id:"object-container",className:t},r)}function c(r){var t=r.color,c=r.backgroundColor;return e.createElement(o,{color:t,backgroundColor:c},e.createElement(n,null))}export{c as Component,r as config};
