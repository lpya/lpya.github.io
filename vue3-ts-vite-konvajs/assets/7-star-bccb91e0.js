import{K as a}from"./_FullInternals-a5512e47.js";import{d as i,D as r,q as p,o as f,A as l,B as u,s as m}from"./index-afcb1617.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const v=t=>(l("data-v-910fafbc"),t=t(),u(),t),S={class:"index"},g=v(()=>m("div",{id:"canvas"},null,-1)),x=[g],y=i({__name:"7-star",setup(t){r(()=>{c()});const c=()=>{const e=document.getElementById("canvas");if(!e)return;const{clientWidth:s,clientHeight:o}=e,d=new a.Stage({container:"canvas",width:s,height:o}),n=new a.Layer;d.add(n);const _=new a.Star({x:s/2,y:o/2-100,numPoints:5,innerRadius:50,outerRadius:100,fill:"#ff8800",stroke:"black",strokeWidth:1});n.add(_)};return(e,s)=>(f(),p("div",S,x))}});const I=h(y,[["__scopeId","data-v-910fafbc"]]);export{I as default};