import{d as _,D as r,K as o,o as l,s as p,B as u,C as h,v}from"./index-372df34c.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const m=e=>(u("data-v-5b36798d"),e=e(),h(),e),g={class:"index"},x=m(()=>v("div",{id:"canvas"},null,-1)),y=[x],w=_({__name:"2-circle",setup(e){r(()=>{a()});const a=()=>{const t=document.getElementById("canvas");if(!t)return;const{clientWidth:s,clientHeight:c}=t,d=new o.Stage({container:"canvas",width:s,height:c}),n=new o.Layer;d.add(n);const i=new o.Circle({x:s/2,y:c/2,radius:100,fill:"#ff8800",stroke:"#000000",strokeWidth:1,draggable:!0});n.add(i)};return(t,s)=>(l(),p("div",g,y))}});const I=f(w,[["__scopeId","data-v-5b36798d"]]);export{I as default};