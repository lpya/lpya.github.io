(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ab52ae4"],{"0998":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));const i={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:"\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}",fragmentShader:"\n\n\t\tuniform float opacity;\n\n\t\tuniform sampler2D tDiffuse;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tgl_FragColor = texture2D( tDiffuse, vUv );\n\t\t\tgl_FragColor.a *= opacity;\n\n\n\t\t}"}},4922:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r("a2b2"),s=r("51ad");class a extends s["b"]{constructor(e,t,r,s,a){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=s,this.clearAlpha=void 0!==a?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new i["f"]}render(e,t,r){const i=e.autoClear;let s,a;e.autoClear=!1,void 0!==this.overrideMaterial&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),void 0!==this.overrideMaterial&&(this.scene.overrideMaterial=a),e.autoClear=i}}},"51ad":function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return l}));var i=r("a2b2");class s{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const a=new i["q"](-1,1,1,-1,0,1),n=new i["d"];n.setAttribute("position",new i["i"]([-1,3,0,-1,-1,0,3,-1,0],3)),n.setAttribute("uv",new i["i"]([0,2,0,0,2,0],2));class l{constructor(e){this._mesh=new i["l"](n,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,a)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}},5738:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r("a2b2"),s=r("51ad"),a=r("0998");class n extends s["b"]{constructor(e,t,r,n){super(),this.renderScene=t,this.renderCamera=r,this.selectedObjects=void 0!==n?n:[],this.visibleEdgeColor=new i["f"](1,1,1),this.hiddenEdgeColor=new i["f"](.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this.resolution=void 0!==e?new i["C"](e.x,e.y):new i["C"](256,256);const l=Math.round(this.resolution.x/this.downSampleRatio),o=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new i["E"](this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new i["n"],this.depthMaterial.side=i["g"],this.depthMaterial.depthPacking=i["w"],this.depthMaterial.blending=i["p"],this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=i["g"],this.prepareMaskMaterial.fragmentShader=f(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new i["E"](this.resolution.x,this.resolution.y),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new i["E"](l,o),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new i["E"](l,o),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new i["E"](Math.round(l/2),Math.round(o/2)),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new i["E"](l,o),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new i["E"](Math.round(l/2),Math.round(o/2)),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const u=4,h=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(u),this.separableBlurMaterial1.uniforms["texSize"].value.set(l,o),this.separableBlurMaterial1.uniforms["kernelRadius"].value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(h),this.separableBlurMaterial2.uniforms["texSize"].value.set(Math.round(l/2),Math.round(o/2)),this.separableBlurMaterial2.uniforms["kernelRadius"].value=h,this.overlayMaterial=this.getOverlayMaterial();const d=a["a"];function f(e,t){const r=t.isPerspectiveCamera?"perspective":"orthographic";return e.replace(/DEPTH_TO_VIEW_Z/g,r+"DepthToViewZ")}this.copyUniforms=i["B"].clone(d.uniforms),this.copyUniforms["opacity"].value=1,this.materialCopy=new i["y"]({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:i["p"],depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new i["f"],this.oldClearAlpha=1,this.fsQuad=new s["a"](null),this.tempPulseColor1=new i["f"],this.tempPulseColor2=new i["f"],this.textureMatrix=new i["k"]}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let r=Math.round(e/this.downSampleRatio),i=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(r,i),this.renderTargetBlurBuffer1.setSize(r,i),this.renderTargetEdgeBuffer1.setSize(r,i),this.separableBlurMaterial1.uniforms["texSize"].value.set(r,i),r=Math.round(r/2),i=Math.round(i/2),this.renderTargetBlurBuffer2.setSize(r,i),this.renderTargetEdgeBuffer2.setSize(r,i),this.separableBlurMaterial2.uniforms["texSize"].value.set(r,i)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;function r(r){r.isMesh&&(!0===e?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e))}for(let i=0;i<this.selectedObjects.length;i++){const e=this.selectedObjects[i];e.traverse(r)}}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,r=[];function i(e){e.isMesh&&r.push(e)}for(let a=0;a<this.selectedObjects.length;a++){const e=this.selectedObjects[a];e.traverse(i)}function s(i){if(i.isMesh||i.isSprite){let s=!1;for(let e=0;e<r.length;e++){const t=r[e].id;if(t===i.id){s=!0;break}}if(!1===s){const r=i.visible;!1!==e&&!0!==t.get(i)||(i.visible=e),t.set(i,r)}}else(i.isPoints||i.isLine)&&(!0===e?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e))}this.renderScene.traverse(s)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,r,i,s){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const t=e.autoClear;e.autoClear=!1,s&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.changeVisibilityOfSelectedObjects(!1);const i=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms["cameraNearFar"].value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms["depthTexture"].value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms["textureMatrix"].value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this.renderScene.background=i,this.fsQuad.material=this.materialCopy,this.copyUniforms["tDiffuse"].value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const e=.625+.75*Math.cos(.01*performance.now()/this.pulsePeriod)/2;this.tempPulseColor1.multiplyScalar(e),this.tempPulseColor2.multiplyScalar(e)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms["maskTexture"].value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms["texSize"].value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms["visibleEdgeColor"].value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms["hiddenEdgeColor"].value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms["colorTexture"].value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms["direction"].value=n.BlurDirectionX,this.separableBlurMaterial1.uniforms["kernelRadius"].value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms["colorTexture"].value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms["direction"].value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms["colorTexture"].value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms["direction"].value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms["colorTexture"].value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms["direction"].value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms["maskTexture"].value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms["edgeTexture1"].value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms["edgeTexture2"].value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms["patternTexture"].value=this.patternTexture,this.overlayMaterial.uniforms["edgeStrength"].value=this.edgeStrength,this.overlayMaterial.uniforms["edgeGlow"].value=this.edgeGlow,this.overlayMaterial.uniforms["usePatternTexture"].value=this.usePatternTexture,s&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(r),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=t}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms["tDiffuse"].value=r.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new i["y"]({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new i["C"](.5,.5)},textureMatrix:{value:null}},vertexShader:"#include <morphtarget_pars_vertex>\n\t\t\t\t#include <skinning_pars_vertex>\n\n\t\t\t\tvarying vec4 projTexCoord;\n\t\t\t\tvarying vec4 vPosition;\n\t\t\t\tuniform mat4 textureMatrix;\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\t#include <skinbase_vertex>\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <morphtarget_vertex>\n\t\t\t\t\t#include <skinning_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t\tvPosition = mvPosition;\n\n\t\t\t\t\tvec4 worldPosition = vec4( transformed, 1.0 );\n\n\t\t\t\t\t#ifdef USE_INSTANCING\n\n\t\t\t\t\t\tworldPosition = instanceMatrix * worldPosition;\n\n\t\t\t\t\t#endif\n\t\t\t\t\t\n\t\t\t\t\tworldPosition = modelMatrix * worldPosition;\n\n\t\t\t\t\tprojTexCoord = textureMatrix * worldPosition;\n\n\t\t\t\t}",fragmentShader:"#include <packing>\n\t\t\t\tvarying vec4 vPosition;\n\t\t\t\tvarying vec4 projTexCoord;\n\t\t\t\tuniform sampler2D depthTexture;\n\t\t\t\tuniform vec2 cameraNearFar;\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tfloat depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));\n\t\t\t\t\tfloat viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );\n\t\t\t\t\tfloat depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;\n\t\t\t\t\tgl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);\n\n\t\t\t\t}"})}getEdgeDetectionMaterial(){return new i["y"]({uniforms:{maskTexture:{value:null},texSize:{value:new i["C"](.5,.5)},visibleEdgeColor:{value:new i["D"](1,1,1)},hiddenEdgeColor:{value:new i["D"](1,1,1)}},vertexShader:"varying vec2 vUv;\n\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",fragmentShader:"varying vec2 vUv;\n\n\t\t\t\tuniform sampler2D maskTexture;\n\t\t\t\tuniform vec2 texSize;\n\t\t\t\tuniform vec3 visibleEdgeColor;\n\t\t\t\tuniform vec3 hiddenEdgeColor;\n\n\t\t\t\tvoid main() {\n\t\t\t\t\tvec2 invSize = 1.0 / texSize;\n\t\t\t\t\tvec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);\n\t\t\t\t\tvec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);\n\t\t\t\t\tvec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);\n\t\t\t\t\tvec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);\n\t\t\t\t\tvec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);\n\t\t\t\t\tfloat diff1 = (c1.r - c2.r)*0.5;\n\t\t\t\t\tfloat diff2 = (c3.r - c4.r)*0.5;\n\t\t\t\t\tfloat d = length( vec2(diff1, diff2) );\n\t\t\t\t\tfloat a1 = min(c1.g, c2.g);\n\t\t\t\t\tfloat a2 = min(c3.g, c4.g);\n\t\t\t\t\tfloat visibilityFactor = min(a1, a2);\n\t\t\t\t\tvec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;\n\t\t\t\t\tgl_FragColor = vec4(edgeColor, 1.0) * vec4(d);\n\t\t\t\t}"})}getSeperableBlurMaterial(e){return new i["y"]({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new i["C"](.5,.5)},direction:{value:new i["C"](.5,.5)},kernelRadius:{value:1}},vertexShader:"varying vec2 vUv;\n\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",fragmentShader:"#include <common>\n\t\t\t\tvarying vec2 vUv;\n\t\t\t\tuniform sampler2D colorTexture;\n\t\t\t\tuniform vec2 texSize;\n\t\t\t\tuniform vec2 direction;\n\t\t\t\tuniform float kernelRadius;\n\n\t\t\t\tfloat gaussianPdf(in float x, in float sigma) {\n\t\t\t\t\treturn 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\t\t\t\t\tvec2 invSize = 1.0 / texSize;\n\t\t\t\t\tfloat sigma = kernelRadius/2.0;\n\t\t\t\t\tfloat weightSum = gaussianPdf(0.0, sigma);\n\t\t\t\t\tvec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;\n\t\t\t\t\tvec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);\n\t\t\t\t\tvec2 uvOffset = delta;\n\t\t\t\t\tfor( int i = 1; i <= MAX_RADIUS; i ++ ) {\n\t\t\t\t\t\tfloat x = kernelRadius * float(i) / float(MAX_RADIUS);\n\t\t\t\t\t\tfloat w = gaussianPdf(x, sigma);\n\t\t\t\t\t\tvec4 sample1 = texture2D( colorTexture, vUv + uvOffset);\n\t\t\t\t\t\tvec4 sample2 = texture2D( colorTexture, vUv - uvOffset);\n\t\t\t\t\t\tdiffuseSum += ((sample1 + sample2) * w);\n\t\t\t\t\t\tweightSum += (2.0 * w);\n\t\t\t\t\t\tuvOffset += delta;\n\t\t\t\t\t}\n\t\t\t\t\tgl_FragColor = diffuseSum/weightSum;\n\t\t\t\t}"})}getOverlayMaterial(){return new i["y"]({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:"varying vec2 vUv;\n\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",fragmentShader:"varying vec2 vUv;\n\n\t\t\t\tuniform sampler2D maskTexture;\n\t\t\t\tuniform sampler2D edgeTexture1;\n\t\t\t\tuniform sampler2D edgeTexture2;\n\t\t\t\tuniform sampler2D patternTexture;\n\t\t\t\tuniform float edgeStrength;\n\t\t\t\tuniform float edgeGlow;\n\t\t\t\tuniform bool usePatternTexture;\n\n\t\t\t\tvoid main() {\n\t\t\t\t\tvec4 edgeValue1 = texture2D(edgeTexture1, vUv);\n\t\t\t\t\tvec4 edgeValue2 = texture2D(edgeTexture2, vUv);\n\t\t\t\t\tvec4 maskColor = texture2D(maskTexture, vUv);\n\t\t\t\t\tvec4 patternColor = texture2D(patternTexture, 6.0 * vUv);\n\t\t\t\t\tfloat visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;\n\t\t\t\t\tvec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;\n\t\t\t\t\tvec4 finalColor = edgeStrength * maskColor.r * edgeValue;\n\t\t\t\t\tif(usePatternTexture)\n\t\t\t\t\t\tfinalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);\n\t\t\t\t\tgl_FragColor = finalColor;\n\t\t\t\t}",blending:i["a"],depthTest:!1,depthWrite:!1,transparent:!0})}}n.BlurDirectionX=new i["C"](1,0),n.BlurDirectionY=new i["C"](0,1)},"5a2c":function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var i=r("a2b2"),s=r("0998"),a=r("51ad");class n extends a["b"]{constructor(e,t){super(),this.textureID=void 0!==t?t:"tDiffuse",e instanceof i["y"]?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=i["B"].clone(e.uniforms),this.material=new i["y"]({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new a["a"](this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class l extends a["b"]{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const i=e.getContext(),s=e.state;let a,n;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0),this.inverse?(a=0,n=1):(a=1,n=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(n),s.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class o extends a["b"]{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class u{constructor(e,t){if(this.renderer=e,void 0===t){const r=e.getSize(new i["C"]);this._pixelRatio=e.getPixelRatio(),this._width=r.width,this._height=r.height,t=new i["E"](this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new n(s["a"]),this.clock=new i["e"]}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){void 0===e&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let i=0,s=this.passes.length;i<s;i++){const t=this.passes[i];if(!1!==t.enabled){if(t.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),t.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),t.needsSwap){if(r){const t=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==l&&(t instanceof l?r=!0:t instanceof o&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){const t=this.renderer.getSize(new i["C"]);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}}}]);
//# sourceMappingURL=chunk-1ab52ae4.d004bae5.js.map