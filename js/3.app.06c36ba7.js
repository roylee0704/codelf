function _typeof2(a){return _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof2(a)}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/models/CopybookModel.js":function srcModelsCopybookModelJs(a,b,c){"use strict";function d(a){return d="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(a){return _typeof2(a)}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":_typeof2(a)},d(a)}function e(a){return h(a)||g(a)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function g(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function h(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}function i(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function j(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){i(h,d,e,f,g,"next",a)}function g(a){i(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function k(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function l(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function m(a,b,c){return b&&l(a.prototype,b),c&&l(a,c),a}function n(a,b){return b&&("object"===d(b)||"function"==typeof b)?b:o(a)}function o(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function p(a){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},p(a)}function q(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&r(a,b)}function r(a,b){return r=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},r(a,b)}c.r(b);var s=c("./src/models/BaseModel.js"),t=c("./src/utils/Tools.js"),u=c("./src/models/metadata/GitHubData.js"),v=c("./src/utils/LocalStorage.js"),w=c("./src/models/AppModel.js"),x=w["default"].genPersistenceKey("agor_repo_file_url_key"),y=function(a){function b(){var a;return k(this,b),a=n(this,p(b).call(this)),a._data={visible:!1,fileList:[],selectedFile:null,fileContent:null,cachedFileUrl:v["default"].getItem(x)},a._data.cachedFileUrl&&864e5<=new Date-new Date(a._data.cachedFileUrl.timer)&&(a._data.cachedFileUrl=null),setTimeout(function(){return a.requestRepoTrees()},100),a}return q(b,a),m(b,[{key:"requestRepoTrees",value:function(){var a=j(regeneratorRuntime.mark(function a(){var b,c,d,e,f;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u["default"].requestCLangAlgorithmsRepoTree();case 2:return b=a.sent,!this._data.cachedFileUrl&&b&&(this._updateFileList(b),this.requestRepoFile(this._genCachedFile(this.fileList))),a.next=6,u["default"].requestJavascriptAlgorithmsRepoTree();case 6:return c=a.sent,this._updateFileList(c),a.next=10,u["default"].requestPythonAlgorithmsRepoTree();case 10:return d=a.sent,this._updateFileList(d),a.next=14,u["default"].requestJavaAlgorithmsRepoTree();case 14:return e=a.sent,this._updateFileList(e),a.next=18,u["default"].requestSwiftAlgorithmsRepoTree();case 18:f=a.sent,this._updateFileList(f),this.fileList.length&&this.requestRepoFile(this._genCachedFile(this.fileList));case 21:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"requestRepoFile",value:function(){var a=j(regeneratorRuntime.mark(function a(b){var c,d;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(b){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,u["default"].requestRepoFile(b.url);case 4:c=a.sent,c&&(d={timer:new Date().toISOString().substr(0,10),url:b.url},this.update({selectedFile:b,fileContent:c,cachedFileUrl:d}),v["default"].setItem(x,d));case 6:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"_updateFileList",value:function(a){a&&this.update({fileList:[].concat(e(this.fileList),e(a))})}},{key:"_genCachedFile",value:function(a){var b,c=this;return this._data.cachedFileUrl&&(b=a.find(function(a){return a.url===c._data.cachedFileUrl.url})),b||t.randomList(a,1)[0]}},{key:"fileList",get:function(){return this._data.fileList}},{key:"selectedFile",get:function(){return this._data.selectedFile}},{key:"fileContent",get:function(){return this._data.fileContent}},{key:"visible",get:function(){return this._data.visible}}]),b}(s["default"]);b["default"]=new y},"./src/models/ErrorModel.js":function srcModelsErrorModelJs(a,b,c){"use strict";function d(a){return d="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(a){return _typeof2(a)}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":_typeof2(a)},d(a)}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function g(a,b,c){return b&&f(a.prototype,b),c&&f(a,c),a}function h(a,b){return b&&("object"===d(b)||"function"==typeof b)?b:i(a)}function i(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function j(a){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},j(a)}function k(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&l(a,b)}function l(a,b){return l=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},l(a,b)}c.r(b);var m=c("./src/models/BaseModel.js"),n=function(a){function b(){var a;return e(this,b),a=h(this,j(b).call(this)),a._data={visible:!1,message:"",error:null},a}return k(b,a),g(b,[{key:"message",get:function(){return this._data.message}},{key:"error",get:function(){return this._data.error},set:function(a){this.update({visible:!0,message:a.message,error:a})}}]),b}(m["default"]);b["default"]=new n},"./src/models/metadata/GitHubData.js":function srcModelsMetadataGitHubDataJs(a,b,c){"use strict";function d(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function e(a){return function(){var b=this,c=arguments;return new Promise(function(e,f){function g(a){d(i,e,f,g,h,"next",a)}function h(a){d(i,e,f,g,h,"throw",a)}var i=a.apply(b,c);g(void 0)})}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function h(a,b,c){return b&&g(a.prototype,b),c&&g(a,c),a}c.r(b);var i=c("./src/models/Store.js"),j=c("./src/models/ErrorModel.js"),k={name:"TheAlgorithms/C",gitHub:"https://github.com/TheAlgorithms/C/tree/master",postfix:".c",included:["conversions","data_structures","hash","misc","searching","sorting"],excluded:[]},l={name:"trekhleb/javascript-algorithms",gitHub:"https://github.com/trekhleb/javascript-algorithms/tree/master",postfix:".js",included:["src/algorithms/","src/data-structures/"],excluded:["__test__"]},m={name:"TheAlgorithms/Python",gitHub:"https://github.com/TheAlgorithms/Python/tree/master",postfix:".py",included:["Maths","binary_tree","data_structures","dynamic_programming","graphs","hashes","maths","other","searches","strings","sorts"],excluded:["__init__.py"]},n={name:"TheAlgorithms/Java",gitHub:"https://github.com/TheAlgorithms/Java/tree/master",postfix:".java",included:["Conversions","DataStructures","Misc","Others","Searches","Sorts"],excluded:[]},o={name:"raywenderlich/swift-algorithm-club",gitHub:"https://github.com/raywenderlich/swift-algorithm-club/tree/master",postfix:".swift",included:[],excluded:["/Tests/",".playground"]},p=function(){function a(){f(this,a),this._repoStore=new i["default"](1/0)}return h(a,[{key:"requestRepoLatestCommit",value:function(){var a=e(regeneratorRuntime.mark(function a(b){var c,d,e,f,g;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(c="requestRepoLatestCommit"+b,d=this._repoStore.get(c),!d){a.next=4;break}return a.abrupt("return",d);case 4:return a.prev=4,e="https://api.github.com/repos/".concat(b,"/commits?"),a.next=8,fetch(e+new Date().toISOString().substr(0,7));case 8:return f=a.sent,a.next=11,f.json();case 11:if(f=a.sent,!f){a.next=18;break}return g=f[0],this._repoStore.save(c,g),a.abrupt("return",g);case 18:throw new Error("Request Repo latest Commit failed");case 19:a.next=24;break;case 21:a.prev=21,a.t0=a["catch"](4),j["default"].error=a.t0;case 24:case"end":return a.stop();}},a,this,[[4,21]])}));return function(){return a.apply(this,arguments)}}()},{key:"requestRepoTree",value:function(){var a=e(regeneratorRuntime.mark(function a(b){var c,d,e,f,g,h,i=this;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(c="requestRepoTree"+b.name,d=this._repoStore.get(c),!d){a.next=4;break}return a.abrupt("return",d);case 4:return a.prev=4,a.next=7,this.requestRepoLatestCommit(b.name);case 7:return e=a.sent,f="".concat(e.commit.tree.url,"?recursive=1"),a.next=11,fetch(f);case 11:return g=a.sent,a.next=14,g.json();case 14:if(g=a.sent,!g){a.next=21;break}return h=Array.prototype.filter.call(g.tree,function(a){var c=a.path;return a.link="".concat(b.gitHub,"/").concat(c),(i._isIncludedFile(c,b.included)||!b.included.length)&&c.endsWith(b.postfix)&&!i._isIncludedFile(c,b.excluded)}),this._repoStore.save(c,h),a.abrupt("return",h);case 21:throw new Error("Request Repo Tree failed");case 22:a.next=27;break;case 24:a.prev=24,a.t0=a["catch"](4),j["default"].error=a.t0;case 27:case"end":return a.stop();}},a,this,[[4,24]])}));return function(){return a.apply(this,arguments)}}()},{key:"requestJavascriptAlgorithmsRepoTree",value:function(){var a=e(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",this.requestRepoTree(l));case 1:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"requestPythonAlgorithmsRepoTree",value:function(){var a=e(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",this.requestRepoTree(m));case 1:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"requestJavaAlgorithmsRepoTree",value:function(){var a=e(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",this.requestRepoTree(n));case 1:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"requestCLangAlgorithmsRepoTree",value:function(){var a=e(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",this.requestRepoTree(k));case 1:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"requestSwiftAlgorithmsRepoTree",value:function(){var a=e(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",this.requestRepoTree(o));case 1:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"requestRepoFile",value:function(){var a=e(regeneratorRuntime.mark(function a(b){var c,d;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(c=this._repoStore.get(b),!c){a.next=3;break}return a.abrupt("return",c);case 3:return a.prev=3,a.next=6,fetch(b);case 6:return d=a.sent,a.next=9,d.json();case 9:if(d=a.sent,!d){a.next=16;break}return d.content=window.atob(d.content),this._repoStore.save(b,d),a.abrupt("return",d);case 16:throw new Error("Request Repo File failed");case 17:a.next=22;break;case 19:a.prev=19,a.t0=a["catch"](3),j["default"].error=a.t0;case 22:case"end":return a.stop();}},a,this,[[3,19]])}));return function(){return a.apply(this,arguments)}}()},{key:"_isIncludedFile",value:function(a,b){return b.find(function(b){return a.includes(b)})}}]),a}();b["default"]=new p}}]);