import{d as V,a as x,A as E,k as C,l as D,a6 as U,r,o as b,i as k,y as i,e as a,f as s,w as n,E as v,s as R,t as N}from"./vendor.f3067333.js";import{U as S}from"./index.765ad7ab.js";const q=d=>["admin","editor"].indexOf(d.trim())>=0;const P={class:"login"},j={class:"content"},I=i("div",{class:"title"},"Vue3-Vite-ElementPlus-admin",-1),L={class:"loginbtn"},T=V({setup(d){var p;const c=x(),F=E(),w=C(),e=D({loginForm:{username:"admin",password:"123456"},loginRules:{username:[{required:!0,trigger:"blur",validator:(l,o,t)=>{if(!q(o))return t(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u7528\u6237\u540D"));t()}}],password:[{required:!0,trigger:"blur",validator:(l,o,t)=>{if(o.length<6)return t(new Error("\u5BC6\u7801\u81F3\u5C116\u4F4D\u6570"));t()}}]},loading:!1}),m=U(),_=(p=w.query.redirect)==null?void 0:p.toString(),B=async()=>{if(e.loading=!0,!await m.value.validate())return!1;await c.dispatch(S,e.loginForm)?(v({message:"\u767B\u9646\u6210\u529F",type:"success"}),e.loading=!1,F.push(_?`/${_}`:"/dashboard")):v({message:"\u8D26\u53F7\u6216\u5BC6\u7801\u9519\u8BEF",type:"warning"})};return(l,o)=>{const t=r("el-icon"),f=r("el-input"),g=r("el-form-item"),y=r("el-form"),h=r("el-button");return b(),k("div",P,[i("div",j,[I,a(y,{ref_key:"loginForm",ref:m,"label-position":"left",model:s(e).loginForm,"status-icon":"",rules:s(e).loginRules},{default:n(()=>[a(g,{prop:"username"},{default:n(()=>[a(f,{placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7",modelValue:s(e).loginForm.username,"onUpdate:modelValue":o[0]||(o[0]=u=>s(e).loginForm.username=u)},{prefix:n(()=>[a(t,{class:"el-input__icon iconfont icon-user"})]),_:1},8,["modelValue"])]),_:1}),a(g,{prop:"password"},{default:n(()=>[a(f,{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",type:"password",modelValue:s(e).loginForm.password,"onUpdate:modelValue":o[1]||(o[1]=u=>s(e).loginForm.password=u)},{prefix:n(()=>[a(t,{class:"el-input__icon iconfont icon-lock-fill"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),i("div",L,[a(h,{type:"primary",onClick:B,loading:s(e).loading},{default:n(()=>[R(N(s(e).loading?"\u767B\u9646\u4E2D":"\u767B\u9646"),1)]),_:1},8,["loading"])])])])}}});export{T as default};
