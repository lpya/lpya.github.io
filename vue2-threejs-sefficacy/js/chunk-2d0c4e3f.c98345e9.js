(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4e3f"],{"3d80":function(e,n,i){"use strict";i.r(n);var t=function(){var e=this;e._self._c;return e._m(0)},r=[function(){var e=this,n=e._self._c;return n("div",{staticClass:"TextureLoader"},[n("div",{attrs:{id:"container"}})])}],s=i("a2b2"),a=i("ba71"),d={data(){return{scene:null,camera:null,renderer:null,composer:null}},mounted(){this.init()},methods:{init(){const e=document.getElementById("container");this.initScene(),this.initCamera(),this.initRenderer(e),this.initCube(),this.initOrbitControls(),this.animation(),window.addEventListener("resize",this.onWindowResize)},initScene(){this.scene=new s["C"],this.scene.background=new s["f"]("#ccc")},initCamera(){this.camera=new s["u"](75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,0,10)},initRenderer(e){this.renderer=new s["L"]({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),e.appendChild(this.renderer.domElement)},initOrbitControls(){let e=new a["a"](this.camera,this.renderer.domElement);e.maxDistance=15,e.addEventListener("change",this.render)},render(){this.renderer.render(this.scene,this.camera)},onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},animation(){this.render(),requestAnimationFrame(this.animation)},initCube(){const e=(new s["G"]).load("2.webp");e.wrapS=e.wrapT=s["B"],e.repeat.set(1,1),e.needsUpdate=!0;const n=new s["c"](2,2,2),i=new s["p"]({map:e,side:s["g"],transparent:!0});let t=new s["o"](n,i);for(let r=0;r<3;r++){let e=t.clone();e.name="cube"+r,e.position.x=3*(r-1),this.scene.add(e)}}}},o=d,c=i("e607"),h=Object(c["a"])(o,t,r,!1,null,null,null);n["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0c4e3f.c98345e9.js.map