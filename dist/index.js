!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";var r=n(2),a=n.n(r)()((function(t){return t[1]}));a.push([t.i,".lod-author-card{background-color:#f3f3f3;position:relative}.lod-author-card .lod-author-card-abstract{font-size:small;font-weight:300;text-align:justify;padding:0 20px 15px 0}.lod-author-card .picture{max-width:200px;max-height:300px;margin:0 15px}",""]),e.a=a},function(t,e,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function c(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},r=[],a=0;a<t.length;a++){var i=t[a],l=e.base?i[0]+e.base:i[0],d=n[l]||0,s="".concat(l," ").concat(d);n[l]=d+1;var u=c(s),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(o[u].references++,o[u].updater(f)):o.push({identifier:s,updater:m(f,e),references:1}),r.push(s)}return r}function d(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var o=i(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var s,u=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function f(t,e,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=u(e,a);else{var i=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(i,o[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,b=0;function m(t,e){var n,r,a;if(e.singleton){var i=b++;n=h||(h=d(e)),r=f.bind(null,n,i,!1),a=f.bind(null,n,i,!0)}else n=d(e),r=p.bind(null,n,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else a()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var a=c(n[r]);o[a].references--}for(var i=l(t,e),d=0;d<n.length;d++){var s=c(n[d]);0===o[s].references&&(o[s].updater(),o.splice(s,1))}n=i}}}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);r&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},function(t,e){t.exports='<div class="lod-author-card"> <div class="section-body" layout="row"> <div ng-if="!$ctrl.loading"> <span ng-if="!$ctrl.bibcard">No further information is available for this author</span> <md-card ng-if="$ctrl.bibcard"> <md-card-title> <md-card-title-text> <span class="md-headline">{{$ctrl.bibcard.name}}</span> <span class="md-subhead">{{$ctrl.bibcard.wikidata_entity.description}} ({{$ctrl.bibcard.birth_date | date:\'mediumDate\'}}-{{$ctrl.bibcard.death_date | date:\'mediumDate\'}})</span> </md-card-title-text> </md-card-title> <md-card-content> <div layout="row" layout-xs="column"> <div flex="" class="lod-author-card-abstract"> {{$ctrl.bibcard.dbpedia_resource.abstract}} </div> <div flex="33"> <img ng-src="{{$ctrl.bibcard.dbpedia_resource.depiction|secureSrc}}" class="picture"> </div> </div> <div ng-if="$ctrl.bibcard.wikidata_entity.notable_works && $ctrl.bibcard.wikidata_entity.notable_works.length>0"> <span class="md-subhead">Notable works</span> <ul> <li ng-repeat="work in $ctrl.bibcard.wikidata_entity.notable_works"> <a ng-href="{{$ctrl.searchUrl + \'&query=title,contains,\' + (work | escape)}}" target="_blank">{{work}}</a> </li> </ul> </div> </md-card-content> </md-card> </div> </div> </div>'},function(t,e,n){n(5),t.exports="lodAuthorCard"},function(t,e,n){"use strict";n.r(e),n.d(e,"LodAuthorCardModule",(function(){return h}));var r=n(1),a=n.n(r),i=n(0),o={insert:"head",singleton:!1};a()(i.a,o),i.a.locals;function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=/https?:\/\/id\.loc\.gov\//,s=function(){function t(e,n,r,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"loading",!1),l(this,"bibcard",null),l(this,"searchUrl","/discovery/search?vid=".concat(this.parentCtrl.configurationUtil.vid)),l(this,"parentElement",null),this.$http=e,this.$scope=n,this.$element=r,this.options=a,this.parentElement=this.$element.parent().parent()[0]}var e,n,r;return e=t,(n=[{key:"$onInit",value:function(){var t=this;this.loading=!0;var e=this.parentCtrl.item.pnx.display.mms[0],n=this.parentCtrl.configurationUtil.vid.split(":")[0];this.$http.get("https://open-na.hosted.exlibrisgroup.com/alma/".concat(n,"/bibs/").concat(e)).then((function(t){var e,n=t.data;if(Array.isArray(n.creator)?e=n.creator.find((function(t){return t["@id"]&&t["@id"].match(d)})):n.creator&&n.creator["@id"]&&n.creator["@id"].match(d)&&(e=n.creator),e)return e["@id"];throw"No LC Names URI found"})).then((function(e){return t.$http.get(t.options.bibcardApi+e)})).then((function(e){return t.bibcard=e.data})).catch((function(t){return console.warn(t)})).finally((function(){t.loading=!1,t.moveElement()}))}},{key:"moveElement",value:function(){var t=this;try{this.parentCtrl.services.splice(this.parentCtrl.services.length,0,{scrollId:"lodAuthorCard",serviceName:"lodAuthorCard",title:"More about this author"});var e=this.$scope.$watch((function(){return t.parentElement.querySelector('h4[translate="'.concat("More about this author",'"]'))}),(function(n,r){if(n){var a=n.parentElement.parentElement.parentElement.parentElement.children[1];console.log("watcher",n,a),a&&a.appendChild&&a.appendChild(t.$element[0]),e()}}))}catch(t){console.warn("Error moving open data element",t.message)}}}])&&c(e.prototype,n),r&&c(e,r),t}();s.$inject=["$http","$scope","$element","LodAuthorCardOptions"];var u=s,f=n(3),p={selector:"lodAuthorCardComponent",bindings:{parentCtrl:"<"},controller:u,template:n.n(f).a},h=angular.module("lodAuthorCard",[]).constant("LodAuthorCardOptions",{bibcardApi:"https://api.exldevnetwork.net/bibcard/?uri="}).filter("escape",(function(){return window.encodeURIComponent})).filter("secureSrc",(function(){return function(t){return t.substr(t.indexOf(":")+1)}}));angular.module("lodAuthorCard").component(p.selector,p)}]);