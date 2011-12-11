(function(c){if(!Modernizr.genericDOM){var g=document,i,l,o=/<([\w:]+)/,k={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};c.webshims.fixHTML5=function(c){if(typeof c!="string"||k[(o.exec(c)||["",""])[1].toLowerCase()])return c;if(!l){i=g.body;if(!i)return c;l=g.createElement("div");l.style.display="none"}var j=l.cloneNode(!1);i.appendChild(j);j.innerHTML=c;i.removeChild(j);return j.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(c,g,i,l,o){var k=g.modules,n=/\s*,\s*/,j={},A={},s={},x={},h={},z=c.fn.val,B=function(e,a,b,d,f){return f?z.call(c(e)):z.call(c(e),b)};c.fn.val=function(e){var a=this[0];arguments.length&&e==null&&(e="");if(!arguments.length)return!a||a.nodeType!==1?z.call(this):c.prop(a,"value",e,"val",!0);if(c.isArray(e))return z.apply(this,arguments);var b=c.isFunction(e);return this.each(function(d){a=this;a.nodeType===1&&(b?(d=e.call(a,d,c.prop(a,"value",o,"val",
!0)),d==null&&(d=""),c.prop(a,"value",d,"val")):c.prop(a,"value",e,"val"))})};var v="_webshimsLib"+Math.round(Math.random()*1E3),p=function(e,a,b){e=e.jquery?e[0]:e;if(!e)return b||{};var d=c.data(e,v);b!==o&&(d||(d=c.data(e,v,{})),a&&(d[a]=b));return a?d&&d[a]:d};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(e){c.fn[e.name]=function(){return this.map(function(){var a=p(this,
"shadowData");return a&&a[e.prop]||this})}});["removeAttr","prop","attr"].forEach(function(e){j[e]=c[e];c[e]=function(a,b,d,f,t){var g=f=="val",n=!g?j[e]:B;if(!a||!A[b]||a.nodeType!==1||!g&&f&&e=="attr"&&c.attrFn[b])return n(a,b,d,f,t);var E=(a.nodeName||"").toLowerCase(),y=s[E],C=e=="attr"&&(d===!1||d===null)?"removeAttr":e,k,l,m;y||(y=s["*"]);y&&(y=y[b]);y&&(k=y[C]);if(k){if(b=="value")l=k.isVal,k.isVal=g;if(C==="removeAttr")return k.value.call(a);else if(d===o)return k.get?k.get.call(a):k.value;
else k.set&&(e=="attr"&&d===!0&&(d=b),m=k.set.call(a,d));if(b=="value")k.isVal=l}else m=n(a,b,d,f,t);if((d!==o||C==="removeAttr")&&h[E]&&h[E][b]){var i;i=C=="removeAttr"?!1:C=="prop"?!!d:!0;h[E][b].forEach(function(b){if(!b.only||(b.only=e=="prop")||b.only=="attr"&&e!="prop")b.call(a,d,i,g?"val":C,e)})}return m};x[e]=function(a,b,d){s[a]||(s[a]={});s[a][b]||(s[a][b]={});var f=s[a][b][e],t=function(a,c,f){return c&&c[a]?c[a]:f&&f[a]?f[a]:e=="prop"&&b=="value"?function(a){return d.isVal?B(this,b,a,
!1,arguments.length===0):j[e](this,b,a)}:e=="prop"&&a=="value"&&d.value.apply?function(a){var d=j[e](this,b);d&&d.apply&&(d=d.apply(this,arguments));return d}:function(a){return j[e](this,b,a)}};s[a][b][e]=d;if(d.value===o){if(!d.set)d.set=d.writeable?t("set",d,f):g.cfg.useStrict&&b=="prop"?function(){throw b+" is readonly on "+a;}:c.noop;if(!d.get)d.get=t("get",d,f)}["value","get","set"].forEach(function(a){d[a]&&(d["_sup"+a]=t(a,f))})}});var u=!c.browser.msie||parseInt(c.browser.version,10)>8,m=
function(){var c=g.getPrototypeOf(l.createElement("foobar")),a=Object.prototype.hasOwnProperty;return function(b,d,f){var t=l.createElement(b),n=g.getPrototypeOf(t);if(u&&n&&c!==n&&(!t[d]||!a.call(t,d))){var j=t[d];f._supvalue=function(){return j&&j.apply?j.apply(this,arguments):j};n[d]=f.value}else f._supvalue=function(){var a=p(this,"propValue");return a&&a[d]&&a[d].apply?a[d].apply(this,arguments):a&&a[d]},r.extendValue(b,d,f.value);f.value._supvalue=f._supvalue}}(),r=function(){var e={};g.addReady(function(a,
b){var d={},n=function(e){d[e]||(d[e]=c(a.getElementsByTagName(e)),b[0]&&c.nodeName(b[0],e)&&(d[e]=d[e].add(b)))};c.each(e,function(a,b){n(a);!b||!b.forEach?g.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){d[a].each(b)})});d=null});var a,b=c([]),d=function(b,d){e[b]?e[b].push(d):e[b]=[d];c.isDOMReady&&(a||c(l.getElementsByTagName(b))).each(d)};return{createTmpCache:function(d){c.isDOMReady&&(a=a||c(l.getElementsByTagName(d)));return a||b},flushTmpCache:function(){a=null},content:function(a,
b){d(a,function(){c(this).filter("["+b+"]").attr(b,function(a,b){return b})})},createElement:function(a,b){d(a,b)},extendValue:function(a,b,e){d(a,function(){c(this).each(function(){p(this,"propValue",{})[b]=this[b];this[b]=e})})}}}(),D=function(c,a){if(c.defaultValue===o)c.defaultValue="";if(!c.removeAttr)c.removeAttr={value:function(){c[a||"prop"].set.call(this,c.defaultValue);c.removeAttr._supvalue.call(this)}}};c.extend(g,{getID:function(){var e=(new Date).getTime();return function(a){var a=c(a),
b=a.attr("id");b||(e++,b="ID-"+e,a.attr("id",b));return b}}(),extendUNDEFProp:function(e,a){c.each(a,function(a,d){a in e||(e[a]=d)})},createPropDefault:D,data:p,moveToFirstEvent:function(){var e=c._data?"_data":"data";return function(a,b,d){if((a=(c[e](a,"events")||{})[b])&&a.length>1)b=a.pop(),d||(d="bind"),d=="bind"&&a.delegateCount?a.splice(a.delegateCount,0,b):a.unshift(b)}}(),addShadowDom:function(e,a,b){b=b||{};e.jquery&&(e=e[0]);a.jquery&&(a=a[0]);if(!b.shadowFocusElement)b.shadowFocusElement=
a;var d=c.data(e,v)||c.data(e,v,{}),f=c.data(a,v)||c.data(a,v,{});d.hasShadow=a;f.nativeElement=e;f.shadowData=d.shadowData={nativeElement:e,shadowElement:a,shadowFocusElement:b.shadowFocusElement};b.shadowChilds&&b.shadowChilds.each(function(){p(this,"shadowData",f.shadowData)});if(b.data)d.shadowData.data=b.data,f.shadowData.data=b.data;b=null},propTypes:{standard:function(c){D(c);if(!c.prop)c.prop={set:function(a){c.attr.set.call(this,""+a)},get:function(){return c.attr.get.call(this)||c.defaultValue}}},
"boolean":function(c){D(c);if(!c.prop)c.prop={set:function(a){a?c.attr.set.call(this,""):c.removeAttr.value.call(this)},get:function(){return c.attr.get.call(this)!=null}}}},reflectProperties:function(e,a){typeof a=="string"&&(a=a.split(n));a.forEach(function(a){g.defineNodeNamesProperty(e,a,{prop:{set:function(d){c.attr(this,a,d)},get:function(){return c.attr(this,a)||""}}})})},defineNodeNameProperty:function(e,a,b){A[a]=!0;if(b.reflect)g.propTypes[b.propType||"standard"](b);["prop","attr","removeAttr"].forEach(function(d){var f=
b[d];f&&(f=d==="prop"?c.extend({writeable:!0},f):c.extend({},f,{writeable:!0}),x[d](e,a,f),e!="*"&&g.cfg.extendNative&&d=="prop"&&f.value&&c.isFunction(f.value)&&m(e,a,f),b[d]=f)});b.initAttr&&r.content(e,a);return b},defineNodeNameProperties:function(c,a,b,d){for(var f in a)!d&&a[f].initAttr&&r.createTmpCache(c),b&&(a[f][b]?g.log("override: "+c+"["+f+"] for "+b):(a[f][b]={},["value","set","get"].forEach(function(c){c in a[f]&&(a[f][b][c]=a[f][c],delete a[f][c])}))),a[f]=g.defineNodeNameProperty(c,
f,a[f]);d||r.flushTmpCache();return a},createElement:function(e,a,b){var d;c.isFunction(a)&&(a={after:a});r.createTmpCache(e);a.before&&r.createElement(e,a.before);b&&(d=g.defineNodeNameProperties(e,b,!1,!0));a.after&&r.createElement(e,a.after);r.flushTmpCache();return d},onNodeNamesPropertyModify:function(e,a,b,d){typeof e=="string"&&(e=e.split(n));c.isFunction(b)&&(b={set:b});e.forEach(function(c){h[c]||(h[c]={});typeof a=="string"&&(a=a.split(n));b.initAttr&&r.createTmpCache(c);a.forEach(function(a){h[c][a]||
(h[c][a]=[],A[a]=!0);if(b.set){if(d)b.set.only=d;h[c][a].push(b.set)}b.initAttr&&r.content(c,a)});r.flushTmpCache()})},defineNodeNamesBooleanProperty:function(e,a,b){b||(b={});if(c.isFunction(b))b.set=b;g.defineNodeNamesProperty(e,a,{attr:{set:function(c){this.setAttribute(a,c);b.set&&b.set.call(this,!0)},get:function(){return this.getAttribute(a)==null?o:a}},removeAttr:{value:function(){this.removeAttribute(a);b.set&&b.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:b.initAttr||!1})},
contentAttr:function(c,a,b){if(c.nodeName){if(b===o)return b=(c.attributes[a]||{}).value,b==null?o:b;typeof b=="boolean"?b?c.setAttribute(a,a):c.removeAttribute(a):c.setAttribute(a,b)}},activeLang:function(){var e=[],a={},b,d,f=/:\/\/|^\.*\//,n=function(a,b,d){return b&&d&&c.inArray(b,d.availabeLangs||[])!==-1?(a.loading=!0,d=d.langSrc,f.test(d)||(d=g.cfg.basePath+d),g.loader.loadScript(d+b+".js",function(){a.langObj[b]?(a.loading=!1,h(a,!0)):c(function(){a.langObj[b]&&h(a,!0);a.loading=!1})}),!0):
!1},j=function(b){a[b]&&a[b].forEach(function(a){a.callback()})},h=function(a,c){if(a.activeLang!=b&&a.activeLang!==d){var e=k[a.module].options;if(a.langObj[b]||d&&a.langObj[d])a.activeLang=b,a.callback(a.langObj[b]||a.langObj[d],b),j(a.module);else if(!c&&!n(a,b,e)&&!n(a,d,e)&&a.langObj[""]&&a.activeLang!=="")a.activeLang="",a.callback(a.langObj[""],b),j(a.module)}};return function(f){if(typeof f=="string"&&f!==b)b=f,d=b.split("-")[0],b==d&&(d=!1),c.each(e,function(a,b){h(b)});else if(typeof f==
"object")if(f.register)a[f.register]||(a[f.register]=[]),a[f.register].push(f),f.callback();else{if(!f.activeLang)f.activeLang="";e.push(f);h(f)}return b}}()});c.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(c,a){g[c]=function(b,c,f,e){typeof b=="string"&&(b=b.split(n));var j={};b.forEach(function(b){j[b]=g[a](b,c,f,e)});return j}});g.isReady("webshimLocalization",!0)});
(function(c,g){var i=c.webshims.browserVersion;if(!(c.browser.mozilla&&i>5)&&(!c.browser.msie||i<12&&i>7)){var l={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},o=function(c,g){c.getAttribute("role")||c.setAttribute("role",g)};c.webshims.addReady(function(k,n){c.each(l,function(g,j){for(var l=c(g,k).add(n.filter(g)),i=0,s=l.length;i<s;i++)o(l[i],j)});if(k===g){var j=g.getElementsByTagName("header")[0],i=g.getElementsByTagName("footer"),s=i.length;
j&&!c(j).closest("section, article")[0]&&o(j,"banner");s&&(j=i[s-1],c(j).closest("section, article")[0]||o(j,"contentinfo"))}})}})(jQuery,document);
(function(c,g,i){var l=g.audio&&g.video,o=!1;if(l){var k=document.createElement("video");g.videoBuffered="buffered"in k;o="loop"in k;i.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));g.videoBuffered||(i.addPolyfill("mediaelement-native-fix",{feature:"mediaelement",test:g.videoBuffered,dependencies:["dom-support"]}),i.reTest("mediaelement-native-fix"))}c.webshims.ready("dom-support swfobject",function(c,g,k,i,x){var h=g.mediaelement,
z=g.cfg.mediaelement,B=function(a,b){var a=c(a),d={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!d.src)return d;var f=a.attr("type");if(f)d.type=f,d.container=c.trim(f.split(";")[0]);else if(b||(b=a[0].nodeName.toLowerCase(),b=="source"&&(b=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),f=h.getTypeForSrc(d.src,b))d.type=f,d.container=f,g.warn("you should always provide a proper mime-type using the source element. "+d.src+" detected as: "+f),c.nodeName(a[0],"source")&&
a.attr("type",f);if(f=a.attr("media"))d.media=f;return d},v=swfobject.hasFlashPlayerVersion("9.0.115"),p=function(){g.ready("mediaelement-swf",function(){if(!h.createSWF)g.modules["mediaelement-swf"].test=c.noop,g.reTest(["mediaelement-swf"],l)})};v&&g.ready("WINDOWLOAD",p);h.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv",
"f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};h.mimeTypes.source=c.extend({},h.mimeTypes.audio,h.mimeTypes.video);h.getTypeForSrc=function(a,b){if(a.indexOf("youtube.com/watch?")!=
-1)return"video/youtube";var a=a.split("?")[0].split("."),a=a[a.length-1],d;c.each(h.mimeTypes[b],function(b,c){if(c.indexOf(a)!==-1)return d=b,!1});return d};h.srces=function(a,b){a=c(a);if(b)a.removeAttr("src").removeAttr("type").find("source").remove(),c.isArray(b)||(b=[b]),b.forEach(function(b){var c=i.createElement("source");typeof b=="string"&&(b={src:b});c.setAttribute("src",b.src);b.type&&c.setAttribute("type",b.type);b.media&&c.setAttribute("media",b.media);a.append(c)});else{var b=[],d=
a[0].nodeName.toLowerCase(),f=B(a,d);f.src?b.push(f):c("source",a).each(function(){f=B(this,d);f.src&&b.push(f)});return b}};c.fn.loadMediaSrc=function(a,b){return this.each(function(){b!==x&&(c(this).removeAttr("poster"),b&&c.attr(this,"poster",b));h.srces(this,a);c(this).mediaLoad()})};h.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
h.canSwfPlaySrces=function(a,b){var d="";v&&(a=c(a),b=b||h.srces(a),c.each(b,function(a,b){if(b.container&&b.src&&h.swfMimeTypes.indexOf(b.container)!=-1)return d=b,!1}));return d};var u={};h.canNativePlaySrces=function(a,b){var d="";if(l){var a=c(a),f=(a[0].nodeName||"").toLowerCase();if(!u[f])return d;b=b||h.srces(a);c.each(b,function(b,c){if(c.type&&u[f].prop._supvalue.call(a[0],c.type))return d=c,!1})}return d};h.setError=function(a,b){b||(b="can't play sources");c(a).pause().data("mediaerror",
b);g.warn("mediaelementError: "+b);setTimeout(function(){c(a).data("mediaerror")&&c(a).trigger("mediaerror")},1)};var m=function(){var a;return function(b,c,f){g.ready("mediaelement-swf",function(){h.createSWF?h.createSWF(b,c,f):a||(a=!0,p(),m(b,c,f))})}}(),r=function(a,b,c,f,e){c||c!==!1&&b&&b.isActive=="flash"?(c=h.canSwfPlaySrces(a,f))?m(a,c,b):e?h.setError(a,!1):r(a,b,!1,f,!0):(c=h.canNativePlaySrces(a,f))?b&&b.isActive=="flash"&&h.setActive(a,"html5",b):e?(h.setError(a,!1),b&&b.isActive=="flash"&&
h.setActive(a,"html5",b)):r(a,b,!0,f,!0)},D=/^(?:embed|object)$/i,e=function(a,b){var d=g.data(a,"mediaelementBase")||g.data(a,"mediaelementBase",{}),f=h.srces(a),e=a.parentNode;clearTimeout(d.loadTimer);c.data(a,"mediaerror",!1);if(f.length&&e&&!D.test(e.nodeName||""))b=b||g.data(a,"mediaelement"),r(a,b,z.preferFlash||x,f)};c(i).bind("ended",function(a){var b=g.data(a.target,"mediaelement");(!o||b&&b.isActive!="html5"||c.prop(a.target,"loop"))&&setTimeout(function(){!c.prop(a.target,"paused")&&c.prop(a.target,
"loop")&&c(a.target).prop("currentTime",0).play()},1)});o||g.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(a){var b=g.defineNodeNameProperty(a,"load",{prop:{value:function(){var a=g.data(this,"mediaelement");e(this,a);l&&(!a||a.isActive=="html5")&&b.prop._supvalue&&b.prop._supvalue.apply(this,arguments)}}});u[a]=g.defineNodeNameProperty(a,"canPlayType",{prop:{value:function(b){var e="";l&&u[a].prop._supvalue&&(e=u[a].prop._supvalue.call(this,b),e=="no"&&
(e=""));!e&&v&&(b=c.trim((b||"").split(";")[0]),h.swfMimeTypes.indexOf(b)!=-1&&(e="maybe"));return e}}})});g.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=g.data(a,"mediaelementBase")||g.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){e(a);a=null},9)}});g.addReady(function(a,b){c("video, audio",a).add(b.filter("video, audio")).each(function(){c.browser.msie&&g.browserVersion>8&&c.prop(this,"paused")&&!c.prop(this,
"readyState")&&c(this).is('audio[preload="none"][controls]:not([autoplay])')?c(this).prop("preload","metadata").mediaLoad():e(this);if(l){var a,b,h=this,k=function(){var a=c.prop(h,"buffered");if(a){for(var b="",d=0,e=a.length;d<e;d++)b+=a.end(d);return b}},i=function(){var a=k();a!=b&&(b=a,c(h).triggerHandler("progress"))};c(this).bind("play loadstart progress",function(c){c.type=="progress"&&(b=k());clearTimeout(a);a=setTimeout(i,999)}).bind("emptied stalled mediaerror abort suspend",function(c){c.type==
"emptied"&&(b=!1);clearTimeout(a)})}})});g.isReady("mediaelement-core",!0)})})(jQuery,Modernizr,jQuery.webshims);
jQuery.webshims.register("mediaelement-swf",function(c,g,i,l,o,k){var n=g.mediaelement,j=i.swfobject,A=Modernizr.audio&&Modernizr.video,s=j.hasFlashPlayerVersion("9.0.115"),x=0,i={paused:!0,ended:!1,currentSrc:"",duration:i.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(a){if(a)g.error("buffered index size error");else return 0},end:function(a){if(a)g.error("buffered index size error");else return 0},length:0}},h=Object.keys(i),z={currentTime:0,volume:1,
muted:!1};Object.keys(z);var B=c.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,_durationCalcs:-1,_callMeta:!1,currentTime:0,_ppFlag:o},i,z),v=/^jwplayer-/,p=function(a){if(a=l.getElementById(a.replace(v,"")))return a=g.data(a,"mediaelement"),a.isActive=="flash"?a:null},u=function(a){return(a=g.data(a,"mediaelement"))&&a.isActive=="flash"?a:null},m=function(a,b){b=c.Event(b);b.preventDefault();c.event.trigger(b,o,a)},r=k.playerPath||g.cfg.basePath+
"jwplayer/"+(k.playerName||"player.swf"),D=k.pluginPath||g.cfg.basePath+"swf/jwwebshims.swf";g.extendUNDEFProp(k.jwParams,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent"});g.extendUNDEFProp(k.jwVars,{screencolor:"ffffffff"});g.extendUNDEFProp(k.jwAttrs,{bgcolor:"#000000"});var e=function(a,b){var d=a.duration;if(!(d&&a._durationCalcs>0)){try{if(a.duration=a.jwapi.getPlaylist()[0].duration,!a.duration||a.duration<=0||a.duration===a._lastDuration)a.duration=d}catch(e){}a.duration&&
a.duration!=a._lastDuration?(m(a._elem,"durationchange"),(a._elemNodeName=="audio"||a._callMeta)&&n.jwEvents.Model.META(c.extend({duration:a.duration},b),a),a._durationCalcs--):a._durationCalcs++}},a=function(b,c){b<3&&clearTimeout(c._canplaythroughTimer);if(b>=3&&c.readyState<3)c.readyState=b,m(c._elem,"canplay"),clearTimeout(c._canplaythroughTimer),c._canplaythroughTimer=setTimeout(function(){a(4,c)},4E3);if(b>=4&&c.readyState<4)c.readyState=b,m(c._elem,"canplaythrough");c.readyState=b};n.jwEvents=
{View:{PLAY:function(a){var b=p(a.id);if(b&&!b.stopPlayPause&&(b._ppFlag=!0,b.paused==a.state)){b.paused=!a.state;if(b.ended)b.ended=!1;m(b._elem,a.state?"play":"pause")}}},Model:{BUFFER:function(b){var q=p(b.id);if(q&&"percentage"in b&&q._bufferedEnd!=b.percentage){q.networkState=b.percentage==100?1:2;(isNaN(q.duration)||b.percentage>5&&b.percentage<25||b.percentage===100)&&e(q,b);if(q.ended)q.ended=!1;if(q.duration){b.percentage>2&&b.percentage<20?a(3,q):b.percentage>20&&a(4,q);if(q._bufferedEnd&&
q._bufferedEnd>b.percentage)q._bufferedStart=q.currentTime||0;q._bufferedEnd=b.percentage;q.buffered.length=1;if(b.percentage==100)q.networkState=1,a(4,q);c.event.trigger("progress",o,q._elem,!0)}}},META:function(b,c){if(c=c&&c.networkState?c:p(b.id))if("duration"in b){if(!c._metadata||!((!b.height||c.videoHeight==b.height)&&b.duration===c.duration)){c._metadata=!0;var d=c.duration;if(b.duration)c.duration=b.duration;c._lastDuration=c.duration;if(b.height||b.width)c.videoHeight=b.height||0,c.videoWidth=
b.width||0;if(!c.networkState)c.networkState=2;c.readyState<1&&a(1,c);c.duration&&d!==c.duration&&m(c._elem,"durationchange");m(c._elem,"loadedmetadata")}}else c._callMeta=!0},TIME:function(b){var c=p(b.id);if(c&&c.currentTime!==b.position){c.currentTime=b.position;c.duration&&c.duration<c.currentTime&&e(c,b);c.readyState<2&&a(2,c);if(c.ended)c.ended=!1;m(c._elem,"timeupdate")}},STATE:function(b){var c=p(b.id);if(c)switch(b.newstate){case "BUFFERING":if(c.ended)c.ended=!1;a(1,c);m(c._elem,"waiting");
break;case "PLAYING":c.paused=!1;c._ppFlag=!0;c.duration||e(c,b);c.readyState<3&&a(3,c);if(c.ended)c.ended=!1;m(c._elem,"playing");break;case "PAUSED":if(!c.paused&&!c.stopPlayPause)c.paused=!0,c._ppFlag=!0,m(c._elem,"pause");break;case "COMPLETED":c.readyState<4&&a(4,c),c.ended=!0,m(c._elem,"ended")}}},Controller:{ERROR:function(a){var c=p(a.id);c&&n.setError(c._elem,a.message)},SEEK:function(a){var c=p(a.id);if(c){if(c.ended)c.ended=!1;if(c.paused)try{c.jwapi.sendEvent("play","false")}catch(b){}if(c.currentTime!=
a.position)c.currentTime=a.position,m(c._elem,"timeupdate")}},VOLUME:function(a){var c=p(a.id);if(c&&(a=a.percentage/100,c.volume!=a))c.volume=a,m(c._elem,"volumechange")},MUTE:function(a){if(!a.state){var c=p(a.id);if(c&&c.muted!=a.state)c.muted=a.state,m(c._elem,"volumechange")}}}};var b=function(a){c.each(n.jwEvents,function(b,d){c.each(d,function(c){a.jwapi["add"+b+"Listener"](c,"jQuery.webshims.mediaelement.jwEvents."+b+"."+c)})})},d=function(a){a&&(a._ppFlag===o&&c.prop(a._elem,"autoplay")||
!a.paused)&&setTimeout(function(){if(a.isActive=="flash"&&(a._ppFlag===o||!a.paused))try{c(a._elem).play()}catch(b){}},1)},f=function(a){if(a&&a._elemNodeName=="video"){var b,d,e,g,f,w,h,k,i=function(i,j){if(j&&i&&!(j<1||i<1||a.isActive!="flash"))if(b&&(b.remove(),b=!1),g=i,f=j,clearTimeout(h),d=a._elem.style.width=="auto",e=a._elem.style.height=="auto",d||e){w=w||c(a._elem).getShadowElement();var l;d&&!e?(l=w.height(),i*=l/j,j=l):!d&&e&&(l=w.width(),j*=l/i,i=l);k=!0;setTimeout(function(){k=!1},9);
w.css({width:i,height:j})}},j=function(){if(!(a.isActive!="flash"||c.prop(a._elem,"readyState")&&c.prop(this,"videoWidth"))){var g=c.prop(a._elem,"poster");if(g&&(d=a._elem.style.width=="auto",e=a._elem.style.height=="auto",d||e))b&&(b.remove(),b=!1),b=c('<img style="position: absolute; height: auto; width: auto; top: 0px; left: 0px; visibility: hidden;" />'),b.bind("load error alreadycomplete",function(){clearTimeout(h);var a=this,d=a.naturalWidth||a.width||a.offsetWidth,e=a.naturalHeight||a.height||
a.offsetHeight;e&&d?(i(d,e),a=null):setTimeout(function(){d=a.naturalWidth||a.width||a.offsetWidth;e=a.naturalHeight||a.height||a.offsetHeight;i(d,e);b&&(b.remove(),b=!1);a=null},9);c(this).unbind()}).prop("src",g).appendTo("body").each(function(){this.complete||this.error?c(this).triggerHandler("alreadycomplete"):(clearTimeout(h),h=setTimeout(function(){c(a._elem).triggerHandler("error")},9999))})}};c(a._elem).bind("loadedmetadata",function(){i(c.prop(this,"videoWidth"),c.prop(this,"videoHeight"))}).bind("emptied",
j).bind("swfstageresize",function(){k||i(g,f)}).bind("emptied",function(){g=void 0;f=void 0}).triggerHandler("swfstageresize");j();c.prop(a._elem,"readyState")&&i(c.prop(a._elem,"videoWidth"),c.prop(a._elem,"videoHeight"))}};n.playerResize=function(a){a&&(a=l.getElementById(a.replace(v,"")))&&c(a).triggerHandler("swfstageresize")};c(l).bind("emptied",function(a){a=u(a.target);d(a)});var t;n.jwPlayerReady=function(a){var e=p(a.id);if(e&&e.jwapi){clearTimeout(t);e.jwData=a;e.shadowElem.removeClass("flashblocker-assumed");
e.wasSwfReady?c(e._elem).mediaLoad():(a=parseFloat(a.version,10),(a<5.6||a>=6)&&g.warn("mediaelement-swf is only testet with jwplayer 5.6+"),c.prop(e._elem,"volume",e.volume),c.prop(e._elem,"muted",e.muted),b(e));e.wasSwfReady=!0;var a=e.actionQueue.length,f=0,h;if(a&&e.isActive=="flash")for(;e.actionQueue.length&&a>f;)f++,h=e.actionQueue.shift(),e.jwapi[h.fn].apply(e.jwapi,h.args);if(e.actionQueue.length)e.actionQueue=[];d(e)}};var G=c.noop;if(A){var J={play:1,playing:1},E="play,pause,playing,canplay,progress,waiting,ended,loadedmetadata,durationchange,emptied".split(","),
y=E.map(function(a){return a+".webshimspolyfill"}).join(" "),C=function(a){var b=g.data(a.target,"mediaelement");b&&(a.originalEvent&&a.originalEvent.type===a.type)==(b.activating=="flash")&&(a.stopImmediatePropagation(),J[a.type]&&b.isActive!=b.activating&&c(a.target).pause())},G=function(a){c(a).unbind(y).bind(y,C);E.forEach(function(c){g.moveToFirstEvent(a,c)})};G(l)}n.setActive=function(a,b,d){d||(d=g.data(a,"mediaelement"));if(d&&d.isActive!=b){b!="html5"&&b!="flash"&&g.warn("wrong type for mediaelement activating: "+
b);var e=g.data(a,"shadowData");d.activating=b;c(a).pause();d.isActive=b;b=="flash"?(e.shadowElement=e.shadowFocusElement=d.shadowElem[0],c(a).hide().getShadowElement().show()):(c(a).show().getShadowElement().hide(),e.shadowElement=e.shadowFocusElement=!1)}};var K=function(){var c="_bufferedEnd,_bufferedStart,_metadata,_ppFlag,currentSrc,currentTime,duration,ended,networkState,paused,videoHeight,videoWidth,_callMeta,_durationCalcs".split(","),b=c.length;return function(d){if(d){var e=b,g=d.networkState;
for(a(0,d);--e;)delete d[c[e]];d.actionQueue=[];d.buffered.length=0;g&&m(d._elem,"emptied")}}}(),I=function(a,b){var d=a._elem,e=a.shadowElem;c(d)[b?"addClass":"removeClass"]("webshims-controls");a._elemNodeName=="audio"&&!b?e.css({width:0,height:0}):e.css({width:d.style.width||c(d).width(),height:d.style.height||c(d).height()})};n.createSWF=function(a,b,d){if(s){x<1?x=1:x++;var e=c.extend({},k.jwVars,{image:c.prop(a,"poster")||"",file:b.srcProp}),h=c(a).data("jwvars")||{};if(d&&d.swfCreated)n.setActive(a,
"flash",d),K(d),d.currentSrc=b.srcProp,c.extend(e,h),k.changeJW(e,a,b,d,"load"),F(a,"sendEvent",["LOAD",e]);else{var i=c.prop(a,"controls"),w="jwplayer-"+g.getID(a),l=c.extend({},k.jwParams,c(a).data("jwparams")),m=a.nodeName.toLowerCase(),o=c.extend({},k.jwAttrs,{name:w,id:w},c(a).data("jwattrs")),p=c('<div class="polyfill-'+m+' polyfill-mediaelement" id="wrapper-'+w+'"><div id="'+w+'"></div>').css({position:"relative",overflow:"hidden"}),d=g.data(a,"mediaelement",g.objectCreate(B,{actionQueue:{value:[]},
shadowElem:{value:p},_elemNodeName:{value:m},_elem:{value:a},currentSrc:{value:b.srcProp},swfCreated:{value:!0},buffered:{value:{start:function(a){if(a>=d.buffered.length)g.error("buffered index size error");else return 0},end:function(a){if(a>=d.buffered.length)g.error("buffered index size error");else return(d.duration-d._bufferedStart)*d._bufferedEnd/100+d._bufferedStart},length:0}}}));I(d,i);p.insertBefore(a);A&&c.extend(d,{volume:c.prop(a,"volume"),muted:c.prop(a,"muted")});c.extend(e,{id:w,
controlbar:i?k.jwVars.controlbar||(m=="video"?"over":"bottom"):m=="video"?"none":"bottom",icons:""+(i&&m=="video")},h,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"});e.plugins?e.plugins+=","+D:e.plugins=D;g.addShadowDom(a,p);G(a);n.setActive(a,"flash",d);k.changeJW(e,a,b,d,"embed");f(d);j.embedSWF(r,w,"100%","100%","9.0.0",!1,e,l,o,function(b){if(b.success)d.jwapi=b.ref,i||c(b.ref).attr("tabindex","-1").css("outline","none"),setTimeout(function(){if(!b.ref.parentNode&&p[0].parentNode||
b.ref.style.display=="none")p.addClass("flashblocker-assumed"),c(a).trigger("flashblocker"),g.warn("flashblocker assumed");c(b.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})},9),t||(clearTimeout(t),t=setTimeout(function(){var a=c(b.ref);a[0].offsetWidth>1&&a[0].offsetHeight>1&&location.protocol.indexOf("file:")===0?g.warn("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):
(a[0].offsetWidth<2||a[0].offsetHeight<2)&&g.info("JS-SWF connection can't be established on hidden or unconnected flash objects")},8E3))})}}else setTimeout(function(){c(a).mediaLoad()},1)};var F=function(a,b,c,d){return(d=d||u(a))?(d.jwapi&&d.jwapi[b]?d.jwapi[b].apply(d.jwapi,c||[]):(d.actionQueue.push({fn:b,args:c}),d.actionQueue.length>10&&setTimeout(function(){d.actionQueue.length>5&&d.actionQueue.shift()},99)),d):!1};["audio","video"].forEach(function(a){var b={},d,e=function(c){a=="audio"&&
(c=="videoHeight"||c=="videoWidth")||(b[c]={get:function(){var a=u(this);return a?a[c]:A&&d[c].prop._supget?d[c].prop._supget.apply(this):B[c]},writeable:!1})},f=function(a,c){e(a);delete b[a].writeable;b[a].set=c};f("volume",function(a){var b=u(this);if(b){if(a*=100,!isNaN(a)){var c=b.muted;(a<0||a>100)&&g.error("volume greater or less than allowed "+a/100);F(this,"sendEvent",["VOLUME",a],b);if(c)try{b.jwapi.sendEvent("mute","true")}catch(e){}a/=100;if(!(b.volume==a||b.isActive!="flash"))b.volume=
a,m(b._elem,"volumechange")}}else if(d.volume.prop._supset)return d.volume.prop._supset.apply(this,arguments)});f("muted",function(a){var b=u(this);if(b){if(a=!!a,F(this,"sendEvent",["mute",""+a],b),!(b.muted==a||b.isActive!="flash"))b.muted=a,m(b._elem,"volumechange")}else if(d.muted.prop._supset)return d.muted.prop._supset.apply(this,arguments)});f("currentTime",function(a){var b=u(this);if(b){if(a*=1,!isNaN(a)){if(b.paused)clearTimeout(b.stopPlayPause),b.stopPlayPause=setTimeout(function(){b.paused=
!0;b.stopPlayPause=!1},50);F(this,"sendEvent",["SEEK",""+a],b);if(b.paused){if(b.readyState>0)b.currentTime=a,m(b._elem,"timeupdate");try{b.jwapi.sendEvent("play","false")}catch(c){}}}}else if(d.currentTime.prop._supset)return d.currentTime.prop._supset.apply(this,arguments)});["play","pause"].forEach(function(a){b[a]={value:function(){var b=u(this);if(b)b.stopPlayPause&&clearTimeout(b.stopPlayPause),F(this,"sendEvent",["play",a=="play"],b),setTimeout(function(){if(b.isActive=="flash"&&(b._ppFlag=
!0,b.paused!=(a!="play")))b.paused=a!="play",m(b._elem,a)},1);else if(d[a].prop._supvalue)return d[a].prop._supvalue.apply(this,arguments)}}});h.forEach(e);g.onNodeNamesPropertyModify(a,"controls",function(b,d){var e=u(this);c(this)[d?"addClass":"removeClass"]("webshims-controls");if(e){try{F(this,d?"showControls":"hideControls",[a],e)}catch(f){g.warn("you need to generate a crossdomain.xml")}a=="audio"&&I(e,d);c(e.jwapi).attr("tabindex",d?"0":"-1")}});d=g.defineNodeNameProperties(a,b,"prop")});if(s){var L=
c.cleanData,M=c.browser.msie&&g.browserVersion<9,N={object:1,OBJECT:1};c.cleanData=function(a){var b,c,d;if(a&&(c=a.length)&&x)for(b=0;b<c;b++)if(N[a[b].nodeName]){if("sendEvent"in a[b]){x--;try{a[b].sendEvent("play",!1)}catch(e){}}if(M)try{for(d in a[b])typeof a[b][d]=="function"&&(a[b][d]=null)}catch(f){}}return L.apply(this,arguments)}}if(!A){var H=l.createElement("a");["poster","src"].forEach(function(a){g.defineNodeNamesProperty(a=="src"?["audio","video","source"]:["video"],a,{prop:{get:function(){var b=
this.getAttribute(a);if(b==null)return"";H.setAttribute("href",b+"");return!c.support.hrefNormalized?H.getAttribute("href",4):H.href},set:function(b){c.attr(this,a,b)}}})});["autoplay","controls"].forEach(function(a){g.defineNodeNamesBooleanProperty(["audio","video"],a)});g.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},
NETWORK_NO_SOURCE:{value:3}},"prop")}});
