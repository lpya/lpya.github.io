import{K as n}from"./_FullInternals-a5512e47.js";import{d as l,i as h,c as u,o as v,p as f,j as y,a as I}from"./index-03eca20f.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const w=t=>(f("data-v-18d23e5a"),t=t(),y(),t),x={class:"index"},A=w(()=>I("div",{id:"canvas"},null,-1)),B=[A],S=l({__name:"14-animation",setup(t){h(()=>{d()});const d=()=>{const a=document.getElementById("canvas");if(!a)return;const{clientWidth:o,clientHeight:c}=a,_=new n.Stage({container:"canvas",width:o,height:c}),s=new n.Layer;_.add(s),n.Image.fromURL("address.png",e=>{e.setAttrs({x:o/2-25,y:c/2-25,height:50,width:50,scaleY:1,scaleX:1}),s.add(e);const r=10,p=1e3,m=e.y()-10;new n.Animation(i=>{i&&e.y(r*Math.sin(i.time*2*Math.PI/p)+m)},s).start()})};return(a,o)=>(v(),u("div",x,B))}});const L=g(S,[["__scopeId","data-v-18d23e5a"]]);export{L as default};
