(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[5],{167:function(t,e,n){t.exports={Form:"Searchbar_Form__2XqpQ",margin:"Searchbar_margin__2ri6r"}},174:function(t,e,n){t.exports={margin:"MoviesPageView_margin__381PA",Item:"MoviesPageView_Item__A87Na",Link:"MoviesPageView_Link__1Sl0S"}},197:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return w}));var a=n(180),r=n(66),c=n.n(r),u=n(179),i=n(67),s=n(74),o=n(20),f=n(0),l=n(167),b=n.n(l),p=n(195),j=n(198),m=n(1);var d=function(t){var e=t.onSubmit,n=Object(f.useState)(""),a=Object(s.a)(n,2),r=a[0],c=a[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==t.target.value&&e(r)},className:b.a.Form,children:[Object(m.jsx)("div",{className:"ui input",children:Object(m.jsx)(p.a,{value:r,type:"text",placeholder:"Search...",onChange:function(t){""!==t.target.value&&c(t.target.value)}})}),Object(m.jsx)("div",{className:b.a.margin,children:Object(m.jsx)(j.a,{primary:!0,type:"submit",children:"Find"})})]})})},v=n(19),h=n(4),O=n(8),g=n(70),x=n(174),k=n.n(x);function w(){var t=Object(h.i)(),e=Object(f.useState)([]),n=Object(s.a)(e,2),r=n[0],l=n[1],b=Object(f.useState)(""),p=Object(s.a)(b,2),j=p[0],x=p[1],w=Object(f.useState)(!1),_=Object(s.a)(w,2),y=_[0],S=_[1],N=Object(h.g)(),F=Object(h.f)(),I=JSON.parse(localStorage.getItem("movies"));Object(f.useEffect)((function(){""!==j.trim()&&Object(i.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return S(!0),t.prev=1,t.next=4,Object(g.e)(j);case 4:e=t.sent,l((function(t){return[].concat(Object(u.a)(t),Object(u.a)(e.data.results))})),S(!1),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0.resultData),S(!1);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()}),[j]),Object(f.useEffect)((function(){r.length&&localStorage.setItem("movies",JSON.stringify(r))}),[r]),Object(f.useEffect)((function(){(null===I||void 0===I?void 0:I.length)>=1&&l(I)}),[]);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)("div",{className:k.a.margin,children:Object(m.jsx)("button",{onClick:function(){var t,e;F.push(null!==(t=null===N||void 0===N||null===(e=N.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/")},className:"ui button margin",children:"Back"})}),y&&Object(m.jsx)(v.a,{}),Object(m.jsx)(d,{onSubmit:function(t){l([]),x(t),F.push(Object(a.a)(Object(a.a)({},N),{},{search:"by=".concat(t)}))}}),Object(m.jsx)("ul",{children:r.map((function(e){return Object(m.jsx)("li",{className:k.a.Item,children:Object(m.jsx)(O.b,{className:k.a.Link,to:{pathname:"".concat(t.url,"/").concat(e.id),state:{from:N,label:"Back to the list"}},children:e.name?e.name:e.title})},e.id)}))})]})})}},70:function(t,e,n){"use strict";n.d(e,"d",(function(){return f})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return p})),n.d(e,"e",(function(){return j}));var a=n(66),r=n.n(a),c=n(67),u=n(85),i=n.n(u),s="https://api.themoviedb.org/3/",o="720fdb62fff13ad66b8dd7c6de97ca06",f=function(){var t=Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("".concat(s,"trending/all/day?api_key=").concat(o)).then((function(t){return t.data.results}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("".concat(s,"movie/").concat(e,"?api_key=").concat(o));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("".concat(s,"search/movie?api_key=").concat(o,"&page=1&query=").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=5.0e5111a5.chunk.js.map