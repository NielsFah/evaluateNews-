var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";function r(e){var t=document.getElementById("url");console.log(t.value+" was submitted");let n=t.value;var r;r=n,console.log("getAnalysis function triggered"),fetch("http://localhost:8080/api"+r,{mode:"cors"}).then(e=>e.json()).then(e=>{document.getElementById("subjectivity").innerHTML=e.subjectivity}).catch(e=>{})}function o(e){e.preventDefault();let t=document.getElementById("url").value;console.log("::: Form Submitted :::"+t),Client.validUrl(t)?(Client.sentimentAnalysis(),console.log("::: Form Sent :::"),document.getElementById("input").innerHTML=`We analyzed ${t} for you`):(alert("Please enter a valid URL."),document.getElementById("input").innerHTML=`We tried to analyze ${t} for you but it wasn't a valid url, please check url and try again`)}function u(e){return null!=e.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)}n.r(t);n(0),n(1),n(2),n(3),n(4);n.d(t,"sentimentAnalysis",function(){return r}),n.d(t,"handleSubmit",function(){return o}),n.d(t,"validUrl",function(){return u})}]);