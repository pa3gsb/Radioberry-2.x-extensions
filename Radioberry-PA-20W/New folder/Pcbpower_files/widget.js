(function(){return function e(t,n,a){function i(s,r){if(!n[s]){if(!t[s]){var d="function"==typeof require&&require
if(!r&&d)return d(s,!0)
if(o)return o(s,!0)
var u=new Error("Cannot find module '"+s+"'")
throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}}
t[s][0].call(l.exports,function(e){return i(t[s][1][e]||e)},l,l.exports,e,t,n,a)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<a.length;s++)i(a[s])
return i}})()({1:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=o(e("./../obj/constants")),i=o(e("./../utils/common/dom"))
function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e=function(e){27===e.keyCode&&this.destroy()}
return{create:function(t){var n=document,i=n.body,o=n.createElement("DIV"),s=n.createElement("IMG"),r=n.createElement("DIV"),d=n.createElement("DIV")
o.setAttribute("id",a.default.modalDivId),o.onclick=this.destroy,s.setAttribute("src",t),s.onclick=this.destory,d.appendChild(s),d.className="image-cell",r.appendChild(d),r.className="image-wrapper",o.appendChild(r),i.appendChild(o),window.addEventListener?window.addEventListener("keydown",e.bind(this),!1):window.attachEvent("keydown",e.bind(this),!1)},destroy:function(){var t=document,n=t.body,o=t.getElementById(a.default.modalDivId)
o&&(i.default.purge(o),n.removeChild(o)),window.removeEventListener?window.removeEventListener("keydown",e.bind(this)):window.detachEvent("keydown",e.bind(this))}}}.bind(void 0)()
n.default=s},{"./../obj/constants":8,"./../utils/common/dom":12}],2:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=o(e("./omni/transition")),i=o(e("./omni/activity"))
function o(e){return e&&e.__esModule?e:{default:e}}var s={init:function(){a.default.start(),i.default.start()},destroy:function(){a.default.stop(),i.default.stop()}}
n.default=s},{"./omni/activity":3,"./omni/transition":6}],3:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=o(e("./../../utils/frame")),i=o(e("./../../utils/common/dom"))
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}var r=function(){s(this,this)
var e=null,t=null,n=null,o=function(){s(this,this),a.default.postMessage({action:"track_activity",payload:{seen:t}})}.bind(this),r=function(){s(this,this),t=(new Date).getTime()}.bind(this),d=function(e){s(this,this),i.default.unbindEvent("keypress",r),i.default.unbindEvent("mousemove",r),i.default.unbindEvent("click",r),e&&(i.default.bindEvent("keypress",r),i.default.bindEvent("mousemove",r),i.default.bindEvent("click",r))}.bind(this),u=function(){s(this,this)
var a=(new Date).getTime()
null===n||null===t||e&&(a<e||t<e||a-e<59e3||t>e&&t<a&&o()),e=a}.bind(this),l=function(){s(this,this),n&&clearInterval(n),n=null,t=null,e=null}.bind(this),f=function(){s(this,this),l(),d(!0),e=(new Date).getTime(),n=setInterval(u,6e4)}.bind(this),c=function(){s(this,this),t=(new Date).getTime(),o(),l(),d(!1)}.bind(this),h=function(){s(this,this),"hidden"===document.visibilityState&&c()}.bind(this)
return{start:function(){f(),i.default.bindEvent("focus",f),i.default.bindEvent("blur",c),i.default.bindEvent("beforeunload",c),i.default.bindEvent("visibilitychange",h)},stop:function(){c(),i.default.unbindEvent("focus",f),i.default.unbindEvent("blur",c),i.default.unbindEvent("beforeunload",c),i.default.unbindEvent("visibilitychange",h)}}}.bind(void 0)()
n.default=r},{"./../../utils/common/dom":12,"./../../utils/frame":16}],4:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a,i=(a=e("./../../utils/msg_handler"))&&a.__esModule?a:{default:a}
var o={track:function(e,t){i.default.subscribe("track_event",{eventName:e,data:t})}}
n.default=o},{"./../../utils/msg_handler":19}],5:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a={setCookie:function(e){var t=new Date(+new Date+31536e6)
return document.cookie="freshworks-s360-vid="+e+";domain=."+location.hostname+";path=/;expires="+t.toUTCString()+";SameSite=Lax;",e},removeCookie:function(){document.cookie="freshworks-s360-vid=;domain=."+location.hostname+";path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;SameSite=Lax;"},getCookie:function(){if(document.cookie){for(var e,t,n={},a=document.cookie.split(";"),i=0,o=a.length;i<o;i++)(e=a[i]&&a[i].split("="))&&e.length&&(n[e[0].trim()]=e[1])
return t=n&&n["freshworks-s360-vid"]?n["freshworks-s360-vid"]:this.generateUUID(),this.setCookie(t)}},generateUUID:function(){var e=(new Date).getTime(),t=performance&&performance.now&&1e3*performance.now()||0
return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var a=16*Math.random()
return e>0?(a=(e+a)%16|0,e=Math.floor(e/16)):(a=(t+a)%16|0,t=Math.floor(t/16)),("x"==n?a:7&a|8).toString(16)})}}
n.default=a},{}],6:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=o(e("./../../utils/common/observe")),i=o(e("./../../utils/frame"))
function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e,t,n,o=function(a){e=a.oldValue,t=a.newValue,n=a.title,i.default.postMessage({action:"track_location",payload:{pageUrl:a}})},s=function(){var a=window.location.href
t!==a&&(e=t,t=a,n=document.title,o({oldValue:e,newValue:t,title:n}))}
return{start:function(){t=window.location.href,o({newValue:t,title:document.title}),a.default.attach(window.history,"pushState",s),a.default.attach(window.history,"replaceState",s),window.addEventListener?(window.addEventListener("hashchange",s,!1),window.addEventListener("popstate",s,!1)):(window.attachEvent("hashchange",s,!1),window.attachEvent("popstate",s,!1))},stop:function(){e=t=void 0,a.default.detach(window.history,"pushState"),a.default.detach(window.history,"replaceState"),window.removeEventListener?(window.removeEventListener("hashchange",s),window.removeEventListener("popstate",s)):(window.detachEvent("hashchange",s),window.detachEvent("popstate",s))},track:o}}.bind(void 0)()
n.default=s},{"./../../utils/common/observe":14,"./../../utils/frame":16}],7:[function(e,t,n){"use strict"
var a,i,o=(a=e("./widget"))&&a.__esModule?a:{default:a}
if(window.fcWidget||(window.fcWidget=o.default),window.fcSettings)if("complete"===document.readyState){var s=window.fcSettings.onInit
s&&"function"==typeof s&&s(),o.default.init(window.fcSettings)}else document.onreadystatechange=(i=o.default,function(){if("complete"===document.readyState){var e=window.fcSettings.onInit
e&&"function"==typeof e&&e(),i.init(window.fcSettings)}})},{"./widget":24}],8:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
n.default={SAMPLE_TOKEN:"WEB_CHAT_TOKEN",frameDivId:"fc_frame",frameId:"fc_widget",pushFrameDivId:"fc_push_frame",pushFrameId:"fc_push",modalDivId:"fc_web_modal",classes:{fullscreenClass:"fc-widget-fullscreen"},AJAX_URL:{canary:"/app/services/app/webchat/{token}/canary"},canaryRoutes:{feature:"canary",rts:"rtscanary"}}},{}],9:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e=!1,t=!1,n=!1,a=!1,i=[],o={}
return{isLoaded:function(){return e},loaded:function(t){e=t},isInitialized:function(){return t},initialized:function(e){t=e},isOpened:function(){return n},opened:function(e){n=e},doOpen:function(){return a},openOnLoad:function(e){a=e},getTags:function(){return i},setTags:function(e){i=e},getFaqTags:function(){return o},setFaqTags:function(e){o=e},reset:function(){e=!1,t=!1,n=!1,a=!1,i=[],o={}}}}.bind(void 0)()
n.default=a},{}],10:[function(e,t,n){"use strict"
function a(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var i=function(){a(this,this)
var e=null,t=null,n=null,i=null,o=null,s=!1,r={},d={},u=["firstName","lastName","email","phone","phoneCountry","locale"]
return{getFlowId:function(){return n},setFlowId:function(e){n=e},getFlowVersionId:function(){return i},setFlowVersionId:function(e){i=e},getPreviewMode:function(){return o},setPreviewMode:function(e){o=e},getExternalId:function(){return e},setExternalId:function(t){e=t},getRestoreId:function(){return t},setRestoreId:function(e){t=e},setIdentifyByReferenceId:function(e){s=e},getIdentifyByReferenceId:function(){return s},getConfig:function(){return r},setConfig:function(e){r=e},getProperties:function(){return d},setProperties:function(e){e&&(u.forEach(function(t){a(this,this),e[t]&&(d[t]=e[t])}.bind(this)),e.meta&&this.setUserMeta(e.meta))},setFirstName:function(e){d.firstName=e},setLastName:function(e){d.lastName=e},setEmail:function(e){d.email=e},setPhone:function(e){d.phone=e},setPhoneCountry:function(e){d.phoneCountry=e},setUserMeta:function(e){if(d.meta=d.meta||{},e)for(var t in e)e.hasOwnProperty(t)&&(d.meta[t]=e[t])},setLocale:function(e){d.locale=e},reset:function(){e=null,t=null,r={},d={}},getJSON:function(){return{externalId:e,restoreId:t,customConfig:r,properties:d}}}}.bind(void 0)()
n.default=i},{}],11:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a,i=(a=e("./common/dom"))&&a.__esModule?a:{default:a}
var o=function(){return function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}(this,this),{init:function(e){var t=document.createElement("script"),n=i.default.cdn_url()?i.default.cdn_url():e.host
t.type="text/javascript",t.src=n+"/js/co-browsing.js",(document.body?document.body:document.getElementsByTagName("head")[0]).appendChild(t),window.fc_cobrowse={host:e.host,locale:e.locale}}}}.bind(void 0)()
n.default=o},{"./common/dom":12}],12:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a,i=(a=e("../../../config/cb_environment"))&&a.__esModule?a:{default:a}
var o,s,r,d,u,l,f,c,h,p={url_domain:function(e){var t=document.createElement("a")
return t.href=e,t.origin},getElementStyle:function(e,t){return window.getComputedStyle(e)[t]},setAttr:function(e,t){for(var n in t)t.hasOwnProperty(n)&&e.setAttribute(n,t[n])
return e},remove:function(e){var t=document,n=t.body,a=t.getElementById(e)
a&&(this.purge(a),n.removeChild(a))},purge:function(e){var t,n,a,i=e.attributes
if(i)for(t=i.length-1;t>=0;t-=1)"function"==typeof e[a=i[t].name]&&(e[a]=null)
if(i=e.childNodes)for(n=i.length,t=0;t<n;++t)this.purge(e.childNodes[t])},cdn_url:function(){if(i.default&&i.default.config){var e=i.default.config.type,t=i.default.config.cdn
return t.protocol[e]+(t.enabled.forAssets?t.assets:"")+t.domain[e]}},bindEvent:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
window.addEventListener?window.addEventListener(e,t,n):window.attachEvent(e,t,n)},unbindEvent:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
window.removeEventListener?window.removeEventListener(e,t,n):window.detachEvent(e,t,n)},parseJSON:function(e){var t
if(e){try{t=JSON.parse(e)}catch(n){}return t}},stringifyJSON:function(e){var t=null
if(e){try{var n=window.ItilUtil&&window.ItilUtil.jsonStringifyWrapper
t=n&&"function"==typeof n&&n(e)||JSON.stringify(e)}catch(a){}return t}},storageAvailable:function(e){var t
try{var n="__storage_test__"
return(t=window.localStorage).setItem(n,n),t.removeItem(n),!0}catch(a){return a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&0!==t.length}}(),isPushSupportedByBrowser:function(){var e,t,n,a,i,o,s,r,d=!1,u=!1
a=window.chrome,i=window.navigator,o=i.vendor,s=i.userAgent.indexOf("OPR")>-1,r=i.userAgent.indexOf("Edge")>-1,null!=a&&"Google Inc."===o&&!1===s&&!1===r&&(e=!!(n=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./))&&parseInt(n[2],10))&&(d=e>=50),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&(t=function(){var e=navigator.userAgent,t=e.indexOf("Firefox"),n=e.substring(t+8).split(".")
return!(!n||!n.length)&&parseInt(n[0],10)}())&&(u=t>=44)
var l="serviceWorker"in navigator,f=function(){var e=!1
try{ServiceWorkerRegistration&&"showNotification"in ServiceWorkerRegistration.prototype&&(e=!0)}catch(t){}return e}(),c="PushManager"in window
return l&&f&&c&&(d||u)},getAgent:(u=navigator.appVersion,l=navigator.userAgent,f=navigator.appName,c=""+parseFloat(u),h=parseInt(u,10),-1!==l.indexOf("Station")&&(d="Station"),-1!==(s=l.indexOf("Opera"))?(f="Opera",c=l.substring(s+6),-1!==(s=l.indexOf("Version"))&&(c=l.substring(s+8))):-1!==(s=l.indexOf("MSIE"))?(f="Microsoft Internet Explorer",c=l.substring(s+5)):-1!==(s=l.indexOf("Edge"))?(f="Edge",c=l.substring(s+5)):-1!==(s=l.indexOf("Trident"))?(f="Trident",c=l.substring(s+8)):-1!==(s=l.indexOf("Chrome"))?(f="Chrome",c=l.substring(s+7)):-1!==(s=l.indexOf("Safari"))?(f="Safari",c=l.substring(s+7),-1!==(s=l.indexOf("Version"))&&(c=l.substring(s+8))):-1!==(s=l.indexOf("Firefox"))?(f="Firefox",c=l.substring(s+8)):-1===(s=l.indexOf("Mobile"))||-1===l.indexOf("iPad")&&-1===l.indexOf("iPhone")&&-1===l.indexOf("iPod")&&-1===l.indexOf("wv")?(o=l.lastIndexOf(" ")+1)<(s=l.lastIndexOf("/"))&&(f=l.substring(o,s),c=l.substring(s+1),f.toLowerCase()===f.toUpperCase()&&(f=navigator.appName)):(f="WebView",c=l.substring(s+8)),-1!==(r=c.indexOf(";"))&&(c=c.substring(0,r)),-1!==(r=c.indexOf(" "))&&(c=c.substring(0,r)),h=parseInt(""+c,10),isNaN(h)&&(c=""+parseFloat(u),h=parseInt(u,10)),{name:f,appName:d,version:h,versionx:c,os:navigator.platform}),isSafariBrowser:function(){return!(!this.getAgent||"Safari"!==this.getAgent.name)}}
n.default=p},{"../../../config/cb_environment":25}],13:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
n.default={isFunction:function(e){return!(!e||"function"!=typeof e)}}},{}],14:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e={}
return{attach:function(t,n,a){var i="".concat(n).concat("_fc_observer")
t[n]&&a&&(void 0===t[i]||t[i]!==a)&&(t[i]=a,function(t,n){e[n]=t[n],t[n]=function(){var a=e[n].apply(t,arguments),i=t["".concat(n).concat("_fc_observer")]
return"function"==typeof i&&i(),a}}(t,n))},detach:function(t,n){var a="".concat(n).concat("_fc_observer")
t[n]&&t[a]&&(t[a]=void 0,function(t,n){e[n]&&(delete t[n],t[n]=e[n],delete e[n])}(t,n))}}}.bind(void 0)()
n.default=a},{}],15:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a,i=(a=e("./common/js_util"))&&a.__esModule?a:{default:a}
var o=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e={},t=["widget:opened","widget:closed","widget:loaded","dialog:opened","dialog:closed","widget:destroyed","frame:statechange","user:statechange","user:created","user:cleared","user:authenticated","message:sent","message:received","unreadCount:notify","push:subscribed","readReceipts:update","csat:received","csat:updated","csat:show","anchorLink:clicked","faq:clicked","download:file","rts:connected","rts:disconnected"]
return{clear:function(){e={}},valid:function(e){return!(!e||!t)&&-1!==t.indexOf(e)},subscribe:function(t,n){this.valid(t)&&(void 0===e[t]&&(e[t]=[]),e[t].push(n))},unsubscribe:function(t,n){if(this.valid(t)){var a,o=e&&e[t]
if(o)for(var s=0,r=o.length;s<r;s++)if(a=o[s],i.default.isFunction(a)&&(!n||a.name===n.name)){e[t].splice(s,1)
break}}},publish:function(t,n,a){if(this.valid(t)){var i=e&&e[t]
if(i)for(var o=function(e){return function(){n?e(n):e()}},s=0,r=i.length;s<r;s++){var d=o(i[s])
a?setTimeout(d,0):d()}}}}}.bind(void 0)()
n.default=o},{"./common/js_util":13}],16:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=s(e("./../obj/constants")),i=s(e("./../obj/user")),o=s(e("./common/dom"))
function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}var d=function(){r(this,this)
var e=null,t=null,n=null,s=null,d=null,u=null,l=!1,f=!1,c=null,h=!1,p=null,g=null,m=null,v=null,w=null,b=["get_user_uuid"]
return{getHost:function(){return d},getToken:function(){return t},getReferrer:function(){return n},getSiteId:function(){return s},getSettings:function(){return u},setSettings:function(e){l=!!((u=e).userAuthConfig&&u.userAuthConfig.jwtAuthEnabled&&u.userAuthConfig.strictModeEnabled),f=!(!u.userAuthConfig||!u.userAuthConfig.jwtAuthEnabled)},isJWTStrictMode:function(){return l},isJWTEnabled:function(){return f},getJWTAuthToken:function(){return c},setJWTAuthToken:function(e){c=e},isLoaded:function(){return h},loaded:function(e){h=e},loadingActions:function(){return b},init:function(e){t=e.token,n=e.referrer,d=e.host,s=e.siteId,l=!1,f=!1,c=e.jwtAuthToken,h=!1,p=e.flowId,g=e.flowVersionId,m=e.previewMode,v=e.cspNonce,w=e.omniCookie},reset:function(){t=n=d=s=l=f=c=h=p=g=m=w=void 0},getJSON:function(){return{token:t,flowId:p,flowVersionId:g,previewMode:m,referrer:n,host:d,siteId:s,jwtStrictMode:l,jwtEnabled:f,jwtAuthToken:c,loaded:h,omniCookie:w}},load:function(t,n,a){if(o.default.isSafariBrowser()&&v){var i=document.createElement("script")
i.nonce=v,i.textContent='window.location = "'.concat(t,'"'),e=a.contentWindow,a.contentDocument.body.appendChild(i)}else e=window.open(t,n)},postMessage:function(t){e&&e.postMessage(t,d)},dispatch:function(e,t){e&&t&&"function"==typeof e&&e(t)},unload:function(){this.postMessage({action:"push_subscribe_destroy"})},add:function(){var e=document,t=e.body,n=e.getElementById(a.default.frameDivId),s=e.createElement("IFRAME"),r=i.default.getConfig(),d=r&&r.cssNames,u=r&&r.widgetCanary
n&&"DIV"===n.tagName||(n=e.createElement("DIV"),t.appendChild(n)),o.default.setAttr(n,{id:a.default.frameDivId,class:d&&d.widget||""}),n.classList.add("fc_dn"),r&&r.headerProperty?("ltr"===r.headerProperty.direction&&n.classList.add("fc_l2r"),r.headerProperty.hideChatButton||n.classList.remove("fc_dn")):n.classList.remove("fc_dn"),o.default.setAttr(s,{id:a.default.frameId,name:a.default.frameId,title:"Chat",frameborder:"0",allowFullScreen:"true",webkitallowfullscreen:"true",mozallowfullscreen:"true"}),n.appendChild(s),u?this.loadCanaryWidget(a.default.canaryRoutes.feature,s):this.loadRTSCanaryWidget(s)},loadRTSCanaryWidget:function(e){var n=new XMLHttpRequest,i=a.default.AJAX_URL.canary.replace("{token}",t)
i=d+i,n.open("GET",i,!0),n.onreadystatechange=function(){if(r(this,this),4===n.readyState){var t=o.default.parseJSON(n.response),i=t&&t.canary_enabled?a.default.canaryRoutes.rts:""
this.loadCanaryWidget(i,e)}}.bind(this),n.send()},loadCanaryWidget:function(e,i){this.load("".concat(d,"/widget/").concat(e,"?token=").concat(t,"&referrer=").concat(n),a.default.frameId,i)},remove:function(t){o.default.remove(t),e=null},setFrameSize:function(){var e=this.getSettings(),t=i.default.getConfig()
if(null===e)return""
var n=e.widgetSize,o=!(!t||!t.fullscreen)&&t.fullscreen,s="fc-widget-normal",r=document.getElementById(a.default.frameDivId)
!0===o&&r.classList.add(a.default.classes.fullscreenClass),n&&n.length>0&&(s="fc-widget-"+n.toLowerCase()),r.classList.add(s)},setWidgetDisplayStyle:function(){var e=document.body,t=document.getElementById(a.default.frameDivId),n=o.default.getElementStyle(e,"display")
n&&-1!==["flex","grid"].indexOf(n)&&o.default.setAttr(t,{style:"display: ".concat(n)})}}}.bind(void 0)()
n.default=d},{"./../obj/constants":8,"./../obj/user":10,"./common/dom":12}],17:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=m(e("./common/dom")),i=m(e("./frame")),o=m(e("./events")),s=m(e("../obj/constants")),r=m(e("../obj/state")),d=m(e("../obj/user")),u=m(e("./msg_handler")),l=m(e("./push_frame")),f=m(e("../helpers/modal")),c=m(e("../helpers/omni")),h=m(e("./msg_processor")),p=m(e("./cb")),g=m(e("./../helpers/omni/omni-cookie"))
function m(e){return e&&e.__esModule?e:{default:e}}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w,b={onMessageCB:function(){return w||(w=this.onMessage.bind(this))},onVisibilityChangeCB:function(){var e
return function(){return e||(e=this.onVisibilityChange.bind(this))}}(),subscribe:function(){window.addEventListener?(window.addEventListener("message",this.onMessageCB(),!1),window.addEventListener("focus",this.onVisibilityChangeCB(),!1),window.addEventListener("blur",this.onVisibilityChangeCB(),!1)):(window.attachEvent("onmessage",this.onMessageCB()),window.attachEvent("focus",this.onVisibilityChangeCB()),window.attachEvent("blur",this.onVisibilityChangeCB()))},unsubscribe:function(){window.removeEventListener?(window.removeEventListener("message",this.onMessageCB(),!1),window.removeEventListener("focus",this.onVisibilityChangeCB(),!1),window.removeEventListener("blur",this.onVisibilityChangeCB(),!1)):(window.detachEvent("onmessage",this.onMessageCB()),window.detachEvent("focus",this.onVisibilityChangeCB()),window.detachEvent("blur",this.onVisibilityChangeCB()))},onVisibilityChange:function(e){switch(e.type){case"focus":i.default.postMessage({action:"widget_focus"})
break
case"blur":i.default.postMessage({action:"widget_blur",payload:{title:document.title,location:window.location.href}}),l.default.postMessage({action:"widget_location",openWindow:!1,payload:window.location.href})}},onUserCreate:function(e){o.default.publish("user:created",e)},loadWidget:function(){if(!1===r.default.isInitialized()){r.default.initialized(!0)
var e=i.default.getJSON(),t=d.default.getProperties(),n=d.default.getConfig(),o=r.default.getTags(),s=r.default.getFaqTags()
if(e.externalId=d.default.getExternalId(),e.restoreId=d.default.getRestoreId(),e.flowId=d.default.getFlowId(),e.flowVersionId=d.default.getFlowVersionId(),e.previewMode=d.default.getPreviewMode(),e.identifyByReferenceId=d.default.getIdentifyByReferenceId(),t&&(e.properties=t),n&&(e.config=n),o&&(e.tags=o),s&&(e.faqTags=s),e.userAgent=a.default.getAgent,a.default.storageAvailable){var u=e.token,l=localStorage.getItem(u),f=e.siteId?"".concat(e.token,"_").concat(e.siteId):null,c=f?localStorage.getItem(f):null
if((l||f&&c)&&(e.storage={},e.storage[u]=l||JSON.stringify({}),f&&(e.storage[f]=c||JSON.stringify({}))),n&&n.overrideDS){var h="lsds_".concat(f||u),p=localStorage.getItem(h)
p?e.lsds=v({},h,p):(e.lsds=v({},h,JSON.stringify({})),e.migrateLFDS=!0)}}i.default.setFrameSize(),i.default.setWidgetDisplayStyle(),i.default.postMessage({action:"load_widget",payload:e})}},unloadWidget:function(){l.default.isLoaded()&&l.default.unload(),r.default.reset(),d.default.reset(),c.default.destroy(),i.default.reset(),i.default.remove(s.default.frameDivId),this.unsubscribe(),o.default.publish("widget:destroyed",null,!0),o.default.clear()},updateFrameSettings:function(e){if(null!==i.default.getSettings()||void 0===e)return!1
i.default.setSettings(e)},onMessage:function(e){var t=e.origin||e.originalEvent.origin,n=d.default.getConfig(),m=n&&n.cssNames
if(t===i.default.getHost()||t===l.default.getHostOrigin()){var v=e.data,w=v&&v.action
if(this.updateFrameSettings(v.settingsPayload),w){var b=document.getElementById(s.default.frameDivId),_=m&&m.expanded||"expanded"
switch(w){case"push_subscribe_destroy_response":this.unloadWidget()
break
case"push_user_meta":o.default.publish("push:subscribed",v.data),i.default.postMessage(v)
break
case"toggle_dialog":v.data?o.default.publish("dialog:opened"):o.default.publish("dialog:closed")
break
case"reset_user_cookie":g.default.removeCookie(),i.default.postMessage({action:"update_cookie",payload:{omniCookie:g.default.getCookie()}})
break
case"restore_user_cookie":g.default.removeCookie(),g.default.setCookie(v.alias),i.default.postMessage({action:"restore_cookie",payload:{alias:v.alias}})
break
case"notify_frame":var y=v.data,I=document.getElementById(s.default.frameDivId),k=m&&m.open||"fc-open"
"expand"===y?(I.removeAttribute("style"),I.classList.add("h-open-notify"),I.classList.add(k),I.classList.add(y)):"close"===y?(I.removeAttribute("style"),I.classList.remove("h-open-notify"),I.classList.remove(k),I.classList.remove("expand")):"mobile-view"===y?I.classList.add("fc-mobile-view"):(I.classList.add("h-open-notify"),I.classList.add(k))
break
case"resize_frame":var E=document.getElementsByTagName("BODY")[0],C=m&&m.open||"fc-open"
r.default.opened(v.isOpen),r.default.isOpened()?(b.classList.add("h-open-container"),b.classList.add(C),o.default.publish("widget:opened"),E&&E.classList.add("fc-widget-open")):(b.removeAttribute("style"),b.classList.remove("h-open-container"),b.classList.remove(C),o.default.publish("widget:closed"),E&&E.classList.remove("fc-widget-open"))
break
case"toggle_frame":v.show?b.classList.remove("hide"):-1===b.className.trim().indexOf("hide")&&b.classList.add("hide")
break
case"push_frame_loaded":l.default.loaded(!0),l.default.setSource(e&&e.source),l.default.postMessage({action:"widget_location",openWindow:!1,payload:window.location.href}),i.default.postMessage({action:"widget_location",payload:{title:document.title,location:window.location.href}})
break
case"frame_state_change":var x=document.getElementById(s.default.frameDivId),M=v&&v.data,L=M&&M.frameState,O=i.default.getSettings()&&i.default.getSettings().enabledFeatures
o.default.publish("frame:statechange",v),"initialized"===L&&(i.default.isJWTEnabled()&&i.default.isJWTStrictMode()&&x.classList.add("fc_dn"),this.loadWidget(),O&&-1!==O.indexOf("COBROWSING")&&p.default.init({host:i.default.getHost(),locale:d.default.getProperties().locale})),"loaded"===L&&i.default.loaded(!0),"authenticated"!==L&&"not_authenticated"!==L||i.default.isJWTEnabled()&&i.default.isJWTStrictMode()&&(v.success?x.classList.remove("fc_dn"):304!==v.status&&this.unloadWidget())
break
case"widget_loaded":r.default.loaded(!0),o.default.publish("widget:loaded"),l.default.isLoaded()||l.default.init({host:v.pushDomain+"?ref="+btoa(window.location.origin),hostOrigin:a.default.url_domain(v.pushDomain),appLogoPath:v.appLogoPath,locale:v.locale,sales360App:v.sales360App}),r.default.doOpen()&&i.default.postMessage({action:"open_chat"}),i.default.postMessage({action:"widget_location",payload:{title:document.title,location:window.location.href}})
break
case"datastore_loaded":i.default.postMessage({action:"load_rules"})
break
case"rules_loaded":c.default.init(),h.default.start()
break
case"enlarge_image":f.default.create(v.picUrl)
break
case"expand_all":document.getElementById(s.default.frameDivId).classList.add("expanded-modal"),document.getElementById(s.default.frameDivId).classList.add(_)
break
case"expand_article_view":document.getElementById(s.default.frameDivId).classList.toggle("expanded-article_view")
break
case"set_bubble_height":document.getElementById(s.default.frameDivId).style.height=v.height+"px"
break
case"collapse_all":document.getElementById(s.default.frameDivId).classList.remove("expanded-modal"),document.getElementById(s.default.frameDivId).classList.remove(_),document.getElementById(s.default.frameDivId).classList.add("avoid-jitter"),setTimeout(function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this),document.getElementById(s.default.frameDivId).classList.remove("avoid-jitter")}.bind(this),300)
break
case"user_state_change":o.default.publish("user:statechange",v)
break
case"user_authenticated":o.default.publish("user:authenticated",v)
break
case"user_created":var S=v.data
if(r.default.isLoaded())S&&d.default.setRestoreId(S.restoreId),this.onUserCreate(v)
else if(v.success){var P=S&&S.externalId,T=S&&S.restoreId,A=d.default.getExternalId()
A?A===P&&(d.default.setRestoreId(T),this.onUserCreate(v)):this.onUserCreate(v)}else this.onUserCreate(v)
break
case"user_cleared":o.default.publish("user:cleared"),l.default.postMessage({action:"clear:subscription",openWindow:!1}),d.default.reset()
break
case"message_sent":o.default.publish("message:sent",v)
break
case"message_received":o.default.publish("message:received",v)
break
case"read_receipts_update":o.default.publish("readReceipts:update",v)
break
case"csat_updated":o.default.publish("csat:updated",v)
break
case"csat_received":o.default.publish("csat:received",v)
break
case"anchor_link_clicked":o.default.publish("anchorLink:clicked",v)
break
case"faq_clicked":o.default.publish("faq:clicked",v)
break
case"download_file":o.default.publish("download:file",v)
break
case"ask_permission":l.default.postMessage({action:"ask:permission",openWindow:!0})
break
case"clear_subscription":l.default.postMessage({action:"clear:subscription",openWindow:!1})
break
case"unread_count_notify":o.default.publish("unreadCount:notify",v.data)
break
case"message_from_agent":o.default.publish("message:received",v.data)
break
case"message_from_user":o.default.publish("message:sent",v.data)
break
case"set_storage_item":if(a.default.storageAvailable){var N=v.data
N&&N.key&&N.value&&localStorage.setItem(N.key,JSON.stringify(N.value))}break
case"remove_storage_item":if(a.default.storageAvailable){var j=v.data
j&&j.key&&localStorage.removeItem(j.key)}break
case"startScreenShare":window.fc_cobrowse&&window.fc_cobrowse.allowScreenShare(e)
break
case"set_lsds_item":if(a.default.storageAvailable){var D=v.data,B=D&&D.key
if(B){var F=D&&D.value
localStorage.setItem(B,a.default.stringifyJSON(F))}}break
case"get_lsds_item":if(a.default.storageAvailable){var W=v.data,V=W&&W.key
V&&localStorage.getItem(V)}break
case"remove_lsds_item":if(a.default.storageAvailable){var R=v.data,q=R&&R.key
q&&localStorage.removeItem(q)}break
case"requestForAudioCall":window.fc_cobrowse&&window.fc_cobrowse.requestForAudioCall(e)
break
case"rts_connected":o.default.publish("rts:connected",v.data)
break
case"rts_disconnected":o.default.publish("rts:disconnected",v.data)
break
case"stack_max_height":var J=screen.height<=568?screen.height:screen.height-250
document.getElementById(s.default.frameDivId).style.maxHeight=J+"px",i.default.postMessage({action:"stacked_max_height",payload:{height:J}})
break
default:u.default.publish(w,v)}}}},syncResponse:function(e,t){var n=e&&e.status
n?i.default.dispatch(t,{success:200===n,status:n}):i.default.dispatch(t,{success:!1,status:400})}}
n.default=b},{"../helpers/modal":1,"../helpers/omni":2,"../obj/constants":8,"../obj/state":9,"../obj/user":10,"./../helpers/omni/omni-cookie":5,"./cb":11,"./common/dom":12,"./events":15,"./frame":16,"./msg_handler":19,"./msg_processor":20,"./push_frame":22}],18:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a,i=(a=e("./msg_handler"))&&a.__esModule?a:{default:a}
var o={send:function(e,t,n){t&&"function"==typeof t&&(n=t,t=null),i.default.subscribe(e,t,n)}}
n.default=o},{"./msg_handler":19}],19:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=s(e("./frame")),i=s(e("./../obj/state")),o=s(e("./queue"))
function s(e){return e&&e.__esModule?e:{default:e}}var r=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e={}
return{subscribe:function(t,n,s){i.default.isLoaded()||a.default.isLoaded()&&-1!==a.default.loadingActions().indexOf("get_user_uuid")?(e[t+"_ack"]=s,a.default.postMessage({action:t,payload:n})):o.default.enque({action:t,payload:n,handler:s})},publish:function(t,n){a.default.dispatch(e[t],{success:n.success,status:n.status,data:n.data})}}}.bind(void 0)()
n.default=r},{"./../obj/state":9,"./frame":16,"./queue":23}],20:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=o(e("./queue")),i=o(e("./msg_handler"))
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}var r={start:function(){a.default.isEmpty()||a.default.isLocked()||(a.default.toggleLock(!0),this.run())},run:function(){var e=a.default.deque()
e?this.process(e):a.default.toggleLock(!1)},process:function(e){e.handler?i.default.subscribe(e.action,e.payload,function(t){s(this,this),"function"==typeof e.handler&&e.handler(t),this.run()}.bind(this)):(i.default.subscribe(e.action,e.payload),setTimeout(function(){s(this,this),this.run()}.bind(this),0))}}
n.default=r},{"./msg_handler":19,"./queue":23}],21:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a,i=(a=e("./msg_handler"))&&a.__esModule?a:{default:a}
var o={send:function(e,t){return new Promise(function(n,a){i.default.subscribe(e,t,function(e){var t=e&&e.status,i=e&&e.success
200===t||i?n(e):a(e)})})}}
n.default=o},{"./msg_handler":19}],22:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=o(e("./common/dom")),i=o(e("../obj/constants"))
function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e=null,t=null,n=null,o=!1,s=null,r=null,d=null
return{isLoaded:function(){return o},loaded:function(e){o=e},getSource:function(){return d},setSource:function(e){d=e},getHost:function(){return e},getHostOrigin:function(){return t},getLogoPath:function(){return n},init:function(a){e=a.host,t=a.hostOrigin,n=a.appLogoPath,s=a.locale,r=a.sales360App,this.load()},reset:function(){e=null,t=null,n=null,s=null,r=null,o=!1,d=null},postMessage:function(t){t.openWindow?window.open(e+"&action="+btoa(t.action)+"&appLogoPath="+btoa(n)+"&locale="+btoa(s)+"&sales360App="+btoa(r),"_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"):o&&this.post({action:t.action,payload:t.payload})},post:function(e){d.postMessage(e,t)},add:function(){var t=document,n=t.body,o=t.getElementById(i.default.pushFrameDivId),s=t.createElement("IFRAME")
o&&"DIV"===o.tagName||(o=t.createElement("DIV"),n.appendChild(o)),o.setAttribute("id",i.default.pushFrameDivId),a.default.setAttr(s,{id:i.default.pushFrameId,src:e,frameborder:"0"}),o.appendChild(s)},load:function(){a.default.isPushSupportedByBrowser()&&this.add()},unload:function(){a.default.remove(i.default.pushFrameDivId),this.reset()}}}.bind(void 0)()
n.default=s},{"../obj/constants":8,"./common/dom":12}],23:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=function(){(function(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")})(this,this)
var e=[],t=!1
return{enque:function(n){t||(void 0===e&&(e=[]),e.push(n))},deque:function(){if(e&&e.length)return e.shift()},toggleLock:function(e){t=e},isLocked:function(){return t},isEmpty:function(){return!e||!e.length}}}.bind(void 0)()
n.default=a},{}],24:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0
var a=w(e("./obj/constants")),i=w(e("./obj/state")),o=w(e("./obj/user")),s=w(e("./utils/msg_promise")),r=w(e("./utils/msg_callback")),d=w(e("./utils/msg_handler")),u=w(e("./utils/common/dom")),l=w(e("./utils/frame")),f=w(e("./utils/message")),c=w(e("./utils/events")),h=w(e("./utils/push_frame")),p=w(e("./helpers/omni/analytics")),g=w(e("./helpers/omni/transition")),m=w(e("./helpers/omni")),v=w(e("./helpers/omni/omni-cookie"))
function w(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}var _=function(){b(this,this)
return{init:function(e){var t,n,s,r,d=-1!==["Chrome","Firefox","Safari","Edge","Trident","WebView"].indexOf(u.default.getAgent.name),h=-1!==["Station"].indexOf(u.default.getAgent.appName)
if(d&&!h&&!this.isInitialized()){var p=e&&e.token
p&&p.toUpperCase()!==a.default.SAMPLE_TOKEN&&(window.location.origin||(window.location.origin=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),e.referrer=btoa(window.location.origin),void 0===e.open&&(e.open=!1),r=e,i.default.reset(),o.default.reset(),m.default.destroy(),f.default.unsubscribe(),l.default.init({host:r.host.trim(),token:r.token.trim(),referrer:r.referrer,siteId:r.siteId,flowId:r.flowId,flowVersionId:r.flowVersionId,previewMode:r.previewMode,jwtAuthToken:r.jwtAuthToken,cspNonce:r.cspNonce,omniCookie:v.default.getCookie()}),i.default.openOnLoad(r.open),r.identifyByReferenceId&&o.default.setIdentifyByReferenceId(!0),r.flowId&&o.default.setFlowId(r.flowId),r.flowVersionId&&o.default.setFlowVersionId(r.flowVersionId),r.previewMode&&o.default.setPreviewMode(r.previewMode),r.externalId&&(o.default.setExternalId(r.externalId),o.default.setRestoreId(r.restoreId)),r.tags&&r.tags.length&&i.default.setTags(r.tags),r.faqTags&&i.default.setFaqTags(r.faqTags),o.default.setProperties({firstName:r.firstName,lastName:r.lastName,email:r.email,phone:r.phone,phoneCountry:r.phoneCountryCode,locale:r.locale,meta:r.meta}),o.default.setConfig(r.config),r.onLoad&&c.default.subscribe("widget:loaded",r.onLoad),l.default.add(),f.default.subscribe(),t=document,n=t.createElement("link"),s=u.default.cdn_url()?u.default.cdn_url():l.default.getHost(),n.href=s+"/css/widget.css?t="+(new Date).getTime(),n.rel="stylesheet",t.getElementsByTagName("head")[0].appendChild(n))}},destroy:function(){h.default.unload(),l.default.unload()},isOpen:function(){return i.default.isOpened()},isInitialized:function(){return!!l.default.getToken()},isLoaded:function(){return i.default.isLoaded()},on:function(e,t){c.default.subscribe(e,t)},off:function(e,t){c.default.unsubscribe(e,t)},open:function(e){e?d.default.subscribe("open_channel",e):d.default.subscribe("open_chat")},close:function(){d.default.subscribe("close_chat")},show:function(){d.default.subscribe("show_chat")},hide:function(){d.default.subscribe("hide_chat")},setTags:function(e){i.default.isLoaded()&&(e&&e.length?i.default.setTags(e):i.default.setTags([]),d.default.subscribe("set_tags",{tags:i.default.getTags(),force:!0}))},setFaqTags:function(e){i.default.isLoaded()&&(e?i.default.setFaqTags(e):i.default.setFaqTags({}),d.default.subscribe("set_faq_tags",{faqTags:i.default.getFaqTags(),force:!0}))},setExternalId:function(e,t){var n={}
if(e){if("string"==typeof e?n.externalId=e:n=e,!(void 0===window.Promise||t&&"function"==typeof t))return s.default.send("set_external_id",n)
r.default.send("set_external_id",n,t)}},setConfig:function(e){var t=document.getElementById(a.default.frameDivId)
t&&e&&(void 0!==e.fullscreen&&(t.classList.remove(a.default.classes.fullscreenClass),!0===e.fullscreen&&t.classList.add(a.default.classes.fullscreenClass)),e.headerProperty&&(void 0!==e.headerProperty.direction&&(t.classList.remove("fc_l2r"),"ltr"===e.headerProperty.direction&&t.classList.add("fc_l2r")),void 0!==e.headerProperty.hideChatButton&&(t.classList.remove("fc_dn"),e.headerProperty.hideChatButton&&t.classList.add("fc_dn")))),d.default.subscribe("set_custom_config",e)},user:{get:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return s.default.send("get_user")
r.default.send("get_user",e)},isExists:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return s.default.send("user_exists")
r.default.send("user_exists",e)},update:function(e,t){if(e.jwtAuthToken?l.default.setJWTAuthToken(e.jwtAuthToken):(e.firstName&&o.default.setFirstName(e.firstName),e.lastName&&o.default.setLastName(e.lastName),e.email&&o.default.setEmail(e.email),e.phone&&o.default.setPhone(e.phone),e.phoneCountry&&o.default.setPhoneCountry(e.phoneCountry),e.meta&&o.default.setUserMeta(e.meta)),!(void 0===window.Promise||t&&"function"==typeof t))return s.default.send("update_user",e)
r.default.send("update_user",e,t)},setProperties:function(e,t){var n={}
if(e.jwtAuthToken?(l.default.setJWTAuthToken(e.jwtAuthToken),n=e):(e.firstName&&(n.firstName=e.firstName,e.firstName=void 0),e.lastName&&(n.lastName=e.lastName,e.lastName=void 0),e.email&&(n.email=e.email,e.email=void 0),e.phone&&(n.phone=e.phone,e.phone=void 0),e.phoneCountryCode&&(n.phoneCountry=e.phoneCountryCode,e.phoneCountryCode=void 0),e.locale&&(n.locale=e.locale,e.locale=void 0),n.meta=e,o.default.setProperties(n)),!(void 0===window.Promise||t&&"function"==typeof t))return s.default.send("set_user_properties",n)
r.default.send("set_user_properties",n,t)},setFirstName:function(e,t){var n={}
if(e){if("string"==typeof e?n.firstName=e:n=e,!t)return this.setProperties(n)
this.setProperties(n,t)}},setLastName:function(e,t){var n={}
if(e){if("string"==typeof e?n.lastName=e:n=e,!t)return this.setProperties(n)
this.setProperties(n,t)}},setEmail:function(e,t){var n={}
if(e){if("string"==typeof e?n.email=e:n=e,!t)return this.setProperties(n)
this.setProperties(n,t)}},setPhone:function(e,t){var n={}
if(e){if("string"==typeof e?n.phone=e:n=e,!t)return this.setProperties(n)
this.setProperties(n,t)}},setPhoneCountryCode:function(e,t){var n={}
if(e){if("string"==typeof e?n.phoneCountryCode=e:n=e,!t)return this.setProperties(n)
this.setProperties(n,t)}},setMeta:function(e,t){if(!t)return this.setProperties(e)
this.setProperties(e,t)},setLocale:function(e,t){var n={}
if(e){if("string"==typeof e?n.locale=e:n=e,!t)return this.setProperties(n)
this.setProperties(n,t)}},clear:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return s.default.send("reset_user")
r.default.send("reset_user",e)},create:function(e,t){if("function"==typeof e&&(t=e,e=null),!(void 0===window.Promise||t&&"function"==typeof t))return s.default.send("create_user",e)
r.default.send("create_user",e,t)},clone:function(e,t){if("function"==typeof e&&(t=e,e=null),!(void 0===window.Promise||t&&"function"==typeof t))return s.default.send("clone_user",e)
r.default.send("clone_user",e,t)},getUUID:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return s.default.send("get_user_uuid")
r.default.send("get_user_uuid",e)},generateUUID:function(e){if(!(void 0===window.Promise||e&&"function"==typeof e))return s.default.send("generate_user_uuid")
r.default.send("generate_user_uuid",e)}},track:p.default.track,trackPage:function(e,t){g.default.track({newValue:e,title:t,force:!0})},authenticate:function(e){if(l.default.isJWTEnabled()){var t=function(){b(this,this),l.default.setJWTAuthToken(e),l.default.postMessage({action:"authenticate_user",payload:e})}.bind(this),n=function(n){b(this,this),n&&200===n.status?this.user.update({jwtAuthToken:e}):t()}.bind(this)
this.isLoaded()?void 0===window.Promise?this.user.get(n):this.user.get().then(n,n):t()}}}}.bind(void 0)()
n.default=_},{"./helpers/omni":2,"./helpers/omni/analytics":4,"./helpers/omni/omni-cookie":5,"./helpers/omni/transition":6,"./obj/constants":8,"./obj/state":9,"./obj/user":10,"./utils/common/dom":12,"./utils/events":15,"./utils/frame":16,"./utils/message":17,"./utils/msg_callback":18,"./utils/msg_handler":19,"./utils/msg_promise":21,"./utils/push_frame":22}],25:[function(e,t,n){n.config={type:"production",cdn:{enabled:{forAssets:!1,forApi:!1},assets:"assetscdn-",api:"apicdn-",domain:{production:"wchat.freshchat.com",staging:"webchat-msgreen.freshpori.com",local:"localhost:8580"},subDomain:"",protocol:{local:"http://",production:"https://",staging:"https://"}}}},{}]},{},[7])
