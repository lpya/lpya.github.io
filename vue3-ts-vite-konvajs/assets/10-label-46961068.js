import{d as r,D as p,K as e,o as f,s as h,B as g,C as u,v}from"./index-372df34c.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const m=t=>(g("data-v-ae53f60d"),t=t(),u(),t),x={class:"index"},y=m(()=>v("div",{id:"canvas"},null,-1)),b=[y],B=r({__name:"10-label",setup(t){p(()=>{c()});const c=()=>{const o=document.getElementById("canvas");if(!o)return;const{clientWidth:a,clientHeight:s}=o,i=new e.Stage({container:"canvas",width:a,height:s}),d=new e.Layer;i.add(d);const n=new e.Label({x:a/2,y:s/2-300,draggable:!0}),_=new e.Tag({fill:"#ff8800",pointerDirection:"down",stroke:"black",strokeWidth:1,pointerWidth:10,pointerHeight:10,shadowBlur:10,shadowOffsetX:10,shadowOpacity:.5}),l=new e.Text({text:"Hello World!",fontSize:18,padding:15,fill:"#fff"});n.add(_),n.add(l),d.add(n)};return(o,a)=>(f(),h("div",x,b))}});const S=w(B,[["__scopeId","data-v-ae53f60d"]]);export{S as default};