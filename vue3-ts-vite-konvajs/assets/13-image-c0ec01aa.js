import{K as s}from"./_FullInternals-b1d87c82.js";import{d as i,j as r,c as p,o as l,p as m,i as f,a as h}from"./index-c6b3677b.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const u=e=>(m("data-v-6af3df41"),e=e(),f(),e),v={class:"index"},I=u(()=>h("div",{id:"canvas"},null,-1)),x=[I],y=i({__name:"13-image",setup(e){r(()=>{d()});const d=()=>{const t=document.getElementById("canvas");if(!t)return;const{clientWidth:a,clientHeight:o}=t,_=new s.Stage({container:"canvas",width:a,height:o}),n=new s.Layer;_.add(n),s.Image.fromURL("address.png",c=>{c.setAttrs({x:a/2-25,y:o/2-25,height:50,width:50,scaleY:1,scaleX:1}),n.add(c)})};return(t,a)=>(l(),p("div",v,x))}});const k=g(y,[["__scopeId","data-v-6af3df41"]]);export{k as default};
