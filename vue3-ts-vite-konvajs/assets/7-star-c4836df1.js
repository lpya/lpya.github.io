import{K as s}from"./_FullInternals-b1d87c82.js";import{d as _,i as r,c as p,o as f,p as l,j as u,a as m}from"./index-879ded5a.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const v=t=>(l("data-v-910fafbc"),t=t(),u(),t),S={class:"index"},g=v(()=>m("div",{id:"canvas"},null,-1)),x=[g],y=_({__name:"7-star",setup(t){r(()=>{c()});const c=()=>{const e=document.getElementById("canvas");if(!e)return;const{clientWidth:a,clientHeight:o}=e,d=new s.Stage({container:"canvas",width:a,height:o}),n=new s.Layer;d.add(n);const i=new s.Star({x:a/2,y:o/2-100,numPoints:5,innerRadius:50,outerRadius:100,fill:"#ff8800",stroke:"black",strokeWidth:1});n.add(i)};return(e,a)=>(f(),p("div",S,x))}});const b=h(y,[["__scopeId","data-v-910fafbc"]]);export{b as default};
