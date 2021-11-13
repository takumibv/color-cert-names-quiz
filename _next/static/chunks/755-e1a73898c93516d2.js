"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{7036:function(e,t,n){var r=n(5318);t.Z=void 0;var l=r(n(4938)),c=n(5893),a=(0,l.default)((0,c.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.Z=a},3343:function(e,t,n){var r=n(5318);t.Z=void 0;var l=r(n(4938)),c=n(5893),a=(0,l.default)((0,c.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.Z=a},4229:function(e,t,n){var r=n(5318);t.Z=void 0;var l=r(n(4938)),c=n(5893),a=(0,l.default)((0,c.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");t.Z=a},8755:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(5893),l=n(7294),c=n(4229),a=n(9978),s=n(8215),i=n(4184),o=n.n(i),u=n(7036),d=n(3343),f=n(8019),x=n(3073),h=n(1418);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){m(e,t,n[t])}))}return e}function b(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,l=!1,c=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(i){l=!0,c=i}finally{try{r||null==s.return||s.return()}finally{if(l)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var j=function(e){var t=e.level,n=void 0===t?2:t,c=e.quizId,a=e.index,s=e.refreshCount,i=void 0===s?0:s,j=e.isHard,y=void 0!==j&&j,g=(e.children,e.className),N=e.onCorrect,k=e.onIncorrect,C=e.colorAchieves,w=e.setColorAchieves,S=b(e,["level","quizId","index","refreshCount","isHard","children","className","onCorrect","onIncorrect","colorAchieves","setColorAchieves"]),Z=(0,l.useState)(!1),O=Z[0],A=Z[1],E=(0,l.useState)(!1),I=E[0],z=E[1],M=(0,l.useState)(!1),P=M[0],B=M[1],_=p((0,x.X)(n),3),q=_[0],H=_[1],T=_[2];(0,l.useEffect)((function(){B(c===I)}),[I]),(0,l.useEffect)((function(){A(!1)}),[y,a,i,c]);var F=q.find((function(e){return e.id===c})),L=(0,l.useMemo)((function(){return y?T(c):H(c)}),[y,i]);return F?(0,r.jsxs)("div",v({className:o()("relative",g)},S,{children:[(0,r.jsxs)("h3",{className:"mb-3",children:[(0,r.jsxs)("span",{className:"inline-block text-2xl mr-3 text-blue-300",children:["Q",a]}),(0,r.jsx)("span",{className:"font-bold text-xl leading-8",children:F.name}),O&&(0,r.jsx)("span",{className:"inline-block ml-3 text-3xl",children:P?(0,r.jsx)(u.Z,{className:"text-green-500"}):(0,r.jsx)(d.Z,{className:"text-red-500"})})]}),(0,r.jsx)("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4",children:L.map((function(e){var t=q.find((function(t){return t.id===e}));if(!t)return null;var n=C[e],l=I===e;return(0,r.jsx)("div",{className:"relative",children:O?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{paletteStyle:{boxShadow:l?"0 0 3px 3px #aaa":"none"},id:"".concat(t.id),name:t.name,yomi:t.yomi,munsellCode:t.munsell,explain:"",checked:n.isChecked,pass:n.pass,total:n.total,onChecked:function(){return w(v({},C,m({},"".concat(t.id),v({},n,{isChecked:!n.isChecked}))))}}),(0,r.jsx)("div",{className:o()("absolute left-0 top-0 rounded-bl-md p-2"),children:(0,r.jsx)("div",{className:"flex justify-center items-center bg-white rounded-full p-1",children:c===t.id?(0,r.jsx)(u.Z,{className:"text-green-500"}):(0,r.jsx)(d.Z,{className:"text-red-500"})})})]}):(0,r.jsx)("div",{className:o()("align-middle h-24 rounded-lg border",!O&&"cursor-pointer hover:opacity-90"),style:{background:t.code},onClick:function(){A(!0),z(e),h.B({action:"click",category:"answer",label:F.code,value:t.code}),c===e?N&&N():k&&k();var n=C[c];n&&w(v({},C,m({},"".concat(c),v({},n,{total:(n.total||0)+1,pass:(n.pass||0)+(c===e?1:0)}))))}})},e)}))})]})):null},y=n(9384);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,l=!1,c=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(i){l=!0,c=i}finally{try{r||null==s.return||s.return()}finally{if(l)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var N=function(e){var t=e.level,n=void 0===t?2:t,i=(0,l.useState)(!1),o=i[0],u=i[1],d=(0,l.useState)(!1),f=d[0],m=d[1],v=(0,l.useState)(0),b=v[0],p=v[1],N=(0,l.useState)(0),k=N[0],C=N[1],w=g((0,a.C)(n),3),S=w[0],Z=w[1],O=w[2],A=(0,l.useState)(!1),E=A[0],I=A[1],z=(0,l.useState)(0),M=z[0],P=z[1],B=g((0,x.X)(n),1)[0].map((function(e){return e.id})),_=(0,l.useMemo)((function(){return(0,y.Z)(B).filter((function(e){return!o||S[e].isChecked})).slice(0,E?10:B.length)}),[o,E,M]);return(0,l.useEffect)((function(){p(0),C(0)}),[f,o,E,M]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"mb-8 flex items-baseline",children:[(0,r.jsx)("div",{className:"pt-1",children:(0,r.jsx)(c.Z,{className:"mr-2 text-gray-400"})}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("span",{className:"whitespace-nowrap",children:[(0,r.jsx)(s.Z,{className:"mb-1 rounded-r-none border-r-0",active:!E,onClick:function(){I(!1),h.B({action:"click",category:"filter",label:"reduce",value:"1"})},children:"\u5168\u554f"}),(0,r.jsx)(s.Z,{className:"mr-2 mb-1 rounded-l-none border-l-0",active:E,onClick:function(){I(!0),h.B({action:"click",category:"filter",label:"reduce",value:"0"})},children:"10\u554f"})]}),(0,r.jsx)(s.Z,{className:"mr-2 mb-1",active:o,onClick:function(){u(!o),h.B({action:"click",category:"filter",label:"bookmark",value:o?"0":"1"})},children:"\u30d6\u30c3\u30af\u30de\u30fc\u30af\u306e\u307f"}),(0,r.jsx)(s.Z,{className:"mr-2 mb-1",active:f,onClick:function(){m(!f),h.B({action:"click",category:"filter",label:"hard",value:f?"0":"1"})},children:"\u9ad8\u96e3\u6613\u5ea6"})]}),"."]}),(0,r.jsxs)("div",{className:"py-6 px-4 lg:px-8 bg-white rounded-2xl",children:[(0,r.jsx)("h2",{className:"text-xl text-gray-800 text-center font-bold mb-4",children:"\u6b63\u3057\u3044\u8272\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),O&&_.map((function(e,t){return(0,r.jsx)(j,{isHard:f,level:n,quizId:e,index:t+1,refreshCount:M,colorAchieves:S,setColorAchieves:Z,onCorrect:function(){C(k+1),p(b+1)},onIncorrect:function(){C(k+1)},className:"mb-8"},e)})),0===_.length&&(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)("p",{className:"text-center text-gray-400",children:"\u30d6\u30c3\u30af\u30de\u30fc\u30af\u306f\u3042\u308a\u307e\u305b\u3093\u3002"})}),0!==_.length&&_.length===k&&(0,r.jsx)("div",{className:"my-8",children:(0,r.jsxs)("p",{className:"text-center text-gray-600",children:[(0,r.jsx)("span",{className:"inline-block text-xl mr-2",children:"\u6b63\u89e3\u6570"}),(0,r.jsx)("span",{className:"text-4xl",children:b}),(0,r.jsx)("span",{className:"inline-block text-xl mx-2",children:"/"}),(0,r.jsx)("span",{className:"text-3xl",children:k})]})}),0!==_.length&&(0,r.jsx)("div",{className:"text-center my-8",children:(0,r.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 cursor-pointer text-white rounded-md py-2 px-4",onClick:function(){P(M+1),window.scrollTo({top:0})},children:"\u518d\u6311\u6226\u3059\u308b"})})]})]})}}}]);