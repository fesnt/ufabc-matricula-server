webpackJsonp([0,7],{2:function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},3:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},4:function(t,n,e){t.exports=!e(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},5:function(t,n,e){var r=e(35),o=e(12);t.exports=function(t){return r(o(t))}},6:function(t,n,e){var r=e(16),o=e(23);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},7:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},8:function(t,n,e){var r=e(24)("wks"),o=e(25),i=e(3).Symbol,u="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};c.store=r},9:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},10:function(t,n,e){var r=e(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},11:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},12:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},13:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},14:function(t,n,e){var r=e(3),o=e(2),i=e(33),u=e(6),c="prototype",a=function(t,n,e){var f,s,l,p=t&a.F,d=t&a.G,v=t&a.S,h=t&a.P,y=t&a.B,x=t&a.W,g=d?o:o[n]||(o[n]={}),b=g[c],_=d?r:v?r[n]:(r[n]||{})[c];d&&(e=n);for(f in e)s=!p&&_&&void 0!==_[f],s&&f in g||(l=s?_[f]:e[f],g[f]=d&&"function"!=typeof _[f]?e[f]:y&&s?i(l,r):x&&_[f]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[c]=t[c],n}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((g.virtual||(g.virtual={}))[f]=l,t&a.R&&b&&!b[f]&&u(b,f,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},15:function(t,n,e){var r=e(36),o=e(22);t.exports=Object.keys||function(t){return r(t,o)}},16:function(t,n,e){var r=e(10),o=e(34),i=e(41),u=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},17:function(t,n,e){var r=e(24)("keys"),o=e(25);t.exports=function(t){return r[t]||(r[t]=o(t))}},19:function(t,n){t.exports={}},20:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},21:function(t,n,e){var r=e(7),o=e(3).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},22:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},23:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},24:function(t,n,e){var r=e(3),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},25:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},26:function(t,n,e){var r=e(12);t.exports=function(t){return Object(r(t))}},28:function(t,n,e){t.exports={default:e(43),__esModule:!0}},29:function(t,n,e){t.exports={default:e(30),__esModule:!0}},30:function(t,n,e){e(42),t.exports=e(2).Object.values},31:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},32:function(t,n,e){var r=e(5),o=e(40),i=e(39);t.exports=function(t){return function(n,e,u){var c,a=r(n),f=o(a.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if(c=a[s++],c!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}}},33:function(t,n,e){var r=e(31);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},34:function(t,n,e){t.exports=!e(4)&&!e(9)(function(){return 7!=Object.defineProperty(e(21)("div"),"a",{get:function(){return 7}}).a})},35:function(t,n,e){var r=e(20);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},36:function(t,n,e){var r=e(11),o=e(5),i=e(32)(!1),u=e(17)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),a=0,f=[];for(e in c)e!=u&&r(c,e)&&f.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(f,e)||f.push(e));return f}},37:function(t,n){n.f={}.propertyIsEnumerable},38:function(t,n,e){var r=e(15),o=e(5),i=e(37).f;t.exports=function(t){return function(n){for(var e,u=o(n),c=r(u),a=c.length,f=0,s=[];a>f;)i.call(u,e=c[f++])&&s.push(t?[e,u[e]]:u[e]);return s}}},39:function(t,n,e){var r=e(13),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},40:function(t,n,e){var r=e(13),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},41:function(t,n,e){var r=e(7);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},42:function(t,n,e){var r=e(14),o=e(38)(!1);r(r.S,"Object",{values:function(t){return o(t)}})},43:function(t,n,e){e(47),t.exports=e(2).Object.keys},44:function(t,n,e){"use strict";var r=e(57),o=e(14),i=e(61),u=e(6),c=e(11),a=e(19),f=e(55),s=e(46),l=e(60),p=e(8)("iterator"),d=!([].keys&&"next"in[].keys()),v="@@iterator",h="keys",y="values",x=function(){return this};t.exports=function(t,n,e,g,b,_,m){f(e,n,g);var O,w,j,S=function(t){if(!d&&t in E)return E[t];switch(t){case h:return function(){return new e(this,t)};case y:return function(){return new e(this,t)}}return function(){return new e(this,t)}},M=n+" Iterator",k=b==y,P=!1,E=t.prototype,A=E[p]||E[v]||b&&E[b],T=A||S(b),R=b?k?S("entries"):T:void 0,C="Array"==n?E.entries||A:A;if(C&&(j=l(C.call(new t)),j!==Object.prototype&&(s(j,M,!0),r||c(j,p)||u(j,p,x))),k&&A&&A.name!==y&&(P=!0,T=function(){return A.call(this)}),r&&!m||!d&&!P&&E[p]||u(E,p,T),a[n]=T,a[M]=x,b)if(O={values:k?T:S(y),keys:_?T:S(h),entries:R},m)for(w in O)w in E||i(E,w,O[w]);else o(o.P+o.F*(d||P),n,O);return O}},45:function(t,n,e){var r=e(14),o=e(2),i=e(9);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},46:function(t,n,e){var r=e(16).f,o=e(11),i=e(8)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},47:function(t,n,e){var r=e(26),o=e(15);e(45)("keys",function(){return function(t){return o(r(t))}})},49:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={data:function(){return{loading:!1,response:null,error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;this.error=this.response=null,this.loading=!0,this.$http.get(""+this.$root.host+this.$route.path).then(function(n){t.loading=!1,t.response=n},function(n){t.loading=!1,t.error=n.toString()})}}};n.default=e},50:function(t,n,e){t.exports={default:e(51),__esModule:!0}},51:function(t,n,e){e(67),e(66),t.exports=e(64)},52:function(t,n){t.exports=function(){}},53:function(t,n,e){var r=e(20),o=e(8)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},54:function(t,n,e){t.exports=e(3).document&&document.documentElement},55:function(t,n,e){"use strict";var r=e(58),o=e(23),i=e(46),u={};e(6)(u,e(8)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},56:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},57:function(t,n){t.exports=!0},58:function(t,n,e){var r=e(10),o=e(59),i=e(22),u=e(17)("IE_PROTO"),c=function(){},a="prototype",f=function(){var t,n=e(21)("iframe"),r=i.length,o="<",u=">";for(n.style.display="none",e(54).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),f=t.F;r--;)delete f[a][i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(c[a]=r(t),e=new c,c[a]=null,e[u]=t):e=f(),void 0===n?e:o(e,n)}},59:function(t,n,e){var r=e(16),o=e(10),i=e(15);t.exports=e(4)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,a=0;c>a;)r.f(t,e=u[a++],n[e]);return t}},60:function(t,n,e){var r=e(11),o=e(26),i=e(17)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},61:function(t,n,e){t.exports=e(6)},62:function(t,n,e){var r=e(13),o=e(12);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),a=r(e),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a),i<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):(i-55296<<10)+(u-56320)+65536)}}},63:function(t,n,e){var r=e(53),o=e(8)("iterator"),i=e(19);t.exports=e(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},64:function(t,n,e){var r=e(10),o=e(63);t.exports=e(2).getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},65:function(t,n,e){"use strict";var r=e(52),o=e(56),i=e(19),u=e(5);t.exports=e(44)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},66:function(t,n,e){"use strict";var r=e(62)(!0);e(44)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},67:function(t,n,e){e(65);for(var r=e(3),o=e(6),i=e(19),u=e(8)("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;a<5;a++){var f=c[a],s=r[f],l=s&&s.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},195:function(t,n,e){var r,o;e(315),r=e(232);var i=e(331);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},225:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=e(50),i=r(o),u=e(29),c=r(u),a=e(28),f=r(a),s=e(48),l=r(s);l.default.component("grouped-bar-chart",{props:{label:{type:String,default:""},responseData:{type:Object,default:function(){return{}}}},template:'<canvas ref="chart" width="400" height="400"></canvas>',methods:{generateRandomHexColor:function(){return"#"+("00000"+(~~(Math.random()*(1<<24))).toString(16)).slice(-6)}},mounted:function(){var t,n=this.$refs.chart,e=(0,f.default)(this.responseData),r=(0,c.default)(this.responseData),o=[],u=!0,a=!1,s=void 0;try{for(var l,p=(0,i.default)(r);!(u=(l=p.next()).done);u=!0){var d=l.value;o.push((0,c.default)(d))}}catch(t){a=!0,s=t}finally{try{!u&&p.return&&p.return()}finally{if(a)throw s}}for(var v=(t=_).zip.apply(t,o),h=(this.label,(0,f.default)(r[0])),y=[],x=0;x<o.length;x++)y.push({label:h[x],backgroundColor:this.generateRandomHexColor(),data:v[x]});new Chart(n,{type:"bar",data:{labels:e,datasets:y},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}})},232:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),e(225);var o=e(49),i=r(o);n.default={name:"demanda-geral",mixins:[i.default]}},289:function(t,n,e){n=t.exports=e(68)(),n.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",file:"DemandaGeral.vue",sourceRoot:"webpack://"}])},315:function(t,n,e){var r=e(289);"string"==typeof r&&(r=[[t.id,r,""]]);e(69)(r,{});r.locals&&(t.exports=r.locals)},331:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return n("div",[t.loading?n("div",[n("div",{staticClass:"loader"})]):t._e()," ",t.error?n("div",["\n    "+t._s(t.error)+"\n  "]):t._e()," ",t.response?n("div",[n("grouped-bar-chart",{attrs:{"response-data":t.response.body,label:"Demanda Geral e por Turno"}})]):t._e()])},staticRenderFns:[]}}});
//# sourceMappingURL=0.786a205066096a0a8892.js.map