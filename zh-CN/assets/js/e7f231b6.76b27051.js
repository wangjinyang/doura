"use strict";(self.webpackChunkdoura_docs=self.webpackChunkdoura_docs||[]).push([[539],{4852:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(9231);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?o.createElement(f,c(c({ref:n},u),{},{components:t})):o.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9281:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=t(8041),r=(t(9231),t(4852));const a={id:"component-state",title:"Using at Component Level"},c=void 0,i={unversionedId:"react/component-state",id:"react/component-state",title:"Using at Component Level",description:"First create a model",source:"@site/docs/react/component-state.md",sourceDirName:"react",slug:"/react/component-state",permalink:"/doura/zh-CN/docs/react/component-state",draft:!1,editUrl:"https://github.com/dourajs/doura/tree/main/docs/react/component-state.md",tags:[],version:"current",frontMatter:{id:"component-state",title:"Using at Component Level"},sidebar:"docs",previous:{title:"Plugins",permalink:"/doura/zh-CN/docs/core-concepts/plugins"},next:{title:"Global Store",permalink:"/doura/zh-CN/docs/react/global-store"}},l={},s=[{value:"First create a model",id:"first-create-a-model",level:2},{value:"Then bind your components.",id:"then-bind-your-components",level:2},{value:"Selector",id:"selector",level:2}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"first-create-a-model"},"First create a model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { defineModel } from 'doura'\n\nconst countModel = defineModel({\n  state: {\n    count: 0,\n  },\n  actions: {\n    inc() {\n      this.count += 1\n    },\n  },\n})\n")),(0,r.kt)("h2",{id:"then-bind-your-components"},"Then bind your components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useModel } from 'react-doura'\n\nfunction Counter() {\n  const counter = useModel(countModel)\n\n  return (\n    <div>\n      <h1>Count: {counter.count}</h1>\n      <button onClick={counter.inc}>inc</button>\n    </div>\n  )\n}\n")),(0,r.kt)("h2",{id:"selector"},"Selector"),(0,r.kt)("p",null,"If we only care a part of states, we should use selecotr to pick exact what we want:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useModel } from 'react-doura'\n\nconst userModel = defineModel({\n  state: {\n    name: 'aclie',\n    isLogin: false,\n  },\n  actions: {\n    login() {\n      this.isLogin = true\n    },\n  },\n})\n\nfunction Login() {\n  const { isLogin, login } = useModel(\n    userModel,\n    (s) => ({\n      isLogin: s.isLogin,\n      login: s.login,\n    }),\n    [] // deps of selector, empty means the seletor function won't change\n  )\n\n  return isLogin ? <div>Welcome</div> : <button onClick={login}>Login</button>\n}\n")),(0,r.kt)("p",null,"We could also pass a pre-defined selector function insteand of an inline function to eliminate the need of passing a dependencies array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Selector } from 'react-doura'\n\nconst selector: Selector<typeof userModel> = (s) => ({\n  isLogin: s.isLogin,\n  login: s.login,\n})\n\nfunction Login() {\n  const { isLogin, login } = useModel(userModel, selector)\n\n  return isLogin ? <div>Welcome</div> : <button onClick={login}>Login</button>\n}\n")))}p.isMDXComponent=!0}}]);