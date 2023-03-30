var Z=Object.defineProperty;var q=(k,t,c)=>t in k?Z(k,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):k[t]=c;var V=(k,t,c)=>(q(k,typeof t!="symbol"?t+"":t,c),c);import{d as J,r as Q,j as tt,t as et,c as U,a as e,e as _,w as D,F as X,b as Y,u as r,g as O,k as nt,v as st,h as T,o as B,f as I,n as H,l as ot}from"./index-c6b3677b.js";import{K as f}from"./_FullInternals-b1d87c82.js";const a={RECT:"rect",PARALLELOGRAM:"parallelogram",RHOMBUS:"rhombus",LINE:"line",ARROWS:"arrows",TEXT:"text",CIRCLEL:"circle",OVAL:"oval",ANNULAR:"annular",PENTAGON:"pentagon",HEXAGON:"hexagon",FIVESTAR:"fivestar",TRAPEZIUM:"trapezium",FAN:"fan",HEART:"heart",CANVAS:"canvas",BOARD:"board"},it=[{name:"矩形",icon:"icon-juxing",type:a.RECT},{name:"平行四边形",icon:"icon-tx-pinghangsibianxing",type:a.PARALLELOGRAM},{name:"菱形",icon:"icon-tubiao",type:a.RHOMBUS},{name:"直线",icon:"icon-line",type:a.LINE},{name:"箭头",icon:"icon-xiaoyoujiantou",type:a.ARROWS},{name:"文本",icon:"icon-wenben",type:a.TEXT},{name:"圆形",icon:"icon-yuanxingweixuanzhong",type:a.CIRCLEL},{name:"椭圆",icon:"icon-tuoyuanxing",type:a.OVAL},{name:"环形",icon:"icon-huanxingtu",type:a.ANNULAR},{name:"五边形",icon:"icon-pentagon",type:a.PENTAGON},{name:"六边形",icon:"icon-tx-liubianxing",type:a.HEXAGON},{name:"五角星",icon:"icon-wujiaoxing",type:a.FIVESTAR},{name:"梯形",icon:"icon-tx-tixing",type:a.TRAPEZIUM},{name:"扇形",icon:"icon-shanxing",type:a.FAN},{name:"心形",icon:"icon-heart",type:a.HEART}];class at{constructor(t){V(this,"id");V(this,"SCALE_BY");V(this,"stage");V(this,"layer");V(this,"tr");V(this,"group");this.id=t,this.SCALE_BY=1.1,this.stage=null,this.layer=this.newLayer(),this.tr=this.newTransformer(),this.group=this.newGroup({x:0,y:0}),this.init()}init(){const t=document.getElementById(this.id);if(!t)return;const{clientWidth:c,clientHeight:d}=t;this.stage=this.newStage({container:this.id,width:c,height:d,draggable:!1,type:a.CANVAS}),this.layer.add(this.group),this.layer.add(this.tr),this.stage.add(this.layer),this.drawBoard(),this.addListenerStageEvents()}addListenerStageEvents(){const{stage:t}=this;t&&t.on("wheel",c=>{if(!t)return;const d=t.scaleX(),p=t.getPointerPosition(),m={x:(p.x-t.x())/d,y:(p.y-t.y())/d};let E=c.evt.deltaY>0?-1:1;c.evt.ctrlKey&&(E=-E);const v=E>0?d*this.SCALE_BY:d/this.SCALE_BY;t.scale({x:v,y:v});const P={x:p.x-m.x*v,y:p.y-m.y*v};t.position(P)})}drawBoard(){if(!this.stage)return;const t=800,c=500,d=this.stage.width()/2-t/2,p=this.stage.height()/2-c/2,m=this.newRect({id:this.getUUID(),title:"画板",name:"board",x:d,y:p,width:t,height:c,fill:"#ffffff",type:a.BOARD,stroke:"#ffffff",strokeWidth:1,opacity:1,create:!0,scaleX:1,scaleY:1});this.group.add(m)}drawShapes(t,c){if(!this.stage)return;let d;const p=this.getUUID();if(t===a.RECT){const m=this.stage.find(".rect");d=this.newRect({id:p,title:`矩形${m.length+1}`,name:"rect",width:200,height:100,fill:"#ffffff",stroke:"#000000",strokeWidth:1,draggable:!0,type:t,opacity:1,create:!0,scaleX:1,scaleY:1})}else if(t===a.PARALLELOGRAM){const m=this.stage.find(".parallelogram");d=this.newRect({id:p,title:`平行四边形${m.length+1}`,name:"parallelogram",width:200,height:100,fill:"#ffffff",stroke:"#000000",strokeWidth:1,draggable:!0,skewX:-.5,type:t,opacity:1,create:!0,scaleX:1,scaleY:1})}else if(t===a.RHOMBUS){const m=this.stage.find(".rhombus");d=new f.RegularPolygon({id:p,title:`菱形${m.length+1}`,sides:4,radius:100,name:"rhombus",fill:"#ffffff",stroke:"#000000",strokeWidth:1,draggable:!0,type:t,opacity:1,create:!0,scaleX:1,scaleY:1})}if(d)return d.position(c),this.group.add(d),d}onresize(){var p;const t=document.getElementById(this.id);if(!t)return;const{clientWidth:c,clientHeight:d}=t;(p=this.stage)==null||p.setAttrs({width:c,height:d})}getUUID(){let t=Date.now();return typeof performance<"u"&&typeof performance.now=="function"&&(t+=performance.now()),"xxxxxxxxxxxxxxx4xxxyxxxxxxxxxxxxxx".replace(/[xy]/g,function(c){const d=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(c==="x"?d:d&3|8).toString(16)})}newStage(t){return new f.Stage(t)}newLayer(){return new f.Layer}newTransformer(){return new f.Transformer}newGroup(t){return new f.Group(t)}newRect(t){return new f.Rect(t)}newCircle(t){return new f.Circle(t)}newText(t){return new f.Text(t)}newRegularPolygon(t){return new f.RegularPolygon(t)}newLine(t){return new f.Line(t)}newLabel(t){return new f.Label(t)}newTag(t){return new f.Tag(t)}newArrows(t){return new f.Arrow(t)}newPath(t){return new f.Path(t)}}const lt={class:"advanced"},rt={class:"header"},dt={class:"action-left"},ct={class:"action-right"},ut={class:"container"},ht={class:"shapes"},pt=e("div",{class:"shapes-title"},"基本图形",-1),ft={class:"shapes-content"},mt=["onMousedown"],gt=e("div",{id:"canvas"},null,-1),_t={class:"attrs"},vt={class:"attrs-content"},xt=e("div",{class:"attrs-title"},"属性",-1),yt={class:"attrs-item"},wt=e("div",{class:"label"},"标题",-1),At={class:"input"},bt={class:"attrs-item"},Rt=e("div",{class:"label"},"宽",-1),kt={class:"input"},Lt={class:"attrs-item"},St=e("div",{class:"label"},"高",-1),Vt={class:"input"},Ct={class:"attrs-item"},Et=e("div",{class:"label"},"X",-1),Mt={class:"input"},Ut={class:"attrs-item"},Ot=e("div",{class:"label"},"Y",-1),Tt={class:"input"},Bt=e("div",{class:"attrs-title"},"外形",-1),Pt={class:"attrs-item"},Nt=e("div",{class:"label"},"不透明度",-1),Dt={class:"input"},It={class:"color"},Xt={class:"attrs-item"},Yt=e("div",{class:"label"},"填充",-1),Ht={class:"input"},Wt={class:"color"},Gt={class:"attrs-item"},$t=e("div",{class:"label"},"边框",-1),zt={class:"input"},Ft={class:"color"},jt={class:"attrs-item"},Kt=e("div",{class:"label"},"边框宽度",-1),Zt={class:"input"},qt={class:"contextMenu"},Jt=["onClick"],ne=J({__name:"index",setup(k){const t=Q({konva:new at("canvas"),type:"",shapeAttrs:{},menuList:[{name:"上移图形",type:"moveUp",disabled:!1},{name:"下移图形",type:"moveDown",disabled:!1},{name:"删除",type:"destroy",disabled:!1}],contextMenuVis:!1}),c=ot();tt(()=>{d(),document.oncontextmenu=function(){return!1}});const d=()=>{t.konva.init(),p(),window.onresize=()=>{t.konva.onresize()}},p=()=>{const{stage:s}=t.konva;if(!s)return;const n=s.container();v(s.findOne(".board")),s.on("click tap",i=>{const l=i.target,h=l.getAttrs();if(i.evt.button===2){if(h.type!==a.RECT&&h.type!==a.PARALLELOGRAM&&h.type!==a.RHOMBUS)return;if(v(l),N(),!t.contextMenuVis){W();let y=document.querySelector(".contextMenu");if(!y)return;l.getAbsoluteZIndex()===5?t.menuList[1].disabled=!0:t.menuList[1].disabled=!1,y.style.left=`${i.evt.clientX+10}px`,y.style.top=`${i.evt.clientY+1}px`}}}),s.on("mousedown",i=>{const l=i.target,h=l.getAttrs();if(i.evt.button===1&&s.draggable(!0),i.evt.button===0){if(N(),h.type===a.CANVAS){v(s.findOne(".board")),t.konva.tr.nodes([]);return}if(!h.create)return;if(v(l),h.type===a.BOARD){t.konva.tr.nodes([]);return}t.konva.tr.nodes([l])}}),s.on("mouseup",i=>{i.evt.button===1&&s.draggable(!1)}),n.addEventListener("dragover",i=>{i.preventDefault()}),n.addEventListener("drop",i=>{if(i.preventDefault(),t.type==="")return;s.setPointersPositions(i);const l=t.konva.drawShapes(t.type,s.getRelativePointerPosition());l&&m(l)})},m=s=>{s.on("dragmove",n=>{v(n.target)}),s.on("transform",n=>{v(n.target)})},E=s=>{t.type=s},v=s=>{const{id:n,title:i,opacity:l,fill:h,stroke:y,strokeWidth:L,width:o,height:g,x:w,y:M,scaleX:C,scaleY:b,type:R,radius:S}=s.getAttrs();let x={id:n,title:i,opacity:l,fill:h,stroke:y,strokeWidth:L,width:o,height:g,x:w,y:M,scaleX:C,scaleY:b,type:R,radius:S};R===a.RHOMBUS?(x.width=Math.round(S*C)*2,x.height=Math.round(S*b)*2):(x.width=Math.round(o*C),x.height=Math.round(g*b)),x.x=Math.round(w),x.y=Math.round(M),t.shapeAttrs=x},P=s=>s?Math.round(s*100):100,A=()=>{const{stage:s}=t.konva;if(!s)return;const n=s.findOne(`#${t.shapeAttrs.id}`);if(!n)return;let{id:i,title:l,opacity:h,fill:y,stroke:L,strokeWidth:o,width:g,height:w,x:M,y:C,scaleX:b,scaleY:R,type:S,radius:x}=t.shapeAttrs;g&&w&&b&&R&&(S===a.RHOMBUS?(b=g/x*.5,R=w/x*.5,n.setAttrs({id:i,title:l,opacity:h,fill:y,stroke:L,strokeWidth:o,x:M,y:C,scaleX:b,scaleY:R,type:S,radius:x})):(g=Math.round(g/b),w=Math.round(w/R),n.setAttrs({id:i,title:l,opacity:h,fill:y,stroke:L,strokeWidth:o,width:g,height:w,x:M,y:C,scaleX:b,scaleY:R,type:S})))},W=()=>{t.contextMenuVis=!0},N=()=>{t.contextMenuVis=!1},G=s=>{var h;const{shapeAttrs:n,konva:i}=t,l=(h=i.stage)==null?void 0:h.findOne(`#${n.id}`);if(l){if(s==="moveUp")l.moveUp();else if(s==="moveDown"){if(l.getAbsoluteZIndex()===5)return;l.moveDown()}else s==="destroy"&&l.destroy();i.tr.nodes([]),N()}},$=()=>{const s=t.konva.group.toDataURL();let n=document.createElement("a");n.download="canvas.png",n.href=s,document.body.appendChild(n),n.click(),document.body.removeChild(n)},z=()=>{let s=t.konva.group.find("Shape");for(let n=0;n<s.length;n++){const i=s[n];i.getAttrs().type!==a.BOARD&&i.destroy()}},F=()=>{c.push("/")},{shapeAttrs:u,menuList:j,contextMenuVis:K}=et(t);return(s,n)=>{const i=T("el-button"),l=T("el-input"),h=T("el-input-number"),y=T("el-slider"),L=T("el-color-picker");return B(),U("div",lt,[e("div",rt,[e("div",dt,[_(i,{type:"warning",onClick:F},{default:D(()=>[I("返回")]),_:1})]),e("div",ct,[_(i,{type:"primary",onClick:$},{default:D(()=>[I("导出png")]),_:1}),_(i,{type:"danger",onClick:z},{default:D(()=>[I("清空")]),_:1})])]),e("div",ut,[e("div",ht,[pt,e("div",ft,[(B(!0),U(X,null,Y(r(it),(o,g)=>(B(),U("div",{key:g,class:"shapes-item",draggable:"true",onMousedown:w=>E(o.type)},[e("i",{class:H(["iconfont",o.icon])},null,2),e("label",null,O(o.name),1)],40,mt))),128))])]),gt,e("div",_t,[e("div",vt,[xt,e("div",yt,[wt,e("div",At,[_(l,{modelValue:r(u).title,"onUpdate:modelValue":n[0]||(n[0]=o=>r(u).title=o),style:{width:"150px"},onChange:A},null,8,["modelValue"])])]),e("div",bt,[Rt,e("div",kt,[_(h,{modelValue:r(u).width,"onUpdate:modelValue":n[1]||(n[1]=o=>r(u).width=o),controls:!1,onChange:A},null,8,["modelValue"])])]),e("div",Lt,[St,e("div",Vt,[_(h,{modelValue:r(u).height,"onUpdate:modelValue":n[2]||(n[2]=o=>r(u).height=o),controls:!1,onChange:A},null,8,["modelValue"])])]),e("div",Ct,[Et,e("div",Mt,[_(h,{modelValue:r(u).x,"onUpdate:modelValue":n[3]||(n[3]=o=>r(u).x=o),controls:!1,onChange:A},null,8,["modelValue"])])]),e("div",Ut,[Ot,e("div",Tt,[_(h,{modelValue:r(u).y,"onUpdate:modelValue":n[4]||(n[4]=o=>r(u).y=o),controls:!1,onChange:A},null,8,["modelValue"])])]),Bt,e("div",Pt,[Nt,e("div",Dt,[_(y,{modelValue:r(u).opacity,"onUpdate:modelValue":n[5]||(n[5]=o=>r(u).opacity=o),size:"small",min:0,max:1,step:.01,style:{width:"120px"},onChange:A},null,8,["modelValue","step"]),e("span",It,O(P(r(u).opacity))+"%",1)])]),e("div",Xt,[Yt,e("div",Ht,[_(L,{modelValue:r(u).fill,"onUpdate:modelValue":n[6]||(n[6]=o=>r(u).fill=o),onChange:A},null,8,["modelValue"]),e("span",Wt,O(r(u).fill),1)])]),e("div",Gt,[$t,e("div",zt,[_(L,{modelValue:r(u).stroke,"onUpdate:modelValue":n[7]||(n[7]=o=>r(u).stroke=o),onChange:A},null,8,["modelValue"]),e("span",Ft,O(r(u).stroke),1)])]),e("div",jt,[Kt,e("div",Zt,[_(h,{modelValue:r(u).strokeWidth,"onUpdate:modelValue":n[8]||(n[8]=o=>r(u).strokeWidth=o),controls:!1,onChange:A},null,8,["modelValue"])])])])])]),nt(e("div",qt,[(B(!0),U(X,null,Y(r(j),(o,g)=>(B(),U("div",{key:g,class:H(["contextmenu-item",o.disabled?"disabled":"default"]),onClick:w=>G(o.type)},O(o.name),11,Jt))),128))],512),[[st,r(K)]])])}}});export{ne as default};