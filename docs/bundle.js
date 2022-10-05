/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={390:function(t,e,n){var i,r=r||function(t){"use strict";if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var e,n,i,r,s,o,a,h,u,c=c||(e=t.document,n=e.createElementNS("http://www.w3.org/1999/xhtml","a"),i="download"in n,r=/Version\/[\d\.]+.*Safari/.test(navigator.userAgent),s=t.webkitRequestFileSystem,o=t.requestFileSystem||s||t.mozRequestFileSystem,a="application/octet-stream",h=0,u=v.prototype,"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,n){return n||(t=m(t)),navigator.msSaveOrOpenBlob(t,e||"download")}:(u.abort=function(){this.readyState=this.DONE,g(this,"abort")},u.readyState=u.INIT=0,u.WRITING=1,u.DONE=2,u.error=u.onwritestart=u.onprogress=u.onwrite=u.onabort=u.onerror=u.onwriteend=null,function(t,e,n){return new v(t,e,n)})),f=function(t,e,n){e=e||"",n=n||512;for(var i=atob(t),r=[],s=0;s<i.length;s+=n){for(var o=i.slice(s,s+n),a=new Array(o.length),h=0;h<o.length;h++)a[h]=o.charCodeAt(h);var u=new Uint8Array(a);r.push(u)}return new Blob(r,{type:e})};return function(t,e,n){var i;"object"==typeof e?(name=e.name||"image",n=e.type||"png",i=e.quality||1):(name=e||"image",n=n||"png");var r,s=(r=t)instanceof Element||r instanceof HTMLDocument?t:document.getElementById(t);"jpg"===(n=n.toLowerCase())?function(t,e,n){e+=".jpg";var i=t.toDataURL("image/jpeg",n);i=i.replace(/^data:image\/jpeg;base64,/,"");var r=f(i,"image/jpeg");c(r,e)}(s,name,i):function(t,e,n){e+=".png";var i=t.toDataURL("image/png",n);i=i.replace(/^data:image\/png;base64,/,"");var r=f(i,"image/png");c(r,e)}(s,name,i)}}function p(){return t.URL||t.webkitURL||t}function l(e){(t.setImmediate||t.setTimeout)((function(){throw e}),0)}function d(t){setTimeout((function(){"string"==typeof t?p().revokeObjectURL(t):t.remove()}),4e4)}function g(t,e,n){for(var i=(e=[].concat(e)).length;i--;){var r=t["on"+e[i]];if("function"==typeof r)try{r.call(t,n||t)}catch(t){l(t)}}}function m(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["ï»¿",t],{type:t.type}):t}function v(e,u,c){function f(){g(x,"writestart progress write writeend".split(" "))}function l(){if(y&&r&&"undefined"!=typeof FileReader){var n=new FileReader;return n.onloadend=function(){var t=n.result;y.location.href="data:attachment/file"+t.slice(t.search(/[,;]/)),x.readyState=x.DONE,f()},n.readAsDataURL(e),void(x.readyState=x.INIT)}!S&&w||(w=p().createObjectURL(e)),y?y.location.href=w:void 0===t.open(w,"_blank")&&r&&(t.location.href=w),x.readyState=x.DONE,f(),d(w)}function v(t){return function(){if(x.readyState!==x.DONE)return t.apply(this,arguments)}}c||(e=m(e));var w,y,b,x=this,j=e.type,S=!1,R={create:!0,exclusive:!1};if(x.readyState=x.INIT,u=u||"download",i)return w=p().createObjectURL(e),void setTimeout((function(){var t,e;n.href=w,n.download=u,t=n,e=new MouseEvent("click"),t.dispatchEvent(e),f(),d(w),x.readyState=x.DONE}));t.chrome&&j&&j!==a&&(b=e.slice||e.webkitSlice,e=b.call(e,0,e.size,a),S=!0),s&&"download"!==u&&(u+=".download"),j!==a&&!s||(y=t),o?(h+=e.size,o(t.TEMPORARY,h,v((function(t){t.root.getDirectory("saved",R,v((function(t){function n(){t.getFile(u,R,v((function(t){t.createWriter(v((function(n){n.onwriteend=function(e){y.location.href=t.toURL(),x.readyState=x.DONE,g(x,"writeend",e),d(t)},n.onerror=function(){var t=n.error;t.code!==t.ABORT_ERR&&l()},"writestart progress write abort".split(" ").forEach((function(t){n["on"+t]=x["on"+t]})),n.write(e),x.abort=function(){n.abort(),x.readyState=x.DONE},x.readyState=x.WRITING})),l)})),l)}t.getFile(u,{create:!1},v((function(t){t.remove(),n()})),v((function(t){(t.code===t.NOT_FOUND_ERR?n:l)()})))})),l)})),l)):l()}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);t.exports?t.exports=r:null!==n.amdD&&null!==n.amdO&&(void 0===(i=function(){return r}.apply(e,[]))||(t.exports=i))},907:t=>{"use strict";t.exports=function(t){for(var e=new Array(t),n=0;n<t;++n)e[n]=n;return e}},738:t=>{function e(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(e(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&e(t.slice(0,0))}(t)||!!t._isBuffer)}},898:t=>{function e(t,e,n,i){t||((t=document.createElement("canvas")).width=e.shape[0],t.height=e.shape[1]);var r,s,o=t.getContext("2d"),a=o.getImageData(0,0,t.width,t.height),h=a.data,u=e.shape[0],c=e.shape[1],f=0;for(s=0;s<c;s++)for(r=0;r<u;r++,f+=4)h[f+3]=255,h[f]=e.get(r,s),h[f+1]=n.get(r,s),h[f+2]=i.get(r,s);return o.putImageData(a,0,0),t}t.exports=function(t,n,i,r){return i&&r?e(t,n,i,r):e(t,n,n,n)}},861:(t,e,n)=>{var i=n(907),r=n(738),s="undefined"!=typeof Float64Array;function o(t,e){return t[0]-e[0]}function a(){var t,e=this.stride,n=new Array(e.length);for(t=0;t<n.length;++t)n[t]=[Math.abs(e[t]),t];n.sort(o);var i=new Array(n.length);for(t=0;t<i.length;++t)i[t]=n[t][1];return i}function h(t,e){var n=["View",e,"d",t].join("");e<0&&(n="View_Nil"+t);var r="generic"===t;if(-1===e){var s="function "+n+"(a){this.data=a;};var proto="+n+".prototype;proto.dtype='"+t+"';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new "+n+"(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_"+n+"(a){return new "+n+"(a);}";return new Function(s)()}if(0===e)return s="function "+n+"(a,d) {this.data = a;this.offset = d};var proto="+n+".prototype;proto.dtype='"+t+"';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function "+n+"_copy() {return new "+n+"(this.data,this.offset)};proto.pick=function "+n+"_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function "+n+"_get(){return "+(r?"this.data.get(this.offset)":"this.data[this.offset]")+"};proto.set=function "+n+"_set(v){return "+(r?"this.data.set(this.offset,v)":"this.data[this.offset]=v")+"};return function construct_"+n+"(a,b,c,d){return new "+n+"(a,d)}",new Function("TrivialArray",s)(u[t][0]);s=["'use strict'"];var o=i(e),h=o.map((function(t){return"i"+t})),c="this.offset+"+o.map((function(t){return"this.stride["+t+"]*i"+t})).join("+"),f=o.map((function(t){return"b"+t})).join(","),p=o.map((function(t){return"c"+t})).join(",");s.push("function "+n+"(a,"+f+","+p+",d){this.data=a","this.shape=["+f+"]","this.stride=["+p+"]","this.offset=d|0}","var proto="+n+".prototype","proto.dtype='"+t+"'","proto.dimension="+e),s.push("Object.defineProperty(proto,'size',{get:function "+n+"_size(){return "+o.map((function(t){return"this.shape["+t+"]"})).join("*"),"}})"),1===e?s.push("proto.order=[0]"):(s.push("Object.defineProperty(proto,'order',{get:"),e<4?(s.push("function "+n+"_order(){"),2===e?s.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"):3===e&&s.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")):s.push("ORDER})")),s.push("proto.set=function "+n+"_set("+h.join(",")+",v){"),r?s.push("return this.data.set("+c+",v)}"):s.push("return this.data["+c+"]=v}"),s.push("proto.get=function "+n+"_get("+h.join(",")+"){"),r?s.push("return this.data.get("+c+")}"):s.push("return this.data["+c+"]}"),s.push("proto.index=function "+n+"_index(",h.join(),"){return "+c+"}"),s.push("proto.hi=function "+n+"_hi("+h.join(",")+"){return new "+n+"(this.data,"+o.map((function(t){return["(typeof i",t,"!=='number'||i",t,"<0)?this.shape[",t,"]:i",t,"|0"].join("")})).join(",")+","+o.map((function(t){return"this.stride["+t+"]"})).join(",")+",this.offset)}");var l=o.map((function(t){return"a"+t+"=this.shape["+t+"]"})),d=o.map((function(t){return"c"+t+"=this.stride["+t+"]"}));s.push("proto.lo=function "+n+"_lo("+h.join(",")+"){var b=this.offset,d=0,"+l.join(",")+","+d.join(","));for(var g=0;g<e;++g)s.push("if(typeof i"+g+"==='number'&&i"+g+">=0){d=i"+g+"|0;b+=c"+g+"*d;a"+g+"-=d}");for(s.push("return new "+n+"(this.data,"+o.map((function(t){return"a"+t})).join(",")+","+o.map((function(t){return"c"+t})).join(",")+",b)}"),s.push("proto.step=function "+n+"_step("+h.join(",")+"){var "+o.map((function(t){return"a"+t+"=this.shape["+t+"]"})).join(",")+","+o.map((function(t){return"b"+t+"=this.stride["+t+"]"})).join(",")+",c=this.offset,d=0,ceil=Math.ceil"),g=0;g<e;++g)s.push("if(typeof i"+g+"==='number'){d=i"+g+"|0;if(d<0){c+=b"+g+"*(a"+g+"-1);a"+g+"=ceil(-a"+g+"/d)}else{a"+g+"=ceil(a"+g+"/d)}b"+g+"*=d}");s.push("return new "+n+"(this.data,"+o.map((function(t){return"a"+t})).join(",")+","+o.map((function(t){return"b"+t})).join(",")+",c)}");var m=new Array(e),v=new Array(e);for(g=0;g<e;++g)m[g]="a[i"+g+"]",v[g]="b[i"+g+"]";for(s.push("proto.transpose=function "+n+"_transpose("+h+"){"+h.map((function(t,e){return t+"=("+t+"===undefined?"+e+":"+t+"|0)"})).join(";"),"var a=this.shape,b=this.stride;return new "+n+"(this.data,"+m.join(",")+","+v.join(",")+",this.offset)}"),s.push("proto.pick=function "+n+"_pick("+h+"){var a=[],b=[],c=this.offset"),g=0;g<e;++g)s.push("if(typeof i"+g+"==='number'&&i"+g+">=0){c=(c+this.stride["+g+"]*i"+g+")|0}else{a.push(this.shape["+g+"]);b.push(this.stride["+g+"])}");return s.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),s.push("return function construct_"+n+"(data,shape,stride,offset){return new "+n+"(data,"+o.map((function(t){return"shape["+t+"]"})).join(",")+","+o.map((function(t){return"stride["+t+"]"})).join(",")+",offset)}"),new Function("CTOR_LIST","ORDER",s.join("\n"))(u[t],a)}var u={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};t.exports=function(t,e,n,i){if(void 0===t)return(0,u.array[0])([]);"number"==typeof t&&(t=[t]),void 0===e&&(e=[t.length]);var o=e.length;if(void 0===n){n=new Array(o);for(var a=o-1,c=1;a>=0;--a)n[a]=c,c*=e[a]}if(void 0===i)for(i=0,a=0;a<o;++a)n[a]<0&&(i-=(e[a]-1)*n[a]);for(var f=function(t){if(r(t))return"buffer";if(s)switch(Object.prototype.toString.call(t)){case"[object Float64Array]":return"float64";case"[object Float32Array]":return"float32";case"[object Int8Array]":return"int8";case"[object Int16Array]":return"int16";case"[object Int32Array]":return"int32";case"[object Uint8Array]":return"uint8";case"[object Uint16Array]":return"uint16";case"[object Uint32Array]":return"uint32";case"[object Uint8ClampedArray]":return"uint8_clamped";case"[object BigInt64Array]":return"bigint64";case"[object BigUint64Array]":return"biguint64"}return Array.isArray(t)?"array":"generic"}(t),p=u[f];p.length<=o+1;)p.push(h(f,p.length-1));return(0,p[o+1])(t,e,n,i)}}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,n),s.exports}n.amdD=function(){throw new Error("define cannot be used indirect")},n.amdO={},(()=>{"use strict";const t=e;function e(t,e,n){n=n||{},this.w=t||64,this.h=e||64,this.autoResize=!!n.autoResize,this.shelves=[],this.freebins=[],this.stats={},this.bins={},this.maxId=0}function i(t,e,n){this.x=0,this.y=t,this.w=this.free=e,this.h=n}function r(t,e,n,i,r,s,o){this.id=t,this.x=e,this.y=n,this.w=i,this.h=r,this.maxw=s||i,this.maxh=o||r,this.refcount=0}function s(t,e){return 1*(fxrand()*(e-t)+t).toFixed(0)}e.prototype.pack=function(t,e){t=[].concat(t),e=e||{};for(var n,i,r,s,o=[],a=0;a<t.length;a++)if(n=t[a].w||t[a].width,i=t[a].h||t[a].height,r=t[a].id,n&&i){if(!(s=this.packOne(n,i,r)))continue;e.inPlace&&(t[a].x=s.x,t[a].y=s.y,t[a].id=s.id),o.push(s)}return this.shrink(),o},e.prototype.packOne=function(t,e,n){var r,s,o,a,h,u,c,f,p={freebin:-1,shelf:-1,waste:1/0},l=0;if("string"==typeof n||"number"==typeof n){if(r=this.getBin(n))return this.ref(r),r;"number"==typeof n&&(this.maxId=Math.max(n,this.maxId))}else n=++this.maxId;for(a=0;a<this.freebins.length;a++){if(e===(r=this.freebins[a]).maxh&&t===r.maxw)return this.allocFreebin(a,t,e,n);e>r.maxh||t>r.maxw||e<=r.maxh&&t<=r.maxw&&(o=r.maxw*r.maxh-t*e)<p.waste&&(p.waste=o,p.freebin=a)}for(a=0;a<this.shelves.length;a++)if(l+=(s=this.shelves[a]).h,!(t>s.free)){if(e===s.h)return this.allocShelf(a,t,e,n);e>s.h||e<s.h&&(o=(s.h-e)*t)<p.waste&&(p.freebin=-1,p.waste=o,p.shelf=a)}return-1!==p.freebin?this.allocFreebin(p.freebin,t,e,n):-1!==p.shelf?this.allocShelf(p.shelf,t,e,n):e<=this.h-l&&t<=this.w?(s=new i(l,this.w,e),this.allocShelf(this.shelves.push(s)-1,t,e,n)):this.autoResize?(h=u=this.h,((c=f=this.w)<=h||t>c)&&(f=2*Math.max(t,c)),(h<c||e>h)&&(u=2*Math.max(e,h)),this.resize(f,u),this.packOne(t,e,n)):null},e.prototype.allocFreebin=function(t,e,n,i){var r=this.freebins.splice(t,1)[0];return r.id=i,r.w=e,r.h=n,r.refcount=0,this.bins[i]=r,this.ref(r),r},e.prototype.allocShelf=function(t,e,n,i){var r=this.shelves[t].alloc(e,n,i);return this.bins[i]=r,this.ref(r),r},e.prototype.shrink=function(){if(this.shelves.length>0){for(var t=0,e=0,n=0;n<this.shelves.length;n++){var i=this.shelves[n];e+=i.h,t=Math.max(i.w-i.free,t)}this.resize(t,e)}},e.prototype.getBin=function(t){return this.bins[t]},e.prototype.ref=function(t){if(1==++t.refcount){var e=t.h;this.stats[e]=1+(0|this.stats[e])}return t.refcount},e.prototype.unref=function(t){return 0===t.refcount?0:(0==--t.refcount&&(this.stats[t.h]--,delete this.bins[t.id],this.freebins.push(t)),t.refcount)},e.prototype.clear=function(){this.shelves=[],this.freebins=[],this.stats={},this.bins={},this.maxId=0},e.prototype.resize=function(t,e){this.w=t,this.h=e;for(var n=0;n<this.shelves.length;n++)this.shelves[n].resize(t);return!0},i.prototype.alloc=function(t,e,n){if(t>this.free||e>this.h)return null;var i=this.x;return this.x+=t,this.free-=t,new r(n,i,this.y,t,e,t,this.h)},i.prototype.resize=function(t){return this.free+=t-this.w,this.w=t,!0},n(390);var o=[];function a(t,e,n){for(var i=t.shape[0],r=t.shape[1],s=0;s<i;s++){for(var a=t.pick(s,null,null),h=null,u=null,c=0;c<r;c++){var f=e(a.get(c,0),a.get(c,1),a.get(c,2));if(null===h)f&&(h=c);else if(!f){u=c;break}}if(null!==h){null===u&&(u=r-1),c=u+1,o.length=0;for(var p=h;p<=u;p++)(d=[])[0]=a.get(p,0),d[1]=a.get(p,1),d[2]=a.get(p,2),o.push(d);o=o.sort(n),p=h;for(var l=0;p<=u;p++){var d=o[l++];a.set(p,0,d[0]),a.set(p,1,d[1]),a.set(p,2,d[2])}}}}const h=n(898),u=n(861),c=s(2,5),f=(p=[32,32,64,64,128])[s(0,p.length-1)];var p;document.addEventListener("DOMContentLoaded",(function(){new l}));class l{constructor(){console.log("*----------------------------------------------------------*"),console.log("* Terraforming Topography - By @jonnyscholes - 2022 *"),console.log("*----------------------------------------------------------*"),this.width=1024,this.height=576,this.delay=400,this.imageCount=c,this.quadrantSizes=[32,64,128,256],this.unitSize=f,this.xUnits=this.width/this.unitSize,this.yUnits=this.height/this.unitSize,this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,this.ctx=this.canvas.getContext("2d"),this.images=null,this.boxes=[],this.lastRender=0,this.paused=!1,this.init()}async init(){this.addCanvas(),this.createBoxes(),this.images=await this.loadImages(),this.paintRects(),this.animate()}async loadImages(){const t=[1,2,3,4,5];!function(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(fxrand()*(e+1));[t[e],t[n]]=[t[n],t[e]]}}(t);const e=["light","dark","light","dark","light"],n=t.slice(0,this.imageCount).map(((t,n)=>{return i=t,r=e[n],s=this.width,o=this.height,new Promise(((t,e)=>{const n=document.createElement("canvas");n.width=s,n.height=o;const a=n.getContext("2d"),h=new Image;h.crossOrigin="anonymous",h.onload=function(){a.drawImage(h,0,0,n.width+2,n.height+2),t(n)},h.src=`./images/${r}/${i}.jpg`}));var i,r,s,o}));return Promise.all(n)}pixelSort(t,e,n,i){var r=this.ctx.getImageData(t,e,n,i);const o=u(new Uint8Array(r.data),[n,i,4],[4,4*n,1],0),c=[(t,e)=>t[0]-e[0],(t,e)=>t[1]-e[1],(t,e)=>t[2]-e[2]];var f,p,l;f=o,p=t=>!0,l=c[s(0,c.length-1)],a(f.transpose(1,0,2),p,l),a(f.transpose(0,1,2),p,l);const d=h(null,o.transpose(1,0,2).pick(null,null,0),o.transpose(1,0,2).pick(null,null,1),o.transpose(1,0,2).pick(null,null,2));this.ctx.drawImage(d,t,e,n,i)}createBoxes(){for(let t=8;t>=0;t--)this.boxes.push({w:256,h:256});for(let t=25;t>=0;t--)this.boxes.push({w:128,h:128});for(let t=100*fxrand();t>=0;t--)this.boxes.push({w:64,h:64});for(let t=100*fxrand();t>=0;t--)this.boxes.push({w:32,h:32});for(let t=100*fxrand();t>=0;t--)this.boxes.push({w:16,h:16});this.boxes=this.boxes.map((t=>({value:t,sort:Math.random()}))).sort(((t,e)=>t.sort-e.sort)).map((({value:t})=>t));const e=new t(this.width,this.height);this.boxes=e.pack(this.boxes)}addCanvas(){document.body.appendChild(this.canvas)}paintRects(){this.ctx.strokeStyle="black";const t=s(0,this.images.length-1);this.ctx.drawImage(this.images[t],0,0,this.width,this.height,0,0,this.width,this.height);for(const t of this.boxes)this.paintRect(t)}paintRect(t){const e=s(0,this.images.length-1);this.ctx.drawImage(this.images[e],s(0,this.width-t.w),s(0,this.height-t.h),t.w,t.h,t.x,t.y,t.w,t.h)}animate(t){this.lastRender&&!(t-this.lastRender>=this.delay)||this.paused||(this.lastRender=t,this.render()),requestAnimationFrame(this.animate.bind(this))}render(){const t=s(0,this.xUnits-1),e=s(0,this.yUnits-1),n=Math.min(this.xUnits-t,this.yUnits-e)*this.unitSize,i=this.quadrantSizes.filter((t=>t<=n)).reduce(((t,e)=>Math.abs(e-n)<Math.abs(t-n)?e:t));this.pixelSort(t*this.unitSize,e*this.unitSize,i,i),fxrand()>.96&&this.pixelSort(0,0,i,i),fxrand()>.5&&this.paintRect(this.boxes[s(0,this.boxes.length-1)])}}})()})();