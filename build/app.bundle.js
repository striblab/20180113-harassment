!function(t){function e(o){if(a[o])return a[o].exports;var n=a[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};e.m=t,e.c=a,e.d=function(t,a,o){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,a){"use strict";var o=a(1);(0,function(t){return t&&t.__esModule?t:{default:t}}(o).default)({}),$.urlParam=function(t){var e=new RegExp("[?&]"+t+"=([^&#]*)").exec(window.location.href);return null!=e?e[1]||0:null};var n=$.urlParam("chart");null!=n&&($(".chart").hide(),$("#"+n).show()),d3.json("./data/rules.json",function(t,e){function a(t,e){d3.select(t).selectAll(".row").data(o).enter().append("div").attr("class",function(t,e){return"row"}).on("click",function(t){}).html(function(t){var a="",o="",n="",s="",l="",r="",i="",c="";return"house"==e?("yes"==t.house_written?(a="green3",l="Y"):"no"==t.house_written?(a="orange3",l="N"):(a="gray3",l="N/A"),"yes"==t.house_soon?(o="green3",r="Y"):"no"==t.house_soon?(o="orange3",r="N"):(o="gray3",r="N/A"),"yes"==t.house_lawmakers?(n="green3",i="Y"):"no"==t.house_lawmakers?(n="orange3",i="N"):(n="gray3",i="N/A"),"yes"==t.house_investigations?(s="green3",c="Y"):"no"==t.house_investigations?(s="orange3",c="N"):(s="gray3",c="N/A"),"<div class='cell state'>"+t.ab+"</div><div class='cell "+a+"'>"+l+"</div><div class='cell "+o+"'>"+r+"</div><div class='cell "+n+"'>"+i+"</div><div class='cell "+s+"'>"+c+"</div>"):"senate"==e?("yes"==t.senate_written?(a="green3",l="Y"):"no"==t.senate_written?(a="orange3",l="N"):(a="gray3",l="N/A"),"yes"==t.senate_soon?(o="green3",r="Y"):"no"==t.senate_soon?(o="orange3",r="N"):(o="gray3",r="N/A"),"yes"==t.senate_lawmakers?(n="green3",i="Y"):"no"==t.senate_lawmakers?(n="orange3",i="N"):(n="gray3",i="N/A"),"yes"==t.senate_investigations?(s="green3",c="Y"):"no"==t.senate_investigations?(s="orange3",c="N"):(s="gray3",c="N/A"),"<div class='cell state'>"+t.ab+"</div><div class='cell "+a+"'>"+l+"</div><div class='cell "+o+"'>"+r+"</div><div class='cell "+n+"'>"+i+"</div><div class='cell "+s+"'>"+c+"</div>"):void 0})}var o=e.laws;a("#houseListing","house"),a("#senateListing","senate")});var s=$("#map svg");$(window).on("resize",function(){var t=s.parent().width();s.attr("width",t),s.attr("height",t/1.375)}),$(window).on("load",function(){var t=s.parent().width();s.attr("width",t),s.attr("height",t/1.375)});var l={margin:{top:40,right:140,bottom:0,left:60},selector:"#map svg",init:function(){var t=this;t.$el=$(t.selector),t.width=550-t.margin.left-t.margin.right,t.height=400-t.margin.top-t.margin.bottom,t.svg=d3.select(t.selector).attr("height",t.height+t.margin.top+t.margin.bottom).attr("width",t.width+t.margin.left+t.margin.right),t.state_size=t.width/12,t.state_padding=2,t.map=t.svg.append("g").attr("transform","translate("+t.margin.left+","+t.margin.top+")"),t.drawMap()},drawMap:function(){var t=this,e=t.map.selectAll(".states").data(t.state_pos_co2).enter().append("g").attr("class","state-groups");e.append("rect").attr("id",function(t){return t.state_postal+"d"}).attr("class","state").attr("class",function(t){return t.color}).attr("rx",0).attr("ry",0).attr("x",function(e){return e.column*(t.state_size+t.state_padding)}).attr("y",function(e){return e.row*(t.state_size+t.state_padding)}).attr("width",t.state_size).attr("height",t.state_size),e.append("text").attr("class","state-label").attr("class",function(t){return"gray5"}).attr("dominant-baseline","central").attr("x",function(e){return e.column*(t.state_size+t.state_padding)+t.state_size/2}).attr("y",function(e){return e.row*(t.state_size+t.state_padding)+t.state_size/2}).style("text-anchor","middle").text(function(t){return t.state_postal})},state_pos_co2:[{state_full:"Alabama",state_postal:"AL",row:5,column:6,state_total_old:"32",state_total_new:"25",state_change:"-63%",color:"orange3"},{state_full:"Alaska",state_postal:"AK",row:6,column:0,state_total_old:"0",state_total_new:"0",state_change:"Insufficient data",color:"orange3"},{state_full:"Arizona",state_postal:"AZ",row:4,column:1,state_total_old:"14",state_total_new:"36",state_change:"+36%",color:"orange3"},{state_full:"Arkansas",state_postal:"AR",row:4,column:4,state_total_old:"36",state_total_new:"43",state_change:"-33%",color:"orange3"},{state_full:"California",state_postal:"CA*",row:3,column:0,state_total_old:"358",state_total_new:"267",state_change:"-25%",color:"green3"},{state_full:"Colorado",state_postal:"CO",row:3,column:2,state_total_old:"124",state_total_new:"93",state_change:"-33%",color:"green3"},{state_full:"Connecticut",state_postal:"CT",row:2,column:9,state_total_old:"0",state_total_new:"6",state_change:"Insufficient data",color:"green3"},{state_full:"D.C.",state_postal:"DC",row:4,column:8,state_total_old:"0",state_total_new:"0",state_change:"Insufficient data",color:"gray3"},{state_full:"Delaware",state_postal:"DE",row:3,column:9,state_total_old:"3",state_total_new:"3",state_change:"-100%",color:"orange3"},{state_full:"Florida",state_postal:"FL",row:6,column:8,state_total_old:"150",state_total_new:"136",state_change:"-14%",color:"green3"},{state_full:"Georgia",state_postal:"GA",row:5,column:7,state_total_old:"77",state_total_new:"59",state_change:"-38%",color:"orange3"},{state_full:"Hawaii",state_postal:"HI",row:6,column:-1,state_total_old:"0",state_total_new:"11",state_change:"Insufficient data",color:"green3"},{state_full:"Idaho",state_postal:"ID",row:1,column:1,state_total_old:"71",state_total_new:"68",state_change:"-21%",color:"orange3"},{state_full:"Illinois",state_postal:"IL",row:1,column:6,state_total_old:"251",state_total_new:"221",state_change:"-14%",color:"green3"},{state_full:"Indiana",state_postal:"IN",row:2,column:5,state_total_old:"216",state_total_new:"220",state_change:"0%",color:"orange3"},{state_full:"Iowa",state_postal:"IA",row:2,column:4,state_total_old:"228",state_total_new:"295",state_change:"+29%",color:"green3"},{state_full:"Kansas",state_postal:"KS",row:4,column:3,state_total_old:"215",state_total_new:"205",state_change:"-6%",color:"orange3"},{state_full:"Kentucky",state_postal:"KY",row:3,column:5,state_total_old:"308",state_total_new:"162",state_change:"-49%",color:"orange3"},{state_full:"Louisiana",state_postal:"LA",row:5,column:4,state_total_old:"30",state_total_new:"26",state_change:"-53%",color:"orange3"},{state_full:"Maine",state_postal:"ME",row:-1,column:10,state_total_old:"0",state_total_new:"14",state_change:"Insufficient data",color:"green3"},{state_full:"Maryland",state_postal:"MD",row:3,column:8,state_total_old:"26",state_total_new:"27",state_change:"-46%",color:"green3"},{state_full:"Massachusetts",state_postal:"MA",row:1,column:9,state_total_old:"0",state_total_new:"11",state_change:"Insufficient data",color:"green3"},{state_full:"Michigan",state_postal:"MI",row:1,column:7,state_total_old:"102",state_total_new:"179",state_change:"+74%",color:"green3"},{state_full:"Minnesota",state_postal:"MN",row:1,column:4,state_total_old:"153",state_total_new:"210",state_change:"+37%",color:"orange3"},{state_full:"Mississippi",state_postal:"MS",row:5,column:5,state_total_old:"65",state_total_new:"46",state_change:"-57%",color:"orange3"},{state_full:"Missouri",state_postal:"MO",row:3,column:4,state_total_old:"264",state_total_new:"288",state_change:"+5%",color:"orange3"},{state_full:"Montana",state_postal:"MT",row:1,column:2,state_total_old:"145",state_total_new:"139",state_change:"-10%",color:"orange3"},{state_full:"Nebraska",state_postal:"NE",row:3,column:3,state_total_old:"199",state_total_new:"179",state_change:"-11%",color:"orange3"},{state_full:"Nevada",state_postal:"NV",row:2,column:1,state_total_old:"0",state_total_new:"11",state_change:"Insufficient data",color:"green3"},{state_full:"New Hampshire",state_postal:"NH",row:0,column:10,state_total_old:"0",state_total_new:"4",state_change:"Insufficient data",color:"orange3"},{state_full:"New Jersey",state_postal:"NJ",row:2,column:8,state_total_old:"8",state_total_new:"19",state_change:"+50%",color:"green3"},{state_full:"New Mexico",state_postal:"NM",row:4,column:2,state_total_old:"24",state_total_new:"14",state_change:"-100%",color:"green3"},{state_full:"New York",state_postal:"NY",row:1,column:8,state_total_old:"203",state_total_new:"135",state_change:"-38%",color:"orange3"},{state_full:"North Carolina",state_postal:"NC",row:4,column:6,state_total_old:"156",state_total_new:"111",state_change:"-35%",color:"green3"},{state_full:"North Dakota",state_postal:"ND",row:1,column:3,state_total_old:"84",state_total_new:"117",state_change:"+36%",color:"orange3"},{state_full:"Ohio",state_postal:"OH",row:2,column:6,state_total_old:"258",state_total_new:"217",state_change:"-18%",color:"green3"},{state_full:"Oklahoma",state_postal:"OK",row:5,column:3,state_total_old:"46",state_total_new:"53",state_change:"-30%",color:"green3"},{state_full:"Oregon",state_postal:"OR",row:2,column:0,state_total_old:"40",state_total_new:"61",state_change:"+20%",color:"orange3"},{state_full:"Pennsylvania",state_postal:"PA",row:2,column:7,state_total_old:"276",state_total_new:"182",state_change:"-34%",color:"green3"},{state_full:"Rhode Island",state_postal:"RI",row:2,column:10,state_total_old:"0",state_total_new:"0",state_change:"Insufficient data",color:"green3"},{state_full:"South Carolina",state_postal:"SC",row:4,column:7,state_total_old:"16",state_total_new:"30",state_change:"+38%",color:"orange3"},{state_full:"South Dakota",state_postal:"SD",row:2,column:3,state_total_old:"88",state_total_new:"108",state_change:"+17%",color:"orange3"},{state_full:"Tennessee",state_postal:"TN",row:4,column:5,state_total_old:"244",state_total_new:"147",state_change:"-42%",color:"green3"},{state_full:"Texas",state_postal:"TX",row:6,column:3,state_total_old:"223",state_total_new:"159",state_change:"+29%",color:"green3"},{state_full:"Utah",state_postal:"UT",row:3,column:1,state_total_old:"24",state_total_new:"24",state_change:"-67%",color:"green3"},{state_full:"Vermont",state_postal:"VT",row:0,column:9,state_total_old:"7",state_total_new:"15",state_change:"-57%",color:"green3"},{state_full:"Virginia",state_postal:"VA",row:3,column:7,state_total_old:"130",state_total_new:"123",state_change:"-10%",color:"orange3"},{state_full:"Washington",state_postal:"WA",row:1,column:0,state_total_old:"88",state_total_new:"63",state_change:"-39%",color:"green3"},{state_full:"West Virginia",state_postal:"WV",row:3,column:6,state_total_old:"9",state_total_new:"22",state_change:"0%",color:"orange3"},{state_full:"Wisconsin",state_postal:"WI",row:1,column:5,state_total_old:"279",state_total_new:"242",state_change:"-15%",color:"green3"},{state_full:"Wyoming",state_postal:"WY",row:2,column:2,state_total_old:"33",state_total_new:"37",state_change:"-21%",color:"orange3"}]};$(document).ready(function(){l.init()})},function(t,e,a){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),s=a(2),l=function(t){return t&&t.__esModule?t:{default:t}}(s),r=function(){function t(e){o(this,t),this.options=e||{},this.options.pym=void 0===this.options.pym||this.options.pym,this.options.useView=void 0===this.options.useView||this.options.useView,this.options.views=this.options.views||{develop:/localhost.*|127\.0\.0\.1.*/i,staging:/staging/i},this.parseQuery(),this.setView(),this.options.pym&&(this.pym=_.isUndefined(window.pym)?void 0:new pym.Child({polling:500}))}return n(t,[{key:"setView",value:function(){if(this.options.useView){var t=void 0;if(_.find(this.options.views,function(e,a){return t=a,window.location.href.match(e)?a:void 0}),t){var e=document.createElement("div"),a=document.getElementsByTagName("body")[0];e.className="site-view site-view-"+t,a.insertBefore(e,a.childNodes[0])}}}},{key:"parseQuery",value:function(){this.query=l.default.parse(document.location.search),this.query.pym&&"true"===this.query.pym&&(this.options.pym=!0)}},{key:"deepClone",value:function(t){return JSON.parse(JSON.stringify(t))}},{key:"isEmbedded",value:function(){if(!_.isUndefined(this.embedded))return this.embedded;try{this.embedded=window.self!==window.top}catch(t){this.embedded=!0}return this.embedded}},{key:"hasLocalStorage",value:function(){if(!_.isUndefined(this.localStorage))return this.localStorage;try{window.localStorage.setItem("test","test"),window.localStorage.removeItem("test"),this.localStorage=!0}catch(t){this.localStorage=!1}return this.localStorage}},{key:"hasGeolocate",value:function(){return window.navigator&&"geolocation"in window.navigator}},{key:"geolocate",value:function(t){this.hasGeolocate()?window.navigator.geolocation.getCurrentPosition(function(e){t(null,{lat:e.coords.latitude,lng:e.coords.longitude})},function(){t("Unable to find your position.")}):t("Geolocation not available")}},{key:"goTo",value:function(t){var e=_.isElement(t)?t:t[0]&&_.isElement(t[0])?t[0]:document.getElementById(t);e&&(this.isEmbedded()&&this.pym?this.pym.scrollParentToChildEl(e):e.scrollIntoView({behavior:"smooth"}))}},{key:"gaPageUpdate",value:function(t){t=t||document.location.pathname+document.location.search+document.location.hash,window.ga&&(window.ga("set","page",t),window.ga("send","pageview"))}}]),t}();e.default=function(t){return new r(t)}},function(t,e,a){"use strict";function o(t){switch(t.arrayFormat){case"index":return function(e,a,o){return null===a?[s(e,t),"[",o,"]"].join(""):[s(e,t),"[",s(o,t),"]=",s(a,t)].join("")};case"bracket":return function(e,a){return null===a?s(e,t):[s(e,t),"[]=",s(a,t)].join("")};default:return function(e,a){return null===a?s(e,t):[s(e,t),"=",s(a,t)].join("")}}}function n(t){var e;switch(t.arrayFormat){case"index":return function(t,a,o){if(e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!e)return void(o[t]=a);void 0===o[t]&&(o[t]={}),o[t][e[1]]=a};case"bracket":return function(t,a,o){return e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0===o[t]?void(o[t]=[a]):void(o[t]=[].concat(o[t],a)):void(o[t]=a)};default:return function(t,e,a){if(void 0===a[t])return void(a[t]=e);a[t]=[].concat(a[t],e)}}}function s(t,e){return e.encode?e.strict?r(t):encodeURIComponent(t):t}function l(t){return Array.isArray(t)?t.sort():"object"==typeof t?l(Object.keys(t)).sort(function(t,e){return Number(t)-Number(e)}).map(function(e){return t[e]}):t}var r=a(3),i=a(4);e.extract=function(t){return t.split("?")[1]||""},e.parse=function(t,e){e=i({arrayFormat:"none"},e);var a=n(e),o=Object.create(null);return"string"!=typeof t?o:(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var e=t.replace(/\+/g," ").split("="),n=e.shift(),s=e.length>0?e.join("="):void 0;s=void 0===s?null:decodeURIComponent(s),a(decodeURIComponent(n),s,o)}),Object.keys(o).sort().reduce(function(t,e){var a=o[e];return Boolean(a)&&"object"==typeof a&&!Array.isArray(a)?t[e]=l(a):t[e]=a,t},Object.create(null))):o},e.stringify=function(t,e){e=i({encode:!0,strict:!0,arrayFormat:"none"},e);var a=o(e);return t?Object.keys(t).sort().map(function(o){var n=t[o];if(void 0===n)return"";if(null===n)return s(o,e);if(Array.isArray(n)){var l=[];return n.slice().forEach(function(t){void 0!==t&&l.push(a(o,t,l.length))}),l.join("&")}return s(o,e)+"="+s(n,e)}).filter(function(t){return t.length>0}).join("&"):""}},function(t,e,a){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}},function(t,e,a){"use strict";function o(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},a=0;a<10;a++)e["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var a,r,i=o(t),c=1;c<arguments.length;c++){a=Object(arguments[c]);for(var _ in a)s.call(a,_)&&(i[_]=a[_]);if(n){r=n(a);for(var u=0;u<r.length;u++)l.call(a,r[u])&&(i[r[u]]=a[r[u]])}}return i}}]);
//# sourceMappingURL=app.bundle.js.map