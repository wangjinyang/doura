"use strict";(self.webpackChunkdoura_docs=self.webpackChunkdoura_docs||[]).push([[249],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(8041),a=(n(9231),n(4852));const o={id:"optimize-views",title:"Optimizing Views"},i=void 0,s={unversionedId:"guides/optimize-views",id:"guides/optimize-views",title:"Optimizing Views",description:"Doura has taken a very different way to do reactivity. Fortunately, We won't need to be aware of this most of time, excepting one case.",source:"@site/docs/guides/optimize-views.md",sourceDirName:"guides",slug:"/guides/optimize-views",permalink:"/doura/docs/guides/optimize-views",draft:!1,editUrl:"https://github.com/dourajs/doura/tree/main/docs/guides/optimize-views.md",tags:[],version:"current",frontMatter:{id:"optimize-views",title:"Optimizing Views"},sidebar:"docs",previous:{title:"Composing Models",permalink:"/doura/docs/guides/compose-model"},next:{title:"Hot Module Replacement",permalink:"/doura/docs/guides/hmr"}},l={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Doura has taken a very different way to do reactivity. Fortunately, We won't need to be aware of this most of time, excepting one case."),(0,a.kt)("p",null,"Considering the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const user = defineModel({\n  state: {\n    count: 0,\n    user: {\n      name: 'alice',\n      age: 18,\n    },\n  },\n  views: {\n    userName() {\n      return this.user.name\n    },\n  },\n})\n")),(0,a.kt)("p",null,"Ideally, the ",(0,a.kt)("inlineCode",{parentName:"p"},"userName")," view should only re-evalute when ",(0,a.kt)("inlineCode",{parentName:"p"},"user.name")," is changed.\nBut that's not how Doura works. Internally, ",(0,a.kt)("inlineCode",{parentName:"p"},"userName")," will track the update of both ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"user.name"),". When ",(0,a.kt)("inlineCode",{parentName:"p"},"user.age")," has changed, it will also trigger a change event of ",(0,a.kt)("inlineCode",{parentName:"p"},"user"),". So ",(0,a.kt)("inlineCode",{parentName:"p"},"userName")," view has to invalidate itself and re-evalute even only ",(0,a.kt)("inlineCode",{parentName:"p"},"user.age")," is changed."),(0,a.kt)("p",null,"For the sake of performance, we need to explicitly mark out the ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," from the reactivity tracking system. Here is how you can do this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const user = defineModel({\n  state: {\n    count: 0,\n    user: {\n      name: 'alice',\n      age: 18,\n    },\n  },\n  views: {\n    userName() {\n      const user = this.$isolate((state) => state.user)\n      return user.name\n    },\n  },\n})\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"$isolate()")," will executes the given function in a scope where reactive values can be read, but they cannot cause the reactive scope of the caller to be re-evaluated when they change.")))}p.isMDXComponent=!0}}]);