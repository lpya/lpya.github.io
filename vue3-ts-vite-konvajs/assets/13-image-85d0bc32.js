import{K as a}from"./_FullInternals-a5512e47.js";import{d as i,D as r,q as p,o as l,A as m,B as f,s as h}from"./index-3a441c07.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const u=e=>(m("data-v-6af3df41"),e=e(),f(),e),v={class:"index"},I=u(()=>h("div",{id:"canvas"},null,-1)),x=[I],y=i({__name:"13-image",setup(e){r(()=>{d()});const d=()=>{const t=document.getElementById("canvas");if(!t)return;const{clientWidth:s,clientHeight:o}=t,_=new a.Stage({container:"canvas",width:s,height:o}),n=new a.Layer;_.add(n),a.Image.fromURL("address.png",c=>{c.setAttrs({x:s/2-25,y:o/2-25,height:50,width:50,scaleY:1,scaleX:1}),n.add(c)})};return(t,s)=>(l(),p("div",v,x))}});const k=g(y,[["__scopeId","data-v-6af3df41"]]);export{k as default};
