(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.InteractiveMap = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){e.exports=t(1)},function(e,r,t){"use strict";function n(){var e="undefined"==typeof JSON?{}:JSON;o.setupJSON(e)}var o=t(2),i=t(3);n();var a=window._rollbarConfig,s=a&&a.globalAlias||"Rollbar",u=window[s]&&"undefined"!=typeof window[s].shimId;!u&&a?o.wrapper.init(a):(window.Rollbar=o.wrapper,window.RollbarNotifier=i.Notifier),e.exports=o.wrapper},function(e,r,t){"use strict";function n(e,r,t){!t[4]&&window._rollbarWrappedError&&(t[4]=window._rollbarWrappedError,window._rollbarWrappedError=null),e.uncaughtError.apply(e,t),r&&r.apply(window,t)}function o(e,r){if(r.hasOwnProperty&&r.hasOwnProperty("addEventListener")){var t=r.addEventListener;r.addEventListener=function(r,n,o){t.call(this,r,e.wrap(n),o)};var n=r.removeEventListener;r.removeEventListener=function(e,r,t){n.call(this,e,r&&r._wrapped||r,t)}}}var i=t(3),a=t(8),s=i.Notifier;window._rollbarWrappedError=null;var u={};u.init=function(e,r){var t=new s(r);if(t.configure(e),e.captureUncaught){var i;r&&a.isType(r._rollbarOldOnError,"function")?i=r._rollbarOldOnError:window.onerror&&!window.onerror.belongsToShim&&(i=window.onerror),window.onerror=function(){var e=Array.prototype.slice.call(arguments,0);n(t,i,e)};var u,c,l=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"];for(u=0;u<l.length;++u)c=l[u],window[c]&&window[c].prototype&&o(t,window[c].prototype)}return e.captureUnhandledRejections&&(r&&a.isType(r._unhandledRejectionHandler,"function")&&window.removeEventListener("unhandledrejection",r._unhandledRejectionHandler),t._unhandledRejectionHandler=function(e){var r=e.reason,n=e.promise,o=e.detail;!r&&o&&(r=o.reason,n=o.promise),t.unhandledRejection(r,n)},window.addEventListener("unhandledrejection",t._unhandledRejectionHandler)),window.Rollbar=t,s.processPayloads(),t},e.exports={wrapper:u,setupJSON:i.setupJSON}},function(e,r,t){"use strict";function n(e){E=e,w.setupJSON(e)}function o(e,r){return function(){var t=r||this;try{return e.apply(t,arguments)}catch(n){console.error("[Rollbar]:",n)}}}function i(){h||(h=setTimeout(f,1e3))}function a(){return _}function s(e){_=_||this;var r="https://"+s.DEFAULT_ENDPOINT;this.options={enabled:!0,endpoint:r,environment:"production",scrubFields:g([],s.DEFAULT_SCRUB_FIELDS),checkIgnore:null,logLevel:s.DEFAULT_LOG_LEVEL,reportLevel:s.DEFAULT_REPORT_LEVEL,uncaughtErrorLevel:s.DEFAULT_UNCAUGHT_ERROR_LEVEL,payload:{}},this.lastError=null,this.plugins={},this.parentNotifier=e,e&&(e.hasOwnProperty("shimId")?e.notifier=this:this.configure(e.options))}function u(e){window._rollbarPayloadQueue.push(e),i()}function c(e){return o(function(){var r=this._getLogArgs(arguments);return this._log(e||r.level||this.options.logLevel||s.DEFAULT_LOG_LEVEL,r.message,r.err,r.custom,r.callback)})}function l(e,r){e||(e=r?E.stringify(r):"");var t={body:e};return r&&(t.extra=g(!0,{},r)),{message:t}}function p(e,r,t){var n=m.guessErrorClass(r.message),o=r.name||n[0],i=n[1],a={exception:{"class":o,message:i}};if(e&&(a.exception.description=e||"uncaught exception"),r.stack){var s,u,c,p,f,d,h,w;for(a.frames=[],h=0;h<r.stack.length;++h)s=r.stack[h],u={filename:s.url?v.sanitizeUrl(s.url):"(unknown)",lineno:s.line||null,method:s.func&&"?"!==s.func?s.func:"[anonymous]",colno:s.column},c=p=f=null,d=s.context?s.context.length:0,d&&(w=Math.floor(d/2),p=s.context.slice(0,w),c=s.context[w],f=s.context.slice(w)),c&&(u.code=c),(p||f)&&(u.context={},p&&p.length&&(u.context.pre=p),f&&f.length&&(u.context.post=f)),s.args&&(u.args=s.args),a.frames.push(u);return a.frames.reverse(),t&&(a.extra=g(!0,{},t)),{trace:a}}return l(o+": "+i,t)}function f(){var e;try{for(;e=window._rollbarPayloadQueue.shift();)d(e)}finally{h=void 0}}function d(e){var r=e.endpointUrl,t=e.accessToken,n=e.payload,o=e.callback||function(){},i=(new Date).getTime();i-L>=6e4&&(L=i,R=0);var a=window._globalRollbarOptions.maxItems,c=window._globalRollbarOptions.itemsPerMinute,l=function(){return!n.ignoreRateLimit&&a>=1&&T>=a},p=function(){return!n.ignoreRateLimit&&c>=1&&R>=c};return l()?void o(new Error(a+" max items reached")):p()?void o(new Error(c+" items per minute reached")):(T++,R++,l()&&_._log(_.options.uncaughtErrorLevel,"maxItems has been hit. Ignoring errors for the remainder of the current page load.",null,{maxItems:a},null,!1,!0),n.ignoreRateLimit&&delete n.ignoreRateLimit,void y.post(r,t,n,function(r,t){return r?(r instanceof b&&(e.callback=function(){},setTimeout(function(){u(e)},s.RETRY_DELAY)),o(r)):o(null,t)}))}var h,g=t(4),m=t(5),v=t(8),w=t(10),y=w.XHR,b=w.ConnectionError,E=null;s.NOTIFIER_VERSION="1.9.2",s.DEFAULT_ENDPOINT="api.rollbar.com/api/1/",s.DEFAULT_SCRUB_FIELDS=["pw","pass","passwd","password","secret","confirm_password","confirmPassword","password_confirmation","passwordConfirmation","access_token","accessToken","secret_key","secretKey","secretToken"],s.DEFAULT_LOG_LEVEL="debug",s.DEFAULT_REPORT_LEVEL="debug",s.DEFAULT_UNCAUGHT_ERROR_LEVEL="error",s.DEFAULT_ITEMS_PER_MIN=60,s.DEFAULT_MAX_ITEMS=0,s.LEVELS={debug:0,info:1,warning:2,error:3,critical:4},s.RETRY_DELAY=1e4,window._rollbarPayloadQueue=window._rollbarPayloadQueue||[],window._globalRollbarOptions={startTime:(new Date).getTime(),maxItems:s.DEFAULT_MAX_ITEMS,itemsPerMinute:s.DEFAULT_ITEMS_PER_MIN};var _,x=s.prototype;x._getLogArgs=function(e){for(var r,t,n,i,a,u,c=this.options.logLevel||s.DEFAULT_LOG_LEVEL,l=[],p=0;p<e.length;++p)u=e[p],a=v.typeName(u),"string"===a?r?l.push(u):r=u:"function"===a?i=o(u,this):"date"===a?l.push(u):"error"===a||u instanceof Error||"undefined"!=typeof DOMException&&u instanceof DOMException?t?l.push(u):t=u:"object"!==a&&"array"!==a||(n?l.push(u):n=u);return l.length&&(n=n||{},n.extraArgs=l),{level:c,message:r,err:t,custom:n,callback:i}},x._route=function(e){var r=this.options.endpoint,t=/\/$/.test(r),n=/^\//.test(e);return t&&n?e=e.substring(1):t||n||(e="/"+e),r+e},x._processShimQueue=function(e){for(var r,t,n,o,i,a,u,c={};t=e.shift();)r=t.shim,n=t.method,o=t.args,i=r.parentShim,u=c[r.shimId],u||(i?(a=c[i.shimId],u=new s(a)):u=this,c[r.shimId]=u),u[n]&&v.isType(u[n],"function")&&u[n].apply(u,o)},x._buildPayload=function(e,r,t,n,o){var i=this.options.accessToken,a=this.options.environment,u=g(!0,{},this.options.payload),c=v.uuid4();if(void 0===s.LEVELS[r])throw new Error("Invalid level");if(!t&&!n&&!o)throw new Error("No message, stack info or custom data");var l={environment:a,endpoint:this.options.endpoint,uuid:c,level:r,platform:"browser",framework:"browser-js",language:"javascript",body:this._buildBody(t,n,o),request:{url:window.location.href,query_string:window.location.search,user_ip:"$remote_ip"},client:{runtime_ms:e.getTime()-window._globalRollbarOptions.startTime,timestamp:Math.round(e.getTime()/1e3),javascript:{browser:window.navigator.userAgent,language:window.navigator.language,cookie_enabled:window.navigator.cookieEnabled,screen:{width:window.screen.width,height:window.screen.height},plugins:this._getBrowserPlugins()}},server:{},notifier:{name:"rollbar-browser-js",version:s.NOTIFIER_VERSION}};u.body&&delete u.body;var p={access_token:i,data:g(!0,l,u)};return this._scrub(p.data),p},x._buildBody=function(e,r,t){var n;return n=r?p(e,r,t):l(e,t)},x._getBrowserPlugins=function(){if(!this._browserPlugins){var e,r,t=window.navigator.plugins||[],n=t.length,o=[];for(r=0;r<n;++r)e=t[r],o.push({name:e.name,description:e.description});this._browserPlugins=o}return this._browserPlugins},x._scrub=function(e){function r(e,r,t,n,o,i){return r+v.redact(i)}function t(e){var t;if(v.isType(e,"string"))for(t=0;t<s.length;++t)e=e.replace(s[t],r);return e}function n(e,r){var t;for(t=0;t<a.length;++t)if(a[t].test(e)){r=v.redact(r);break}return r}function o(e,r){var o=n(e,r);return o===r?t(o):o}var i=this.options.scrubFields,a=this._getScrubFieldRegexs(i),s=this._getScrubQueryParamRegexs(i);return v.traverse(e,o),e},x._getScrubFieldRegexs=function(e){for(var r,t=[],n=0;n<e.length;++n)r="\\[?(%5[bB])?"+e[n]+"\\[?(%5[bB])?\\]?(%5[dD])?",t.push(new RegExp(r,"i"));return t},x._getScrubQueryParamRegexs=function(e){for(var r,t=[],n=0;n<e.length;++n)r="\\[?(%5[bB])?"+e[n]+"\\[?(%5[bB])?\\]?(%5[dD])?",t.push(new RegExp("("+r+"=)([^&\\n]+)","igm"));return t},x._urlIsWhitelisted=function(e){var r,t,n,o,i,a,s,u,c,l;try{if(r=this.options.hostWhiteList,t=e&&e.data&&e.data.body&&e.data.body.trace,!r||0===r.length)return!0;if(!t)return!0;for(s=r.length,i=t.frames.length,c=0;c<i;c++){if(n=t.frames[c],o=n.filename,!v.isType(o,"string"))return!0;for(l=0;l<s;l++)if(a=r[l],u=new RegExp(a),u.test(o))return!0}}catch(p){return this.configure({hostWhiteList:null}),console.error("[Rollbar]: Error while reading your configuration's hostWhiteList option. Removing custom hostWhiteList.",p),!0}return!1},x._messageIsIgnored=function(e){var r,t,n,o,i,a,s,u,c;try{if(i=!1,n=this.options.ignoredMessages,!n||0===n.length)return!1;if(s=e&&e.data&&e.data.body,u=s&&s.trace&&s.trace.exception&&s.trace.exception.message,c=s&&s.message&&s.message.body,r=u||c,!r)return!1;for(o=n.length,t=0;t<o&&(a=new RegExp(n[t],"gi"),!(i=a.test(r)));t++);}catch(l){this.configure({ignoredMessages:null}),console.error("[Rollbar]: Error while reading your configuration's ignoredMessages option. Removing custom ignoredMessages.")}return i},x._enqueuePayload=function(e,r,t,n){var o={callback:n,accessToken:this.options.accessToken,endpointUrl:this._route("item/"),payload:e},i=function(){if(n){var e="This item was not sent to Rollbar because it was ignored. This can happen if a custom checkIgnore() function was used or if the item's level was less than the notifier' reportLevel. See https://rollbar.com/docs/notifier/rollbar.js/configuration for more details.";n(null,{err:0,result:{id:null,uuid:null,message:e}})}};if(this._internalCheckIgnore(r,t,e))return void i();try{if(v.isType(this.options.checkIgnore,"function")&&this.options.checkIgnore(r,t,e))return void i()}catch(a){this.configure({checkIgnore:null}),console.error("[Rollbar]: Error while calling custom checkIgnore() function. Removing custom checkIgnore().",a)}if(this._urlIsWhitelisted(e)&&!this._messageIsIgnored(e)){if(this.options.verbose){if(e.data&&e.data.body&&e.data.body.trace){var s=e.data.body.trace,c=s.exception.message;console.error("[Rollbar]: ",c)}console.info("[Rollbar]: ",o)}v.isType(this.options.logFunction,"function")&&this.options.logFunction(o);try{v.isType(this.options.transform,"function")&&this.options.transform(e)}catch(a){this.configure({transform:null}),console.error("[Rollbar]: Error while calling custom transform() function. Removing custom transform().",a)}this.options.enabled&&u(o)}},x._internalCheckIgnore=function(e,r,t){var n=r[0],o=s.LEVELS[n]||0,i=s.LEVELS[this.options.reportLevel]||0;if(o<i)return!0;var a=this.options?this.options.plugins:{};if(a&&a.jquery&&a.jquery.ignoreAjaxErrors)try{return!!t.data.body.message.extra.isAjax}catch(u){return!1}return!1},x._log=function(e,r,t,n,o,i,a){var s=null;if(t)try{if(s=t._savedStackTrace?t._savedStackTrace:m.parse(t),t===this.lastError)return;this.lastError=t}catch(u){console.error("[Rollbar]: Error while parsing the error object.",u),r=t.message||t.description||r||String(t),t=null}var c=this._buildPayload(new Date,e,r,s,n);a&&(c.ignoreRateLimit=!0),this._enqueuePayload(c,!!i,[e,r,t,n],o)},x.log=c(),x.debug=c("debug"),x.info=c("info"),x.warn=c("warning"),x.warning=c("warning"),x.error=c("error"),x.critical=c("critical"),x.uncaughtError=o(function(e,r,t,n,o,i){if(i=i||null,o&&v.isType(o,"error"))return void this._log(this.options.uncaughtErrorLevel,e,o,i,null,!0);if(r&&v.isType(r,"error"))return void this._log(this.options.uncaughtErrorLevel,e,r,i,null,!0);var a={url:r||"",line:t};a.func=m.guessFunctionName(a.url,a.line),a.context=m.gatherContext(a.url,a.line);var s={mode:"onerror",message:o?String(o):e||"uncaught exception",url:document.location.href,stack:[a],useragent:navigator.userAgent},u=this._buildPayload(new Date,this.options.uncaughtErrorLevel,e,s,i);this._enqueuePayload(u,!0,[this.options.uncaughtErrorLevel,e,r,t,n,o])}),x.unhandledRejection=o(function(e,r){if(null==e)return void _._log(_.options.uncaughtErrorLevel,"unhandled rejection was null or undefined!",null,{},null,!1,!1);var t=e.message||(e?String(e):"unhandled rejection"),n=e._rollbarContext||r._rollbarContext||null;if(e&&v.isType(e,"error"))return void this._log(this.options.uncaughtErrorLevel,t,e,n,null,!0);var o={url:"",line:0};o.func=m.guessFunctionName(o.url,o.line),o.context=m.gatherContext(o.url,o.line);var i={mode:"unhandledrejection",message:t,url:document.location.href,stack:[o],useragent:navigator.userAgent},a=this._buildPayload(new Date,this.options.uncaughtErrorLevel,t,i,n);this._enqueuePayload(a,!0,[this.options.uncaughtErrorLevel,t,o.url,o.line,0,e,r])}),x.global=o(function(e){e=e||{};var r={startTime:e.startTime,maxItems:e.maxItems,itemsPerMinute:e.itemsPerMinute};g(!0,window._globalRollbarOptions,r),void 0!==e.maxItems&&(T=0),void 0!==e.itemsPerMinute&&(R=0)}),x.configure=o(function(e,r){var t=g(!0,{},e);g(!r,this.options,t),this.global(t)}),x.scope=o(function(e){var r=new s(this);return g(!0,r.options.payload,e),r}),x.wrap=function(e,r){try{var t;if(t=v.isType(r,"function")?r:function(){return r||{}},!v.isType(e,"function"))return e;if(e._isWrap)return e;if(!e._wrapped){e._wrapped=function(){try{return e.apply(this,arguments)}catch(r){throw"string"==typeof r&&(r=new String(r)),r.stack||(r._savedStackTrace=m.parse(r)),r._rollbarContext=t()||{},r._rollbarContext._wrappedSource=e.toString(),window._rollbarWrappedError=r,r}},e._wrapped._isWrap=!0;for(var n in e)e.hasOwnProperty(n)&&(e._wrapped[n]=e[n])}return e._wrapped}catch(o){return e}},x.loadFull=function(){console.error("[Rollbar]: Unexpected Rollbar.loadFull() called on a Notifier instance")},s.processPayloads=function(e){return e?void f():void i()};var L=(new Date).getTime(),T=0,R=0;e.exports={Notifier:s,setupJSON:n,topLevelNotifier:a}},function(e,r){"use strict";var t=Object.prototype.hasOwnProperty,n=Object.prototype.toString,o=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===n.call(e)},i=function(e){if(!e||"[object Object]"!==n.call(e))return!1;var r=t.call(e,"constructor"),o=e.constructor&&e.constructor.prototype&&t.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!r&&!o)return!1;var i;for(i in e);return"undefined"==typeof i||t.call(e,i)};e.exports=function a(){var e,r,t,n,s,u,c=arguments[0],l=1,p=arguments.length,f=!1;for("boolean"==typeof c?(f=c,c=arguments[1]||{},l=2):("object"!=typeof c&&"function"!=typeof c||null==c)&&(c={});l<p;++l)if(e=arguments[l],null!=e)for(r in e)t=c[r],n=e[r],c!==n&&(f&&n&&(i(n)||(s=o(n)))?(s?(s=!1,u=t&&o(t)?t:[]):u=t&&i(t)?t:{},c[r]=a(f,u,n)):"undefined"!=typeof n&&(c[r]=n));return c}},function(e,r,t){"use strict";function n(){return l}function o(){return null}function i(e){var r={};return r._stackFrame=e,r.url=e.fileName,r.line=e.lineNumber,r.func=e.functionName,r.column=e.columnNumber,r.args=e.args,r.context=o(r.url,r.line),r}function a(e){function r(){var r=[];try{r=c.parse(e)}catch(t){r=[]}for(var n=[],o=0;o<r.length;o++)n.push(new i(r[o]));return n}return{stack:r(),message:e.message,name:e.name}}function s(e){return new a(e)}function u(e){if(!e)return["Unknown error. There was no error message to display.",""];var r=e.match(p),t="(unknown)";return r&&(t=r[r.length-1],e=e.replace((r[r.length-2]||"")+t+":",""),e=e.replace(/(^[\s]+|[\s]+$)/g,"")),[t,e]}var c=t(6),l="?",p=new RegExp("^(([a-zA-Z0-9-_$ ]*): *)?(Uncaught )?([a-zA-Z0-9-_$ ]*): ");e.exports={guessFunctionName:n,guessErrorClass:u,gatherContext:o,parse:s,Stack:a,Frame:i}},function(e,r,t){var n,o,i;!function(a,s){"use strict";o=[t(7)],n=s,i="function"==typeof n?n.apply(r,o):n,!(void 0!==i&&(e.exports=i))}(this,function(e){"use strict";function r(e,r,t){if("function"==typeof Array.prototype.map)return e.map(r,t);for(var n=new Array(e.length),o=0;o<e.length;o++)n[o]=r.call(t,e[o]);return n}function t(e,r,t){if("function"==typeof Array.prototype.filter)return e.filter(r,t);for(var n=[],o=0;o<e.length;o++)r.call(t,e[o])&&n.push(e[o]);return n}var n=/(^|@)\S+\:\d+/,o=/^\s*at .*(\S+\:\d+|\(native\))/m,i=/^(eval@)?(\[native code\])?$/;return{parse:function(e){if("undefined"!=typeof e.stacktrace||"undefined"!=typeof e["opera#sourceloc"])return this.parseOpera(e);if(e.stack&&e.stack.match(o))return this.parseV8OrIE(e);if(e.stack)return this.parseFFOrSafari(e);throw new Error("Cannot parse given Error object")},extractLocation:function(e){if(e.indexOf(":")===-1)return[e];var r=e.replace(/[\(\)\s]/g,"").split(":"),t=r.pop(),n=r[r.length-1];if(!isNaN(parseFloat(n))&&isFinite(n)){var o=r.pop();return[r.join(":"),o,t]}return[r.join(":"),t,void 0]},parseV8OrIE:function(n){var i=t(n.stack.split("\n"),function(e){return!!e.match(o)},this);return r(i,function(r){r.indexOf("(eval ")>-1&&(r=r.replace(/eval code/g,"eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g,""));var t=r.replace(/^\s+/,"").replace(/\(eval code/g,"(").split(/\s+/).slice(1),n=this.extractLocation(t.pop()),o=t.join(" ")||void 0,i="eval"===n[0]?void 0:n[0];return new e(o,(void 0),i,n[1],n[2],r)},this)},parseFFOrSafari:function(n){var o=t(n.stack.split("\n"),function(e){return!e.match(i)},this);return r(o,function(r){if(r.indexOf(" > eval")>-1&&(r=r.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g,":$1")),r.indexOf("@")===-1&&r.indexOf(":")===-1)return new e(r);var t=r.split("@"),n=this.extractLocation(t.pop()),o=t.shift()||void 0;return new e(o,(void 0),n[0],n[1],n[2],r)},this)},parseOpera:function(e){return!e.stacktrace||e.message.indexOf("\n")>-1&&e.message.split("\n").length>e.stacktrace.split("\n").length?this.parseOpera9(e):e.stack?this.parseOpera11(e):this.parseOpera10(e)},parseOpera9:function(r){for(var t=/Line (\d+).*script (?:in )?(\S+)/i,n=r.message.split("\n"),o=[],i=2,a=n.length;i<a;i+=2){var s=t.exec(n[i]);s&&o.push(new e((void 0),(void 0),s[2],s[1],(void 0),n[i]))}return o},parseOpera10:function(r){for(var t=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,n=r.stacktrace.split("\n"),o=[],i=0,a=n.length;i<a;i+=2){var s=t.exec(n[i]);s&&o.push(new e(s[3]||void 0,(void 0),s[2],s[1],(void 0),n[i]))}return o},parseOpera11:function(o){var i=t(o.stack.split("\n"),function(e){return!!e.match(n)&&!e.match(/^Error created at/)},this);return r(i,function(r){var t,n=r.split("@"),o=this.extractLocation(n.pop()),i=n.shift()||"",a=i.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^\)]*\)/g,"")||void 0;i.match(/\(([^\)]*)\)/)&&(t=i.replace(/^[^\(]+\(([^\)]*)\)$/,"$1"));var s=void 0===t||"[arguments not available]"===t?void 0:t.split(",");return new e(a,s,o[0],o[1],o[2],r)},this)}}})},function(e,r,t){var n,o,i;!function(t,a){"use strict";o=[],n=a,i="function"==typeof n?n.apply(r,o):n,!(void 0!==i&&(e.exports=i))}(this,function(){"use strict";function e(e){return!isNaN(parseFloat(e))&&isFinite(e)}function r(e,r,t,n,o,i){void 0!==e&&this.setFunctionName(e),void 0!==r&&this.setArgs(r),void 0!==t&&this.setFileName(t),void 0!==n&&this.setLineNumber(n),void 0!==o&&this.setColumnNumber(o),void 0!==i&&this.setSource(i)}return r.prototype={getFunctionName:function(){return this.functionName},setFunctionName:function(e){this.functionName=String(e)},getArgs:function(){return this.args},setArgs:function(e){if("[object Array]"!==Object.prototype.toString.call(e))throw new TypeError("Args must be an Array");this.args=e},getFileName:function(){return this.fileName},setFileName:function(e){this.fileName=String(e)},getLineNumber:function(){return this.lineNumber},setLineNumber:function(r){if(!e(r))throw new TypeError("Line Number must be a Number");this.lineNumber=Number(r)},getColumnNumber:function(){return this.columnNumber},setColumnNumber:function(r){if(!e(r))throw new TypeError("Column Number must be a Number");this.columnNumber=Number(r)},getSource:function(){return this.source},setSource:function(e){this.source=String(e)},toString:function(){var r=this.getFunctionName()||"{anonymous}",t="("+(this.getArgs()||[]).join(",")+")",n=this.getFileName()?"@"+this.getFileName():"",o=e(this.getLineNumber())?":"+this.getLineNumber():"",i=e(this.getColumnNumber())?":"+this.getColumnNumber():"";return r+t+n+o+i}},r})},function(e,r,t){"use strict";function n(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function o(e,r){return n(e)===r}function i(e){if(!o(e,"string"))throw new Error("received invalid input");for(var r=l,t=r.parser[r.strictMode?"strict":"loose"].exec(e),n={},i=14;i--;)n[r.key[i]]=t[i]||"";return n[r.q.name]={},n[r.key[12]].replace(r.q.parser,function(e,t,o){t&&(n[r.q.name][t]=o)}),n}function a(e){var r=i(e);return""===r.anchor&&(r.source=r.source.replace("#","")),e=r.source.replace("?"+r.query,"")}function s(e,r){var t,n,i,a=o(e,"object"),u=o(e,"array"),c=[];if(a)for(t in e)e.hasOwnProperty(t)&&c.push(t);else if(u)for(i=0;i<e.length;++i)c.push(i);for(i=0;i<c.length;++i)t=c[i],n=e[t],a=o(n,"object"),u=o(n,"array"),a||u?e[t]=s(n,r):e[t]=r(t,n);return e}function u(e){return e=String(e),new Array(e.length+1).join("*")}function c(){var e=(new Date).getTime(),r="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){var t=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===r?t:7&t|8).toString(16)});return r}t(9);var l={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},p={isType:o,parseUri:i,parseUriOptions:l,redact:u,sanitizeUrl:a,traverse:s,typeName:n,uuid4:c};e.exports=p},function(e,r){!function(e){"use strict";e.console=e.console||{};for(var r,t,n=e.console,o={},i=function(){},a="memory".split(","),s="assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(",");r=a.pop();)n[r]||(n[r]=o);for(;t=s.pop();)n[t]||(n[t]=i)}("undefined"==typeof window?this:window)},function(e,r,t){"use strict";function n(e){a=e}function o(e){this.name="Connection Error",this.message=e,this.stack=(new Error).stack}var i=t(8),a=null;o.prototype=Object.create(Error.prototype),o.prototype.constructor=o;var s={XMLHttpFactories:[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}],createXMLHTTPObject:function(){var e,r=!1,t=s.XMLHttpFactories,n=t.length;for(e=0;e<n;e++)try{r=t[e]();break}catch(o){}return r},post:function(e,r,t,n){if(!i.isType(t,"object"))throw new Error("Expected an object to POST");t=a.stringify(t),n=n||function(){};var u=s.createXMLHTTPObject();if(u)try{try{var c=function(){try{if(c&&4===u.readyState){c=void 0;var e=a.parse(u.responseText);200===u.status?n(null,e):i.isType(u.status,"number")&&u.status>=400&&u.status<600?(403==u.status&&console.error("[Rollbar]:"+e.message),n(new Error(String(u.status)))):n(new o("XHR response had no status code (likely connection failure)"))}}catch(r){var t;t=r&&r.stack?r:new Error(r),n(t)}};u.open("POST",e,!0),u.setRequestHeader&&(u.setRequestHeader("Content-Type","application/json"),u.setRequestHeader("X-Rollbar-Access-Token",r)),u.onreadystatechange=c,u.send(t)}catch(l){if("undefined"!=typeof XDomainRequest){"http:"===window.location.href.substring(0,5)&&"https"===e.substring(0,5)&&(e="http"+e.substring(5));var p=function(){n(new o("Request timed out"))},f=function(){n(new Error("Error during request"))},d=function(){n(null,a.parse(u.responseText))};u=new XDomainRequest,u.onprogress=function(){},u.ontimeout=p,u.onerror=f,u.onload=d,u.open("POST",e,!0),u.send(t)}}}catch(h){n(h)}}};e.exports={XHR:s,setupJSON:n,ConnectionError:o}}])});
},{}],2:[function(require,module,exports){
var VisionSimulation = require("dota-vision-simulation");
var worlddata = require("dota-vision-simulation/src/worlddata.json");
var getLightUnion = require("./getLightUnion");
var trim = require('./util/trim');
var QueryString = require('./util/queryString');
var Rollbar = require("rollbar-browser");

var rollbarConfig = {
    accessToken: 'fe7cf327f2b24bb8991e252239f6200f',
    captureUncaught: true,
    ignoredMessages: ["SecurityError: DOM Exception 18: An attempt was made to break through the security policy of the user agent."],
    payload: {
        environment: 'production',
        client: {
            javascript: {
                source_map_enabled: true,
                code_version: "e6d6d58700a83fd50414d08c6db8bafaebfbea6f",
                // Optionally have Rollbar guess which frames the error was thrown from
                // when the browser does not provide line and column numbers.
                guess_uncaught_frames: true
            }
        }
    }
};

var rollbar = Rollbar.init(rollbarConfig);
    
function App(map_tile_path, vision_data_image_path) {
    var self = this,
        IMG_DIR = "img/",
        ENTITIES = {
            observer: {
                icon_path: IMG_DIR + "ward_observer.png",
                radius: 1600
            },
            sentry: {
                icon_path: IMG_DIR + "ward_sentry.png",
                radius: 850
            }
        },
        TOWER_DAY_VISION_RADIUS = 1900,
        TOWER_NIGHT_VISION_RADIUS = 800,
        TOWER_TRUE_SIGHT_RADIUS = 700,
        TOWER_ATTACK_RANGE_RADIUS = 700,
        map_data_path = "data/",
        map_data,
        mapConstants = require('./mapConstants'),
        conversionFunctions = require('./conversionFunctions'),
        zoomify = new OpenLayers.Layer.Zoomify( "Zoomify", map_tile_path, new OpenLayers.Size( mapConstants.map_w, mapConstants.map_h ) ),
        mapBounds = new OpenLayers.Bounds(0, 0, mapConstants.map_w, mapConstants.map_h),
        map = new OpenLayers.Map("map1", {
            theme: null,
            maxExtent: mapBounds,
            numZoomLevels: 5,
            maxResolution: Math.pow(2, 5-1 ),
            units: "m"
        }),
        layerKeys = [
            "no_wards",
            "ent_fow_blocker_node",
            "trigger_multiple",
            "npc_dota_roshan_spawner",
            "ent_dota_tree",
            "dota_item_rune_spawner",
            "dota_item_rune_spawner_bounty",
            "ent_dota_shop",
            "npc_dota_barracks",
            "npc_dota_building",
            "npc_dota_healer",
            "npc_dota_fort",
            "npc_dota_tower"
        ],
        layerNames = {
            npc_dota_roshan_spawner: "Roshan",
            dota_item_rune_spawner: "Runes",
            dota_item_rune_spawner_bounty: "Bounty Runes",
            ent_dota_tree: "Trees",
            npc_dota_healer: "Shrines",
            npc_dota_fort: "Ancients",
            ent_dota_shop: "Shops",
            npc_dota_tower: "Towers",
            npc_dota_barracks: "Barracks",
            npc_dota_building: "Buildings",
            trigger_multiple: "Neutral Camps Spawn Boxes",
            npc_dota_neutral_spawner: "Neutral Camps",
            no_wards: "Invalid Ward Locations",
            ent_fow_blocker_node: "Vision Blocker"
        },
        baseLayers = [
            new OpenLayers.Layer.TMS('7.00 Default', map_tile_path, {
                type: "jpg",
                getURL: getMyURL('700', 'default')
            }),
            new OpenLayers.Layer.TMS('6.87 Default', map_tile_path, {
                type: "jpg",
                getURL: getMyURL('687', 'default')
            }),
            new OpenLayers.Layer.TMS('6.87 Desert', map_tile_path, {
                type: "jpg",
                getURL: getMyURL('687', 'desert')
            }),
            new OpenLayers.Layer.TMS('6.87 Immortal Gardens', map_tile_path, {
                type: "jpg",
                getURL: getMyURL('687', 'immortalgardens')
            })
        ],
        overlayGrouping = {
            "Day Vision Range": "Towers",
            "Night Vision Range": "Towers",
            "True Sight Range": "Towers",
            "Attack Range": "Towers",
            "Towers": "Structures",
            "Shrines": "Structures",
            "Ancients": "Structures",
            "Barracks": "Structures",
            "Buildings": "Structures",
            "Shops": "Structures",
            "Invalid Ward Locations": "Vision",
            "Vision Blocker": "Vision",
            "Placed Wards": "Vision",
            "Ward Vision": "Vision",
            "Ward Vision with Fog": "Vision"
        },
        layerSwitcher = new OpenLayers.Control.LayerSwitcher({
            ascending: false,
            overlayGrouping: overlayGrouping,
            onMaximizeWhenSmallScreen: minimizeControlList.bind(document.getElementById("controls-min"))
        }),
        coordinateControl = new OpenLayers.Control.MousePosition(),
        cursorLayer = new OpenLayers.Layer.Vector("Cursor", {displayInLayerSwitcher:false}),
        dayRangeLayer = new OpenLayers.Layer.Vector("Day Vision Range"),
        nightRangeLayer = new OpenLayers.Layer.Vector("Night Vision Range"),
        trueSightRangeLayer = new OpenLayers.Layer.Vector("True Sight Range"),
        attackRangeLayer = new OpenLayers.Layer.Vector("Attack Range"),
        polygonLayer = new OpenLayers.Layer.Vector("Drawn Circles"),
        wardVisionLayer = new OpenLayers.Layer.Vector("Ward Vision"),
        visionSimulationLayer = new OpenLayers.Layer.Vector("Ward Vision with Fog"),
        iconLayer = new OpenLayers.Layer.Markers("Placed Wards"),
        renderer = OpenLayers.Util.getParameters(window.location.href).renderer,
        drawControls,
        lastDistance,
        style = require('./styleConstants'),
        treeMarkers = {},
        VISION_SIMULATION = true,
        VISION_SIMULATION_ALWAYS = true,
        cutTrees = {};

    /***********************************
     * COORDINATE CONVERSION FUNCTIONS *
     ***********************************/

    var lerp = lerp,
        reverseLerp = conversionFunctions.reverseLerp,
        latLonToWorld = conversionFunctions.latLonToWorld,
        worldToLatLon = conversionFunctions.worldToLatLon,
        getTileRadius = conversionFunctions.getTileRadius,
        getScaledRadius = conversionFunctions.getScaledRadius,
        calculateDistance = conversionFunctions.calculateDistance;

    /********************
     * CONTROL HANDLERS *
     ********************/

    function handleTreeMarkerClick(event) {
        console.log('handleTreeMarkerClick', event.object);
        setTreeMarkerState(event.object, !event.object.treeVisible);
        setTreeQueryString();
    }
    
    function setTreeMarkerState(marker, state) {
        console.log('setTreeMarkerState', marker);
        var worldXY = latLonToWorld(marker.lonlat.lon, marker.lonlat.lat);

        marker.treeVisible = state;
        marker.setOpacity(state ? 1 : .4);
        
        if (VISION_SIMULATION) {
            var gridXY = vs.WorldXYtoGridXY(worldXY.x, worldXY.y);
            vs.toggleTree(gridXY.x, gridXY.y);
        }

        var popupContentHTML = "Click to cut down tree.<br>This will affect the ward vision simulation.";
        if (state) {
            delete cutTrees[marker.tree_loc]
        }
        else {
            popupContentHTML = "Click to regrow tree.<br>This will affect the ward vision simulation.";
            cutTrees[marker.tree_loc] = marker;
        }
        
        marker.feature.data.popupContentHTML = popupContentHTML;
        if (marker.feature.popup) {
            marker.feature.popup.setContentHTML(popupContentHTML);
        }
    }

    function handleTowerMarkerClick(e, skipQueryStringUpdate) {
        console.log('handleTowerMarkerClick');
        var circle,
            feature,
            center;

        if (!e.object.showInfo) {
            center = new OpenLayers.Geometry.Point(e.object.lonlat.lon, e.object.lonlat.lat);

            // day vision circle
            circle = OpenLayers.Geometry.Polygon.createRegularPolygon(center, getScaledRadius(e.object.day_vision_radius), 30);
            feature = new OpenLayers.Feature.Vector(circle);
            dayRangeLayer.addFeatures(feature);
            e.object.day_vision_feature = feature;

            // true sight circle
            circle = OpenLayers.Geometry.Polygon.createRegularPolygon(center, getScaledRadius(e.object.true_sight_radius), 30);
            feature = new OpenLayers.Feature.Vector(circle, null, style.lightblue);
            trueSightRangeLayer.addFeatures(feature);
            e.object.true_sight_feature = feature;

            // night vision circle
            circle = OpenLayers.Geometry.Polygon.createRegularPolygon(center, getScaledRadius(e.object.night_vision_radius), 30);
            feature = new OpenLayers.Feature.Vector(circle);
            nightRangeLayer.addFeatures(feature);
            e.object.night_vision_feature = feature;

            // attack range circle
            circle = OpenLayers.Geometry.Polygon.createRegularPolygon(center, getScaledRadius(e.object.attack_range_radius), 30);
            feature = new OpenLayers.Feature.Vector(circle, null, style.red);
            attackRangeLayer.addFeatures(feature);
            e.object.attack_range_feature = feature;

            if (!skipQueryStringUpdate) QueryString.addQueryStringValue("tower_vision", e.object.tower_loc.x + ',' + e.object.tower_loc.y);

            if (VISION_SIMULATION) updateVisibilityHandler(e.object.lonlat, e.object, TOWER_DAY_VISION_RADIUS);
        }
        else {
            dayRangeLayer.removeFeatures(e.object.day_vision_feature);
            nightRangeLayer.removeFeatures(e.object.night_vision_feature);
            trueSightRangeLayer.removeFeatures(e.object.true_sight_feature);
            attackRangeLayer.removeFeatures(e.object.attack_range_feature);

            if (e.object.vision_feature) visionSimulationLayer.removeFeatures(e.object.vision_feature);
            if (e.object.vision_center_feature) visionSimulationLayer.removeFeatures(e.object.vision_center_feature);
      
            if (!skipQueryStringUpdate) QueryString.removeQueryStringValue("tower_vision", e.object.tower_loc.x + ',' + e.object.tower_loc.y);
        }
        e.object.showInfo = !e.object.showInfo;
    }

    function handleWardClick(entityName) {
        return function(event) {
            var latlon = map.getLonLatFromPixel(event.xy),
                marker = placeWard(latlon, entityName);
            if (marker) QueryString.addQueryStringValue(marker.ward_type, marker.ward_loc);
        }
    }

    function placeWard(latlon, entityName, qs_value_worldXY) {
        if (!mapBounds.containsLonLat(latlon)) return;
        var entity = ENTITIES[entityName],
            marker = createWardMarker(entity.icon_path, latlon),
            circle = OpenLayers.Geometry.Polygon.createRegularPolygon(new OpenLayers.Geometry.Point(marker.lonlat.lon, marker.lonlat.lat), getScaledRadius(entity.radius), 40),
            feature = new OpenLayers.Feature.Vector(circle);
        iconLayer.addMarker(marker);
        wardVisionLayer.addFeatures(feature);
        marker.radius_feature = feature;
        marker.ward_type = entityName;
        marker.ward_loc = entityName;

        if (qs_value_worldXY == undefined) {
            var worldXY = latLonToWorld(latlon.lon, latlon.lat);
            worldXY.x = worldXY.x.toFixed(0);
            worldXY.y = worldXY.y.toFixed(0);
            marker.ward_loc = worldXY.x + ',' + worldXY.y
        } else {
            marker.ward_loc = qs_value_worldXY;
        }

        if (VISION_SIMULATION && entityName == 'observer') updateVisibilityHandler(latlon, marker, ENTITIES.observer.radius);
        
        marker.events.register("click", this, wardMarkerRemove);
        marker.events.register("touchstart", this, wardMarkerRemove);
        
        return marker;
    }

    function wardMarkerRemove(event) {
        if (event.object.radius_feature) wardVisionLayer.removeFeatures(event.object.radius_feature);
        if (event.object.vision_feature) visionSimulationLayer.removeFeatures(event.object.vision_feature);
        if (event.object.vision_center_feature) visionSimulationLayer.removeFeatures(event.object.vision_center_feature);
        console.log(event.object);
        iconLayer.removeMarker(event.object);
        OpenLayers.Event.stop(event);

        QueryString.removeQueryStringValue(event.object.ward_type, event.object.ward_loc);
    }

    function handleOnClick(event) {
        console.log('handleOnClick');
    }

    function handleMeasurements(event) {
        var out = "";
        if (event.order == 1) {
            out += "Distance: " + calculateDistance(event.order, event.units, event.measure).toFixed(0) + " units";
        } else {
            out += "Distance: " + calculateDistance(event.order, event.units, event.measure).toFixed(0) + " units<sup>2</" + "sup>";
        }
        document.getElementById("output").innerHTML = out;

        lastDistance = calculateDistance(event.order, event.units, event.measure);
        document.getElementById("traveltime").innerHTML = (lastDistance / document.getElementById("movespeed").value).toFixed(2);

        document.getElementById("traveltime-container").style.display = '';
    }

    function handleCircleMeasurements(event) {
        var element = document.getElementById("output"),
            out = "";

        if (event.order == 1) {
            out += "Radius: " + calculateDistance(event.order, event.units, event.measure).toFixed(0) + " units";
        } else {
            out += "Distance: " + calculateDistance(event.order, event.units, event.measure).toFixed(0) + " units<sup>2</" + "sup>";
        }
        element.innerHTML = out;
    }

    function handleCircleMeasurementsPartial(event) {
        var element = document.getElementById("output"),
            out = "",
            circle,
            feature,
            self = this;

        drawControls["select"].deactivate();
        if (event.order == 1) {
            if (event.measure > 0) {
                if (event.units == "km") {
                    circle = OpenLayers.Geometry.Polygon.createRegularPolygon(new OpenLayers.Geometry.Point(event.geometry.components[0].x, event.geometry.components[0].y), event.measure * 1e3, 30);
                } else {
                    circle = OpenLayers.Geometry.Polygon.createRegularPolygon(new OpenLayers.Geometry.Point(event.geometry.components[0].x, event.geometry.components[0].y), event.measure, 30);
                }
                feature = new OpenLayers.Feature.Vector(circle);
                polygonLayer.removeFeatures(event.geometry.circle_features);
                if ("circle_features" in event.geometry) {
                    event.geometry.circle_features.length = 0;
                    event.geometry.circle_features.push(feature);
                } else {
                    event.geometry.circle_features = [feature];
                }
                feature.measure_control = this;
                feature.is_measuring = true;
                polygonLayer.addFeatures(feature);
                if (event.geometry.components.length > 2) {
                    setTimeout(function() {
                        feature.is_measuring = false;
                        drawControls["select"].activate();
                        self.cancel();
                    }, 0);
                }
            }
            out += "Radius: " + calculateDistance(event.order, event.units, event.measure).toFixed(0) + " units";
        } else {
            out += "Distance: " + calculateDistance(event.order, event.units, event.measure).toFixed(0) + " units<sup>2</" + "sup>";
        }
        element.innerHTML = out;
    }

    function toggleControl() {
        var control;
        QueryString.setQueryString('mode', null);
        for (var key in drawControls) {
            control = drawControls[key];
            console.log(this, this.value, key, this.value == key && this.checked);
            if (this.value == key && this.checked) {
                QueryString.setQueryString('mode', key);
                control.activate();
            } else {
                control.deactivate();
            }
            if ((this.value == "polygonControl" || this.value == "circle") && this.checked) {
                drawControls["select"].activate();
            } else {
                drawControls["select"].deactivate();
            }
        }
        document.getElementById("output").innerHTML = "";

        document.getElementById("traveltime-container").style.display = 'none';
    }

    function handleTowerHoverPopup(event) {
        if (this.popup == null) {
            console.log(this.closeBox);
            this.popup = this.createPopup(this.closeBox);
            map.addPopup(this.popup);
            this.popup.show();
        }
        else {
            this.popup.toggle();
        }
        currentPopup = this.popup;
        OpenLayers.Event.stop(event);
    };

    function handleTreeHoverPopup(event) {
        if (this.popup == null) {
            this.popup = this.createPopup(this.closeBox);
            map.addPopup(this.popup);
            this.popup.show();
        }
        else {
            this.popup.toggle();
        }
        currentPopup = this.popup;
        OpenLayers.Event.stop(event);
    };
        
    function addMarker(markers, ll, popupClass, popupContentHTML, closeBox, overflow) {
        var feature = new OpenLayers.Feature(markers, ll),
            marker;

        feature.closeBox = closeBox;
        feature.popupClass = popupClass;
        feature.data.popupContentHTML = popupContentHTML;
        feature.data.overflow = overflow ? "auto" : "hidden";
        marker = feature.createMarker();
        marker.feature = feature;
        
        if (markers.name == "Towers") {
            marker.events.register("mouseover", feature, handleTowerHoverPopup);
            marker.events.register("mouseout", feature, handleTowerHoverPopup);
        }
        else if (markers.name == "Trees" && VISION_SIMULATION) {
            marker.events.register("mouseover", feature, handleTreeHoverPopup);
            marker.events.register("mouseout", feature, handleTreeHoverPopup);
        }
        markers.addMarker(marker);
        return marker;
    }

    function createWardMarker(img, latlon) {
        var size = new OpenLayers.Size(21, 25),
            offset = new OpenLayers.Pixel(-(size.w / 2), -size.h),
            icon = new OpenLayers.Icon(img, size, offset),
            marker = new OpenLayers.Marker(latlon, icon);
        console.log('createWardMarker', latlon);
        return marker;
    }

    // Creates a 64x64 rectangle feature centered at c
    function createTileFeature(c, style) {
        var r1 = worldToLatLon(c.x - 32, c.y - 32),
            r2 = worldToLatLon(c.x - 32, c.y + 32),
            r3 = worldToLatLon(c.x + 32, c.y + 32),
            r4 = worldToLatLon(c.x + 32, c.y - 32),
            box_points = [
                new OpenLayers.Geometry.Point(r1.x, r1.y),
                new OpenLayers.Geometry.Point(r2.x, r2.y),
                new OpenLayers.Geometry.Point(r3.x, r3.y),
                new OpenLayers.Geometry.Point(r4.x, r4.y)
            ],
            box_rect = new OpenLayers.Geometry.LinearRing(box_points),
            box_feature = new OpenLayers.Feature.Vector(box_rect, null, style);

        return box_feature;
    }

    // creates url for tiles. OpenLayers TMS Layer getURL property is set to this
    function getMyURL(patch, baseLayer) {
        return function(bounds) {
            //console.log('getMyURL', baseLayer);
            var res = this.map.getResolution(),
                x = Math.round((bounds.left - this.maxExtent.left) / (res * this.tileSize.w)),
                y = Math.round((this.maxExtent.top - bounds.top) / (res * this.tileSize.h)),
                z = map.getZoom(),
                path = z + "/tile_" + x + "_" + y + "." + this.type,
                url = this.url;

            if (url instanceof Array) {
                url = this.selectUrl(path, url)
            }
            return url + patch + '/' + baseLayer + '/' + path
        }
    }
    
    function resetMarkerLayers() {
        for (k in treeMarkers) {
            if (cutTrees[k]) {
                setTreeMarkerState(treeMarkers[k], true);
            }
        }
        var data = map_data;
        layerKeys.forEach(function (k) {
            var layer = map.getLayersByName(layerNames[k])[0];
            console.log('removing layer', layer, k);
            if (layer) {
                map.removeLayer(layer);
                layer.destroy();
            }
        });
        dayRangeLayer.destroyFeatures();
        nightRangeLayer.destroyFeatures();
        trueSightRangeLayer.destroyFeatures();
        attackRangeLayer.destroyFeatures();
        map.events.unregister("changelayer", map, layerChangeHandler);
    }

    function onMapDataLoad(data) {
        var markers = {},
            marker,
            vectorLayer = map.getLayersByName("Placed Wards")[0],
            box_points = [],
            box_rect, box_feature;
        layerKeys.forEach(function (k) {
            console.log('onMapDataLoad', k);
            if (data[k]) {
                // Create markers for non-neutral spawn box and non-tree layers
                if (k != "trigger_multiple" && k != "ent_dota_tree" && k != "no_wards" && k != "ent_fow_blocker_node") {
                    markers[k] = new OpenLayers.Layer.Markers(layerNames[k], {visibility: false});
                    map.addLayer(markers[k]);
                    //markers[k].setVisibility(false);
                    for (var i = 0; i < data[k].length; i++) {
                        var latlon = worldToLatLon(data[k][i].x, data[k][i].y);
                        marker = addMarker(markers[k], new OpenLayers.LonLat(latlon.x, latlon.y), OpenLayers.Popup.FramedCloud, "Click to toggle range overlay", false);
                        marker.day_vision_radius = TOWER_DAY_VISION_RADIUS;
                        marker.night_vision_radius = TOWER_NIGHT_VISION_RADIUS;
                        marker.true_sight_radius = TOWER_TRUE_SIGHT_RADIUS;
                        marker.attack_range_radius = TOWER_ATTACK_RANGE_RADIUS;
                        marker.showInfo = false;

                        if (k == "npc_dota_tower") {
                            console.log('npc_dota_tower');
                            marker.events.register("click", markers[k], handleTowerMarkerClick);
                            marker.events.register("touchstart", markers[k], handleTowerMarkerClick);
                            marker.tower_loc = data[k][i];
                        }
                    }
                }
                // Set up tree layer without creating tree markers yet
                else if (k == "ent_dota_tree") {
                    markers[k] = new OpenLayers.Layer.Markers(layerNames[k], {visibility: false});
                    map.addLayer(markers[k]);
                    //markers[k].setVisibility(false);
                    markers[k].data = data[k];
                }
                // Create neutral spawn markers and rectangles
                else if (k == "trigger_multiple") {
                    loadJSONData(markers, k, "npc_dota_neutral_spawner_box", data[k]);
                }
            }
            else if (VISION_SIMULATION) {
                if (k === "no_wards") {
                    loadGeoJSONData(markers, k, layerNames[k], style.red);
                }
                else if (k === "ent_fow_blocker_node") {
                    loadGeoJSONData(markers, k, layerNames[k], style.lightblue);
                }
            }
        });        

        map_data = data;
        
        map.raiseLayer(vectorLayer, map.layers.length);

        // Create tree markers the first time the tree layer is switched to
        map.events.register("changelayer", map, layerChangeHandler);

        parseQueryString();
    }
    
    function layerChangeHandler(event) {
        if (event.property === "visibility" && event.layer.name == layerNames["ent_dota_tree"] && !event.layer.loaded) {
            loadTreeData();
        }

        if (event.property === "visibility") {
            if (event.layer.isBaseLayer) {
                QueryString.setQueryString('BaseLayer', event.layer.name.replace(/ /g, ''));
            }
            else {
                QueryString.setQueryString(event.layer.name.replace(/ /g, ''), event.layer.visibility ? true : null);
            }
        }
    }

    function loadTreeData() {
        console.log('start tree load');
        var layer = map.getLayersByName(layerNames["ent_dota_tree"])[0];
        console.log(layer);
        for (var i = 0; i < layer.data.length; i++) {
            var latlon = worldToLatLon(layer.data[i].x, layer.data[i].y);
            marker = addMarker(layer, new OpenLayers.LonLat(latlon.x, latlon.y), OpenLayers.Popup.FramedCloud, "Click to cut down tree.<br>This will affect the ward vision simulation.", false);
            marker.treeVisible = true;
            marker.tree_loc = layer.data[i].x + ',' + layer.data[i].y;
            if (VISION_SIMULATION) {
                marker.events.register("click", layer, handleTreeMarkerClick);
            }
            treeMarkers[layer.data[i].x + ',' + layer.data[i].y] = marker;
        }
        layer.loaded = !layer.loaded;
        console.log('end tree load');
    }

    function loadJSONData(markers, k, name, data) {
        markers[name] = new OpenLayers.Layer.Vector(layerNames[k]);
        map.addLayer(markers[name]);
        markers[name].setVisibility(false);
        for (var i = 0; i < data.length; i++) {
            pnt = [];
            for (var j = 0; j < data[i].length; j++) {
                var latlon = worldToLatLon(data[i][j].x, data[i][j].y);
                pnt.push(new OpenLayers.Geometry.Point(latlon.x, latlon.y));
            }


            ln = new OpenLayers.Geometry.LinearRing(pnt);
            pf = new OpenLayers.Feature.Vector(ln, null, style.green);
            markers[name].addFeatures([pf]);
        }
    }

    // Initialize map settings based on query string values
    function parseQueryString() {
        var mode = QueryString.getParameterByName('mode');
        if (mode) {
            var modeRadioButton = document.getElementById(mode + 'Toggle');
            if (modeRadioButton) {
                modeRadioButton.checked = true;
                toggleControl.call(modeRadioButton);
            }
        }
        var zoom = QueryString.getParameterByName('zoom');
        if (zoom) {
            map.zoomTo(parseInt(zoom));
        }
        var worldX = QueryString.getParameterByName('x');
        var worldY = QueryString.getParameterByName('y');
        if (worldX && worldY) {
            var lonlat = worldToLatLon(worldX, worldY);
            map.setCenter(new OpenLayers.LonLat(lonlat.x, lonlat.y), undefined, false, false);
        }
        
        var keys = ['observer', 'sentry'];
        for (var i = 0; i < keys.length; i++) {
            var wards = QueryString.getParameterByName(keys[i])
            if (wards) {
                ward_coordinates = trim(wards, ' ;').split(';')
                ward_coordinates.map(function(el) {
                    var coord = el.split(',');
                    var xy = worldToLatLon(parseFloat(coord[0]), parseFloat(coord[1]));
                    placeWard(new OpenLayers.LonLat(xy.x, xy.y), keys[i], el);
                });
            }
        }
        
        var baseLayerName = QueryString.getParameterByName('BaseLayer');
        if (baseLayerName) {
            for (var i = 0; i < baseLayers.length; i++) {
                var layer = baseLayers[i];
                var layerName = layer.name.replace(/ /g, '');
                if (baseLayerName === layerName) {
                    map.setBaseLayer(layer);
                    break;
                }
            }
        }
        
        for (k in layerNames) {
            var layerName = layerNames[k].replace(/ /g, '');
            value = QueryString.getParameterByName(layerName);
            if (value) {
                var layer = map.getLayersByName(layerNames[k])[0];
                console.log('parseQueryString', layer, layerNames[k], layerName, value == "true");
                if (layer) layer.setVisibility(value == "true");
            }
        }

        var cut_trees = QueryString.getParameterByName('cut_trees');
        if (cut_trees) {
            var layer = map.getLayersByName(layerNames["ent_dota_tree"])[0];
            if (!layer.loaded) loadTreeData();
            cut_tree_coordinates = trim(cut_trees, ' ;').split(';')
            console.log(treeMarkers, cut_tree_coordinates);
            for (var i = 0; i < cut_tree_coordinates.length; i++) {
                console.log(cut_tree_coordinates[i]);
                if (treeMarkers[cut_tree_coordinates[i]]) {
                    setTreeMarkerState(treeMarkers[cut_tree_coordinates[i]], false);
                }
            }
        }

        var tower_vision = QueryString.getParameterByName('tower_vision');
        if (tower_vision) {
            var layer = map.getLayersByName(layerNames["npc_dota_tower"])[0];
            tower_vision_coordinates = trim(tower_vision, ' ;').split(';')
            console.log('tower_vision', layer);
            console.log(treeMarkers, tower_vision_coordinates);
            for (var i = 0; i < tower_vision_coordinates.length; i++) {
                for (var j = 0; j < layer.markers.length; j++) {
                    if (layer.markers[j].tower_loc.x + ',' + layer.markers[j].tower_loc.y == tower_vision_coordinates[i]) {
                        handleTowerMarkerClick({
                            object: layer.markers[j]
                        }, true);
                    }
                }
            }
        }
    }
    
    function setTreeQueryString() {
        var value = Object.keys(cutTrees).join(';');
        QueryString.setQueryString('cut_trees', value || null);
    }

    function getJSON(path, callback) {
        console.log('getJSON', path);
        var request = new XMLHttpRequest();

        request.open('GET', path, true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                callback(data);
            } else {
                alert('Error loading page.');
            }
        };
        request.onerror = function() {
            alert('Error loading page.');
        };
        request.send();
        return request;
    }

    /********************
     * INITITIALIZATION *
     ********************/
    OpenLayers.ImgPath = IMG_DIR;
    
    // Start setting up the map, adding controls and layers
    baseLayers.forEach(function(layer) {
        map.addLayer(layer);
    });
    map.addLayer(cursorLayer);
    map.addLayer(dayRangeLayer);
    map.addLayer(nightRangeLayer);
    map.addLayer(trueSightRangeLayer);
    map.addLayer(attackRangeLayer);
    map.addLayer(polygonLayer);
    map.addLayer(wardVisionLayer);
    map.addLayer(visionSimulationLayer);
    map.addLayer(iconLayer);
    map.addControl(coordinateControl);
    map.addControl(new OpenLayers.Control.TouchNavigation({
        dragPanOptions: {
            enableKinetic: true
        }
    }));
    map.addControl(new OpenLayers.Control.KeyboardDefaults());
    map.addControl(layerSwitcher);
    layerSwitcher.maximizeControl();
    if (!map.getCenter()) {
        map.zoomToMaxExtent();
    }
    
    // create click handler
    OpenLayers.Control.Click = OpenLayers.Class(OpenLayers.Control, {
        defaultHandlerOptions: {
            single: true,
            "double": false,
            pixelTolerance: 0,
            stopSingle: false,
            stopDouble: false
        },
        initialize: function(options) {
            this.handlerOptions = OpenLayers.Util.extend({}, this.defaultHandlerOptions);
            OpenLayers.Control.prototype.initialize.apply(this, arguments);
            this.handler = new OpenLayers.Handler.Click(this, {
                click: this.onClick,
                dblclick: this.onDblclick
            }, this.handlerOptions);
        },
        onClick: handleOnClick,
        onDblclick: function(event) {
            var output = document.getElementById(this.key + "Output"),
                msg = "dblclick " + event.xy;
            output.value = output.value + msg + "\n";
        }
    });

    // Controls configuration
    renderer = renderer ? [renderer] : OpenLayers.Layer.Vector.prototype.renderers;
    drawControls = {
        line: new OpenLayers.Control.Measure(OpenLayers.Handler.Path, {
            persist: true,
            immediate: true,
            handlerOptions: {
                layerOptions: {
                    renderers: renderer
                }
            }
        }),
        circle: new OpenLayers.Control.Measure(OpenLayers.Handler.Path, {
            persist: false,
            immediate: true,
            handlerOptions: {
                layerOptions: {
                    renderers: renderer
                }
            }
        }),
        observer: new OpenLayers.Control.Click({
            onClick: handleWardClick('observer'),
            handlerOptions: {
                single: true
            }
        }),
        sentry: new OpenLayers.Control.Click({
            onClick: handleWardClick('sentry'),
            handlerOptions: {
                single: true
            }
        }),
        polygonControl: new OpenLayers.Control.DrawFeature(polygonLayer, OpenLayers.Handler.RegularPolygon, {
            handlerOptions: {
                sides: 30
            }
        }),
        select: new OpenLayers.Control.SelectFeature(polygonLayer, {
            hover: true,
            highlightOnly: false,
            callbacks: {
                click: function(feature) {
                    var element = document.getElementById("output");
                    if (feature.measure_control && feature.is_measuring) {
                        feature.measure_control.cancel();
                        feature.is_measuring = false;
                        this.highlight(feature);
                    } else {
                        element.innerHTML = "";
                        polygonLayer.removeFeatures(feature);
                    }
                }
            },
            overFeature: function(feature) {
                var element = document.getElementById("output"),
                    out = "Radius: " + (.565352 * Math.sqrt(feature.geometry.getArea()) * mapConstants.scale).toFixed(0) + " units";
                element.innerHTML = out;
                this.highlight(feature);
            },
            outFeature: function(feature) {
                var element = document.getElementById("output");
                element.innerHTML = "";
                this.unhighlight(feature)
            }
        })
    };

    // Add controls to map
    for (var key in drawControls) {
        if (key == "line") {
            drawControls[key].events.on({
                measure: handleMeasurements,
                measurepartial: handleMeasurements
            })
        }
        if (key == "circle") {
            drawControls[key].events.on({
                measure: handleCircleMeasurements,
                measurepartial: handleCircleMeasurementsPartial
            })
        }
        map.addControl(drawControls[key]);
    }

    map.events.register("zoomend", map, function(){
        QueryString.setQueryString('zoom', map.zoom);
    });

    map.events.register("moveend", map, function(){
        var worldXY = latLonToWorld(map.center.lon, map.center.lat);
        QueryString.setQueryString('x', worldXY.x.toFixed(0));
        QueryString.setQueryString('y', worldXY.y.toFixed(0));
    });

    // X/Y coordinate update display handler
    coordinateControl.formatOutput = function (lonlat) {
        var worldXY = latLonToWorld(lonlat.lon, lonlat.lat);
        return worldXY.x.toFixed(0) + ', ' + worldXY.y.toFixed(0);
    };
    
    map.events.register("mousemove", map, function(e) {
        /*if (wardVisionLayer.cursor_marker) {
            if (wardVisionLayer.cursor_marker.vision_center_feature) wardVisionLayer.removeFeatures(wardVisionLayer.cursor_marker.vision_center_feature);
            if (wardVisionLayer.cursor_marker.vision_feature) wardVisionLayer.removeFeatures(wardVisionLayer.cursor_marker.vision_feature);
            wardVisionLayer.removeFeatures(wardVisionLayer.cursor_marker);
        }*/
        cursorLayer.destroyFeatures();
    
        // create and add cursor marker polygon if in place observer mode
        if (VISION_SIMULATION && document.getElementById("observerToggle").checked) {
            var lonlat = map.getLonLatFromPixel(e.xy);
            if (!mapBounds.containsLonLat(lonlat)) return;
            
            var worldXY = latLonToWorld(lonlat.lon, lonlat.lat);
            var gridXY = vs.WorldXYtoGridXY(worldXY.x, worldXY.y);
            
            var treePts = vs.tree_relations[gridXY.key];
            var treeBlocking = false;
            if (treePts) {
                for (var i = 0 ; i < treePts.length; i++) {
                    var treePt = treePts[i];
                    treeBlocking = vs.tree_state[treePt.key];
                    if (treeBlocking) break;
                }
            }
            var cursor_style = style.green;
            if (!vs.isValidXY(gridXY.x, gridXY.y, true, true, true)) {
                cursor_style = style.red;
            }
            var box_feature = createTileFeature(vs.GridXYtoWorldXY(gridXY.x, gridXY.y), cursor_style);
            cursorLayer.addFeatures([box_feature]);
            //wardVisionLayer.cursor_marker = box_feature;
            
            if (VISION_SIMULATION_ALWAYS) updateVisibilityHandler(lonlat, null, ENTITIES.observer.radius);
        }
    });

    // Show/hide controls panel
    document.getElementById("controls-max").addEventListener("click", function(e) {
        document.querySelector(".controls").style.display = '';
        document.getElementById("controls-min").style.display = 'block';
        this.style.display = 'none';
        if (layerSwitcher.isSmallScreen()) {
            layerSwitcher.minimizeControl();
        }
        if (e) e.preventDefault();
    }, false);
    
    function minimizeControlList(e) {
        document.querySelector(".controls").style.display = 'none';
        document.getElementById("controls-max").style.display = 'block';
        this.style.display = 'none';
        if (e) e.preventDefault();
    }
    document.getElementById("controls-min").addEventListener("click", minimizeControlList, false);
    
    // Initially hide controls if screen is small
    if (layerSwitcher.isSmallScreen()) {
        minimizeControlList.call(document.getElementById("controls-min"));
        layerSwitcher.minimizeControl();
    }

    // Show/hide X/Y coordinate display
    document.getElementById("coordControl").addEventListener("change", function(e) {
        if (this.checked) {
            document.querySelector(".olControlMousePosition").style.display = 'block';
        } else {
            document.querySelector(".olControlMousePosition").style.display = 'none';
        }
    }, false);

    // Vision simulation on/off
    document.getElementById("visionSimulationControl").addEventListener("change", function(e) {
        VISION_SIMULATION = this.checked;
        document.getElementById("alwaysSimulateControl").disabled = !this.checked;
    }, false);

    // Always simulate vision on/off
    document.getElementById("alwaysSimulateControl").addEventListener("change", function(e) {
        VISION_SIMULATION_ALWAYS = this.checked;
    }, false);

    // Update travel time display when movespeed input changes
    document.getElementById("movespeed").addEventListener("change", function(e) {
        document.getElementById("traveltime").innerHTML = (lastDistance / document.getElementById("movespeed").value).toFixed(2);
    }, false);

    // Set up panel radio button toggle handlers
    document.getElementById('navigateToggle').addEventListener('click', toggleControl, false);
    document.getElementById('lineToggle').addEventListener('click', toggleControl, false);
    document.getElementById('circleToggle').addEventListener('click', toggleControl, false);
    document.getElementById('observerToggle').addEventListener('click', toggleControl, false);
    document.getElementById('sentryToggle').addEventListener('click', toggleControl, false);
    
    document.getElementById('reset').addEventListener('click', function () {
        history.replaceState(null, "", window.location.href.split("?")[0]);
        resetMarkerLayers();
        polygonLayer.destroyFeatures();
        wardVisionLayer.destroyFeatures();
        visionSimulationLayer.destroyFeatures();
        iconLayer.clearMarkers();
        drawControls.line.cancel();
        drawControls.circle.cancel();
        map.setBaseLayer(baseLayers[0]);
        map.zoomToMaxExtent();
        document.getElementById('dataControl').selectedIndex = 0;
        init();
    }, false);
    
    document.getElementById('dataControl').addEventListener('change', function () {
        QueryString.setQueryString('data', document.getElementById('dataControl').value);
        resetMarkerLayers();
        init();
    }, false);
    
    function init() {
        var data = QueryString.getParameterByName('data');
        if (data) {
            document.getElementById('dataControl').value = data;
        }
        VISION_SIMULATION = data != "687";
        //document.querySelector('label[for="visionSimulationControl"]').style.display = VISION_SIMULATION ? 'inline' : 'none';
        document.getElementById("visionSimulationControl").disabled = !VISION_SIMULATION;
        document.getElementById("alwaysSimulateControl").disabled = !VISION_SIMULATION;
        getJSON(map_data_path + getDataVersion() + '/mapdata.json', onMapDataLoad);
    }
    
    function getDataVersion() {
        return document.getElementById('dataControl').value;
    }

    function updateVisibilityHandler(latlon, marker, radius) {
        //console.log(latlon, marker, radius);
        var worldXY = latLonToWorld(latlon.lon, latlon.lat);
        var gridXY = vs.WorldXYtoGridXY(worldXY.x, worldXY.y);
        if (vs.isValidXY(gridXY.x, gridXY.y, true, true, true)) {
            // create and add center marker polygon
            var box_feature = createTileFeature(vs.GridXYtoWorldXY(gridXY.x, gridXY.y), style.green);
            if (marker) {
                visionSimulationLayer.addFeatures([box_feature]);
                marker.vision_center_feature = box_feature;
            }

            // execute vision simulation
            vs.updateVisibility(gridXY.x, gridXY.y, getTileRadius(radius));
            
            // merge light points into a single polygon and add to vision layer
            var outlines = getLightUnion(vs.grid, vs.lights);
            var polygonList = outlines.map(function (outlinePoints) {
                var ringPoints = outlinePoints.map(function (pt) {
                    var worldXY = vs.GridXYtoWorldXY(pt.x, pt.y);
                    var latlon = worldToLatLon(worldXY.x, worldXY.y);
                    return new OpenLayers.Geometry.Point(latlon.x, latlon.y);
                });
                var ring = new OpenLayers.Geometry.LinearRing(ringPoints);
                return new OpenLayers.Geometry.Polygon([ring]);
            });
            var multiPolygon = new OpenLayers.Geometry.MultiPolygon(polygonList);
            var visionFeature = new OpenLayers.Feature.Vector(multiPolygon, null, style.yellow);
            if (marker) {
                visionSimulationLayer.addFeatures([visionFeature]);
                marker.vision_feature = visionFeature;
            }
            else {
                cursorLayer.addFeatures([visionFeature]);
            }
        }
    }
    
    var getSizePoll;
    var t1 = Date.now();
    var vs = new VisionSimulation(worlddata, vision_data_image_path, function () {
        console.log('vs loaded', Date.now() - t1);
        console.log('map.getSize()', map.getSize());
        initCheck();
    });
    
    var initCheckCount = 0;
    var maxInitCheckCount = 40;
    function initCheck() {
        if (map.getSize()) {
            init();
        }
        else {
            initCheckCount++;
            console.log('map size null');
            if (initCheckCount < maxInitCheckCount) {
                map.updateSize();
                setTimeout(initCheck, 250);
            }
            else {
                rollbar.error("Max init check exceeded");
                alert("There was a problem loading the map.");
            }
        }
    }
    
    function loadGeoJSONData(markers, k, name, style) {
        var filename = map_data_path + getDataVersion() + '/' + k + '2.json';
        markers[k] = new OpenLayers.Layer.Vector(name, {
            strategies: [new OpenLayers.Strategy.Fixed()],
            protocol: new OpenLayers.Protocol.HTTP({
                url: filename,
                format: new OpenLayers.Format.GeoJSON()
            }),
            visibility: false
        });
        markers[k].style = style;
        map.addLayer(markers[k]);
    }
}

module.exports = App;
},{"./conversionFunctions":3,"./getLightUnion":4,"./mapConstants":5,"./styleConstants":6,"./util/queryString":7,"./util/trim":8,"dota-vision-simulation":13,"dota-vision-simulation/src/worlddata.json":14,"rollbar-browser":1}],3:[function(require,module,exports){
var mapConstants = require('./mapConstants');

function lerp(minVal, maxVal, pos_r) {
    return pos_r * (maxVal - minVal) + minVal;
}

function reverseLerp(minVal, maxVal, pos) {
    return (pos - minVal) / (maxVal - minVal);
}

function latLonToWorld(x, y) {
    var x_r = lerp(mapConstants.map_x_boundaries[0], mapConstants.map_x_boundaries[1], x / mapConstants.map_w),
        y_r = lerp(mapConstants.map_y_boundaries[0], mapConstants.map_y_boundaries[1], (mapConstants.map_h - y) / mapConstants.map_h);

    return {
        x: x_r,
        y: y_r
    };
}

function worldToLatLon(x_r, y_r) {
    var x = reverseLerp(mapConstants.map_x_boundaries[0], mapConstants.map_x_boundaries[1], x_r) * mapConstants.map_w,
        y = mapConstants.map_h - reverseLerp(mapConstants.map_y_boundaries[0], mapConstants.map_y_boundaries[1], y_r) * mapConstants.map_h;

    return {
        x: x,
        y: y
    };
}

function getTileRadius(r) {
    return parseInt(Math.floor(r / 64));
}

function getScaledRadius(r) {
    return r / (mapConstants.map_x_boundaries[1] - mapConstants.map_x_boundaries[0]) * mapConstants.map_w
}

function calculateDistance(order, units, measure) {
    if (order == 1) {
        if (units == "km") {
            return measure * mapConstants.scale * 1000;
        } else {
            return measure * mapConstants.scale;
        }
    } else {
        return measure * mapConstants.scale;
    }
}

module.exports = {
    lerp: lerp,
    reverseLerp: reverseLerp,
    latLonToWorld: latLonToWorld,
    worldToLatLon: worldToLatLon,
    getTileRadius: getTileRadius,
    getScaledRadius: getScaledRadius,
    calculateDistance: calculateDistance
}
},{"./mapConstants":5}],4:[function(require,module,exports){
var VisionSimulation = require("dota-vision-simulation");
var key2pt = VisionSimulation.prototype.key2pt;
var xy2key = VisionSimulation.prototype.xy2key;
var xy2pt = VisionSimulation.prototype.xy2pt;

function processNeighbors(grid, lights, components, key, index) {
    var pt = key2pt(key);
    var dirs = [[1, 0], [0, -1], [-1, 0], [0, 1]];
    for (var i = 0; i < dirs.length; i++) {
        var aX = pt.x+dirs[i][0];
        var aY = pt.y+dirs[i][1];
        if (!grid[aX] || !grid[aX][aY]) continue;
        var keyAdj = grid[aX][aY].key
        if (components[keyAdj] || !lights[keyAdj]) continue;
        components[keyAdj] = index;
        processNeighbors(grid, lights, components, keyAdj, index);
    }
}

function getLightUnion(grid, lights) {
    var components = {};
    var index = 1;
    for (var key in lights) {
        if (!components[key]) {
            components[key] = index;
            processNeighbors(grid, lights, components, key, index);
            index++;
        }
    }
    
    var outlines = [];
    for (var i = 1; i < index; i++) {
        outlines.push(getOutline(grid, components, i))
    }
    return outlines;
}

function isSideFree(grid, components, pt, dir) {
    var aX = pt.x+dir[0];
    var aY = pt.y+dir[1];
    if (!grid[aX] || !grid[aX][aY]) return true;
    var keyAdj = grid[aX][aY].key
    return !components[keyAdj];
}

function notSurrounded(grid, components, pt) {
    for (var i = 0; i < 8; i+=2) {
        var aX = pt.x+Math.round(Math.cos(2 * Math.PI - Math.PI/4 * i));
        var aY = pt.y+Math.round(Math.sin(2 * Math.PI - Math.PI/4 * i));
        if (!grid[aX] || !grid[aX][aY]) return i;
        var keyAdj = grid[aX][aY].key
        if (!components[keyAdj]) return i;
    }
    return null;
}

function mod(n, m) {
        return ((n % m) + m) % m;
}

function getOutline(grid, components, index) {
    var outlinePoints = [];
    var startKey;
    var dir = null;
    for (var key in components) {
        var pt = key2pt(key);
        dir = notSurrounded(grid, components, pt);
        if (components[key] == index && dir !== null) {
            startKey = key;
            break;
        }
    }
    var next = processNext(grid, components, startKey, dir);
    while (startKey !== next.key || dir !== next.dir) {
        outlinePoints.push(next.point);
        next = processNext(grid, components, next.key, next.dir);
    }
    outlinePoints.push(next.point);
    return outlinePoints;
}

function checkAdj(grid, components, pt, key, dir, i, adjDir) {
    var aX = pt.x+dir[0];
    var aY = pt.y+dir[1];
    if (!grid[aX] || !grid[aX][aY]) return;
    var ptAdj = grid[pt.x+dir[0]][pt.y+dir[1]];
    if (components[ptAdj.key] == components[key] && isSideFree(grid, components, ptAdj, adjDir)) {
        return {
            key: ptAdj.key,
            dir: i
        }
    }
}

function processNext(grid, components, key, i) {
    var pt = key2pt(key);
    var next;
    
    var x = Math.round(Math.cos(2 * Math.PI - Math.PI/4 * i));
    var y = Math.round(Math.sin(2 * Math.PI - Math.PI/4 * i));
    
    var nI = mod(i+2, 8);
    var nX = Math.round(Math.cos(2 * Math.PI - Math.PI/4 * nI));
    var nY = Math.round(Math.sin(2 * Math.PI - Math.PI/4 * nI));
    
    var bI = mod(i-1, 8);
    var bX = Math.round(Math.cos(2 * Math.PI - Math.PI/4 * bI));
    var bY = Math.round(Math.sin(2 * Math.PI - Math.PI/4 * bI));

    if (isSideFree(grid, components, pt, [nX, nY])) {
        return {
            key: key,
            dir: mod(i+2, 8),
            point: xy2pt(pt.x+bX/2, pt.y+bY/2)
        }
    }
    if (!next) next = checkAdj(grid, components, pt, key, [nX, nY], i, [x, y]);
    if (!next) {
        var aI = mod(i + 1, 8);
        var aX = Math.round(Math.cos(2 * Math.PI - Math.PI/4 * aI));
        var aY = Math.round(Math.sin(2 * Math.PI - Math.PI/4 * aI));
        var pI = mod(i - 2, 8);
        var pX = Math.round(Math.cos(2 * Math.PI - Math.PI/4 * pI));
        var pY = Math.round(Math.sin(2 * Math.PI - Math.PI/4 * pI));
        next = checkAdj(grid, components, pt, key, [aX, aY], pI, [pX, pY]);
    }
    if (next) {
        next.point = xy2pt(pt.x+bX/2, pt.y+bY/2);
        return next;
    }
    else {
        console.log('error');
    }
}

module.exports = getLightUnion;
},{"dota-vision-simulation":13}],5:[function(require,module,exports){
var mapConstants = {
    map_w: 16384,
    map_h: 16384,
    map_x_boundaries: [-8475.58617377, 9327.49124559],
    map_y_boundaries: [9028.52473332, -8836.61406266]
}
mapConstants.scale = Math.abs(mapConstants.map_x_boundaries[1] - mapConstants.map_x_boundaries[0]) / mapConstants.map_w;

module.exports = mapConstants;
},{}],6:[function(require,module,exports){
module.exports = {
    lightblue: {
        strokeColor: "#007FFF",
        strokeOpacity: 1,
        strokeWidth: 1,
        fillColor: "#007FFF",
        fillOpacity: .4
    },
    red: {
        strokeColor: "#FF0000",
        strokeOpacity: 1,
        strokeWidth: 1,
        fillColor: "#FF0000",
        fillOpacity: .4
    },
    green: {
        strokeColor: "#00FF00",
        strokeOpacity: 1,
        strokeWidth: 1,
        fillColor: "#00FF00",
        fillOpacity: .4
    },
    yellow: {
        strokeColor: "#FFFF00",
        strokeOpacity: 1,
        strokeWidth: 1,
        fillColor: "#FFFF00",
        fillOpacity: .4
    }
};
},{}],7:[function(require,module,exports){
var trim = require('./trim');

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function setQueryString(key, value) {
    history.replaceState(null, "", updateQueryString(key, value));
}

function addQueryStringValue(key, value) {
    console.log('addQueryStringValue', key, value);
    var qs = getParameterByName(key);
    qs = trim(trim(qs, ' ;') + ';' + value, ' ;');
    history.replaceState(null, "", updateQueryString(key, qs));
}

function removeQueryStringValue(key, value) {
    console.log('removeQueryStringValue', key, value);
    var qs = getParameterByName(key);
    qs = trim(trim(qs, ' ;').replace(value, '').replace(/;;/g, ''), ' ;');
    history.replaceState(null, "", updateQueryString(key, qs != '' ? qs : null));
}

function updateQueryString(key, value, url) {
    if (!url) url = window.location.href;
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
        hash;

    if (re.test(url)) {
        if (typeof value !== 'undefined' && value !== null)
            return url.replace(re, '$1' + key + "=" + value + '$2$3');
        else {
            hash = url.split('#');
            url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
            if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                url += '#' + hash[1];
            return url;
        }
    } else {
        if (typeof value !== 'undefined' && value !== null) {
            var separator = url.indexOf('?') !== -1 ? '&' : '?';
            hash = url.split('#');
            url = hash[0] + separator + key + '=' + value;
            if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                url += '#' + hash[1];
            return url;
        } else {
            return url;
        }
    }
}

module.exports = {
    getParameterByName: getParameterByName,
    setQueryString: setQueryString,
    addQueryStringValue: addQueryStringValue,
    removeQueryStringValue: removeQueryStringValue,
    updateQueryString: updateQueryString
}
},{"./trim":8}],8:[function(require,module,exports){
function escapeRegex(string) {
    return string.replace(/[\[\](){}?*+\^$\\.|\-]/g, "\\$&");
}

var trim = function trim(str, characters, flags) {
    flags = flags || "g";
    if (typeof str !== "string" || typeof characters !== "string" || typeof flags !== "string") {
        throw new TypeError("argument must be string");
    }

    if (!/^[gi]*$/.test(flags)) {
        throw new TypeError("Invalid flags supplied '" + flags.match(new RegExp("[^gi]*")) + "'");
    }

    characters = escapeRegex(characters);

    return str.replace(new RegExp("^[" + characters + "]+|[" + characters + "]+$", flags), '');
};

module.exports = trim;
},{}],9:[function(require,module,exports){
var PNG = require('png-js');

function ImageHandler(imagePath) {
    this.imagePath = imagePath;
    self.canvas = null;
    self.png = null;
}
ImageHandler.prototype.load = function (callback) {
    var self = this;
    var t1 = Date.now();
    self.canvas = document.createElement("canvas");
    PNG.load(this.imagePath, self.canvas, function(png) {
        self.png = png;
        self.ctx = self.canvas.getContext("2d");
        callback();
    });
}
ImageHandler.prototype.scan = function (offset, width, height, pixelHandler, grid) {
    var imgData = this.ctx.getImageData(offset, 0, width, height);
    var data = imgData.data;

    for (var i = 0; i < data.length; i += 4) {
        var r = data[i];
        var g = data[i+1];
        var b = data[i+2];
        var alpha = data[i+3];
        var x = Math.floor((i/4) % width);
        var y = Math.floor((i/4) / height);
        pixelHandler(x, y, [r, g, b], grid);
    }
}

module.exports = ImageHandler;
},{"png-js":10}],10:[function(require,module,exports){
// Generated by CoffeeScript 1.4.0

/*
# MIT LICENSE
# Copyright (c) 2011 Devon Govett
# 
# Permission is hereby granted, free of charge, to any person obtaining a copy of this 
# software and associated documentation files (the "Software"), to deal in the Software 
# without restriction, including without limitation the rights to use, copy, modify, merge, 
# publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons 
# to whom the Software is furnished to do so, subject to the following conditions:
# 
# The above copyright notice and this permission notice shall be included in all copies or 
# substantial portions of the Software.
# 
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
# BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
# DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var FlateStream = require('./zlib');

  var PNG;

  PNG = (function() {
    PNG.load = function(url, canvas, callback) {
      var xhr,
        _this = this;
      if (typeof canvas === 'function') {
        callback = canvas;
      }
      xhr = new XMLHttpRequest;
      xhr.open("GET", url, true);
      xhr.responseType = "arraybuffer";
      xhr.onload = function() {
        var data, png;
        data = new Uint8Array(xhr.response || xhr.mozResponseArrayBuffer);
        png = new PNG(data);
        if (typeof (canvas != null ? canvas.getContext : void 0) === 'function') {
          png.render(canvas);
        }
        return typeof callback === "function" ? callback(png) : void 0;
      };
      return xhr.send(null);
    };

    function PNG(data) {
      var chunkSize, colors, delayDen, delayNum, frame, i, index, key, section, short, text, _i, _j, _ref;
      this.data = data;
      this.pos = 8;
      this.palette = [];
      this.imgData = [];
      this.transparency = {};
      this.text = {};
      frame = null;
      while (true) {
        chunkSize = this.readUInt32();
        section = ((function() {
          var _i, _results;
          _results = [];
          for (i = _i = 0; _i < 4; i = ++_i) {
            _results.push(String.fromCharCode(this.data[this.pos++]));
          }
          return _results;
        }).call(this)).join('');
        switch (section) {
          case 'IHDR':
            this.width = this.readUInt32();
            this.height = this.readUInt32();
            this.bits = this.data[this.pos++];
            this.colorType = this.data[this.pos++];
            this.compressionMethod = this.data[this.pos++];
            this.filterMethod = this.data[this.pos++];
            this.interlaceMethod = this.data[this.pos++];
            break;
          case 'PLTE':
            this.palette = this.read(chunkSize);
            break;
          case 'IDAT':
            if (section === 'fdAT') {
              this.pos += 4;
              chunkSize -= 4;
            }
            data = (frame != null ? frame.data : void 0) || this.imgData;
            for (i = _i = 0; 0 <= chunkSize ? _i < chunkSize : _i > chunkSize; i = 0 <= chunkSize ? ++_i : --_i) {
              data.push(this.data[this.pos++]);
            }
            break;
          case 'tRNS':
            this.transparency = {};
            switch (this.colorType) {
              case 3:
                this.transparency.indexed = this.read(chunkSize);
                short = 255 - this.transparency.indexed.length;
                if (short > 0) {
                  for (i = _j = 0; 0 <= short ? _j < short : _j > short; i = 0 <= short ? ++_j : --_j) {
                    this.transparency.indexed.push(255);
                  }
                }
                break;
              case 0:
                this.transparency.grayscale = this.read(chunkSize)[0];
                break;
              case 2:
                this.transparency.rgb = this.read(chunkSize);
            }
            break;
          case 'tEXt':
            text = this.read(chunkSize);
            index = text.indexOf(0);
            key = String.fromCharCode.apply(String, text.slice(0, index));
            this.text[key] = String.fromCharCode.apply(String, text.slice(index + 1));
            break;
          case 'IEND':
            if (frame) {
              this.animation.frames.push(frame);
            }
            this.colors = (function() {
              switch (this.colorType) {
                case 0:
                case 3:
                case 4:
                  return 1;
                case 2:
                case 6:
                  return 3;
              }
            }).call(this);
            this.hasAlphaChannel = (_ref = this.colorType) === 4 || _ref === 6;
            colors = this.colors + (this.hasAlphaChannel ? 1 : 0);
            this.pixelBitlength = this.bits * colors;
            this.colorSpace = (function() {
              switch (this.colors) {
                case 1:
                  return 'DeviceGray';
                case 3:
                  return 'DeviceRGB';
              }
            }).call(this);
            this.imgData = new Uint8Array(this.imgData);
            return;
          default:
            this.pos += chunkSize;
        }
        this.pos += 4;
        if (this.pos > this.data.length) {
          throw new Error("Incomplete or corrupt PNG file");
        }
      }
      return;
    }

    PNG.prototype.read = function(bytes) {
      var i, _i, _results;
      _results = [];
      for (i = _i = 0; 0 <= bytes ? _i < bytes : _i > bytes; i = 0 <= bytes ? ++_i : --_i) {
        _results.push(this.data[this.pos++]);
      }
      return _results;
    };

    PNG.prototype.readUInt32 = function() {
      var b1, b2, b3, b4;
      b1 = this.data[this.pos++] << 24;
      b2 = this.data[this.pos++] << 16;
      b3 = this.data[this.pos++] << 8;
      b4 = this.data[this.pos++];
      return b1 | b2 | b3 | b4;
    };

    PNG.prototype.readUInt16 = function() {
      var b1, b2;
      b1 = this.data[this.pos++] << 8;
      b2 = this.data[this.pos++];
      return b1 | b2;
    };

    PNG.prototype.decodePixels = function(data) {
      var byte, c, col, i, left, length, p, pa, paeth, pb, pc, pixelBytes, pixels, pos, row, scanlineLength, upper, upperLeft, _i, _j, _k, _l, _m;
      if (data == null) {
        data = this.imgData;
      }
      if (data.length === 0) {
        return new Uint8Array(0);
      }
      data = new FlateStream(data);
      data = data.getBytes();
      pixelBytes = this.pixelBitlength / 8;
      scanlineLength = pixelBytes * this.width;
      pixels = new Uint8Array(scanlineLength * this.height);
      length = data.length;
      row = 0;
      pos = 0;
      c = 0;
      while (pos < length) {
        switch (data[pos++]) {
          case 0:
            for (i = _i = 0; _i < scanlineLength; i = _i += 1) {
              pixels[c++] = data[pos++];
            }
            break;
          case 1:
            for (i = _j = 0; _j < scanlineLength; i = _j += 1) {
              byte = data[pos++];
              left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
              pixels[c++] = (byte + left) % 256;
            }
            break;
          case 2:
            for (i = _k = 0; _k < scanlineLength; i = _k += 1) {
              byte = data[pos++];
              col = (i - (i % pixelBytes)) / pixelBytes;
              upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
              pixels[c++] = (upper + byte) % 256;
            }
            break;
          case 3:
            for (i = _l = 0; _l < scanlineLength; i = _l += 1) {
              byte = data[pos++];
              col = (i - (i % pixelBytes)) / pixelBytes;
              left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
              upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
              pixels[c++] = (byte + Math.floor((left + upper) / 2)) % 256;
            }
            break;
          case 4:
            for (i = _m = 0; _m < scanlineLength; i = _m += 1) {
              byte = data[pos++];
              col = (i - (i % pixelBytes)) / pixelBytes;
              left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
              if (row === 0) {
                upper = upperLeft = 0;
              } else {
                upper = pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
                upperLeft = col && pixels[(row - 1) * scanlineLength + (col - 1) * pixelBytes + (i % pixelBytes)];
              }
              p = left + upper - upperLeft;
              pa = Math.abs(p - left);
              pb = Math.abs(p - upper);
              pc = Math.abs(p - upperLeft);
              if (pa <= pb && pa <= pc) {
                paeth = left;
              } else if (pb <= pc) {
                paeth = upper;
              } else {
                paeth = upperLeft;
              }
              pixels[c++] = (byte + paeth) % 256;
            }
            break;
          default:
            throw new Error("Invalid filter algorithm: " + data[pos - 1]);
        }
        row++;
      }
      return pixels;
    };

    PNG.prototype.decodePalette = function() {
      var c, i, length, palette, pos, ret, transparency, _i, _ref, _ref1;
      palette = this.palette;
      transparency = this.transparency.indexed || [];
      ret = new Uint8Array((transparency.length || 0) + palette.length);
      pos = 0;
      length = palette.length;
      c = 0;
      for (i = _i = 0, _ref = palette.length; _i < _ref; i = _i += 3) {
        ret[pos++] = palette[i];
        ret[pos++] = palette[i + 1];
        ret[pos++] = palette[i + 2];
        ret[pos++] = (_ref1 = transparency[c++]) != null ? _ref1 : 255;
      }
      return ret;
    };

    PNG.prototype.copyToImageData = function(imageData, pixels) {
      var alpha, colors, data, i, input, j, k, length, palette, v, _ref;
      colors = this.colors;
      palette = null;
      alpha = this.hasAlphaChannel;
      if (this.palette.length) {
        palette = (_ref = this._decodedPalette) != null ? _ref : this._decodedPalette = this.decodePalette();
        colors = 4;
        alpha = true;
      }
      data = imageData.data || imageData;
      length = data.length;
      input = palette || pixels;
      i = j = 0;
      if (colors === 1) {
        while (i < length) {
          k = palette ? pixels[i / 4] * 4 : j;
          v = input[k++];
          data[i++] = v;
          data[i++] = v;
          data[i++] = v;
          data[i++] = alpha ? input[k++] : 255;
          j = k;
        }
      } else {
        while (i < length) {
          k = palette ? pixels[i / 4] * 4 : j;
          data[i++] = input[k++];
          data[i++] = input[k++];
          data[i++] = input[k++];
          data[i++] = alpha ? input[k++] : 255;
          j = k;
        }
      }
    };

    PNG.prototype.decode = function() {
      var ret;
      ret = new Uint8Array(this.width * this.height * 4);
      this.copyToImageData(ret, this.decodePixels());
      return ret;
    };

    PNG.prototype.render = function(canvas) {
      var ctx, data;
      canvas.width = this.width;
      canvas.height = this.height;
      ctx = canvas.getContext("2d");
      data = ctx.createImageData(this.width, this.height);
      this.copyToImageData(data, this.decodePixels());
      return ctx.putImageData(data, 0, 0);
    };

    return PNG;

  })();

  module.exports = PNG;
},{"./zlib":11}],11:[function(require,module,exports){
/*
 * Extracted from pdf.js
 * https://github.com/andreasgal/pdf.js
 *
 * Copyright (c) 2011 Mozilla Foundation
 *
 * Contributors: Andreas Gal <gal@mozilla.com>
 *               Chris G Jones <cjones@mozilla.com>
 *               Shaon Barman <shaon.barman@gmail.com>
 *               Vivien Nicolas <21@vingtetun.org>
 *               Justin D'Arcangelo <justindarc@gmail.com>
 *               Yury Delendik
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

var DecodeStream = (function() {
  function constructor() {
    this.pos = 0;
    this.bufferLength = 0;
    this.eof = false;
    this.buffer = null;
  }

  constructor.prototype = {
    ensureBuffer: function decodestream_ensureBuffer(requested) {
      var buffer = this.buffer;
      var current = buffer ? buffer.byteLength : 0;
      if (requested < current)
        return buffer;
      var size = 512;
      while (size < requested)
        size <<= 1;
      var buffer2 = new Uint8Array(size);
      for (var i = 0; i < current; ++i)
        buffer2[i] = buffer[i];
      return this.buffer = buffer2;
    },
    getByte: function decodestream_getByte() {
      var pos = this.pos;
      while (this.bufferLength <= pos) {
        if (this.eof)
          return null;
        this.readBlock();
      }
      return this.buffer[this.pos++];
    },
    getBytes: function decodestream_getBytes(length) {
      var pos = this.pos;

      if (length) {
        this.ensureBuffer(pos + length);
        var end = pos + length;

        while (!this.eof && this.bufferLength < end)
          this.readBlock();

        var bufEnd = this.bufferLength;
        if (end > bufEnd)
          end = bufEnd;
      } else {
        while (!this.eof)
          this.readBlock();

        var end = this.bufferLength;
      }

      this.pos = end;
      return this.buffer.subarray(pos, end);
    },
    lookChar: function decodestream_lookChar() {
      var pos = this.pos;
      while (this.bufferLength <= pos) {
        if (this.eof)
          return null;
        this.readBlock();
      }
      return String.fromCharCode(this.buffer[this.pos]);
    },
    getChar: function decodestream_getChar() {
      var pos = this.pos;
      while (this.bufferLength <= pos) {
        if (this.eof)
          return null;
        this.readBlock();
      }
      return String.fromCharCode(this.buffer[this.pos++]);
    },
    makeSubStream: function decodestream_makeSubstream(start, length, dict) {
      var end = start + length;
      while (this.bufferLength <= end && !this.eof)
        this.readBlock();
      return new Stream(this.buffer, start, length, dict);
    },
    skip: function decodestream_skip(n) {
      if (!n)
        n = 1;
      this.pos += n;
    },
    reset: function decodestream_reset() {
      this.pos = 0;
    }
  };

  return constructor;
})();

var FlateStream = (function() {
  var codeLenCodeMap = new Uint32Array([
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15
  ]);

  var lengthDecode = new Uint32Array([
    0x00003, 0x00004, 0x00005, 0x00006, 0x00007, 0x00008, 0x00009, 0x0000a,
    0x1000b, 0x1000d, 0x1000f, 0x10011, 0x20013, 0x20017, 0x2001b, 0x2001f,
    0x30023, 0x3002b, 0x30033, 0x3003b, 0x40043, 0x40053, 0x40063, 0x40073,
    0x50083, 0x500a3, 0x500c3, 0x500e3, 0x00102, 0x00102, 0x00102
  ]);

  var distDecode = new Uint32Array([
    0x00001, 0x00002, 0x00003, 0x00004, 0x10005, 0x10007, 0x20009, 0x2000d,
    0x30011, 0x30019, 0x40021, 0x40031, 0x50041, 0x50061, 0x60081, 0x600c1,
    0x70101, 0x70181, 0x80201, 0x80301, 0x90401, 0x90601, 0xa0801, 0xa0c01,
    0xb1001, 0xb1801, 0xc2001, 0xc3001, 0xd4001, 0xd6001
  ]);

  var fixedLitCodeTab = [new Uint32Array([
    0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c0,
    0x70108, 0x80060, 0x80020, 0x900a0, 0x80000, 0x80080, 0x80040, 0x900e0,
    0x70104, 0x80058, 0x80018, 0x90090, 0x70114, 0x80078, 0x80038, 0x900d0,
    0x7010c, 0x80068, 0x80028, 0x900b0, 0x80008, 0x80088, 0x80048, 0x900f0,
    0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c8,
    0x7010a, 0x80064, 0x80024, 0x900a8, 0x80004, 0x80084, 0x80044, 0x900e8,
    0x70106, 0x8005c, 0x8001c, 0x90098, 0x70116, 0x8007c, 0x8003c, 0x900d8,
    0x7010e, 0x8006c, 0x8002c, 0x900b8, 0x8000c, 0x8008c, 0x8004c, 0x900f8,
    0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c4,
    0x70109, 0x80062, 0x80022, 0x900a4, 0x80002, 0x80082, 0x80042, 0x900e4,
    0x70105, 0x8005a, 0x8001a, 0x90094, 0x70115, 0x8007a, 0x8003a, 0x900d4,
    0x7010d, 0x8006a, 0x8002a, 0x900b4, 0x8000a, 0x8008a, 0x8004a, 0x900f4,
    0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cc,
    0x7010b, 0x80066, 0x80026, 0x900ac, 0x80006, 0x80086, 0x80046, 0x900ec,
    0x70107, 0x8005e, 0x8001e, 0x9009c, 0x70117, 0x8007e, 0x8003e, 0x900dc,
    0x7010f, 0x8006e, 0x8002e, 0x900bc, 0x8000e, 0x8008e, 0x8004e, 0x900fc,
    0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c2,
    0x70108, 0x80061, 0x80021, 0x900a2, 0x80001, 0x80081, 0x80041, 0x900e2,
    0x70104, 0x80059, 0x80019, 0x90092, 0x70114, 0x80079, 0x80039, 0x900d2,
    0x7010c, 0x80069, 0x80029, 0x900b2, 0x80009, 0x80089, 0x80049, 0x900f2,
    0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900ca,
    0x7010a, 0x80065, 0x80025, 0x900aa, 0x80005, 0x80085, 0x80045, 0x900ea,
    0x70106, 0x8005d, 0x8001d, 0x9009a, 0x70116, 0x8007d, 0x8003d, 0x900da,
    0x7010e, 0x8006d, 0x8002d, 0x900ba, 0x8000d, 0x8008d, 0x8004d, 0x900fa,
    0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c6,
    0x70109, 0x80063, 0x80023, 0x900a6, 0x80003, 0x80083, 0x80043, 0x900e6,
    0x70105, 0x8005b, 0x8001b, 0x90096, 0x70115, 0x8007b, 0x8003b, 0x900d6,
    0x7010d, 0x8006b, 0x8002b, 0x900b6, 0x8000b, 0x8008b, 0x8004b, 0x900f6,
    0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900ce,
    0x7010b, 0x80067, 0x80027, 0x900ae, 0x80007, 0x80087, 0x80047, 0x900ee,
    0x70107, 0x8005f, 0x8001f, 0x9009e, 0x70117, 0x8007f, 0x8003f, 0x900de,
    0x7010f, 0x8006f, 0x8002f, 0x900be, 0x8000f, 0x8008f, 0x8004f, 0x900fe,
    0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c1,
    0x70108, 0x80060, 0x80020, 0x900a1, 0x80000, 0x80080, 0x80040, 0x900e1,
    0x70104, 0x80058, 0x80018, 0x90091, 0x70114, 0x80078, 0x80038, 0x900d1,
    0x7010c, 0x80068, 0x80028, 0x900b1, 0x80008, 0x80088, 0x80048, 0x900f1,
    0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c9,
    0x7010a, 0x80064, 0x80024, 0x900a9, 0x80004, 0x80084, 0x80044, 0x900e9,
    0x70106, 0x8005c, 0x8001c, 0x90099, 0x70116, 0x8007c, 0x8003c, 0x900d9,
    0x7010e, 0x8006c, 0x8002c, 0x900b9, 0x8000c, 0x8008c, 0x8004c, 0x900f9,
    0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c5,
    0x70109, 0x80062, 0x80022, 0x900a5, 0x80002, 0x80082, 0x80042, 0x900e5,
    0x70105, 0x8005a, 0x8001a, 0x90095, 0x70115, 0x8007a, 0x8003a, 0x900d5,
    0x7010d, 0x8006a, 0x8002a, 0x900b5, 0x8000a, 0x8008a, 0x8004a, 0x900f5,
    0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cd,
    0x7010b, 0x80066, 0x80026, 0x900ad, 0x80006, 0x80086, 0x80046, 0x900ed,
    0x70107, 0x8005e, 0x8001e, 0x9009d, 0x70117, 0x8007e, 0x8003e, 0x900dd,
    0x7010f, 0x8006e, 0x8002e, 0x900bd, 0x8000e, 0x8008e, 0x8004e, 0x900fd,
    0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c3,
    0x70108, 0x80061, 0x80021, 0x900a3, 0x80001, 0x80081, 0x80041, 0x900e3,
    0x70104, 0x80059, 0x80019, 0x90093, 0x70114, 0x80079, 0x80039, 0x900d3,
    0x7010c, 0x80069, 0x80029, 0x900b3, 0x80009, 0x80089, 0x80049, 0x900f3,
    0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900cb,
    0x7010a, 0x80065, 0x80025, 0x900ab, 0x80005, 0x80085, 0x80045, 0x900eb,
    0x70106, 0x8005d, 0x8001d, 0x9009b, 0x70116, 0x8007d, 0x8003d, 0x900db,
    0x7010e, 0x8006d, 0x8002d, 0x900bb, 0x8000d, 0x8008d, 0x8004d, 0x900fb,
    0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c7,
    0x70109, 0x80063, 0x80023, 0x900a7, 0x80003, 0x80083, 0x80043, 0x900e7,
    0x70105, 0x8005b, 0x8001b, 0x90097, 0x70115, 0x8007b, 0x8003b, 0x900d7,
    0x7010d, 0x8006b, 0x8002b, 0x900b7, 0x8000b, 0x8008b, 0x8004b, 0x900f7,
    0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900cf,
    0x7010b, 0x80067, 0x80027, 0x900af, 0x80007, 0x80087, 0x80047, 0x900ef,
    0x70107, 0x8005f, 0x8001f, 0x9009f, 0x70117, 0x8007f, 0x8003f, 0x900df,
    0x7010f, 0x8006f, 0x8002f, 0x900bf, 0x8000f, 0x8008f, 0x8004f, 0x900ff
  ]), 9];

  var fixedDistCodeTab = [new Uint32Array([
    0x50000, 0x50010, 0x50008, 0x50018, 0x50004, 0x50014, 0x5000c, 0x5001c,
    0x50002, 0x50012, 0x5000a, 0x5001a, 0x50006, 0x50016, 0x5000e, 0x00000,
    0x50001, 0x50011, 0x50009, 0x50019, 0x50005, 0x50015, 0x5000d, 0x5001d,
    0x50003, 0x50013, 0x5000b, 0x5001b, 0x50007, 0x50017, 0x5000f, 0x00000
  ]), 5];
  
  function error(e) {
      throw new Error(e)
  }

  function constructor(bytes) {
    //var bytes = stream.getBytes();
    var bytesPos = 0;

    var cmf = bytes[bytesPos++];
    var flg = bytes[bytesPos++];
    if (cmf == -1 || flg == -1)
      error('Invalid header in flate stream');
    if ((cmf & 0x0f) != 0x08)
      error('Unknown compression method in flate stream');
    if ((((cmf << 8) + flg) % 31) != 0)
      error('Bad FCHECK in flate stream');
    if (flg & 0x20)
      error('FDICT bit set in flate stream');

    this.bytes = bytes;
    this.bytesPos = bytesPos;

    this.codeSize = 0;
    this.codeBuf = 0;

    DecodeStream.call(this);
  }

  constructor.prototype = Object.create(DecodeStream.prototype);

  constructor.prototype.getBits = function(bits) {
    var codeSize = this.codeSize;
    var codeBuf = this.codeBuf;
    var bytes = this.bytes;
    var bytesPos = this.bytesPos;

    var b;
    while (codeSize < bits) {
      if (typeof (b = bytes[bytesPos++]) == 'undefined')
        error('Bad encoding in flate stream');
      codeBuf |= b << codeSize;
      codeSize += 8;
    }
    b = codeBuf & ((1 << bits) - 1);
    this.codeBuf = codeBuf >> bits;
    this.codeSize = codeSize -= bits;
    this.bytesPos = bytesPos;
    return b;
  };

  constructor.prototype.getCode = function(table) {
    var codes = table[0];
    var maxLen = table[1];
    var codeSize = this.codeSize;
    var codeBuf = this.codeBuf;
    var bytes = this.bytes;
    var bytesPos = this.bytesPos;

    while (codeSize < maxLen) {
      var b;
      if (typeof (b = bytes[bytesPos++]) == 'undefined')
        error('Bad encoding in flate stream');
      codeBuf |= (b << codeSize);
      codeSize += 8;
    }
    var code = codes[codeBuf & ((1 << maxLen) - 1)];
    var codeLen = code >> 16;
    var codeVal = code & 0xffff;
    if (codeSize == 0 || codeSize < codeLen || codeLen == 0)
      error('Bad encoding in flate stream');
    this.codeBuf = (codeBuf >> codeLen);
    this.codeSize = (codeSize - codeLen);
    this.bytesPos = bytesPos;
    return codeVal;
  };

  constructor.prototype.generateHuffmanTable = function(lengths) {
    var n = lengths.length;

    // find max code length
    var maxLen = 0;
    for (var i = 0; i < n; ++i) {
      if (lengths[i] > maxLen)
        maxLen = lengths[i];
    }

    // build the table
    var size = 1 << maxLen;
    var codes = new Uint32Array(size);
    for (var len = 1, code = 0, skip = 2;
         len <= maxLen;
         ++len, code <<= 1, skip <<= 1) {
      for (var val = 0; val < n; ++val) {
        if (lengths[val] == len) {
          // bit-reverse the code
          var code2 = 0;
          var t = code;
          for (var i = 0; i < len; ++i) {
            code2 = (code2 << 1) | (t & 1);
            t >>= 1;
          }

          // fill the table entries
          for (var i = code2; i < size; i += skip)
            codes[i] = (len << 16) | val;

          ++code;
        }
      }
    }

    return [codes, maxLen];
  };

  constructor.prototype.readBlock = function() {
    function repeat(stream, array, len, offset, what) {
      var repeat = stream.getBits(len) + offset;
      while (repeat-- > 0)
        array[i++] = what;
    }

    // read block header
    var hdr = this.getBits(3);
    if (hdr & 1)
      this.eof = true;
    hdr >>= 1;

    if (hdr == 0) { // uncompressed block
      var bytes = this.bytes;
      var bytesPos = this.bytesPos;
      var b;

      if (typeof (b = bytes[bytesPos++]) == 'undefined')
        error('Bad block header in flate stream');
      var blockLen = b;
      if (typeof (b = bytes[bytesPos++]) == 'undefined')
        error('Bad block header in flate stream');
      blockLen |= (b << 8);
      if (typeof (b = bytes[bytesPos++]) == 'undefined')
        error('Bad block header in flate stream');
      var check = b;
      if (typeof (b = bytes[bytesPos++]) == 'undefined')
        error('Bad block header in flate stream');
      check |= (b << 8);
      if (check != (~blockLen & 0xffff))
        error('Bad uncompressed block length in flate stream');

      this.codeBuf = 0;
      this.codeSize = 0;

      var bufferLength = this.bufferLength;
      var buffer = this.ensureBuffer(bufferLength + blockLen);
      var end = bufferLength + blockLen;
      this.bufferLength = end;
      for (var n = bufferLength; n < end; ++n) {
        if (typeof (b = bytes[bytesPos++]) == 'undefined') {
          this.eof = true;
          break;
        }
        buffer[n] = b;
      }
      this.bytesPos = bytesPos;
      return;
    }

    var litCodeTable;
    var distCodeTable;
    if (hdr == 1) { // compressed block, fixed codes
      litCodeTable = fixedLitCodeTab;
      distCodeTable = fixedDistCodeTab;
    } else if (hdr == 2) { // compressed block, dynamic codes
      var numLitCodes = this.getBits(5) + 257;
      var numDistCodes = this.getBits(5) + 1;
      var numCodeLenCodes = this.getBits(4) + 4;

      // build the code lengths code table
      var codeLenCodeLengths = Array(codeLenCodeMap.length);
      var i = 0;
      while (i < numCodeLenCodes)
        codeLenCodeLengths[codeLenCodeMap[i++]] = this.getBits(3);
      var codeLenCodeTab = this.generateHuffmanTable(codeLenCodeLengths);

      // build the literal and distance code tables
      var len = 0;
      var i = 0;
      var codes = numLitCodes + numDistCodes;
      var codeLengths = new Array(codes);
      while (i < codes) {
        var code = this.getCode(codeLenCodeTab);
        if (code == 16) {
          repeat(this, codeLengths, 2, 3, len);
        } else if (code == 17) {
          repeat(this, codeLengths, 3, 3, len = 0);
        } else if (code == 18) {
          repeat(this, codeLengths, 7, 11, len = 0);
        } else {
          codeLengths[i++] = len = code;
        }
      }

      litCodeTable =
        this.generateHuffmanTable(codeLengths.slice(0, numLitCodes));
      distCodeTable =
        this.generateHuffmanTable(codeLengths.slice(numLitCodes, codes));
    } else {
      error('Unknown block type in flate stream');
    }

    var buffer = this.buffer;
    var limit = buffer ? buffer.length : 0;
    var pos = this.bufferLength;
    while (true) {
      var code1 = this.getCode(litCodeTable);
      if (code1 < 256) {
        if (pos + 1 >= limit) {
          buffer = this.ensureBuffer(pos + 1);
          limit = buffer.length;
        }
        buffer[pos++] = code1;
        continue;
      }
      if (code1 == 256) {
        this.bufferLength = pos;
        return;
      }
      code1 -= 257;
      code1 = lengthDecode[code1];
      var code2 = code1 >> 16;
      if (code2 > 0)
        code2 = this.getBits(code2);
      var len = (code1 & 0xffff) + code2;
      code1 = this.getCode(distCodeTable);
      code1 = distDecode[code1];
      code2 = code1 >> 16;
      if (code2 > 0)
        code2 = this.getBits(code2);
      var dist = (code1 & 0xffff) + code2;
      if (pos + len >= limit) {
        buffer = this.ensureBuffer(pos + len);
        limit = buffer.length;
      }
      for (var k = 0; k < len; ++k, ++pos)
        buffer[pos] = buffer[pos - dist];
    }
  };

  return constructor;
})();

module.exports = FlateStream;
},{}],12:[function(require,module,exports){
/*
	This is rot.js, the ROguelike Toolkit in JavaScript.
	Version 0.6~dev, generated on Tue Mar 17 16:16:31 CET 2015.
*/
/**
 * @namespace Top-level ROT namespace
 */
var ROT = {
	/** Directional constants. Ordering is important! */
	DIRS: {
		"4": [
			[ 0, -1],
			[ 1,  0],
			[ 0,  1],
			[-1,  0]
		],
		"8": [
			[ 0, -1],
			[ 1, -1],
			[ 1,  0],
			[ 1,  1],
			[ 0,  1],
			[-1,  1],
			[-1,  0],
			[-1, -1]
		],
		"6": [
			[-1, -1],
			[ 1, -1],
			[ 2,  0],
			[ 1,  1],
			[-1,  1],
			[-2,  0]
		]
	}
};
/**
 * Always positive modulus
 * @param {int} n Modulus
 * @returns {int} this modulo n
 */
Number.prototype.mod = function(n) {
	return ((this%n)+n)%n;
}
if (!Object.create) {  
	/**
	 * ES5 Object.create
	 */
	Object.create = function(o) {  
		var tmp = function() {};
		tmp.prototype = o;
		return new tmp();
	};  
}  
/**
 * Sets prototype of this function to an instance of parent function
 * @param {function} parent
 */
Function.prototype.extend = function(parent) {
	this.prototype = Object.create(parent.prototype);
	this.prototype.constructor = this;
	return this;
}
if (typeof window != "undefined") {
	window.requestAnimationFrame =
		window.requestAnimationFrame
		|| window.mozRequestAnimationFrame
		|| window.webkitRequestAnimationFrame
		|| window.oRequestAnimationFrame
		|| window.msRequestAnimationFrame
		|| function(cb) { return setTimeout(cb, 1000/60); };

	window.cancelAnimationFrame =
		window.cancelAnimationFrame
		|| window.mozCancelAnimationFrame
		|| window.webkitCancelAnimationFrame
		|| window.oCancelAnimationFrame
		|| window.msCancelAnimationFrame
		|| function(id) { return clearTimeout(id); };
}
/**
 * @class Abstract FOV algorithm
 * @param {function} lightPassesCallback Does the light pass through x,y?
 * @param {object} [options]
 * @param {int} [options.topology=8] 4/6/8
 */
ROT.FOV = function(lightPassesCallback, options) {
	this._lightPasses = lightPassesCallback;
	this._options = {
		topology: 8
	}
	for (var p in options) { this._options[p] = options[p]; }
};

/**
 * Compute visibility for a 360-degree circle
 * @param {int} x
 * @param {int} y
 * @param {int} R Maximum visibility radius
 * @param {function} callback
 */
ROT.FOV.prototype.compute = function(x, y, R, callback) {}

/**
 * Return all neighbors in a concentric ring
 * @param {int} cx center-x
 * @param {int} cy center-y
 * @param {int} r range
 */
ROT.FOV.prototype._getCircle = function(cx, cy, r) {
	var result = [];
	var dirs, countFactor, startOffset;

	switch (this._options.topology) {
		case 4:
			countFactor = 1;
			startOffset = [0, 1];
			dirs = [
				ROT.DIRS[8][7],
				ROT.DIRS[8][1],
				ROT.DIRS[8][3],
				ROT.DIRS[8][5]
			]
		break;

		case 6:
			dirs = ROT.DIRS[6];
			countFactor = 1;
			startOffset = [-1, 1];
		break;

		case 8:
			dirs = ROT.DIRS[4];
			countFactor = 2;
			startOffset = [-1, 1];
		break;
	}

	/* starting neighbor */
	var x = cx + startOffset[0]*r;
	var y = cy + startOffset[1]*r;

	/* circle */
	for (var i=0;i<dirs.length;i++) {
		for (var j=0;j<r*countFactor;j++) {
			result.push([x, y]);
			x += dirs[i][0];
			y += dirs[i][1];

		}
	}

	return result;
}
/**
 * @class Precise shadowcasting algorithm
 * @augments ROT.FOV
 */
ROT.FOV.PreciseShadowcasting = function(lightPassesCallback, options) {
	ROT.FOV.call(this, lightPassesCallback, options);
}
ROT.FOV.PreciseShadowcasting.extend(ROT.FOV);

ROT.FOV.PreciseShadowcasting.prototype.compute = function(x, y, R, callback) {
	/* this place is always visible */
	callback(x, y, 0, 1);
    
	callback(x-1, y-1, 0, 1);
	callback(x, y-1, 0, 1);
	callback(x+1, y-1, 0, 1);
	callback(x-1, y, 0, 1);
	callback(x+1, y, 0, 1);
	callback(x-1, y+1, 0, 1);
	callback(x, y+1, 0, 1);
	callback(x+1, y+1, 0, 1);
    
    callback(x-1, y-2, 0, 1);
    callback(x, y-2, 0, 1);
    callback(x+1, y-2, 0, 1);
    callback(x-2, y-1, 0, 1);
    callback(x-2, y, 0, 1);
    callback(x-2, y+1, 0, 1);
    callback(x+2, y-1, 0, 1);
    callback(x+2, y, 0, 1);
    callback(x+2, y+1, 0, 1);
    callback(x-1, y+2, 0, 1);
    callback(x, y+2, 0, 1);
    callback(x+1, y+2, 0, 1);

	/* standing in a dark place. FIXME is this a good idea?  */
	if (!this._lightPasses(x, y)) { return; }
	
	/* list of all shadows */
	var SHADOWS = [];
	var trees = {};
	var cx, cy, blocks, A1, A2, visibility,
        dx, dy, dd, a, b, radius,
        cx2, cy2, dd1,
        obstacleType;

	/* analyze surrounding cells in concentric rings, starting from the center */
	for (var r=1; r<=R; r++) {
        ////console.log('ring', r);
		var neighbors = this._getCircle(x, y, r);
		var neighborCount = neighbors.length;
        trees = {};
		for (var i=0;i<neighborCount;i++) {
			cx = neighbors[i][0];
			cy = neighbors[i][1];
            var key = cx+","+cy;
            //if (key == "44,102") //console.log('KEY', key, !this._lightPasses(cx, cy));
            // if (key == "150,160") //console.log(key, obstacleType);
            // if (key == "151,161") //console.log(key, obstacleType);
            // if (key == "150,161") //console.log(key, obstacleType);
            var obstacleTypes = obstacleTypes = this.walls[key];
            if (obstacleTypes && obstacleTypes.length) {
                var skipVisibility = false;
                for (var j = 0; j < obstacleTypes.length; j++) {
                    var obstacleType = obstacleTypes[j];
                    cx2 = obstacleType[1];
                    cy2 = obstacleType[2];
                    radius = obstacleType[3];
                    
                    dx = cx2 - x;
                    dy = cy2 - y;
                    dd = Math.sqrt(dx * dx + dy * dy);
                    if (dd > 1/2) {
                        a = Math.asin(radius / dd);
                        b = Math.atan2(dy, dx),
                        A1 = normalize(b - a),
                        A2 = normalize(b + a);
                        blocks = !this._lightPasses(cx, cy);
                        
                        dx1 = cx - x;
                        dy1 = cy - y;
                        dd1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
                        if (dd1 < dd) {
                            trees[obstacleType[1]+","+obstacleType[2]] = [obstacleType[1], obstacleType[2]];
                        }
                        
                        dx = cx - x;
                        dy = cy - y;
                        dd = Math.sqrt(dx * dx + dy * dy);
                        a = Math.asin(radius / dd);
                        b = Math.atan2(dy, dx),
                        A1 = normalize(b - a),
                        A2 = normalize(b + a);
                        visibility = this._checkVisibility(b, A1, A2, false, SHADOWS);
                        if (!visibility) skipVisibility = true;
                    }
                }
                if (visibility && !skipVisibility) { callback(cx, cy, r, visibility); }
            }
            else {
                cx2 = cx;
                cy2 = cy;
                radius = Math.SQRT2 / 2;
                
                dx = cx2 - x;
                dy = cy2 - y;
                dd = Math.sqrt(dx * dx + dy * dy);
                if (dd > 1/2) {
                    a = Math.asin(radius / dd);
                    b = Math.atan2(dy, dx),
                    A1 = normalize(b - a),
                    A2 = normalize(b + a);
                    blocks = !this._lightPasses(cx, cy);
                    
                    visibility = this._checkVisibility(b, A1, A2, blocks, SHADOWS);
                    if (visibility) { callback(cx, cy, r, visibility); }
                    if (this.done) return;
                }
            }
            
            /*dx = cx2 - x;
            dy = cy2 - y;
            dd = Math.sqrt(dx * dx + dy * dy);
            if (dd > 1/2) {
                a = Math.asin(radius / dd);
                b = Math.atan2(dy, dx),
                A1 = normalize(b - a),
                A2 = normalize(b + a);
                blocks = !this._lightPasses(cx, cy);
                if (obstacleType && obstacleType[0] == 'tree') {
                    dx1 = cx - x;
                    dy1 = cy - y;
                    dd1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
                    if (dd1 < dd) {
                        trees[obstacleType[1]+","+obstacleType[2]] = [obstacleType[1], obstacleType[2]];
                    }
                    
                    dx = cx - x;
                    dy = cy - y;
                    dd = Math.sqrt(dx * dx + dy * dy);
                    a = Math.asin(radius / dd);
                    b = Math.atan2(dy, dx),
                    A1 = normalize(b - a),
                    A2 = normalize(b + a);
                    visibility = this._checkVisibility(b, A1, A2, false, SHADOWS);
                    if (visibility) { callback(cx, cy, r, visibility); }
                }
                else {
                    //if (obstacleType) //console.log(obstacleType[0], radius);
                    //console.log('BLOCKS', cx, cy, blocks, b);
                    visibility = this._checkVisibility(b, A1, A2, blocks, SHADOWS);
                    if (visibility) { callback(cx, cy, r, visibility); }
                    if (this.done) return;
                }
            }*/

		} /* for all cells in this ring */
        
        // apply tree blockers
        for (var k in trees) {
            ////console.log('apply tree');
            cx2 = trees[k][0];
            cy2 = trees[k][1];
            dx = cx2 - x;
            dy = cy2 - y;
            dd = Math.sqrt(dx * dx + dy * dy);
            radius = Math.SQRT2 - .01;
            if (dd > 1/2) {
                a = Math.asin(radius / dd);
                b = Math.atan2(dy, dx),
                A1 = normalize(b - a),
                A2 = normalize(b + a);
                visibility = this._checkVisibility(b, A1, A2, true, SHADOWS);
                if (this.done) return;
            }
        }
	} /* for all rings */
}

/**
 * @param {int[2]} A1 arc start
 * @param {int[2]} A2 arc end
 * @param {bool} blocks Does current arc block visibility?
 * @param {int[][]} SHADOWS list of active shadows
 */
ROT.FOV.PreciseShadowcasting.prototype._checkVisibility = function(b, A1, A2, blocks, SHADOWS) {
    ////console.log('_checkVisibility', b, A1, A2, blocks, SHADOWS);
    // check if target center is inside a shadow
    var visible = !blocks;
    //console.log('_checkVisibility', b, visible);
	for (var i = 0; i < SHADOWS.length; i++) {
		var old = SHADOWS[i];
        if (isBetween(b, old[0], old[1])) {
            if (blocks) {
                ////console.log('blocks but not visible', SHADOWS.length);
                visible = false;
            }
            else {
                //console.log(i, b, JSON.stringify(SHADOWS));
                return false; // not visible, return
            }
        }
	}
    
    if (blocks) {
        if (A1 < 0 && A2 >= 0) {
            //console.log('splitting');
            this._mergeShadows(b, 0, A2, blocks, SHADOWS);
            this.done = false;
            this._mergeShadows(b, A1, 0, blocks, SHADOWS);
        }
        else {
            //console.log('not splitting', blocks, visible, b);
            this._mergeShadows(b, A1, A2, blocks, SHADOWS);
        }
        //console.log('end', A1, A2, JSON.stringify(SHADOWS), !isBetween(A1, SHADOWS[0][0], SHADOWS[0][1]), !isBetween(A2, SHADOWS[0][0], SHADOWS[0][1]));
        if (SHADOWS.length == 1 && (!isBetween(A1, SHADOWS[0][0], SHADOWS[0][1]) || !isBetween(A2, SHADOWS[0][0], SHADOWS[0][1])) && A1 != SHADOWS[0][0] && A2 != SHADOWS[0][1] ) {
            this.done = true;
        }
    }
    
    return visible;
}

ROT.FOV.PreciseShadowcasting.prototype._mergeShadows = function(b, A1, A2, blocks, SHADOWS) {
    ////console.log('merging', b, A1, A2);
    // check if target first edge is inside a shadow or which shadows it is between
    var index1 = 0,
        edge1 = false,
        firstIndex = 0;
    while (index1 < SHADOWS.length) {
        var old = SHADOWS[index1];
        firstIndex = index1;
        if (isBetween(A1, old[0], old[1])) {
            edge1 = true;
            break;
        }
        if (index1 > 0 && isBetween(A1, SHADOWS[index1 - 1][1], old[0])) {
            edge1 = false;
            break;
        }
        if (!isBefore(A1, old[1])) {
            index1++;
            firstIndex = index1;
            continue;
        }
        if (isBefore(A1, old[0])) {
            break;
        }
        index1++;
    }
    
    // check if target second edge is inside a shadow or which shadows it is between
    var index2 = SHADOWS.length - 1,
        edge2 = false,
        secondIndex = 0;
    while (index2 >= 0) {
        var old = SHADOWS[index2];
        secondIndex = index2;
        ////console.log(A2, old[0], old[1], isBetween(A2, old[0], old[1]))
        if (isBetween(A2, old[0], old[1])) {
            edge2 = true;
            break;
        }
        if (isBefore(A2, old[0])) {
            index2--;
            secondIndex = index2;
            continue;
        }
        if (!isBefore(A2, old[1])) {
            break;
        }
        index2--;
    }
    
    ////console.log(firstIndex, secondIndex, edge1, edge2, A1, A2);
    if (firstIndex == SHADOWS.length && !edge1 && secondIndex == 0 && edge2) firstIndex = 0;
    //if (secondIndex == -1) secondIndex = SHADOWS.length - 1;
    //console.log(firstIndex, secondIndex, edge1, edge2, A1, A2);
    //console.log(JSON.stringify(SHADOWS));
    if (SHADOWS.length == 0) {
        //console.log('empty shadows pushing', [A1, A2]);
        SHADOWS.push([A1, A2]);
    }
    /*else if (SHADOWS.length > 1 && firstIndex == SHADOWS.length && secondIndex == 0 && !edge1 && edge2) {
    
    }*/
    else {
        var new_shadow = [edge1 ? SHADOWS[firstIndex][0] : A1, edge2 ? SHADOWS[secondIndex][1] : A2];
        //console.log('new_shadow', new_shadow);
        secondIndex = Math.max(firstIndex, secondIndex);
        var sum1 = diff_sum(SHADOWS);
        var doShift = false;
        if (isBetween(0, new_shadow[0], new_shadow[1]) && new_shadow[0] != 0 && new_shadow[1] != 0) {
            //console.log('crosses 0');
            SHADOWS.splice(firstIndex, firstIndex == secondIndex && edge1 == edge2 && !edge1 ? 0 : secondIndex - firstIndex + 1, [new_shadow[0], 0]);
            //console.log([new_shadow[0], 0], JSON.stringify(SHADOWS));
            if (SHADOWS[0][0] != 0 && SHADOWS[0][1] != new_shadow[1]) {
                SHADOWS.splice(firstIndex + 1, 0, [0, new_shadow[1]]);
                //console.log([0, new_shadow[1]], JSON.stringify(SHADOWS));
            }
            //console.log(JSON.stringify(SHADOWS));
            doShift = true;
        }
        else {
            SHADOWS.splice(firstIndex, firstIndex == secondIndex && edge1 == edge2 && !edge1 ? 0 : secondIndex - firstIndex + 1, new_shadow);
        }
        var sum2 = diff_sum(SHADOWS);
        //console.log('sum1', sum1, 'sum2', sum2, sum2 < sum1, SHADOWS.length == 1 && (!isBetween(A1, SHADOWS[0][0], SHADOWS[0][1]) || !isBetween(A2, SHADOWS[0][0], SHADOWS[0][1])));
        if (sum2 < sum1) this.done = true;
        /*if (SHADOWS.length == 1 && (!isBetween(A1, SHADOWS[0][0], SHADOWS[0][1]) || !isBetween(A2, SHADOWS[0][0], SHADOWS[0][1]))) {
            this.done = true;
        }*/
        if (new_shadow[0] == 0 || doShift) {
            var count = 0;
            //console.log('shifting');
            while (SHADOWS[0][0] != 0) {
                SHADOWS.push(SHADOWS.shift());
                if (count >= SHADOWS.length) break;
                count++;
                //console.log(JSON.stringify(SHADOWS));
            }
            //console.log('end shifting', JSON.stringify(SHADOWS));
        }
        //console.log(JSON.stringify(SHADOWS));
        //console.log(diff_sum(SHADOWS));
    }
}

function isBefore(A1, A2) {
    if (A1 > 0 && A2 < 0) { // A1 in bottom half, A2 in top half
        return true;
    }
    else if (A2 > 0 && A1 < 0) { // A1 in top half, A2 in bottom half
        return false;
    }
    else {
        return A1 < A2;
    }
}

function isAfter(A1, A2) {
    return !isBefore(A1, A2);
}

function isBetween(b, A1, A2) {
    if (A1 < A2) {
        return ((A1 <= b) && (b <= A2));
    }
    else {
        return ((A1 <= b) && (b <= Math.PI)) || ((-Math.PI <= b) && (b <= A2));
    }
}

function normalize(x) {
    if (x > Math.PI) {
        return -(2 * Math.PI - x);
    }
    else if ( x < -Math.PI) {
        return 2 * Math.PI + x;
    }
    else {
        return x;
    }
}

function diff(A1, A2) {
    if (A1 > 0 && A2 < 0) { // A1 in bottom half, A2 in top half
        return Math.abs((Math.PI - A1) - (-Math.PI - A2));
    }
    else if (A2 > 0 && A1 < 0) { // A1 in top half, A2 in bottom half
        return Math.abs(-A1 + A2);
    }
    if (A1 <= 0 && A2 <= 0) { // A1,A2 in bottom half
        if (isAfter(A1, A2)) { // A1 after A2
            return -A1 + Math.PI - (-Math.PI - A2)
        }
        else {
            return Math.abs(A2 - A1);
        }
    }
    else {
        if (isAfter(A1, A2)) {
            return Math.PI + (Math.PI - A1) + A2
        }
        else {
            return Math.abs(A2 - A1);
        }
    }
}

function diff_sum(SHADOWS) {
    var sum = 0;
    for (var i = 0; i < SHADOWS.length; i++) {
        ////console.log(SHADOWS[i][0], SHADOWS[i][1], diff(SHADOWS[i][0], SHADOWS[i][1]));
        sum += diff(SHADOWS[i][0], SHADOWS[i][1]);
    }
    return sum;
}

module.exports = ROT;
},{}],13:[function(require,module,exports){
var ImageHandler = require("./imageHandler.js");
var ROT = require("./rot6.js");

var key2pt_cache = {};
function key2pt(key) {
    if (key in key2pt_cache) return key2pt_cache[key];
    var p = key.split(',').map(function (c) { return parseInt(c) });
    var pt = {x: p[0], y: p[1], key: key};
    key2pt_cache[key] = pt;
    return pt;
}

function xy2key(x, y) {
    return x + "," + y;
}

function xy2pt(x, y) {
    return {x: x, y: y, key: x + "," + y};
}

function pt2key(pt) {
    return pt.x + "," + pt.y;
}

function generateElevationWalls(data, elevation) {
    var t1 = Date.now();
    var walls = {};
    for (var key in data) {
        var pt = data[key];
        if (pt.z > elevation) {
            adjLoop:
            for (var i = -1; i <= 1; i++) {
                for (var j = -1; j <= 1; j++) {
                    if (0 !== i || 0 !== j) {
                        var k = (pt.x + i) + "," + (pt.y + j);
                        if (data[k] && data[k].z <= elevation) {
                            walls[pt.key] = pt;
                            break adjLoop;
                        }
                    }
                }
            }
        }
    }
    console.log('generateElevationWalls', Date.now() - t1 + 'ms');
    return walls;
}

function setElevationWalls(obj, data, elevation) {
    for (var i = 0; i < data[elevation].length; i++) {
        var el = data[elevation][i];
        obj[el[1] + "," + el[2]] = el;
    }
}

function setWalls(obj, data, id, r) {
    id = id || 'wall';
    r = r || (Math.SQRT2 / 2);
    for (var i in data) {
        obj[i] = [id, data[i].x, data[i].y, r];
    }
}

function setTreeWalls(obj, elevation, tree, tree_elevations, tree_state, tree_blocks) {
    for (var i in tree) {
        if (elevation < tree_elevations[i]) {
            if (tree_state[i]) {
                //obj[i] = ['tree', tree[i].x, tree[i].y, Math.SQRT2];
                tree_blocks[i].forEach(function (pt) {
                    var k = pt.x + "," + pt.y;
                    obj[k] = (obj[k] || []).concat([['tree', tree[i].x, tree[i].y, Math.SQRT2]]);
                });
            }
        }
    }
}

function VisionSimulation(worlddata, mapDataImagePath, onReady, opts) {
    var self = this;
    
    this.opts = opts || {};
    this.grid = [];
    this.gridnav = null;
    this.ent_fow_blocker_node = null;
    this.tools_no_wards = null;
    this.elevationValues = [];
    this.elevationGrid = null;
    this.elevationWalls = {};
    this.treeWalls = {};
    this.tree = {}; // center key to point map
    this.tree_blocks = {}; // center to corners map
    this.tree_relations = {}; // corner to center map
    this.tree_elevations = {};
    this.tree_state = {};
    this.walls = {};
    this.radius = this.opts.radius || parseInt(1600 / 64);
    this.lights = {};
    this.worldMinX = worlddata.worldMinX;
    this.worldMinY = worlddata.worldMinY;
    this.worldMaxX = worlddata.worldMaxX;
    this.worldMaxY = worlddata.worldMaxY;
    this.worldWidth = this.worldMaxX - this.worldMinX;
    this.worldHeight = this.worldMaxY - this.worldMinY;
    this.gridWidth = this.worldWidth / 64 + 1;
    this.gridHeight = this.worldHeight / 64 + 1;
    this.ready = false;
    
    this.imageHandler = new ImageHandler(mapDataImagePath);
    var t1 = Date.now();
    this.imageHandler.load(function () {
        var t2 = Date.now();
        console.log('image load', t2 - t1 + 'ms');
        self.gridnav = parseImage(self.imageHandler, self.gridWidth * 2, self.gridWidth, self.gridHeight, blackPixelHandler);
        self.ent_fow_blocker_node = parseImage(self.imageHandler, self.gridWidth * 3, self.gridWidth, self.gridHeight, blackPixelHandler);
        self.tools_no_wards = parseImage(self.imageHandler, self.gridWidth * 4, self.gridWidth, self.gridHeight, blackPixelHandler);
        parseImage(self.imageHandler, self.gridWidth, self.gridWidth, self.gridHeight, treeElevationPixelHandler);
        self.elevationGrid = parseImage(self.imageHandler, 0, self.gridWidth, self.gridHeight, elevationPixelHandler);
        var t3 = Date.now();
        console.log('image process', t3 - t2 + 'ms');
        self.elevationValues.forEach(function (elevation) {
            //self.elevationWalls[elevation] = generateElevationWalls(self.elevationGrid, elevation);
            self.treeWalls[elevation] = {};
            setTreeWalls(self.treeWalls[elevation], elevation, self.tree, self.tree_elevations, self.tree_state, self.tree_blocks)
        });
        var t4 = Date.now();
        console.log('walls generation', t4 - t3 + 'ms');
        for (var i = 0; i < self.gridWidth; i++) {
            self.grid[i] = [];
            for (var j = 0; j < self.gridHeight; j++) {
                var pt = xy2pt(i, j);
                key2pt_cache[pt.key] = pt;
                self.grid[i].push(pt);
            }
        }
        var t5 = Date.now();
        console.log('cache prime', t5 - t4 + 'ms');
        self.ready = true;
        onReady();
    });

    function parseImage(imageHandler, offset, width, height, pixelHandler) {
        var grid = {};
        imageHandler.scan(offset, width, height, pixelHandler, grid);
        return grid;
    }

    function blackPixelHandler(x, y, p, grid) {
        var pt = self.ImageXYtoGridXY(x, y);
        if (p[0] === 0) {
            grid[pt.x + "," + pt.y] = pt;
        }
    }

    
    function elevationPixelHandler(x, y, p, grid) {
        var pt = self.ImageXYtoGridXY(x, y);
        pt.z = p[0];
        grid[pt.x + "," + pt.y] = pt;
        if (self.elevationValues.indexOf(p[0]) == -1) {
            self.elevationValues.push(p[0]);
        }
    }

    function treeElevationPixelHandler(x, y, p, grid) {
        var pt = self.ImageXYtoGridXY(x, y);
        if (p[1] == 0 && p[2] == 0) {
            // trees are 2x2 in grid
            // tree origins rounded up when converted to grid, so they represent top right corner. subtract 0.5 to get grid origin
            var treeOrigin = xy2pt(pt.x - 0.5, pt.y - 0.5);
            var treeElevation = p[0] + 40;
            var kC = treeOrigin.key;
            self.tree[kC] = treeOrigin;
            self.tree_elevations[kC] = treeElevation;
            self.tree_blocks[kC] = [];
            self.tree_state[kC] = true;
            // iterate through tree 2x2 by taking floor and ceil of tree grid origin
            [Math.floor, Math.ceil].forEach(function (i) {
                [Math.floor, Math.ceil].forEach(function (j) {
                    var treeCorner = xy2pt(i(treeOrigin.x), j(treeOrigin.y));
                    self.tree_relations[treeCorner.key] = (self.tree_relations[treeCorner.key] || []).concat(treeOrigin);
                    self.tree_blocks[kC].push(treeCorner);
                });
            });
        }
    }

    this.lightPassesCallback = function (x, y) {
        var key = x + ',' + y;
        return !(key in self.elevationWalls[self.elevation]) && !(key in self.ent_fow_blocker_node) && !(key in self.treeWalls[self.elevation] && self.treeWalls[self.elevation][key].length > 0) ;
    }
    
    this.fov = new ROT.FOV.PreciseShadowcasting(this.lightPassesCallback, {topology:8});
}
VisionSimulation.prototype.updateVisibility = function (gX, gY, radius) {
    var self = this,
        key = xy2key(gX, gY);

    radius = radius || self.radius;
    this.elevation = this.elevationGrid[key].z;
    this.walls = this.treeWalls[this.elevation];
    if (!this.elevationWalls[this.elevation]) this.elevationWalls[this.elevation] = generateElevationWalls(this.elevationGrid, this.elevation);
    //setElevationWalls(this.walls, this.elevationWalls, this.elevation)
    //setWalls(this.walls, this.ent_fow_blocker_node);
    //setWalls(this.walls, this.tools_no_wards);
    //setTreeWalls(this.walls, this.elevation, this.tree, this.tree_elevations, this.tree_state, this.tree_blocks);

    this.fov.walls = this.walls;
    this.lights = {};
    this.fov.compute(gX, gY, radius, function(x2, y2, r, vis) {
        var key = xy2key(x2, y2);
        if (!self.elevationGrid[key]) return;
        var treePts = self.tree_relations[key];
        var treeBlocking = false;
        if (treePts) {
            for (var i = 0; i < treePts.length; i++) {
                var treePt = treePts[i];
                treeBlocking = self.tree_state[treePt.key] && self.tree_elevations[treePt.key] > self.elevation;
                if (treeBlocking) break;
            }
        }
        if (vis == 1 && !self.ent_fow_blocker_node[key] && !treeBlocking && (gX-x2)*(gX-x2) + (gY-y2)*(gY-y2) < radius * radius) {
            self.lights[key] = 255;
        }
    });
}

VisionSimulation.prototype.isValidXY = function (x, y, bCheckGridnav, bCheckToolsNoWards, bCheckTreeState) {
    var key = xy2key(x, y),
        treeBlocking = false;
        
    if (bCheckTreeState) {
        var treePts = this.tree_relations[key];
        if (treePts) {
            for (var i = 0; i < treePts.length; i++) {
                var treePt = treePts[i];
                treeBlocking = this.tree_state[treePt.key];
                if (treeBlocking) break;
            }
        }
    }
    
    return x >= 0 && x < this.gridWidth && y >= 0 && y < this.gridHeight && (!bCheckGridnav || !this.gridnav[key]) && (!bCheckToolsNoWards || !this.tools_no_wards[key]) && (!bCheckTreeState || !treeBlocking);
}

VisionSimulation.prototype.toggleTree = function (x, y) {
    var self = this;
    var key = xy2key(x, y);
    var isTree = !!this.tree_relations[key];
    if (isTree) {
        var treePts = this.tree_relations[key];
        for (var i = 0; i < treePts.length; i++) {
            var pt = treePts[i];
            this.tree_state[pt.key] = !this.tree_state[pt.key];
            
            this.elevationValues.forEach(function (elevation) {
                if (elevation < self.tree_elevations[pt.key]) {
                    self.tree_blocks[pt.key].forEach(function (ptB) {
                        for (var j = self.treeWalls[elevation][ptB.key].length - 1; j >= 0; j--) {
                            if (pt.x == self.treeWalls[elevation][ptB.key][j][1] && pt.y == self.treeWalls[elevation][ptB.key][j][2]) {
                                self.treeWalls[elevation][ptB.key].splice(j, 1);
                            }
                        }
                    });
                    if (self.tree_state[pt.key]) {
                        self.tree_blocks[pt.key].forEach(function (ptB) {
                            self.treeWalls[elevation][ptB.key] = (self.treeWalls[elevation][ptB.key] || []).concat([['tree', pt.x, pt.y, Math.SQRT2]]);
                        });
                    }
                }
            });
        }
    }

    return isTree;
}
VisionSimulation.prototype.setRadius = function (r) {
    this.radius = r;
}
VisionSimulation.prototype.WorldXYtoGridXY = function (wX, wY, bNoRound) {
    var x = (wX - this.worldMinX) / 64,
        y = (wY - this.worldMinY) / 64;
    if (!bNoRound) {
        x = parseInt(Math.round(x))
        y = parseInt(Math.round(y))
    }
    return {x: x, y: y, key: x + ',' + y};
}
VisionSimulation.prototype.GridXYtoWorldXY = function (gX, gY) {
    return {x: gX * 64 + this.worldMinX, y: gY * 64 + this.worldMinY};
}

VisionSimulation.prototype.GridXYtoImageXY = function (gX, gY) {
    return {x: gX, y: this.gridHeight - gY - 1};
}

VisionSimulation.prototype.ImageXYtoGridXY = function (x, y) {
    var gY = this.gridHeight - y - 1;
    return {x: x, y: gY, key: x + ',' + gY};
}

VisionSimulation.prototype.WorldXYtoImageXY = function (wX, wY) {
    var pt = this.WorldXYtoGridXY(wX, wY);
    return this.GridXYtoImageXY(pt.x, pt.y);
}

VisionSimulation.prototype.key2pt = key2pt;
VisionSimulation.prototype.xy2key = xy2key;
VisionSimulation.prototype.xy2pt = xy2pt;
VisionSimulation.prototype.pt2key = pt2key;

module.exports = VisionSimulation;
},{"./imageHandler.js":9,"./rot6.js":12}],14:[function(require,module,exports){
module.exports={"worldMinX":-8288,"worldMaxX":8288,"worldMinY":-8288,"worldMaxY":8288}
},{}]},{},[2])(2)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvcm9sbGJhci1icm93c2VyL2Rpc3Qvcm9sbGJhci51bWQubm9qc29uLm1pbi5qcyIsInNyYy9hcHAuanMiLCJzcmMvY29udmVyc2lvbkZ1bmN0aW9ucy5qcyIsInNyYy9nZXRMaWdodFVuaW9uLmpzIiwic3JjL21hcENvbnN0YW50cy5qcyIsInNyYy9zdHlsZUNvbnN0YW50cy5qcyIsInNyYy91dGlsL3F1ZXJ5U3RyaW5nLmpzIiwic3JjL3V0aWwvdHJpbS5qcyIsIi4uL2RvdGEtdmlzaW9uLXNpbXVsYXRpb24vYnJvd3Nlci9pbWFnZUhhbmRsZXIuanMiLCIuLi9kb3RhLXZpc2lvbi1zaW11bGF0aW9uL2Jyb3dzZXIvcG5nLmpzIiwiLi4vZG90YS12aXNpb24tc2ltdWxhdGlvbi9icm93c2VyL3psaWIuanMiLCIuLi9kb3RhLXZpc2lvbi1zaW11bGF0aW9uL3NyYy9yb3Q2LmpzIiwiLi4vZG90YS12aXNpb24tc2ltdWxhdGlvbi9zcmMvdmlzaW9uLXNpbXVsYXRpb24uanMiLCIuLi9kb3RhLXZpc2lvbi1zaW11bGF0aW9uL3NyYy93b3JsZGRhdGEuanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMva0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDamRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFRBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiFmdW5jdGlvbihlLHIpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXIoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10scik7ZWxzZXt2YXIgdD1yKCk7Zm9yKHZhciBuIGluIHQpKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6ZSlbbl09dFtuXX19KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gcihuKXtpZih0W25dKXJldHVybiB0W25dLmV4cG9ydHM7dmFyIG89dFtuXT17ZXhwb3J0czp7fSxpZDpuLGxvYWRlZDohMX07cmV0dXJuIGVbbl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsciksby5sb2FkZWQ9ITAsby5leHBvcnRzfXZhciB0PXt9O3JldHVybiByLm09ZSxyLmM9dCxyLnA9XCJcIixyKDApfShbZnVuY3Rpb24oZSxyLHQpe2UuZXhwb3J0cz10KDEpfSxmdW5jdGlvbihlLHIsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbigpe3ZhciBlPVwidW5kZWZpbmVkXCI9PXR5cGVvZiBKU09OP3t9OkpTT047by5zZXR1cEpTT04oZSl9dmFyIG89dCgyKSxpPXQoMyk7bigpO3ZhciBhPXdpbmRvdy5fcm9sbGJhckNvbmZpZyxzPWEmJmEuZ2xvYmFsQWxpYXN8fFwiUm9sbGJhclwiLHU9d2luZG93W3NdJiZcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93W3NdLnNoaW1JZDshdSYmYT9vLndyYXBwZXIuaW5pdChhKTood2luZG93LlJvbGxiYXI9by53cmFwcGVyLHdpbmRvdy5Sb2xsYmFyTm90aWZpZXI9aS5Ob3RpZmllciksZS5leHBvcnRzPW8ud3JhcHBlcn0sZnVuY3Rpb24oZSxyLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSxyLHQpeyF0WzRdJiZ3aW5kb3cuX3JvbGxiYXJXcmFwcGVkRXJyb3ImJih0WzRdPXdpbmRvdy5fcm9sbGJhcldyYXBwZWRFcnJvcix3aW5kb3cuX3JvbGxiYXJXcmFwcGVkRXJyb3I9bnVsbCksZS51bmNhdWdodEVycm9yLmFwcGx5KGUsdCksciYmci5hcHBseSh3aW5kb3csdCl9ZnVuY3Rpb24gbyhlLHIpe2lmKHIuaGFzT3duUHJvcGVydHkmJnIuaGFzT3duUHJvcGVydHkoXCJhZGRFdmVudExpc3RlbmVyXCIpKXt2YXIgdD1yLmFkZEV2ZW50TGlzdGVuZXI7ci5hZGRFdmVudExpc3RlbmVyPWZ1bmN0aW9uKHIsbixvKXt0LmNhbGwodGhpcyxyLGUud3JhcChuKSxvKX07dmFyIG49ci5yZW1vdmVFdmVudExpc3RlbmVyO3IucmVtb3ZlRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihlLHIsdCl7bi5jYWxsKHRoaXMsZSxyJiZyLl93cmFwcGVkfHxyLHQpfX19dmFyIGk9dCgzKSxhPXQoOCkscz1pLk5vdGlmaWVyO3dpbmRvdy5fcm9sbGJhcldyYXBwZWRFcnJvcj1udWxsO3ZhciB1PXt9O3UuaW5pdD1mdW5jdGlvbihlLHIpe3ZhciB0PW5ldyBzKHIpO2lmKHQuY29uZmlndXJlKGUpLGUuY2FwdHVyZVVuY2F1Z2h0KXt2YXIgaTtyJiZhLmlzVHlwZShyLl9yb2xsYmFyT2xkT25FcnJvcixcImZ1bmN0aW9uXCIpP2k9ci5fcm9sbGJhck9sZE9uRXJyb3I6d2luZG93Lm9uZXJyb3ImJiF3aW5kb3cub25lcnJvci5iZWxvbmdzVG9TaGltJiYoaT13aW5kb3cub25lcnJvciksd2luZG93Lm9uZXJyb3I9ZnVuY3Rpb24oKXt2YXIgZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMCk7bih0LGksZSl9O3ZhciB1LGMsbD1bXCJFdmVudFRhcmdldFwiLFwiV2luZG93XCIsXCJOb2RlXCIsXCJBcHBsaWNhdGlvbkNhY2hlXCIsXCJBdWRpb1RyYWNrTGlzdFwiLFwiQ2hhbm5lbE1lcmdlck5vZGVcIixcIkNyeXB0b09wZXJhdGlvblwiLFwiRXZlbnRTb3VyY2VcIixcIkZpbGVSZWFkZXJcIixcIkhUTUxVbmtub3duRWxlbWVudFwiLFwiSURCRGF0YWJhc2VcIixcIklEQlJlcXVlc3RcIixcIklEQlRyYW5zYWN0aW9uXCIsXCJLZXlPcGVyYXRpb25cIixcIk1lZGlhQ29udHJvbGxlclwiLFwiTWVzc2FnZVBvcnRcIixcIk1vZGFsV2luZG93XCIsXCJOb3RpZmljYXRpb25cIixcIlNWR0VsZW1lbnRJbnN0YW5jZVwiLFwiU2NyZWVuXCIsXCJUZXh0VHJhY2tcIixcIlRleHRUcmFja0N1ZVwiLFwiVGV4dFRyYWNrTGlzdFwiLFwiV2ViU29ja2V0XCIsXCJXZWJTb2NrZXRXb3JrZXJcIixcIldvcmtlclwiLFwiWE1MSHR0cFJlcXVlc3RcIixcIlhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRcIixcIlhNTEh0dHBSZXF1ZXN0VXBsb2FkXCJdO2Zvcih1PTA7dTxsLmxlbmd0aDsrK3UpYz1sW3VdLHdpbmRvd1tjXSYmd2luZG93W2NdLnByb3RvdHlwZSYmbyh0LHdpbmRvd1tjXS5wcm90b3R5cGUpfXJldHVybiBlLmNhcHR1cmVVbmhhbmRsZWRSZWplY3Rpb25zJiYociYmYS5pc1R5cGUoci5fdW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlcixcImZ1bmN0aW9uXCIpJiZ3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInVuaGFuZGxlZHJlamVjdGlvblwiLHIuX3VuaGFuZGxlZFJlamVjdGlvbkhhbmRsZXIpLHQuX3VuaGFuZGxlZFJlamVjdGlvbkhhbmRsZXI9ZnVuY3Rpb24oZSl7dmFyIHI9ZS5yZWFzb24sbj1lLnByb21pc2Usbz1lLmRldGFpbDshciYmbyYmKHI9by5yZWFzb24sbj1vLnByb21pc2UpLHQudW5oYW5kbGVkUmVqZWN0aW9uKHIsbil9LHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidW5oYW5kbGVkcmVqZWN0aW9uXCIsdC5fdW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlcikpLHdpbmRvdy5Sb2xsYmFyPXQscy5wcm9jZXNzUGF5bG9hZHMoKSx0fSxlLmV4cG9ydHM9e3dyYXBwZXI6dSxzZXR1cEpTT046aS5zZXR1cEpTT059fSxmdW5jdGlvbihlLHIsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXtFPWUsdy5zZXR1cEpTT04oZSl9ZnVuY3Rpb24gbyhlLHIpe3JldHVybiBmdW5jdGlvbigpe3ZhciB0PXJ8fHRoaXM7dHJ5e3JldHVybiBlLmFwcGx5KHQsYXJndW1lbnRzKX1jYXRjaChuKXtjb25zb2xlLmVycm9yKFwiW1JvbGxiYXJdOlwiLG4pfX19ZnVuY3Rpb24gaSgpe2h8fChoPXNldFRpbWVvdXQoZiwxZTMpKX1mdW5jdGlvbiBhKCl7cmV0dXJuIF99ZnVuY3Rpb24gcyhlKXtfPV98fHRoaXM7dmFyIHI9XCJodHRwczovL1wiK3MuREVGQVVMVF9FTkRQT0lOVDt0aGlzLm9wdGlvbnM9e2VuYWJsZWQ6ITAsZW5kcG9pbnQ6cixlbnZpcm9ubWVudDpcInByb2R1Y3Rpb25cIixzY3J1YkZpZWxkczpnKFtdLHMuREVGQVVMVF9TQ1JVQl9GSUVMRFMpLGNoZWNrSWdub3JlOm51bGwsbG9nTGV2ZWw6cy5ERUZBVUxUX0xPR19MRVZFTCxyZXBvcnRMZXZlbDpzLkRFRkFVTFRfUkVQT1JUX0xFVkVMLHVuY2F1Z2h0RXJyb3JMZXZlbDpzLkRFRkFVTFRfVU5DQVVHSFRfRVJST1JfTEVWRUwscGF5bG9hZDp7fX0sdGhpcy5sYXN0RXJyb3I9bnVsbCx0aGlzLnBsdWdpbnM9e30sdGhpcy5wYXJlbnROb3RpZmllcj1lLGUmJihlLmhhc093blByb3BlcnR5KFwic2hpbUlkXCIpP2Uubm90aWZpZXI9dGhpczp0aGlzLmNvbmZpZ3VyZShlLm9wdGlvbnMpKX1mdW5jdGlvbiB1KGUpe3dpbmRvdy5fcm9sbGJhclBheWxvYWRRdWV1ZS5wdXNoKGUpLGkoKX1mdW5jdGlvbiBjKGUpe3JldHVybiBvKGZ1bmN0aW9uKCl7dmFyIHI9dGhpcy5fZ2V0TG9nQXJncyhhcmd1bWVudHMpO3JldHVybiB0aGlzLl9sb2coZXx8ci5sZXZlbHx8dGhpcy5vcHRpb25zLmxvZ0xldmVsfHxzLkRFRkFVTFRfTE9HX0xFVkVMLHIubWVzc2FnZSxyLmVycixyLmN1c3RvbSxyLmNhbGxiYWNrKX0pfWZ1bmN0aW9uIGwoZSxyKXtlfHwoZT1yP0Uuc3RyaW5naWZ5KHIpOlwiXCIpO3ZhciB0PXtib2R5OmV9O3JldHVybiByJiYodC5leHRyYT1nKCEwLHt9LHIpKSx7bWVzc2FnZTp0fX1mdW5jdGlvbiBwKGUscix0KXt2YXIgbj1tLmd1ZXNzRXJyb3JDbGFzcyhyLm1lc3NhZ2UpLG89ci5uYW1lfHxuWzBdLGk9blsxXSxhPXtleGNlcHRpb246e1wiY2xhc3NcIjpvLG1lc3NhZ2U6aX19O2lmKGUmJihhLmV4Y2VwdGlvbi5kZXNjcmlwdGlvbj1lfHxcInVuY2F1Z2h0IGV4Y2VwdGlvblwiKSxyLnN0YWNrKXt2YXIgcyx1LGMscCxmLGQsaCx3O2ZvcihhLmZyYW1lcz1bXSxoPTA7aDxyLnN0YWNrLmxlbmd0aDsrK2gpcz1yLnN0YWNrW2hdLHU9e2ZpbGVuYW1lOnMudXJsP3Yuc2FuaXRpemVVcmwocy51cmwpOlwiKHVua25vd24pXCIsbGluZW5vOnMubGluZXx8bnVsbCxtZXRob2Q6cy5mdW5jJiZcIj9cIiE9PXMuZnVuYz9zLmZ1bmM6XCJbYW5vbnltb3VzXVwiLGNvbG5vOnMuY29sdW1ufSxjPXA9Zj1udWxsLGQ9cy5jb250ZXh0P3MuY29udGV4dC5sZW5ndGg6MCxkJiYodz1NYXRoLmZsb29yKGQvMikscD1zLmNvbnRleHQuc2xpY2UoMCx3KSxjPXMuY29udGV4dFt3XSxmPXMuY29udGV4dC5zbGljZSh3KSksYyYmKHUuY29kZT1jKSwocHx8ZikmJih1LmNvbnRleHQ9e30scCYmcC5sZW5ndGgmJih1LmNvbnRleHQucHJlPXApLGYmJmYubGVuZ3RoJiYodS5jb250ZXh0LnBvc3Q9ZikpLHMuYXJncyYmKHUuYXJncz1zLmFyZ3MpLGEuZnJhbWVzLnB1c2godSk7cmV0dXJuIGEuZnJhbWVzLnJldmVyc2UoKSx0JiYoYS5leHRyYT1nKCEwLHt9LHQpKSx7dHJhY2U6YX19cmV0dXJuIGwobytcIjogXCIraSx0KX1mdW5jdGlvbiBmKCl7dmFyIGU7dHJ5e2Zvcig7ZT13aW5kb3cuX3JvbGxiYXJQYXlsb2FkUXVldWUuc2hpZnQoKTspZChlKX1maW5hbGx5e2g9dm9pZCAwfX1mdW5jdGlvbiBkKGUpe3ZhciByPWUuZW5kcG9pbnRVcmwsdD1lLmFjY2Vzc1Rva2VuLG49ZS5wYXlsb2FkLG89ZS5jYWxsYmFja3x8ZnVuY3Rpb24oKXt9LGk9KG5ldyBEYXRlKS5nZXRUaW1lKCk7aS1MPj02ZTQmJihMPWksUj0wKTt2YXIgYT13aW5kb3cuX2dsb2JhbFJvbGxiYXJPcHRpb25zLm1heEl0ZW1zLGM9d2luZG93Ll9nbG9iYWxSb2xsYmFyT3B0aW9ucy5pdGVtc1Blck1pbnV0ZSxsPWZ1bmN0aW9uKCl7cmV0dXJuIW4uaWdub3JlUmF0ZUxpbWl0JiZhPj0xJiZUPj1hfSxwPWZ1bmN0aW9uKCl7cmV0dXJuIW4uaWdub3JlUmF0ZUxpbWl0JiZjPj0xJiZSPj1jfTtyZXR1cm4gbCgpP3ZvaWQgbyhuZXcgRXJyb3IoYStcIiBtYXggaXRlbXMgcmVhY2hlZFwiKSk6cCgpP3ZvaWQgbyhuZXcgRXJyb3IoYytcIiBpdGVtcyBwZXIgbWludXRlIHJlYWNoZWRcIikpOihUKyssUisrLGwoKSYmXy5fbG9nKF8ub3B0aW9ucy51bmNhdWdodEVycm9yTGV2ZWwsXCJtYXhJdGVtcyBoYXMgYmVlbiBoaXQuIElnbm9yaW5nIGVycm9ycyBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGUgY3VycmVudCBwYWdlIGxvYWQuXCIsbnVsbCx7bWF4SXRlbXM6YX0sbnVsbCwhMSwhMCksbi5pZ25vcmVSYXRlTGltaXQmJmRlbGV0ZSBuLmlnbm9yZVJhdGVMaW1pdCx2b2lkIHkucG9zdChyLHQsbixmdW5jdGlvbihyLHQpe3JldHVybiByPyhyIGluc3RhbmNlb2YgYiYmKGUuY2FsbGJhY2s9ZnVuY3Rpb24oKXt9LHNldFRpbWVvdXQoZnVuY3Rpb24oKXt1KGUpfSxzLlJFVFJZX0RFTEFZKSksbyhyKSk6byhudWxsLHQpfSkpfXZhciBoLGc9dCg0KSxtPXQoNSksdj10KDgpLHc9dCgxMCkseT13LlhIUixiPXcuQ29ubmVjdGlvbkVycm9yLEU9bnVsbDtzLk5PVElGSUVSX1ZFUlNJT049XCIxLjkuMlwiLHMuREVGQVVMVF9FTkRQT0lOVD1cImFwaS5yb2xsYmFyLmNvbS9hcGkvMS9cIixzLkRFRkFVTFRfU0NSVUJfRklFTERTPVtcInB3XCIsXCJwYXNzXCIsXCJwYXNzd2RcIixcInBhc3N3b3JkXCIsXCJzZWNyZXRcIixcImNvbmZpcm1fcGFzc3dvcmRcIixcImNvbmZpcm1QYXNzd29yZFwiLFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsXCJwYXNzd29yZENvbmZpcm1hdGlvblwiLFwiYWNjZXNzX3Rva2VuXCIsXCJhY2Nlc3NUb2tlblwiLFwic2VjcmV0X2tleVwiLFwic2VjcmV0S2V5XCIsXCJzZWNyZXRUb2tlblwiXSxzLkRFRkFVTFRfTE9HX0xFVkVMPVwiZGVidWdcIixzLkRFRkFVTFRfUkVQT1JUX0xFVkVMPVwiZGVidWdcIixzLkRFRkFVTFRfVU5DQVVHSFRfRVJST1JfTEVWRUw9XCJlcnJvclwiLHMuREVGQVVMVF9JVEVNU19QRVJfTUlOPTYwLHMuREVGQVVMVF9NQVhfSVRFTVM9MCxzLkxFVkVMUz17ZGVidWc6MCxpbmZvOjEsd2FybmluZzoyLGVycm9yOjMsY3JpdGljYWw6NH0scy5SRVRSWV9ERUxBWT0xZTQsd2luZG93Ll9yb2xsYmFyUGF5bG9hZFF1ZXVlPXdpbmRvdy5fcm9sbGJhclBheWxvYWRRdWV1ZXx8W10sd2luZG93Ll9nbG9iYWxSb2xsYmFyT3B0aW9ucz17c3RhcnRUaW1lOihuZXcgRGF0ZSkuZ2V0VGltZSgpLG1heEl0ZW1zOnMuREVGQVVMVF9NQVhfSVRFTVMsaXRlbXNQZXJNaW51dGU6cy5ERUZBVUxUX0lURU1TX1BFUl9NSU59O3ZhciBfLHg9cy5wcm90b3R5cGU7eC5fZ2V0TG9nQXJncz1mdW5jdGlvbihlKXtmb3IodmFyIHIsdCxuLGksYSx1LGM9dGhpcy5vcHRpb25zLmxvZ0xldmVsfHxzLkRFRkFVTFRfTE9HX0xFVkVMLGw9W10scD0wO3A8ZS5sZW5ndGg7KytwKXU9ZVtwXSxhPXYudHlwZU5hbWUodSksXCJzdHJpbmdcIj09PWE/cj9sLnB1c2godSk6cj11OlwiZnVuY3Rpb25cIj09PWE/aT1vKHUsdGhpcyk6XCJkYXRlXCI9PT1hP2wucHVzaCh1KTpcImVycm9yXCI9PT1hfHx1IGluc3RhbmNlb2YgRXJyb3J8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBET01FeGNlcHRpb24mJnUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24/dD9sLnB1c2godSk6dD11Olwib2JqZWN0XCIhPT1hJiZcImFycmF5XCIhPT1hfHwobj9sLnB1c2godSk6bj11KTtyZXR1cm4gbC5sZW5ndGgmJihuPW58fHt9LG4uZXh0cmFBcmdzPWwpLHtsZXZlbDpjLG1lc3NhZ2U6cixlcnI6dCxjdXN0b206bixjYWxsYmFjazppfX0seC5fcm91dGU9ZnVuY3Rpb24oZSl7dmFyIHI9dGhpcy5vcHRpb25zLmVuZHBvaW50LHQ9L1xcLyQvLnRlc3Qociksbj0vXlxcLy8udGVzdChlKTtyZXR1cm4gdCYmbj9lPWUuc3Vic3RyaW5nKDEpOnR8fG58fChlPVwiL1wiK2UpLHIrZX0seC5fcHJvY2Vzc1NoaW1RdWV1ZT1mdW5jdGlvbihlKXtmb3IodmFyIHIsdCxuLG8saSxhLHUsYz17fTt0PWUuc2hpZnQoKTspcj10LnNoaW0sbj10Lm1ldGhvZCxvPXQuYXJncyxpPXIucGFyZW50U2hpbSx1PWNbci5zaGltSWRdLHV8fChpPyhhPWNbaS5zaGltSWRdLHU9bmV3IHMoYSkpOnU9dGhpcyxjW3Iuc2hpbUlkXT11KSx1W25dJiZ2LmlzVHlwZSh1W25dLFwiZnVuY3Rpb25cIikmJnVbbl0uYXBwbHkodSxvKX0seC5fYnVpbGRQYXlsb2FkPWZ1bmN0aW9uKGUscix0LG4sbyl7dmFyIGk9dGhpcy5vcHRpb25zLmFjY2Vzc1Rva2VuLGE9dGhpcy5vcHRpb25zLmVudmlyb25tZW50LHU9ZyghMCx7fSx0aGlzLm9wdGlvbnMucGF5bG9hZCksYz12LnV1aWQ0KCk7aWYodm9pZCAwPT09cy5MRVZFTFNbcl0pdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsZXZlbFwiKTtpZighdCYmIW4mJiFvKXRocm93IG5ldyBFcnJvcihcIk5vIG1lc3NhZ2UsIHN0YWNrIGluZm8gb3IgY3VzdG9tIGRhdGFcIik7dmFyIGw9e2Vudmlyb25tZW50OmEsZW5kcG9pbnQ6dGhpcy5vcHRpb25zLmVuZHBvaW50LHV1aWQ6YyxsZXZlbDpyLHBsYXRmb3JtOlwiYnJvd3NlclwiLGZyYW1ld29yazpcImJyb3dzZXItanNcIixsYW5ndWFnZTpcImphdmFzY3JpcHRcIixib2R5OnRoaXMuX2J1aWxkQm9keSh0LG4sbykscmVxdWVzdDp7dXJsOndpbmRvdy5sb2NhdGlvbi5ocmVmLHF1ZXJ5X3N0cmluZzp3aW5kb3cubG9jYXRpb24uc2VhcmNoLHVzZXJfaXA6XCIkcmVtb3RlX2lwXCJ9LGNsaWVudDp7cnVudGltZV9tczplLmdldFRpbWUoKS13aW5kb3cuX2dsb2JhbFJvbGxiYXJPcHRpb25zLnN0YXJ0VGltZSx0aW1lc3RhbXA6TWF0aC5yb3VuZChlLmdldFRpbWUoKS8xZTMpLGphdmFzY3JpcHQ6e2Jyb3dzZXI6d2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQsbGFuZ3VhZ2U6d2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSxjb29raWVfZW5hYmxlZDp3aW5kb3cubmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQsc2NyZWVuOnt3aWR0aDp3aW5kb3cuc2NyZWVuLndpZHRoLGhlaWdodDp3aW5kb3cuc2NyZWVuLmhlaWdodH0scGx1Z2luczp0aGlzLl9nZXRCcm93c2VyUGx1Z2lucygpfX0sc2VydmVyOnt9LG5vdGlmaWVyOntuYW1lOlwicm9sbGJhci1icm93c2VyLWpzXCIsdmVyc2lvbjpzLk5PVElGSUVSX1ZFUlNJT059fTt1LmJvZHkmJmRlbGV0ZSB1LmJvZHk7dmFyIHA9e2FjY2Vzc190b2tlbjppLGRhdGE6ZyghMCxsLHUpfTtyZXR1cm4gdGhpcy5fc2NydWIocC5kYXRhKSxwfSx4Ll9idWlsZEJvZHk9ZnVuY3Rpb24oZSxyLHQpe3ZhciBuO3JldHVybiBuPXI/cChlLHIsdCk6bChlLHQpfSx4Ll9nZXRCcm93c2VyUGx1Z2lucz1mdW5jdGlvbigpe2lmKCF0aGlzLl9icm93c2VyUGx1Z2lucyl7dmFyIGUscix0PXdpbmRvdy5uYXZpZ2F0b3IucGx1Z2luc3x8W10sbj10Lmxlbmd0aCxvPVtdO2ZvcihyPTA7cjxuOysrcillPXRbcl0sby5wdXNoKHtuYW1lOmUubmFtZSxkZXNjcmlwdGlvbjplLmRlc2NyaXB0aW9ufSk7dGhpcy5fYnJvd3NlclBsdWdpbnM9b31yZXR1cm4gdGhpcy5fYnJvd3NlclBsdWdpbnN9LHguX3NjcnViPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHIoZSxyLHQsbixvLGkpe3JldHVybiByK3YucmVkYWN0KGkpfWZ1bmN0aW9uIHQoZSl7dmFyIHQ7aWYodi5pc1R5cGUoZSxcInN0cmluZ1wiKSlmb3IodD0wO3Q8cy5sZW5ndGg7Kyt0KWU9ZS5yZXBsYWNlKHNbdF0scik7cmV0dXJuIGV9ZnVuY3Rpb24gbihlLHIpe3ZhciB0O2Zvcih0PTA7dDxhLmxlbmd0aDsrK3QpaWYoYVt0XS50ZXN0KGUpKXtyPXYucmVkYWN0KHIpO2JyZWFrfXJldHVybiByfWZ1bmN0aW9uIG8oZSxyKXt2YXIgbz1uKGUscik7cmV0dXJuIG89PT1yP3Qobyk6b312YXIgaT10aGlzLm9wdGlvbnMuc2NydWJGaWVsZHMsYT10aGlzLl9nZXRTY3J1YkZpZWxkUmVnZXhzKGkpLHM9dGhpcy5fZ2V0U2NydWJRdWVyeVBhcmFtUmVnZXhzKGkpO3JldHVybiB2LnRyYXZlcnNlKGUsbyksZX0seC5fZ2V0U2NydWJGaWVsZFJlZ2V4cz1mdW5jdGlvbihlKXtmb3IodmFyIHIsdD1bXSxuPTA7bjxlLmxlbmd0aDsrK24pcj1cIlxcXFxbPyglNVtiQl0pP1wiK2Vbbl0rXCJcXFxcWz8oJTVbYkJdKT9cXFxcXT8oJTVbZERdKT9cIix0LnB1c2gobmV3IFJlZ0V4cChyLFwiaVwiKSk7cmV0dXJuIHR9LHguX2dldFNjcnViUXVlcnlQYXJhbVJlZ2V4cz1mdW5jdGlvbihlKXtmb3IodmFyIHIsdD1bXSxuPTA7bjxlLmxlbmd0aDsrK24pcj1cIlxcXFxbPyglNVtiQl0pP1wiK2Vbbl0rXCJcXFxcWz8oJTVbYkJdKT9cXFxcXT8oJTVbZERdKT9cIix0LnB1c2gobmV3IFJlZ0V4cChcIihcIityK1wiPSkoW14mXFxcXG5dKylcIixcImlnbVwiKSk7cmV0dXJuIHR9LHguX3VybElzV2hpdGVsaXN0ZWQ9ZnVuY3Rpb24oZSl7dmFyIHIsdCxuLG8saSxhLHMsdSxjLGw7dHJ5e2lmKHI9dGhpcy5vcHRpb25zLmhvc3RXaGl0ZUxpc3QsdD1lJiZlLmRhdGEmJmUuZGF0YS5ib2R5JiZlLmRhdGEuYm9keS50cmFjZSwhcnx8MD09PXIubGVuZ3RoKXJldHVybiEwO2lmKCF0KXJldHVybiEwO2ZvcihzPXIubGVuZ3RoLGk9dC5mcmFtZXMubGVuZ3RoLGM9MDtjPGk7YysrKXtpZihuPXQuZnJhbWVzW2NdLG89bi5maWxlbmFtZSwhdi5pc1R5cGUobyxcInN0cmluZ1wiKSlyZXR1cm4hMDtmb3IobD0wO2w8cztsKyspaWYoYT1yW2xdLHU9bmV3IFJlZ0V4cChhKSx1LnRlc3QobykpcmV0dXJuITB9fWNhdGNoKHApe3JldHVybiB0aGlzLmNvbmZpZ3VyZSh7aG9zdFdoaXRlTGlzdDpudWxsfSksY29uc29sZS5lcnJvcihcIltSb2xsYmFyXTogRXJyb3Igd2hpbGUgcmVhZGluZyB5b3VyIGNvbmZpZ3VyYXRpb24ncyBob3N0V2hpdGVMaXN0IG9wdGlvbi4gUmVtb3ZpbmcgY3VzdG9tIGhvc3RXaGl0ZUxpc3QuXCIscCksITB9cmV0dXJuITF9LHguX21lc3NhZ2VJc0lnbm9yZWQ9ZnVuY3Rpb24oZSl7dmFyIHIsdCxuLG8saSxhLHMsdSxjO3RyeXtpZihpPSExLG49dGhpcy5vcHRpb25zLmlnbm9yZWRNZXNzYWdlcywhbnx8MD09PW4ubGVuZ3RoKXJldHVybiExO2lmKHM9ZSYmZS5kYXRhJiZlLmRhdGEuYm9keSx1PXMmJnMudHJhY2UmJnMudHJhY2UuZXhjZXB0aW9uJiZzLnRyYWNlLmV4Y2VwdGlvbi5tZXNzYWdlLGM9cyYmcy5tZXNzYWdlJiZzLm1lc3NhZ2UuYm9keSxyPXV8fGMsIXIpcmV0dXJuITE7Zm9yKG89bi5sZW5ndGgsdD0wO3Q8byYmKGE9bmV3IFJlZ0V4cChuW3RdLFwiZ2lcIiksIShpPWEudGVzdChyKSkpO3QrKyk7fWNhdGNoKGwpe3RoaXMuY29uZmlndXJlKHtpZ25vcmVkTWVzc2FnZXM6bnVsbH0pLGNvbnNvbGUuZXJyb3IoXCJbUm9sbGJhcl06IEVycm9yIHdoaWxlIHJlYWRpbmcgeW91ciBjb25maWd1cmF0aW9uJ3MgaWdub3JlZE1lc3NhZ2VzIG9wdGlvbi4gUmVtb3ZpbmcgY3VzdG9tIGlnbm9yZWRNZXNzYWdlcy5cIil9cmV0dXJuIGl9LHguX2VucXVldWVQYXlsb2FkPWZ1bmN0aW9uKGUscix0LG4pe3ZhciBvPXtjYWxsYmFjazpuLGFjY2Vzc1Rva2VuOnRoaXMub3B0aW9ucy5hY2Nlc3NUb2tlbixlbmRwb2ludFVybDp0aGlzLl9yb3V0ZShcIml0ZW0vXCIpLHBheWxvYWQ6ZX0saT1mdW5jdGlvbigpe2lmKG4pe3ZhciBlPVwiVGhpcyBpdGVtIHdhcyBub3Qgc2VudCB0byBSb2xsYmFyIGJlY2F1c2UgaXQgd2FzIGlnbm9yZWQuIFRoaXMgY2FuIGhhcHBlbiBpZiBhIGN1c3RvbSBjaGVja0lnbm9yZSgpIGZ1bmN0aW9uIHdhcyB1c2VkIG9yIGlmIHRoZSBpdGVtJ3MgbGV2ZWwgd2FzIGxlc3MgdGhhbiB0aGUgbm90aWZpZXInIHJlcG9ydExldmVsLiBTZWUgaHR0cHM6Ly9yb2xsYmFyLmNvbS9kb2NzL25vdGlmaWVyL3JvbGxiYXIuanMvY29uZmlndXJhdGlvbiBmb3IgbW9yZSBkZXRhaWxzLlwiO24obnVsbCx7ZXJyOjAscmVzdWx0OntpZDpudWxsLHV1aWQ6bnVsbCxtZXNzYWdlOmV9fSl9fTtpZih0aGlzLl9pbnRlcm5hbENoZWNrSWdub3JlKHIsdCxlKSlyZXR1cm4gdm9pZCBpKCk7dHJ5e2lmKHYuaXNUeXBlKHRoaXMub3B0aW9ucy5jaGVja0lnbm9yZSxcImZ1bmN0aW9uXCIpJiZ0aGlzLm9wdGlvbnMuY2hlY2tJZ25vcmUocix0LGUpKXJldHVybiB2b2lkIGkoKX1jYXRjaChhKXt0aGlzLmNvbmZpZ3VyZSh7Y2hlY2tJZ25vcmU6bnVsbH0pLGNvbnNvbGUuZXJyb3IoXCJbUm9sbGJhcl06IEVycm9yIHdoaWxlIGNhbGxpbmcgY3VzdG9tIGNoZWNrSWdub3JlKCkgZnVuY3Rpb24uIFJlbW92aW5nIGN1c3RvbSBjaGVja0lnbm9yZSgpLlwiLGEpfWlmKHRoaXMuX3VybElzV2hpdGVsaXN0ZWQoZSkmJiF0aGlzLl9tZXNzYWdlSXNJZ25vcmVkKGUpKXtpZih0aGlzLm9wdGlvbnMudmVyYm9zZSl7aWYoZS5kYXRhJiZlLmRhdGEuYm9keSYmZS5kYXRhLmJvZHkudHJhY2Upe3ZhciBzPWUuZGF0YS5ib2R5LnRyYWNlLGM9cy5leGNlcHRpb24ubWVzc2FnZTtjb25zb2xlLmVycm9yKFwiW1JvbGxiYXJdOiBcIixjKX1jb25zb2xlLmluZm8oXCJbUm9sbGJhcl06IFwiLG8pfXYuaXNUeXBlKHRoaXMub3B0aW9ucy5sb2dGdW5jdGlvbixcImZ1bmN0aW9uXCIpJiZ0aGlzLm9wdGlvbnMubG9nRnVuY3Rpb24obyk7dHJ5e3YuaXNUeXBlKHRoaXMub3B0aW9ucy50cmFuc2Zvcm0sXCJmdW5jdGlvblwiKSYmdGhpcy5vcHRpb25zLnRyYW5zZm9ybShlKX1jYXRjaChhKXt0aGlzLmNvbmZpZ3VyZSh7dHJhbnNmb3JtOm51bGx9KSxjb25zb2xlLmVycm9yKFwiW1JvbGxiYXJdOiBFcnJvciB3aGlsZSBjYWxsaW5nIGN1c3RvbSB0cmFuc2Zvcm0oKSBmdW5jdGlvbi4gUmVtb3ZpbmcgY3VzdG9tIHRyYW5zZm9ybSgpLlwiLGEpfXRoaXMub3B0aW9ucy5lbmFibGVkJiZ1KG8pfX0seC5faW50ZXJuYWxDaGVja0lnbm9yZT1mdW5jdGlvbihlLHIsdCl7dmFyIG49clswXSxvPXMuTEVWRUxTW25dfHwwLGk9cy5MRVZFTFNbdGhpcy5vcHRpb25zLnJlcG9ydExldmVsXXx8MDtpZihvPGkpcmV0dXJuITA7dmFyIGE9dGhpcy5vcHRpb25zP3RoaXMub3B0aW9ucy5wbHVnaW5zOnt9O2lmKGEmJmEuanF1ZXJ5JiZhLmpxdWVyeS5pZ25vcmVBamF4RXJyb3JzKXRyeXtyZXR1cm4hIXQuZGF0YS5ib2R5Lm1lc3NhZ2UuZXh0cmEuaXNBamF4fWNhdGNoKHUpe3JldHVybiExfXJldHVybiExfSx4Ll9sb2c9ZnVuY3Rpb24oZSxyLHQsbixvLGksYSl7dmFyIHM9bnVsbDtpZih0KXRyeXtpZihzPXQuX3NhdmVkU3RhY2tUcmFjZT90Ll9zYXZlZFN0YWNrVHJhY2U6bS5wYXJzZSh0KSx0PT09dGhpcy5sYXN0RXJyb3IpcmV0dXJuO3RoaXMubGFzdEVycm9yPXR9Y2F0Y2godSl7Y29uc29sZS5lcnJvcihcIltSb2xsYmFyXTogRXJyb3Igd2hpbGUgcGFyc2luZyB0aGUgZXJyb3Igb2JqZWN0LlwiLHUpLHI9dC5tZXNzYWdlfHx0LmRlc2NyaXB0aW9ufHxyfHxTdHJpbmcodCksdD1udWxsfXZhciBjPXRoaXMuX2J1aWxkUGF5bG9hZChuZXcgRGF0ZSxlLHIscyxuKTthJiYoYy5pZ25vcmVSYXRlTGltaXQ9ITApLHRoaXMuX2VucXVldWVQYXlsb2FkKGMsISFpLFtlLHIsdCxuXSxvKX0seC5sb2c9YygpLHguZGVidWc9YyhcImRlYnVnXCIpLHguaW5mbz1jKFwiaW5mb1wiKSx4Lndhcm49YyhcIndhcm5pbmdcIikseC53YXJuaW5nPWMoXCJ3YXJuaW5nXCIpLHguZXJyb3I9YyhcImVycm9yXCIpLHguY3JpdGljYWw9YyhcImNyaXRpY2FsXCIpLHgudW5jYXVnaHRFcnJvcj1vKGZ1bmN0aW9uKGUscix0LG4sbyxpKXtpZihpPWl8fG51bGwsbyYmdi5pc1R5cGUobyxcImVycm9yXCIpKXJldHVybiB2b2lkIHRoaXMuX2xvZyh0aGlzLm9wdGlvbnMudW5jYXVnaHRFcnJvckxldmVsLGUsbyxpLG51bGwsITApO2lmKHImJnYuaXNUeXBlKHIsXCJlcnJvclwiKSlyZXR1cm4gdm9pZCB0aGlzLl9sb2codGhpcy5vcHRpb25zLnVuY2F1Z2h0RXJyb3JMZXZlbCxlLHIsaSxudWxsLCEwKTt2YXIgYT17dXJsOnJ8fFwiXCIsbGluZTp0fTthLmZ1bmM9bS5ndWVzc0Z1bmN0aW9uTmFtZShhLnVybCxhLmxpbmUpLGEuY29udGV4dD1tLmdhdGhlckNvbnRleHQoYS51cmwsYS5saW5lKTt2YXIgcz17bW9kZTpcIm9uZXJyb3JcIixtZXNzYWdlOm8/U3RyaW5nKG8pOmV8fFwidW5jYXVnaHQgZXhjZXB0aW9uXCIsdXJsOmRvY3VtZW50LmxvY2F0aW9uLmhyZWYsc3RhY2s6W2FdLHVzZXJhZ2VudDpuYXZpZ2F0b3IudXNlckFnZW50fSx1PXRoaXMuX2J1aWxkUGF5bG9hZChuZXcgRGF0ZSx0aGlzLm9wdGlvbnMudW5jYXVnaHRFcnJvckxldmVsLGUscyxpKTt0aGlzLl9lbnF1ZXVlUGF5bG9hZCh1LCEwLFt0aGlzLm9wdGlvbnMudW5jYXVnaHRFcnJvckxldmVsLGUscix0LG4sb10pfSkseC51bmhhbmRsZWRSZWplY3Rpb249byhmdW5jdGlvbihlLHIpe2lmKG51bGw9PWUpcmV0dXJuIHZvaWQgXy5fbG9nKF8ub3B0aW9ucy51bmNhdWdodEVycm9yTGV2ZWwsXCJ1bmhhbmRsZWQgcmVqZWN0aW9uIHdhcyBudWxsIG9yIHVuZGVmaW5lZCFcIixudWxsLHt9LG51bGwsITEsITEpO3ZhciB0PWUubWVzc2FnZXx8KGU/U3RyaW5nKGUpOlwidW5oYW5kbGVkIHJlamVjdGlvblwiKSxuPWUuX3JvbGxiYXJDb250ZXh0fHxyLl9yb2xsYmFyQ29udGV4dHx8bnVsbDtpZihlJiZ2LmlzVHlwZShlLFwiZXJyb3JcIikpcmV0dXJuIHZvaWQgdGhpcy5fbG9nKHRoaXMub3B0aW9ucy51bmNhdWdodEVycm9yTGV2ZWwsdCxlLG4sbnVsbCwhMCk7dmFyIG89e3VybDpcIlwiLGxpbmU6MH07by5mdW5jPW0uZ3Vlc3NGdW5jdGlvbk5hbWUoby51cmwsby5saW5lKSxvLmNvbnRleHQ9bS5nYXRoZXJDb250ZXh0KG8udXJsLG8ubGluZSk7dmFyIGk9e21vZGU6XCJ1bmhhbmRsZWRyZWplY3Rpb25cIixtZXNzYWdlOnQsdXJsOmRvY3VtZW50LmxvY2F0aW9uLmhyZWYsc3RhY2s6W29dLHVzZXJhZ2VudDpuYXZpZ2F0b3IudXNlckFnZW50fSxhPXRoaXMuX2J1aWxkUGF5bG9hZChuZXcgRGF0ZSx0aGlzLm9wdGlvbnMudW5jYXVnaHRFcnJvckxldmVsLHQsaSxuKTt0aGlzLl9lbnF1ZXVlUGF5bG9hZChhLCEwLFt0aGlzLm9wdGlvbnMudW5jYXVnaHRFcnJvckxldmVsLHQsby51cmwsby5saW5lLDAsZSxyXSl9KSx4Lmdsb2JhbD1vKGZ1bmN0aW9uKGUpe2U9ZXx8e307dmFyIHI9e3N0YXJ0VGltZTplLnN0YXJ0VGltZSxtYXhJdGVtczplLm1heEl0ZW1zLGl0ZW1zUGVyTWludXRlOmUuaXRlbXNQZXJNaW51dGV9O2coITAsd2luZG93Ll9nbG9iYWxSb2xsYmFyT3B0aW9ucyxyKSx2b2lkIDAhPT1lLm1heEl0ZW1zJiYoVD0wKSx2b2lkIDAhPT1lLml0ZW1zUGVyTWludXRlJiYoUj0wKX0pLHguY29uZmlndXJlPW8oZnVuY3Rpb24oZSxyKXt2YXIgdD1nKCEwLHt9LGUpO2coIXIsdGhpcy5vcHRpb25zLHQpLHRoaXMuZ2xvYmFsKHQpfSkseC5zY29wZT1vKGZ1bmN0aW9uKGUpe3ZhciByPW5ldyBzKHRoaXMpO3JldHVybiBnKCEwLHIub3B0aW9ucy5wYXlsb2FkLGUpLHJ9KSx4LndyYXA9ZnVuY3Rpb24oZSxyKXt0cnl7dmFyIHQ7aWYodD12LmlzVHlwZShyLFwiZnVuY3Rpb25cIik/cjpmdW5jdGlvbigpe3JldHVybiByfHx7fX0sIXYuaXNUeXBlKGUsXCJmdW5jdGlvblwiKSlyZXR1cm4gZTtpZihlLl9pc1dyYXApcmV0dXJuIGU7aWYoIWUuX3dyYXBwZWQpe2UuX3dyYXBwZWQ9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIGUuYXBwbHkodGhpcyxhcmd1bWVudHMpfWNhdGNoKHIpe3Rocm93XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPW5ldyBTdHJpbmcocikpLHIuc3RhY2t8fChyLl9zYXZlZFN0YWNrVHJhY2U9bS5wYXJzZShyKSksci5fcm9sbGJhckNvbnRleHQ9dCgpfHx7fSxyLl9yb2xsYmFyQ29udGV4dC5fd3JhcHBlZFNvdXJjZT1lLnRvU3RyaW5nKCksd2luZG93Ll9yb2xsYmFyV3JhcHBlZEVycm9yPXIscn19LGUuX3dyYXBwZWQuX2lzV3JhcD0hMDtmb3IodmFyIG4gaW4gZSllLmhhc093blByb3BlcnR5KG4pJiYoZS5fd3JhcHBlZFtuXT1lW25dKX1yZXR1cm4gZS5fd3JhcHBlZH1jYXRjaChvKXtyZXR1cm4gZX19LHgubG9hZEZ1bGw9ZnVuY3Rpb24oKXtjb25zb2xlLmVycm9yKFwiW1JvbGxiYXJdOiBVbmV4cGVjdGVkIFJvbGxiYXIubG9hZEZ1bGwoKSBjYWxsZWQgb24gYSBOb3RpZmllciBpbnN0YW5jZVwiKX0scy5wcm9jZXNzUGF5bG9hZHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGU/dm9pZCBmKCk6dm9pZCBpKCl9O3ZhciBMPShuZXcgRGF0ZSkuZ2V0VGltZSgpLFQ9MCxSPTA7ZS5leHBvcnRzPXtOb3RpZmllcjpzLHNldHVwSlNPTjpuLHRvcExldmVsTm90aWZpZXI6YX19LGZ1bmN0aW9uKGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsbz1mdW5jdGlvbihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBBcnJheS5pc0FycmF5P0FycmF5LmlzQXJyYXkoZSk6XCJbb2JqZWN0IEFycmF5XVwiPT09bi5jYWxsKGUpfSxpPWZ1bmN0aW9uKGUpe2lmKCFlfHxcIltvYmplY3QgT2JqZWN0XVwiIT09bi5jYWxsKGUpKXJldHVybiExO3ZhciByPXQuY2FsbChlLFwiY29uc3RydWN0b3JcIiksbz1lLmNvbnN0cnVjdG9yJiZlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSYmdC5jYWxsKGUuY29uc3RydWN0b3IucHJvdG90eXBlLFwiaXNQcm90b3R5cGVPZlwiKTtpZihlLmNvbnN0cnVjdG9yJiYhciYmIW8pcmV0dXJuITE7dmFyIGk7Zm9yKGkgaW4gZSk7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGl8fHQuY2FsbChlLGkpfTtlLmV4cG9ydHM9ZnVuY3Rpb24gYSgpe3ZhciBlLHIsdCxuLHMsdSxjPWFyZ3VtZW50c1swXSxsPTEscD1hcmd1bWVudHMubGVuZ3RoLGY9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgYz8oZj1jLGM9YXJndW1lbnRzWzFdfHx7fSxsPTIpOihcIm9iamVjdFwiIT10eXBlb2YgYyYmXCJmdW5jdGlvblwiIT10eXBlb2YgY3x8bnVsbD09YykmJihjPXt9KTtsPHA7KytsKWlmKGU9YXJndW1lbnRzW2xdLG51bGwhPWUpZm9yKHIgaW4gZSl0PWNbcl0sbj1lW3JdLGMhPT1uJiYoZiYmbiYmKGkobil8fChzPW8obikpKT8ocz8ocz0hMSx1PXQmJm8odCk/dDpbXSk6dT10JiZpKHQpP3Q6e30sY1tyXT1hKGYsdSxuKSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG4mJihjW3JdPW4pKTtyZXR1cm4gY319LGZ1bmN0aW9uKGUscix0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKCl7cmV0dXJuIGx9ZnVuY3Rpb24gbygpe3JldHVybiBudWxsfWZ1bmN0aW9uIGkoZSl7dmFyIHI9e307cmV0dXJuIHIuX3N0YWNrRnJhbWU9ZSxyLnVybD1lLmZpbGVOYW1lLHIubGluZT1lLmxpbmVOdW1iZXIsci5mdW5jPWUuZnVuY3Rpb25OYW1lLHIuY29sdW1uPWUuY29sdW1uTnVtYmVyLHIuYXJncz1lLmFyZ3Msci5jb250ZXh0PW8oci51cmwsci5saW5lKSxyfWZ1bmN0aW9uIGEoZSl7ZnVuY3Rpb24gcigpe3ZhciByPVtdO3RyeXtyPWMucGFyc2UoZSl9Y2F0Y2godCl7cj1bXX1mb3IodmFyIG49W10sbz0wO288ci5sZW5ndGg7bysrKW4ucHVzaChuZXcgaShyW29dKSk7cmV0dXJuIG59cmV0dXJue3N0YWNrOnIoKSxtZXNzYWdlOmUubWVzc2FnZSxuYW1lOmUubmFtZX19ZnVuY3Rpb24gcyhlKXtyZXR1cm4gbmV3IGEoZSl9ZnVuY3Rpb24gdShlKXtpZighZSlyZXR1cm5bXCJVbmtub3duIGVycm9yLiBUaGVyZSB3YXMgbm8gZXJyb3IgbWVzc2FnZSB0byBkaXNwbGF5LlwiLFwiXCJdO3ZhciByPWUubWF0Y2gocCksdD1cIih1bmtub3duKVwiO3JldHVybiByJiYodD1yW3IubGVuZ3RoLTFdLGU9ZS5yZXBsYWNlKChyW3IubGVuZ3RoLTJdfHxcIlwiKSt0K1wiOlwiLFwiXCIpLGU9ZS5yZXBsYWNlKC8oXltcXHNdK3xbXFxzXSskKS9nLFwiXCIpKSxbdCxlXX12YXIgYz10KDYpLGw9XCI/XCIscD1uZXcgUmVnRXhwKFwiXigoW2EtekEtWjAtOS1fJCBdKik6ICopPyhVbmNhdWdodCApPyhbYS16QS1aMC05LV8kIF0qKTogXCIpO2UuZXhwb3J0cz17Z3Vlc3NGdW5jdGlvbk5hbWU6bixndWVzc0Vycm9yQ2xhc3M6dSxnYXRoZXJDb250ZXh0Om8scGFyc2U6cyxTdGFjazphLEZyYW1lOml9fSxmdW5jdGlvbihlLHIsdCl7dmFyIG4sbyxpOyFmdW5jdGlvbihhLHMpe1widXNlIHN0cmljdFwiO289W3QoNyldLG49cyxpPVwiZnVuY3Rpb25cIj09dHlwZW9mIG4/bi5hcHBseShyLG8pOm4sISh2b2lkIDAhPT1pJiYoZS5leHBvcnRzPWkpKX0odGhpcyxmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUscix0KXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBBcnJheS5wcm90b3R5cGUubWFwKXJldHVybiBlLm1hcChyLHQpO2Zvcih2YXIgbj1uZXcgQXJyYXkoZS5sZW5ndGgpLG89MDtvPGUubGVuZ3RoO28rKyluW29dPXIuY2FsbCh0LGVbb10pO3JldHVybiBufWZ1bmN0aW9uIHQoZSxyLHQpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIEFycmF5LnByb3RvdHlwZS5maWx0ZXIpcmV0dXJuIGUuZmlsdGVyKHIsdCk7Zm9yKHZhciBuPVtdLG89MDtvPGUubGVuZ3RoO28rKylyLmNhbGwodCxlW29dKSYmbi5wdXNoKGVbb10pO3JldHVybiBufXZhciBuPS8oXnxAKVxcUytcXDpcXGQrLyxvPS9eXFxzKmF0IC4qKFxcUytcXDpcXGQrfFxcKG5hdGl2ZVxcKSkvbSxpPS9eKGV2YWxAKT8oXFxbbmF0aXZlIGNvZGVcXF0pPyQvO3JldHVybntwYXJzZTpmdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5zdGFja3RyYWNlfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgZVtcIm9wZXJhI3NvdXJjZWxvY1wiXSlyZXR1cm4gdGhpcy5wYXJzZU9wZXJhKGUpO2lmKGUuc3RhY2smJmUuc3RhY2subWF0Y2gobykpcmV0dXJuIHRoaXMucGFyc2VWOE9ySUUoZSk7aWYoZS5zdGFjaylyZXR1cm4gdGhpcy5wYXJzZUZGT3JTYWZhcmkoZSk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHBhcnNlIGdpdmVuIEVycm9yIG9iamVjdFwiKX0sZXh0cmFjdExvY2F0aW9uOmZ1bmN0aW9uKGUpe2lmKGUuaW5kZXhPZihcIjpcIik9PT0tMSlyZXR1cm5bZV07dmFyIHI9ZS5yZXBsYWNlKC9bXFwoXFwpXFxzXS9nLFwiXCIpLnNwbGl0KFwiOlwiKSx0PXIucG9wKCksbj1yW3IubGVuZ3RoLTFdO2lmKCFpc05hTihwYXJzZUZsb2F0KG4pKSYmaXNGaW5pdGUobikpe3ZhciBvPXIucG9wKCk7cmV0dXJuW3Iuam9pbihcIjpcIiksbyx0XX1yZXR1cm5bci5qb2luKFwiOlwiKSx0LHZvaWQgMF19LHBhcnNlVjhPcklFOmZ1bmN0aW9uKG4pe3ZhciBpPXQobi5zdGFjay5zcGxpdChcIlxcblwiKSxmdW5jdGlvbihlKXtyZXR1cm4hIWUubWF0Y2gobyl9LHRoaXMpO3JldHVybiByKGksZnVuY3Rpb24ocil7ci5pbmRleE9mKFwiKGV2YWwgXCIpPi0xJiYocj1yLnJlcGxhY2UoL2V2YWwgY29kZS9nLFwiZXZhbFwiKS5yZXBsYWNlKC8oXFwoZXZhbCBhdCBbXlxcKCldKil8KFxcKVxcLC4qJCkvZyxcIlwiKSk7dmFyIHQ9ci5yZXBsYWNlKC9eXFxzKy8sXCJcIikucmVwbGFjZSgvXFwoZXZhbCBjb2RlL2csXCIoXCIpLnNwbGl0KC9cXHMrLykuc2xpY2UoMSksbj10aGlzLmV4dHJhY3RMb2NhdGlvbih0LnBvcCgpKSxvPXQuam9pbihcIiBcIil8fHZvaWQgMCxpPVwiZXZhbFwiPT09blswXT92b2lkIDA6blswXTtyZXR1cm4gbmV3IGUobywodm9pZCAwKSxpLG5bMV0sblsyXSxyKX0sdGhpcyl9LHBhcnNlRkZPclNhZmFyaTpmdW5jdGlvbihuKXt2YXIgbz10KG4uc3RhY2suc3BsaXQoXCJcXG5cIiksZnVuY3Rpb24oZSl7cmV0dXJuIWUubWF0Y2goaSl9LHRoaXMpO3JldHVybiByKG8sZnVuY3Rpb24ocil7aWYoci5pbmRleE9mKFwiID4gZXZhbFwiKT4tMSYmKHI9ci5yZXBsYWNlKC8gbGluZSAoXFxkKykoPzogPiBldmFsIGxpbmUgXFxkKykqID4gZXZhbFxcOlxcZCtcXDpcXGQrL2csXCI6JDFcIikpLHIuaW5kZXhPZihcIkBcIik9PT0tMSYmci5pbmRleE9mKFwiOlwiKT09PS0xKXJldHVybiBuZXcgZShyKTt2YXIgdD1yLnNwbGl0KFwiQFwiKSxuPXRoaXMuZXh0cmFjdExvY2F0aW9uKHQucG9wKCkpLG89dC5zaGlmdCgpfHx2b2lkIDA7cmV0dXJuIG5ldyBlKG8sKHZvaWQgMCksblswXSxuWzFdLG5bMl0scil9LHRoaXMpfSxwYXJzZU9wZXJhOmZ1bmN0aW9uKGUpe3JldHVybiFlLnN0YWNrdHJhY2V8fGUubWVzc2FnZS5pbmRleE9mKFwiXFxuXCIpPi0xJiZlLm1lc3NhZ2Uuc3BsaXQoXCJcXG5cIikubGVuZ3RoPmUuc3RhY2t0cmFjZS5zcGxpdChcIlxcblwiKS5sZW5ndGg/dGhpcy5wYXJzZU9wZXJhOShlKTplLnN0YWNrP3RoaXMucGFyc2VPcGVyYTExKGUpOnRoaXMucGFyc2VPcGVyYTEwKGUpfSxwYXJzZU9wZXJhOTpmdW5jdGlvbihyKXtmb3IodmFyIHQ9L0xpbmUgKFxcZCspLipzY3JpcHQgKD86aW4gKT8oXFxTKykvaSxuPXIubWVzc2FnZS5zcGxpdChcIlxcblwiKSxvPVtdLGk9MixhPW4ubGVuZ3RoO2k8YTtpKz0yKXt2YXIgcz10LmV4ZWMobltpXSk7cyYmby5wdXNoKG5ldyBlKCh2b2lkIDApLCh2b2lkIDApLHNbMl0sc1sxXSwodm9pZCAwKSxuW2ldKSl9cmV0dXJuIG99LHBhcnNlT3BlcmExMDpmdW5jdGlvbihyKXtmb3IodmFyIHQ9L0xpbmUgKFxcZCspLipzY3JpcHQgKD86aW4gKT8oXFxTKykoPzo6IEluIGZ1bmN0aW9uIChcXFMrKSk/JC9pLG49ci5zdGFja3RyYWNlLnNwbGl0KFwiXFxuXCIpLG89W10saT0wLGE9bi5sZW5ndGg7aTxhO2krPTIpe3ZhciBzPXQuZXhlYyhuW2ldKTtzJiZvLnB1c2gobmV3IGUoc1szXXx8dm9pZCAwLCh2b2lkIDApLHNbMl0sc1sxXSwodm9pZCAwKSxuW2ldKSl9cmV0dXJuIG99LHBhcnNlT3BlcmExMTpmdW5jdGlvbihvKXt2YXIgaT10KG8uc3RhY2suc3BsaXQoXCJcXG5cIiksZnVuY3Rpb24oZSl7cmV0dXJuISFlLm1hdGNoKG4pJiYhZS5tYXRjaCgvXkVycm9yIGNyZWF0ZWQgYXQvKX0sdGhpcyk7cmV0dXJuIHIoaSxmdW5jdGlvbihyKXt2YXIgdCxuPXIuc3BsaXQoXCJAXCIpLG89dGhpcy5leHRyYWN0TG9jYXRpb24obi5wb3AoKSksaT1uLnNoaWZ0KCl8fFwiXCIsYT1pLnJlcGxhY2UoLzxhbm9ueW1vdXMgZnVuY3Rpb24oOiAoXFx3KykpPz4vLFwiJDJcIikucmVwbGFjZSgvXFwoW15cXCldKlxcKS9nLFwiXCIpfHx2b2lkIDA7aS5tYXRjaCgvXFwoKFteXFwpXSopXFwpLykmJih0PWkucmVwbGFjZSgvXlteXFwoXStcXCgoW15cXCldKilcXCkkLyxcIiQxXCIpKTt2YXIgcz12b2lkIDA9PT10fHxcIlthcmd1bWVudHMgbm90IGF2YWlsYWJsZV1cIj09PXQ/dm9pZCAwOnQuc3BsaXQoXCIsXCIpO3JldHVybiBuZXcgZShhLHMsb1swXSxvWzFdLG9bMl0scil9LHRoaXMpfX19KX0sZnVuY3Rpb24oZSxyLHQpe3ZhciBuLG8saTshZnVuY3Rpb24odCxhKXtcInVzZSBzdHJpY3RcIjtvPVtdLG49YSxpPVwiZnVuY3Rpb25cIj09dHlwZW9mIG4/bi5hcHBseShyLG8pOm4sISh2b2lkIDAhPT1pJiYoZS5leHBvcnRzPWkpKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSl7cmV0dXJuIWlzTmFOKHBhcnNlRmxvYXQoZSkpJiZpc0Zpbml0ZShlKX1mdW5jdGlvbiByKGUscix0LG4sbyxpKXt2b2lkIDAhPT1lJiZ0aGlzLnNldEZ1bmN0aW9uTmFtZShlKSx2b2lkIDAhPT1yJiZ0aGlzLnNldEFyZ3Mociksdm9pZCAwIT09dCYmdGhpcy5zZXRGaWxlTmFtZSh0KSx2b2lkIDAhPT1uJiZ0aGlzLnNldExpbmVOdW1iZXIobiksdm9pZCAwIT09byYmdGhpcy5zZXRDb2x1bW5OdW1iZXIobyksdm9pZCAwIT09aSYmdGhpcy5zZXRTb3VyY2UoaSl9cmV0dXJuIHIucHJvdG90eXBlPXtnZXRGdW5jdGlvbk5hbWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5mdW5jdGlvbk5hbWV9LHNldEZ1bmN0aW9uTmFtZTpmdW5jdGlvbihlKXt0aGlzLmZ1bmN0aW9uTmFtZT1TdHJpbmcoZSl9LGdldEFyZ3M6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hcmdzfSxzZXRBcmdzOmZ1bmN0aW9uKGUpe2lmKFwiW29iamVjdCBBcnJheV1cIiE9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJncyBtdXN0IGJlIGFuIEFycmF5XCIpO3RoaXMuYXJncz1lfSxnZXRGaWxlTmFtZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmZpbGVOYW1lfSxzZXRGaWxlTmFtZTpmdW5jdGlvbihlKXt0aGlzLmZpbGVOYW1lPVN0cmluZyhlKX0sZ2V0TGluZU51bWJlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmxpbmVOdW1iZXJ9LHNldExpbmVOdW1iZXI6ZnVuY3Rpb24ocil7aWYoIWUocikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkxpbmUgTnVtYmVyIG11c3QgYmUgYSBOdW1iZXJcIik7dGhpcy5saW5lTnVtYmVyPU51bWJlcihyKX0sZ2V0Q29sdW1uTnVtYmVyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29sdW1uTnVtYmVyfSxzZXRDb2x1bW5OdW1iZXI6ZnVuY3Rpb24ocil7aWYoIWUocikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNvbHVtbiBOdW1iZXIgbXVzdCBiZSBhIE51bWJlclwiKTt0aGlzLmNvbHVtbk51bWJlcj1OdW1iZXIocil9LGdldFNvdXJjZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNvdXJjZX0sc2V0U291cmNlOmZ1bmN0aW9uKGUpe3RoaXMuc291cmNlPVN0cmluZyhlKX0sdG9TdHJpbmc6ZnVuY3Rpb24oKXt2YXIgcj10aGlzLmdldEZ1bmN0aW9uTmFtZSgpfHxcInthbm9ueW1vdXN9XCIsdD1cIihcIisodGhpcy5nZXRBcmdzKCl8fFtdKS5qb2luKFwiLFwiKStcIilcIixuPXRoaXMuZ2V0RmlsZU5hbWUoKT9cIkBcIit0aGlzLmdldEZpbGVOYW1lKCk6XCJcIixvPWUodGhpcy5nZXRMaW5lTnVtYmVyKCkpP1wiOlwiK3RoaXMuZ2V0TGluZU51bWJlcigpOlwiXCIsaT1lKHRoaXMuZ2V0Q29sdW1uTnVtYmVyKCkpP1wiOlwiK3RoaXMuZ2V0Q29sdW1uTnVtYmVyKCk6XCJcIjtyZXR1cm4gcit0K24rbytpfX0scn0pfSxmdW5jdGlvbihlLHIsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXtyZXR1cm57fS50b1N0cmluZy5jYWxsKGUpLm1hdGNoKC9cXHMoW2EtekEtWl0rKS8pWzFdLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gbyhlLHIpe3JldHVybiBuKGUpPT09cn1mdW5jdGlvbiBpKGUpe2lmKCFvKGUsXCJzdHJpbmdcIikpdGhyb3cgbmV3IEVycm9yKFwicmVjZWl2ZWQgaW52YWxpZCBpbnB1dFwiKTtmb3IodmFyIHI9bCx0PXIucGFyc2VyW3Iuc3RyaWN0TW9kZT9cInN0cmljdFwiOlwibG9vc2VcIl0uZXhlYyhlKSxuPXt9LGk9MTQ7aS0tOyluW3Iua2V5W2ldXT10W2ldfHxcIlwiO3JldHVybiBuW3IucS5uYW1lXT17fSxuW3Iua2V5WzEyXV0ucmVwbGFjZShyLnEucGFyc2VyLGZ1bmN0aW9uKGUsdCxvKXt0JiYobltyLnEubmFtZV1bdF09byl9KSxufWZ1bmN0aW9uIGEoZSl7dmFyIHI9aShlKTtyZXR1cm5cIlwiPT09ci5hbmNob3ImJihyLnNvdXJjZT1yLnNvdXJjZS5yZXBsYWNlKFwiI1wiLFwiXCIpKSxlPXIuc291cmNlLnJlcGxhY2UoXCI/XCIrci5xdWVyeSxcIlwiKX1mdW5jdGlvbiBzKGUscil7dmFyIHQsbixpLGE9byhlLFwib2JqZWN0XCIpLHU9byhlLFwiYXJyYXlcIiksYz1bXTtpZihhKWZvcih0IGluIGUpZS5oYXNPd25Qcm9wZXJ0eSh0KSYmYy5wdXNoKHQpO2Vsc2UgaWYodSlmb3IoaT0wO2k8ZS5sZW5ndGg7KytpKWMucHVzaChpKTtmb3IoaT0wO2k8Yy5sZW5ndGg7KytpKXQ9Y1tpXSxuPWVbdF0sYT1vKG4sXCJvYmplY3RcIiksdT1vKG4sXCJhcnJheVwiKSxhfHx1P2VbdF09cyhuLHIpOmVbdF09cih0LG4pO3JldHVybiBlfWZ1bmN0aW9uIHUoZSl7cmV0dXJuIGU9U3RyaW5nKGUpLG5ldyBBcnJheShlLmxlbmd0aCsxKS5qb2luKFwiKlwiKX1mdW5jdGlvbiBjKCl7dmFyIGU9KG5ldyBEYXRlKS5nZXRUaW1lKCkscj1cInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiLnJlcGxhY2UoL1t4eV0vZyxmdW5jdGlvbihyKXt2YXIgdD0oZSsxNipNYXRoLnJhbmRvbSgpKSUxNnwwO3JldHVybiBlPU1hdGguZmxvb3IoZS8xNiksKFwieFwiPT09cj90OjcmdHw4KS50b1N0cmluZygxNil9KTtyZXR1cm4gcn10KDkpO3ZhciBsPXtzdHJpY3RNb2RlOiExLGtleTpbXCJzb3VyY2VcIixcInByb3RvY29sXCIsXCJhdXRob3JpdHlcIixcInVzZXJJbmZvXCIsXCJ1c2VyXCIsXCJwYXNzd29yZFwiLFwiaG9zdFwiLFwicG9ydFwiLFwicmVsYXRpdmVcIixcInBhdGhcIixcImRpcmVjdG9yeVwiLFwiZmlsZVwiLFwicXVlcnlcIixcImFuY2hvclwiXSxxOntuYW1lOlwicXVlcnlLZXlcIixwYXJzZXI6Lyg/Ol58JikoW14mPV0qKT0/KFteJl0qKS9nfSxwYXJzZXI6e3N0cmljdDovXig/OihbXjpcXC8/I10rKTopPyg/OlxcL1xcLygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KFteOlxcLz8jXSopKD86OihcXGQqKSk/KSk/KCgoKD86W14/I1xcL10qXFwvKSopKFtePyNdKikpKD86XFw/KFteI10qKSk/KD86IyguKikpPykvLGxvb3NlOi9eKD86KD8hW146QF0rOlteOkBcXC9dKkApKFteOlxcLz8jLl0rKTopPyg/OlxcL1xcLyk/KCg/OigoW146QF0qKSg/OjooW146QF0qKSk/KT9AKT8oW146XFwvPyNdKikoPzo6KFxcZCopKT8pKCgoXFwvKD86W14/I10oPyFbXj8jXFwvXSpcXC5bXj8jXFwvLl0rKD86Wz8jXXwkKSkpKlxcLz8pPyhbXj8jXFwvXSopKSg/OlxcPyhbXiNdKikpPyg/OiMoLiopKT8pL319LHA9e2lzVHlwZTpvLHBhcnNlVXJpOmkscGFyc2VVcmlPcHRpb25zOmwscmVkYWN0OnUsc2FuaXRpemVVcmw6YSx0cmF2ZXJzZTpzLHR5cGVOYW1lOm4sdXVpZDQ6Y307ZS5leHBvcnRzPXB9LGZ1bmN0aW9uKGUscil7IWZ1bmN0aW9uKGUpe1widXNlIHN0cmljdFwiO2UuY29uc29sZT1lLmNvbnNvbGV8fHt9O2Zvcih2YXIgcix0LG49ZS5jb25zb2xlLG89e30saT1mdW5jdGlvbigpe30sYT1cIm1lbW9yeVwiLnNwbGl0KFwiLFwiKSxzPVwiYXNzZXJ0LGNsZWFyLGNvdW50LGRlYnVnLGRpcixkaXJ4bWwsZXJyb3IsZXhjZXB0aW9uLGdyb3VwLGdyb3VwQ29sbGFwc2VkLGdyb3VwRW5kLGluZm8sbG9nLG1hcmtUaW1lbGluZSxwcm9maWxlLHByb2ZpbGVzLHByb2ZpbGVFbmQsc2hvdyx0YWJsZSx0aW1lLHRpbWVFbmQsdGltZWxpbmUsdGltZWxpbmVFbmQsdGltZVN0YW1wLHRyYWNlLHdhcm5cIi5zcGxpdChcIixcIik7cj1hLnBvcCgpOyluW3JdfHwobltyXT1vKTtmb3IoO3Q9cy5wb3AoKTspblt0XXx8KG5bdF09aSl9KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3c/dGhpczp3aW5kb3cpfSxmdW5jdGlvbihlLHIsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXthPWV9ZnVuY3Rpb24gbyhlKXt0aGlzLm5hbWU9XCJDb25uZWN0aW9uIEVycm9yXCIsdGhpcy5tZXNzYWdlPWUsdGhpcy5zdGFjaz0obmV3IEVycm9yKS5zdGFja312YXIgaT10KDgpLGE9bnVsbDtvLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSksby5wcm90b3R5cGUuY29uc3RydWN0b3I9bzt2YXIgcz17WE1MSHR0cEZhY3RvcmllczpbZnVuY3Rpb24oKXtyZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0fSxmdW5jdGlvbigpe3JldHVybiBuZXcgQWN0aXZlWE9iamVjdChcIk1zeG1sMi5YTUxIVFRQXCIpfSxmdW5jdGlvbigpe3JldHVybiBuZXcgQWN0aXZlWE9iamVjdChcIk1zeG1sMy5YTUxIVFRQXCIpfSxmdW5jdGlvbigpe3JldHVybiBuZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpfV0sY3JlYXRlWE1MSFRUUE9iamVjdDpmdW5jdGlvbigpe3ZhciBlLHI9ITEsdD1zLlhNTEh0dHBGYWN0b3JpZXMsbj10Lmxlbmd0aDtmb3IoZT0wO2U8bjtlKyspdHJ5e3I9dFtlXSgpO2JyZWFrfWNhdGNoKG8pe31yZXR1cm4gcn0scG9zdDpmdW5jdGlvbihlLHIsdCxuKXtpZighaS5pc1R5cGUodCxcIm9iamVjdFwiKSl0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBhbiBvYmplY3QgdG8gUE9TVFwiKTt0PWEuc3RyaW5naWZ5KHQpLG49bnx8ZnVuY3Rpb24oKXt9O3ZhciB1PXMuY3JlYXRlWE1MSFRUUE9iamVjdCgpO2lmKHUpdHJ5e3RyeXt2YXIgYz1mdW5jdGlvbigpe3RyeXtpZihjJiY0PT09dS5yZWFkeVN0YXRlKXtjPXZvaWQgMDt2YXIgZT1hLnBhcnNlKHUucmVzcG9uc2VUZXh0KTsyMDA9PT11LnN0YXR1cz9uKG51bGwsZSk6aS5pc1R5cGUodS5zdGF0dXMsXCJudW1iZXJcIikmJnUuc3RhdHVzPj00MDAmJnUuc3RhdHVzPDYwMD8oNDAzPT11LnN0YXR1cyYmY29uc29sZS5lcnJvcihcIltSb2xsYmFyXTpcIitlLm1lc3NhZ2UpLG4obmV3IEVycm9yKFN0cmluZyh1LnN0YXR1cykpKSk6bihuZXcgbyhcIlhIUiByZXNwb25zZSBoYWQgbm8gc3RhdHVzIGNvZGUgKGxpa2VseSBjb25uZWN0aW9uIGZhaWx1cmUpXCIpKX19Y2F0Y2gocil7dmFyIHQ7dD1yJiZyLnN0YWNrP3I6bmV3IEVycm9yKHIpLG4odCl9fTt1Lm9wZW4oXCJQT1NUXCIsZSwhMCksdS5zZXRSZXF1ZXN0SGVhZGVyJiYodS5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsXCJhcHBsaWNhdGlvbi9qc29uXCIpLHUuc2V0UmVxdWVzdEhlYWRlcihcIlgtUm9sbGJhci1BY2Nlc3MtVG9rZW5cIixyKSksdS5vbnJlYWR5c3RhdGVjaGFuZ2U9Yyx1LnNlbmQodCl9Y2F0Y2gobCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFhEb21haW5SZXF1ZXN0KXtcImh0dHA6XCI9PT13aW5kb3cubG9jYXRpb24uaHJlZi5zdWJzdHJpbmcoMCw1KSYmXCJodHRwc1wiPT09ZS5zdWJzdHJpbmcoMCw1KSYmKGU9XCJodHRwXCIrZS5zdWJzdHJpbmcoNSkpO3ZhciBwPWZ1bmN0aW9uKCl7bihuZXcgbyhcIlJlcXVlc3QgdGltZWQgb3V0XCIpKX0sZj1mdW5jdGlvbigpe24obmV3IEVycm9yKFwiRXJyb3IgZHVyaW5nIHJlcXVlc3RcIikpfSxkPWZ1bmN0aW9uKCl7bihudWxsLGEucGFyc2UodS5yZXNwb25zZVRleHQpKX07dT1uZXcgWERvbWFpblJlcXVlc3QsdS5vbnByb2dyZXNzPWZ1bmN0aW9uKCl7fSx1Lm9udGltZW91dD1wLHUub25lcnJvcj1mLHUub25sb2FkPWQsdS5vcGVuKFwiUE9TVFwiLGUsITApLHUuc2VuZCh0KX19fWNhdGNoKGgpe24oaCl9fX07ZS5leHBvcnRzPXtYSFI6cyxzZXR1cEpTT046bixDb25uZWN0aW9uRXJyb3I6b319XSl9KTsiLCJ2YXIgVmlzaW9uU2ltdWxhdGlvbiA9IHJlcXVpcmUoXCJkb3RhLXZpc2lvbi1zaW11bGF0aW9uXCIpO1xudmFyIHdvcmxkZGF0YSA9IHJlcXVpcmUoXCJkb3RhLXZpc2lvbi1zaW11bGF0aW9uL3NyYy93b3JsZGRhdGEuanNvblwiKTtcbnZhciBnZXRMaWdodFVuaW9uID0gcmVxdWlyZShcIi4vZ2V0TGlnaHRVbmlvblwiKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi91dGlsL3RyaW0nKTtcbnZhciBRdWVyeVN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbC9xdWVyeVN0cmluZycpO1xudmFyIFJvbGxiYXIgPSByZXF1aXJlKFwicm9sbGJhci1icm93c2VyXCIpO1xuXG52YXIgcm9sbGJhckNvbmZpZyA9IHtcbiAgICBhY2Nlc3NUb2tlbjogJ2ZlN2NmMzI3ZjJiMjRiYjg5OTFlMjUyMjM5ZjYyMDBmJyxcbiAgICBjYXB0dXJlVW5jYXVnaHQ6IHRydWUsXG4gICAgaWdub3JlZE1lc3NhZ2VzOiBbXCJTZWN1cml0eUVycm9yOiBET00gRXhjZXB0aW9uIDE4OiBBbiBhdHRlbXB0IHdhcyBtYWRlIHRvIGJyZWFrIHRocm91Z2ggdGhlIHNlY3VyaXR5IHBvbGljeSBvZiB0aGUgdXNlciBhZ2VudC5cIl0sXG4gICAgcGF5bG9hZDoge1xuICAgICAgICBlbnZpcm9ubWVudDogJ3Byb2R1Y3Rpb24nLFxuICAgICAgICBjbGllbnQ6IHtcbiAgICAgICAgICAgIGphdmFzY3JpcHQ6IHtcbiAgICAgICAgICAgICAgICBzb3VyY2VfbWFwX2VuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY29kZV92ZXJzaW9uOiBcImU2ZDZkNTg3MDBhODNmZDUwNDE0ZDA4YzZkYjhiYWZhZWJmYmVhNmZcIixcbiAgICAgICAgICAgICAgICAvLyBPcHRpb25hbGx5IGhhdmUgUm9sbGJhciBndWVzcyB3aGljaCBmcmFtZXMgdGhlIGVycm9yIHdhcyB0aHJvd24gZnJvbVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGJyb3dzZXIgZG9lcyBub3QgcHJvdmlkZSBsaW5lIGFuZCBjb2x1bW4gbnVtYmVycy5cbiAgICAgICAgICAgICAgICBndWVzc191bmNhdWdodF9mcmFtZXM6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciByb2xsYmFyID0gUm9sbGJhci5pbml0KHJvbGxiYXJDb25maWcpO1xuICAgIFxuZnVuY3Rpb24gQXBwKG1hcF90aWxlX3BhdGgsIHZpc2lvbl9kYXRhX2ltYWdlX3BhdGgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIElNR19ESVIgPSBcImltZy9cIixcbiAgICAgICAgRU5USVRJRVMgPSB7XG4gICAgICAgICAgICBvYnNlcnZlcjoge1xuICAgICAgICAgICAgICAgIGljb25fcGF0aDogSU1HX0RJUiArIFwid2FyZF9vYnNlcnZlci5wbmdcIixcbiAgICAgICAgICAgICAgICByYWRpdXM6IDE2MDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZW50cnk6IHtcbiAgICAgICAgICAgICAgICBpY29uX3BhdGg6IElNR19ESVIgKyBcIndhcmRfc2VudHJ5LnBuZ1wiLFxuICAgICAgICAgICAgICAgIHJhZGl1czogODUwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFRPV0VSX0RBWV9WSVNJT05fUkFESVVTID0gMTkwMCxcbiAgICAgICAgVE9XRVJfTklHSFRfVklTSU9OX1JBRElVUyA9IDgwMCxcbiAgICAgICAgVE9XRVJfVFJVRV9TSUdIVF9SQURJVVMgPSA3MDAsXG4gICAgICAgIFRPV0VSX0FUVEFDS19SQU5HRV9SQURJVVMgPSA3MDAsXG4gICAgICAgIG1hcF9kYXRhX3BhdGggPSBcImRhdGEvXCIsXG4gICAgICAgIG1hcF9kYXRhLFxuICAgICAgICBtYXBDb25zdGFudHMgPSByZXF1aXJlKCcuL21hcENvbnN0YW50cycpLFxuICAgICAgICBjb252ZXJzaW9uRnVuY3Rpb25zID0gcmVxdWlyZSgnLi9jb252ZXJzaW9uRnVuY3Rpb25zJyksXG4gICAgICAgIHpvb21pZnkgPSBuZXcgT3BlbkxheWVycy5MYXllci5ab29taWZ5KCBcIlpvb21pZnlcIiwgbWFwX3RpbGVfcGF0aCwgbmV3IE9wZW5MYXllcnMuU2l6ZSggbWFwQ29uc3RhbnRzLm1hcF93LCBtYXBDb25zdGFudHMubWFwX2ggKSApLFxuICAgICAgICBtYXBCb3VuZHMgPSBuZXcgT3BlbkxheWVycy5Cb3VuZHMoMCwgMCwgbWFwQ29uc3RhbnRzLm1hcF93LCBtYXBDb25zdGFudHMubWFwX2gpLFxuICAgICAgICBtYXAgPSBuZXcgT3BlbkxheWVycy5NYXAoXCJtYXAxXCIsIHtcbiAgICAgICAgICAgIHRoZW1lOiBudWxsLFxuICAgICAgICAgICAgbWF4RXh0ZW50OiBtYXBCb3VuZHMsXG4gICAgICAgICAgICBudW1ab29tTGV2ZWxzOiA1LFxuICAgICAgICAgICAgbWF4UmVzb2x1dGlvbjogTWF0aC5wb3coMiwgNS0xICksXG4gICAgICAgICAgICB1bml0czogXCJtXCJcbiAgICAgICAgfSksXG4gICAgICAgIGxheWVyS2V5cyA9IFtcbiAgICAgICAgICAgIFwibm9fd2FyZHNcIixcbiAgICAgICAgICAgIFwiZW50X2Zvd19ibG9ja2VyX25vZGVcIixcbiAgICAgICAgICAgIFwidHJpZ2dlcl9tdWx0aXBsZVwiLFxuICAgICAgICAgICAgXCJucGNfZG90YV9yb3NoYW5fc3Bhd25lclwiLFxuICAgICAgICAgICAgXCJlbnRfZG90YV90cmVlXCIsXG4gICAgICAgICAgICBcImRvdGFfaXRlbV9ydW5lX3NwYXduZXJcIixcbiAgICAgICAgICAgIFwiZG90YV9pdGVtX3J1bmVfc3Bhd25lcl9ib3VudHlcIixcbiAgICAgICAgICAgIFwiZW50X2RvdGFfc2hvcFwiLFxuICAgICAgICAgICAgXCJucGNfZG90YV9iYXJyYWNrc1wiLFxuICAgICAgICAgICAgXCJucGNfZG90YV9idWlsZGluZ1wiLFxuICAgICAgICAgICAgXCJucGNfZG90YV9oZWFsZXJcIixcbiAgICAgICAgICAgIFwibnBjX2RvdGFfZm9ydFwiLFxuICAgICAgICAgICAgXCJucGNfZG90YV90b3dlclwiXG4gICAgICAgIF0sXG4gICAgICAgIGxheWVyTmFtZXMgPSB7XG4gICAgICAgICAgICBucGNfZG90YV9yb3NoYW5fc3Bhd25lcjogXCJSb3NoYW5cIixcbiAgICAgICAgICAgIGRvdGFfaXRlbV9ydW5lX3NwYXduZXI6IFwiUnVuZXNcIixcbiAgICAgICAgICAgIGRvdGFfaXRlbV9ydW5lX3NwYXduZXJfYm91bnR5OiBcIkJvdW50eSBSdW5lc1wiLFxuICAgICAgICAgICAgZW50X2RvdGFfdHJlZTogXCJUcmVlc1wiLFxuICAgICAgICAgICAgbnBjX2RvdGFfaGVhbGVyOiBcIlNocmluZXNcIixcbiAgICAgICAgICAgIG5wY19kb3RhX2ZvcnQ6IFwiQW5jaWVudHNcIixcbiAgICAgICAgICAgIGVudF9kb3RhX3Nob3A6IFwiU2hvcHNcIixcbiAgICAgICAgICAgIG5wY19kb3RhX3Rvd2VyOiBcIlRvd2Vyc1wiLFxuICAgICAgICAgICAgbnBjX2RvdGFfYmFycmFja3M6IFwiQmFycmFja3NcIixcbiAgICAgICAgICAgIG5wY19kb3RhX2J1aWxkaW5nOiBcIkJ1aWxkaW5nc1wiLFxuICAgICAgICAgICAgdHJpZ2dlcl9tdWx0aXBsZTogXCJOZXV0cmFsIENhbXBzIFNwYXduIEJveGVzXCIsXG4gICAgICAgICAgICBucGNfZG90YV9uZXV0cmFsX3NwYXduZXI6IFwiTmV1dHJhbCBDYW1wc1wiLFxuICAgICAgICAgICAgbm9fd2FyZHM6IFwiSW52YWxpZCBXYXJkIExvY2F0aW9uc1wiLFxuICAgICAgICAgICAgZW50X2Zvd19ibG9ja2VyX25vZGU6IFwiVmlzaW9uIEJsb2NrZXJcIlxuICAgICAgICB9LFxuICAgICAgICBiYXNlTGF5ZXJzID0gW1xuICAgICAgICAgICAgbmV3IE9wZW5MYXllcnMuTGF5ZXIuVE1TKCc3LjAwIERlZmF1bHQnLCBtYXBfdGlsZV9wYXRoLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJqcGdcIixcbiAgICAgICAgICAgICAgICBnZXRVUkw6IGdldE15VVJMKCc3MDAnLCAnZGVmYXVsdCcpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5ldyBPcGVuTGF5ZXJzLkxheWVyLlRNUygnNi44NyBEZWZhdWx0JywgbWFwX3RpbGVfcGF0aCwge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwianBnXCIsXG4gICAgICAgICAgICAgICAgZ2V0VVJMOiBnZXRNeVVSTCgnNjg3JywgJ2RlZmF1bHQnKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuZXcgT3BlbkxheWVycy5MYXllci5UTVMoJzYuODcgRGVzZXJ0JywgbWFwX3RpbGVfcGF0aCwge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwianBnXCIsXG4gICAgICAgICAgICAgICAgZ2V0VVJMOiBnZXRNeVVSTCgnNjg3JywgJ2Rlc2VydCcpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5ldyBPcGVuTGF5ZXJzLkxheWVyLlRNUygnNi44NyBJbW1vcnRhbCBHYXJkZW5zJywgbWFwX3RpbGVfcGF0aCwge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwianBnXCIsXG4gICAgICAgICAgICAgICAgZ2V0VVJMOiBnZXRNeVVSTCgnNjg3JywgJ2ltbW9ydGFsZ2FyZGVucycpXG4gICAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICBvdmVybGF5R3JvdXBpbmcgPSB7XG4gICAgICAgICAgICBcIkRheSBWaXNpb24gUmFuZ2VcIjogXCJUb3dlcnNcIixcbiAgICAgICAgICAgIFwiTmlnaHQgVmlzaW9uIFJhbmdlXCI6IFwiVG93ZXJzXCIsXG4gICAgICAgICAgICBcIlRydWUgU2lnaHQgUmFuZ2VcIjogXCJUb3dlcnNcIixcbiAgICAgICAgICAgIFwiQXR0YWNrIFJhbmdlXCI6IFwiVG93ZXJzXCIsXG4gICAgICAgICAgICBcIlRvd2Vyc1wiOiBcIlN0cnVjdHVyZXNcIixcbiAgICAgICAgICAgIFwiU2hyaW5lc1wiOiBcIlN0cnVjdHVyZXNcIixcbiAgICAgICAgICAgIFwiQW5jaWVudHNcIjogXCJTdHJ1Y3R1cmVzXCIsXG4gICAgICAgICAgICBcIkJhcnJhY2tzXCI6IFwiU3RydWN0dXJlc1wiLFxuICAgICAgICAgICAgXCJCdWlsZGluZ3NcIjogXCJTdHJ1Y3R1cmVzXCIsXG4gICAgICAgICAgICBcIlNob3BzXCI6IFwiU3RydWN0dXJlc1wiLFxuICAgICAgICAgICAgXCJJbnZhbGlkIFdhcmQgTG9jYXRpb25zXCI6IFwiVmlzaW9uXCIsXG4gICAgICAgICAgICBcIlZpc2lvbiBCbG9ja2VyXCI6IFwiVmlzaW9uXCIsXG4gICAgICAgICAgICBcIlBsYWNlZCBXYXJkc1wiOiBcIlZpc2lvblwiLFxuICAgICAgICAgICAgXCJXYXJkIFZpc2lvblwiOiBcIlZpc2lvblwiLFxuICAgICAgICAgICAgXCJXYXJkIFZpc2lvbiB3aXRoIEZvZ1wiOiBcIlZpc2lvblwiXG4gICAgICAgIH0sXG4gICAgICAgIGxheWVyU3dpdGNoZXIgPSBuZXcgT3BlbkxheWVycy5Db250cm9sLkxheWVyU3dpdGNoZXIoe1xuICAgICAgICAgICAgYXNjZW5kaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIG92ZXJsYXlHcm91cGluZzogb3ZlcmxheUdyb3VwaW5nLFxuICAgICAgICAgICAgb25NYXhpbWl6ZVdoZW5TbWFsbFNjcmVlbjogbWluaW1pemVDb250cm9sTGlzdC5iaW5kKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHJvbHMtbWluXCIpKVxuICAgICAgICB9KSxcbiAgICAgICAgY29vcmRpbmF0ZUNvbnRyb2wgPSBuZXcgT3BlbkxheWVycy5Db250cm9sLk1vdXNlUG9zaXRpb24oKSxcbiAgICAgICAgY3Vyc29yTGF5ZXIgPSBuZXcgT3BlbkxheWVycy5MYXllci5WZWN0b3IoXCJDdXJzb3JcIiwge2Rpc3BsYXlJbkxheWVyU3dpdGNoZXI6ZmFsc2V9KSxcbiAgICAgICAgZGF5UmFuZ2VMYXllciA9IG5ldyBPcGVuTGF5ZXJzLkxheWVyLlZlY3RvcihcIkRheSBWaXNpb24gUmFuZ2VcIiksXG4gICAgICAgIG5pZ2h0UmFuZ2VMYXllciA9IG5ldyBPcGVuTGF5ZXJzLkxheWVyLlZlY3RvcihcIk5pZ2h0IFZpc2lvbiBSYW5nZVwiKSxcbiAgICAgICAgdHJ1ZVNpZ2h0UmFuZ2VMYXllciA9IG5ldyBPcGVuTGF5ZXJzLkxheWVyLlZlY3RvcihcIlRydWUgU2lnaHQgUmFuZ2VcIiksXG4gICAgICAgIGF0dGFja1JhbmdlTGF5ZXIgPSBuZXcgT3BlbkxheWVycy5MYXllci5WZWN0b3IoXCJBdHRhY2sgUmFuZ2VcIiksXG4gICAgICAgIHBvbHlnb25MYXllciA9IG5ldyBPcGVuTGF5ZXJzLkxheWVyLlZlY3RvcihcIkRyYXduIENpcmNsZXNcIiksXG4gICAgICAgIHdhcmRWaXNpb25MYXllciA9IG5ldyBPcGVuTGF5ZXJzLkxheWVyLlZlY3RvcihcIldhcmQgVmlzaW9uXCIpLFxuICAgICAgICB2aXNpb25TaW11bGF0aW9uTGF5ZXIgPSBuZXcgT3BlbkxheWVycy5MYXllci5WZWN0b3IoXCJXYXJkIFZpc2lvbiB3aXRoIEZvZ1wiKSxcbiAgICAgICAgaWNvbkxheWVyID0gbmV3IE9wZW5MYXllcnMuTGF5ZXIuTWFya2VycyhcIlBsYWNlZCBXYXJkc1wiKSxcbiAgICAgICAgcmVuZGVyZXIgPSBPcGVuTGF5ZXJzLlV0aWwuZ2V0UGFyYW1ldGVycyh3aW5kb3cubG9jYXRpb24uaHJlZikucmVuZGVyZXIsXG4gICAgICAgIGRyYXdDb250cm9scyxcbiAgICAgICAgbGFzdERpc3RhbmNlLFxuICAgICAgICBzdHlsZSA9IHJlcXVpcmUoJy4vc3R5bGVDb25zdGFudHMnKSxcbiAgICAgICAgdHJlZU1hcmtlcnMgPSB7fSxcbiAgICAgICAgVklTSU9OX1NJTVVMQVRJT04gPSB0cnVlLFxuICAgICAgICBWSVNJT05fU0lNVUxBVElPTl9BTFdBWVMgPSB0cnVlLFxuICAgICAgICBjdXRUcmVlcyA9IHt9O1xuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogQ09PUkRJTkFURSBDT05WRVJTSU9OIEZVTkNUSU9OUyAqXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgdmFyIGxlcnAgPSBsZXJwLFxuICAgICAgICByZXZlcnNlTGVycCA9IGNvbnZlcnNpb25GdW5jdGlvbnMucmV2ZXJzZUxlcnAsXG4gICAgICAgIGxhdExvblRvV29ybGQgPSBjb252ZXJzaW9uRnVuY3Rpb25zLmxhdExvblRvV29ybGQsXG4gICAgICAgIHdvcmxkVG9MYXRMb24gPSBjb252ZXJzaW9uRnVuY3Rpb25zLndvcmxkVG9MYXRMb24sXG4gICAgICAgIGdldFRpbGVSYWRpdXMgPSBjb252ZXJzaW9uRnVuY3Rpb25zLmdldFRpbGVSYWRpdXMsXG4gICAgICAgIGdldFNjYWxlZFJhZGl1cyA9IGNvbnZlcnNpb25GdW5jdGlvbnMuZ2V0U2NhbGVkUmFkaXVzLFxuICAgICAgICBjYWxjdWxhdGVEaXN0YW5jZSA9IGNvbnZlcnNpb25GdW5jdGlvbnMuY2FsY3VsYXRlRGlzdGFuY2U7XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBDT05UUk9MIEhBTkRMRVJTICpcbiAgICAgKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVUcmVlTWFya2VyQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsZVRyZWVNYXJrZXJDbGljaycsIGV2ZW50Lm9iamVjdCk7XG4gICAgICAgIHNldFRyZWVNYXJrZXJTdGF0ZShldmVudC5vYmplY3QsICFldmVudC5vYmplY3QudHJlZVZpc2libGUpO1xuICAgICAgICBzZXRUcmVlUXVlcnlTdHJpbmcoKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2V0VHJlZU1hcmtlclN0YXRlKG1hcmtlciwgc3RhdGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NldFRyZWVNYXJrZXJTdGF0ZScsIG1hcmtlcik7XG4gICAgICAgIHZhciB3b3JsZFhZID0gbGF0TG9uVG9Xb3JsZChtYXJrZXIubG9ubGF0LmxvbiwgbWFya2VyLmxvbmxhdC5sYXQpO1xuXG4gICAgICAgIG1hcmtlci50cmVlVmlzaWJsZSA9IHN0YXRlO1xuICAgICAgICBtYXJrZXIuc2V0T3BhY2l0eShzdGF0ZSA/IDEgOiAuNCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoVklTSU9OX1NJTVVMQVRJT04pIHtcbiAgICAgICAgICAgIHZhciBncmlkWFkgPSB2cy5Xb3JsZFhZdG9HcmlkWFkod29ybGRYWS54LCB3b3JsZFhZLnkpO1xuICAgICAgICAgICAgdnMudG9nZ2xlVHJlZShncmlkWFkueCwgZ3JpZFhZLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvcHVwQ29udGVudEhUTUwgPSBcIkNsaWNrIHRvIGN1dCBkb3duIHRyZWUuPGJyPlRoaXMgd2lsbCBhZmZlY3QgdGhlIHdhcmQgdmlzaW9uIHNpbXVsYXRpb24uXCI7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgZGVsZXRlIGN1dFRyZWVzW21hcmtlci50cmVlX2xvY11cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBvcHVwQ29udGVudEhUTUwgPSBcIkNsaWNrIHRvIHJlZ3JvdyB0cmVlLjxicj5UaGlzIHdpbGwgYWZmZWN0IHRoZSB3YXJkIHZpc2lvbiBzaW11bGF0aW9uLlwiO1xuICAgICAgICAgICAgY3V0VHJlZXNbbWFya2VyLnRyZWVfbG9jXSA9IG1hcmtlcjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbWFya2VyLmZlYXR1cmUuZGF0YS5wb3B1cENvbnRlbnRIVE1MID0gcG9wdXBDb250ZW50SFRNTDtcbiAgICAgICAgaWYgKG1hcmtlci5mZWF0dXJlLnBvcHVwKSB7XG4gICAgICAgICAgICBtYXJrZXIuZmVhdHVyZS5wb3B1cC5zZXRDb250ZW50SFRNTChwb3B1cENvbnRlbnRIVE1MKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvd2VyTWFya2VyQ2xpY2soZSwgc2tpcFF1ZXJ5U3RyaW5nVXBkYXRlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVUb3dlck1hcmtlckNsaWNrJyk7XG4gICAgICAgIHZhciBjaXJjbGUsXG4gICAgICAgICAgICBmZWF0dXJlLFxuICAgICAgICAgICAgY2VudGVyO1xuXG4gICAgICAgIGlmICghZS5vYmplY3Quc2hvd0luZm8pIHtcbiAgICAgICAgICAgIGNlbnRlciA9IG5ldyBPcGVuTGF5ZXJzLkdlb21ldHJ5LlBvaW50KGUub2JqZWN0LmxvbmxhdC5sb24sIGUub2JqZWN0LmxvbmxhdC5sYXQpO1xuXG4gICAgICAgICAgICAvLyBkYXkgdmlzaW9uIGNpcmNsZVxuICAgICAgICAgICAgY2lyY2xlID0gT3BlbkxheWVycy5HZW9tZXRyeS5Qb2x5Z29uLmNyZWF0ZVJlZ3VsYXJQb2x5Z29uKGNlbnRlciwgZ2V0U2NhbGVkUmFkaXVzKGUub2JqZWN0LmRheV92aXNpb25fcmFkaXVzKSwgMzApO1xuICAgICAgICAgICAgZmVhdHVyZSA9IG5ldyBPcGVuTGF5ZXJzLkZlYXR1cmUuVmVjdG9yKGNpcmNsZSk7XG4gICAgICAgICAgICBkYXlSYW5nZUxheWVyLmFkZEZlYXR1cmVzKGZlYXR1cmUpO1xuICAgICAgICAgICAgZS5vYmplY3QuZGF5X3Zpc2lvbl9mZWF0dXJlID0gZmVhdHVyZTtcblxuICAgICAgICAgICAgLy8gdHJ1ZSBzaWdodCBjaXJjbGVcbiAgICAgICAgICAgIGNpcmNsZSA9IE9wZW5MYXllcnMuR2VvbWV0cnkuUG9seWdvbi5jcmVhdGVSZWd1bGFyUG9seWdvbihjZW50ZXIsIGdldFNjYWxlZFJhZGl1cyhlLm9iamVjdC50cnVlX3NpZ2h0X3JhZGl1cyksIDMwKTtcbiAgICAgICAgICAgIGZlYXR1cmUgPSBuZXcgT3BlbkxheWVycy5GZWF0dXJlLlZlY3RvcihjaXJjbGUsIG51bGwsIHN0eWxlLmxpZ2h0Ymx1ZSk7XG4gICAgICAgICAgICB0cnVlU2lnaHRSYW5nZUxheWVyLmFkZEZlYXR1cmVzKGZlYXR1cmUpO1xuICAgICAgICAgICAgZS5vYmplY3QudHJ1ZV9zaWdodF9mZWF0dXJlID0gZmVhdHVyZTtcblxuICAgICAgICAgICAgLy8gbmlnaHQgdmlzaW9uIGNpcmNsZVxuICAgICAgICAgICAgY2lyY2xlID0gT3BlbkxheWVycy5HZW9tZXRyeS5Qb2x5Z29uLmNyZWF0ZVJlZ3VsYXJQb2x5Z29uKGNlbnRlciwgZ2V0U2NhbGVkUmFkaXVzKGUub2JqZWN0Lm5pZ2h0X3Zpc2lvbl9yYWRpdXMpLCAzMCk7XG4gICAgICAgICAgICBmZWF0dXJlID0gbmV3IE9wZW5MYXllcnMuRmVhdHVyZS5WZWN0b3IoY2lyY2xlKTtcbiAgICAgICAgICAgIG5pZ2h0UmFuZ2VMYXllci5hZGRGZWF0dXJlcyhmZWF0dXJlKTtcbiAgICAgICAgICAgIGUub2JqZWN0Lm5pZ2h0X3Zpc2lvbl9mZWF0dXJlID0gZmVhdHVyZTtcblxuICAgICAgICAgICAgLy8gYXR0YWNrIHJhbmdlIGNpcmNsZVxuICAgICAgICAgICAgY2lyY2xlID0gT3BlbkxheWVycy5HZW9tZXRyeS5Qb2x5Z29uLmNyZWF0ZVJlZ3VsYXJQb2x5Z29uKGNlbnRlciwgZ2V0U2NhbGVkUmFkaXVzKGUub2JqZWN0LmF0dGFja19yYW5nZV9yYWRpdXMpLCAzMCk7XG4gICAgICAgICAgICBmZWF0dXJlID0gbmV3IE9wZW5MYXllcnMuRmVhdHVyZS5WZWN0b3IoY2lyY2xlLCBudWxsLCBzdHlsZS5yZWQpO1xuICAgICAgICAgICAgYXR0YWNrUmFuZ2VMYXllci5hZGRGZWF0dXJlcyhmZWF0dXJlKTtcbiAgICAgICAgICAgIGUub2JqZWN0LmF0dGFja19yYW5nZV9mZWF0dXJlID0gZmVhdHVyZTtcblxuICAgICAgICAgICAgaWYgKCFza2lwUXVlcnlTdHJpbmdVcGRhdGUpIFF1ZXJ5U3RyaW5nLmFkZFF1ZXJ5U3RyaW5nVmFsdWUoXCJ0b3dlcl92aXNpb25cIiwgZS5vYmplY3QudG93ZXJfbG9jLnggKyAnLCcgKyBlLm9iamVjdC50b3dlcl9sb2MueSk7XG5cbiAgICAgICAgICAgIGlmIChWSVNJT05fU0lNVUxBVElPTikgdXBkYXRlVmlzaWJpbGl0eUhhbmRsZXIoZS5vYmplY3QubG9ubGF0LCBlLm9iamVjdCwgVE9XRVJfREFZX1ZJU0lPTl9SQURJVVMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGF5UmFuZ2VMYXllci5yZW1vdmVGZWF0dXJlcyhlLm9iamVjdC5kYXlfdmlzaW9uX2ZlYXR1cmUpO1xuICAgICAgICAgICAgbmlnaHRSYW5nZUxheWVyLnJlbW92ZUZlYXR1cmVzKGUub2JqZWN0Lm5pZ2h0X3Zpc2lvbl9mZWF0dXJlKTtcbiAgICAgICAgICAgIHRydWVTaWdodFJhbmdlTGF5ZXIucmVtb3ZlRmVhdHVyZXMoZS5vYmplY3QudHJ1ZV9zaWdodF9mZWF0dXJlKTtcbiAgICAgICAgICAgIGF0dGFja1JhbmdlTGF5ZXIucmVtb3ZlRmVhdHVyZXMoZS5vYmplY3QuYXR0YWNrX3JhbmdlX2ZlYXR1cmUpO1xuXG4gICAgICAgICAgICBpZiAoZS5vYmplY3QudmlzaW9uX2ZlYXR1cmUpIHZpc2lvblNpbXVsYXRpb25MYXllci5yZW1vdmVGZWF0dXJlcyhlLm9iamVjdC52aXNpb25fZmVhdHVyZSk7XG4gICAgICAgICAgICBpZiAoZS5vYmplY3QudmlzaW9uX2NlbnRlcl9mZWF0dXJlKSB2aXNpb25TaW11bGF0aW9uTGF5ZXIucmVtb3ZlRmVhdHVyZXMoZS5vYmplY3QudmlzaW9uX2NlbnRlcl9mZWF0dXJlKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKCFza2lwUXVlcnlTdHJpbmdVcGRhdGUpIFF1ZXJ5U3RyaW5nLnJlbW92ZVF1ZXJ5U3RyaW5nVmFsdWUoXCJ0b3dlcl92aXNpb25cIiwgZS5vYmplY3QudG93ZXJfbG9jLnggKyAnLCcgKyBlLm9iamVjdC50b3dlcl9sb2MueSk7XG4gICAgICAgIH1cbiAgICAgICAgZS5vYmplY3Quc2hvd0luZm8gPSAhZS5vYmplY3Quc2hvd0luZm87XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlV2FyZENsaWNrKGVudGl0eU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgbGF0bG9uID0gbWFwLmdldExvbkxhdEZyb21QaXhlbChldmVudC54eSksXG4gICAgICAgICAgICAgICAgbWFya2VyID0gcGxhY2VXYXJkKGxhdGxvbiwgZW50aXR5TmFtZSk7XG4gICAgICAgICAgICBpZiAobWFya2VyKSBRdWVyeVN0cmluZy5hZGRRdWVyeVN0cmluZ1ZhbHVlKG1hcmtlci53YXJkX3R5cGUsIG1hcmtlci53YXJkX2xvYyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZVdhcmQobGF0bG9uLCBlbnRpdHlOYW1lLCBxc192YWx1ZV93b3JsZFhZKSB7XG4gICAgICAgIGlmICghbWFwQm91bmRzLmNvbnRhaW5zTG9uTGF0KGxhdGxvbikpIHJldHVybjtcbiAgICAgICAgdmFyIGVudGl0eSA9IEVOVElUSUVTW2VudGl0eU5hbWVdLFxuICAgICAgICAgICAgbWFya2VyID0gY3JlYXRlV2FyZE1hcmtlcihlbnRpdHkuaWNvbl9wYXRoLCBsYXRsb24pLFxuICAgICAgICAgICAgY2lyY2xlID0gT3BlbkxheWVycy5HZW9tZXRyeS5Qb2x5Z29uLmNyZWF0ZVJlZ3VsYXJQb2x5Z29uKG5ldyBPcGVuTGF5ZXJzLkdlb21ldHJ5LlBvaW50KG1hcmtlci5sb25sYXQubG9uLCBtYXJrZXIubG9ubGF0LmxhdCksIGdldFNjYWxlZFJhZGl1cyhlbnRpdHkucmFkaXVzKSwgNDApLFxuICAgICAgICAgICAgZmVhdHVyZSA9IG5ldyBPcGVuTGF5ZXJzLkZlYXR1cmUuVmVjdG9yKGNpcmNsZSk7XG4gICAgICAgIGljb25MYXllci5hZGRNYXJrZXIobWFya2VyKTtcbiAgICAgICAgd2FyZFZpc2lvbkxheWVyLmFkZEZlYXR1cmVzKGZlYXR1cmUpO1xuICAgICAgICBtYXJrZXIucmFkaXVzX2ZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICBtYXJrZXIud2FyZF90eXBlID0gZW50aXR5TmFtZTtcbiAgICAgICAgbWFya2VyLndhcmRfbG9jID0gZW50aXR5TmFtZTtcblxuICAgICAgICBpZiAocXNfdmFsdWVfd29ybGRYWSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciB3b3JsZFhZID0gbGF0TG9uVG9Xb3JsZChsYXRsb24ubG9uLCBsYXRsb24ubGF0KTtcbiAgICAgICAgICAgIHdvcmxkWFkueCA9IHdvcmxkWFkueC50b0ZpeGVkKDApO1xuICAgICAgICAgICAgd29ybGRYWS55ID0gd29ybGRYWS55LnRvRml4ZWQoMCk7XG4gICAgICAgICAgICBtYXJrZXIud2FyZF9sb2MgPSB3b3JsZFhZLnggKyAnLCcgKyB3b3JsZFhZLnlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hcmtlci53YXJkX2xvYyA9IHFzX3ZhbHVlX3dvcmxkWFk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVklTSU9OX1NJTVVMQVRJT04gJiYgZW50aXR5TmFtZSA9PSAnb2JzZXJ2ZXInKSB1cGRhdGVWaXNpYmlsaXR5SGFuZGxlcihsYXRsb24sIG1hcmtlciwgRU5USVRJRVMub2JzZXJ2ZXIucmFkaXVzKTtcbiAgICAgICAgXG4gICAgICAgIG1hcmtlci5ldmVudHMucmVnaXN0ZXIoXCJjbGlja1wiLCB0aGlzLCB3YXJkTWFya2VyUmVtb3ZlKTtcbiAgICAgICAgbWFya2VyLmV2ZW50cy5yZWdpc3RlcihcInRvdWNoc3RhcnRcIiwgdGhpcywgd2FyZE1hcmtlclJlbW92ZSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbWFya2VyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdhcmRNYXJrZXJSZW1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50Lm9iamVjdC5yYWRpdXNfZmVhdHVyZSkgd2FyZFZpc2lvbkxheWVyLnJlbW92ZUZlYXR1cmVzKGV2ZW50Lm9iamVjdC5yYWRpdXNfZmVhdHVyZSk7XG4gICAgICAgIGlmIChldmVudC5vYmplY3QudmlzaW9uX2ZlYXR1cmUpIHZpc2lvblNpbXVsYXRpb25MYXllci5yZW1vdmVGZWF0dXJlcyhldmVudC5vYmplY3QudmlzaW9uX2ZlYXR1cmUpO1xuICAgICAgICBpZiAoZXZlbnQub2JqZWN0LnZpc2lvbl9jZW50ZXJfZmVhdHVyZSkgdmlzaW9uU2ltdWxhdGlvbkxheWVyLnJlbW92ZUZlYXR1cmVzKGV2ZW50Lm9iamVjdC52aXNpb25fY2VudGVyX2ZlYXR1cmUpO1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC5vYmplY3QpO1xuICAgICAgICBpY29uTGF5ZXIucmVtb3ZlTWFya2VyKGV2ZW50Lm9iamVjdCk7XG4gICAgICAgIE9wZW5MYXllcnMuRXZlbnQuc3RvcChldmVudCk7XG5cbiAgICAgICAgUXVlcnlTdHJpbmcucmVtb3ZlUXVlcnlTdHJpbmdWYWx1ZShldmVudC5vYmplY3Qud2FyZF90eXBlLCBldmVudC5vYmplY3Qud2FyZF9sb2MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsZU9uQ2xpY2snKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVNZWFzdXJlbWVudHMoZXZlbnQpIHtcbiAgICAgICAgdmFyIG91dCA9IFwiXCI7XG4gICAgICAgIGlmIChldmVudC5vcmRlciA9PSAxKSB7XG4gICAgICAgICAgICBvdXQgKz0gXCJEaXN0YW5jZTogXCIgKyBjYWxjdWxhdGVEaXN0YW5jZShldmVudC5vcmRlciwgZXZlbnQudW5pdHMsIGV2ZW50Lm1lYXN1cmUpLnRvRml4ZWQoMCkgKyBcIiB1bml0c1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0ICs9IFwiRGlzdGFuY2U6IFwiICsgY2FsY3VsYXRlRGlzdGFuY2UoZXZlbnQub3JkZXIsIGV2ZW50LnVuaXRzLCBldmVudC5tZWFzdXJlKS50b0ZpeGVkKDApICsgXCIgdW5pdHM8c3VwPjI8L1wiICsgXCJzdXA+XCI7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIikuaW5uZXJIVE1MID0gb3V0O1xuXG4gICAgICAgIGxhc3REaXN0YW5jZSA9IGNhbGN1bGF0ZURpc3RhbmNlKGV2ZW50Lm9yZGVyLCBldmVudC51bml0cywgZXZlbnQubWVhc3VyZSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhdmVsdGltZVwiKS5pbm5lckhUTUwgPSAobGFzdERpc3RhbmNlIC8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3Zlc3BlZWRcIikudmFsdWUpLnRvRml4ZWQoMik7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmF2ZWx0aW1lLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2lyY2xlTWVhc3VyZW1lbnRzKGV2ZW50KSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXRcIiksXG4gICAgICAgICAgICBvdXQgPSBcIlwiO1xuXG4gICAgICAgIGlmIChldmVudC5vcmRlciA9PSAxKSB7XG4gICAgICAgICAgICBvdXQgKz0gXCJSYWRpdXM6IFwiICsgY2FsY3VsYXRlRGlzdGFuY2UoZXZlbnQub3JkZXIsIGV2ZW50LnVuaXRzLCBldmVudC5tZWFzdXJlKS50b0ZpeGVkKDApICsgXCIgdW5pdHNcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dCArPSBcIkRpc3RhbmNlOiBcIiArIGNhbGN1bGF0ZURpc3RhbmNlKGV2ZW50Lm9yZGVyLCBldmVudC51bml0cywgZXZlbnQubWVhc3VyZSkudG9GaXhlZCgwKSArIFwiIHVuaXRzPHN1cD4yPC9cIiArIFwic3VwPlwiO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gb3V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNpcmNsZU1lYXN1cmVtZW50c1BhcnRpYWwoZXZlbnQpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKSxcbiAgICAgICAgICAgIG91dCA9IFwiXCIsXG4gICAgICAgICAgICBjaXJjbGUsXG4gICAgICAgICAgICBmZWF0dXJlLFxuICAgICAgICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgZHJhd0NvbnRyb2xzW1wic2VsZWN0XCJdLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgaWYgKGV2ZW50Lm9yZGVyID09IDEpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5tZWFzdXJlID4gMCkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC51bml0cyA9PSBcImttXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlID0gT3BlbkxheWVycy5HZW9tZXRyeS5Qb2x5Z29uLmNyZWF0ZVJlZ3VsYXJQb2x5Z29uKG5ldyBPcGVuTGF5ZXJzLkdlb21ldHJ5LlBvaW50KGV2ZW50Lmdlb21ldHJ5LmNvbXBvbmVudHNbMF0ueCwgZXZlbnQuZ2VvbWV0cnkuY29tcG9uZW50c1swXS55KSwgZXZlbnQubWVhc3VyZSAqIDFlMywgMzApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZSA9IE9wZW5MYXllcnMuR2VvbWV0cnkuUG9seWdvbi5jcmVhdGVSZWd1bGFyUG9seWdvbihuZXcgT3BlbkxheWVycy5HZW9tZXRyeS5Qb2ludChldmVudC5nZW9tZXRyeS5jb21wb25lbnRzWzBdLngsIGV2ZW50Lmdlb21ldHJ5LmNvbXBvbmVudHNbMF0ueSksIGV2ZW50Lm1lYXN1cmUsIDMwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmVhdHVyZSA9IG5ldyBPcGVuTGF5ZXJzLkZlYXR1cmUuVmVjdG9yKGNpcmNsZSk7XG4gICAgICAgICAgICAgICAgcG9seWdvbkxheWVyLnJlbW92ZUZlYXR1cmVzKGV2ZW50Lmdlb21ldHJ5LmNpcmNsZV9mZWF0dXJlcyk7XG4gICAgICAgICAgICAgICAgaWYgKFwiY2lyY2xlX2ZlYXR1cmVzXCIgaW4gZXZlbnQuZ2VvbWV0cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZ2VvbWV0cnkuY2lyY2xlX2ZlYXR1cmVzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Lmdlb21ldHJ5LmNpcmNsZV9mZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Lmdlb21ldHJ5LmNpcmNsZV9mZWF0dXJlcyA9IFtmZWF0dXJlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5tZWFzdXJlX2NvbnRyb2wgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGZlYXR1cmUuaXNfbWVhc3VyaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwb2x5Z29uTGF5ZXIuYWRkRmVhdHVyZXMoZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50Lmdlb21ldHJ5LmNvbXBvbmVudHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZS5pc19tZWFzdXJpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdDb250cm9sc1tcInNlbGVjdFwiXS5hY3RpdmF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0ICs9IFwiUmFkaXVzOiBcIiArIGNhbGN1bGF0ZURpc3RhbmNlKGV2ZW50Lm9yZGVyLCBldmVudC51bml0cywgZXZlbnQubWVhc3VyZSkudG9GaXhlZCgwKSArIFwiIHVuaXRzXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXQgKz0gXCJEaXN0YW5jZTogXCIgKyBjYWxjdWxhdGVEaXN0YW5jZShldmVudC5vcmRlciwgZXZlbnQudW5pdHMsIGV2ZW50Lm1lYXN1cmUpLnRvRml4ZWQoMCkgKyBcIiB1bml0czxzdXA+MjwvXCIgKyBcInN1cD5cIjtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IG91dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVDb250cm9sKCkge1xuICAgICAgICB2YXIgY29udHJvbDtcbiAgICAgICAgUXVlcnlTdHJpbmcuc2V0UXVlcnlTdHJpbmcoJ21vZGUnLCBudWxsKTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGRyYXdDb250cm9scykge1xuICAgICAgICAgICAgY29udHJvbCA9IGRyYXdDb250cm9sc1trZXldO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcywgdGhpcy52YWx1ZSwga2V5LCB0aGlzLnZhbHVlID09IGtleSAmJiB0aGlzLmNoZWNrZWQpO1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgPT0ga2V5ICYmIHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIFF1ZXJ5U3RyaW5nLnNldFF1ZXJ5U3RyaW5nKCdtb2RlJywga2V5KTtcbiAgICAgICAgICAgICAgICBjb250cm9sLmFjdGl2YXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRyb2wuZGVhY3RpdmF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCh0aGlzLnZhbHVlID09IFwicG9seWdvbkNvbnRyb2xcIiB8fCB0aGlzLnZhbHVlID09IFwiY2lyY2xlXCIpICYmIHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGRyYXdDb250cm9sc1tcInNlbGVjdFwiXS5hY3RpdmF0ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkcmF3Q29udHJvbHNbXCJzZWxlY3RcIl0uZGVhY3RpdmF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmF2ZWx0aW1lLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvd2VySG92ZXJQb3B1cChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5wb3B1cCA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNsb3NlQm94KTtcbiAgICAgICAgICAgIHRoaXMucG9wdXAgPSB0aGlzLmNyZWF0ZVBvcHVwKHRoaXMuY2xvc2VCb3gpO1xuICAgICAgICAgICAgbWFwLmFkZFBvcHVwKHRoaXMucG9wdXApO1xuICAgICAgICAgICAgdGhpcy5wb3B1cC5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwLnRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRQb3B1cCA9IHRoaXMucG9wdXA7XG4gICAgICAgIE9wZW5MYXllcnMuRXZlbnQuc3RvcChldmVudCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVRyZWVIb3ZlclBvcHVwKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXAgPSB0aGlzLmNyZWF0ZVBvcHVwKHRoaXMuY2xvc2VCb3gpO1xuICAgICAgICAgICAgbWFwLmFkZFBvcHVwKHRoaXMucG9wdXApO1xuICAgICAgICAgICAgdGhpcy5wb3B1cC5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwLnRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRQb3B1cCA9IHRoaXMucG9wdXA7XG4gICAgICAgIE9wZW5MYXllcnMuRXZlbnQuc3RvcChldmVudCk7XG4gICAgfTtcbiAgICAgICAgXG4gICAgZnVuY3Rpb24gYWRkTWFya2VyKG1hcmtlcnMsIGxsLCBwb3B1cENsYXNzLCBwb3B1cENvbnRlbnRIVE1MLCBjbG9zZUJveCwgb3ZlcmZsb3cpIHtcbiAgICAgICAgdmFyIGZlYXR1cmUgPSBuZXcgT3BlbkxheWVycy5GZWF0dXJlKG1hcmtlcnMsIGxsKSxcbiAgICAgICAgICAgIG1hcmtlcjtcblxuICAgICAgICBmZWF0dXJlLmNsb3NlQm94ID0gY2xvc2VCb3g7XG4gICAgICAgIGZlYXR1cmUucG9wdXBDbGFzcyA9IHBvcHVwQ2xhc3M7XG4gICAgICAgIGZlYXR1cmUuZGF0YS5wb3B1cENvbnRlbnRIVE1MID0gcG9wdXBDb250ZW50SFRNTDtcbiAgICAgICAgZmVhdHVyZS5kYXRhLm92ZXJmbG93ID0gb3ZlcmZsb3cgPyBcImF1dG9cIiA6IFwiaGlkZGVuXCI7XG4gICAgICAgIG1hcmtlciA9IGZlYXR1cmUuY3JlYXRlTWFya2VyKCk7XG4gICAgICAgIG1hcmtlci5mZWF0dXJlID0gZmVhdHVyZTtcbiAgICAgICAgXG4gICAgICAgIGlmIChtYXJrZXJzLm5hbWUgPT0gXCJUb3dlcnNcIikge1xuICAgICAgICAgICAgbWFya2VyLmV2ZW50cy5yZWdpc3RlcihcIm1vdXNlb3ZlclwiLCBmZWF0dXJlLCBoYW5kbGVUb3dlckhvdmVyUG9wdXApO1xuICAgICAgICAgICAgbWFya2VyLmV2ZW50cy5yZWdpc3RlcihcIm1vdXNlb3V0XCIsIGZlYXR1cmUsIGhhbmRsZVRvd2VySG92ZXJQb3B1cCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWFya2Vycy5uYW1lID09IFwiVHJlZXNcIiAmJiBWSVNJT05fU0lNVUxBVElPTikge1xuICAgICAgICAgICAgbWFya2VyLmV2ZW50cy5yZWdpc3RlcihcIm1vdXNlb3ZlclwiLCBmZWF0dXJlLCBoYW5kbGVUcmVlSG92ZXJQb3B1cCk7XG4gICAgICAgICAgICBtYXJrZXIuZXZlbnRzLnJlZ2lzdGVyKFwibW91c2VvdXRcIiwgZmVhdHVyZSwgaGFuZGxlVHJlZUhvdmVyUG9wdXApO1xuICAgICAgICB9XG4gICAgICAgIG1hcmtlcnMuYWRkTWFya2VyKG1hcmtlcik7XG4gICAgICAgIHJldHVybiBtYXJrZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlV2FyZE1hcmtlcihpbWcsIGxhdGxvbikge1xuICAgICAgICB2YXIgc2l6ZSA9IG5ldyBPcGVuTGF5ZXJzLlNpemUoMjEsIDI1KSxcbiAgICAgICAgICAgIG9mZnNldCA9IG5ldyBPcGVuTGF5ZXJzLlBpeGVsKC0oc2l6ZS53IC8gMiksIC1zaXplLmgpLFxuICAgICAgICAgICAgaWNvbiA9IG5ldyBPcGVuTGF5ZXJzLkljb24oaW1nLCBzaXplLCBvZmZzZXQpLFxuICAgICAgICAgICAgbWFya2VyID0gbmV3IE9wZW5MYXllcnMuTWFya2VyKGxhdGxvbiwgaWNvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGVXYXJkTWFya2VyJywgbGF0bG9uKTtcbiAgICAgICAgcmV0dXJuIG1hcmtlcjtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIGEgNjR4NjQgcmVjdGFuZ2xlIGZlYXR1cmUgY2VudGVyZWQgYXQgY1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVRpbGVGZWF0dXJlKGMsIHN0eWxlKSB7XG4gICAgICAgIHZhciByMSA9IHdvcmxkVG9MYXRMb24oYy54IC0gMzIsIGMueSAtIDMyKSxcbiAgICAgICAgICAgIHIyID0gd29ybGRUb0xhdExvbihjLnggLSAzMiwgYy55ICsgMzIpLFxuICAgICAgICAgICAgcjMgPSB3b3JsZFRvTGF0TG9uKGMueCArIDMyLCBjLnkgKyAzMiksXG4gICAgICAgICAgICByNCA9IHdvcmxkVG9MYXRMb24oYy54ICsgMzIsIGMueSAtIDMyKSxcbiAgICAgICAgICAgIGJveF9wb2ludHMgPSBbXG4gICAgICAgICAgICAgICAgbmV3IE9wZW5MYXllcnMuR2VvbWV0cnkuUG9pbnQocjEueCwgcjEueSksXG4gICAgICAgICAgICAgICAgbmV3IE9wZW5MYXllcnMuR2VvbWV0cnkuUG9pbnQocjIueCwgcjIueSksXG4gICAgICAgICAgICAgICAgbmV3IE9wZW5MYXllcnMuR2VvbWV0cnkuUG9pbnQocjMueCwgcjMueSksXG4gICAgICAgICAgICAgICAgbmV3IE9wZW5MYXllcnMuR2VvbWV0cnkuUG9pbnQocjQueCwgcjQueSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBib3hfcmVjdCA9IG5ldyBPcGVuTGF5ZXJzLkdlb21ldHJ5LkxpbmVhclJpbmcoYm94X3BvaW50cyksXG4gICAgICAgICAgICBib3hfZmVhdHVyZSA9IG5ldyBPcGVuTGF5ZXJzLkZlYXR1cmUuVmVjdG9yKGJveF9yZWN0LCBudWxsLCBzdHlsZSk7XG5cbiAgICAgICAgcmV0dXJuIGJveF9mZWF0dXJlO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZXMgdXJsIGZvciB0aWxlcy4gT3BlbkxheWVycyBUTVMgTGF5ZXIgZ2V0VVJMIHByb3BlcnR5IGlzIHNldCB0byB0aGlzXG4gICAgZnVuY3Rpb24gZ2V0TXlVUkwocGF0Y2gsIGJhc2VMYXllcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oYm91bmRzKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdnZXRNeVVSTCcsIGJhc2VMYXllcik7XG4gICAgICAgICAgICB2YXIgcmVzID0gdGhpcy5tYXAuZ2V0UmVzb2x1dGlvbigpLFxuICAgICAgICAgICAgICAgIHggPSBNYXRoLnJvdW5kKChib3VuZHMubGVmdCAtIHRoaXMubWF4RXh0ZW50LmxlZnQpIC8gKHJlcyAqIHRoaXMudGlsZVNpemUudykpLFxuICAgICAgICAgICAgICAgIHkgPSBNYXRoLnJvdW5kKCh0aGlzLm1heEV4dGVudC50b3AgLSBib3VuZHMudG9wKSAvIChyZXMgKiB0aGlzLnRpbGVTaXplLmgpKSxcbiAgICAgICAgICAgICAgICB6ID0gbWFwLmdldFpvb20oKSxcbiAgICAgICAgICAgICAgICBwYXRoID0geiArIFwiL3RpbGVfXCIgKyB4ICsgXCJfXCIgKyB5ICsgXCIuXCIgKyB0aGlzLnR5cGUsXG4gICAgICAgICAgICAgICAgdXJsID0gdGhpcy51cmw7XG5cbiAgICAgICAgICAgIGlmICh1cmwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHVybCA9IHRoaXMuc2VsZWN0VXJsKHBhdGgsIHVybClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1cmwgKyBwYXRjaCArICcvJyArIGJhc2VMYXllciArICcvJyArIHBhdGhcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiByZXNldE1hcmtlckxheWVycygpIHtcbiAgICAgICAgZm9yIChrIGluIHRyZWVNYXJrZXJzKSB7XG4gICAgICAgICAgICBpZiAoY3V0VHJlZXNba10pIHtcbiAgICAgICAgICAgICAgICBzZXRUcmVlTWFya2VyU3RhdGUodHJlZU1hcmtlcnNba10sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBkYXRhID0gbWFwX2RhdGE7XG4gICAgICAgIGxheWVyS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICB2YXIgbGF5ZXIgPSBtYXAuZ2V0TGF5ZXJzQnlOYW1lKGxheWVyTmFtZXNba10pWzBdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92aW5nIGxheWVyJywgbGF5ZXIsIGspO1xuICAgICAgICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgICAgICAgICAgbWFwLnJlbW92ZUxheWVyKGxheWVyKTtcbiAgICAgICAgICAgICAgICBsYXllci5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkYXlSYW5nZUxheWVyLmRlc3Ryb3lGZWF0dXJlcygpO1xuICAgICAgICBuaWdodFJhbmdlTGF5ZXIuZGVzdHJveUZlYXR1cmVzKCk7XG4gICAgICAgIHRydWVTaWdodFJhbmdlTGF5ZXIuZGVzdHJveUZlYXR1cmVzKCk7XG4gICAgICAgIGF0dGFja1JhbmdlTGF5ZXIuZGVzdHJveUZlYXR1cmVzKCk7XG4gICAgICAgIG1hcC5ldmVudHMudW5yZWdpc3RlcihcImNoYW5nZWxheWVyXCIsIG1hcCwgbGF5ZXJDaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1hcERhdGFMb2FkKGRhdGEpIHtcbiAgICAgICAgdmFyIG1hcmtlcnMgPSB7fSxcbiAgICAgICAgICAgIG1hcmtlcixcbiAgICAgICAgICAgIHZlY3RvckxheWVyID0gbWFwLmdldExheWVyc0J5TmFtZShcIlBsYWNlZCBXYXJkc1wiKVswXSxcbiAgICAgICAgICAgIGJveF9wb2ludHMgPSBbXSxcbiAgICAgICAgICAgIGJveF9yZWN0LCBib3hfZmVhdHVyZTtcbiAgICAgICAgbGF5ZXJLZXlzLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbk1hcERhdGFMb2FkJywgayk7XG4gICAgICAgICAgICBpZiAoZGF0YVtrXSkge1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBtYXJrZXJzIGZvciBub24tbmV1dHJhbCBzcGF3biBib3ggYW5kIG5vbi10cmVlIGxheWVyc1xuICAgICAgICAgICAgICAgIGlmIChrICE9IFwidHJpZ2dlcl9tdWx0aXBsZVwiICYmIGsgIT0gXCJlbnRfZG90YV90cmVlXCIgJiYgayAhPSBcIm5vX3dhcmRzXCIgJiYgayAhPSBcImVudF9mb3dfYmxvY2tlcl9ub2RlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya2Vyc1trXSA9IG5ldyBPcGVuTGF5ZXJzLkxheWVyLk1hcmtlcnMobGF5ZXJOYW1lc1trXSwge3Zpc2liaWxpdHk6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgICAgIG1hcC5hZGRMYXllcihtYXJrZXJzW2tdKTtcbiAgICAgICAgICAgICAgICAgICAgLy9tYXJrZXJzW2tdLnNldFZpc2liaWxpdHkoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGFba10ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYXRsb24gPSB3b3JsZFRvTGF0TG9uKGRhdGFba11baV0ueCwgZGF0YVtrXVtpXS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlciA9IGFkZE1hcmtlcihtYXJrZXJzW2tdLCBuZXcgT3BlbkxheWVycy5Mb25MYXQobGF0bG9uLngsIGxhdGxvbi55KSwgT3BlbkxheWVycy5Qb3B1cC5GcmFtZWRDbG91ZCwgXCJDbGljayB0byB0b2dnbGUgcmFuZ2Ugb3ZlcmxheVwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuZGF5X3Zpc2lvbl9yYWRpdXMgPSBUT1dFUl9EQVlfVklTSU9OX1JBRElVUztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5uaWdodF92aXNpb25fcmFkaXVzID0gVE9XRVJfTklHSFRfVklTSU9OX1JBRElVUztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci50cnVlX3NpZ2h0X3JhZGl1cyA9IFRPV0VSX1RSVUVfU0lHSFRfUkFESVVTO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLmF0dGFja19yYW5nZV9yYWRpdXMgPSBUT1dFUl9BVFRBQ0tfUkFOR0VfUkFESVVTO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnNob3dJbmZvID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrID09IFwibnBjX2RvdGFfdG93ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCducGNfZG90YV90b3dlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5ldmVudHMucmVnaXN0ZXIoXCJjbGlja1wiLCBtYXJrZXJzW2tdLCBoYW5kbGVUb3dlck1hcmtlckNsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuZXZlbnRzLnJlZ2lzdGVyKFwidG91Y2hzdGFydFwiLCBtYXJrZXJzW2tdLCBoYW5kbGVUb3dlck1hcmtlckNsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIudG93ZXJfbG9jID0gZGF0YVtrXVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTZXQgdXAgdHJlZSBsYXllciB3aXRob3V0IGNyZWF0aW5nIHRyZWUgbWFya2VycyB5ZXRcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChrID09IFwiZW50X2RvdGFfdHJlZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcnNba10gPSBuZXcgT3BlbkxheWVycy5MYXllci5NYXJrZXJzKGxheWVyTmFtZXNba10sIHt2aXNpYmlsaXR5OiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgICAgICBtYXAuYWRkTGF5ZXIobWFya2Vyc1trXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vbWFya2Vyc1trXS5zZXRWaXNpYmlsaXR5KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgbWFya2Vyc1trXS5kYXRhID0gZGF0YVtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldXRyYWwgc3Bhd24gbWFya2VycyBhbmQgcmVjdGFuZ2xlc1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGsgPT0gXCJ0cmlnZ2VyX211bHRpcGxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZEpTT05EYXRhKG1hcmtlcnMsIGssIFwibnBjX2RvdGFfbmV1dHJhbF9zcGF3bmVyX2JveFwiLCBkYXRhW2tdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChWSVNJT05fU0lNVUxBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChrID09PSBcIm5vX3dhcmRzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZEdlb0pTT05EYXRhKG1hcmtlcnMsIGssIGxheWVyTmFtZXNba10sIHN0eWxlLnJlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGsgPT09IFwiZW50X2Zvd19ibG9ja2VyX25vZGVcIikge1xuICAgICAgICAgICAgICAgICAgICBsb2FkR2VvSlNPTkRhdGEobWFya2VycywgaywgbGF5ZXJOYW1lc1trXSwgc3R5bGUubGlnaHRibHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pOyAgICAgICAgXG5cbiAgICAgICAgbWFwX2RhdGEgPSBkYXRhO1xuICAgICAgICBcbiAgICAgICAgbWFwLnJhaXNlTGF5ZXIodmVjdG9yTGF5ZXIsIG1hcC5sYXllcnMubGVuZ3RoKTtcblxuICAgICAgICAvLyBDcmVhdGUgdHJlZSBtYXJrZXJzIHRoZSBmaXJzdCB0aW1lIHRoZSB0cmVlIGxheWVyIGlzIHN3aXRjaGVkIHRvXG4gICAgICAgIG1hcC5ldmVudHMucmVnaXN0ZXIoXCJjaGFuZ2VsYXllclwiLCBtYXAsIGxheWVyQ2hhbmdlSGFuZGxlcik7XG5cbiAgICAgICAgcGFyc2VRdWVyeVN0cmluZygpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBsYXllckNoYW5nZUhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnByb3BlcnR5ID09PSBcInZpc2liaWxpdHlcIiAmJiBldmVudC5sYXllci5uYW1lID09IGxheWVyTmFtZXNbXCJlbnRfZG90YV90cmVlXCJdICYmICFldmVudC5sYXllci5sb2FkZWQpIHtcbiAgICAgICAgICAgIGxvYWRUcmVlRGF0YSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LnByb3BlcnR5ID09PSBcInZpc2liaWxpdHlcIikge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmxheWVyLmlzQmFzZUxheWVyKSB7XG4gICAgICAgICAgICAgICAgUXVlcnlTdHJpbmcuc2V0UXVlcnlTdHJpbmcoJ0Jhc2VMYXllcicsIGV2ZW50LmxheWVyLm5hbWUucmVwbGFjZSgvIC9nLCAnJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgUXVlcnlTdHJpbmcuc2V0UXVlcnlTdHJpbmcoZXZlbnQubGF5ZXIubmFtZS5yZXBsYWNlKC8gL2csICcnKSwgZXZlbnQubGF5ZXIudmlzaWJpbGl0eSA/IHRydWUgOiBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmVlRGF0YSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0IHRyZWUgbG9hZCcpO1xuICAgICAgICB2YXIgbGF5ZXIgPSBtYXAuZ2V0TGF5ZXJzQnlOYW1lKGxheWVyTmFtZXNbXCJlbnRfZG90YV90cmVlXCJdKVswXTtcbiAgICAgICAgY29uc29sZS5sb2cobGF5ZXIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxheWVyLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBsYXRsb24gPSB3b3JsZFRvTGF0TG9uKGxheWVyLmRhdGFbaV0ueCwgbGF5ZXIuZGF0YVtpXS55KTtcbiAgICAgICAgICAgIG1hcmtlciA9IGFkZE1hcmtlcihsYXllciwgbmV3IE9wZW5MYXllcnMuTG9uTGF0KGxhdGxvbi54LCBsYXRsb24ueSksIE9wZW5MYXllcnMuUG9wdXAuRnJhbWVkQ2xvdWQsIFwiQ2xpY2sgdG8gY3V0IGRvd24gdHJlZS48YnI+VGhpcyB3aWxsIGFmZmVjdCB0aGUgd2FyZCB2aXNpb24gc2ltdWxhdGlvbi5cIiwgZmFsc2UpO1xuICAgICAgICAgICAgbWFya2VyLnRyZWVWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hcmtlci50cmVlX2xvYyA9IGxheWVyLmRhdGFbaV0ueCArICcsJyArIGxheWVyLmRhdGFbaV0ueTtcbiAgICAgICAgICAgIGlmIChWSVNJT05fU0lNVUxBVElPTikge1xuICAgICAgICAgICAgICAgIG1hcmtlci5ldmVudHMucmVnaXN0ZXIoXCJjbGlja1wiLCBsYXllciwgaGFuZGxlVHJlZU1hcmtlckNsaWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyZWVNYXJrZXJzW2xheWVyLmRhdGFbaV0ueCArICcsJyArIGxheWVyLmRhdGFbaV0ueV0gPSBtYXJrZXI7XG4gICAgICAgIH1cbiAgICAgICAgbGF5ZXIubG9hZGVkID0gIWxheWVyLmxvYWRlZDtcbiAgICAgICAgY29uc29sZS5sb2coJ2VuZCB0cmVlIGxvYWQnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkSlNPTkRhdGEobWFya2VycywgaywgbmFtZSwgZGF0YSkge1xuICAgICAgICBtYXJrZXJzW25hbWVdID0gbmV3IE9wZW5MYXllcnMuTGF5ZXIuVmVjdG9yKGxheWVyTmFtZXNba10pO1xuICAgICAgICBtYXAuYWRkTGF5ZXIobWFya2Vyc1tuYW1lXSk7XG4gICAgICAgIG1hcmtlcnNbbmFtZV0uc2V0VmlzaWJpbGl0eShmYWxzZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG50ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRhdGFbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbGF0bG9uID0gd29ybGRUb0xhdExvbihkYXRhW2ldW2pdLngsIGRhdGFbaV1bal0ueSk7XG4gICAgICAgICAgICAgICAgcG50LnB1c2gobmV3IE9wZW5MYXllcnMuR2VvbWV0cnkuUG9pbnQobGF0bG9uLngsIGxhdGxvbi55KSk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgbG4gPSBuZXcgT3BlbkxheWVycy5HZW9tZXRyeS5MaW5lYXJSaW5nKHBudCk7XG4gICAgICAgICAgICBwZiA9IG5ldyBPcGVuTGF5ZXJzLkZlYXR1cmUuVmVjdG9yKGxuLCBudWxsLCBzdHlsZS5ncmVlbik7XG4gICAgICAgICAgICBtYXJrZXJzW25hbWVdLmFkZEZlYXR1cmVzKFtwZl0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBtYXAgc2V0dGluZ3MgYmFzZWQgb24gcXVlcnkgc3RyaW5nIHZhbHVlc1xuICAgIGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmcoKSB7XG4gICAgICAgIHZhciBtb2RlID0gUXVlcnlTdHJpbmcuZ2V0UGFyYW1ldGVyQnlOYW1lKCdtb2RlJyk7XG4gICAgICAgIGlmIChtb2RlKSB7XG4gICAgICAgICAgICB2YXIgbW9kZVJhZGlvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kZSArICdUb2dnbGUnKTtcbiAgICAgICAgICAgIGlmIChtb2RlUmFkaW9CdXR0b24pIHtcbiAgICAgICAgICAgICAgICBtb2RlUmFkaW9CdXR0b24uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQ29udHJvbC5jYWxsKG1vZGVSYWRpb0J1dHRvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHpvb20gPSBRdWVyeVN0cmluZy5nZXRQYXJhbWV0ZXJCeU5hbWUoJ3pvb20nKTtcbiAgICAgICAgaWYgKHpvb20pIHtcbiAgICAgICAgICAgIG1hcC56b29tVG8ocGFyc2VJbnQoem9vbSkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3b3JsZFggPSBRdWVyeVN0cmluZy5nZXRQYXJhbWV0ZXJCeU5hbWUoJ3gnKTtcbiAgICAgICAgdmFyIHdvcmxkWSA9IFF1ZXJ5U3RyaW5nLmdldFBhcmFtZXRlckJ5TmFtZSgneScpO1xuICAgICAgICBpZiAod29ybGRYICYmIHdvcmxkWSkge1xuICAgICAgICAgICAgdmFyIGxvbmxhdCA9IHdvcmxkVG9MYXRMb24od29ybGRYLCB3b3JsZFkpO1xuICAgICAgICAgICAgbWFwLnNldENlbnRlcihuZXcgT3BlbkxheWVycy5Mb25MYXQobG9ubGF0LngsIGxvbmxhdC55KSwgdW5kZWZpbmVkLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB2YXIga2V5cyA9IFsnb2JzZXJ2ZXInLCAnc2VudHJ5J107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHdhcmRzID0gUXVlcnlTdHJpbmcuZ2V0UGFyYW1ldGVyQnlOYW1lKGtleXNbaV0pXG4gICAgICAgICAgICBpZiAod2FyZHMpIHtcbiAgICAgICAgICAgICAgICB3YXJkX2Nvb3JkaW5hdGVzID0gdHJpbSh3YXJkcywgJyA7Jykuc3BsaXQoJzsnKVxuICAgICAgICAgICAgICAgIHdhcmRfY29vcmRpbmF0ZXMubWFwKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb29yZCA9IGVsLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4eSA9IHdvcmxkVG9MYXRMb24ocGFyc2VGbG9hdChjb29yZFswXSksIHBhcnNlRmxvYXQoY29vcmRbMV0pKTtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VXYXJkKG5ldyBPcGVuTGF5ZXJzLkxvbkxhdCh4eS54LCB4eS55KSwga2V5c1tpXSwgZWwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB2YXIgYmFzZUxheWVyTmFtZSA9IFF1ZXJ5U3RyaW5nLmdldFBhcmFtZXRlckJ5TmFtZSgnQmFzZUxheWVyJyk7XG4gICAgICAgIGlmIChiYXNlTGF5ZXJOYW1lKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJhc2VMYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbGF5ZXIgPSBiYXNlTGF5ZXJzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBsYXllck5hbWUgPSBsYXllci5uYW1lLnJlcGxhY2UoLyAvZywgJycpO1xuICAgICAgICAgICAgICAgIGlmIChiYXNlTGF5ZXJOYW1lID09PSBsYXllck5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFwLnNldEJhc2VMYXllcihsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yIChrIGluIGxheWVyTmFtZXMpIHtcbiAgICAgICAgICAgIHZhciBsYXllck5hbWUgPSBsYXllck5hbWVzW2tdLnJlcGxhY2UoLyAvZywgJycpO1xuICAgICAgICAgICAgdmFsdWUgPSBRdWVyeVN0cmluZy5nZXRQYXJhbWV0ZXJCeU5hbWUobGF5ZXJOYW1lKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBsYXllciA9IG1hcC5nZXRMYXllcnNCeU5hbWUobGF5ZXJOYW1lc1trXSlbMF07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BhcnNlUXVlcnlTdHJpbmcnLCBsYXllciwgbGF5ZXJOYW1lc1trXSwgbGF5ZXJOYW1lLCB2YWx1ZSA9PSBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgaWYgKGxheWVyKSBsYXllci5zZXRWaXNpYmlsaXR5KHZhbHVlID09IFwidHJ1ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjdXRfdHJlZXMgPSBRdWVyeVN0cmluZy5nZXRQYXJhbWV0ZXJCeU5hbWUoJ2N1dF90cmVlcycpO1xuICAgICAgICBpZiAoY3V0X3RyZWVzKSB7XG4gICAgICAgICAgICB2YXIgbGF5ZXIgPSBtYXAuZ2V0TGF5ZXJzQnlOYW1lKGxheWVyTmFtZXNbXCJlbnRfZG90YV90cmVlXCJdKVswXTtcbiAgICAgICAgICAgIGlmICghbGF5ZXIubG9hZGVkKSBsb2FkVHJlZURhdGEoKTtcbiAgICAgICAgICAgIGN1dF90cmVlX2Nvb3JkaW5hdGVzID0gdHJpbShjdXRfdHJlZXMsICcgOycpLnNwbGl0KCc7JylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRyZWVNYXJrZXJzLCBjdXRfdHJlZV9jb29yZGluYXRlcyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1dF90cmVlX2Nvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3V0X3RyZWVfY29vcmRpbmF0ZXNbaV0pO1xuICAgICAgICAgICAgICAgIGlmICh0cmVlTWFya2Vyc1tjdXRfdHJlZV9jb29yZGluYXRlc1tpXV0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VHJlZU1hcmtlclN0YXRlKHRyZWVNYXJrZXJzW2N1dF90cmVlX2Nvb3JkaW5hdGVzW2ldXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b3dlcl92aXNpb24gPSBRdWVyeVN0cmluZy5nZXRQYXJhbWV0ZXJCeU5hbWUoJ3Rvd2VyX3Zpc2lvbicpO1xuICAgICAgICBpZiAodG93ZXJfdmlzaW9uKSB7XG4gICAgICAgICAgICB2YXIgbGF5ZXIgPSBtYXAuZ2V0TGF5ZXJzQnlOYW1lKGxheWVyTmFtZXNbXCJucGNfZG90YV90b3dlclwiXSlbMF07XG4gICAgICAgICAgICB0b3dlcl92aXNpb25fY29vcmRpbmF0ZXMgPSB0cmltKHRvd2VyX3Zpc2lvbiwgJyA7Jykuc3BsaXQoJzsnKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rvd2VyX3Zpc2lvbicsIGxheWVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRyZWVNYXJrZXJzLCB0b3dlcl92aXNpb25fY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3dlcl92aXNpb25fY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGxheWVyLm1hcmtlcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxheWVyLm1hcmtlcnNbal0udG93ZXJfbG9jLnggKyAnLCcgKyBsYXllci5tYXJrZXJzW2pdLnRvd2VyX2xvYy55ID09IHRvd2VyX3Zpc2lvbl9jb29yZGluYXRlc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVG93ZXJNYXJrZXJDbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBsYXllci5tYXJrZXJzW2pdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzZXRUcmVlUXVlcnlTdHJpbmcoKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IE9iamVjdC5rZXlzKGN1dFRyZWVzKS5qb2luKCc7Jyk7XG4gICAgICAgIFF1ZXJ5U3RyaW5nLnNldFF1ZXJ5U3RyaW5nKCdjdXRfdHJlZXMnLCB2YWx1ZSB8fCBudWxsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRKU09OKHBhdGgsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRKU09OJywgcGF0aCk7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCBwYXRoLCB0cnVlKTtcbiAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnRXJyb3IgbG9hZGluZyBwYWdlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdFcnJvciBsb2FkaW5nIHBhZ2UuJyk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBJTklUSVRJQUxJWkFUSU9OICpcbiAgICAgKioqKioqKioqKioqKioqKioqKiovXG4gICAgT3BlbkxheWVycy5JbWdQYXRoID0gSU1HX0RJUjtcbiAgICBcbiAgICAvLyBTdGFydCBzZXR0aW5nIHVwIHRoZSBtYXAsIGFkZGluZyBjb250cm9scyBhbmQgbGF5ZXJzXG4gICAgYmFzZUxheWVycy5mb3JFYWNoKGZ1bmN0aW9uKGxheWVyKSB7XG4gICAgICAgIG1hcC5hZGRMYXllcihsYXllcik7XG4gICAgfSk7XG4gICAgbWFwLmFkZExheWVyKGN1cnNvckxheWVyKTtcbiAgICBtYXAuYWRkTGF5ZXIoZGF5UmFuZ2VMYXllcik7XG4gICAgbWFwLmFkZExheWVyKG5pZ2h0UmFuZ2VMYXllcik7XG4gICAgbWFwLmFkZExheWVyKHRydWVTaWdodFJhbmdlTGF5ZXIpO1xuICAgIG1hcC5hZGRMYXllcihhdHRhY2tSYW5nZUxheWVyKTtcbiAgICBtYXAuYWRkTGF5ZXIocG9seWdvbkxheWVyKTtcbiAgICBtYXAuYWRkTGF5ZXIod2FyZFZpc2lvbkxheWVyKTtcbiAgICBtYXAuYWRkTGF5ZXIodmlzaW9uU2ltdWxhdGlvbkxheWVyKTtcbiAgICBtYXAuYWRkTGF5ZXIoaWNvbkxheWVyKTtcbiAgICBtYXAuYWRkQ29udHJvbChjb29yZGluYXRlQ29udHJvbCk7XG4gICAgbWFwLmFkZENvbnRyb2wobmV3IE9wZW5MYXllcnMuQ29udHJvbC5Ub3VjaE5hdmlnYXRpb24oe1xuICAgICAgICBkcmFnUGFuT3B0aW9uczoge1xuICAgICAgICAgICAgZW5hYmxlS2luZXRpYzogdHJ1ZVxuICAgICAgICB9XG4gICAgfSkpO1xuICAgIG1hcC5hZGRDb250cm9sKG5ldyBPcGVuTGF5ZXJzLkNvbnRyb2wuS2V5Ym9hcmREZWZhdWx0cygpKTtcbiAgICBtYXAuYWRkQ29udHJvbChsYXllclN3aXRjaGVyKTtcbiAgICBsYXllclN3aXRjaGVyLm1heGltaXplQ29udHJvbCgpO1xuICAgIGlmICghbWFwLmdldENlbnRlcigpKSB7XG4gICAgICAgIG1hcC56b29tVG9NYXhFeHRlbnQoKTtcbiAgICB9XG4gICAgXG4gICAgLy8gY3JlYXRlIGNsaWNrIGhhbmRsZXJcbiAgICBPcGVuTGF5ZXJzLkNvbnRyb2wuQ2xpY2sgPSBPcGVuTGF5ZXJzLkNsYXNzKE9wZW5MYXllcnMuQ29udHJvbCwge1xuICAgICAgICBkZWZhdWx0SGFuZGxlck9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNpbmdsZTogdHJ1ZSxcbiAgICAgICAgICAgIFwiZG91YmxlXCI6IGZhbHNlLFxuICAgICAgICAgICAgcGl4ZWxUb2xlcmFuY2U6IDAsXG4gICAgICAgICAgICBzdG9wU2luZ2xlOiBmYWxzZSxcbiAgICAgICAgICAgIHN0b3BEb3VibGU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlck9wdGlvbnMgPSBPcGVuTGF5ZXJzLlV0aWwuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRIYW5kbGVyT3B0aW9ucyk7XG4gICAgICAgICAgICBPcGVuTGF5ZXJzLkNvbnRyb2wucHJvdG90eXBlLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlciA9IG5ldyBPcGVuTGF5ZXJzLkhhbmRsZXIuQ2xpY2sodGhpcywge1xuICAgICAgICAgICAgICAgIGNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICAgICAgICAgICAgZGJsY2xpY2s6IHRoaXMub25EYmxjbGlja1xuICAgICAgICAgICAgfSwgdGhpcy5oYW5kbGVyT3B0aW9ucyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2s6IGhhbmRsZU9uQ2xpY2ssXG4gICAgICAgIG9uRGJsY2xpY2s6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5rZXkgKyBcIk91dHB1dFwiKSxcbiAgICAgICAgICAgICAgICBtc2cgPSBcImRibGNsaWNrIFwiICsgZXZlbnQueHk7XG4gICAgICAgICAgICBvdXRwdXQudmFsdWUgPSBvdXRwdXQudmFsdWUgKyBtc2cgKyBcIlxcblwiO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDb250cm9scyBjb25maWd1cmF0aW9uXG4gICAgcmVuZGVyZXIgPSByZW5kZXJlciA/IFtyZW5kZXJlcl0gOiBPcGVuTGF5ZXJzLkxheWVyLlZlY3Rvci5wcm90b3R5cGUucmVuZGVyZXJzO1xuICAgIGRyYXdDb250cm9scyA9IHtcbiAgICAgICAgbGluZTogbmV3IE9wZW5MYXllcnMuQ29udHJvbC5NZWFzdXJlKE9wZW5MYXllcnMuSGFuZGxlci5QYXRoLCB7XG4gICAgICAgICAgICBwZXJzaXN0OiB0cnVlLFxuICAgICAgICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgICAgICAgaGFuZGxlck9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBsYXllck9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXJzOiByZW5kZXJlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGNpcmNsZTogbmV3IE9wZW5MYXllcnMuQ29udHJvbC5NZWFzdXJlKE9wZW5MYXllcnMuSGFuZGxlci5QYXRoLCB7XG4gICAgICAgICAgICBwZXJzaXN0OiBmYWxzZSxcbiAgICAgICAgICAgIGltbWVkaWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGhhbmRsZXJPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgbGF5ZXJPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyczogcmVuZGVyZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBvYnNlcnZlcjogbmV3IE9wZW5MYXllcnMuQ29udHJvbC5DbGljayh7XG4gICAgICAgICAgICBvbkNsaWNrOiBoYW5kbGVXYXJkQ2xpY2soJ29ic2VydmVyJyksXG4gICAgICAgICAgICBoYW5kbGVyT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHNpbmdsZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgc2VudHJ5OiBuZXcgT3BlbkxheWVycy5Db250cm9sLkNsaWNrKHtcbiAgICAgICAgICAgIG9uQ2xpY2s6IGhhbmRsZVdhcmRDbGljaygnc2VudHJ5JyksXG4gICAgICAgICAgICBoYW5kbGVyT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHNpbmdsZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgcG9seWdvbkNvbnRyb2w6IG5ldyBPcGVuTGF5ZXJzLkNvbnRyb2wuRHJhd0ZlYXR1cmUocG9seWdvbkxheWVyLCBPcGVuTGF5ZXJzLkhhbmRsZXIuUmVndWxhclBvbHlnb24sIHtcbiAgICAgICAgICAgIGhhbmRsZXJPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgc2lkZXM6IDMwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBzZWxlY3Q6IG5ldyBPcGVuTGF5ZXJzLkNvbnRyb2wuU2VsZWN0RmVhdHVyZShwb2x5Z29uTGF5ZXIsIHtcbiAgICAgICAgICAgIGhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgaGlnaGxpZ2h0T25seTogZmFsc2UsXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZS5tZWFzdXJlX2NvbnRyb2wgJiYgZmVhdHVyZS5pc19tZWFzdXJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmUubWVhc3VyZV9jb250cm9sLmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZS5pc19tZWFzdXJpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0KGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9seWdvbkxheWVyLnJlbW92ZUZlYXR1cmVzKGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG92ZXJGZWF0dXJlOiBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKSxcbiAgICAgICAgICAgICAgICAgICAgb3V0ID0gXCJSYWRpdXM6IFwiICsgKC41NjUzNTIgKiBNYXRoLnNxcnQoZmVhdHVyZS5nZW9tZXRyeS5nZXRBcmVhKCkpICogbWFwQ29uc3RhbnRzLnNjYWxlKS50b0ZpeGVkKDApICsgXCIgdW5pdHNcIjtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IG91dDtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodChmZWF0dXJlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvdXRGZWF0dXJlOiBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy51bmhpZ2hsaWdodChmZWF0dXJlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICAvLyBBZGQgY29udHJvbHMgdG8gbWFwXG4gICAgZm9yICh2YXIga2V5IGluIGRyYXdDb250cm9scykge1xuICAgICAgICBpZiAoa2V5ID09IFwibGluZVwiKSB7XG4gICAgICAgICAgICBkcmF3Q29udHJvbHNba2V5XS5ldmVudHMub24oe1xuICAgICAgICAgICAgICAgIG1lYXN1cmU6IGhhbmRsZU1lYXN1cmVtZW50cyxcbiAgICAgICAgICAgICAgICBtZWFzdXJlcGFydGlhbDogaGFuZGxlTWVhc3VyZW1lbnRzXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkgPT0gXCJjaXJjbGVcIikge1xuICAgICAgICAgICAgZHJhd0NvbnRyb2xzW2tleV0uZXZlbnRzLm9uKHtcbiAgICAgICAgICAgICAgICBtZWFzdXJlOiBoYW5kbGVDaXJjbGVNZWFzdXJlbWVudHMsXG4gICAgICAgICAgICAgICAgbWVhc3VyZXBhcnRpYWw6IGhhbmRsZUNpcmNsZU1lYXN1cmVtZW50c1BhcnRpYWxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbWFwLmFkZENvbnRyb2woZHJhd0NvbnRyb2xzW2tleV0pO1xuICAgIH1cblxuICAgIG1hcC5ldmVudHMucmVnaXN0ZXIoXCJ6b29tZW5kXCIsIG1hcCwgZnVuY3Rpb24oKXtcbiAgICAgICAgUXVlcnlTdHJpbmcuc2V0UXVlcnlTdHJpbmcoJ3pvb20nLCBtYXAuem9vbSk7XG4gICAgfSk7XG5cbiAgICBtYXAuZXZlbnRzLnJlZ2lzdGVyKFwibW92ZWVuZFwiLCBtYXAsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3b3JsZFhZID0gbGF0TG9uVG9Xb3JsZChtYXAuY2VudGVyLmxvbiwgbWFwLmNlbnRlci5sYXQpO1xuICAgICAgICBRdWVyeVN0cmluZy5zZXRRdWVyeVN0cmluZygneCcsIHdvcmxkWFkueC50b0ZpeGVkKDApKTtcbiAgICAgICAgUXVlcnlTdHJpbmcuc2V0UXVlcnlTdHJpbmcoJ3knLCB3b3JsZFhZLnkudG9GaXhlZCgwKSk7XG4gICAgfSk7XG5cbiAgICAvLyBYL1kgY29vcmRpbmF0ZSB1cGRhdGUgZGlzcGxheSBoYW5kbGVyXG4gICAgY29vcmRpbmF0ZUNvbnRyb2wuZm9ybWF0T3V0cHV0ID0gZnVuY3Rpb24gKGxvbmxhdCkge1xuICAgICAgICB2YXIgd29ybGRYWSA9IGxhdExvblRvV29ybGQobG9ubGF0LmxvbiwgbG9ubGF0LmxhdCk7XG4gICAgICAgIHJldHVybiB3b3JsZFhZLngudG9GaXhlZCgwKSArICcsICcgKyB3b3JsZFhZLnkudG9GaXhlZCgwKTtcbiAgICB9O1xuICAgIFxuICAgIG1hcC5ldmVudHMucmVnaXN0ZXIoXCJtb3VzZW1vdmVcIiwgbWFwLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIC8qaWYgKHdhcmRWaXNpb25MYXllci5jdXJzb3JfbWFya2VyKSB7XG4gICAgICAgICAgICBpZiAod2FyZFZpc2lvbkxheWVyLmN1cnNvcl9tYXJrZXIudmlzaW9uX2NlbnRlcl9mZWF0dXJlKSB3YXJkVmlzaW9uTGF5ZXIucmVtb3ZlRmVhdHVyZXMod2FyZFZpc2lvbkxheWVyLmN1cnNvcl9tYXJrZXIudmlzaW9uX2NlbnRlcl9mZWF0dXJlKTtcbiAgICAgICAgICAgIGlmICh3YXJkVmlzaW9uTGF5ZXIuY3Vyc29yX21hcmtlci52aXNpb25fZmVhdHVyZSkgd2FyZFZpc2lvbkxheWVyLnJlbW92ZUZlYXR1cmVzKHdhcmRWaXNpb25MYXllci5jdXJzb3JfbWFya2VyLnZpc2lvbl9mZWF0dXJlKTtcbiAgICAgICAgICAgIHdhcmRWaXNpb25MYXllci5yZW1vdmVGZWF0dXJlcyh3YXJkVmlzaW9uTGF5ZXIuY3Vyc29yX21hcmtlcik7XG4gICAgICAgIH0qL1xuICAgICAgICBjdXJzb3JMYXllci5kZXN0cm95RmVhdHVyZXMoKTtcbiAgICBcbiAgICAgICAgLy8gY3JlYXRlIGFuZCBhZGQgY3Vyc29yIG1hcmtlciBwb2x5Z29uIGlmIGluIHBsYWNlIG9ic2VydmVyIG1vZGVcbiAgICAgICAgaWYgKFZJU0lPTl9TSU1VTEFUSU9OICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JzZXJ2ZXJUb2dnbGVcIikuY2hlY2tlZCkge1xuICAgICAgICAgICAgdmFyIGxvbmxhdCA9IG1hcC5nZXRMb25MYXRGcm9tUGl4ZWwoZS54eSk7XG4gICAgICAgICAgICBpZiAoIW1hcEJvdW5kcy5jb250YWluc0xvbkxhdChsb25sYXQpKSByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciB3b3JsZFhZID0gbGF0TG9uVG9Xb3JsZChsb25sYXQubG9uLCBsb25sYXQubGF0KTtcbiAgICAgICAgICAgIHZhciBncmlkWFkgPSB2cy5Xb3JsZFhZdG9HcmlkWFkod29ybGRYWS54LCB3b3JsZFhZLnkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdHJlZVB0cyA9IHZzLnRyZWVfcmVsYXRpb25zW2dyaWRYWS5rZXldO1xuICAgICAgICAgICAgdmFyIHRyZWVCbG9ja2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRyZWVQdHMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCA7IGkgPCB0cmVlUHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmVlUHQgPSB0cmVlUHRzW2ldO1xuICAgICAgICAgICAgICAgICAgICB0cmVlQmxvY2tpbmcgPSB2cy50cmVlX3N0YXRlW3RyZWVQdC5rZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJlZUJsb2NraW5nKSBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY3Vyc29yX3N0eWxlID0gc3R5bGUuZ3JlZW47XG4gICAgICAgICAgICBpZiAoIXZzLmlzVmFsaWRYWShncmlkWFkueCwgZ3JpZFhZLnksIHRydWUsIHRydWUsIHRydWUpKSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yX3N0eWxlID0gc3R5bGUucmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGJveF9mZWF0dXJlID0gY3JlYXRlVGlsZUZlYXR1cmUodnMuR3JpZFhZdG9Xb3JsZFhZKGdyaWRYWS54LCBncmlkWFkueSksIGN1cnNvcl9zdHlsZSk7XG4gICAgICAgICAgICBjdXJzb3JMYXllci5hZGRGZWF0dXJlcyhbYm94X2ZlYXR1cmVdKTtcbiAgICAgICAgICAgIC8vd2FyZFZpc2lvbkxheWVyLmN1cnNvcl9tYXJrZXIgPSBib3hfZmVhdHVyZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKFZJU0lPTl9TSU1VTEFUSU9OX0FMV0FZUykgdXBkYXRlVmlzaWJpbGl0eUhhbmRsZXIobG9ubGF0LCBudWxsLCBFTlRJVElFUy5vYnNlcnZlci5yYWRpdXMpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBTaG93L2hpZGUgY29udHJvbHMgcGFuZWxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRyb2xzLW1heFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRyb2xzXCIpLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250cm9scy1taW5cIikuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgaWYgKGxheWVyU3dpdGNoZXIuaXNTbWFsbFNjcmVlbigpKSB7XG4gICAgICAgICAgICBsYXllclN3aXRjaGVyLm1pbmltaXplQ29udHJvbCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgZmFsc2UpO1xuICAgIFxuICAgIGZ1bmN0aW9uIG1pbmltaXplQ29udHJvbExpc3QoZSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRyb2xzXCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHJvbHMtbWF4XCIpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGlmIChlKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHJvbHMtbWluXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtaW5pbWl6ZUNvbnRyb2xMaXN0LCBmYWxzZSk7XG4gICAgXG4gICAgLy8gSW5pdGlhbGx5IGhpZGUgY29udHJvbHMgaWYgc2NyZWVuIGlzIHNtYWxsXG4gICAgaWYgKGxheWVyU3dpdGNoZXIuaXNTbWFsbFNjcmVlbigpKSB7XG4gICAgICAgIG1pbmltaXplQ29udHJvbExpc3QuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRyb2xzLW1pblwiKSk7XG4gICAgICAgIGxheWVyU3dpdGNoZXIubWluaW1pemVDb250cm9sKCk7XG4gICAgfVxuXG4gICAgLy8gU2hvdy9oaWRlIFgvWSBjb29yZGluYXRlIGRpc3BsYXlcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb3JkQ29udHJvbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbENvbnRyb2xNb3VzZVBvc2l0aW9uXCIpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbENvbnRyb2xNb3VzZVBvc2l0aW9uXCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9LCBmYWxzZSk7XG5cbiAgICAvLyBWaXNpb24gc2ltdWxhdGlvbiBvbi9vZmZcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpc2lvblNpbXVsYXRpb25Db250cm9sXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBWSVNJT05fU0lNVUxBVElPTiA9IHRoaXMuY2hlY2tlZDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbHdheXNTaW11bGF0ZUNvbnRyb2xcIikuZGlzYWJsZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgIH0sIGZhbHNlKTtcblxuICAgIC8vIEFsd2F5cyBzaW11bGF0ZSB2aXNpb24gb24vb2ZmXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbHdheXNTaW11bGF0ZUNvbnRyb2xcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIFZJU0lPTl9TSU1VTEFUSU9OX0FMV0FZUyA9IHRoaXMuY2hlY2tlZDtcbiAgICB9LCBmYWxzZSk7XG5cbiAgICAvLyBVcGRhdGUgdHJhdmVsIHRpbWUgZGlzcGxheSB3aGVuIG1vdmVzcGVlZCBpbnB1dCBjaGFuZ2VzXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3Zlc3BlZWRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhdmVsdGltZVwiKS5pbm5lckhUTUwgPSAobGFzdERpc3RhbmNlIC8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3Zlc3BlZWRcIikudmFsdWUpLnRvRml4ZWQoMik7XG4gICAgfSwgZmFsc2UpO1xuXG4gICAgLy8gU2V0IHVwIHBhbmVsIHJhZGlvIGJ1dHRvbiB0b2dnbGUgaGFuZGxlcnNcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2aWdhdGVUb2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNvbnRyb2wsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluZVRvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQ29udHJvbCwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXJjbGVUb2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNvbnRyb2wsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JzZXJ2ZXJUb2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNvbnRyb2wsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VudHJ5VG9nZ2xlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVDb250cm9sLCBmYWxzZSk7XG4gICAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKVswXSk7XG4gICAgICAgIHJlc2V0TWFya2VyTGF5ZXJzKCk7XG4gICAgICAgIHBvbHlnb25MYXllci5kZXN0cm95RmVhdHVyZXMoKTtcbiAgICAgICAgd2FyZFZpc2lvbkxheWVyLmRlc3Ryb3lGZWF0dXJlcygpO1xuICAgICAgICB2aXNpb25TaW11bGF0aW9uTGF5ZXIuZGVzdHJveUZlYXR1cmVzKCk7XG4gICAgICAgIGljb25MYXllci5jbGVhck1hcmtlcnMoKTtcbiAgICAgICAgZHJhd0NvbnRyb2xzLmxpbmUuY2FuY2VsKCk7XG4gICAgICAgIGRyYXdDb250cm9scy5jaXJjbGUuY2FuY2VsKCk7XG4gICAgICAgIG1hcC5zZXRCYXNlTGF5ZXIoYmFzZUxheWVyc1swXSk7XG4gICAgICAgIG1hcC56b29tVG9NYXhFeHRlbnQoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGFDb250cm9sJykuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgIGluaXQoKTtcbiAgICB9LCBmYWxzZSk7XG4gICAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGFDb250cm9sJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBRdWVyeVN0cmluZy5zZXRRdWVyeVN0cmluZygnZGF0YScsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhQ29udHJvbCcpLnZhbHVlKTtcbiAgICAgICAgcmVzZXRNYXJrZXJMYXllcnMoKTtcbiAgICAgICAgaW5pdCgpO1xuICAgIH0sIGZhbHNlKTtcbiAgICBcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgZGF0YSA9IFF1ZXJ5U3RyaW5nLmdldFBhcmFtZXRlckJ5TmFtZSgnZGF0YScpO1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGFDb250cm9sJykudmFsdWUgPSBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIFZJU0lPTl9TSU1VTEFUSU9OID0gZGF0YSAhPSBcIjY4N1wiO1xuICAgICAgICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cInZpc2lvblNpbXVsYXRpb25Db250cm9sXCJdJykuc3R5bGUuZGlzcGxheSA9IFZJU0lPTl9TSU1VTEFUSU9OID8gJ2lubGluZScgOiAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaW9uU2ltdWxhdGlvbkNvbnRyb2xcIikuZGlzYWJsZWQgPSAhVklTSU9OX1NJTVVMQVRJT047XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWx3YXlzU2ltdWxhdGVDb250cm9sXCIpLmRpc2FibGVkID0gIVZJU0lPTl9TSU1VTEFUSU9OO1xuICAgICAgICBnZXRKU09OKG1hcF9kYXRhX3BhdGggKyBnZXREYXRhVmVyc2lvbigpICsgJy9tYXBkYXRhLmpzb24nLCBvbk1hcERhdGFMb2FkKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0RGF0YVZlcnNpb24oKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YUNvbnRyb2wnKS52YWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVWaXNpYmlsaXR5SGFuZGxlcihsYXRsb24sIG1hcmtlciwgcmFkaXVzKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2cobGF0bG9uLCBtYXJrZXIsIHJhZGl1cyk7XG4gICAgICAgIHZhciB3b3JsZFhZID0gbGF0TG9uVG9Xb3JsZChsYXRsb24ubG9uLCBsYXRsb24ubGF0KTtcbiAgICAgICAgdmFyIGdyaWRYWSA9IHZzLldvcmxkWFl0b0dyaWRYWSh3b3JsZFhZLngsIHdvcmxkWFkueSk7XG4gICAgICAgIGlmICh2cy5pc1ZhbGlkWFkoZ3JpZFhZLngsIGdyaWRYWS55LCB0cnVlLCB0cnVlLCB0cnVlKSkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIGFuZCBhZGQgY2VudGVyIG1hcmtlciBwb2x5Z29uXG4gICAgICAgICAgICB2YXIgYm94X2ZlYXR1cmUgPSBjcmVhdGVUaWxlRmVhdHVyZSh2cy5HcmlkWFl0b1dvcmxkWFkoZ3JpZFhZLngsIGdyaWRYWS55KSwgc3R5bGUuZ3JlZW4pO1xuICAgICAgICAgICAgaWYgKG1hcmtlcikge1xuICAgICAgICAgICAgICAgIHZpc2lvblNpbXVsYXRpb25MYXllci5hZGRGZWF0dXJlcyhbYm94X2ZlYXR1cmVdKTtcbiAgICAgICAgICAgICAgICBtYXJrZXIudmlzaW9uX2NlbnRlcl9mZWF0dXJlID0gYm94X2ZlYXR1cmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGV4ZWN1dGUgdmlzaW9uIHNpbXVsYXRpb25cbiAgICAgICAgICAgIHZzLnVwZGF0ZVZpc2liaWxpdHkoZ3JpZFhZLngsIGdyaWRYWS55LCBnZXRUaWxlUmFkaXVzKHJhZGl1cykpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBtZXJnZSBsaWdodCBwb2ludHMgaW50byBhIHNpbmdsZSBwb2x5Z29uIGFuZCBhZGQgdG8gdmlzaW9uIGxheWVyXG4gICAgICAgICAgICB2YXIgb3V0bGluZXMgPSBnZXRMaWdodFVuaW9uKHZzLmdyaWQsIHZzLmxpZ2h0cyk7XG4gICAgICAgICAgICB2YXIgcG9seWdvbkxpc3QgPSBvdXRsaW5lcy5tYXAoZnVuY3Rpb24gKG91dGxpbmVQb2ludHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmluZ1BvaW50cyA9IG91dGxpbmVQb2ludHMubWFwKGZ1bmN0aW9uIChwdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgd29ybGRYWSA9IHZzLkdyaWRYWXRvV29ybGRYWShwdC54LCBwdC55KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhdGxvbiA9IHdvcmxkVG9MYXRMb24od29ybGRYWS54LCB3b3JsZFhZLnkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE9wZW5MYXllcnMuR2VvbWV0cnkuUG9pbnQobGF0bG9uLngsIGxhdGxvbi55KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgcmluZyA9IG5ldyBPcGVuTGF5ZXJzLkdlb21ldHJ5LkxpbmVhclJpbmcocmluZ1BvaW50cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBPcGVuTGF5ZXJzLkdlb21ldHJ5LlBvbHlnb24oW3JpbmddKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG11bHRpUG9seWdvbiA9IG5ldyBPcGVuTGF5ZXJzLkdlb21ldHJ5Lk11bHRpUG9seWdvbihwb2x5Z29uTGlzdCk7XG4gICAgICAgICAgICB2YXIgdmlzaW9uRmVhdHVyZSA9IG5ldyBPcGVuTGF5ZXJzLkZlYXR1cmUuVmVjdG9yKG11bHRpUG9seWdvbiwgbnVsbCwgc3R5bGUueWVsbG93KTtcbiAgICAgICAgICAgIGlmIChtYXJrZXIpIHtcbiAgICAgICAgICAgICAgICB2aXNpb25TaW11bGF0aW9uTGF5ZXIuYWRkRmVhdHVyZXMoW3Zpc2lvbkZlYXR1cmVdKTtcbiAgICAgICAgICAgICAgICBtYXJrZXIudmlzaW9uX2ZlYXR1cmUgPSB2aXNpb25GZWF0dXJlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yTGF5ZXIuYWRkRmVhdHVyZXMoW3Zpc2lvbkZlYXR1cmVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB2YXIgZ2V0U2l6ZVBvbGw7XG4gICAgdmFyIHQxID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgdnMgPSBuZXcgVmlzaW9uU2ltdWxhdGlvbih3b3JsZGRhdGEsIHZpc2lvbl9kYXRhX2ltYWdlX3BhdGgsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZzIGxvYWRlZCcsIERhdGUubm93KCkgLSB0MSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXAuZ2V0U2l6ZSgpJywgbWFwLmdldFNpemUoKSk7XG4gICAgICAgIGluaXRDaGVjaygpO1xuICAgIH0pO1xuICAgIFxuICAgIHZhciBpbml0Q2hlY2tDb3VudCA9IDA7XG4gICAgdmFyIG1heEluaXRDaGVja0NvdW50ID0gNDA7XG4gICAgZnVuY3Rpb24gaW5pdENoZWNrKCkge1xuICAgICAgICBpZiAobWFwLmdldFNpemUoKSkge1xuICAgICAgICAgICAgaW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW5pdENoZWNrQ291bnQrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXAgc2l6ZSBudWxsJyk7XG4gICAgICAgICAgICBpZiAoaW5pdENoZWNrQ291bnQgPCBtYXhJbml0Q2hlY2tDb3VudCkge1xuICAgICAgICAgICAgICAgIG1hcC51cGRhdGVTaXplKCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChpbml0Q2hlY2ssIDI1MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb2xsYmFyLmVycm9yKFwiTWF4IGluaXQgY2hlY2sgZXhjZWVkZWRcIik7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJUaGVyZSB3YXMgYSBwcm9ibGVtIGxvYWRpbmcgdGhlIG1hcC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbG9hZEdlb0pTT05EYXRhKG1hcmtlcnMsIGssIG5hbWUsIHN0eWxlKSB7XG4gICAgICAgIHZhciBmaWxlbmFtZSA9IG1hcF9kYXRhX3BhdGggKyBnZXREYXRhVmVyc2lvbigpICsgJy8nICsgayArICcyLmpzb24nO1xuICAgICAgICBtYXJrZXJzW2tdID0gbmV3IE9wZW5MYXllcnMuTGF5ZXIuVmVjdG9yKG5hbWUsIHtcbiAgICAgICAgICAgIHN0cmF0ZWdpZXM6IFtuZXcgT3BlbkxheWVycy5TdHJhdGVneS5GaXhlZCgpXSxcbiAgICAgICAgICAgIHByb3RvY29sOiBuZXcgT3BlbkxheWVycy5Qcm90b2NvbC5IVFRQKHtcbiAgICAgICAgICAgICAgICB1cmw6IGZpbGVuYW1lLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogbmV3IE9wZW5MYXllcnMuRm9ybWF0Lkdlb0pTT04oKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgbWFya2Vyc1trXS5zdHlsZSA9IHN0eWxlO1xuICAgICAgICBtYXAuYWRkTGF5ZXIobWFya2Vyc1trXSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDsiLCJ2YXIgbWFwQ29uc3RhbnRzID0gcmVxdWlyZSgnLi9tYXBDb25zdGFudHMnKTtcblxuZnVuY3Rpb24gbGVycChtaW5WYWwsIG1heFZhbCwgcG9zX3IpIHtcbiAgICByZXR1cm4gcG9zX3IgKiAobWF4VmFsIC0gbWluVmFsKSArIG1pblZhbDtcbn1cblxuZnVuY3Rpb24gcmV2ZXJzZUxlcnAobWluVmFsLCBtYXhWYWwsIHBvcykge1xuICAgIHJldHVybiAocG9zIC0gbWluVmFsKSAvIChtYXhWYWwgLSBtaW5WYWwpO1xufVxuXG5mdW5jdGlvbiBsYXRMb25Ub1dvcmxkKHgsIHkpIHtcbiAgICB2YXIgeF9yID0gbGVycChtYXBDb25zdGFudHMubWFwX3hfYm91bmRhcmllc1swXSwgbWFwQ29uc3RhbnRzLm1hcF94X2JvdW5kYXJpZXNbMV0sIHggLyBtYXBDb25zdGFudHMubWFwX3cpLFxuICAgICAgICB5X3IgPSBsZXJwKG1hcENvbnN0YW50cy5tYXBfeV9ib3VuZGFyaWVzWzBdLCBtYXBDb25zdGFudHMubWFwX3lfYm91bmRhcmllc1sxXSwgKG1hcENvbnN0YW50cy5tYXBfaCAtIHkpIC8gbWFwQ29uc3RhbnRzLm1hcF9oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHhfcixcbiAgICAgICAgeTogeV9yXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gd29ybGRUb0xhdExvbih4X3IsIHlfcikge1xuICAgIHZhciB4ID0gcmV2ZXJzZUxlcnAobWFwQ29uc3RhbnRzLm1hcF94X2JvdW5kYXJpZXNbMF0sIG1hcENvbnN0YW50cy5tYXBfeF9ib3VuZGFyaWVzWzFdLCB4X3IpICogbWFwQ29uc3RhbnRzLm1hcF93LFxuICAgICAgICB5ID0gbWFwQ29uc3RhbnRzLm1hcF9oIC0gcmV2ZXJzZUxlcnAobWFwQ29uc3RhbnRzLm1hcF95X2JvdW5kYXJpZXNbMF0sIG1hcENvbnN0YW50cy5tYXBfeV9ib3VuZGFyaWVzWzFdLCB5X3IpICogbWFwQ29uc3RhbnRzLm1hcF9oO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFRpbGVSYWRpdXMocikge1xuICAgIHJldHVybiBwYXJzZUludChNYXRoLmZsb29yKHIgLyA2NCkpO1xufVxuXG5mdW5jdGlvbiBnZXRTY2FsZWRSYWRpdXMocikge1xuICAgIHJldHVybiByIC8gKG1hcENvbnN0YW50cy5tYXBfeF9ib3VuZGFyaWVzWzFdIC0gbWFwQ29uc3RhbnRzLm1hcF94X2JvdW5kYXJpZXNbMF0pICogbWFwQ29uc3RhbnRzLm1hcF93XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZURpc3RhbmNlKG9yZGVyLCB1bml0cywgbWVhc3VyZSkge1xuICAgIGlmIChvcmRlciA9PSAxKSB7XG4gICAgICAgIGlmICh1bml0cyA9PSBcImttXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBtZWFzdXJlICogbWFwQ29uc3RhbnRzLnNjYWxlICogMTAwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtZWFzdXJlICogbWFwQ29uc3RhbnRzLnNjYWxlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1lYXN1cmUgKiBtYXBDb25zdGFudHMuc2NhbGU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBsZXJwOiBsZXJwLFxuICAgIHJldmVyc2VMZXJwOiByZXZlcnNlTGVycCxcbiAgICBsYXRMb25Ub1dvcmxkOiBsYXRMb25Ub1dvcmxkLFxuICAgIHdvcmxkVG9MYXRMb246IHdvcmxkVG9MYXRMb24sXG4gICAgZ2V0VGlsZVJhZGl1czogZ2V0VGlsZVJhZGl1cyxcbiAgICBnZXRTY2FsZWRSYWRpdXM6IGdldFNjYWxlZFJhZGl1cyxcbiAgICBjYWxjdWxhdGVEaXN0YW5jZTogY2FsY3VsYXRlRGlzdGFuY2Vcbn0iLCJ2YXIgVmlzaW9uU2ltdWxhdGlvbiA9IHJlcXVpcmUoXCJkb3RhLXZpc2lvbi1zaW11bGF0aW9uXCIpO1xudmFyIGtleTJwdCA9IFZpc2lvblNpbXVsYXRpb24ucHJvdG90eXBlLmtleTJwdDtcbnZhciB4eTJrZXkgPSBWaXNpb25TaW11bGF0aW9uLnByb3RvdHlwZS54eTJrZXk7XG52YXIgeHkycHQgPSBWaXNpb25TaW11bGF0aW9uLnByb3RvdHlwZS54eTJwdDtcblxuZnVuY3Rpb24gcHJvY2Vzc05laWdoYm9ycyhncmlkLCBsaWdodHMsIGNvbXBvbmVudHMsIGtleSwgaW5kZXgpIHtcbiAgICB2YXIgcHQgPSBrZXkycHQoa2V5KTtcbiAgICB2YXIgZGlycyA9IFtbMSwgMF0sIFswLCAtMV0sIFstMSwgMF0sIFswLCAxXV07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBhWCA9IHB0LngrZGlyc1tpXVswXTtcbiAgICAgICAgdmFyIGFZID0gcHQueStkaXJzW2ldWzFdO1xuICAgICAgICBpZiAoIWdyaWRbYVhdIHx8ICFncmlkW2FYXVthWV0pIGNvbnRpbnVlO1xuICAgICAgICB2YXIga2V5QWRqID0gZ3JpZFthWF1bYVldLmtleVxuICAgICAgICBpZiAoY29tcG9uZW50c1trZXlBZGpdIHx8ICFsaWdodHNba2V5QWRqXSkgY29udGludWU7XG4gICAgICAgIGNvbXBvbmVudHNba2V5QWRqXSA9IGluZGV4O1xuICAgICAgICBwcm9jZXNzTmVpZ2hib3JzKGdyaWQsIGxpZ2h0cywgY29tcG9uZW50cywga2V5QWRqLCBpbmRleCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRMaWdodFVuaW9uKGdyaWQsIGxpZ2h0cykge1xuICAgIHZhciBjb21wb25lbnRzID0ge307XG4gICAgdmFyIGluZGV4ID0gMTtcbiAgICBmb3IgKHZhciBrZXkgaW4gbGlnaHRzKSB7XG4gICAgICAgIGlmICghY29tcG9uZW50c1trZXldKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzW2tleV0gPSBpbmRleDtcbiAgICAgICAgICAgIHByb2Nlc3NOZWlnaGJvcnMoZ3JpZCwgbGlnaHRzLCBjb21wb25lbnRzLCBrZXksIGluZGV4KTtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdmFyIG91dGxpbmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBpbmRleDsgaSsrKSB7XG4gICAgICAgIG91dGxpbmVzLnB1c2goZ2V0T3V0bGluZShncmlkLCBjb21wb25lbnRzLCBpKSlcbiAgICB9XG4gICAgcmV0dXJuIG91dGxpbmVzO1xufVxuXG5mdW5jdGlvbiBpc1NpZGVGcmVlKGdyaWQsIGNvbXBvbmVudHMsIHB0LCBkaXIpIHtcbiAgICB2YXIgYVggPSBwdC54K2RpclswXTtcbiAgICB2YXIgYVkgPSBwdC55K2RpclsxXTtcbiAgICBpZiAoIWdyaWRbYVhdIHx8ICFncmlkW2FYXVthWV0pIHJldHVybiB0cnVlO1xuICAgIHZhciBrZXlBZGogPSBncmlkW2FYXVthWV0ua2V5XG4gICAgcmV0dXJuICFjb21wb25lbnRzW2tleUFkal07XG59XG5cbmZ1bmN0aW9uIG5vdFN1cnJvdW5kZWQoZ3JpZCwgY29tcG9uZW50cywgcHQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrPTIpIHtcbiAgICAgICAgdmFyIGFYID0gcHQueCtNYXRoLnJvdW5kKE1hdGguY29zKDIgKiBNYXRoLlBJIC0gTWF0aC5QSS80ICogaSkpO1xuICAgICAgICB2YXIgYVkgPSBwdC55K01hdGgucm91bmQoTWF0aC5zaW4oMiAqIE1hdGguUEkgLSBNYXRoLlBJLzQgKiBpKSk7XG4gICAgICAgIGlmICghZ3JpZFthWF0gfHwgIWdyaWRbYVhdW2FZXSkgcmV0dXJuIGk7XG4gICAgICAgIHZhciBrZXlBZGogPSBncmlkW2FYXVthWV0ua2V5XG4gICAgICAgIGlmICghY29tcG9uZW50c1trZXlBZGpdKSByZXR1cm4gaTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIG1vZChuLCBtKSB7XG4gICAgICAgIHJldHVybiAoKG4gJSBtKSArIG0pICUgbTtcbn1cblxuZnVuY3Rpb24gZ2V0T3V0bGluZShncmlkLCBjb21wb25lbnRzLCBpbmRleCkge1xuICAgIHZhciBvdXRsaW5lUG9pbnRzID0gW107XG4gICAgdmFyIHN0YXJ0S2V5O1xuICAgIHZhciBkaXIgPSBudWxsO1xuICAgIGZvciAodmFyIGtleSBpbiBjb21wb25lbnRzKSB7XG4gICAgICAgIHZhciBwdCA9IGtleTJwdChrZXkpO1xuICAgICAgICBkaXIgPSBub3RTdXJyb3VuZGVkKGdyaWQsIGNvbXBvbmVudHMsIHB0KTtcbiAgICAgICAgaWYgKGNvbXBvbmVudHNba2V5XSA9PSBpbmRleCAmJiBkaXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN0YXJ0S2V5ID0ga2V5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIG5leHQgPSBwcm9jZXNzTmV4dChncmlkLCBjb21wb25lbnRzLCBzdGFydEtleSwgZGlyKTtcbiAgICB3aGlsZSAoc3RhcnRLZXkgIT09IG5leHQua2V5IHx8IGRpciAhPT0gbmV4dC5kaXIpIHtcbiAgICAgICAgb3V0bGluZVBvaW50cy5wdXNoKG5leHQucG9pbnQpO1xuICAgICAgICBuZXh0ID0gcHJvY2Vzc05leHQoZ3JpZCwgY29tcG9uZW50cywgbmV4dC5rZXksIG5leHQuZGlyKTtcbiAgICB9XG4gICAgb3V0bGluZVBvaW50cy5wdXNoKG5leHQucG9pbnQpO1xuICAgIHJldHVybiBvdXRsaW5lUG9pbnRzO1xufVxuXG5mdW5jdGlvbiBjaGVja0FkaihncmlkLCBjb21wb25lbnRzLCBwdCwga2V5LCBkaXIsIGksIGFkakRpcikge1xuICAgIHZhciBhWCA9IHB0LngrZGlyWzBdO1xuICAgIHZhciBhWSA9IHB0LnkrZGlyWzFdO1xuICAgIGlmICghZ3JpZFthWF0gfHwgIWdyaWRbYVhdW2FZXSkgcmV0dXJuO1xuICAgIHZhciBwdEFkaiA9IGdyaWRbcHQueCtkaXJbMF1dW3B0LnkrZGlyWzFdXTtcbiAgICBpZiAoY29tcG9uZW50c1twdEFkai5rZXldID09IGNvbXBvbmVudHNba2V5XSAmJiBpc1NpZGVGcmVlKGdyaWQsIGNvbXBvbmVudHMsIHB0QWRqLCBhZGpEaXIpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IHB0QWRqLmtleSxcbiAgICAgICAgICAgIGRpcjogaVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcm9jZXNzTmV4dChncmlkLCBjb21wb25lbnRzLCBrZXksIGkpIHtcbiAgICB2YXIgcHQgPSBrZXkycHQoa2V5KTtcbiAgICB2YXIgbmV4dDtcbiAgICBcbiAgICB2YXIgeCA9IE1hdGgucm91bmQoTWF0aC5jb3MoMiAqIE1hdGguUEkgLSBNYXRoLlBJLzQgKiBpKSk7XG4gICAgdmFyIHkgPSBNYXRoLnJvdW5kKE1hdGguc2luKDIgKiBNYXRoLlBJIC0gTWF0aC5QSS80ICogaSkpO1xuICAgIFxuICAgIHZhciBuSSA9IG1vZChpKzIsIDgpO1xuICAgIHZhciBuWCA9IE1hdGgucm91bmQoTWF0aC5jb3MoMiAqIE1hdGguUEkgLSBNYXRoLlBJLzQgKiBuSSkpO1xuICAgIHZhciBuWSA9IE1hdGgucm91bmQoTWF0aC5zaW4oMiAqIE1hdGguUEkgLSBNYXRoLlBJLzQgKiBuSSkpO1xuICAgIFxuICAgIHZhciBiSSA9IG1vZChpLTEsIDgpO1xuICAgIHZhciBiWCA9IE1hdGgucm91bmQoTWF0aC5jb3MoMiAqIE1hdGguUEkgLSBNYXRoLlBJLzQgKiBiSSkpO1xuICAgIHZhciBiWSA9IE1hdGgucm91bmQoTWF0aC5zaW4oMiAqIE1hdGguUEkgLSBNYXRoLlBJLzQgKiBiSSkpO1xuXG4gICAgaWYgKGlzU2lkZUZyZWUoZ3JpZCwgY29tcG9uZW50cywgcHQsIFtuWCwgblldKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICBkaXI6IG1vZChpKzIsIDgpLFxuICAgICAgICAgICAgcG9pbnQ6IHh5MnB0KHB0LngrYlgvMiwgcHQueStiWS8yKVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghbmV4dCkgbmV4dCA9IGNoZWNrQWRqKGdyaWQsIGNvbXBvbmVudHMsIHB0LCBrZXksIFtuWCwgblldLCBpLCBbeCwgeV0pO1xuICAgIGlmICghbmV4dCkge1xuICAgICAgICB2YXIgYUkgPSBtb2QoaSArIDEsIDgpO1xuICAgICAgICB2YXIgYVggPSBNYXRoLnJvdW5kKE1hdGguY29zKDIgKiBNYXRoLlBJIC0gTWF0aC5QSS80ICogYUkpKTtcbiAgICAgICAgdmFyIGFZID0gTWF0aC5yb3VuZChNYXRoLnNpbigyICogTWF0aC5QSSAtIE1hdGguUEkvNCAqIGFJKSk7XG4gICAgICAgIHZhciBwSSA9IG1vZChpIC0gMiwgOCk7XG4gICAgICAgIHZhciBwWCA9IE1hdGgucm91bmQoTWF0aC5jb3MoMiAqIE1hdGguUEkgLSBNYXRoLlBJLzQgKiBwSSkpO1xuICAgICAgICB2YXIgcFkgPSBNYXRoLnJvdW5kKE1hdGguc2luKDIgKiBNYXRoLlBJIC0gTWF0aC5QSS80ICogcEkpKTtcbiAgICAgICAgbmV4dCA9IGNoZWNrQWRqKGdyaWQsIGNvbXBvbmVudHMsIHB0LCBrZXksIFthWCwgYVldLCBwSSwgW3BYLCBwWV0pO1xuICAgIH1cbiAgICBpZiAobmV4dCkge1xuICAgICAgICBuZXh0LnBvaW50ID0geHkycHQocHQueCtiWC8yLCBwdC55K2JZLzIpO1xuICAgICAgICByZXR1cm4gbmV4dDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRMaWdodFVuaW9uOyIsInZhciBtYXBDb25zdGFudHMgPSB7XG4gICAgbWFwX3c6IDE2Mzg0LFxuICAgIG1hcF9oOiAxNjM4NCxcbiAgICBtYXBfeF9ib3VuZGFyaWVzOiBbLTg0NzUuNTg2MTczNzcsIDkzMjcuNDkxMjQ1NTldLFxuICAgIG1hcF95X2JvdW5kYXJpZXM6IFs5MDI4LjUyNDczMzMyLCAtODgzNi42MTQwNjI2Nl1cbn1cbm1hcENvbnN0YW50cy5zY2FsZSA9IE1hdGguYWJzKG1hcENvbnN0YW50cy5tYXBfeF9ib3VuZGFyaWVzWzFdIC0gbWFwQ29uc3RhbnRzLm1hcF94X2JvdW5kYXJpZXNbMF0pIC8gbWFwQ29uc3RhbnRzLm1hcF93O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENvbnN0YW50czsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBsaWdodGJsdWU6IHtcbiAgICAgICAgc3Ryb2tlQ29sb3I6IFwiIzAwN0ZGRlwiLFxuICAgICAgICBzdHJva2VPcGFjaXR5OiAxLFxuICAgICAgICBzdHJva2VXaWR0aDogMSxcbiAgICAgICAgZmlsbENvbG9yOiBcIiMwMDdGRkZcIixcbiAgICAgICAgZmlsbE9wYWNpdHk6IC40XG4gICAgfSxcbiAgICByZWQ6IHtcbiAgICAgICAgc3Ryb2tlQ29sb3I6IFwiI0ZGMDAwMFwiLFxuICAgICAgICBzdHJva2VPcGFjaXR5OiAxLFxuICAgICAgICBzdHJva2VXaWR0aDogMSxcbiAgICAgICAgZmlsbENvbG9yOiBcIiNGRjAwMDBcIixcbiAgICAgICAgZmlsbE9wYWNpdHk6IC40XG4gICAgfSxcbiAgICBncmVlbjoge1xuICAgICAgICBzdHJva2VDb2xvcjogXCIjMDBGRjAwXCIsXG4gICAgICAgIHN0cm9rZU9wYWNpdHk6IDEsXG4gICAgICAgIHN0cm9rZVdpZHRoOiAxLFxuICAgICAgICBmaWxsQ29sb3I6IFwiIzAwRkYwMFwiLFxuICAgICAgICBmaWxsT3BhY2l0eTogLjRcbiAgICB9LFxuICAgIHllbGxvdzoge1xuICAgICAgICBzdHJva2VDb2xvcjogXCIjRkZGRjAwXCIsXG4gICAgICAgIHN0cm9rZU9wYWNpdHk6IDEsXG4gICAgICAgIHN0cm9rZVdpZHRoOiAxLFxuICAgICAgICBmaWxsQ29sb3I6IFwiI0ZGRkYwMFwiLFxuICAgICAgICBmaWxsT3BhY2l0eTogLjRcbiAgICB9XG59OyIsInZhciB0cmltID0gcmVxdWlyZSgnLi90cmltJyk7XG5cbmZ1bmN0aW9uIGdldFBhcmFtZXRlckJ5TmFtZShuYW1lKSB7XG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW10vLCBcIlxcXFxbXCIpLnJlcGxhY2UoL1tcXF1dLywgXCJcXFxcXVwiKTtcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiW1xcXFw/Jl1cIiArIG5hbWUgKyBcIj0oW14mI10qKVwiKSxcbiAgICAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWMobG9jYXRpb24uc2VhcmNoKTtcbiAgICByZXR1cm4gcmVzdWx0cyA9PSBudWxsID8gXCJcIiA6IGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzFdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xufVxuXG5mdW5jdGlvbiBzZXRRdWVyeVN0cmluZyhrZXksIHZhbHVlKSB7XG4gICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgdXBkYXRlUXVlcnlTdHJpbmcoa2V5LCB2YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiBhZGRRdWVyeVN0cmluZ1ZhbHVlKGtleSwgdmFsdWUpIHtcbiAgICBjb25zb2xlLmxvZygnYWRkUXVlcnlTdHJpbmdWYWx1ZScsIGtleSwgdmFsdWUpO1xuICAgIHZhciBxcyA9IGdldFBhcmFtZXRlckJ5TmFtZShrZXkpO1xuICAgIHFzID0gdHJpbSh0cmltKHFzLCAnIDsnKSArICc7JyArIHZhbHVlLCAnIDsnKTtcbiAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCB1cGRhdGVRdWVyeVN0cmluZyhrZXksIHFzKSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVF1ZXJ5U3RyaW5nVmFsdWUoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnNvbGUubG9nKCdyZW1vdmVRdWVyeVN0cmluZ1ZhbHVlJywga2V5LCB2YWx1ZSk7XG4gICAgdmFyIHFzID0gZ2V0UGFyYW1ldGVyQnlOYW1lKGtleSk7XG4gICAgcXMgPSB0cmltKHRyaW0ocXMsICcgOycpLnJlcGxhY2UodmFsdWUsICcnKS5yZXBsYWNlKC87Oy9nLCAnJyksICcgOycpO1xuICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIHVwZGF0ZVF1ZXJ5U3RyaW5nKGtleSwgcXMgIT0gJycgPyBxcyA6IG51bGwpKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUXVlcnlTdHJpbmcoa2V5LCB2YWx1ZSwgdXJsKSB7XG4gICAgaWYgKCF1cmwpIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIHZhciByZSA9IG5ldyBSZWdFeHAoXCIoWz8mXSlcIiArIGtleSArIFwiPS4qPygmfCN8JCkoLiopXCIsIFwiZ2lcIiksXG4gICAgICAgIGhhc2g7XG5cbiAgICBpZiAocmUudGVzdCh1cmwpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHVybC5yZXBsYWNlKHJlLCAnJDEnICsga2V5ICsgXCI9XCIgKyB2YWx1ZSArICckMiQzJyk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGFzaCA9IHVybC5zcGxpdCgnIycpO1xuICAgICAgICAgICAgdXJsID0gaGFzaFswXS5yZXBsYWNlKHJlLCAnJDEkMycpLnJlcGxhY2UoLygmfFxcPykkLywgJycpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBoYXNoWzFdICE9PSAndW5kZWZpbmVkJyAmJiBoYXNoWzFdICE9PSBudWxsKVxuICAgICAgICAgICAgICAgIHVybCArPSAnIycgKyBoYXNoWzFdO1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9yID0gdXJsLmluZGV4T2YoJz8nKSAhPT0gLTEgPyAnJicgOiAnPyc7XG4gICAgICAgICAgICBoYXNoID0gdXJsLnNwbGl0KCcjJyk7XG4gICAgICAgICAgICB1cmwgPSBoYXNoWzBdICsgc2VwYXJhdG9yICsga2V5ICsgJz0nICsgdmFsdWU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGhhc2hbMV0gIT09ICd1bmRlZmluZWQnICYmIGhhc2hbMV0gIT09IG51bGwpXG4gICAgICAgICAgICAgICAgdXJsICs9ICcjJyArIGhhc2hbMV07XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZ2V0UGFyYW1ldGVyQnlOYW1lOiBnZXRQYXJhbWV0ZXJCeU5hbWUsXG4gICAgc2V0UXVlcnlTdHJpbmc6IHNldFF1ZXJ5U3RyaW5nLFxuICAgIGFkZFF1ZXJ5U3RyaW5nVmFsdWU6IGFkZFF1ZXJ5U3RyaW5nVmFsdWUsXG4gICAgcmVtb3ZlUXVlcnlTdHJpbmdWYWx1ZTogcmVtb3ZlUXVlcnlTdHJpbmdWYWx1ZSxcbiAgICB1cGRhdGVRdWVyeVN0cmluZzogdXBkYXRlUXVlcnlTdHJpbmdcbn0iLCJmdW5jdGlvbiBlc2NhcGVSZWdleChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1tcXFtcXF0oKXt9PyorXFxeJFxcXFwufFxcLV0vZywgXCJcXFxcJCZcIik7XG59XG5cbnZhciB0cmltID0gZnVuY3Rpb24gdHJpbShzdHIsIGNoYXJhY3RlcnMsIGZsYWdzKSB7XG4gICAgZmxhZ3MgPSBmbGFncyB8fCBcImdcIjtcbiAgICBpZiAodHlwZW9mIHN0ciAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgY2hhcmFjdGVycyAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZmxhZ3MgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImFyZ3VtZW50IG11c3QgYmUgc3RyaW5nXCIpO1xuICAgIH1cblxuICAgIGlmICghL15bZ2ldKiQvLnRlc3QoZmxhZ3MpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGZsYWdzIHN1cHBsaWVkICdcIiArIGZsYWdzLm1hdGNoKG5ldyBSZWdFeHAoXCJbXmdpXSpcIikpICsgXCInXCIpO1xuICAgIH1cblxuICAgIGNoYXJhY3RlcnMgPSBlc2NhcGVSZWdleChjaGFyYWN0ZXJzKTtcblxuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKFwiXltcIiArIGNoYXJhY3RlcnMgKyBcIl0rfFtcIiArIGNoYXJhY3RlcnMgKyBcIl0rJFwiLCBmbGFncyksICcnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbTsiLCJ2YXIgUE5HID0gcmVxdWlyZSgncG5nLWpzJyk7XG5cbmZ1bmN0aW9uIEltYWdlSGFuZGxlcihpbWFnZVBhdGgpIHtcbiAgICB0aGlzLmltYWdlUGF0aCA9IGltYWdlUGF0aDtcbiAgICBzZWxmLmNhbnZhcyA9IG51bGw7XG4gICAgc2VsZi5wbmcgPSBudWxsO1xufVxuSW1hZ2VIYW5kbGVyLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciB0MSA9IERhdGUubm93KCk7XG4gICAgc2VsZi5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIFBORy5sb2FkKHRoaXMuaW1hZ2VQYXRoLCBzZWxmLmNhbnZhcywgZnVuY3Rpb24ocG5nKSB7XG4gICAgICAgIHNlbGYucG5nID0gcG5nO1xuICAgICAgICBzZWxmLmN0eCA9IHNlbGYuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9KTtcbn1cbkltYWdlSGFuZGxlci5wcm90b3R5cGUuc2NhbiA9IGZ1bmN0aW9uIChvZmZzZXQsIHdpZHRoLCBoZWlnaHQsIHBpeGVsSGFuZGxlciwgZ3JpZCkge1xuICAgIHZhciBpbWdEYXRhID0gdGhpcy5jdHguZ2V0SW1hZ2VEYXRhKG9mZnNldCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgdmFyIGRhdGEgPSBpbWdEYXRhLmRhdGE7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgICAgdmFyIHIgPSBkYXRhW2ldO1xuICAgICAgICB2YXIgZyA9IGRhdGFbaSsxXTtcbiAgICAgICAgdmFyIGIgPSBkYXRhW2krMl07XG4gICAgICAgIHZhciBhbHBoYSA9IGRhdGFbaSszXTtcbiAgICAgICAgdmFyIHggPSBNYXRoLmZsb29yKChpLzQpICUgd2lkdGgpO1xuICAgICAgICB2YXIgeSA9IE1hdGguZmxvb3IoKGkvNCkgLyBoZWlnaHQpO1xuICAgICAgICBwaXhlbEhhbmRsZXIoeCwgeSwgW3IsIGcsIGJdLCBncmlkKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW1hZ2VIYW5kbGVyOyIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS40LjBcblxuLypcbiMgTUlUIExJQ0VOU0VcbiMgQ29weXJpZ2h0IChjKSAyMDExIERldm9uIEdvdmV0dFxuIyBcbiMgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIFxuIyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgXG4jIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIFxuIyBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgXG4jIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4jIFxuIyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIFxuIyBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4jIFxuIyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBcbiMgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIFxuIyBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBcbiMgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBcbiMgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG52YXIgRmxhdGVTdHJlYW0gPSByZXF1aXJlKCcuL3psaWInKTtcblxuICB2YXIgUE5HO1xuXG4gIFBORyA9IChmdW5jdGlvbigpIHtcbiAgICBQTkcubG9hZCA9IGZ1bmN0aW9uKHVybCwgY2FudmFzLCBjYWxsYmFjaykge1xuICAgICAgdmFyIHhocixcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xuICAgICAgaWYgKHR5cGVvZiBjYW52YXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYW52YXM7XG4gICAgICB9XG4gICAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3Q7XG4gICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRhdGEsIHBuZztcbiAgICAgICAgZGF0YSA9IG5ldyBVaW50OEFycmF5KHhoci5yZXNwb25zZSB8fCB4aHIubW96UmVzcG9uc2VBcnJheUJ1ZmZlcik7XG4gICAgICAgIHBuZyA9IG5ldyBQTkcoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgKGNhbnZhcyAhPSBudWxsID8gY2FudmFzLmdldENvbnRleHQgOiB2b2lkIDApID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcG5nLnJlbmRlcihjYW52YXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIiA/IGNhbGxiYWNrKHBuZykgOiB2b2lkIDA7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHhoci5zZW5kKG51bGwpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBQTkcoZGF0YSkge1xuICAgICAgdmFyIGNodW5rU2l6ZSwgY29sb3JzLCBkZWxheURlbiwgZGVsYXlOdW0sIGZyYW1lLCBpLCBpbmRleCwga2V5LCBzZWN0aW9uLCBzaG9ydCwgdGV4dCwgX2ksIF9qLCBfcmVmO1xuICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgIHRoaXMucG9zID0gODtcbiAgICAgIHRoaXMucGFsZXR0ZSA9IFtdO1xuICAgICAgdGhpcy5pbWdEYXRhID0gW107XG4gICAgICB0aGlzLnRyYW5zcGFyZW5jeSA9IHt9O1xuICAgICAgdGhpcy50ZXh0ID0ge307XG4gICAgICBmcmFtZSA9IG51bGw7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjaHVua1NpemUgPSB0aGlzLnJlYWRVSW50MzIoKTtcbiAgICAgICAgc2VjdGlvbiA9ICgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIF9pLCBfcmVzdWx0cztcbiAgICAgICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgICAgIGZvciAoaSA9IF9pID0gMDsgX2kgPCA0OyBpID0gKytfaSkge1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMuZGF0YVt0aGlzLnBvcysrXSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgICAgIH0pLmNhbGwodGhpcykpLmpvaW4oJycpO1xuICAgICAgICBzd2l0Y2ggKHNlY3Rpb24pIHtcbiAgICAgICAgICBjYXNlICdJSERSJzpcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLnJlYWRVSW50MzIoKTtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5yZWFkVUludDMyKCk7XG4gICAgICAgICAgICB0aGlzLmJpdHMgPSB0aGlzLmRhdGFbdGhpcy5wb3MrK107XG4gICAgICAgICAgICB0aGlzLmNvbG9yVHlwZSA9IHRoaXMuZGF0YVt0aGlzLnBvcysrXTtcbiAgICAgICAgICAgIHRoaXMuY29tcHJlc3Npb25NZXRob2QgPSB0aGlzLmRhdGFbdGhpcy5wb3MrK107XG4gICAgICAgICAgICB0aGlzLmZpbHRlck1ldGhvZCA9IHRoaXMuZGF0YVt0aGlzLnBvcysrXTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJsYWNlTWV0aG9kID0gdGhpcy5kYXRhW3RoaXMucG9zKytdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnUExURSc6XG4gICAgICAgICAgICB0aGlzLnBhbGV0dGUgPSB0aGlzLnJlYWQoY2h1bmtTaXplKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0lEQVQnOlxuICAgICAgICAgICAgaWYgKHNlY3Rpb24gPT09ICdmZEFUJykge1xuICAgICAgICAgICAgICB0aGlzLnBvcyArPSA0O1xuICAgICAgICAgICAgICBjaHVua1NpemUgLT0gNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEgPSAoZnJhbWUgIT0gbnVsbCA/IGZyYW1lLmRhdGEgOiB2b2lkIDApIHx8IHRoaXMuaW1nRGF0YTtcbiAgICAgICAgICAgIGZvciAoaSA9IF9pID0gMDsgMCA8PSBjaHVua1NpemUgPyBfaSA8IGNodW5rU2l6ZSA6IF9pID4gY2h1bmtTaXplOyBpID0gMCA8PSBjaHVua1NpemUgPyArK19pIDogLS1faSkge1xuICAgICAgICAgICAgICBkYXRhLnB1c2godGhpcy5kYXRhW3RoaXMucG9zKytdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3RSTlMnOlxuICAgICAgICAgICAgdGhpcy50cmFuc3BhcmVuY3kgPSB7fTtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5jb2xvclR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwYXJlbmN5LmluZGV4ZWQgPSB0aGlzLnJlYWQoY2h1bmtTaXplKTtcbiAgICAgICAgICAgICAgICBzaG9ydCA9IDI1NSAtIHRoaXMudHJhbnNwYXJlbmN5LmluZGV4ZWQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmIChzaG9ydCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIGZvciAoaSA9IF9qID0gMDsgMCA8PSBzaG9ydCA/IF9qIDwgc2hvcnQgOiBfaiA+IHNob3J0OyBpID0gMCA8PSBzaG9ydCA/ICsrX2ogOiAtLV9qKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwYXJlbmN5LmluZGV4ZWQucHVzaCgyNTUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwYXJlbmN5LmdyYXlzY2FsZSA9IHRoaXMucmVhZChjaHVua1NpemUpWzBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc3BhcmVuY3kucmdiID0gdGhpcy5yZWFkKGNodW5rU2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd0RVh0JzpcbiAgICAgICAgICAgIHRleHQgPSB0aGlzLnJlYWQoY2h1bmtTaXplKTtcbiAgICAgICAgICAgIGluZGV4ID0gdGV4dC5pbmRleE9mKDApO1xuICAgICAgICAgICAga2V5ID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIHRleHQuc2xpY2UoMCwgaW5kZXgpKTtcbiAgICAgICAgICAgIHRoaXMudGV4dFtrZXldID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIHRleHQuc2xpY2UoaW5kZXggKyAxKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdJRU5EJzpcbiAgICAgICAgICAgIGlmIChmcmFtZSkge1xuICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5mcmFtZXMucHVzaChmcmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbG9ycyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmNvbG9yVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5oYXNBbHBoYUNoYW5uZWwgPSAoX3JlZiA9IHRoaXMuY29sb3JUeXBlKSA9PT0gNCB8fCBfcmVmID09PSA2O1xuICAgICAgICAgICAgY29sb3JzID0gdGhpcy5jb2xvcnMgKyAodGhpcy5oYXNBbHBoYUNoYW5uZWwgPyAxIDogMCk7XG4gICAgICAgICAgICB0aGlzLnBpeGVsQml0bGVuZ3RoID0gdGhpcy5iaXRzICogY29sb3JzO1xuICAgICAgICAgICAgdGhpcy5jb2xvclNwYWNlID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY29sb3JzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgcmV0dXJuICdEZXZpY2VHcmF5JztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJ0RldmljZVJHQic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmltZ0RhdGEgPSBuZXcgVWludDhBcnJheSh0aGlzLmltZ0RhdGEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLnBvcyArPSBjaHVua1NpemU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3MgKz0gNDtcbiAgICAgICAgaWYgKHRoaXMucG9zID4gdGhpcy5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluY29tcGxldGUgb3IgY29ycnVwdCBQTkcgZmlsZVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFBORy5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICB2YXIgaSwgX2ksIF9yZXN1bHRzO1xuICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IF9pID0gMDsgMCA8PSBieXRlcyA/IF9pIDwgYnl0ZXMgOiBfaSA+IGJ5dGVzOyBpID0gMCA8PSBieXRlcyA/ICsrX2kgOiAtLV9pKSB7XG4gICAgICAgIF9yZXN1bHRzLnB1c2godGhpcy5kYXRhW3RoaXMucG9zKytdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICB9O1xuXG4gICAgUE5HLnByb3RvdHlwZS5yZWFkVUludDMyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYjEsIGIyLCBiMywgYjQ7XG4gICAgICBiMSA9IHRoaXMuZGF0YVt0aGlzLnBvcysrXSA8PCAyNDtcbiAgICAgIGIyID0gdGhpcy5kYXRhW3RoaXMucG9zKytdIDw8IDE2O1xuICAgICAgYjMgPSB0aGlzLmRhdGFbdGhpcy5wb3MrK10gPDwgODtcbiAgICAgIGI0ID0gdGhpcy5kYXRhW3RoaXMucG9zKytdO1xuICAgICAgcmV0dXJuIGIxIHwgYjIgfCBiMyB8IGI0O1xuICAgIH07XG5cbiAgICBQTkcucHJvdG90eXBlLnJlYWRVSW50MTYgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBiMSwgYjI7XG4gICAgICBiMSA9IHRoaXMuZGF0YVt0aGlzLnBvcysrXSA8PCA4O1xuICAgICAgYjIgPSB0aGlzLmRhdGFbdGhpcy5wb3MrK107XG4gICAgICByZXR1cm4gYjEgfCBiMjtcbiAgICB9O1xuXG4gICAgUE5HLnByb3RvdHlwZS5kZWNvZGVQaXhlbHMgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB2YXIgYnl0ZSwgYywgY29sLCBpLCBsZWZ0LCBsZW5ndGgsIHAsIHBhLCBwYWV0aCwgcGIsIHBjLCBwaXhlbEJ5dGVzLCBwaXhlbHMsIHBvcywgcm93LCBzY2FubGluZUxlbmd0aCwgdXBwZXIsIHVwcGVyTGVmdCwgX2ksIF9qLCBfaywgX2wsIF9tO1xuICAgICAgaWYgKGRhdGEgPT0gbnVsbCkge1xuICAgICAgICBkYXRhID0gdGhpcy5pbWdEYXRhO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSgwKTtcbiAgICAgIH1cbiAgICAgIGRhdGEgPSBuZXcgRmxhdGVTdHJlYW0oZGF0YSk7XG4gICAgICBkYXRhID0gZGF0YS5nZXRCeXRlcygpO1xuICAgICAgcGl4ZWxCeXRlcyA9IHRoaXMucGl4ZWxCaXRsZW5ndGggLyA4O1xuICAgICAgc2NhbmxpbmVMZW5ndGggPSBwaXhlbEJ5dGVzICogdGhpcy53aWR0aDtcbiAgICAgIHBpeGVscyA9IG5ldyBVaW50OEFycmF5KHNjYW5saW5lTGVuZ3RoICogdGhpcy5oZWlnaHQpO1xuICAgICAgbGVuZ3RoID0gZGF0YS5sZW5ndGg7XG4gICAgICByb3cgPSAwO1xuICAgICAgcG9zID0gMDtcbiAgICAgIGMgPSAwO1xuICAgICAgd2hpbGUgKHBvcyA8IGxlbmd0aCkge1xuICAgICAgICBzd2l0Y2ggKGRhdGFbcG9zKytdKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgZm9yIChpID0gX2kgPSAwOyBfaSA8IHNjYW5saW5lTGVuZ3RoOyBpID0gX2kgKz0gMSkge1xuICAgICAgICAgICAgICBwaXhlbHNbYysrXSA9IGRhdGFbcG9zKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgZm9yIChpID0gX2ogPSAwOyBfaiA8IHNjYW5saW5lTGVuZ3RoOyBpID0gX2ogKz0gMSkge1xuICAgICAgICAgICAgICBieXRlID0gZGF0YVtwb3MrK107XG4gICAgICAgICAgICAgIGxlZnQgPSBpIDwgcGl4ZWxCeXRlcyA/IDAgOiBwaXhlbHNbYyAtIHBpeGVsQnl0ZXNdO1xuICAgICAgICAgICAgICBwaXhlbHNbYysrXSA9IChieXRlICsgbGVmdCkgJSAyNTY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBmb3IgKGkgPSBfayA9IDA7IF9rIDwgc2NhbmxpbmVMZW5ndGg7IGkgPSBfayArPSAxKSB7XG4gICAgICAgICAgICAgIGJ5dGUgPSBkYXRhW3BvcysrXTtcbiAgICAgICAgICAgICAgY29sID0gKGkgLSAoaSAlIHBpeGVsQnl0ZXMpKSAvIHBpeGVsQnl0ZXM7XG4gICAgICAgICAgICAgIHVwcGVyID0gcm93ICYmIHBpeGVsc1socm93IC0gMSkgKiBzY2FubGluZUxlbmd0aCArIGNvbCAqIHBpeGVsQnl0ZXMgKyAoaSAlIHBpeGVsQnl0ZXMpXTtcbiAgICAgICAgICAgICAgcGl4ZWxzW2MrK10gPSAodXBwZXIgKyBieXRlKSAlIDI1NjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGZvciAoaSA9IF9sID0gMDsgX2wgPCBzY2FubGluZUxlbmd0aDsgaSA9IF9sICs9IDEpIHtcbiAgICAgICAgICAgICAgYnl0ZSA9IGRhdGFbcG9zKytdO1xuICAgICAgICAgICAgICBjb2wgPSAoaSAtIChpICUgcGl4ZWxCeXRlcykpIC8gcGl4ZWxCeXRlcztcbiAgICAgICAgICAgICAgbGVmdCA9IGkgPCBwaXhlbEJ5dGVzID8gMCA6IHBpeGVsc1tjIC0gcGl4ZWxCeXRlc107XG4gICAgICAgICAgICAgIHVwcGVyID0gcm93ICYmIHBpeGVsc1socm93IC0gMSkgKiBzY2FubGluZUxlbmd0aCArIGNvbCAqIHBpeGVsQnl0ZXMgKyAoaSAlIHBpeGVsQnl0ZXMpXTtcbiAgICAgICAgICAgICAgcGl4ZWxzW2MrK10gPSAoYnl0ZSArIE1hdGguZmxvb3IoKGxlZnQgKyB1cHBlcikgLyAyKSkgJSAyNTY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBmb3IgKGkgPSBfbSA9IDA7IF9tIDwgc2NhbmxpbmVMZW5ndGg7IGkgPSBfbSArPSAxKSB7XG4gICAgICAgICAgICAgIGJ5dGUgPSBkYXRhW3BvcysrXTtcbiAgICAgICAgICAgICAgY29sID0gKGkgLSAoaSAlIHBpeGVsQnl0ZXMpKSAvIHBpeGVsQnl0ZXM7XG4gICAgICAgICAgICAgIGxlZnQgPSBpIDwgcGl4ZWxCeXRlcyA/IDAgOiBwaXhlbHNbYyAtIHBpeGVsQnl0ZXNdO1xuICAgICAgICAgICAgICBpZiAocm93ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdXBwZXIgPSB1cHBlckxlZnQgPSAwO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVwcGVyID0gcGl4ZWxzWyhyb3cgLSAxKSAqIHNjYW5saW5lTGVuZ3RoICsgY29sICogcGl4ZWxCeXRlcyArIChpICUgcGl4ZWxCeXRlcyldO1xuICAgICAgICAgICAgICAgIHVwcGVyTGVmdCA9IGNvbCAmJiBwaXhlbHNbKHJvdyAtIDEpICogc2NhbmxpbmVMZW5ndGggKyAoY29sIC0gMSkgKiBwaXhlbEJ5dGVzICsgKGkgJSBwaXhlbEJ5dGVzKV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcCA9IGxlZnQgKyB1cHBlciAtIHVwcGVyTGVmdDtcbiAgICAgICAgICAgICAgcGEgPSBNYXRoLmFicyhwIC0gbGVmdCk7XG4gICAgICAgICAgICAgIHBiID0gTWF0aC5hYnMocCAtIHVwcGVyKTtcbiAgICAgICAgICAgICAgcGMgPSBNYXRoLmFicyhwIC0gdXBwZXJMZWZ0KTtcbiAgICAgICAgICAgICAgaWYgKHBhIDw9IHBiICYmIHBhIDw9IHBjKSB7XG4gICAgICAgICAgICAgICAgcGFldGggPSBsZWZ0O1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBiIDw9IHBjKSB7XG4gICAgICAgICAgICAgICAgcGFldGggPSB1cHBlcjtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYWV0aCA9IHVwcGVyTGVmdDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwaXhlbHNbYysrXSA9IChieXRlICsgcGFldGgpICUgMjU2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZmlsdGVyIGFsZ29yaXRobTogXCIgKyBkYXRhW3BvcyAtIDFdKTtcbiAgICAgICAgfVxuICAgICAgICByb3crKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBwaXhlbHM7XG4gICAgfTtcblxuICAgIFBORy5wcm90b3R5cGUuZGVjb2RlUGFsZXR0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGMsIGksIGxlbmd0aCwgcGFsZXR0ZSwgcG9zLCByZXQsIHRyYW5zcGFyZW5jeSwgX2ksIF9yZWYsIF9yZWYxO1xuICAgICAgcGFsZXR0ZSA9IHRoaXMucGFsZXR0ZTtcbiAgICAgIHRyYW5zcGFyZW5jeSA9IHRoaXMudHJhbnNwYXJlbmN5LmluZGV4ZWQgfHwgW107XG4gICAgICByZXQgPSBuZXcgVWludDhBcnJheSgodHJhbnNwYXJlbmN5Lmxlbmd0aCB8fCAwKSArIHBhbGV0dGUubGVuZ3RoKTtcbiAgICAgIHBvcyA9IDA7XG4gICAgICBsZW5ndGggPSBwYWxldHRlLmxlbmd0aDtcbiAgICAgIGMgPSAwO1xuICAgICAgZm9yIChpID0gX2kgPSAwLCBfcmVmID0gcGFsZXR0ZS5sZW5ndGg7IF9pIDwgX3JlZjsgaSA9IF9pICs9IDMpIHtcbiAgICAgICAgcmV0W3BvcysrXSA9IHBhbGV0dGVbaV07XG4gICAgICAgIHJldFtwb3MrK10gPSBwYWxldHRlW2kgKyAxXTtcbiAgICAgICAgcmV0W3BvcysrXSA9IHBhbGV0dGVbaSArIDJdO1xuICAgICAgICByZXRbcG9zKytdID0gKF9yZWYxID0gdHJhbnNwYXJlbmN5W2MrK10pICE9IG51bGwgPyBfcmVmMSA6IDI1NTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcblxuICAgIFBORy5wcm90b3R5cGUuY29weVRvSW1hZ2VEYXRhID0gZnVuY3Rpb24oaW1hZ2VEYXRhLCBwaXhlbHMpIHtcbiAgICAgIHZhciBhbHBoYSwgY29sb3JzLCBkYXRhLCBpLCBpbnB1dCwgaiwgaywgbGVuZ3RoLCBwYWxldHRlLCB2LCBfcmVmO1xuICAgICAgY29sb3JzID0gdGhpcy5jb2xvcnM7XG4gICAgICBwYWxldHRlID0gbnVsbDtcbiAgICAgIGFscGhhID0gdGhpcy5oYXNBbHBoYUNoYW5uZWw7XG4gICAgICBpZiAodGhpcy5wYWxldHRlLmxlbmd0aCkge1xuICAgICAgICBwYWxldHRlID0gKF9yZWYgPSB0aGlzLl9kZWNvZGVkUGFsZXR0ZSkgIT0gbnVsbCA/IF9yZWYgOiB0aGlzLl9kZWNvZGVkUGFsZXR0ZSA9IHRoaXMuZGVjb2RlUGFsZXR0ZSgpO1xuICAgICAgICBjb2xvcnMgPSA0O1xuICAgICAgICBhbHBoYSA9IHRydWU7XG4gICAgICB9XG4gICAgICBkYXRhID0gaW1hZ2VEYXRhLmRhdGEgfHwgaW1hZ2VEYXRhO1xuICAgICAgbGVuZ3RoID0gZGF0YS5sZW5ndGg7XG4gICAgICBpbnB1dCA9IHBhbGV0dGUgfHwgcGl4ZWxzO1xuICAgICAgaSA9IGogPSAwO1xuICAgICAgaWYgKGNvbG9ycyA9PT0gMSkge1xuICAgICAgICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgICAgICAgIGsgPSBwYWxldHRlID8gcGl4ZWxzW2kgLyA0XSAqIDQgOiBqO1xuICAgICAgICAgIHYgPSBpbnB1dFtrKytdO1xuICAgICAgICAgIGRhdGFbaSsrXSA9IHY7XG4gICAgICAgICAgZGF0YVtpKytdID0gdjtcbiAgICAgICAgICBkYXRhW2krK10gPSB2O1xuICAgICAgICAgIGRhdGFbaSsrXSA9IGFscGhhID8gaW5wdXRbaysrXSA6IDI1NTtcbiAgICAgICAgICBqID0gaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgICAgICBrID0gcGFsZXR0ZSA/IHBpeGVsc1tpIC8gNF0gKiA0IDogajtcbiAgICAgICAgICBkYXRhW2krK10gPSBpbnB1dFtrKytdO1xuICAgICAgICAgIGRhdGFbaSsrXSA9IGlucHV0W2srK107XG4gICAgICAgICAgZGF0YVtpKytdID0gaW5wdXRbaysrXTtcbiAgICAgICAgICBkYXRhW2krK10gPSBhbHBoYSA/IGlucHV0W2srK10gOiAyNTU7XG4gICAgICAgICAgaiA9IGs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgUE5HLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZXQ7XG4gICAgICByZXQgPSBuZXcgVWludDhBcnJheSh0aGlzLndpZHRoICogdGhpcy5oZWlnaHQgKiA0KTtcbiAgICAgIHRoaXMuY29weVRvSW1hZ2VEYXRhKHJldCwgdGhpcy5kZWNvZGVQaXhlbHMoKSk7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH07XG5cbiAgICBQTkcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKGNhbnZhcykge1xuICAgICAgdmFyIGN0eCwgZGF0YTtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgZGF0YSA9IGN0eC5jcmVhdGVJbWFnZURhdGEodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgdGhpcy5jb3B5VG9JbWFnZURhdGEoZGF0YSwgdGhpcy5kZWNvZGVQaXhlbHMoKSk7XG4gICAgICByZXR1cm4gY3R4LnB1dEltYWdlRGF0YShkYXRhLCAwLCAwKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFBORztcblxuICB9KSgpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gUE5HOyIsIi8qXG4gKiBFeHRyYWN0ZWQgZnJvbSBwZGYuanNcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZWFzZ2FsL3BkZi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb25cbiAqXG4gKiBDb250cmlidXRvcnM6IEFuZHJlYXMgR2FsIDxnYWxAbW96aWxsYS5jb20+XG4gKiAgICAgICAgICAgICAgIENocmlzIEcgSm9uZXMgPGNqb25lc0Btb3ppbGxhLmNvbT5cbiAqICAgICAgICAgICAgICAgU2hhb24gQmFybWFuIDxzaGFvbi5iYXJtYW5AZ21haWwuY29tPlxuICogICAgICAgICAgICAgICBWaXZpZW4gTmljb2xhcyA8MjFAdmluZ3RldHVuLm9yZz5cbiAqICAgICAgICAgICAgICAgSnVzdGluIEQnQXJjYW5nZWxvIDxqdXN0aW5kYXJjQGdtYWlsLmNvbT5cbiAqICAgICAgICAgICAgICAgWXVyeSBEZWxlbmRpa1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxudmFyIERlY29kZVN0cmVhbSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wb3MgPSAwO1xuICAgIHRoaXMuYnVmZmVyTGVuZ3RoID0gMDtcbiAgICB0aGlzLmVvZiA9IGZhbHNlO1xuICAgIHRoaXMuYnVmZmVyID0gbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IHtcbiAgICBlbnN1cmVCdWZmZXI6IGZ1bmN0aW9uIGRlY29kZXN0cmVhbV9lbnN1cmVCdWZmZXIocmVxdWVzdGVkKSB7XG4gICAgICB2YXIgYnVmZmVyID0gdGhpcy5idWZmZXI7XG4gICAgICB2YXIgY3VycmVudCA9IGJ1ZmZlciA/IGJ1ZmZlci5ieXRlTGVuZ3RoIDogMDtcbiAgICAgIGlmIChyZXF1ZXN0ZWQgPCBjdXJyZW50KVxuICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgICAgdmFyIHNpemUgPSA1MTI7XG4gICAgICB3aGlsZSAoc2l6ZSA8IHJlcXVlc3RlZClcbiAgICAgICAgc2l6ZSA8PD0gMTtcbiAgICAgIHZhciBidWZmZXIyID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnQ7ICsraSlcbiAgICAgICAgYnVmZmVyMltpXSA9IGJ1ZmZlcltpXTtcbiAgICAgIHJldHVybiB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjI7XG4gICAgfSxcbiAgICBnZXRCeXRlOiBmdW5jdGlvbiBkZWNvZGVzdHJlYW1fZ2V0Qnl0ZSgpIHtcbiAgICAgIHZhciBwb3MgPSB0aGlzLnBvcztcbiAgICAgIHdoaWxlICh0aGlzLmJ1ZmZlckxlbmd0aCA8PSBwb3MpIHtcbiAgICAgICAgaWYgKHRoaXMuZW9mKVxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB0aGlzLnJlYWRCbG9jaygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyW3RoaXMucG9zKytdO1xuICAgIH0sXG4gICAgZ2V0Qnl0ZXM6IGZ1bmN0aW9uIGRlY29kZXN0cmVhbV9nZXRCeXRlcyhsZW5ndGgpIHtcbiAgICAgIHZhciBwb3MgPSB0aGlzLnBvcztcblxuICAgICAgaWYgKGxlbmd0aCkge1xuICAgICAgICB0aGlzLmVuc3VyZUJ1ZmZlcihwb3MgKyBsZW5ndGgpO1xuICAgICAgICB2YXIgZW5kID0gcG9zICsgbGVuZ3RoO1xuXG4gICAgICAgIHdoaWxlICghdGhpcy5lb2YgJiYgdGhpcy5idWZmZXJMZW5ndGggPCBlbmQpXG4gICAgICAgICAgdGhpcy5yZWFkQmxvY2soKTtcblxuICAgICAgICB2YXIgYnVmRW5kID0gdGhpcy5idWZmZXJMZW5ndGg7XG4gICAgICAgIGlmIChlbmQgPiBidWZFbmQpXG4gICAgICAgICAgZW5kID0gYnVmRW5kO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUgKCF0aGlzLmVvZilcbiAgICAgICAgICB0aGlzLnJlYWRCbG9jaygpO1xuXG4gICAgICAgIHZhciBlbmQgPSB0aGlzLmJ1ZmZlckxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wb3MgPSBlbmQ7XG4gICAgICByZXR1cm4gdGhpcy5idWZmZXIuc3ViYXJyYXkocG9zLCBlbmQpO1xuICAgIH0sXG4gICAgbG9va0NoYXI6IGZ1bmN0aW9uIGRlY29kZXN0cmVhbV9sb29rQ2hhcigpIHtcbiAgICAgIHZhciBwb3MgPSB0aGlzLnBvcztcbiAgICAgIHdoaWxlICh0aGlzLmJ1ZmZlckxlbmd0aCA8PSBwb3MpIHtcbiAgICAgICAgaWYgKHRoaXMuZW9mKVxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB0aGlzLnJlYWRCbG9jaygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy5idWZmZXJbdGhpcy5wb3NdKTtcbiAgICB9LFxuICAgIGdldENoYXI6IGZ1bmN0aW9uIGRlY29kZXN0cmVhbV9nZXRDaGFyKCkge1xuICAgICAgdmFyIHBvcyA9IHRoaXMucG9zO1xuICAgICAgd2hpbGUgKHRoaXMuYnVmZmVyTGVuZ3RoIDw9IHBvcykge1xuICAgICAgICBpZiAodGhpcy5lb2YpXG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHRoaXMucmVhZEJsb2NrKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLmJ1ZmZlclt0aGlzLnBvcysrXSk7XG4gICAgfSxcbiAgICBtYWtlU3ViU3RyZWFtOiBmdW5jdGlvbiBkZWNvZGVzdHJlYW1fbWFrZVN1YnN0cmVhbShzdGFydCwgbGVuZ3RoLCBkaWN0KSB7XG4gICAgICB2YXIgZW5kID0gc3RhcnQgKyBsZW5ndGg7XG4gICAgICB3aGlsZSAodGhpcy5idWZmZXJMZW5ndGggPD0gZW5kICYmICF0aGlzLmVvZilcbiAgICAgICAgdGhpcy5yZWFkQmxvY2soKTtcbiAgICAgIHJldHVybiBuZXcgU3RyZWFtKHRoaXMuYnVmZmVyLCBzdGFydCwgbGVuZ3RoLCBkaWN0KTtcbiAgICB9LFxuICAgIHNraXA6IGZ1bmN0aW9uIGRlY29kZXN0cmVhbV9za2lwKG4pIHtcbiAgICAgIGlmICghbilcbiAgICAgICAgbiA9IDE7XG4gICAgICB0aGlzLnBvcyArPSBuO1xuICAgIH0sXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIGRlY29kZXN0cmVhbV9yZXNldCgpIHtcbiAgICAgIHRoaXMucG9zID0gMDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufSkoKTtcblxudmFyIEZsYXRlU3RyZWFtID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgY29kZUxlbkNvZGVNYXAgPSBuZXcgVWludDMyQXJyYXkoW1xuICAgIDE2LCAxNywgMTgsIDAsIDgsIDcsIDksIDYsIDEwLCA1LCAxMSwgNCwgMTIsIDMsIDEzLCAyLCAxNCwgMSwgMTVcbiAgXSk7XG5cbiAgdmFyIGxlbmd0aERlY29kZSA9IG5ldyBVaW50MzJBcnJheShbXG4gICAgMHgwMDAwMywgMHgwMDAwNCwgMHgwMDAwNSwgMHgwMDAwNiwgMHgwMDAwNywgMHgwMDAwOCwgMHgwMDAwOSwgMHgwMDAwYSxcbiAgICAweDEwMDBiLCAweDEwMDBkLCAweDEwMDBmLCAweDEwMDExLCAweDIwMDEzLCAweDIwMDE3LCAweDIwMDFiLCAweDIwMDFmLFxuICAgIDB4MzAwMjMsIDB4MzAwMmIsIDB4MzAwMzMsIDB4MzAwM2IsIDB4NDAwNDMsIDB4NDAwNTMsIDB4NDAwNjMsIDB4NDAwNzMsXG4gICAgMHg1MDA4MywgMHg1MDBhMywgMHg1MDBjMywgMHg1MDBlMywgMHgwMDEwMiwgMHgwMDEwMiwgMHgwMDEwMlxuICBdKTtcblxuICB2YXIgZGlzdERlY29kZSA9IG5ldyBVaW50MzJBcnJheShbXG4gICAgMHgwMDAwMSwgMHgwMDAwMiwgMHgwMDAwMywgMHgwMDAwNCwgMHgxMDAwNSwgMHgxMDAwNywgMHgyMDAwOSwgMHgyMDAwZCxcbiAgICAweDMwMDExLCAweDMwMDE5LCAweDQwMDIxLCAweDQwMDMxLCAweDUwMDQxLCAweDUwMDYxLCAweDYwMDgxLCAweDYwMGMxLFxuICAgIDB4NzAxMDEsIDB4NzAxODEsIDB4ODAyMDEsIDB4ODAzMDEsIDB4OTA0MDEsIDB4OTA2MDEsIDB4YTA4MDEsIDB4YTBjMDEsXG4gICAgMHhiMTAwMSwgMHhiMTgwMSwgMHhjMjAwMSwgMHhjMzAwMSwgMHhkNDAwMSwgMHhkNjAwMVxuICBdKTtcblxuICB2YXIgZml4ZWRMaXRDb2RlVGFiID0gW25ldyBVaW50MzJBcnJheShbXG4gICAgMHg3MDEwMCwgMHg4MDA1MCwgMHg4MDAxMCwgMHg4MDExOCwgMHg3MDExMCwgMHg4MDA3MCwgMHg4MDAzMCwgMHg5MDBjMCxcbiAgICAweDcwMTA4LCAweDgwMDYwLCAweDgwMDIwLCAweDkwMGEwLCAweDgwMDAwLCAweDgwMDgwLCAweDgwMDQwLCAweDkwMGUwLFxuICAgIDB4NzAxMDQsIDB4ODAwNTgsIDB4ODAwMTgsIDB4OTAwOTAsIDB4NzAxMTQsIDB4ODAwNzgsIDB4ODAwMzgsIDB4OTAwZDAsXG4gICAgMHg3MDEwYywgMHg4MDA2OCwgMHg4MDAyOCwgMHg5MDBiMCwgMHg4MDAwOCwgMHg4MDA4OCwgMHg4MDA0OCwgMHg5MDBmMCxcbiAgICAweDcwMTAyLCAweDgwMDU0LCAweDgwMDE0LCAweDgwMTFjLCAweDcwMTEyLCAweDgwMDc0LCAweDgwMDM0LCAweDkwMGM4LFxuICAgIDB4NzAxMGEsIDB4ODAwNjQsIDB4ODAwMjQsIDB4OTAwYTgsIDB4ODAwMDQsIDB4ODAwODQsIDB4ODAwNDQsIDB4OTAwZTgsXG4gICAgMHg3MDEwNiwgMHg4MDA1YywgMHg4MDAxYywgMHg5MDA5OCwgMHg3MDExNiwgMHg4MDA3YywgMHg4MDAzYywgMHg5MDBkOCxcbiAgICAweDcwMTBlLCAweDgwMDZjLCAweDgwMDJjLCAweDkwMGI4LCAweDgwMDBjLCAweDgwMDhjLCAweDgwMDRjLCAweDkwMGY4LFxuICAgIDB4NzAxMDEsIDB4ODAwNTIsIDB4ODAwMTIsIDB4ODAxMWEsIDB4NzAxMTEsIDB4ODAwNzIsIDB4ODAwMzIsIDB4OTAwYzQsXG4gICAgMHg3MDEwOSwgMHg4MDA2MiwgMHg4MDAyMiwgMHg5MDBhNCwgMHg4MDAwMiwgMHg4MDA4MiwgMHg4MDA0MiwgMHg5MDBlNCxcbiAgICAweDcwMTA1LCAweDgwMDVhLCAweDgwMDFhLCAweDkwMDk0LCAweDcwMTE1LCAweDgwMDdhLCAweDgwMDNhLCAweDkwMGQ0LFxuICAgIDB4NzAxMGQsIDB4ODAwNmEsIDB4ODAwMmEsIDB4OTAwYjQsIDB4ODAwMGEsIDB4ODAwOGEsIDB4ODAwNGEsIDB4OTAwZjQsXG4gICAgMHg3MDEwMywgMHg4MDA1NiwgMHg4MDAxNiwgMHg4MDExZSwgMHg3MDExMywgMHg4MDA3NiwgMHg4MDAzNiwgMHg5MDBjYyxcbiAgICAweDcwMTBiLCAweDgwMDY2LCAweDgwMDI2LCAweDkwMGFjLCAweDgwMDA2LCAweDgwMDg2LCAweDgwMDQ2LCAweDkwMGVjLFxuICAgIDB4NzAxMDcsIDB4ODAwNWUsIDB4ODAwMWUsIDB4OTAwOWMsIDB4NzAxMTcsIDB4ODAwN2UsIDB4ODAwM2UsIDB4OTAwZGMsXG4gICAgMHg3MDEwZiwgMHg4MDA2ZSwgMHg4MDAyZSwgMHg5MDBiYywgMHg4MDAwZSwgMHg4MDA4ZSwgMHg4MDA0ZSwgMHg5MDBmYyxcbiAgICAweDcwMTAwLCAweDgwMDUxLCAweDgwMDExLCAweDgwMTE5LCAweDcwMTEwLCAweDgwMDcxLCAweDgwMDMxLCAweDkwMGMyLFxuICAgIDB4NzAxMDgsIDB4ODAwNjEsIDB4ODAwMjEsIDB4OTAwYTIsIDB4ODAwMDEsIDB4ODAwODEsIDB4ODAwNDEsIDB4OTAwZTIsXG4gICAgMHg3MDEwNCwgMHg4MDA1OSwgMHg4MDAxOSwgMHg5MDA5MiwgMHg3MDExNCwgMHg4MDA3OSwgMHg4MDAzOSwgMHg5MDBkMixcbiAgICAweDcwMTBjLCAweDgwMDY5LCAweDgwMDI5LCAweDkwMGIyLCAweDgwMDA5LCAweDgwMDg5LCAweDgwMDQ5LCAweDkwMGYyLFxuICAgIDB4NzAxMDIsIDB4ODAwNTUsIDB4ODAwMTUsIDB4ODAxMWQsIDB4NzAxMTIsIDB4ODAwNzUsIDB4ODAwMzUsIDB4OTAwY2EsXG4gICAgMHg3MDEwYSwgMHg4MDA2NSwgMHg4MDAyNSwgMHg5MDBhYSwgMHg4MDAwNSwgMHg4MDA4NSwgMHg4MDA0NSwgMHg5MDBlYSxcbiAgICAweDcwMTA2LCAweDgwMDVkLCAweDgwMDFkLCAweDkwMDlhLCAweDcwMTE2LCAweDgwMDdkLCAweDgwMDNkLCAweDkwMGRhLFxuICAgIDB4NzAxMGUsIDB4ODAwNmQsIDB4ODAwMmQsIDB4OTAwYmEsIDB4ODAwMGQsIDB4ODAwOGQsIDB4ODAwNGQsIDB4OTAwZmEsXG4gICAgMHg3MDEwMSwgMHg4MDA1MywgMHg4MDAxMywgMHg4MDExYiwgMHg3MDExMSwgMHg4MDA3MywgMHg4MDAzMywgMHg5MDBjNixcbiAgICAweDcwMTA5LCAweDgwMDYzLCAweDgwMDIzLCAweDkwMGE2LCAweDgwMDAzLCAweDgwMDgzLCAweDgwMDQzLCAweDkwMGU2LFxuICAgIDB4NzAxMDUsIDB4ODAwNWIsIDB4ODAwMWIsIDB4OTAwOTYsIDB4NzAxMTUsIDB4ODAwN2IsIDB4ODAwM2IsIDB4OTAwZDYsXG4gICAgMHg3MDEwZCwgMHg4MDA2YiwgMHg4MDAyYiwgMHg5MDBiNiwgMHg4MDAwYiwgMHg4MDA4YiwgMHg4MDA0YiwgMHg5MDBmNixcbiAgICAweDcwMTAzLCAweDgwMDU3LCAweDgwMDE3LCAweDgwMTFmLCAweDcwMTEzLCAweDgwMDc3LCAweDgwMDM3LCAweDkwMGNlLFxuICAgIDB4NzAxMGIsIDB4ODAwNjcsIDB4ODAwMjcsIDB4OTAwYWUsIDB4ODAwMDcsIDB4ODAwODcsIDB4ODAwNDcsIDB4OTAwZWUsXG4gICAgMHg3MDEwNywgMHg4MDA1ZiwgMHg4MDAxZiwgMHg5MDA5ZSwgMHg3MDExNywgMHg4MDA3ZiwgMHg4MDAzZiwgMHg5MDBkZSxcbiAgICAweDcwMTBmLCAweDgwMDZmLCAweDgwMDJmLCAweDkwMGJlLCAweDgwMDBmLCAweDgwMDhmLCAweDgwMDRmLCAweDkwMGZlLFxuICAgIDB4NzAxMDAsIDB4ODAwNTAsIDB4ODAwMTAsIDB4ODAxMTgsIDB4NzAxMTAsIDB4ODAwNzAsIDB4ODAwMzAsIDB4OTAwYzEsXG4gICAgMHg3MDEwOCwgMHg4MDA2MCwgMHg4MDAyMCwgMHg5MDBhMSwgMHg4MDAwMCwgMHg4MDA4MCwgMHg4MDA0MCwgMHg5MDBlMSxcbiAgICAweDcwMTA0LCAweDgwMDU4LCAweDgwMDE4LCAweDkwMDkxLCAweDcwMTE0LCAweDgwMDc4LCAweDgwMDM4LCAweDkwMGQxLFxuICAgIDB4NzAxMGMsIDB4ODAwNjgsIDB4ODAwMjgsIDB4OTAwYjEsIDB4ODAwMDgsIDB4ODAwODgsIDB4ODAwNDgsIDB4OTAwZjEsXG4gICAgMHg3MDEwMiwgMHg4MDA1NCwgMHg4MDAxNCwgMHg4MDExYywgMHg3MDExMiwgMHg4MDA3NCwgMHg4MDAzNCwgMHg5MDBjOSxcbiAgICAweDcwMTBhLCAweDgwMDY0LCAweDgwMDI0LCAweDkwMGE5LCAweDgwMDA0LCAweDgwMDg0LCAweDgwMDQ0LCAweDkwMGU5LFxuICAgIDB4NzAxMDYsIDB4ODAwNWMsIDB4ODAwMWMsIDB4OTAwOTksIDB4NzAxMTYsIDB4ODAwN2MsIDB4ODAwM2MsIDB4OTAwZDksXG4gICAgMHg3MDEwZSwgMHg4MDA2YywgMHg4MDAyYywgMHg5MDBiOSwgMHg4MDAwYywgMHg4MDA4YywgMHg4MDA0YywgMHg5MDBmOSxcbiAgICAweDcwMTAxLCAweDgwMDUyLCAweDgwMDEyLCAweDgwMTFhLCAweDcwMTExLCAweDgwMDcyLCAweDgwMDMyLCAweDkwMGM1LFxuICAgIDB4NzAxMDksIDB4ODAwNjIsIDB4ODAwMjIsIDB4OTAwYTUsIDB4ODAwMDIsIDB4ODAwODIsIDB4ODAwNDIsIDB4OTAwZTUsXG4gICAgMHg3MDEwNSwgMHg4MDA1YSwgMHg4MDAxYSwgMHg5MDA5NSwgMHg3MDExNSwgMHg4MDA3YSwgMHg4MDAzYSwgMHg5MDBkNSxcbiAgICAweDcwMTBkLCAweDgwMDZhLCAweDgwMDJhLCAweDkwMGI1LCAweDgwMDBhLCAweDgwMDhhLCAweDgwMDRhLCAweDkwMGY1LFxuICAgIDB4NzAxMDMsIDB4ODAwNTYsIDB4ODAwMTYsIDB4ODAxMWUsIDB4NzAxMTMsIDB4ODAwNzYsIDB4ODAwMzYsIDB4OTAwY2QsXG4gICAgMHg3MDEwYiwgMHg4MDA2NiwgMHg4MDAyNiwgMHg5MDBhZCwgMHg4MDAwNiwgMHg4MDA4NiwgMHg4MDA0NiwgMHg5MDBlZCxcbiAgICAweDcwMTA3LCAweDgwMDVlLCAweDgwMDFlLCAweDkwMDlkLCAweDcwMTE3LCAweDgwMDdlLCAweDgwMDNlLCAweDkwMGRkLFxuICAgIDB4NzAxMGYsIDB4ODAwNmUsIDB4ODAwMmUsIDB4OTAwYmQsIDB4ODAwMGUsIDB4ODAwOGUsIDB4ODAwNGUsIDB4OTAwZmQsXG4gICAgMHg3MDEwMCwgMHg4MDA1MSwgMHg4MDAxMSwgMHg4MDExOSwgMHg3MDExMCwgMHg4MDA3MSwgMHg4MDAzMSwgMHg5MDBjMyxcbiAgICAweDcwMTA4LCAweDgwMDYxLCAweDgwMDIxLCAweDkwMGEzLCAweDgwMDAxLCAweDgwMDgxLCAweDgwMDQxLCAweDkwMGUzLFxuICAgIDB4NzAxMDQsIDB4ODAwNTksIDB4ODAwMTksIDB4OTAwOTMsIDB4NzAxMTQsIDB4ODAwNzksIDB4ODAwMzksIDB4OTAwZDMsXG4gICAgMHg3MDEwYywgMHg4MDA2OSwgMHg4MDAyOSwgMHg5MDBiMywgMHg4MDAwOSwgMHg4MDA4OSwgMHg4MDA0OSwgMHg5MDBmMyxcbiAgICAweDcwMTAyLCAweDgwMDU1LCAweDgwMDE1LCAweDgwMTFkLCAweDcwMTEyLCAweDgwMDc1LCAweDgwMDM1LCAweDkwMGNiLFxuICAgIDB4NzAxMGEsIDB4ODAwNjUsIDB4ODAwMjUsIDB4OTAwYWIsIDB4ODAwMDUsIDB4ODAwODUsIDB4ODAwNDUsIDB4OTAwZWIsXG4gICAgMHg3MDEwNiwgMHg4MDA1ZCwgMHg4MDAxZCwgMHg5MDA5YiwgMHg3MDExNiwgMHg4MDA3ZCwgMHg4MDAzZCwgMHg5MDBkYixcbiAgICAweDcwMTBlLCAweDgwMDZkLCAweDgwMDJkLCAweDkwMGJiLCAweDgwMDBkLCAweDgwMDhkLCAweDgwMDRkLCAweDkwMGZiLFxuICAgIDB4NzAxMDEsIDB4ODAwNTMsIDB4ODAwMTMsIDB4ODAxMWIsIDB4NzAxMTEsIDB4ODAwNzMsIDB4ODAwMzMsIDB4OTAwYzcsXG4gICAgMHg3MDEwOSwgMHg4MDA2MywgMHg4MDAyMywgMHg5MDBhNywgMHg4MDAwMywgMHg4MDA4MywgMHg4MDA0MywgMHg5MDBlNyxcbiAgICAweDcwMTA1LCAweDgwMDViLCAweDgwMDFiLCAweDkwMDk3LCAweDcwMTE1LCAweDgwMDdiLCAweDgwMDNiLCAweDkwMGQ3LFxuICAgIDB4NzAxMGQsIDB4ODAwNmIsIDB4ODAwMmIsIDB4OTAwYjcsIDB4ODAwMGIsIDB4ODAwOGIsIDB4ODAwNGIsIDB4OTAwZjcsXG4gICAgMHg3MDEwMywgMHg4MDA1NywgMHg4MDAxNywgMHg4MDExZiwgMHg3MDExMywgMHg4MDA3NywgMHg4MDAzNywgMHg5MDBjZixcbiAgICAweDcwMTBiLCAweDgwMDY3LCAweDgwMDI3LCAweDkwMGFmLCAweDgwMDA3LCAweDgwMDg3LCAweDgwMDQ3LCAweDkwMGVmLFxuICAgIDB4NzAxMDcsIDB4ODAwNWYsIDB4ODAwMWYsIDB4OTAwOWYsIDB4NzAxMTcsIDB4ODAwN2YsIDB4ODAwM2YsIDB4OTAwZGYsXG4gICAgMHg3MDEwZiwgMHg4MDA2ZiwgMHg4MDAyZiwgMHg5MDBiZiwgMHg4MDAwZiwgMHg4MDA4ZiwgMHg4MDA0ZiwgMHg5MDBmZlxuICBdKSwgOV07XG5cbiAgdmFyIGZpeGVkRGlzdENvZGVUYWIgPSBbbmV3IFVpbnQzMkFycmF5KFtcbiAgICAweDUwMDAwLCAweDUwMDEwLCAweDUwMDA4LCAweDUwMDE4LCAweDUwMDA0LCAweDUwMDE0LCAweDUwMDBjLCAweDUwMDFjLFxuICAgIDB4NTAwMDIsIDB4NTAwMTIsIDB4NTAwMGEsIDB4NTAwMWEsIDB4NTAwMDYsIDB4NTAwMTYsIDB4NTAwMGUsIDB4MDAwMDAsXG4gICAgMHg1MDAwMSwgMHg1MDAxMSwgMHg1MDAwOSwgMHg1MDAxOSwgMHg1MDAwNSwgMHg1MDAxNSwgMHg1MDAwZCwgMHg1MDAxZCxcbiAgICAweDUwMDAzLCAweDUwMDEzLCAweDUwMDBiLCAweDUwMDFiLCAweDUwMDA3LCAweDUwMDE3LCAweDUwMDBmLCAweDAwMDAwXG4gIF0pLCA1XTtcbiAgXG4gIGZ1bmN0aW9uIGVycm9yKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29uc3RydWN0b3IoYnl0ZXMpIHtcbiAgICAvL3ZhciBieXRlcyA9IHN0cmVhbS5nZXRCeXRlcygpO1xuICAgIHZhciBieXRlc1BvcyA9IDA7XG5cbiAgICB2YXIgY21mID0gYnl0ZXNbYnl0ZXNQb3MrK107XG4gICAgdmFyIGZsZyA9IGJ5dGVzW2J5dGVzUG9zKytdO1xuICAgIGlmIChjbWYgPT0gLTEgfHwgZmxnID09IC0xKVxuICAgICAgZXJyb3IoJ0ludmFsaWQgaGVhZGVyIGluIGZsYXRlIHN0cmVhbScpO1xuICAgIGlmICgoY21mICYgMHgwZikgIT0gMHgwOClcbiAgICAgIGVycm9yKCdVbmtub3duIGNvbXByZXNzaW9uIG1ldGhvZCBpbiBmbGF0ZSBzdHJlYW0nKTtcbiAgICBpZiAoKCgoY21mIDw8IDgpICsgZmxnKSAlIDMxKSAhPSAwKVxuICAgICAgZXJyb3IoJ0JhZCBGQ0hFQ0sgaW4gZmxhdGUgc3RyZWFtJyk7XG4gICAgaWYgKGZsZyAmIDB4MjApXG4gICAgICBlcnJvcignRkRJQ1QgYml0IHNldCBpbiBmbGF0ZSBzdHJlYW0nKTtcblxuICAgIHRoaXMuYnl0ZXMgPSBieXRlcztcbiAgICB0aGlzLmJ5dGVzUG9zID0gYnl0ZXNQb3M7XG5cbiAgICB0aGlzLmNvZGVTaXplID0gMDtcbiAgICB0aGlzLmNvZGVCdWYgPSAwO1xuXG4gICAgRGVjb2RlU3RyZWFtLmNhbGwodGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERlY29kZVN0cmVhbS5wcm90b3R5cGUpO1xuXG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZS5nZXRCaXRzID0gZnVuY3Rpb24oYml0cykge1xuICAgIHZhciBjb2RlU2l6ZSA9IHRoaXMuY29kZVNpemU7XG4gICAgdmFyIGNvZGVCdWYgPSB0aGlzLmNvZGVCdWY7XG4gICAgdmFyIGJ5dGVzID0gdGhpcy5ieXRlcztcbiAgICB2YXIgYnl0ZXNQb3MgPSB0aGlzLmJ5dGVzUG9zO1xuXG4gICAgdmFyIGI7XG4gICAgd2hpbGUgKGNvZGVTaXplIDwgYml0cykge1xuICAgICAgaWYgKHR5cGVvZiAoYiA9IGJ5dGVzW2J5dGVzUG9zKytdKSA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgZXJyb3IoJ0JhZCBlbmNvZGluZyBpbiBmbGF0ZSBzdHJlYW0nKTtcbiAgICAgIGNvZGVCdWYgfD0gYiA8PCBjb2RlU2l6ZTtcbiAgICAgIGNvZGVTaXplICs9IDg7XG4gICAgfVxuICAgIGIgPSBjb2RlQnVmICYgKCgxIDw8IGJpdHMpIC0gMSk7XG4gICAgdGhpcy5jb2RlQnVmID0gY29kZUJ1ZiA+PiBiaXRzO1xuICAgIHRoaXMuY29kZVNpemUgPSBjb2RlU2l6ZSAtPSBiaXRzO1xuICAgIHRoaXMuYnl0ZXNQb3MgPSBieXRlc1BvcztcbiAgICByZXR1cm4gYjtcbiAgfTtcblxuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuZ2V0Q29kZSA9IGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgdmFyIGNvZGVzID0gdGFibGVbMF07XG4gICAgdmFyIG1heExlbiA9IHRhYmxlWzFdO1xuICAgIHZhciBjb2RlU2l6ZSA9IHRoaXMuY29kZVNpemU7XG4gICAgdmFyIGNvZGVCdWYgPSB0aGlzLmNvZGVCdWY7XG4gICAgdmFyIGJ5dGVzID0gdGhpcy5ieXRlcztcbiAgICB2YXIgYnl0ZXNQb3MgPSB0aGlzLmJ5dGVzUG9zO1xuXG4gICAgd2hpbGUgKGNvZGVTaXplIDwgbWF4TGVuKSB7XG4gICAgICB2YXIgYjtcbiAgICAgIGlmICh0eXBlb2YgKGIgPSBieXRlc1tieXRlc1BvcysrXSkgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIGVycm9yKCdCYWQgZW5jb2RpbmcgaW4gZmxhdGUgc3RyZWFtJyk7XG4gICAgICBjb2RlQnVmIHw9IChiIDw8IGNvZGVTaXplKTtcbiAgICAgIGNvZGVTaXplICs9IDg7XG4gICAgfVxuICAgIHZhciBjb2RlID0gY29kZXNbY29kZUJ1ZiAmICgoMSA8PCBtYXhMZW4pIC0gMSldO1xuICAgIHZhciBjb2RlTGVuID0gY29kZSA+PiAxNjtcbiAgICB2YXIgY29kZVZhbCA9IGNvZGUgJiAweGZmZmY7XG4gICAgaWYgKGNvZGVTaXplID09IDAgfHwgY29kZVNpemUgPCBjb2RlTGVuIHx8IGNvZGVMZW4gPT0gMClcbiAgICAgIGVycm9yKCdCYWQgZW5jb2RpbmcgaW4gZmxhdGUgc3RyZWFtJyk7XG4gICAgdGhpcy5jb2RlQnVmID0gKGNvZGVCdWYgPj4gY29kZUxlbik7XG4gICAgdGhpcy5jb2RlU2l6ZSA9IChjb2RlU2l6ZSAtIGNvZGVMZW4pO1xuICAgIHRoaXMuYnl0ZXNQb3MgPSBieXRlc1BvcztcbiAgICByZXR1cm4gY29kZVZhbDtcbiAgfTtcblxuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuZ2VuZXJhdGVIdWZmbWFuVGFibGUgPSBmdW5jdGlvbihsZW5ndGhzKSB7XG4gICAgdmFyIG4gPSBsZW5ndGhzLmxlbmd0aDtcblxuICAgIC8vIGZpbmQgbWF4IGNvZGUgbGVuZ3RoXG4gICAgdmFyIG1heExlbiA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChsZW5ndGhzW2ldID4gbWF4TGVuKVxuICAgICAgICBtYXhMZW4gPSBsZW5ndGhzW2ldO1xuICAgIH1cblxuICAgIC8vIGJ1aWxkIHRoZSB0YWJsZVxuICAgIHZhciBzaXplID0gMSA8PCBtYXhMZW47XG4gICAgdmFyIGNvZGVzID0gbmV3IFVpbnQzMkFycmF5KHNpemUpO1xuICAgIGZvciAodmFyIGxlbiA9IDEsIGNvZGUgPSAwLCBza2lwID0gMjtcbiAgICAgICAgIGxlbiA8PSBtYXhMZW47XG4gICAgICAgICArK2xlbiwgY29kZSA8PD0gMSwgc2tpcCA8PD0gMSkge1xuICAgICAgZm9yICh2YXIgdmFsID0gMDsgdmFsIDwgbjsgKyt2YWwpIHtcbiAgICAgICAgaWYgKGxlbmd0aHNbdmFsXSA9PSBsZW4pIHtcbiAgICAgICAgICAvLyBiaXQtcmV2ZXJzZSB0aGUgY29kZVxuICAgICAgICAgIHZhciBjb2RlMiA9IDA7XG4gICAgICAgICAgdmFyIHQgPSBjb2RlO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIGNvZGUyID0gKGNvZGUyIDw8IDEpIHwgKHQgJiAxKTtcbiAgICAgICAgICAgIHQgPj49IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gZmlsbCB0aGUgdGFibGUgZW50cmllc1xuICAgICAgICAgIGZvciAodmFyIGkgPSBjb2RlMjsgaSA8IHNpemU7IGkgKz0gc2tpcClcbiAgICAgICAgICAgIGNvZGVzW2ldID0gKGxlbiA8PCAxNikgfCB2YWw7XG5cbiAgICAgICAgICArK2NvZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW2NvZGVzLCBtYXhMZW5dO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZS5yZWFkQmxvY2sgPSBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiByZXBlYXQoc3RyZWFtLCBhcnJheSwgbGVuLCBvZmZzZXQsIHdoYXQpIHtcbiAgICAgIHZhciByZXBlYXQgPSBzdHJlYW0uZ2V0Qml0cyhsZW4pICsgb2Zmc2V0O1xuICAgICAgd2hpbGUgKHJlcGVhdC0tID4gMClcbiAgICAgICAgYXJyYXlbaSsrXSA9IHdoYXQ7XG4gICAgfVxuXG4gICAgLy8gcmVhZCBibG9jayBoZWFkZXJcbiAgICB2YXIgaGRyID0gdGhpcy5nZXRCaXRzKDMpO1xuICAgIGlmIChoZHIgJiAxKVxuICAgICAgdGhpcy5lb2YgPSB0cnVlO1xuICAgIGhkciA+Pj0gMTtcblxuICAgIGlmIChoZHIgPT0gMCkgeyAvLyB1bmNvbXByZXNzZWQgYmxvY2tcbiAgICAgIHZhciBieXRlcyA9IHRoaXMuYnl0ZXM7XG4gICAgICB2YXIgYnl0ZXNQb3MgPSB0aGlzLmJ5dGVzUG9zO1xuICAgICAgdmFyIGI7XG5cbiAgICAgIGlmICh0eXBlb2YgKGIgPSBieXRlc1tieXRlc1BvcysrXSkgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIGVycm9yKCdCYWQgYmxvY2sgaGVhZGVyIGluIGZsYXRlIHN0cmVhbScpO1xuICAgICAgdmFyIGJsb2NrTGVuID0gYjtcbiAgICAgIGlmICh0eXBlb2YgKGIgPSBieXRlc1tieXRlc1BvcysrXSkgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIGVycm9yKCdCYWQgYmxvY2sgaGVhZGVyIGluIGZsYXRlIHN0cmVhbScpO1xuICAgICAgYmxvY2tMZW4gfD0gKGIgPDwgOCk7XG4gICAgICBpZiAodHlwZW9mIChiID0gYnl0ZXNbYnl0ZXNQb3MrK10pID09ICd1bmRlZmluZWQnKVxuICAgICAgICBlcnJvcignQmFkIGJsb2NrIGhlYWRlciBpbiBmbGF0ZSBzdHJlYW0nKTtcbiAgICAgIHZhciBjaGVjayA9IGI7XG4gICAgICBpZiAodHlwZW9mIChiID0gYnl0ZXNbYnl0ZXNQb3MrK10pID09ICd1bmRlZmluZWQnKVxuICAgICAgICBlcnJvcignQmFkIGJsb2NrIGhlYWRlciBpbiBmbGF0ZSBzdHJlYW0nKTtcbiAgICAgIGNoZWNrIHw9IChiIDw8IDgpO1xuICAgICAgaWYgKGNoZWNrICE9ICh+YmxvY2tMZW4gJiAweGZmZmYpKVxuICAgICAgICBlcnJvcignQmFkIHVuY29tcHJlc3NlZCBibG9jayBsZW5ndGggaW4gZmxhdGUgc3RyZWFtJyk7XG5cbiAgICAgIHRoaXMuY29kZUJ1ZiA9IDA7XG4gICAgICB0aGlzLmNvZGVTaXplID0gMDtcblxuICAgICAgdmFyIGJ1ZmZlckxlbmd0aCA9IHRoaXMuYnVmZmVyTGVuZ3RoO1xuICAgICAgdmFyIGJ1ZmZlciA9IHRoaXMuZW5zdXJlQnVmZmVyKGJ1ZmZlckxlbmd0aCArIGJsb2NrTGVuKTtcbiAgICAgIHZhciBlbmQgPSBidWZmZXJMZW5ndGggKyBibG9ja0xlbjtcbiAgICAgIHRoaXMuYnVmZmVyTGVuZ3RoID0gZW5kO1xuICAgICAgZm9yICh2YXIgbiA9IGJ1ZmZlckxlbmd0aDsgbiA8IGVuZDsgKytuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGIgPSBieXRlc1tieXRlc1BvcysrXSkgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLmVvZiA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgYnVmZmVyW25dID0gYjtcbiAgICAgIH1cbiAgICAgIHRoaXMuYnl0ZXNQb3MgPSBieXRlc1BvcztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGl0Q29kZVRhYmxlO1xuICAgIHZhciBkaXN0Q29kZVRhYmxlO1xuICAgIGlmIChoZHIgPT0gMSkgeyAvLyBjb21wcmVzc2VkIGJsb2NrLCBmaXhlZCBjb2Rlc1xuICAgICAgbGl0Q29kZVRhYmxlID0gZml4ZWRMaXRDb2RlVGFiO1xuICAgICAgZGlzdENvZGVUYWJsZSA9IGZpeGVkRGlzdENvZGVUYWI7XG4gICAgfSBlbHNlIGlmIChoZHIgPT0gMikgeyAvLyBjb21wcmVzc2VkIGJsb2NrLCBkeW5hbWljIGNvZGVzXG4gICAgICB2YXIgbnVtTGl0Q29kZXMgPSB0aGlzLmdldEJpdHMoNSkgKyAyNTc7XG4gICAgICB2YXIgbnVtRGlzdENvZGVzID0gdGhpcy5nZXRCaXRzKDUpICsgMTtcbiAgICAgIHZhciBudW1Db2RlTGVuQ29kZXMgPSB0aGlzLmdldEJpdHMoNCkgKyA0O1xuXG4gICAgICAvLyBidWlsZCB0aGUgY29kZSBsZW5ndGhzIGNvZGUgdGFibGVcbiAgICAgIHZhciBjb2RlTGVuQ29kZUxlbmd0aHMgPSBBcnJheShjb2RlTGVuQ29kZU1hcC5sZW5ndGgpO1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCBudW1Db2RlTGVuQ29kZXMpXG4gICAgICAgIGNvZGVMZW5Db2RlTGVuZ3Roc1tjb2RlTGVuQ29kZU1hcFtpKytdXSA9IHRoaXMuZ2V0Qml0cygzKTtcbiAgICAgIHZhciBjb2RlTGVuQ29kZVRhYiA9IHRoaXMuZ2VuZXJhdGVIdWZmbWFuVGFibGUoY29kZUxlbkNvZGVMZW5ndGhzKTtcblxuICAgICAgLy8gYnVpbGQgdGhlIGxpdGVyYWwgYW5kIGRpc3RhbmNlIGNvZGUgdGFibGVzXG4gICAgICB2YXIgbGVuID0gMDtcbiAgICAgIHZhciBpID0gMDtcbiAgICAgIHZhciBjb2RlcyA9IG51bUxpdENvZGVzICsgbnVtRGlzdENvZGVzO1xuICAgICAgdmFyIGNvZGVMZW5ndGhzID0gbmV3IEFycmF5KGNvZGVzKTtcbiAgICAgIHdoaWxlIChpIDwgY29kZXMpIHtcbiAgICAgICAgdmFyIGNvZGUgPSB0aGlzLmdldENvZGUoY29kZUxlbkNvZGVUYWIpO1xuICAgICAgICBpZiAoY29kZSA9PSAxNikge1xuICAgICAgICAgIHJlcGVhdCh0aGlzLCBjb2RlTGVuZ3RocywgMiwgMywgbGVuKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlID09IDE3KSB7XG4gICAgICAgICAgcmVwZWF0KHRoaXMsIGNvZGVMZW5ndGhzLCAzLCAzLCBsZW4gPSAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlID09IDE4KSB7XG4gICAgICAgICAgcmVwZWF0KHRoaXMsIGNvZGVMZW5ndGhzLCA3LCAxMSwgbGVuID0gMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29kZUxlbmd0aHNbaSsrXSA9IGxlbiA9IGNvZGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGl0Q29kZVRhYmxlID1cbiAgICAgICAgdGhpcy5nZW5lcmF0ZUh1ZmZtYW5UYWJsZShjb2RlTGVuZ3Rocy5zbGljZSgwLCBudW1MaXRDb2RlcykpO1xuICAgICAgZGlzdENvZGVUYWJsZSA9XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVIdWZmbWFuVGFibGUoY29kZUxlbmd0aHMuc2xpY2UobnVtTGl0Q29kZXMsIGNvZGVzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yKCdVbmtub3duIGJsb2NrIHR5cGUgaW4gZmxhdGUgc3RyZWFtJyk7XG4gICAgfVxuXG4gICAgdmFyIGJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xuICAgIHZhciBsaW1pdCA9IGJ1ZmZlciA/IGJ1ZmZlci5sZW5ndGggOiAwO1xuICAgIHZhciBwb3MgPSB0aGlzLmJ1ZmZlckxlbmd0aDtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIGNvZGUxID0gdGhpcy5nZXRDb2RlKGxpdENvZGVUYWJsZSk7XG4gICAgICBpZiAoY29kZTEgPCAyNTYpIHtcbiAgICAgICAgaWYgKHBvcyArIDEgPj0gbGltaXQpIHtcbiAgICAgICAgICBidWZmZXIgPSB0aGlzLmVuc3VyZUJ1ZmZlcihwb3MgKyAxKTtcbiAgICAgICAgICBsaW1pdCA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgYnVmZmVyW3BvcysrXSA9IGNvZGUxO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2RlMSA9PSAyNTYpIHtcbiAgICAgICAgdGhpcy5idWZmZXJMZW5ndGggPSBwb3M7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvZGUxIC09IDI1NztcbiAgICAgIGNvZGUxID0gbGVuZ3RoRGVjb2RlW2NvZGUxXTtcbiAgICAgIHZhciBjb2RlMiA9IGNvZGUxID4+IDE2O1xuICAgICAgaWYgKGNvZGUyID4gMClcbiAgICAgICAgY29kZTIgPSB0aGlzLmdldEJpdHMoY29kZTIpO1xuICAgICAgdmFyIGxlbiA9IChjb2RlMSAmIDB4ZmZmZikgKyBjb2RlMjtcbiAgICAgIGNvZGUxID0gdGhpcy5nZXRDb2RlKGRpc3RDb2RlVGFibGUpO1xuICAgICAgY29kZTEgPSBkaXN0RGVjb2RlW2NvZGUxXTtcbiAgICAgIGNvZGUyID0gY29kZTEgPj4gMTY7XG4gICAgICBpZiAoY29kZTIgPiAwKVxuICAgICAgICBjb2RlMiA9IHRoaXMuZ2V0Qml0cyhjb2RlMik7XG4gICAgICB2YXIgZGlzdCA9IChjb2RlMSAmIDB4ZmZmZikgKyBjb2RlMjtcbiAgICAgIGlmIChwb3MgKyBsZW4gPj0gbGltaXQpIHtcbiAgICAgICAgYnVmZmVyID0gdGhpcy5lbnN1cmVCdWZmZXIocG9zICsgbGVuKTtcbiAgICAgICAgbGltaXQgPSBidWZmZXIubGVuZ3RoO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBsZW47ICsraywgKytwb3MpXG4gICAgICAgIGJ1ZmZlcltwb3NdID0gYnVmZmVyW3BvcyAtIGRpc3RdO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gY29uc3RydWN0b3I7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZsYXRlU3RyZWFtOyIsIi8qXG5cdFRoaXMgaXMgcm90LmpzLCB0aGUgUk9ndWVsaWtlIFRvb2xraXQgaW4gSmF2YVNjcmlwdC5cblx0VmVyc2lvbiAwLjZ+ZGV2LCBnZW5lcmF0ZWQgb24gVHVlIE1hciAxNyAxNjoxNjozMSBDRVQgMjAxNS5cbiovXG4vKipcbiAqIEBuYW1lc3BhY2UgVG9wLWxldmVsIFJPVCBuYW1lc3BhY2VcbiAqL1xudmFyIFJPVCA9IHtcblx0LyoqIERpcmVjdGlvbmFsIGNvbnN0YW50cy4gT3JkZXJpbmcgaXMgaW1wb3J0YW50ISAqL1xuXHRESVJTOiB7XG5cdFx0XCI0XCI6IFtcblx0XHRcdFsgMCwgLTFdLFxuXHRcdFx0WyAxLCAgMF0sXG5cdFx0XHRbIDAsICAxXSxcblx0XHRcdFstMSwgIDBdXG5cdFx0XSxcblx0XHRcIjhcIjogW1xuXHRcdFx0WyAwLCAtMV0sXG5cdFx0XHRbIDEsIC0xXSxcblx0XHRcdFsgMSwgIDBdLFxuXHRcdFx0WyAxLCAgMV0sXG5cdFx0XHRbIDAsICAxXSxcblx0XHRcdFstMSwgIDFdLFxuXHRcdFx0Wy0xLCAgMF0sXG5cdFx0XHRbLTEsIC0xXVxuXHRcdF0sXG5cdFx0XCI2XCI6IFtcblx0XHRcdFstMSwgLTFdLFxuXHRcdFx0WyAxLCAtMV0sXG5cdFx0XHRbIDIsICAwXSxcblx0XHRcdFsgMSwgIDFdLFxuXHRcdFx0Wy0xLCAgMV0sXG5cdFx0XHRbLTIsICAwXVxuXHRcdF1cblx0fVxufTtcbi8qKlxuICogQWx3YXlzIHBvc2l0aXZlIG1vZHVsdXNcbiAqIEBwYXJhbSB7aW50fSBuIE1vZHVsdXNcbiAqIEByZXR1cm5zIHtpbnR9IHRoaXMgbW9kdWxvIG5cbiAqL1xuTnVtYmVyLnByb3RvdHlwZS5tb2QgPSBmdW5jdGlvbihuKSB7XG5cdHJldHVybiAoKHRoaXMlbikrbiklbjtcbn1cbmlmICghT2JqZWN0LmNyZWF0ZSkgeyAgXG5cdC8qKlxuXHQgKiBFUzUgT2JqZWN0LmNyZWF0ZVxuXHQgKi9cblx0T2JqZWN0LmNyZWF0ZSA9IGZ1bmN0aW9uKG8pIHsgIFxuXHRcdHZhciB0bXAgPSBmdW5jdGlvbigpIHt9O1xuXHRcdHRtcC5wcm90b3R5cGUgPSBvO1xuXHRcdHJldHVybiBuZXcgdG1wKCk7XG5cdH07ICBcbn0gIFxuLyoqXG4gKiBTZXRzIHByb3RvdHlwZSBvZiB0aGlzIGZ1bmN0aW9uIHRvIGFuIGluc3RhbmNlIG9mIHBhcmVudCBmdW5jdGlvblxuICogQHBhcmFtIHtmdW5jdGlvbn0gcGFyZW50XG4gKi9cbkZ1bmN0aW9uLnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtcblx0dGhpcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHBhcmVudC5wcm90b3R5cGUpO1xuXHR0aGlzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHRoaXM7XG5cdHJldHVybiB0aGlzO1xufVxuaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xuXHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID1cblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXG5cdFx0fHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZVxuXHRcdHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcblx0XHR8fCB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZVxuXHRcdHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVxuXHRcdHx8IGZ1bmN0aW9uKGNiKSB7IHJldHVybiBzZXRUaW1lb3V0KGNiLCAxMDAwLzYwKTsgfTtcblxuXHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPVxuXHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZVxuXHRcdHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZVxuXHRcdHx8IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZVxuXHRcdHx8IHdpbmRvdy5vQ2FuY2VsQW5pbWF0aW9uRnJhbWVcblx0XHR8fCB3aW5kb3cubXNDYW5jZWxBbmltYXRpb25GcmFtZVxuXHRcdHx8IGZ1bmN0aW9uKGlkKSB7IHJldHVybiBjbGVhclRpbWVvdXQoaWQpOyB9O1xufVxuLyoqXG4gKiBAY2xhc3MgQWJzdHJhY3QgRk9WIGFsZ29yaXRobVxuICogQHBhcmFtIHtmdW5jdGlvbn0gbGlnaHRQYXNzZXNDYWxsYmFjayBEb2VzIHRoZSBsaWdodCBwYXNzIHRocm91Z2ggeCx5P1xuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtpbnR9IFtvcHRpb25zLnRvcG9sb2d5PThdIDQvNi84XG4gKi9cblJPVC5GT1YgPSBmdW5jdGlvbihsaWdodFBhc3Nlc0NhbGxiYWNrLCBvcHRpb25zKSB7XG5cdHRoaXMuX2xpZ2h0UGFzc2VzID0gbGlnaHRQYXNzZXNDYWxsYmFjaztcblx0dGhpcy5fb3B0aW9ucyA9IHtcblx0XHR0b3BvbG9neTogOFxuXHR9XG5cdGZvciAodmFyIHAgaW4gb3B0aW9ucykgeyB0aGlzLl9vcHRpb25zW3BdID0gb3B0aW9uc1twXTsgfVxufTtcblxuLyoqXG4gKiBDb21wdXRlIHZpc2liaWxpdHkgZm9yIGEgMzYwLWRlZ3JlZSBjaXJjbGVcbiAqIEBwYXJhbSB7aW50fSB4XG4gKiBAcGFyYW0ge2ludH0geVxuICogQHBhcmFtIHtpbnR9IFIgTWF4aW11bSB2aXNpYmlsaXR5IHJhZGl1c1xuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuUk9ULkZPVi5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uKHgsIHksIFIsIGNhbGxiYWNrKSB7fVxuXG4vKipcbiAqIFJldHVybiBhbGwgbmVpZ2hib3JzIGluIGEgY29uY2VudHJpYyByaW5nXG4gKiBAcGFyYW0ge2ludH0gY3ggY2VudGVyLXhcbiAqIEBwYXJhbSB7aW50fSBjeSBjZW50ZXIteVxuICogQHBhcmFtIHtpbnR9IHIgcmFuZ2VcbiAqL1xuUk9ULkZPVi5wcm90b3R5cGUuX2dldENpcmNsZSA9IGZ1bmN0aW9uKGN4LCBjeSwgcikge1xuXHR2YXIgcmVzdWx0ID0gW107XG5cdHZhciBkaXJzLCBjb3VudEZhY3Rvciwgc3RhcnRPZmZzZXQ7XG5cblx0c3dpdGNoICh0aGlzLl9vcHRpb25zLnRvcG9sb2d5KSB7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0Y291bnRGYWN0b3IgPSAxO1xuXHRcdFx0c3RhcnRPZmZzZXQgPSBbMCwgMV07XG5cdFx0XHRkaXJzID0gW1xuXHRcdFx0XHRST1QuRElSU1s4XVs3XSxcblx0XHRcdFx0Uk9ULkRJUlNbOF1bMV0sXG5cdFx0XHRcdFJPVC5ESVJTWzhdWzNdLFxuXHRcdFx0XHRST1QuRElSU1s4XVs1XVxuXHRcdFx0XVxuXHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSA2OlxuXHRcdFx0ZGlycyA9IFJPVC5ESVJTWzZdO1xuXHRcdFx0Y291bnRGYWN0b3IgPSAxO1xuXHRcdFx0c3RhcnRPZmZzZXQgPSBbLTEsIDFdO1xuXHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSA4OlxuXHRcdFx0ZGlycyA9IFJPVC5ESVJTWzRdO1xuXHRcdFx0Y291bnRGYWN0b3IgPSAyO1xuXHRcdFx0c3RhcnRPZmZzZXQgPSBbLTEsIDFdO1xuXHRcdGJyZWFrO1xuXHR9XG5cblx0Lyogc3RhcnRpbmcgbmVpZ2hib3IgKi9cblx0dmFyIHggPSBjeCArIHN0YXJ0T2Zmc2V0WzBdKnI7XG5cdHZhciB5ID0gY3kgKyBzdGFydE9mZnNldFsxXSpyO1xuXG5cdC8qIGNpcmNsZSAqL1xuXHRmb3IgKHZhciBpPTA7aTxkaXJzLmxlbmd0aDtpKyspIHtcblx0XHRmb3IgKHZhciBqPTA7ajxyKmNvdW50RmFjdG9yO2orKykge1xuXHRcdFx0cmVzdWx0LnB1c2goW3gsIHldKTtcblx0XHRcdHggKz0gZGlyc1tpXVswXTtcblx0XHRcdHkgKz0gZGlyc1tpXVsxXTtcblxuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIEBjbGFzcyBQcmVjaXNlIHNoYWRvd2Nhc3RpbmcgYWxnb3JpdGhtXG4gKiBAYXVnbWVudHMgUk9ULkZPVlxuICovXG5ST1QuRk9WLlByZWNpc2VTaGFkb3djYXN0aW5nID0gZnVuY3Rpb24obGlnaHRQYXNzZXNDYWxsYmFjaywgb3B0aW9ucykge1xuXHRST1QuRk9WLmNhbGwodGhpcywgbGlnaHRQYXNzZXNDYWxsYmFjaywgb3B0aW9ucyk7XG59XG5ST1QuRk9WLlByZWNpc2VTaGFkb3djYXN0aW5nLmV4dGVuZChST1QuRk9WKTtcblxuUk9ULkZPVi5QcmVjaXNlU2hhZG93Y2FzdGluZy5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uKHgsIHksIFIsIGNhbGxiYWNrKSB7XG5cdC8qIHRoaXMgcGxhY2UgaXMgYWx3YXlzIHZpc2libGUgKi9cblx0Y2FsbGJhY2soeCwgeSwgMCwgMSk7XG4gICAgXG5cdGNhbGxiYWNrKHgtMSwgeS0xLCAwLCAxKTtcblx0Y2FsbGJhY2soeCwgeS0xLCAwLCAxKTtcblx0Y2FsbGJhY2soeCsxLCB5LTEsIDAsIDEpO1xuXHRjYWxsYmFjayh4LTEsIHksIDAsIDEpO1xuXHRjYWxsYmFjayh4KzEsIHksIDAsIDEpO1xuXHRjYWxsYmFjayh4LTEsIHkrMSwgMCwgMSk7XG5cdGNhbGxiYWNrKHgsIHkrMSwgMCwgMSk7XG5cdGNhbGxiYWNrKHgrMSwgeSsxLCAwLCAxKTtcbiAgICBcbiAgICBjYWxsYmFjayh4LTEsIHktMiwgMCwgMSk7XG4gICAgY2FsbGJhY2soeCwgeS0yLCAwLCAxKTtcbiAgICBjYWxsYmFjayh4KzEsIHktMiwgMCwgMSk7XG4gICAgY2FsbGJhY2soeC0yLCB5LTEsIDAsIDEpO1xuICAgIGNhbGxiYWNrKHgtMiwgeSwgMCwgMSk7XG4gICAgY2FsbGJhY2soeC0yLCB5KzEsIDAsIDEpO1xuICAgIGNhbGxiYWNrKHgrMiwgeS0xLCAwLCAxKTtcbiAgICBjYWxsYmFjayh4KzIsIHksIDAsIDEpO1xuICAgIGNhbGxiYWNrKHgrMiwgeSsxLCAwLCAxKTtcbiAgICBjYWxsYmFjayh4LTEsIHkrMiwgMCwgMSk7XG4gICAgY2FsbGJhY2soeCwgeSsyLCAwLCAxKTtcbiAgICBjYWxsYmFjayh4KzEsIHkrMiwgMCwgMSk7XG5cblx0Lyogc3RhbmRpbmcgaW4gYSBkYXJrIHBsYWNlLiBGSVhNRSBpcyB0aGlzIGEgZ29vZCBpZGVhPyAgKi9cblx0aWYgKCF0aGlzLl9saWdodFBhc3Nlcyh4LCB5KSkgeyByZXR1cm47IH1cblx0XG5cdC8qIGxpc3Qgb2YgYWxsIHNoYWRvd3MgKi9cblx0dmFyIFNIQURPV1MgPSBbXTtcblx0dmFyIHRyZWVzID0ge307XG5cdHZhciBjeCwgY3ksIGJsb2NrcywgQTEsIEEyLCB2aXNpYmlsaXR5LFxuICAgICAgICBkeCwgZHksIGRkLCBhLCBiLCByYWRpdXMsXG4gICAgICAgIGN4MiwgY3kyLCBkZDEsXG4gICAgICAgIG9ic3RhY2xlVHlwZTtcblxuXHQvKiBhbmFseXplIHN1cnJvdW5kaW5nIGNlbGxzIGluIGNvbmNlbnRyaWMgcmluZ3MsIHN0YXJ0aW5nIGZyb20gdGhlIGNlbnRlciAqL1xuXHRmb3IgKHZhciByPTE7IHI8PVI7IHIrKykge1xuICAgICAgICAvLy8vY29uc29sZS5sb2coJ3JpbmcnLCByKTtcblx0XHR2YXIgbmVpZ2hib3JzID0gdGhpcy5fZ2V0Q2lyY2xlKHgsIHksIHIpO1xuXHRcdHZhciBuZWlnaGJvckNvdW50ID0gbmVpZ2hib3JzLmxlbmd0aDtcbiAgICAgICAgdHJlZXMgPSB7fTtcblx0XHRmb3IgKHZhciBpPTA7aTxuZWlnaGJvckNvdW50O2krKykge1xuXHRcdFx0Y3ggPSBuZWlnaGJvcnNbaV1bMF07XG5cdFx0XHRjeSA9IG5laWdoYm9yc1tpXVsxXTtcbiAgICAgICAgICAgIHZhciBrZXkgPSBjeCtcIixcIitjeTtcbiAgICAgICAgICAgIC8vaWYgKGtleSA9PSBcIjQ0LDEwMlwiKSAvL2NvbnNvbGUubG9nKCdLRVknLCBrZXksICF0aGlzLl9saWdodFBhc3NlcyhjeCwgY3kpKTtcbiAgICAgICAgICAgIC8vIGlmIChrZXkgPT0gXCIxNTAsMTYwXCIpIC8vY29uc29sZS5sb2coa2V5LCBvYnN0YWNsZVR5cGUpO1xuICAgICAgICAgICAgLy8gaWYgKGtleSA9PSBcIjE1MSwxNjFcIikgLy9jb25zb2xlLmxvZyhrZXksIG9ic3RhY2xlVHlwZSk7XG4gICAgICAgICAgICAvLyBpZiAoa2V5ID09IFwiMTUwLDE2MVwiKSAvL2NvbnNvbGUubG9nKGtleSwgb2JzdGFjbGVUeXBlKTtcbiAgICAgICAgICAgIHZhciBvYnN0YWNsZVR5cGVzID0gb2JzdGFjbGVUeXBlcyA9IHRoaXMud2FsbHNba2V5XTtcbiAgICAgICAgICAgIGlmIChvYnN0YWNsZVR5cGVzICYmIG9ic3RhY2xlVHlwZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNraXBWaXNpYmlsaXR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvYnN0YWNsZVR5cGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvYnN0YWNsZVR5cGUgPSBvYnN0YWNsZVR5cGVzW2pdO1xuICAgICAgICAgICAgICAgICAgICBjeDIgPSBvYnN0YWNsZVR5cGVbMV07XG4gICAgICAgICAgICAgICAgICAgIGN5MiA9IG9ic3RhY2xlVHlwZVsyXTtcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzID0gb2JzdGFjbGVUeXBlWzNdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZHggPSBjeDIgLSB4O1xuICAgICAgICAgICAgICAgICAgICBkeSA9IGN5MiAtIHk7XG4gICAgICAgICAgICAgICAgICAgIGRkID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRkID4gMS8yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gTWF0aC5hc2luKHJhZGl1cyAvIGRkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBNYXRoLmF0YW4yKGR5LCBkeCksXG4gICAgICAgICAgICAgICAgICAgICAgICBBMSA9IG5vcm1hbGl6ZShiIC0gYSksXG4gICAgICAgICAgICAgICAgICAgICAgICBBMiA9IG5vcm1hbGl6ZShiICsgYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja3MgPSAhdGhpcy5fbGlnaHRQYXNzZXMoY3gsIGN5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZHgxID0gY3ggLSB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZHkxID0gY3kgLSB5O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGQxID0gTWF0aC5zcXJ0KGR4MSAqIGR4MSArIGR5MSAqIGR5MSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGQxIDwgZGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVlc1tvYnN0YWNsZVR5cGVbMV0rXCIsXCIrb2JzdGFjbGVUeXBlWzJdXSA9IFtvYnN0YWNsZVR5cGVbMV0sIG9ic3RhY2xlVHlwZVsyXV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGR4ID0gY3ggLSB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZHkgPSBjeSAtIHk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gTWF0aC5hc2luKHJhZGl1cyAvIGRkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBNYXRoLmF0YW4yKGR5LCBkeCksXG4gICAgICAgICAgICAgICAgICAgICAgICBBMSA9IG5vcm1hbGl6ZShiIC0gYSksXG4gICAgICAgICAgICAgICAgICAgICAgICBBMiA9IG5vcm1hbGl6ZShiICsgYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5ID0gdGhpcy5fY2hlY2tWaXNpYmlsaXR5KGIsIEExLCBBMiwgZmFsc2UsIFNIQURPV1MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2aXNpYmlsaXR5KSBza2lwVmlzaWJpbGl0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZpc2liaWxpdHkgJiYgIXNraXBWaXNpYmlsaXR5KSB7IGNhbGxiYWNrKGN4LCBjeSwgciwgdmlzaWJpbGl0eSk7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN4MiA9IGN4O1xuICAgICAgICAgICAgICAgIGN5MiA9IGN5O1xuICAgICAgICAgICAgICAgIHJhZGl1cyA9IE1hdGguU1FSVDIgLyAyO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGR4ID0gY3gyIC0geDtcbiAgICAgICAgICAgICAgICBkeSA9IGN5MiAtIHk7XG4gICAgICAgICAgICAgICAgZGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICAgICAgICAgIGlmIChkZCA+IDEvMikge1xuICAgICAgICAgICAgICAgICAgICBhID0gTWF0aC5hc2luKHJhZGl1cyAvIGRkKTtcbiAgICAgICAgICAgICAgICAgICAgYiA9IE1hdGguYXRhbjIoZHksIGR4KSxcbiAgICAgICAgICAgICAgICAgICAgQTEgPSBub3JtYWxpemUoYiAtIGEpLFxuICAgICAgICAgICAgICAgICAgICBBMiA9IG5vcm1hbGl6ZShiICsgYSk7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrcyA9ICF0aGlzLl9saWdodFBhc3NlcyhjeCwgY3kpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eSA9IHRoaXMuX2NoZWNrVmlzaWJpbGl0eShiLCBBMSwgQTIsIGJsb2NrcywgU0hBRE9XUyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2aXNpYmlsaXR5KSB7IGNhbGxiYWNrKGN4LCBjeSwgciwgdmlzaWJpbGl0eSk7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLypkeCA9IGN4MiAtIHg7XG4gICAgICAgICAgICBkeSA9IGN5MiAtIHk7XG4gICAgICAgICAgICBkZCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgICAgICBpZiAoZGQgPiAxLzIpIHtcbiAgICAgICAgICAgICAgICBhID0gTWF0aC5hc2luKHJhZGl1cyAvIGRkKTtcbiAgICAgICAgICAgICAgICBiID0gTWF0aC5hdGFuMihkeSwgZHgpLFxuICAgICAgICAgICAgICAgIEExID0gbm9ybWFsaXplKGIgLSBhKSxcbiAgICAgICAgICAgICAgICBBMiA9IG5vcm1hbGl6ZShiICsgYSk7XG4gICAgICAgICAgICAgICAgYmxvY2tzID0gIXRoaXMuX2xpZ2h0UGFzc2VzKGN4LCBjeSk7XG4gICAgICAgICAgICAgICAgaWYgKG9ic3RhY2xlVHlwZSAmJiBvYnN0YWNsZVR5cGVbMF0gPT0gJ3RyZWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGR4MSA9IGN4IC0geDtcbiAgICAgICAgICAgICAgICAgICAgZHkxID0gY3kgLSB5O1xuICAgICAgICAgICAgICAgICAgICBkZDEgPSBNYXRoLnNxcnQoZHgxICogZHgxICsgZHkxICogZHkxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRkMSA8IGRkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVlc1tvYnN0YWNsZVR5cGVbMV0rXCIsXCIrb2JzdGFjbGVUeXBlWzJdXSA9IFtvYnN0YWNsZVR5cGVbMV0sIG9ic3RhY2xlVHlwZVsyXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGR4ID0gY3ggLSB4O1xuICAgICAgICAgICAgICAgICAgICBkeSA9IGN5IC0geTtcbiAgICAgICAgICAgICAgICAgICAgZGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICAgICAgICAgICAgICBhID0gTWF0aC5hc2luKHJhZGl1cyAvIGRkKTtcbiAgICAgICAgICAgICAgICAgICAgYiA9IE1hdGguYXRhbjIoZHksIGR4KSxcbiAgICAgICAgICAgICAgICAgICAgQTEgPSBub3JtYWxpemUoYiAtIGEpLFxuICAgICAgICAgICAgICAgICAgICBBMiA9IG5vcm1hbGl6ZShiICsgYSk7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHkgPSB0aGlzLl9jaGVja1Zpc2liaWxpdHkoYiwgQTEsIEEyLCBmYWxzZSwgU0hBRE9XUyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2aXNpYmlsaXR5KSB7IGNhbGxiYWNrKGN4LCBjeSwgciwgdmlzaWJpbGl0eSk7IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgKG9ic3RhY2xlVHlwZSkgLy9jb25zb2xlLmxvZyhvYnN0YWNsZVR5cGVbMF0sIHJhZGl1cyk7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ0JMT0NLUycsIGN4LCBjeSwgYmxvY2tzLCBiKTtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eSA9IHRoaXMuX2NoZWNrVmlzaWJpbGl0eShiLCBBMSwgQTIsIGJsb2NrcywgU0hBRE9XUyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2aXNpYmlsaXR5KSB7IGNhbGxiYWNrKGN4LCBjeSwgciwgdmlzaWJpbGl0eSk7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9uZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0qL1xuXG5cdFx0fSAvKiBmb3IgYWxsIGNlbGxzIGluIHRoaXMgcmluZyAqL1xuICAgICAgICBcbiAgICAgICAgLy8gYXBwbHkgdHJlZSBibG9ja2Vyc1xuICAgICAgICBmb3IgKHZhciBrIGluIHRyZWVzKSB7XG4gICAgICAgICAgICAvLy8vY29uc29sZS5sb2coJ2FwcGx5IHRyZWUnKTtcbiAgICAgICAgICAgIGN4MiA9IHRyZWVzW2tdWzBdO1xuICAgICAgICAgICAgY3kyID0gdHJlZXNba11bMV07XG4gICAgICAgICAgICBkeCA9IGN4MiAtIHg7XG4gICAgICAgICAgICBkeSA9IGN5MiAtIHk7XG4gICAgICAgICAgICBkZCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgICAgICByYWRpdXMgPSBNYXRoLlNRUlQyIC0gLjAxO1xuICAgICAgICAgICAgaWYgKGRkID4gMS8yKSB7XG4gICAgICAgICAgICAgICAgYSA9IE1hdGguYXNpbihyYWRpdXMgLyBkZCk7XG4gICAgICAgICAgICAgICAgYiA9IE1hdGguYXRhbjIoZHksIGR4KSxcbiAgICAgICAgICAgICAgICBBMSA9IG5vcm1hbGl6ZShiIC0gYSksXG4gICAgICAgICAgICAgICAgQTIgPSBub3JtYWxpemUoYiArIGEpO1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHkgPSB0aGlzLl9jaGVja1Zpc2liaWxpdHkoYiwgQTEsIEEyLCB0cnVlLCBTSEFET1dTKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kb25lKSByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblx0fSAvKiBmb3IgYWxsIHJpbmdzICovXG59XG5cbi8qKlxuICogQHBhcmFtIHtpbnRbMl19IEExIGFyYyBzdGFydFxuICogQHBhcmFtIHtpbnRbMl19IEEyIGFyYyBlbmRcbiAqIEBwYXJhbSB7Ym9vbH0gYmxvY2tzIERvZXMgY3VycmVudCBhcmMgYmxvY2sgdmlzaWJpbGl0eT9cbiAqIEBwYXJhbSB7aW50W11bXX0gU0hBRE9XUyBsaXN0IG9mIGFjdGl2ZSBzaGFkb3dzXG4gKi9cblJPVC5GT1YuUHJlY2lzZVNoYWRvd2Nhc3RpbmcucHJvdG90eXBlLl9jaGVja1Zpc2liaWxpdHkgPSBmdW5jdGlvbihiLCBBMSwgQTIsIGJsb2NrcywgU0hBRE9XUykge1xuICAgIC8vLy9jb25zb2xlLmxvZygnX2NoZWNrVmlzaWJpbGl0eScsIGIsIEExLCBBMiwgYmxvY2tzLCBTSEFET1dTKTtcbiAgICAvLyBjaGVjayBpZiB0YXJnZXQgY2VudGVyIGlzIGluc2lkZSBhIHNoYWRvd1xuICAgIHZhciB2aXNpYmxlID0gIWJsb2NrcztcbiAgICAvL2NvbnNvbGUubG9nKCdfY2hlY2tWaXNpYmlsaXR5JywgYiwgdmlzaWJsZSk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgU0hBRE9XUy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBvbGQgPSBTSEFET1dTW2ldO1xuICAgICAgICBpZiAoaXNCZXR3ZWVuKGIsIG9sZFswXSwgb2xkWzFdKSkge1xuICAgICAgICAgICAgaWYgKGJsb2Nrcykge1xuICAgICAgICAgICAgICAgIC8vLy9jb25zb2xlLmxvZygnYmxvY2tzIGJ1dCBub3QgdmlzaWJsZScsIFNIQURPV1MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB2aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGksIGIsIEpTT04uc3RyaW5naWZ5KFNIQURPV1MpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vdCB2aXNpYmxlLCByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXHR9XG4gICAgXG4gICAgaWYgKGJsb2Nrcykge1xuICAgICAgICBpZiAoQTEgPCAwICYmIEEyID49IDApIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NwbGl0dGluZycpO1xuICAgICAgICAgICAgdGhpcy5fbWVyZ2VTaGFkb3dzKGIsIDAsIEEyLCBibG9ja3MsIFNIQURPV1MpO1xuICAgICAgICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9tZXJnZVNoYWRvd3MoYiwgQTEsIDAsIGJsb2NrcywgU0hBRE9XUyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdub3Qgc3BsaXR0aW5nJywgYmxvY2tzLCB2aXNpYmxlLCBiKTtcbiAgICAgICAgICAgIHRoaXMuX21lcmdlU2hhZG93cyhiLCBBMSwgQTIsIGJsb2NrcywgU0hBRE9XUyk7XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZygnZW5kJywgQTEsIEEyLCBKU09OLnN0cmluZ2lmeShTSEFET1dTKSwgIWlzQmV0d2VlbihBMSwgU0hBRE9XU1swXVswXSwgU0hBRE9XU1swXVsxXSksICFpc0JldHdlZW4oQTIsIFNIQURPV1NbMF1bMF0sIFNIQURPV1NbMF1bMV0pKTtcbiAgICAgICAgaWYgKFNIQURPV1MubGVuZ3RoID09IDEgJiYgKCFpc0JldHdlZW4oQTEsIFNIQURPV1NbMF1bMF0sIFNIQURPV1NbMF1bMV0pIHx8ICFpc0JldHdlZW4oQTIsIFNIQURPV1NbMF1bMF0sIFNIQURPV1NbMF1bMV0pKSAmJiBBMSAhPSBTSEFET1dTWzBdWzBdICYmIEEyICE9IFNIQURPV1NbMF1bMV0gKSB7XG4gICAgICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB2aXNpYmxlO1xufVxuXG5ST1QuRk9WLlByZWNpc2VTaGFkb3djYXN0aW5nLnByb3RvdHlwZS5fbWVyZ2VTaGFkb3dzID0gZnVuY3Rpb24oYiwgQTEsIEEyLCBibG9ja3MsIFNIQURPV1MpIHtcbiAgICAvLy8vY29uc29sZS5sb2coJ21lcmdpbmcnLCBiLCBBMSwgQTIpO1xuICAgIC8vIGNoZWNrIGlmIHRhcmdldCBmaXJzdCBlZGdlIGlzIGluc2lkZSBhIHNoYWRvdyBvciB3aGljaCBzaGFkb3dzIGl0IGlzIGJldHdlZW5cbiAgICB2YXIgaW5kZXgxID0gMCxcbiAgICAgICAgZWRnZTEgPSBmYWxzZSxcbiAgICAgICAgZmlyc3RJbmRleCA9IDA7XG4gICAgd2hpbGUgKGluZGV4MSA8IFNIQURPV1MubGVuZ3RoKSB7XG4gICAgICAgIHZhciBvbGQgPSBTSEFET1dTW2luZGV4MV07XG4gICAgICAgIGZpcnN0SW5kZXggPSBpbmRleDE7XG4gICAgICAgIGlmIChpc0JldHdlZW4oQTEsIG9sZFswXSwgb2xkWzFdKSkge1xuICAgICAgICAgICAgZWRnZTEgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4MSA+IDAgJiYgaXNCZXR3ZWVuKEExLCBTSEFET1dTW2luZGV4MSAtIDFdWzFdLCBvbGRbMF0pKSB7XG4gICAgICAgICAgICBlZGdlMSA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0JlZm9yZShBMSwgb2xkWzFdKSkge1xuICAgICAgICAgICAgaW5kZXgxKys7XG4gICAgICAgICAgICBmaXJzdEluZGV4ID0gaW5kZXgxO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQmVmb3JlKEExLCBvbGRbMF0pKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpbmRleDErKztcbiAgICB9XG4gICAgXG4gICAgLy8gY2hlY2sgaWYgdGFyZ2V0IHNlY29uZCBlZGdlIGlzIGluc2lkZSBhIHNoYWRvdyBvciB3aGljaCBzaGFkb3dzIGl0IGlzIGJldHdlZW5cbiAgICB2YXIgaW5kZXgyID0gU0hBRE9XUy5sZW5ndGggLSAxLFxuICAgICAgICBlZGdlMiA9IGZhbHNlLFxuICAgICAgICBzZWNvbmRJbmRleCA9IDA7XG4gICAgd2hpbGUgKGluZGV4MiA+PSAwKSB7XG4gICAgICAgIHZhciBvbGQgPSBTSEFET1dTW2luZGV4Ml07XG4gICAgICAgIHNlY29uZEluZGV4ID0gaW5kZXgyO1xuICAgICAgICAvLy8vY29uc29sZS5sb2coQTIsIG9sZFswXSwgb2xkWzFdLCBpc0JldHdlZW4oQTIsIG9sZFswXSwgb2xkWzFdKSlcbiAgICAgICAgaWYgKGlzQmV0d2VlbihBMiwgb2xkWzBdLCBvbGRbMV0pKSB7XG4gICAgICAgICAgICBlZGdlMiA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNCZWZvcmUoQTIsIG9sZFswXSkpIHtcbiAgICAgICAgICAgIGluZGV4Mi0tO1xuICAgICAgICAgICAgc2Vjb25kSW5kZXggPSBpbmRleDI7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzQmVmb3JlKEEyLCBvbGRbMV0pKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpbmRleDItLTtcbiAgICB9XG4gICAgXG4gICAgLy8vL2NvbnNvbGUubG9nKGZpcnN0SW5kZXgsIHNlY29uZEluZGV4LCBlZGdlMSwgZWRnZTIsIEExLCBBMik7XG4gICAgaWYgKGZpcnN0SW5kZXggPT0gU0hBRE9XUy5sZW5ndGggJiYgIWVkZ2UxICYmIHNlY29uZEluZGV4ID09IDAgJiYgZWRnZTIpIGZpcnN0SW5kZXggPSAwO1xuICAgIC8vaWYgKHNlY29uZEluZGV4ID09IC0xKSBzZWNvbmRJbmRleCA9IFNIQURPV1MubGVuZ3RoIC0gMTtcbiAgICAvL2NvbnNvbGUubG9nKGZpcnN0SW5kZXgsIHNlY29uZEluZGV4LCBlZGdlMSwgZWRnZTIsIEExLCBBMik7XG4gICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShTSEFET1dTKSk7XG4gICAgaWYgKFNIQURPV1MubGVuZ3RoID09IDApIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZW1wdHkgc2hhZG93cyBwdXNoaW5nJywgW0ExLCBBMl0pO1xuICAgICAgICBTSEFET1dTLnB1c2goW0ExLCBBMl0pO1xuICAgIH1cbiAgICAvKmVsc2UgaWYgKFNIQURPV1MubGVuZ3RoID4gMSAmJiBmaXJzdEluZGV4ID09IFNIQURPV1MubGVuZ3RoICYmIHNlY29uZEluZGV4ID09IDAgJiYgIWVkZ2UxICYmIGVkZ2UyKSB7XG4gICAgXG4gICAgfSovXG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBuZXdfc2hhZG93ID0gW2VkZ2UxID8gU0hBRE9XU1tmaXJzdEluZGV4XVswXSA6IEExLCBlZGdlMiA/IFNIQURPV1Nbc2Vjb25kSW5kZXhdWzFdIDogQTJdO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCduZXdfc2hhZG93JywgbmV3X3NoYWRvdyk7XG4gICAgICAgIHNlY29uZEluZGV4ID0gTWF0aC5tYXgoZmlyc3RJbmRleCwgc2Vjb25kSW5kZXgpO1xuICAgICAgICB2YXIgc3VtMSA9IGRpZmZfc3VtKFNIQURPV1MpO1xuICAgICAgICB2YXIgZG9TaGlmdCA9IGZhbHNlO1xuICAgICAgICBpZiAoaXNCZXR3ZWVuKDAsIG5ld19zaGFkb3dbMF0sIG5ld19zaGFkb3dbMV0pICYmIG5ld19zaGFkb3dbMF0gIT0gMCAmJiBuZXdfc2hhZG93WzFdICE9IDApIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2Nyb3NzZXMgMCcpO1xuICAgICAgICAgICAgU0hBRE9XUy5zcGxpY2UoZmlyc3RJbmRleCwgZmlyc3RJbmRleCA9PSBzZWNvbmRJbmRleCAmJiBlZGdlMSA9PSBlZGdlMiAmJiAhZWRnZTEgPyAwIDogc2Vjb25kSW5kZXggLSBmaXJzdEluZGV4ICsgMSwgW25ld19zaGFkb3dbMF0sIDBdKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coW25ld19zaGFkb3dbMF0sIDBdLCBKU09OLnN0cmluZ2lmeShTSEFET1dTKSk7XG4gICAgICAgICAgICBpZiAoU0hBRE9XU1swXVswXSAhPSAwICYmIFNIQURPV1NbMF1bMV0gIT0gbmV3X3NoYWRvd1sxXSkge1xuICAgICAgICAgICAgICAgIFNIQURPV1Muc3BsaWNlKGZpcnN0SW5kZXggKyAxLCAwLCBbMCwgbmV3X3NoYWRvd1sxXV0pO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coWzAsIG5ld19zaGFkb3dbMV1dLCBKU09OLnN0cmluZ2lmeShTSEFET1dTKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KFNIQURPV1MpKTtcbiAgICAgICAgICAgIGRvU2hpZnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgU0hBRE9XUy5zcGxpY2UoZmlyc3RJbmRleCwgZmlyc3RJbmRleCA9PSBzZWNvbmRJbmRleCAmJiBlZGdlMSA9PSBlZGdlMiAmJiAhZWRnZTEgPyAwIDogc2Vjb25kSW5kZXggLSBmaXJzdEluZGV4ICsgMSwgbmV3X3NoYWRvdyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1bTIgPSBkaWZmX3N1bShTSEFET1dTKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnc3VtMScsIHN1bTEsICdzdW0yJywgc3VtMiwgc3VtMiA8IHN1bTEsIFNIQURPV1MubGVuZ3RoID09IDEgJiYgKCFpc0JldHdlZW4oQTEsIFNIQURPV1NbMF1bMF0sIFNIQURPV1NbMF1bMV0pIHx8ICFpc0JldHdlZW4oQTIsIFNIQURPV1NbMF1bMF0sIFNIQURPV1NbMF1bMV0pKSk7XG4gICAgICAgIGlmIChzdW0yIDwgc3VtMSkgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgICAgLyppZiAoU0hBRE9XUy5sZW5ndGggPT0gMSAmJiAoIWlzQmV0d2VlbihBMSwgU0hBRE9XU1swXVswXSwgU0hBRE9XU1swXVsxXSkgfHwgIWlzQmV0d2VlbihBMiwgU0hBRE9XU1swXVswXSwgU0hBRE9XU1swXVsxXSkpKSB7XG4gICAgICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgICB9Ki9cbiAgICAgICAgaWYgKG5ld19zaGFkb3dbMF0gPT0gMCB8fCBkb1NoaWZ0KSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc2hpZnRpbmcnKTtcbiAgICAgICAgICAgIHdoaWxlIChTSEFET1dTWzBdWzBdICE9IDApIHtcbiAgICAgICAgICAgICAgICBTSEFET1dTLnB1c2goU0hBRE9XUy5zaGlmdCgpKTtcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPj0gU0hBRE9XUy5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShTSEFET1dTKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdlbmQgc2hpZnRpbmcnLCBKU09OLnN0cmluZ2lmeShTSEFET1dTKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShTSEFET1dTKSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coZGlmZl9zdW0oU0hBRE9XUykpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNCZWZvcmUoQTEsIEEyKSB7XG4gICAgaWYgKEExID4gMCAmJiBBMiA8IDApIHsgLy8gQTEgaW4gYm90dG9tIGhhbGYsIEEyIGluIHRvcCBoYWxmXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChBMiA+IDAgJiYgQTEgPCAwKSB7IC8vIEExIGluIHRvcCBoYWxmLCBBMiBpbiBib3R0b20gaGFsZlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gQTEgPCBBMjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzQWZ0ZXIoQTEsIEEyKSB7XG4gICAgcmV0dXJuICFpc0JlZm9yZShBMSwgQTIpO1xufVxuXG5mdW5jdGlvbiBpc0JldHdlZW4oYiwgQTEsIEEyKSB7XG4gICAgaWYgKEExIDwgQTIpIHtcbiAgICAgICAgcmV0dXJuICgoQTEgPD0gYikgJiYgKGIgPD0gQTIpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoKEExIDw9IGIpICYmIChiIDw9IE1hdGguUEkpKSB8fCAoKC1NYXRoLlBJIDw9IGIpICYmIChiIDw9IEEyKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemUoeCkge1xuICAgIGlmICh4ID4gTWF0aC5QSSkge1xuICAgICAgICByZXR1cm4gLSgyICogTWF0aC5QSSAtIHgpO1xuICAgIH1cbiAgICBlbHNlIGlmICggeCA8IC1NYXRoLlBJKSB7XG4gICAgICAgIHJldHVybiAyICogTWF0aC5QSSArIHg7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpZmYoQTEsIEEyKSB7XG4gICAgaWYgKEExID4gMCAmJiBBMiA8IDApIHsgLy8gQTEgaW4gYm90dG9tIGhhbGYsIEEyIGluIHRvcCBoYWxmXG4gICAgICAgIHJldHVybiBNYXRoLmFicygoTWF0aC5QSSAtIEExKSAtICgtTWF0aC5QSSAtIEEyKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKEEyID4gMCAmJiBBMSA8IDApIHsgLy8gQTEgaW4gdG9wIGhhbGYsIEEyIGluIGJvdHRvbSBoYWxmXG4gICAgICAgIHJldHVybiBNYXRoLmFicygtQTEgKyBBMik7XG4gICAgfVxuICAgIGlmIChBMSA8PSAwICYmIEEyIDw9IDApIHsgLy8gQTEsQTIgaW4gYm90dG9tIGhhbGZcbiAgICAgICAgaWYgKGlzQWZ0ZXIoQTEsIEEyKSkgeyAvLyBBMSBhZnRlciBBMlxuICAgICAgICAgICAgcmV0dXJuIC1BMSArIE1hdGguUEkgLSAoLU1hdGguUEkgLSBBMilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyhBMiAtIEExKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlzQWZ0ZXIoQTEsIEEyKSkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguUEkgKyAoTWF0aC5QSSAtIEExKSArIEEyXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hYnMoQTIgLSBBMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpZmZfc3VtKFNIQURPV1MpIHtcbiAgICB2YXIgc3VtID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IFNIQURPV1MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8vL2NvbnNvbGUubG9nKFNIQURPV1NbaV1bMF0sIFNIQURPV1NbaV1bMV0sIGRpZmYoU0hBRE9XU1tpXVswXSwgU0hBRE9XU1tpXVsxXSkpO1xuICAgICAgICBzdW0gKz0gZGlmZihTSEFET1dTW2ldWzBdLCBTSEFET1dTW2ldWzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBST1Q7IiwidmFyIEltYWdlSGFuZGxlciA9IHJlcXVpcmUoXCIuL2ltYWdlSGFuZGxlci5qc1wiKTtcbnZhciBST1QgPSByZXF1aXJlKFwiLi9yb3Q2LmpzXCIpO1xuXG52YXIga2V5MnB0X2NhY2hlID0ge307XG5mdW5jdGlvbiBrZXkycHQoa2V5KSB7XG4gICAgaWYgKGtleSBpbiBrZXkycHRfY2FjaGUpIHJldHVybiBrZXkycHRfY2FjaGVba2V5XTtcbiAgICB2YXIgcCA9IGtleS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gcGFyc2VJbnQoYykgfSk7XG4gICAgdmFyIHB0ID0ge3g6IHBbMF0sIHk6IHBbMV0sIGtleToga2V5fTtcbiAgICBrZXkycHRfY2FjaGVba2V5XSA9IHB0O1xuICAgIHJldHVybiBwdDtcbn1cblxuZnVuY3Rpb24geHkya2V5KHgsIHkpIHtcbiAgICByZXR1cm4geCArIFwiLFwiICsgeTtcbn1cblxuZnVuY3Rpb24geHkycHQoeCwgeSkge1xuICAgIHJldHVybiB7eDogeCwgeTogeSwga2V5OiB4ICsgXCIsXCIgKyB5fTtcbn1cblxuZnVuY3Rpb24gcHQya2V5KHB0KSB7XG4gICAgcmV0dXJuIHB0LnggKyBcIixcIiArIHB0Lnk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRWxldmF0aW9uV2FsbHMoZGF0YSwgZWxldmF0aW9uKSB7XG4gICAgdmFyIHQxID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgd2FsbHMgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICB2YXIgcHQgPSBkYXRhW2tleV07XG4gICAgICAgIGlmIChwdC56ID4gZWxldmF0aW9uKSB7XG4gICAgICAgICAgICBhZGpMb29wOlxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IC0xOyBpIDw9IDE7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAtMTsgaiA8PSAxOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKDAgIT09IGkgfHwgMCAhPT0gaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGsgPSAocHQueCArIGkpICsgXCIsXCIgKyAocHQueSArIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFba10gJiYgZGF0YVtrXS56IDw9IGVsZXZhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxzW3B0LmtleV0gPSBwdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBhZGpMb29wO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdnZW5lcmF0ZUVsZXZhdGlvbldhbGxzJywgRGF0ZS5ub3coKSAtIHQxICsgJ21zJyk7XG4gICAgcmV0dXJuIHdhbGxzO1xufVxuXG5mdW5jdGlvbiBzZXRFbGV2YXRpb25XYWxscyhvYmosIGRhdGEsIGVsZXZhdGlvbikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YVtlbGV2YXRpb25dLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlbCA9IGRhdGFbZWxldmF0aW9uXVtpXTtcbiAgICAgICAgb2JqW2VsWzFdICsgXCIsXCIgKyBlbFsyXV0gPSBlbDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFdhbGxzKG9iaiwgZGF0YSwgaWQsIHIpIHtcbiAgICBpZCA9IGlkIHx8ICd3YWxsJztcbiAgICByID0gciB8fCAoTWF0aC5TUVJUMiAvIDIpO1xuICAgIGZvciAodmFyIGkgaW4gZGF0YSkge1xuICAgICAgICBvYmpbaV0gPSBbaWQsIGRhdGFbaV0ueCwgZGF0YVtpXS55LCByXTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFRyZWVXYWxscyhvYmosIGVsZXZhdGlvbiwgdHJlZSwgdHJlZV9lbGV2YXRpb25zLCB0cmVlX3N0YXRlLCB0cmVlX2Jsb2Nrcykge1xuICAgIGZvciAodmFyIGkgaW4gdHJlZSkge1xuICAgICAgICBpZiAoZWxldmF0aW9uIDwgdHJlZV9lbGV2YXRpb25zW2ldKSB7XG4gICAgICAgICAgICBpZiAodHJlZV9zdGF0ZVtpXSkge1xuICAgICAgICAgICAgICAgIC8vb2JqW2ldID0gWyd0cmVlJywgdHJlZVtpXS54LCB0cmVlW2ldLnksIE1hdGguU1FSVDJdO1xuICAgICAgICAgICAgICAgIHRyZWVfYmxvY2tzW2ldLmZvckVhY2goZnVuY3Rpb24gKHB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrID0gcHQueCArIFwiLFwiICsgcHQueTtcbiAgICAgICAgICAgICAgICAgICAgb2JqW2tdID0gKG9ialtrXSB8fCBbXSkuY29uY2F0KFtbJ3RyZWUnLCB0cmVlW2ldLngsIHRyZWVbaV0ueSwgTWF0aC5TUVJUMl1dKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gVmlzaW9uU2ltdWxhdGlvbih3b3JsZGRhdGEsIG1hcERhdGFJbWFnZVBhdGgsIG9uUmVhZHksIG9wdHMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgdGhpcy5vcHRzID0gb3B0cyB8fCB7fTtcbiAgICB0aGlzLmdyaWQgPSBbXTtcbiAgICB0aGlzLmdyaWRuYXYgPSBudWxsO1xuICAgIHRoaXMuZW50X2Zvd19ibG9ja2VyX25vZGUgPSBudWxsO1xuICAgIHRoaXMudG9vbHNfbm9fd2FyZHMgPSBudWxsO1xuICAgIHRoaXMuZWxldmF0aW9uVmFsdWVzID0gW107XG4gICAgdGhpcy5lbGV2YXRpb25HcmlkID0gbnVsbDtcbiAgICB0aGlzLmVsZXZhdGlvbldhbGxzID0ge307XG4gICAgdGhpcy50cmVlV2FsbHMgPSB7fTtcbiAgICB0aGlzLnRyZWUgPSB7fTsgLy8gY2VudGVyIGtleSB0byBwb2ludCBtYXBcbiAgICB0aGlzLnRyZWVfYmxvY2tzID0ge307IC8vIGNlbnRlciB0byBjb3JuZXJzIG1hcFxuICAgIHRoaXMudHJlZV9yZWxhdGlvbnMgPSB7fTsgLy8gY29ybmVyIHRvIGNlbnRlciBtYXBcbiAgICB0aGlzLnRyZWVfZWxldmF0aW9ucyA9IHt9O1xuICAgIHRoaXMudHJlZV9zdGF0ZSA9IHt9O1xuICAgIHRoaXMud2FsbHMgPSB7fTtcbiAgICB0aGlzLnJhZGl1cyA9IHRoaXMub3B0cy5yYWRpdXMgfHwgcGFyc2VJbnQoMTYwMCAvIDY0KTtcbiAgICB0aGlzLmxpZ2h0cyA9IHt9O1xuICAgIHRoaXMud29ybGRNaW5YID0gd29ybGRkYXRhLndvcmxkTWluWDtcbiAgICB0aGlzLndvcmxkTWluWSA9IHdvcmxkZGF0YS53b3JsZE1pblk7XG4gICAgdGhpcy53b3JsZE1heFggPSB3b3JsZGRhdGEud29ybGRNYXhYO1xuICAgIHRoaXMud29ybGRNYXhZID0gd29ybGRkYXRhLndvcmxkTWF4WTtcbiAgICB0aGlzLndvcmxkV2lkdGggPSB0aGlzLndvcmxkTWF4WCAtIHRoaXMud29ybGRNaW5YO1xuICAgIHRoaXMud29ybGRIZWlnaHQgPSB0aGlzLndvcmxkTWF4WSAtIHRoaXMud29ybGRNaW5ZO1xuICAgIHRoaXMuZ3JpZFdpZHRoID0gdGhpcy53b3JsZFdpZHRoIC8gNjQgKyAxO1xuICAgIHRoaXMuZ3JpZEhlaWdodCA9IHRoaXMud29ybGRIZWlnaHQgLyA2NCArIDE7XG4gICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgIFxuICAgIHRoaXMuaW1hZ2VIYW5kbGVyID0gbmV3IEltYWdlSGFuZGxlcihtYXBEYXRhSW1hZ2VQYXRoKTtcbiAgICB2YXIgdDEgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuaW1hZ2VIYW5kbGVyLmxvYWQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdDIgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2UgbG9hZCcsIHQyIC0gdDEgKyAnbXMnKTtcbiAgICAgICAgc2VsZi5ncmlkbmF2ID0gcGFyc2VJbWFnZShzZWxmLmltYWdlSGFuZGxlciwgc2VsZi5ncmlkV2lkdGggKiAyLCBzZWxmLmdyaWRXaWR0aCwgc2VsZi5ncmlkSGVpZ2h0LCBibGFja1BpeGVsSGFuZGxlcik7XG4gICAgICAgIHNlbGYuZW50X2Zvd19ibG9ja2VyX25vZGUgPSBwYXJzZUltYWdlKHNlbGYuaW1hZ2VIYW5kbGVyLCBzZWxmLmdyaWRXaWR0aCAqIDMsIHNlbGYuZ3JpZFdpZHRoLCBzZWxmLmdyaWRIZWlnaHQsIGJsYWNrUGl4ZWxIYW5kbGVyKTtcbiAgICAgICAgc2VsZi50b29sc19ub193YXJkcyA9IHBhcnNlSW1hZ2Uoc2VsZi5pbWFnZUhhbmRsZXIsIHNlbGYuZ3JpZFdpZHRoICogNCwgc2VsZi5ncmlkV2lkdGgsIHNlbGYuZ3JpZEhlaWdodCwgYmxhY2tQaXhlbEhhbmRsZXIpO1xuICAgICAgICBwYXJzZUltYWdlKHNlbGYuaW1hZ2VIYW5kbGVyLCBzZWxmLmdyaWRXaWR0aCwgc2VsZi5ncmlkV2lkdGgsIHNlbGYuZ3JpZEhlaWdodCwgdHJlZUVsZXZhdGlvblBpeGVsSGFuZGxlcik7XG4gICAgICAgIHNlbGYuZWxldmF0aW9uR3JpZCA9IHBhcnNlSW1hZ2Uoc2VsZi5pbWFnZUhhbmRsZXIsIDAsIHNlbGYuZ3JpZFdpZHRoLCBzZWxmLmdyaWRIZWlnaHQsIGVsZXZhdGlvblBpeGVsSGFuZGxlcik7XG4gICAgICAgIHZhciB0MyA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZSBwcm9jZXNzJywgdDMgLSB0MiArICdtcycpO1xuICAgICAgICBzZWxmLmVsZXZhdGlvblZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGV2YXRpb24pIHtcbiAgICAgICAgICAgIC8vc2VsZi5lbGV2YXRpb25XYWxsc1tlbGV2YXRpb25dID0gZ2VuZXJhdGVFbGV2YXRpb25XYWxscyhzZWxmLmVsZXZhdGlvbkdyaWQsIGVsZXZhdGlvbik7XG4gICAgICAgICAgICBzZWxmLnRyZWVXYWxsc1tlbGV2YXRpb25dID0ge307XG4gICAgICAgICAgICBzZXRUcmVlV2FsbHMoc2VsZi50cmVlV2FsbHNbZWxldmF0aW9uXSwgZWxldmF0aW9uLCBzZWxmLnRyZWUsIHNlbGYudHJlZV9lbGV2YXRpb25zLCBzZWxmLnRyZWVfc3RhdGUsIHNlbGYudHJlZV9ibG9ja3MpXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdDQgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zb2xlLmxvZygnd2FsbHMgZ2VuZXJhdGlvbicsIHQ0IC0gdDMgKyAnbXMnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmdyaWRXaWR0aDsgaSsrKSB7XG4gICAgICAgICAgICBzZWxmLmdyaWRbaV0gPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2VsZi5ncmlkSGVpZ2h0OyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcHQgPSB4eTJwdChpLCBqKTtcbiAgICAgICAgICAgICAgICBrZXkycHRfY2FjaGVbcHQua2V5XSA9IHB0O1xuICAgICAgICAgICAgICAgIHNlbGYuZ3JpZFtpXS5wdXNoKHB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdDUgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zb2xlLmxvZygnY2FjaGUgcHJpbWUnLCB0NSAtIHQ0ICsgJ21zJyk7XG4gICAgICAgIHNlbGYucmVhZHkgPSB0cnVlO1xuICAgICAgICBvblJlYWR5KCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBwYXJzZUltYWdlKGltYWdlSGFuZGxlciwgb2Zmc2V0LCB3aWR0aCwgaGVpZ2h0LCBwaXhlbEhhbmRsZXIpIHtcbiAgICAgICAgdmFyIGdyaWQgPSB7fTtcbiAgICAgICAgaW1hZ2VIYW5kbGVyLnNjYW4ob2Zmc2V0LCB3aWR0aCwgaGVpZ2h0LCBwaXhlbEhhbmRsZXIsIGdyaWQpO1xuICAgICAgICByZXR1cm4gZ3JpZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBibGFja1BpeGVsSGFuZGxlcih4LCB5LCBwLCBncmlkKSB7XG4gICAgICAgIHZhciBwdCA9IHNlbGYuSW1hZ2VYWXRvR3JpZFhZKHgsIHkpO1xuICAgICAgICBpZiAocFswXSA9PT0gMCkge1xuICAgICAgICAgICAgZ3JpZFtwdC54ICsgXCIsXCIgKyBwdC55XSA9IHB0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG4gICAgZnVuY3Rpb24gZWxldmF0aW9uUGl4ZWxIYW5kbGVyKHgsIHksIHAsIGdyaWQpIHtcbiAgICAgICAgdmFyIHB0ID0gc2VsZi5JbWFnZVhZdG9HcmlkWFkoeCwgeSk7XG4gICAgICAgIHB0LnogPSBwWzBdO1xuICAgICAgICBncmlkW3B0LnggKyBcIixcIiArIHB0LnldID0gcHQ7XG4gICAgICAgIGlmIChzZWxmLmVsZXZhdGlvblZhbHVlcy5pbmRleE9mKHBbMF0pID09IC0xKSB7XG4gICAgICAgICAgICBzZWxmLmVsZXZhdGlvblZhbHVlcy5wdXNoKHBbMF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJlZUVsZXZhdGlvblBpeGVsSGFuZGxlcih4LCB5LCBwLCBncmlkKSB7XG4gICAgICAgIHZhciBwdCA9IHNlbGYuSW1hZ2VYWXRvR3JpZFhZKHgsIHkpO1xuICAgICAgICBpZiAocFsxXSA9PSAwICYmIHBbMl0gPT0gMCkge1xuICAgICAgICAgICAgLy8gdHJlZXMgYXJlIDJ4MiBpbiBncmlkXG4gICAgICAgICAgICAvLyB0cmVlIG9yaWdpbnMgcm91bmRlZCB1cCB3aGVuIGNvbnZlcnRlZCB0byBncmlkLCBzbyB0aGV5IHJlcHJlc2VudCB0b3AgcmlnaHQgY29ybmVyLiBzdWJ0cmFjdCAwLjUgdG8gZ2V0IGdyaWQgb3JpZ2luXG4gICAgICAgICAgICB2YXIgdHJlZU9yaWdpbiA9IHh5MnB0KHB0LnggLSAwLjUsIHB0LnkgLSAwLjUpO1xuICAgICAgICAgICAgdmFyIHRyZWVFbGV2YXRpb24gPSBwWzBdICsgNDA7XG4gICAgICAgICAgICB2YXIga0MgPSB0cmVlT3JpZ2luLmtleTtcbiAgICAgICAgICAgIHNlbGYudHJlZVtrQ10gPSB0cmVlT3JpZ2luO1xuICAgICAgICAgICAgc2VsZi50cmVlX2VsZXZhdGlvbnNba0NdID0gdHJlZUVsZXZhdGlvbjtcbiAgICAgICAgICAgIHNlbGYudHJlZV9ibG9ja3Nba0NdID0gW107XG4gICAgICAgICAgICBzZWxmLnRyZWVfc3RhdGVba0NdID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCB0cmVlIDJ4MiBieSB0YWtpbmcgZmxvb3IgYW5kIGNlaWwgb2YgdHJlZSBncmlkIG9yaWdpblxuICAgICAgICAgICAgW01hdGguZmxvb3IsIE1hdGguY2VpbF0uZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIFtNYXRoLmZsb29yLCBNYXRoLmNlaWxdLmZvckVhY2goZnVuY3Rpb24gKGopIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWVDb3JuZXIgPSB4eTJwdChpKHRyZWVPcmlnaW4ueCksIGoodHJlZU9yaWdpbi55KSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudHJlZV9yZWxhdGlvbnNbdHJlZUNvcm5lci5rZXldID0gKHNlbGYudHJlZV9yZWxhdGlvbnNbdHJlZUNvcm5lci5rZXldIHx8IFtdKS5jb25jYXQodHJlZU9yaWdpbik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudHJlZV9ibG9ja3Nba0NdLnB1c2godHJlZUNvcm5lcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubGlnaHRQYXNzZXNDYWxsYmFjayA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHZhciBrZXkgPSB4ICsgJywnICsgeTtcbiAgICAgICAgcmV0dXJuICEoa2V5IGluIHNlbGYuZWxldmF0aW9uV2FsbHNbc2VsZi5lbGV2YXRpb25dKSAmJiAhKGtleSBpbiBzZWxmLmVudF9mb3dfYmxvY2tlcl9ub2RlKSAmJiAhKGtleSBpbiBzZWxmLnRyZWVXYWxsc1tzZWxmLmVsZXZhdGlvbl0gJiYgc2VsZi50cmVlV2FsbHNbc2VsZi5lbGV2YXRpb25dW2tleV0ubGVuZ3RoID4gMCkgO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmZvdiA9IG5ldyBST1QuRk9WLlByZWNpc2VTaGFkb3djYXN0aW5nKHRoaXMubGlnaHRQYXNzZXNDYWxsYmFjaywge3RvcG9sb2d5Ojh9KTtcbn1cblZpc2lvblNpbXVsYXRpb24ucHJvdG90eXBlLnVwZGF0ZVZpc2liaWxpdHkgPSBmdW5jdGlvbiAoZ1gsIGdZLCByYWRpdXMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGtleSA9IHh5MmtleShnWCwgZ1kpO1xuXG4gICAgcmFkaXVzID0gcmFkaXVzIHx8IHNlbGYucmFkaXVzO1xuICAgIHRoaXMuZWxldmF0aW9uID0gdGhpcy5lbGV2YXRpb25HcmlkW2tleV0uejtcbiAgICB0aGlzLndhbGxzID0gdGhpcy50cmVlV2FsbHNbdGhpcy5lbGV2YXRpb25dO1xuICAgIGlmICghdGhpcy5lbGV2YXRpb25XYWxsc1t0aGlzLmVsZXZhdGlvbl0pIHRoaXMuZWxldmF0aW9uV2FsbHNbdGhpcy5lbGV2YXRpb25dID0gZ2VuZXJhdGVFbGV2YXRpb25XYWxscyh0aGlzLmVsZXZhdGlvbkdyaWQsIHRoaXMuZWxldmF0aW9uKTtcbiAgICAvL3NldEVsZXZhdGlvbldhbGxzKHRoaXMud2FsbHMsIHRoaXMuZWxldmF0aW9uV2FsbHMsIHRoaXMuZWxldmF0aW9uKVxuICAgIC8vc2V0V2FsbHModGhpcy53YWxscywgdGhpcy5lbnRfZm93X2Jsb2NrZXJfbm9kZSk7XG4gICAgLy9zZXRXYWxscyh0aGlzLndhbGxzLCB0aGlzLnRvb2xzX25vX3dhcmRzKTtcbiAgICAvL3NldFRyZWVXYWxscyh0aGlzLndhbGxzLCB0aGlzLmVsZXZhdGlvbiwgdGhpcy50cmVlLCB0aGlzLnRyZWVfZWxldmF0aW9ucywgdGhpcy50cmVlX3N0YXRlLCB0aGlzLnRyZWVfYmxvY2tzKTtcblxuICAgIHRoaXMuZm92LndhbGxzID0gdGhpcy53YWxscztcbiAgICB0aGlzLmxpZ2h0cyA9IHt9O1xuICAgIHRoaXMuZm92LmNvbXB1dGUoZ1gsIGdZLCByYWRpdXMsIGZ1bmN0aW9uKHgyLCB5MiwgciwgdmlzKSB7XG4gICAgICAgIHZhciBrZXkgPSB4eTJrZXkoeDIsIHkyKTtcbiAgICAgICAgaWYgKCFzZWxmLmVsZXZhdGlvbkdyaWRba2V5XSkgcmV0dXJuO1xuICAgICAgICB2YXIgdHJlZVB0cyA9IHNlbGYudHJlZV9yZWxhdGlvbnNba2V5XTtcbiAgICAgICAgdmFyIHRyZWVCbG9ja2luZyA9IGZhbHNlO1xuICAgICAgICBpZiAodHJlZVB0cykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlUHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRyZWVQdCA9IHRyZWVQdHNbaV07XG4gICAgICAgICAgICAgICAgdHJlZUJsb2NraW5nID0gc2VsZi50cmVlX3N0YXRlW3RyZWVQdC5rZXldICYmIHNlbGYudHJlZV9lbGV2YXRpb25zW3RyZWVQdC5rZXldID4gc2VsZi5lbGV2YXRpb247XG4gICAgICAgICAgICAgICAgaWYgKHRyZWVCbG9ja2luZykgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpcyA9PSAxICYmICFzZWxmLmVudF9mb3dfYmxvY2tlcl9ub2RlW2tleV0gJiYgIXRyZWVCbG9ja2luZyAmJiAoZ1gteDIpKihnWC14MikgKyAoZ1kteTIpKihnWS15MikgPCByYWRpdXMgKiByYWRpdXMpIHtcbiAgICAgICAgICAgIHNlbGYubGlnaHRzW2tleV0gPSAyNTU7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuVmlzaW9uU2ltdWxhdGlvbi5wcm90b3R5cGUuaXNWYWxpZFhZID0gZnVuY3Rpb24gKHgsIHksIGJDaGVja0dyaWRuYXYsIGJDaGVja1Rvb2xzTm9XYXJkcywgYkNoZWNrVHJlZVN0YXRlKSB7XG4gICAgdmFyIGtleSA9IHh5MmtleSh4LCB5KSxcbiAgICAgICAgdHJlZUJsb2NraW5nID0gZmFsc2U7XG4gICAgICAgIFxuICAgIGlmIChiQ2hlY2tUcmVlU3RhdGUpIHtcbiAgICAgICAgdmFyIHRyZWVQdHMgPSB0aGlzLnRyZWVfcmVsYXRpb25zW2tleV07XG4gICAgICAgIGlmICh0cmVlUHRzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWVQdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdHJlZVB0ID0gdHJlZVB0c1tpXTtcbiAgICAgICAgICAgICAgICB0cmVlQmxvY2tpbmcgPSB0aGlzLnRyZWVfc3RhdGVbdHJlZVB0LmtleV07XG4gICAgICAgICAgICAgICAgaWYgKHRyZWVCbG9ja2luZykgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHggPj0gMCAmJiB4IDwgdGhpcy5ncmlkV2lkdGggJiYgeSA+PSAwICYmIHkgPCB0aGlzLmdyaWRIZWlnaHQgJiYgKCFiQ2hlY2tHcmlkbmF2IHx8ICF0aGlzLmdyaWRuYXZba2V5XSkgJiYgKCFiQ2hlY2tUb29sc05vV2FyZHMgfHwgIXRoaXMudG9vbHNfbm9fd2FyZHNba2V5XSkgJiYgKCFiQ2hlY2tUcmVlU3RhdGUgfHwgIXRyZWVCbG9ja2luZyk7XG59XG5cblZpc2lvblNpbXVsYXRpb24ucHJvdG90eXBlLnRvZ2dsZVRyZWUgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIga2V5ID0geHkya2V5KHgsIHkpO1xuICAgIHZhciBpc1RyZWUgPSAhIXRoaXMudHJlZV9yZWxhdGlvbnNba2V5XTtcbiAgICBpZiAoaXNUcmVlKSB7XG4gICAgICAgIHZhciB0cmVlUHRzID0gdGhpcy50cmVlX3JlbGF0aW9uc1trZXldO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWVQdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwdCA9IHRyZWVQdHNbaV07XG4gICAgICAgICAgICB0aGlzLnRyZWVfc3RhdGVbcHQua2V5XSA9ICF0aGlzLnRyZWVfc3RhdGVbcHQua2V5XTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5lbGV2YXRpb25WYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAoZWxldmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZXZhdGlvbiA8IHNlbGYudHJlZV9lbGV2YXRpb25zW3B0LmtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50cmVlX2Jsb2Nrc1twdC5rZXldLmZvckVhY2goZnVuY3Rpb24gKHB0Qikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IHNlbGYudHJlZVdhbGxzW2VsZXZhdGlvbl1bcHRCLmtleV0ubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHQueCA9PSBzZWxmLnRyZWVXYWxsc1tlbGV2YXRpb25dW3B0Qi5rZXldW2pdWzFdICYmIHB0LnkgPT0gc2VsZi50cmVlV2FsbHNbZWxldmF0aW9uXVtwdEIua2V5XVtqXVsyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRyZWVXYWxsc1tlbGV2YXRpb25dW3B0Qi5rZXldLnNwbGljZShqLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi50cmVlX3N0YXRlW3B0LmtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudHJlZV9ibG9ja3NbcHQua2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChwdEIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRyZWVXYWxsc1tlbGV2YXRpb25dW3B0Qi5rZXldID0gKHNlbGYudHJlZVdhbGxzW2VsZXZhdGlvbl1bcHRCLmtleV0gfHwgW10pLmNvbmNhdChbWyd0cmVlJywgcHQueCwgcHQueSwgTWF0aC5TUVJUMl1dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXNUcmVlO1xufVxuVmlzaW9uU2ltdWxhdGlvbi5wcm90b3R5cGUuc2V0UmFkaXVzID0gZnVuY3Rpb24gKHIpIHtcbiAgICB0aGlzLnJhZGl1cyA9IHI7XG59XG5WaXNpb25TaW11bGF0aW9uLnByb3RvdHlwZS5Xb3JsZFhZdG9HcmlkWFkgPSBmdW5jdGlvbiAod1gsIHdZLCBiTm9Sb3VuZCkge1xuICAgIHZhciB4ID0gKHdYIC0gdGhpcy53b3JsZE1pblgpIC8gNjQsXG4gICAgICAgIHkgPSAod1kgLSB0aGlzLndvcmxkTWluWSkgLyA2NDtcbiAgICBpZiAoIWJOb1JvdW5kKSB7XG4gICAgICAgIHggPSBwYXJzZUludChNYXRoLnJvdW5kKHgpKVxuICAgICAgICB5ID0gcGFyc2VJbnQoTWF0aC5yb3VuZCh5KSlcbiAgICB9XG4gICAgcmV0dXJuIHt4OiB4LCB5OiB5LCBrZXk6IHggKyAnLCcgKyB5fTtcbn1cblZpc2lvblNpbXVsYXRpb24ucHJvdG90eXBlLkdyaWRYWXRvV29ybGRYWSA9IGZ1bmN0aW9uIChnWCwgZ1kpIHtcbiAgICByZXR1cm4ge3g6IGdYICogNjQgKyB0aGlzLndvcmxkTWluWCwgeTogZ1kgKiA2NCArIHRoaXMud29ybGRNaW5ZfTtcbn1cblxuVmlzaW9uU2ltdWxhdGlvbi5wcm90b3R5cGUuR3JpZFhZdG9JbWFnZVhZID0gZnVuY3Rpb24gKGdYLCBnWSkge1xuICAgIHJldHVybiB7eDogZ1gsIHk6IHRoaXMuZ3JpZEhlaWdodCAtIGdZIC0gMX07XG59XG5cblZpc2lvblNpbXVsYXRpb24ucHJvdG90eXBlLkltYWdlWFl0b0dyaWRYWSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgdmFyIGdZID0gdGhpcy5ncmlkSGVpZ2h0IC0geSAtIDE7XG4gICAgcmV0dXJuIHt4OiB4LCB5OiBnWSwga2V5OiB4ICsgJywnICsgZ1l9O1xufVxuXG5WaXNpb25TaW11bGF0aW9uLnByb3RvdHlwZS5Xb3JsZFhZdG9JbWFnZVhZID0gZnVuY3Rpb24gKHdYLCB3WSkge1xuICAgIHZhciBwdCA9IHRoaXMuV29ybGRYWXRvR3JpZFhZKHdYLCB3WSk7XG4gICAgcmV0dXJuIHRoaXMuR3JpZFhZdG9JbWFnZVhZKHB0LngsIHB0LnkpO1xufVxuXG5WaXNpb25TaW11bGF0aW9uLnByb3RvdHlwZS5rZXkycHQgPSBrZXkycHQ7XG5WaXNpb25TaW11bGF0aW9uLnByb3RvdHlwZS54eTJrZXkgPSB4eTJrZXk7XG5WaXNpb25TaW11bGF0aW9uLnByb3RvdHlwZS54eTJwdCA9IHh5MnB0O1xuVmlzaW9uU2ltdWxhdGlvbi5wcm90b3R5cGUucHQya2V5ID0gcHQya2V5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpc2lvblNpbXVsYXRpb247IiwibW9kdWxlLmV4cG9ydHM9e1wid29ybGRNaW5YXCI6LTgyODgsXCJ3b3JsZE1heFhcIjo4Mjg4LFwid29ybGRNaW5ZXCI6LTgyODgsXCJ3b3JsZE1heFlcIjo4Mjg4fSJdfQ==