(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c265b"],{"49aa":function(e,i,n){"use strict";n.r(i);var t=function(){var e=this;e._self._c;return e._m(0)},r=[function(){var e=this,i=e._self._c;return i("div",{staticClass:"breathingLamp"},[i("div",{attrs:{id:"container"}})])}],s=n("a2b2"),a=n("ba71"),d=n("4922"),o=n("5738"),h=n("5a2c"),c={data(){return{scene:null,camera:null,renderer:null,composer:null,cube:null}},mounted(){this.init()},methods:{init(){const e=document.getElementById("container");this.initScene(),this.initCamera(),this.initRenderer(e),this.initCube(),this.initOutlinePass(),this.initOrbitControls(),this.render(),this.requestAnimationFrame()},initScene(){this.scene=new s["x"],this.scene.background=new s["f"]("#000000")},initCamera(){this.camera=new s["r"](75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(2,5,2)},initRenderer(e){this.renderer=new s["F"]({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),e.appendChild(this.renderer.domElement)},initCube(){const e=new s["c"](2,2,2),i=new s["m"]({color:65535});this.cube=new s["l"](e,i),this.scene.add(this.cube),this.camera.position.z=5},initOutlinePass(){let e=new d["a"](this.scene,this.camera),i=new o["a"](new s["C"](window.innerWidth,window.innerHeight),this.scene,this.camera,[this.cube]);i.renderToScreen=!0,i.edgeGlow=1,i.usePatternTexture=!1,i.edgeThickness=2,i.edgeStrength=5,i.pulsePeriod=2,i.visibleEdgeColor.set("#ffff00"),i.hiddenEdgeColor.set("#ff0000"),this.composer=new h["a"](this.renderer),this.composer.addPass(e),this.composer.addPass(i)},initOrbitControls(){let e=new a["a"](this.camera,this.renderer.domElement);e.maxDistance=10,e.addEventListener("change",this.render)},requestAnimationFrame(){this.composer.render(),requestAnimationFrame(this.requestAnimationFrame)},render(){this.renderer.render(this.scene,this.camera)}}},l=c,u=n("e607"),m=Object(u["a"])(l,t,r,!1,null,null,null);i["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0c265b.c23c0baa.js.map