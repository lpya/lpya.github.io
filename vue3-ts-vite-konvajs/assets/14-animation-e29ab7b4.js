import{d as m,D as h,K as n,o as u,s as f,B as v,C as y,v as g}from"./index-372df34c.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const w=t=>(v("data-v-9a5759fe"),t=t(),y(),t),x={class:"index"},B=w(()=>g("div",{id:"canvas"},null,-1)),A=[B],S=m({__name:"14-animation",setup(t){h(()=>{d()});const d=()=>{const a=document.getElementById("canvas");if(!a)return;const{clientWidth:s,clientHeight:c}=a,_=new n.Stage({container:"canvas",width:s,height:c}),o=new n.Layer;_.add(o),n.Image.fromURL("/images/address.png",e=>{e.setAttrs({x:s/2-25,y:c/2-25,height:50,width:50,scaleY:1,scaleX:1}),o.add(e);const r=10,p=1e3,l=e.y()-10;new n.Animation(i=>{i&&e.y(r*Math.sin(i.time*2*Math.PI/p)+l)},o).start()})};return(a,s)=>(u(),f("div",x,A))}});const E=I(S,[["__scopeId","data-v-9a5759fe"]]);export{E as default};