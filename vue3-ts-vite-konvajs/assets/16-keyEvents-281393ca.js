import{d as g,i as E,c as I,a as y,e as f,w as h,o as B,f as u,p as A,j as C}from"./index-c5f057bc.js";import{E as K}from"./el-button-9f4d36a8.js";import{K as r}from"./_FullInternals-a5512e47.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const R=c=>(A("data-v-9deac3e8"),c=c(),C(),c),S={class:"index"},b={class:"header"},L=R(()=>y("div",{id:"canvas"},null,-1)),V=g({__name:"16-keyEvents",setup(c){let t=null;const _=new r.Layer;E(()=>{m()});const m=()=>{const s=document.getElementById("canvas");if(!s)return;const{clientWidth:i,clientHeight:n}=s;t=new r.Stage({container:"canvas",width:i,height:n}),t.add(_);const p=400,l=200,k=i/2-p/2,x=n/2-l/2,e=new r.Rect({id:"testId",name:"testName",x:k,y:x,width:p,height:l,fill:"#ff8800",stroke:"black",strokeWidth:1,opacity:.5});_.add(e);const d=t.container(),a=10;d.tabIndex=1,d.focus(),d.addEventListener("keydown",o=>{if(o.key==="ArrowLeft")e.x(e.x()-a);else if(o.key==="ArrowDown")e.y(e.y()+a);else if(o.key==="ArrowRight")e.x(e.x()+a);else if(o.key==="ArrowUp")e.y(e.y()-a);else return;o.preventDefault()})},v=()=>{if(!t)return;t.findOne("Rect").show()},w=()=>{if(!t)return;t.findOne("Rect").hide()};return(s,i)=>{const n=K;return B(),I("div",S,[y("div",b,[f(n,{type:"primary",onClick:v},{default:h(()=>[u("展示")]),_:1}),f(n,{type:"success",onClick:w},{default:h(()=>[u("隐藏")]),_:1})]),L])}}});const H=N(V,[["__scopeId","data-v-9deac3e8"]]);export{H as default};