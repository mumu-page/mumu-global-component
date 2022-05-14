!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("@jiaminghi/data-view-react"),require("echarts")):"function"==typeof define&&define.amd?define(["exports","react","@jiaminghi/data-view-react","echarts"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["mm-border-box1_v0_0_1"]={},e.React,e.datav,e.echarts)}(this,(function(e,t,o,r){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var r=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,r.get?r:{enumerable:!0,get:function(){return e[o]}})}})),t.default=e,Object.freeze(t)}var n=i(t),l=a(r),c={name:"mm-border-box1",description:"边框",version:"0.0.1",snapshot:"https://cloud.resonance.fun/?explorer/share/file&hash=bc9f3bI1zPdF2X--QMAjdSWLS3M2SxfdGi-9BWWTBeMjce4lyBd7D9Z5xWY2fBEGsk-d",schema:{type:"object",properties:{color:{title:"自定义颜色",type:"string",format:"color"},backgroundColor:{title:"背景色",type:"string",format:"color"},padding:{title:"边距",type:"number",widget:"slider"},height:{title:"高度",type:"number",widget:"slider"}},required:[]},data:{color:[],backgroundColor:"",padding:30}},u=20,s=10,d=l.graphic.extendShape({shape:{x:0,y:0},buildPath:function(e,t){var o,r=t.xAxisPoint,i=[t.x,t.y],a=[t.x-u,t.y-s],n=[r[0]-u,r[1]-s],l=[r[0],r[1]];null===(o=e.moveTo(i[0],i[1]))||void 0===o||o.lineTo(a[0],a[1]).lineTo(n[0],n[1]).lineTo(l[0],l[1]).closePath()}}),f=l.graphic.extendShape({shape:{x:0,y:0},buildPath:function(e,t){var o,r=t.xAxisPoint,i=[t.x,t.y],a=[r[0],r[1]],n=[r[0]+u,r[1]-s],l=[t.x+u,t.y-s];null===(o=e.moveTo(i[0],i[1]))||void 0===o||o.lineTo(a[0],a[1]).lineTo(n[0],n[1]).lineTo(l[0],l[1]).closePath()}}),p=l.graphic.extendShape({shape:{x:0,y:0},buildPath:function(e,t){var o,r=[t.x,t.y],i=[t.x+u,t.y-s],a=[t.x,t.y-u],n=[t.x-u,t.y-s];null===(o=e.moveTo(r[0],r[1]))||void 0===o||o.lineTo(i[0],i[1]).lineTo(a[0],a[1]).lineTo(n[0],n[1]).closePath()}});l.graphic.registerShape("CubeLeft",d),l.graphic.registerShape("CubeRight",f),l.graphic.registerShape("CubeTop",p);var h=[100,200,300,400,300,200,100],y={backgroundColor:"#012366",tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e,t,o){var r=e[1];return r.name+" : "+r.value}},grid:{left:"10%",right:"10%",top:"15%",bottom:"10%",containLabel:!0},xAxis:{type:"category",data:["1001","1002","1003","1004","1005","1006","1007"],axisLine:{show:!0,lineStyle:{width:2,color:"#2B7BD6"}},axisTick:{show:!1},axisLabel:{fontSize:14}},yAxis:{type:"value",axisLine:{show:!0,lineStyle:{width:2,color:"#2B7BD6"}},splitLine:{show:!0,lineStyle:{color:"#153D7D"}},axisTick:{show:!1},axisLabel:{fontSize:14}},series:[{type:"custom",renderItem:function(e,t){var o=t.coord([t.value(0),t.value(1)]);return{type:"group",children:[{type:"CubeLeft",shape:{api:t,xValue:t.value(0),yValue:t.value(1),x:o[0],y:o[1],xAxisPoint:t.coord([t.value(0),0])},style:{fill:new l.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#33BCEB"},{offset:1,color:"#337CEB"}])}},{type:"CubeRight",shape:{api:t,xValue:t.value(0),yValue:t.value(1),x:o[0],y:o[1],xAxisPoint:t.coord([t.value(0),0])},style:{fill:new l.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#28A2CE"},{offset:1,color:"#1A57B7"}])}},{type:"CubeTop",shape:{api:t,xValue:t.value(0),yValue:t.value(1),x:o[0],y:o[1],xAxisPoint:t.coord([t.value(0),0])},style:{fill:new l.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#43C4F1"},{offset:1,color:"#28A2CE"}])}}]}},data:h},{type:"bar",label:{normal:{show:!0,position:"top",formatter:function(e){return e.value+"次"},fontSize:16,color:"#43C4F1",offset:[0,-25]}},itemStyle:{color:"transparent"},tooltip:{},data:h}]};e.Component=function(e){var r=e.color,i=e.backgroundColor,a=e.option,c=void 0===a?y:a,u=e.padding,s=void 0===u?30:u,d=e.height,f=void 0===d?400:d,p=t.useRef(null),h=t.useRef(null),x=t.useCallback((function(){var e;null===(e=h.current)||void 0===e||e.resize()}),[]);return t.useEffect((function(){if(p.current){var e=l.init(p.current);h.current=e,e.setOption(c);var t=new ResizeObserver(x);return t.observe(p.current),function(){t.disconnect()}}}),[]),n.default.createElement(o.BorderBox1,{color:r,backgroundColor:i},n.default.createElement("div",{ref:p,style:{padding:s,height:f}}))},e.config=c,Object.defineProperty(e,"__esModule",{value:!0})}));