(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[757],{8059:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/list_3",function(){return c(1449)}])},7475:function(e,t,c){"use strict";var n=c(5893),i=c(7294),r=c(9978),a=c(3073),l=c(9384),s=c(8019),o=c(8215),d=c(1418);function u(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function m(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{},n=Object.keys(c);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(c).filter((function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable})))),n.forEach((function(t){u(e,t,c[t])}))}return e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var c=[],n=!0,i=!1,r=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(c.push(a.value),!t||c.length!==t);n=!0);}catch(s){i=!0,r=s}finally{try{n||null==l.return||l.return()}finally{if(i)throw r}}return c}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.Z=function(e){var t=e.level,c=void 0===t?2:t,x=(0,i.useState)(!1),f=x[0],b=x[1],j=(0,i.useState)(!1),v=j[0],p=j[1],g=h((0,a.X)(c),1)[0],y=(0,i.useState)(!1),N=y[0],k=y[1],C=(0,i.useState)(!1),_=C[0],w=C[1],Z=(0,i.useState)(g),O=Z[0],E=Z[1],S=h((0,r.C)(c),3),P=S[0],B=S[1];S[2];return(0,i.useEffect)((function(){E(N?(0,l.Z)(g):g)}),[N]),(0,n.jsxs)("div",{className:"py-6 px-4 bg-white rounded-2xl",children:[(0,n.jsx)("h2",{className:"text-xl text-gray-800 text-center font-bold mb-4",children:"\u8272\u540d\u4e00\u89a7"}),(0,n.jsxs)("div",{className:"mb-8",children:[(0,n.jsx)(o.Z,{className:"mr-2 mb-1",active:N,onClick:function(){k(!N),d.B({action:"click",category:"filter",label:"list/random",value:N?"0":"1"})},children:"\u30e9\u30f3\u30c0\u30e0\u306b\u4e26\u3079\u308b"}),(0,n.jsx)(o.Z,{className:"mr-2 mb-1",active:f,onClick:function(){b(!f),v&&p(!1),d.B({action:"click",category:"filter",label:"list/hide_color",value:f?"0":"1"})},children:"\u8272\u3092\u96a0\u3059"}),(0,n.jsx)(o.Z,{className:"mr-2 mb-1",active:v,onClick:function(){p(!v),f&&b(!1),d.B({action:"click",category:"filter",label:"list/hide_name",value:v?"0":"1"})},children:"\u540d\u524d\u3092\u96a0\u3059"}),(0,n.jsx)(o.Z,{className:"mr-2 mb-1",active:_,onClick:function(){w(!_),d.B({action:"click",category:"filter",label:"list/bookmark",value:_?"0":"1"})},children:"\u30d6\u30c3\u30af\u30de\u30fc\u30af\u306e\u307f\u8868\u793a\u3059\u308b"})]}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:O.map((function(e){var t=P["".concat(e.id)];return _&&!t.isChecked?null:(0,n.jsx)(s.Z,{className:"mb-4",id:"".concat(e.id),name:e.name,yomi:e.yomi,code:e.code,explain:e.explain,checked:t.isChecked,pass:t.pass,total:t.total,onChecked:function(){return B(m({},P,u({},"".concat(e.id),m({},t,{isChecked:!t.isChecked}))))},isHideColor:f,isHideName:v},"color-".concat(e.code))}))}),_&&!O.some((function(e){return P["".concat(e.id)].isChecked}))&&(0,n.jsx)("div",{className:"mt-6",children:(0,n.jsx)("p",{className:"text-center text-gray-400",children:"\u30d6\u30c3\u30af\u30de\u30fc\u30af\u306f\u3042\u308a\u307e\u305b\u3093\u3002"})}),_&&(0,n.jsxs)("div",{className:"mt-20",children:[(0,n.jsx)("h2",{className:"text-xl text-gray-800 font-bold mb-4",children:"\u305d\u306e\u4ed6\u306e\u8272"}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:O.map((function(e){var t=P["".concat(e.id)];return t.isChecked?null:(0,n.jsx)(s.Z,{className:"mb-4",id:"".concat(e.id),name:e.name,yomi:e.yomi,code:e.code,explain:e.explain,checked:t.isChecked,onChecked:function(){return B(m({},P,u({},"".concat(e.id),m({},t,{isChecked:!t.isChecked}))))},isHideColor:f,isHideName:v},"color-".concat(e.code))}))})]}),(0,n.jsx)("div",{className:"text-right mt-8",children:(0,n.jsx)("a",{className:"text-sm text-gray-400 cursor-pointer hover:opacity-80 underline",tabIndex:0,onClick:function(){confirm("\u30d6\u30c3\u30af\u30de\u30fc\u30af\u3068\u56de\u7b54\u5c65\u6b74\u3092\u524a\u9664\u3057\u3066\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f \u3053\u306e\u64cd\u4f5c\u306f\u53d6\u308a\u6d88\u305b\u307e\u305b\u3093\u3002")&&B(r.F)},children:"\u30d6\u30c3\u30af\u30de\u30fc\u30af\u30fb\u56de\u7b54\u5c65\u6b74\u306e\u30ea\u30bb\u30c3\u30c8"})})]})}},1449:function(e,t,c){"use strict";c.r(t);var n=c(5893),i=c(1664),r=c(9008),a=c(4410),l=c(8168),s=c(7475),o=c(487);t.default=function(){return(0,n.jsx)(a.Z,{children:(0,n.jsxs)("div",{className:"bg-blue-50 min-h-screen",children:[(0,n.jsx)(r.default,{children:(0,n.jsx)("title",{children:"\u8272\u5f69\u691c\u5b9a3\u7d1a \u6163\u7528\u8272\u540d\u30af\u30a4\u30ba"})}),(0,n.jsxs)("div",{className:"container mx-auto py-10 px-4",children:[(0,n.jsx)("p",{className:"mb-4",children:(0,n.jsx)(i.default,{href:"/",children:(0,n.jsxs)("a",{children:[(0,n.jsx)(l.Z,{className:"align-middle"}),(0,n.jsx)("span",{className:"align-middle",children:"TOP\u3078"})]})})}),(0,n.jsx)("h1",{className:"text-2xl text-gray-800 text-center font-bold mb-10",children:"3\u7d1a\u306b\u51fa\u3066\u304f\u308b\u6163\u7528\u8272\u540d"}),(0,n.jsx)("div",{className:"text-center mt-8 mb-16",children:(0,n.jsx)(i.default,{href:"/quiz_3",children:(0,n.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 cursor-pointer text-white rounded-md py-2 px-4",children:"\u30af\u30a4\u30ba\u3092\u59cb\u3081\u308b"})})}),(0,n.jsx)(s.Z,{level:3})]}),(0,n.jsx)(o.Z,{})]})})}}},function(e){e.O(0,[774,717,214,362,10,888,179],(function(){return t=8059,e(e.s=t);var t}));var t=e.O();_N_E=t}]);