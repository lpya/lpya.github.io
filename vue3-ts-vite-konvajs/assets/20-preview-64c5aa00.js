import{K as c}from"./_FullInternals-b1d87c82.js";import{d as M,j as C,c as E,o as T,p as W,i as K,a as b}from"./index-c6b3677b.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";const k=d=>(W("data-v-6b5052de"),d=d(),K(),d),Y={class:"index"},A=k(()=>b("div",{id:"canvas"},null,-1)),X=k(()=>b("div",{id:"preview"},null,-1)),j=[A,X],D=M({__name:"20-preview",setup(d){let e=null,w=null;const i=new c.Layer,l=new c.Transformer;C(()=>{P()});const P=()=>{const _=document.getElementById("canvas");if(!_)return;const{clientWidth:r,clientHeight:h}=_;e=new c.Stage({container:"canvas",width:r,height:h}),e.add(i);const S=new c.Rect({id:"rect1",name:"rect",x:r/2-200,y:h/2-100,width:200,height:100,fill:"#ff8800",stroke:"black",strokeWidth:1,draggable:!0});i.add(S);const R=new c.Rect({id:"rect2",name:"rect",x:r/2+100,y:h/2,width:200,height:100,fill:"#ff00ff",stroke:"black",strokeWidth:1,draggable:!0});i.add(R);const s=new c.Rect({fill:"rgba(0,0,255,0.1)",visible:!1,stroke:"rgba(0,0,255,0.5)",strokeWidth:1});i.add(s),i.add(l),e.on("click tap",n=>{const t=n.target;t.getType()==="Shape"?l.nodes([t]):l.nodes([])});let g=0,m=0,u=0,f=0;e.on("mousedown touchstart",n=>{if(n.target!==e)return;n.evt.preventDefault();const{x:t,y:o}=e.getRelativePointerPosition();g=t,u=t,m=o,f=o,s.visible(!0),s.width(0),s.height(0)}),e.on("mousemove touchmove",n=>{if(!s.visible())return;const{x:t,y:o}=e==null?void 0:e.getRelativePointerPosition();u=t,f=o,s.setAttrs({x:Math.min(g,u),y:Math.min(m,f),width:Math.abs(g-u),height:Math.abs(m-f)})}),e.on("mouseup touchend",n=>{if(!e||!s.visible())return;setTimeout(()=>{s.visible(!1)});const t=e.find(".rect"),o=s.getClientRect();let p=t.filter(a=>c.Util.haveIntersection(o,a.getClientRect()));l.nodes(p)});const y=1.1;e.on("wheel",n=>{if(!e)return;const t=e.scaleX(),o=e.getPointerPosition(),p={x:(o.x-e.x())/t,y:(o.y-e.y())/t};let a=n.evt.deltaY>0?-1:1;n.evt.ctrlKey&&(a=-a);const v=a>0?t*y:t/y;e.scale({x:v,y:v});const B={x:o.x-p.x*v,y:o.y-p.y*v};e.position(B)}),w=new c.Stage({container:"preview",width:r/4,height:h/4,scaleX:1/4,scaleY:1/4});let x=i.clone();w.add(x),e.on("dragmove",I);function I(){!i||!i.children||i.children.forEach(n=>{const t=x.findOne(`#${n.id()}`);t&&t.position(n.position())})}};return(_,r)=>(T(),E("div",Y,j))}});const U=L(D,[["__scopeId","data-v-6b5052de"]]);export{U as default};
