(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[757],{8162:function(e,t,n){"use strict";var r=n(5318);t.Z=void 0;var c=r(n(4938)),i=n(5893),a=(0,c.default)((0,i.jsx)("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"}),"FilterAlt");t.Z=a},5877:function(e,t,n){"use strict";var r=n(5318);t.Z=void 0;var c=r(n(4938)),i=n(5893),a=(0,c.default)((0,i.jsx)("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"}),"Sort");t.Z=a},8059:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/list_3",function(){return n(1449)}])},7475:function(e,t,n){"use strict";var r=n(5893),c=n(7294),i=n(5877),a=n(8162),l=n(9978),s=n(3073),o=n(9384),d=n(8019),u=n(8215),m=n(1418);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,c=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){c=!0,i=s}finally{try{r||null==l.return||l.return()}finally{if(c)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function v(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.Z=function(e){var t=e.level,n=void 0===t?2:t,b=(0,c.useState)(!1),j=b[0],p=b[1],g=(0,c.useState)(!1),y=g[0],N=g[1],k=f((0,s.X)(n),1)[0],w=(0,c.useState)(!1),Z=w[0],C=w[1],_=(0,c.useState)(!1),O=_[0],S=_[1],A=(0,c.useState)(!1),E=A[0],P=A[1],H=f((0,l.C)(n),3),z=H[0],B=H[1],T=(H[2],(0,c.useMemo)((function(){return Z?(0,o.Z)(k):O?v(k).sort((function(e,t){var n=1e6,r=z["".concat(e.id)],c=r.total?(r.pass||0)/r.total:n,i=z["".concat(t.id)];return c-(i.total?(i.pass||0)/i.total:n)})):k}),[Z,O])),M=function(e){var t=z["".concat(e.id)];return(0,r.jsx)(d.Z,{className:"mb-4",id:"".concat(e.id),name:e.name,yomi:e.yomi,code:e.code,explain:e.explain,checked:t.isChecked,pass:t.pass,total:t.total,onChecked:function(){return B(x({},z,h({},"".concat(e.id),x({},t,{isChecked:!t.isChecked}))))},isHideColor:j,isHideName:y},"color-".concat(e.code))};return(0,r.jsxs)("div",{className:"py-6 px-4 bg-white rounded-2xl",children:[(0,r.jsx)("h2",{className:"text-xl text-gray-800 text-center font-bold mb-4",children:"\u8272\u540d\u4e00\u89a7"}),(0,r.jsxs)("div",{className:"mb-4 flex items-baseline",children:[(0,r.jsx)("div",{className:"pt-1",children:(0,r.jsx)(i.Z,{className:"mr-2 text-gray-400"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(u.Z,{className:"mr-2 mb-1",active:Z,onClick:function(){C(!Z),S(!1),m.B({action:"click",category:"filter",label:"list/random",value:Z?"0":"1"})},children:"\u30e9\u30f3\u30c0\u30e0\u306b\u4e26\u3079\u308b"}),(0,r.jsx)(u.Z,{className:"mr-2 mb-1",active:O,onClick:function(){S(!O),C(!1),m.B({action:"click",category:"filter",label:"list/lowest_rate",value:O?"0":"1"})},children:"\u6b63\u7b54\u7387\u304c\u4f4e\u3044\u9806\u306b\u4e26\u3079\u308b"})]})]}),(0,r.jsxs)("div",{className:"mb-8 flex items-baseline",children:[(0,r.jsx)("div",{className:"pt-1",children:(0,r.jsx)(a.Z,{className:"mr-2 text-gray-400"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(u.Z,{className:"mr-2 mb-1",active:j,onClick:function(){p(!j),y&&N(!1),m.B({action:"click",category:"filter",label:"list/hide_color",value:j?"0":"1"})},children:"\u8272\u3092\u96a0\u3059"}),(0,r.jsx)(u.Z,{className:"mr-2 mb-1",active:y,onClick:function(){N(!y),j&&p(!1),m.B({action:"click",category:"filter",label:"list/hide_name",value:y?"0":"1"})},children:"\u540d\u524d\u3092\u96a0\u3059"}),(0,r.jsx)(u.Z,{className:"mr-2 mb-1",active:E,onClick:function(){P(!E),m.B({action:"click",category:"filter",label:"list/bookmark",value:E?"0":"1"})},children:"\u30d6\u30c3\u30af\u30de\u30fc\u30af\u306e\u307f\u8868\u793a\u3059\u308b"})]})]}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:T.map((function(e){var t=z["".concat(e.id)];return E&&!t.isChecked?null:M(e)}))}),E&&!T.some((function(e){return z["".concat(e.id)].isChecked}))&&(0,r.jsx)("div",{className:"mt-6",children:(0,r.jsx)("p",{className:"text-center text-gray-400",children:"\u30d6\u30c3\u30af\u30de\u30fc\u30af\u306f\u3042\u308a\u307e\u305b\u3093\u3002"})}),E&&(0,r.jsxs)("div",{className:"mt-20",children:[(0,r.jsx)("h2",{className:"text-xl text-gray-800 font-bold mb-4",children:"\u305d\u306e\u4ed6\u306e\u8272"}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:T.map((function(e){return z["".concat(e.id)].isChecked?null:M(e)}))})]}),(0,r.jsx)("div",{className:"text-right mt-8",children:(0,r.jsx)("a",{className:"text-sm text-gray-400 cursor-pointer hover:opacity-80 underline",tabIndex:0,onClick:function(){confirm("\u30d6\u30c3\u30af\u30de\u30fc\u30af\u3068\u56de\u7b54\u5c65\u6b74\u3092\u524a\u9664\u3057\u3066\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f \u3053\u306e\u64cd\u4f5c\u306f\u53d6\u308a\u6d88\u305b\u307e\u305b\u3093\u3002")&&B(l.F)},children:"\u30d6\u30c3\u30af\u30de\u30fc\u30af\u30fb\u56de\u7b54\u5c65\u6b74\u306e\u30ea\u30bb\u30c3\u30c8"})})]})}},1449:function(e,t,n){"use strict";n.r(t);var r=n(5893),c=n(1664),i=n(4410),a=n(9630),l=n(6875),s=n(7475),o=n(487);t.default=function(){return(0,r.jsx)(i.Z,{children:(0,r.jsxs)("div",{className:"bg-blue-50 min-h-screen",children:[(0,r.jsx)(l.Z,{title:"\u8272\u5f69\u691c\u5b9a3\u7d1a \u6163\u7528\u8272\u540d\u30af\u30a4\u30ba",description:"",image:"og_img.png"}),(0,r.jsxs)("div",{className:"container mx-auto py-10 px-4",children:[(0,r.jsx)("p",{className:"mb-4",children:(0,r.jsx)(c.default,{href:"/",children:(0,r.jsxs)("a",{children:[(0,r.jsx)(a.Z,{className:"align-middle"}),(0,r.jsx)("span",{className:"align-middle",children:"TOP\u3078"})]})})}),(0,r.jsx)("h1",{className:"text-2xl text-gray-800 text-center font-bold mb-10",children:"3\u7d1a\u306b\u51fa\u3066\u304f\u308b\u6163\u7528\u8272\u540d"}),(0,r.jsx)("div",{className:"text-center mt-8 mb-16",children:(0,r.jsx)(c.default,{href:"/quiz_3",children:(0,r.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 cursor-pointer text-white rounded-md py-2 px-4",children:"\u30af\u30a4\u30ba\u3092\u59cb\u3081\u308b"})})}),(0,r.jsx)(s.Z,{level:3})]}),(0,r.jsx)(o.Z,{})]})})}}},function(e){e.O(0,[774,717,214,985,502,888,179],(function(){return t=8059,e(e.s=t);var t}));var t=e.O();_N_E=t}]);