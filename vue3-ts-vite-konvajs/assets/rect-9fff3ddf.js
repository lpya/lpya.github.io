import{K as s}from"./_FullInternals-a5512e47.js";import{d as h,i as u,c as v,o as f,p as m,j as g,a as y}from"./index-087fe427.js";const k=t=>(m("data-v-6eacd8ca"),t=t(),g(),t),w={class:"index"},x=k(()=>y("div",{id:"canvas"},null,-1)),I=[x],B=h({__name:"rect",setup(t){u(()=>{n()});const n=()=>{const e=document.getElementById("canvas");if(!e)return;const{clientWidth:c,clientHeight:o}=e,i=new s.Stage({container:"canvas",width:c,height:o}),a=new s.Layer;i.add(a);const d=400,_=200,r=c/2-d/2,p=o/2-_/2,l=new s.Rect({x:r,y:p,width:d,height:_,fill:"#ff8800",stroke:"black",strokeWidth:1});a.add(l)};return(e,c)=>(f(),v("div",w,I))}});const S=(t,n)=>{const e=t.__vccOpts||t;for(const[c,o]of n)e[c]=o;return e},W=S(B,[["__scopeId","data-v-6eacd8ca"]]);export{W as default};