(function(t){function e(e){for(var i,n,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,n=1;n<a.length;n++){var o=a[n];0!==r[o]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},n={app:0},r={app:0},s=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-35bee05e":"72d92fa3","chunk-3a21cb7e":"2a503b19","chunk-6710762a":"ad24d5bd","chunk-69ad9e91":"7a0915aa"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-35bee05e":1,"chunk-3a21cb7e":1,"chunk-6710762a":1,"chunk-69ad9e91":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var i="css/"+({}[t]||t)+"."+{"chunk-35bee05e":"1464b8a0","chunk-3a21cb7e":"6ad1d573","chunk-6710762a":"02680b00","chunk-69ad9e91":"e4939bc4"}[t]+".css",r=c.p+i,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===r))return e()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){l=p[o],u=l.getAttribute("data-href");if(u===i||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=i,delete n[t],d.parentNode.removeChild(d),a(s)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){n[t]=0})));var i=r[t];if(0!==i)if(i)e.push(i[2]);else{var s=new Promise((function(e,a){i=r[t]=[e,a]}));e.push(i[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",p.name="ChunkLoadError",p.type=i,p.request=n,a[1](p)}r[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/Rental-number/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0174":function(t,e,a){},"0728":function(t,e,a){t.exports=a.p+"img/pic3.ac59ba06.jpg"},1722:function(t,e,a){},"1eb4":function(t,e,a){t.exports=a.p+"img/pic2.17b61209.jpg"},"28dc":function(t,e,a){"use strict";var i=a("0174"),n=a.n(i);n.a},"2b6e":function(t,e,a){},"2e3d":function(t,e,a){"use strict";var i=a("2b6e"),n=a.n(i);n.a},"301c":function(t,e,a){t.exports=a.p+"img/banner.408cc180.jpg"},"40eb":function(t,e,a){t.exports=a.p+"img/pic4.48a8e4b6.jpg"},"4a0f":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("a026"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("layout")],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-bar"),a("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[a("router-view")],1),a("what-new"),a("nav-footer")],1)},o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"top-bar-contain"},[t._m(0),a("div",{staticClass:"navigation"},[a("ul",{staticClass:"navig cl-effect-3"},t._l(t.routeMap,(function(e,i){return a("li",{key:i,on:{click:function(a){return t.getCurrent(e.name)}}},[a("router-link",{class:{active:e.ifCheck},attrs:{to:{name:e.name},tag:"a"}},[t._v(t._s(e.label))])],1)})),0)]),t._m(1)])])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"logo",attrs:{href:"#"}},[i("img",{attrs:{src:a("9d64"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-bar"},[a("input",{attrs:{type:"text",placeholder:"search"}}),a("input",{attrs:{type:"submit",value:""}})])}],u=(a("8e6e"),a("ac6a"),a("456d"),a("7f7f"),a("bd86")),p=a("2f62");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(a,!0).forEach((function(e){Object(u["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={name:"NavBar",computed:m({},Object(p["b"])(["currentRoute","routeMap"])),watch:{$route:function(){this.getCurrent()}},mounted:function(){this.getCurrent()},methods:{getCurrent:function(t){this.$store.commit("base/CHANGE_CURRENT_ROUTE",t||this.$route.name),console.log(this.routeMap)}}},b=f,v=(a("57cc"),a("2877")),h=Object(v["a"])(b,c,l,!1,null,null,null),g=h.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"container"},[a("p",[t._v("2019 Design by MrW.")])])])}],w={name:"NavFooter"},_=w,O=(a("2e3d"),Object(v["a"])(_,y,C,!1,null,null,null)),x=O.exports,j=a("acb6"),k={components:{navBar:g,navFooter:x,WhatNew:j["a"]}},E=k,S=Object(v["a"])(E,s,o,!1,null,null,null),P=S.exports,q={components:{layout:P},created:function(){if(sessionStorage.redirect){var t=sessionStorage.redirect;delete sessionStorage.redirect,this.$router.push(t)}}},$=q,M=Object(v["a"])($,n,r,!1,null,null,null),T=M.exports,D=a("8c4f"),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("swiper",{attrs:{options:t.swiperOption}},[t._l(t.imgList,(function(t,e){return a("swiper-slide",{key:e},[a("img",{attrs:{src:t,alt:e}})])})),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),a("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"})],2),t._m(0),t._m(1),t._m(2)],1)},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner-bot"},[a("div",{staticClass:"container"},[a("h2",[t._v("Hello!")]),a("p",[t._v("\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet\n        dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper\n        suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in\n        vulputate velit esse molestie consequat, vel illum dolore\n      ")]),a("p",[t._v("\n        Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes\n        demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui\n        sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum\n        claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima\n      ")])]),a("nav",{staticClass:"cl-effect-3"},[a("a",{attrs:{href:"#"}},[t._v("More")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gallery"},[i("div",{staticClass:"container"},[i("h3",[t._v("Gallery")]),i("div",{staticClass:"gallery-top"},[i("ul",{staticClass:"clearfix",attrs:{id:"filters"}},[i("li",[i("span",{staticClass:"filter active",attrs:{"data-filter":"app card icon logo web"}},[t._v("1")])]),i("li",[i("span",{staticClass:"filter",attrs:{"data-filter":"app"}},[t._v("2")])]),i("li",[i("span",{staticClass:"filter",attrs:{"data-filter":"card"}},[t._v("3")])]),i("li",[i("span",{staticClass:"filter",attrs:{"data-filter":"icon"}},[t._v("4")])])]),i("div",{attrs:{id:"portfoliolist"}},[i("div",{staticClass:"portfolio app mix_all",staticStyle:{display:"inline-block",opacity:"1"},attrs:{"data-cat":"app"}},[i("div",{staticClass:"portfolio-wrapper"},[i("a",{staticClass:"b-link-stripe b-animate-go thickbox",attrs:{href:"index.html"}},[i("img",{attrs:{src:a("a715")}}),i("div",{staticClass:"b-wrapper"},[i("h2",{staticClass:"b-animate b-from-left b-delay03"})])])])]),i("div",{staticClass:"portfolio icon mix_all",staticStyle:{display:"inline-block",opacity:"1"},attrs:{"data-cat":"icon"}},[i("div",{staticClass:"portfolio-wrapper"},[i("a",{staticClass:"b-link-stripe b-animate-go thickbox",attrs:{href:"index.html"}},[i("img",{attrs:{src:a("1eb4")}}),i("div",{staticClass:"b-wrapper"},[i("h2",{staticClass:"b-animate b-from-left b-delay03"})])])])]),i("div",{staticClass:"portfolio card mix_all",staticStyle:{display:"inline-block",opacity:"1"},attrs:{"data-cat":"card"}},[i("div",{staticClass:"portfolio-wrapper"},[i("a",{staticClass:"b-link-stripe b-animate-go thickbox",attrs:{href:"index.html"}},[i("img",{attrs:{src:a("0728")}}),i("div",{staticClass:"b-wrapper"},[i("h2",{staticClass:"b-animate b-from-left b-delay03"})])])])]),i("div",{staticClass:"portfolio logos mix_all",staticStyle:{display:"inline-block",opacity:"1"},attrs:{"data-cat":"logo"}},[i("div",{staticClass:"portfolio-wrapper"},[i("a",{staticClass:"b-link-stripe b-animate-go thickbox",attrs:{href:"index.html"}},[i("img",{attrs:{src:a("40eb")}}),i("div",{staticClass:"b-wrapper"},[i("h2",{staticClass:"b-animate b-from-left b-delay03"})])])])]),i("div",{staticClass:"portfolio card mix_all",staticStyle:{display:"inline-block",opacity:"1"},attrs:{"data-cat":"card"}},[i("div",{staticClass:"portfolio-wrapper"},[i("a",{staticClass:"b-link-stripe b-animate-go thickbox",attrs:{href:"index.html"}},[i("img",{attrs:{src:a("8fb6")}}),i("div",{staticClass:"b-wrapper"},[i("h2",{staticClass:"b-animate b-from-left b-delay03"})])])])])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"video-serch"},[i("div",{staticClass:"container splitor"},[i("div",{staticClass:"vid-col",staticStyle:{width:"50%"}},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy")]),i("p",[t._v("\n          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea\n          commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,\n          vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit.\n        ")]),i("div",{staticClass:"more"},[i("a",{attrs:{href:"#"}},[t._v("See more videos")])])]),i("div",{staticClass:"vid-coll",staticStyle:{width:"50%"}},[i("img",{attrs:{src:a("db60"),alt:""}}),i("div",{staticClass:"play-but"},[i("a",{staticClass:"thickbox play-icon popup-with-zoom-anim",attrs:{href:"#small-dialog5"}},[i("img",{attrs:{src:a("de70"),alt:""}})])])]),i("div",{staticClass:"clearfix"})])])}],U=a("7212"),N={name:"Home",components:{swiper:U["swiper"],swiperSlide:U["swiperSlide"]},data:function(){return{imgList:[a("301c"),a("301c"),a("301c"),a("301c"),a("301c")],swiperOption:{loog:!0,autoplay:{delay:4e3,stopOnLastSlide:!1,disableOnInteraction:!0},pagination:{el:".swiper-pagination",type:"progressbar",progressbarFillClass:"progress-fill"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}}},A=N,B=(a("c219"),Object(v["a"])(A,L,R,!1,null,null,null)),H=B.exports;i["a"].use(D["a"]);var F=new D["a"]({mode:"history",base:"/Rental-number/",routes:[{path:"/",name:"home",component:H},{path:"/games",name:"games",component:function(){return a.e("chunk-3a21cb7e").then(a.bind(null,"a2e9"))},meta:{title:"游戏列表"}},{path:"/blog",name:"blog",component:function(){return a.e("chunk-6710762a").then(a.bind(null,"fd3f"))},meta:{title:"简介"}},{path:"/features",name:"features",component:function(){return a.e("chunk-69ad9e91").then(a.bind(null,"ae1c"))},meta:{title:"预告"}},{path:"/contact",name:"contact",component:function(){return a.e("chunk-35bee05e").then(a.bind(null,"b8fa"))},meta:{title:"联系我们"}}]}),G={currentRoute:function(t){return t.base.currentRoute},routeMap:function(t){return t.base.routeMap}},I=G;function W(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function J(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?W(a,!0).forEach((function(e){Object(u["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):W(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var z={currentRoute:"???",routeMap:[{name:"home",label:"租号玩"},{name:"games",label:"游戏"},{name:"features",label:"预告"},{name:"contact",label:"联系我们"}]},K={UPDATE_ROUTE:function(t,e){t.currentRoute=e},CHANGE_CURRENT_ROUTE:function(t,e){t.routeMap=t.routeMap.map((function(t){return t.name===e?J({},t,{ifCheck:!0}):J({},t,{ifCheck:!1})}))}},Q={namespaced:!0,state:z,mutations:K};i["a"].use(p["a"]);var V=new p["a"].Store({modules:{base:Q},getters:I}),X=V,Y=a("83d6"),Z=a.n(Y),tt=Z.a.title;function et(t){return t?"".concat(t," - ").concat(tt):"".concat(tt)}a("a5d8");var at=a("323e"),it=a.n(at);it.a.configure({showSpinner:!1}),F.beforeEach((function(t,e,a){it.a.start(),document.title=et(t.meta.title),a()})),F.afterEach((function(t){it.a.done()}));a("4a0f");i["a"].config.productionTip=!1,new i["a"]({router:F,store:X,render:function(t){return t(T)}}).$mount("#app")},"57cc":function(t,e,a){"use strict";var i=a("1722"),n=a.n(i);n.a},"83d6":function(t,e){t.exports={title:"租号玩"}},"8fb6":function(t,e,a){t.exports=a.p+"img/pic5.27368518.jpg"},"9d64":function(t,e,a){t.exports=a.p+"img/logo.f779213e.png"},a715:function(t,e,a){t.exports=a.p+"img/pic1.85f8ec7e.jpg"},acb6:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"what-new"},[a("div",{staticClass:"container"},[a("h3",[t._v("What's new")]),a("table",[a("tr",{staticClass:"blog-news"},[a("td",{staticClass:"blog-news-grid"},[a("div",{staticClass:"news-container"},[a("div",{staticClass:"news-grid-left"},[a("h4",[t._v("06")]),a("small",[t._v("of january 2015")])]),a("div",{staticClass:"news-grid-right"},[a("h4",[t._v("Claritas est etiam processus")]),a("p",[t._v("\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut\n                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim\n              ")])])])]),a("td",{staticClass:"blog-news-grid b_n_g"},[a("div",{staticClass:"news-container"},[a("div",{staticClass:"news-grid-left"},[a("h4",[t._v("28")]),a("small",[t._v("of january 2015")])]),a("div",{staticClass:"news-grid-right"},[a("h4",[t._v("Claritas est etiam processus")]),a("p",[t._v("\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut\n                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim\n              ")])])])])]),a("tr",{staticClass:"blog-news b_n"},[a("td",{staticClass:"blog-news-grid"},[a("div",{staticClass:"news-container"},[a("div",{staticClass:"news-grid-left"},[a("h4",[t._v("21")]),a("small",[t._v("of january 2015")])]),a("div",{staticClass:"news-grid-right"},[a("h4",[t._v("Claritas est etiam processus")]),a("p",[t._v("\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut\n                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim\n              ")])])])]),a("td",{staticClass:"blog-news-grid b_n_g"},[a("div",{staticClass:"news-container"},[a("div",{staticClass:"news-grid-left"},[a("h4",[t._v("05")]),a("small",[t._v("of january 2015")])]),a("div",{staticClass:"news-grid-right"},[a("h4",[t._v("Claritas est etiam processus")]),a("p",[t._v("\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut\n                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim\n              ")])])])])])])])])}],r=(a("28dc"),a("2877")),s={},o=Object(r["a"])(s,i,n,!1,null,"d30bf5d0",null);e["a"]=o.exports},c219:function(t,e,a){"use strict";var i=a("e9bb"),n=a.n(i);n.a},db60:function(t,e,a){t.exports=a.p+"img/vid-img.8d6c682a.jpg"},de70:function(t,e,a){t.exports=a.p+"img/vid-play.1f8c40f6.png"},e9bb:function(t,e,a){}});
//# sourceMappingURL=app.2a51434c.js.map