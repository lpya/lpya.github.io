import{K as s}from"./_FullInternals-b1d87c82.js";import{d as _,j as l,c as r,o as p,p as u,i as h,a as m}from"./index-c6b3677b.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const f=e=>(u("data-v-ab79ad50"),e=e(),h(),e),g={class:"index"},x=f(()=>m("div",{id:"canvas"},null,-1)),y=[x],b=_({__name:"3-ellipse",setup(e){l(()=>{n()});const n=()=>{const t=document.getElementById("canvas");if(!t)return;const{clientWidth:a,clientHeight:c}=t,d=new s.Stage({container:"canvas",width:a,height:c}),o=new s.Layer;d.add(o);const i=new s.Ellipse({x:200,y:100,radiusX:200,radiusY:100,fill:"red",stroke:"black",strokeWidth:1,draggable:!0});o.add(i)};return(t,a)=>(p(),r("div",g,y))}});const I=v(b,[["__scopeId","data-v-ab79ad50"]]);export{I as default};