import e from"react";import{Decoration4 as o}from"@jiaminghi/data-view-react";var r={name:"mm-decoration4",description:"装饰",version:"0.0.1",snapshot:"https://cloud.resonance.fun/?explorer/share/file&hash=e362NNScLNH1CHAl4NBh0hnq6sWYxIx07nXLo7QG9AK8GsYeGy2nBvozmUbgZtXDYStq",schema:{type:"object",properties:{color:{title:"自定义颜色",type:"color",format:"color"},style:{title:"背景色",type:"color",format:"color"}},required:[]},data:{color:"",style:{}}};function t(r){var t=r.color,a=r.style,c=void 0===a?{width:"5px",height:"150px"}:a;return e.createElement(o,{reverse:!0,style:c,color:t})}export{t as Component,r as config};
