(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-000a4687"],{"78c1":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this;t._self._c;return t._m(0)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"tempalte"},[e("div",{attrs:{id:"container"}})])}],n=r("a2b2"),a=r("ba71"),o=r("4922"),l=r("8f54"),u=r("5738"),h=r("5a2c"),d={data(){return{scene:null,camera:null,renderer:null,stats:null,composer:null,cube:null}},mounted(){this.init()},methods:{init(){const t=document.getElementById("container");this.initScene(),this.initCamera(),this.initRenderer(t),this.initCube(),this.initOutlinePass(),this.initOrbitControls(),this.initPlane(),this.render(),this.requestAnimationFrame()},initScene(){this.scene=new n["x"],this.scene.background=new n["f"]("#000000")},initCamera(){this.camera=new n["r"](75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(2,5,2)},initRenderer(t){this.renderer=new n["F"]({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),t.appendChild(this.renderer.domElement)},initPlane(){const t=new n["o"]({side:n["g"]}),e=new n["s"](12,12),r=new n["l"](e,t);r.rotation.x-=.5*Math.PI,r.position.y-=1.5,this.scene.add(r)},initCube(){const t=new n["c"](2,2,2),e=new n["m"]({color:65535});this.cube=new n["l"](t,e),this.scene.add(this.cube),this.camera.position.z=5},initOutlinePass(){let t=new o["a"](this.scene,this.camera),e=new u["a"](new n["C"](window.innerWidth,window.innerHeight),this.scene,this.camera,[this.cube]);e.renderToScreen=!0,e.edgeGlow=1,e.usePatternTexture=!1,e.edgeThickness=2,e.edgeStrength=5,e.pulsePeriod=2,e.visibleEdgeColor.set("#ffff00"),e.hiddenEdgeColor.set("#ff0000"),this.composer=new h["a"](this.renderer),this.composer.addPass(t),this.composer.addPass(e)},initBloomPass(){let t=new o["a"](this.scene,this.camera),e=new l["a"](new n["C"](window.innerWidth,window.innerHeight),1.5,.4,.85);e.renderToScreen=!0,e.threshold=0,e.strength=1,e.radius=0,this.composer=new h["a"](this.renderer),this.composer.setSize(window.innerWidth,window.innerHeight),this.composer.addPass(t),this.composer.addPass(e)},initOrbitControls(){let t=new a["a"](this.camera,this.renderer.domElement);t.maxDistance=10,t.addEventListener("change",this.render)},initAxesHelper(){const t=new n["b"](2e3);this.scene.add(t)},requestAnimationFrame(){this.composer.render(),requestAnimationFrame(this.requestAnimationFrame)},render(){this.renderer.render(this.scene,this.camera)}}},m=d,c=r("e607"),f=Object(c["a"])(m,i,s,!1,null,null,null);e["default"]=f.exports},"8f54":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var i=r("a2b2"),s=r("51ad"),n=r("0998");const a={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new i["f"](0)},defaultOpacity:{value:0}},vertexShader:"\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}",fragmentShader:"\n\n\t\tuniform sampler2D tDiffuse;\n\t\tuniform vec3 defaultColor;\n\t\tuniform float defaultOpacity;\n\t\tuniform float luminosityThreshold;\n\t\tuniform float smoothWidth;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvec4 texel = texture2D( tDiffuse, vUv );\n\n\t\t\tvec3 luma = vec3( 0.299, 0.587, 0.114 );\n\n\t\t\tfloat v = dot( texel.xyz, luma );\n\n\t\t\tvec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );\n\n\t\t\tfloat alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );\n\n\t\t\tgl_FragColor = mix( outputColor, texel, alpha );\n\n\t\t}"};class o extends s["b"]{constructor(t,e,r,o){super(),this.strength=void 0!==e?e:1,this.radius=r,this.threshold=o,this.resolution=void 0!==t?new i["C"](t.x,t.y):new i["C"](256,256),this.clearColor=new i["f"](0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new i["E"](l,u),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let s=0;s<this.nMips;s++){const t=new i["E"](l,u);t.texture.name="UnrealBloomPass.h"+s,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);const e=new i["E"](l,u);e.texture.name="UnrealBloomPass.v"+s,e.texture.generateMipmaps=!1,this.renderTargetsVertical.push(e),l=Math.round(l/2),u=Math.round(u/2)}const h=a;this.highPassUniforms=i["B"].clone(h.uniforms),this.highPassUniforms["luminosityThreshold"].value=o,this.highPassUniforms["smoothWidth"].value=.01,this.materialHighPassFilter=new i["y"]({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const d=[3,5,7,9,11];l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let s=0;s<this.nMips;s++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(d[s])),this.separableBlurMaterials[s].uniforms["texSize"].value=new i["C"](l,u),l=Math.round(l/2),u=Math.round(u/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms["blurTexture1"].value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms["blurTexture2"].value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms["blurTexture3"].value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms["blurTexture4"].value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms["blurTexture5"].value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms["bloomStrength"].value=e,this.compositeMaterial.uniforms["bloomRadius"].value=.1,this.compositeMaterial.needsUpdate=!0;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms["bloomFactors"].value=m,this.bloomTintColors=[new i["D"](1,1,1),new i["D"](1,1,1),new i["D"](1,1,1),new i["D"](1,1,1),new i["D"](1,1,1)],this.compositeMaterial.uniforms["bloomTintColors"].value=this.bloomTintColors;const c=n["a"];this.copyUniforms=i["B"].clone(c.uniforms),this.copyUniforms["opacity"].value=1,this.materialCopy=new i["y"]({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:i["a"],depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new i["f"],this.oldClearAlpha=1,this.basic=new i["m"],this.fsQuad=new s["a"](null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let r=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(r,s);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(r,s),this.renderTargetsVertical[n].setSize(r,s),this.separableBlurMaterials[n].uniforms["texSize"].value=new i["C"](r,s),r=Math.round(r/2),s=Math.round(s/2)}render(t,e,r,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const n=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms["tDiffuse"].value=r.texture,this.highPassUniforms["luminosityThreshold"].value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms["colorTexture"].value=a.texture,this.separableBlurMaterials[l].uniforms["direction"].value=o.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms["colorTexture"].value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms["direction"].value=o.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms["bloomStrength"].value=this.strength,this.compositeMaterial.uniforms["bloomRadius"].value=this.radius,this.compositeMaterial.uniforms["bloomTintColors"].value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.materialCopy,this.copyUniforms["tDiffuse"].value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(r),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=n}getSeperableBlurMaterial(t){return new i["y"]({defines:{KERNEL_RADIUS:t,SIGMA:t},uniforms:{colorTexture:{value:null},texSize:{value:new i["C"](.5,.5)},direction:{value:new i["C"](.5,.5)}},vertexShader:"varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",fragmentShader:"#include <common>\n\t\t\t\tvarying vec2 vUv;\n\t\t\t\tuniform sampler2D colorTexture;\n\t\t\t\tuniform vec2 texSize;\n\t\t\t\tuniform vec2 direction;\n\n\t\t\t\tfloat gaussianPdf(in float x, in float sigma) {\n\t\t\t\t\treturn 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\n\t\t\t\t}\n\t\t\t\tvoid main() {\n\t\t\t\t\tvec2 invSize = 1.0 / texSize;\n\t\t\t\t\tfloat fSigma = float(SIGMA);\n\t\t\t\t\tfloat weightSum = gaussianPdf(0.0, fSigma);\n\t\t\t\t\tvec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;\n\t\t\t\t\tfor( int i = 1; i < KERNEL_RADIUS; i ++ ) {\n\t\t\t\t\t\tfloat x = float(i);\n\t\t\t\t\t\tfloat w = gaussianPdf(x, fSigma);\n\t\t\t\t\t\tvec2 uvOffset = direction * invSize * x;\n\t\t\t\t\t\tvec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;\n\t\t\t\t\t\tvec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;\n\t\t\t\t\t\tdiffuseSum += (sample1 + sample2) * w;\n\t\t\t\t\t\tweightSum += 2.0 * w;\n\t\t\t\t\t}\n\t\t\t\t\tgl_FragColor = vec4(diffuseSum/weightSum, 1.0);\n\t\t\t\t}"})}getCompositeMaterial(t){return new i["y"]({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:"varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",fragmentShader:"varying vec2 vUv;\n\t\t\t\tuniform sampler2D blurTexture1;\n\t\t\t\tuniform sampler2D blurTexture2;\n\t\t\t\tuniform sampler2D blurTexture3;\n\t\t\t\tuniform sampler2D blurTexture4;\n\t\t\t\tuniform sampler2D blurTexture5;\n\t\t\t\tuniform float bloomStrength;\n\t\t\t\tuniform float bloomRadius;\n\t\t\t\tuniform float bloomFactors[NUM_MIPS];\n\t\t\t\tuniform vec3 bloomTintColors[NUM_MIPS];\n\n\t\t\t\tfloat lerpBloomFactor(const in float factor) {\n\t\t\t\t\tfloat mirrorFactor = 1.2 - factor;\n\t\t\t\t\treturn mix(factor, mirrorFactor, bloomRadius);\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\t\t\t\t\tgl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );\n\t\t\t\t}"})}}o.BlurDirectionX=new i["C"](1,0),o.BlurDirectionY=new i["C"](0,1)}}]);
//# sourceMappingURL=chunk-000a4687.85277e48.js.map