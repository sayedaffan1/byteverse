(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))M(j);new MutationObserver(j=>{for(const V of j)if(V.type==="childList")for(const g of V.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&M(g)}).observe(document,{childList:!0,subtree:!0});function u(j){const V={};return j.integrity&&(V.integrity=j.integrity),j.referrerPolicy&&(V.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?V.credentials="include":j.crossOrigin==="anonymous"?V.credentials="omit":V.credentials="same-origin",V}function M(j){if(j.ep)return;j.ep=!0;const V=u(j);fetch(j.href,V)}})();function gd(w){return w&&w.__esModule&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w}var Ko={exports:{}},Gr={},Zo={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var td;function fh(){if(td)return pe;td=1;var w=Symbol.for("react.element"),x=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),g=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),W=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),O=Symbol.iterator;function _(l){return l===null||typeof l!="object"?null:(l=O&&l[O]||l["@@iterator"],typeof l=="function"?l:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,ee={};function z(l,f,v){this.props=l,this.context=f,this.refs=ee,this.updater=v||X}z.prototype.isReactComponent={},z.prototype.setState=function(l,f){if(typeof l!="object"&&typeof l!="function"&&l!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,l,f,"setState")},z.prototype.forceUpdate=function(l){this.updater.enqueueForceUpdate(this,l,"forceUpdate")};function H(){}H.prototype=z.prototype;function T(l,f,v){this.props=l,this.context=f,this.refs=ee,this.updater=v||X}var I=T.prototype=new H;I.constructor=T,q(I,z.prototype),I.isPureReactComponent=!0;var D=Array.isArray,le=Object.prototype.hasOwnProperty,ue={current:null},te={key:!0,ref:!0,__self:!0,__source:!0};function we(l,f,v){var S,R={},$=null,F=null;if(f!=null)for(S in f.ref!==void 0&&(F=f.ref),f.key!==void 0&&($=""+f.key),f)le.call(f,S)&&!te.hasOwnProperty(S)&&(R[S]=f[S]);var Y=arguments.length-2;if(Y===1)R.children=v;else if(1<Y){for(var ie=Array(Y),me=0;me<Y;me++)ie[me]=arguments[me+2];R.children=ie}if(l&&l.defaultProps)for(S in Y=l.defaultProps,Y)R[S]===void 0&&(R[S]=Y[S]);return{$$typeof:w,type:l,key:$,ref:F,props:R,_owner:ue.current}}function ye(l,f){return{$$typeof:w,type:l.type,key:f,ref:l.ref,props:l.props,_owner:l._owner}}function re(l){return typeof l=="object"&&l!==null&&l.$$typeof===w}function qe(l){var f={"=":"=0",":":"=2"};return"$"+l.replace(/[=:]/g,function(v){return f[v]})}var Fe=/\/+/g;function Te(l,f){return typeof l=="object"&&l!==null&&l.key!=null?qe(""+l.key):f.toString(36)}function De(l,f,v,S,R){var $=typeof l;($==="undefined"||$==="boolean")&&(l=null);var F=!1;if(l===null)F=!0;else switch($){case"string":case"number":F=!0;break;case"object":switch(l.$$typeof){case w:case x:F=!0}}if(F)return F=l,R=R(F),l=S===""?"."+Te(F,0):S,D(R)?(v="",l!=null&&(v=l.replace(Fe,"$&/")+"/"),De(R,f,v,"",function(me){return me})):R!=null&&(re(R)&&(R=ye(R,v+(!R.key||F&&F.key===R.key?"":(""+R.key).replace(Fe,"$&/")+"/")+l)),f.push(R)),1;if(F=0,S=S===""?".":S+":",D(l))for(var Y=0;Y<l.length;Y++){$=l[Y];var ie=S+Te($,Y);F+=De($,f,v,ie,R)}else if(ie=_(l),typeof ie=="function")for(l=ie.call(l),Y=0;!($=l.next()).done;)$=$.value,ie=S+Te($,Y++),F+=De($,f,v,ie,R);else if($==="object")throw f=String(l),Error("Objects are not valid as a React child (found: "+(f==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":f)+"). If you meant to render a collection of children, use an array instead.");return F}function Oe(l,f,v){if(l==null)return l;var S=[],R=0;return De(l,S,"","",function($){return f.call(v,$,R++)}),S}function _e(l){if(l._status===-1){var f=l._result;f=f(),f.then(function(v){(l._status===0||l._status===-1)&&(l._status=1,l._result=v)},function(v){(l._status===0||l._status===-1)&&(l._status=2,l._result=v)}),l._status===-1&&(l._status=0,l._result=f)}if(l._status===1)return l._result.default;throw l._result}var be={current:null},B={transition:null},se={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:B,ReactCurrentOwner:ue};function c(){throw Error("act(...) is not supported in production builds of React.")}return pe.Children={map:Oe,forEach:function(l,f,v){Oe(l,function(){f.apply(this,arguments)},v)},count:function(l){var f=0;return Oe(l,function(){f++}),f},toArray:function(l){return Oe(l,function(f){return f})||[]},only:function(l){if(!re(l))throw Error("React.Children.only expected to receive a single React element child.");return l}},pe.Component=z,pe.Fragment=u,pe.Profiler=j,pe.PureComponent=T,pe.StrictMode=M,pe.Suspense=P,pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,pe.act=c,pe.cloneElement=function(l,f,v){if(l==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+l+".");var S=q({},l.props),R=l.key,$=l.ref,F=l._owner;if(f!=null){if(f.ref!==void 0&&($=f.ref,F=ue.current),f.key!==void 0&&(R=""+f.key),l.type&&l.type.defaultProps)var Y=l.type.defaultProps;for(ie in f)le.call(f,ie)&&!te.hasOwnProperty(ie)&&(S[ie]=f[ie]===void 0&&Y!==void 0?Y[ie]:f[ie])}var ie=arguments.length-2;if(ie===1)S.children=v;else if(1<ie){Y=Array(ie);for(var me=0;me<ie;me++)Y[me]=arguments[me+2];S.children=Y}return{$$typeof:w,type:l.type,key:R,ref:$,props:S,_owner:F}},pe.createContext=function(l){return l={$$typeof:g,_currentValue:l,_currentValue2:l,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},l.Provider={$$typeof:V,_context:l},l.Consumer=l},pe.createElement=we,pe.createFactory=function(l){var f=we.bind(null,l);return f.type=l,f},pe.createRef=function(){return{current:null}},pe.forwardRef=function(l){return{$$typeof:k,render:l}},pe.isValidElement=re,pe.lazy=function(l){return{$$typeof:L,_payload:{_status:-1,_result:l},_init:_e}},pe.memo=function(l,f){return{$$typeof:W,type:l,compare:f===void 0?null:f}},pe.startTransition=function(l){var f=B.transition;B.transition={};try{l()}finally{B.transition=f}},pe.unstable_act=c,pe.useCallback=function(l,f){return be.current.useCallback(l,f)},pe.useContext=function(l){return be.current.useContext(l)},pe.useDebugValue=function(){},pe.useDeferredValue=function(l){return be.current.useDeferredValue(l)},pe.useEffect=function(l,f){return be.current.useEffect(l,f)},pe.useId=function(){return be.current.useId()},pe.useImperativeHandle=function(l,f,v){return be.current.useImperativeHandle(l,f,v)},pe.useInsertionEffect=function(l,f){return be.current.useInsertionEffect(l,f)},pe.useLayoutEffect=function(l,f){return be.current.useLayoutEffect(l,f)},pe.useMemo=function(l,f){return be.current.useMemo(l,f)},pe.useReducer=function(l,f,v){return be.current.useReducer(l,f,v)},pe.useRef=function(l){return be.current.useRef(l)},pe.useState=function(l){return be.current.useState(l)},pe.useSyncExternalStore=function(l,f,v){return be.current.useSyncExternalStore(l,f,v)},pe.useTransition=function(){return be.current.useTransition()},pe.version="18.3.1",pe}var nd;function ci(){return nd||(nd=1,Zo.exports=fh()),Zo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd;function gh(){if(rd)return Gr;rd=1;var w=ci(),x=Symbol.for("react.element"),u=Symbol.for("react.fragment"),M=Object.prototype.hasOwnProperty,j=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V={key:!0,ref:!0,__self:!0,__source:!0};function g(k,P,W){var L,O={},_=null,X=null;W!==void 0&&(_=""+W),P.key!==void 0&&(_=""+P.key),P.ref!==void 0&&(X=P.ref);for(L in P)M.call(P,L)&&!V.hasOwnProperty(L)&&(O[L]=P[L]);if(k&&k.defaultProps)for(L in P=k.defaultProps,P)O[L]===void 0&&(O[L]=P[L]);return{$$typeof:x,type:k,key:_,ref:X,props:O,_owner:j.current}}return Gr.Fragment=u,Gr.jsx=g,Gr.jsxs=g,Gr}var sd;function yh(){return sd||(sd=1,Ko.exports=gh()),Ko.exports}var s=yh(),U=ci();const xh=gd(U);var sa={},ei={exports:{}},lt={},ti={exports:{}},ni={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad;function bh(){return ad||(ad=1,(function(w){function x(B,se){var c=B.length;B.push(se);e:for(;0<c;){var l=c-1>>>1,f=B[l];if(0<j(f,se))B[l]=se,B[c]=f,c=l;else break e}}function u(B){return B.length===0?null:B[0]}function M(B){if(B.length===0)return null;var se=B[0],c=B.pop();if(c!==se){B[0]=c;e:for(var l=0,f=B.length,v=f>>>1;l<v;){var S=2*(l+1)-1,R=B[S],$=S+1,F=B[$];if(0>j(R,c))$<f&&0>j(F,R)?(B[l]=F,B[$]=c,l=$):(B[l]=R,B[S]=c,l=S);else if($<f&&0>j(F,c))B[l]=F,B[$]=c,l=$;else break e}}return se}function j(B,se){var c=B.sortIndex-se.sortIndex;return c!==0?c:B.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var V=performance;w.unstable_now=function(){return V.now()}}else{var g=Date,k=g.now();w.unstable_now=function(){return g.now()-k}}var P=[],W=[],L=1,O=null,_=3,X=!1,q=!1,ee=!1,z=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(B){for(var se=u(W);se!==null;){if(se.callback===null)M(W);else if(se.startTime<=B)M(W),se.sortIndex=se.expirationTime,x(P,se);else break;se=u(W)}}function D(B){if(ee=!1,I(B),!q)if(u(P)!==null)q=!0,_e(le);else{var se=u(W);se!==null&&be(D,se.startTime-B)}}function le(B,se){q=!1,ee&&(ee=!1,H(we),we=-1),X=!0;var c=_;try{for(I(se),O=u(P);O!==null&&(!(O.expirationTime>se)||B&&!qe());){var l=O.callback;if(typeof l=="function"){O.callback=null,_=O.priorityLevel;var f=l(O.expirationTime<=se);se=w.unstable_now(),typeof f=="function"?O.callback=f:O===u(P)&&M(P),I(se)}else M(P);O=u(P)}if(O!==null)var v=!0;else{var S=u(W);S!==null&&be(D,S.startTime-se),v=!1}return v}finally{O=null,_=c,X=!1}}var ue=!1,te=null,we=-1,ye=5,re=-1;function qe(){return!(w.unstable_now()-re<ye)}function Fe(){if(te!==null){var B=w.unstable_now();re=B;var se=!0;try{se=te(!0,B)}finally{se?Te():(ue=!1,te=null)}}else ue=!1}var Te;if(typeof T=="function")Te=function(){T(Fe)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,Oe=De.port2;De.port1.onmessage=Fe,Te=function(){Oe.postMessage(null)}}else Te=function(){z(Fe,0)};function _e(B){te=B,ue||(ue=!0,Te())}function be(B,se){we=z(function(){B(w.unstable_now())},se)}w.unstable_IdlePriority=5,w.unstable_ImmediatePriority=1,w.unstable_LowPriority=4,w.unstable_NormalPriority=3,w.unstable_Profiling=null,w.unstable_UserBlockingPriority=2,w.unstable_cancelCallback=function(B){B.callback=null},w.unstable_continueExecution=function(){q||X||(q=!0,_e(le))},w.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<B?Math.floor(1e3/B):5},w.unstable_getCurrentPriorityLevel=function(){return _},w.unstable_getFirstCallbackNode=function(){return u(P)},w.unstable_next=function(B){switch(_){case 1:case 2:case 3:var se=3;break;default:se=_}var c=_;_=se;try{return B()}finally{_=c}},w.unstable_pauseExecution=function(){},w.unstable_requestPaint=function(){},w.unstable_runWithPriority=function(B,se){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var c=_;_=B;try{return se()}finally{_=c}},w.unstable_scheduleCallback=function(B,se,c){var l=w.unstable_now();switch(typeof c=="object"&&c!==null?(c=c.delay,c=typeof c=="number"&&0<c?l+c:l):c=l,B){case 1:var f=-1;break;case 2:f=250;break;case 5:f=1073741823;break;case 4:f=1e4;break;default:f=5e3}return f=c+f,B={id:L++,callback:se,priorityLevel:B,startTime:c,expirationTime:f,sortIndex:-1},c>l?(B.sortIndex=c,x(W,B),u(P)===null&&B===u(W)&&(ee?(H(we),we=-1):ee=!0,be(D,c-l))):(B.sortIndex=f,x(P,B),q||X||(q=!0,_e(le))),B},w.unstable_shouldYield=qe,w.unstable_wrapCallback=function(B){var se=_;return function(){var c=_;_=se;try{return B.apply(this,arguments)}finally{_=c}}}})(ni)),ni}var od;function vh(){return od||(od=1,ti.exports=bh()),ti.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id;function wh(){if(id)return lt;id=1;var w=ci(),x=vh();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M=new Set,j={};function V(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(j[e]=t,e=0;e<t.length;e++)M.add(t[e])}var k=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),P=Object.prototype.hasOwnProperty,W=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,L={},O={};function _(e){return P.call(O,e)?!0:P.call(L,e)?!1:W.test(e)?O[e]=!0:(L[e]=!0,!1)}function X(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q(e,t,n,r){if(t===null||typeof t>"u"||X(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ee(e,t,n,r,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){z[e]=new ee(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];z[t]=new ee(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){z[e]=new ee(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){z[e]=new ee(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){z[e]=new ee(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){z[e]=new ee(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){z[e]=new ee(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){z[e]=new ee(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){z[e]=new ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function T(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(H,T);z[t]=new ee(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(H,T);z[t]=new ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(H,T);z[t]=new ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){z[e]=new ee(e,1,!1,e.toLowerCase(),null,!1,!1)}),z.xlinkHref=new ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){z[e]=new ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function I(e,t,n,r){var a=z.hasOwnProperty(t)?z[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(q(t,n,a,r)&&(n=null),r||a===null?_(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var D=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,le=Symbol.for("react.element"),ue=Symbol.for("react.portal"),te=Symbol.for("react.fragment"),we=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),re=Symbol.for("react.provider"),qe=Symbol.for("react.context"),Fe=Symbol.for("react.forward_ref"),Te=Symbol.for("react.suspense"),De=Symbol.for("react.suspense_list"),Oe=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),B=Symbol.iterator;function se(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var c=Object.assign,l;function f(e){if(l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);l=t&&t[1]||""}return`
`+l+e}var v=!1;function S(e,t){if(!e||v)return"";v=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(b){var r=b}Reflect.construct(e,[],t)}else{try{t.call()}catch(b){r=b}e.call(t.prototype)}else{try{throw Error()}catch(b){r=b}e()}}catch(b){if(b&&r&&typeof b.stack=="string"){for(var a=b.stack.split(`
`),o=r.stack.split(`
`),i=a.length-1,d=o.length-1;1<=i&&0<=d&&a[i]!==o[d];)d--;for(;1<=i&&0<=d;i--,d--)if(a[i]!==o[d]){if(i!==1||d!==1)do if(i--,d--,0>d||a[i]!==o[d]){var p=`
`+a[i].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=i&&0<=d);break}}}finally{v=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?f(e):""}function R(e){switch(e.tag){case 5:return f(e.type);case 16:return f("Lazy");case 13:return f("Suspense");case 19:return f("SuspenseList");case 0:case 2:case 15:return e=S(e.type,!1),e;case 11:return e=S(e.type.render,!1),e;case 1:return e=S(e.type,!0),e;default:return""}}function $(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case te:return"Fragment";case ue:return"Portal";case ye:return"Profiler";case we:return"StrictMode";case Te:return"Suspense";case De:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qe:return(e.displayName||"Context")+".Consumer";case re:return(e._context.displayName||"Context")+".Provider";case Fe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Oe:return t=e.displayName||null,t!==null?t:$(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return $(e(t))}catch{}}return null}function F(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $(t);case 8:return t===we?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Y(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ie(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function me(e){var t=ie(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xe(e){e._valueTracker||(e._valueTracker=me(e))}function Se(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ie(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Le(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function he(e,t){var n=t.checked;return c({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ue(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Y(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function nt(e,t){t=t.checked,t!=null&&I(e,"checked",t,!1)}function Ze(e,t){nt(e,t);var n=Y(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?kt(e,t.type,n):t.hasOwnProperty("defaultValue")&&kt(e,t.type,Y(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ft(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function kt(e,t,n){(t!=="number"||Le(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qe=Array.isArray;function Gt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Y(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function or(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return c({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qr(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(Qe(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Y(n)}}function ir(e,t){var n=Y(t.value),r=Y(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Yr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function lr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?lr(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mn,dr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mn=Mn||document.createElement("div"),Mn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ot={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},la=["Webkit","ms","Moz","O"];Object.keys(Ot).forEach(function(e){la.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ot[t]=Ot[e]})});function Jr(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ot.hasOwnProperty(e)&&Ot[e]?(""+t).trim():t+"px"}function yi(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Jr(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var vu=c({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ca(e,t){if(t){if(vu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function da(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ua=null;function pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ha=null,In=null,An=null;function xi(e){if(e=Mr(e)){if(typeof ha!="function")throw Error(u(280));var t=e.stateNode;t&&(t=bs(t),ha(e.stateNode,e.type,t))}}function bi(e){In?An?An.push(e):An=[e]:In=e}function vi(){if(In){var e=In,t=An;if(An=In=null,xi(e),t)for(e=0;e<t.length;e++)xi(t[e])}}function wi(e,t){return e(t)}function ki(){}var ma=!1;function Si(e,t,n){if(ma)return e(t,n);ma=!0;try{return wi(e,t,n)}finally{ma=!1,(In!==null||An!==null)&&(ki(),vi())}}function ur(e,t){var n=e.stateNode;if(n===null)return null;var r=bs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var fa=!1;if(k)try{var pr={};Object.defineProperty(pr,"passive",{get:function(){fa=!0}}),window.addEventListener("test",pr,pr),window.removeEventListener("test",pr,pr)}catch{fa=!1}function wu(e,t,n,r,a,o,i,d,p){var b=Array.prototype.slice.call(arguments,3);try{t.apply(n,b)}catch(N){this.onError(N)}}var hr=!1,Xr=null,Kr=!1,ga=null,ku={onError:function(e){hr=!0,Xr=e}};function Su(e,t,n,r,a,o,i,d,p){hr=!1,Xr=null,wu.apply(ku,arguments)}function ju(e,t,n,r,a,o,i,d,p){if(Su.apply(this,arguments),hr){if(hr){var b=Xr;hr=!1,Xr=null}else throw Error(u(198));Kr||(Kr=!0,ga=b)}}function fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ji(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ci(e){if(fn(e)!==e)throw Error(u(188))}function Cu(e){var t=e.alternate;if(!t){if(t=fn(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return Ci(a),e;if(o===r)return Ci(a),t;o=o.sibling}throw Error(u(188))}if(n.return!==r.return)n=a,r=o;else{for(var i=!1,d=a.child;d;){if(d===n){i=!0,n=a,r=o;break}if(d===r){i=!0,r=a,n=o;break}d=d.sibling}if(!i){for(d=o.child;d;){if(d===n){i=!0,n=o,r=a;break}if(d===r){i=!0,r=o,n=a;break}d=d.sibling}if(!i)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function Ti(e){return e=Cu(e),e!==null?Ni(e):null}function Ni(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ni(e);if(t!==null)return t;e=e.sibling}return null}var Ei=x.unstable_scheduleCallback,Pi=x.unstable_cancelCallback,Tu=x.unstable_shouldYield,Nu=x.unstable_requestPaint,Ie=x.unstable_now,Eu=x.unstable_getCurrentPriorityLevel,ya=x.unstable_ImmediatePriority,_i=x.unstable_UserBlockingPriority,Zr=x.unstable_NormalPriority,Pu=x.unstable_LowPriority,Li=x.unstable_IdlePriority,es=null,Lt=null;function _u(e){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(es,e,void 0,(e.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:Iu,Lu=Math.log,Mu=Math.LN2;function Iu(e){return e>>>=0,e===0?32:31-(Lu(e)/Mu|0)|0}var ts=64,ns=4194304;function mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function rs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var d=i&~a;d!==0?r=mr(d):(o&=i,o!==0&&(r=mr(o)))}else i=n&~a,i!==0?r=mr(i):o!==0&&(r=mr(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&a)===0&&(a=r&-r,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-St(t),a=1<<n,r|=e[n],t&=~a;return r}function Au(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ru(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-St(o),d=1<<i,p=a[i];p===-1?((d&n)===0||(d&r)!==0)&&(a[i]=Au(d,t)):p<=t&&(e.expiredLanes|=d),o&=~d}}function xa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mi(){var e=ts;return ts<<=1,(ts&4194240)===0&&(ts=64),e}function ba(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-St(t),e[t]=n}function Du(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-St(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}function va(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-St(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var ve=0;function Ii(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ai,wa,Ri,Di,Oi,ka=!1,ss=[],Yt=null,Jt=null,Xt=null,gr=new Map,yr=new Map,Kt=[],Ou="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zi(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":gr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yr.delete(t.pointerId)}}function xr(e,t,n,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Mr(t),t!==null&&wa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function zu(e,t,n,r,a){switch(t){case"focusin":return Yt=xr(Yt,e,t,n,r,a),!0;case"dragenter":return Jt=xr(Jt,e,t,n,r,a),!0;case"mouseover":return Xt=xr(Xt,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return gr.set(o,xr(gr.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,yr.set(o,xr(yr.get(o)||null,e,t,n,r,a)),!0}return!1}function Hi(e){var t=gn(e.target);if(t!==null){var n=fn(t);if(n!==null){if(t=n.tag,t===13){if(t=ji(n),t!==null){e.blockedOn=t,Oi(e.priority,function(){Ri(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function as(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ja(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ua=r,n.target.dispatchEvent(r),ua=null}else return t=Mr(n),t!==null&&wa(t),e.blockedOn=n,!1;t.shift()}return!0}function Fi(e,t,n){as(e)&&n.delete(t)}function Hu(){ka=!1,Yt!==null&&as(Yt)&&(Yt=null),Jt!==null&&as(Jt)&&(Jt=null),Xt!==null&&as(Xt)&&(Xt=null),gr.forEach(Fi),yr.forEach(Fi)}function br(e,t){e.blockedOn===t&&(e.blockedOn=null,ka||(ka=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,Hu)))}function vr(e){function t(a){return br(a,e)}if(0<ss.length){br(ss[0],e);for(var n=1;n<ss.length;n++){var r=ss[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Yt!==null&&br(Yt,e),Jt!==null&&br(Jt,e),Xt!==null&&br(Xt,e),gr.forEach(t),yr.forEach(t),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)Hi(n),n.blockedOn===null&&Kt.shift()}var Rn=D.ReactCurrentBatchConfig,os=!0;function Fu(e,t,n,r){var a=ve,o=Rn.transition;Rn.transition=null;try{ve=1,Sa(e,t,n,r)}finally{ve=a,Rn.transition=o}}function Bu(e,t,n,r){var a=ve,o=Rn.transition;Rn.transition=null;try{ve=4,Sa(e,t,n,r)}finally{ve=a,Rn.transition=o}}function Sa(e,t,n,r){if(os){var a=ja(e,t,n,r);if(a===null)Ba(e,t,r,is,n),zi(e,r);else if(zu(a,e,t,n,r))r.stopPropagation();else if(zi(e,r),t&4&&-1<Ou.indexOf(e)){for(;a!==null;){var o=Mr(a);if(o!==null&&Ai(o),o=ja(e,t,n,r),o===null&&Ba(e,t,r,is,n),o===a)break;a=o}a!==null&&r.stopPropagation()}else Ba(e,t,r,null,n)}}var is=null;function ja(e,t,n,r){if(is=null,e=pa(r),e=gn(e),e!==null)if(t=fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ji(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return is=e,null}function Bi(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Eu()){case ya:return 1;case _i:return 4;case Zr:case Pu:return 16;case Li:return 536870912;default:return 16}default:return 16}}var Zt=null,Ca=null,ls=null;function $i(){if(ls)return ls;var e,t=Ca,n=t.length,r,a="value"in Zt?Zt.value:Zt.textContent,o=a.length;for(e=0;e<n&&t[e]===a[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===a[o-r];r++);return ls=a.slice(e,1<r?1-r:void 0)}function cs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ds(){return!0}function Wi(){return!1}function ct(e){function t(n,r,a,o,i){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(o):o[d]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ds:Wi,this.isPropagationStopped=Wi,this}return c(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ds)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ds)},persist:function(){},isPersistent:ds}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ta=ct(Dn),wr=c({},Dn,{view:0,detail:0}),$u=ct(wr),Na,Ea,kr,us=c({},wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(Na=e.screenX-kr.screenX,Ea=e.screenY-kr.screenY):Ea=Na=0,kr=e),Na)},movementY:function(e){return"movementY"in e?e.movementY:Ea}}),qi=ct(us),Wu=c({},us,{dataTransfer:0}),qu=ct(Wu),Uu=c({},wr,{relatedTarget:0}),Pa=ct(Uu),Vu=c({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),Gu=ct(Vu),Qu=c({},Dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yu=ct(Qu),Ju=c({},Dn,{data:0}),Ui=ct(Ju),Xu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ku={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ep(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zu[e])?!!t[e]:!1}function _a(){return ep}var tp=c({},wr,{key:function(e){if(e.key){var t=Xu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=cs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ku[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_a,charCode:function(e){return e.type==="keypress"?cs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),np=ct(tp),rp=c({},us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vi=ct(rp),sp=c({},wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_a}),ap=ct(sp),op=c({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ip=ct(op),lp=c({},us,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cp=ct(lp),dp=[9,13,27,32],La=k&&"CompositionEvent"in window,Sr=null;k&&"documentMode"in document&&(Sr=document.documentMode);var up=k&&"TextEvent"in window&&!Sr,Gi=k&&(!La||Sr&&8<Sr&&11>=Sr),Qi=" ",Yi=!1;function Ji(e,t){switch(e){case"keyup":return dp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function pp(e,t){switch(e){case"compositionend":return Xi(t);case"keypress":return t.which!==32?null:(Yi=!0,Qi);case"textInput":return e=t.data,e===Qi&&Yi?null:e;default:return null}}function hp(e,t){if(On)return e==="compositionend"||!La&&Ji(e,t)?(e=$i(),ls=Ca=Zt=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gi&&t.locale!=="ko"?null:t.data;default:return null}}var mp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ki(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mp[e.type]:t==="textarea"}function Zi(e,t,n,r){bi(r),t=gs(t,"onChange"),0<t.length&&(n=new Ta("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var jr=null,Cr=null;function fp(e){yl(e,0)}function ps(e){var t=$n(e);if(Se(t))return e}function gp(e,t){if(e==="change")return t}var el=!1;if(k){var Ma;if(k){var Ia="oninput"in document;if(!Ia){var tl=document.createElement("div");tl.setAttribute("oninput","return;"),Ia=typeof tl.oninput=="function"}Ma=Ia}else Ma=!1;el=Ma&&(!document.documentMode||9<document.documentMode)}function nl(){jr&&(jr.detachEvent("onpropertychange",rl),Cr=jr=null)}function rl(e){if(e.propertyName==="value"&&ps(Cr)){var t=[];Zi(t,Cr,e,pa(e)),Si(fp,t)}}function yp(e,t,n){e==="focusin"?(nl(),jr=t,Cr=n,jr.attachEvent("onpropertychange",rl)):e==="focusout"&&nl()}function xp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ps(Cr)}function bp(e,t){if(e==="click")return ps(t)}function vp(e,t){if(e==="input"||e==="change")return ps(t)}function wp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:wp;function Tr(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!P.call(t,a)||!jt(e[a],t[a]))return!1}return!0}function sl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function al(e,t){var n=sl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sl(n)}}function ol(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ol(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function il(){for(var e=window,t=Le();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Le(e.document)}return t}function Aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function kp(e){var t=il(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ol(n.ownerDocument.documentElement,n)){if(r!==null&&Aa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=al(n,o);var i=al(n,r);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sp=k&&"documentMode"in document&&11>=document.documentMode,zn=null,Ra=null,Nr=null,Da=!1;function ll(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Da||zn==null||zn!==Le(r)||(r=zn,"selectionStart"in r&&Aa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&Tr(Nr,r)||(Nr=r,r=gs(Ra,"onSelect"),0<r.length&&(t=new Ta("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hn={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},Oa={},cl={};k&&(cl=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function ms(e){if(Oa[e])return Oa[e];if(!Hn[e])return e;var t=Hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cl)return Oa[e]=t[n];return e}var dl=ms("animationend"),ul=ms("animationiteration"),pl=ms("animationstart"),hl=ms("transitionend"),ml=new Map,fl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){ml.set(e,t),V(t,[e])}for(var za=0;za<fl.length;za++){var Ha=fl[za],jp=Ha.toLowerCase(),Cp=Ha[0].toUpperCase()+Ha.slice(1);en(jp,"on"+Cp)}en(dl,"onAnimationEnd"),en(ul,"onAnimationIteration"),en(pl,"onAnimationStart"),en("dblclick","onDoubleClick"),en("focusin","onFocus"),en("focusout","onBlur"),en(hl,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),V("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),V("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),V("onBeforeInput",["compositionend","keypress","textInput","paste"]),V("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),V("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),V("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function gl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ju(r,t,void 0,e),e.currentTarget=null}function yl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var d=r[i],p=d.instance,b=d.currentTarget;if(d=d.listener,p!==o&&a.isPropagationStopped())break e;gl(a,d,b),o=p}else for(i=0;i<r.length;i++){if(d=r[i],p=d.instance,b=d.currentTarget,d=d.listener,p!==o&&a.isPropagationStopped())break e;gl(a,d,b),o=p}}}if(Kr)throw e=ga,Kr=!1,ga=null,e}function je(e,t){var n=t[Ga];n===void 0&&(n=t[Ga]=new Set);var r=e+"__bubble";n.has(r)||(xl(t,e,2,!1),n.add(r))}function Fa(e,t,n){var r=0;t&&(r|=4),xl(n,e,r,t)}var fs="_reactListening"+Math.random().toString(36).slice(2);function Pr(e){if(!e[fs]){e[fs]=!0,M.forEach(function(n){n!=="selectionchange"&&(Tp.has(n)||Fa(n,!1,e),Fa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fs]||(t[fs]=!0,Fa("selectionchange",!1,t))}}function xl(e,t,n,r){switch(Bi(t)){case 1:var a=Fu;break;case 4:a=Bu;break;default:a=Sa}n=a.bind(null,t,n,e),a=void 0,!fa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ba(e,t,n,r,a){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var d=r.stateNode.containerInfo;if(d===a||d.nodeType===8&&d.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var p=i.tag;if((p===3||p===4)&&(p=i.stateNode.containerInfo,p===a||p.nodeType===8&&p.parentNode===a))return;i=i.return}for(;d!==null;){if(i=gn(d),i===null)return;if(p=i.tag,p===5||p===6){r=o=i;continue e}d=d.parentNode}}r=r.return}Si(function(){var b=o,N=pa(n),E=[];e:{var C=ml.get(e);if(C!==void 0){var Q=Ta,K=e;switch(e){case"keypress":if(cs(n)===0)break e;case"keydown":case"keyup":Q=np;break;case"focusin":K="focus",Q=Pa;break;case"focusout":K="blur",Q=Pa;break;case"beforeblur":case"afterblur":Q=Pa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=qi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=qu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=ap;break;case dl:case ul:case pl:Q=Gu;break;case hl:Q=ip;break;case"scroll":Q=$u;break;case"wheel":Q=cp;break;case"copy":case"cut":case"paste":Q=Yu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Vi}var Z=(t&4)!==0,Ae=!Z&&e==="scroll",m=Z?C!==null?C+"Capture":null:C;Z=[];for(var h=b,y;h!==null;){y=h;var A=y.stateNode;if(y.tag===5&&A!==null&&(y=A,m!==null&&(A=ur(h,m),A!=null&&Z.push(_r(h,A,y)))),Ae)break;h=h.return}0<Z.length&&(C=new Q(C,K,null,n,N),E.push({event:C,listeners:Z}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",C&&n!==ua&&(K=n.relatedTarget||n.fromElement)&&(gn(K)||K[zt]))break e;if((Q||C)&&(C=N.window===N?N:(C=N.ownerDocument)?C.defaultView||C.parentWindow:window,Q?(K=n.relatedTarget||n.toElement,Q=b,K=K?gn(K):null,K!==null&&(Ae=fn(K),K!==Ae||K.tag!==5&&K.tag!==6)&&(K=null)):(Q=null,K=b),Q!==K)){if(Z=qi,A="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(Z=Vi,A="onPointerLeave",m="onPointerEnter",h="pointer"),Ae=Q==null?C:$n(Q),y=K==null?C:$n(K),C=new Z(A,h+"leave",Q,n,N),C.target=Ae,C.relatedTarget=y,A=null,gn(N)===b&&(Z=new Z(m,h+"enter",K,n,N),Z.target=y,Z.relatedTarget=Ae,A=Z),Ae=A,Q&&K)t:{for(Z=Q,m=K,h=0,y=Z;y;y=Fn(y))h++;for(y=0,A=m;A;A=Fn(A))y++;for(;0<h-y;)Z=Fn(Z),h--;for(;0<y-h;)m=Fn(m),y--;for(;h--;){if(Z===m||m!==null&&Z===m.alternate)break t;Z=Fn(Z),m=Fn(m)}Z=null}else Z=null;Q!==null&&bl(E,C,Q,Z,!1),K!==null&&Ae!==null&&bl(E,Ae,K,Z,!0)}}e:{if(C=b?$n(b):window,Q=C.nodeName&&C.nodeName.toLowerCase(),Q==="select"||Q==="input"&&C.type==="file")var ne=gp;else if(Ki(C))if(el)ne=vp;else{ne=xp;var ae=yp}else(Q=C.nodeName)&&Q.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(ne=bp);if(ne&&(ne=ne(e,b))){Zi(E,ne,n,N);break e}ae&&ae(e,C,b),e==="focusout"&&(ae=C._wrapperState)&&ae.controlled&&C.type==="number"&&kt(C,"number",C.value)}switch(ae=b?$n(b):window,e){case"focusin":(Ki(ae)||ae.contentEditable==="true")&&(zn=ae,Ra=b,Nr=null);break;case"focusout":Nr=Ra=zn=null;break;case"mousedown":Da=!0;break;case"contextmenu":case"mouseup":case"dragend":Da=!1,ll(E,n,N);break;case"selectionchange":if(Sp)break;case"keydown":case"keyup":ll(E,n,N)}var oe;if(La)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else On?Ji(e,n)&&(de="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(de="onCompositionStart");de&&(Gi&&n.locale!=="ko"&&(On||de!=="onCompositionStart"?de==="onCompositionEnd"&&On&&(oe=$i()):(Zt=N,Ca="value"in Zt?Zt.value:Zt.textContent,On=!0)),ae=gs(b,de),0<ae.length&&(de=new Ui(de,e,null,n,N),E.push({event:de,listeners:ae}),oe?de.data=oe:(oe=Xi(n),oe!==null&&(de.data=oe)))),(oe=up?pp(e,n):hp(e,n))&&(b=gs(b,"onBeforeInput"),0<b.length&&(N=new Ui("onBeforeInput","beforeinput",null,n,N),E.push({event:N,listeners:b}),N.data=oe))}yl(E,t)})}function _r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gs(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=ur(e,n),o!=null&&r.unshift(_r(e,o,a)),o=ur(e,t),o!=null&&r.push(_r(e,o,a))),e=e.return}return r}function Fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bl(e,t,n,r,a){for(var o=t._reactName,i=[];n!==null&&n!==r;){var d=n,p=d.alternate,b=d.stateNode;if(p!==null&&p===r)break;d.tag===5&&b!==null&&(d=b,a?(p=ur(n,o),p!=null&&i.unshift(_r(n,p,d))):a||(p=ur(n,o),p!=null&&i.push(_r(n,p,d)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Np=/\r\n?/g,Ep=/\u0000|\uFFFD/g;function vl(e){return(typeof e=="string"?e:""+e).replace(Np,`
`).replace(Ep,"")}function ys(e,t,n){if(t=vl(t),vl(e)!==t&&n)throw Error(u(425))}function xs(){}var $a=null,Wa=null;function qa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ua=typeof setTimeout=="function"?setTimeout:void 0,Pp=typeof clearTimeout=="function"?clearTimeout:void 0,wl=typeof Promise=="function"?Promise:void 0,_p=typeof queueMicrotask=="function"?queueMicrotask:typeof wl<"u"?function(e){return wl.resolve(null).then(e).catch(Lp)}:Ua;function Lp(e){setTimeout(function(){throw e})}function Va(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),vr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);vr(t)}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function kl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bn=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Bn,Lr="__reactProps$"+Bn,zt="__reactContainer$"+Bn,Ga="__reactEvents$"+Bn,Mp="__reactListeners$"+Bn,Ip="__reactHandles$"+Bn;function gn(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zt]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=kl(e);e!==null;){if(n=e[Mt])return n;e=kl(e)}return t}e=n,n=e.parentNode}return null}function Mr(e){return e=e[Mt]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function bs(e){return e[Lr]||null}var Qa=[],Wn=-1;function nn(e){return{current:e}}function Ce(e){0>Wn||(e.current=Qa[Wn],Qa[Wn]=null,Wn--)}function ke(e,t){Wn++,Qa[Wn]=e.current,e.current=t}var rn={},Ye=nn(rn),rt=nn(!1),yn=rn;function qn(e,t){var n=e.type.contextTypes;if(!n)return rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function st(e){return e=e.childContextTypes,e!=null}function vs(){Ce(rt),Ce(Ye)}function Sl(e,t,n){if(Ye.current!==rn)throw Error(u(168));ke(Ye,t),ke(rt,n)}function jl(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(u(108,F(e)||"Unknown",a));return c({},n,r)}function ws(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,yn=Ye.current,ke(Ye,e),ke(rt,rt.current),!0}function Cl(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=jl(e,t,yn),r.__reactInternalMemoizedMergedChildContext=e,Ce(rt),Ce(Ye),ke(Ye,e)):Ce(rt),ke(rt,n)}var Ht=null,ks=!1,Ya=!1;function Tl(e){Ht===null?Ht=[e]:Ht.push(e)}function Ap(e){ks=!0,Tl(e)}function sn(){if(!Ya&&Ht!==null){Ya=!0;var e=0,t=ve;try{var n=Ht;for(ve=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ht=null,ks=!1}catch(a){throw Ht!==null&&(Ht=Ht.slice(e+1)),Ei(ya,sn),a}finally{ve=t,Ya=!1}}return null}var Un=[],Vn=0,Ss=null,js=0,gt=[],yt=0,xn=null,Ft=1,Bt="";function bn(e,t){Un[Vn++]=js,Un[Vn++]=Ss,Ss=e,js=t}function Nl(e,t,n){gt[yt++]=Ft,gt[yt++]=Bt,gt[yt++]=xn,xn=e;var r=Ft;e=Bt;var a=32-St(r)-1;r&=~(1<<a),n+=1;var o=32-St(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Ft=1<<32-St(t)+a|n<<a|r,Bt=o+e}else Ft=1<<o|n<<a|r,Bt=e}function Ja(e){e.return!==null&&(bn(e,1),Nl(e,1,0))}function Xa(e){for(;e===Ss;)Ss=Un[--Vn],Un[Vn]=null,js=Un[--Vn],Un[Vn]=null;for(;e===xn;)xn=gt[--yt],gt[yt]=null,Bt=gt[--yt],gt[yt]=null,Ft=gt[--yt],gt[yt]=null}var dt=null,ut=null,Ne=!1,Ct=null;function El(e,t){var n=wt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ut=tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xn!==null?{id:Ft,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=wt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,ut=null,!0):!1;default:return!1}}function Ka(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Za(e){if(Ne){var t=ut;if(t){var n=t;if(!Pl(e,t)){if(Ka(e))throw Error(u(418));t=tn(n.nextSibling);var r=dt;t&&Pl(e,t)?El(r,n):(e.flags=e.flags&-4097|2,Ne=!1,dt=e)}}else{if(Ka(e))throw Error(u(418));e.flags=e.flags&-4097|2,Ne=!1,dt=e}}}function _l(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function Cs(e){if(e!==dt)return!1;if(!Ne)return _l(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qa(e.type,e.memoizedProps)),t&&(t=ut)){if(Ka(e))throw Ll(),Error(u(418));for(;t;)El(e,t),t=tn(t.nextSibling)}if(_l(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ut=tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ut=null}}else ut=dt?tn(e.stateNode.nextSibling):null;return!0}function Ll(){for(var e=ut;e;)e=tn(e.nextSibling)}function Gn(){ut=dt=null,Ne=!1}function eo(e){Ct===null?Ct=[e]:Ct.push(e)}var Rp=D.ReactCurrentBatchConfig;function Ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var a=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var d=a.refs;i===null?delete d[o]:d[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function Ts(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ml(e){var t=e._init;return t(e._payload)}function Il(e){function t(m,h){if(e){var y=m.deletions;y===null?(m.deletions=[h],m.flags|=16):y.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function a(m,h){return m=hn(m,h),m.index=0,m.sibling=null,m}function o(m,h,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<h?(m.flags|=2,h):y):(m.flags|=2,h)):(m.flags|=1048576,h)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function d(m,h,y,A){return h===null||h.tag!==6?(h=Vo(y,m.mode,A),h.return=m,h):(h=a(h,y),h.return=m,h)}function p(m,h,y,A){var ne=y.type;return ne===te?N(m,h,y.props.children,A,y.key):h!==null&&(h.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===_e&&Ml(ne)===h.type)?(A=a(h,y.props),A.ref=Ir(m,h,y),A.return=m,A):(A=Js(y.type,y.key,y.props,null,m.mode,A),A.ref=Ir(m,h,y),A.return=m,A)}function b(m,h,y,A){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Go(y,m.mode,A),h.return=m,h):(h=a(h,y.children||[]),h.return=m,h)}function N(m,h,y,A,ne){return h===null||h.tag!==7?(h=Nn(y,m.mode,A,ne),h.return=m,h):(h=a(h,y),h.return=m,h)}function E(m,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Vo(""+h,m.mode,y),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case le:return y=Js(h.type,h.key,h.props,null,m.mode,y),y.ref=Ir(m,null,h),y.return=m,y;case ue:return h=Go(h,m.mode,y),h.return=m,h;case _e:var A=h._init;return E(m,A(h._payload),y)}if(Qe(h)||se(h))return h=Nn(h,m.mode,y,null),h.return=m,h;Ts(m,h)}return null}function C(m,h,y,A){var ne=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return ne!==null?null:d(m,h,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case le:return y.key===ne?p(m,h,y,A):null;case ue:return y.key===ne?b(m,h,y,A):null;case _e:return ne=y._init,C(m,h,ne(y._payload),A)}if(Qe(y)||se(y))return ne!==null?null:N(m,h,y,A,null);Ts(m,y)}return null}function Q(m,h,y,A,ne){if(typeof A=="string"&&A!==""||typeof A=="number")return m=m.get(y)||null,d(h,m,""+A,ne);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case le:return m=m.get(A.key===null?y:A.key)||null,p(h,m,A,ne);case ue:return m=m.get(A.key===null?y:A.key)||null,b(h,m,A,ne);case _e:var ae=A._init;return Q(m,h,y,ae(A._payload),ne)}if(Qe(A)||se(A))return m=m.get(y)||null,N(h,m,A,ne,null);Ts(h,A)}return null}function K(m,h,y,A){for(var ne=null,ae=null,oe=h,de=h=0,We=null;oe!==null&&de<y.length;de++){oe.index>de?(We=oe,oe=null):We=oe.sibling;var ge=C(m,oe,y[de],A);if(ge===null){oe===null&&(oe=We);break}e&&oe&&ge.alternate===null&&t(m,oe),h=o(ge,h,de),ae===null?ne=ge:ae.sibling=ge,ae=ge,oe=We}if(de===y.length)return n(m,oe),Ne&&bn(m,de),ne;if(oe===null){for(;de<y.length;de++)oe=E(m,y[de],A),oe!==null&&(h=o(oe,h,de),ae===null?ne=oe:ae.sibling=oe,ae=oe);return Ne&&bn(m,de),ne}for(oe=r(m,oe);de<y.length;de++)We=Q(oe,m,de,y[de],A),We!==null&&(e&&We.alternate!==null&&oe.delete(We.key===null?de:We.key),h=o(We,h,de),ae===null?ne=We:ae.sibling=We,ae=We);return e&&oe.forEach(function(mn){return t(m,mn)}),Ne&&bn(m,de),ne}function Z(m,h,y,A){var ne=se(y);if(typeof ne!="function")throw Error(u(150));if(y=ne.call(y),y==null)throw Error(u(151));for(var ae=ne=null,oe=h,de=h=0,We=null,ge=y.next();oe!==null&&!ge.done;de++,ge=y.next()){oe.index>de?(We=oe,oe=null):We=oe.sibling;var mn=C(m,oe,ge.value,A);if(mn===null){oe===null&&(oe=We);break}e&&oe&&mn.alternate===null&&t(m,oe),h=o(mn,h,de),ae===null?ne=mn:ae.sibling=mn,ae=mn,oe=We}if(ge.done)return n(m,oe),Ne&&bn(m,de),ne;if(oe===null){for(;!ge.done;de++,ge=y.next())ge=E(m,ge.value,A),ge!==null&&(h=o(ge,h,de),ae===null?ne=ge:ae.sibling=ge,ae=ge);return Ne&&bn(m,de),ne}for(oe=r(m,oe);!ge.done;de++,ge=y.next())ge=Q(oe,m,de,ge.value,A),ge!==null&&(e&&ge.alternate!==null&&oe.delete(ge.key===null?de:ge.key),h=o(ge,h,de),ae===null?ne=ge:ae.sibling=ge,ae=ge);return e&&oe.forEach(function(mh){return t(m,mh)}),Ne&&bn(m,de),ne}function Ae(m,h,y,A){if(typeof y=="object"&&y!==null&&y.type===te&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case le:e:{for(var ne=y.key,ae=h;ae!==null;){if(ae.key===ne){if(ne=y.type,ne===te){if(ae.tag===7){n(m,ae.sibling),h=a(ae,y.props.children),h.return=m,m=h;break e}}else if(ae.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===_e&&Ml(ne)===ae.type){n(m,ae.sibling),h=a(ae,y.props),h.ref=Ir(m,ae,y),h.return=m,m=h;break e}n(m,ae);break}else t(m,ae);ae=ae.sibling}y.type===te?(h=Nn(y.props.children,m.mode,A,y.key),h.return=m,m=h):(A=Js(y.type,y.key,y.props,null,m.mode,A),A.ref=Ir(m,h,y),A.return=m,m=A)}return i(m);case ue:e:{for(ae=y.key;h!==null;){if(h.key===ae)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(m,h.sibling),h=a(h,y.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=Go(y,m.mode,A),h.return=m,m=h}return i(m);case _e:return ae=y._init,Ae(m,h,ae(y._payload),A)}if(Qe(y))return K(m,h,y,A);if(se(y))return Z(m,h,y,A);Ts(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(m,h.sibling),h=a(h,y),h.return=m,m=h):(n(m,h),h=Vo(y,m.mode,A),h.return=m,m=h),i(m)):n(m,h)}return Ae}var Qn=Il(!0),Al=Il(!1),Ns=nn(null),Es=null,Yn=null,to=null;function no(){to=Yn=Es=null}function ro(e){var t=Ns.current;Ce(Ns),e._currentValue=t}function so(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jn(e,t){Es=e,to=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(at=!0),e.firstContext=null)}function xt(e){var t=e._currentValue;if(to!==e)if(e={context:e,memoizedValue:t,next:null},Yn===null){if(Es===null)throw Error(u(308));Yn=e,Es.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return t}var vn=null;function ao(e){vn===null?vn=[e]:vn.push(e)}function Rl(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,ao(t)):(n.next=a.next,a.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var an=!1;function oo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function on(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(fe&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,$t(e,n)}return a=r.interleaved,a===null?(t.next=t,ao(r)):(t.next=a.next,a.next=t),r.interleaved=t,$t(e,n)}function Ps(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,va(e,n)}}function Ol(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?a=o=t:o=o.next=t}else a=o=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _s(e,t,n,r){var a=e.updateQueue;an=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,d=a.shared.pending;if(d!==null){a.shared.pending=null;var p=d,b=p.next;p.next=null,i===null?o=b:i.next=b,i=p;var N=e.alternate;N!==null&&(N=N.updateQueue,d=N.lastBaseUpdate,d!==i&&(d===null?N.firstBaseUpdate=b:d.next=b,N.lastBaseUpdate=p))}if(o!==null){var E=a.baseState;i=0,N=b=p=null,d=o;do{var C=d.lane,Q=d.eventTime;if((r&C)===C){N!==null&&(N=N.next={eventTime:Q,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var K=e,Z=d;switch(C=t,Q=n,Z.tag){case 1:if(K=Z.payload,typeof K=="function"){E=K.call(Q,E,C);break e}E=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=Z.payload,C=typeof K=="function"?K.call(Q,E,C):K,C==null)break e;E=c({},E,C);break e;case 2:an=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,C=a.effects,C===null?a.effects=[d]:C.push(d))}else Q={eventTime:Q,lane:C,tag:d.tag,payload:d.payload,callback:d.callback,next:null},N===null?(b=N=Q,p=E):N=N.next=Q,i|=C;if(d=d.next,d===null){if(d=a.shared.pending,d===null)break;C=d,d=C.next,C.next=null,a.lastBaseUpdate=C,a.shared.pending=null}}while(!0);if(N===null&&(p=E),a.baseState=p,a.firstBaseUpdate=b,a.lastBaseUpdate=N,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);Sn|=i,e.lanes=i,e.memoizedState=E}}function zl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(u(191,a));a.call(r)}}}var Ar={},It=nn(Ar),Rr=nn(Ar),Dr=nn(Ar);function wn(e){if(e===Ar)throw Error(u(174));return e}function io(e,t){switch(ke(Dr,t),ke(Rr,e),ke(It,Ar),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cr(t,e)}Ce(It),ke(It,t)}function Xn(){Ce(It),Ce(Rr),Ce(Dr)}function Hl(e){wn(Dr.current);var t=wn(It.current),n=cr(t,e.type);t!==n&&(ke(Rr,e),ke(It,n))}function lo(e){Rr.current===e&&(Ce(It),Ce(Rr))}var Ee=nn(0);function Ls(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var co=[];function uo(){for(var e=0;e<co.length;e++)co[e]._workInProgressVersionPrimary=null;co.length=0}var Ms=D.ReactCurrentDispatcher,po=D.ReactCurrentBatchConfig,kn=0,Pe=null,ze=null,Be=null,Is=!1,Or=!1,zr=0,Dp=0;function Je(){throw Error(u(321))}function ho(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function mo(e,t,n,r,a,o){if(kn=o,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ms.current=e===null||e.memoizedState===null?Fp:Bp,e=n(r,a),Or){o=0;do{if(Or=!1,zr=0,25<=o)throw Error(u(301));o+=1,Be=ze=null,t.updateQueue=null,Ms.current=$p,e=n(r,a)}while(Or)}if(Ms.current=Ds,t=ze!==null&&ze.next!==null,kn=0,Be=ze=Pe=null,Is=!1,t)throw Error(u(300));return e}function fo(){var e=zr!==0;return zr=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Pe.memoizedState=Be=e:Be=Be.next=e,Be}function bt(){if(ze===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Be===null?Pe.memoizedState:Be.next;if(t!==null)Be=t,ze=e;else{if(e===null)throw Error(u(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Be===null?Pe.memoizedState=Be=e:Be=Be.next=e}return Be}function Hr(e,t){return typeof t=="function"?t(e):t}function go(e){var t=bt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=ze,a=r.baseQueue,o=n.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}r.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,r=r.baseState;var d=i=null,p=null,b=o;do{var N=b.lane;if((kn&N)===N)p!==null&&(p=p.next={lane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),r=b.hasEagerState?b.eagerState:e(r,b.action);else{var E={lane:N,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null};p===null?(d=p=E,i=r):p=p.next=E,Pe.lanes|=N,Sn|=N}b=b.next}while(b!==null&&b!==o);p===null?i=r:p.next=d,jt(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=p,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do o=a.lane,Pe.lanes|=o,Sn|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function yo(e){var t=bt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);jt(o,t.memoizedState)||(at=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Fl(){}function Bl(e,t){var n=Pe,r=bt(),a=t(),o=!jt(r.memoizedState,a);if(o&&(r.memoizedState=a,at=!0),r=r.queue,xo(ql.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Fr(9,Wl.bind(null,n,r,a,t),void 0,null),$e===null)throw Error(u(349));(kn&30)!==0||$l(n,t,a)}return a}function $l(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wl(e,t,n,r){t.value=n,t.getSnapshot=r,Ul(t)&&Vl(e)}function ql(e,t,n){return n(function(){Ul(t)&&Vl(e)})}function Ul(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function Vl(e){var t=$t(e,1);t!==null&&Pt(t,e,1,-1)}function Gl(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},t.queue=e,e=e.dispatch=Hp.bind(null,Pe,e),[t.memoizedState,e]}function Fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ql(){return bt().memoizedState}function As(e,t,n,r){var a=At();Pe.flags|=e,a.memoizedState=Fr(1|t,n,void 0,r===void 0?null:r)}function Rs(e,t,n,r){var a=bt();r=r===void 0?null:r;var o=void 0;if(ze!==null){var i=ze.memoizedState;if(o=i.destroy,r!==null&&ho(r,i.deps)){a.memoizedState=Fr(t,n,o,r);return}}Pe.flags|=e,a.memoizedState=Fr(1|t,n,o,r)}function Yl(e,t){return As(8390656,8,e,t)}function xo(e,t){return Rs(2048,8,e,t)}function Jl(e,t){return Rs(4,2,e,t)}function Xl(e,t){return Rs(4,4,e,t)}function Kl(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zl(e,t,n){return n=n!=null?n.concat([e]):null,Rs(4,4,Kl.bind(null,t,e),n)}function bo(){}function ec(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ho(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function tc(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ho(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function nc(e,t,n){return(kn&21)===0?(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n):(jt(n,t)||(n=Mi(),Pe.lanes|=n,Sn|=n,e.baseState=!0),t)}function Op(e,t){var n=ve;ve=n!==0&&4>n?n:4,e(!0);var r=po.transition;po.transition={};try{e(!1),t()}finally{ve=n,po.transition=r}}function rc(){return bt().memoizedState}function zp(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sc(e))ac(t,n);else if(n=Rl(e,t,n,r),n!==null){var a=tt();Pt(n,e,r,a),oc(n,t,r)}}function Hp(e,t,n){var r=un(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sc(e))ac(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,d=o(i,n);if(a.hasEagerState=!0,a.eagerState=d,jt(d,i)){var p=t.interleaved;p===null?(a.next=a,ao(t)):(a.next=p.next,p.next=a),t.interleaved=a;return}}catch{}finally{}n=Rl(e,t,a,r),n!==null&&(a=tt(),Pt(n,e,r,a),oc(n,t,r))}}function sc(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function ac(e,t){Or=Is=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function oc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,va(e,n)}}var Ds={readContext:xt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},Fp={readContext:xt,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:Yl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,As(4194308,4,Kl.bind(null,t,e),n)},useLayoutEffect:function(e,t){return As(4194308,4,e,t)},useInsertionEffect:function(e,t){return As(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=At();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=zp.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:Gl,useDebugValue:bo,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=Gl(!1),t=e[0];return e=Op.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,a=At();if(Ne){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),$e===null)throw Error(u(349));(kn&30)!==0||$l(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Yl(ql.bind(null,r,o,e),[e]),r.flags|=2048,Fr(9,Wl.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=At(),t=$e.identifierPrefix;if(Ne){var n=Bt,r=Ft;n=(r&~(1<<32-St(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Dp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Bp={readContext:xt,useCallback:ec,useContext:xt,useEffect:xo,useImperativeHandle:Zl,useInsertionEffect:Jl,useLayoutEffect:Xl,useMemo:tc,useReducer:go,useRef:Ql,useState:function(){return go(Hr)},useDebugValue:bo,useDeferredValue:function(e){var t=bt();return nc(t,ze.memoizedState,e)},useTransition:function(){var e=go(Hr)[0],t=bt().memoizedState;return[e,t]},useMutableSource:Fl,useSyncExternalStore:Bl,useId:rc,unstable_isNewReconciler:!1},$p={readContext:xt,useCallback:ec,useContext:xt,useEffect:xo,useImperativeHandle:Zl,useInsertionEffect:Jl,useLayoutEffect:Xl,useMemo:tc,useReducer:yo,useRef:Ql,useState:function(){return yo(Hr)},useDebugValue:bo,useDeferredValue:function(e){var t=bt();return ze===null?t.memoizedState=e:nc(t,ze.memoizedState,e)},useTransition:function(){var e=yo(Hr)[0],t=bt().memoizedState;return[e,t]},useMutableSource:Fl,useSyncExternalStore:Bl,useId:rc,unstable_isNewReconciler:!1};function Tt(e,t){if(e&&e.defaultProps){t=c({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function vo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:c({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Os={isMounted:function(e){return(e=e._reactInternals)?fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tt(),a=un(e),o=Wt(r,a);o.payload=t,n!=null&&(o.callback=n),t=on(e,o,a),t!==null&&(Pt(t,e,a,r),Ps(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tt(),a=un(e),o=Wt(r,a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=on(e,o,a),t!==null&&(Pt(t,e,a,r),Ps(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tt(),r=un(e),a=Wt(n,r);a.tag=2,t!=null&&(a.callback=t),t=on(e,a,r),t!==null&&(Pt(t,e,r,n),Ps(t,e,r))}};function ic(e,t,n,r,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Tr(n,r)||!Tr(a,o):!0}function lc(e,t,n){var r=!1,a=rn,o=t.contextType;return typeof o=="object"&&o!==null?o=xt(o):(a=st(t)?yn:Ye.current,r=t.contextTypes,o=(r=r!=null)?qn(e,a):rn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Os,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function cc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Os.enqueueReplaceState(t,t.state,null)}function wo(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},oo(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=xt(o):(o=st(t)?yn:Ye.current,a.context=qn(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(vo(e,t,o,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Os.enqueueReplaceState(a,a.state,null),_s(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Kn(e,t){try{var n="",r=t;do n+=R(r),r=r.return;while(r);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function ko(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function So(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wp=typeof WeakMap=="function"?WeakMap:Map;function dc(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qs||(qs=!0,zo=r),So(e,t)},n}function uc(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){So(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){So(e,t),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function pc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Wp;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=rh.bind(null,e,t,n),t.then(e,e))}function hc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function mc(e,t,n,r,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,on(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var qp=D.ReactCurrentOwner,at=!1;function et(e,t,n,r){t.child=e===null?Al(t,null,n,r):Qn(t,e.child,n,r)}function fc(e,t,n,r,a){n=n.render;var o=t.ref;return Jn(t,a),r=mo(e,t,n,r,o,a),n=fo(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,qt(e,t,a)):(Ne&&n&&Ja(t),t.flags|=1,et(e,t,r,a),t.child)}function gc(e,t,n,r,a){if(e===null){var o=n.type;return typeof o=="function"&&!Uo(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,yc(e,t,o,r,a)):(e=Js(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&a)===0){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Tr,n(i,r)&&e.ref===t.ref)return qt(e,t,a)}return t.flags|=1,e=hn(o,r),e.ref=t.ref,e.return=t,t.child=e}function yc(e,t,n,r,a){if(e!==null){var o=e.memoizedProps;if(Tr(o,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=o,(e.lanes&a)!==0)(e.flags&131072)!==0&&(at=!0);else return t.lanes=e.lanes,qt(e,t,a)}return jo(e,t,n,r,a)}function xc(e,t,n){var r=t.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(er,pt),pt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(er,pt),pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ke(er,pt),pt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ke(er,pt),pt|=r;return et(e,t,a,n),t.child}function bc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jo(e,t,n,r,a){var o=st(n)?yn:Ye.current;return o=qn(t,o),Jn(t,a),n=mo(e,t,n,r,o,a),r=fo(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,qt(e,t,a)):(Ne&&r&&Ja(t),t.flags|=1,et(e,t,n,a),t.child)}function vc(e,t,n,r,a){if(st(n)){var o=!0;ws(t)}else o=!1;if(Jn(t,a),t.stateNode===null)Hs(e,t),lc(t,n,r),wo(t,n,r,a),r=!0;else if(e===null){var i=t.stateNode,d=t.memoizedProps;i.props=d;var p=i.context,b=n.contextType;typeof b=="object"&&b!==null?b=xt(b):(b=st(n)?yn:Ye.current,b=qn(t,b));var N=n.getDerivedStateFromProps,E=typeof N=="function"||typeof i.getSnapshotBeforeUpdate=="function";E||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==r||p!==b)&&cc(t,i,r,b),an=!1;var C=t.memoizedState;i.state=C,_s(t,r,i,a),p=t.memoizedState,d!==r||C!==p||rt.current||an?(typeof N=="function"&&(vo(t,n,N,r),p=t.memoizedState),(d=an||ic(t,n,d,r,C,p,b))?(E||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=p),i.props=r,i.state=p,i.context=b,r=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Dl(e,t),d=t.memoizedProps,b=t.type===t.elementType?d:Tt(t.type,d),i.props=b,E=t.pendingProps,C=i.context,p=n.contextType,typeof p=="object"&&p!==null?p=xt(p):(p=st(n)?yn:Ye.current,p=qn(t,p));var Q=n.getDerivedStateFromProps;(N=typeof Q=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==E||C!==p)&&cc(t,i,r,p),an=!1,C=t.memoizedState,i.state=C,_s(t,r,i,a);var K=t.memoizedState;d!==E||C!==K||rt.current||an?(typeof Q=="function"&&(vo(t,n,Q,r),K=t.memoizedState),(b=an||ic(t,n,b,r,C,K,p)||!1)?(N||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,K,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,K,p)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=K),i.props=r,i.state=K,i.context=p,r=b):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),r=!1)}return Co(e,t,n,r,o,a)}function Co(e,t,n,r,a,o){bc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return a&&Cl(t,n,!1),qt(e,t,o);r=t.stateNode,qp.current=t;var d=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Qn(t,e.child,null,o),t.child=Qn(t,null,d,o)):et(e,t,d,o),t.memoizedState=r.state,a&&Cl(t,n,!0),t.child}function wc(e){var t=e.stateNode;t.pendingContext?Sl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sl(e,t.context,!1),io(e,t.containerInfo)}function kc(e,t,n,r,a){return Gn(),eo(a),t.flags|=256,et(e,t,n,r),t.child}var To={dehydrated:null,treeContext:null,retryLane:0};function No(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sc(e,t,n){var r=t.pendingProps,a=Ee.current,o=!1,i=(t.flags&128)!==0,d;if((d=i)||(d=e!==null&&e.memoizedState===null?!1:(a&2)!==0),d?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ke(Ee,a&1),e===null)return Za(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Xs(i,r,0,null),e=Nn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=No(n),t.memoizedState=To,e):Eo(t,i));if(a=e.memoizedState,a!==null&&(d=a.dehydrated,d!==null))return Up(e,t,i,r,d,a,n);if(o){o=r.fallback,i=t.mode,a=e.child,d=a.sibling;var p={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=p,t.deletions=null):(r=hn(a,p),r.subtreeFlags=a.subtreeFlags&14680064),d!==null?o=hn(d,o):(o=Nn(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?No(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=To,r}return o=e.child,e=o.sibling,r=hn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Eo(e,t){return t=Xs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zs(e,t,n,r){return r!==null&&eo(r),Qn(t,e.child,null,n),e=Eo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Up(e,t,n,r,a,o,i){if(n)return t.flags&256?(t.flags&=-257,r=ko(Error(u(422))),zs(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=Xs({mode:"visible",children:r.children},a,0,null),o=Nn(o,a,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Qn(t,e.child,null,i),t.child.memoizedState=No(i),t.memoizedState=To,o);if((t.mode&1)===0)return zs(e,t,i,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var d=r.dgst;return r=d,o=Error(u(419)),r=ko(o,r,void 0),zs(e,t,i,r)}if(d=(i&e.childLanes)!==0,at||d){if(r=$e,r!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|i))!==0?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,$t(e,a),Pt(r,e,a,-1))}return qo(),r=ko(Error(u(421))),zs(e,t,i,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=sh.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ut=tn(a.nextSibling),dt=t,Ne=!0,Ct=null,e!==null&&(gt[yt++]=Ft,gt[yt++]=Bt,gt[yt++]=xn,Ft=e.id,Bt=e.overflow,xn=t),t=Eo(t,r.children),t.flags|=4096,t)}function jc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),so(e.return,t,n)}function Po(e,t,n,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Cc(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(et(e,t,r.children,n),r=Ee.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jc(e,n,t);else if(e.tag===19)jc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ke(Ee,r),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Ls(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Po(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ls(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Po(t,!0,n,null,o);break;case"together":Po(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vp(e,t,n){switch(t.tag){case 3:wc(t),Gn();break;case 5:Hl(t);break;case 1:st(t.type)&&ws(t);break;case 4:io(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;ke(Ns,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ke(Ee,Ee.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Sc(e,t,n):(ke(Ee,Ee.current&1),e=qt(e,t,n),e!==null?e.sibling:null);ke(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Cc(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ke(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,xc(e,t,n)}return qt(e,t,n)}var Tc,_o,Nc,Ec;Tc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},_o=function(){},Nc=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,wn(It.current);var o=null;switch(n){case"input":a=he(e,a),r=he(e,r),o=[];break;case"select":a=c({},a,{value:void 0}),r=c({},r,{value:void 0}),o=[];break;case"textarea":a=or(e,a),r=or(e,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xs)}ca(n,r);var i;n=null;for(b in a)if(!r.hasOwnProperty(b)&&a.hasOwnProperty(b)&&a[b]!=null)if(b==="style"){var d=a[b];for(i in d)d.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else b!=="dangerouslySetInnerHTML"&&b!=="children"&&b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(j.hasOwnProperty(b)?o||(o=[]):(o=o||[]).push(b,null));for(b in r){var p=r[b];if(d=a!=null?a[b]:void 0,r.hasOwnProperty(b)&&p!==d&&(p!=null||d!=null))if(b==="style")if(d){for(i in d)!d.hasOwnProperty(i)||p&&p.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in p)p.hasOwnProperty(i)&&d[i]!==p[i]&&(n||(n={}),n[i]=p[i])}else n||(o||(o=[]),o.push(b,n)),n=p;else b==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,d=d?d.__html:void 0,p!=null&&d!==p&&(o=o||[]).push(b,p)):b==="children"?typeof p!="string"&&typeof p!="number"||(o=o||[]).push(b,""+p):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&(j.hasOwnProperty(b)?(p!=null&&b==="onScroll"&&je("scroll",e),o||d===p||(o=[])):(o=o||[]).push(b,p))}n&&(o=o||[]).push("style",n);var b=o;(t.updateQueue=b)&&(t.flags|=4)}},Ec=function(e,t,n,r){n!==r&&(t.flags|=4)};function Br(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gp(e,t,n){var r=t.pendingProps;switch(Xa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return st(t.type)&&vs(),Xe(t),null;case 3:return r=t.stateNode,Xn(),Ce(rt),Ce(Ye),uo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Cs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ct!==null&&(Bo(Ct),Ct=null))),_o(e,t),Xe(t),null;case 5:lo(t);var a=wn(Dr.current);if(n=t.type,e!==null&&t.stateNode!=null)Nc(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return Xe(t),null}if(e=wn(It.current),Cs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Mt]=t,r[Lr]=o,e=(t.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(a=0;a<Er.length;a++)je(Er[a],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":Ue(r,o),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},je("invalid",r);break;case"textarea":Qr(r,o),je("invalid",r)}ca(n,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var d=o[i];i==="children"?typeof d=="string"?r.textContent!==d&&(o.suppressHydrationWarning!==!0&&ys(r.textContent,d,e),a=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(o.suppressHydrationWarning!==!0&&ys(r.textContent,d,e),a=["children",""+d]):j.hasOwnProperty(i)&&d!=null&&i==="onScroll"&&je("scroll",r)}switch(n){case"input":xe(r),ft(r,o,!0);break;case"textarea":xe(r),Yr(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=xs)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=lr(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Mt]=t,e[Lr]=r,Tc(e,t,!1,!1),t.stateNode=e;e:{switch(i=da(n,r),n){case"dialog":je("cancel",e),je("close",e),a=r;break;case"iframe":case"object":case"embed":je("load",e),a=r;break;case"video":case"audio":for(a=0;a<Er.length;a++)je(Er[a],e);a=r;break;case"source":je("error",e),a=r;break;case"img":case"image":case"link":je("error",e),je("load",e),a=r;break;case"details":je("toggle",e),a=r;break;case"input":Ue(e,r),a=he(e,r),je("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=c({},r,{value:void 0}),je("invalid",e);break;case"textarea":Qr(e,r),a=or(e,r),je("invalid",e);break;default:a=r}ca(n,a),d=a;for(o in d)if(d.hasOwnProperty(o)){var p=d[o];o==="style"?yi(e,p):o==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&dr(e,p)):o==="children"?typeof p=="string"?(n!=="textarea"||p!=="")&&Qt(e,p):typeof p=="number"&&Qt(e,""+p):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(j.hasOwnProperty(o)?p!=null&&o==="onScroll"&&je("scroll",e):p!=null&&I(e,o,p,i))}switch(n){case"input":xe(e),ft(e,r,!1);break;case"textarea":xe(e),Yr(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Y(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Gt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Gt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=xs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Xe(t),null;case 6:if(e&&t.stateNode!=null)Ec(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=wn(Dr.current),wn(It.current),Cs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Mt]=t,(o=r.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:ys(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ys(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=t,t.stateNode=r}return Xe(t),null;case 13:if(Ce(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&ut!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ll(),Gn(),t.flags|=98560,o=!1;else if(o=Cs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[Mt]=t}else Gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),o=!1}else Ct!==null&&(Bo(Ct),Ct=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ee.current&1)!==0?He===0&&(He=3):qo())),t.updateQueue!==null&&(t.flags|=4),Xe(t),null);case 4:return Xn(),_o(e,t),e===null&&Pr(t.stateNode.containerInfo),Xe(t),null;case 10:return ro(t.type._context),Xe(t),null;case 17:return st(t.type)&&vs(),Xe(t),null;case 19:if(Ce(Ee),o=t.memoizedState,o===null)return Xe(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Br(o,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ls(e),i!==null){for(t.flags|=128,Br(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ke(Ee,Ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ie()>tr&&(t.flags|=128,r=!0,Br(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ls(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Br(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Ne)return Xe(t),null}else 2*Ie()-o.renderingStartTime>tr&&n!==1073741824&&(t.flags|=128,r=!0,Br(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ie(),t.sibling=null,n=Ee.current,ke(Ee,r?n&1|2:n&1),t):(Xe(t),null);case 22:case 23:return Wo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(pt&1073741824)!==0&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function Qp(e,t){switch(Xa(t),t.tag){case 1:return st(t.type)&&vs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(),Ce(rt),Ce(Ye),uo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return lo(t),null;case 13:if(Ce(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(Ee),null;case 4:return Xn(),null;case 10:return ro(t.type._context),null;case 22:case 23:return Wo(),null;case 24:return null;default:return null}}var Fs=!1,Ke=!1,Yp=typeof WeakSet=="function"?WeakSet:Set,J=null;function Zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(e,t,r)}else n.current=null}function Lo(e,t,n){try{n()}catch(r){Me(e,t,r)}}var Pc=!1;function Jp(e,t){if($a=os,e=il(),Aa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,d=-1,p=-1,b=0,N=0,E=e,C=null;t:for(;;){for(var Q;E!==n||a!==0&&E.nodeType!==3||(d=i+a),E!==o||r!==0&&E.nodeType!==3||(p=i+r),E.nodeType===3&&(i+=E.nodeValue.length),(Q=E.firstChild)!==null;)C=E,E=Q;for(;;){if(E===e)break t;if(C===n&&++b===a&&(d=i),C===o&&++N===r&&(p=i),(Q=E.nextSibling)!==null)break;E=C,C=E.parentNode}E=Q}n=d===-1||p===-1?null:{start:d,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wa={focusedElem:e,selectionRange:n},os=!1,J=t;J!==null;)if(t=J,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var K=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var Z=K.memoizedProps,Ae=K.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?Z:Tt(t.type,Z),Ae);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(A){Me(t,t.return,A)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return K=Pc,Pc=!1,K}function $r(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&Lo(t,n,o)}a=a.next}while(a!==r)}}function Bs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _c(e){var t=e.alternate;t!==null&&(e.alternate=null,_c(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[Lr],delete t[Ga],delete t[Mp],delete t[Ip])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lc(e){return e.tag===5||e.tag===3||e.tag===4}function Mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xs));else if(r!==4&&(e=e.child,e!==null))for(Io(e,t,n),e=e.sibling;e!==null;)Io(e,t,n),e=e.sibling}function Ao(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ao(e,t,n),e=e.sibling;e!==null;)Ao(e,t,n),e=e.sibling}var Ve=null,Nt=!1;function ln(e,t,n){for(n=n.child;n!==null;)Ic(e,t,n),n=n.sibling}function Ic(e,t,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(es,n)}catch{}switch(n.tag){case 5:Ke||Zn(n,t);case 6:var r=Ve,a=Nt;Ve=null,ln(e,t,n),Ve=r,Nt=a,Ve!==null&&(Nt?(e=Ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Nt?(e=Ve,n=n.stateNode,e.nodeType===8?Va(e.parentNode,n):e.nodeType===1&&Va(e,n),vr(e)):Va(Ve,n.stateNode));break;case 4:r=Ve,a=Nt,Ve=n.stateNode.containerInfo,Nt=!0,ln(e,t,n),Ve=r,Nt=a;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&((o&2)!==0||(o&4)!==0)&&Lo(n,t,i),a=a.next}while(a!==r)}ln(e,t,n);break;case 1:if(!Ke&&(Zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){Me(n,t,d)}ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,ln(e,t,n),Ke=r):ln(e,t,n);break;default:ln(e,t,n)}}function Ac(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yp),t.forEach(function(r){var a=ah.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,i=t,d=i;e:for(;d!==null;){switch(d.tag){case 5:Ve=d.stateNode,Nt=!1;break e;case 3:Ve=d.stateNode.containerInfo,Nt=!0;break e;case 4:Ve=d.stateNode.containerInfo,Nt=!0;break e}d=d.return}if(Ve===null)throw Error(u(160));Ic(o,i,a),Ve=null,Nt=!1;var p=a.alternate;p!==null&&(p.return=null),a.return=null}catch(b){Me(a,t,b)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rc(t,e),t=t.sibling}function Rc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),Rt(e),r&4){try{$r(3,e,e.return),Bs(3,e)}catch(Z){Me(e,e.return,Z)}try{$r(5,e,e.return)}catch(Z){Me(e,e.return,Z)}}break;case 1:Et(t,e),Rt(e),r&512&&n!==null&&Zn(n,n.return);break;case 5:if(Et(t,e),Rt(e),r&512&&n!==null&&Zn(n,n.return),e.flags&32){var a=e.stateNode;try{Qt(a,"")}catch(Z){Me(e,e.return,Z)}}if(r&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,d=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{d==="input"&&o.type==="radio"&&o.name!=null&&nt(a,o),da(d,i);var b=da(d,o);for(i=0;i<p.length;i+=2){var N=p[i],E=p[i+1];N==="style"?yi(a,E):N==="dangerouslySetInnerHTML"?dr(a,E):N==="children"?Qt(a,E):I(a,N,E,b)}switch(d){case"input":Ze(a,o);break;case"textarea":ir(a,o);break;case"select":var C=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var Q=o.value;Q!=null?Gt(a,!!o.multiple,Q,!1):C!==!!o.multiple&&(o.defaultValue!=null?Gt(a,!!o.multiple,o.defaultValue,!0):Gt(a,!!o.multiple,o.multiple?[]:"",!1))}a[Lr]=o}catch(Z){Me(e,e.return,Z)}}break;case 6:if(Et(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(u(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(Z){Me(e,e.return,Z)}}break;case 3:if(Et(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vr(t.containerInfo)}catch(Z){Me(e,e.return,Z)}break;case 4:Et(t,e),Rt(e);break;case 13:Et(t,e),Rt(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Oo=Ie())),r&4&&Ac(e);break;case 22:if(N=n!==null&&n.memoizedState!==null,e.mode&1?(Ke=(b=Ke)||N,Et(t,e),Ke=b):Et(t,e),Rt(e),r&8192){if(b=e.memoizedState!==null,(e.stateNode.isHidden=b)&&!N&&(e.mode&1)!==0)for(J=e,N=e.child;N!==null;){for(E=J=N;J!==null;){switch(C=J,Q=C.child,C.tag){case 0:case 11:case 14:case 15:$r(4,C,C.return);break;case 1:Zn(C,C.return);var K=C.stateNode;if(typeof K.componentWillUnmount=="function"){r=C,n=C.return;try{t=r,K.props=t.memoizedProps,K.state=t.memoizedState,K.componentWillUnmount()}catch(Z){Me(r,n,Z)}}break;case 5:Zn(C,C.return);break;case 22:if(C.memoizedState!==null){zc(E);continue}}Q!==null?(Q.return=C,J=Q):zc(E)}N=N.sibling}e:for(N=null,E=e;;){if(E.tag===5){if(N===null){N=E;try{a=E.stateNode,b?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(d=E.stateNode,p=E.memoizedProps.style,i=p!=null&&p.hasOwnProperty("display")?p.display:null,d.style.display=Jr("display",i))}catch(Z){Me(e,e.return,Z)}}}else if(E.tag===6){if(N===null)try{E.stateNode.nodeValue=b?"":E.memoizedProps}catch(Z){Me(e,e.return,Z)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===e)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===e)break e;for(;E.sibling===null;){if(E.return===null||E.return===e)break e;N===E&&(N=null),E=E.return}N===E&&(N=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:Et(t,e),Rt(e),r&4&&Ac(e);break;case 21:break;default:Et(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Lc(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Qt(a,""),r.flags&=-33);var o=Mc(e);Ao(e,o,a);break;case 3:case 4:var i=r.stateNode.containerInfo,d=Mc(e);Io(e,d,i);break;default:throw Error(u(161))}}catch(p){Me(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xp(e,t,n){J=e,Dc(e)}function Dc(e,t,n){for(var r=(e.mode&1)!==0;J!==null;){var a=J,o=a.child;if(a.tag===22&&r){var i=a.memoizedState!==null||Fs;if(!i){var d=a.alternate,p=d!==null&&d.memoizedState!==null||Ke;d=Fs;var b=Ke;if(Fs=i,(Ke=p)&&!b)for(J=a;J!==null;)i=J,p=i.child,i.tag===22&&i.memoizedState!==null?Hc(a):p!==null?(p.return=i,J=p):Hc(a);for(;o!==null;)J=o,Dc(o),o=o.sibling;J=a,Fs=d,Ke=b}Oc(e)}else(a.subtreeFlags&8772)!==0&&o!==null?(o.return=a,J=o):Oc(e)}}function Oc(e){for(;J!==null;){var t=J;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ke||Bs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Tt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&zl(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zl(t,i,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&n.focus();break;case"img":p.src&&(n.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var b=t.alternate;if(b!==null){var N=b.memoizedState;if(N!==null){var E=N.dehydrated;E!==null&&vr(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Ke||t.flags&512&&Mo(t)}catch(C){Me(t,t.return,C)}}if(t===e){J=null;break}if(n=t.sibling,n!==null){n.return=t.return,J=n;break}J=t.return}}function zc(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var n=t.sibling;if(n!==null){n.return=t.return,J=n;break}J=t.return}}function Hc(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bs(4,t)}catch(p){Me(t,n,p)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(p){Me(t,a,p)}}var o=t.return;try{Mo(t)}catch(p){Me(t,o,p)}break;case 5:var i=t.return;try{Mo(t)}catch(p){Me(t,i,p)}}}catch(p){Me(t,t.return,p)}if(t===e){J=null;break}var d=t.sibling;if(d!==null){d.return=t.return,J=d;break}J=t.return}}var Kp=Math.ceil,$s=D.ReactCurrentDispatcher,Ro=D.ReactCurrentOwner,vt=D.ReactCurrentBatchConfig,fe=0,$e=null,Re=null,Ge=0,pt=0,er=nn(0),He=0,Wr=null,Sn=0,Ws=0,Do=0,qr=null,ot=null,Oo=0,tr=1/0,Ut=null,qs=!1,zo=null,cn=null,Us=!1,dn=null,Vs=0,Ur=0,Ho=null,Gs=-1,Qs=0;function tt(){return(fe&6)!==0?Ie():Gs!==-1?Gs:Gs=Ie()}function un(e){return(e.mode&1)===0?1:(fe&2)!==0&&Ge!==0?Ge&-Ge:Rp.transition!==null?(Qs===0&&(Qs=Mi()),Qs):(e=ve,e!==0||(e=window.event,e=e===void 0?16:Bi(e.type)),e)}function Pt(e,t,n,r){if(50<Ur)throw Ur=0,Ho=null,Error(u(185));fr(e,n,r),((fe&2)===0||e!==$e)&&(e===$e&&((fe&2)===0&&(Ws|=n),He===4&&pn(e,Ge)),it(e,r),n===1&&fe===0&&(t.mode&1)===0&&(tr=Ie()+500,ks&&sn()))}function it(e,t){var n=e.callbackNode;Ru(e,t);var r=rs(e,e===$e?Ge:0);if(r===0)n!==null&&Pi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Pi(n),t===1)e.tag===0?Ap(Bc.bind(null,e)):Tl(Bc.bind(null,e)),_p(function(){(fe&6)===0&&sn()}),n=null;else{switch(Ii(r)){case 1:n=ya;break;case 4:n=_i;break;case 16:n=Zr;break;case 536870912:n=Li;break;default:n=Zr}n=Yc(n,Fc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Fc(e,t){if(Gs=-1,Qs=0,(fe&6)!==0)throw Error(u(327));var n=e.callbackNode;if(nr()&&e.callbackNode!==n)return null;var r=rs(e,e===$e?Ge:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ys(e,r);else{t=r;var a=fe;fe|=2;var o=Wc();($e!==e||Ge!==t)&&(Ut=null,tr=Ie()+500,Cn(e,t));do try{th();break}catch(d){$c(e,d)}while(!0);no(),$s.current=o,fe=a,Re!==null?t=0:($e=null,Ge=0,t=He)}if(t!==0){if(t===2&&(a=xa(e),a!==0&&(r=a,t=Fo(e,a))),t===1)throw n=Wr,Cn(e,0),pn(e,r),it(e,Ie()),n;if(t===6)pn(e,r);else{if(a=e.current.alternate,(r&30)===0&&!Zp(a)&&(t=Ys(e,r),t===2&&(o=xa(e),o!==0&&(r=o,t=Fo(e,o))),t===1))throw n=Wr,Cn(e,0),pn(e,r),it(e,Ie()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:Tn(e,ot,Ut);break;case 3:if(pn(e,r),(r&130023424)===r&&(t=Oo+500-Ie(),10<t)){if(rs(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){tt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ua(Tn.bind(null,e,ot,Ut),t);break}Tn(e,ot,Ut);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var i=31-St(r);o=1<<i,i=t[i],i>a&&(a=i),r&=~o}if(r=a,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Kp(r/1960))-r,10<r){e.timeoutHandle=Ua(Tn.bind(null,e,ot,Ut),r);break}Tn(e,ot,Ut);break;case 5:Tn(e,ot,Ut);break;default:throw Error(u(329))}}}return it(e,Ie()),e.callbackNode===n?Fc.bind(null,e):null}function Fo(e,t){var n=qr;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=Ys(e,t),e!==2&&(t=ot,ot=n,t!==null&&Bo(t)),e}function Bo(e){ot===null?ot=e:ot.push.apply(ot,e)}function Zp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!jt(o(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t){for(t&=~Do,t&=~Ws,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-St(t),r=1<<n;e[n]=-1,t&=~r}}function Bc(e){if((fe&6)!==0)throw Error(u(327));nr();var t=rs(e,0);if((t&1)===0)return it(e,Ie()),null;var n=Ys(e,t);if(e.tag!==0&&n===2){var r=xa(e);r!==0&&(t=r,n=Fo(e,r))}if(n===1)throw n=Wr,Cn(e,0),pn(e,t),it(e,Ie()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,ot,Ut),it(e,Ie()),null}function $o(e,t){var n=fe;fe|=1;try{return e(t)}finally{fe=n,fe===0&&(tr=Ie()+500,ks&&sn())}}function jn(e){dn!==null&&dn.tag===0&&(fe&6)===0&&nr();var t=fe;fe|=1;var n=vt.transition,r=ve;try{if(vt.transition=null,ve=1,e)return e()}finally{ve=r,vt.transition=n,fe=t,(fe&6)===0&&sn()}}function Wo(){pt=er.current,Ce(er)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Pp(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Xa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vs();break;case 3:Xn(),Ce(rt),Ce(Ye),uo();break;case 5:lo(r);break;case 4:Xn();break;case 13:Ce(Ee);break;case 19:Ce(Ee);break;case 10:ro(r.type._context);break;case 22:case 23:Wo()}n=n.return}if($e=e,Re=e=hn(e.current,null),Ge=pt=t,He=0,Wr=null,Do=Ws=Sn=0,ot=qr=null,vn!==null){for(t=0;t<vn.length;t++)if(n=vn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=a,r.next=i}n.pending=r}vn=null}return e}function $c(e,t){do{var n=Re;try{if(no(),Ms.current=Ds,Is){for(var r=Pe.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Is=!1}if(kn=0,Be=ze=Pe=null,Or=!1,zr=0,Ro.current=null,n===null||n.return===null){He=1,Wr=t,Re=null;break}e:{var o=e,i=n.return,d=n,p=t;if(t=Ge,d.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var b=p,N=d,E=N.tag;if((N.mode&1)===0&&(E===0||E===11||E===15)){var C=N.alternate;C?(N.updateQueue=C.updateQueue,N.memoizedState=C.memoizedState,N.lanes=C.lanes):(N.updateQueue=null,N.memoizedState=null)}var Q=hc(i);if(Q!==null){Q.flags&=-257,mc(Q,i,d,o,t),Q.mode&1&&pc(o,b,t),t=Q,p=b;var K=t.updateQueue;if(K===null){var Z=new Set;Z.add(p),t.updateQueue=Z}else K.add(p);break e}else{if((t&1)===0){pc(o,b,t),qo();break e}p=Error(u(426))}}else if(Ne&&d.mode&1){var Ae=hc(i);if(Ae!==null){(Ae.flags&65536)===0&&(Ae.flags|=256),mc(Ae,i,d,o,t),eo(Kn(p,d));break e}}o=p=Kn(p,d),He!==4&&(He=2),qr===null?qr=[o]:qr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=dc(o,p,t);Ol(o,m);break e;case 1:d=p;var h=o.type,y=o.stateNode;if((o.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(cn===null||!cn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var A=uc(o,d,t);Ol(o,A);break e}}o=o.return}while(o!==null)}Uc(n)}catch(ne){t=ne,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function Wc(){var e=$s.current;return $s.current=Ds,e===null?Ds:e}function qo(){(He===0||He===3||He===2)&&(He=4),$e===null||(Sn&268435455)===0&&(Ws&268435455)===0||pn($e,Ge)}function Ys(e,t){var n=fe;fe|=2;var r=Wc();($e!==e||Ge!==t)&&(Ut=null,Cn(e,t));do try{eh();break}catch(a){$c(e,a)}while(!0);if(no(),fe=n,$s.current=r,Re!==null)throw Error(u(261));return $e=null,Ge=0,He}function eh(){for(;Re!==null;)qc(Re)}function th(){for(;Re!==null&&!Tu();)qc(Re)}function qc(e){var t=Qc(e.alternate,e,pt);e.memoizedProps=e.pendingProps,t===null?Uc(e):Re=t,Ro.current=null}function Uc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Gp(n,t,pt),n!==null){Re=n;return}}else{if(n=Qp(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,Re=null;return}}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);He===0&&(He=5)}function Tn(e,t,n){var r=ve,a=vt.transition;try{vt.transition=null,ve=1,nh(e,t,n,r)}finally{vt.transition=a,ve=r}return null}function nh(e,t,n,r){do nr();while(dn!==null);if((fe&6)!==0)throw Error(u(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Du(e,o),e===$e&&(Re=$e=null,Ge=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Us||(Us=!0,Yc(Zr,function(){return nr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=vt.transition,vt.transition=null;var i=ve;ve=1;var d=fe;fe|=4,Ro.current=null,Jp(e,n),Rc(n,e),kp(Wa),os=!!$a,Wa=$a=null,e.current=n,Xp(n),Nu(),fe=d,ve=i,vt.transition=o}else e.current=n;if(Us&&(Us=!1,dn=e,Vs=a),o=e.pendingLanes,o===0&&(cn=null),_u(n.stateNode),it(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(qs)throw qs=!1,e=zo,zo=null,e;return(Vs&1)!==0&&e.tag!==0&&nr(),o=e.pendingLanes,(o&1)!==0?e===Ho?Ur++:(Ur=0,Ho=e):Ur=0,sn(),null}function nr(){if(dn!==null){var e=Ii(Vs),t=vt.transition,n=ve;try{if(vt.transition=null,ve=16>e?16:e,dn===null)var r=!1;else{if(e=dn,dn=null,Vs=0,(fe&6)!==0)throw Error(u(331));var a=fe;for(fe|=4,J=e.current;J!==null;){var o=J,i=o.child;if((J.flags&16)!==0){var d=o.deletions;if(d!==null){for(var p=0;p<d.length;p++){var b=d[p];for(J=b;J!==null;){var N=J;switch(N.tag){case 0:case 11:case 15:$r(8,N,o)}var E=N.child;if(E!==null)E.return=N,J=E;else for(;J!==null;){N=J;var C=N.sibling,Q=N.return;if(_c(N),N===b){J=null;break}if(C!==null){C.return=Q,J=C;break}J=Q}}}var K=o.alternate;if(K!==null){var Z=K.child;if(Z!==null){K.child=null;do{var Ae=Z.sibling;Z.sibling=null,Z=Ae}while(Z!==null)}}J=o}}if((o.subtreeFlags&2064)!==0&&i!==null)i.return=o,J=i;else e:for(;J!==null;){if(o=J,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:$r(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,J=m;break e}J=o.return}}var h=e.current;for(J=h;J!==null;){i=J;var y=i.child;if((i.subtreeFlags&2064)!==0&&y!==null)y.return=i,J=y;else e:for(i=h;J!==null;){if(d=J,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Bs(9,d)}}catch(ne){Me(d,d.return,ne)}if(d===i){J=null;break e}var A=d.sibling;if(A!==null){A.return=d.return,J=A;break e}J=d.return}}if(fe=a,sn(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(es,e)}catch{}r=!0}return r}finally{ve=n,vt.transition=t}}return!1}function Vc(e,t,n){t=Kn(n,t),t=dc(e,t,1),e=on(e,t,1),t=tt(),e!==null&&(fr(e,1,t),it(e,t))}function Me(e,t,n){if(e.tag===3)Vc(e,e,n);else for(;t!==null;){if(t.tag===3){Vc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=Kn(n,e),e=uc(t,e,1),t=on(t,e,1),e=tt(),t!==null&&(fr(t,1,e),it(t,e));break}}t=t.return}}function rh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=tt(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(Ge&n)===n&&(He===4||He===3&&(Ge&130023424)===Ge&&500>Ie()-Oo?Cn(e,0):Do|=n),it(e,t)}function Gc(e,t){t===0&&((e.mode&1)===0?t=1:(t=ns,ns<<=1,(ns&130023424)===0&&(ns=4194304)));var n=tt();e=$t(e,t),e!==null&&(fr(e,t,n),it(e,n))}function sh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gc(e,n)}function ah(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),Gc(e,n)}var Qc;Qc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)at=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return at=!1,Vp(e,t,n);at=(e.flags&131072)!==0}else at=!1,Ne&&(t.flags&1048576)!==0&&Nl(t,js,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hs(e,t),e=t.pendingProps;var a=qn(t,Ye.current);Jn(t,n),a=mo(null,t,r,e,a,n);var o=fo();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,st(r)?(o=!0,ws(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,oo(t),a.updater=Os,t.stateNode=a,a._reactInternals=t,wo(t,r,e,n),t=Co(null,t,r,!0,o,n)):(t.tag=0,Ne&&o&&Ja(t),et(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hs(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=ih(r),e=Tt(r,e),a){case 0:t=jo(null,t,r,e,n);break e;case 1:t=vc(null,t,r,e,n);break e;case 11:t=fc(null,t,r,e,n);break e;case 14:t=gc(null,t,r,Tt(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Tt(r,a),jo(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Tt(r,a),vc(e,t,r,a,n);case 3:e:{if(wc(t),e===null)throw Error(u(387));r=t.pendingProps,o=t.memoizedState,a=o.element,Dl(e,t),_s(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Kn(Error(u(423)),t),t=kc(e,t,r,n,a);break e}else if(r!==a){a=Kn(Error(u(424)),t),t=kc(e,t,r,n,a);break e}else for(ut=tn(t.stateNode.containerInfo.firstChild),dt=t,Ne=!0,Ct=null,n=Al(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gn(),r===a){t=qt(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return Hl(t),e===null&&Za(t),r=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,qa(r,a)?i=null:o!==null&&qa(r,o)&&(t.flags|=32),bc(e,t),et(e,t,i,n),t.child;case 6:return e===null&&Za(t),null;case 13:return Sc(e,t,n);case 4:return io(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qn(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Tt(r,a),fc(e,t,r,a,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,ke(Ns,r._currentValue),r._currentValue=i,o!==null)if(jt(o.value,i)){if(o.children===a.children&&!rt.current){t=qt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var d=o.dependencies;if(d!==null){i=o.child;for(var p=d.firstContext;p!==null;){if(p.context===r){if(o.tag===1){p=Wt(-1,n&-n),p.tag=2;var b=o.updateQueue;if(b!==null){b=b.shared;var N=b.pending;N===null?p.next=p:(p.next=N.next,N.next=p),b.pending=p}}o.lanes|=n,p=o.alternate,p!==null&&(p.lanes|=n),so(o.return,n,t),d.lanes|=n;break}p=p.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(u(341));i.lanes|=n,d=i.alternate,d!==null&&(d.lanes|=n),so(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}et(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Jn(t,n),a=xt(a),r=r(a),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,a=Tt(r,t.pendingProps),a=Tt(r.type,a),gc(e,t,r,a,n);case 15:return yc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Tt(r,a),Hs(e,t),t.tag=1,st(r)?(e=!0,ws(t)):e=!1,Jn(t,n),lc(t,r,a),wo(t,r,a,n),Co(null,t,r,!0,e,n);case 19:return Cc(e,t,n);case 22:return xc(e,t,n)}throw Error(u(156,t.tag))};function Yc(e,t){return Ei(e,t)}function oh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,n,r){return new oh(e,t,n,r)}function Uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ih(e){if(typeof e=="function")return Uo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fe)return 11;if(e===Oe)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Js(e,t,n,r,a,o){var i=2;if(r=e,typeof e=="function")Uo(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case te:return Nn(n.children,a,o,t);case we:i=8,a|=8;break;case ye:return e=wt(12,n,t,a|2),e.elementType=ye,e.lanes=o,e;case Te:return e=wt(13,n,t,a),e.elementType=Te,e.lanes=o,e;case De:return e=wt(19,n,t,a),e.elementType=De,e.lanes=o,e;case be:return Xs(n,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case re:i=10;break e;case qe:i=9;break e;case Fe:i=11;break e;case Oe:i=14;break e;case _e:i=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=wt(i,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Nn(e,t,n,r){return e=wt(7,e,r,t),e.lanes=n,e}function Xs(e,t,n,r){return e=wt(22,e,r,t),e.elementType=be,e.lanes=n,e.stateNode={isHidden:!1},e}function Vo(e,t,n){return e=wt(6,e,null,t),e.lanes=n,e}function Go(e,t,n){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lh(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ba(0),this.expirationTimes=ba(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ba(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Qo(e,t,n,r,a,o,i,d,p){return e=new lh(e,t,n,d,p),t===1?(t=1,o===!0&&(t|=8)):t=0,o=wt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oo(o),e}function ch(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ue,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Jc(e){if(!e)return rn;e=e._reactInternals;e:{if(fn(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(st(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(st(n))return jl(e,n,t)}return t}function Xc(e,t,n,r,a,o,i,d,p){return e=Qo(n,r,!0,e,a,o,i,d,p),e.context=Jc(null),n=e.current,r=tt(),a=un(n),o=Wt(r,a),o.callback=t??null,on(n,o,a),e.current.lanes=a,fr(e,a,r),it(e,r),e}function Ks(e,t,n,r){var a=t.current,o=tt(),i=un(a);return n=Jc(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=on(a,t,i),e!==null&&(Pt(e,a,i,o),Ps(e,a,i)),i}function Zs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yo(e,t){Kc(e,t),(e=e.alternate)&&Kc(e,t)}function dh(){return null}var Zc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jo(e){this._internalRoot=e}ea.prototype.render=Jo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Ks(e,t,null,null)},ea.prototype.unmount=Jo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){Ks(null,e,null,null)}),t[zt]=null}};function ea(e){this._internalRoot=e}ea.prototype.unstable_scheduleHydration=function(e){if(e){var t=Di();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&t!==0&&t<Kt[n].priority;n++);Kt.splice(n,0,e),n===0&&Hi(e)}};function Xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ed(){}function uh(e,t,n,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var b=Zs(i);o.call(b)}}var i=Xc(t,r,e,0,null,!1,!1,"",ed);return e._reactRootContainer=i,e[zt]=i.current,Pr(e.nodeType===8?e.parentNode:e),jn(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var d=r;r=function(){var b=Zs(p);d.call(b)}}var p=Qo(e,0,!1,null,null,!1,!1,"",ed);return e._reactRootContainer=p,e[zt]=p.current,Pr(e.nodeType===8?e.parentNode:e),jn(function(){Ks(t,p,n,r)}),p}function na(e,t,n,r,a){var o=n._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var d=a;a=function(){var p=Zs(i);d.call(p)}}Ks(t,i,e,a)}else i=uh(n,t,e,a,r);return Zs(i)}Ai=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=mr(t.pendingLanes);n!==0&&(va(t,n|1),it(t,Ie()),(fe&6)===0&&(tr=Ie()+500,sn()))}break;case 13:jn(function(){var r=$t(e,1);if(r!==null){var a=tt();Pt(r,e,1,a)}}),Yo(e,1)}},wa=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=tt();Pt(t,e,134217728,n)}Yo(e,134217728)}},Ri=function(e){if(e.tag===13){var t=un(e),n=$t(e,t);if(n!==null){var r=tt();Pt(n,e,t,r)}Yo(e,t)}},Di=function(){return ve},Oi=function(e,t){var n=ve;try{return ve=e,t()}finally{ve=n}},ha=function(e,t,n){switch(t){case"input":if(Ze(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=bs(r);if(!a)throw Error(u(90));Se(r),Ze(r,a)}}}break;case"textarea":ir(e,n);break;case"select":t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}},wi=$o,ki=jn;var ph={usingClientEntryPoint:!1,Events:[Mr,$n,bs,bi,vi,$o]},Vr={findFiberByHostInstance:gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hh={bundleType:Vr.bundleType,version:Vr.version,rendererPackageName:Vr.rendererPackageName,rendererConfig:Vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ti(e),e===null?null:e.stateNode},findFiberByHostInstance:Vr.findFiberByHostInstance||dh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{es=ra.inject(hh),Lt=ra}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ph,lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xo(t))throw Error(u(200));return ch(e,t,null,n)},lt.createRoot=function(e,t){if(!Xo(e))throw Error(u(299));var n=!1,r="",a=Zc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Qo(e,1,!1,null,null,n,!1,r,a),e[zt]=t.current,Pr(e.nodeType===8?e.parentNode:e),new Jo(t)},lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=Ti(t),e=e===null?null:e.stateNode,e},lt.flushSync=function(e){return jn(e)},lt.hydrate=function(e,t,n){if(!ta(t))throw Error(u(200));return na(null,e,t,!0,n)},lt.hydrateRoot=function(e,t,n){if(!Xo(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,a=!1,o="",i=Zc;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Xc(t,null,e,1,n??null,a,!1,o,i),e[zt]=t.current,Pr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new ea(t)},lt.render=function(e,t,n){if(!ta(t))throw Error(u(200));return na(null,e,t,!1,n)},lt.unmountComponentAtNode=function(e){if(!ta(e))throw Error(u(40));return e._reactRootContainer?(jn(function(){na(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1},lt.unstable_batchedUpdates=$o,lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ta(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return na(e,t,n,!1,r)},lt.version="18.3.1-next-f1338f8080-20240426",lt}var ld;function kh(){if(ld)return ei.exports;ld=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(x){console.error(x)}}return w(),ei.exports=wh(),ei.exports}var cd;function Sh(){if(cd)return sa;cd=1;var w=kh();return sa.createRoot=w.createRoot,sa.hydrateRoot=w.hydrateRoot,sa}var jh=Sh();const Ch=gd(jh);var di={};(function w(x,u,M,j){var V=!!(x.Worker&&x.Blob&&x.Promise&&x.OffscreenCanvas&&x.OffscreenCanvasRenderingContext2D&&x.HTMLCanvasElement&&x.HTMLCanvasElement.prototype.transferControlToOffscreen&&x.URL&&x.URL.createObjectURL),g=typeof Path2D=="function"&&typeof DOMMatrix=="function",k=(function(){if(!x.OffscreenCanvas)return!1;try{var c=new OffscreenCanvas(1,1),l=c.getContext("2d");l.fillRect(0,0,1,1);var f=c.transferToImageBitmap();l.createPattern(f,"no-repeat")}catch{return!1}return!0})();function P(){}function W(c){var l=u.exports.Promise,f=l!==void 0?l:x.Promise;return typeof f=="function"?new f(c):(c(P,P),null)}var L=(function(c,l){return{transform:function(f){if(c)return f;if(l.has(f))return l.get(f);var v=new OffscreenCanvas(f.width,f.height),S=v.getContext("2d");return S.drawImage(f,0,0),l.set(f,v),v},clear:function(){l.clear()}}})(k,new Map),O=(function(){var c=Math.floor(16.666666666666668),l,f,v={},S=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(l=function(R){var $=Math.random();return v[$]=requestAnimationFrame(function F(Y){S===Y||S+c-1<Y?(S=Y,delete v[$],R()):v[$]=requestAnimationFrame(F)}),$},f=function(R){v[R]&&cancelAnimationFrame(v[R])}):(l=function(R){return setTimeout(R,c)},f=function(R){return clearTimeout(R)}),{frame:l,cancel:f}})(),_=(function(){var c,l,f={};function v(S){function R($,F){S.postMessage({options:$||{},callback:F})}S.init=function(F){var Y=F.transferControlToOffscreen();S.postMessage({canvas:Y},[Y])},S.fire=function(F,Y,ie){if(l)return R(F,null),l;var me=Math.random().toString(36).slice(2);return l=W(function(xe){function Se(Le){Le.data.callback===me&&(delete f[me],S.removeEventListener("message",Se),l=null,L.clear(),ie(),xe())}S.addEventListener("message",Se),R(F,me),f[me]=Se.bind(null,{data:{callback:me}})}),l},S.reset=function(){S.postMessage({reset:!0});for(var F in f)f[F](),delete f[F]}}return function(){if(c)return c;if(!M&&V){var S=["var CONFETTI, SIZE = {}, module = {};","("+w.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{c=new Worker(URL.createObjectURL(new Blob([S])))}catch(R){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",R),null}v(c)}return c}})(),X={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function q(c,l){return l?l(c):c}function ee(c){return c!=null}function z(c,l,f){return q(c&&ee(c[l])?c[l]:X[l],f)}function H(c){return c<0?0:Math.floor(c)}function T(c,l){return Math.floor(Math.random()*(l-c))+c}function I(c){return parseInt(c,16)}function D(c){return c.map(le)}function le(c){var l=String(c).replace(/[^0-9a-f]/gi,"");return l.length<6&&(l=l[0]+l[0]+l[1]+l[1]+l[2]+l[2]),{r:I(l.substring(0,2)),g:I(l.substring(2,4)),b:I(l.substring(4,6))}}function ue(c){var l=z(c,"origin",Object);return l.x=z(l,"x",Number),l.y=z(l,"y",Number),l}function te(c){c.width=document.documentElement.clientWidth,c.height=document.documentElement.clientHeight}function we(c){var l=c.getBoundingClientRect();c.width=l.width,c.height=l.height}function ye(c){var l=document.createElement("canvas");return l.style.position="fixed",l.style.top="0px",l.style.left="0px",l.style.pointerEvents="none",l.style.zIndex=c,l}function re(c,l,f,v,S,R,$,F,Y){c.save(),c.translate(l,f),c.rotate(R),c.scale(v,S),c.arc(0,0,1,$,F,Y),c.restore()}function qe(c){var l=c.angle*(Math.PI/180),f=c.spread*(Math.PI/180);return{x:c.x,y:c.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:c.startVelocity*.5+Math.random()*c.startVelocity,angle2D:-l+(.5*f-Math.random()*f),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:c.color,shape:c.shape,tick:0,totalTicks:c.ticks,decay:c.decay,drift:c.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:c.gravity*3,ovalScalar:.6,scalar:c.scalar,flat:c.flat}}function Fe(c,l){l.x+=Math.cos(l.angle2D)*l.velocity+l.drift,l.y+=Math.sin(l.angle2D)*l.velocity+l.gravity,l.velocity*=l.decay,l.flat?(l.wobble=0,l.wobbleX=l.x+10*l.scalar,l.wobbleY=l.y+10*l.scalar,l.tiltSin=0,l.tiltCos=0,l.random=1):(l.wobble+=l.wobbleSpeed,l.wobbleX=l.x+10*l.scalar*Math.cos(l.wobble),l.wobbleY=l.y+10*l.scalar*Math.sin(l.wobble),l.tiltAngle+=.1,l.tiltSin=Math.sin(l.tiltAngle),l.tiltCos=Math.cos(l.tiltAngle),l.random=Math.random()+2);var f=l.tick++/l.totalTicks,v=l.x+l.random*l.tiltCos,S=l.y+l.random*l.tiltSin,R=l.wobbleX+l.random*l.tiltCos,$=l.wobbleY+l.random*l.tiltSin;if(c.fillStyle="rgba("+l.color.r+", "+l.color.g+", "+l.color.b+", "+(1-f)+")",c.beginPath(),g&&l.shape.type==="path"&&typeof l.shape.path=="string"&&Array.isArray(l.shape.matrix))c.fill(be(l.shape.path,l.shape.matrix,l.x,l.y,Math.abs(R-v)*.1,Math.abs($-S)*.1,Math.PI/10*l.wobble));else if(l.shape.type==="bitmap"){var F=Math.PI/10*l.wobble,Y=Math.abs(R-v)*.1,ie=Math.abs($-S)*.1,me=l.shape.bitmap.width*l.scalar,xe=l.shape.bitmap.height*l.scalar,Se=new DOMMatrix([Math.cos(F)*Y,Math.sin(F)*Y,-Math.sin(F)*ie,Math.cos(F)*ie,l.x,l.y]);Se.multiplySelf(new DOMMatrix(l.shape.matrix));var Le=c.createPattern(L.transform(l.shape.bitmap),"no-repeat");Le.setTransform(Se),c.globalAlpha=1-f,c.fillStyle=Le,c.fillRect(l.x-me/2,l.y-xe/2,me,xe),c.globalAlpha=1}else if(l.shape==="circle")c.ellipse?c.ellipse(l.x,l.y,Math.abs(R-v)*l.ovalScalar,Math.abs($-S)*l.ovalScalar,Math.PI/10*l.wobble,0,2*Math.PI):re(c,l.x,l.y,Math.abs(R-v)*l.ovalScalar,Math.abs($-S)*l.ovalScalar,Math.PI/10*l.wobble,0,2*Math.PI);else if(l.shape==="star")for(var he=Math.PI/2*3,Ue=4*l.scalar,nt=8*l.scalar,Ze=l.x,ft=l.y,kt=5,Qe=Math.PI/kt;kt--;)Ze=l.x+Math.cos(he)*nt,ft=l.y+Math.sin(he)*nt,c.lineTo(Ze,ft),he+=Qe,Ze=l.x+Math.cos(he)*Ue,ft=l.y+Math.sin(he)*Ue,c.lineTo(Ze,ft),he+=Qe;else c.moveTo(Math.floor(l.x),Math.floor(l.y)),c.lineTo(Math.floor(l.wobbleX),Math.floor(S)),c.lineTo(Math.floor(R),Math.floor($)),c.lineTo(Math.floor(v),Math.floor(l.wobbleY));return c.closePath(),c.fill(),l.tick<l.totalTicks}function Te(c,l,f,v,S){var R=l.slice(),$=c.getContext("2d"),F,Y,ie=W(function(me){function xe(){F=Y=null,$.clearRect(0,0,v.width,v.height),L.clear(),S(),me()}function Se(){M&&!(v.width===j.width&&v.height===j.height)&&(v.width=c.width=j.width,v.height=c.height=j.height),!v.width&&!v.height&&(f(c),v.width=c.width,v.height=c.height),$.clearRect(0,0,v.width,v.height),R=R.filter(function(Le){return Fe($,Le)}),R.length?F=O.frame(Se):xe()}F=O.frame(Se),Y=xe});return{addFettis:function(me){return R=R.concat(me),ie},canvas:c,promise:ie,reset:function(){F&&O.cancel(F),Y&&Y()}}}function De(c,l){var f=!c,v=!!z(l||{},"resize"),S=!1,R=z(l,"disableForReducedMotion",Boolean),$=V&&!!z(l||{},"useWorker"),F=$?_():null,Y=f?te:we,ie=c&&F?!!c.__confetti_initialized:!1,me=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,xe;function Se(he,Ue,nt){for(var Ze=z(he,"particleCount",H),ft=z(he,"angle",Number),kt=z(he,"spread",Number),Qe=z(he,"startVelocity",Number),Gt=z(he,"decay",Number),or=z(he,"gravity",Number),Qr=z(he,"drift",Number),ir=z(he,"colors",D),Yr=z(he,"ticks",Number),lr=z(he,"shapes"),cr=z(he,"scalar"),Mn=!!z(he,"flat"),dr=ue(he),Qt=Ze,Ot=[],la=c.width*dr.x,Jr=c.height*dr.y;Qt--;)Ot.push(qe({x:la,y:Jr,angle:ft,spread:kt,startVelocity:Qe,color:ir[Qt%ir.length],shape:lr[T(0,lr.length)],ticks:Yr,decay:Gt,gravity:or,drift:Qr,scalar:cr,flat:Mn}));return xe?xe.addFettis(Ot):(xe=Te(c,Ot,Y,Ue,nt),xe.promise)}function Le(he){var Ue=R||z(he,"disableForReducedMotion",Boolean),nt=z(he,"zIndex",Number);if(Ue&&me)return W(function(Qe){Qe()});f&&xe?c=xe.canvas:f&&!c&&(c=ye(nt),document.body.appendChild(c)),v&&!ie&&Y(c);var Ze={width:c.width,height:c.height};F&&!ie&&F.init(c),ie=!0,F&&(c.__confetti_initialized=!0);function ft(){if(F){var Qe={getBoundingClientRect:function(){if(!f)return c.getBoundingClientRect()}};Y(Qe),F.postMessage({resize:{width:Qe.width,height:Qe.height}});return}Ze.width=Ze.height=null}function kt(){xe=null,v&&(S=!1,x.removeEventListener("resize",ft)),f&&c&&(document.body.contains(c)&&document.body.removeChild(c),c=null,ie=!1)}return v&&!S&&(S=!0,x.addEventListener("resize",ft,!1)),F?F.fire(he,Ze,kt):Se(he,Ze,kt)}return Le.reset=function(){F&&F.reset(),xe&&xe.reset()},Le}var Oe;function _e(){return Oe||(Oe=De(null,{useWorker:!0,resize:!0})),Oe}function be(c,l,f,v,S,R,$){var F=new Path2D(c),Y=new Path2D;Y.addPath(F,new DOMMatrix(l));var ie=new Path2D;return ie.addPath(Y,new DOMMatrix([Math.cos($)*S,Math.sin($)*S,-Math.sin($)*R,Math.cos($)*R,f,v])),ie}function B(c){if(!g)throw new Error("path confetti are not supported in this browser");var l,f;typeof c=="string"?l=c:(l=c.path,f=c.matrix);var v=new Path2D(l),S=document.createElement("canvas"),R=S.getContext("2d");if(!f){for(var $=1e3,F=$,Y=$,ie=0,me=0,xe,Se,Le=0;Le<$;Le+=2)for(var he=0;he<$;he+=2)R.isPointInPath(v,Le,he,"nonzero")&&(F=Math.min(F,Le),Y=Math.min(Y,he),ie=Math.max(ie,Le),me=Math.max(me,he));xe=ie-F,Se=me-Y;var Ue=10,nt=Math.min(Ue/xe,Ue/Se);f=[nt,0,0,nt,-Math.round(xe/2+F)*nt,-Math.round(Se/2+Y)*nt]}return{type:"path",path:l,matrix:f}}function se(c){var l,f=1,v="#000000",S='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof c=="string"?l=c:(l=c.text,f="scalar"in c?c.scalar:f,S="fontFamily"in c?c.fontFamily:S,v="color"in c?c.color:v);var R=10*f,$=""+R+"px "+S,F=new OffscreenCanvas(R,R),Y=F.getContext("2d");Y.font=$;var ie=Y.measureText(l),me=Math.ceil(ie.actualBoundingBoxRight+ie.actualBoundingBoxLeft),xe=Math.ceil(ie.actualBoundingBoxAscent+ie.actualBoundingBoxDescent),Se=2,Le=ie.actualBoundingBoxLeft+Se,he=ie.actualBoundingBoxAscent+Se;me+=Se+Se,xe+=Se+Se,F=new OffscreenCanvas(me,xe),Y=F.getContext("2d"),Y.font=$,Y.fillStyle=v,Y.fillText(l,Le,he);var Ue=1/f;return{type:"bitmap",bitmap:F.transferToImageBitmap(),matrix:[Ue,0,0,Ue,-me*Ue/2,-xe*Ue/2]}}u.exports=function(){return _e().apply(this,arguments)},u.exports.reset=function(){_e().reset()},u.exports.create=De,u.exports.shapeFromPath=B,u.exports.shapeFromText=se})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),di,!1);const Th=di.exports;di.exports.create;class Nh{constructor(){this.ctx=null,this.muted=!1}init(){if(!this.ctx&&typeof window<"u"){const x=window.AudioContext||window.webkitAudioContext;x&&(this.ctx=new x)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(x){this.muted=x}playTone(x,u="sine",M=.15,j=.15,V=0){if(!this.muted)try{if(this.init(),!this.ctx)return;const g=this.ctx.createOscillator(),k=this.ctx.createGain();g.type=u,g.frequency.setValueAtTime(x,this.ctx.currentTime+V),k.gain.setValueAtTime(j,this.ctx.currentTime+V),k.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+V+M),g.connect(k),k.connect(this.ctx.destination),g.start(this.ctx.currentTime+V),g.stop(this.ctx.currentTime+V+M)}catch{}}playClick(){this.playTone(800,"triangle",.04,.08)}playCorrect(){this.playTone(523.25,"sine",.12,.15,0),this.playTone(659.25,"sine",.12,.15,.08),this.playTone(783.99,"sine",.22,.18,.16)}playError(){this.playTone(180,"sawtooth",.12,.12,0),this.playTone(130,"sawtooth",.22,.15,.1)}playStreak(){[400,550,700,880,1100].forEach((x,u)=>{this.playTone(x,"triangle",.08,.1,u*.04)})}playLevelUp(){[{f:523.25,d:.12,t:0},{f:659.25,d:.12,t:.1},{f:783.99,d:.12,t:.2},{f:1046.5,d:.35,t:.3}].forEach(u=>this.playTone(u.f,"square",u.d,.12,u.t))}playCardFlip(){this.playTone(450,"sine",.05,.06)}}const G=new Nh,yd=U.createContext(),ri="byteverse_player_data_v1",Eh=({children:w})=>{const[x,u]=U.useState(()=>{try{const D=localStorage.getItem(ri);if(D)return JSON.parse(D)}catch{}return{xp:0,streak:1,lastActiveDate:new Date().toDateString(),completedLevels:{html:[],css:[],js:[],mysql:[],python:[],php:[],django:[]},achievements:["first_step"],soundMuted:!1}}),[M,j]=U.useState("arcade"),[V,g]=U.useState("html"),[k,P]=U.useState(1),[W,L]=U.useState(!1);U.useEffect(()=>{try{localStorage.setItem(ri,JSON.stringify(x))}catch{}},[x]),U.useEffect(()=>{G.setMuted(x.soundMuted)},[x.soundMuted]);const O=Math.floor(x.xp/100)+1,_=x.xp%100,X=D=>D>=20?"Cyber Archmage":D>=15?"Full-Stack Titan":D>=10?"System Architect":D>=7?"Algorithm Master":D>=5?"Code Sorcerer":D>=3?"Syntax Knight":"Byte Novice",q=()=>{try{Th({particleCount:60,spread:70,origin:{y:.6}})}catch{}},ee=D=>{G.playCorrect(),q(),u(le=>{const ue=Math.floor(le.xp/100)+1,te=le.xp+D;return Math.floor(te/100)+1>ue&&setTimeout(()=>G.playLevelUp(),300),{...le,xp:te}})},z=(D,le,ue=50)=>{u(te=>{const we=te.completedLevels[D]||[],ye=!we.includes(le),re=ye?[...we,le]:we,qe=[...te.achievements];if(re.length>=4){const Te={html:"html_master",css:"css_wizard",js:"js_ninja",mysql:"sql_sleuth",python:"python_charmer",php:"server_chef",django:"django_captain"}[D];Te&&!qe.includes(Te)&&(qe.push(Te),setTimeout(()=>G.playStreak(),600))}return{...te,xp:ye?te.xp+ue:te.xp,completedLevels:{...te.completedLevels,[D]:re},achievements:qe}}),G.playCorrect(),q()},H=D=>{u(le=>le.achievements.includes(D)?le:(G.playStreak(),{...le,achievements:[...le.achievements,D]}))},T=()=>{G.playClick(),u(D=>({...D,soundMuted:!D.soundMuted}))},I=()=>{if(window.confirm("Are you sure you want to reset all your progress, XP, and badges?")){const D={xp:0,streak:1,lastActiveDate:new Date().toDateString(),completedLevels:{html:[],css:[],js:[],mysql:[],python:[],php:[],django:[]},achievements:["first_step"],soundMuted:!1};u(D),localStorage.removeItem(ri),G.playClick()}};return s.jsx(yd.Provider,{value:{mode:M,setMode:j,selectedTrack:V,setSelectedTrack:g,activeGameLevel:k,setActiveGameLevel:P,xp:x.xp,playerLevel:O,currentLevelProgress:_,rankTitle:X(O),streak:x.streak,completedLevels:x.completedLevels,achievements:x.achievements,soundMuted:x.soundMuted,isAchievementsOpen:W,setIsAchievementsOpen:L,addXP:ee,markLevelComplete:z,unlockAchievement:H,toggleSound:T,resetProgress:I,triggerConfetti:q},children:w})},mt=()=>U.useContext(yd),xd=({size:w="md",showTagline:x=!0,onClick:u})=>{const M={sm:{icon:28,text:"text-xl"},md:{icon:38,text:"text-2xl"},lg:{icon:54,text:"text-4xl"}},{icon:j,text:V}=M[w]||M.md;return s.jsxs("div",{onClick:u,className:"inline-flex items-center gap-3 cursor-pointer group select-none transition-transform hover:scale-[1.02]",children:[s.jsxs("div",{className:"relative flex items-center justify-center",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-300"}),s.jsxs("svg",{width:j,height:j,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"relative drop-shadow-[0_0_12px_rgba(0,242,254,0.5)] transition-transform group-hover:rotate-6 duration-300",children:[s.jsxs("defs",{children:[s.jsxs("linearGradient",{id:"cyberGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#00f2fe"}),s.jsx("stop",{offset:"50%",stopColor:"#9d4edd"}),s.jsx("stop",{offset:"100%",stopColor:"#ec4899"})]}),s.jsxs("linearGradient",{id:"innerGlow",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#00f2fe",stopOpacity:"0.8"}),s.jsx("stop",{offset:"100%",stopColor:"#9d4edd",stopOpacity:"0.2"})]})]}),s.jsx("polygon",{points:"50,6 92,28 92,72 50,94 8,72 8,28",fill:"#0c111e",stroke:"url(#cyberGrad)",strokeWidth:"5",strokeLinejoin:"round"}),s.jsx("polygon",{points:"50,15 84,33 84,67 50,85 16,67 16,33",fill:"none",stroke:"url(#innerGlow)",strokeWidth:"1.5",strokeDasharray:"4 2"}),s.jsx("path",{d:"M34 38 L22 50 L34 62",stroke:"#00f2fe",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M66 38 L78 50 L66 62",stroke:"#ec4899",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("line",{x1:"57",y1:"34",x2:"43",y2:"66",stroke:"#9d4edd",strokeWidth:"5",strokeLinecap:"round"}),s.jsx("circle",{cx:"50",cy:"50",r:"4.5",fill:"#ffffff",className:"animate-ping opacity-75 origin-center"}),s.jsx("circle",{cx:"50",cy:"50",r:"3.5",fill:"#00f2fe"})]})]}),s.jsxs("div",{className:"flex flex-col",children:[s.jsxs("div",{className:`font-extrabold tracking-tight ${V} leading-none flex items-center gap-0.5`,children:[s.jsx("span",{className:"text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]",children:"Byte"}),s.jsx("span",{className:"bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent",children:"Verse"})]}),x&&s.jsxs("span",{className:"text-[10px] uppercase tracking-widest text-cyan-400/80 font-mono mt-1 font-semibold flex items-center gap-1.5",children:[s.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),"PLAY • LEARN • CODE"]})]})]})};/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=w=>w==null?void 0:w.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function _h(w,x,u=[]){if(x==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Ph(w),size:24,node:x,...u.length>0?{aliases:u}:{}}}/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=w=>{let x="",u=!1;for(const M of w){if(M==="-"||M==="_"||M<=" "){u=x.length>0;continue}x.length===0?x+=M.toLowerCase():x+=u?M.toUpperCase():M,u=!1}return x};/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=w=>{const x=Lh(w);return x.charAt(0).toUpperCase()+x.slice(1)};/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=(...w)=>w.filter((x,u,M)=>!!x&&x.trim()!==""&&M.indexOf(x)===u).join(" ").trim();/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function si(w){return w!=null}function Ih(w,x={}){var _,X;const u=x.attributeNames??{},M=q=>u[q]??q,j=w.size??w.width??En.width,V=w.size??w.height??En.height,g=((_=w.aliases)==null?void 0:_.filter(q=>typeof q=="string"&&q.trim()!=="").map(q=>`lucide-${q}`))??[],k=[...w.name?[`lucide-${w.name}`]:[],...g],P=((X=x.className)==null?void 0:X.split(" ").filter(Boolean))??[],W=x.includeDefaultClasses===!1?ii(...P):ii("lucide",...k,...P),L=x.absoluteStrokeWidth?Number(x.strokeWidth??En["stroke-width"])*Number(w.size??w.width??En.width)/Number(x.size??x.width??En.width):x.strokeWidth??En["stroke-width"];return["svg",{...Object.entries(En).reduce((q,[ee,z])=>(q[M(ee)]=z,q),{}),..."color"in x&&x.color&&{[M("stroke")]:x.color},..."size"in x&&si(x.size)&&{[M("width")]:x.size,[M("height")]:x.size},..."width"in x&&si(x.width)&&{[M("width")]:x.width},..."height"in x&&si(x.height)&&{[M("height")]:x.height},[M("stroke-width")]:L,...W&&{[M("class")]:W},[M("viewBox")]:`0 0 ${j} ${V}`,...x.hasA11yProp===!1?{[M("aria-hidden")]:"true"}:{},..."attributes"in x&&x.attributes},w.node.map(q=>{const[ee,z,H]=q,T=x.nonScalingStroke?{[M("vector-effect")]:"non-scaling-stroke",...z}:z;return H?[ee,T,H]:[ee,T]})]}/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ah(w,x={}){return Ih(w,{...x,attributeNames:{...x.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=w=>{for(const x in w)if(x.startsWith("aria-")||x==="role"||x==="title")return!0;return!1},Dh=U.createContext({}),Oh=()=>U.useContext(Dh),zh=U.forwardRef(({color:w,size:x,width:u,height:M,strokeWidth:j,absoluteStrokeWidth:V,nonScalingStroke:g,className:k="",children:P,iconNode:W=[],icon:L={node:W,aliases:[],size:24},...O},_)=>{const{size:X=24,strokeWidth:q=2,absoluteStrokeWidth:ee=!1,nonScalingStroke:z=!1,color:H="currentColor",className:T=""}=Oh()??{},I=!!P||Rh(O),[D,le,ue=[]]=Ah(L,{color:w??H,width:u??x??X,height:M??x??X,strokeWidth:j??q,absoluteStrokeWidth:V??ee,nonScalingStroke:g??z,className:ii(T,k),hasA11yProp:I,attributes:O});return U.createElement(D,{ref:_,...le},[...ue.map(([te,we])=>U.createElement(te,we)),...Array.isArray(P)?P:[P]])});/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ce(w,x=[],u=[]){const M=typeof w=="string"?_h(w,x,u):w,j=U.forwardRef(({className:V,...g},k)=>U.createElement(zh,{ref:k,icon:M,className:V,...g}));return M.name&&(j.displayName=Mh(M.name)),j}/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd={name:"arrow-right-left",size:24,node:[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]};bd.node;const Hh=ce(bd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};vd.node;const Pn=ce(vd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};wd.node;const Fh=ce(wd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};kd.node;const ui=ce(kd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd={name:"bot",size:24,node:[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]};Sd.node;const dd=ce(Sd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd={name:"bug",size:24,node:[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]]};jd.node;const Bh=ce(jd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Cd.node;const $h=ce(Cd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};Td.node;const ud=ce(Td);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Nd.node;const li=ce(Nd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Ed.node;const _t=ce(Ed);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};Pd.node;const Wh=ce(Pd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d={name:"circle-x",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-circle"]};_d.node;const _n=ce(_d);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};Ld.node;const ar=ce(Ld);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};Md.node;const qh=ce(Md);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id={name:"database",size:24,node:[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]};Id.node;const rr=ce(Id);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Ad.node;const Rd=ce(Ad);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd={name:"file-code",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]]};Dd.node;const Uh=ce(Dd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};Od.node;const Vh=ce(Od);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};zd.node;const Hd=ce(zd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd={name:"gamepad-2",size:24,node:[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]};Fd.node;const Bd=ce(Fd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d={name:"gem",size:24,node:[["path",{d:"M10.5 3 8 9l4 13 4-13-2.5-6",key:"b3dvk1"}],["path",{d:"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",key:"7w4byz"}],["path",{d:"M2 9h20",key:"16fsjt"}]]};$d.node;const Gh=ce($d);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd={name:"git-fork",size:24,node:[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]};Wd.node;const Qh=ce(Wd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]};qd.node;const Yh=ce(qd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};Ud.node;const Jh=ce(Ud);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};Vd.node;const pi=ce(Vd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd={name:"lightbulb",size:24,node:[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]};Gd.node;const ia=ce(Gd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};Qd.node;const Xh=ce(Qd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};Yd.node;const Kh=ce(Yd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};Jd.node;const hi=ce(Jd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};Xd.node;const Vt=ce(Xd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd={name:"receipt",size:24,node:[["path",{d:"M12 17V7",key:"pyj7ub"}],["path",{d:"M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8",key:"1elt7d"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",key:"ycz6yz"}]]};Kd.node;const Zh=ce(Kd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd={name:"rocket",size:24,node:[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]]};Zd.node;const pd=ce(Zd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};eu.node;const Dt=ce(eu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};tu.node;const nu=ce(tu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};ru.node;const mi=ce(ru);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};su.node;const ht=ce(su);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au={name:"swords",size:24,node:[["path",{d:"m13 19 6-6",key:"gj6q8g"}],["path",{d:"M14.5 17.5 3.586 6.586A2 2 0 013 5.172V3h2.172a2 2 0 011.414.586L17.5 14.5",key:"uwfxh8"}],["path",{d:"m14.828 6.172 2.586-2.586A2 2 0 0118.828 3H21v2.172a2 2 0 01-.586 1.414l-2.586 2.586",key:"1f17hx"}],["path",{d:"m16 16 4 4",key:"up5ibb"}],["path",{d:"m19 21 2-2",key:"1phfkn"}],["path",{d:"m5 14 4 4",key:"1gk0qx"}],["path",{d:"m5 21-2-2",key:"1kw20b"}],["path",{d:"M7.5 16.5 4 20",key:"14nozp"}]]};au.node;const em=ce(au);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou={name:"table",size:24,node:[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]};ou.node;const tm=ce(ou);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};iu.node;const sr=ce(iu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu={name:"timer",size:24,node:[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]};lu.node;const nm=ce(lu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu={name:"trophy",size:24,node:[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]]};cu.node;const fi=ce(cu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};du.node;const gi=ce(du);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu={name:"utensils",size:24,node:[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],aliases:["fork-knife"]};uu.node;const rm=ce(uu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};pu.node;const hu=ce(pu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};mu.node;const fu=ce(mu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu={name:"wand-sparkles",size:24,node:[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],aliases:["wand-2"]};gu.node;const sm=ce(gu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};yu.node;const oa=ce(yu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};xu.node;const hd=ce(xu),am=()=>{const{mode:w,setMode:x,xp:u,playerLevel:M,currentLevelProgress:j,rankTitle:V,streak:g,soundMuted:k,toggleSound:P,setIsAchievementsOpen:W,resetProgress:L}=mt(),O=[{id:"arcade",label:"Arcade",fullLabel:"Arcade Games",icon:Bd,color:"text-cyan-400"},{id:"academy",label:"Academy",fullLabel:"Study Academy",icon:ui,color:"text-teal-400"},{id:"coop",label:"Co-Op",fullLabel:"Play Together",icon:gi,color:"text-pink-400"},{id:"playground",label:"Sandbox",fullLabel:"Code Sandbox",icon:sr,color:"text-amber-400"}];return s.jsxs(s.Fragment,{children:[s.jsx("header",{className:"sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-[#0a0d14]/95 backdrop-blur-md",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4",children:[s.jsx(xd,{size:"md",onClick:()=>x("arcade")}),s.jsx("nav",{className:"hidden md:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 shadow-inner",children:O.map(_=>{const X=_.icon,q=w===_.id;return s.jsxs("button",{onClick:()=>x(_.id),className:`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 ${q?"bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.25)]":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,children:[s.jsx(X,{size:16,className:q?_.color:"text-slate-400"}),s.jsx("span",{children:_.fullLabel})]},_.id)})}),s.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-3",children:[s.jsxs("div",{className:"flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-r from-rose-500/10 to-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-bold shadow-sm",children:[s.jsx(Hd,{size:15,className:"text-orange-500 animate-bounce"}),s.jsxs("span",{children:[g,"d"]})]}),s.jsxs("div",{className:"flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl",children:[s.jsxs("div",{className:"flex flex-col text-right",children:[s.jsxs("div",{className:"flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-cyan-400",children:[s.jsx(ht,{size:11,className:"hidden sm:inline"}),s.jsxs("span",{children:["Lvl ",M]}),s.jsxs("span",{className:"hidden lg:inline text-slate-400",children:["• ",V]})]}),s.jsx("div",{className:"w-16 sm:w-24 bg-slate-800 h-1.5 rounded-full overflow-hidden mt-0.5",children:s.jsx("div",{className:"bg-gradient-to-r from-cyan-400 to-purple-500 h-full rounded-full transition-all duration-500",style:{width:`${j}%`}})})]}),s.jsxs("span",{className:"font-mono text-[11px] sm:text-xs font-bold text-slate-300",children:[u," ",s.jsx("span",{className:"hidden sm:inline",children:"XP"})]})]}),s.jsxs("button",{onClick:()=>W(!0),className:"p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 transition-colors shadow-sm relative active:scale-95",title:"View Achievements & Badges","aria-label":"Achievements",children:[s.jsx(fi,{size:17}),s.jsx("span",{className:"absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"}),s.jsx("span",{className:"absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"})]}),s.jsx("button",{onClick:P,className:`p-2 rounded-xl border transition-colors active:scale-95 ${k?"bg-slate-900 border-slate-800 text-slate-500":"bg-cyan-500/10 border-cyan-500/40 text-cyan-400"}`,title:k?"Unmute Sound":"Mute Sound","aria-label":"Toggle Sound",children:k?s.jsx(fu,{size:17}):s.jsx(hu,{size:17})}),s.jsx("button",{onClick:L,className:"hidden lg:flex p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-500 hover:text-rose-400 hover:border-rose-500/40 transition-colors active:scale-95",title:"Reset Game Data",children:s.jsx(Dt,{size:16})})]})]})}),s.jsx("div",{className:"md:hidden fixed bottom-3 left-3 right-3 z-50 rounded-2xl glass-panel bg-slate-950/95 border border-slate-800/90 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl px-2 py-1.5 flex items-center justify-around",children:O.map(_=>{const X=_.icon,q=w===_.id;return s.jsxs("button",{onClick:()=>x(_.id),className:`flex flex-col items-center justify-center flex-1 py-1.5 px-1 rounded-xl transition-all active:scale-95 ${q?"text-cyan-400 bg-cyan-500/15 font-bold shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[s.jsx(X,{size:18,className:q?_.color:"text-slate-400"}),s.jsx("span",{className:"text-[10px] mt-0.5 tracking-tight",children:_.label})]},_.id)})})]})},bu=[{id:"html",name:"HTML5",category:"Frontend",icon:"Code2",color:"#f97316",accentColor:"from-orange-500 to-amber-500",borderColor:"border-orange-500/30",tagline:"The Skeleton of the Web",description:"Learn structure, tags, forms, media, and semantic web layouts by building interactive web towers.",gameTitle:"Tower Builder & Tag Rescue",badge:"HTML Architect",levelsCount:4,levelNames:["Tag Matcher","Structure Builder","Form Architect","Bug Smasher (Missing Tags)"]},{id:"css",name:"CSS3",category:"Frontend",icon:"Palette",color:"#06b6d4",accentColor:"from-cyan-500 to-blue-500",borderColor:"border-cyan-500/30",tagline:"The Art of Style & Motion",description:"Master Flexbox, Grid, colors, spacing, and animations by styling characters and live viewports.",gameTitle:"Flexbox & Grid Arena",badge:"Style Wizard",levelsCount:4,levelNames:["Flex Alignment","Justify Journey","Grid Dimension","Neo Glow Styling"]},{id:"js",name:"JavaScript",category:"Frontend & Logic",icon:"Terminal",color:"#eab308",accentColor:"from-yellow-400 to-amber-500",borderColor:"border-yellow-500/30",tagline:"The Brain of Web Apps",description:"Master variables, arrow functions, DOM events, array methods, and async logic with live test runners.",gameTitle:"Bug Smasher & Logic Lab",badge:"JS Exterminator",levelsCount:4,levelNames:["Variable Fixer","Array Power","Conditionals Gate","DOM Spark Event"]},{id:"python",name:"Python",category:"Backend & Data",icon:"Sparkles",color:"#3b82f6",accentColor:"from-blue-500 to-indigo-600",borderColor:"border-blue-500/30",tagline:"Elegant, Readable & Powerful",description:"Learn Python syntax, loops, lists, and functions to navigate our maze crawler and collect data gems.",gameTitle:"Snake Coder & Algorithm Maze",badge:"Python Charmer",levelsCount:4,levelNames:["Print & Variables","Loop Navigator","List Slicer","Function Foundry"]},{id:"mysql",name:"MySQL",category:"Database",icon:"Database",color:"#10b981",accentColor:"from-emerald-400 to-teal-600",borderColor:"border-emerald-500/30",tagline:"Master Relational Data",description:"Query database tables, filter crime scene clues, join tables, and crack the mystery heist case.",gameTitle:"SQL Crime Mystery Detective",badge:"SQL Sleuth",levelsCount:4,levelNames:["Suspect Filter","Order of Evidence","JOIN the Crime Scene","Aggregate Heist Total"]},{id:"php",name:"PHP",category:"Backend",icon:"Server",color:"#a855f7",accentColor:"from-purple-500 to-indigo-500",borderColor:"border-purple-500/30",tagline:"Powering 70%+ of the Web",description:"Understand server-side scripting, $_GET, $_POST, sessions, and dynamic templating in the Web Kitchen.",gameTitle:"Server Kitchen & Form Master",badge:"Server Chef",levelsCount:4,levelNames:["Order Dispatcher","POST Inspector","Session Tracker","Template Fusion"]},{id:"django",name:"Django",category:"Full-Stack Framework",icon:"Layers",color:"#059669",accentColor:"from-emerald-600 to-green-700",borderColor:"border-emerald-600/30",tagline:"The Web Framework for Perfectionists",description:"Learn MTV (Models, Templates, Views), URL routing, and ORM queries by directing web traffic.",gameTitle:"MTV Route Dispatcher",badge:"Django Architect",levelsCount:4,levelNames:["URL Dispatcher","View Controller","ORM Query Master","Template Context"]}],Ln={html:[{id:1,title:"Level 1: Tag Matcher",prompt:"Assemble a hero header by picking the correct HTML tags in order!",targetResult:`<h1>Welcome to ByteVerse</h1>
<p>Learn code through interactive quests.</p>`,starterSnippet:`<h1>Welcome to ByteVerse</h1>
<!-- Add the paragraph tag below -->
`,solutionKeyword:"<p>",hint:"Use <p>your text</p> to define a paragraph.",options:["<p>Learn code through interactive quests.</p>","<span>Learn code through interactive quests.</span>","<bold>Learn code through interactive quests.</bold>","<text>Learn code through interactive quests.</text>"],correctOptionIndex:0,xp:40},{id:2,title:"Level 2: Navigation Links",prompt:"Every website needs hyperlinks! Choose the proper tag to link to our Academy page.",targetResult:`<nav>
  <a href="/academy">Study Academy</a>
</nav>`,starterSnippet:`<nav>
  <!-- Insert hyperlink here -->
</nav>`,solutionKeyword:"<a href=",hint:'The <a> tag creates links with the "href" attribute.',options:['<link url="/academy">Study Academy</link>','<a href="/academy">Study Academy</a>','<nav-item to="/academy">Study Academy</nav-item>','<button link="/academy">Study Academy</button>'],correctOptionIndex:1,xp:50},{id:3,title:"Level 3: Button & Form Action",prompt:"Make an interactive button that submits a form to start the game.",targetResult:'<button type="submit">Start Quest</button>',starterSnippet:"<!-- Choose button element -->",solutionKeyword:"<button",hint:'HTML provides the <button> element with type="submit".',options:['<button type="submit">Start Quest</button>','<input type="button" text="Start Quest" />','<clickable action="submit">Start Quest</clickable>',"<btn>Start Quest</btn>"],correctOptionIndex:0,xp:60},{id:4,title:"Level 4: Missing Tag Smasher",prompt:"Identify the syntax bug in this broken HTML snippet!",brokenCode:`<div class="card">
  <h2>Arcade Tower
  <p>Defeat the bugs!</p>
</div>`,bugDescription:"Which tag was left unclosed?",options:["The <h2> tag is missing its closing </h2>","The <div> tag is missing its closing </div>","The <p> tag is missing quotes","The class attribute needs single quotes"],correctOptionIndex:0,xp:75}],css:[{id:1,title:"Level 1: Center the Spaceship",prompt:"Use Flexbox to center the spaceship horizontally along the main axis.",cssTargetProperty:"justify-content",starterValue:"flex-start",options:["center","flex-end","space-between","space-around"],correctValue:"center",previewType:"spaceship",hint:"justify-content: center aligns flex children right in the horizontal center.",xp:40},{id:2,title:"Level 2: Vertical Alignment",prompt:"Align the spaceship vertically in the middle of the cosmic landing pad.",cssTargetProperty:"align-items",starterValue:"flex-start",options:["center","flex-end","stretch","baseline"],correctValue:"center",previewType:"spaceship",hint:"align-items: center controls alignment on the cross axis (vertical).",xp:50},{id:3,title:"Level 3: Reverse the Squadron",prompt:"Reverse the order of your ships so the flagship takes the lead.",cssTargetProperty:"flex-direction",starterValue:"row",options:["row-reverse","column","column-reverse","row"],correctValue:"row-reverse",previewType:"squadron",hint:"flex-direction: row-reverse swaps the order from right-to-left.",xp:60},{id:4,title:"Level 4: CSS Grid Pillars",prompt:"Split the inventory pad into 3 equal columns using CSS Grid.",cssTargetProperty:"grid-template-columns",starterValue:"1fr",options:["repeat(3, 1fr)","100px","repeat(2, 1fr)","auto auto"],correctValue:"repeat(3, 1fr)",previewType:"grid",hint:"repeat(3, 1fr) creates three equal columns that flex to fill the space.",xp:75}],js:[{id:1,title:"Level 1: The Const Bug",prompt:"Fix the runtime TypeError! Someone used const for a score that needs to increase.",brokenSnippet:`const score = 10;
score = score + 5;
console.log(score);`,options:["Change `const score = 10;` to `let score = 10;`","Change `score = score + 5` to `score == score + 5`","Use `const score += 5;`","Remove the console.log line"],correctOptionIndex:0,explanation:'Variables declared with "const" cannot be reassigned. Use "let" for variables that change.',xp:40},{id:2,title:"Level 2: Filter Power Items",prompt:"Which JavaScript array method filters out all items below power level 50?",snippet:`const items = [{power: 30}, {power: 80}, {power: 95}];
const strongItems = items.____(item => item.power >= 50);`,options:["filter","map","forEach","reduce"],correctOptionIndex:0,explanation:"Array.prototype.filter() returns a new array with all elements that pass the test.",xp:50},{id:3,title:"Level 3: Template Literal Fix",prompt:"Which syntax correctly interpolates the player's name in modern JavaScript?",options:["`Hello, ${playerName}!`",'"Hello, ${playerName}!"',"'Hello, $(playerName)'","`Hello, #playerName#`"],correctOptionIndex:0,explanation:"Template literals use backticks (``) and ${expression} for clean string interpolation.",xp:60},{id:4,title:"Level 4: DOM Event Listener",prompt:"Which line of code correctly registers a click handler on a button?",options:['btn.addEventListener("click", () => playSound());','btn.onClick("click", playSound);','btn.listen("mouse-down", playSound);','btn.attachEvent("press", playSound);'],correctOptionIndex:0,explanation:'The standard W3C method is target.addEventListener("event", handlerFunction).',xp:75}],mysql:[{id:1,title:"Case 1: The Midnight Alibi",scenario:"A rare cyber-gem was stolen at 22:00. Find suspects who were seen near the Vault.",tablePreview:"Table: suspects (id, name, location, alibi_time)",options:["SELECT name FROM suspects WHERE location = 'Vault';","FIND name IN suspects WHERE location == 'Vault';","FILTER suspects BY location = 'Vault';","SELECT * WHERE location = 'Vault' FROM suspects;"],correctOptionIndex:0,queryOutput:[{id:3,name:"Viper Vance",location:"Vault",alibi_time:"22:05"},{id:7,name:"Hex Miller",location:"Vault",alibi_time:"21:58"}],hint:"SQL uses: SELECT column FROM table WHERE condition;",xp:40},{id:2,title:"Case 2: Order of Suspicion",scenario:"Order the evidence records by confidence score from highest to lowest.",tablePreview:"Table: evidence (item, suspect_id, confidence)",options:["SELECT item, confidence FROM evidence ORDER BY confidence DESC;","SELECT item, confidence FROM evidence SORT BY confidence DOWN;","ORDER evidence BY confidence HIGHEST;","SELECT item, confidence FROM evidence ORDER ASC confidence;"],correctOptionIndex:0,queryOutput:[{item:"Laser Cutter Fingerprint",suspect_id:3,confidence:98},{item:"Encrypted USB Key",suspect_id:7,confidence:75},{item:"Dropped Keycard",suspect_id:2,confidence:42}],hint:"Use ORDER BY column DESC to sort in descending order.",xp:50},{id:3,title:"Case 3: Linking the Weapon (JOIN)",scenario:"Join suspects and evidence on suspect_id to reveal the culprit holding the Laser Cutter!",tablePreview:"suspects.id = evidence.suspect_id",options:["SELECT suspects.name, evidence.item FROM suspects JOIN evidence ON suspects.id = evidence.suspect_id WHERE evidence.item = 'Laser Cutter Fingerprint';","SELECT suspects.name COMBINE evidence WHERE id = suspect_id;","MERGE suspects WITH evidence MATCHING id;","SELECT * FROM suspects, evidence WITHOUT JOIN;"],correctOptionIndex:0,queryOutput:[{name:"Viper Vance",item:"Laser Cutter Fingerprint"}],hint:"Use JOIN ... ON ... to combine records from related tables.",xp:60},{id:4,title:"Case 4: Calculate Total Stolen Loot",scenario:"Calculate the total stolen value from all heist events.",tablePreview:"Table: heists (id, loot_value)",options:["SELECT SUM(loot_value) AS total_stolen FROM heists;","SELECT COUNT(loot_value) AS total_stolen FROM heists;","SELECT TOTAL(loot_value) FROM heists;","SELECT ALL loot_value + loot_value FROM heists;"],correctOptionIndex:0,queryOutput:[{total_stolen:"$1,250,000"}],hint:"SUM() adds up all numeric values in a column.",xp:75}],python:[{id:1,title:"Maze 1: Initialize the Hero",prompt:"Store the hero's name and power in Python variables and print a greeting.",targetCode:`hero = "ByteKnight"
power = 9000
print(f"{hero} power is {power}!")`,options:[`hero = "ByteKnight"
power = 9000
print(f"{hero} power is {power}!")`,`var hero = "ByteKnight";
let power = 9000;
print(hero);`,`string hero = "ByteKnight";
int power = 9000;`,`$hero = "ByteKnight";
echo $hero;`],correctOptionIndex:0,explanation:"Python variables are declared without keywords (no let, const, or var). Use f-strings for formatting.",xp:40},{id:2,title:"Maze 2: The Range Loop",prompt:"Make the hero take 4 steps forward through the maze using a for loop.",targetCode:`for step in range(4):
    move_forward()`,options:[`for step in range(4):
    move_forward()`,"for (int i=0; i<4; i++) { move_forward(); }",`loop 4 times:
    move_forward()`,"foreach step in 4: move_forward()"],correctOptionIndex:0,explanation:"range(4) produces numbers 0, 1, 2, 3 cleanly iterating 4 times.",xp:50},{id:3,title:"Maze 3: List Slicing & Gems",prompt:'Given `gems = ["Ruby", "Sapphire", "Emerald", "Diamond"]`, get the first two gems.',options:["gems[0:2]","gems[1:2]","gems.slice(0, 2)","gems[0, 1]"],correctOptionIndex:0,explanation:"Python slice syntax list[start:end] includes start index and stops before end index.",xp:60},{id:4,title:"Maze 4: Function Foundry",prompt:"Define a function in Python that returns the damage multiplied by critical strike.",options:[`def calc_damage(dmg, crit=1.5):
    return dmg * crit`,"function calc_damage(dmg, crit) { return dmg * crit; }","def calc_damage(dmg, crit): print(dmg * crit)","create func calc_damage(dmg, crit) -> dmg * crit"],correctOptionIndex:0,explanation:"Python functions start with `def name(args):` and use `return` to output results.",xp:75}],php:[{id:1,title:"Chef 1: The Echo Order",prompt:"Print the customer's greeting using correct PHP syntax.",options:['<?php echo "Welcome to Server Bistro!"; ?>','<?php print_screen("Welcome to Server Bistro!"); ?>','<% echo "Welcome to Server Bistro!"; %>','<?php console.log("Welcome to Server Bistro!"); ?>'],correctOptionIndex:0,explanation:"PHP code starts with <?php and uses the `echo` construct to output text.",xp:40},{id:2,title:"Chef 2: Reading the $_POST Form",prompt:'A customer ordered a "Cyber Burger" via POST. How do you safely read their input?',options:["$order = htmlspecialchars($_POST['item']);","$order = $_GET['item'];","$order = request.POST.get('item');","$order = $_FORM['item'];"],correctOptionIndex:0,explanation:"$_POST['key'] reads form data, and htmlspecialchars() protects against XSS attacks.",xp:50},{id:3,title:"Chef 3: The Cart Session",prompt:"How do you initialize user session tracking in PHP before accessing $_SESSION?",options:["session_start();","init_session();","start_session();","$_SESSION->open();"],correctOptionIndex:0,explanation:"session_start() must be called at the very top of your script to initialize session data.",xp:60},{id:4,title:"Chef 4: Dynamic Template Loop",prompt:"Loop over a menu array and echo each dish inside an <li> tag.",options:[`<?php foreach ($menu as $dish): ?>
  <li><?= $dish ?></li>
<?php endforeach; ?>`,`<?php for $dish in $menu: ?>
  <li><?= $dish ?></li>
<?php endfor; ?>`,`<?php while ($menu): ?>
  <li>$dish</li>
<?php endwhile; ?>`,"<?= $menu.map(dish => <li>dish</li>) ?>"],correctOptionIndex:0,explanation:"The alternative foreach syntax (foreach ... endforeach) is best practice for clean PHP templates.",xp:75}],django:[{id:1,title:"Dispatcher 1: The URL Router",prompt:"Route the URL `quest/<int:pk>/` to the `quest_detail` view in urls.py.",options:["path('quest/<int:pk>/', views.quest_detail, name='quest_detail')","route('quest/:pk', views.quest_detail)","get('quest/<pk>/', views.quest_detail)","url_match('quest/<int:pk>/', views.quest_detail)"],correctOptionIndex:0,explanation:"Django 2.0+ uses path() with typed path converters like <int:pk>.",xp:40},{id:2,title:"Dispatcher 2: The View Controller",prompt:"Write the view function to retrieve the quest by primary key and render the template.",options:[`def quest_detail(request, pk):
    quest = get_object_or_404(Quest, pk=pk)
    return render(request, 'quest_detail.html', {'quest': quest})`,`def quest_detail(request, pk):
    return 'quest_detail.html'`,`def quest_detail(pk):
    return Quest.objects.all()`,`def quest_detail(request):
    send_response('quest_detail.html')`],correctOptionIndex:0,explanation:"Django views accept request as first parameter and return an HttpResponse (commonly via render()).",xp:50},{id:3,title:"Dispatcher 3: ORM Filter Query",prompt:'Fetch all quests with difficulty="legendary" ordered by highest xp reward.',options:["Quest.objects.filter(difficulty='legendary').order_by('-xp_reward')","SELECT * FROM quest WHERE difficulty = 'legendary'","Quest.find({ difficulty: 'legendary' }).sort('xp_reward')","Quest.all().where(difficulty='legendary').desc('xp_reward')"],correctOptionIndex:0,explanation:'Django ORM uses .filter() and .order_by("-field") for descending order.',xp:60},{id:4,title:"Dispatcher 4: Template Context Binding",prompt:"In Django HTML templates, which tag safely loops through a list of rewards?",options:[`{% for reward in quest.rewards.all %}
  <span>{{ reward.title }}</span>
{% endfor %}`,`{{ for reward in quest.rewards }}
  <span>{reward.title}</span>
{{ endfor }}`,`<for reward in quest.rewards>
  <span>{{ reward.title }}</span>
</for>`,"<?php foreach ($rewards as $reward) { echo $reward; } ?>"],correctOptionIndex:0,explanation:"Django templates use {% ... %} for control tags (like for, if) and {{ ... }} for variable outputs.",xp:75}]},md=()=>{const{markLevelComplete:w,completedLevels:x,activeGameLevel:u,setActiveGameLevel:M}=mt(),j=Ln.html,V=Math.min(u-1,j.length-1),g=j[V],[k,P]=U.useState(null),[W,L]=U.useState(null),[O,_]=U.useState(!1);(x.html||[]).includes(g.id);const X=T=>{G.playClick(),P(T),L(null)},q=()=>{k!==null&&(k===g.correctOptionIndex?(L("correct"),w("html",g.id,g.xp)):(G.playError(),L("wrong")))},ee=()=>{G.playClick(),P(null),L(null),_(!1),u<j.length&&M(u+1)},z=()=>{G.playClick(),P(null),L(null),_(!1)},H=()=>g.id===1?`
        <div style="font-family:sans-serif; text-align:center; padding:20px; background:#0f172a; border-radius:8px; border:1px solid #1e293b; color:#fff;">
          <h1 style="color:#f97316; margin:0; font-size:1.5rem;">Welcome to ByteVerse</h1>
          ${k===0?'<p style="color:#00f2fe; margin-top:8px;">Learn code through interactive quests.</p>':'<p style="color:#64748b;">(Awaiting valid paragraph tag...)</p>'}
        </div>
      `:g.id===2?`
        <div style="font-family:sans-serif; padding:20px; background:#0f172a; border-radius:8px; border:1px solid #1e293b; color:#fff;">
          <nav style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #334155; padding-bottom:10px;">
            <span style="font-weight:bold; color:#f97316;">ByteNav</span>
            ${k===1?'<a href="#" style="color:#00f2fe; text-decoration:underline; font-weight:bold;">Study Academy &rarr;</a>':'<span style="color:#64748b;">(Choose link tag)</span>'}
          </nav>
        </div>
      `:g.id===3?`
        <div style="font-family:sans-serif; text-align:center; padding:25px; background:#0f172a; border-radius:8px; border:1px solid #1e293b;">
          ${k===0?'<button style="background:#f97316; color:#fff; border:none; padding:10px 20px; border-radius:6px; font-weight:bold; cursor:pointer;">Start Quest</button>':'<div style="color:#64748b;">(Select button element)</div>'}
        </div>
      `:`
      <div style="font-family:sans-serif; padding:20px; background:#0f172a; border-radius:8px; border:1px solid #1e293b; color:#fff;">
        <h2 style="color:#f97316; margin:0;">Arcade Tower</h2>
        <p style="color:#94a3b8; margin-top:8px;">Defeat the bugs!</p>
      </div>
    `;return s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/30",children:s.jsx(ar,{size:22})}),s.jsxs("div",{children:[s.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:["HTML Tower Builder",s.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 font-mono",children:[g.xp," XP"]})]}),s.jsx("p",{className:"text-xs text-slate-400",children:"Assemble structures, nest tags, and fix broken syntax."})]})]}),s.jsx("div",{className:"flex items-center gap-1.5",children:j.map(T=>{const I=(x.html||[]).includes(T.id),D=u===T.id;return s.jsx("button",{onClick:()=>{G.playClick(),M(T.id),P(null),L(null)},className:`w-9 h-9 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${D?"bg-orange-500 text-white shadow-[0_0_12px_rgba(249,115,22,0.5)]":I?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-slate-800 text-slate-400 hover:bg-slate-700"}`,children:I?"✓":T.id},T.id)})})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 space-y-5",children:[s.jsxs("div",{children:[s.jsx("span",{className:"text-xs font-mono text-orange-400 uppercase tracking-wider font-semibold",children:"Mission Objective"}),s.jsx("h3",{className:"text-lg font-bold text-white mt-1",children:g.title}),s.jsx("p",{className:"text-sm text-slate-300 mt-1.5 leading-relaxed",children:g.prompt})]}),g.brokenCode&&s.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto",children:[s.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-widest mb-1.5 font-bold",children:"Broken Code Inspect:"}),s.jsx("pre",{className:"text-rose-400",children:g.brokenCode})]}),s.jsxs("div",{className:"space-y-2.5",children:[s.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"Choose the correct tag snippet:"}),g.options.map((T,I)=>{const D=k===I;return s.jsxs("button",{onClick:()=>X(I),className:`w-full text-left p-3.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-between ${D?"bg-orange-500/20 border-orange-500 text-orange-200 shadow-[0_0_15px_rgba(249,115,22,0.2)]":"bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/60"}`,children:[s.jsx("span",{className:"break-all",children:T}),s.jsx("span",{className:`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ml-2 shrink-0 ${D?"border-orange-400 bg-orange-500 text-white":"border-slate-700 text-slate-500"}`,children:String.fromCharCode(65+I)})]},I)})]}),W==="correct"&&s.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-bounce",children:[s.jsx(_t,{size:22,className:"shrink-0 text-emerald-400"}),s.jsxs("div",{className:"text-sm font-semibold",children:["Superb! Correct tags assembled! +",g.xp," XP awarded."]})]}),W==="wrong"&&s.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3",children:[s.jsx(_n,{size:22,className:"shrink-0 text-rose-400"}),s.jsx("div",{className:"text-sm font-semibold",children:"Not quite! Check the tag syntax or try clicking the Hint button."})]}),s.jsxs("div",{className:"flex items-center justify-between gap-3 pt-2",children:[s.jsxs("button",{onClick:()=>_(!O),className:"px-3 py-2 rounded-xl text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 flex items-center gap-1.5 transition-colors",children:[s.jsx(ia,{size:14}),s.jsx("span",{children:O?"Hide Hint":"Need Hint?"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:z,className:"p-2 rounded-xl text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 transition-colors",title:"Reset Selection",children:s.jsx(Dt,{size:16})}),W==="correct"&&u<j.length?s.jsxs("button",{onClick:ee,className:"px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform",children:[s.jsx("span",{children:"Next Level"}),s.jsx(Pn,{size:16})]}):s.jsxs("button",{onClick:q,disabled:k===null,className:`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${k!==null?"bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:scale-[1.02]":"bg-slate-800 text-slate-500 cursor-not-allowed"}`,children:[s.jsx(ht,{size:16}),s.jsx("span",{children:"Verify Tags"})]})]})]}),O&&s.jsxs("div",{className:"p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed animate-fadeIn",children:["💡 ",s.jsx("strong",{children:"Hint:"})," ",g.hint]})]}),s.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsxs("span",{className:"text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5",children:[s.jsx(Rd,{size:14}),"Live DOM Preview"]}),s.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"Real-time Browser Render"})]}),s.jsxs("div",{className:"rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl",children:[s.jsxs("div",{className:"bg-slate-900 px-3 py-2 border-b border-slate-800 flex items-center gap-2",children:[s.jsxs("div",{className:"flex gap-1.5",children:[s.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-rose-500/80"}),s.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-amber-500/80"}),s.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500/80"})]}),s.jsx("div",{className:"w-full max-w-[200px] mx-auto bg-slate-950/80 rounded text-[10px] text-slate-400 font-mono text-center py-0.5 border border-slate-800",children:"byteverse://tower-preview"})]}),s.jsx("div",{className:"p-6 min-h-[220px] flex items-center justify-center",dangerouslySetInnerHTML:{__html:H()}})]})]}),s.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 rounded-full bg-orange-400 shrink-0"}),s.jsx("span",{children:"HTML elements construct the DOM nodes displayed inside the browser window."})]})]})]})]})},om=()=>{const{markLevelComplete:w,completedLevels:x,activeGameLevel:u,setActiveGameLevel:M}=mt(),j=Ln.css,V=Math.min(u-1,j.length-1),g=j[V],[k,P]=U.useState(g.starterValue),[W,L]=U.useState(null),[O,_]=U.useState(!1),X=T=>{G.playClick(),P(T),L(null)},q=()=>{k===g.correctValue?(L("correct"),w("css",g.id,g.xp)):(G.playError(),L("wrong"))},ee=()=>{if(G.playClick(),L(null),_(!1),u<j.length){const T=j[u];M(u+1),P(T.starterValue)}},z=()=>{G.playClick(),P(g.starterValue),L(null),_(!1)},H=()=>{const T={display:g.previewType==="grid"?"grid":"flex",minHeight:"220px",transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"};return g.cssTargetProperty==="justify-content"?(T.justifyContent=k,T.alignItems="center"):g.cssTargetProperty==="align-items"?(T.justifyContent="center",T.alignItems=k):g.cssTargetProperty==="flex-direction"?(T.flexDirection=k,T.justifyContent="center",T.alignItems="center",T.gap="16px"):g.cssTargetProperty==="grid-template-columns"&&(T.gridTemplateColumns=k,T.gap="12px",T.alignItems="center"),T};return s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30",children:s.jsx(hi,{size:22})}),s.jsxs("div",{children:[s.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:["CSS Flexbox & Grid Arena",s.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-mono",children:[g.xp," XP"]})]}),s.jsx("p",{className:"text-xs text-slate-400",children:"Position spaceships and design layouts using real CSS properties."})]})]}),s.jsx("div",{className:"flex items-center gap-1.5",children:j.map(T=>{const I=(x.css||[]).includes(T.id),D=u===T.id;return s.jsx("button",{onClick:()=>{G.playClick(),M(T.id),P(T.starterValue),L(null)},className:`w-9 h-9 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${D?"bg-cyan-500 text-slate-950 font-black shadow-[0_0_12px_rgba(6,182,212,0.6)]":I?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-slate-800 text-slate-400 hover:bg-slate-700"}`,children:I?"✓":T.id},T.id)})})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 space-y-5",children:[s.jsxs("div",{children:[s.jsx("span",{className:"text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold",children:"CSS Flight Control"}),s.jsx("h3",{className:"text-lg font-bold text-white mt-1",children:g.title}),s.jsx("p",{className:"text-sm text-slate-300 mt-1 leading-relaxed",children:g.prompt})]}),s.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs",children:[s.jsx("div",{className:"text-slate-500 mb-1",children:"// SpaceHangar.css"}),s.jsx("div",{className:"text-purple-400",children:".hangar-bay {"}),s.jsxs("div",{className:"pl-4 text-slate-300",children:[s.jsx("span",{className:"text-cyan-400",children:"display"}),": ",g.previewType==="grid"?"grid":"flex",";"]}),s.jsxs("div",{className:"pl-4 py-1.5 flex items-center gap-2 flex-wrap",children:[s.jsx("span",{className:"text-cyan-400 font-bold",children:g.cssTargetProperty}),":",s.jsx("span",{className:"text-amber-300 font-bold bg-slate-900 px-2 py-0.5 rounded border border-amber-500/40",children:k}),";"]}),s.jsx("div",{className:"text-purple-400",children:"}"})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"Select property value:"}),s.jsx("div",{className:"grid grid-cols-2 gap-2",children:g.options.map((T,I)=>{const D=k===T;return s.jsx("button",{onClick:()=>X(T),className:`p-3 rounded-xl border font-mono text-xs font-bold transition-all text-center ${D?"bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.3)]":"bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"}`,children:T},I)})})]}),W==="correct"&&s.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-bounce",children:[s.jsx(_t,{size:22,className:"shrink-0 text-emerald-400"}),s.jsxs("div",{className:"text-sm font-semibold",children:["Perfect Alignment! Ship docked successfully. +",g.xp," XP"]})]}),W==="wrong"&&s.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3",children:[s.jsx(_n,{size:22,className:"shrink-0 text-rose-400"}),s.jsx("div",{className:"text-sm font-semibold",children:"Not aligned with the target beacon! Try another CSS value or check the hint."})]}),s.jsxs("div",{className:"flex items-center justify-between gap-3 pt-2",children:[s.jsxs("button",{onClick:()=>_(!O),className:"px-3 py-2 rounded-xl text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 flex items-center gap-1.5 transition-colors",children:[s.jsx(ia,{size:14}),s.jsx("span",{children:O?"Hide Hint":"Need Hint?"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:z,className:"p-2 rounded-xl text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 transition-colors",title:"Reset Value",children:s.jsx(Dt,{size:16})}),W==="correct"&&u<j.length?s.jsxs("button",{onClick:ee,className:"px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform",children:[s.jsx("span",{children:"Next Level"}),s.jsx(Pn,{size:16})]}):s.jsxs("button",{onClick:q,className:"px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-black shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform",children:[s.jsx(ht,{size:16}),s.jsx("span",{children:"Lock Alignment"})]})]})]}),O&&s.jsxs("div",{className:"p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed animate-fadeIn",children:["💡 ",s.jsx("strong",{children:"Hint:"})," ",g.hint]})]}),s.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsxs("span",{className:"text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5",children:[s.jsx(pd,{size:14}),"Live Hangar Bay Viewport"]}),s.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"Dynamic CSS Canvas"})]}),s.jsxs("div",{className:"relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950 p-4 shadow-2xl min-h-[260px] flex flex-col justify-center cyber-grid",children:[s.jsx("div",{className:"absolute inset-0 pointer-events-none flex items-center justify-center opacity-30",children:s.jsx("div",{className:"w-24 h-24 rounded-2xl border-2 border-dashed border-cyan-400 animate-pulse flex items-center justify-center",children:s.jsx("span",{className:"text-[10px] text-cyan-400 font-mono uppercase font-bold",children:"Target Pad"})})}),s.jsxs("div",{style:H(),className:"relative z-10 w-full p-2",children:[g.previewType==="spaceship"&&s.jsxs("div",{className:"p-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.6)] flex items-center gap-2 font-black text-xs transition-transform transform hover:scale-105",children:[s.jsx(pd,{size:20,className:"rotate-45"}),s.jsx("span",{children:"CyberShuttle-01"})]}),g.previewType==="squadron"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"p-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-md",children:"Alpha"}),s.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs shadow-md",children:"Beta"}),s.jsx("div",{className:"p-2.5 rounded-xl bg-pink-500 text-white font-bold text-xs shadow-md",children:"Flagship ★"})]}),g.previewType==="grid"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"p-4 rounded-xl bg-slate-900 border border-cyan-500/40 text-center text-cyan-300 font-bold text-xs",children:"Pillar A"}),s.jsx("div",{className:"p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-center text-purple-300 font-bold text-xs",children:"Pillar B"}),s.jsx("div",{className:"p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-center text-emerald-300 font-bold text-xs",children:"Pillar C"})]})]})]})]}),s.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 shrink-0"}),s.jsx("span",{children:"Flexbox and Grid are modern CSS standards that eliminate the need for float hacks or table layouts."})]})]})]})]})},im=()=>{const{markLevelComplete:w,completedLevels:x,activeGameLevel:u,setActiveGameLevel:M}=mt(),j=Ln.js,V=Math.min(u-1,j.length-1),g=j[V],[k,P]=U.useState(null),[W,L]=U.useState(null),[O,_]=U.useState(["// JavaScript Virtual Terminal initialized.","// Select the fix to run in the sandbox."]),X=H=>{G.playClick(),P(H),L(null)},q=()=>{k!==null&&(k===g.correctOptionIndex?(L("correct"),w("js",g.id,g.xp),_(["// Executing script...","> Syntax validation: PASS","> Unit Test 1: PASS",`> Output: [SUCCESS] Bug smashed! +${g.xp} XP`])):(G.playError(),L("wrong"),_(["// Executing script...","> Uncaught TypeError / SyntaxError in evaluation","> Test Result: FAIL. Expected proper modern JS convention."])))},ee=()=>{G.playClick(),P(null),L(null),_(["// Sandbox ready for next test."]),u<j.length&&M(u+1)},z=()=>{G.playClick(),P(null),L(null),_(["// Sandbox reset."])};return s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"p-2 rounded-xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/30",children:s.jsx(sr,{size:22})}),s.jsxs("div",{children:[s.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:["JS Bug Smasher & Logic Lab",s.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 font-mono",children:[g.xp," XP"]})]}),s.jsx("p",{className:"text-xs text-slate-400",children:"Identify runtime bugs, fix variables, and execute live browser tests."})]})]}),s.jsx("div",{className:"flex items-center gap-1.5",children:j.map(H=>{const T=(x.js||[]).includes(H.id),I=u===H.id;return s.jsx("button",{onClick:()=>{G.playClick(),M(H.id),P(null),L(null)},className:`w-9 h-9 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${I?"bg-yellow-400 text-slate-950 font-black shadow-[0_0_12px_rgba(234,179,8,0.6)]":T?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-slate-800 text-slate-400 hover:bg-slate-700"}`,children:T?"✓":H.id},H.id)})})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 space-y-5",children:[s.jsxs("div",{children:[s.jsxs("span",{className:"text-xs font-mono text-yellow-400 uppercase tracking-wider font-semibold flex items-center gap-1",children:[s.jsx(Bh,{size:14}),"Bug Bounty Challenge"]}),s.jsx("h3",{className:"text-lg font-bold text-white mt-1",children:g.title}),s.jsx("p",{className:"text-sm text-slate-300 mt-1 leading-relaxed",children:g.prompt})]}),(g.brokenSnippet||g.snippet)&&s.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300",children:[s.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-widest mb-1.5 font-bold",children:"Source Snippet:"}),s.jsx("pre",{className:"text-yellow-300/90 whitespace-pre-wrap",children:g.brokenSnippet||g.snippet})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"Select the correct solution:"}),g.options.map((H,T)=>{const I=k===T;return s.jsxs("button",{onClick:()=>X(T),className:`w-full text-left p-3.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-between ${I?"bg-yellow-500/20 border-yellow-400 text-yellow-100 shadow-[0_0_12px_rgba(234,179,8,0.25)]":"bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"}`,children:[s.jsx("span",{className:"break-all",children:H}),s.jsx("span",{className:`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ml-2 shrink-0 ${I?"border-yellow-400 bg-yellow-400 text-slate-950 font-bold":"border-slate-700 text-slate-500"}`,children:String.fromCharCode(65+T)})]},T)})]}),W==="correct"&&s.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-bounce",children:[s.jsx(_t,{size:22,className:"shrink-0 text-emerald-400"}),s.jsxs("div",{className:"text-sm font-semibold",children:["Bug Eliminated! ",g.explanation]})]}),W==="wrong"&&s.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3",children:[s.jsx(_n,{size:22,className:"shrink-0 text-rose-400"}),s.jsx("div",{className:"text-sm font-semibold",children:"Test Failed! Inspect the console on the right for error details."})]}),s.jsxs("div",{className:"flex items-center justify-between gap-3 pt-2",children:[s.jsx("button",{onClick:z,className:"p-2.5 rounded-xl text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 transition-colors",title:"Reset Lab",children:s.jsx(Dt,{size:16})}),W==="correct"&&u<j.length?s.jsxs("button",{onClick:ee,className:"px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform",children:[s.jsx("span",{children:"Next Bug"}),s.jsx(Pn,{size:16})]}):s.jsxs("button",{onClick:q,disabled:k===null,className:`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${k!==null?"bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 font-black shadow-[0_0_15px_rgba(234,179,8,0.4)] hover:scale-[1.02]":"bg-slate-800 text-slate-500 cursor-not-allowed"}`,children:[s.jsx(Vt,{size:16,className:"fill-current"}),s.jsx("span",{children:"Run Sandbox Tests"})]})]})]}),s.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsxs("span",{className:"text-xs font-mono text-yellow-400 uppercase tracking-wider font-semibold flex items-center gap-1.5",children:[s.jsx(sr,{size:14}),"Sandbox Console Output"]}),s.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"v8 In-Memory Runtime"})]}),s.jsxs("div",{className:"rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl font-mono text-xs",children:[s.jsxs("div",{className:"bg-slate-900 px-3 py-2 border-b border-slate-800 flex items-center gap-2",children:[s.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-rose-500"}),s.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-500"}),s.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500"}),s.jsx("span",{className:"text-[10px] text-slate-400 ml-2",children:"js-repl:stdout"})]}),s.jsx("div",{className:"p-4 min-h-[220px] space-y-2 text-slate-300",children:O.map((H,T)=>s.jsx("div",{className:`${H.includes("FAIL")||H.includes("Error")?"text-rose-400":H.includes("PASS")||H.includes("SUCCESS")?"text-emerald-400 font-bold":"text-slate-400"}`,children:H},T))})]})]}),s.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 rounded-full bg-yellow-400 shrink-0"}),s.jsx("span",{children:"Modern JavaScript uses block scoping (let/const) and strict comparison (===) to avoid silent bugs."})]})]})]})]})},lm=()=>{const{markLevelComplete:w,completedLevels:x,activeGameLevel:u,setActiveGameLevel:M}=mt(),j=Ln.mysql,V=Math.min(u-1,j.length-1),g=j[V],[k,P]=U.useState(null),[W,L]=U.useState(null),[O,_]=U.useState(!1),[X,q]=U.useState(null),ee=I=>{G.playClick(),P(I),L(null),q(null)},z=()=>{k!==null&&(k===g.correctOptionIndex?(L("correct"),q(g.queryOutput),w("mysql",g.id,g.xp)):(G.playError(),L("wrong"),q([])))},H=()=>{G.playClick(),P(null),L(null),_(!1),q(null),u<j.length&&M(u+1)},T=()=>{G.playClick(),P(null),L(null),_(!1),q(null)};return s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",children:s.jsx(rr,{size:22})}),s.jsxs("div",{children:[s.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:["SQL Mystery Detective",s.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono",children:[g.xp," XP"]})]}),s.jsx("p",{className:"text-xs text-slate-400",children:"Execute relational queries to uncover suspects and solve cyber-crimes."})]})]}),s.jsx("div",{className:"flex items-center gap-1.5",children:j.map(I=>{const D=(x.mysql||[]).includes(I.id),le=u===I.id;return s.jsx("button",{onClick:()=>{G.playClick(),M(I.id),P(null),L(null),q(null)},className:`w-9 h-9 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${le?"bg-emerald-500 text-slate-950 font-black shadow-[0_0_12px_rgba(16,185,129,0.6)]":D?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-slate-800 text-slate-400 hover:bg-slate-700"}`,children:D?"✓":I.id},I.id)})})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 space-y-5",children:[s.jsxs("div",{children:[s.jsxs("span",{className:"text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1",children:[s.jsx(nu,{size:14}),"Police Case Dossier"]}),s.jsx("h3",{className:"text-lg font-bold text-white mt-1",children:g.title}),s.jsx("p",{className:"text-sm text-slate-300 mt-1 leading-relaxed",children:g.scenario})]}),s.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400/90 flex items-center gap-2",children:[s.jsx(tm,{size:16,className:"text-emerald-400 shrink-0"}),s.jsx("span",{children:g.tablePreview})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"Choose the query to execute in MySQL:"}),g.options.map((I,D)=>{const le=k===D;return s.jsxs("button",{onClick:()=>ee(D),className:`w-full text-left p-3.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-between ${le?"bg-emerald-500/20 border-emerald-400 text-emerald-200 shadow-[0_0_12px_rgba(16,185,129,0.25)]":"bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"}`,children:[s.jsx("span",{className:"break-all",children:I}),s.jsx("span",{className:`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ml-2 shrink-0 ${le?"border-emerald-400 bg-emerald-400 text-slate-950 font-bold":"border-slate-700 text-slate-500"}`,children:String.fromCharCode(65+D)})]},D)})]}),W==="correct"&&s.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-bounce",children:[s.jsx(_t,{size:22,className:"shrink-0 text-emerald-400"}),s.jsxs("div",{className:"text-sm font-semibold",children:["Case Cracked! Query matched relevant records. +",g.xp," XP"]})]}),W==="wrong"&&s.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3",children:[s.jsx(_n,{size:22,className:"shrink-0 text-rose-400"}),s.jsx("div",{className:"text-sm font-semibold",children:"SQL Execution Error or empty match! Verify syntax and try again."})]}),s.jsxs("div",{className:"flex items-center justify-between gap-3 pt-2",children:[s.jsxs("button",{onClick:()=>_(!O),className:"px-3 py-2 rounded-xl text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 flex items-center gap-1.5 transition-colors",children:[s.jsx(ia,{size:14}),s.jsx("span",{children:O?"Hide Hint":"Need Hint?"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:T,className:"p-2.5 rounded-xl text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 transition-colors",title:"Reset Query",children:s.jsx(Dt,{size:16})}),W==="correct"&&u<j.length?s.jsxs("button",{onClick:H,className:"px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform",children:[s.jsx("span",{children:"Next Case"}),s.jsx(Pn,{size:16})]}):s.jsxs("button",{onClick:z,disabled:k===null,className:`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${k!==null?"bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-black shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:scale-[1.02]":"bg-slate-800 text-slate-500 cursor-not-allowed"}`,children:[s.jsx(ht,{size:16}),s.jsx("span",{children:"Execute Query"})]})]})]}),O&&s.jsxs("div",{className:"p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed animate-fadeIn",children:["💡 ",s.jsx("strong",{children:"Hint:"})," ",g.hint]})]}),s.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsxs("span",{className:"text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1.5",children:[s.jsx(rr,{size:14}),"Database Query Results"]}),s.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"In-Memory MySQL Engine"})]}),s.jsxs("div",{className:"rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl min-h-[220px] flex flex-col",children:[s.jsxs("div",{className:"bg-slate-900 px-3 py-2 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono",children:[s.jsxs("span",{children:["Status: ",X?"200 OK (Query Executed)":"Idle (Ready)"]}),s.jsxs("span",{children:["Rows: ",X?X.length:0]})]}),X&&X.length>0?s.jsx("div",{className:"overflow-x-auto p-2",children:s.jsxs("table",{className:"w-full text-left font-mono text-xs border-collapse",children:[s.jsx("thead",{children:s.jsx("tr",{className:"border-b border-slate-800 text-emerald-400",children:Object.keys(X[0]).map(I=>s.jsx("th",{className:"p-2.5 font-bold uppercase text-[10px] tracking-wider",children:I},I))})}),s.jsx("tbody",{className:"divide-y divide-slate-800/60",children:X.map((I,D)=>s.jsx("tr",{className:"hover:bg-slate-900/60 transition-colors",children:Object.values(I).map((le,ue)=>s.jsx("td",{className:"p-2.5 text-slate-200",children:String(le)},ue))},D))})]})}):s.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-500 font-mono text-xs",children:[s.jsx(rr,{size:32,className:"mb-2 opacity-30 text-emerald-400"}),s.jsx("span",{children:'Choose a SQL query and click "Execute Query" to inspect records.'})]})]})]}),s.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 shrink-0"}),s.jsx("span",{children:"Relational queries extract, filter, and join related records efficiently across large datasets."})]})]})]})]})},cm=()=>{const{markLevelComplete:w,completedLevels:x,activeGameLevel:u,setActiveGameLevel:M}=mt(),j=Ln.python,V=Math.min(u-1,j.length-1),g=j[V],[k,P]=U.useState(null),[W,L]=U.useState(null),[O,_]=U.useState(0),[X,q]=U.useState(["# Python 3.12 Virtual Interpreter ready.","# Select the Python solution to run."]),ee=I=>{G.playClick(),P(I),L(null),_(0)},z=()=>{k!==null&&(k===g.correctOptionIndex?(L("correct"),w("python",g.id,g.xp),_(4),q([">>> python main.py","ByteKnight power is 9000!","Gems collected: 4/4",`Process finished with exit code 0. +${g.xp} XP`])):(G.playError(),L("wrong"),_(1),q([">>> python main.py","SyntaxError or NameError: unexpected token.","Process failed with exit code 1"])))},H=()=>{G.playClick(),P(null),L(null),_(0),q(["# Python interpreter reset for next challenge."]),u<j.length&&M(u+1)},T=()=>{G.playClick(),P(null),L(null),_(0),q(["# Interpreter cleared."])};return s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/30",children:s.jsx(ht,{size:22})}),s.jsxs("div",{children:[s.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:["Python Algorithm Maze",s.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-mono",children:[g.xp," XP"]})]}),s.jsx("p",{className:"text-xs text-slate-400",children:"Master Python syntax, indentation, loops, and functions."})]})]}),s.jsx("div",{className:"flex items-center gap-1.5",children:j.map(I=>{const D=(x.python||[]).includes(I.id),le=u===I.id;return s.jsx("button",{onClick:()=>{G.playClick(),M(I.id),P(null),L(null),_(0)},className:`w-9 h-9 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${le?"bg-blue-500 text-white font-black shadow-[0_0_12px_rgba(59,130,246,0.6)]":D?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-slate-800 text-slate-400 hover:bg-slate-700"}`,children:D?"✓":I.id},I.id)})})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 space-y-5",children:[s.jsxs("div",{children:[s.jsx("span",{className:"text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold",children:"Python Algorithm Mission"}),s.jsx("h3",{className:"text-lg font-bold text-white mt-1",children:g.title}),s.jsx("p",{className:"text-sm text-slate-300 mt-1 leading-relaxed",children:g.prompt})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"Select the Python code snippet:"}),g.options.map((I,D)=>{const le=k===D;return s.jsxs("button",{onClick:()=>ee(D),className:`w-full text-left p-3.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-between ${le?"bg-blue-500/20 border-blue-400 text-blue-200 shadow-[0_0_12px_rgba(59,130,246,0.25)]":"bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"}`,children:[s.jsx("pre",{className:"break-all whitespace-pre-wrap",children:I}),s.jsx("span",{className:`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ml-2 shrink-0 ${le?"border-blue-400 bg-blue-500 text-white font-bold":"border-slate-700 text-slate-500"}`,children:String.fromCharCode(65+D)})]},D)})]}),W==="correct"&&s.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-bounce",children:[s.jsx(_t,{size:22,className:"shrink-0 text-emerald-400"}),s.jsxs("div",{className:"text-sm font-semibold",children:["Clean Run! ",g.explanation]})]}),W==="wrong"&&s.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3",children:[s.jsx(_n,{size:22,className:"shrink-0 text-rose-400"}),s.jsx("div",{className:"text-sm font-semibold",children:"Indentation or syntax error in Python! Check the terminal below."})]}),s.jsxs("div",{className:"flex items-center justify-between gap-3 pt-2",children:[s.jsx("button",{onClick:T,className:"p-2.5 rounded-xl text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 transition-colors",title:"Reset",children:s.jsx(Dt,{size:16})}),W==="correct"&&u<j.length?s.jsxs("button",{onClick:H,className:"px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform",children:[s.jsx("span",{children:"Next Mission"}),s.jsx(Pn,{size:16})]}):s.jsxs("button",{onClick:z,disabled:k===null,className:`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${k!==null?"bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:scale-[1.02]":"bg-slate-800 text-slate-500 cursor-not-allowed"}`,children:[s.jsx(Vt,{size:16,className:"fill-current"}),s.jsx("span",{children:"Run Python Code"})]})]})]}),s.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsxs("span",{className:"text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold flex items-center gap-1.5",children:[s.jsx(dd,{size:14}),"Algorithm Grid Maze"]}),s.jsxs("span",{className:"text-[10px] text-slate-400 font-mono",children:["Step: ",O,"/4"]})]}),s.jsx("div",{className:"rounded-xl border border-blue-500/30 bg-slate-950 p-4 shadow-2xl flex items-center justify-between gap-3 cyber-grid",children:[0,1,2,3,4].map(I=>{const D=O===I,le=I>0&&O<I;return s.jsxs("div",{className:`flex-1 h-20 rounded-xl border flex flex-col items-center justify-center transition-all duration-500 ${D?"bg-blue-600/30 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.6)] scale-105":"bg-slate-900/60 border-slate-800"}`,children:[D&&s.jsxs("div",{className:"text-blue-400 flex flex-col items-center animate-bounce",children:[s.jsx(dd,{size:28}),s.jsx("span",{className:"text-[9px] font-bold font-mono mt-0.5",children:"Hero"})]}),!D&&le&&s.jsxs("div",{className:"text-emerald-400 opacity-80 flex flex-col items-center",children:[s.jsx(Gh,{size:20}),s.jsx("span",{className:"text-[8px] text-slate-500 font-mono",children:"+10 XP"})]}),!D&&!le&&s.jsx("div",{className:"w-2 h-2 rounded-full bg-slate-700"})]},I)})}),s.jsxs("div",{className:"mt-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-xs",children:[s.jsxs("div",{className:"bg-slate-900 px-3 py-1.5 border-b border-slate-800 text-[10px] text-slate-400 flex items-center justify-between",children:[s.jsx("span",{children:"python3 --terminal"}),s.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-ping"})]}),s.jsx("div",{className:"p-3 text-slate-300 space-y-1 min-h-[90px]",children:X.map((I,D)=>s.jsx("div",{className:I.includes("Error")?"text-rose-400":I.includes("SUCCESS")||I.includes("9000")?"text-emerald-400":"text-slate-400",children:I},D))})]})]}),s.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-400 shrink-0"}),s.jsx("span",{children:"Python relies on indentation to group blocks of code, promoting extreme readability."})]})]})]})]})},dm=()=>{const{markLevelComplete:w,completedLevels:x,activeGameLevel:u,setActiveGameLevel:M}=mt(),j=Ln.php,V=Math.min(u-1,j.length-1),g=j[V],[k,P]=U.useState(null),[W,L]=U.useState(null),[O,_]=U.useState("Listening on Port 8000..."),X=H=>{G.playClick(),P(H),L(null)},q=()=>{k!==null&&(k===g.correctOptionIndex?(L("correct"),w("php",g.id,g.xp),_("HTTP/1.1 200 OK | Response served in 4ms")):(G.playError(),L("wrong"),_("HTTP/1.1 500 Internal Server Error (PHP Parse Error)")))},ee=()=>{G.playClick(),P(null),L(null),_("Listening on Port 8000..."),u<j.length&&M(u+1)},z=()=>{G.playClick(),P(null),L(null),_("Listening on Port 8000...")};return s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30",children:s.jsx(mi,{size:22})}),s.jsxs("div",{children:[s.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:["PHP Server Kitchen & Form Master",s.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 font-mono",children:[g.xp," XP"]})]}),s.jsx("p",{className:"text-xs text-slate-400",children:"Process HTTP orders, $_GET, $_POST, and session cookies on the backend."})]})]}),s.jsx("div",{className:"flex items-center gap-1.5",children:j.map(H=>{const T=(x.php||[]).includes(H.id),I=u===H.id;return s.jsx("button",{onClick:()=>{G.playClick(),M(H.id),P(null),L(null)},className:`w-9 h-9 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${I?"bg-purple-600 text-white font-black shadow-[0_0_12px_rgba(168,85,247,0.6)]":T?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-slate-800 text-slate-400 hover:bg-slate-700"}`,children:T?"✓":H.id},H.id)})})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 space-y-5",children:[s.jsxs("div",{children:[s.jsxs("span",{className:"text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold flex items-center gap-1",children:[s.jsx(rm,{size:14}),"Server Kitchen Ticket #",g.id]}),s.jsx("h3",{className:"text-lg font-bold text-white mt-1",children:g.title}),s.jsx("p",{className:"text-sm text-slate-300 mt-1 leading-relaxed",children:g.prompt})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"Choose the PHP backend snippet:"}),g.options.map((H,T)=>{const I=k===T;return s.jsxs("button",{onClick:()=>X(T),className:`w-full text-left p-3.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-between ${I?"bg-purple-500/20 border-purple-400 text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.25)]":"bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"}`,children:[s.jsx("pre",{className:"break-all whitespace-pre-wrap",children:H}),s.jsx("span",{className:`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ml-2 shrink-0 ${I?"border-purple-400 bg-purple-500 text-white font-bold":"border-slate-700 text-slate-500"}`,children:String.fromCharCode(65+T)})]},T)})]}),W==="correct"&&s.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-bounce",children:[s.jsx(_t,{size:22,className:"shrink-0 text-emerald-400"}),s.jsxs("div",{className:"text-sm font-semibold",children:["Order Cooked & Served! ",g.explanation]})]}),W==="wrong"&&s.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3",children:[s.jsx(_n,{size:22,className:"shrink-0 text-rose-400"}),s.jsx("div",{className:"text-sm font-semibold",children:"Kitchen Recipe Failed! Check PHP syntax, dollar signs, and try again."})]}),s.jsxs("div",{className:"flex items-center justify-between gap-3 pt-2",children:[s.jsx("button",{onClick:z,className:"p-2.5 rounded-xl text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 transition-colors",title:"Reset",children:s.jsx(Dt,{size:16})}),W==="correct"&&u<j.length?s.jsxs("button",{onClick:ee,className:"px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform",children:[s.jsx("span",{children:"Next Ticket"}),s.jsx(Pn,{size:16})]}):s.jsxs("button",{onClick:q,disabled:k===null,className:`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${k!==null?"bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:scale-[1.02]":"bg-slate-800 text-slate-500 cursor-not-allowed"}`,children:[s.jsx(ht,{size:16}),s.jsx("span",{children:"Serve Response"})]})]})]}),s.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsxs("span",{className:"text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold flex items-center gap-1.5",children:[s.jsx(Zh,{size:14}),"HTTP Request / Response Log"]}),s.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"PHP-FPM Worker 1"})]}),s.jsxs("div",{className:"rounded-xl border border-purple-500/30 bg-slate-950 p-4 font-mono text-xs shadow-2xl space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] text-purple-300",children:[s.jsx("span",{children:"POST /checkout.php"}),s.jsx("span",{children:"Content-Type: application/x-www-form-urlencoded"})]}),s.jsxs("div",{className:"text-slate-400 space-y-1",children:[s.jsx("div",{children:"$_SERVER['REQUEST_METHOD'] = 'POST';"}),s.jsx("div",{children:"$_SERVER['HTTP_HOST'] = 'byteverse.dev';"}),s.jsx("div",{children:"$_POST['item'] = 'Cyber Burger #42';"})]}),s.jsxs("div",{className:"border-t border-slate-800 pt-2 flex items-center justify-between text-[11px]",children:[s.jsx("span",{className:"text-slate-400",children:"Daemon Status:"}),s.jsx("span",{className:`font-bold ${O.includes("200")?"text-emerald-400":O.includes("500")?"text-rose-400":"text-amber-400"}`,children:O})]})]})]}),s.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 rounded-full bg-purple-400 shrink-0"}),s.jsx("span",{children:"PHP variables always begin with a $ symbol and execute entirely on the server before HTML is sent."})]})]})]})]})},um=()=>{const{markLevelComplete:w,completedLevels:x,activeGameLevel:u,setActiveGameLevel:M}=mt(),j=Ln.django,V=Math.min(u-1,j.length-1),g=j[V],[k,P]=U.useState(null),[W,L]=U.useState(null),[O,_]=U.useState(1),X=H=>{G.playClick(),P(H),L(null),_(1)},q=()=>{k!==null&&(k===g.correctOptionIndex?(L("correct"),_(4),w("django",g.id,g.xp)):(G.playError(),L("wrong"),_(2)))},ee=()=>{G.playClick(),P(null),L(null),_(1),u<j.length&&M(u+1)},z=()=>{G.playClick(),P(null),L(null),_(1)};return s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"p-2 rounded-xl bg-emerald-600/10 text-emerald-400 border border-emerald-600/30",children:s.jsx(pi,{size:22})}),s.jsxs("div",{children:[s.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:["Django MTV Route Dispatcher",s.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-600/30 font-mono",children:[g.xp," XP"]})]}),s.jsx("p",{className:"text-xs text-slate-400",children:"Direct web traffic through URLs, Views, Models (ORM), and Templates."})]})]}),s.jsx("div",{className:"flex items-center gap-1.5",children:j.map(H=>{const T=(x.django||[]).includes(H.id),I=u===H.id;return s.jsx("button",{onClick:()=>{G.playClick(),M(H.id),P(null),L(null),_(1)},className:`w-9 h-9 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${I?"bg-emerald-600 text-white font-black shadow-[0_0_12px_rgba(5,150,105,0.6)]":T?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-slate-800 text-slate-400 hover:bg-slate-700"}`,children:T?"✓":H.id},H.id)})})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 space-y-5",children:[s.jsxs("div",{children:[s.jsxs("span",{className:"text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1",children:[s.jsx(Qh,{size:14}),"Django Architecture Mission"]}),s.jsx("h3",{className:"text-lg font-bold text-white mt-1",children:g.title}),s.jsx("p",{className:"text-sm text-slate-300 mt-1 leading-relaxed",children:g.prompt})]}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"Choose the Django MTV snippet:"}),g.options.map((H,T)=>{const I=k===T;return s.jsxs("button",{onClick:()=>X(T),className:`w-full text-left p-3.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-between ${I?"bg-emerald-600/20 border-emerald-500 text-emerald-200 shadow-[0_0_12px_rgba(5,150,105,0.25)]":"bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"}`,children:[s.jsx("pre",{className:"break-all whitespace-pre-wrap",children:H}),s.jsx("span",{className:`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ml-2 shrink-0 ${I?"border-emerald-500 bg-emerald-600 text-white font-bold":"border-slate-700 text-slate-500"}`,children:String.fromCharCode(65+T)})]},T)})]}),W==="correct"&&s.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-bounce",children:[s.jsx(_t,{size:22,className:"shrink-0 text-emerald-400"}),s.jsxs("div",{className:"text-sm font-semibold",children:["Traffic Dispatched! ",g.explanation]})]}),W==="wrong"&&s.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3",children:[s.jsx(_n,{size:22,className:"shrink-0 text-rose-400"}),s.jsx("div",{className:"text-sm font-semibold",children:"Route Failed (Page not found 404 or View Error). Inspect the Django pipeline on the right."})]}),s.jsxs("div",{className:"flex items-center justify-between gap-3 pt-2",children:[s.jsx("button",{onClick:z,className:"p-2.5 rounded-xl text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 transition-colors",title:"Reset",children:s.jsx(Dt,{size:16})}),W==="correct"&&u<j.length?s.jsxs("button",{onClick:ee,className:"px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform",children:[s.jsx("span",{children:"Next Route"}),s.jsx(Pn,{size:16})]}):s.jsxs("button",{onClick:q,disabled:k===null,className:`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${k!==null?"bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_0_15px_rgba(5,150,105,0.4)] hover:scale-[1.02]":"bg-slate-800 text-slate-500 cursor-not-allowed"}`,children:[s.jsx(ht,{size:16}),s.jsx("span",{children:"Dispatch Request"})]})]})]}),s.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsxs("span",{className:"text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1.5",children:[s.jsx(Hh,{size:14}),"Django MTV Data Pipeline"]}),s.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"Flow Active"})]}),s.jsx("div",{className:"space-y-2.5",children:[{stage:"1. urls.py",title:"URL Conf & Regex Pattern",active:O>=1},{stage:"2. views.py",title:"View Controller & Logic",active:O>=2},{stage:"3. models.py",title:"ORM Query & Database Table",active:O>=3},{stage:"4. templates/",title:"HTML Context Render (Dバージ)",active:O>=4}].map((H,T)=>s.jsxs("div",{className:`p-3 rounded-xl border flex items-center justify-between font-mono text-xs transition-all ${H.active?"bg-emerald-600/20 border-emerald-500/60 text-emerald-300 shadow-sm":"bg-slate-950/60 border-slate-800 text-slate-500"}`,children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"font-bold",children:H.stage}),s.jsx("span",{className:"text-[11px] text-slate-400 font-sans",children:H.title})]}),s.jsx("span",{className:`w-2.5 h-2.5 rounded-full ${H.active?"bg-emerald-400 animate-pulse":"bg-slate-700"}`})]},T))})]}),s.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 shrink-0"}),s.jsx("span",{children:"Django handles routing, database abstractions, authentication, and security in one unified framework."})]})]})]})]})},pm={Code2:ar,Palette:hi,Terminal:sr,Database:rr,Sparkles:ht,Server:mi,Layers:pi},hm=()=>{const{selectedTrack:w,setSelectedTrack:x,completedLevels:u,setActiveGameLevel:M}=mt(),j=g=>{G.playClick(),x(g),M(1)},V=()=>{switch(w){case"html":return s.jsx(md,{});case"css":return s.jsx(om,{});case"js":return s.jsx(im,{});case"mysql":return s.jsx(lm,{});case"python":return s.jsx(cm,{});case"php":return s.jsx(dm,{});case"django":return s.jsx(um,{});default:return s.jsx(md,{})}};return s.jsxs("div",{className:"space-y-6 sm:space-y-8 pb-16 md:pb-6",children:[s.jsxs("div",{className:"relative rounded-2xl sm:rounded-3xl overflow-hidden glass-panel p-5 sm:p-8 border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900/90 to-purple-950/40 shadow-2xl",children:[s.jsx("div",{className:"absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"}),s.jsxs("div",{className:"relative z-10 max-w-3xl",children:[s.jsxs("div",{className:"inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[11px] sm:text-xs font-mono font-semibold mb-2.5",children:[s.jsx(Bd,{size:13}),s.jsx("span",{children:"BYTEVERSE ARCADE REALM"})]}),s.jsxs("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight",children:["Play Games. Solve Puzzles. ",s.jsx("br",{className:"hidden sm:inline"}),s.jsx("span",{className:"bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent",children:"Become a Full-Stack Legend."})]}),s.jsx("p",{className:"text-xs sm:text-sm lg:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed",children:"Choose a technology below. Each quest teaches you real programming fundamentals through interactive mechanics, live preview runners, and boss battles."})]})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center justify-between mb-3 px-1",children:[s.jsxs("h3",{className:"text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2",children:[s.jsx("span",{children:"Select Learning Track"}),s.jsx("span",{className:"text-[10px] sm:text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-normal",children:"7 Technologies"})]}),s.jsx("span",{className:"text-[11px] text-slate-500 font-mono sm:hidden",children:"Swipe →"})]}),s.jsx("div",{className:"flex sm:grid sm:grid-cols-3 lg:grid-cols-7 gap-2.5 sm:gap-3 overflow-x-auto touch-scroll pb-2 sm:pb-0 -mx-3 px-3 sm:mx-0 sm:px-0",children:bu.map(g=>{const k=pm[g.icon]||ar,P=w===g.id,W=(u[g.id]||[]).length,L=W>=g.levelsCount;return s.jsxs("button",{onClick:()=>j(g.id),className:`min-w-[140px] sm:min-w-0 p-3 sm:p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between relative active:scale-95 shrink-0 sm:shrink ${P?"bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(0,242,254,0.25)] ring-1 ring-cyan-400/50 scale-[1.02]":"bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60"}`,children:[L&&s.jsx("span",{className:"absolute top-2 right-2 text-emerald-400",children:s.jsx(_t,{size:15})}),s.jsxs("div",{children:[s.jsx("div",{className:`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-2 bg-gradient-to-br ${g.accentColor} text-slate-950 shadow-md`,children:s.jsx(k,{size:18})}),s.jsx("h4",{className:"font-bold text-xs sm:text-sm text-white",children:g.name}),s.jsx("span",{className:"text-[9px] sm:text-[10px] text-slate-400 font-mono block leading-tight mt-0.5 truncate",children:g.category})]}),s.jsxs("div",{className:"mt-2.5 pt-2 border-t border-slate-800/80 w-full",children:[s.jsxs("div",{className:"flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-slate-400 mb-1",children:[s.jsx("span",{children:"Progress"}),s.jsxs("span",{children:[W,"/",g.levelsCount]})]}),s.jsx("div",{className:"w-full bg-slate-800 h-1.5 rounded-full overflow-hidden",children:s.jsx("div",{className:`h-full rounded-full bg-gradient-to-r ${g.accentColor} transition-all duration-300`,style:{width:`${W/g.levelsCount*100}%`}})})]})]},g.id)})})]}),s.jsx("div",{className:"pt-1",children:V()})]})},mm=[{id:"html_home",category:"HTML Tutorial",title:"HTML HOME",summary:"HTML is the standard markup language for Web pages. With HTML you can create your own Website.",eli5:{story:"Imagine you want to build a Lego castle or draw your dream house! HTML is like the plastic Lego bricks. You need bricks for the walls, a big sign for the front door, and a frame for the windows. Without HTML, there is nothing on the screen at all!",analogy:"🧱 Lego Bricks: HTML gives you the physical blocks to snap together before you paint them or add moving motors.",rules:["Every web page begins with a blueprint called <!DOCTYPE html>.","Tags look like little alligator mouths < > holding words inside.","Most tags give a hug to your words with an opening tag <p> and a closing tag </p>."]},body:`HTML is easy to learn - You will enjoy it!
Study our complete step-by-step tutorials starting from basic elements to advanced Web Components and HTML5 APIs.`,tryItCode:`<!DOCTYPE html>
<html>
<head>
<title>My First Website</title>
</head>
<body>

<h1>My Awesome Castle!</h1>
<p>I built this web page using HTML Lego blocks.</p>

</body>
</html>`,codeType:"html",notes:"HTML is not case sensitive: <P> means the same as <p>. However, W3C recommends lowercase in HTML5.",exercise:{question:"Which HTML element defines the document type and tells the browser this is HTML5?",options:["<!DOCTYPE html>","<html5>","<doctype web>",'<?xml version="1.0"?>'],correct:0,hint:"It is always placed at the very top of an HTML document before the <html> tag."},referenceTable:[{item:"<!DOCTYPE html>",description:"Defines that this document is an HTML5 document"},{item:"<html>",description:"The root element of an HTML page"},{item:"<head>",description:"Contains meta information about the HTML page"},{item:"<title>",description:"Specifies a title for the HTML page"},{item:"<body>",description:"Defines the document body (all visible content)"}]},{id:"html_intro",category:"HTML Tutorial",title:"HTML Introduction",summary:"What is HTML? HTML stands for Hyper Text Markup Language. It describes the structure of a Web page using markup.",eli5:{story:"When you open a picture book, your eyes see a giant title at the top, a nice story in the middle, and funny drawings on the side. The computer needs instructions to know which word is the title and which is the story. HTML is the secret code that labels them!",analogy:'🏷️ Sticky Labels: You put a "COOKIE JAR" sticker on a jar so nobody eats salt by mistake. HTML puts <h1> on titles so the computer knows it is huge!',rules:['<h1> means: "Make this super huge like a billboard!"','<p> means: "This is a regular story paragraph."','<button> means: "Make this clickable like an elevator button!"']},body:'HTML elements tell the browser how to display the content.\nHTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.\n\n### A Simple HTML Document:\n- The `<!DOCTYPE html>` declaration defines this document as HTML5.\n- The `<html>` element is the root element.\n- The `<head>` element contains meta info (charset, title, viewport, stylesheets).\n- The `<title>` element specifies the page title in browser tabs.\n- The `<body>` element contains visible page contents (headings, paragraphs, images, tables).',tryItCode:`<!DOCTYPE html>
<html>
<body>

<h1>Welcome to W3-Style ByteVerse!</h1>
<p>HTML is the foundation of all modern websites.</p>
<button onclick="alert('You clicked the magic button!')">Click Me!</button>

</body>
</html>`,codeType:"html",tips:"HTML tags normally come in pairs like <p> and </p>. The first tag is the start tag, and the second is the end tag.",exercise:{question:"Which tag wraps all visible contents of an HTML document?",options:["<head>","<body>","<visible>","<main-frame>"],correct:1,hint:"Everything displayed on the screen goes inside this element."}},{id:"html_elements",category:"HTML Tutorial",title:"HTML Elements & Tags",summary:"An HTML element is defined by a start tag, some content, and an end tag.",eli5:{story:"Think of an HTML element like a sandwich! The top slice of bread is the opening tag <p>. The peanut butter and jelly in the middle is your text. The bottom slice of bread is the closing tag </p> with a little backward slash. If you drop the bottom slice, your sandwich spills!",analogy:'🥪 The Bread Sandwich: <p> (Top bread) + "Hello" (Filling) + </p> (Bottom bread with /).',rules:["Start Tag: <tagname>","Content: The text, picture, or button you want to show.","End Tag: </tagname> (Always has the / slash!)"]},body:`\`<tagname> Content goes here... </tagname>\`

### Nested HTML Elements
HTML elements can be nested (elements can contain other elements).
All HTML documents consist of nested HTML elements.

### Empty HTML Elements
HTML elements with no content are called empty elements.
Example: \`<br>\` defines a line break without an end tag.`,tryItCode:`<div style="background:#1e293b; padding:16px; border-radius:8px; border:1px solid #334155;">
  <h3 style="color:#00f2fe; margin-top:0;">Nested Elements</h3>
  <p style="color:#94a3b8;">
    This &lt;p&gt; is nested inside a &lt;div&gt;.<br>
    The &lt;br&gt; tag above created a line break!
  </p>
</div>`,codeType:"html",notes:"Never skip the end tag! Some elements might display correctly without it, but unexpected errors can occur.",exercise:{question:"What is an HTML element without content or closing tag called?",options:["Void / Empty element","Broken element","Ghost element","Blank tag"],correct:0,hint:"Examples include <br>, <hr>, and <img>."}},{id:"html_attributes",category:"HTML Tutorial",title:"HTML Attributes",summary:"HTML attributes provide additional information about HTML elements.",eli5:{story:'Imagine you have a toy car. The tag is <car>. But what color is the car? How fast does it go? Attributes are the superpowers you give the car! You write <car color="blue" speed="superfast">.',analogy:"🦸 Superhero Badges: Attributes tell the computer extra secrets, like where a link should jump or which picture to load.",rules:['href="https://..." tells a link where to fly when clicked.','src="cat.png" tells an image which photo to display.','alt="cute cat" describes the photo if the image is lost.']},body:'All HTML elements can have attributes.\nAttributes provide additional information about elements.\nAttributes are always specified in the start tag.\nAttributes usually come in name/value pairs like: `name="value"`.\n\n### Key Attributes:\n- `href`: Specifies the URL of the page the link goes to.\n- `src`: Specifies the path to the image/media to be displayed.\n- `width` and `height`: Dimensions in pixels.\n- `alt`: Alternative text for screen readers or when an image fails to load.\n- `style`: Inline CSS styling.\n- `title`: Tooltip displayed on mouse hover.',tryItCode:`<a href="https://byteverse-chi.vercel.app" title="Visit ByteVerse" style="color:#00f2fe; font-weight:bold;">
  Hover over me to see the secret title tooltip!
</a>
<br><br>
<img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" alt="Laptop on desk" width="260" style="border-radius:8px;">`,codeType:"html",tips:"Always use lowercase attribute names and enclose attribute values in double quotes.",exercise:{question:"Which attribute specifies an alternate text for an image if the image cannot be displayed?",options:["title","src","alt","description"],correct:2,hint:"Short for alternate."}},{id:"html_headings",category:"HTML Basic Elements",title:"HTML Headings & Paragraphs",summary:"HTML headings are titles or subtitles that you want to display on a webpage.",eli5:{story:"Imagine a family of bears! Papa Bear is <h1> (giant and loud), Mama Bear is <h2>, Sister Bear is <h3>, and Baby Bear is <h6> (tiny like a mouse whispering). Use big bear headings for main titles, and baby bear headings for tiny sub-headings!",analogy:"🐻 The Bear Family: <h1> is the giant Papa Bear (biggest headline), and <h6> is the tiny Baby Bear (smallest).",rules:["<h1> is the king title! Only use one <h1> per webpage.","Headings go from <h1> (biggest) down to <h6> (smallest).","<p> is for normal paragraph reading sentences."]},body:"HTML headings are defined with the `<h1>` to `<h6>` tags:\n- `<h1>` defines the most important heading.\n- `<h6>` defines the least important heading.\n\nSearch engines like Google use headings to index the structure and content of your web pages. Users often skim a page by its headings.\n\n### The Paragraph Element\nThe HTML `<p>` element defines a paragraph. Browsers automatically add a single blank line before and after each paragraph.\nThe `<hr>` tag creates a horizontal thematic break line.\nThe `<br>` tag inserts a single line break without starting a new paragraph.",tryItCode:`<h1>Heading 1 (Giant King)</h1>
<h2>Heading 2 (Prince)</h2>
<h3>Heading 3 (Knight)</h3>
<h4>Heading 4 (Soldier)</h4>
<h5>Heading 5 (Scout)</h5>
<h6>Heading 6 (Tiny Ant)</h6>
<hr>
<p>This is a paragraph of story text.<br>And this is on a fresh new line using &lt;br&gt;!</p>`,codeType:"html",tips:"Never use headings just to make text BIG or bold. Use CSS for font sizing; reserve headings for document structure!",exercise:{question:"Which heading tag represents the largest and most important heading?",options:["<h6>","<head>","<h1>","<heading>"],correct:2,hint:"1 is the top rank."}},{id:"html_formatting",category:"HTML Basic Elements",title:"HTML Text Formatting",summary:"HTML contains several elements for defining text with special meaning and visual styling.",eli5:{story:"Have you ever highlighted words in your school notebook with a bright yellow neon marker, or made important words bold with a thick black marker? HTML has magic tags that dress up your words in funny costumes: bold armor, leaning italics, or glowing yellow highlighter!",analogy:"🖍️ The Pencil Case Markers: <strong> makes words bold like a superhero, <em> makes words lean in italic whisper, and <mark> paints them with yellow neon!",rules:["<b> or <strong>: Makes text thick and bold.","<i> or <em>: Tilts text into stylish italics.","<mark>: Paints words with a neon highlighter background."]},body:"HTML Formatting Elements:\n- `<b>` - Bold text\n- `<strong>` - Important text (spoken with emphasis by screen readers)\n- `<i>` - Italic text\n- `<em>` - Emphasized text\n- `<mark>` - Marked / highlighted text\n- `<small>` - Smaller text\n- `<del>` - Deleted text with a strikethrough line\n- `<ins>` - Inserted text with an underline\n- `<sub>` - Subscript text (like H₂O)\n- `<sup>` - Superscript text (like E=mc²)",tryItCode:`<div style="line-height:1.8; color:#f8fafc;">
  <p>This text is <strong>super strong & bold</strong>!</p>
  <p>This text is <em>emphasized in stylish italics</em>.</p>
  <p>Don't forget to eat your <mark style="background:#fef08a; color:#000; padding:2px 6px; border-radius:4px;">vegetables</mark> today!</p>
  <p>Water formula is H<sub>2</sub>O and Einstein says E = mc<sup>2</sup>.</p>
  <p>Price: <del style="color:#f87171;">$100</del> <ins style="color:#4ade80;">$49 (SALE!)</ins></p>
</div>`,codeType:"html",notes:"Use <strong> and <em> over <b> and <i> whenever possible, because search engines and screen readers recognize their semantic importance.",exercise:{question:"Which tag highlights text with a yellow background like a marker?",options:["<highlight>","<mark>","<yellow>","<neon>"],correct:1,hint:'Think of "marking" an answer on a paper.'}},{id:"html_links",category:"HTML Navigation",title:"HTML Links & Hyperlinks",summary:"HTML links are hyperlinks. You can click on a link and jump to another document or website.",eli5:{story:"Have you ever watched a superhero step through a glowing portal that instantly teleports them across the galaxy? An HTML link is that exact magic portal! You click on a blue word, and WHOOSH! You are suddenly on another website in a fraction of a second!",analogy:'🌀 Magic Teleport Portal: <a href="..."> grabs your hand and teleports you to any webpage on Earth!',rules:['The tag is <a>, which stands for "Anchor".','href="url" is the secret destination coordinates.','target="_blank" tells the browser to open the portal in a brand new tab!']},body:"The HTML `<a>` tag defines a hyperlink.\nSyntax:\n`<a href=\"url\">link text</a>`\n\nThe most important attribute of the `<a>` element is the `href` attribute, which indicates the link's destination.\n\n### Target Attribute:\nBy default, the linked page displays in the current browser window. To change this, specify another target:\n- `_self` - Default. Opens the document in the same window/tab.\n- `_blank` - Opens the document in a new window or tab.\n- `_parent` - Opens the document in the parent frame.\n- `_top` - Opens the document in the full body of the window.\n\n### Linking to an Email:\nUse `mailto:` inside `href` to open the user's email client!",tryItCode:`<div style="display:flex; flex-direction:column; gap:12px;">
  <a href="https://byteverse-chi.vercel.app" target="_blank" style="color:#00f2fe; font-weight:bold; text-decoration:underline;">
    🚀 Teleport to ByteVerse (Opens in new tab)
  </a>
  <a href="https://affansayed.vercel.app/" target="_blank" style="color:#a855f7; font-weight:bold; text-decoration:underline;">
    💼 Visit Affan Sayed's Portfolio Website
  </a>
  <a href="mailto:sayedaffan@example.com" style="color:#4ade80;">
    📧 Send Secret Message (Email Link)
  </a>
</div>`,codeType:"html",tips:'When using target="_blank", always add rel="noopener noreferrer" for web security and performance.',exercise:{question:"Which attribute opens a link in a brand-new browser tab?",options:['target="_new"','target="_blank"','window="open"','href="new"'],correct:1,hint:"It starts with an underscore: _blank."}},{id:"html_images",category:"HTML Media",title:"HTML Images",summary:"Images can improve the design and appearance of a web page.",eli5:{story:'Imagine an empty picture frame hanging on your wall! The picture frame has no photo inside until you slip a snapshot into it. The <img> tag is that picture frame! You whisper src="puppy.jpg", and the photo appears inside the frame instantly!',analogy:"🖼️ The Photo Frame: <img> holds the picture, src points to where the photo is stored, and alt describes it if your Wi-Fi drops!",rules:["<img> is a self-closing tag (no </img> needed).",'src="..." is the image location URL.','Always include alt="..." so blind students using screen readers know what is in the picture!']},body:"The HTML `<img>` tag is used to embed an image in a web page.\nImages are not technically inserted into a web page; images are linked to web pages. The `<img>` tag creates a holding space for the referenced image.\n\nThe `<img>` tag is empty, it contains attributes only, and does not have a closing tag.\n\n### The Two Required Attributes:\n1. `src` - Specifies the path to the image.\n2. `alt` - Specifies an alternate text for the image if the image cannot be displayed.\n\n### Image Sizing:\nYou can use the `style` attribute or the `width` and `height` attributes to specify the width and height of an image.",tryItCode:`<div style="text-align:center; background:#0f172a; padding:16px; border-radius:12px; border:1px solid #334155;">
  <h4 style="color:#38bdf8; margin:0 0 10px 0;">Cyber Coding Workspace</h4>
  <img 
    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400" 
    alt="High-tech computer coding screen" 
    width="320" 
    style="border-radius:10px; box-shadow:0 0 20px rgba(56,189,248,0.3); max-width:100%; height:auto;"
  >
  <p style="color:#94a3b8; font-size:12px; margin-top:8px;">Photo loaded dynamically with &lt;img src="..."&gt;</p>
</div>`,codeType:"html",notes:"Always specify the width and height of an image. If width and height are not specified, the web page might flicker while the image loads.",exercise:{question:"Which tag is used to display an image on a webpage?",options:["<picture>","<image>","<img>","<photo>"],correct:2,hint:"It is a 3-letter abbreviation: <img>."}},{id:"html_lists",category:"HTML Lists & Tables",title:"HTML Lists (Ordered & Unordered)",summary:"HTML lists allow web developers to group a set of related items in lists.",eli5:{story:"When your mom gives you a grocery list, does it have bullet dots like cookies, milk, and apples? Or does it have numbers like step 1: wash hands, step 2: bake cake? In HTML, bullet lists are Unordered (<ul>), and 1-2-3 lists are Ordered (<ol>)!",analogy:"📝 Grocery List vs Recipe Steps: <ul> gives you round bullet dots, and <ol> gives you 1, 2, 3 numbered steps!",rules:["<ul> creates an Unordered List (bullets).","<ol> creates an Ordered List (1, 2, 3 numbers).","<li> creates each individual List Item inside!"]},body:"### Unordered HTML List:\nAn unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag.\nThe list items will be marked with bullets (small black circles) by default.\n\n### Ordered HTML List:\nAn ordered list starts with the `<ol>` tag. Each list item starts with the `<li>` tag.\nThe list items will be marked with numbers by default.\n\n### Description Lists:\nHTML also supports description lists:\n- `<dl>` defines the description list.\n- `<dt>` defines the term (name).\n- `<dd>` describes each term.",tryItCode:`<div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; color:#f1f5f9;">
  <div style="background:#1e293b; padding:12px; border-radius:8px;">
    <strong style="color:#38bdf8;">🎮 Arcade Games (ul)</strong>
    <ul style="padding-left:20px;">
      <li>Tag Fortress (HTML)</li>
      <li>Style Forge (CSS)</li>
      <li>Bug Hunter (JS)</li>
    </ul>
  </div>

  <div style="background:#1e293b; padding:12px; border-radius:8px;">
    <strong style="color:#4ade80;">🏆 3 Steps to Master (ol)</strong>
    <ol style="padding-left:20px;">
      <li>Read ELI5 Story</li>
      <li>Click Try it Yourself</li>
      <li>Score 100 XP in Arcade</li>
    </ol>
  </div>
</div>`,codeType:"html",tips:"You can nest lists inside other lists to create multi-level navigation trees or sub-menus!",exercise:{question:"Which tag defines an ordered numbered list?",options:["<ul>","<ol>","<li>","<list>"],correct:1,hint:"Ordered List = <ol>."}},{id:"html_tables",category:"HTML Lists & Tables",title:"HTML Tables",summary:"HTML tables allow web developers to arrange data into rows and columns.",eli5:{story:"Have you ever played Tic-Tac-Toe on a grid of squares, or looked at a school class schedule showing Monday, Tuesday, and Wednesday? A table is a grid of little boxes called cells where you put numbers, names, or scores!",analogy:"📊 Tic-Tac-Toe Grid: <table> is the board, <tr> is a horizontal row, <th> is a bold header, and <td> is a regular data cell.",rules:["<table> is the big outer box.","<tr> creates a row from left to right.","<th> is for column titles (bold and centered), and <td> holds regular data."]},body:'A table in HTML consists of table cells inside rows and columns:\n- `<table>`: The container element.\n- `<tr>`: Table Row.\n- `<th>`: Table Header cell (bold and centered by default).\n- `<td>`: Table Data cell (regular content).\n- `<thead>`, `<tbody>`, `<tfoot>`: Semantic sections of a table.\n\n### Merging Cells:\n- `colspan="2"`: Merges two or more columns horizontally.\n- `rowspan="2"`: Merges two or more rows vertically.',tryItCode:`<table style="width:100%; border-collapse:collapse; color:#f8fafc; font-size:13px;">
  <thead>
    <tr style="background:#0f766e; text-align:left;">
      <th style="padding:10px; border:1px solid #14b8a6;">Hero Name</th>
      <th style="padding:10px; border:1px solid #14b8a6;">Track</th>
      <th style="padding:10px; border:1px solid #14b8a6;">Score</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background:#1e293b;">
      <td style="padding:8px; border:1px solid #334155;">Affan Sayed</td>
      <td style="padding:8px; border:1px solid #334155;">Master Architect</td>
      <td style="padding:8px; border:1px solid #334155; color:#4ade80; font-weight:bold;">9,999 XP</td>
    </tr>
    <tr style="background:#0f172a;">
      <td style="padding:8px; border:1px solid #334155;">Cyber Cadet</td>
      <td style="padding:8px; border:1px solid #334155;">HTML Explorer</td>
      <td style="padding:8px; border:1px solid #334155; color:#38bdf8;">500 XP</td>
    </tr>
  </tbody>
</table>`,codeType:"html",notes:"Always use border-collapse: collapse; in CSS to avoid ugly double borders around cells.",exercise:{question:"Which tag defines a single data cell inside a table row?",options:["<tr>","<td>","<th>","<tc>"],correct:1,hint:"Table Data = <td>."}},{id:"html_block_inline",category:"HTML Layout & Semantics",title:"HTML Block vs Inline (Div & Span)",summary:"Every HTML element has a default display value, depending on what type of element it is: block or inline.",eli5:{story:"Imagine two types of kids on a playground bench! A Block kid lies down flat across the entire bench so nobody else can sit next to them. An Inline kid sits politely in a small corner so all their friends can sit on the same bench right beside them!",analogy:"🪑 The Playground Bench: <div> is a greedy block taking the whole row; <span> is polite inline sharing the row with other words.",rules:["Block elements (<div>, <p>, <h1>) always start on a brand new line and take 100% width.","Inline elements (<span>, <a>, <b>) stay in the same line without breaking.","<div> is the king container for building website sections."]},body:"### Block-level Elements:\nA block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.\nA block-level element always takes up the full width available.\nCommon block elements: `<div>`, `<p>`, `<h1>`-`<h6>`, `<ul>`, `<ol>`, `<table>`, `<form>`, `<header>`, `<footer>`.\n\n### Inline Elements:\nAn inline element does not start on a new line. An inline element only takes up as much width as necessary.\nCommon inline elements: `<span>`, `<a>`, `<img>`, `<b>`, `<strong>`, `<i>`, `<input>`, `<button>`.",tryItCode:`<!-- Block Element takes the full row -->
<div style="background:#3b82f6; color:#fff; padding:10px; margin-bottom:10px; border-radius:6px;">
  I am a &lt;div&gt; (Block Element). I take the whole row!
</div>

<!-- Inline Elements sit side-by-side -->
<p style="color:#f8fafc;">
  Here is regular text with a 
  <span style="background:#ec4899; color:#fff; padding:2px 8px; border-radius:4px;">pink &lt;span&gt;</span> 
  and a 
  <span style="background:#10b981; color:#fff; padding:2px 8px; border-radius:4px;">green &lt;span&gt;</span> 
  sitting side-by-side in the same sentence!
</p>`,codeType:"html",tips:"Use <div> to group elements for styling and layout; use <span> to style specific words inside a sentence.",exercise:{question:"Which of the following is an inline element by default?",options:["<div>","<p>","<span>","<h1>"],correct:2,hint:"It does not start on a new line."}},{id:"html_semantic",category:"HTML Layout & Semantics",title:"HTML5 Semantic Layout Elements",summary:"A semantic element clearly describes its meaning to both the browser and the developer.",eli5:{story:'Have you ever walked through a supermarket where every aisle has a big sign: "FRESH FRUIT", "BAKERY", "FROZEN FOOD"? Before HTML5, developers called everything <div>. Now, HTML5 gives us proper signs: <header> is the roof, <nav> is the hallway, and <footer> is the floor!',analogy:"🏷️ Aisle Signs in the Store: <header>, <nav>, <main>, <section>, <article>, and <footer> explain exactly what is inside each room of your website.",rules:["<header> holds the logo and page headline.","<nav> holds your menu links.","<main> holds the primary story of the page.","<footer> holds copyright and creator info at the bottom."]},body:"### What are Semantic Elements?\nSemantic HTML tags provide meaningful information about the role of the content they contain:\n- `<header>`: Introductory content or navigational links.\n- `<nav>`: Section of navigation links.\n- `<main>`: Dominant content of the `<body>`.\n- `<section>`: Thematic grouping of content, typically with a heading.\n- `<article>`: Independent, self-contained content (like a blog post or news story).\n- `<aside>`: Content aside from the page content (like a sidebar).\n- `<footer>`: Author, copyright, contact info, or sitemap.",tryItCode:`<div style="border:1px solid #475569; border-radius:10px; overflow:hidden; font-family:sans-serif;">
  <header style="background:#0f172a; padding:12px; border-bottom:1px solid #334155; color:#38bdf8; font-weight:bold;">
    &lt;header&gt; ByteVerse Navbar
  </header>
  
  <div style="display:flex; min-height:100px;">
    <aside style="width:30%; background:#1e293b; padding:10px; font-size:12px; color:#94a3b8; border-right:1px solid #334155;">
      &lt;aside&gt; Sidebar Navigation
    </aside>
    <main style="flex:1; background:#0f172a; padding:12px; font-size:12px; color:#f8fafc;">
      &lt;main&gt; Primary Web Page Content Area
    </main>
  </div>

  <footer style="background:#020617; padding:10px; text-align:center; font-size:11px; color:#64748b; border-top:1px solid #334155;">
    &lt;footer&gt; © 2026 Affan Sayed • All Rights Reserved
  </footer>
</div>`,codeType:"html",notes:"Using semantic HTML makes your website rank much higher on Google (SEO) and makes it 100% accessible to screen readers for visually impaired people.",exercise:{question:"Which semantic element contains the main unique content of a webpage?",options:["<section>","<main>","<content>","<primary>"],correct:1,hint:"There should only be one <main> per page."}},{id:"html_forms",category:"HTML Forms & Inputs",title:"HTML Forms & Basic Inputs",summary:"An HTML form is used to collect user input. The user input is most often sent to a server for processing.",eli5:{story:'Have you ever written a letter to Santa Claus with your Christmas wish list? You write your name, check boxes for the toys you want, and drop it in the mailbox. A form is that letter, and clicking "Submit" puts it in the digital mailbox!',analogy:"📬 The Letter to Santa: An HTML form collects your answers and mails them to the computer server.",rules:['<input type="text"> is a blank line where you type your name.','<input type="password"> hides your secret letters with dots so nobody peeks.','<button type="submit"> drops the letter into the mailbox!']},body:'The `<form>` element is a container for different types of input elements:\n- Text fields (`<input type="text">`)\n- Passwords (`<input type="password">`)\n- Checkboxes (`<input type="checkbox">`)\n- Radio buttons (`<input type="radio">`)\n- Submit buttons (`<button type="submit">`)\n\n### Form Attributes:\n- `action="/submit"`: Defines where to send form data.\n- `method="POST"` or `method="GET"`: Specifies the HTTP method.',tryItCode:`<form style="display:flex; flex-direction:column; gap:10px; max-width:300px; font-family:sans-serif;">
  <label style="font-size:12px; color:#94a3b8;">Hero Codename:</label>
  <input type="text" placeholder="e.g. CyberNinja" style="padding:8px; border-radius:6px; background:#1e293b; color:#fff; border:1px solid #475569;">

  <label style="font-size:12px; color:#94a3b8;">Choose Track:</label>
  <select style="padding:8px; border-radius:6px; background:#1e293b; color:#fff; border:1px solid #475569;">
    <option>HTML & CSS</option>
    <option>JavaScript</option>
    <option>Python & Django</option>
    <option>MySQL Database</option>
  </select>

  <button type="button" style="background:#00f2fe; color:#000; font-weight:bold; padding:10px; border-radius:6px; border:none; cursor:pointer;">
    Submit Form
  </button>
</form>`,codeType:"html",notes:"The <label> element is useful for screen-reader users and expands the clickable area for small radio/checkboxes.",exercise:{question:"Which HTTP method should be used when submitting sensitive data like passwords?",options:["GET","POST","FETCH","PUT"],correct:1,hint:"POST includes data in the HTTP request body instead of the URL string."}},{id:"html_multimedia",category:"HTML Media",title:"HTML Audio & Video Players",summary:"The HTML5 <video> and <audio> elements allow you to embed multimedia directly into web pages without third-party plugins.",eli5:{story:"Have you ever pressed PLAY on a movie on Netflix or listened to music through headphones? In the old days, websites needed clunky flash players to show videos. Now, HTML5 has native <video> and <audio> tags with play, pause, volume, and fullscreen buttons built right in!",analogy:"🎬 The Built-in Movie Theater: <video controls> and <audio controls> turn any webpage into a cinema screen!",rules:["<video controls> puts a video on the screen with play/pause buttons.","<audio controls> plays sound files and songs.","Always include controls attribute so users can press play and pause!"]},body:'### The HTML <video> Element:\nTo show a video in HTML, use the `<video>` element:\n```html\n<video width="320" height="240" controls>\n  <source src="movie.mp4" type="video/mp4">\n  Your browser does not support the video tag.\n</video>\n```\n\n### Video Attributes:\n- `controls`: Displays play, pause, and volume controls.\n- `autoplay`: Starts playing video automatically (must be `muted` in modern browsers).\n- `loop`: Restarts the video each time it finishes.\n- `poster="cover.jpg"`: Displays a thumbnail before the video starts.\n\n### The HTML <audio> Element:\nSimilar syntax for sound effects, podcasts, and music using `<audio controls>`.',tryItCode:`<div style="background:#0f172a; padding:16px; border-radius:12px; border:1px solid #334155; text-align:center;">
  <h4 style="color:#38bdf8; margin-top:0;">HTML5 Video Player Example</h4>
  <video width="320" controls poster="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400" style="border-radius:8px; max-width:100%;">
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p style="color:#94a3b8; font-size:12px; margin-top:8px;">Click play to watch Big Buck Bunny stream live!</p>
</div>`,codeType:"html",tips:"Modern browsers block videos from autoplaying with sound. Always add muted along with autoplay!",exercise:{question:"Which attribute provides play, pause, and volume buttons on a <video> element?",options:["buttons","player","controls","media"],correct:2,hint:'It is called "controls".'}}],fm=[{id:"css_home",category:"CSS Tutorial",title:"CSS HOME",summary:"CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.",eli5:{story:"Imagine you bought a plain gray toy robot made of plastic. That plastic body is HTML. Now, you open your box of paints and stickers! You paint the robot shiny neon blue, give it glowing sunglasses, and make its rocket boots shine. That magic paint box is CSS!",analogy:"🎨 The Paint & Costume Box: HTML is the bare skeleton; CSS is the skin, hair, clothes, shoes, and shiny accessories!",rules:["Color changes how words look (like red or blue paint).","Font-size makes letters as tiny as ants or as giant as dinosaurs.","Background-color paints the wall behind your text."]},body:`This tutorial will teach you CSS from basic to advanced.
Save a lot of work! External style sheets are stored in CSS files and control the layout of multiple Web pages all at once.`,tryItCode:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: #0a0d14;
  font-family: sans-serif;
}
h1 {
  color: #00f2fe;
  text-align: center;
}
p {
  color: #94a3b8;
  text-align: center;
}
</style>
</head>
<body>

<h1>My Styled Robot!</h1>
<p>CSS painted this robot with neon colors.</p>

</body>
</html>`,codeType:"html",notes:"CSS stands for Cascading Style Sheets.",exercise:{question:"What does CSS stand for?",options:["Cascading Style Sheets","Creative Style System","Computer Style Spread","Colorful Style Sheets"],correct:0,hint:"Cascading describes how styles flow down and override."},referenceTable:[{item:"color",description:"Sets the text color"},{item:"background-color",description:"Sets the background color of an element"},{item:"font-size",description:"Sets the size of the font"},{item:"text-align",description:"Aligns text (left, right, center, justify)"}]},{id:"css_intro",category:"CSS Tutorial",title:"CSS Introduction & Syntax",summary:"A CSS rule consists of a selector and a declaration block with property-value pairs.",eli5:{story:'Imagine you are a teacher giving orders to your classroom! You point at Timmy and say: "Timmy, put on a blue hat!" In CSS, "Timmy" is the selector, "hat" is the property, and "blue" is the value. You write: timmy { hat: blue; }!',analogy:"🎯 The Target & Paint Order: Selector points to who gets styled; Declaration says what color to paint it.",rules:["Selector: The element or class you want to style.","Property: The feature you want to change (like color or size).","Always end each style line with a semicolon ; !"]},body:"### The CSS Syntax:\nA CSS rule-set consists of a selector and a declaration block:\n```css\nselector {\n  property: value;\n  property: value;\n}\n```\n\n- **Selector**: Points to the HTML element you want to style (e.g., `h1`, `.btn`, `#hero`).\n- **Declaration block**: Contains one or more declarations separated by semicolons.\n- **Property**: A style attribute like `color`, `font-size`, or `margin`.\n- **Value**: The setting applied like `red`, `24px`, or `center`.",tryItCode:`<div style="text-align:center; padding:20px; font-family:sans-serif;">
  <h2 style="color:#a855f7; font-size:28px; text-shadow:0 0 10px rgba(168,85,247,0.5); margin-bottom:8px;">
    Target: &lt;h2&gt; Styled!
  </h2>
  <p style="color:#38bdf8; font-size:14px; letter-spacing:1px;">
    Property: color | Value: cyan
  </p>
</div>`,codeType:"html",tips:"Always close each declaration with a semicolon (;), and group declarations inside curly brackets ({ }).",exercise:{question:"In CSS syntax, what character separates a property from its value?",options:["Colon (:)","Equal sign (=)","Semicolon (;)","Hyphen (-)"],correct:0,hint:"Example: color: blue;"}},{id:"css_selectors",category:"CSS Selectors",title:"CSS Selectors: Class, ID & Pseudo-Classes",summary:'CSS selectors are used to "find" (or select) the HTML elements you want to style.',eli5:{story:'In school, the teacher can call: "Everyone wearing yellow shirts, line up!" That is a Class (.yellow-shirt). Or the teacher calls: "Student ID #42, please step forward!" That is a unique ID (#student-42). And when you hover your hand over a puppy, its tail wags! That wagging is :hover!',analogy:"🏷️ Class vs ID: .class is a team jersey shared by many players; #id is a player's unique passport number!",rules:[".class (starts with dot .) styles multiple elements together.","#id (starts with hash #) styles one unique element on the whole page.",":hover styles an element only when the mouse touches it!"]},body:"### Primary CSS Selectors:\n1. **Element Selector**: Selects elements based on tag name (`p { color: red; }`).\n2. **ID Selector**: Uses the `id` attribute of an HTML element to select one specific element (`#header { background: black; }`).\n3. **Class Selector**: Selects elements with a specific class attribute (`.btn { padding: 10px; }`).\n4. **Pseudo-Class Selector**: Defines a special state of an element:\n   - `:hover` - When the mouse is over an element.\n   - `:focus` - When an input receives cursor focus.\n   - `:active` - When a button is being pressed down.",tryItCode:`<style>
.badge-neon {
  background: #0f172a;
  color: #00f2fe;
  border: 1px solid #00f2fe;
  padding: 8px 16px;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s ease;
}
.badge-neon:hover {
  background: #00f2fe;
  color: #000;
  box-shadow: 0 0 20px #00f2fe;
  transform: translateY(-2px);
}
</style>

<div style="text-align:center; padding:20px;">
  <span class="badge-neon">Hover over me! (:hover pseudo-class)</span>
</div>`,codeType:"html",tips:"A class name cannot start with a number. Use hyphens like .cyber-btn or .hero-card.",exercise:{question:"Which character is used to select elements by class name in CSS?",options:["Period (.)","Hash (#)","Dollar ($)","At (@)"],correct:0,hint:".my-class"}},{id:"css_colors",category:"CSS Colors & Backgrounds",title:"CSS Colors, Gradients & Backgrounds",summary:"Colors in CSS can be specified using color names, HEX codes, RGB, or HSL values.",eli5:{story:"Have you ever mixed blue and yellow paint to create neon green? Computers mix Red, Green, and Blue light! A HEX code like #ff00ff is like a secret recipe: 100% Red + 0% Green + 100% Blue = bright magenta pink! And Gradients blend two colors together like a sunset.",analogy:"🌅 The Sunset Blend: Gradients smoothly melt colors together like purple fading into orange at dusk.",rules:["HEX codes start with # and use 6 letters/numbers (#00f2fe).","rgb(red, green, blue) mixes values from 0 to 255.","linear-gradient() creates smooth multi-color transitions."]},body:"### Color Formats in CSS:\n- **Color Names**: 140 standard color names (`red`, `cyan`, `midnightblue`).\n- **HEX Values**: `#RRGGBB` or `#RRGGBBAA` with alpha transparency.\n- **RGB / RGBA**: `rgba(0, 242, 254, 0.8)`.\n- **Linear Gradients**: `background: linear-gradient(direction, color1, color2);`.",tryItCode:`<div style="background: linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899); padding:24px; border-radius:16px; text-align:center; color:#fff; font-family:sans-serif; box-shadow:0 10px 30px rgba(139,92,246,0.4);">
  <h3 style="margin:0; font-size:20px;">CSS Linear Gradient</h3>
  <p style="margin:6px 0 0 0; font-size:13px; opacity:0.9;">
    Melting Cyan, Purple, and Pink together seamlessly!
  </p>
</div>`,codeType:"html",notes:"Use rgba() when you want a transparent background color without making the text inside transparent.",exercise:{question:"Which CSS function creates a smooth background color gradient transition?",options:["color-blend()","linear-gradient()","multi-color()","gradient-fill()"],correct:1,hint:"linear-gradient(direction, color1, color2)"}},{id:"css_boxmodel",category:"CSS Box Model",title:"CSS Box Model",summary:'All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.',eli5:{story:"Have you ever received a birthday present in a box? Inside the box is bubble wrap (padding) protecting the toy (content). The cardboard box has a thick tape edge (border). And your mom keeps other gift boxes far away on the table (margin). Every HTML element has these 4 layers!",analogy:"🎁 The Birthday Gift Box: Toy (Content) -> Bubble Wrap (Padding) -> Cardboard Box (Border) -> Empty Space to other gifts (Margin).",rules:["Content: The text or picture inside.","Padding: The soft cushion inside the border.","Border: The picture frame or box edge.","Margin: Personal space pushing neighbors away."]},body:`The CSS box model is essentially a box that wraps around every HTML element. It consists of:
1. **Content**: The content of the box, where text and images appear.
2. **Padding**: Clears an area around the content. The padding is transparent.
3. **Border**: A border that goes around the padding and content.
4. **Margin**: Clears an area outside the border. The margin is transparent.`,tryItCode:`<div style="background:#111726; border:3px solid #00f2fe; padding:24px; margin:16px; border-radius:12px; text-align:center; font-family:sans-serif;">
  <strong style="color:#00f2fe; font-size:16px;">The Toy (Content)</strong>
  <p style="color:#94a3b8; font-size:12px; margin-top:6px;">
    Padding is the bubble wrap inside. Margin is the space on the table.
  </p>
</div>`,codeType:"html",tips:`Use "box-sizing: border-box;" on all elements so padding and border do not increase the element's calculated width.`,exercise:{question:"Which box model layer sits directly outside the border?",options:["Content","Padding","Margin","Outline"],correct:2,hint:"It pushes surrounding sibling elements away."}},{id:"css_text_fonts",category:"CSS Typography",title:"CSS Typography & Google Fonts",summary:"CSS typography properties control the appearance of text on the screen, including fonts, sizing, letter-spacing, and line height.",eli5:{story:"Imagine writing a spooky Halloween letter with drippy ghost handwriting, or a comic book with bold superhero bubble letters! Fonts are the handwriting of your computer. CSS lets you change fonts, spread letters apart, and add cool shadows behind your words!",analogy:"✍️ Handwriting Styles: You can switch from clean school print to comic book bubbles or futuristic sci-fi fonts.",rules:["font-family chooses the handwriting style (sans-serif, serif, monospace).","line-height gives sentences room to breathe so they don't crash.","text-shadow makes your letters glow like neon signs!"]},body:"### Core Typography Properties:\n- `font-family`: The font face (e.g. `'Inter', sans-serif`).\n- `font-size`: Size of the text in `px`, `rem`, or `em`.\n- `font-weight`: Thickness (`400` regular, `700` bold, `900` black).\n- `line-height`: Space between lines of text.\n- `letter-spacing`: Space between individual characters.\n- `text-transform`: `uppercase`, `lowercase`, or `capitalize`.",tryItCode:`<div style="font-family:'Courier New', monospace; text-align:center; padding:16px;">
  <h3 style="letter-spacing:4px; text-transform:uppercase; color:#10b981; text-shadow:0 0 10px #10b981; margin:0;">
    // CYBER TERMINAL FONTS
  </h3>
  <p style="color:#6ee7b7; font-size:12px; line-height:2; margin-top:8px;">
    Monospace fonts give every single character the exact same width,<br>
    making your code line up like a neat soldier formation!
  </p>
</div>`,codeType:"html",tips:"Always provide a fallback font family (like sans-serif or serif) in case the user does not have your custom font installed.",exercise:{question:"Which property sets the space between individual letters in a word?",options:["word-spacing","letter-spacing","character-gap","font-spacing"],correct:1,hint:"letter-spacing: 2px;"}},{id:"css_display_position",category:"CSS Layout",title:"CSS Display & Positioning",summary:"The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute, sticky).",eli5:{story:'Imagine sticking a refrigerator magnet on your fridge: it stays stuck right there even when you open the door! That is "fixed" position. Or a sticky note that scrolls with you until it hits the top of your desk: that is "sticky"! CSS positioning places stickers anywhere on the screen.',analogy:"🧲 Fridge Magnets & Sticky Notes: position: fixed pins an element to the screen so it never moves when scrolling.",rules:["position: relative is the home base anchor.","position: absolute flies anywhere inside its relative parent using top, left, right, bottom.","position: fixed stays glued to the screen during scrolling (like sticky navbars)."]},body:`### The 5 Position Values:
1. **static**: Default. Elements flow naturally in the document order.
2. **relative**: Positioned relative to its normal position.
3. **absolute**: Positioned relative to the nearest positioned ancestor.
4. **fixed**: Positioned relative to the viewport; stays in the same place even when scrolled.
5. **sticky**: Toggles between relative and fixed depending on scroll position.`,tryItCode:`<div style="position:relative; width:100%; height:120px; background:#0f172a; border:1px solid #334155; border-radius:12px; overflow:hidden;">
  <p style="padding:12px; color:#94a3b8; font-size:12px;">Parent container (position: relative)</p>
  
  <div style="position:absolute; top:12px; right:12px; background:#ec4899; color:#fff; font-size:11px; font-weight:bold; padding:4px 10px; border-radius:20px;">
    🚀 Absolute Badge (Top: 12px, Right: 12px)
  </div>
</div>`,codeType:"html",notes:"An absolute element requires a parent with position: relative; otherwise, it positions itself relative to the entire <html> page!",exercise:{question:"Which position value keeps an element glued to the screen even when the user scrolls?",options:["static","relative","fixed","float"],correct:2,hint:'It remains "fixed" to the viewport.'}},{id:"css_flexbox",category:"CSS Layout",title:"CSS Flexbox Layout",summary:"The Flexible Box Layout Module makes it easy to design responsive layout structures without using float or positioning.",eli5:{story:'Imagine 3 puppies sitting on a sofa. If they sit close together on the left, that is "flex-start". If they sit in the exact middle to cuddle, that is "center". If they spread out so each puppy gets equal space, that is "space-between"! Flexbox is like teaching puppies how to sit on the couch.',analogy:"🐶 Puppies on a Couch: Flexbox arranges elements in a neat row or column without pushing each other off the screen.",rules:["display: flex turns on the magical couch.","justify-content: center moves all items to the middle horizontally.","align-items: center centers all items vertically."]},body:"### Flexbox Container Properties:\n- `display: flex;`: Activates flex formatting context.\n- `flex-direction: row | column;`: Direction of the main axis.\n- `justify-content: center | space-between | space-around;`: Alignment along main axis.\n- `align-items: center | flex-start | flex-end;`: Alignment along cross axis.\n- `gap: 16px;`: Sets space between items without margins.",tryItCode:`<div style="display:flex; justify-content:space-between; align-items:center; gap:8px; background:#0f172a; padding:16px; border-radius:10px; border:1px solid #334155; font-family:sans-serif;">
  <div style="background:#00f2fe; color:#000; padding:10px 16px; border-radius:6px; font-weight:bold; font-size:12px;">Puppy 1</div>
  <div style="background:#a855f7; color:#fff; padding:10px 16px; border-radius:6px; font-weight:bold; font-size:12px;">Puppy 2</div>
  <div style="background:#ec4899; color:#fff; padding:10px 16px; border-radius:6px; font-weight:bold; font-size:12px;">Puppy 3</div>
</div>`,codeType:"html",tips:"Use gap: 12px; instead of margin on children. It makes flex layouts 10x cleaner!",exercise:{question:"Which flexbox property distributes items with equal space between them across the row?",options:["align-items: center","justify-content: space-between","flex-wrap: wrap","direction: space"],correct:1,hint:"space-between spreads items from edge to edge."}},{id:"css_grid",category:"CSS Layout",title:"CSS Grid Layout",summary:"CSS Grid Layout offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.",eli5:{story:'Have you ever eaten waffles or put ice cubes into an ice cube tray? An ice cube tray has rows and columns with perfect squares. CSS Grid is that tray! You can say: "Make 3 equal columns, and place the photo in column 1, and the story in columns 2 and 3!"',analogy:"🧊 The Ice Cube Tray: CSS Grid builds 2D rows and columns simultaneously for complete layout control.",rules:["display: grid turns on the grid tray.","grid-template-columns: repeat(3, 1fr) creates 3 equal columns.","gap: 16px sets clean space between grid cells."]},body:"### Flexbox vs Grid:\n- **Flexbox**: 1-Dimensional (works on either a row OR a column).\n- **CSS Grid**: 2-Dimensional (works on rows AND columns simultaneously).\n\n### Key Grid Properties:\n- `display: grid;`\n- `grid-template-columns: 1fr 1fr 1fr;` (or `repeat(3, 1fr)`)\n- `grid-template-rows: auto 1fr;`\n- `grid-column: span 2;` (expands cell across 2 columns)",tryItCode:`<div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; font-family:sans-serif;">
  <div style="background:#3b82f6; color:#fff; padding:16px; border-radius:8px; text-align:center; font-weight:bold; font-size:12px;">Card 1</div>
  <div style="background:#10b981; color:#fff; padding:16px; border-radius:8px; text-align:center; font-weight:bold; font-size:12px;">Card 2</div>
  <div style="background:#f59e0b; color:#fff; padding:16px; border-radius:8px; text-align:center; font-weight:bold; font-size:12px;">Card 3</div>
  <div style="grid-column:span 3; background:#8b5cf6; color:#fff; padding:12px; border-radius:8px; text-align:center; font-weight:bold; font-size:12px;">
    Spans all 3 columns! (grid-column: span 3)
  </div>
</div>`,codeType:"html",tips:'The "fr" unit stands for fractional unit. "1fr 2fr" gives the second column twice as much space as the first!',exercise:{question:'What does the "fr" unit represent in CSS Grid?',options:["Fraction of available space","Frame rate","Font resolution","Free row"],correct:0,hint:"Short for Fraction."}},{id:"css_responsive",category:"CSS Responsive",title:"CSS Media Queries & Responsive Design",summary:"Media queries are a popular technique for delivering a tailored style sheet to different devices (desktops, laptops, tablets, and mobile phones).",eli5:{story:"Imagine you have an elastic rubber band or an accordion! When you hold it in a small hand, it shrinks so it fits in your pocket. When you stretch it out with two hands, it expands into a giant poster! A responsive website stretches and shrinks smoothly on mobile phones, iPads, and giant TV screens.",analogy:"📱 The Accordion: @media queries detect screen width and rearrange 3 columns into 1 neat single column on phones.",rules:['Always include <meta name="viewport" content="width=device-width, initial-scale=1.0"> in HTML.',"@media (max-width: 768px) triggers styles only on phones and small tablets.","Use percentages (%) or rem instead of fixed pixel widths."]},body:"### What is a Media Query?\nA media query consists of a media type and can contain one or more expressions that resolve to true or false:\n```css\n@media only screen and (max-width: 768px) {\n  body {\n    background-color: lightblue;\n  }\n}\n```\n\n### Common Breakpoints:\n- **Mobile phones**: `max-width: 600px`\n- **Tablets / iPads**: `max-width: 768px`\n- **Laptops**: `max-width: 1024px`\n- **Desktops**: `min-width: 1200px`",tryItCode:`<div style="background:#0f172a; padding:16px; border-radius:12px; border:1px solid #334155; text-align:center; font-family:sans-serif;">
  <p style="color:#38bdf8; font-weight:bold; font-size:14px; margin:0;">
    Resize your browser window!
  </p>
  <p style="color:#94a3b8; font-size:12px; margin-top:6px;">
    ByteVerse uses flexible flexbox, grid, and Tailwind breakpoints (sm, md, lg) to fit iPhone, iPad, and 4K monitors seamlessly.
  </p>
</div>`,codeType:"html",notes:"Mobile-first design means writing mobile styles as default, then using min-width media queries for larger tablet and desktop screens.",exercise:{question:"Which CSS rule allows you to apply styles based on the device screen width?",options:["@screen","@media","@responsive","@device"],correct:1,hint:"@media (max-width: ...)"}},{id:"css_animations",category:"CSS Advanced",title:"CSS Transitions & Keyframe Animations",summary:"CSS animations make it possible to animate transitions from one CSS style configuration to another without using JavaScript.",eli5:{story:"Have you ever watched a cartoon flipbook where drawing stick figures on each page makes them dance and jump? In CSS, @keyframes is that flipbook! You say: at 0% be on the left, at 50% jump high in the air, at 100% land on the right with fireworks!",analogy:"🎬 The Cartoon Flipbook: @keyframes animates elements frame-by-frame with smooth 60fps hardware acceleration.",rules:["transition: all 0.3s ease creates butter-smooth hover animations.","@keyframes defines what happens at 0%, 50%, and 100%.","animation: pulse 2s infinite keeps a button glowing forever!"]},body:`### The Transition Property:
Enables smooth value changes over a given duration:
\`\`\`css
.button {
  transition: transform 0.2s ease, background-color 0.2s;
}
.button:hover {
  transform: scale(1.05);
}
\`\`\`

### Keyframe Animations:
\`\`\`css
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
.floating-card {
  animation: float 3s ease-in-out infinite;
}
\`\`\``,tryItCode:`<style>
@keyframes pulseGlow {
  0% { box-shadow: 0 0 5px #00f2fe; transform: scale(1); }
  50% { box-shadow: 0 0 25px #00f2fe; transform: scale(1.04); }
  100% { box-shadow: 0 0 5px #00f2fe; transform: scale(1); }
}
.pulse-btn {
  background: #00f2fe;
  color: #000;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  animation: pulseGlow 2s infinite ease-in-out;
}
</style>

<div style="text-align:center; padding:24px;">
  <button class="pulse-btn">⚡ Pulsing 60FPS CSS Animation</button>
</div>`,codeType:"html",tips:'Use "transform" and "opacity" for animations. Browsers animate them on the GPU without lagging the CPU!',exercise:{question:"Which at-rule is used to create custom CSS animations?",options:["@animate","@keyframes","@motion","@transition"],correct:1,hint:"@keyframes animationName { ... }"}},{id:"css_variables",category:"CSS Advanced",title:"CSS Custom Properties (Variables)",summary:"CSS variables (custom properties) allow you to store specific values to be reused throughout a document.",eli5:{story:"Imagine you are building a giant Lego skyscraper. You decide the superhero color is neon blue. If you paint 500 windows with neon blue and later change your mind to gold, you have to repaint 500 times! But with a CSS variable, you save --main-color: blue in one place, and changing that one word updates all 500 windows at once!",analogy:"🏷️ The Universal Master Knob: Turn the dial once, and the whole theme (dark mode, light mode) changes across the website.",rules:["Variable names always start with two hyphens (--my-color).","Use var(--my-color) to use the saved color.","Define variables in :root so every element on the website can see them!"]},body:`### Declaring CSS Variables:
Variables should be declared inside the \`:root\` pseudo-class so they have global scope:
\`\`\`css
:root {
  --primary-color: #00f2fe;
  --secondary-color: #8b5cf6;
  --card-padding: 16px;
  --border-radius: 12px;
}
\`\`\`

### Using CSS Variables:
\`\`\`css
.button {
  background-color: var(--primary-color);
  padding: var(--card-padding);
  border-radius: var(--border-radius);
}
\`\`\``,tryItCode:`<div style="--brand-cyan:#00f2fe; --brand-purple:#a855f7; background:#0f172a; padding:20px; border-radius:12px; border:2px solid var(--brand-cyan); text-align:center; font-family:sans-serif;">
  <h4 style="color:var(--brand-cyan); margin:0;">Using CSS Variables</h4>
  <p style="color:var(--brand-purple); font-weight:bold; margin-top:6px;">
    var(--brand-cyan) &amp; var(--brand-purple)
  </p>
</div>`,codeType:"html",notes:"CSS variables are fully dynamic: you can change them with JavaScript at runtime to toggle Dark Mode in 1 line of code!",exercise:{question:"What prefix must every CSS variable name start with?",options:["Two hyphens (--)","Dollar sign ($)","At symbol (@)","Hash (#)"],correct:0,hint:"--variable-name"}}],gm=[{id:"js_home",category:"JS Tutorial",title:"JavaScript HOME",summary:"JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web.",eli5:{story:"HTML is the robot's body, and CSS is the robot's shiny paint. But without batteries, the robot just stands frozen! JavaScript is the batteries, the brain, and the muscles. It makes the robot walk, talk, play games, celebrate high scores, and respond when you click its buttons!",analogy:"🧠 Batteries & Brains: JavaScript brings everything to life! When you tap a button, JavaScript makes the magic happen.",rules:["HTML creates the buttons.","CSS makes the buttons pretty and glowing.",'JavaScript listens: "Did someone tap me? Quick, pop up confetti!"']},body:`JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.

### Why Study JavaScript?
JavaScript is one of the 3 languages all web developers must learn:
1. **HTML** to define the content of web pages.
2. **CSS** to specify the layout and styling of web pages.
3. **JavaScript** to program the behavior and interactivity of web pages.`,tryItCode:`// JavaScript makes things happen!
console.log("Robot batteries activated!");
const batteryLevel = 100;
console.log("Ready to play! Battery at:", batteryLevel + "%");`,codeType:"js",notes:"In HTML, JavaScript code is inserted between <script> and <\/script> tags.",exercise:{question:"Which HTML tag is used to embed or reference client-side JavaScript code?",options:["<js>","<javascript>","<script>","<code>"],correct:2,hint:"It is called <script>."},referenceTable:[{item:"let",description:"Declares a block-scoped mutable variable"},{item:"const",description:"Declares a block-scoped read-only constant"},{item:"function",description:"Declares a reusable block of code"},{item:"console.log()",description:"Writes output to the browser debugging console"}]},{id:"js_variables",category:"JS Fundamentals",title:"JS Variables: let, const & var",summary:"Variables are containers for storing data values. In modern JavaScript, we declare variables using const and let.",eli5:{story:'Imagine you have two plastic toy boxes with labels. One box is glued shut with superglue; you can only look inside, but you can never change what is in it. That box is named "const" (constant). The other box has an open lid that you can swap toys in and out of anytime. That box is named "let"!',analogy:'📦 Toy Boxes: Use "const" for your birthday (it never changes), and use "let" for your video game score (it goes up and down).',rules:["const = permanent label (cannot be reassigned).","let = changeable label (can be updated).","Always pick const unless you know the value will change."]},body:"### 4 Ways to Declare a JavaScript Variable:\n1. `var` (legacy, function-scoped, avoid in modern code)\n2. `let` (modern, block-scoped, can be reassigned)\n3. `const` (modern, block-scoped, CANNOT be reassigned)\n4. Nothing (implicit global, never do this!)",tryItCode:`const playerName = "Affan Sayed";
let coins = 50;

console.log("Player:", playerName);
console.log("Initial Coins:", coins);

coins = coins + 25; // Player found a treasure chest!
console.log("New Coins after chest:", coins);`,codeType:"js",tips:"Variables declared with let and const must be Declared before use and cannot be redeclared in the same scope.",exercise:{question:"Which keyword should you use to declare a variable whose value will NEVER be reassigned?",options:["let","var","const","immutable"],correct:2,hint:"Short for constant."}},{id:"js_datatypes",category:"JS Fundamentals",title:"JS Data Types & Typeof",summary:"JavaScript variables can hold different data types: numbers, strings, objects, booleans, and more.",eli5:{story:'Think of toys in your bedroom! Some toys are building blocks (numbers: 1, 2, 3), some are storybooks with words (strings: "Once upon a time"), and some are light switches that are either ON or OFF (booleans: true or false). JavaScript keeps them in different toy chests!',analogy:'🏷️ Toy Categories: Words go in quotes ("hello"), numbers stand alone (42), and switches are true/false.',rules:['Strings: Words wrapped in quotes ("ByteVerse").',"Numbers: Plain math numbers (10, 3.14).","Booleans: Only two values: true (YES) or false (NO)."]},body:'### 8 Basic Data Types in JavaScript:\n1. **String**: `"Hello World"`\n2. **Number**: `42` or `3.14159`\n3. **BigInt**: For arbitrarily large integers.\n4. **Boolean**: `true` or `false`\n5. **Undefined**: Variable declared without a value.\n6. **Null**: Intentional absence of any object value.\n7. **Symbol**: Unique identifier.\n8. **Object**: Complex data (Objects, Arrays, Dates).',tryItCode:`const title = "ByteVerse";
const version = 2.0;
const isAwesome = true;
const hero = { name: "Affan Sayed", rank: 1 };
const tags = ["HTML", "CSS", "JS"];

console.log("title type:", typeof title);
console.log("version type:", typeof version);
console.log("isAwesome type:", typeof isAwesome);
console.log("hero type:", typeof hero);
console.log("tags is array:", Array.isArray(tags));`,codeType:"js",notes:'In JavaScript, typeof null returns "object". This is a famous historical bug in the language kept for backward compatibility!',exercise:{question:"What data type can only be either true or false?",options:["String","Number","Boolean","Binary"],correct:2,hint:"Named after George Boole."}},{id:"js_operators",category:"JS Fundamentals",title:"JS Conditionals & Operators (if / else)",summary:"Conditional statements are used to perform different actions based on different conditions.",eli5:{story:'Imagine walking up to a water park slide! The lifeguard looks at you and checks: "Are you taller than 4 feet?" IF yes: "Enjoy the mega slide!" ELSE: "Please play in the kiddie pool for now!" JavaScript uses "if" and "else" to make decisions just like that lifeguard!',analogy:"🚦 The Traffic Light: Green light -> GO! Red light -> STOP! Yellow light -> SLOW DOWN!",rules:["=== checks if two things are strictly equal in value and type.","if (condition) { do this } else { do that }.","&& means AND (both must be true); || means OR (either can be true)."]},body:'### Comparison Operators:\n- `===`: Strict equality (checks value AND type).\n- `!==`: Strict inequality.\n- `>`, `<`, `>=`, `<=`: Greater than, less than.\n\n### Logical Operators:\n- `&&`: AND (both conditions must be true)\n- `||`: OR (at least one condition must be true)\n- `!`: NOT (inverts boolean value)\n\n### If / Else Syntax:\n```javascript\nif (score >= 90) {\n  console.log("Grade: A");\n} else if (score >= 80) {\n  console.log("Grade: B");\n} else {\n  console.log("Keep practicing!");\n}\n```',tryItCode:`const playerXP = 1250;
const hasSecretKey = true;

if (playerXP >= 1000 && hasSecretKey) {
  console.log("🏆 Gate of Champions UNLOCKED! Welcome Master Coder!");
} else {
  console.log("🔒 The gate remains locked. Gather more XP in the Arcade!");
}`,codeType:"js",tips:"Always use strict equality === instead of loose equality == to prevent unexpected type coercion bugs!",exercise:{question:"Which operator checks if BOTH conditions on the left and right are true?",options:["||","&&","!=","=="],correct:1,hint:"Double ampersand: &&."}},{id:"js_functions",category:"JS Functions",title:"JS Functions & Arrow Functions",summary:'A JavaScript function is a block of code designed to perform a particular task. It is executed when "something" invokes (calls) it.',eli5:{story:"Imagine a magical Smoothie Blender in your kitchen! You put in bananas and strawberries (inputs / arguments). You press the button. The blender runs its secret mixing recipe, and POOF: it pours out a delicious smoothie (return value)! A function is that blender recipe: write it once, use it 100 times!",analogy:"🥤 The Smoothie Blender: Give it fruit (inputs), it mixes them up, and gives you a tasty smoothie (output)!",rules:["Define a function with the recipe instructions.","Pass arguments (like ingredients) inside the (parentheses).",'Use "return" to send the finished smoothie back!']},body:`### Modern ES6 Arrow Functions
Arrow functions allow a shorter syntax for writing function expressions:
\`\`\`javascript
const multiply = (x, y) => x * y;
\`\`\`

### Function Anatomy:
- **Parameters**: Variable names listed in function definition.
- **Arguments**: Real values passed to the function when invoked.
- **Return Value**: The result handed back to the caller.`,tryItCode:`// The Smoothie Blender Function
function makeSmoothie(fruit1, fruit2) {
  return fruit1 + " & " + fruit2 + " Smoothie!";
}

// Modern Arrow Function
const calculateScore = (wins, bonus) => (wins * 100) + bonus;

console.log(makeSmoothie("Banana", "Strawberry"));
console.log("Player Score:", calculateScore(5, 50));`,codeType:"js",notes:"If an arrow function has only one statement that returns a value, you can omit the brackets and the return keyword.",exercise:{question:"What is the correct syntax for an arrow function that returns the double of x?",options:["x => x * 2","function(x) => x * 2","-> x * 2","x -> { x * 2 }"],correct:0,hint:"The arrow is written as =>."}},{id:"js_objects",category:"JS Data Structures",title:"JS Objects & Destructuring",summary:"JavaScript objects are collections of named values (properties and methods).",eli5:{story:'Imagine your student ID card or a superhero character sheet! The card has your photo, your hero name, your level, and special powers. In JavaScript, an Object is that character sheet wrapped inside curly brackets: { name: "Batman", level: 99, fly: true }!',analogy:"📇 The Superhero ID Card: Objects hold key-value pairs describing all details of a single character or item.",rules:['Objects use curly brackets { key: "value" }.',"Access properties with dot notation: hero.name.","Objects can hold functions called methods: hero.attack()!"]},body:`### Creating and Accessing Objects:
\`\`\`javascript
const car = {
  make: "Tesla",
  model: "Model S",
  year: 2026,
  start: function() {
    return "Engine started silently!";
  }
};
\`\`\`

### Object Destructuring:
Extract properties cleanly into standalone variables:
\`\`\`javascript
const { make, model } = car;
console.log(make); // "Tesla"
\`\`\``,tryItCode:`const player = {
  name: "Affan Sayed",
  title: "ByteVerse Grandmaster",
  level: 50,
  skills: ["HTML", "CSS", "JavaScript", "Python"],
  greet() {
    return "Hello, I am " + this.name + ", ready to code!";
  }
};

console.log(player.greet());
console.log("First skill:", player.skills[0]);

// Destructuring
const { title, level } = player;
console.log("Title & Level:", title, "| LVL:", level);`,codeType:"js",tips:'Use "const" to declare objects. Even though the variable cannot be reassigned, its inner properties can be updated!',exercise:{question:'How do you access the "age" property of an object named "person"?',options:["person.age","person->age","person@age","person#age"],correct:0,hint:"Use dot notation: object.property."}},{id:"js_arrays",category:"JS Data Structures",title:"JS Arrays & High-Order Methods (map, filter)",summary:"JavaScript arrays are used to store multiple values in a single variable, and modern methods make transforming data effortless.",eli5:{story:"Imagine a line of colorful train cars! In car #0 you put an apple, in car #1 a banana, in car #2 a cookie. Now, imagine a magic paint wand called map() that walks down the train and dips every fruit in chocolate! That is how modern array methods work.",analogy:"🚂 The Train Cars: Arrays hold ordered items starting at seat #0; map() transforms every item, filter() picks only the best!",rules:["Array indexing starts at 0, NOT 1!",".map(fn) transforms every item and returns a brand-new array.",".filter(fn) keeps only items that pass your test!"]},body:"### Modern Array Methods:\n- `.push(item)`: Adds to the end of the array.\n- `.pop()`: Removes the last item.\n- `.map(fn)`: Creates a new array populated with the results of calling a function on every element.\n- `.filter(fn)`: Creates a new array with elements that pass the test function.\n- `.includes(item)`: Returns true if the array contains the value.",tryItCode:`const scores = [45, 92, 78, 100, 60, 85];

// Filter: keep scores >= 80 (Honors)
const honors = scores.filter(score => score >= 80);
console.log("Honors Scores:", honors);

// Map: award 10 bonus XP to everyone
const boosted = scores.map(score => score + 10);
console.log("Boosted Scores:", boosted);`,codeType:"js",tips:"Neither .map() nor .filter() mutate the original array; they create and return fresh new arrays!",exercise:{question:"Which array method creates a new array by transforming every element with a function?",options:[".filter()",".map()",".forEach()",".transform()"],correct:1,hint:'It "maps" each old value to a new value.'}},{id:"js_loops",category:"JS Fundamentals",title:"JS Loops: for, while & for...of",summary:"Loops can execute a block of code a number of times as long as a specified condition is true.",eli5:{story:'Imagine your mom says: "Do 5 jumping jacks!" You jump: 1, 2, 3, 4, 5. After the 5th jump, you stop and drink water. A loop is that jumping jack counter: it runs your instructions over and over until the counter hits the target number!',analogy:"🎡 The Ferris Wheel: The wheel spins around and around until the ride attendant hits the stop button after 5 laps.",rules:["for (let i = 0; i < 5; i++) runs exactly 5 times.","for (const item of array) visits every item in an array automatically.","Always make sure the loop condition ends so your computer doesn't get stuck in an infinite loop!"]},body:"### Types of Loops in JavaScript:\n- `for`: Loops through a block of code a number of times.\n- `for...of`: Loops through the values of an iterable object (like an array).\n- `for...in`: Loops through the properties of an object.\n- `while`: Loops through a block of code while a specified condition is true.",tryItCode:`const languages = ["HTML", "CSS", "JavaScript", "Python"];

console.log("--- Standard For Loop ---");
for (let i = 0; i < languages.length; i++) {
  console.log("Language #" + (i + 1) + ":", languages[i]);
}

console.log("--- Modern For...Of Loop ---");
for (const lang of languages) {
  console.log("✨ ByteVerse Track:", lang);
}`,codeType:"js",notes:"Use break to exit a loop early, and continue to skip the current iteration and jump to the next.",exercise:{question:"Which loop syntax is ideal for cleanly looping through values of an array without managing index i?",options:["for...in","for...of","loop...array","repeat...while"],correct:1,hint:"for (const item of items)"}},{id:"js_dom",category:"JS & The Browser",title:"JS HTML DOM Manipulation",summary:"With the HTML DOM, JavaScript can access and change all the elements of an HTML document.",eli5:{story:"Imagine you are playing a video game where you have a magic wand that can point at any tree on the screen and turn it purple, or point at a castle door and make it fly open! The DOM (Document Object Model) is the magic wand that lets JavaScript reach into the webpage and change any word, color, or image on the fly!",analogy:"🪄 The Magic Wand: document.querySelector() points to any HTML tag, and .textContent changes its words instantly!",rules:['document.getElementById("id") grabs an element by its ID.','element.textContent = "New text" changes what the words say.','element.style.color = "red" paints the element using CSS.']},body:"### The DOM Tree:\nWhen a web page is loaded, the browser creates a Document Object Model of the page.\nWith JavaScript, you can:\n- Change HTML content (`.textContent`, `.innerHTML`)\n- Change CSS styles (`.style.property`)\n- Add and remove HTML attributes (`.setAttribute()`)\n- Add and remove CSS classes (`.classList.add()`, `.classList.remove()`)",tryItCode:`// Simulating DOM manipulation in console
const mockElement = {
  id: "hero-title",
  textContent: "Old Boring Title",
  classList: ["text-white"],
  style: { color: "white" }
};

console.log("Before:", mockElement.textContent);
mockElement.textContent = "🚀 Cyber ByteVerse Champion!";
mockElement.style.color = "#00f2fe";
console.log("After DOM Update:", mockElement.textContent, "| Color:", mockElement.style.color);`,codeType:"js",tips:"Prefer textContent over innerHTML when inserting plain text to protect your website against Cross-Site Scripting (XSS) attacks.",exercise:{question:"Which method selects the first element matching a CSS selector string in the document?",options:["document.find()","document.querySelector()","document.select()","document.getElement()"],correct:1,hint:"querySelector accepts any CSS selector (.class, #id, tag)."}},{id:"js_events",category:"JS & The Browser",title:"JS Event Listeners (Clicks & Keys)",summary:'HTML events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can "react" on these events.',eli5:{story:"Have you ever rung someone's doorbell? When you press the button (the click event), a bell rings inside the house and your friend runs to open the door (the event handler)! An Event Listener is that doorbell: it sits quietly waiting, and the second a user taps, it jumps into action!",analogy:'🔔 The Doorbell: addEventListener("click", runSecretCode) waits for the user to press the button, then immediately runs your instructions.',rules:['element.addEventListener("event", function) is the modern way to listen for actions.','Common events: "click", "keydown", "mouseover", "submit".',"event.preventDefault() stops forms from refreshing the whole webpage."]},body:'### Adding an Event Listener:\n```javascript\nconst button = document.querySelector("#my-button");\nbutton.addEventListener("click", (event) => {\n  console.log("Button was clicked!", event);\n});\n```\n\n### Common DOM Events:\n- **Mouse**: `click`, `dblclick`, `mouseenter`, `mouseleave`\n- **Keyboard**: `keydown`, `keyup`\n- **Form**: `submit`, `change`, `input`, `focus`, `blur`\n- **Window**: `load`, `resize`, `scroll`',tryItCode:`// Simulating an event listener trigger
function triggerDoorbell(visitorName) {
  console.log("🔔 DING DONG! Doorbell pressed by:", visitorName);
  console.log("Door opened! Welcome to ByteVerse Arcade!");
}

triggerDoorbell("Affan Sayed");
triggerDoorbell("Cyber Explorer");`,codeType:"js",notes:"You can attach multiple event listeners to the same element without overwriting previous handlers.",exercise:{question:"Which method registers an event handler on a DOM element?",options:["attachEvent()","addEventListener()","listen()","on()"],correct:1,hint:'addEventListener("click", ...)'}},{id:"js_async",category:"JS Advanced",title:"JS Async / Await & Fetch API",summary:"Promises and async/await make asynchronous programming in JavaScript easier to read and write, especially when fetching data from APIs.",eli5:{story:`Imagine ordering a pizza on the phone! The restaurant gives you an order receipt (a Promise). You don't freeze and stand still like a statue while waiting for the chef to cook; you watch cartoons or play games! When the doorbell rings with the hot pizza, you "await" it and eat! That is async/await in JavaScript.`,analogy:"🍕 Ordering Pizza: You order food (fetch API), keep doing your work while it cooks (async), and grab it when it arrives (await)!",rules:["fetch(url) requests data from an online server or API.","async functions can pause with await without freezing the computer screen.","Always wrap await in try { ... } catch (err) { ... } in case the internet disconnects!"]},body:`### The Fetch API with Async/Await:
\`\`\`javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    if (!response.ok) throw new Error("Network error");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to load user:", error);
  }
}
\`\`\``,tryItCode:`// Simulating an async API call with Promises
function fakeApiFetch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ user: "Affan Sayed", rank: "Master", ping: "24ms" });
    }, 100);
  });
}

async function loadProfile() {
  console.log("📡 Contacting server satellite...");
  const data = await fakeApiFetch();
  console.log("✅ Data received:", data);
}

loadProfile();`,codeType:"js",tips:"An async function always returns a Promise, even if you return a plain string or number.",exercise:{question:"Which keyword is used inside an async function to wait for a Promise to resolve?",options:["pause","wait","await","hold"],correct:2,hint:"async paired with await."}},{id:"js_storage",category:"JS & The Browser",title:"JS LocalStorage (Saving Game Data)",summary:"The localStorage object allows you to save key/value pairs in the browser that survive even when the browser is closed and reopened.",eli5:{story:"Have you ever played a game on your Nintendo or iPad and saved your progress before going to sleep? The next morning, your high score and coins are still there! That memory card inside your web browser is called localStorage. ByteVerse uses localStorage to remember your XP and badges!",analogy:"💾 The Memory Card: localStorage saves your game save file in the browser forever until you clear history.",rules:['localStorage.setItem("key", "value") saves a secret item.','localStorage.getItem("key") reads the saved item back.',"Use JSON.stringify() to save objects, and JSON.parse() to load them!"]},body:`### The Web Storage API:
- \`localStorage\`: Stores data with NO expiration date (persists after browser closes).
- \`sessionStorage\`: Stores data for one session (data is lost when the browser tab closes).

### Syntax:
\`\`\`javascript
// Save data
localStorage.setItem("username", "Affan Sayed");

// Retrieve data
const name = localStorage.getItem("username");

// Remove data
localStorage.removeItem("username");

// Clear all
localStorage.clear();
\`\`\``,tryItCode:`// Simulating localStorage save and load
const mockStorage = {};

// Save high score
mockStorage["byteverse_xp"] = "2500";
console.log("💾 Saved XP to Memory Card:", mockStorage["byteverse_xp"]);

// Load high score
const savedXP = parseInt(mockStorage["byteverse_xp"], 10);
console.log("🎮 Loaded XP on restart:", savedXP, "| Level:", Math.floor(savedXP / 100));`,codeType:"js",notes:"localStorage can only store strings! To save arrays or objects, convert them first with JSON.stringify(myObject).",exercise:{question:"Which method saves a key/value pair into browser localStorage?",options:["localStorage.save()","localStorage.setItem()","localStorage.put()","localStorage.store()"],correct:1,hint:"setItem(key, value)"}}],ym=[{id:"sql_home",category:"SQL Tutorial",title:"SQL HOME",summary:"SQL is a standard language for storing, manipulating and retrieving data in databases.",eli5:{story:'Imagine the biggest magical library in the universe, with 10 million storybooks! If you had to walk shelf by shelf looking for a book about dragons, you would be searching for 100 years. But in this library, there is a super-speedy robot librarian named SQL. You say: "Librarian! Give me all books about Dragons!" and in 0.001 seconds, the books land right in your hands!',analogy:"📚 The Super Librarian: You give SQL a question (a query), and it instantly pulls the exact cards from the filing cabinet.",rules:['SELECT means "Pick these specific columns/cards".','FROM means "Look inside this specific cabinet/table".','WHERE means "Only take cards that match this rule (like color = blue)".']},body:`Our SQL tutorial will teach you how to use SQL in MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems.

### What is SQL?
- SQL stands for Structured Query Language.
- SQL lets you access and manipulate databases.
- SQL became an ANSI standard in 1986.`,tryItCode:"SELECT * FROM Customers WHERE Country = 'Mexico';",codeType:"sql",notes:"SQL keywords are NOT case sensitive: select is the same as SELECT. In this tutorial we write all SQL keywords in UPPERCASE.",exercise:{question:"What does SQL stand for?",options:["Structured Query Language","Strong Question Language","Structured Quick Language","Standard Query Logic"],correct:0,hint:"It is a structured language for querying relational data."},referenceTable:[{item:"SELECT",description:"Extracts data from a database"},{item:"UPDATE",description:"Updates data in a database"},{item:"DELETE",description:"Deletes data from a database"},{item:"INSERT INTO",description:"Inserts new data into a database"}]},{id:"sql_select",category:"SQL Tutorial",title:"SQL SELECT Statement",summary:"The SELECT statement is used to select data from a database. The data returned is stored in a result table, called the result-set.",eli5:{story:`When you open your toy box, you don't always want to dump the entire box on the carpet. Maybe you only want to take out your shiny cars! "SELECT car_name FROM toy_box;" tells the computer: leave the teddy bears and crayons inside, just bring me the cars!`,analogy:"🧺 Picking specific toys from the bin: SELECT lets you choose only the exact items you want to see.",rules:["SELECT name, age fetches only name and age.",'SELECT * means "Fetch EVERYTHING in the table!" (the asterisk * is the magic all-picker).',"FROM table_name tells the database which container to inspect."]},body:"### Syntax:\n```sql\nSELECT column1, column2, ...\nFROM table_name;\n```\n\nIf you want to select ALL fields available in the table, use the `*` wildcard syntax:\n```sql\nSELECT * FROM table_name;\n```",tryItCode:"SELECT CustomerName, City, Country FROM Customers;",codeType:"sql",tips:"Selecting only the specific columns you need improves query speed and network performance.",exercise:{question:"Which SQL statement is used to extract data from a database?",options:["EXTRACT","GET","SELECT","FETCH"],correct:2,hint:"It is the most common SQL statement."}},{id:"sql_where",category:"SQL Tutorial",title:"SQL WHERE Clause",summary:"The WHERE clause is used to filter records. It is used to extract only those records that fulfill a specified condition.",eli5:{story:`Imagine you are playing detective at school. Someone ate the last chocolate chip cookie! You only want to interview suspects who were near the cafeteria at 12:00. The WHERE clause is your detective badge: "WHERE location = 'Cafeteria' AND alibi_time = '12:00'".`,analogy:"🕵️ Detective Filtering: WHERE acts as a magnifying glass, filtering out anyone who is innocent.",rules:["WHERE score > 100 finds top scorers.",'WHERE country = "Canada" finds Canadian players.',"You can combine rules with AND or OR."]},body:"### Syntax:\n```sql\nSELECT column1, column2, ...\nFROM table_name\nWHERE condition;\n```",tryItCode:"SELECT * FROM Customers WHERE Country = 'Germany';",codeType:"sql",notes:"Text values in SQL must be enclosed in single quotes like 'Germany'. Numbers do not use quotes.",exercise:{question:'Select all records from Customers where City is "Berlin":',options:["SELECT * FROM Customers WHERE City = 'Berlin';","SELECT ALL Customers IN City 'Berlin';","FIND Customers WHERE City = Berlin;","SELECT City = 'Berlin' FROM Customers;"],correct:0,hint:"Use the standard WHERE clause."}},{id:"sql_orderby",category:"SQL Tutorial",title:"SQL ORDER BY (Sorting)",summary:"The ORDER BY keyword is used to sort the result-set in ascending (ASC) or descending (DESC) order.",eli5:{story:'Imagine lining up for class photo day! The photographer tells everyone: "Shortest kids in the front row, tallest kids in the back row!" In SQL, that is ORDER BY height ASC (ascending). If you line up highest video game scores at the top, that is ORDER BY score DESC (descending)!',analogy:"📏 The Photo Day Lineup: ASC sorts from smallest to biggest (A to Z); DESC sorts from biggest to smallest (Z to A).",rules:["ORDER BY column_name sorts the output.","ASC is default (smallest to largest / A-Z).","DESC sorts from largest to smallest (highest scores first)."]},body:"### Syntax:\n```sql\nSELECT column1, column2, ...\nFROM table_name\nORDER BY column1 [ASC|DESC], column2 [ASC|DESC];\n```",tryItCode:"SELECT PlayerName, HighScore FROM Leaderboard ORDER BY HighScore DESC;",codeType:"sql",tips:"You can sort by multiple columns, e.g. ORDER BY Country ASC, CustomerName DESC.",exercise:{question:"Which keyword sorts SQL results from highest to lowest?",options:["TOP","HIGH","DESC","DOWN"],correct:2,hint:"Short for Descending."}},{id:"sql_insert",category:"SQL Manipulation",title:"SQL INSERT INTO Statement",summary:"The INSERT INTO statement is used to insert new records in a table.",eli5:{story:"Have you ever collected Pokémon or baseball trading cards? When you buy a brand-new card pack, you open it up and slide the shiny new card into your binder sleeve. INSERT INTO is that binder sleeve: it slides a brand-new player into the database table!",analogy:"🎴 The Trading Card Binder: INSERT INTO adds a fresh new card row to your collection.",rules:["INSERT INTO table_name (columns) VALUES (data).","Make sure data types match (numbers with numbers, text with quotes).","Auto-increment IDs are created automatically by the database!"]},body:"### Syntax:\n```sql\nINSERT INTO table_name (column1, column2, column3)\nVALUES (value1, value2, value3);\n```",tryItCode:`INSERT INTO Players (Username, Track, XP)
VALUES ('Affan Sayed', 'Full-Stack', 9999);`,codeType:"sql",notes:"If you are inserting values for all columns of the table, you do not need to specify column names in the SQL query.",exercise:{question:"Which SQL statement adds new rows to a database table?",options:["ADD ROW","INSERT INTO","NEW RECORD","CREATE ITEM"],correct:1,hint:"INSERT INTO table_name ..."}},{id:"sql_update",category:"SQL Manipulation",title:"SQL UPDATE Statement",summary:"The UPDATE statement is used to modify the existing records in a table.",eli5:{story:`Imagine you just won a match in your favorite game and earned 100 extra gold coins! The game doesn't delete your character; it just updates your coin pouch: "UPDATE character SET coins = 250 WHERE name = 'Hero'". If you forget the WHERE clause, EVERYONE in the whole game gets 250 coins by mistake!`,analogy:"⚠️ The Golden Rule: ALWAYS include WHERE in UPDATE, or else every single player's data gets overwritten!",rules:["UPDATE table_name SET column1 = value1 WHERE condition.","Never forget the WHERE clause unless you want to update all rows.","You can update multiple columns separated by commas."]},body:`### Syntax:
\`\`\`sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
\`\`\`

> **WARNING**: Be careful when updating records! If you omit the WHERE clause, ALL records will be updated!`,tryItCode:`UPDATE Customers
SET ContactName = 'Affan Sayed', City = 'Mumbai'
WHERE CustomerID = 1;`,codeType:"sql",tips:"Run a SELECT query with the same WHERE clause first to double-check which rows will be affected before updating!",exercise:{question:"What happens if you run an UPDATE statement without a WHERE clause?",options:["Only the first row updates","An error occurs and nothing updates","ALL rows in the table are updated","The table is deleted"],correct:2,hint:"It affects every single row."}},{id:"sql_delete",category:"SQL Manipulation",title:"SQL DELETE Statement",summary:"The DELETE statement is used to delete existing records in a table.",eli5:{story:`Have you ever had an old broken toy that you decided to throw into the recycling bin? DELETE is that trash can! But be very careful: if you say "DELETE FROM toys;" without specifying WHERE toy_name = 'Broken Robot', the trash can eats all your favorite toys too!`,analogy:"🗑️ The Paper Shredder: Safely shreds outdated records that match your specific WHERE rule.",rules:["DELETE FROM table_name WHERE condition.","Always check the WHERE clause before pressing Enter.","To delete all data while keeping the table structure, use TRUNCATE TABLE."]},body:"### Syntax:\n```sql\nDELETE FROM table_name WHERE condition;\n```\n\n> **CRITICAL**: The WHERE clause specifies which record(s) should be deleted. If you omit the WHERE clause, all records in the table will be deleted!",tryItCode:"DELETE FROM Customers WHERE CustomerName = 'Alfreds Futterkiste';",codeType:"sql",notes:"You cannot undo a DELETE statement if transactions are autocommitted. Always have database backups!",exercise:{question:"Which SQL statement removes specific rows from a database table?",options:["DROP ROW","REMOVE","DELETE FROM","ERASE"],correct:2,hint:"DELETE FROM table WHERE ..."}},{id:"sql_aggregate",category:"SQL Functions",title:"SQL Aggregate Functions (COUNT, SUM, AVG)",summary:"An aggregate function performs a calculation on a set of values, and returns a single value.",eli5:{story:"Imagine counting how many coins are in your piggy bank! You could count each coin one by one, or you could drop them into a magical coin counter machine. In SQL, COUNT() tells you how many coins there are, SUM() tells you total dollars, and AVG() tells you the average coin size!",analogy:"🪙 The Piggy Bank Counter: Aggregate functions calculate totals, averages, minimums, and maximums instantly.",rules:["COUNT(column) counts how many rows exist.","SUM(column) adds all numbers together.","AVG(column) computes the mathematical average; MIN() and MAX() find extremes."]},body:"### Most Commonly Used Aggregate Functions:\n- `MIN()`: Returns the smallest value of the selected column.\n- `MAX()`: Returns the largest value of the selected column.\n- `COUNT()`: Returns the number of rows that match specified criteria.\n- `AVG()`: Returns the average value of a numeric column.\n- `SUM()`: Returns the total sum of a numeric column.",tryItCode:"SELECT COUNT(*) AS TotalPlayers, AVG(XP) AS AverageXP, MAX(XP) AS HighScore FROM Leaderboard;",codeType:"sql",tips:'Use "AS alias_name" to give the calculated aggregate column a readable label in your result set.',exercise:{question:"Which SQL function calculates the total sum of a numeric column?",options:["TOTAL()","SUM()","ADD()","COUNT()"],correct:1,hint:"SUM()"}},{id:"sql_joins",category:"SQL Joins",title:"SQL INNER JOIN (Connecting Tables)",summary:"A JOIN clause is used to combine rows from two or more tables, based on a related column between them.",eli5:{story:`Imagine you have two puzzle pieces that snap together! Piece #1 has the customer's name: "Affan Sayed". Piece #2 has the order: "Laptop Computer". Both pieces have the exact same secret matching puzzle peg: CustomerID = 101. An INNER JOIN snaps both pieces together into one single complete picture!`,analogy:"🧩 Interlocking Puzzle Pieces: JOIN uses matching foreign keys to connect Customers with their Orders.",rules:["INNER JOIN selects records that have matching values in both tables.","ON table1.id = table2.customer_id defines the matching puzzle peg.","LEFT JOIN keeps all records from the left table even if no match exists."]},body:`### Different Types of SQL JOINs:
- **(INNER) JOIN**: Returns records that have matching values in both tables.
- **LEFT (OUTER) JOIN**: Returns all records from the left table, and the matched records from the right table.
- **RIGHT (OUTER) JOIN**: Returns all records from the right table, and the matched records from the left table.
- **FULL (OUTER) JOIN**: Returns all records when there is a match in either left or right table.`,tryItCode:`SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;`,codeType:"sql",notes:"INNER JOIN is the most common type of join and is the default when you simply write JOIN.",exercise:{question:"Which join returns records only when there is a match in BOTH tables?",options:["INNER JOIN","LEFT JOIN","FULL JOIN","CROSS JOIN"],correct:0,hint:"INNER JOIN"}},{id:"sql_groupby",category:"SQL Advanced",title:"SQL GROUP BY & HAVING Clause",summary:"The GROUP BY statement groups rows that have the same values into summary rows. The HAVING clause was added because WHERE cannot be used with aggregate functions.",eli5:{story:"Imagine you have a giant bag of Halloween candy! You sort them into piles on your table: chocolate bars in one pile, lollipops in another pile, gummy bears in a third pile. Then, you only keep piles that have more than 5 pieces (HAVING count > 5). GROUP BY is that candy sorting pile!",analogy:"🍬 Sorting Candy by Flavor: GROUP BY groups items into buckets; HAVING filters the buckets based on totals.",rules:["GROUP BY column_name bundles matching rows into groups.","Used with aggregate functions (COUNT, MAX, MIN, SUM, AVG).","HAVING is the WHERE clause for aggregate totals (e.g. HAVING COUNT(*) > 5)."]},body:`### Syntax:
\`\`\`sql
SELECT column_name(s), COUNT(*)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING COUNT(*) > value
ORDER BY COUNT(*) DESC;
\`\`\``,tryItCode:`SELECT Country, COUNT(CustomerID) AS NumberOfCustomers
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5
ORDER BY NumberOfCustomers DESC;`,codeType:"sql",tips:"Remember the SQL execution order: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY!",exercise:{question:"Why does SQL have a HAVING clause instead of just using WHERE?",options:["HAVING is faster","WHERE cannot be used with aggregate functions","HAVING works with strings only","WHERE is deprecated"],correct:1,hint:"WHERE filters individual rows; HAVING filters grouped aggregate results."}}],xm=[{id:"py_home",category:"Python Tutorial",title:"Python HOME",summary:"Python is a popular programming language. Python can be used on a server to create web applications.",eli5:{story:"Imagine a talking robot pet who understands plain English! Other languages make you type messy punctuation like { ; && || }. But Python is so polite and friendly that reading Python code feels like reading a bedtime story! Python is used to build real video games, steer rockets, and teach AI robots how to draw pictures.",analogy:`🐍 The Friendly Robot Pet: Tell it "print('Hello!')" and it immediately repeats it with a smile!`,rules:["Python reads like simple everyday English.","No confusing semicolons (;) needed at the end of lines.","Super easy for beginners to start writing code in 5 minutes!"]},body:`Python is an easy to learn, powerful programming language.
It has efficient high-level data structures and a simple but effective approach to object-oriented programming.

### Learning by Examples
With our "Try it Yourself" editor, you can edit Python code and view the result directly in your browser.`,tryItCode:`# Welcome to Python W3-Style
print("Hello from Python!")
hero = "Affan Sayed"
power = 9000
print(f"{hero} power level is over {power}!")`,codeType:"python",notes:"Python was created by Guido van Rossum, and released in 1991.",exercise:{question:"What is the correct file extension for Python files?",options:[".pt",".py",".python",".pyt"],correct:1,hint:"Two letters: .py."},referenceTable:[{item:"print()",description:"Outputs text or variables to the console"},{item:"type()",description:"Returns the data type of an object"},{item:"len()",description:"Returns the number of items in an object"},{item:"input()",description:"Allows user input from terminal"}]},{id:"py_syntax",category:"Python Tutorial",title:"Python Syntax & Indentation",summary:"Python syntax can be executed by writing directly in the Command Line or by creating a python file.",eli5:{story:'Have you ever built a tower of building blocks? If you stack them crookedly, the tower falls over. Python is very neat and loves clean blocks! Instead of messy curly brackets, Python says: "Indent 4 spaces to show that these blocks belong inside this room!"',analogy:"📏 The 4-Space Ruler: Indentation tells the robot which instructions belong together inside a group.",rules:["Indent lines with 4 spaces to put them inside a loop or if-statement.","Never mix tabs and spaces.","If you forget to indent, Python will politely ask for IndentationError."]},body:`### Python Indentation
Indentation refers to the spaces at the beginning of a code line.
Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important!
Python uses indentation to indicate a block of code.

\`\`\`python
if 5 > 2:
    print("Five is greater than two!")
\`\`\`

Python will give you a syntax error if you skip the indentation!`,tryItCode:`if 5 > 2:
    print("Five is greater than two!")
    print("Neat 4-space indentation keeps code tidy!")

print("Outside the if statement.")`,codeType:"python",tips:"The standard Python indentation is 4 spaces. It makes Python code the cleanest code in the world.",exercise:{question:"What does Python use to indicate a block of code?",options:["Curly brackets {}","Parentheses ()","Indentation (spaces)","Semicolons ;"],correct:2,hint:"Whitespace matters in Python."}},{id:"py_variables",category:"Python Fundamentals",title:"Python Variables & Types",summary:"Variables are containers for storing data values. Unlike other languages, Python has no command for declaring a variable.",eli5:{story:`Imagine putting a sticky label on your water bottle: "name = 'Affan'"! You don't need to tell the bottle what it is; the moment you write it down, Python knows! If you write age = 10, Python says: "Aha! That's an integer number!"`,analogy:"🏷️ Self-Sticking Labels: Python automatically detects whether you created text, a whole number, or a decimal fraction.",rules:["No keyword (like let or var) needed: just write variable_name = value.","Variable names are case-sensitive (age vs Age).","Use snake_case for multi-word variables (player_score)."]},body:`### Creating Variables:
\`\`\`python
x = 5
y = "John"
print(type(x)) # <class 'int'>
print(type(y)) # <class 'str'>
\`\`\`

### Type Casting:
Specify a data type explicitly:
\`\`\`python
x = str(3)    # '3'
y = int(3)    # 3
z = float(3)  # 3.0
\`\`\``,tryItCode:`hero_name = "Affan Sayed"
hero_level = 99
hero_power = 95.8
is_master = True

print(f"Hero: {hero_name} | Level: {hero_level}")
print(f"Power: {hero_power} | Certified Master: {is_master}")
print("Data type of hero_name:", type(hero_name).__name__)`,codeType:"python",tips:'Use f-strings like f"Hello {name}!" for the cleanest string formatting in Python 3.6+.',exercise:{question:"Which function returns the data type of a variable in Python?",options:["typeof()","type()","datatype()","kind()"],correct:1,hint:"type(variable)"}},{id:"py_strings",category:"Python Fundamentals",title:"Python String Methods & f-strings",summary:"Strings in Python are arrays of bytes representing unicode characters, with dozens of built-in manipulation methods.",eli5:{story:'Imagine a cartoon speech bubble! Inside, someone yells: "hello world". Python has magic buttons: click .upper() and it turns into giant uppercase "HELLO WORLD"! Click .replace("world", "galaxy") and it zooms across the stars!',analogy:"💬 The Speech Bubble: Python lets you slice, capitalize, count, and format words with simple methods.",rules:[".upper() makes everything CAPITALS; .lower() makes it whisper.",".strip() trims away messy blank spaces on edges.",'f"Hello {name}" lets you slip variables directly inside sentences!']},body:"### Common String Methods:\n- `.upper()`: Returns uppercase string.\n- `.lower()`: Returns lowercase string.\n- `.strip()`: Removes whitespace from beginning and end.\n- `.replace(old, new)`: Replaces a substring.\n- `.split(separator)`: Splits string into a list.\n- `len(string)`: Returns character count.",tryItCode:`phrase = "  welcome to byteverse coding arcade!  "
cleaned = phrase.strip().title()
print("Original:", phrase)
print("Cleaned & Title Case:", cleaned)
print("Contains 'arcade'?:", "arcade" in phrase)
print("Length:", len(cleaned))`,codeType:"python",notes:"Strings in Python are immutable: calling .upper() returns a new string and does not modify the original.",exercise:{question:"How do you check how many characters are in a Python string named s?",options:["s.length","s.size()","len(s)","count(s)"],correct:2,hint:"Use the global len() function."}},{id:"py_lists",category:"Python Collections",title:"Python Lists",summary:"Lists are used to store multiple items in a single variable. Lists are created using square brackets.",eli5:{story:'Imagine your pencil case or backpack! Inside, you put a red crayon, a blue eraser, a ruler, and a sharpener. In Python, that pencil case is a List: my_backpack = ["Crayon", "Eraser", "Ruler"]. You can add new pencils or take out stickers anytime!',analogy:"🎒 The Pencil Case: Keep all your favorite items in order inside [square brackets].",rules:["Start with [ and end with ].","Items are separated with commas.",'Use .append("item") to slip a new toy into your pencil case!']},body:`### List Characteristics:
- **Ordered**: Items maintain their exact order.
- **Changeable**: You can add, replace, and delete items.
- **Allow Duplicates**: You can hold two of the same item.`,tryItCode:`backpack = ["Laser Blade", "Health Potion", "Shield"]
print("Items in backpack:", len(backpack))
print("First item:", backpack[0])

# Add new item
backpack.append("Speed Boots")
print("Updated backpack:", backpack)`,codeType:"python",tips:"Negative indexing lets you access from the end: backpack[-1] is the very last item in the list!",exercise:{question:"Which method adds an item to the end of a Python list?",options:["push()","add()","append()","insert_last()"],correct:2,hint:"my_list.append(item)"}},{id:"py_tuples_sets",category:"Python Collections",title:"Python Tuples & Sets",summary:"Tuples store multiple items in parentheses (immutable). Sets store unique items in curly brackets (unordered).",eli5:{story:"Imagine carving your birthday onto a stone tablet with a chisel! Once carved, it can NEVER be erased or changed: that is a Tuple (1998, 10, 15). Now imagine a magic candy bag where you drop in 10 green candies: the bag magically merges them so only 1 unique candy exists: that is a Set!",analogy:"🗿 Stone Tablet vs Magic Bag: Tuples are carved in stone (cannot be modified); Sets automatically delete duplicates.",rules:["Tuples use parentheses (1, 2, 3) and cannot be changed.","Sets use curly brackets {1, 2, 3} and allow zero duplicate items.","Sets are ultra-fast for checking if something exists (if x in my_set:)."]},body:`### 1. Tuples:
- Created with \`()\`.
- Immutable (cannot add, change, or remove items after creation).

### 2. Sets:
- Created with \`{}\`.
- Unordered, unchangeable (can add/remove), and NO duplicates allowed.`,tryItCode:`# Tuple (Immutable Coordinates)
coordinates = (40.7128, -74.0060)
print("NYC Coordinates Tuple:", coordinates)

# Set (Removes duplicate items automatically)
inventory = {"Key", "Coin", "Key", "Potion", "Coin", "Shield"}
print("Unique Inventory Items Set:", inventory)`,codeType:"python",notes:'A tuple with only one item must have a trailing comma: single_item = ("apple",). Without the comma, Python sees it as a string!',exercise:{question:"Can you change or reassign items in a Python Tuple after creation?",options:["Yes, using .modify()","No, tuples are immutable","Only if converted to set","Yes, anytime"],correct:1,hint:"Tuples are immutable."}},{id:"py_dictionaries",category:"Python Collections",title:"Python Dictionaries",summary:"Dictionaries are used to store data values in key:value pairs. A dictionary is a collection which is ordered, changeable and does not allow duplicates.",eli5:{story:'Have you ever opened a real dictionary book looking for the word "Dinosaur"? You look up the word (the key), and right next to it is the explanation: "A giant prehistoric lizard!" (the value). In Python, a dictionary pairs words with their meanings: {"word": "meaning"}!',analogy:"📖 The Real Dictionary: Look up any keyword in curly brackets, and it instantly hands you its saved value.",rules:['Dictionaries use { "key": "value" } syntax.','Access values using square brackets: hero["name"].',"Keys must be unique; assigning to an existing key updates its value."]},body:'### Syntax:\n```python\nplayer = {\n  "name": "Affan Sayed",\n  "track": "Python & Django",\n  "level": 99\n}\nprint(player["name"]) # Affan Sayed\n```\n\n### Dictionary Methods:\n- `.keys()`: Returns all keys.\n- `.values()`: Returns all values.\n- `.items()`: Returns key-value tuple pairs.\n- `.get(key, default)`: Safely gets value without crashing if key is missing!',tryItCode:`profile = {
  "hero": "Affan Sayed",
  "role": "Master Architect",
  "score": 9500,
  "badges": ["HTML Champion", "Python Master"]
}

print("Player:", profile["hero"])
print("Total Badges:", len(profile["badges"]))

# Safe lookup with .get()
rank = profile.get("rank", "Grandmaster")
print("Rank:", rank)`,codeType:"python",tips:'Always use .get("key") instead of profile["key"] if you are not 100% sure the key exists. It prevents KeyError crashes!',exercise:{question:"Which dictionary method safely retrieves a value with a fallback default if the key is missing?",options:["fetch()","get()","find()","lookup()"],correct:1,hint:"dict.get(key, default)"}},{id:"py_conditionals",category:"Python Fundamentals",title:"Python If...Else & Logical Operators",summary:"Python supports the usual logical conditions from mathematics: equals, not equals, less than, greater than, and logical operators.",eli5:{story:'Imagine walking up to a spaceship launchpad! The computer checks: "Is oxygen level > 90? AND is fuel tank full?" IF both are true: "3, 2, 1, LIFTOFF!" ELIF fuel is low: "Please refuel!" ELSE: "Launch aborted!" Python uses plain English words "and", "or", and "not" for logic.',analogy:"🚀 The Spaceship Launch Checklist: All safety rules must pass before the rocket fires its thrusters.",rules:["Python uses English words: and, or, not (no && or || symbols!).","Always end the if, elif, and else lines with a colon (:).","Indent lines inside the condition with 4 spaces."]},body:`### Syntax:
\`\`\`python
if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
else:
    print("Keep studying!")
\`\`\`

### Logical Operators:
- \`and\`: True if both conditions are true.
- \`or\`: True if at least one condition is true.
- \`not\`: Inverts the boolean result.`,tryItCode:`xp = 2400
has_boss_key = True

if xp >= 2000 and has_boss_key:
    print("🏆 Citadel gates OPEN! Enter the Boss Chamber!")
elif xp >= 1000:
    print("⚔️ Almost there! Find the Boss Key in the Arcade!")
else:
    print("🌱 Gather more XP to level up your hero.")`,codeType:"python",notes:'Python supports shorthand one-line if/else ternary: status = "Pass" if score >= 50 else "Fail".',exercise:{question:"What character MUST be placed at the end of an if statement line in Python?",options:["Semicolon (;)","Colon (:)","Period (.)","Curly bracket ({)"],correct:1,hint:"if condition:"}},{id:"py_loops",category:"Python Fundamentals",title:"Python For & While Loops (range)",summary:"A for loop is used for iterating over a sequence (list, tuple, dictionary, set, or string). A while loop executes as long as a condition is true.",eli5:{story:'Imagine your coach gives you 5 practice soccer balls and says: "Kick every single ball into the goal!" The loop takes ball #1 (KICK!), ball #2 (KICK!), ball #3 (KICK!), ball #4 (KICK!), ball #5 (KICK!). When the ball bag is empty, the loop finishes with a cheer!',analogy:"⚽ The Soccer Ball Bag: for ball in balls kicks every ball in order until the bag is empty.",rules:["for item in my_list: visits every item automatically.","range(5) counts: 0, 1, 2, 3, 4 (starts at 0, stops before 5).","break exits the loop immediately; continue skips to the next item."]},body:`### The for Loop & range():
\`\`\`python
for i in range(1, 6):
    print(f"Lap #{i}")
\`\`\`

### The while Loop:
\`\`\`python
countdown = 5
while countdown > 0:
    print(countdown)
    countdown -= 1
print("Blastoff!")
\`\`\``,tryItCode:`tracks = ["HTML", "CSS", "JavaScript", "Python", "Django"]

print("--- ByteVerse Academy Modules ---")
for index, track in enumerate(tracks, start=1):
    print(f"Track #{index}: {track}")

print("\\n--- Counting with range(3) ---")
for num in range(3):
    print(f"Countdown: {3 - num}...")
print("Ready, Set, Code!")`,codeType:"python",tips:"Use enumerate(my_list) when you need both the index number and the item value inside your loop!",exercise:{question:"What numbers will range(1, 4) generate?",options:["1, 2, 3, 4","1, 2, 3","0, 1, 2, 3","1, 4"],correct:1,hint:"range stops BEFORE the second number: 1, 2, 3."}},{id:"py_functions",category:"Python Functions",title:"Python Functions & Scope",summary:"A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function.",eli5:{story:'Imagine a magic microwave! You open the door, put in popcorn kernels, set the timer, and press START. Inside, it pops the corn, and DING! It hands you a hot bag of buttered popcorn. In Python, "def make_popcorn(flavor):" is that magical machine: write it once, use it for every movie night!',analogy:"🍿 The Popcorn Machine: def creates the recipe, arguments are the ingredients, and return hands you the delicious snack.",rules:["Define a function with def function_name():.","Use return to send a result back to the caller.",'Default parameter: def greet(name="Friend") works even if no name is given!']},body:"### Defining Functions:\n```python\ndef calculate_xp(games_won, bonus=100):\n    return (games_won * 50) + bonus\n\nscore = calculate_xp(4) # 300\n```\n\n### Arbitrary Arguments (*args and **kwargs):\n- `*args`: Receives a tuple of positional arguments.\n- `**kwargs`: Receives a dictionary of keyword arguments.",tryItCode:`def award_achievement(player, badge_name, xp_reward=150):
    announcement = f"🎉 {player} unlocked '{badge_name}'! (+{xp_reward} XP)"
    return announcement

print(award_achievement("Affan Sayed", "Python Polyglot"))
print(award_achievement("Cyber Cadet", "First Tag Placed", xp_reward=50))`,codeType:"python",notes:"Variables created inside a function belong to the local scope of that function and cannot be accessed outside.",exercise:{question:"Which keyword is used to define a function in Python?",options:["function","def","func","define"],correct:1,hint:"Short for define: def."}},{id:"py_modules",category:"Python Advanced",title:"Python Modules & PIP Packages",summary:"Consider a module to be the same as a code library. A file containing a set of functions you want to include in your application.",eli5:{story:`Imagine you want to build a real robot! You don't need to smelt your own iron from rocks or invent lightbulbs from scratch; you just buy pre-made wheels and motors from the hobby shop. In Python, "import math" or "import random" is that hobby shop: millions of pre-made superpowers ready to use!`,analogy:"🛒 The Superpower Shop: import lets you borrow thousands of incredible tools built by engineers worldwide.",rules:["import math lets you calculate square roots and trigonometry.","from datetime import date gives you today's calendar date.","pip install package_name downloads new superpowers from the internet."]},body:`### Using Built-in Modules:
\`\`\`python
import math
print(math.sqrt(64)) # 8.0

import random
print(random.randint(1, 6)) # Dice roll
\`\`\`

### PIP Package Manager:
Install third-party packages from PyPI (Python Package Index):
\`\`\`bash
pip install requests django numpy
\`\`\``,tryItCode:`import math
import random

# Dice roll simulation
dice = random.randint(1, 6)
print(f"🎲 Rolled a {dice} on a 6-sided die!")

# Math calculation
radius = 5
circle_area = math.pi * math.pow(radius, 2)
print(f"Area of circle (r={radius}): {circle_area:.2f}")`,codeType:"python",tips:'Use "import math as m" to give a module a short convenient nickname in your code.',exercise:{question:"Which tool is the standard package installer for Python libraries?",options:["npm","pip","apt","composer"],correct:1,hint:"PIP installs packages."}},{id:"py_classes",category:"Python OOP",title:"Python Classes & Objects (OOP)",summary:"Python is an object oriented programming language. Almost everything in Python is an object, with its properties and methods.",eli5:{story:"Imagine you have an architectural drawing blueprint of a dream house with 3 bedrooms and a swimming pool. The blueprint is the Class. Every time a construction crew follows that blueprint in real life, they build a real house with real bricks that you can walk into! That real house is the Object.",analogy:"📐 The Architectural Blueprint: class House: is the paper plan; house1 = House() is the real physical building.",rules:["class ClassName: defines the blueprint.","def __init__(self, name): is the constructor that runs when an object is born.","self refers to the current individual instance."]},body:`### Creating a Class and Object:
\`\`\`python
class Hero:
    def __init__(self, name, track):
        self.name = name
        self.track = track
        self.xp = 0

    def add_xp(self, amount):
        self.xp += amount
        return f"{self.name} now has {self.xp} XP!"

hero1 = Hero("Affan Sayed", "Python & Django")
print(hero1.add_xp(500))
\`\`\``,tryItCode:`class ByteVersePlayer:
    def __init__(self, username, level=1):
        self.username = username
        self.level = level
        self.coins = 100

    def level_up(self):
        self.level += 1
        self.coins += 50
        return f"⚡ {self.username} leveled up to LVL {self.level}! (+50 coins)"

player1 = ByteVersePlayer("Affan Sayed", level=99)
print(f"Player: {player1.username} | Coins: {player1.coins}")
print(player1.level_up())`,codeType:"python",notes:"The self parameter is a reference to the current instance of the class, and is used to access variables that belong to the class.",exercise:{question:"Which method in a Python class is executed automatically when a new object is initialized?",options:["__start__()","__init__()","__create__()","__new__()"],correct:1,hint:"__init__(self)"}}],bm=[{id:"php_home",category:"PHP Tutorial",title:"PHP HOME",summary:"PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.",eli5:{story:"Imagine walking into a bakery restaurant! You sit at a table in the front (the browser). You see a menu and order a chocolate birthday cake with custom candles. The secret kitchen in the back is PHP! The chef bakes the fresh cake according to your order, puts it on a plate, and sends it out to your table! You never touch the kitchen oven; PHP does all the cooking safely behind closed doors.",analogy:"👨‍🍳 The Restaurant Kitchen Chef: PHP works on the server to cook up dynamic HTML web pages before sending them to your screen.",rules:["PHP code runs on the server computer, NOT in the browser.","Starts with <?php and ends with ?>.","Variables always start with a dollar sign $ (like $money or $order)."]},body:`PHP is an acronym for "PHP: Hypertext Preprocessor".
PHP is a widely-used, open source scripting language.
PHP scripts are executed on the server.
PHP powers over 75% of web servers, including WordPress and Wikipedia.`,tryItCode:`<!DOCTYPE html>
<html>
<body>

<?php
$chef = "Affan Sayed";
echo "Chef $chef is cooking your dynamic webpage on the server!";
?>

</body>
</html>`,codeType:"php",notes:'PHP files have a default file extension of ".php" and can contain text, HTML, CSS, JavaScript, and PHP code.',exercise:{question:"What does PHP stand for?",options:["PHP: Hypertext Preprocessor","Private Home Page","Personal Hypertext Processor","Programmed Hypertext Parser"],correct:0,hint:"It is a recursive acronym."},referenceTable:[{item:"echo",description:"Outputs one or more strings"},{item:"$variable",description:"Every PHP variable must begin with a dollar sign"},{item:"session_start()",description:"Starts or resumes a user session"}]},{id:"php_syntax",category:"PHP Tutorial",title:"PHP Syntax & Echo",summary:"A PHP script can be placed anywhere in the document. A PHP script starts with <?php and ends with ?>.",eli5:{story:'Imagine writing in a secret diary with invisible ink! Whenever you want the diary to speak out loud to the world, you shout: "echo Hello World!" In PHP, echo is the megaphone that shouts words onto the webpage for visitors to read.',analogy:'📢 The Megaphone: echo "Hello!" tells the server to shout words straight into the HTML page.',rules:["Open PHP with <?php and close with ?>.","Every single PHP statement must end with a semicolon ; !","echo is faster than print and can output text and HTML."]},body:'### Basic PHP Syntax:\n```php\n<?php\n// PHP code goes here\necho "Hello World!";\n?>\n```\n\n### Comments in PHP:\n- Single line: `// comment` or `# comment`\n- Multi-line: `/* comment */`\n\n### Case Sensitivity:\nIn PHP, keywords (e.g. `if`, `else`, `while`, `echo`), classes, and functions are NOT case-sensitive.\n**However**, all variable names ARE case-sensitive! (`$color` is different from `$Color`).',tryItCode:`<?php
// Comments help document your server code
echo "<h1>Welcome to Server-Side PHP!</h1>";
echo "<p>PHP generated this HTML heading on the server.</p>";

$color = "neon-blue";
$Color = "laser-green"; // Different variable!
echo "Color 1: $color | Color 2: $Color";
?>`,codeType:"php",tips:"If a file contains only PHP code, it is best practice to omit the closing ?> tag to avoid accidental whitespace issues.",exercise:{question:"Which PHP statement is commonly used to output text to the browser screen?",options:["print_screen","echo","out","display"],correct:1,hint:"Four letters: echo."}},{id:"php_variables",category:"PHP Fundamentals",title:"PHP Variables & String Concatenation",summary:"In PHP, a variable starts with the $ sign, followed by the name of the variable. Strings are joined with a dot (.) operator.",eli5:{story:"Have you ever played with toy money with dollar signs on it? In PHP, every single variable is super wealthy: they all wear a dollar sign necklace ($name, $score, $coins)! And to glue two words together, PHP uses a tiny dot (.) like a dab of craft glue!",analogy:"💵 The Dollar Sign Necklace: Every variable wears a $ badge; the dot (.) is craft glue joining words together.",rules:["Every variable name starts with $.",'Use the dot operator . to concatenate strings ($first . " " . $last).','Double quotes "$name" automatically expand variables inside!']},body:'### Rules for PHP Variables:\n- A variable starts with the `$` sign, followed by the name.\n- A variable name must start with a letter or underscore.\n- A variable name cannot start with a number.\n- Variable names are case-sensitive (`$age` and `$AGE` are two different variables).\n\n### String Concatenation:\nIn PHP, string concatenation uses the dot (`.`) operator, NOT the plus (`+`) sign:\n```php\n$greeting = "Hello " . $name . "!";\n```',tryItCode:`<?php
$heroName = "Affan Sayed";
$level = 42;
$rank = "Grandmaster";

// String concatenation using dot (.)
$announcement = "Hero: " . $heroName . " (Level " . $level . ") - " . $rank;
echo $announcement . "<br>";

// Double quotes variable expansion
echo "Welcome back, $heroName! Your rank is $rank.";
?>`,codeType:"php",notes:`In double quotes "...", variables are parsed and replaced with their values. In single quotes '...', text is printed literally as written.`,exercise:{question:"Which operator is used to concatenate two strings together in PHP?",options:["Plus (+)","Dot (.)","Ampersand (&)","Comma (,)"],correct:1,hint:"PHP uses the dot (.) character."}},{id:"php_conditionals",category:"PHP Fundamentals",title:"PHP If...Else & Loops",summary:"Conditional statements are used to perform different actions based on different conditions. Loops execute code repeatedly.",eli5:{story:'Imagine a bouncer at a cyber party door! The bouncer asks: "Do you have VIP pass ($vip == true)?" IF yes: "Enter the VIP lounge!" ELSE IF: "Are you over 18?" ELSE: "Sorry, please wait in line!" PHP checks conditions step-by-step just like that bouncer.',analogy:"🚪 The Club Bouncer: if / elseif / else lets PHP decide who gets in and who gets denied.",rules:["if (condition) { ... } elseif (condition) { ... } else { ... }.","foreach ($array as $item) loops over items easily.","switch ($track) handles multiple choices cleanly."]},body:`### The if...elseif...else Statement:
\`\`\`php
if ($score >= 90) {
  echo "Grade: A";
} elseif ($score >= 75) {
  echo "Grade: B";
} else {
  echo "Grade: C";
}
\`\`\`

### Foreach Loop (Great for Arrays):
\`\`\`php
$languages = ["HTML", "CSS", "JS", "PHP"];
foreach ($languages as $lang) {
  echo "Track: $lang <br>";
}
\`\`\``,tryItCode:`<?php
$playerScore = 88;

if ($playerScore >= 90) {
  echo "🏆 Rank: Master Architect!<br>";
} elseif ($playerScore >= 75) {
  echo "⭐ Rank: Senior Developer!<br>";
} else {
  echo "🌱 Rank: Cadet in Training!<br>";
}

echo "<br><strong>Enrolled Tracks:</strong><br>";
$tracks = ["HTML5", "CSS3", "JavaScript", "PHP 8.2"];
foreach ($tracks as $index => $track) {
  echo "#" . ($index + 1) . " " . $track . "<br>";
}
?>`,codeType:"php",tips:"Use the foreach loop for iterating over arrays in PHP. It prevents off-by-one errors common in regular for loops!",exercise:{question:"Which loop is specifically designed for iterating through elements in an array in PHP?",options:["while","do...while","foreach","repeat"],correct:2,hint:'It loops "for each" item.'}},{id:"php_arrays",category:"PHP Data Structures",title:"PHP Arrays: Indexed & Associative",summary:"An array stores multiple values in one single variable. PHP supports indexed, associative, and multidimensional arrays.",eli5:{story:'Imagine a row of mailboxes at an apartment building! An indexed mailbox has simple numbers: 0, 1, 2. But an associative mailbox has nameplates: ["boss" => "Affan", "designer" => "Sarah", "coder" => "Alex"]! Associative arrays let you look up people by their name instead of a number.',analogy:'📬 The Mailbox Nameplates: Indexed arrays use numbers (0, 1); Associative arrays use descriptive key names ("name" => "Affan").',rules:['Indexed array: $fruits = ["Apple", "Banana", "Orange"].','Associative array: $user = ["name" => "Affan", "role" => "Admin"].','Access associative items by key: $user["name"].']},body:`### 1. Indexed Arrays:
Arrays with a numeric index (starts at 0):
\`\`\`php
$cars = ["Tesla", "BMW", "Toyota"];
echo $cars[0]; // Tesla
\`\`\`

### 2. Associative Arrays:
Arrays that use named keys that you assign to them:
\`\`\`php
$developer = [
  "name" => "Affan Sayed",
  "project" => "ByteVerse",
  "rating" => 5.0
];
echo $developer["name"]; // Affan Sayed
\`\`\``,tryItCode:`<?php
// Associative array definition
$profile = [
  "username" => "Affan Sayed",
  "role" => "Lead Architect",
  "level" => 99,
  "status" => "Online"
];

echo "User: " . $profile["username"] . "<br>";
echo "Role: " . $profile["role"] . "<br>";
echo "Account Status: " . $profile["status"] . "<br>";

// Adding a new key
$profile["badges"] = 12;
echo "Unlocked Badges: " . $profile["badges"];
?>`,codeType:"php",notes:"The arrow operator => (double arrow) is used to assign values to keys in associative arrays.",exercise:{question:"Which operator is used to associate a key with a value in a PHP associative array?",options:["->","=>",":","="],correct:1,hint:'The "fat arrow": =>'}},{id:"php_functions",category:"PHP Functions",title:"PHP Custom Functions",summary:"A function is a block of statements that can be used repeatedly in a program. PHP has over 1,000 built-in functions, plus user-defined functions.",eli5:{story:`Imagine an automatic coffee machine with a red button labeled "Make Cappuccino"! Every time you press that button, the machine measures coffee beans, steams milk, pours it into a cup, and sprinkles cinnamon. You don't have to explain how to make cappuccino each time; you just call the function!`,analogy:"☕ The Coffee Machine: Define the steps once inside function makeCoffee(), then call it anytime you want a fresh cup.",rules:["function functionName($param) { return $result; }.","Function names are NOT case-sensitive in PHP.","Use type declarations like function add(int $a, int $b): int for bulletproof code."]},body:`### Creating a Function:
\`\`\`php
function calculateTax(float $subtotal, float $rate = 0.08): float {
  return $subtotal * $rate;
}

$tax = calculateTax(100.00); // 8.00
\`\`\`

### Default Parameter Values:
If you call a function without arguments, it uses the default value specified in the parameter definition.`,tryItCode:`<?php
// Custom calculation function with default argument
function calculateXP(int $gamesWon, int $bonusPerWin = 50): int {
  $base = $gamesWon * 100;
  return $base + ($gamesWon * $bonusPerWin);
}

$p1Score = calculateXP(3);      // Uses default 50 bonus
$p2Score = calculateXP(5, 100);  // Custom 100 bonus

echo "Player 1 XP (3 wins): $p1Score XP<br>";
echo "Player 2 XP (5 wins with super bonus): $p2Score XP";
?>`,codeType:"php",tips:"Use strict types by adding declare(strict_types=1); at the very top of your PHP script for enterprise-grade type safety.",exercise:{question:"Which keyword is used to declare a custom function in PHP?",options:["def","fun","function","fn"],correct:2,hint:"function myFunction() { ... }"}},{id:"php_forms",category:"PHP Forms",title:"PHP Form Handling & $_POST Security",summary:"The PHP superglobals $_GET and $_POST are used to collect form-data safely and securely.",eli5:{story:'When you mail a secret birthday invitation in a sealed envelope, nobody walking past can see what is written inside. That sealed envelope is an HTTP POST request! The PHP mail clerk receives the envelope, opens it, and reads your $_POST["guest_name"] safely.',analogy:"✉️ The Sealed Envelope: $_POST delivers your passwords and forms securely without showing them in the web address bar.",rules:["$_POST reads secret inputs from submitted forms.","htmlspecialchars() washes the input so naughty attackers can't inject viruses.","Never trust raw input without sanitizing it first!"]},body:`### The $_POST Method
Information sent from a form with the POST method is invisible to others (all names/values are embedded within the body of the HTTP request).

### The $_GET Method
Information sent from a form with the GET method is visible to everyone (all variable names and values are displayed in the URL query string: \`?name=value\`).`,tryItCode:`<?php
// Simulating incoming form submission
$_POST['username'] = "Affan Sayed";
$_POST['role'] = "Grandmaster Developer";

$name = htmlspecialchars($_POST['username']);
$role = htmlspecialchars($_POST['role']);

echo "Welcome " . $name . "!<br>";
echo "Your rank is: " . $role;
?>`,codeType:"php",tips:"Use POST when updating data, creating records, or submitting passwords.",exercise:{question:"Which PHP function converts special HTML characters to prevent XSS attacks?",options:["strip_tags()","htmlspecialchars()","clean_xss()","filter_html()"],correct:1,hint:"Converts < and > into safe entities."}},{id:"php_sessions_cookies",category:"PHP Advanced",title:"PHP Sessions & Cookies (User Login)",summary:"A session is a way to store information (in variables) to be used across multiple pages. Unlike a cookie, the information is not stored on the user's computer.",eli5:{story:'Imagine going to an amusement park! At the entrance gate, they strap a waterproof VIP wristband onto your wrist. Whenever you walk up to a roller coaster, the guard looks at your wristband and says: "Welcome VIP!" In PHP, that wristband is a Session: you log in once, and the server remembers you on every page you visit!',analogy:"🎟️ The VIP Wristband: session_start() gives the user a session token so the website remembers their login state across all pages.",rules:["Always call session_start() at the very top before any HTML output.",'Store session data in the superglobal array $_SESSION["user_id"] = 42.',"session_destroy() logs the user out and wipes the session."]},body:'### Working with PHP Sessions:\n1. **Start the session**: `session_start();` (must be the first thing in your document).\n2. **Set session variables**: `$_SESSION["favcolor"] = "green";`\n3. **Read session variables**: `echo $_SESSION["favcolor"];`\n4. **Destroy a session**: `session_unset(); session_destroy();`\n\n### Sessions vs Cookies:\n- **Sessions**: Stored securely on the server; client only holds a session cookie ID.\n- **Cookies**: Stored directly on the client machine via `setcookie()`.',tryItCode:`<?php
// Simulating PHP session management
$mockSession = [];

// Step 1: User logs in
$mockSession["user_id"] = 101;
$mockSession["username"] = "Affan Sayed";
$mockSession["logged_in_at"] = date("Y-m-d H:i:s");

// Step 2: Checking authentication state
if (isset($mockSession["user_id"])) {
  echo "✅ User is authenticated!<br>";
  echo "Welcome back, " . $mockSession["username"] . "!<br>";
  echo "Session Timestamp: " . $mockSession["logged_in_at"];
} else {
  echo "🔒 Please log in to view this page.";
}
?>`,codeType:"php",notes:"Session data is encrypted and cannot be tampered with by the user, making it ideal for authentication tokens and shopping carts.",exercise:{question:"Which function must be called before using or accessing $_SESSION variables in PHP?",options:["start_session()","session_start()","init_session()","session_begin()"],correct:1,hint:"session_start();"}},{id:"php_mysql_connect",category:"PHP Database",title:"PHP & MySQL Database Connection (PDO)",summary:"PHP 5 and later can work with a MySQL database using MySQLi extension or PDO (PHP Data Objects).",eli5:{story:'Imagine you are a detective with a walkie-talkie connecting you to a giant national archive vault! You push the button and say: "Please find record #77!" That walkie-talkie is PDO. It safely asks the database questions without letting spies tamper with the message!',analogy:"📻 The Encrypted Walkie-Talkie: PDO prepared statements protect your database against SQL injection attacks.",rules:["PDO works with 12 different database types (MySQL, PostgreSQL, SQLite, etc.).","Always use Prepared Statements to prevent SQL injection hacks.",'$stmt->execute(["id" => 1]) sends user input safely separated from the SQL code!']},body:`### Connecting with PDO (Best Practice):
\`\`\`php
try {
  $pdo = new PDO("mysql:host=localhost;dbname=byteverse", "root", "password");
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
  // Prepared Statement (100% Safe from SQL Injection)
  $stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
  $stmt->execute(['email' => $email]);
  $user = $stmt->fetch();
} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
\`\`\``,tryItCode:`<?php
// Simulating secure PDO Prepared Statement
$query = "SELECT username, role, xp FROM users WHERE id = :id";
$parameters = [":id" => 1];

echo "Prepared SQL Query: $query<br>";
echo "Safely bound parameter: :id => " . $parameters[":id"] . "<br><br>";
echo "Query Result (Mock Database):<br>";
echo "--------------------------------<br>";
echo "Affan Sayed | Grandmaster | 9999 XP";
?>`,codeType:"php",tips:"Never concatenate raw variables directly into SQL queries! Always use PDO prepared statements with bind parameters.",exercise:{question:"Why should you always use Prepared Statements when querying databases with PHP?",options:["Makes queries 10x faster","Prevents SQL Injection attacks","Saves disk space","Required by HTML"],correct:1,hint:"It isolates data from executable SQL commands."}},{id:"php_oop",category:"PHP Advanced",title:"PHP Object-Oriented Programming (Classes)",summary:"From PHP 5 onwards, PHP supports full Object-Oriented Programming (OOP) with classes, objects, inheritance, and access modifiers.",eli5:{story:"Imagine you have a plastic cookie cutter shaped like a star. The cookie cutter is the Class. Every time you press it into dough, you get a real edible star cookie! The star cookie is the Object. You can bake 100 cookies from that single cutter!",analogy:'⭐ The Cookie Cutter: A Class is the blueprint/cookie cutter; an Object is the real baked cookie created with "new Cookie()".',rules:["class Hero { public $name; } defines the blueprint.","$player = new Hero() bakes a real object from the class.","__construct() runs automatically when an object is born!"]},body:"### OOP Principles in PHP:\n- **Class**: Blueprint for objects.\n- **Object**: An instance of a class.\n- **Constructor**: `__construct()` initializes properties when an object is created.\n- **Access Modifiers**:\n  - `public`: Accessible from everywhere.\n  - `protected`: Accessible within class and child classes.\n  - `private`: Accessible ONLY inside the class itself.",tryItCode:`<?php
class Player {
  public $username;
  public $level;

  public function __construct($name, $lvl = 1) {
    $this->username = $name;
    $this->level = $lvl;
  }

  public function levelUp() {
    $this->level++;
    return $this->username . " reached Level " . $this->level . "! 🎉";
  }
}

$hero = new Player("Affan Sayed", 98);
echo "Player created: " . $hero->username . " (LVL " . $hero->level . ")<br>";
echo $hero->levelUp();
?>`,codeType:"php",notes:"OOP makes large codebases modular, reusable, testable, and clean.",exercise:{question:"Which special method in a PHP class is called automatically when an object is instantiated?",options:["__init__()","__construct()","__start()","__create()"],correct:1,hint:"Two underscores: __construct()"}}],vm=[{id:"dj_home",category:"Django Tutorial",title:"Django HOME",summary:"Django is a Python framework that makes it easier to build web applications. Django follows the MVT design pattern.",eli5:{story:"Imagine you want to build a giant theme park like Disneyland! You could build every roller coaster, ticket booth, snack stand, and security gate from zero scratch, or you could hire a world-famous master park team that already has pre-built roller coasters, security gates, and snack machines ready to turn on. Django is that master team for Python!",analogy:"🏰 The Disneyland Master Team: Django gives you login screens, admin dashboards, and database tools right out of the box so you don't have to reinvent the wheel.",rules:["Model: The toy warehouse storage (database).","View: The park worker who grabs toys from the warehouse.","Template: The beautiful display window shown to visitors."]},body:`Django is especially suited for database-driven websites, and it comes with lots of built-in features, like an admin interface, default database (SQLite), and user authentication.

### Why Django?
- Ridiculously fast development.
- Fully loaded (ORM, Admin, Auth, Security).
- Reassuringly secure (CSRF, SQL Injection, XSS protections built-in).
- Exceedingly scalable (used by Instagram, Spotify, Pinterest).`,tryItCode:`# Start a new Django project in terminal:
# django-admin startproject my_website
# cd my_website
# python manage.py runserver

print("Django development server started at http://127.0.0.1:8000/")`,codeType:"python",notes:"Django was named after the jazz guitarist Django Reinhardt.",exercise:{question:"Which architectural design pattern does Django follow?",options:["MVC (Model-View-Controller)","MVT (Model-View-Template)","Flux","MVVM"],correct:1,hint:"In Django, the Template acts as the view layer."},referenceTable:[{item:"django-admin",description:"Django's command-line utility for administrative tasks"},{item:"manage.py",description:"A command-line script created in each Django project"},{item:"makemigrations",description:"Creates new migrations based on the changes in models.py"},{item:"migrate",description:"Applies migrations to the database"}]},{id:"dj_project_app",category:"Django Architecture",title:"Django Projects vs Apps",summary:"What is the difference between a project and an app in Django? A project is a collection of configurations and apps. An app is a web application that does something.",eli5:{story:'Imagine a giant shopping mall called "Mega Mall" (the Project). Inside the mall, there is a shoe store, a candy shop, and a movie theater. Each of those individual stores is an App! You can unplug the candy shop and open another one in a different mall without breaking the building.',analogy:"🏬 The Shopping Mall: The Project is the whole mall building; Apps are independent stores inside (blog, store, auth).",rules:["django-admin startproject my_site creates the whole mall.","python manage.py startapp blog creates one specific store.","Always register new apps inside INSTALLED_APPS in settings.py!"]},body:"### Project vs App:\n- **Project**: The overall web application containing global configurations, database connections, and URLs (`settings.py`, `urls.py`).\n- **App**: A self-contained module that handles a single specific feature (e.g. `accounts`, `blog`, `store`).\n\n```bash\n# Create Project\ndjango-admin startproject config .\n\n# Create App\npython manage.py startapp arcade\n```",tryItCode:`# Structure of a Django App:
# arcade/
#   migrations/
#   __init__.py
#   admin.py       <- Admin dashboard models
#   apps.py        <- App config
#   models.py      <- Database tables
#   tests.py       <- Unit tests
#   views.py       <- Business logic

print("Django app initialized with modular MTV architecture.")`,codeType:"python",tips:"Keep apps small and focused on a single responsibility so they can be reused across different projects.",exercise:{question:"Where must newly created Django apps be registered to be recognized by the project?",options:["urls.py","INSTALLED_APPS in settings.py","manage.py","admin.py"],correct:1,hint:"INSTALLED_APPS list in settings.py."}},{id:"dj_urls",category:"Django Routing",title:"Django URLs & The Ticket Booth",summary:"A clean, elegant URL scheme is an important detail in a high-quality Web application. Django lets you design URLs however you want.",eli5:{story:'When visitors arrive at the theme park gate, there is a helpful Ticket Booth map with signs: "Rollercoaster this way!", "Ferris Wheel that way!", "Snack Bar over there!". In Django, urls.py is that Ticket Booth sign! When someone types /games/, it points them directly to the games view!',analogy:"🗺️ The Park Signpost: urls.py guides every visitor to the exact ride they are asking for.",rules:['path("about/", views.about) connects the link to the view.',"Path converters like <int:id> catch numbers (like quest #42).","urls.py is the very first file a web request visits!"]},body:`To route a view to a URL, create a file named \`urls.py\` in the same folder as the \`views.py\` file.

\`\`\`python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('members/', views.members, name='members'),
    path('quest/<int:pk>/', views.quest_detail, name='quest_detail'),
]
\`\`\``,tryItCode:`from django.urls import path

# Simulating urls.py routing configuration
urlpatterns = [
    path('quests/', lambda r: "Quest List", name='quest_list'),
    path('quests/<int:id>/', lambda r, id: f"Quest #{id}", name='quest_detail')
]

print(f"Loaded {len(urlpatterns)} URL routes into Django URLConf.")`,codeType:"python",tips:'Giving names to your URL patterns allows you to reverse-resolve them cleanly with {% url "name" %} in templates.',exercise:{question:"Which Django function is used to define an individual URL pattern in urls.py?",options:["route()","url()","path()","link()"],correct:2,hint:"path() was introduced in Django 2.0+."}},{id:"dj_views",category:"Django Views",title:"Django Views (The Head Chef)",summary:"A view function, or view for short, is a Python function that takes a Web request and returns a Web response.",eli5:{story:'Imagine the head chef in the restaurant! A waiter rushes into the kitchen with an order ticket: "Table 4 wants a pizza!" The chef grabs cheese and sauce, bakes the pizza, and sends it out on a tray. In Django, a View function receives the HTTP request, grabs data, and returns an HttpResponse or renders an HTML template!',analogy:"👨‍🍳 The Restaurant Chef: views.py takes incoming requests, talks to the database, and serves fresh web pages.",rules:["def my_view(request): always receives the request as its 1st argument.",'Must always return an HttpResponse or render(request, "template.html").','Can pass a context dictionary {"hero": "Affan"} to the template.']},body:`### Writing a View Function:
\`\`\`python
from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    context = {
        'title': 'ByteVerse Academy',
        'developer': 'Affan Sayed'
    }
    return render(request, 'home.html', context)
\`\`\``,tryItCode:`# Simulating Django View execution
def arcade_hub_view(request):
    games = ["HTML Tag Fortress", "CSS Style Forge", "JS Bug Hunter"]
    context = {"player": request.get("user", "Affan Sayed"), "games": games}
    return f"Rendered view for {context['player']} with {len(games)} arcade games."

mock_request = {"user": "Affan Sayed"}
print(arcade_hub_view(mock_request))`,codeType:"python",notes:"Class-Based Views (CBVs) like ListView and DetailView provide reusable object-oriented patterns for common CRUD operations.",exercise:{question:"What is the required first argument of any Django view function?",options:["response","request","self","context"],correct:1,hint:"def my_view(request):"}},{id:"dj_templates",category:"Django Templates",title:"Django Templates (DTL)",summary:"Django template language (DTL) is Django's built-in templating system for rendering dynamic HTML.",eli5:{story:'Imagine a Mad Libs storybook with blank lines: "Once upon a time, [HERO_NAME] went to [PLANET] and fought [NUMBER] dragons!" Django Templates are that Mad Libs page: you write normal HTML, and use double curly brackets {{ hero_name }} to slip in dynamic Python variables!',analogy:"📝 The Mad Libs Storybook: HTML is the story with blanks; Django fills the blanks with live database values.",rules:["{{ variable }} outputs a variable value on the screen.","{% for game in games %} loops over lists in HTML.","{% if user.is_authenticated %} shows secret content only to logged in users!"]},body:'### DTL Syntax:\n- **Variables**: `{{ player.name }}`\n- **Tags**: `{% if %}`, `{% for %}`, `{% block %}`, `{% extends %}`\n- **Filters**: `{{ name|lower }}`, `{{ date|date:"M d, Y" }}`, `{{ title|truncatewords:5 }}`\n\n### Template Inheritance:\nUse `{% extends "base.html" %}` and `{% block content %}` so you don\'t repeat headers and footers across every HTML file!',tryItCode:`# Django Template Language Example:
template_string = """
{% extends 'base.html' %}
{% block content %}
  <h1>Welcome {{ player_name }}!</h1>
  <ul>
  {% for game in games %}
    <li>{{ game|upper }}</li>
  {% endfor %}
  </ul>
{% endblock %}
"""
print("DTL Template inheritance defined successfully.")`,codeType:"python",tips:"Template inheritance with base.html saves hours of work: change your navbar once in base.html, and every page updates!",exercise:{question:"Which DTL syntax is used to print the value of a variable in an HTML template?",options:["{% variable %}","{{ variable }}","<% variable %>","${variable}"],correct:1,hint:"Double curly braces: {{ variable }}."}},{id:"dj_models",category:"Django ORM",title:"Django Models & The ORM",summary:"A model is the single, definitive source of information about your data. It contains the essential fields and behaviors of the data you're storing.",eli5:{story:"Have you ever filled out an application form for a secret spy agency? The form asks for: Name (Text), Spy Rank (Number), Secret Agent Active? (Checkbox Yes/No). In Django, models.py is that application form: it describes what a spy looks like, and the Django ORM creates the SQL database table automatically without you writing raw SQL!",analogy:"📋 The Spy Application Form: Python classes in models.py automatically turn into database tables.",rules:["class Player(models.Model): creates a database table.","models.CharField(max_length=100) is for text; models.IntegerField() is for numbers.","Django ORM lets you query with Player.objects.filter(level__gte=10)!"]},body:`### Defining a Model:
\`\`\`python
from django.db import models

class Quest(models.Model):
    title = models.CharField(max_length=200)
    reward_xp = models.IntegerField(default=100)
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
\`\`\`

### Querying with Django ORM:
- \`Quest.objects.all()\`: Fetch all records.
- \`Quest.objects.filter(is_completed=True)\`: Filter rows.
- \`Quest.objects.get(id=1)\`: Fetch single record.`,tryItCode:`# Simulating Django Model definition
class MockQuest:
    def __init__(self, title, xp):
        self.title = title
        self.xp = xp

quest = MockQuest("Master Python & Django", 1000)
print(f"Model Instance: {quest.title} | Reward: {quest.xp} XP")`,codeType:"python",notes:"The __str__() method in a model tells Django what to display when representing an object in the Admin site.",exercise:{question:"What command generates SQL migration files from your Python models?",options:["python manage.py makemigrations","python manage.py migrate","python manage.py buildmodels","django-admin make"],correct:0,hint:"makemigrations creates the migration files."}},{id:"dj_migrations",category:"Django ORM",title:"Django Migrations",summary:"Migrations are Django's way of propagating changes you make to your models (adding a field, deleting a model, etc.) into your database schema.",eli5:{story:'Imagine you built a treehouse. Later, you decide: "I want to add a rope ladder and a lookout telescope!" Migrations are the blueprint updates you hand to the carpenter so they know how to add the new ladder to your existing treehouse without tearing the whole tree down!',analogy:"🔨 The Blueprint Update: Migrations evolve your database step-by-step as your website grows.",rules:["Step 1: Edit models.py (e.g. add new score field).",'Step 2: Run "python manage.py makemigrations" (prepares the blueprint).','Step 3: Run "python manage.py migrate" (applies the changes to the live database)!']},body:"### The 2-Step Migration Workflow:\n1. **makemigrations**: Inspects `models.py` and writes a python migration file in `app/migrations/`.\n```bash\npython manage.py makemigrations\n```\n\n2. **migrate**: Executes the generated SQL migrations against your active database.\n```bash\npython manage.py migrate\n```\n\n### Inspecting Generated SQL:\nUse `sqlmigrate` to see the raw SQL Django will run:\n```bash\npython manage.py sqlmigrate arcade 0001\n```",tryItCode:`# The 2-step migration ritual:
steps = [
    "1. Edit models.py to add a new column",
    "2. python manage.py makemigrations (generate blueprint)",
    "3. python manage.py migrate (apply to database)"
]
for s in steps:
    print(s)`,codeType:"python",tips:"Always check in migration files to Git version control so your production server and team members have the exact same database schema.",exercise:{question:"Which command applies pending migrations to the database in Django?",options:["python manage.py makemigrations","python manage.py migrate","python manage.py run_sql","django-admin db_push"],correct:1,hint:"python manage.py migrate"}},{id:"dj_admin",category:"Django Admin",title:"Django Admin Dashboard",summary:"One of the most powerful parts of Django is the automatic admin interface. It reads metadata from your models to provide a quick, model-centric interface.",eli5:{story:"Imagine you are the captain of a starship! You have a high-tech control room with screens where you can see all crew members, adjust shield power, ban invaders, and give medals with the push of a button. Django builds that entire Captain's Control Room for you in 30 seconds!",analogy:"🛸 The Starship Control Room: Django Admin is a fully-featured, secure CRUD dashboard built automatically.",rules:['Run "python manage.py createsuperuser" to create your captain account.',"Register models in admin.py using admin.site.register(MyModel).","Visit /admin in your browser to log in and manage your database visually!"]},body:`### Setting up Django Admin:
1. **Create Superuser**:
\`\`\`bash
python manage.py createsuperuser
\`\`\`

2. **Register Models in \`admin.py\`**:
\`\`\`python
from django.contrib import admin
from .models import Quest

@admin.register(Quest)
class QuestAdmin(admin.ModelAdmin):
    list_display = ('title', 'reward_xp', 'is_completed')
    list_filter = ('is_completed',)
    search_fields = ('title',)
\`\`\``,tryItCode:`# Simulating admin.py registration
admin_config = {
    "model": "Quest",
    "list_display": ["title", "reward_xp", "is_completed"],
    "search_fields": ["title"]
}
print(f"Registered {admin_config['model']} with search on {admin_config['search_fields']}")`,codeType:"python",notes:"Django Admin is meant for staff and site administrators, not for general public visitors.",exercise:{question:"Which CLI command creates an administrator user for the Django admin panel?",options:["python manage.py add_admin","python manage.py createsuperuser","django-admin new_root","python manage.py user --admin"],correct:1,hint:"createsuperuser"}},{id:"dj_forms",category:"Django Forms",title:"Django Forms & CSRF Security",summary:"Django handles form rendering, data validation, and CSRF protection automatically.",eli5:{story:`Have you ever had a secret password or handshake with your best friend? When a stranger tries to pretend to be you, your friend says: "What's the secret handshake?" If they don't know it, they get locked out! That secret handshake in Django is the {% csrf_token %}: it blocks evil hacker robots from submitting fake forms!`,analogy:"🤝 The Secret Handshake: {% csrf_token %} verifies that incoming form submissions really came from your website.",rules:["Always put {% csrf_token %} inside every POST form.","forms.ModelForm automatically builds HTML inputs from your database models.","form.is_valid() checks that emails, numbers, and required fields are clean!"]},body:`### Using ModelForm:
\`\`\`python
from django import forms
from .models import Player

class PlayerForm(forms.ModelForm):
    class Meta:
        model = Player
        fields = ['username', 'track', 'level']
\`\`\`

### In the HTML Template:
\`\`\`html
<form method="POST">
  {% csrf_token %}
  {{ form.as_p }}
  <button type="submit">Save Hero</button>
</form>
\`\`\``,tryItCode:`# Simulating Form Validation in Django View:
form_data = {"username": "Affan Sayed", "track": "Python", "level": "99"}
if form_data.get("username") and form_data.get("level").isdigit():
    print("✅ Form is valid! Player record saved safely with CSRF protection.")
else:
    print("❌ Invalid form data.")`,codeType:"python",tips:'If you ever get a "403 Forbidden - CSRF verification failed" error, check that you included {% csrf_token %} inside the <form> tags!',exercise:{question:"Which template tag must be included inside every POST form in Django for security?",options:["{% secure_form %}","{% csrf_token %}","{% auth %}","{% token %}"],correct:1,hint:"Cross-Site Request Forgery token: {% csrf_token %}"}},{id:"dj_auth",category:"Django Auth",title:"Django Authentication & User Sessions",summary:"Django comes with a full user authentication system. It handles user accounts, groups, permissions, and cookie-based user sessions.",eli5:{story:'Imagine walking into a superhero headquarters! The scanner at the door reads your eye retina. If you are a certified hero, the vault doors slide open and say: "Welcome back, Captain!" If you are a villain, alarms blare! Django Auth is that retina scanner: login, logout, password encryption, and permissions are already built for you.',analogy:"🛡️ The Headquarters Scanner: Django Auth securely hashes passwords with PBKDF2 so even database admins cannot see raw passwords.",rules:["Use @login_required decorator to lock secret views behind login.","Passwords are automatically encrypted with PBKDF2 SHA-256.","request.user gives you the currently logged-in user everywhere!"]},body:`### Protecting Views with @login_required:
\`\`\`python
from django.contrib.auth.decorators import login_required
from django.shortcuts import render

@login_required
def secret_vault(request):
    return render(request, 'vault.html', {'user': request.user})
\`\`\`

### Authentication Functions:
- \`authenticate(username=u, password=p)\`: Verifies credentials.
- \`login(request, user)\`: Starts a user session.
- \`logout(request)\`: Terminates user session.`,tryItCode:`from datetime import datetime

# Simulating Django user authentication session
user = {
    "username": "Affan Sayed",
    "is_authenticated": True,
    "is_staff": True,
    "last_login": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
}

if user["is_authenticated"]:
    print(f"🔒 Access Granted to ByteVerse Secret Chamber for {user['username']}!")
    print(f"Staff Permissions: {user['is_staff']} | Active Session: {user['last_login']}")`,codeType:"python",notes:"Django never stores raw passwords in the database; it uses salted one-way password hashes with thousands of hashing rounds.",exercise:{question:"Which decorator is used to restrict a Django view to authenticated users only?",options:["@authenticated","@login_required","@protect","@auth_only"],correct:1,hint:"@login_required"}}],ai={html:mm,css:fm,js:gm,mysql:ym,python:xm,php:bm,django:vm},wm=()=>{const{addXP:w}=mt(),[x,u]=U.useState("html"),[M,j]=U.useState("html_home"),[V,g]=U.useState(!1),[k,P]=U.useState(""),[W,L]=U.useState(!1),[O,_]=U.useState(""),[X,q]=U.useState(null),[ee,z]=U.useState(!1),[H,T]=U.useState(null),[I,D]=U.useState(null),[le,ue]=U.useState([]),te=ai[x]||ai.html,we=te.findIndex(v=>v.id===M),ye=we>=0?we:0,re=te[ye],[qe,Fe]=U.useState(null);re&&re.id!==qe&&(_(re.tryItCode),q(null),T(null),D(null),Fe(re.id)),U.useEffect(()=>(typeof window<"u"&&"speechSynthesis"in window&&(window.speechSynthesis.cancel(),L(!1)),()=>{typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis.cancel()}),[re==null?void 0:re.id]);const Te=v=>{if(typeof window>"u"||!("speechSynthesis"in window)){alert("Text-to-speech is supported in all modern browsers like Chrome, Edge, Safari.");return}if(W)window.speechSynthesis.cancel(),L(!1);else{window.speechSynthesis.cancel();const S=new SpeechSynthesisUtterance(v);S.rate=.92,S.pitch=1.05,S.onend=()=>L(!1),S.onerror=()=>L(!1),L(!0),window.speechSynthesis.speak(S)}},De=v=>{G.playClick(),u(v);const S=ai[v]||[];S.length>0&&j(S[0].id),P(""),q(null)},Oe=v=>{G.playClick(),j(v),g(!1),window.scrollTo({top:0,behavior:"smooth"})},_e=()=>{ye>0&&(G.playClick(),j(te[ye-1].id),window.scrollTo({top:0,behavior:"smooth"}))},be=()=>{ye<te.length-1&&(G.playClick(),j(te[ye+1].id),window.scrollTo({top:0,behavior:"smooth"}))},B=()=>{G.playCorrect();const v=re.codeType;if(v==="html")q({type:"html",content:O});else if(v==="js")try{let S=[];const R=console.log;console.log=(...$)=>{S.push($.map(F=>typeof F=="object"?JSON.stringify(F):String(F)).join(" "))},new Function(O)(),console.log=R,q({type:"text",content:S.length?S.join(`
`):"Code executed with 0 runtime errors."})}catch(S){q({type:"error",content:S.message})}else q(v==="sql"?{type:"text",content:`Query Result Set (3 rows returned in 0.002s):
-------------------------------------------------
| CustomerID | CustomerName    | City    | Country |
| 1          | Alfreds Futter  | Berlin  | Germany |
| 2          | Ana Trujillo    | México  | Mexico  |
| 3          | Antonio Moreno  | México  | Mexico  |
-------------------------------------------------`}:{type:"text",content:`[${v.toUpperCase()} Runtime]:
Execution successful.
Output generated with exit code 0.`})},se=()=>{G.playClick(),navigator.clipboard.writeText(O),z(!0),setTimeout(()=>z(!1),2e3)},c=v=>{G.playClick(),T(v),re.exercise&&(v===re.exercise.correct?(G.playCorrect(),D("correct"),le.includes(re.id)||(ue(S=>[...S,re.id]),w(30))):(G.playError(),D("wrong")))},l=te.filter(v=>v.title.toLowerCase().includes(k.toLowerCase())||v.summary.toLowerCase().includes(k.toLowerCase())),f=[...new Set(l.map(v=>v.category))];return s.jsxs("div",{className:"space-y-4 pb-16 md:pb-6",children:[s.jsxs("div",{className:"rounded-2xl glass-panel border border-emerald-500/20 bg-slate-950 p-2 sm:p-2.5 shadow-xl flex items-center justify-between gap-2 overflow-x-auto touch-scroll",children:[s.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2",children:[s.jsx("button",{onClick:()=>g(!V),className:"md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white",title:"Toggle Lessons Menu",children:V?s.jsx(oa,{size:18}):s.jsx(Kh,{size:18})}),s.jsxs("div",{className:"hidden sm:flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 font-mono text-xs font-bold",children:[s.jsx(ui,{size:14}),s.jsx("span",{children:"W3-ACADEMY"})]})]}),s.jsx("div",{className:"flex items-center gap-1 sm:gap-1.5",children:bu.map(v=>{const S=x===v.id;return s.jsx("button",{onClick:()=>De(v.id),className:`px-3 py-1.5 rounded-xl font-mono text-xs font-bold uppercase transition-all whitespace-nowrap ${S?"bg-emerald-500 text-slate-950 shadow-[0_0_12px_rgba(16,185,129,0.5)] font-black":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:v.name},v.id)})})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-6 items-start",children:[s.jsxs("aside",{className:`
          fixed md:relative inset-y-0 left-0 z-40 md:z-auto w-72 md:w-full md:col-span-3 lg:col-span-3
          glass-panel bg-slate-950 md:bg-slate-950/80 border border-slate-800 rounded-none md:rounded-2xl p-4
          transition-transform duration-300 overflow-y-auto touch-scroll max-h-[85vh]
          ${V?"translate-x-0 shadow-2xl":"-translate-x-full md:translate-x-0"}
        `,children:[s.jsxs("div",{className:"md:hidden flex items-center justify-between pb-3 mb-3 border-b border-slate-800",children:[s.jsx("span",{className:"font-bold text-sm text-white",children:"Select Topic"}),s.jsx("button",{onClick:()=>g(!1),className:"text-slate-400",children:s.jsx(oa,{size:18})})]}),s.jsxs("div",{className:"relative mb-4",children:[s.jsx(nu,{size:14,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"}),s.jsx("input",{type:"text",value:k,onChange:v=>P(v.target.value),placeholder:"Filter topics...",className:"w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-emerald-400 placeholder:text-slate-500"})]}),s.jsx("div",{className:"space-y-4",children:f.map((v,S)=>s.jsxs("div",{className:"space-y-1",children:[s.jsx("div",{className:"text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider px-2 py-1",children:v}),s.jsx("div",{className:"space-y-0.5",children:l.filter(R=>R.category===v).map(R=>{const $=R.id===re.id,F=le.includes(R.id);return s.jsxs("button",{onClick:()=>Oe(R.id),className:`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${$?"bg-emerald-500/20 text-emerald-300 font-bold border-l-4 border-emerald-400 shadow-sm":"text-slate-300 hover:text-white hover:bg-slate-900/60"}`,children:[s.jsx("span",{className:"truncate",children:R.title}),F&&s.jsx(_t,{size:13,className:"text-emerald-400 shrink-0 ml-1"})]},R.id)})})]},S))})]}),s.jsxs("main",{className:"md:col-span-9 lg:col-span-9 space-y-6",children:[s.jsxs("div",{className:"glass-panel p-3 rounded-2xl border border-slate-800 flex items-center justify-between gap-2",children:[s.jsxs("button",{onClick:_e,disabled:ye===0,className:`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${ye>0?"bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm active:scale-95":"bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800"}`,children:[s.jsx(ud,{size:16}),s.jsx("span",{children:"< Previous"})]}),s.jsxs("span",{className:"text-xs font-mono text-slate-400",children:[ye+1," / ",te.length]}),s.jsxs("button",{onClick:be,disabled:ye===te.length-1,className:`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${ye<te.length-1?"bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm active:scale-95":"bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800"}`,children:[s.jsx("span",{children:"Next >"}),s.jsx(li,{size:16})]})]}),s.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-3",children:[s.jsx("div",{className:"text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider",children:re.category}),s.jsx("h1",{className:"text-2xl sm:text-3xl font-black text-white tracking-tight",children:re.title}),s.jsx("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed font-sans",children:re.summary})]}),re.eli5&&s.jsxs("div",{className:"glass-panel p-6 sm:p-7 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-950/20 via-slate-900/90 to-slate-950 shadow-xl space-y-4",children:[s.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-amber-500/20",children:[s.jsxs("span",{className:"text-xs font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-2",children:[s.jsx("span",{className:"text-lg",children:"👶"}),s.jsx("span",{children:"Explain Like I'm 5 (Super Simple Concept)"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("button",{onClick:()=>{var S,R,$;const v=`${re.title}. Story: ${re.eli5.story}. Analogy: ${re.eli5.analogy||""}. Rule 1: ${((S=re.eli5.rules)==null?void 0:S[0])||""}. Rule 2: ${((R=re.eli5.rules)==null?void 0:R[1])||""}. Rule 3: ${(($=re.eli5.rules)==null?void 0:$[2])||""}`;Te(v)},className:`px-3 py-1.5 rounded-full text-xs font-bold font-mono flex items-center gap-1.5 transition-all active:scale-95 shadow-md ${W?"bg-rose-500 text-white animate-pulse":"bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40"}`,title:"Click to have this explanation read aloud",children:[W?s.jsx(fu,{size:14}):s.jsx(hu,{size:14}),s.jsx("span",{children:W?"Stop Reading":"🔊 Read Aloud for Kids"})]}),s.jsx("span",{className:"text-[11px] text-amber-300/80 font-mono font-semibold bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30",children:"Easy Story Mode"})]})]}),s.jsxs("div",{className:"text-sm text-slate-200 leading-relaxed font-sans bg-slate-900/60 p-4 rounded-2xl border border-slate-800",children:[s.jsx("p",{className:"font-medium text-amber-200/90 text-xs font-mono uppercase mb-1",children:"📖 The Fun Story:"}),re.eli5.story]}),re.eli5.analogy&&s.jsx("div",{className:"p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-300 font-semibold flex items-center gap-2.5",children:s.jsx("span",{children:re.eli5.analogy})}),re.eli5.rules&&s.jsxs("div",{className:"space-y-1.5 pt-1",children:[s.jsx("span",{className:"text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider block",children:"3 Simple Rules Anyone Can Remember:"}),s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2",children:re.eli5.rules.map((v,S)=>s.jsxs("div",{className:"p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2",children:[s.jsxs("span",{className:"text-amber-400 font-bold font-mono",children:["#",S+1]}),s.jsx("span",{children:v})]},S))})]})]}),s.jsxs("div",{className:"rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl space-y-0",children:[s.jsxs("div",{className:"bg-slate-900 px-5 py-3 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2",children:[s.jsxs("span",{className:"text-xs font-bold text-white font-mono flex items-center gap-2",children:[s.jsx(ar,{size:16,className:"text-emerald-400"}),s.jsxs("span",{children:["Example: ",re.title]})]}),s.jsxs("button",{onClick:se,className:"px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1",children:[ee?s.jsx($h,{size:13,className:"text-emerald-400"}):s.jsx(qh,{size:13}),s.jsx("span",{children:ee?"Copied":"Copy Code"})]})]}),s.jsxs("div",{className:"p-4 sm:p-5 bg-slate-950",children:[s.jsx("textarea",{value:O,onChange:v=>_(v.target.value),className:"w-full h-44 sm:h-52 p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-300 font-mono text-xs focus:outline-none focus:border-emerald-400 leading-relaxed resize-y",spellCheck:"false"}),s.jsxs("div",{className:"mt-3 flex items-center justify-between flex-wrap gap-2",children:[s.jsxs("button",{onClick:B,className:"px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2 transition-transform active:scale-95",children:[s.jsx(Vt,{size:15,className:"fill-current"}),s.jsx("span",{children:"Try it Yourself »"})]}),s.jsx("span",{className:"text-[11px] text-slate-500 font-mono",children:"Edit code above and click to test"})]})]}),X&&s.jsxs("div",{className:"border-t border-slate-800 p-4 sm:p-5 bg-slate-900/90 font-mono text-xs animate-fadeIn",children:[s.jsxs("div",{className:"text-[11px] font-bold text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-1.5",children:[s.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-ping"}),s.jsx("span",{children:"Live Result / Preview:"})]}),X.type==="html"?s.jsx("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 text-white min-h-[140px]",dangerouslySetInnerHTML:{__html:X.content}}):s.jsx("pre",{className:`p-3.5 rounded-xl bg-slate-950 border border-slate-800 whitespace-pre-wrap ${X.type==="error"?"text-rose-400":"text-emerald-300"}`,children:X.content})]})]}),s.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4",children:[s.jsx("div",{className:"text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-line",children:re.body}),re.tips&&s.jsxs("div",{className:"p-4 rounded-2xl bg-amber-500/10 border-l-4 border-amber-400 text-amber-200 text-xs sm:text-sm flex items-start gap-3",children:[s.jsx(ia,{size:20,className:"shrink-0 text-amber-400 mt-0.5"}),s.jsxs("div",{children:[s.jsx("strong",{className:"block text-amber-300 font-bold mb-0.5",children:"Tip:"}),s.jsx("span",{children:re.tips})]})]}),re.notes&&s.jsxs("div",{className:"p-4 rounded-2xl bg-cyan-500/10 border-l-4 border-cyan-400 text-cyan-200 text-xs sm:text-sm flex items-start gap-3",children:[s.jsx(Jh,{size:20,className:"shrink-0 text-cyan-400 mt-0.5"}),s.jsxs("div",{children:[s.jsx("strong",{className:"block text-cyan-300 font-bold mb-0.5",children:"Note:"}),s.jsx("span",{children:re.notes})]})]})]}),re.referenceTable&&s.jsxs("div",{className:"glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-3",children:[s.jsxs("h3",{className:"text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2",children:[s.jsx(Vh,{size:16,className:"text-emerald-400"}),s.jsx("span",{children:"Reference Guide"})]}),s.jsx("div",{className:"overflow-x-auto touch-scroll",children:s.jsxs("table",{className:"w-full text-left font-mono text-xs border-collapse",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"border-b border-slate-800 text-slate-400",children:[s.jsx("th",{className:"p-2.5",children:"Syntax / Element"}),s.jsx("th",{className:"p-2.5",children:"Description"})]})}),s.jsx("tbody",{className:"divide-y divide-slate-800/60",children:re.referenceTable.map((v,S)=>s.jsxs("tr",{className:"hover:bg-slate-900/60",children:[s.jsx("td",{className:"p-2.5 text-emerald-300 font-bold",children:v.item}),s.jsx("td",{className:"p-2.5 text-slate-300 font-sans",children:v.description})]},S))})]})})]}),re.exercise&&s.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-slate-900 to-slate-950 space-y-4",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[s.jsx(Wh,{size:18,className:"text-emerald-400"}),s.jsx("span",{children:"Test Yourself With Exercises!"})]}),s.jsx("span",{className:"text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold",children:"+30 XP"})]}),s.jsx("p",{className:"text-xs sm:text-sm font-semibold text-slate-200",children:re.exercise.question}),s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:re.exercise.options.map((v,S)=>{const R=H===S;return s.jsxs("button",{onClick:()=>c(S),className:`text-left p-3 rounded-xl border text-xs font-mono transition-all flex items-center justify-between ${R&&I==="correct"?"bg-emerald-500/20 border-emerald-400 text-emerald-200":R&&I==="wrong"?"bg-rose-500/20 border-rose-400 text-rose-200":"bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700"}`,children:[s.jsx("span",{children:v}),s.jsx("span",{className:"text-[10px] text-slate-500 ml-2",children:String.fromCharCode(65+S)})]},S)})}),I==="correct"&&s.jsxs("div",{className:"p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-fadeIn",children:[s.jsx(_t,{size:16}),s.jsx("span",{children:"Correct Answer! You earned +30 XP!"})]}),I==="wrong"&&s.jsx("div",{className:"p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-semibold flex items-center gap-2 animate-fadeIn",children:s.jsxs("span",{children:["Incorrect. Hint: ",re.exercise.hint]})})]}),s.jsxs("div",{className:"glass-panel p-3 rounded-2xl border border-slate-800 flex items-center justify-between gap-2",children:[s.jsxs("button",{onClick:_e,disabled:ye===0,className:`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${ye>0?"bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm active:scale-95":"bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800"}`,children:[s.jsx(ud,{size:16}),s.jsx("span",{children:"< Previous"})]}),s.jsxs("button",{onClick:be,disabled:ye===te.length-1,className:`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${ye<te.length-1?"bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm active:scale-95":"bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800"}`,children:[s.jsx("span",{children:"Next >"}),s.jsx(li,{size:16})]})]})]})]})]})},oi=[{id:1,category:"HTML & CSS",question:"Which CSS property is used to change the text color?",options:["color","font-color","text-color","foreground"],correctIndex:0,timeLimit:12},{id:2,category:"JavaScript",question:"What is the output of `typeof null` in JavaScript?",options:['"object"','"null"','"undefined"','"number"'],correctIndex:0,timeLimit:12},{id:3,category:"Python",question:"Which method adds an element to the end of a Python list?",options:["append()","push()","add()","insert_last()"],correctIndex:0,timeLimit:12},{id:4,category:"MySQL",question:"Which SQL clause is used to eliminate duplicate rows from results?",options:["DISTINCT","UNIQUE","DIFFERENT","FILTER_DUP"],correctIndex:0,timeLimit:12},{id:5,category:"PHP",question:"Which superglobal holds information about headers, paths, and script locations?",options:["$_SERVER","$_ENV","$_GLOBALS","$_REQUEST"],correctIndex:0,timeLimit:12},{id:6,category:"Django",question:`What does the "T" stand for in Django's MTV architectural pattern?`,options:["Template","Table","Test","Token"],correctIndex:0,timeLimit:12},{id:7,category:"HTML & CSS",question:"Which HTML5 element represents self-contained content like a blog post or tweet?",options:["<article>","<section>","<aside>","<container>"],correctIndex:0,timeLimit:12},{id:8,category:"JavaScript",question:"Which array method checks if at least one item satisfies a condition?",options:["some()","every()","includes()","find()"],correctIndex:0,timeLimit:12},{id:9,category:"Python",question:"How do you create a tuple with a single element in Python?",options:["(42,)","(42)","[42]","{42}"],correctIndex:0,timeLimit:12},{id:10,category:"MySQL",question:"Which SQL keyword joins two queries together and keeps only unique rows?",options:["UNION","COMBINE","JOIN ALL","CONCAT"],correctIndex:0,timeLimit:12}],km=()=>{const{addXP:w,unlockAchievement:x,triggerConfetti:u}=mt(),[M,j]=U.useState(!1),[V,g]=U.useState(0),[k,P]=U.useState(0),[W,L]=U.useState(0),[O,_]=U.useState(null),[X,q]=U.useState(!1),[ee,z]=U.useState(12),H=oi[V];U.useEffect(()=>{let ue;return M&&!O&&!X&&ee>0?ue=setInterval(()=>{z(te=>te-1)},1e3):ee===0&&!O&&(G.playError(),_("timeup")),()=>clearInterval(ue)},[M,O,X,ee]);const T=()=>{G.playStreak(),j(!0),g(0),P(0),L(0),_(null),q(!1),z(12),x("duelist")},I=ue=>{O||X||(ue===H.correctIndex?(G.playCorrect(),P(te=>te+100),_("p1")):(G.playError(),P(te=>Math.max(0,te-25))))},D=ue=>{O||X||(ue===H.correctIndex?(G.playCorrect(),L(te=>te+100),_("p2")):(G.playError(),L(te=>Math.max(0,te-25))))},le=()=>{G.playClick(),V+1<oi.length?(g(ue=>ue+1),_(null),z(12)):(G.playLevelUp(),u(),q(!0),w(150))};return s.jsxs("div",{className:"space-y-6 sm:space-y-8 pb-16 md:pb-6",children:[s.jsx("div",{className:"rounded-2xl sm:rounded-3xl glass-panel p-5 sm:p-8 border border-pink-500/20 bg-gradient-to-br from-slate-900 via-slate-900/90 to-pink-950/30 shadow-2xl",children:s.jsxs("div",{className:"max-w-3xl",children:[s.jsxs("div",{className:"inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-[11px] sm:text-xs font-mono font-semibold mb-2.5",children:[s.jsx(gi,{size:13}),s.jsx("span",{children:"BYTEVERSE CO-OP & DUEL ARENA"})]}),s.jsxs("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight",children:["Learn & Play Together. ",s.jsx("br",{className:"hidden sm:inline"}),s.jsx("span",{className:"bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent",children:"2-Player Code Duel on Any Device."})]}),s.jsx("p",{className:"text-xs sm:text-sm lg:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed",children:"Challenge a friend on the same tablet, iPad, phone, or laptop! Race to answer code trivia and bug fixes across all 7 languages."})]})}),!M&&!X&&s.jsxs("div",{className:"glass-panel p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-800 text-center max-w-xl mx-auto space-y-5",children:[s.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-br from-pink-500 to-cyan-500 p-0.5 shadow-[0_0_30px_rgba(236,72,153,0.3)]",children:s.jsx("div",{className:"w-full h-full bg-slate-950 rounded-[14px] sm:rounded-[22px] flex items-center justify-center text-pink-400",children:s.jsx(em,{size:32})})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-xl sm:text-2xl font-black text-white",children:"Ready for the Code Duel?"}),s.jsxs("p",{className:"text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed",children:["Place your phone or iPad on a desk! Player 1 takes the ",s.jsx("strong",{children:"Cyan side"})," and Player 2 takes the ",s.jsx("strong",{children:"Pink side"}),"."]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs font-mono",children:[s.jsxs("div",{className:"p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300",children:[s.jsx("div",{className:"font-bold text-xs sm:text-sm mb-0.5",children:"Player 1"}),s.jsx("span",{className:"text-[11px] text-slate-400",children:"Left / Top Deck"})]}),s.jsxs("div",{className:"p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-pink-500/10 border border-pink-500/30 text-pink-300",children:[s.jsx("div",{className:"font-bold text-xs sm:text-sm mb-0.5",children:"Player 2"}),s.jsx("span",{className:"text-[11px] text-slate-400",children:"Right / Bottom Deck"})]})]}),s.jsxs("button",{onClick:T,className:"w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-black text-sm sm:text-base bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white shadow-[0_0_25px_rgba(236,72,153,0.4)] active:scale-95 transition-transform flex items-center justify-center gap-2",children:[s.jsx(Vt,{size:18,className:"fill-current"}),s.jsx("span",{children:"Start 2-Player Match"})]})]}),M&&!X&&s.jsxs("div",{className:"space-y-4 sm:space-y-6",children:[s.jsxs("div",{className:"glass-panel p-3.5 sm:p-4 rounded-2xl border border-slate-800 flex items-center justify-between gap-2 sm:gap-4",children:[s.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[s.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-xs sm:text-sm font-bold flex items-center justify-center",children:"P1"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-[10px] sm:text-xs text-slate-400 font-mono",children:"Player 1"}),s.jsxs("div",{className:"text-base sm:text-xl font-black text-cyan-400",children:[k," ",s.jsx("span",{className:"text-[10px] text-slate-400 font-normal",children:"PTS"})]})]})]}),s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsxs("div",{className:"flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-900 border border-slate-700 text-amber-400 font-mono text-xs sm:text-sm font-bold",children:[s.jsx(nm,{size:14}),s.jsxs("span",{children:[ee,"s"]})]}),s.jsxs("span",{className:"text-[10px] sm:text-[11px] text-slate-500 font-mono mt-0.5",children:["R",V+1,"/",oi.length]})]}),s.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 text-right",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-[10px] sm:text-xs text-slate-400 font-mono",children:"Player 2"}),s.jsxs("div",{className:"text-base sm:text-xl font-black text-pink-400",children:[W," ",s.jsx("span",{className:"text-[10px] text-slate-400 font-normal",children:"PTS"})]})]}),s.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-pink-500/20 border border-pink-400 text-pink-300 text-xs sm:text-sm font-bold flex items-center justify-center",children:"P2"})]})]}),s.jsxs("div",{className:"glass-panel p-4 sm:p-6 rounded-2xl border border-slate-800 text-center",children:[s.jsxs("span",{className:"text-[11px] sm:text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold",children:["Category: ",H.category]}),s.jsx("h2",{className:"text-base sm:text-xl font-bold text-white mt-1 leading-snug",children:H.question})]}),O&&s.jsxs("div",{className:"p-3.5 sm:p-4 rounded-2xl text-center font-bold text-xs sm:text-sm border flex flex-col sm:flex-row items-center justify-between gap-3 animate-fadeIn bg-slate-900/90 border-slate-700",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(ht,{size:16,className:"text-amber-400 shrink-0"}),s.jsxs("span",{children:[O==="p1"&&"🎉 Player 1 won the round! (+100 PTS)",O==="p2"&&"🎉 Player 2 won the round! (+100 PTS)",O==="timeup"&&"⏰ Time expired! No points."]})]}),s.jsx("button",{onClick:le,className:"w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xs shadow-md active:scale-95 transition-transform",children:"Next Round →"})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",children:[s.jsxs("div",{className:"glass-panel p-4 sm:p-6 rounded-2xl border border-cyan-500/30 space-y-3 sm:space-y-4 bg-gradient-to-b from-cyan-950/20 to-slate-950/40",children:[s.jsxs("div",{className:"flex items-center justify-between pb-1.5 border-b border-cyan-500/20",children:[s.jsxs("span",{className:"text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5",children:[s.jsx(hd,{size:13}),"Player 1 Deck"]}),s.jsx("span",{className:"text-[9px] sm:text-[10px] text-slate-500",children:"Tap fast to claim"})]}),s.jsx("div",{className:"space-y-2",children:H.options.map((ue,te)=>s.jsxs("button",{onClick:()=>I(te),disabled:O!==null,className:"w-full min-h-[44px] text-left p-2.5 sm:p-3.5 rounded-xl border border-slate-800 bg-slate-900/80 active:bg-cyan-500/20 active:border-cyan-400 text-xs font-mono text-slate-200 transition-all flex items-center justify-between group",children:[s.jsx("span",{className:"break-words pr-2",children:ue}),s.jsx("span",{className:"w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-[10px] shrink-0",children:te+1})]},te))})]}),s.jsxs("div",{className:"glass-panel p-4 sm:p-6 rounded-2xl border border-pink-500/30 space-y-3 sm:space-y-4 bg-gradient-to-b from-pink-950/20 to-slate-950/40",children:[s.jsxs("div",{className:"flex items-center justify-between pb-1.5 border-b border-pink-500/20",children:[s.jsxs("span",{className:"text-xs font-mono text-pink-400 font-bold flex items-center gap-1.5",children:[s.jsx(hd,{size:13}),"Player 2 Deck"]}),s.jsx("span",{className:"text-[9px] sm:text-[10px] text-slate-500",children:"Tap fast to claim"})]}),s.jsx("div",{className:"space-y-2",children:H.options.map((ue,te)=>s.jsxs("button",{onClick:()=>D(te),disabled:O!==null,className:"w-full min-h-[44px] text-left p-2.5 sm:p-3.5 rounded-xl border border-slate-800 bg-slate-900/80 active:bg-pink-500/20 active:border-pink-400 text-xs font-mono text-slate-200 transition-all flex items-center justify-between group",children:[s.jsx("span",{className:"break-words pr-2",children:ue}),s.jsx("span",{className:"w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-[10px] shrink-0",children:String.fromCharCode(65+te)})]},te))})]})]})]}),X&&s.jsxs("div",{className:"glass-panel p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-800 text-center max-w-lg mx-auto space-y-5 animate-fadeIn",children:[s.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-500 p-0.5 shadow-[0_0_30px_rgba(245,158,11,0.4)]",children:s.jsx("div",{className:"w-full h-full bg-slate-950 rounded-[14px] sm:rounded-[22px] flex items-center justify-center text-yellow-400",children:s.jsx(fi,{size:36})})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl sm:text-3xl font-black text-white",children:"Duel Complete!"}),s.jsxs("p",{className:"text-base sm:text-lg font-bold text-amber-400 mt-1.5",children:[k>W&&"🏆 Player 1 Takes the Crown!",W>k&&"🏆 Player 2 Takes the Crown!",k===W&&"🤝 Legendary Tie Match!"]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-3 text-center",children:[s.jsxs("div",{className:"p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-cyan-500/10 border border-cyan-500/30",children:[s.jsx("div",{className:"text-[10px] sm:text-xs text-slate-400 font-mono",children:"Player 1 Final"}),s.jsxs("div",{className:"text-xl sm:text-2xl font-black text-cyan-400",children:[k," PTS"]})]}),s.jsxs("div",{className:"p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-pink-500/10 border border-pink-500/30",children:[s.jsx("div",{className:"text-[10px] sm:text-xs text-slate-400 font-mono",children:"Player 2 Final"}),s.jsxs("div",{className:"text-xl sm:text-2xl font-black text-pink-400",children:[W," PTS"]})]})]}),s.jsx("div",{className:"text-xs text-emerald-400 font-semibold",children:"+150 Bonus XP awarded for team play!"}),s.jsxs("button",{onClick:T,className:"w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2",children:[s.jsx(Dt,{size:15}),s.jsx("span",{children:"Rematch"})]})]})]})},aa=[{id:"flappy_square",title:"Flappy Square Arcade",category:"Mini-Games",icon:"🎮",description:"Jump through moving cyber pipes with gravity physics and live score.",html:`<div class="game-container">
  <div class="header">
    <h3>🎮 Flappy Square</h3>
    <div class="score">Score: <span id="scoreVal">0</span></div>
  </div>
  <canvas id="gameCanvas" width="320" height="400"></canvas>
  <div class="instructions">Click or Press Spacebar to Jump!</div>
  <button id="restartBtn" onclick="restartGame()">Restart Game</button>
</div>`,css:`body {
  margin: 0;
  background: #0a0d14;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.game-container {
  text-align: center;
  background: #111726;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #1e293b;
  box-shadow: 0 10px 40px rgba(0, 242, 254, 0.2);
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
h3 { margin: 0; color: #00f2fe; }
.score { font-size: 16px; font-weight: bold; color: #4ade80; }
canvas {
  background: #020617;
  border: 2px solid #00f2fe;
  border-radius: 10px;
  display: block;
}
.instructions {
  font-size: 12px;
  color: #94a3b8;
  margin-top: 10px;
}
#restartBtn {
  background: #00f2fe;
  color: #000;
  border: none;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;
}`,js:`const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('scoreVal');

let bird = { x: 50, y: 150, size: 16, vy: 0, gravity: 0.35, jump: -6 };
let pipes = [];
let score = 0;
let gameOver = false;
let frame = 0;

function jump() {
  if (!gameOver) bird.vy = bird.jump;
}

window.addEventListener('keydown', (e) => { if (e.code === 'Space') jump(); });
canvas.addEventListener('click', jump);

function update() {
  if (gameOver) return;
  frame++;
  bird.vy += bird.gravity;
  bird.y += bird.vy;

  if (bird.y + bird.size > canvas.height || bird.y < 0) {
    gameOver = true;
  }

  if (frame % 90 === 0) {
    const gap = 110;
    const topHeight = Math.floor(Math.random() * (canvas.height - gap - 60)) + 30;
    pipes.push({ x: canvas.width, top: topHeight, bottom: topHeight + gap, passed: false });
  }

  for (let i = pipes.length - 1; i >= 0; i--) {
    const p = pipes[i];
    p.x -= 2.2;

    if (!p.passed && p.x + 30 < bird.x) {
      score++;
      scoreEl.innerText = score;
      p.passed = true;
    }

    if (
      bird.x + bird.size > p.x && bird.x < p.x + 30 &&
      (bird.y < p.top || bird.y + bird.size > p.bottom)
    ) {
      gameOver = true;
    }

    if (p.x < -40) pipes.splice(i, 1);
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Pipes
  ctx.fillStyle = '#06b6d4';
  pipes.forEach(p => {
    ctx.fillRect(p.x, 0, 30, p.top);
    ctx.fillRect(p.x, p.bottom, 30, canvas.height - p.bottom);
  });

  // Bird
  ctx.fillStyle = '#f43f5e';
  ctx.fillRect(bird.x, bird.y, bird.size, bird.size);

  if (gameOver) {
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff';
    ctx.font = '20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('GAME OVER!', canvas.width / 2, canvas.height / 2 - 10);
    ctx.font = '14px sans-serif';
    ctx.fillText('Score: ' + score, canvas.width / 2, canvas.height / 2 + 20);
  }
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

function restartGame() {
  bird = { x: 50, y: 150, size: 16, vy: 0, gravity: 0.35, jump: -6 };
  pipes = [];
  score = 0;
  scoreEl.innerText = score;
  gameOver = false;
  frame = 0;
}

gameLoop();`},{id:"retro_snake",title:"Retro Snake Arcade",category:"Mini-Games",icon:"🐍",description:"Classic arrow-key snake game with food spawning, growing tail, and wall wraps.",html:`<div class="snake-box">
  <div class="top-row">
    <h3>🐍 Retro Snake</h3>
    <div>Score: <span id="snakeScore">0</span></div>
  </div>
  <canvas id="snakeCanvas" width="300" height="300"></canvas>
  <div class="keys">Use Arrow Keys on keyboard (or buttons below)</div>
  <div class="dpad">
    <button onclick="changeDir('UP')">⬆️</button><br>
    <button onclick="changeDir('LEFT')">⬅️</button>
    <button onclick="changeDir('DOWN')">⬇️</button>
    <button onclick="changeDir('RIGHT')">➡️</button>
  </div>
</div>`,css:`body {
  margin: 0;
  background: #050811;
  color: #fff;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.snake-box {
  background: #0f172a;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #334155;
  text-align: center;
}
.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-weight: bold;
  color: #10b981;
}
canvas {
  background: #020617;
  border: 2px solid #10b981;
  border-radius: 8px;
}
.keys { font-size: 11px; color: #64748b; margin-top: 6px; }
.dpad { margin-top: 8px; }
.dpad button {
  background: #1e293b;
  color: #fff;
  border: 1px solid #475569;
  padding: 8px 14px;
  border-radius: 6px;
  margin: 2px;
  cursor: pointer;
  font-size: 14px;
}`,js:`const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('snakeScore');
const grid = 15;

let snake = [{x: 150, y: 150}, {x: 135, y: 150}, {x: 120, y: 150}];
let dx = grid;
let dy = 0;
let food = {x: 60, y: 60};
let score = 0;
let changing = false;

function spawnFood() {
  food.x = Math.floor(Math.random() * (canvas.width / grid)) * grid;
  food.y = Math.floor(Math.random() * (canvas.height / grid)) * grid;
}

function main() {
  setTimeout(() => {
    changing = false;
    clear();
    drawFood();
    moveSnake();
    drawSnake();
    main();
  }, 100);
}

function clear() {
  ctx.fillStyle = '#020617';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
  snake.forEach((part, index) => {
    ctx.fillStyle = index === 0 ? '#10b981' : '#34d399';
    ctx.fillRect(part.x, part.y, grid - 1, grid - 1);
  });
}

function moveSnake() {
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};

  // Wall wrapping
  if (head.x < 0) head.x = canvas.width - grid;
  if (head.x >= canvas.width) head.x = 0;
  if (head.y < 0) head.y = canvas.height - grid;
  if (head.y >= canvas.height) head.y = 0;

  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    score += 10;
    scoreEl.innerText = score;
    spawnFood();
  } else {
    snake.pop();
  }
}

function drawFood() {
  ctx.fillStyle = '#f43f5e';
  ctx.fillRect(food.x, food.y, grid - 1, grid - 1);
}

function changeDir(dir) {
  if (changing) return;
  if (dir === 'LEFT' && dx === 0) { dx = -grid; dy = 0; }
  if (dir === 'UP' && dy === 0) { dx = 0; dy = -grid; }
  if (dir === 'RIGHT' && dx === 0) { dx = grid; dy = 0; }
  if (dir === 'DOWN' && dy === 0) { dx = 0; dy = grid; }
  changing = true;
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') changeDir('LEFT');
  if (e.key === 'ArrowUp') changeDir('UP');
  if (e.key === 'ArrowRight') changeDir('RIGHT');
  if (e.key === 'ArrowDown') changeDir('DOWN');
});

spawnFood();
main();`},{id:"whack_bug",title:"Whack-A-Bug Coder Edition",category:"Mini-Games",icon:"👾",description:"Fast-paced clicking game: squash bugs before they corrupt system memory!",html:`<div class="bug-arena">
  <h2>👾 Whack-A-Bug</h2>
  <div class="stats">
    <div>Time: <span id="timeLeft">20</span>s</div>
    <div>Squashed: <span id="bugScore">0</span></div>
  </div>
  <div class="grid">
    <div class="hole" onclick="whack(0)"></div>
    <div class="hole" onclick="whack(1)"></div>
    <div class="hole" onclick="whack(2)"></div>
    <div class="hole" onclick="whack(3)"></div>
    <div class="hole" onclick="whack(4)"></div>
    <div class="hole" onclick="whack(5)"></div>
    <div class="hole" onclick="whack(6)"></div>
    <div class="hole" onclick="whack(7)"></div>
    <div class="hole" onclick="whack(8)"></div>
  </div>
  <button id="startBtn" onclick="startGame()">Start Squashing!</button>
</div>`,css:`body {
  margin: 0;
  background: #0a0d14;
  color: #fff;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.bug-arena {
  background: #0f172a;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid #334155;
  text-align: center;
  box-shadow: 0 10px 30px rgba(244,63,94,0.2);
}
h2 { margin: 0 0 10px 0; color: #f43f5e; }
.stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-weight: bold;
  color: #38bdf8;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 80px);
  gap: 10px;
  justify-content: center;
  margin-bottom: 14px;
}
.hole {
  width: 80px;
  height: 80px;
  background: #1e293b;
  border: 2px dashed #475569;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  cursor: pointer;
  user-select: none;
  transition: all 0.15s ease;
}
.hole.active {
  background: #881337;
  border: 2px solid #f43f5e;
  transform: scale(1.05);
}
button {
  background: #f43f5e;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}`,js:`let score = 0;
let timeLeft = 20;
let timerId = null;
let bugInterval = null;
let currentHole = -1;
const holes = document.querySelectorAll('.hole');
const scoreEl = document.getElementById('bugScore');
const timeEl = document.getElementById('timeLeft');

function popBug() {
  holes.forEach(h => {
    h.classList.remove('active');
    h.innerText = '';
  });

  currentHole = Math.floor(Math.random() * holes.length);
  holes[currentHole].classList.add('active');
  holes[currentHole].innerText = '👾';
}

function whack(index) {
  if (index === currentHole && timeLeft > 0) {
    score++;
    scoreEl.innerText = score;
    holes[index].innerText = '💥';
    holes[index].classList.remove('active');
    currentHole = -1;
  }
}

function startGame() {
  score = 0;
  timeLeft = 20;
  scoreEl.innerText = score;
  timeEl.innerText = timeLeft;
  clearInterval(timerId);
  clearInterval(bugInterval);

  bugInterval = setInterval(popBug, 700);
  timerId = setInterval(() => {
    timeLeft--;
    timeEl.innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      clearInterval(bugInterval);
      holes.forEach(h => { h.classList.remove('active'); h.innerText = ''; });
      alert('Time Up! You squashed ' + score + ' bugs!');
    }
  }, 1000);
}`},{id:"cyber_pong",title:"Cyber Pong 2026",category:"Mini-Games",icon:"🏓",description:"Neon retro table tennis: move paddle with mouse or finger against AI computer!",html:`<div class="pong-box">
  <div class="scoreboard">
    <span style="color:#00f2fe;">Player: <b id="pScore">0</b></span>
    <span style="color:#ec4899;">AI: <b id="aiScore">0</b></span>
  </div>
  <canvas id="pongCanvas" width="340" height="220"></canvas>
  <div class="hint">Move mouse / finger up and down to steer paddle!</div>
</div>`,css:`body {
  margin: 0;
  background: #020617;
  color: #fff;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.pong-box {
  background: #0b1120;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #1e293b;
  text-align: center;
}
.scoreboard {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}
canvas {
  background: #030712;
  border: 2px solid #334155;
  border-radius: 8px;
  display: block;
  cursor: none;
}
.hint { font-size: 11px; color: #64748b; margin-top: 8px; }`,js:`const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

let ball = { x: 170, y: 110, vx: 3, vy: 2, radius: 6 };
let player = { y: 80, height: 50, width: 8, score: 0 };
let ai = { y: 80, height: 50, width: 8, score: 0 };

canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  player.y = e.clientY - rect.top - player.height / 2;
});

canvas.addEventListener('touchmove', (e) => {
  const rect = canvas.getBoundingClientRect();
  player.y = e.touches[0].clientY - rect.top - player.height / 2;
  e.preventDefault();
});

function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.vx = -ball.vx;
  ball.vy = (Math.random() - 0.5) * 4;
}

function loop() {
  // Move ball
  ball.x += ball.vx;
  ball.y += ball.vy;

  // Bounce walls
  if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
    ball.vy = -ball.vy;
  }

  // AI tracking
  ai.y += (ball.y - (ai.y + ai.height / 2)) * 0.08;

  // Collision Player
  if (ball.x - ball.radius < 18 && ball.y > player.y && ball.y < player.y + player.height) {
    ball.vx = Math.abs(ball.vx) * 1.05;
  }

  // Collision AI
  if (ball.x + ball.radius > canvas.width - 18 && ball.y > ai.y && ball.y < ai.y + ai.height) {
    ball.vx = -Math.abs(ball.vx) * 1.05;
  }

  // Scoring
  if (ball.x < 0) {
    ai.score++;
    document.getElementById('aiScore').innerText = ai.score;
    resetBall();
  } else if (ball.x > canvas.width) {
    player.score++;
    document.getElementById('pScore').innerText = player.score;
    resetBall();
  }

  // Draw
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Center net
  ctx.strokeStyle = '#1e293b';
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
  ctx.setLineDash([]);

  // Paddles
  ctx.fillStyle = '#00f2fe';
  ctx.fillRect(10, player.y, player.width, player.height);

  ctx.fillStyle = '#ec4899';
  ctx.fillRect(canvas.width - 18, ai.y, ai.width, ai.height);

  // Ball
  ctx.fillStyle = '#facc15';
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fill();

  requestAnimationFrame(loop);
}

loop();`},{id:"cyber_neon_button",title:"Cyber Neon Pulse Button",category:"Visual FX",icon:"🚀",description:"Multi-layered CSS box-shadows with ripple sparks clicking animation.",html:`<div class="container">
  <button class="neon-btn" onclick="createRipple(event)">
    <span>⚡ ACTIVATE HYPERDRIVE</span>
  </button>
  <p class="tagline">Click to launch audio-visual particle burst!</p>
</div>`,css:`body {
  margin: 0;
  background: #020617;
  color: #fff;
  font-family: 'Courier New', monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.container { text-align: center; }
.neon-btn {
  position: relative;
  overflow: hidden;
  background: transparent;
  color: #00f2fe;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 2px;
  padding: 16px 36px;
  border: 2px solid #00f2fe;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 242, 254, 0.3), inset 0 0 15px rgba(0, 242, 254, 0.2);
}
.neon-btn:hover {
  background: #00f2fe;
  color: #020617;
  box-shadow: 0 0 40px #00f2fe, 0 0 80px #00f2fe;
  transform: translateY(-3px) scale(1.02);
}
.tagline {
  color: #64748b;
  font-size: 12px;
  margin-top: 16px;
}
.spark {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  pointer-events: none;
  animation: explode 0.6s linear forwards;
}
@keyframes explode {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(4); opacity: 0; }
}`,js:`function createRipple(e) {
  const btn = e.currentTarget;
  const rect = btn.getBoundingClientRect();
  const spark = document.createElement('span');
  spark.classList.add('spark');
  spark.style.left = (e.clientX - rect.left - 5) + 'px';
  spark.style.top = (e.clientY - rect.top - 5) + 'px';
  btn.appendChild(spark);
  setTimeout(() => spark.remove(), 600);
}`},{id:"bouncing_kitten",title:"Animated Bouncing Pet",category:"Visual FX",icon:"🐱",description:"Pure CSS keyframe jumping kitten with mouse-tracking interactive eyes.",html:`<div class="pet-stage">
  <div class="cat-body">
    <div class="ears">
      <div class="ear left"></div>
      <div class="ear right"></div>
    </div>
    <div class="face">
      <div class="eye left"><div class="pupil"></div></div>
      <div class="eye right"><div class="pupil"></div></div>
      <div class="nose"></div>
      <div class="mouth">3</div>
    </div>
    <div class="tail"></div>
  </div>
  <div class="shadow"></div>
  <p class="pet-caption">Move mouse to make the kitten watch you!</p>
</div>`,css:`body {
  margin: 0;
  background: #0f172a;
  color: #fff;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.pet-stage { text-align: center; }
.cat-body {
  position: relative;
  width: 120px;
  height: 110px;
  background: #f59e0b;
  border-radius: 50% 50% 45% 45%;
  margin: 0 auto;
  animation: bounce 1.4s infinite ease-in-out;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-24px); }
}
.ears .ear {
  position: absolute;
  top: -16px;
  width: 0;
  height: 0;
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  border-bottom: 24px solid #d97706;
}
.ear.left { left: 10px; transform: rotate(-15deg); }
.ear.right { right: 10px; transform: rotate(15deg); }
.face { position: relative; top: 35px; }
.eye {
  position: absolute;
  width: 18px;
  height: 22px;
  background: #fff;
  border-radius: 50%;
  top: 0;
  overflow: hidden;
}
.eye.left { left: 24px; }
.eye.right { right: 24px; }
.pupil {
  width: 10px;
  height: 10px;
  background: #111;
  border-radius: 50%;
  position: absolute;
  top: 6px;
  left: 4px;
  transition: all 0.1s ease;
}
.nose {
  width: 8px;
  height: 6px;
  background: #f43f5e;
  border-radius: 50%;
  margin: 12px auto 0;
}
.mouth { color: #78350f; font-weight: bold; font-size: 16px; transform: rotate(90deg); margin-top: -2px; }
.shadow {
  width: 100px;
  height: 14px;
  background: rgba(0,0,0,0.3);
  border-radius: 50%;
  margin: 10px auto 0;
  animation: shadowPulse 1.4s infinite ease-in-out;
}
@keyframes shadowPulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(0.6); opacity: 0.2; }
}
.pet-caption { color: #94a3b8; font-size: 12px; margin-top: 14px; }`,js:`window.addEventListener('mousemove', (e) => {
  const pupils = document.querySelectorAll('.pupil');
  pupils.forEach(pupil => {
    const rect = pupil.getBoundingClientRect();
    const x = (e.clientX - rect.left) / 30;
    const y = (e.clientY - rect.top) / 30;
    pupil.style.transform = \`translate(\${Math.max(-4, Math.min(4, x))}px, \${Math.max(-4, Math.min(4, y))}px)\`;
  });
});`},{id:"matrix_rain",title:"Matrix Digital Rain",category:"Visual FX",icon:"🌌",description:"The iconic cyber falling code streams from The Matrix in HTML5 Canvas.",html:`<div class="matrix-box">
  <canvas id="matrixCanvas" width="340" height="300"></canvas>
  <div class="caption">Wake up, Neo... The Matrix has you.</div>
</div>`,css:`body {
  margin: 0;
  background: #000;
  color: #22c55e;
  font-family: monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.matrix-box { text-align: center; }
canvas {
  background: #000;
  border: 1px solid #15803d;
  border-radius: 12px;
  box-shadow: 0 0 25px rgba(34,197,94,0.3);
}
.caption { color: #86efac; font-size: 11px; margin-top: 8px; }`,js:`const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

const chars = '0123456789ABCDEFHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテト';
const fontSize = 12;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#22c55e';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 35);`},{id:"starfield_constellation",title:"Interactive Starfield Constellation",category:"Visual FX",icon:"✨",description:"Drifting galaxy stars that dynamically connect constellations to your cursor.",html:`<div class="stars-box">
  <canvas id="starCanvas" width="340" height="260"></canvas>
  <p>Move mouse over space to pull constellation lines!</p>
</div>`,css:`body {
  margin: 0;
  background: #030712;
  color: #94a3b8;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.stars-box { text-align: center; }
canvas {
  background: #030712;
  border: 1px solid #1e293b;
  border-radius: 12px;
}
p { font-size: 11px; margin-top: 8px; }`,js:`const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

let mouse = { x: null, y: null };
const stars = [];

for (let i = 0; i < 60; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.8,
    vy: (Math.random() - 0.5) * 0.8,
    radius: Math.random() * 2 + 1
  });
}

canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

canvas.addEventListener('mouseleave', () => {
  mouse.x = null;
  mouse.y = null;
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((s, idx) => {
    s.x += s.vx;
    s.y += s.vy;
    if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;

    ctx.fillStyle = '#00f2fe';
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fill();

    // Connect to other stars
    for (let j = idx + 1; j < stars.length; j++) {
      const s2 = stars[j];
      const dist = Math.hypot(s.x - s2.x, s.y - s2.y);
      if (dist < 55) {
        ctx.strokeStyle = \`rgba(0, 242, 254, \${1 - dist / 55})\`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s2.x, s2.y);
        ctx.stroke();
      }
    }

    // Connect to mouse
    if (mouse.x !== null) {
      const mDist = Math.hypot(s.x - mouse.x, s.y - mouse.y);
      if (mDist < 80) {
        ctx.strokeStyle = \`rgba(236, 72, 153, \${1 - mDist / 80})\`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }
  });

  requestAnimationFrame(animate);
}

animate();`},{id:"glassmorphism_card",title:"Glassmorphism 3D Tilt Card",category:"UI & Widgets",icon:"📱",description:"Frosted glass blur with realistic 3D perspective tilt following your cursor.",html:`<div class="card-wrapper">
  <div class="glass-card" id="tiltCard">
    <div class="badge">PRO CODER</div>
    <div class="avatar">AS</div>
    <h3>Affan Sayed</h3>
    <p>ByteVerse Master Architect</p>
    <div class="stats-row">
      <div><b>80</b><span>Lessons</span></div>
      <div><b>9.9k</b><span>XP</span></div>
      <div><b>#1</b><span>Rank</span></div>
    </div>
  </div>
</div>`,css:`body {
  margin: 0;
  background: radial-gradient(circle at 50% 50%, #1e1b4b, #030712);
  color: #fff;
  font-family: system-ui, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  perspective: 1000px;
}
.glass-card {
  width: 260px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  transition: transform 0.1s ease;
  transform-style: preserve-3d;
}
.badge {
  display: inline-block;
  background: #a855f7;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  padding: 3px 8px;
  border-radius: 12px;
  margin-bottom: 12px;
}
.avatar {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #00f2fe, #ec4899);
  border-radius: 50%;
  margin: 0 auto 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}
h3 { margin: 0; font-size: 18px; }
p { color: #94a3b8; font-size: 12px; margin: 4px 0 16px; }
.stats-row {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 12px;
}
.stats-row div { display: flex; flex-direction: column; }
.stats-row b { font-size: 15px; color: #00f2fe; }
.stats-row span { font-size: 10px; color: #94a3b8; }`,js:`const card = document.getElementById('tiltCard');

window.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const cardX = rect.left + rect.width / 2;
  const cardY = rect.top + rect.height / 2;
  const deltaX = (e.clientX - cardX) / 10;
  const deltaY = (e.clientY - cardY) / 10;

  card.style.transform = \`rotateY(\${deltaX}deg) rotateX(\${-deltaY}deg)\`;
});`},{id:"neomorphic_calc",title:"Neomorphic Calculator",category:"UI & Widgets",icon:"🧮",description:"Functional math calculator with sleek soft extruded shadows and clear display.",html:`<div class="calc">
  <div class="screen" id="calcScreen">0</div>
  <div class="buttons">
    <button class="clear" onclick="clearCalc()">C</button>
    <button onclick="press('/')">/</button>
    <button onclick="press('*')">*</button>
    <button class="op" onclick="press('-')">-</button>
    
    <button onclick="press('7')">7</button>
    <button onclick="press('8')">8</button>
    <button onclick="press('9')">9</button>
    <button class="op" onclick="press('+')">+</button>

    <button onclick="press('4')">4</button>
    <button onclick="press('5')">5</button>
    <button onclick="press('6')">6</button>
    <button class="equal" onclick="calculate()">=</button>

    <button onclick="press('1')">1</button>
    <button onclick="press('2')">2</button>
    <button onclick="press('3')">3</button>
    <button onclick="press('0')">0</button>
  </div>
</div>`,css:`body {
  margin: 0;
  background: #0f172a;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: sans-serif;
}
.calc {
  background: #0f172a;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 10px 10px 20px #070b14, -10px -10px 20px #172340;
  width: 240px;
}
.screen {
  background: #090e1a;
  color: #00f2fe;
  font-family: monospace;
  font-size: 24px;
  text-align: right;
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 16px;
  box-shadow: inset 4px 4px 8px #04070d, inset -4px -4px 8px #0e1527;
  overflow: hidden;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
button {
  background: #0f172a;
  color: #f8fafc;
  border: none;
  border-radius: 10px;
  padding: 14px 0;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 4px 4px 8px #070b14, -4px -4px 8px #172340;
  transition: all 0.1s;
}
button:active {
  box-shadow: inset 2px 2px 4px #070b14, inset -2px -2px 4px #172340;
}
.op { color: #f59e0b; }
.equal { background: #00f2fe; color: #000; grid-row: span 2; padding: 36px 0; }
.clear { color: #f43f5e; }`,js:`let expr = '';
const screen = document.getElementById('calcScreen');

function press(val) {
  if (expr === '0') expr = '';
  expr += val;
  screen.innerText = expr;
}

function clearCalc() {
  expr = '0';
  screen.innerText = expr;
}

function calculate() {
  try {
    expr = String(eval(expr));
    screen.innerText = expr;
  } catch (e) {
    screen.innerText = 'Err';
    expr = '';
  }
}`},{id:"cyber_stopwatch",title:"Cyberpunk Stopwatch & Timer",category:"UI & Widgets",icon:"⏱️",description:"Precision millisecond stopwatch with lap recording and glowing neon font.",html:`<div class="timer-box">
  <h2>⏱️ CHRONO TIMER</h2>
  <div class="display" id="timeDisplay">00:00:00.00</div>
  <div class="controls">
    <button id="startBtn" onclick="toggleTimer()">Start</button>
    <button onclick="lapTimer()">Lap</button>
    <button onclick="resetTimer()">Reset</button>
  </div>
  <div class="laps" id="lapsList"></div>
</div>`,css:`body {
  margin: 0;
  background: #030712;
  color: #fff;
  font-family: monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.timer-box {
  background: #0f172a;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #1e293b;
  text-align: center;
  width: 280px;
}
h2 { color: #38bdf8; margin: 0 0 12px 0; font-size: 16px; }
.display {
  font-size: 26px;
  font-weight: bold;
  color: #00f2fe;
  background: #020617;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #00f2fe;
  text-shadow: 0 0 10px #00f2fe;
  margin-bottom: 16px;
}
.controls button {
  background: #1e293b;
  color: #fff;
  border: 1px solid #475569;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  margin: 0 4px;
}
#startBtn { background: #10b981; color: #000; font-weight: bold; }
.laps {
  margin-top: 14px;
  max-height: 100px;
  overflow-y: auto;
  font-size: 11px;
  color: #94a3b8;
  text-align: left;
}`,js:`let startTime = 0;
let elapsed = 0;
let timerInterval = null;
let running = false;
let lapCount = 1;

function formatTime(ms) {
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  const cs = Math.floor((ms % 1000) / 10);
  return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0') + ':' + String(cs).padStart(2, '0');
}

function toggleTimer() {
  const btn = document.getElementById('startBtn');
  if (!running) {
    startTime = Date.now() - elapsed;
    timerInterval = setInterval(() => {
      elapsed = Date.now() - startTime;
      document.getElementById('timeDisplay').innerText = formatTime(elapsed);
    }, 20);
    btn.innerText = 'Pause';
    btn.style.background = '#f59e0b';
    running = true;
  } else {
    clearInterval(timerInterval);
    btn.innerText = 'Resume';
    btn.style.background = '#10b981';
    running = false;
  }
}

function lapTimer() {
  if (running) {
    const list = document.getElementById('lapsList');
    const item = document.createElement('div');
    item.innerText = \`Lap \${lapCount++}: \${formatTime(elapsed)}\`;
    list.prepend(item);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  running = false;
  elapsed = 0;
  lapCount = 1;
  document.getElementById('timeDisplay').innerText = '00:00:00.00';
  document.getElementById('startBtn').innerText = 'Start';
  document.getElementById('startBtn').style.background = '#10b981';
  document.getElementById('lapsList').innerHTML = '';
}`},{id:"drum_pad",title:"8-Bit Retro Drum Pad",category:"UI & Widgets",icon:"🎵",description:"Web Audio API synthesizer pads producing real-time retro 8-bit sound effects!",html:`<div class="drum-box">
  <h3>🎵 8-Bit Synth Drum Pad</h3>
  <div class="pad-grid">
    <button class="pad kick" onclick="playSynth(130, 'sine')">Kick</button>
    <button class="pad snare" onclick="playNoise()">Snare</button>
    <button class="pad hihat" onclick="playSynth(800, 'square', 0.05)">Hi-Hat</button>
    <button class="pad laser" onclick="playLaser()">Laser</button>
    <button class="pad coin" onclick="playCoin()">Coin</button>
    <button class="pad power" onclick="playPowerup()">Powerup</button>
  </div>
  <p>Click pads to synthesize retro 8-bit sounds!</p>
</div>`,css:`body {
  margin: 0;
  background: #0a0d14;
  color: #fff;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.drum-box {
  background: #111726;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid #1e293b;
  text-align: center;
  width: 260px;
}
h3 { margin: 0 0 14px 0; color: #00f2fe; font-size: 16px; }
.pad-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 12px;
}
.pad {
  padding: 20px 0;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.1s;
}
.pad:active { transform: scale(0.95); filter: brightness(1.3); }
.kick { background: #3b82f6; color: #fff; }
.snare { background: #ec4899; color: #fff; }
.hihat { background: #f59e0b; color: #000; }
.laser { background: #10b981; color: #000; }
.coin { background: #facc15; color: #000; }
.power { background: #a855f7; color: #fff; }
p { font-size: 11px; color: #64748b; margin: 0; }`,js:`const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSynth(freq, type, duration = 0.2) {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

function playLaser() {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.frequency.setValueAtTime(880, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(110, audioCtx.currentTime + 0.15);
  gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.15);
}

function playCoin() {
  playSynth(987.77, 'square', 0.08);
  setTimeout(() => playSynth(1318.51, 'square', 0.25), 80);
}

function playPowerup() {
  [220, 330, 440, 550, 660, 880].forEach((f, i) => {
    setTimeout(() => playSynth(f, 'sine', 0.08), i * 40);
  });
}

function playNoise() {
  playSynth(200, 'triangle', 0.1);
}`},{id:"quest_tracker",title:"Gamified To-Do Quest Tracker",category:"Web Apps",icon:"✅",description:"RPG-styled task list: check off completed quests and watch your XP bar fill up!",html:`<div class="quest-box">
  <div class="q-header">
    <h3>⚔️ Quest Log</h3>
    <span id="xpBadge">+0 XP</span>
  </div>
  <div class="input-row">
    <input type="text" id="questInput" placeholder="New quest objective..." />
    <button onclick="addQuest()">Add</button>
  </div>
  <div class="progress-bar"><div class="fill" id="progressFill"></div></div>
  <ul id="questList"></ul>
</div>`,css:`body {
  margin: 0;
  background: #0b0f19;
  color: #fff;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.quest-box {
  background: #111827;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid #1f2937;
  width: 280px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
.q-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
h3 { margin: 0; color: #f59e0b; font-size: 16px; }
#xpBadge { background: #10b981; color: #000; font-weight: bold; font-size: 11px; padding: 2px 8px; border-radius: 10px; }
.input-row { display: flex; gap: 6px; margin-bottom: 12px; }
input {
  flex: 1;
  background: #1f2937;
  border: 1px solid #374151;
  color: #fff;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 12px;
}
button {
  background: #f59e0b;
  color: #000;
  border: none;
  font-weight: bold;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
}
.progress-bar {
  background: #1f2937;
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 12px;
}
.fill { background: #10b981; width: 0%; height: 100%; transition: width 0.3s; }
ul { list-style: none; padding: 0; margin: 0; }
li {
  background: #1f2937;
  padding: 8px 10px;
  border-radius: 8px;
  margin-bottom: 6px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
li.done { text-decoration: line-through; opacity: 0.5; color: #10b981; }`,js:`let quests = [
  { text: 'Read HTML ELI5 story', done: true },
  { text: 'Beat Tag Fortress Arcade', done: false },
  { text: 'Deploy to Vercel', done: false }
];

function render() {
  const list = document.getElementById('questList');
  list.innerHTML = '';
  let completed = 0;

  quests.forEach((q, idx) => {
    if (q.done) completed++;
    const li = document.createElement('li');
    li.className = q.done ? 'done' : '';
    li.innerHTML = \`<span>\${q.done ? '✅' : '⚔️'} \${q.text}</span><span onclick="removeQuest(event, \${idx})">✖</span>\`;
    li.onclick = () => toggleQuest(idx);
    list.appendChild(li);
  });

  const pct = quests.length ? Math.round((completed / quests.length) * 100) : 0;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('xpBadge').innerText = \`+\${completed * 50} XP\`;
}

function addQuest() {
  const input = document.getElementById('questInput');
  if (input.value.trim()) {
    quests.push({ text: input.value.trim(), done: false });
    input.value = '';
    render();
  }
}

function toggleQuest(idx) {
  quests[idx].done = !quests[idx].done;
  render();
}

function removeQuest(e, idx) {
  e.stopPropagation();
  quests.splice(idx, 1);
  render();
}

render();`},{id:"gradient_generator",title:"Live CSS Gradient Generator",category:"Web Apps",icon:"🎨",description:"Pick colors, change angle, and copy ready-to-paste CSS linear-gradient code.",html:`<div class="grad-box">
  <h3>🎨 Gradient Studio</h3>
  <div class="preview" id="gradPreview"></div>
  <div class="controls">
    <input type="color" id="c1" value="#06b6d4" onchange="updateGrad()">
    <input type="color" id="c2" value="#a855f7" onchange="updateGrad()">
    <select id="angle" onchange="updateGrad()">
      <option value="90deg">Horizontal (90°)</option>
      <option value="135deg" selected>Diagonal (135°)</option>
      <option value="180deg">Vertical (180°)</option>
    </select>
  </div>
  <div class="code-box" id="codeOut" onclick="copyCode()">Click to Copy CSS</div>
</div>`,css:`body {
  margin: 0;
  background: #020617;
  color: #fff;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.grad-box {
  background: #0f172a;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid #1e293b;
  text-align: center;
  width: 270px;
}
h3 { margin: 0 0 12px 0; color: #38bdf8; font-size: 16px; }
.preview {
  width: 100%;
  height: 100px;
  border-radius: 12px;
  margin-bottom: 12px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.4);
}
.controls { display: flex; gap: 8px; justify-content: center; margin-bottom: 12px; }
input[type="color"] {
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: transparent;
}
select {
  background: #1e293b;
  color: #fff;
  border: 1px solid #334155;
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 12px;
}
.code-box {
  background: #020617;
  padding: 8px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 11px;
  color: #a7f3d0;
  border: 1px dashed #334155;
  cursor: pointer;
}`,js:`function updateGrad() {
  const c1 = document.getElementById('c1').value;
  const c2 = document.getElementById('c2').value;
  const ang = document.getElementById('angle').value;
  const css = \`linear-gradient(\${ang}, \${c1}, \${c2})\`;
  
  document.getElementById('gradPreview').style.background = css;
  document.getElementById('codeOut').innerText = \`background: \${css};\`;
}

function copyCode() {
  const text = document.getElementById('codeOut').innerText;
  navigator.clipboard.writeText(text);
  alert('Copied to clipboard: ' + text);
}

updateGrad();`},{id:"cyber_weather",title:"Cyberpunk Weather Station",category:"Web Apps",icon:"🌤️",description:"Dynamic weather card with animated rain, cloud float, and °C to °F live conversion.",html:`<div class="weather-card">
  <div class="city">TOKYO // NEO-SHIBUYA</div>
  <div class="weather-icon">🌧️</div>
  <div class="temp" id="tempVal" onclick="toggleTemp()">24°C</div>
  <div class="condition">ACID RAIN // 78% HUMIDITY</div>
  <div class="forecast">
    <div>MON 22°</div>
    <div>TUE 25°</div>
    <div>WED 20°</div>
  </div>
</div>`,css:`body {
  margin: 0;
  background: #030712;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.weather-card {
  background: linear-gradient(135deg, #1e1b4b, #0f172a);
  padding: 24px;
  border-radius: 20px;
  border: 1px solid #4338ca;
  text-align: center;
  width: 240px;
  box-shadow: 0 10px 40px rgba(67, 56, 202, 0.3);
}
.city { font-size: 10px; font-weight: bold; letter-spacing: 2px; color: #818cf8; margin-bottom: 10px; }
.weather-icon { font-size: 48px; margin: 6px 0; animation: float 2s infinite ease-in-out; }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
.temp { font-size: 42px; font-weight: 900; color: #00f2fe; cursor: pointer; text-shadow: 0 0 15px rgba(0,242,254,0.4); }
.condition { font-size: 11px; color: #94a3b8; letter-spacing: 1px; margin: 6px 0 16px; }
.forecast { display: flex; justify-content: space-around; font-size: 11px; color: #cbd5e1; border-top: 1px solid #334155; padding-top: 10px; }`,js:`let isC = true;

function toggleTemp() {
  const el = document.getElementById('tempVal');
  if (isC) {
    el.innerText = '75°F';
    isC = false;
  } else {
    el.innerText = '24°C';
    isC = true;
  }
}`}],Sm=()=>{const[w,x]=U.useState("web"),[u,M]=U.useState("editor"),[j,V]=U.useState("html"),[g,k]=U.useState(!1),[P,W]=U.useState("All"),[L,O]=U.useState("Default Sandbox"),[_,X]=U.useState(`<div class="card">
  <h2>⚡ ByteVerse Sandbox</h2>
  <p>Edit HTML, CSS, and JS live on any device!</p>
  <button onclick="alert('Hello from ByteVerse Mobile & Desktop!')">Tap Me</button>
</div>`),[q,ee]=U.useState(`body {
  font-family: system-ui, sans-serif;
  background: #0a0d14;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 16px;
  box-sizing: border-box;
}
.card {
  background: #111726;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,242,254,0.15);
  max-width: 320px;
  width: 100%;
}
h2 {
  color: #00f2fe;
  margin-top: 0;
  font-size: 1.25rem;
}
p {
  color: #94a3b8;
  font-size: 13px;
  line-height: 1.5;
}
button {
  background: linear-gradient(135deg, #00f2fe, #9d4edd);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  margin-top: 8px;
}`),[z,H]=U.useState('console.log("Playground ready.");'),[T,I]=U.useState(`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0" /><style>body { font-family: system-ui, sans-serif; background: #0a0d14; color: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; padding: 16px; box-sizing: border-box; } .card { background: #111726; border: 1px solid #1e293b; border-radius: 16px; padding: 24px; text-align: center; box-shadow: 0 10px 30px rgba(0,242,254,0.15); max-width: 320px; width: 100%; } h2 { color: #00f2fe; margin-top: 0; font-size: 1.25rem; } p { color: #94a3b8; font-size: 13px; line-height: 1.5; } button { background: linear-gradient(135deg, #00f2fe, #9d4edd); color: #fff; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; width: 100%; margin-top: 8px; }</style></head><body><div class="card"><h2>⚡ ByteVerse Sandbox</h2><p>Edit HTML, CSS, and JS live on any device!</p><button onclick="alert('Hello from ByteVerse Mobile & Desktop!')">Tap Me</button></div><script>console.log("Playground ready.");<\/script></body></html>`),[D,le]=U.useState(`# Python Mobile & Desktop Runner
hero = "CyberPaladin"
level = 15
skills = ["Python", "Algorithms", "Django"]

print(f"Hero: {hero} (Level {level})")
print("Learned Skills:")
for idx, skill in enumerate(skills, 1):
    print(f"  {idx}. {skill}")
`),[ue,te]=U.useState(""),[we,ye]=U.useState(`SELECT username, level, xp, rank_title 
FROM players 
WHERE level >= 5 
ORDER BY xp DESC;`),[re,qe]=U.useState([{username:"NeoByte",level:18,xp:1850,rank_title:"Full-Stack Titan"},{username:"CyberValkyrie",level:12,xp:1240,rank_title:"System Architect"},{username:"ShadowCoder",level:7,xp:750,rank_title:"Algorithm Master"}]),Fe=`<div class="card">
  <h2>⚡ ByteVerse Sandbox</h2>
  <p>Edit HTML, CSS, and JS live on any device!</p>
  <button onclick="alert('Hello from ByteVerse Mobile & Desktop!')">Tap Me</button>
</div>`,Te=`body {
  font-family: system-ui, sans-serif;
  background: #0a0d14;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 16px;
  box-sizing: border-box;
}
.card {
  background: #111726;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,242,254,0.15);
  max-width: 320px;
  width: 100%;
}
h2 {
  color: #00f2fe;
  margin-top: 0;
  font-size: 1.25rem;
}
p {
  color: #94a3b8;
  font-size: 13px;
  line-height: 1.5;
}
button {
  background: linear-gradient(135deg, #00f2fe, #9d4edd);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  margin-top: 8px;
}`,De='console.log("Playground ready.");',Oe=c=>{G.playCorrect(),X(c.html),ee(c.css),H(c.js),O(c.title),k(!1);const l=`
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>${c.css}</style>
        </head>
        <body>
          ${c.html}
          <script>${c.js}<\/script>
        </body>
      </html>
    `;I(l),M("preview")},_e=()=>{G.playClick(),X(Fe),ee(Te),H(De),O("Default Sandbox");const c=`
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>${Te}</style>
        </head>
        <body>
          ${Fe}
          <script>${De}<\/script>
        </body>
      </html>
    `;I(c)},be=()=>{G.playClick();const c=`
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>${q}</style>
        </head>
        <body>
          ${_}
          <script>${z}<\/script>
        </body>
      </html>
    `;I(c),M("preview")},B=()=>{G.playCorrect(),te(`>>> python main.py
Hero: CyberPaladin (Level 15)
Learned Skills:
  1. Python
  2. Algorithms
  3. Django
-----------------------------
[Finished in 0.04s]`),M("preview")},se=()=>{G.playCorrect(),qe([{username:"NeoByte",level:18,xp:1850,rank_title:"Full-Stack Titan"},{username:"CyberValkyrie",level:12,xp:1240,rank_title:"System Architect"},{username:"ShadowCoder",level:7,xp:750,rank_title:"Algorithm Master"}]),M("preview")};return s.jsxs("div",{className:"space-y-5 sm:space-y-6 pb-16 md:pb-6",children:[s.jsx("div",{className:"rounded-2xl sm:rounded-3xl glass-panel p-5 sm:p-8 border border-amber-500/20 bg-gradient-to-br from-slate-900 via-slate-900/90 to-amber-950/30 shadow-2xl",children:s.jsxs("div",{className:"max-w-3xl",children:[s.jsxs("div",{className:"inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] sm:text-xs font-mono font-semibold mb-2.5",children:[s.jsx(sr,{size:13}),s.jsx("span",{children:"BYTEVERSE FREE PLAYGROUND"})]}),s.jsxs("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight",children:["Infinite Sandbox. ",s.jsx("br",{className:"hidden sm:inline"}),s.jsx("span",{className:"bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent",children:"Responsive Coding on Any Device."})]}),s.jsx("p",{className:"text-xs sm:text-sm lg:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed",children:"Write code with touch-friendly controls. Switch between HTML, CSS, JS, Python, and SQL effortlessly."})]})}),s.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-800",children:[s.jsx("div",{className:"flex items-center gap-1.5 sm:gap-2 overflow-x-auto touch-scroll",children:[{id:"web",label:"HTML/CSS/JS",icon:ar,color:"text-cyan-400"},{id:"python",label:"Python",icon:Uh,color:"text-blue-400"},{id:"sql",label:"MySQL Studio",icon:rr,color:"text-emerald-400"}].map(c=>{const l=c.icon,f=w===c.id;return s.jsxs("button",{onClick:()=>{G.playClick(),x(c.id),M("editor")},className:`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 ${f?"bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]":"bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[s.jsx(l,{size:14}),s.jsx("span",{children:c.label})]},c.id)})}),s.jsxs("div",{className:"lg:hidden flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs",children:[s.jsx("button",{onClick:()=>M("editor"),className:`px-3 py-1 rounded-lg font-bold transition-all ${u==="editor"?"bg-amber-500 text-slate-950":"text-slate-400"}`,children:"Code"}),s.jsx("button",{onClick:()=>M("preview"),className:`px-3 py-1 rounded-lg font-bold transition-all ${u==="preview"?"bg-amber-500 text-slate-950":"text-slate-400"}`,children:"Live View"})]})]}),w==="web"&&s.jsxs("div",{className:"p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/80 to-purple-950/40 border border-cyan-500/30 shadow-lg space-y-3",children:[s.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300",children:s.jsx(ht,{size:16})}),s.jsxs("div",{children:[s.jsxs("h3",{className:"text-xs sm:text-sm font-bold text-white flex items-center gap-1.5",children:[s.jsx("span",{children:"1-Click Starter Presets"}),s.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono",children:"15 Templates"})]}),s.jsx("p",{className:"text-[11px] text-slate-400 hidden sm:block",children:"Launch ready-to-run arcade games, CSS FX, and mini-apps instantly."})]})]}),s.jsxs("button",{onClick:()=>{G.playClick(),k(!0)},className:"px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all",children:[s.jsx(sm,{size:13,className:"text-slate-950 fill-current"}),s.jsx("span",{children:"Browse All 15 Templates »"})]})]}),s.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto touch-scroll pb-1",children:[aa.slice(0,7).map(c=>s.jsxs("button",{onClick:()=>Oe(c),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs transition-all whitespace-nowrap active:scale-95 group shadow-sm ${L===c.title?"bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-bold":"bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400 text-slate-200"}`,children:[s.jsx("span",{className:"text-sm",children:c.icon}),s.jsx("span",{className:"group-hover:text-cyan-300",children:c.title})]},c.id)),s.jsxs("button",{onClick:()=>{G.playClick(),k(!0)},className:"flex items-center gap-1 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 text-xs font-bold whitespace-nowrap",children:[s.jsx("span",{children:"+8 More..."}),s.jsx(li,{size:13})]})]}),L&&L!=="Default Sandbox"&&s.jsxs("div",{className:"flex items-center justify-between text-[11px] bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800/80",children:[s.jsxs("span",{className:"text-slate-300 flex items-center gap-1.5 font-mono",children:[s.jsx("span",{className:"text-cyan-400 animate-pulse",children:"●"})," Active Preset: ",s.jsx("strong",{className:"text-white",children:L})]}),s.jsxs("button",{onClick:_e,className:"flex items-center gap-1 text-[11px] text-slate-400 hover:text-amber-400 underline transition-colors",children:[s.jsx(Dt,{size:11}),s.jsx("span",{children:"Reset to Blank"})]})]})]}),w==="web"&&s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6",children:[s.jsxs("div",{className:`glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3 sm:space-y-4 ${u==="preview"?"hidden lg:block":"block"}`,children:[s.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2",children:[s.jsx("div",{className:"flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs",children:["html","css","js"].map(c=>s.jsx("button",{onClick:()=>V(c),className:`px-2.5 py-1 rounded-lg font-mono font-bold uppercase text-[11px] transition-all ${j===c?"bg-cyan-500 text-slate-950":"text-slate-400 hover:text-slate-200"}`,children:c},c))}),s.jsxs("button",{onClick:be,className:"px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-transform",children:[s.jsx(Vt,{size:13,className:"fill-current"}),s.jsx("span",{children:"Run Live View"})]})]}),s.jsxs("div",{className:"font-mono text-xs",children:[j==="html"&&s.jsxs("div",{children:[s.jsx("div",{className:"text-[10px] text-orange-400 font-bold uppercase mb-1",children:"index.html"}),s.jsx("textarea",{value:_,onChange:c=>X(c.target.value),className:"w-full h-64 sm:h-72 p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-400 font-mono text-xs",spellCheck:"false"})]}),j==="css"&&s.jsxs("div",{children:[s.jsx("div",{className:"text-[10px] text-cyan-400 font-bold uppercase mb-1",children:"styles.css"}),s.jsx("textarea",{value:q,onChange:c=>ee(c.target.value),className:"w-full h-64 sm:h-72 p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-400 font-mono text-xs",spellCheck:"false"})]}),j==="js"&&s.jsxs("div",{children:[s.jsx("div",{className:"text-[10px] text-yellow-400 font-bold uppercase mb-1",children:"script.js"}),s.jsx("textarea",{value:z,onChange:c=>H(c.target.value),className:"w-full h-64 sm:h-72 p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-400 font-mono text-xs",spellCheck:"false"})]})]})]}),s.jsxs("div",{className:`glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 flex flex-col space-y-3 ${u==="editor"?"hidden lg:flex":"flex"}`,children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("span",{className:"text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-1.5",children:[s.jsx(Rd,{size:13}),"Live Preview"]}),s.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:"Sandbox Frame"})]}),s.jsx("div",{className:"rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex-1 min-h-[300px] sm:min-h-[350px]",children:T?s.jsx("iframe",{title:"Web Playground Preview",srcDoc:T,className:"w-full h-full min-h-[300px] sm:min-h-[350px] border-none",sandbox:"allow-scripts allow-modals"}):s.jsxs("div",{className:"flex flex-col items-center justify-center h-full p-8 text-center text-slate-500 font-mono text-xs min-h-[250px]",children:[s.jsx(Vt,{size:28,className:"mb-2 opacity-40 text-cyan-400"}),s.jsx("span",{children:'Click "Run Live View" to generate preview!'})]})})]})]}),w==="python"&&s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6",children:[s.jsxs("div",{className:`glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3 ${u==="preview"?"hidden lg:block":"block"}`,children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:"text-xs font-mono text-blue-400 font-bold uppercase",children:"Python Script"}),s.jsxs("button",{onClick:B,className:"px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-transform",children:[s.jsx(Vt,{size:13,className:"fill-current"}),s.jsx("span",{children:"Execute Script"})]})]}),s.jsx("textarea",{value:D,onChange:c=>le(c.target.value),className:"w-full h-64 sm:h-72 p-3 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 focus:outline-none focus:border-blue-400",spellCheck:"false"})]}),s.jsxs("div",{className:`glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 flex flex-col space-y-3 ${u==="editor"?"hidden lg:flex":"flex"}`,children:[s.jsx("span",{className:"text-xs font-mono text-blue-400 font-bold uppercase",children:"Terminal (stdout)"}),s.jsx("div",{className:"rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex-1 p-3 sm:p-4 font-mono text-xs text-emerald-400 whitespace-pre-wrap min-h-[200px] sm:min-h-[280px]",children:ue||'# Click "Execute Script" to view terminal output.'})]})]}),w==="sql"&&s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6",children:[s.jsxs("div",{className:`glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3 ${u==="preview"?"hidden lg:block":"block"}`,children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:"text-xs font-mono text-emerald-400 font-bold uppercase",children:"SQL Query Box"}),s.jsxs("button",{onClick:se,className:"px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-transform",children:[s.jsx(Vt,{size:13,className:"fill-current"}),s.jsx("span",{children:"Run Query"})]})]}),s.jsx("textarea",{value:we,onChange:c=>ye(c.target.value),className:"w-full h-64 sm:h-72 p-3 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 focus:outline-none focus:border-emerald-400",spellCheck:"false"})]}),s.jsxs("div",{className:`glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 flex flex-col space-y-3 ${u==="editor"?"hidden lg:flex":"flex"}`,children:[s.jsx("span",{className:"text-xs font-mono text-emerald-400 font-bold uppercase",children:"Results Table"}),s.jsx("div",{className:"rounded-xl overflow-x-auto touch-scroll border border-slate-800 bg-slate-950 p-2 flex-1 min-h-[200px] sm:min-h-[280px]",children:s.jsxs("table",{className:"w-full text-left font-mono text-xs border-collapse",children:[s.jsx("thead",{children:s.jsx("tr",{className:"border-b border-slate-800 text-emerald-400",children:Object.keys(re[0]).map(c=>s.jsx("th",{className:"p-2 font-bold uppercase text-[9px] sm:text-[10px]",children:c},c))})}),s.jsx("tbody",{className:"divide-y divide-slate-800/60",children:re.map((c,l)=>s.jsx("tr",{className:"hover:bg-slate-900/60",children:Object.values(c).map((f,v)=>s.jsx("td",{className:"p-2 text-slate-200 text-xs",children:String(f)},v))},l))})]})})]})]}),g&&s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn",onClick:()=>k(!1),children:s.jsxs("div",{className:"w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-cyan-500/30 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden",onClick:c=>c.stopPropagation(),children:[s.jsxs("div",{className:"p-4 sm:p-6 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-cyan-950/30 to-purple-950/30 flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[11px] font-mono font-bold mb-1",children:[s.jsx(ht,{size:12}),s.jsx("span",{children:"BYTEVERSE TEMPLATE VAULT"})]}),s.jsx("h2",{className:"text-lg sm:text-2xl font-black text-white",children:"1-Click Ready-to-Run Starter Presets"}),s.jsx("p",{className:"text-xs text-slate-400 mt-1 max-w-xl",children:"Pick any full working game, CSS animation, UI widget, or web app. Click to load, hack the code, and see changes in real-time!"})]}),s.jsx("button",{onClick:()=>k(!1),className:"p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors",title:"Close",children:s.jsx(oa,{size:20})})]}),s.jsx("div",{className:"px-4 sm:px-6 py-3 border-b border-slate-800 bg-slate-900/60 flex items-center gap-2 overflow-x-auto touch-scroll",children:["All","Mini-Games","Visual FX","UI & Widgets","Web Apps"].map(c=>{const l=c==="All"?aa.length:aa.filter(v=>v.category===c).length,f=P===c;return s.jsxs("button",{onClick:()=>{G.playClick(),W(c)},className:`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${f?"bg-cyan-500 text-slate-950 shadow-md font-black":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:[s.jsx("span",{children:c}),s.jsx("span",{className:`text-[10px] px-1.5 py-0.2 rounded-full ${f?"bg-slate-950/30 text-slate-950":"bg-slate-900 text-slate-400"}`,children:l})]},c)})}),s.jsx("div",{className:"p-4 sm:p-6 overflow-y-auto space-y-4 max-h-[calc(90vh-190px)]",children:s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4",children:aa.filter(c=>P==="All"||c.category===P).map(c=>s.jsxs("div",{className:"group relative bg-slate-950/70 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/60 rounded-2xl p-4 transition-all duration-200 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-500/10",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-start justify-between gap-2 mb-2",children:[s.jsx("div",{className:"text-2xl p-2 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform",children:c.icon}),s.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 font-mono border border-slate-700",children:c.category})]}),s.jsx("h3",{className:"font-bold text-white text-sm group-hover:text-cyan-300 transition-colors",children:c.title}),s.jsx("p",{className:"text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed",children:c.description})]}),s.jsxs("button",{onClick:()=>Oe(c),className:"mt-4 w-full py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-md",children:[s.jsx(Vt,{size:13,className:"fill-current"}),s.jsx("span",{children:"Launch in Sandbox"})]})]},c.id))})}),s.jsxs("div",{className:"p-3 sm:p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400 flex-wrap gap-2",children:[s.jsx("span",{children:"💡 Tip: All starter code is 100% editable inside HTML, CSS, and JS tabs!"}),s.jsx("button",{onClick:()=>k(!1),className:"px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors",children:"Close"})]})]})})]})},fd=[{id:"first_step",title:"First Byte",description:"Solve your very first coding challenge in ByteVerse",icon:"Sparkles",color:"text-cyan-400",bg:"bg-cyan-500/10 border-cyan-500/30"},{id:"html_master",title:"HTML Architect",description:"Complete all levels in the HTML Tower Builder",icon:"Code2",color:"text-orange-400",bg:"bg-orange-500/10 border-orange-500/30"},{id:"css_wizard",title:"Style Wizard",description:"Conquer the Flexbox & Grid Arena in CSS",icon:"Palette",color:"text-blue-400",bg:"bg-blue-500/10 border-blue-500/30"},{id:"js_ninja",title:"Bug Exterminator",description:"Smash every bug in the JavaScript Logic Lab",icon:"Terminal",color:"text-yellow-400",bg:"bg-yellow-500/10 border-yellow-500/30"},{id:"python_charmer",title:"Python Charmer",description:"Complete the Python Algorithm Maze",icon:"Sparkles",color:"text-indigo-400",bg:"bg-indigo-500/10 border-indigo-500/30"},{id:"sql_sleuth",title:"SQL Sleuth",description:"Crack the Heist Mystery by executing SQL queries",icon:"Database",color:"text-emerald-400",bg:"bg-emerald-500/10 border-emerald-500/30"},{id:"server_chef",title:"Server Chef",description:"Master PHP $_GET, $_POST and server responses",icon:"Server",color:"text-purple-400",bg:"bg-purple-500/10 border-purple-500/30"},{id:"django_captain",title:"Django Architect",description:"Master Django MTV architecture and URL routing",icon:"Layers",color:"text-emerald-500",bg:"bg-emerald-600/10 border-emerald-600/30"},{id:"streak_master",title:"Flame Keeper",description:"Maintain an active daily learning streak",icon:"Flame",color:"text-rose-400",bg:"bg-rose-500/10 border-rose-500/30"},{id:"duelist",title:"Co-Op Gladiator",description:"Play a 2-Player Split-Screen Code Duel in Co-Op Arena",icon:"Users",color:"text-pink-400",bg:"bg-pink-500/10 border-pink-500/30"},{id:"scholar",title:"Academy Scholar",description:"Study 3 language guides in the pure Study Academy",icon:"BookOpen",color:"text-teal-400",bg:"bg-teal-500/10 border-teal-500/30"}],jm={Sparkles:ht,Code2:ar,Palette:hi,Terminal:sr,Database:rr,Server:mi,Layers:pi,Flame:Hd,Users:gi,BookOpen:ui},Cm=()=>{const{isAchievementsOpen:w,setIsAchievementsOpen:x,achievements:u,xp:M,playerLevel:j,rankTitle:V}=mt();if(!w)return null;const g=()=>{G.playClick(),x(!1)};return s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn",children:s.jsxs("div",{className:"relative w-full max-w-2xl rounded-3xl glass-panel border border-slate-700 bg-slate-950 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col",onClick:k=>k.stopPropagation(),children:[s.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"}),s.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"p-2.5 rounded-2xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/30",children:s.jsx(fi,{size:24})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:"Trophy & Badges Cabinet"}),s.jsxs("p",{className:"text-xs text-slate-400",children:["Lvl ",j," • ",V," • ",u.length," of ",fd.length," Unlocked"]})]})]}),s.jsx("button",{onClick:g,className:"p-2 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors",children:s.jsx(oa,{size:20})})]}),s.jsx("div",{className:"overflow-y-auto py-4 space-y-3 pr-1 my-2",children:s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:fd.map(k=>{const P=u.includes(k.id),W=jm[k.icon]||Fh;return s.jsxs("div",{className:`p-3.5 rounded-2xl border transition-all flex items-start gap-3.5 ${P?`${k.bg} shadow-sm`:"bg-slate-900/40 border-slate-800/80 opacity-50"}`,children:[s.jsx("div",{className:`p-2.5 rounded-xl border shrink-0 ${P?"bg-slate-950/80 border-slate-700/60":"bg-slate-950 border-slate-800 text-slate-600"}`,children:P?s.jsx(W,{size:20,className:k.color}):s.jsx(Xh,{size:20})}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsxs("div",{className:"flex items-center justify-between gap-1",children:[s.jsx("h4",{className:"font-bold text-sm text-white truncate",children:k.title}),P&&s.jsx("span",{className:"text-emerald-400 shrink-0",children:s.jsx(_t,{size:15})})]}),s.jsx("p",{className:"text-xs text-slate-400 mt-1 leading-snug",children:k.description})]})]},k.id)})})}),s.jsxs("div",{className:"pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400",children:[s.jsx("span",{children:"Earn XP across all tracks to unlock more prestige titles!"}),s.jsx("button",{onClick:g,className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-colors",children:"Close"})]})]})})},Tm=()=>{const{mode:w,setMode:x}=mt();return s.jsxs("div",{className:"min-h-screen flex flex-col bg-[#0a0d14] text-slate-100 cyber-grid",children:[s.jsx(am,{}),s.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8",children:[w==="arcade"&&s.jsx(hm,{}),w==="academy"&&s.jsx(wm,{}),w==="coop"&&s.jsx(km,{}),w==="playground"&&s.jsx(Sm,{})]}),s.jsx(Cm,{}),s.jsx("footer",{className:"border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-xl mt-20 pt-12 pb-10",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10",children:[s.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-purple-950/30 border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col md:flex-row items-center justify-between gap-6",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-cyan-500/20 shrink-0",children:s.jsx("div",{className:"w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-black font-mono text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400",children:"AS"})}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold",children:"Created & Engineered By"}),s.jsxs("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1",children:[s.jsx(ht,{size:10})," Verified Creator"]})]}),s.jsx("h3",{className:"text-xl sm:text-2xl font-black text-white tracking-tight",children:"Affan Sayed"}),s.jsx("p",{className:"text-xs sm:text-sm text-slate-400 max-w-xl mt-0.5",children:"Designed to teach complete coding fundamentals from 0% to mastery with W3-style interactive lessons, ELI5 5-year-old storytelling, and live mini-games."})]})]}),s.jsx("div",{className:"flex items-center gap-3 shrink-0",children:s.jsxs("a",{href:"https://affansayed.vercel.app/",target:"_blank",rel:"noreferrer",className:"px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-black text-xs shadow-lg shadow-cyan-500/25 transition-transform active:scale-95 flex items-center gap-1.5",children:[s.jsx("span",{children:"Visit Affan's Portfolio"}),s.jsx("span",{className:"text-slate-950",children:"→"})]})})]}),s.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-800/60",children:[s.jsx(xd,{size:"sm",showTagline:!1,onClick:()=>x("arcade")}),s.jsxs("div",{className:"flex items-center gap-6 text-xs text-slate-400 font-medium",children:[s.jsx("button",{onClick:()=>x("arcade"),className:"hover:text-cyan-400 transition-colors",children:"Arcade Games"}),s.jsx("button",{onClick:()=>x("academy"),className:"hover:text-emerald-400 transition-colors",children:"Study Academy"}),s.jsx("button",{onClick:()=>x("coop"),className:"hover:text-pink-400 transition-colors",children:"Co-Op Arena"}),s.jsx("button",{onClick:()=>x("playground"),className:"hover:text-amber-400 transition-colors",children:"Sandbox"})]}),s.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/40 text-xs font-mono shadow-md",children:[s.jsx("span",{className:"text-slate-400",children:"Masterminded by"}),s.jsx(Yh,{size:13,className:"text-rose-500 fill-current animate-pulse"}),s.jsx("span",{className:"font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400",children:"Affan Sayed"}),s.jsx("span",{className:"text-slate-600",children:"•"}),s.jsx("span",{className:"text-slate-400",children:"© 2026 ByteVerse"})]})]})]})})]})};function Nm(){return s.jsx(Eh,{children:s.jsx(Tm,{})})}Ch.createRoot(document.getElementById("root")).render(s.jsx(xh.StrictMode,{children:s.jsx(Nm,{})}));
