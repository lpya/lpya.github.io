import{K as a}from"./_FullInternals-a5512e47.js";import{d as p,D as f,q as v,o as m,A as u,B as g,s as w}from"./index-afcb1617.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const y=t=>(u("data-v-c2270c3a"),t=t(),g(),t),k={class:"index"},B=y(()=>w("div",{id:"canvas"},null,-1)),E=[B],I=p({__name:"21-hoverEvents",setup(t){f(()=>{r()});const r=()=>{const e=document.getElementById("canvas");if(!e)return;const{clientWidth:o,clientHeight:i}=e,_=new a.Stage({container:"canvas",width:o,height:i}),d=new a.Layer;_.add(d);for(let s=0;s<4;s++){const l=o/2-25-s*100+100,h=i/2-50/2,n=new a.Rect({x:l,y:h,width:50,height:50,fill:"#ff8800",stroke:"black",strokeWidth:1});n.on("mouseenter",c=>{c.target.setAttrs({fill:"#00ff00"})}),n.on("mouseleave",c=>{c.target.setAttrs({fill:"#ff8800"})}),d.add(n)}};return(e,o)=>(m(),v("div",k,E))}});const b=x(I,[["__scopeId","data-v-c2270c3a"]]);export{b as default};