import e from"react";var r={name:"mumu-global-banner",description:"banner组件1",version:"0.0.1",snapshot:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",schema:{type:"object",properties:{src:{title:"图片地址",type:"string",format:"image"},link:{title:"跳转链接",type:"string",format:"url"}},required:["src"]},data:{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}},t="index-module_global-banner__SDIOM";var a=function(r){var a=r.data;return e.createElement("a",{href:a.link},e.createElement("img",{className:t,src:a.src,alt:"图片"}))};export{a as Component,r as config};
