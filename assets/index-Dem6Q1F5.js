(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))T(S);new MutationObserver(S=>{for(const z of S)if(z.type==="childList")for(const g of z.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&T(g)}).observe(document,{childList:!0,subtree:!0});function u(S){const z={};return S.integrity&&(z.integrity=S.integrity),S.referrerPolicy&&(z.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?z.credentials="include":S.crossOrigin==="anonymous"?z.credentials="omit":z.credentials="same-origin",z}function T(S){if(S.ep)return;S.ep=!0;const z=u(S);fetch(S.href,z)}})();function Ld(w){return w&&w.__esModule&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w}var li={exports:{}},Xs={},ci={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd;function Ih(){if(xd)return we;xd=1;var w=Symbol.for("react.element"),m=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),g=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),L=Symbol.iterator;function _(l){return l===null||typeof l!="object"?null:(l=L&&l[L]||l["@@iterator"],typeof l=="function"?l:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,K={};function C(l,f,D){this.props=l,this.context=f,this.refs=K,this.updater=D||J}C.prototype.isReactComponent={},C.prototype.setState=function(l,f){if(typeof l!="object"&&typeof l!="function"&&l!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,l,f,"setState")},C.prototype.forceUpdate=function(l){this.updater.enqueueForceUpdate(this,l,"forceUpdate")};function W(){}W.prototype=C.prototype;function P(l,f,D){this.props=l,this.context=f,this.refs=K,this.updater=D||J}var M=P.prototype=new W;M.constructor=P,G(M,C.prototype),M.isPureReactComponent=!0;var F=Array.isArray,ee=Object.prototype.hasOwnProperty,ue={current:null},te={key:!0,ref:!0,__self:!0,__source:!0};function ve(l,f,D){var B,Y={},Q=null,N=null;if(f!=null)for(B in f.ref!==void 0&&(N=f.ref),f.key!==void 0&&(Q=""+f.key),f)ee.call(f,B)&&!te.hasOwnProperty(B)&&(Y[B]=f[B]);var U=arguments.length-2;if(U===1)Y.children=D;else if(1<U){for(var se=Array(U),de=0;de<U;de++)se[de]=arguments[de+2];Y.children=se}if(l&&l.defaultProps)for(B in U=l.defaultProps,U)Y[B]===void 0&&(Y[B]=U[B]);return{$$typeof:w,type:l,key:Q,ref:N,props:Y,_owner:ue.current}}function ke(l,f){return{$$typeof:w,type:l.type,key:f,ref:l.ref,props:l.props,_owner:l._owner}}function ye(l){return typeof l=="object"&&l!==null&&l.$$typeof===w}function Te(l){var f={"=":"=0",":":"=2"};return"$"+l.replace(/[=:]/g,function(D){return f[D]})}var je=/\/+/g;function Ee(l,f){return typeof l=="object"&&l!==null&&l.key!=null?Te(""+l.key):f.toString(36)}function fe(l,f,D,B,Y){var Q=typeof l;(Q==="undefined"||Q==="boolean")&&(l=null);var N=!1;if(l===null)N=!0;else switch(Q){case"string":case"number":N=!0;break;case"object":switch(l.$$typeof){case w:case m:N=!0}}if(N)return N=l,Y=Y(N),l=B===""?"."+Ee(N,0):B,F(Y)?(D="",l!=null&&(D=l.replace(je,"$&/")+"/"),fe(Y,f,D,"",function(de){return de})):Y!=null&&(ye(Y)&&(Y=ke(Y,D+(!Y.key||N&&N.key===Y.key?"":(""+Y.key).replace(je,"$&/")+"/")+l)),f.push(Y)),1;if(N=0,B=B===""?".":B+":",F(l))for(var U=0;U<l.length;U++){Q=l[U];var se=B+Ee(Q,U);N+=fe(Q,f,D,se,Y)}else if(se=_(l),typeof se=="function")for(l=se.call(l),U=0;!(Q=l.next()).done;)Q=Q.value,se=B+Ee(Q,U++),N+=fe(Q,f,D,se,Y);else if(Q==="object")throw f=String(l),Error("Objects are not valid as a React child (found: "+(f==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":f)+"). If you meant to render a collection of children, use an array instead.");return N}function ie(l,f,D){if(l==null)return l;var B=[],Y=0;return fe(l,B,"","",function(Q){return f.call(D,Q,Y++)}),B}function Ce(l){if(l._status===-1){var f=l._result;f=f(),f.then(function(D){(l._status===0||l._status===-1)&&(l._status=1,l._result=D)},function(D){(l._status===0||l._status===-1)&&(l._status=2,l._result=D)}),l._status===-1&&(l._status=0,l._result=f)}if(l._status===1)return l._result.default;throw l._result}var ce={current:null},b={transition:null},X={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:b,ReactCurrentOwner:ue};function c(){throw Error("act(...) is not supported in production builds of React.")}return we.Children={map:ie,forEach:function(l,f,D){ie(l,function(){f.apply(this,arguments)},D)},count:function(l){var f=0;return ie(l,function(){f++}),f},toArray:function(l){return ie(l,function(f){return f})||[]},only:function(l){if(!ye(l))throw Error("React.Children.only expected to receive a single React element child.");return l}},we.Component=C,we.Fragment=u,we.Profiler=S,we.PureComponent=P,we.StrictMode=T,we.Suspense=E,we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,we.act=c,we.cloneElement=function(l,f,D){if(l==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+l+".");var B=G({},l.props),Y=l.key,Q=l.ref,N=l._owner;if(f!=null){if(f.ref!==void 0&&(Q=f.ref,N=ue.current),f.key!==void 0&&(Y=""+f.key),l.type&&l.type.defaultProps)var U=l.type.defaultProps;for(se in f)ee.call(f,se)&&!te.hasOwnProperty(se)&&(B[se]=f[se]===void 0&&U!==void 0?U[se]:f[se])}var se=arguments.length-2;if(se===1)B.children=D;else if(1<se){U=Array(se);for(var de=0;de<se;de++)U[de]=arguments[de+2];B.children=U}return{$$typeof:w,type:l.type,key:Y,ref:Q,props:B,_owner:N}},we.createContext=function(l){return l={$$typeof:g,_currentValue:l,_currentValue2:l,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},l.Provider={$$typeof:z,_context:l},l.Consumer=l},we.createElement=ve,we.createFactory=function(l){var f=ve.bind(null,l);return f.type=l,f},we.createRef=function(){return{current:null}},we.forwardRef=function(l){return{$$typeof:k,render:l}},we.isValidElement=ye,we.lazy=function(l){return{$$typeof:A,_payload:{_status:-1,_result:l},_init:Ce}},we.memo=function(l,f){return{$$typeof:q,type:l,compare:f===void 0?null:f}},we.startTransition=function(l){var f=b.transition;b.transition={};try{l()}finally{b.transition=f}},we.unstable_act=c,we.useCallback=function(l,f){return ce.current.useCallback(l,f)},we.useContext=function(l){return ce.current.useContext(l)},we.useDebugValue=function(){},we.useDeferredValue=function(l){return ce.current.useDeferredValue(l)},we.useEffect=function(l,f){return ce.current.useEffect(l,f)},we.useId=function(){return ce.current.useId()},we.useImperativeHandle=function(l,f,D){return ce.current.useImperativeHandle(l,f,D)},we.useInsertionEffect=function(l,f){return ce.current.useInsertionEffect(l,f)},we.useLayoutEffect=function(l,f){return ce.current.useLayoutEffect(l,f)},we.useMemo=function(l,f){return ce.current.useMemo(l,f)},we.useReducer=function(l,f,D){return ce.current.useReducer(l,f,D)},we.useRef=function(l){return ce.current.useRef(l)},we.useState=function(l){return ce.current.useState(l)},we.useSyncExternalStore=function(l,f,D){return ce.current.useSyncExternalStore(l,f,D)},we.useTransition=function(){return ce.current.useTransition()},we.version="18.3.1",we}var gd;function ji(){return gd||(gd=1,ci.exports=Ih()),ci.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function Ah(){if(yd)return Xs;yd=1;var w=ji(),m=Symbol.for("react.element"),u=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,S=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z={key:!0,ref:!0,__self:!0,__source:!0};function g(k,E,q){var A,L={},_=null,J=null;q!==void 0&&(_=""+q),E.key!==void 0&&(_=""+E.key),E.ref!==void 0&&(J=E.ref);for(A in E)T.call(E,A)&&!z.hasOwnProperty(A)&&(L[A]=E[A]);if(k&&k.defaultProps)for(A in E=k.defaultProps,E)L[A]===void 0&&(L[A]=E[A]);return{$$typeof:m,type:k,key:_,ref:J,props:L,_owner:S.current}}return Xs.Fragment=u,Xs.jsx=g,Xs.jsxs=g,Xs}var bd;function Rh(){return bd||(bd=1,li.exports=Ah()),li.exports}var n=Rh(),j=ji();const Oh=Ld(j);var ha={},di={exports:{}},ft={},ui={exports:{}},pi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd;function Dh(){return vd||(vd=1,(function(w){function m(b,X){var c=b.length;b.push(X);e:for(;0<c;){var l=c-1>>>1,f=b[l];if(0<S(f,X))b[l]=X,b[c]=f,c=l;else break e}}function u(b){return b.length===0?null:b[0]}function T(b){if(b.length===0)return null;var X=b[0],c=b.pop();if(c!==X){b[0]=c;e:for(var l=0,f=b.length,D=f>>>1;l<D;){var B=2*(l+1)-1,Y=b[B],Q=B+1,N=b[Q];if(0>S(Y,c))Q<f&&0>S(N,Y)?(b[l]=N,b[Q]=c,l=Q):(b[l]=Y,b[B]=c,l=B);else if(Q<f&&0>S(N,c))b[l]=N,b[Q]=c,l=Q;else break e}}return X}function S(b,X){var c=b.sortIndex-X.sortIndex;return c!==0?c:b.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var z=performance;w.unstable_now=function(){return z.now()}}else{var g=Date,k=g.now();w.unstable_now=function(){return g.now()-k}}var E=[],q=[],A=1,L=null,_=3,J=!1,G=!1,K=!1,C=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(b){for(var X=u(q);X!==null;){if(X.callback===null)T(q);else if(X.startTime<=b)T(q),X.sortIndex=X.expirationTime,m(E,X);else break;X=u(q)}}function F(b){if(K=!1,M(b),!G)if(u(E)!==null)G=!0,Ce(ee);else{var X=u(q);X!==null&&ce(F,X.startTime-b)}}function ee(b,X){G=!1,K&&(K=!1,W(ve),ve=-1),J=!0;var c=_;try{for(M(X),L=u(E);L!==null&&(!(L.expirationTime>X)||b&&!Te());){var l=L.callback;if(typeof l=="function"){L.callback=null,_=L.priorityLevel;var f=l(L.expirationTime<=X);X=w.unstable_now(),typeof f=="function"?L.callback=f:L===u(E)&&T(E),M(X)}else T(E);L=u(E)}if(L!==null)var D=!0;else{var B=u(q);B!==null&&ce(F,B.startTime-X),D=!1}return D}finally{L=null,_=c,J=!1}}var ue=!1,te=null,ve=-1,ke=5,ye=-1;function Te(){return!(w.unstable_now()-ye<ke)}function je(){if(te!==null){var b=w.unstable_now();ye=b;var X=!0;try{X=te(!0,b)}finally{X?Ee():(ue=!1,te=null)}}else ue=!1}var Ee;if(typeof P=="function")Ee=function(){P(je)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ie=fe.port2;fe.port1.onmessage=je,Ee=function(){ie.postMessage(null)}}else Ee=function(){C(je,0)};function Ce(b){te=b,ue||(ue=!0,Ee())}function ce(b,X){ve=C(function(){b(w.unstable_now())},X)}w.unstable_IdlePriority=5,w.unstable_ImmediatePriority=1,w.unstable_LowPriority=4,w.unstable_NormalPriority=3,w.unstable_Profiling=null,w.unstable_UserBlockingPriority=2,w.unstable_cancelCallback=function(b){b.callback=null},w.unstable_continueExecution=function(){G||J||(G=!0,Ce(ee))},w.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<b?Math.floor(1e3/b):5},w.unstable_getCurrentPriorityLevel=function(){return _},w.unstable_getFirstCallbackNode=function(){return u(E)},w.unstable_next=function(b){switch(_){case 1:case 2:case 3:var X=3;break;default:X=_}var c=_;_=X;try{return b()}finally{_=c}},w.unstable_pauseExecution=function(){},w.unstable_requestPaint=function(){},w.unstable_runWithPriority=function(b,X){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var c=_;_=b;try{return X()}finally{_=c}},w.unstable_scheduleCallback=function(b,X,c){var l=w.unstable_now();switch(typeof c=="object"&&c!==null?(c=c.delay,c=typeof c=="number"&&0<c?l+c:l):c=l,b){case 1:var f=-1;break;case 2:f=250;break;case 5:f=1073741823;break;case 4:f=1e4;break;default:f=5e3}return f=c+f,b={id:A++,callback:X,priorityLevel:b,startTime:c,expirationTime:f,sortIndex:-1},c>l?(b.sortIndex=c,m(q,b),u(E)===null&&b===u(q)&&(K?(W(ve),ve=-1):K=!0,ce(F,c-l))):(b.sortIndex=f,m(E,b),G||J||(G=!0,Ce(ee))),b},w.unstable_shouldYield=Te,w.unstable_wrapCallback=function(b){var X=_;return function(){var c=_;_=X;try{return b.apply(this,arguments)}finally{_=c}}}})(pi)),pi}var wd;function Hh(){return wd||(wd=1,ui.exports=Dh()),ui.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function zh(){if(kd)return ft;kd=1;var w=ji(),m=Hh();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var T=new Set,S={};function z(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(S[e]=t,e=0;e<t.length;e++)T.add(t[e])}var k=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),E=Object.prototype.hasOwnProperty,q=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,A={},L={};function _(e){return E.call(L,e)?!0:E.call(A,e)?!1:q.test(e)?L[e]=!0:(A[e]=!0,!1)}function J(e,t,s,r){if(s!==null&&s.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function G(e,t,s,r){if(t===null||typeof t>"u"||J(e,t,s,r))return!0;if(r)return!1;if(s!==null)switch(s.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function K(e,t,s,r,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=s,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var C={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){C[e]=new K(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];C[t]=new K(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){C[e]=new K(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){C[e]=new K(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){C[e]=new K(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){C[e]=new K(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){C[e]=new K(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){C[e]=new K(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){C[e]=new K(e,5,!1,e.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function P(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(W,P);C[t]=new K(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(W,P);C[t]=new K(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(W,P);C[t]=new K(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){C[e]=new K(e,1,!1,e.toLowerCase(),null,!1,!1)}),C.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){C[e]=new K(e,1,!1,e.toLowerCase(),null,!0,!0)});function M(e,t,s,r){var a=C.hasOwnProperty(t)?C[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(G(t,s,a,r)&&(s=null),r||a===null?_(t)&&(s===null?e.removeAttribute(t):e.setAttribute(t,""+s)):a.mustUseProperty?e[a.propertyName]=s===null?a.type===3?!1:"":s:(t=a.attributeName,r=a.attributeNamespace,s===null?e.removeAttribute(t):(a=a.type,s=a===3||a===4&&s===!0?"":""+s,r?e.setAttributeNS(r,t,s):e.setAttribute(t,s))))}var F=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ee=Symbol.for("react.element"),ue=Symbol.for("react.portal"),te=Symbol.for("react.fragment"),ve=Symbol.for("react.strict_mode"),ke=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),Te=Symbol.for("react.context"),je=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),b=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=b&&e[b]||e["@@iterator"],typeof e=="function"?e:null)}var c=Object.assign,l;function f(e){if(l===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);l=t&&t[1]||""}return`
`+l+e}var D=!1;function B(e,t){if(!e||D)return"";D=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(v){var r=v}Reflect.construct(e,[],t)}else{try{t.call()}catch(v){r=v}e.call(t.prototype)}else{try{throw Error()}catch(v){r=v}e()}}catch(v){if(v&&r&&typeof v.stack=="string"){for(var a=v.stack.split(`
`),o=r.stack.split(`
`),i=a.length-1,d=o.length-1;1<=i&&0<=d&&a[i]!==o[d];)d--;for(;1<=i&&0<=d;i--,d--)if(a[i]!==o[d]){if(i!==1||d!==1)do if(i--,d--,0>d||a[i]!==o[d]){var p=`
`+a[i].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=i&&0<=d);break}}}finally{D=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?f(e):""}function Y(e){switch(e.tag){case 5:return f(e.type);case 16:return f("Lazy");case 13:return f("Suspense");case 19:return f("SuspenseList");case 0:case 2:case 15:return e=B(e.type,!1),e;case 11:return e=B(e.type.render,!1),e;case 1:return e=B(e.type,!0),e;default:return""}}function Q(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case te:return"Fragment";case ue:return"Portal";case ke:return"Profiler";case ve:return"StrictMode";case Ee:return"Suspense";case fe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Te:return(e.displayName||"Context")+".Consumer";case ye:return(e._context.displayName||"Context")+".Provider";case je:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ie:return t=e.displayName||null,t!==null?t:Q(e.type)||"Memo";case Ce:t=e._payload,e=e._init;try{return Q(e(t))}catch{}}return null}function N(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Q(t);case 8:return t===ve?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function U(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function se(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function de(e){var t=se(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var a=s.get,o=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function be(e){e._valueTracker||(e._valueTracker=de(e))}function Se(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),r="";return e&&(r=se(e)?e.checked?"true":"false":e.value),e=r,e!==s?(t.setValue(e),!0):!1}function Pe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ge(e,t){var s=t.checked;return c({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function qe(e,t){var s=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;s=U(t.value!=null?t.value:s),e._wrapperState={initialChecked:r,initialValue:s,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Je(e,t){t=t.checked,t!=null&&M(e,"checked",t,!1)}function V(e,t){Je(e,t);var s=U(t.value),r=t.type;if(s!=null)r==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_e(e,t.type,s):t.hasOwnProperty("defaultValue")&&_e(e,t.type,U(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function me(e,t,s){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,s||t===e.value||(e.value=t),e.defaultValue=t}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function _e(e,t,s){(t!=="number"||Pe(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var De=Array.isArray;function ct(e,t,s,r){if(e=e.options,t){t={};for(var a=0;a<s.length;a++)t["$"+s[a]]=!0;for(s=0;s<e.length;s++)a=t.hasOwnProperty("$"+e[s].value),e[s].selected!==a&&(e[s].selected=a),a&&r&&(e[s].defaultSelected=!0)}else{for(s=""+U(s),t=null,a=0;a<e.length;a++){if(e[a].value===s){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function us(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return c({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sr(e,t){var s=t.value;if(s==null){if(s=t.children,t=t.defaultValue,s!=null){if(t!=null)throw Error(u(92));if(De(s)){if(1<s.length)throw Error(u(93));s=s[0]}t=s}t==null&&(t=""),s=t}e._wrapperState={initialValue:U(s)}}function ps(e,t){var s=U(t.value),r=U(t.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),t.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),r!=null&&(e.defaultValue=""+r)}function rr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ms(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hn,fs=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,s,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,s,r,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hn=Hn||document.createElement("div"),Hn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yt(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var qt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ya=["Webkit","ms","Moz","O"];Object.keys(qt).forEach(function(e){ya.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qt[t]=qt[e]})});function ar(e,t,s){return t==null||typeof t=="boolean"||t===""?"":s||typeof t!="number"||t===0||qt.hasOwnProperty(e)&&qt[e]?(""+t).trim():t+"px"}function Mi(e,t){e=e.style;for(var s in t)if(t.hasOwnProperty(s)){var r=s.indexOf("--")===0,a=ar(s,t[s],r);s==="float"&&(s="cssFloat"),r?e.setProperty(s,a):e[s]=a}}var Hu=c({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ba(e,t){if(t){if(Hu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function va(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wa=null;function ka(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sa=null,zn=null,qn=null;function Ii(e){if(e=Ds(e)){if(typeof Sa!="function")throw Error(u(280));var t=e.stateNode;t&&(t=Er(t),Sa(e.stateNode,e.type,t))}}function Ai(e){zn?qn?qn.push(e):qn=[e]:zn=e}function Ri(){if(zn){var e=zn,t=qn;if(qn=zn=null,Ii(e),t)for(e=0;e<t.length;e++)Ii(t[e])}}function Oi(e,t){return e(t)}function Di(){}var ja=!1;function Hi(e,t,s){if(ja)return e(t,s);ja=!0;try{return Oi(e,t,s)}finally{ja=!1,(zn!==null||qn!==null)&&(Di(),Ri())}}function xs(e,t){var s=e.stateNode;if(s===null)return null;var r=Er(s);if(r===null)return null;s=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(u(231,t,typeof s));return s}var Ta=!1;if(k)try{var gs={};Object.defineProperty(gs,"passive",{get:function(){Ta=!0}}),window.addEventListener("test",gs,gs),window.removeEventListener("test",gs,gs)}catch{Ta=!1}function zu(e,t,s,r,a,o,i,d,p){var v=Array.prototype.slice.call(arguments,3);try{t.apply(s,v)}catch(O){this.onError(O)}}var ys=!1,or=null,ir=!1,Ca=null,qu={onError:function(e){ys=!0,or=e}};function Fu(e,t,s,r,a,o,i,d,p){ys=!1,or=null,zu.apply(qu,arguments)}function Wu(e,t,s,r,a,o,i,d,p){if(Fu.apply(this,arguments),ys){if(ys){var v=or;ys=!1,or=null}else throw Error(u(198));ir||(ir=!0,Ca=v)}}function bn(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function zi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qi(e){if(bn(e)!==e)throw Error(u(188))}function $u(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(u(188));return t!==e?null:e}for(var s=e,r=t;;){var a=s.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){s=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===s)return qi(a),e;if(o===r)return qi(a),t;o=o.sibling}throw Error(u(188))}if(s.return!==r.return)s=a,r=o;else{for(var i=!1,d=a.child;d;){if(d===s){i=!0,s=a,r=o;break}if(d===r){i=!0,r=a,s=o;break}d=d.sibling}if(!i){for(d=o.child;d;){if(d===s){i=!0,s=o,r=a;break}if(d===r){i=!0,r=o,s=a;break}d=d.sibling}if(!i)throw Error(u(189))}}if(s.alternate!==r)throw Error(u(190))}if(s.tag!==3)throw Error(u(188));return s.stateNode.current===s?e:t}function Fi(e){return e=$u(e),e!==null?Wi(e):null}function Wi(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wi(e);if(t!==null)return t;e=e.sibling}return null}var $i=m.unstable_scheduleCallback,Bi=m.unstable_cancelCallback,Bu=m.unstable_shouldYield,Uu=m.unstable_requestPaint,We=m.unstable_now,Vu=m.unstable_getCurrentPriorityLevel,Na=m.unstable_ImmediatePriority,Ui=m.unstable_UserBlockingPriority,lr=m.unstable_NormalPriority,Gu=m.unstable_LowPriority,Vi=m.unstable_IdlePriority,cr=null,At=null;function Qu(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(cr,e,void 0,(e.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:Ku,Yu=Math.log,Ju=Math.LN2;function Ku(e){return e>>>=0,e===0?32:31-(Yu(e)/Ju|0)|0}var dr=64,ur=4194304;function bs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pr(e,t){var s=e.pendingLanes;if(s===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=s&268435455;if(i!==0){var d=i&~a;d!==0?r=bs(d):(o&=i,o!==0&&(r=bs(o)))}else i=s&~a,i!==0?r=bs(i):o!==0&&(r=bs(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&a)===0&&(a=r&-r,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=s&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)s=31-Ct(t),a=1<<s,r|=e[s],t&=~a;return r}function Xu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zu(e,t){for(var s=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Ct(o),d=1<<i,p=a[i];p===-1?((d&s)===0||(d&r)!==0)&&(a[i]=Xu(d,t)):p<=t&&(e.expiredLanes|=d),o&=~d}}function Ea(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gi(){var e=dr;return dr<<=1,(dr&4194240)===0&&(dr=64),e}function Pa(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function vs(e,t,s){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ct(t),e[t]=s}function ep(e,t){var s=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<s;){var a=31-Ct(s),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,s&=~o}}function La(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var r=31-Ct(s),a=1<<r;a&t|e[r]&t&&(e[r]|=t),s&=~a}}var Me=0;function Qi(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Yi,_a,Ji,Ki,Xi,Ma=!1,hr=[],Jt=null,Kt=null,Xt=null,ws=new Map,ks=new Map,Zt=[],tp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zi(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":ws.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ks.delete(t.pointerId)}}function Ss(e,t,s,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:s,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Ds(t),t!==null&&_a(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function np(e,t,s,r,a){switch(t){case"focusin":return Jt=Ss(Jt,e,t,s,r,a),!0;case"dragenter":return Kt=Ss(Kt,e,t,s,r,a),!0;case"mouseover":return Xt=Ss(Xt,e,t,s,r,a),!0;case"pointerover":var o=a.pointerId;return ws.set(o,Ss(ws.get(o)||null,e,t,s,r,a)),!0;case"gotpointercapture":return o=a.pointerId,ks.set(o,Ss(ks.get(o)||null,e,t,s,r,a)),!0}return!1}function el(e){var t=vn(e.target);if(t!==null){var s=bn(t);if(s!==null){if(t=s.tag,t===13){if(t=zi(s),t!==null){e.blockedOn=t,Xi(e.priority,function(){Ji(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=Aa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var r=new s.constructor(s.type,s);wa=r,s.target.dispatchEvent(r),wa=null}else return t=Ds(s),t!==null&&_a(t),e.blockedOn=s,!1;t.shift()}return!0}function tl(e,t,s){mr(e)&&s.delete(t)}function sp(){Ma=!1,Jt!==null&&mr(Jt)&&(Jt=null),Kt!==null&&mr(Kt)&&(Kt=null),Xt!==null&&mr(Xt)&&(Xt=null),ws.forEach(tl),ks.forEach(tl)}function js(e,t){e.blockedOn===t&&(e.blockedOn=null,Ma||(Ma=!0,m.unstable_scheduleCallback(m.unstable_NormalPriority,sp)))}function Ts(e){function t(a){return js(a,e)}if(0<hr.length){js(hr[0],e);for(var s=1;s<hr.length;s++){var r=hr[s];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&js(Jt,e),Kt!==null&&js(Kt,e),Xt!==null&&js(Xt,e),ws.forEach(t),ks.forEach(t),s=0;s<Zt.length;s++)r=Zt[s],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zt.length&&(s=Zt[0],s.blockedOn===null);)el(s),s.blockedOn===null&&Zt.shift()}var Fn=F.ReactCurrentBatchConfig,fr=!0;function rp(e,t,s,r){var a=Me,o=Fn.transition;Fn.transition=null;try{Me=1,Ia(e,t,s,r)}finally{Me=a,Fn.transition=o}}function ap(e,t,s,r){var a=Me,o=Fn.transition;Fn.transition=null;try{Me=4,Ia(e,t,s,r)}finally{Me=a,Fn.transition=o}}function Ia(e,t,s,r){if(fr){var a=Aa(e,t,s,r);if(a===null)Ka(e,t,r,xr,s),Zi(e,r);else if(np(a,e,t,s,r))r.stopPropagation();else if(Zi(e,r),t&4&&-1<tp.indexOf(e)){for(;a!==null;){var o=Ds(a);if(o!==null&&Yi(o),o=Aa(e,t,s,r),o===null&&Ka(e,t,r,xr,s),o===a)break;a=o}a!==null&&r.stopPropagation()}else Ka(e,t,r,null,s)}}var xr=null;function Aa(e,t,s,r){if(xr=null,e=ka(r),e=vn(e),e!==null)if(t=bn(e),t===null)e=null;else if(s=t.tag,s===13){if(e=zi(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xr=e,null}function nl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vu()){case Na:return 1;case Ui:return 4;case lr:case Gu:return 16;case Vi:return 536870912;default:return 16}default:return 16}}var en=null,Ra=null,gr=null;function sl(){if(gr)return gr;var e,t=Ra,s=t.length,r,a="value"in en?en.value:en.textContent,o=a.length;for(e=0;e<s&&t[e]===a[e];e++);var i=s-e;for(r=1;r<=i&&t[s-r]===a[o-r];r++);return gr=a.slice(e,1<r?1-r:void 0)}function yr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function rl(){return!1}function xt(e){function t(s,r,a,o,i){this._reactName=s,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(s=e[d],this[d]=s?s(o):o[d]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?br:rl,this.isPropagationStopped=rl,this}return c(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oa=xt(Wn),Cs=c({},Wn,{view:0,detail:0}),op=xt(Cs),Da,Ha,Ns,vr=c({},Cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ns&&(Ns&&e.type==="mousemove"?(Da=e.screenX-Ns.screenX,Ha=e.screenY-Ns.screenY):Ha=Da=0,Ns=e),Da)},movementY:function(e){return"movementY"in e?e.movementY:Ha}}),al=xt(vr),ip=c({},vr,{dataTransfer:0}),lp=xt(ip),cp=c({},Cs,{relatedTarget:0}),za=xt(cp),dp=c({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),up=xt(dp),pp=c({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hp=xt(pp),mp=c({},Wn,{data:0}),ol=xt(mp),fp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gp[e])?!!t[e]:!1}function qa(){return yp}var bp=c({},Cs,{key:function(e){if(e.key){var t=fp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qa,charCode:function(e){return e.type==="keypress"?yr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vp=xt(bp),wp=c({},vr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),il=xt(wp),kp=c({},Cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qa}),Sp=xt(kp),jp=c({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tp=xt(jp),Cp=c({},vr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Np=xt(Cp),Ep=[9,13,27,32],Fa=k&&"CompositionEvent"in window,Es=null;k&&"documentMode"in document&&(Es=document.documentMode);var Pp=k&&"TextEvent"in window&&!Es,ll=k&&(!Fa||Es&&8<Es&&11>=Es),cl=" ",dl=!1;function ul(e,t){switch(e){case"keyup":return Ep.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function Lp(e,t){switch(e){case"compositionend":return pl(t);case"keypress":return t.which!==32?null:(dl=!0,cl);case"textInput":return e=t.data,e===cl&&dl?null:e;default:return null}}function _p(e,t){if($n)return e==="compositionend"||!Fa&&ul(e,t)?(e=sl(),gr=Ra=en=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ll&&t.locale!=="ko"?null:t.data;default:return null}}var Mp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mp[e.type]:t==="textarea"}function ml(e,t,s,r){Ai(r),t=Tr(t,"onChange"),0<t.length&&(s=new Oa("onChange","change",null,s,r),e.push({event:s,listeners:t}))}var Ps=null,Ls=null;function Ip(e){Ml(e,0)}function wr(e){var t=Qn(e);if(Se(t))return e}function Ap(e,t){if(e==="change")return t}var fl=!1;if(k){var Wa;if(k){var $a="oninput"in document;if(!$a){var xl=document.createElement("div");xl.setAttribute("oninput","return;"),$a=typeof xl.oninput=="function"}Wa=$a}else Wa=!1;fl=Wa&&(!document.documentMode||9<document.documentMode)}function gl(){Ps&&(Ps.detachEvent("onpropertychange",yl),Ls=Ps=null)}function yl(e){if(e.propertyName==="value"&&wr(Ls)){var t=[];ml(t,Ls,e,ka(e)),Hi(Ip,t)}}function Rp(e,t,s){e==="focusin"?(gl(),Ps=t,Ls=s,Ps.attachEvent("onpropertychange",yl)):e==="focusout"&&gl()}function Op(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wr(Ls)}function Dp(e,t){if(e==="click")return wr(t)}function Hp(e,t){if(e==="input"||e==="change")return wr(t)}function zp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:zp;function _s(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),r=Object.keys(t);if(s.length!==r.length)return!1;for(r=0;r<s.length;r++){var a=s[r];if(!E.call(t,a)||!Nt(e[a],t[a]))return!1}return!0}function bl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vl(e,t){var s=bl(e);e=0;for(var r;s;){if(s.nodeType===3){if(r=e+s.textContent.length,e<=t&&r>=t)return{node:s,offset:t-e};e=r}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=bl(s)}}function wl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kl(){for(var e=window,t=Pe();t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=Pe(e.document)}return t}function Ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qp(e){var t=kl(),s=e.focusedElem,r=e.selectionRange;if(t!==s&&s&&s.ownerDocument&&wl(s.ownerDocument.documentElement,s)){if(r!==null&&Ba(s)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in s)s.selectionStart=t,s.selectionEnd=Math.min(e,s.value.length);else if(e=(t=s.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=s.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=vl(s,o);var i=vl(s,r);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=s;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<t.length;s++)e=t[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fp=k&&"documentMode"in document&&11>=document.documentMode,Bn=null,Ua=null,Ms=null,Va=!1;function Sl(e,t,s){var r=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Va||Bn==null||Bn!==Pe(r)||(r=Bn,"selectionStart"in r&&Ba(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ms&&_s(Ms,r)||(Ms=r,r=Tr(Ua,"onSelect"),0<r.length&&(t=new Oa("onSelect","select",null,t,s),e.push({event:t,listeners:r}),t.target=Bn)))}function kr(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var Un={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Ga={},jl={};k&&(jl=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function Sr(e){if(Ga[e])return Ga[e];if(!Un[e])return e;var t=Un[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in jl)return Ga[e]=t[s];return e}var Tl=Sr("animationend"),Cl=Sr("animationiteration"),Nl=Sr("animationstart"),El=Sr("transitionend"),Pl=new Map,Ll="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){Pl.set(e,t),z(t,[e])}for(var Qa=0;Qa<Ll.length;Qa++){var Ya=Ll[Qa],Wp=Ya.toLowerCase(),$p=Ya[0].toUpperCase()+Ya.slice(1);tn(Wp,"on"+$p)}tn(Tl,"onAnimationEnd"),tn(Cl,"onAnimationIteration"),tn(Nl,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(El,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),z("onBeforeInput",["compositionend","keypress","textInput","paste"]),z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Is));function _l(e,t,s){var r=e.type||"unknown-event";e.currentTarget=s,Wu(r,t,void 0,e),e.currentTarget=null}function Ml(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var r=e[s],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var d=r[i],p=d.instance,v=d.currentTarget;if(d=d.listener,p!==o&&a.isPropagationStopped())break e;_l(a,d,v),o=p}else for(i=0;i<r.length;i++){if(d=r[i],p=d.instance,v=d.currentTarget,d=d.listener,p!==o&&a.isPropagationStopped())break e;_l(a,d,v),o=p}}}if(ir)throw e=Ca,ir=!1,Ca=null,e}function Ae(e,t){var s=t[so];s===void 0&&(s=t[so]=new Set);var r=e+"__bubble";s.has(r)||(Il(t,e,2,!1),s.add(r))}function Ja(e,t,s){var r=0;t&&(r|=4),Il(s,e,r,t)}var jr="_reactListening"+Math.random().toString(36).slice(2);function As(e){if(!e[jr]){e[jr]=!0,T.forEach(function(s){s!=="selectionchange"&&(Bp.has(s)||Ja(s,!1,e),Ja(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jr]||(t[jr]=!0,Ja("selectionchange",!1,t))}}function Il(e,t,s,r){switch(nl(t)){case 1:var a=rp;break;case 4:a=ap;break;default:a=Ia}s=a.bind(null,t,s,e),a=void 0,!Ta||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,s,{capture:!0,passive:a}):e.addEventListener(t,s,!0):a!==void 0?e.addEventListener(t,s,{passive:a}):e.addEventListener(t,s,!1)}function Ka(e,t,s,r,a){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var d=r.stateNode.containerInfo;if(d===a||d.nodeType===8&&d.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var p=i.tag;if((p===3||p===4)&&(p=i.stateNode.containerInfo,p===a||p.nodeType===8&&p.parentNode===a))return;i=i.return}for(;d!==null;){if(i=vn(d),i===null)return;if(p=i.tag,p===5||p===6){r=o=i;continue e}d=d.parentNode}}r=r.return}Hi(function(){var v=o,O=ka(s),H=[];e:{var I=Pl.get(e);if(I!==void 0){var Z=Oa,re=e;switch(e){case"keypress":if(yr(s)===0)break e;case"keydown":case"keyup":Z=vp;break;case"focusin":re="focus",Z=za;break;case"focusout":re="blur",Z=za;break;case"beforeblur":case"afterblur":Z=za;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=al;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=lp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=Sp;break;case Tl:case Cl:case Nl:Z=up;break;case El:Z=Tp;break;case"scroll":Z=op;break;case"wheel":Z=Np;break;case"copy":case"cut":case"paste":Z=hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=il}var ae=(t&4)!==0,$e=!ae&&e==="scroll",x=ae?I!==null?I+"Capture":null:I;ae=[];for(var h=v,y;h!==null;){y=h;var $=y.stateNode;if(y.tag===5&&$!==null&&(y=$,x!==null&&($=xs(h,x),$!=null&&ae.push(Rs(h,$,y)))),$e)break;h=h.return}0<ae.length&&(I=new Z(I,re,null,s,O),H.push({event:I,listeners:ae}))}}if((t&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",I&&s!==wa&&(re=s.relatedTarget||s.fromElement)&&(vn(re)||re[Ft]))break e;if((Z||I)&&(I=O.window===O?O:(I=O.ownerDocument)?I.defaultView||I.parentWindow:window,Z?(re=s.relatedTarget||s.toElement,Z=v,re=re?vn(re):null,re!==null&&($e=bn(re),re!==$e||re.tag!==5&&re.tag!==6)&&(re=null)):(Z=null,re=v),Z!==re)){if(ae=al,$="onMouseLeave",x="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(ae=il,$="onPointerLeave",x="onPointerEnter",h="pointer"),$e=Z==null?I:Qn(Z),y=re==null?I:Qn(re),I=new ae($,h+"leave",Z,s,O),I.target=$e,I.relatedTarget=y,$=null,vn(O)===v&&(ae=new ae(x,h+"enter",re,s,O),ae.target=y,ae.relatedTarget=$e,$=ae),$e=$,Z&&re)t:{for(ae=Z,x=re,h=0,y=ae;y;y=Vn(y))h++;for(y=0,$=x;$;$=Vn($))y++;for(;0<h-y;)ae=Vn(ae),h--;for(;0<y-h;)x=Vn(x),y--;for(;h--;){if(ae===x||x!==null&&ae===x.alternate)break t;ae=Vn(ae),x=Vn(x)}ae=null}else ae=null;Z!==null&&Al(H,I,Z,ae,!1),re!==null&&$e!==null&&Al(H,$e,re,ae,!0)}}e:{if(I=v?Qn(v):window,Z=I.nodeName&&I.nodeName.toLowerCase(),Z==="select"||Z==="input"&&I.type==="file")var oe=Ap;else if(hl(I))if(fl)oe=Hp;else{oe=Op;var pe=Rp}else(Z=I.nodeName)&&Z.toLowerCase()==="input"&&(I.type==="checkbox"||I.type==="radio")&&(oe=Dp);if(oe&&(oe=oe(e,v))){ml(H,oe,s,O);break e}pe&&pe(e,I,v),e==="focusout"&&(pe=I._wrapperState)&&pe.controlled&&I.type==="number"&&_e(I,"number",I.value)}switch(pe=v?Qn(v):window,e){case"focusin":(hl(pe)||pe.contentEditable==="true")&&(Bn=pe,Ua=v,Ms=null);break;case"focusout":Ms=Ua=Bn=null;break;case"mousedown":Va=!0;break;case"contextmenu":case"mouseup":case"dragend":Va=!1,Sl(H,s,O);break;case"selectionchange":if(Fp)break;case"keydown":case"keyup":Sl(H,s,O)}var he;if(Fa)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else $n?ul(e,s)&&(xe="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(xe="onCompositionStart");xe&&(ll&&s.locale!=="ko"&&($n||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&$n&&(he=sl()):(en=O,Ra="value"in en?en.value:en.textContent,$n=!0)),pe=Tr(v,xe),0<pe.length&&(xe=new ol(xe,e,null,s,O),H.push({event:xe,listeners:pe}),he?xe.data=he:(he=pl(s),he!==null&&(xe.data=he)))),(he=Pp?Lp(e,s):_p(e,s))&&(v=Tr(v,"onBeforeInput"),0<v.length&&(O=new ol("onBeforeInput","beforeinput",null,s,O),H.push({event:O,listeners:v}),O.data=he))}Ml(H,t)})}function Rs(e,t,s){return{instance:e,listener:t,currentTarget:s}}function Tr(e,t){for(var s=t+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=xs(e,s),o!=null&&r.unshift(Rs(e,o,a)),o=xs(e,t),o!=null&&r.push(Rs(e,o,a))),e=e.return}return r}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Al(e,t,s,r,a){for(var o=t._reactName,i=[];s!==null&&s!==r;){var d=s,p=d.alternate,v=d.stateNode;if(p!==null&&p===r)break;d.tag===5&&v!==null&&(d=v,a?(p=xs(s,o),p!=null&&i.unshift(Rs(s,p,d))):a||(p=xs(s,o),p!=null&&i.push(Rs(s,p,d)))),s=s.return}i.length!==0&&e.push({event:t,listeners:i})}var Up=/\r\n?/g,Vp=/\u0000|\uFFFD/g;function Rl(e){return(typeof e=="string"?e:""+e).replace(Up,`
`).replace(Vp,"")}function Cr(e,t,s){if(t=Rl(t),Rl(e)!==t&&s)throw Error(u(425))}function Nr(){}var Xa=null,Za=null;function eo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var to=typeof setTimeout=="function"?setTimeout:void 0,Gp=typeof clearTimeout=="function"?clearTimeout:void 0,Ol=typeof Promise=="function"?Promise:void 0,Qp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ol<"u"?function(e){return Ol.resolve(null).then(e).catch(Yp)}:to;function Yp(e){setTimeout(function(){throw e})}function no(e,t){var s=t,r=0;do{var a=s.nextSibling;if(e.removeChild(s),a&&a.nodeType===8)if(s=a.data,s==="/$"){if(r===0){e.removeChild(a),Ts(t);return}r--}else s!=="$"&&s!=="$?"&&s!=="$!"||r++;s=a}while(s);Ts(t)}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Dl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(t===0)return e;t--}else s==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),Rt="__reactFiber$"+Gn,Os="__reactProps$"+Gn,Ft="__reactContainer$"+Gn,so="__reactEvents$"+Gn,Jp="__reactListeners$"+Gn,Kp="__reactHandles$"+Gn;function vn(e){var t=e[Rt];if(t)return t;for(var s=e.parentNode;s;){if(t=s[Ft]||s[Rt]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=Dl(e);e!==null;){if(s=e[Rt])return s;e=Dl(e)}return t}e=s,s=e.parentNode}return null}function Ds(e){return e=e[Rt]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function Er(e){return e[Os]||null}var ro=[],Yn=-1;function sn(e){return{current:e}}function Re(e){0>Yn||(e.current=ro[Yn],ro[Yn]=null,Yn--)}function Ie(e,t){Yn++,ro[Yn]=e.current,e.current=t}var rn={},Ze=sn(rn),dt=sn(!1),wn=rn;function Jn(e,t){var s=e.type.contextTypes;if(!s)return rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in s)a[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function ut(e){return e=e.childContextTypes,e!=null}function Pr(){Re(dt),Re(Ze)}function Hl(e,t,s){if(Ze.current!==rn)throw Error(u(168));Ie(Ze,t),Ie(dt,s)}function zl(e,t,s){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return s;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(u(108,N(e)||"Unknown",a));return c({},s,r)}function Lr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,wn=Ze.current,Ie(Ze,e),Ie(dt,dt.current),!0}function ql(e,t,s){var r=e.stateNode;if(!r)throw Error(u(169));s?(e=zl(e,t,wn),r.__reactInternalMemoizedMergedChildContext=e,Re(dt),Re(Ze),Ie(Ze,e)):Re(dt),Ie(dt,s)}var Wt=null,_r=!1,ao=!1;function Fl(e){Wt===null?Wt=[e]:Wt.push(e)}function Xp(e){_r=!0,Fl(e)}function an(){if(!ao&&Wt!==null){ao=!0;var e=0,t=Me;try{var s=Wt;for(Me=1;e<s.length;e++){var r=s[e];do r=r(!0);while(r!==null)}Wt=null,_r=!1}catch(a){throw Wt!==null&&(Wt=Wt.slice(e+1)),$i(Na,an),a}finally{Me=t,ao=!1}}return null}var Kn=[],Xn=0,Mr=null,Ir=0,vt=[],wt=0,kn=null,$t=1,Bt="";function Sn(e,t){Kn[Xn++]=Ir,Kn[Xn++]=Mr,Mr=e,Ir=t}function Wl(e,t,s){vt[wt++]=$t,vt[wt++]=Bt,vt[wt++]=kn,kn=e;var r=$t;e=Bt;var a=32-Ct(r)-1;r&=~(1<<a),s+=1;var o=32-Ct(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,$t=1<<32-Ct(t)+a|s<<a|r,Bt=o+e}else $t=1<<o|s<<a|r,Bt=e}function oo(e){e.return!==null&&(Sn(e,1),Wl(e,1,0))}function io(e){for(;e===Mr;)Mr=Kn[--Xn],Kn[Xn]=null,Ir=Kn[--Xn],Kn[Xn]=null;for(;e===kn;)kn=vt[--wt],vt[wt]=null,Bt=vt[--wt],vt[wt]=null,$t=vt[--wt],vt[wt]=null}var gt=null,yt=null,Oe=!1,Et=null;function $l(e,t){var s=Tt(5,null,null,0);s.elementType="DELETED",s.stateNode=t,s.return=e,t=e.deletions,t===null?(e.deletions=[s],e.flags|=16):t.push(s)}function Bl(e,t){switch(e.tag){case 5:var s=e.type;return t=t.nodeType!==1||s.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,gt=e,yt=nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,gt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(s=kn!==null?{id:$t,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:s,retryLane:1073741824},s=Tt(18,null,null,0),s.stateNode=t,s.return=e,e.child=s,gt=e,yt=null,!0):!1;default:return!1}}function lo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function co(e){if(Oe){var t=yt;if(t){var s=t;if(!Bl(e,t)){if(lo(e))throw Error(u(418));t=nn(s.nextSibling);var r=gt;t&&Bl(e,t)?$l(r,s):(e.flags=e.flags&-4097|2,Oe=!1,gt=e)}}else{if(lo(e))throw Error(u(418));e.flags=e.flags&-4097|2,Oe=!1,gt=e}}}function Ul(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;gt=e}function Ar(e){if(e!==gt)return!1;if(!Oe)return Ul(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!eo(e.type,e.memoizedProps)),t&&(t=yt)){if(lo(e))throw Vl(),Error(u(418));for(;t;)$l(e,t),t=nn(t.nextSibling)}if(Ul(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(t===0){yt=nn(e.nextSibling);break e}t--}else s!=="$"&&s!=="$!"&&s!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=gt?nn(e.stateNode.nextSibling):null;return!0}function Vl(){for(var e=yt;e;)e=nn(e.nextSibling)}function Zn(){yt=gt=null,Oe=!1}function uo(e){Et===null?Et=[e]:Et.push(e)}var Zp=F.ReactCurrentBatchConfig;function Hs(e,t,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(u(309));var r=s.stateNode}if(!r)throw Error(u(147,e));var a=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var d=a.refs;i===null?delete d[o]:d[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(u(284));if(!s._owner)throw Error(u(290,e))}return e}function Rr(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gl(e){var t=e._init;return t(e._payload)}function Ql(e){function t(x,h){if(e){var y=x.deletions;y===null?(x.deletions=[h],x.flags|=16):y.push(h)}}function s(x,h){if(!e)return null;for(;h!==null;)t(x,h),h=h.sibling;return null}function r(x,h){for(x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function a(x,h){return x=mn(x,h),x.index=0,x.sibling=null,x}function o(x,h,y){return x.index=y,e?(y=x.alternate,y!==null?(y=y.index,y<h?(x.flags|=2,h):y):(x.flags|=2,h)):(x.flags|=1048576,h)}function i(x){return e&&x.alternate===null&&(x.flags|=2),x}function d(x,h,y,$){return h===null||h.tag!==6?(h=ni(y,x.mode,$),h.return=x,h):(h=a(h,y),h.return=x,h)}function p(x,h,y,$){var oe=y.type;return oe===te?O(x,h,y.props.children,$,y.key):h!==null&&(h.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Ce&&Gl(oe)===h.type)?($=a(h,y.props),$.ref=Hs(x,h,y),$.return=x,$):($=aa(y.type,y.key,y.props,null,x.mode,$),$.ref=Hs(x,h,y),$.return=x,$)}function v(x,h,y,$){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=si(y,x.mode,$),h.return=x,h):(h=a(h,y.children||[]),h.return=x,h)}function O(x,h,y,$,oe){return h===null||h.tag!==7?(h=_n(y,x.mode,$,oe),h.return=x,h):(h=a(h,y),h.return=x,h)}function H(x,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ni(""+h,x.mode,y),h.return=x,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ee:return y=aa(h.type,h.key,h.props,null,x.mode,y),y.ref=Hs(x,null,h),y.return=x,y;case ue:return h=si(h,x.mode,y),h.return=x,h;case Ce:var $=h._init;return H(x,$(h._payload),y)}if(De(h)||X(h))return h=_n(h,x.mode,y,null),h.return=x,h;Rr(x,h)}return null}function I(x,h,y,$){var oe=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return oe!==null?null:d(x,h,""+y,$);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ee:return y.key===oe?p(x,h,y,$):null;case ue:return y.key===oe?v(x,h,y,$):null;case Ce:return oe=y._init,I(x,h,oe(y._payload),$)}if(De(y)||X(y))return oe!==null?null:O(x,h,y,$,null);Rr(x,y)}return null}function Z(x,h,y,$,oe){if(typeof $=="string"&&$!==""||typeof $=="number")return x=x.get(y)||null,d(h,x,""+$,oe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case ee:return x=x.get($.key===null?y:$.key)||null,p(h,x,$,oe);case ue:return x=x.get($.key===null?y:$.key)||null,v(h,x,$,oe);case Ce:var pe=$._init;return Z(x,h,y,pe($._payload),oe)}if(De($)||X($))return x=x.get(y)||null,O(h,x,$,oe,null);Rr(h,$)}return null}function re(x,h,y,$){for(var oe=null,pe=null,he=h,xe=h=0,Ye=null;he!==null&&xe<y.length;xe++){he.index>xe?(Ye=he,he=null):Ye=he.sibling;var Le=I(x,he,y[xe],$);if(Le===null){he===null&&(he=Ye);break}e&&he&&Le.alternate===null&&t(x,he),h=o(Le,h,xe),pe===null?oe=Le:pe.sibling=Le,pe=Le,he=Ye}if(xe===y.length)return s(x,he),Oe&&Sn(x,xe),oe;if(he===null){for(;xe<y.length;xe++)he=H(x,y[xe],$),he!==null&&(h=o(he,h,xe),pe===null?oe=he:pe.sibling=he,pe=he);return Oe&&Sn(x,xe),oe}for(he=r(x,he);xe<y.length;xe++)Ye=Z(he,x,xe,y[xe],$),Ye!==null&&(e&&Ye.alternate!==null&&he.delete(Ye.key===null?xe:Ye.key),h=o(Ye,h,xe),pe===null?oe=Ye:pe.sibling=Ye,pe=Ye);return e&&he.forEach(function(fn){return t(x,fn)}),Oe&&Sn(x,xe),oe}function ae(x,h,y,$){var oe=X(y);if(typeof oe!="function")throw Error(u(150));if(y=oe.call(y),y==null)throw Error(u(151));for(var pe=oe=null,he=h,xe=h=0,Ye=null,Le=y.next();he!==null&&!Le.done;xe++,Le=y.next()){he.index>xe?(Ye=he,he=null):Ye=he.sibling;var fn=I(x,he,Le.value,$);if(fn===null){he===null&&(he=Ye);break}e&&he&&fn.alternate===null&&t(x,he),h=o(fn,h,xe),pe===null?oe=fn:pe.sibling=fn,pe=fn,he=Ye}if(Le.done)return s(x,he),Oe&&Sn(x,xe),oe;if(he===null){for(;!Le.done;xe++,Le=y.next())Le=H(x,Le.value,$),Le!==null&&(h=o(Le,h,xe),pe===null?oe=Le:pe.sibling=Le,pe=Le);return Oe&&Sn(x,xe),oe}for(he=r(x,he);!Le.done;xe++,Le=y.next())Le=Z(he,x,xe,Le.value,$),Le!==null&&(e&&Le.alternate!==null&&he.delete(Le.key===null?xe:Le.key),h=o(Le,h,xe),pe===null?oe=Le:pe.sibling=Le,pe=Le);return e&&he.forEach(function(Mh){return t(x,Mh)}),Oe&&Sn(x,xe),oe}function $e(x,h,y,$){if(typeof y=="object"&&y!==null&&y.type===te&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ee:e:{for(var oe=y.key,pe=h;pe!==null;){if(pe.key===oe){if(oe=y.type,oe===te){if(pe.tag===7){s(x,pe.sibling),h=a(pe,y.props.children),h.return=x,x=h;break e}}else if(pe.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Ce&&Gl(oe)===pe.type){s(x,pe.sibling),h=a(pe,y.props),h.ref=Hs(x,pe,y),h.return=x,x=h;break e}s(x,pe);break}else t(x,pe);pe=pe.sibling}y.type===te?(h=_n(y.props.children,x.mode,$,y.key),h.return=x,x=h):($=aa(y.type,y.key,y.props,null,x.mode,$),$.ref=Hs(x,h,y),$.return=x,x=$)}return i(x);case ue:e:{for(pe=y.key;h!==null;){if(h.key===pe)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){s(x,h.sibling),h=a(h,y.children||[]),h.return=x,x=h;break e}else{s(x,h);break}else t(x,h);h=h.sibling}h=si(y,x.mode,$),h.return=x,x=h}return i(x);case Ce:return pe=y._init,$e(x,h,pe(y._payload),$)}if(De(y))return re(x,h,y,$);if(X(y))return ae(x,h,y,$);Rr(x,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(s(x,h.sibling),h=a(h,y),h.return=x,x=h):(s(x,h),h=ni(y,x.mode,$),h.return=x,x=h),i(x)):s(x,h)}return $e}var es=Ql(!0),Yl=Ql(!1),Or=sn(null),Dr=null,ts=null,po=null;function ho(){po=ts=Dr=null}function mo(e){var t=Or.current;Re(Or),e._currentValue=t}function fo(e,t,s){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===s)break;e=e.return}}function ns(e,t){Dr=e,po=ts=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(pt=!0),e.firstContext=null)}function kt(e){var t=e._currentValue;if(po!==e)if(e={context:e,memoizedValue:t,next:null},ts===null){if(Dr===null)throw Error(u(308));ts=e,Dr.dependencies={lanes:0,firstContext:e}}else ts=ts.next=e;return t}var jn=null;function xo(e){jn===null?jn=[e]:jn.push(e)}function Jl(e,t,s,r){var a=t.interleaved;return a===null?(s.next=s,xo(t)):(s.next=a.next,a.next=s),t.interleaved=s,Ut(e,r)}function Ut(e,t){e.lanes|=t;var s=e.alternate;for(s!==null&&(s.lanes|=t),s=e,e=e.return;e!==null;)e.childLanes|=t,s=e.alternate,s!==null&&(s.childLanes|=t),s=e,e=e.return;return s.tag===3?s.stateNode:null}var on=!1;function go(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ln(e,t,s){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ne&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ut(e,s)}return a=r.interleaved,a===null?(t.next=t,xo(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ut(e,s)}function Hr(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,s|=r,t.lanes=s,La(e,s)}}function Xl(e,t){var s=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,s===r)){var a=null,o=null;if(s=s.firstBaseUpdate,s!==null){do{var i={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};o===null?a=o=i:o=o.next=i,s=s.next}while(s!==null);o===null?a=o=t:o=o.next=t}else a=o=t;s={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}function zr(e,t,s,r){var a=e.updateQueue;on=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,d=a.shared.pending;if(d!==null){a.shared.pending=null;var p=d,v=p.next;p.next=null,i===null?o=v:i.next=v,i=p;var O=e.alternate;O!==null&&(O=O.updateQueue,d=O.lastBaseUpdate,d!==i&&(d===null?O.firstBaseUpdate=v:d.next=v,O.lastBaseUpdate=p))}if(o!==null){var H=a.baseState;i=0,O=v=p=null,d=o;do{var I=d.lane,Z=d.eventTime;if((r&I)===I){O!==null&&(O=O.next={eventTime:Z,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var re=e,ae=d;switch(I=t,Z=s,ae.tag){case 1:if(re=ae.payload,typeof re=="function"){H=re.call(Z,H,I);break e}H=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ae.payload,I=typeof re=="function"?re.call(Z,H,I):re,I==null)break e;H=c({},H,I);break e;case 2:on=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,I=a.effects,I===null?a.effects=[d]:I.push(d))}else Z={eventTime:Z,lane:I,tag:d.tag,payload:d.payload,callback:d.callback,next:null},O===null?(v=O=Z,p=H):O=O.next=Z,i|=I;if(d=d.next,d===null){if(d=a.shared.pending,d===null)break;I=d,d=I.next,I.next=null,a.lastBaseUpdate=I,a.shared.pending=null}}while(!0);if(O===null&&(p=H),a.baseState=p,a.firstBaseUpdate=v,a.lastBaseUpdate=O,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);Nn|=i,e.lanes=i,e.memoizedState=H}}function Zl(e,t,s){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=s,typeof a!="function")throw Error(u(191,a));a.call(r)}}}var zs={},Ot=sn(zs),qs=sn(zs),Fs=sn(zs);function Tn(e){if(e===zs)throw Error(u(174));return e}function yo(e,t){switch(Ie(Fs,t),Ie(qs,e),Ie(Ot,zs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ms(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ms(t,e)}Re(Ot),Ie(Ot,t)}function ss(){Re(Ot),Re(qs),Re(Fs)}function ec(e){Tn(Fs.current);var t=Tn(Ot.current),s=ms(t,e.type);t!==s&&(Ie(qs,e),Ie(Ot,s))}function bo(e){qs.current===e&&(Re(Ot),Re(qs))}var He=sn(0);function qr(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=[];function wo(){for(var e=0;e<vo.length;e++)vo[e]._workInProgressVersionPrimary=null;vo.length=0}var Fr=F.ReactCurrentDispatcher,ko=F.ReactCurrentBatchConfig,Cn=0,ze=null,Ue=null,Ge=null,Wr=!1,Ws=!1,$s=0,eh=0;function et(){throw Error(u(321))}function So(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!Nt(e[s],t[s]))return!1;return!0}function jo(e,t,s,r,a,o){if(Cn=o,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fr.current=e===null||e.memoizedState===null?rh:ah,e=s(r,a),Ws){o=0;do{if(Ws=!1,$s=0,25<=o)throw Error(u(301));o+=1,Ge=Ue=null,t.updateQueue=null,Fr.current=oh,e=s(r,a)}while(Ws)}if(Fr.current=Ur,t=Ue!==null&&Ue.next!==null,Cn=0,Ge=Ue=ze=null,Wr=!1,t)throw Error(u(300));return e}function To(){var e=$s!==0;return $s=0,e}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?ze.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function St(){if(Ue===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=Ge===null?ze.memoizedState:Ge.next;if(t!==null)Ge=t,Ue=e;else{if(e===null)throw Error(u(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ge===null?ze.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Bs(e,t){return typeof t=="function"?t(e):t}function Co(e){var t=St(),s=t.queue;if(s===null)throw Error(u(311));s.lastRenderedReducer=e;var r=Ue,a=r.baseQueue,o=s.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}r.baseQueue=a=o,s.pending=null}if(a!==null){o=a.next,r=r.baseState;var d=i=null,p=null,v=o;do{var O=v.lane;if((Cn&O)===O)p!==null&&(p=p.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),r=v.hasEagerState?v.eagerState:e(r,v.action);else{var H={lane:O,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};p===null?(d=p=H,i=r):p=p.next=H,ze.lanes|=O,Nn|=O}v=v.next}while(v!==null&&v!==o);p===null?i=r:p.next=d,Nt(r,t.memoizedState)||(pt=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=p,s.lastRenderedState=r}if(e=s.interleaved,e!==null){a=e;do o=a.lane,ze.lanes|=o,Nn|=o,a=a.next;while(a!==e)}else a===null&&(s.lanes=0);return[t.memoizedState,s.dispatch]}function No(e){var t=St(),s=t.queue;if(s===null)throw Error(u(311));s.lastRenderedReducer=e;var r=s.dispatch,a=s.pending,o=t.memoizedState;if(a!==null){s.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);Nt(o,t.memoizedState)||(pt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),s.lastRenderedState=o}return[o,r]}function tc(){}function nc(e,t){var s=ze,r=St(),a=t(),o=!Nt(r.memoizedState,a);if(o&&(r.memoizedState=a,pt=!0),r=r.queue,Eo(ac.bind(null,s,r,e),[e]),r.getSnapshot!==t||o||Ge!==null&&Ge.memoizedState.tag&1){if(s.flags|=2048,Us(9,rc.bind(null,s,r,a,t),void 0,null),Qe===null)throw Error(u(349));(Cn&30)!==0||sc(s,t,a)}return a}function sc(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function rc(e,t,s,r){t.value=s,t.getSnapshot=r,oc(t)&&ic(e)}function ac(e,t,s){return s(function(){oc(t)&&ic(e)})}function oc(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!Nt(e,s)}catch{return!0}}function ic(e){var t=Ut(e,1);t!==null&&Mt(t,e,1,-1)}function lc(e){var t=Dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bs,lastRenderedState:e},t.queue=e,e=e.dispatch=sh.bind(null,ze,e),[t.memoizedState,e]}function Us(e,t,s,r){return e={tag:e,create:t,destroy:s,deps:r,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(s=t.lastEffect,s===null?t.lastEffect=e.next=e:(r=s.next,s.next=e,e.next=r,t.lastEffect=e)),e}function cc(){return St().memoizedState}function $r(e,t,s,r){var a=Dt();ze.flags|=e,a.memoizedState=Us(1|t,s,void 0,r===void 0?null:r)}function Br(e,t,s,r){var a=St();r=r===void 0?null:r;var o=void 0;if(Ue!==null){var i=Ue.memoizedState;if(o=i.destroy,r!==null&&So(r,i.deps)){a.memoizedState=Us(t,s,o,r);return}}ze.flags|=e,a.memoizedState=Us(1|t,s,o,r)}function dc(e,t){return $r(8390656,8,e,t)}function Eo(e,t){return Br(2048,8,e,t)}function uc(e,t){return Br(4,2,e,t)}function pc(e,t){return Br(4,4,e,t)}function hc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mc(e,t,s){return s=s!=null?s.concat([e]):null,Br(4,4,hc.bind(null,t,e),s)}function Po(){}function fc(e,t){var s=St();t=t===void 0?null:t;var r=s.memoizedState;return r!==null&&t!==null&&So(t,r[1])?r[0]:(s.memoizedState=[e,t],e)}function xc(e,t){var s=St();t=t===void 0?null:t;var r=s.memoizedState;return r!==null&&t!==null&&So(t,r[1])?r[0]:(e=e(),s.memoizedState=[e,t],e)}function gc(e,t,s){return(Cn&21)===0?(e.baseState&&(e.baseState=!1,pt=!0),e.memoizedState=s):(Nt(s,t)||(s=Gi(),ze.lanes|=s,Nn|=s,e.baseState=!0),t)}function th(e,t){var s=Me;Me=s!==0&&4>s?s:4,e(!0);var r=ko.transition;ko.transition={};try{e(!1),t()}finally{Me=s,ko.transition=r}}function yc(){return St().memoizedState}function nh(e,t,s){var r=pn(e);if(s={lane:r,action:s,hasEagerState:!1,eagerState:null,next:null},bc(e))vc(t,s);else if(s=Jl(e,t,s,r),s!==null){var a=it();Mt(s,e,r,a),wc(s,t,r)}}function sh(e,t,s){var r=pn(e),a={lane:r,action:s,hasEagerState:!1,eagerState:null,next:null};if(bc(e))vc(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,d=o(i,s);if(a.hasEagerState=!0,a.eagerState=d,Nt(d,i)){var p=t.interleaved;p===null?(a.next=a,xo(t)):(a.next=p.next,p.next=a),t.interleaved=a;return}}catch{}finally{}s=Jl(e,t,a,r),s!==null&&(a=it(),Mt(s,e,r,a),wc(s,t,r))}}function bc(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function vc(e,t){Ws=Wr=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function wc(e,t,s){if((s&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,s|=r,t.lanes=s,La(e,s)}}var Ur={readContext:kt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},rh={readContext:kt,useCallback:function(e,t){return Dt().memoizedState=[e,t===void 0?null:t],e},useContext:kt,useEffect:dc,useImperativeHandle:function(e,t,s){return s=s!=null?s.concat([e]):null,$r(4194308,4,hc.bind(null,t,e),s)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){return $r(4,2,e,t)},useMemo:function(e,t){var s=Dt();return t=t===void 0?null:t,e=e(),s.memoizedState=[e,t],e},useReducer:function(e,t,s){var r=Dt();return t=s!==void 0?s(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=nh.bind(null,ze,e),[r.memoizedState,e]},useRef:function(e){var t=Dt();return e={current:e},t.memoizedState=e},useState:lc,useDebugValue:Po,useDeferredValue:function(e){return Dt().memoizedState=e},useTransition:function(){var e=lc(!1),t=e[0];return e=th.bind(null,e[1]),Dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,s){var r=ze,a=Dt();if(Oe){if(s===void 0)throw Error(u(407));s=s()}else{if(s=t(),Qe===null)throw Error(u(349));(Cn&30)!==0||sc(r,t,s)}a.memoizedState=s;var o={value:s,getSnapshot:t};return a.queue=o,dc(ac.bind(null,r,o,e),[e]),r.flags|=2048,Us(9,rc.bind(null,r,o,s,t),void 0,null),s},useId:function(){var e=Dt(),t=Qe.identifierPrefix;if(Oe){var s=Bt,r=$t;s=(r&~(1<<32-Ct(r)-1)).toString(32)+s,t=":"+t+"R"+s,s=$s++,0<s&&(t+="H"+s.toString(32)),t+=":"}else s=eh++,t=":"+t+"r"+s.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ah={readContext:kt,useCallback:fc,useContext:kt,useEffect:Eo,useImperativeHandle:mc,useInsertionEffect:uc,useLayoutEffect:pc,useMemo:xc,useReducer:Co,useRef:cc,useState:function(){return Co(Bs)},useDebugValue:Po,useDeferredValue:function(e){var t=St();return gc(t,Ue.memoizedState,e)},useTransition:function(){var e=Co(Bs)[0],t=St().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:nc,useId:yc,unstable_isNewReconciler:!1},oh={readContext:kt,useCallback:fc,useContext:kt,useEffect:Eo,useImperativeHandle:mc,useInsertionEffect:uc,useLayoutEffect:pc,useMemo:xc,useReducer:No,useRef:cc,useState:function(){return No(Bs)},useDebugValue:Po,useDeferredValue:function(e){var t=St();return Ue===null?t.memoizedState=e:gc(t,Ue.memoizedState,e)},useTransition:function(){var e=No(Bs)[0],t=St().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:nc,useId:yc,unstable_isNewReconciler:!1};function Pt(e,t){if(e&&e.defaultProps){t=c({},t),e=e.defaultProps;for(var s in e)t[s]===void 0&&(t[s]=e[s]);return t}return t}function Lo(e,t,s,r){t=e.memoizedState,s=s(r,t),s=s==null?t:c({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Vr={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,s){e=e._reactInternals;var r=it(),a=pn(e),o=Vt(r,a);o.payload=t,s!=null&&(o.callback=s),t=ln(e,o,a),t!==null&&(Mt(t,e,a,r),Hr(t,e,a))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var r=it(),a=pn(e),o=Vt(r,a);o.tag=1,o.payload=t,s!=null&&(o.callback=s),t=ln(e,o,a),t!==null&&(Mt(t,e,a,r),Hr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=it(),r=pn(e),a=Vt(s,r);a.tag=2,t!=null&&(a.callback=t),t=ln(e,a,r),t!==null&&(Mt(t,e,r,s),Hr(t,e,r))}};function kc(e,t,s,r,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!_s(s,r)||!_s(a,o):!0}function Sc(e,t,s){var r=!1,a=rn,o=t.contextType;return typeof o=="object"&&o!==null?o=kt(o):(a=ut(t)?wn:Ze.current,r=t.contextTypes,o=(r=r!=null)?Jn(e,a):rn),t=new t(s,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vr,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function jc(e,t,s,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,r),t.state!==e&&Vr.enqueueReplaceState(t,t.state,null)}function _o(e,t,s,r){var a=e.stateNode;a.props=s,a.state=e.memoizedState,a.refs={},go(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=kt(o):(o=ut(t)?wn:Ze.current,a.context=Jn(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Lo(e,t,o,s),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Vr.enqueueReplaceState(a,a.state,null),zr(e,s,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function rs(e,t){try{var s="",r=t;do s+=Y(r),r=r.return;while(r);var a=s}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function Mo(e,t,s){return{value:e,source:null,stack:s??null,digest:t??null}}function Io(e,t){try{console.error(t.value)}catch(s){setTimeout(function(){throw s})}}var ih=typeof WeakMap=="function"?WeakMap:Map;function Tc(e,t,s){s=Vt(-1,s),s.tag=3,s.payload={element:null};var r=t.value;return s.callback=function(){Zr||(Zr=!0,Qo=r),Io(e,t)},s}function Cc(e,t,s){s=Vt(-1,s),s.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;s.payload=function(){return r(a)},s.callback=function(){Io(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(s.callback=function(){Io(e,t),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),s}function Nc(e,t,s){var r=e.pingCache;if(r===null){r=e.pingCache=new ih;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(s)||(a.add(s),e=wh.bind(null,e,t,s),t.then(e,e))}function Ec(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pc(e,t,s,r,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(t=Vt(-1,1),t.tag=2,ln(s,t,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var lh=F.ReactCurrentOwner,pt=!1;function ot(e,t,s,r){t.child=e===null?Yl(t,null,s,r):es(t,e.child,s,r)}function Lc(e,t,s,r,a){s=s.render;var o=t.ref;return ns(t,a),r=jo(e,t,s,r,o,a),s=To(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Gt(e,t,a)):(Oe&&s&&oo(t),t.flags|=1,ot(e,t,r,a),t.child)}function _c(e,t,s,r,a){if(e===null){var o=s.type;return typeof o=="function"&&!ti(o)&&o.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(t.tag=15,t.type=o,Mc(e,t,o,r,a)):(e=aa(s.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&a)===0){var i=o.memoizedProps;if(s=s.compare,s=s!==null?s:_s,s(i,r)&&e.ref===t.ref)return Gt(e,t,a)}return t.flags|=1,e=mn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Mc(e,t,s,r,a){if(e!==null){var o=e.memoizedProps;if(_s(o,r)&&e.ref===t.ref)if(pt=!1,t.pendingProps=r=o,(e.lanes&a)!==0)(e.flags&131072)!==0&&(pt=!0);else return t.lanes=e.lanes,Gt(e,t,a)}return Ao(e,t,s,r,a)}function Ic(e,t,s){var r=t.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(os,bt),bt|=s;else{if((s&1073741824)===0)return e=o!==null?o.baseLanes|s:s,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(os,bt),bt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:s,Ie(os,bt),bt|=r}else o!==null?(r=o.baseLanes|s,t.memoizedState=null):r=s,Ie(os,bt),bt|=r;return ot(e,t,a,s),t.child}function Ac(e,t){var s=t.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(t.flags|=512,t.flags|=2097152)}function Ao(e,t,s,r,a){var o=ut(s)?wn:Ze.current;return o=Jn(t,o),ns(t,a),s=jo(e,t,s,r,o,a),r=To(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Gt(e,t,a)):(Oe&&r&&oo(t),t.flags|=1,ot(e,t,s,a),t.child)}function Rc(e,t,s,r,a){if(ut(s)){var o=!0;Lr(t)}else o=!1;if(ns(t,a),t.stateNode===null)Qr(e,t),Sc(t,s,r),_o(t,s,r,a),r=!0;else if(e===null){var i=t.stateNode,d=t.memoizedProps;i.props=d;var p=i.context,v=s.contextType;typeof v=="object"&&v!==null?v=kt(v):(v=ut(s)?wn:Ze.current,v=Jn(t,v));var O=s.getDerivedStateFromProps,H=typeof O=="function"||typeof i.getSnapshotBeforeUpdate=="function";H||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==r||p!==v)&&jc(t,i,r,v),on=!1;var I=t.memoizedState;i.state=I,zr(t,r,i,a),p=t.memoizedState,d!==r||I!==p||dt.current||on?(typeof O=="function"&&(Lo(t,s,O,r),p=t.memoizedState),(d=on||kc(t,s,d,r,I,p,v))?(H||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=p),i.props=r,i.state=p,i.context=v,r=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Kl(e,t),d=t.memoizedProps,v=t.type===t.elementType?d:Pt(t.type,d),i.props=v,H=t.pendingProps,I=i.context,p=s.contextType,typeof p=="object"&&p!==null?p=kt(p):(p=ut(s)?wn:Ze.current,p=Jn(t,p));var Z=s.getDerivedStateFromProps;(O=typeof Z=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==H||I!==p)&&jc(t,i,r,p),on=!1,I=t.memoizedState,i.state=I,zr(t,r,i,a);var re=t.memoizedState;d!==H||I!==re||dt.current||on?(typeof Z=="function"&&(Lo(t,s,Z,r),re=t.memoizedState),(v=on||kc(t,s,v,r,I,re,p)||!1)?(O||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,re,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,re,p)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=re),i.props=r,i.state=re,i.context=p,r=v):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),r=!1)}return Ro(e,t,s,r,o,a)}function Ro(e,t,s,r,a,o){Ac(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return a&&ql(t,s,!1),Gt(e,t,o);r=t.stateNode,lh.current=t;var d=i&&typeof s.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=es(t,e.child,null,o),t.child=es(t,null,d,o)):ot(e,t,d,o),t.memoizedState=r.state,a&&ql(t,s,!0),t.child}function Oc(e){var t=e.stateNode;t.pendingContext?Hl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hl(e,t.context,!1),yo(e,t.containerInfo)}function Dc(e,t,s,r,a){return Zn(),uo(a),t.flags|=256,ot(e,t,s,r),t.child}var Oo={dehydrated:null,treeContext:null,retryLane:0};function Do(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hc(e,t,s){var r=t.pendingProps,a=He.current,o=!1,i=(t.flags&128)!==0,d;if((d=i)||(d=e!==null&&e.memoizedState===null?!1:(a&2)!==0),d?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ie(He,a&1),e===null)return co(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=i):o=oa(i,r,0,null),e=_n(e,r,s,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Do(s),t.memoizedState=Oo,e):Ho(t,i));if(a=e.memoizedState,a!==null&&(d=a.dehydrated,d!==null))return ch(e,t,i,r,d,a,s);if(o){o=r.fallback,i=t.mode,a=e.child,d=a.sibling;var p={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=p,t.deletions=null):(r=mn(a,p),r.subtreeFlags=a.subtreeFlags&14680064),d!==null?o=mn(d,o):(o=_n(o,i,s,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Do(s):{baseLanes:i.baseLanes|s,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~s,t.memoizedState=Oo,r}return o=e.child,e=o.sibling,r=mn(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=s),r.return=t,r.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=r,t.memoizedState=null,r}function Ho(e,t){return t=oa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gr(e,t,s,r){return r!==null&&uo(r),es(t,e.child,null,s),e=Ho(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ch(e,t,s,r,a,o,i){if(s)return t.flags&256?(t.flags&=-257,r=Mo(Error(u(422))),Gr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=oa({mode:"visible",children:r.children},a,0,null),o=_n(o,a,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&es(t,e.child,null,i),t.child.memoizedState=Do(i),t.memoizedState=Oo,o);if((t.mode&1)===0)return Gr(e,t,i,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var d=r.dgst;return r=d,o=Error(u(419)),r=Mo(o,r,void 0),Gr(e,t,i,r)}if(d=(i&e.childLanes)!==0,pt||d){if(r=Qe,r!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|i))!==0?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Ut(e,a),Mt(r,e,a,-1))}return ei(),r=Mo(Error(u(421))),Gr(e,t,i,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=kh.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,yt=nn(a.nextSibling),gt=t,Oe=!0,Et=null,e!==null&&(vt[wt++]=$t,vt[wt++]=Bt,vt[wt++]=kn,$t=e.id,Bt=e.overflow,kn=t),t=Ho(t,r.children),t.flags|=4096,t)}function zc(e,t,s){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fo(e.return,t,s)}function zo(e,t,s,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:s,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=s,o.tailMode=a)}function qc(e,t,s){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(ot(e,t,r.children,s),r=He.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zc(e,s,t);else if(e.tag===19)zc(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ie(He,r),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(s=t.child,a=null;s!==null;)e=s.alternate,e!==null&&qr(e)===null&&(a=s),s=s.sibling;s=a,s===null?(a=t.child,t.child=null):(a=s.sibling,s.sibling=null),zo(t,!1,a,s,o);break;case"backwards":for(s=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&qr(e)===null){t.child=a;break}e=a.sibling,a.sibling=s,s=a,a=e}zo(t,!0,s,null,o);break;case"together":zo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qr(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gt(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,(s&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,s=mn(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=mn(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function dh(e,t,s){switch(t.tag){case 3:Oc(t),Zn();break;case 5:ec(t);break;case 1:ut(t.type)&&Lr(t);break;case 4:yo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ie(Or,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ie(He,He.current&1),t.flags|=128,null):(s&t.child.childLanes)!==0?Hc(e,t,s):(Ie(He,He.current&1),e=Gt(e,t,s),e!==null?e.sibling:null);Ie(He,He.current&1);break;case 19:if(r=(s&t.childLanes)!==0,(e.flags&128)!==0){if(r)return qc(e,t,s);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ie(He,He.current),r)break;return null;case 22:case 23:return t.lanes=0,Ic(e,t,s)}return Gt(e,t,s)}var Fc,qo,Wc,$c;Fc=function(e,t){for(var s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},qo=function(){},Wc=function(e,t,s,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Tn(Ot.current);var o=null;switch(s){case"input":a=ge(e,a),r=ge(e,r),o=[];break;case"select":a=c({},a,{value:void 0}),r=c({},r,{value:void 0}),o=[];break;case"textarea":a=us(e,a),r=us(e,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Nr)}ba(s,r);var i;s=null;for(v in a)if(!r.hasOwnProperty(v)&&a.hasOwnProperty(v)&&a[v]!=null)if(v==="style"){var d=a[v];for(i in d)d.hasOwnProperty(i)&&(s||(s={}),s[i]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(S.hasOwnProperty(v)?o||(o=[]):(o=o||[]).push(v,null));for(v in r){var p=r[v];if(d=a!=null?a[v]:void 0,r.hasOwnProperty(v)&&p!==d&&(p!=null||d!=null))if(v==="style")if(d){for(i in d)!d.hasOwnProperty(i)||p&&p.hasOwnProperty(i)||(s||(s={}),s[i]="");for(i in p)p.hasOwnProperty(i)&&d[i]!==p[i]&&(s||(s={}),s[i]=p[i])}else s||(o||(o=[]),o.push(v,s)),s=p;else v==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,d=d?d.__html:void 0,p!=null&&d!==p&&(o=o||[]).push(v,p)):v==="children"?typeof p!="string"&&typeof p!="number"||(o=o||[]).push(v,""+p):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(S.hasOwnProperty(v)?(p!=null&&v==="onScroll"&&Ae("scroll",e),o||d===p||(o=[])):(o=o||[]).push(v,p))}s&&(o=o||[]).push("style",s);var v=o;(t.updateQueue=v)&&(t.flags|=4)}},$c=function(e,t,s,r){s!==r&&(t.flags|=4)};function Vs(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var r=null;s!==null;)s.alternate!==null&&(r=s),s=s.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,r=0;if(t)for(var a=e.child;a!==null;)s|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)s|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=s,t}function uh(e,t,s){var r=t.pendingProps;switch(io(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return ut(t.type)&&Pr(),tt(t),null;case 3:return r=t.stateNode,ss(),Re(dt),Re(Ze),wo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ar(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Et!==null&&(Ko(Et),Et=null))),qo(e,t),tt(t),null;case 5:bo(t);var a=Tn(Fs.current);if(s=t.type,e!==null&&t.stateNode!=null)Wc(e,t,s,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return tt(t),null}if(e=Tn(Ot.current),Ar(t)){r=t.stateNode,s=t.type;var o=t.memoizedProps;switch(r[Rt]=t,r[Os]=o,e=(t.mode&1)!==0,s){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(a=0;a<Is.length;a++)Ae(Is[a],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":qe(r,o),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ae("invalid",r);break;case"textarea":sr(r,o),Ae("invalid",r)}ba(s,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var d=o[i];i==="children"?typeof d=="string"?r.textContent!==d&&(o.suppressHydrationWarning!==!0&&Cr(r.textContent,d,e),a=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(o.suppressHydrationWarning!==!0&&Cr(r.textContent,d,e),a=["children",""+d]):S.hasOwnProperty(i)&&d!=null&&i==="onScroll"&&Ae("scroll",r)}switch(s){case"input":be(r),me(r,o,!0);break;case"textarea":be(r),rr(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Nr)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hs(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(s,{is:r.is}):(e=i.createElement(s),s==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,s),e[Rt]=t,e[Os]=r,Fc(e,t,!1,!1),t.stateNode=e;e:{switch(i=va(s,r),s){case"dialog":Ae("cancel",e),Ae("close",e),a=r;break;case"iframe":case"object":case"embed":Ae("load",e),a=r;break;case"video":case"audio":for(a=0;a<Is.length;a++)Ae(Is[a],e);a=r;break;case"source":Ae("error",e),a=r;break;case"img":case"image":case"link":Ae("error",e),Ae("load",e),a=r;break;case"details":Ae("toggle",e),a=r;break;case"input":qe(e,r),a=ge(e,r),Ae("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=c({},r,{value:void 0}),Ae("invalid",e);break;case"textarea":sr(e,r),a=us(e,r),Ae("invalid",e);break;default:a=r}ba(s,a),d=a;for(o in d)if(d.hasOwnProperty(o)){var p=d[o];o==="style"?Mi(e,p):o==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&fs(e,p)):o==="children"?typeof p=="string"?(s!=="textarea"||p!=="")&&Yt(e,p):typeof p=="number"&&Yt(e,""+p):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(S.hasOwnProperty(o)?p!=null&&o==="onScroll"&&Ae("scroll",e):p!=null&&M(e,o,p,i))}switch(s){case"input":be(e),me(e,r,!1);break;case"textarea":be(e),rr(e);break;case"option":r.value!=null&&e.setAttribute("value",""+U(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ct(e,!!r.multiple,o,!1):r.defaultValue!=null&&ct(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Nr)}switch(s){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)$c(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(s=Tn(Fs.current),Tn(Ot.current),Ar(t)){if(r=t.stateNode,s=t.memoizedProps,r[Rt]=t,(o=r.nodeValue!==s)&&(e=gt,e!==null))switch(e.tag){case 3:Cr(r.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(r.nodeValue,s,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(s.nodeType===9?s:s.ownerDocument).createTextNode(r),r[Rt]=t,t.stateNode=r}return tt(t),null;case 13:if(Re(He),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&yt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Vl(),Zn(),t.flags|=98560,o=!1;else if(o=Ar(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[Rt]=t}else Zn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),o=!1}else Et!==null&&(Ko(Et),Et=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=s,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(He.current&1)!==0?Ve===0&&(Ve=3):ei())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return ss(),qo(e,t),e===null&&As(t.stateNode.containerInfo),tt(t),null;case 10:return mo(t.type._context),tt(t),null;case 17:return ut(t.type)&&Pr(),tt(t),null;case 19:if(Re(He),o=t.memoizedState,o===null)return tt(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Vs(o,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=qr(e),i!==null){for(t.flags|=128,Vs(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=s,s=t.child;s!==null;)o=s,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return Ie(He,He.current&1|2),t.child}e=e.sibling}o.tail!==null&&We()>is&&(t.flags|=128,r=!0,Vs(o,!1),t.lanes=4194304)}else{if(!r)if(e=qr(i),e!==null){if(t.flags|=128,r=!0,s=e.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),Vs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Oe)return tt(t),null}else 2*We()-o.renderingStartTime>is&&s!==1073741824&&(t.flags|=128,r=!0,Vs(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(s=o.last,s!==null?s.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=We(),t.sibling=null,s=He.current,Ie(He,r?s&1|2:s&1),t):(tt(t),null);case 22:case 23:return Zo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(bt&1073741824)!==0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function ph(e,t){switch(io(t),t.tag){case 1:return ut(t.type)&&Pr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ss(),Re(dt),Re(Ze),wo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return bo(t),null;case 13:if(Re(He),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Re(He),null;case 4:return ss(),null;case 10:return mo(t.type._context),null;case 22:case 23:return Zo(),null;case 24:return null;default:return null}}var Yr=!1,nt=!1,hh=typeof WeakSet=="function"?WeakSet:Set,ne=null;function as(e,t){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(r){Fe(e,t,r)}else s.current=null}function Fo(e,t,s){try{s()}catch(r){Fe(e,t,r)}}var Bc=!1;function mh(e,t){if(Xa=fr,e=kl(),Ba(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var r=s.getSelection&&s.getSelection();if(r&&r.rangeCount!==0){s=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{s.nodeType,o.nodeType}catch{s=null;break e}var i=0,d=-1,p=-1,v=0,O=0,H=e,I=null;t:for(;;){for(var Z;H!==s||a!==0&&H.nodeType!==3||(d=i+a),H!==o||r!==0&&H.nodeType!==3||(p=i+r),H.nodeType===3&&(i+=H.nodeValue.length),(Z=H.firstChild)!==null;)I=H,H=Z;for(;;){if(H===e)break t;if(I===s&&++v===a&&(d=i),I===o&&++O===r&&(p=i),(Z=H.nextSibling)!==null)break;H=I,I=H.parentNode}H=Z}s=d===-1||p===-1?null:{start:d,end:p}}else s=null}s=s||{start:0,end:0}}else s=null;for(Za={focusedElem:e,selectionRange:s},fr=!1,ne=t;ne!==null;)if(t=ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ne=e;else for(;ne!==null;){t=ne;try{var re=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var ae=re.memoizedProps,$e=re.memoizedState,x=t.stateNode,h=x.getSnapshotBeforeUpdate(t.elementType===t.type?ae:Pt(t.type,ae),$e);x.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch($){Fe(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,ne=e;break}ne=t.return}return re=Bc,Bc=!1,re}function Gs(e,t,s){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&Fo(t,s,o)}a=a.next}while(a!==r)}}function Jr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var s=t=t.next;do{if((s.tag&e)===e){var r=s.create;s.destroy=r()}s=s.next}while(s!==t)}}function Wo(e){var t=e.ref;if(t!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof t=="function"?t(e):t.current=e}}function Uc(e){var t=e.alternate;t!==null&&(e.alternate=null,Uc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[Os],delete t[so],delete t[Jp],delete t[Kp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vc(e){return e.tag===5||e.tag===3||e.tag===4}function Gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $o(e,t,s){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?s.nodeType===8?s.parentNode.insertBefore(e,t):s.insertBefore(e,t):(s.nodeType===8?(t=s.parentNode,t.insertBefore(e,s)):(t=s,t.appendChild(e)),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=Nr));else if(r!==4&&(e=e.child,e!==null))for($o(e,t,s),e=e.sibling;e!==null;)$o(e,t,s),e=e.sibling}function Bo(e,t,s){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bo(e,t,s),e=e.sibling;e!==null;)Bo(e,t,s),e=e.sibling}var Ke=null,Lt=!1;function cn(e,t,s){for(s=s.child;s!==null;)Qc(e,t,s),s=s.sibling}function Qc(e,t,s){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(cr,s)}catch{}switch(s.tag){case 5:nt||as(s,t);case 6:var r=Ke,a=Lt;Ke=null,cn(e,t,s),Ke=r,Lt=a,Ke!==null&&(Lt?(e=Ke,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):Ke.removeChild(s.stateNode));break;case 18:Ke!==null&&(Lt?(e=Ke,s=s.stateNode,e.nodeType===8?no(e.parentNode,s):e.nodeType===1&&no(e,s),Ts(e)):no(Ke,s.stateNode));break;case 4:r=Ke,a=Lt,Ke=s.stateNode.containerInfo,Lt=!0,cn(e,t,s),Ke=r,Lt=a;break;case 0:case 11:case 14:case 15:if(!nt&&(r=s.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&((o&2)!==0||(o&4)!==0)&&Fo(s,t,i),a=a.next}while(a!==r)}cn(e,t,s);break;case 1:if(!nt&&(as(s,t),r=s.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=s.memoizedProps,r.state=s.memoizedState,r.componentWillUnmount()}catch(d){Fe(s,t,d)}cn(e,t,s);break;case 21:cn(e,t,s);break;case 22:s.mode&1?(nt=(r=nt)||s.memoizedState!==null,cn(e,t,s),nt=r):cn(e,t,s);break;default:cn(e,t,s)}}function Yc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new hh),t.forEach(function(r){var a=Sh.bind(null,e,r);s.has(r)||(s.add(r),r.then(a,a))})}}function _t(e,t){var s=t.deletions;if(s!==null)for(var r=0;r<s.length;r++){var a=s[r];try{var o=e,i=t,d=i;e:for(;d!==null;){switch(d.tag){case 5:Ke=d.stateNode,Lt=!1;break e;case 3:Ke=d.stateNode.containerInfo,Lt=!0;break e;case 4:Ke=d.stateNode.containerInfo,Lt=!0;break e}d=d.return}if(Ke===null)throw Error(u(160));Qc(o,i,a),Ke=null,Lt=!1;var p=a.alternate;p!==null&&(p.return=null),a.return=null}catch(v){Fe(a,t,v)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jc(t,e),t=t.sibling}function Jc(e,t){var s=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_t(t,e),Ht(e),r&4){try{Gs(3,e,e.return),Jr(3,e)}catch(ae){Fe(e,e.return,ae)}try{Gs(5,e,e.return)}catch(ae){Fe(e,e.return,ae)}}break;case 1:_t(t,e),Ht(e),r&512&&s!==null&&as(s,s.return);break;case 5:if(_t(t,e),Ht(e),r&512&&s!==null&&as(s,s.return),e.flags&32){var a=e.stateNode;try{Yt(a,"")}catch(ae){Fe(e,e.return,ae)}}if(r&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=s!==null?s.memoizedProps:o,d=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{d==="input"&&o.type==="radio"&&o.name!=null&&Je(a,o),va(d,i);var v=va(d,o);for(i=0;i<p.length;i+=2){var O=p[i],H=p[i+1];O==="style"?Mi(a,H):O==="dangerouslySetInnerHTML"?fs(a,H):O==="children"?Yt(a,H):M(a,O,H,v)}switch(d){case"input":V(a,o);break;case"textarea":ps(a,o);break;case"select":var I=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var Z=o.value;Z!=null?ct(a,!!o.multiple,Z,!1):I!==!!o.multiple&&(o.defaultValue!=null?ct(a,!!o.multiple,o.defaultValue,!0):ct(a,!!o.multiple,o.multiple?[]:"",!1))}a[Os]=o}catch(ae){Fe(e,e.return,ae)}}break;case 6:if(_t(t,e),Ht(e),r&4){if(e.stateNode===null)throw Error(u(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(ae){Fe(e,e.return,ae)}}break;case 3:if(_t(t,e),Ht(e),r&4&&s!==null&&s.memoizedState.isDehydrated)try{Ts(t.containerInfo)}catch(ae){Fe(e,e.return,ae)}break;case 4:_t(t,e),Ht(e);break;case 13:_t(t,e),Ht(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Go=We())),r&4&&Yc(e);break;case 22:if(O=s!==null&&s.memoizedState!==null,e.mode&1?(nt=(v=nt)||O,_t(t,e),nt=v):_t(t,e),Ht(e),r&8192){if(v=e.memoizedState!==null,(e.stateNode.isHidden=v)&&!O&&(e.mode&1)!==0)for(ne=e,O=e.child;O!==null;){for(H=ne=O;ne!==null;){switch(I=ne,Z=I.child,I.tag){case 0:case 11:case 14:case 15:Gs(4,I,I.return);break;case 1:as(I,I.return);var re=I.stateNode;if(typeof re.componentWillUnmount=="function"){r=I,s=I.return;try{t=r,re.props=t.memoizedProps,re.state=t.memoizedState,re.componentWillUnmount()}catch(ae){Fe(r,s,ae)}}break;case 5:as(I,I.return);break;case 22:if(I.memoizedState!==null){Zc(H);continue}}Z!==null?(Z.return=I,ne=Z):Zc(H)}O=O.sibling}e:for(O=null,H=e;;){if(H.tag===5){if(O===null){O=H;try{a=H.stateNode,v?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(d=H.stateNode,p=H.memoizedProps.style,i=p!=null&&p.hasOwnProperty("display")?p.display:null,d.style.display=ar("display",i))}catch(ae){Fe(e,e.return,ae)}}}else if(H.tag===6){if(O===null)try{H.stateNode.nodeValue=v?"":H.memoizedProps}catch(ae){Fe(e,e.return,ae)}}else if((H.tag!==22&&H.tag!==23||H.memoizedState===null||H===e)&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===e)break e;for(;H.sibling===null;){if(H.return===null||H.return===e)break e;O===H&&(O=null),H=H.return}O===H&&(O=null),H.sibling.return=H.return,H=H.sibling}}break;case 19:_t(t,e),Ht(e),r&4&&Yc(e);break;case 21:break;default:_t(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var s=e.return;s!==null;){if(Vc(s)){var r=s;break e}s=s.return}throw Error(u(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Yt(a,""),r.flags&=-33);var o=Gc(e);Bo(e,o,a);break;case 3:case 4:var i=r.stateNode.containerInfo,d=Gc(e);$o(e,d,i);break;default:throw Error(u(161))}}catch(p){Fe(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fh(e,t,s){ne=e,Kc(e)}function Kc(e,t,s){for(var r=(e.mode&1)!==0;ne!==null;){var a=ne,o=a.child;if(a.tag===22&&r){var i=a.memoizedState!==null||Yr;if(!i){var d=a.alternate,p=d!==null&&d.memoizedState!==null||nt;d=Yr;var v=nt;if(Yr=i,(nt=p)&&!v)for(ne=a;ne!==null;)i=ne,p=i.child,i.tag===22&&i.memoizedState!==null?ed(a):p!==null?(p.return=i,ne=p):ed(a);for(;o!==null;)ne=o,Kc(o),o=o.sibling;ne=a,Yr=d,nt=v}Xc(e)}else(a.subtreeFlags&8772)!==0&&o!==null?(o.return=a,ne=o):Xc(e)}}function Xc(e){for(;ne!==null;){var t=ne;if((t.flags&8772)!==0){var s=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:nt||Jr(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!nt)if(s===null)r.componentDidMount();else{var a=t.elementType===t.type?s.memoizedProps:Pt(t.type,s.memoizedProps);r.componentDidUpdate(a,s.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Zl(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(s=null,t.child!==null)switch(t.child.tag){case 5:s=t.child.stateNode;break;case 1:s=t.child.stateNode}Zl(t,i,s)}break;case 5:var d=t.stateNode;if(s===null&&t.flags&4){s=d;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&s.focus();break;case"img":p.src&&(s.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var v=t.alternate;if(v!==null){var O=v.memoizedState;if(O!==null){var H=O.dehydrated;H!==null&&Ts(H)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}nt||t.flags&512&&Wo(t)}catch(I){Fe(t,t.return,I)}}if(t===e){ne=null;break}if(s=t.sibling,s!==null){s.return=t.return,ne=s;break}ne=t.return}}function Zc(e){for(;ne!==null;){var t=ne;if(t===e){ne=null;break}var s=t.sibling;if(s!==null){s.return=t.return,ne=s;break}ne=t.return}}function ed(e){for(;ne!==null;){var t=ne;try{switch(t.tag){case 0:case 11:case 15:var s=t.return;try{Jr(4,t)}catch(p){Fe(t,s,p)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(p){Fe(t,a,p)}}var o=t.return;try{Wo(t)}catch(p){Fe(t,o,p)}break;case 5:var i=t.return;try{Wo(t)}catch(p){Fe(t,i,p)}}}catch(p){Fe(t,t.return,p)}if(t===e){ne=null;break}var d=t.sibling;if(d!==null){d.return=t.return,ne=d;break}ne=t.return}}var xh=Math.ceil,Kr=F.ReactCurrentDispatcher,Uo=F.ReactCurrentOwner,jt=F.ReactCurrentBatchConfig,Ne=0,Qe=null,Be=null,Xe=0,bt=0,os=sn(0),Ve=0,Qs=null,Nn=0,Xr=0,Vo=0,Ys=null,ht=null,Go=0,is=1/0,Qt=null,Zr=!1,Qo=null,dn=null,ea=!1,un=null,ta=0,Js=0,Yo=null,na=-1,sa=0;function it(){return(Ne&6)!==0?We():na!==-1?na:na=We()}function pn(e){return(e.mode&1)===0?1:(Ne&2)!==0&&Xe!==0?Xe&-Xe:Zp.transition!==null?(sa===0&&(sa=Gi()),sa):(e=Me,e!==0||(e=window.event,e=e===void 0?16:nl(e.type)),e)}function Mt(e,t,s,r){if(50<Js)throw Js=0,Yo=null,Error(u(185));vs(e,s,r),((Ne&2)===0||e!==Qe)&&(e===Qe&&((Ne&2)===0&&(Xr|=s),Ve===4&&hn(e,Xe)),mt(e,r),s===1&&Ne===0&&(t.mode&1)===0&&(is=We()+500,_r&&an()))}function mt(e,t){var s=e.callbackNode;Zu(e,t);var r=pr(e,e===Qe?Xe:0);if(r===0)s!==null&&Bi(s),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(s!=null&&Bi(s),t===1)e.tag===0?Xp(nd.bind(null,e)):Fl(nd.bind(null,e)),Qp(function(){(Ne&6)===0&&an()}),s=null;else{switch(Qi(r)){case 1:s=Na;break;case 4:s=Ui;break;case 16:s=lr;break;case 536870912:s=Vi;break;default:s=lr}s=dd(s,td.bind(null,e))}e.callbackPriority=t,e.callbackNode=s}}function td(e,t){if(na=-1,sa=0,(Ne&6)!==0)throw Error(u(327));var s=e.callbackNode;if(ls()&&e.callbackNode!==s)return null;var r=pr(e,e===Qe?Xe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ra(e,r);else{t=r;var a=Ne;Ne|=2;var o=rd();(Qe!==e||Xe!==t)&&(Qt=null,is=We()+500,Pn(e,t));do try{bh();break}catch(d){sd(e,d)}while(!0);ho(),Kr.current=o,Ne=a,Be!==null?t=0:(Qe=null,Xe=0,t=Ve)}if(t!==0){if(t===2&&(a=Ea(e),a!==0&&(r=a,t=Jo(e,a))),t===1)throw s=Qs,Pn(e,0),hn(e,r),mt(e,We()),s;if(t===6)hn(e,r);else{if(a=e.current.alternate,(r&30)===0&&!gh(a)&&(t=ra(e,r),t===2&&(o=Ea(e),o!==0&&(r=o,t=Jo(e,o))),t===1))throw s=Qs,Pn(e,0),hn(e,r),mt(e,We()),s;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:Ln(e,ht,Qt);break;case 3:if(hn(e,r),(r&130023424)===r&&(t=Go+500-We(),10<t)){if(pr(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){it(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=to(Ln.bind(null,e,ht,Qt),t);break}Ln(e,ht,Qt);break;case 4:if(hn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var i=31-Ct(r);o=1<<i,i=t[i],i>a&&(a=i),r&=~o}if(r=a,r=We()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xh(r/1960))-r,10<r){e.timeoutHandle=to(Ln.bind(null,e,ht,Qt),r);break}Ln(e,ht,Qt);break;case 5:Ln(e,ht,Qt);break;default:throw Error(u(329))}}}return mt(e,We()),e.callbackNode===s?td.bind(null,e):null}function Jo(e,t){var s=Ys;return e.current.memoizedState.isDehydrated&&(Pn(e,t).flags|=256),e=ra(e,t),e!==2&&(t=ht,ht=s,t!==null&&Ko(t)),e}function Ko(e){ht===null?ht=e:ht.push.apply(ht,e)}function gh(e){for(var t=e;;){if(t.flags&16384){var s=t.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var r=0;r<s.length;r++){var a=s[r],o=a.getSnapshot;a=a.value;try{if(!Nt(o(),a))return!1}catch{return!1}}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hn(e,t){for(t&=~Vo,t&=~Xr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var s=31-Ct(t),r=1<<s;e[s]=-1,t&=~r}}function nd(e){if((Ne&6)!==0)throw Error(u(327));ls();var t=pr(e,0);if((t&1)===0)return mt(e,We()),null;var s=ra(e,t);if(e.tag!==0&&s===2){var r=Ea(e);r!==0&&(t=r,s=Jo(e,r))}if(s===1)throw s=Qs,Pn(e,0),hn(e,t),mt(e,We()),s;if(s===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ln(e,ht,Qt),mt(e,We()),null}function Xo(e,t){var s=Ne;Ne|=1;try{return e(t)}finally{Ne=s,Ne===0&&(is=We()+500,_r&&an())}}function En(e){un!==null&&un.tag===0&&(Ne&6)===0&&ls();var t=Ne;Ne|=1;var s=jt.transition,r=Me;try{if(jt.transition=null,Me=1,e)return e()}finally{Me=r,jt.transition=s,Ne=t,(Ne&6)===0&&an()}}function Zo(){bt=os.current,Re(os)}function Pn(e,t){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,Gp(s)),Be!==null)for(s=Be.return;s!==null;){var r=s;switch(io(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pr();break;case 3:ss(),Re(dt),Re(Ze),wo();break;case 5:bo(r);break;case 4:ss();break;case 13:Re(He);break;case 19:Re(He);break;case 10:mo(r.type._context);break;case 22:case 23:Zo()}s=s.return}if(Qe=e,Be=e=mn(e.current,null),Xe=bt=t,Ve=0,Qs=null,Vo=Xr=Nn=0,ht=Ys=null,jn!==null){for(t=0;t<jn.length;t++)if(s=jn[t],r=s.interleaved,r!==null){s.interleaved=null;var a=r.next,o=s.pending;if(o!==null){var i=o.next;o.next=a,r.next=i}s.pending=r}jn=null}return e}function sd(e,t){do{var s=Be;try{if(ho(),Fr.current=Ur,Wr){for(var r=ze.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Wr=!1}if(Cn=0,Ge=Ue=ze=null,Ws=!1,$s=0,Uo.current=null,s===null||s.return===null){Ve=1,Qs=t,Be=null;break}e:{var o=e,i=s.return,d=s,p=t;if(t=Xe,d.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var v=p,O=d,H=O.tag;if((O.mode&1)===0&&(H===0||H===11||H===15)){var I=O.alternate;I?(O.updateQueue=I.updateQueue,O.memoizedState=I.memoizedState,O.lanes=I.lanes):(O.updateQueue=null,O.memoizedState=null)}var Z=Ec(i);if(Z!==null){Z.flags&=-257,Pc(Z,i,d,o,t),Z.mode&1&&Nc(o,v,t),t=Z,p=v;var re=t.updateQueue;if(re===null){var ae=new Set;ae.add(p),t.updateQueue=ae}else re.add(p);break e}else{if((t&1)===0){Nc(o,v,t),ei();break e}p=Error(u(426))}}else if(Oe&&d.mode&1){var $e=Ec(i);if($e!==null){($e.flags&65536)===0&&($e.flags|=256),Pc($e,i,d,o,t),uo(rs(p,d));break e}}o=p=rs(p,d),Ve!==4&&(Ve=2),Ys===null?Ys=[o]:Ys.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var x=Tc(o,p,t);Xl(o,x);break e;case 1:d=p;var h=o.type,y=o.stateNode;if((o.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(dn===null||!dn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var $=Cc(o,d,t);Xl(o,$);break e}}o=o.return}while(o!==null)}od(s)}catch(oe){t=oe,Be===s&&s!==null&&(Be=s=s.return);continue}break}while(!0)}function rd(){var e=Kr.current;return Kr.current=Ur,e===null?Ur:e}function ei(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Qe===null||(Nn&268435455)===0&&(Xr&268435455)===0||hn(Qe,Xe)}function ra(e,t){var s=Ne;Ne|=2;var r=rd();(Qe!==e||Xe!==t)&&(Qt=null,Pn(e,t));do try{yh();break}catch(a){sd(e,a)}while(!0);if(ho(),Ne=s,Kr.current=r,Be!==null)throw Error(u(261));return Qe=null,Xe=0,Ve}function yh(){for(;Be!==null;)ad(Be)}function bh(){for(;Be!==null&&!Bu();)ad(Be)}function ad(e){var t=cd(e.alternate,e,bt);e.memoizedProps=e.pendingProps,t===null?od(e):Be=t,Uo.current=null}function od(e){var t=e;do{var s=t.alternate;if(e=t.return,(t.flags&32768)===0){if(s=uh(s,t,bt),s!==null){Be=s;return}}else{if(s=ph(s,t),s!==null){s.flags&=32767,Be=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,Be=null;return}}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);Ve===0&&(Ve=5)}function Ln(e,t,s){var r=Me,a=jt.transition;try{jt.transition=null,Me=1,vh(e,t,s,r)}finally{jt.transition=a,Me=r}return null}function vh(e,t,s,r){do ls();while(un!==null);if((Ne&6)!==0)throw Error(u(327));s=e.finishedWork;var a=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var o=s.lanes|s.childLanes;if(ep(e,o),e===Qe&&(Be=Qe=null,Xe=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||ea||(ea=!0,dd(lr,function(){return ls(),null})),o=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||o){o=jt.transition,jt.transition=null;var i=Me;Me=1;var d=Ne;Ne|=4,Uo.current=null,mh(e,s),Jc(s,e),qp(Za),fr=!!Xa,Za=Xa=null,e.current=s,fh(s),Uu(),Ne=d,Me=i,jt.transition=o}else e.current=s;if(ea&&(ea=!1,un=e,ta=a),o=e.pendingLanes,o===0&&(dn=null),Qu(s.stateNode),mt(e,We()),t!==null)for(r=e.onRecoverableError,s=0;s<t.length;s++)a=t[s],r(a.value,{componentStack:a.stack,digest:a.digest});if(Zr)throw Zr=!1,e=Qo,Qo=null,e;return(ta&1)!==0&&e.tag!==0&&ls(),o=e.pendingLanes,(o&1)!==0?e===Yo?Js++:(Js=0,Yo=e):Js=0,an(),null}function ls(){if(un!==null){var e=Qi(ta),t=jt.transition,s=Me;try{if(jt.transition=null,Me=16>e?16:e,un===null)var r=!1;else{if(e=un,un=null,ta=0,(Ne&6)!==0)throw Error(u(331));var a=Ne;for(Ne|=4,ne=e.current;ne!==null;){var o=ne,i=o.child;if((ne.flags&16)!==0){var d=o.deletions;if(d!==null){for(var p=0;p<d.length;p++){var v=d[p];for(ne=v;ne!==null;){var O=ne;switch(O.tag){case 0:case 11:case 15:Gs(8,O,o)}var H=O.child;if(H!==null)H.return=O,ne=H;else for(;ne!==null;){O=ne;var I=O.sibling,Z=O.return;if(Uc(O),O===v){ne=null;break}if(I!==null){I.return=Z,ne=I;break}ne=Z}}}var re=o.alternate;if(re!==null){var ae=re.child;if(ae!==null){re.child=null;do{var $e=ae.sibling;ae.sibling=null,ae=$e}while(ae!==null)}}ne=o}}if((o.subtreeFlags&2064)!==0&&i!==null)i.return=o,ne=i;else e:for(;ne!==null;){if(o=ne,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Gs(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,ne=x;break e}ne=o.return}}var h=e.current;for(ne=h;ne!==null;){i=ne;var y=i.child;if((i.subtreeFlags&2064)!==0&&y!==null)y.return=i,ne=y;else e:for(i=h;ne!==null;){if(d=ne,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Jr(9,d)}}catch(oe){Fe(d,d.return,oe)}if(d===i){ne=null;break e}var $=d.sibling;if($!==null){$.return=d.return,ne=$;break e}ne=d.return}}if(Ne=a,an(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(cr,e)}catch{}r=!0}return r}finally{Me=s,jt.transition=t}}return!1}function id(e,t,s){t=rs(s,t),t=Tc(e,t,1),e=ln(e,t,1),t=it(),e!==null&&(vs(e,1,t),mt(e,t))}function Fe(e,t,s){if(e.tag===3)id(e,e,s);else for(;t!==null;){if(t.tag===3){id(t,e,s);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=rs(s,e),e=Cc(t,e,1),t=ln(t,e,1),e=it(),t!==null&&(vs(t,1,e),mt(t,e));break}}t=t.return}}function wh(e,t,s){var r=e.pingCache;r!==null&&r.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&s,Qe===e&&(Xe&s)===s&&(Ve===4||Ve===3&&(Xe&130023424)===Xe&&500>We()-Go?Pn(e,0):Vo|=s),mt(e,t)}function ld(e,t){t===0&&((e.mode&1)===0?t=1:(t=ur,ur<<=1,(ur&130023424)===0&&(ur=4194304)));var s=it();e=Ut(e,t),e!==null&&(vs(e,t,s),mt(e,s))}function kh(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),ld(e,s)}function Sh(e,t){var s=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(s=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),ld(e,s)}var cd;cd=function(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps||dt.current)pt=!0;else{if((e.lanes&s)===0&&(t.flags&128)===0)return pt=!1,dh(e,t,s);pt=(e.flags&131072)!==0}else pt=!1,Oe&&(t.flags&1048576)!==0&&Wl(t,Ir,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qr(e,t),e=t.pendingProps;var a=Jn(t,Ze.current);ns(t,s),a=jo(null,t,r,e,a,s);var o=To();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(r)?(o=!0,Lr(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,go(t),a.updater=Vr,t.stateNode=a,a._reactInternals=t,_o(t,r,e,s),t=Ro(null,t,r,!0,o,s)):(t.tag=0,Oe&&o&&oo(t),ot(null,t,a,s),t=t.child),t;case 16:r=t.elementType;e:{switch(Qr(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Th(r),e=Pt(r,e),a){case 0:t=Ao(null,t,r,e,s);break e;case 1:t=Rc(null,t,r,e,s);break e;case 11:t=Lc(null,t,r,e,s);break e;case 14:t=_c(null,t,r,Pt(r.type,e),s);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pt(r,a),Ao(e,t,r,a,s);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pt(r,a),Rc(e,t,r,a,s);case 3:e:{if(Oc(t),e===null)throw Error(u(387));r=t.pendingProps,o=t.memoizedState,a=o.element,Kl(e,t),zr(t,r,null,s);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=rs(Error(u(423)),t),t=Dc(e,t,r,s,a);break e}else if(r!==a){a=rs(Error(u(424)),t),t=Dc(e,t,r,s,a);break e}else for(yt=nn(t.stateNode.containerInfo.firstChild),gt=t,Oe=!0,Et=null,s=Yl(t,null,r,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Zn(),r===a){t=Gt(e,t,s);break e}ot(e,t,r,s)}t=t.child}return t;case 5:return ec(t),e===null&&co(t),r=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,eo(r,a)?i=null:o!==null&&eo(r,o)&&(t.flags|=32),Ac(e,t),ot(e,t,i,s),t.child;case 6:return e===null&&co(t),null;case 13:return Hc(e,t,s);case 4:return yo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=es(t,null,r,s):ot(e,t,r,s),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pt(r,a),Lc(e,t,r,a,s);case 7:return ot(e,t,t.pendingProps,s),t.child;case 8:return ot(e,t,t.pendingProps.children,s),t.child;case 12:return ot(e,t,t.pendingProps.children,s),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,Ie(Or,r._currentValue),r._currentValue=i,o!==null)if(Nt(o.value,i)){if(o.children===a.children&&!dt.current){t=Gt(e,t,s);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var d=o.dependencies;if(d!==null){i=o.child;for(var p=d.firstContext;p!==null;){if(p.context===r){if(o.tag===1){p=Vt(-1,s&-s),p.tag=2;var v=o.updateQueue;if(v!==null){v=v.shared;var O=v.pending;O===null?p.next=p:(p.next=O.next,O.next=p),v.pending=p}}o.lanes|=s,p=o.alternate,p!==null&&(p.lanes|=s),fo(o.return,s,t),d.lanes|=s;break}p=p.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(u(341));i.lanes|=s,d=i.alternate,d!==null&&(d.lanes|=s),fo(i,s,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ot(e,t,a.children,s),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,ns(t,s),a=kt(a),r=r(a),t.flags|=1,ot(e,t,r,s),t.child;case 14:return r=t.type,a=Pt(r,t.pendingProps),a=Pt(r.type,a),_c(e,t,r,a,s);case 15:return Mc(e,t,t.type,t.pendingProps,s);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pt(r,a),Qr(e,t),t.tag=1,ut(r)?(e=!0,Lr(t)):e=!1,ns(t,s),Sc(t,r,a),_o(t,r,a,s),Ro(null,t,r,!0,e,s);case 19:return qc(e,t,s);case 22:return Ic(e,t,s)}throw Error(u(156,t.tag))};function dd(e,t){return $i(e,t)}function jh(e,t,s,r){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,s,r){return new jh(e,t,s,r)}function ti(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Th(e){if(typeof e=="function")return ti(e)?1:0;if(e!=null){if(e=e.$$typeof,e===je)return 11;if(e===ie)return 14}return 2}function mn(e,t){var s=e.alternate;return s===null?(s=Tt(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function aa(e,t,s,r,a,o){var i=2;if(r=e,typeof e=="function")ti(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case te:return _n(s.children,a,o,t);case ve:i=8,a|=8;break;case ke:return e=Tt(12,s,t,a|2),e.elementType=ke,e.lanes=o,e;case Ee:return e=Tt(13,s,t,a),e.elementType=Ee,e.lanes=o,e;case fe:return e=Tt(19,s,t,a),e.elementType=fe,e.lanes=o,e;case ce:return oa(s,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ye:i=10;break e;case Te:i=9;break e;case je:i=11;break e;case ie:i=14;break e;case Ce:i=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=Tt(i,s,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function _n(e,t,s,r){return e=Tt(7,e,r,t),e.lanes=s,e}function oa(e,t,s,r){return e=Tt(22,e,r,t),e.elementType=ce,e.lanes=s,e.stateNode={isHidden:!1},e}function ni(e,t,s){return e=Tt(6,e,null,t),e.lanes=s,e}function si(e,t,s){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ch(e,t,s,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pa(0),this.expirationTimes=Pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pa(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ri(e,t,s,r,a,o,i,d,p){return e=new Ch(e,t,s,d,p),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Tt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},go(o),e}function Nh(e,t,s){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ue,key:r==null?null:""+r,children:e,containerInfo:t,implementation:s}}function ud(e){if(!e)return rn;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var s=e.type;if(ut(s))return zl(e,s,t)}return t}function pd(e,t,s,r,a,o,i,d,p){return e=ri(s,r,!0,e,a,o,i,d,p),e.context=ud(null),s=e.current,r=it(),a=pn(s),o=Vt(r,a),o.callback=t??null,ln(s,o,a),e.current.lanes=a,vs(e,a,r),mt(e,r),e}function ia(e,t,s,r){var a=t.current,o=it(),i=pn(a);return s=ud(s),t.context===null?t.context=s:t.pendingContext=s,t=Vt(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ln(a,t,i),e!==null&&(Mt(e,a,i,o),Hr(e,a,i)),i}function la(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function ai(e,t){hd(e,t),(e=e.alternate)&&hd(e,t)}function Eh(){return null}var md=typeof reportError=="function"?reportError:function(e){console.error(e)};function oi(e){this._internalRoot=e}ca.prototype.render=oi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));ia(e,t,null,null)},ca.prototype.unmount=oi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;En(function(){ia(null,e,null,null)}),t[Ft]=null}};function ca(e){this._internalRoot=e}ca.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ki();e={blockedOn:null,target:e,priority:t};for(var s=0;s<Zt.length&&t!==0&&t<Zt[s].priority;s++);Zt.splice(s,0,e),s===0&&el(e)}};function ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fd(){}function Ph(e,t,s,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var v=la(i);o.call(v)}}var i=pd(t,r,e,0,null,!1,!1,"",fd);return e._reactRootContainer=i,e[Ft]=i.current,As(e.nodeType===8?e.parentNode:e),En(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var d=r;r=function(){var v=la(p);d.call(v)}}var p=ri(e,0,!1,null,null,!1,!1,"",fd);return e._reactRootContainer=p,e[Ft]=p.current,As(e.nodeType===8?e.parentNode:e),En(function(){ia(t,p,s,r)}),p}function ua(e,t,s,r,a){var o=s._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var d=a;a=function(){var p=la(i);d.call(p)}}ia(t,i,e,a)}else i=Ph(s,t,e,a,r);return la(i)}Yi=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var s=bs(t.pendingLanes);s!==0&&(La(t,s|1),mt(t,We()),(Ne&6)===0&&(is=We()+500,an()))}break;case 13:En(function(){var r=Ut(e,1);if(r!==null){var a=it();Mt(r,e,1,a)}}),ai(e,1)}},_a=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var s=it();Mt(t,e,134217728,s)}ai(e,134217728)}},Ji=function(e){if(e.tag===13){var t=pn(e),s=Ut(e,t);if(s!==null){var r=it();Mt(s,e,t,r)}ai(e,t)}},Ki=function(){return Me},Xi=function(e,t){var s=Me;try{return Me=e,t()}finally{Me=s}},Sa=function(e,t,s){switch(t){case"input":if(V(e,s),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<s.length;t++){var r=s[t];if(r!==e&&r.form===e.form){var a=Er(r);if(!a)throw Error(u(90));Se(r),V(r,a)}}}break;case"textarea":ps(e,s);break;case"select":t=s.value,t!=null&&ct(e,!!s.multiple,t,!1)}},Oi=Xo,Di=En;var Lh={usingClientEntryPoint:!1,Events:[Ds,Qn,Er,Ai,Ri,Xo]},Ks={findFiberByHostInstance:vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_h={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fi(e),e===null?null:e.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||Eh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pa.isDisabled&&pa.supportsFiber)try{cr=pa.inject(_h),At=pa}catch{}}return ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lh,ft.createPortal=function(e,t){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ii(t))throw Error(u(200));return Nh(e,t,null,s)},ft.createRoot=function(e,t){if(!ii(e))throw Error(u(299));var s=!1,r="",a=md;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ri(e,1,!1,null,null,s,!1,r,a),e[Ft]=t.current,As(e.nodeType===8?e.parentNode:e),new oi(t)},ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=Fi(t),e=e===null?null:e.stateNode,e},ft.flushSync=function(e){return En(e)},ft.hydrate=function(e,t,s){if(!da(t))throw Error(u(200));return ua(null,e,t,!0,s)},ft.hydrateRoot=function(e,t,s){if(!ii(e))throw Error(u(405));var r=s!=null&&s.hydratedSources||null,a=!1,o="",i=md;if(s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(o=s.identifierPrefix),s.onRecoverableError!==void 0&&(i=s.onRecoverableError)),t=pd(t,null,e,1,s??null,a,!1,o,i),e[Ft]=t.current,As(e),r)for(e=0;e<r.length;e++)s=r[e],a=s._getVersion,a=a(s._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[s,a]:t.mutableSourceEagerHydrationData.push(s,a);return new ca(t)},ft.render=function(e,t,s){if(!da(t))throw Error(u(200));return ua(null,e,t,!1,s)},ft.unmountComponentAtNode=function(e){if(!da(e))throw Error(u(40));return e._reactRootContainer?(En(function(){ua(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1},ft.unstable_batchedUpdates=Xo,ft.unstable_renderSubtreeIntoContainer=function(e,t,s,r){if(!da(s))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return ua(e,t,s,!1,r)},ft.version="18.3.1-next-f1338f8080-20240426",ft}var Sd;function qh(){if(Sd)return di.exports;Sd=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(m){console.error(m)}}return w(),di.exports=zh(),di.exports}var jd;function Fh(){if(jd)return ha;jd=1;var w=qh();return ha.createRoot=w.createRoot,ha.hydrateRoot=w.hydrateRoot,ha}var Wh=Fh();const $h=Ld(Wh);var Ti={};(function w(m,u,T,S){var z=!!(m.Worker&&m.Blob&&m.Promise&&m.OffscreenCanvas&&m.OffscreenCanvasRenderingContext2D&&m.HTMLCanvasElement&&m.HTMLCanvasElement.prototype.transferControlToOffscreen&&m.URL&&m.URL.createObjectURL),g=typeof Path2D=="function"&&typeof DOMMatrix=="function",k=(function(){if(!m.OffscreenCanvas)return!1;try{var c=new OffscreenCanvas(1,1),l=c.getContext("2d");l.fillRect(0,0,1,1);var f=c.transferToImageBitmap();l.createPattern(f,"no-repeat")}catch{return!1}return!0})();function E(){}function q(c){var l=u.exports.Promise,f=l!==void 0?l:m.Promise;return typeof f=="function"?new f(c):(c(E,E),null)}var A=(function(c,l){return{transform:function(f){if(c)return f;if(l.has(f))return l.get(f);var D=new OffscreenCanvas(f.width,f.height),B=D.getContext("2d");return B.drawImage(f,0,0),l.set(f,D),D},clear:function(){l.clear()}}})(k,new Map),L=(function(){var c=Math.floor(16.666666666666668),l,f,D={},B=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(l=function(Y){var Q=Math.random();return D[Q]=requestAnimationFrame(function N(U){B===U||B+c-1<U?(B=U,delete D[Q],Y()):D[Q]=requestAnimationFrame(N)}),Q},f=function(Y){D[Y]&&cancelAnimationFrame(D[Y])}):(l=function(Y){return setTimeout(Y,c)},f=function(Y){return clearTimeout(Y)}),{frame:l,cancel:f}})(),_=(function(){var c,l,f={};function D(B){function Y(Q,N){B.postMessage({options:Q||{},callback:N})}B.init=function(N){var U=N.transferControlToOffscreen();B.postMessage({canvas:U},[U])},B.fire=function(N,U,se){if(l)return Y(N,null),l;var de=Math.random().toString(36).slice(2);return l=q(function(be){function Se(Pe){Pe.data.callback===de&&(delete f[de],B.removeEventListener("message",Se),l=null,A.clear(),se(),be())}B.addEventListener("message",Se),Y(N,de),f[de]=Se.bind(null,{data:{callback:de}})}),l},B.reset=function(){B.postMessage({reset:!0});for(var N in f)f[N](),delete f[N]}}return function(){if(c)return c;if(!T&&z){var B=["var CONFETTI, SIZE = {}, module = {};","("+w.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{c=new Worker(URL.createObjectURL(new Blob([B])))}catch(Y){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Y),null}D(c)}return c}})(),J={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function G(c,l){return l?l(c):c}function K(c){return c!=null}function C(c,l,f){return G(c&&K(c[l])?c[l]:J[l],f)}function W(c){return c<0?0:Math.floor(c)}function P(c,l){return Math.floor(Math.random()*(l-c))+c}function M(c){return parseInt(c,16)}function F(c){return c.map(ee)}function ee(c){var l=String(c).replace(/[^0-9a-f]/gi,"");return l.length<6&&(l=l[0]+l[0]+l[1]+l[1]+l[2]+l[2]),{r:M(l.substring(0,2)),g:M(l.substring(2,4)),b:M(l.substring(4,6))}}function ue(c){var l=C(c,"origin",Object);return l.x=C(l,"x",Number),l.y=C(l,"y",Number),l}function te(c){c.width=document.documentElement.clientWidth,c.height=document.documentElement.clientHeight}function ve(c){var l=c.getBoundingClientRect();c.width=l.width,c.height=l.height}function ke(c){var l=document.createElement("canvas");return l.style.position="fixed",l.style.top="0px",l.style.left="0px",l.style.pointerEvents="none",l.style.zIndex=c,l}function ye(c,l,f,D,B,Y,Q,N,U){c.save(),c.translate(l,f),c.rotate(Y),c.scale(D,B),c.arc(0,0,1,Q,N,U),c.restore()}function Te(c){var l=c.angle*(Math.PI/180),f=c.spread*(Math.PI/180);return{x:c.x,y:c.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:c.startVelocity*.5+Math.random()*c.startVelocity,angle2D:-l+(.5*f-Math.random()*f),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:c.color,shape:c.shape,tick:0,totalTicks:c.ticks,decay:c.decay,drift:c.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:c.gravity*3,ovalScalar:.6,scalar:c.scalar,flat:c.flat}}function je(c,l){l.x+=Math.cos(l.angle2D)*l.velocity+l.drift,l.y+=Math.sin(l.angle2D)*l.velocity+l.gravity,l.velocity*=l.decay,l.flat?(l.wobble=0,l.wobbleX=l.x+10*l.scalar,l.wobbleY=l.y+10*l.scalar,l.tiltSin=0,l.tiltCos=0,l.random=1):(l.wobble+=l.wobbleSpeed,l.wobbleX=l.x+10*l.scalar*Math.cos(l.wobble),l.wobbleY=l.y+10*l.scalar*Math.sin(l.wobble),l.tiltAngle+=.1,l.tiltSin=Math.sin(l.tiltAngle),l.tiltCos=Math.cos(l.tiltAngle),l.random=Math.random()+2);var f=l.tick++/l.totalTicks,D=l.x+l.random*l.tiltCos,B=l.y+l.random*l.tiltSin,Y=l.wobbleX+l.random*l.tiltCos,Q=l.wobbleY+l.random*l.tiltSin;if(c.fillStyle="rgba("+l.color.r+", "+l.color.g+", "+l.color.b+", "+(1-f)+")",c.beginPath(),g&&l.shape.type==="path"&&typeof l.shape.path=="string"&&Array.isArray(l.shape.matrix))c.fill(ce(l.shape.path,l.shape.matrix,l.x,l.y,Math.abs(Y-D)*.1,Math.abs(Q-B)*.1,Math.PI/10*l.wobble));else if(l.shape.type==="bitmap"){var N=Math.PI/10*l.wobble,U=Math.abs(Y-D)*.1,se=Math.abs(Q-B)*.1,de=l.shape.bitmap.width*l.scalar,be=l.shape.bitmap.height*l.scalar,Se=new DOMMatrix([Math.cos(N)*U,Math.sin(N)*U,-Math.sin(N)*se,Math.cos(N)*se,l.x,l.y]);Se.multiplySelf(new DOMMatrix(l.shape.matrix));var Pe=c.createPattern(A.transform(l.shape.bitmap),"no-repeat");Pe.setTransform(Se),c.globalAlpha=1-f,c.fillStyle=Pe,c.fillRect(l.x-de/2,l.y-be/2,de,be),c.globalAlpha=1}else if(l.shape==="circle")c.ellipse?c.ellipse(l.x,l.y,Math.abs(Y-D)*l.ovalScalar,Math.abs(Q-B)*l.ovalScalar,Math.PI/10*l.wobble,0,2*Math.PI):ye(c,l.x,l.y,Math.abs(Y-D)*l.ovalScalar,Math.abs(Q-B)*l.ovalScalar,Math.PI/10*l.wobble,0,2*Math.PI);else if(l.shape==="star")for(var ge=Math.PI/2*3,qe=4*l.scalar,Je=8*l.scalar,V=l.x,me=l.y,_e=5,De=Math.PI/_e;_e--;)V=l.x+Math.cos(ge)*Je,me=l.y+Math.sin(ge)*Je,c.lineTo(V,me),ge+=De,V=l.x+Math.cos(ge)*qe,me=l.y+Math.sin(ge)*qe,c.lineTo(V,me),ge+=De;else c.moveTo(Math.floor(l.x),Math.floor(l.y)),c.lineTo(Math.floor(l.wobbleX),Math.floor(B)),c.lineTo(Math.floor(Y),Math.floor(Q)),c.lineTo(Math.floor(D),Math.floor(l.wobbleY));return c.closePath(),c.fill(),l.tick<l.totalTicks}function Ee(c,l,f,D,B){var Y=l.slice(),Q=c.getContext("2d"),N,U,se=q(function(de){function be(){N=U=null,Q.clearRect(0,0,D.width,D.height),A.clear(),B(),de()}function Se(){T&&!(D.width===S.width&&D.height===S.height)&&(D.width=c.width=S.width,D.height=c.height=S.height),!D.width&&!D.height&&(f(c),D.width=c.width,D.height=c.height),Q.clearRect(0,0,D.width,D.height),Y=Y.filter(function(Pe){return je(Q,Pe)}),Y.length?N=L.frame(Se):be()}N=L.frame(Se),U=be});return{addFettis:function(de){return Y=Y.concat(de),se},canvas:c,promise:se,reset:function(){N&&L.cancel(N),U&&U()}}}function fe(c,l){var f=!c,D=!!C(l||{},"resize"),B=!1,Y=C(l,"disableForReducedMotion",Boolean),Q=z&&!!C(l||{},"useWorker"),N=Q?_():null,U=f?te:ve,se=c&&N?!!c.__confetti_initialized:!1,de=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,be;function Se(ge,qe,Je){for(var V=C(ge,"particleCount",W),me=C(ge,"angle",Number),_e=C(ge,"spread",Number),De=C(ge,"startVelocity",Number),ct=C(ge,"decay",Number),us=C(ge,"gravity",Number),sr=C(ge,"drift",Number),ps=C(ge,"colors",F),rr=C(ge,"ticks",Number),hs=C(ge,"shapes"),ms=C(ge,"scalar"),Hn=!!C(ge,"flat"),fs=ue(ge),Yt=V,qt=[],ya=c.width*fs.x,ar=c.height*fs.y;Yt--;)qt.push(Te({x:ya,y:ar,angle:me,spread:_e,startVelocity:De,color:ps[Yt%ps.length],shape:hs[P(0,hs.length)],ticks:rr,decay:ct,gravity:us,drift:sr,scalar:ms,flat:Hn}));return be?be.addFettis(qt):(be=Ee(c,qt,U,qe,Je),be.promise)}function Pe(ge){var qe=Y||C(ge,"disableForReducedMotion",Boolean),Je=C(ge,"zIndex",Number);if(qe&&de)return q(function(De){De()});f&&be?c=be.canvas:f&&!c&&(c=ke(Je),document.body.appendChild(c)),D&&!se&&U(c);var V={width:c.width,height:c.height};N&&!se&&N.init(c),se=!0,N&&(c.__confetti_initialized=!0);function me(){if(N){var De={getBoundingClientRect:function(){if(!f)return c.getBoundingClientRect()}};U(De),N.postMessage({resize:{width:De.width,height:De.height}});return}V.width=V.height=null}function _e(){be=null,D&&(B=!1,m.removeEventListener("resize",me)),f&&c&&(document.body.contains(c)&&document.body.removeChild(c),c=null,se=!1)}return D&&!B&&(B=!0,m.addEventListener("resize",me,!1)),N?N.fire(ge,V,_e):Se(ge,V,_e)}return Pe.reset=function(){N&&N.reset(),be&&be.reset()},Pe}var ie;function Ce(){return ie||(ie=fe(null,{useWorker:!0,resize:!0})),ie}function ce(c,l,f,D,B,Y,Q){var N=new Path2D(c),U=new Path2D;U.addPath(N,new DOMMatrix(l));var se=new Path2D;return se.addPath(U,new DOMMatrix([Math.cos(Q)*B,Math.sin(Q)*B,-Math.sin(Q)*Y,Math.cos(Q)*Y,f,D])),se}function b(c){if(!g)throw new Error("path confetti are not supported in this browser");var l,f;typeof c=="string"?l=c:(l=c.path,f=c.matrix);var D=new Path2D(l),B=document.createElement("canvas"),Y=B.getContext("2d");if(!f){for(var Q=1e3,N=Q,U=Q,se=0,de=0,be,Se,Pe=0;Pe<Q;Pe+=2)for(var ge=0;ge<Q;ge+=2)Y.isPointInPath(D,Pe,ge,"nonzero")&&(N=Math.min(N,Pe),U=Math.min(U,ge),se=Math.max(se,Pe),de=Math.max(de,ge));be=se-N,Se=de-U;var qe=10,Je=Math.min(qe/be,qe/Se);f=[Je,0,0,Je,-Math.round(be/2+N)*Je,-Math.round(Se/2+U)*Je]}return{type:"path",path:l,matrix:f}}function X(c){var l,f=1,D="#000000",B='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof c=="string"?l=c:(l=c.text,f="scalar"in c?c.scalar:f,B="fontFamily"in c?c.fontFamily:B,D="color"in c?c.color:D);var Y=10*f,Q=""+Y+"px "+B,N=new OffscreenCanvas(Y,Y),U=N.getContext("2d");U.font=Q;var se=U.measureText(l),de=Math.ceil(se.actualBoundingBoxRight+se.actualBoundingBoxLeft),be=Math.ceil(se.actualBoundingBoxAscent+se.actualBoundingBoxDescent),Se=2,Pe=se.actualBoundingBoxLeft+Se,ge=se.actualBoundingBoxAscent+Se;de+=Se+Se,be+=Se+Se,N=new OffscreenCanvas(de,be),U=N.getContext("2d"),U.font=Q,U.fillStyle=D,U.fillText(l,Pe,ge);var qe=1/f;return{type:"bitmap",bitmap:N.transferToImageBitmap(),matrix:[qe,0,0,qe,-de*qe/2,-be*qe/2]}}u.exports=function(){return Ce().apply(this,arguments)},u.exports.reset=function(){Ce().reset()},u.exports.create=fe,u.exports.shapeFromPath=b,u.exports.shapeFromText=X})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Ti,!1);const Bh=Ti.exports;Ti.exports.create;class Uh{constructor(){this.ctx=null,this.muted=!1}init(){if(!this.ctx&&typeof window<"u"){const m=window.AudioContext||window.webkitAudioContext;m&&(this.ctx=new m)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(m){this.muted=m}playTone(m,u="sine",T=.15,S=.15,z=0){if(!this.muted)try{if(this.init(),!this.ctx)return;const g=this.ctx.createOscillator(),k=this.ctx.createGain();g.type=u,g.frequency.setValueAtTime(m,this.ctx.currentTime+z),k.gain.setValueAtTime(S,this.ctx.currentTime+z),k.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+z+T),g.connect(k),k.connect(this.ctx.destination),g.start(this.ctx.currentTime+z),g.stop(this.ctx.currentTime+z+T)}catch{}}playClick(){this.playTone(800,"triangle",.04,.08)}playCorrect(){this.playTone(523.25,"sine",.12,.15,0),this.playTone(659.25,"sine",.12,.15,.08),this.playTone(783.99,"sine",.22,.18,.16)}playError(){this.playTone(180,"sawtooth",.12,.12,0),this.playTone(130,"sawtooth",.22,.15,.1)}playStreak(){[400,550,700,880,1100].forEach((m,u)=>{this.playTone(m,"triangle",.08,.1,u*.04)})}playLevelUp(){[{f:523.25,d:.12,t:0},{f:659.25,d:.12,t:.1},{f:783.99,d:.12,t:.2},{f:1046.5,d:.35,t:.3}].forEach(u=>this.playTone(u.f,"square",u.d,.12,u.t))}playCardFlip(){this.playTone(450,"sine",.05,.06)}playHit(){this.playTone(320,"sawtooth",.08,.18,0),this.playTone(480,"sine",.1,.12,.03)}playExplosion(){this.playTone(120,"sawtooth",.25,.25,0),this.playTone(90,"triangle",.4,.22,.08),this.playTone(60,"sine",.6,.3,.16)}playCountdown(){this.playTone(600,"sine",.06,.08)}}const R=new Uh,_d=j.createContext(),hi="byteverse_player_data_v1",Vh=({children:w})=>{const[m,u]=j.useState(()=>{try{const F=localStorage.getItem(hi);if(F)return JSON.parse(F)}catch{}return{xp:0,streak:1,lastActiveDate:new Date().toDateString(),completedLevels:{html:[],css:[],js:[],mysql:[],python:[],php:[],django:[]},achievements:["first_step"],soundMuted:!1}}),[T,S]=j.useState("arcade"),[z,g]=j.useState("html"),[k,E]=j.useState(1),[q,A]=j.useState(!1);j.useEffect(()=>{try{localStorage.setItem(hi,JSON.stringify(m))}catch{}},[m]),j.useEffect(()=>{R.setMuted(m.soundMuted)},[m.soundMuted]);const L=Math.floor(m.xp/100)+1,_=m.xp%100,J=F=>F>=20?"Cyber Archmage":F>=15?"Full-Stack Titan":F>=10?"System Architect":F>=7?"Algorithm Master":F>=5?"Code Sorcerer":F>=3?"Syntax Knight":"Byte Novice",G=()=>{try{Bh({particleCount:60,spread:70,origin:{y:.6}})}catch{}},K=F=>{R.playCorrect(),G(),u(ee=>{const ue=Math.floor(ee.xp/100)+1,te=ee.xp+F;return Math.floor(te/100)+1>ue&&setTimeout(()=>R.playLevelUp(),300),{...ee,xp:te}})},C=(F,ee,ue=50)=>{u(te=>{const ve=te.completedLevels[F]||[],ke=!ve.includes(ee),ye=ke?[...ve,ee]:ve,Te=[...te.achievements];if(ye.length>=4){const Ee={html:"html_master",css:"css_wizard",js:"js_ninja",mysql:"sql_sleuth",python:"python_charmer",php:"server_chef",django:"django_captain"}[F];Ee&&!Te.includes(Ee)&&(Te.push(Ee),setTimeout(()=>R.playStreak(),600))}return{...te,xp:ke?te.xp+ue:te.xp,completedLevels:{...te.completedLevels,[F]:ye},achievements:Te}}),R.playCorrect(),G()},W=F=>{u(ee=>ee.achievements.includes(F)?ee:(R.playStreak(),{...ee,achievements:[...ee.achievements,F]}))},P=()=>{R.playClick(),u(F=>({...F,soundMuted:!F.soundMuted}))},M=()=>{if(window.confirm("Are you sure you want to reset all your progress, XP, and badges?")){const F={xp:0,streak:1,lastActiveDate:new Date().toDateString(),completedLevels:{html:[],css:[],js:[],mysql:[],python:[],php:[],django:[]},achievements:["first_step"],soundMuted:!1};u(F),localStorage.removeItem(hi),R.playClick()}};return n.jsx(_d.Provider,{value:{mode:T,setMode:S,selectedTrack:z,setSelectedTrack:g,activeGameLevel:k,setActiveGameLevel:E,xp:m.xp,playerLevel:L,currentLevelProgress:_,rankTitle:J(L),streak:m.streak,completedLevels:m.completedLevels,achievements:m.achievements,soundMuted:m.soundMuted,isAchievementsOpen:q,setIsAchievementsOpen:A,addXP:K,markLevelComplete:C,unlockAchievement:W,toggleSound:P,resetProgress:M,triggerConfetti:G},children:w})},at=()=>j.useContext(_d),Md=({size:w="md",showTagline:m=!0,onClick:u})=>{const T={sm:{icon:28,text:"text-xl"},md:{icon:38,text:"text-2xl"},lg:{icon:54,text:"text-4xl"}},{icon:S,text:z}=T[w]||T.md;return n.jsxs("div",{onClick:u,className:"inline-flex items-center gap-3 cursor-pointer group select-none transition-transform hover:scale-[1.02]",children:[n.jsxs("div",{className:"relative flex items-center justify-center",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-300"}),n.jsxs("svg",{width:S,height:S,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"relative drop-shadow-[0_0_12px_rgba(0,242,254,0.5)] transition-transform group-hover:rotate-6 duration-300",children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:"cyberGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#00f2fe"}),n.jsx("stop",{offset:"50%",stopColor:"#9d4edd"}),n.jsx("stop",{offset:"100%",stopColor:"#ec4899"})]}),n.jsxs("linearGradient",{id:"innerGlow",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#00f2fe",stopOpacity:"0.8"}),n.jsx("stop",{offset:"100%",stopColor:"#9d4edd",stopOpacity:"0.2"})]})]}),n.jsx("polygon",{points:"50,6 92,28 92,72 50,94 8,72 8,28",fill:"#0c111e",stroke:"url(#cyberGrad)",strokeWidth:"5",strokeLinejoin:"round"}),n.jsx("polygon",{points:"50,15 84,33 84,67 50,85 16,67 16,33",fill:"none",stroke:"url(#innerGlow)",strokeWidth:"1.5",strokeDasharray:"4 2"}),n.jsx("path",{d:"M34 38 L22 50 L34 62",stroke:"#00f2fe",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M66 38 L78 50 L66 62",stroke:"#ec4899",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("line",{x1:"57",y1:"34",x2:"43",y2:"66",stroke:"#9d4edd",strokeWidth:"5",strokeLinecap:"round"}),n.jsx("circle",{cx:"50",cy:"50",r:"4.5",fill:"#ffffff",className:"animate-ping opacity-75 origin-center"}),n.jsx("circle",{cx:"50",cy:"50",r:"3.5",fill:"#00f2fe"})]})]}),n.jsxs("div",{className:"flex flex-col",children:[n.jsxs("div",{className:`font-extrabold tracking-tight ${z} leading-none flex items-center gap-0.5`,children:[n.jsx("span",{className:"text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]",children:"Byte"}),n.jsx("span",{className:"bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent",children:"Verse"})]}),m&&n.jsxs("span",{className:"text-[10px] uppercase tracking-widest text-cyan-400/80 font-mono mt-1 font-semibold flex items-center gap-1.5",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),"PLAY • LEARN • CODE"]})]})]})};/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=w=>w==null?void 0:w.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Qh(w,m,u=[]){if(m==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Gh(w),size:24,node:m,...u.length>0?{aliases:u}:{}}}/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=w=>{let m="",u=!1;for(const T of w){if(T==="-"||T==="_"||T<=" "){u=m.length>0;continue}m.length===0?m+=T.toLowerCase():m+=u?T.toUpperCase():T,u=!1}return m};/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=w=>{const m=Yh(w);return m.charAt(0).toUpperCase()+m.slice(1)};/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=(...w)=>w.filter((m,u,T)=>!!m&&m.trim()!==""&&T.indexOf(m)===u).join(" ").trim();/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function mi(w){return w!=null}function Kh(w,m={}){var _,J;const u=m.attributeNames??{},T=G=>u[G]??G,S=w.size??w.width??Mn.width,z=w.size??w.height??Mn.height,g=((_=w.aliases)==null?void 0:_.filter(G=>typeof G=="string"&&G.trim()!=="").map(G=>`lucide-${G}`))??[],k=[...w.name?[`lucide-${w.name}`]:[],...g],E=((J=m.className)==null?void 0:J.split(" ").filter(Boolean))??[],q=m.includeDefaultClasses===!1?yi(...E):yi("lucide",...k,...E),A=m.absoluteStrokeWidth?Number(m.strokeWidth??Mn["stroke-width"])*Number(w.size??w.width??Mn.width)/Number(m.size??m.width??Mn.width):m.strokeWidth??Mn["stroke-width"];return["svg",{...Object.entries(Mn).reduce((G,[K,C])=>(G[T(K)]=C,G),{}),..."color"in m&&m.color&&{[T("stroke")]:m.color},..."size"in m&&mi(m.size)&&{[T("width")]:m.size,[T("height")]:m.size},..."width"in m&&mi(m.width)&&{[T("width")]:m.width},..."height"in m&&mi(m.height)&&{[T("height")]:m.height},[T("stroke-width")]:A,...q&&{[T("class")]:q},[T("viewBox")]:`0 0 ${S} ${z}`,...m.hasA11yProp===!1?{[T("aria-hidden")]:"true"}:{},..."attributes"in m&&m.attributes},w.node.map(G=>{const[K,C,W]=G,P=m.nonScalingStroke?{[T("vector-effect")]:"non-scaling-stroke",...C}:C;return W?[K,P,W]:[K,P]})]}/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Xh(w,m={}){return Kh(w,{...m,attributeNames:{...m.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=w=>{for(const m in w)if(m.startsWith("aria-")||m==="role"||m==="title")return!0;return!1},em=j.createContext({}),tm=()=>j.useContext(em),nm=j.forwardRef(({color:w,size:m,width:u,height:T,strokeWidth:S,absoluteStrokeWidth:z,nonScalingStroke:g,className:k="",children:E,iconNode:q=[],icon:A={node:q,aliases:[],size:24},...L},_)=>{const{size:J=24,strokeWidth:G=2,absoluteStrokeWidth:K=!1,nonScalingStroke:C=!1,color:W="currentColor",className:P=""}=tm()??{},M=!!E||Zh(L),[F,ee,ue=[]]=Xh(A,{color:w??W,width:u??m??J,height:T??m??J,strokeWidth:S??G,absoluteStrokeWidth:z??K,nonScalingStroke:g??C,className:yi(P,k),hasA11yProp:M,attributes:L});return j.createElement(F,{ref:_,...ee},[...ue.map(([te,ve])=>j.createElement(te,ve)),...Array.isArray(E)?E:[E]])});/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function le(w,m=[],u=[]){const T=typeof w=="string"?Qh(w,m,u):w,S=j.forwardRef(({className:z,...g},k)=>j.createElement(nm,{ref:k,icon:T,className:z,...g}));return T.name&&(S.displayName=Jh(T.name)),S}/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id={name:"arrow-right-left",size:24,node:[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]};Id.node;const sm=le(Id);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Ad.node;const yn=le(Ad);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};Rd.node;const tr=le(Rd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};Od.node;const An=le(Od);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd={name:"bot",size:24,node:[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]};Dd.node;const Td=le(Dd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd={name:"bug",size:24,node:[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]]};Hd.node;const rm=le(Hd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};zd.node;const er=le(zd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd={name:"chevron-left",size:24,node:[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]};qd.node;const bi=le(qd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Fd.node;const ma=le(Fd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};Wd.node;const am=le(Wd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};$d.node;const lt=le($d);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};Bd.node;const om=le(Bd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud={name:"circle-x",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-circle"]};Ud.node;const It=le(Ud);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};Vd.node;const fa=le(Vd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};Gd.node;const On=le(Gd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};Qd.node;const vi=le(Qd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd={name:"database",size:24,node:[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]};Yd.node;const ds=le(Yd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};Jd.node;const im=le(Jd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Kd.node;const Xd=le(Kd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd={name:"file-code",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]]};Zd.node;const lm=le(Zd);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};eu.node;const cm=le(eu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu={name:"flag",size:24,node:[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]]};tu.node;const dm=le(tu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};nu.node;const nr=le(nu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su={name:"gamepad-2",size:24,node:[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]};su.node;const wi=le(su);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru={name:"gem",size:24,node:[["path",{d:"M10.5 3 8 9l4 13 4-13-2.5-6",key:"b3dvk1"}],["path",{d:"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",key:"7w4byz"}],["path",{d:"M2 9h20",key:"16fsjt"}]]};ru.node;const um=le(ru);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au={name:"git-fork",size:24,node:[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]};au.node;const pm=le(au);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou={name:"graduation-cap",size:24,node:[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]};ou.node;const hm=le(ou);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]};iu.node;const mm=le(iu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};lu.node;const fm=le(lu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};cu.node;const Ci=le(cu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du={name:"lightbulb",size:24,node:[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]};du.node;const ga=le(du);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};uu.node;const xm=le(uu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};pu.node;const gm=le(pu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};hu.node;const Ni=le(hu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};mu.node;const zt=le(mu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu={name:"printer",size:24,node:[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]};fu.node;const ym=le(fu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu={name:"receipt",size:24,node:[["path",{d:"M12 17V7",key:"pyj7ub"}],["path",{d:"M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8",key:"1elt7d"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",key:"ycz6yz"}]]};xu.node;const bm=le(xu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu={name:"rocket",size:24,node:[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]]};gu.node;const Cd=le(gu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};yu.node;const st=le(yu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};bu.node;const ki=le(bu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};vu.node;const Ei=le(vu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};wu.node;const vm=le(wu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku={name:"skull",size:24,node:[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]]};ku.node;const cs=le(ku);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su={name:"smartphone",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]};Su.node;const wm=le(Su);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};ju.node;const rt=le(ju);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu={name:"swords",size:24,node:[["path",{d:"m13 19 6-6",key:"gj6q8g"}],["path",{d:"M14.5 17.5 3.586 6.586A2 2 0 013 5.172V3h2.172a2 2 0 011.414.586L17.5 14.5",key:"uwfxh8"}],["path",{d:"m14.828 6.172 2.586-2.586A2 2 0 0118.828 3H21v2.172a2 2 0 01-.586 1.414l-2.586 2.586",key:"1f17hx"}],["path",{d:"m16 16 4 4",key:"up5ibb"}],["path",{d:"m19 21 2-2",key:"1phfkn"}],["path",{d:"m5 14 4 4",key:"1gk0qx"}],["path",{d:"m5 21-2-2",key:"1kw20b"}],["path",{d:"M7.5 16.5 4 20",key:"14nozp"}]]};Tu.node;const Si=le(Tu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu={name:"table",size:24,node:[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]};Cu.node;const km=le(Cu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};Nu.node;const xn=le(Nu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu={name:"timer",size:24,node:[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]};Eu.node;const Sm=le(Eu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu={name:"trophy",size:24,node:[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]]};Pu.node;const gn=le(Pu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};Lu.node;const Pi=le(Lu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u={name:"utensils",size:24,node:[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],aliases:["fork-knife"]};_u.node;const jm=le(_u);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Mu.node;const Li=le(Mu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Iu.node;const _i=le(Iu);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au={name:"wand-sparkles",size:24,node:[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],aliases:["wand-2"]};Au.node;const Tm=le(Au);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Ru.node;const xa=le(Ru);/**
 * @license lucide-react v1.49.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};Ou.node;const Rn=le(Ou),Cm=()=>{const{mode:w,setMode:m,xp:u,playerLevel:T,currentLevelProgress:S,rankTitle:z,streak:g,soundMuted:k,toggleSound:E,setIsAchievementsOpen:q,resetProgress:A}=at(),L=[{id:"arcade",label:"Arcade",fullLabel:"Arcade Games",icon:wi,color:"text-cyan-400"},{id:"academy",label:"Academy",fullLabel:"Study Academy",icon:An,color:"text-teal-400"},{id:"coop",label:"Co-Op",fullLabel:"Play Together",icon:Pi,color:"text-pink-400"},{id:"playground",label:"Sandbox",fullLabel:"Code Sandbox",icon:xn,color:"text-amber-400"}];return n.jsxs(n.Fragment,{children:[n.jsx("header",{className:"sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-[#0a0d14]/95 backdrop-blur-md",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4",children:[n.jsx(Md,{size:"md",onClick:()=>m("arcade")}),n.jsx("nav",{className:"hidden md:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 shadow-inner",children:L.map(_=>{const J=_.icon,G=w===_.id;return n.jsxs("button",{onClick:()=>m(_.id),className:`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 ${G?"bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.25)]":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,children:[n.jsx(J,{size:16,className:G?_.color:"text-slate-400"}),n.jsx("span",{children:_.fullLabel})]},_.id)})}),n.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-3",children:[n.jsxs("div",{className:"flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-r from-rose-500/10 to-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-bold shadow-sm",children:[n.jsx(nr,{size:15,className:"text-orange-500 animate-bounce"}),n.jsxs("span",{children:[g,"d"]})]}),n.jsxs("div",{className:"flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl",children:[n.jsxs("div",{className:"flex flex-col text-right",children:[n.jsxs("div",{className:"flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-cyan-400",children:[n.jsx(rt,{size:11,className:"hidden sm:inline"}),n.jsxs("span",{children:["Lvl ",T]}),n.jsxs("span",{className:"hidden lg:inline text-slate-400",children:["• ",z]})]}),n.jsx("div",{className:"w-16 sm:w-24 bg-slate-800 h-1.5 rounded-full overflow-hidden mt-0.5",children:n.jsx("div",{className:"bg-gradient-to-r from-cyan-400 to-purple-500 h-full rounded-full transition-all duration-500",style:{width:`${S}%`}})})]}),n.jsxs("span",{className:"font-mono text-[11px] sm:text-xs font-bold text-slate-300",children:[u," ",n.jsx("span",{className:"hidden sm:inline",children:"XP"})]})]}),n.jsxs("button",{onClick:()=>q(!0),className:"p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 transition-colors shadow-sm relative active:scale-95",title:"View Achievements & Badges","aria-label":"Achievements",children:[n.jsx(gn,{size:17}),n.jsx("span",{className:"absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"}),n.jsx("span",{className:"absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"})]}),n.jsx("button",{onClick:E,className:`p-2 rounded-xl border transition-colors active:scale-95 ${k?"bg-slate-900 border-slate-800 text-slate-500":"bg-cyan-500/10 border-cyan-500/40 text-cyan-400"}`,title:k?"Unmute Sound":"Mute Sound","aria-label":"Toggle Sound",children:k?n.jsx(_i,{size:17}):n.jsx(Li,{size:17})}),n.jsx("button",{onClick:A,className:"hidden lg:flex p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-500 hover:text-rose-400 hover:border-rose-500/40 transition-colors active:scale-95",title:"Reset Game Data",children:n.jsx(st,{size:16})})]})]})}),n.jsx("div",{className:"md:hidden fixed bottom-3 left-3 right-3 z-50 rounded-2xl glass-panel bg-slate-950/95 border border-slate-800/90 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl px-2 py-1.5 flex items-center justify-around",children:L.map(_=>{const J=_.icon,G=w===_.id;return n.jsxs("button",{onClick:()=>m(_.id),className:`flex flex-col items-center justify-center flex-1 py-1.5 px-1 rounded-xl transition-all active:scale-95 ${G?"text-cyan-400 bg-cyan-500/15 font-bold shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[n.jsx(J,{size:18,className:G?_.color:"text-slate-400"}),n.jsx("span",{className:"text-[10px] mt-0.5 tracking-tight",children:_.label})]},_.id)})})]})},Du=[{id:"html",name:"HTML5",category:"Frontend",icon:"Code2",color:"#f97316",accentColor:"from-orange-500 to-amber-500",borderColor:"border-orange-500/30",tagline:"The Skeleton of the Web",description:"Learn structure, tags, forms, media, and semantic web layouts by building interactive web towers.",gameTitle:"Tower Builder & Tag Rescue",badge:"HTML Architect",levelsCount:4,levelNames:["Tag Matcher","Structure Builder","Form Architect","Bug Smasher (Missing Tags)"]},{id:"css",name:"CSS3",category:"Frontend",icon:"Palette",color:"#06b6d4",accentColor:"from-cyan-500 to-blue-500",borderColor:"border-cyan-500/30",tagline:"The Art of Style & Motion",description:"Master Flexbox, Grid, colors, spacing, and animations by styling characters and live viewports.",gameTitle:"Flexbox & Grid Arena",badge:"Style Wizard",levelsCount:4,levelNames:["Flex Alignment","Justify Journey","Grid Dimension","Neo Glow Styling"]},{id:"js",name:"JavaScript",category:"Frontend & Logic",icon:"Terminal",color:"#eab308",accentColor:"from-yellow-400 to-amber-500",borderColor:"border-yellow-500/30",tagline:"The Brain of Web Apps",description:"Master variables, arrow functions, DOM events, array methods, and async logic with live test runners.",gameTitle:"Bug Smasher & Logic Lab",badge:"JS Exterminator",levelsCount:4,levelNames:["Variable Fixer","Array Power","Conditionals Gate","DOM Spark Event"]},{id:"python",name:"Python",category:"Backend & Data",icon:"Sparkles",color:"#3b82f6",accentColor:"from-blue-500 to-indigo-600",borderColor:"border-blue-500/30",tagline:"Elegant, Readable & Powerful",description:"Learn Python syntax, loops, lists, and functions to navigate our maze crawler and collect data gems.",gameTitle:"Snake Coder & Algorithm Maze",badge:"Python Charmer",levelsCount:4,levelNames:["Print & Variables","Loop Navigator","List Slicer","Function Foundry"]},{id:"mysql",name:"MySQL",category:"Database",icon:"Database",color:"#10b981",accentColor:"from-emerald-400 to-teal-600",borderColor:"border-emerald-500/30",tagline:"Master Relational Data",description:"Query database tables, filter crime scene clues, join tables, and crack the mystery heist case.",gameTitle:"SQL Crime Mystery Detective",badge:"SQL Sleuth",levelsCount:4,levelNames:["Suspect Filter","Order of Evidence","JOIN the Crime Scene","Aggregate Heist Total"]},{id:"php",name:"PHP",category:"Backend",icon:"Server",color:"#a855f7",accentColor:"from-purple-500 to-indigo-500",borderColor:"border-purple-500/30",tagline:"Powering 70%+ of the Web",description:"Understand server-side scripting, $_GET, $_POST, sessions, and dynamic templating in the Web Kitchen.",gameTitle:"Server Kitchen & Form Master",badge:"Server Chef",levelsCount:4,levelNames:["Order Dispatcher","POST Inspector","Session Tracker","Template Fusion"]},{id:"django",name:"Django",category:"Full-Stack Framework",icon:"Layers",color:"#059669",accentColor:"from-emerald-600 to-green-700",borderColor:"border-emerald-600/30",tagline:"The Web Framework for Perfectionists",description:"Learn MTV (Models, Templates, Views), URL routing, and ORM queries by directing web traffic.",gameTitle:"MTV Route Dispatcher",badge:"Django Architect",levelsCount:4,levelNames:["URL Dispatcher","View Controller","ORM Query Master","Template Context"]}],Dn={html:[{id:1,title:"Level 1: Tag Matcher",prompt:"Assemble a hero header by picking the correct HTML tags in order!",targetResult:`<h1>Welcome to ByteVerse</h1>
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
</for>`,"<?php foreach ($rewards as $reward) { echo $reward; } ?>"],correctOptionIndex:0,explanation:"Django templates use {% ... %} for control tags (like for, if) and {{ ... }} for variable outputs.",xp:75}]},Nd=()=>{const{markLevelComplete:w,completedLevels:m,activeGameLevel:u,setActiveGameLevel:T}=at(),S=Dn.html,z=Math.min(u-1,S.length-1),g=S[z],[k,E]=j.useState(null),[q,A]=j.useState(null),[L,_]=j.useState(!1);(m.html||[]).includes(g.id);const J=P=>{R.playClick(),E(P),A(null)},G=()=>{k!==null&&(k===g.correctOptionIndex?(A("correct"),w("html",g.id,g.xp)):(R.playError(),A("wrong")))},K=()=>{R.playClick(),E(null),A(null),_(!1),u<S.length&&T(u+1)},C=()=>{R.playClick(),E(null),A(null),_(!1)},W=()=>g.id===1?`
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
    `;return n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/30",children:n.jsx(On,{size:22})}),n.jsxs("div",{children:[n.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:["HTML Tower Builder",n.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 font-mono",children:[g.xp," XP"]})]}),n.jsx("p",{className:"text-xs text-slate-400",children:"Assemble structures, nest tags, and fix broken syntax."})]})]}),n.jsx("div",{className:"flex items-center gap-1.5",children:S.map(P=>{const M=(m.html||[]).includes(P.id),F=u===P.id;return n.jsx("button",{onClick:()=>{R.playClick(),T(P.id),E(null),A(null)},className:`w-9 h-9 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${F?"bg-orange-500 text-white shadow-[0_0_12px_rgba(249,115,22,0.5)]":M?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-slate-800 text-slate-400 hover:bg-slate-700"}`,children:M?"✓":P.id},P.id)})})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[n.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 space-y-5",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-xs font-mono text-orange-400 uppercase tracking-wider font-semibold",children:"Mission Objective"}),n.jsx("h3",{className:"text-lg font-bold text-white mt-1",children:g.title}),n.jsx("p",{className:"text-sm text-slate-300 mt-1.5 leading-relaxed",children:g.prompt})]}),g.brokenCode&&n.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto",children:[n.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-widest mb-1.5 font-bold",children:"Broken Code Inspect:"}),n.jsx("pre",{className:"text-rose-400",children:g.brokenCode})]}),n.jsxs("div",{className:"space-y-2.5",children:[n.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"Choose the correct tag snippet:"}),g.options.map((P,M)=>{const F=k===M;return n.jsxs("button",{onClick:()=>J(M),className:`w-full text-left p-3.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-between ${F?"bg-orange-500/20 border-orange-500 text-orange-200 shadow-[0_0_15px_rgba(249,115,22,0.2)]":"bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/60"}`,children:[n.jsx("span",{className:"break-all",children:P}),n.jsx("span",{className:`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ml-2 shrink-0 ${F?"border-orange-400 bg-orange-500 text-white":"border-slate-700 text-slate-500"}`,children:String.fromCharCode(65+M)})]},M)})]}),q==="correct"&&n.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-bounce",children:[n.jsx(lt,{size:22,className:"shrink-0 text-emerald-400"}),n.jsxs("div",{className:"text-sm font-semibold",children:["Superb! Correct tags assembled! +",g.xp," XP awarded."]})]}),q==="wrong"&&n.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3",children:[n.jsx(It,{size:22,className:"shrink-0 text-rose-400"}),n.jsx("div",{className:"text-sm font-semibold",children:"Not quite! Check the tag syntax or try clicking the Hint button."})]}),n.jsxs("div",{className:"flex items-center justify-between gap-3 pt-2",children:[n.jsxs("button",{onClick:()=>_(!L),className:"px-3 py-2 rounded-xl text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 flex items-center gap-1.5 transition-colors",children:[n.jsx(ga,{size:14}),n.jsx("span",{children:L?"Hide Hint":"Need Hint?"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{onClick:C,className:"p-2 rounded-xl text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 transition-colors",title:"Reset Selection",children:n.jsx(st,{size:16})}),q==="correct"&&u<S.length?n.jsxs("button",{onClick:K,className:"px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform",children:[n.jsx("span",{children:"Next Level"}),n.jsx(yn,{size:16})]}):n.jsxs("button",{onClick:G,disabled:k===null,className:`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${k!==null?"bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:scale-[1.02]":"bg-slate-800 text-slate-500 cursor-not-allowed"}`,children:[n.jsx(rt,{size:16}),n.jsx("span",{children:"Verify Tags"})]})]})]}),L&&n.jsxs("div",{className:"p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed animate-fadeIn",children:["💡 ",n.jsx("strong",{children:"Hint:"})," ",g.hint]})]}),n.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("span",{className:"text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5",children:[n.jsx(Xd,{size:14}),"Live DOM Preview"]}),n.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"Real-time Browser Render"})]}),n.jsxs("div",{className:"rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl",children:[n.jsxs("div",{className:"bg-slate-900 px-3 py-2 border-b border-slate-800 flex items-center gap-2",children:[n.jsxs("div",{className:"flex gap-1.5",children:[n.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-rose-500/80"}),n.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-amber-500/80"}),n.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500/80"})]}),n.jsx("div",{className:"w-full max-w-[200px] mx-auto bg-slate-950/80 rounded text-[10px] text-slate-400 font-mono text-center py-0.5 border border-slate-800",children:"byteverse://tower-preview"})]}),n.jsx("div",{className:"p-6 min-h-[220px] flex items-center justify-center",dangerouslySetInnerHTML:{__html:W()}})]})]}),n.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2",children:[n.jsx("span",{className:"w-2 h-2 rounded-full bg-orange-400 shrink-0"}),n.jsx("span",{children:"HTML elements construct the DOM nodes displayed inside the browser window."})]})]})]})]})},Nm=()=>{const{markLevelComplete:w,completedLevels:m,activeGameLevel:u,setActiveGameLevel:T}=at(),S=Dn.css,z=Math.min(u-1,S.length-1),g=S[z],[k,E]=j.useState(g.starterValue),[q,A]=j.useState(null),[L,_]=j.useState(!1),J=P=>{R.playClick(),E(P),A(null)},G=()=>{k===g.correctValue?(A("correct"),w("css",g.id,g.xp)):(R.playError(),A("wrong"))},K=()=>{if(R.playClick(),A(null),_(!1),u<S.length){const P=S[u];T(u+1),E(P.starterValue)}},C=()=>{R.playClick(),E(g.starterValue),A(null),_(!1)},W=()=>{const P={display:g.previewType==="grid"?"grid":"flex",minHeight:"220px",transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"};return g.cssTargetProperty==="justify-content"?(P.justifyContent=k,P.alignItems="center"):g.cssTargetProperty==="align-items"?(P.justifyContent="center",P.alignItems=k):g.cssTargetProperty==="flex-direction"?(P.flexDirection=k,P.justifyContent="center",P.alignItems="center",P.gap="16px"):g.cssTargetProperty==="grid-template-columns"&&(P.gridTemplateColumns=k,P.gap="12px",P.alignItems="center"),P};return n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30",children:n.jsx(Ni,{size:22})}),n.jsxs("div",{children:[n.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:["CSS Flexbox & Grid Arena",n.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-mono",children:[g.xp," XP"]})]}),n.jsx("p",{className:"text-xs text-slate-400",children:"Position spaceships and design layouts using real CSS properties."})]})]}),n.jsx("div",{className:"flex items-center gap-1.5",children:S.map(P=>{const M=(m.css||[]).includes(P.id),F=u===P.id;return n.jsx("button",{onClick:()=>{R.playClick(),T(P.id),E(P.starterValue),A(null)},className:`w-9 h-9 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${F?"bg-cyan-500 text-slate-950 font-black shadow-[0_0_12px_rgba(6,182,212,0.6)]":M?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-slate-800 text-slate-400 hover:bg-slate-700"}`,children:M?"✓":P.id},P.id)})})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[n.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 space-y-5",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold",children:"CSS Flight Control"}),n.jsx("h3",{className:"text-lg font-bold text-white mt-1",children:g.title}),n.jsx("p",{className:"text-sm text-slate-300 mt-1 leading-relaxed",children:g.prompt})]}),n.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs",children:[n.jsx("div",{className:"text-slate-500 mb-1",children:"// SpaceHangar.css"}),n.jsx("div",{className:"text-purple-400",children:".hangar-bay {"}),n.jsxs("div",{className:"pl-4 text-slate-300",children:[n.jsx("span",{className:"text-cyan-400",children:"display"}),": ",g.previewType==="grid"?"grid":"flex",";"]}),n.jsxs("div",{className:"pl-4 py-1.5 flex items-center gap-2 flex-wrap",children:[n.jsx("span",{className:"text-cyan-400 font-bold",children:g.cssTargetProperty}),":",n.jsx("span",{className:"text-amber-300 font-bold bg-slate-900 px-2 py-0.5 rounded border border-amber-500/40",children:k}),";"]}),n.jsx("div",{className:"text-purple-400",children:"}"})]}),n.jsxs("div",{className:"space-y-2",children:[n.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"Select property value:"}),n.jsx("div",{className:"grid grid-cols-2 gap-2",children:g.options.map((P,M)=>{const F=k===P;return n.jsx("button",{onClick:()=>J(P),className:`p-3 rounded-xl border font-mono text-xs font-bold transition-all text-center ${F?"bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.3)]":"bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"}`,children:P},M)})})]}),q==="correct"&&n.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-bounce",children:[n.jsx(lt,{size:22,className:"shrink-0 text-emerald-400"}),n.jsxs("div",{className:"text-sm font-semibold",children:["Perfect Alignment! Ship docked successfully. +",g.xp," XP"]})]}),q==="wrong"&&n.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3",children:[n.jsx(It,{size:22,className:"shrink-0 text-rose-400"}),n.jsx("div",{className:"text-sm font-semibold",children:"Not aligned with the target beacon! Try another CSS value or check the hint."})]}),n.jsxs("div",{className:"flex items-center justify-between gap-3 pt-2",children:[n.jsxs("button",{onClick:()=>_(!L),className:"px-3 py-2 rounded-xl text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 flex items-center gap-1.5 transition-colors",children:[n.jsx(ga,{size:14}),n.jsx("span",{children:L?"Hide Hint":"Need Hint?"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{onClick:C,className:"p-2 rounded-xl text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 transition-colors",title:"Reset Value",children:n.jsx(st,{size:16})}),q==="correct"&&u<S.length?n.jsxs("button",{onClick:K,className:"px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform",children:[n.jsx("span",{children:"Next Level"}),n.jsx(yn,{size:16})]}):n.jsxs("button",{onClick:G,className:"px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-black shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform",children:[n.jsx(rt,{size:16}),n.jsx("span",{children:"Lock Alignment"})]})]})]}),L&&n.jsxs("div",{className:"p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed animate-fadeIn",children:["💡 ",n.jsx("strong",{children:"Hint:"})," ",g.hint]})]}),n.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("span",{className:"text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5",children:[n.jsx(Cd,{size:14}),"Live Hangar Bay Viewport"]}),n.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"Dynamic CSS Canvas"})]}),n.jsxs("div",{className:"relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950 p-4 shadow-2xl min-h-[260px] flex flex-col justify-center cyber-grid",children:[n.jsx("div",{className:"absolute inset-0 pointer-events-none flex items-center justify-center opacity-30",children:n.jsx("div",{className:"w-24 h-24 rounded-2xl border-2 border-dashed border-cyan-400 animate-pulse flex items-center justify-center",children:n.jsx("span",{className:"text-[10px] text-cyan-400 font-mono uppercase font-bold",children:"Target Pad"})})}),n.jsxs("div",{style:W(),className:"relative z-10 w-full p-2",children:[g.previewType==="spaceship"&&n.jsxs("div",{className:"p-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.6)] flex items-center gap-2 font-black text-xs transition-transform transform hover:scale-105",children:[n.jsx(Cd,{size:20,className:"rotate-45"}),n.jsx("span",{children:"CyberShuttle-01"})]}),g.previewType==="squadron"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"p-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-md",children:"Alpha"}),n.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs shadow-md",children:"Beta"}),n.jsx("div",{className:"p-2.5 rounded-xl bg-pink-500 text-white font-bold text-xs shadow-md",children:"Flagship ★"})]}),g.previewType==="grid"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"p-4 rounded-xl bg-slate-900 border border-cyan-500/40 text-center text-cyan-300 font-bold text-xs",children:"Pillar A"}),n.jsx("div",{className:"p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-center text-purple-300 font-bold text-xs",children:"Pillar B"}),n.jsx("div",{className:"p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-center text-emerald-300 font-bold text-xs",children:"Pillar C"})]})]})]})]}),n.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2",children:[n.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 shrink-0"}),n.jsx("span",{children:"Flexbox and Grid are modern CSS standards that eliminate the need for float hacks or table layouts."})]})]})]})]})},Em=()=>{const{markLevelComplete:w,completedLevels:m,activeGameLevel:u,setActiveGameLevel:T}=at(),S=Dn.js,z=Math.min(u-1,S.length-1),g=S[z],[k,E]=j.useState(null),[q,A]=j.useState(null),[L,_]=j.useState(["// JavaScript Virtual Terminal initialized.","// Select the fix to run in the sandbox."]),J=W=>{R.playClick(),E(W),A(null)},G=()=>{k!==null&&(k===g.correctOptionIndex?(A("correct"),w("js",g.id,g.xp),_(["// Executing script...","> Syntax validation: PASS","> Unit Test 1: PASS",`> Output: [SUCCESS] Bug smashed! +${g.xp} XP`])):(R.playError(),A("wrong"),_(["// Executing script...","> Uncaught TypeError / SyntaxError in evaluation","> Test Result: FAIL. Expected proper modern JS convention."])))},K=()=>{R.playClick(),E(null),A(null),_(["// Sandbox ready for next test."]),u<S.length&&T(u+1)},C=()=>{R.playClick(),E(null),A(null),_(["// Sandbox reset."])};return n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"p-2 rounded-xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/30",children:n.jsx(xn,{size:22})}),n.jsxs("div",{children:[n.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:["JS Bug Smasher & Logic Lab",n.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 font-mono",children:[g.xp," XP"]})]}),n.jsx("p",{className:"text-xs text-slate-400",children:"Identify runtime bugs, fix variables, and execute live browser tests."})]})]}),n.jsx("div",{className:"flex items-center gap-1.5",children:S.map(W=>{const P=(m.js||[]).includes(W.id),M=u===W.id;return n.jsx("button",{onClick:()=>{R.playClick(),T(W.id),E(null),A(null)},className:`w-9 h-9 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${M?"bg-yellow-400 text-slate-950 font-black shadow-[0_0_12px_rgba(234,179,8,0.6)]":P?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-slate-800 text-slate-400 hover:bg-slate-700"}`,children:P?"✓":W.id},W.id)})})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[n.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 space-y-5",children:[n.jsxs("div",{children:[n.jsxs("span",{className:"text-xs font-mono text-yellow-400 uppercase tracking-wider font-semibold flex items-center gap-1",children:[n.jsx(rm,{size:14}),"Bug Bounty Challenge"]}),n.jsx("h3",{className:"text-lg font-bold text-white mt-1",children:g.title}),n.jsx("p",{className:"text-sm text-slate-300 mt-1 leading-relaxed",children:g.prompt})]}),(g.brokenSnippet||g.snippet)&&n.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300",children:[n.jsx("div",{className:"text-[10px] text-slate-500 uppercase tracking-widest mb-1.5 font-bold",children:"Source Snippet:"}),n.jsx("pre",{className:"text-yellow-300/90 whitespace-pre-wrap",children:g.brokenSnippet||g.snippet})]}),n.jsxs("div",{className:"space-y-2",children:[n.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"Select the correct solution:"}),g.options.map((W,P)=>{const M=k===P;return n.jsxs("button",{onClick:()=>J(P),className:`w-full text-left p-3.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-between ${M?"bg-yellow-500/20 border-yellow-400 text-yellow-100 shadow-[0_0_12px_rgba(234,179,8,0.25)]":"bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"}`,children:[n.jsx("span",{className:"break-all",children:W}),n.jsx("span",{className:`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ml-2 shrink-0 ${M?"border-yellow-400 bg-yellow-400 text-slate-950 font-bold":"border-slate-700 text-slate-500"}`,children:String.fromCharCode(65+P)})]},P)})]}),q==="correct"&&n.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-bounce",children:[n.jsx(lt,{size:22,className:"shrink-0 text-emerald-400"}),n.jsxs("div",{className:"text-sm font-semibold",children:["Bug Eliminated! ",g.explanation]})]}),q==="wrong"&&n.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3",children:[n.jsx(It,{size:22,className:"shrink-0 text-rose-400"}),n.jsx("div",{className:"text-sm font-semibold",children:"Test Failed! Inspect the console on the right for error details."})]}),n.jsxs("div",{className:"flex items-center justify-between gap-3 pt-2",children:[n.jsx("button",{onClick:C,className:"p-2.5 rounded-xl text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 transition-colors",title:"Reset Lab",children:n.jsx(st,{size:16})}),q==="correct"&&u<S.length?n.jsxs("button",{onClick:K,className:"px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform",children:[n.jsx("span",{children:"Next Bug"}),n.jsx(yn,{size:16})]}):n.jsxs("button",{onClick:G,disabled:k===null,className:`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${k!==null?"bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 font-black shadow-[0_0_15px_rgba(234,179,8,0.4)] hover:scale-[1.02]":"bg-slate-800 text-slate-500 cursor-not-allowed"}`,children:[n.jsx(zt,{size:16,className:"fill-current"}),n.jsx("span",{children:"Run Sandbox Tests"})]})]})]}),n.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("span",{className:"text-xs font-mono text-yellow-400 uppercase tracking-wider font-semibold flex items-center gap-1.5",children:[n.jsx(xn,{size:14}),"Sandbox Console Output"]}),n.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"v8 In-Memory Runtime"})]}),n.jsxs("div",{className:"rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl font-mono text-xs",children:[n.jsxs("div",{className:"bg-slate-900 px-3 py-2 border-b border-slate-800 flex items-center gap-2",children:[n.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-rose-500"}),n.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-500"}),n.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500"}),n.jsx("span",{className:"text-[10px] text-slate-400 ml-2",children:"js-repl:stdout"})]}),n.jsx("div",{className:"p-4 min-h-[220px] space-y-2 text-slate-300",children:L.map((W,P)=>n.jsx("div",{className:`${W.includes("FAIL")||W.includes("Error")?"text-rose-400":W.includes("PASS")||W.includes("SUCCESS")?"text-emerald-400 font-bold":"text-slate-400"}`,children:W},P))})]})]}),n.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2",children:[n.jsx("span",{className:"w-2 h-2 rounded-full bg-yellow-400 shrink-0"}),n.jsx("span",{children:"Modern JavaScript uses block scoping (let/const) and strict comparison (===) to avoid silent bugs."})]})]})]})]})},Pm=()=>{const{markLevelComplete:w,completedLevels:m,activeGameLevel:u,setActiveGameLevel:T}=at(),S=Dn.mysql,z=Math.min(u-1,S.length-1),g=S[z],[k,E]=j.useState(null),[q,A]=j.useState(null),[L,_]=j.useState(!1),[J,G]=j.useState(null),K=M=>{R.playClick(),E(M),A(null),G(null)},C=()=>{k!==null&&(k===g.correctOptionIndex?(A("correct"),G(g.queryOutput),w("mysql",g.id,g.xp)):(R.playError(),A("wrong"),G([])))},W=()=>{R.playClick(),E(null),A(null),_(!1),G(null),u<S.length&&T(u+1)},P=()=>{R.playClick(),E(null),A(null),_(!1),G(null)};return n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",children:n.jsx(ds,{size:22})}),n.jsxs("div",{children:[n.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:["SQL Mystery Detective",n.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono",children:[g.xp," XP"]})]}),n.jsx("p",{className:"text-xs text-slate-400",children:"Execute relational queries to uncover suspects and solve cyber-crimes."})]})]}),n.jsx("div",{className:"flex items-center gap-1.5",children:S.map(M=>{const F=(m.mysql||[]).includes(M.id),ee=u===M.id;return n.jsx("button",{onClick:()=>{R.playClick(),T(M.id),E(null),A(null),G(null)},className:`w-9 h-9 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${ee?"bg-emerald-500 text-slate-950 font-black shadow-[0_0_12px_rgba(16,185,129,0.6)]":F?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-slate-800 text-slate-400 hover:bg-slate-700"}`,children:F?"✓":M.id},M.id)})})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[n.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 space-y-5",children:[n.jsxs("div",{children:[n.jsxs("span",{className:"text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1",children:[n.jsx(ki,{size:14}),"Police Case Dossier"]}),n.jsx("h3",{className:"text-lg font-bold text-white mt-1",children:g.title}),n.jsx("p",{className:"text-sm text-slate-300 mt-1 leading-relaxed",children:g.scenario})]}),n.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400/90 flex items-center gap-2",children:[n.jsx(km,{size:16,className:"text-emerald-400 shrink-0"}),n.jsx("span",{children:g.tablePreview})]}),n.jsxs("div",{className:"space-y-2",children:[n.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"Choose the query to execute in MySQL:"}),g.options.map((M,F)=>{const ee=k===F;return n.jsxs("button",{onClick:()=>K(F),className:`w-full text-left p-3.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-between ${ee?"bg-emerald-500/20 border-emerald-400 text-emerald-200 shadow-[0_0_12px_rgba(16,185,129,0.25)]":"bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"}`,children:[n.jsx("span",{className:"break-all",children:M}),n.jsx("span",{className:`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ml-2 shrink-0 ${ee?"border-emerald-400 bg-emerald-400 text-slate-950 font-bold":"border-slate-700 text-slate-500"}`,children:String.fromCharCode(65+F)})]},F)})]}),q==="correct"&&n.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-bounce",children:[n.jsx(lt,{size:22,className:"shrink-0 text-emerald-400"}),n.jsxs("div",{className:"text-sm font-semibold",children:["Case Cracked! Query matched relevant records. +",g.xp," XP"]})]}),q==="wrong"&&n.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3",children:[n.jsx(It,{size:22,className:"shrink-0 text-rose-400"}),n.jsx("div",{className:"text-sm font-semibold",children:"SQL Execution Error or empty match! Verify syntax and try again."})]}),n.jsxs("div",{className:"flex items-center justify-between gap-3 pt-2",children:[n.jsxs("button",{onClick:()=>_(!L),className:"px-3 py-2 rounded-xl text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 flex items-center gap-1.5 transition-colors",children:[n.jsx(ga,{size:14}),n.jsx("span",{children:L?"Hide Hint":"Need Hint?"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{onClick:P,className:"p-2.5 rounded-xl text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 transition-colors",title:"Reset Query",children:n.jsx(st,{size:16})}),q==="correct"&&u<S.length?n.jsxs("button",{onClick:W,className:"px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform",children:[n.jsx("span",{children:"Next Case"}),n.jsx(yn,{size:16})]}):n.jsxs("button",{onClick:C,disabled:k===null,className:`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${k!==null?"bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-black shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:scale-[1.02]":"bg-slate-800 text-slate-500 cursor-not-allowed"}`,children:[n.jsx(rt,{size:16}),n.jsx("span",{children:"Execute Query"})]})]})]}),L&&n.jsxs("div",{className:"p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed animate-fadeIn",children:["💡 ",n.jsx("strong",{children:"Hint:"})," ",g.hint]})]}),n.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("span",{className:"text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1.5",children:[n.jsx(ds,{size:14}),"Database Query Results"]}),n.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"In-Memory MySQL Engine"})]}),n.jsxs("div",{className:"rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl min-h-[220px] flex flex-col",children:[n.jsxs("div",{className:"bg-slate-900 px-3 py-2 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono",children:[n.jsxs("span",{children:["Status: ",J?"200 OK (Query Executed)":"Idle (Ready)"]}),n.jsxs("span",{children:["Rows: ",J?J.length:0]})]}),J&&J.length>0?n.jsx("div",{className:"overflow-x-auto p-2",children:n.jsxs("table",{className:"w-full text-left font-mono text-xs border-collapse",children:[n.jsx("thead",{children:n.jsx("tr",{className:"border-b border-slate-800 text-emerald-400",children:Object.keys(J[0]).map(M=>n.jsx("th",{className:"p-2.5 font-bold uppercase text-[10px] tracking-wider",children:M},M))})}),n.jsx("tbody",{className:"divide-y divide-slate-800/60",children:J.map((M,F)=>n.jsx("tr",{className:"hover:bg-slate-900/60 transition-colors",children:Object.values(M).map((ee,ue)=>n.jsx("td",{className:"p-2.5 text-slate-200",children:String(ee)},ue))},F))})]})}):n.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-500 font-mono text-xs",children:[n.jsx(ds,{size:32,className:"mb-2 opacity-30 text-emerald-400"}),n.jsx("span",{children:'Choose a SQL query and click "Execute Query" to inspect records.'})]})]})]}),n.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2",children:[n.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 shrink-0"}),n.jsx("span",{children:"Relational queries extract, filter, and join related records efficiently across large datasets."})]})]})]})]})},Lm=()=>{const{markLevelComplete:w,completedLevels:m,activeGameLevel:u,setActiveGameLevel:T}=at(),S=Dn.python,z=Math.min(u-1,S.length-1),g=S[z],[k,E]=j.useState(null),[q,A]=j.useState(null),[L,_]=j.useState(0),[J,G]=j.useState(["# Python 3.12 Virtual Interpreter ready.","# Select the Python solution to run."]),K=M=>{R.playClick(),E(M),A(null),_(0)},C=()=>{k!==null&&(k===g.correctOptionIndex?(A("correct"),w("python",g.id,g.xp),_(4),G([">>> python main.py","ByteKnight power is 9000!","Gems collected: 4/4",`Process finished with exit code 0. +${g.xp} XP`])):(R.playError(),A("wrong"),_(1),G([">>> python main.py","SyntaxError or NameError: unexpected token.","Process failed with exit code 1"])))},W=()=>{R.playClick(),E(null),A(null),_(0),G(["# Python interpreter reset for next challenge."]),u<S.length&&T(u+1)},P=()=>{R.playClick(),E(null),A(null),_(0),G(["# Interpreter cleared."])};return n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/30",children:n.jsx(rt,{size:22})}),n.jsxs("div",{children:[n.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:["Python Algorithm Maze",n.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-mono",children:[g.xp," XP"]})]}),n.jsx("p",{className:"text-xs text-slate-400",children:"Master Python syntax, indentation, loops, and functions."})]})]}),n.jsx("div",{className:"flex items-center gap-1.5",children:S.map(M=>{const F=(m.python||[]).includes(M.id),ee=u===M.id;return n.jsx("button",{onClick:()=>{R.playClick(),T(M.id),E(null),A(null),_(0)},className:`w-9 h-9 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${ee?"bg-blue-500 text-white font-black shadow-[0_0_12px_rgba(59,130,246,0.6)]":F?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-slate-800 text-slate-400 hover:bg-slate-700"}`,children:F?"✓":M.id},M.id)})})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[n.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 space-y-5",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold",children:"Python Algorithm Mission"}),n.jsx("h3",{className:"text-lg font-bold text-white mt-1",children:g.title}),n.jsx("p",{className:"text-sm text-slate-300 mt-1 leading-relaxed",children:g.prompt})]}),n.jsxs("div",{className:"space-y-2",children:[n.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"Select the Python code snippet:"}),g.options.map((M,F)=>{const ee=k===F;return n.jsxs("button",{onClick:()=>K(F),className:`w-full text-left p-3.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-between ${ee?"bg-blue-500/20 border-blue-400 text-blue-200 shadow-[0_0_12px_rgba(59,130,246,0.25)]":"bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"}`,children:[n.jsx("pre",{className:"break-all whitespace-pre-wrap",children:M}),n.jsx("span",{className:`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ml-2 shrink-0 ${ee?"border-blue-400 bg-blue-500 text-white font-bold":"border-slate-700 text-slate-500"}`,children:String.fromCharCode(65+F)})]},F)})]}),q==="correct"&&n.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-bounce",children:[n.jsx(lt,{size:22,className:"shrink-0 text-emerald-400"}),n.jsxs("div",{className:"text-sm font-semibold",children:["Clean Run! ",g.explanation]})]}),q==="wrong"&&n.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3",children:[n.jsx(It,{size:22,className:"shrink-0 text-rose-400"}),n.jsx("div",{className:"text-sm font-semibold",children:"Indentation or syntax error in Python! Check the terminal below."})]}),n.jsxs("div",{className:"flex items-center justify-between gap-3 pt-2",children:[n.jsx("button",{onClick:P,className:"p-2.5 rounded-xl text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 transition-colors",title:"Reset",children:n.jsx(st,{size:16})}),q==="correct"&&u<S.length?n.jsxs("button",{onClick:W,className:"px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform",children:[n.jsx("span",{children:"Next Mission"}),n.jsx(yn,{size:16})]}):n.jsxs("button",{onClick:C,disabled:k===null,className:`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${k!==null?"bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:scale-[1.02]":"bg-slate-800 text-slate-500 cursor-not-allowed"}`,children:[n.jsx(zt,{size:16,className:"fill-current"}),n.jsx("span",{children:"Run Python Code"})]})]})]}),n.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("span",{className:"text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold flex items-center gap-1.5",children:[n.jsx(Td,{size:14}),"Algorithm Grid Maze"]}),n.jsxs("span",{className:"text-[10px] text-slate-400 font-mono",children:["Step: ",L,"/4"]})]}),n.jsx("div",{className:"rounded-xl border border-blue-500/30 bg-slate-950 p-4 shadow-2xl flex items-center justify-between gap-3 cyber-grid",children:[0,1,2,3,4].map(M=>{const F=L===M,ee=M>0&&L<M;return n.jsxs("div",{className:`flex-1 h-20 rounded-xl border flex flex-col items-center justify-center transition-all duration-500 ${F?"bg-blue-600/30 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.6)] scale-105":"bg-slate-900/60 border-slate-800"}`,children:[F&&n.jsxs("div",{className:"text-blue-400 flex flex-col items-center animate-bounce",children:[n.jsx(Td,{size:28}),n.jsx("span",{className:"text-[9px] font-bold font-mono mt-0.5",children:"Hero"})]}),!F&&ee&&n.jsxs("div",{className:"text-emerald-400 opacity-80 flex flex-col items-center",children:[n.jsx(um,{size:20}),n.jsx("span",{className:"text-[8px] text-slate-500 font-mono",children:"+10 XP"})]}),!F&&!ee&&n.jsx("div",{className:"w-2 h-2 rounded-full bg-slate-700"})]},M)})}),n.jsxs("div",{className:"mt-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-xs",children:[n.jsxs("div",{className:"bg-slate-900 px-3 py-1.5 border-b border-slate-800 text-[10px] text-slate-400 flex items-center justify-between",children:[n.jsx("span",{children:"python3 --terminal"}),n.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-ping"})]}),n.jsx("div",{className:"p-3 text-slate-300 space-y-1 min-h-[90px]",children:J.map((M,F)=>n.jsx("div",{className:M.includes("Error")?"text-rose-400":M.includes("SUCCESS")||M.includes("9000")?"text-emerald-400":"text-slate-400",children:M},F))})]})]}),n.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2",children:[n.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-400 shrink-0"}),n.jsx("span",{children:"Python relies on indentation to group blocks of code, promoting extreme readability."})]})]})]})]})},_m=()=>{const{markLevelComplete:w,completedLevels:m,activeGameLevel:u,setActiveGameLevel:T}=at(),S=Dn.php,z=Math.min(u-1,S.length-1),g=S[z],[k,E]=j.useState(null),[q,A]=j.useState(null),[L,_]=j.useState("Listening on Port 8000..."),J=W=>{R.playClick(),E(W),A(null)},G=()=>{k!==null&&(k===g.correctOptionIndex?(A("correct"),w("php",g.id,g.xp),_("HTTP/1.1 200 OK | Response served in 4ms")):(R.playError(),A("wrong"),_("HTTP/1.1 500 Internal Server Error (PHP Parse Error)")))},K=()=>{R.playClick(),E(null),A(null),_("Listening on Port 8000..."),u<S.length&&T(u+1)},C=()=>{R.playClick(),E(null),A(null),_("Listening on Port 8000...")};return n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30",children:n.jsx(Ei,{size:22})}),n.jsxs("div",{children:[n.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:["PHP Server Kitchen & Form Master",n.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 font-mono",children:[g.xp," XP"]})]}),n.jsx("p",{className:"text-xs text-slate-400",children:"Process HTTP orders, $_GET, $_POST, and session cookies on the backend."})]})]}),n.jsx("div",{className:"flex items-center gap-1.5",children:S.map(W=>{const P=(m.php||[]).includes(W.id),M=u===W.id;return n.jsx("button",{onClick:()=>{R.playClick(),T(W.id),E(null),A(null)},className:`w-9 h-9 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${M?"bg-purple-600 text-white font-black shadow-[0_0_12px_rgba(168,85,247,0.6)]":P?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-slate-800 text-slate-400 hover:bg-slate-700"}`,children:P?"✓":W.id},W.id)})})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[n.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 space-y-5",children:[n.jsxs("div",{children:[n.jsxs("span",{className:"text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold flex items-center gap-1",children:[n.jsx(jm,{size:14}),"Server Kitchen Ticket #",g.id]}),n.jsx("h3",{className:"text-lg font-bold text-white mt-1",children:g.title}),n.jsx("p",{className:"text-sm text-slate-300 mt-1 leading-relaxed",children:g.prompt})]}),n.jsxs("div",{className:"space-y-2",children:[n.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"Choose the PHP backend snippet:"}),g.options.map((W,P)=>{const M=k===P;return n.jsxs("button",{onClick:()=>J(P),className:`w-full text-left p-3.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-between ${M?"bg-purple-500/20 border-purple-400 text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.25)]":"bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"}`,children:[n.jsx("pre",{className:"break-all whitespace-pre-wrap",children:W}),n.jsx("span",{className:`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ml-2 shrink-0 ${M?"border-purple-400 bg-purple-500 text-white font-bold":"border-slate-700 text-slate-500"}`,children:String.fromCharCode(65+P)})]},P)})]}),q==="correct"&&n.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-bounce",children:[n.jsx(lt,{size:22,className:"shrink-0 text-emerald-400"}),n.jsxs("div",{className:"text-sm font-semibold",children:["Order Cooked & Served! ",g.explanation]})]}),q==="wrong"&&n.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3",children:[n.jsx(It,{size:22,className:"shrink-0 text-rose-400"}),n.jsx("div",{className:"text-sm font-semibold",children:"Kitchen Recipe Failed! Check PHP syntax, dollar signs, and try again."})]}),n.jsxs("div",{className:"flex items-center justify-between gap-3 pt-2",children:[n.jsx("button",{onClick:C,className:"p-2.5 rounded-xl text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 transition-colors",title:"Reset",children:n.jsx(st,{size:16})}),q==="correct"&&u<S.length?n.jsxs("button",{onClick:K,className:"px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform",children:[n.jsx("span",{children:"Next Ticket"}),n.jsx(yn,{size:16})]}):n.jsxs("button",{onClick:G,disabled:k===null,className:`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${k!==null?"bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:scale-[1.02]":"bg-slate-800 text-slate-500 cursor-not-allowed"}`,children:[n.jsx(rt,{size:16}),n.jsx("span",{children:"Serve Response"})]})]})]}),n.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("span",{className:"text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold flex items-center gap-1.5",children:[n.jsx(bm,{size:14}),"HTTP Request / Response Log"]}),n.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"PHP-FPM Worker 1"})]}),n.jsxs("div",{className:"rounded-xl border border-purple-500/30 bg-slate-950 p-4 font-mono text-xs shadow-2xl space-y-3",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] text-purple-300",children:[n.jsx("span",{children:"POST /checkout.php"}),n.jsx("span",{children:"Content-Type: application/x-www-form-urlencoded"})]}),n.jsxs("div",{className:"text-slate-400 space-y-1",children:[n.jsx("div",{children:"$_SERVER['REQUEST_METHOD'] = 'POST';"}),n.jsx("div",{children:"$_SERVER['HTTP_HOST'] = 'byteverse.dev';"}),n.jsx("div",{children:"$_POST['item'] = 'Cyber Burger #42';"})]}),n.jsxs("div",{className:"border-t border-slate-800 pt-2 flex items-center justify-between text-[11px]",children:[n.jsx("span",{className:"text-slate-400",children:"Daemon Status:"}),n.jsx("span",{className:`font-bold ${L.includes("200")?"text-emerald-400":L.includes("500")?"text-rose-400":"text-amber-400"}`,children:L})]})]})]}),n.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2",children:[n.jsx("span",{className:"w-2 h-2 rounded-full bg-purple-400 shrink-0"}),n.jsx("span",{children:"PHP variables always begin with a $ symbol and execute entirely on the server before HTML is sent."})]})]})]})]})},Mm=()=>{const{markLevelComplete:w,completedLevels:m,activeGameLevel:u,setActiveGameLevel:T}=at(),S=Dn.django,z=Math.min(u-1,S.length-1),g=S[z],[k,E]=j.useState(null),[q,A]=j.useState(null),[L,_]=j.useState(1),J=W=>{R.playClick(),E(W),A(null),_(1)},G=()=>{k!==null&&(k===g.correctOptionIndex?(A("correct"),_(4),w("django",g.id,g.xp)):(R.playError(),A("wrong"),_(2)))},K=()=>{R.playClick(),E(null),A(null),_(1),u<S.length&&T(u+1)},C=()=>{R.playClick(),E(null),A(null),_(1)};return n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"p-2 rounded-xl bg-emerald-600/10 text-emerald-400 border border-emerald-600/30",children:n.jsx(Ci,{size:22})}),n.jsxs("div",{children:[n.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:["Django MTV Route Dispatcher",n.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-600/30 font-mono",children:[g.xp," XP"]})]}),n.jsx("p",{className:"text-xs text-slate-400",children:"Direct web traffic through URLs, Views, Models (ORM), and Templates."})]})]}),n.jsx("div",{className:"flex items-center gap-1.5",children:S.map(W=>{const P=(m.django||[]).includes(W.id),M=u===W.id;return n.jsx("button",{onClick:()=>{R.playClick(),T(W.id),E(null),A(null),_(1)},className:`w-9 h-9 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${M?"bg-emerald-600 text-white font-black shadow-[0_0_12px_rgba(5,150,105,0.6)]":P?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-slate-800 text-slate-400 hover:bg-slate-700"}`,children:P?"✓":W.id},W.id)})})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[n.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 space-y-5",children:[n.jsxs("div",{children:[n.jsxs("span",{className:"text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1",children:[n.jsx(pm,{size:14}),"Django Architecture Mission"]}),n.jsx("h3",{className:"text-lg font-bold text-white mt-1",children:g.title}),n.jsx("p",{className:"text-sm text-slate-300 mt-1 leading-relaxed",children:g.prompt})]}),n.jsxs("div",{className:"space-y-2",children:[n.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"Choose the Django MTV snippet:"}),g.options.map((W,P)=>{const M=k===P;return n.jsxs("button",{onClick:()=>J(P),className:`w-full text-left p-3.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-between ${M?"bg-emerald-600/20 border-emerald-500 text-emerald-200 shadow-[0_0_12px_rgba(5,150,105,0.25)]":"bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"}`,children:[n.jsx("pre",{className:"break-all whitespace-pre-wrap",children:W}),n.jsx("span",{className:`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ml-2 shrink-0 ${M?"border-emerald-500 bg-emerald-600 text-white font-bold":"border-slate-700 text-slate-500"}`,children:String.fromCharCode(65+P)})]},P)})]}),q==="correct"&&n.jsxs("div",{className:"p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-bounce",children:[n.jsx(lt,{size:22,className:"shrink-0 text-emerald-400"}),n.jsxs("div",{className:"text-sm font-semibold",children:["Traffic Dispatched! ",g.explanation]})]}),q==="wrong"&&n.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-3",children:[n.jsx(It,{size:22,className:"shrink-0 text-rose-400"}),n.jsx("div",{className:"text-sm font-semibold",children:"Route Failed (Page not found 404 or View Error). Inspect the Django pipeline on the right."})]}),n.jsxs("div",{className:"flex items-center justify-between gap-3 pt-2",children:[n.jsx("button",{onClick:C,className:"p-2.5 rounded-xl text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 transition-colors",title:"Reset",children:n.jsx(st,{size:16})}),q==="correct"&&u<S.length?n.jsxs("button",{onClick:K,className:"px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2 hover:scale-[1.02] transition-transform",children:[n.jsx("span",{children:"Next Route"}),n.jsx(yn,{size:16})]}):n.jsxs("button",{onClick:G,disabled:k===null,className:`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${k!==null?"bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_0_15px_rgba(5,150,105,0.4)] hover:scale-[1.02]":"bg-slate-800 text-slate-500 cursor-not-allowed"}`,children:[n.jsx(rt,{size:16}),n.jsx("span",{children:"Dispatch Request"})]})]})]}),n.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("span",{className:"text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1.5",children:[n.jsx(sm,{size:14}),"Django MTV Data Pipeline"]}),n.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"Flow Active"})]}),n.jsx("div",{className:"space-y-2.5",children:[{stage:"1. urls.py",title:"URL Conf & Regex Pattern",active:L>=1},{stage:"2. views.py",title:"View Controller & Logic",active:L>=2},{stage:"3. models.py",title:"ORM Query & Database Table",active:L>=3},{stage:"4. templates/",title:"HTML Context Render (Dバージ)",active:L>=4}].map((W,P)=>n.jsxs("div",{className:`p-3 rounded-xl border flex items-center justify-between font-mono text-xs transition-all ${W.active?"bg-emerald-600/20 border-emerald-500/60 text-emerald-300 shadow-sm":"bg-slate-950/60 border-slate-800 text-slate-500"}`,children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"font-bold",children:W.stage}),n.jsx("span",{className:"text-[11px] text-slate-400 font-sans",children:W.title})]}),n.jsx("span",{className:`w-2.5 h-2.5 rounded-full ${W.active?"bg-emerald-400 animate-pulse":"bg-slate-700"}`})]},P))})]}),n.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2",children:[n.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 shrink-0"}),n.jsx("span",{children:"Django handles routing, database abstractions, authentication, and security in one unified framework."})]})]})]})]})},In=[{id:1,tech:"HTML",question:"Which tag is used to create the largest heading in HTML?",options:["<h1>","<head>","<h6>","<heading>"],correct:0,hint:"Headings range from h1 (biggest) to h6 (smallest)."},{id:2,tech:"CSS",question:"Which Flexbox property aligns items along the horizontal main axis?",options:["justify-content","align-items","flex-direction","align-content"],correct:0,hint:"justify-content controls the main axis; align-items controls cross axis."},{id:3,tech:"JavaScript",question:"What does `[1, 2, 3].map(x => x * 2)` return?",options:["[2, 4, 6]","[1, 2, 3, 2]","6","undefined"],correct:0,hint:"map() transforms each element by multiplying it by 2."},{id:4,tech:"Python",question:"How do you check the length of a string `s` in Python?",options:["len(s)","s.length","s.size()","count(s)"],correct:0,hint:"Python uses the built-in len() function."},{id:5,tech:"MySQL",question:"Which SQL keyword is used to filter records in a SELECT query?",options:["WHERE","FILTER","HAVING_ALL","FIND"],correct:0,hint:"WHERE specifies conditions rows must satisfy."},{id:6,tech:"PHP",question:"What symbol must all PHP variables start with?",options:["$","@","#","&"],correct:0,hint:"In PHP, every variable begins with a dollar sign like $name."},{id:7,tech:"Django",question:"Which file defines the URL routing patterns in a Django project?",options:["urls.py","routes.py","views.py","settings.py"],correct:0,hint:"urls.py maps URLs to view functions."},{id:8,tech:"CSS",question:"What is the default CSS `position` value for HTML elements?",options:["static","relative","absolute","fixed"],correct:0,hint:"All elements start with position: static in standard document flow."},{id:9,tech:"JavaScript",question:"Which keyword declares a block-scoped variable that CANNOT be reassigned?",options:["const","let","var","static"],correct:0,hint:"const creates immutable variable bindings."},{id:10,tech:"Python",question:'What data type is created by `{ "name": "Affan", "rank": 1 }`?',options:["dict","list","tuple","set"],correct:0,hint:"Key-value pairs enclosed in curly brackets define a dictionary."},{id:11,tech:"HTML",question:"Which attribute makes an `<input>` field mandatory to submit?",options:["required","mandatory","validate","needed"],correct:0,hint:'The boolean attribute "required" prevents blank form submissions.'},{id:12,tech:"MySQL",question:"Which command permanently removes all records from a table without deleting the schema?",options:["TRUNCATE TABLE","REMOVE ALL","DROP TABLE","CLEAR ROWS"],correct:0,hint:"TRUNCATE empties the table instantly."},{id:13,tech:"JavaScript",question:"Which method converts a JavaScript object into a JSON string?",options:["JSON.stringify()","JSON.parse()","Object.toJSON()","JSON.encode()"],correct:0,hint:"JSON.stringify() turns objects into JSON text strings."},{id:14,tech:"PHP",question:"Which superglobal array contains form data sent via HTTP POST?",options:["$_POST","$_GET","$_DATA","$_SUBMIT"],correct:0,hint:'$_POST collects form values submitted with method="POST".'},{id:15,tech:"Django",question:"Which command applies pending database migrations in Django?",options:["python manage.py migrate","python manage.py makemigrations","python manage.py dbsync","python manage.py update_db"],correct:0,hint:"migrate runs SQL commands against your database."},{id:16,tech:"CSS",question:"What CSS rule makes an element fill its container with 50% rounded corners (a perfect circle)?",options:["border-radius: 50%","border: round","shape: circle","circle: true"],correct:0,hint:"border-radius: 50% turns squares into circles."},{id:17,tech:"Python",question:"What is the output of `[x**2 for x in [1, 2, 3]]`?",options:["[1, 4, 9]","[2, 4, 6]","[1, 2, 3]","9"],correct:0,hint:"List comprehension squares each item (1*1, 2*2, 3*3)."},{id:18,tech:"JavaScript",question:"Which strict equality operator checks both value AND type?",options:["===","==","=","<=>"],correct:0,hint:"=== does not perform automatic type coercion."},{id:19,tech:"MySQL",question:"Which SQL function counts the total number of rows matching a query?",options:["COUNT(*)","TOTAL(*)","SUM(*)","LEN(*)"],correct:0,hint:"COUNT(*) calculates matching row counts."},{id:20,tech:"HTML",question:"Which tag displays an image on a webpage?",options:["<img>","<image>","<picture-src>","<pic>"],correct:0,hint:"The self-closing <img> tag uses the src attribute."},{id:21,tech:"CSS",question:"Which CSS property defines the transparency of an element?",options:["opacity","transparent","filter: alpha","visibility: clear"],correct:0,hint:"opacity accepts values from 0.0 (invisible) to 1.0 (opaque)."},{id:22,tech:"JavaScript",question:'What will `Boolean("")` (empty string) evaluate to?',options:["false","true","undefined","NaN"],correct:0,hint:"Empty strings are falsy values in JavaScript."},{id:23,tech:"Python",question:"Which keyword creates a function in Python?",options:["def","function","fun","define"],correct:0,hint:'Functions are declared with "def function_name():".'},{id:24,tech:"Django",question:"Where do you define database models/tables in a Django app?",options:["models.py","database.py","schema.py","tables.py"],correct:0,hint:"models.py defines Python classes inherited from models.Model."},{id:25,tech:"PHP",question:"Which function starts or resumes a session in PHP?",options:["session_start()","start_session()","session_init()","session_open()"],correct:0,hint:"session_start() must be called before using $_SESSION."}],Im=()=>{const{addXP:w,unlockAchievement:m,triggerConfetti:u}=at(),[T,S]=j.useState("idle"),[z,g]=j.useState(60),[k,E]=j.useState(0),[q,A]=j.useState([]),[L,_]=j.useState(0),[J,G]=j.useState(0),[K,C]=j.useState(0),[W,P]=j.useState(0),[M,F]=j.useState(0),[ee,ue]=j.useState(null),[te,ve]=j.useState(()=>{try{return parseInt(localStorage.getItem("byteverse_sprint_highscore")||"0",10)}catch{return 0}}),ke=j.useRef(null),ye=b=>{const X=[...b];for(let c=X.length-1;c>0;c--){const l=Math.floor(Math.random()*(c+1));[X[c],X[l]]=[X[l],X[c]]}return X},Te=()=>{R.playLevelUp();const b=ye(In);A(b),E(0),_(0),G(0),C(0),P(0),F(0),g(60),ue(null),S("playing")};j.useEffect(()=>(T==="playing"&&(ke.current=setInterval(()=>{g(b=>b<=1?(clearInterval(ke.current),je(),0):(b<=6&&R.playCountdown(),b-1))},1e3)),()=>clearInterval(ke.current)),[T]);const je=()=>{S("gameover"),R.playExplosion()};j.useEffect(()=>{if(T==="gameover"){if(L>te){ve(L);try{localStorage.setItem("byteverse_sprint_highscore",L.toString())}catch{}}L>=400&&(m("code_sprinter"),u())}},[T,L]);const Ee=b=>{if(ee!==null||T!=="playing")return;const X=q[k],c=b===X.correct;if(F(l=>l+1),c){R.playHit();const l=J+1;G(l),l>K&&C(l);let f=1;l>=7?f=4:l>=5?f=3:l>=3&&(f=2);const D=50*f;_(B=>B+D),P(B=>B+1),(l===3||l===5||l===7)&&R.playStreak(),ue({type:"correct",selected:b})}else R.playError(),G(0),ue({type:"wrong",selected:b});setTimeout(()=>{ue(null),k+1<q.length?E(l=>l+1):(A(ye(In)),E(0))},450)},fe=()=>J>=7?{text:"4x TITAN",fullText:"4x ULTRA TITAN",color:"text-amber-400 bg-amber-500/20 border-amber-400"}:J>=5?{text:"3x MEGA",fullText:"3x MEGA STREAK",color:"text-purple-400 bg-purple-500/20 border-purple-400"}:J>=3?{text:"2x COMBO",fullText:"2x COMBO",color:"text-cyan-400 bg-cyan-500/20 border-cyan-400"}:{text:"1x",fullText:"1x STANDARD",color:"text-slate-400 bg-slate-800 border-slate-700"},ie=q[k]||In[0],Ce=fe(),ce=M>0?Math.round(W/M*100):0;return n.jsxs("div",{className:"space-y-4 sm:space-y-6",children:[T==="idle"&&n.jsxs("div",{className:"rounded-2xl sm:rounded-3xl glass-panel p-5 sm:p-10 border border-amber-500/30 bg-gradient-to-br from-slate-900 via-slate-900/90 to-amber-950/30 text-center space-y-4 sm:space-y-6 max-w-2xl mx-auto shadow-2xl",children:[n.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-amber-500 to-orange-500 p-0.5 shadow-xl shadow-amber-500/20 flex items-center justify-center",children:n.jsxs("div",{className:"w-full h-full bg-slate-950 rounded-[18px] sm:rounded-[22px] flex items-center justify-center text-amber-400",children:[n.jsx(Rn,{size:32,className:"fill-current animate-pulse sm:hidden"}),n.jsx(Rn,{size:38,className:"fill-current animate-pulse hidden sm:block"})]})}),n.jsxs("div",{children:[n.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] sm:text-xs font-mono font-bold mb-2 sm:mb-3",children:[n.jsx(fa,{size:12}),n.jsx("span",{children:"TIME-ATTACK SPEED RUN"})]}),n.jsx("h2",{className:"text-xl sm:text-3xl font-extrabold text-white",children:"60-Second Code Sprint"}),n.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1.5 sm:mt-2 max-w-md mx-auto leading-relaxed",children:"Answer fast-paced coding questions covering HTML, CSS, JS, Python, SQL, and Django. Build combos to rack up massive multipliers!"})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-2 sm:gap-3 text-left",children:[n.jsxs("div",{className:"bg-slate-950/70 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-800 text-center",children:[n.jsx("div",{className:"text-base sm:text-lg font-black text-amber-400",children:"60s"}),n.jsx("div",{className:"text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono mt-0.5",children:"Ticking Clock"})]}),n.jsxs("div",{className:"bg-slate-950/70 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-800 text-center",children:[n.jsx("div",{className:"text-base sm:text-lg font-black text-purple-400",children:"Up to 4x"}),n.jsx("div",{className:"text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono mt-0.5",children:"Combo Streak"})]}),n.jsxs("div",{className:"bg-slate-950/70 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-800 text-center",children:[n.jsx("div",{className:"text-base sm:text-lg font-black text-cyan-400",children:te}),n.jsx("div",{className:"text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono mt-0.5",children:"High Score"})]})]}),n.jsxs("button",{onClick:Te,className:"w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 active:scale-95 touch-manipulation transition-all",children:[n.jsx(zt,{size:16,className:"fill-current"}),n.jsx("span",{children:"START 60s CODE SPRINT"})]})]}),T==="playing"&&n.jsxs("div",{className:"max-w-3xl mx-auto space-y-3 sm:space-y-4",children:[n.jsxs("div",{className:"glass-panel p-3 sm:p-4 rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl flex items-center justify-between gap-2",children:[n.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-[9px] sm:text-[10px] font-mono uppercase text-slate-400",children:"Score"}),n.jsx("div",{className:"text-lg sm:text-2xl font-black text-amber-400 font-mono tracking-tight",children:L.toLocaleString()})]}),n.jsxs("div",{className:`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-mono font-bold border ${Ce.color} flex items-center gap-1`,children:[n.jsx(nr,{size:11,className:"fill-current animate-pulse"}),n.jsx("span",{className:"sm:hidden",children:Ce.text}),n.jsx("span",{className:"hidden sm:inline",children:Ce.fullText})]})]}),n.jsxs("div",{className:"flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-slate-950 border border-slate-800 text-[11px] sm:text-xs font-mono",children:[n.jsx("span",{className:"text-slate-400 hidden xs:inline",children:"Streak:"}),n.jsxs("span",{className:"font-black text-purple-400",children:[J," 🔥"]})]}),n.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2",children:[n.jsx(fa,{size:15,className:z<=10?"text-rose-500 animate-spin":"text-cyan-400"}),n.jsxs("div",{className:"text-right",children:[n.jsx("div",{className:"text-[9px] sm:text-[10px] font-mono uppercase text-slate-400",children:"Time"}),n.jsxs("div",{className:`text-lg sm:text-2xl font-black font-mono ${z<=10?"text-rose-500 animate-pulse":"text-white"}`,children:[z,"s"]})]})]})]}),n.jsx("div",{className:"w-full bg-slate-950 h-1.5 sm:h-2 rounded-full overflow-hidden border border-slate-800",children:n.jsx("div",{className:`h-full transition-all duration-1000 ${z<=10?"bg-rose-500":z<=25?"bg-amber-400":"bg-gradient-to-r from-cyan-400 to-purple-500"}`,style:{width:`${z/60*100}%`}})}),n.jsxs("div",{className:"glass-panel p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-cyan-500/30 bg-slate-900/90 shadow-2xl space-y-4 sm:space-y-6",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",children:ie.tech}),n.jsxs("span",{className:"text-[11px] sm:text-xs font-mono text-slate-400",children:["Q#",M+1]})]}),n.jsx("h3",{className:"text-sm sm:text-xl font-bold text-white leading-snug sm:leading-relaxed",children:ie.question}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1",children:ie.options.map((b,X)=>{let c="bg-slate-950/80 hover:bg-slate-800/90 border-slate-800 text-slate-200 hover:border-cyan-400";return ee!==null&&(X===ie.correct?c="bg-emerald-950/90 border-emerald-400 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] font-black":X===ee.selected&&ee.type==="wrong"&&(c="bg-rose-950/90 border-rose-500 text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.3)] line-through")),n.jsxs("button",{disabled:ee!==null,onClick:()=>Ee(X),className:`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left font-mono text-xs sm:text-sm transition-all duration-150 flex items-center justify-between active:scale-[0.98] touch-manipulation min-h-[46px] ${c}`,children:[n.jsx("span",{children:b}),ee!==null&&X===ie.correct&&n.jsx(lt,{size:16,className:"text-emerald-400 shrink-0 ml-2"}),ee!==null&&X===ee.selected&&ee.type==="wrong"&&n.jsx(It,{size:16,className:"text-rose-500 shrink-0 ml-2"})]},X)})})]})]}),T==="gameover"&&n.jsxs("div",{className:"rounded-2xl sm:rounded-3xl glass-panel p-5 sm:p-10 border border-purple-500/30 bg-gradient-to-br from-slate-900 via-slate-900/95 to-purple-950/40 text-center space-y-4 sm:space-y-6 max-w-2xl mx-auto shadow-2xl animate-fadeIn",children:[n.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-purple-500 to-pink-500 p-0.5 shadow-xl shadow-purple-500/25 flex items-center justify-center",children:n.jsxs("div",{className:"w-full h-full bg-slate-950 rounded-[18px] sm:rounded-[22px] flex items-center justify-center text-purple-400",children:[n.jsx(gn,{size:32,className:"fill-current sm:hidden"}),n.jsx(gn,{size:38,className:"fill-current hidden sm:block"})]})}),n.jsxs("div",{children:[n.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[11px] sm:text-xs font-mono font-bold mb-1.5 sm:mb-2",children:[n.jsx(tr,{size:12}),n.jsx("span",{children:"SPRINT FINISHED!"})]}),n.jsxs("h2",{className:"text-2xl sm:text-4xl font-black text-white",children:[L.toLocaleString()," PTS"]}),n.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1",children:L>te?"🔥 NEW ALL-TIME HIGH SCORE!":`Personal Best: ${te.toLocaleString()} pts`})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-2 sm:gap-3",children:[n.jsxs("div",{className:"bg-slate-950/80 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-800",children:[n.jsx("div",{className:"text-[10px] sm:text-xs text-slate-400 font-mono",children:"Accuracy"}),n.jsxs("div",{className:"text-base sm:text-lg font-black text-cyan-400 mt-0.5",children:[ce,"%"]}),n.jsxs("div",{className:"text-[9px] sm:text-[10px] text-slate-500 font-mono mt-0.5",children:[W,"/",M," Correct"]})]}),n.jsxs("div",{className:"bg-slate-950/80 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-800",children:[n.jsx("div",{className:"text-[10px] sm:text-xs text-slate-400 font-mono",children:"Max Streak"}),n.jsxs("div",{className:"text-base sm:text-lg font-black text-purple-400 mt-0.5",children:[K," 🔥"]}),n.jsx("div",{className:"text-[9px] sm:text-[10px] text-slate-500 font-mono mt-0.5",children:"Consecutive"})]}),n.jsxs("div",{className:"bg-slate-950/80 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-800",children:[n.jsx("div",{className:"text-[10px] sm:text-xs text-slate-400 font-mono",children:"Bonus XP"}),n.jsxs("div",{className:"text-base sm:text-lg font-black text-emerald-400 mt-0.5",children:["+",Math.round(L/5)]}),n.jsx("div",{className:"text-[9px] sm:text-[10px] text-slate-500 font-mono mt-0.5",children:"Profile XP"})]})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1",children:[n.jsxs("button",{onClick:()=>{const b=Math.round(L/5);b>0&&w(b),Te()},className:"flex-1 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 touch-manipulation transition-all min-h-[46px]",children:[n.jsx(st,{size:14}),n.jsx("span",{children:"CLAIM XP & SPRINT AGAIN"})]}),n.jsx("button",{onClick:()=>{const b=Math.round(L/5);b>0&&w(b),S("idle")},className:"py-3 sm:py-3.5 px-6 rounded-xl sm:rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm transition-colors touch-manipulation min-h-[46px]",children:"Back to Lobby"})]})]})]})},Ed=[{id:"sorcerer",name:"Frontend Sorcerer",icon:"🧙‍♂️",spell:"Flexbox Supernova",bonusTech:"HTML",bonusTech2:"CSS",desc:"+50 bonus damage on HTML & CSS spells!",hearts:3},{id:"assassin",name:"Script Assassin",icon:"⚡",spell:"Async Critical Strike",bonusTech:"JavaScript",bonusTech2:"Python",desc:"+50 bonus damage on JavaScript & Python!",hearts:3},{id:"knight",name:"Backend Knight",icon:"🛡️",spell:"ACID Fortress",bonusTech:"MySQL",bonusTech2:"PHP",desc:"Starts with 4 Hearts for ultimate endurance!",hearts:4}],Am=()=>{const{addXP:w,unlockAchievement:m,triggerConfetti:u}=at(),[T,S]=j.useState("select_hero"),[z,g]=j.useState(Ed[0]),[k,E]=j.useState(1e3),[q]=j.useState(1e3),[A,L]=j.useState(3),[_,J]=j.useState(3),[G,K]=j.useState(0),[C,W]=j.useState(null),[P,M]=j.useState(["⚔️ The Syntax Devourer rises from corrupted heap memory! Prepare to cast your code spells!"]),[F,ee]=j.useState(!1),[ue,te]=j.useState(!1),[ve,ke]=j.useState(null),ye=fe=>{R.playLevelUp(),g(fe),E(1e3),L(fe.hearts),J(fe.hearts),K(0),M([`⚔️ ${fe.name} entered the arena! Cast spells by solving syntax challenges!`]),S("battle")},Te=fe=>{if(ve!==null||T!=="battle")return;const ie=In[G%In.length];if(fe===ie.correct){R.playHit();let ce=200+Math.floor(Math.random()*50);(ie.tech===z.bonusTech||ie.tech===z.bonusTech2)&&(ce+=60),W(`-${ce} DMG`),te(!0),ke({type:"correct",selected:fe});const b=Math.max(0,k-ce);if(E(b),M(X=>[`✨ You cast ${z.spell} on [${ie.tech}]! Dealt ${ce} damage to the Boss!`,...X.slice(0,3)]),setTimeout(()=>{te(!1),W(null)},700),b<=0){setTimeout(()=>{R.playExplosion(),u(),m("boss_slayer"),w(300),S("victory")},800);return}}else{R.playError();const ce=A-1;if(L(ce),ke({type:"wrong",selected:fe}),M(b=>["💥 Syntax Devourer countered with UnhandledRejection! You lost 1 Heart!",...b.slice(0,3)]),ce<=0){setTimeout(()=>{S("defeat")},800);return}}setTimeout(()=>{ke(null),K(ce=>ce+1)},600)},je=In[G%In.length],Ee=Math.round(k/q*100);return n.jsxs("div",{className:"space-y-6 max-w-4xl mx-auto",children:[T==="select_hero"&&n.jsxs("div",{className:"rounded-2xl sm:rounded-3xl glass-panel p-5 sm:p-10 border border-rose-500/30 bg-gradient-to-br from-slate-900 via-slate-900/90 to-rose-950/30 text-center space-y-4 sm:space-y-6 shadow-2xl",children:[n.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-rose-500 to-red-600 p-0.5 shadow-xl shadow-rose-500/20 flex items-center justify-center",children:n.jsxs("div",{className:"w-full h-full bg-slate-950 rounded-[18px] sm:rounded-[22px] flex items-center justify-center text-rose-500",children:[n.jsx(cs,{size:32,className:"animate-pulse sm:hidden"}),n.jsx(cs,{size:40,className:"animate-pulse hidden sm:block"})]})}),n.jsxs("div",{children:[n.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[11px] sm:text-xs font-mono font-bold mb-2 sm:mb-3",children:[n.jsx(Si,{size:12}),n.jsx("span",{children:"EPIC CYBER RAID BOSS"})]}),n.jsx("h2",{className:"text-xl sm:text-3xl lg:text-4xl font-black text-white",children:"The Syntax Devourer"}),n.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1.5 sm:mt-2 max-w-md mx-auto leading-relaxed",children:"A monstrous entity born from unclosed `<div>` tags, missing semicolons, and infinite loops! Choose your class to slay it!"})]}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5 text-left pt-1",children:Ed.map(fe=>n.jsxs("div",{onClick:()=>g(fe),className:`p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between active:scale-[0.99] touch-manipulation ${z.id===fe.id?"bg-slate-900 border-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.3)] ring-1 ring-rose-400/50 scale-[1.01]":"bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60"}`,children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-2xl sm:text-3xl mb-1.5",children:fe.icon}),n.jsx("h4",{className:"font-bold text-white text-sm sm:text-base",children:fe.name}),n.jsxs("div",{className:"text-[10px] sm:text-[11px] text-rose-400 font-mono mt-0.5 font-bold",children:["Special: ",fe.spell]}),n.jsx("p",{className:"text-[11px] sm:text-xs text-slate-400 mt-1.5 leading-relaxed",children:fe.desc})]}),n.jsxs("div",{className:"mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400",children:[n.jsx("span",{children:"Base Shields:"}),n.jsx("span",{className:"text-rose-400 font-bold",children:Array.from({length:fe.hearts}).map((ie,Ce)=>"❤️").join("")})]})]},fe.id))}),n.jsxs("button",{onClick:()=>ye(z),className:"w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-rose-500 via-red-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-slate-950 font-black text-xs sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-rose-500/25 active:scale-95 touch-manipulation min-h-[46px] transition-all",children:[n.jsx(Si,{size:16}),n.jsxs("span",{children:["ENTER BOSS ARENA AS ",z.name.toUpperCase()]})]})]}),T==="battle"&&n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:`glass-panel p-5 sm:p-6 rounded-3xl border border-rose-500/40 bg-gradient-to-b from-slate-900/90 to-rose-950/30 shadow-2xl relative overflow-hidden transition-all duration-200 ${ue?"ring-4 ring-rose-500 scale-[0.99] bg-rose-950/50":""}`,children:[C&&n.jsx("div",{className:"absolute top-3 right-4 sm:top-8 sm:right-12 text-2xl sm:text-4xl font-black text-amber-400 animate-bounce font-mono drop-shadow-[0_0_15px_rgba(251,191,36,0.8)] z-20",children:C}),n.jsxs("div",{className:"flex items-center justify-between gap-2.5 sm:gap-4 flex-wrap",children:[n.jsxs("div",{className:"flex items-center gap-2.5 sm:gap-3.5",children:[n.jsx("div",{className:"w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-2xl sm:text-3xl shadow-lg relative shrink-0",children:n.jsx("span",{className:ue?"animate-spin text-amber-400":"animate-pulse",children:"👾"})}),n.jsxs("div",{children:[n.jsxs("div",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[9px] sm:text-[10px] font-mono font-bold mb-0.5",children:[n.jsx(cs,{size:10}),n.jsx("span",{children:"SYNTAX DEVOURER"})]}),n.jsx("h3",{className:"text-base sm:text-2xl font-black text-white leading-tight",children:"The Syntax Devourer"})]})]}),n.jsxs("div",{className:"bg-slate-950/80 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl border border-slate-800 flex items-center gap-1.5 ml-auto",children:[n.jsx("span",{className:"text-[10px] sm:text-xs font-mono text-slate-400 mr-0.5",children:"Shield:"}),n.jsx("div",{className:"flex items-center gap-0.5 text-base sm:text-lg",children:Array.from({length:_}).map((fe,ie)=>n.jsx("span",{className:ie<A?"text-rose-500":"text-slate-700 opacity-40",children:"❤️"},ie))})]})]}),n.jsxs("div",{className:"mt-3 sm:mt-4 space-y-1 sm:space-y-1.5",children:[n.jsxs("div",{className:"flex items-center justify-between text-[11px] sm:text-xs font-mono",children:[n.jsxs("span",{className:"text-rose-400 font-bold flex items-center gap-1",children:[n.jsx(nr,{size:12,className:"fill-current"}),"Boss Health"]}),n.jsxs("span",{className:"text-slate-300 font-bold font-mono",children:[k," / ",q," HP (",Ee,"%)"]})]}),n.jsx("div",{className:"w-full bg-slate-950 h-2 sm:h-3 rounded-full overflow-hidden border border-slate-800",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-400 transition-all duration-300",style:{width:`${Ee}%`}})})]})]}),n.jsxs("div",{className:"glass-panel p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-cyan-500/30 bg-slate-900/90 shadow-2xl space-y-3.5 sm:space-y-5",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("span",{className:"px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5",children:[n.jsx(Rn,{size:12}),n.jsxs("span",{children:["Element: ",je.tech]})]}),n.jsxs("span",{className:"text-[11px] sm:text-xs font-mono text-slate-400",children:["Turn #",G+1]})]}),n.jsx("h3",{className:"text-sm sm:text-lg font-bold text-white leading-snug sm:leading-relaxed",children:je.question}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1",children:je.options.map((fe,ie)=>{let Ce="bg-slate-950/80 hover:bg-slate-800 border-slate-800 text-slate-200 hover:border-cyan-400";return ve!==null&&(ie===je.correct?Ce="bg-emerald-950/90 border-emerald-400 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] font-black":ie===ve.selected&&ve.type==="wrong"&&(Ce="bg-rose-950/90 border-rose-500 text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.3)] line-through")),n.jsxs("button",{disabled:ve!==null,onClick:()=>Te(ie),className:`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left font-mono text-xs sm:text-sm transition-all duration-150 flex items-center justify-between active:scale-[0.98] touch-manipulation min-h-[46px] ${Ce}`,children:[n.jsx("span",{children:fe}),ve!==null&&ie===je.correct&&n.jsx(lt,{size:16,className:"text-emerald-400 shrink-0 ml-2"}),ve!==null&&ie===ve.selected&&ve.type==="wrong"&&n.jsx(It,{size:16,className:"text-rose-500 shrink-0 ml-2"})]},ie)})})]}),n.jsxs("div",{className:"glass-panel p-3.5 rounded-2xl border border-slate-800 bg-slate-950/80 text-xs font-mono space-y-1",children:[n.jsx("div",{className:"text-[10px] text-slate-500 uppercase font-bold tracking-wider",children:"Combat Log"}),P.map((fe,ie)=>n.jsx("div",{className:"text-slate-300 truncate",children:fe},ie))]})]}),T==="victory"&&n.jsxs("div",{className:"rounded-2xl sm:rounded-3xl glass-panel p-5 sm:p-10 border border-emerald-500/40 bg-gradient-to-br from-slate-900 via-slate-900/95 to-emerald-950/30 text-center space-y-4 sm:space-y-6 shadow-2xl animate-fadeIn",children:[n.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-xl shadow-emerald-500/25 flex items-center justify-center",children:n.jsxs("div",{className:"w-full h-full bg-slate-950 rounded-[18px] sm:rounded-[22px] flex items-center justify-center text-emerald-400",children:[n.jsx(gn,{size:32,className:"fill-current sm:hidden"}),n.jsx(gn,{size:40,className:"fill-current hidden sm:block"})]})}),n.jsxs("div",{children:[n.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] sm:text-xs font-mono font-bold mb-1.5 sm:mb-2",children:[n.jsx(tr,{size:12}),n.jsx("span",{children:"FLAWLESS VICTORY"})]}),n.jsx("h2",{className:"text-2xl sm:text-4xl font-black text-white",children:"The Syntax Devourer SLAIN!"}),n.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1 sm:mt-2 max-w-md mx-auto",children:"You banished the corrupted heap memory entity with flawless code execution!"})]}),n.jsxs("div",{className:"p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950/80 border border-slate-800 max-w-md mx-auto space-y-1",children:[n.jsx("div",{className:"text-emerald-400 font-bold font-mono text-xs sm:text-sm",children:"🏆 Rewards Unlocked:"}),n.jsx("div",{className:"text-[11px] sm:text-xs text-slate-300 font-mono",children:"+300 Profile XP awarded!"}),n.jsx("div",{className:"text-[11px] sm:text-xs text-slate-300 font-mono",children:'Achievement: "Syntax Slayer" Badge'})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1 max-w-md mx-auto",children:[n.jsxs("button",{onClick:()=>ye(z),className:"flex-1 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 touch-manipulation min-h-[46px] transition-all",children:[n.jsx(st,{size:14}),n.jsx("span",{children:"RAID AGAIN"})]}),n.jsx("button",{onClick:()=>S("select_hero"),className:"py-3 sm:py-3.5 px-6 rounded-xl sm:rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm transition-colors touch-manipulation min-h-[46px]",children:"Change Hero"})]})]}),T==="defeat"&&n.jsxs("div",{className:"rounded-2xl sm:rounded-3xl glass-panel p-5 sm:p-10 border border-rose-500/30 bg-gradient-to-br from-slate-900 via-slate-900/95 to-rose-950/40 text-center space-y-4 sm:space-y-6 shadow-2xl animate-fadeIn",children:[n.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl sm:rounded-3xl bg-slate-950 border border-rose-500/40 flex items-center justify-center text-rose-500 text-2xl sm:text-3xl",children:"💀"}),n.jsxs("div",{children:[n.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[11px] sm:text-xs font-mono font-bold mb-1.5 sm:mb-2",children:[n.jsx(cs,{size:12}),n.jsx("span",{children:"SHIELD DEPLETED"})]}),n.jsx("h2",{className:"text-2xl sm:text-3xl font-black text-white",children:"The Syntax Devourer Overwhelmed You!"}),n.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1 sm:mt-2 max-w-md mx-auto",children:"Your shield was broken by unhandled syntax exceptions. Study the docs and try again!"})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1 max-w-md mx-auto",children:[n.jsxs("button",{onClick:()=>ye(z),className:"flex-1 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 touch-manipulation min-h-[46px] transition-all",children:[n.jsx(st,{size:14}),n.jsx("span",{children:"REVIVE & RETRY"})]}),n.jsx("button",{onClick:()=>S("select_hero"),className:"py-3 sm:py-3.5 px-6 rounded-xl sm:rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm transition-colors touch-manipulation min-h-[46px]",children:"Switch Hero"})]})]})]})},Zs=[{id:"flappy_square",title:"Flappy Square Arcade",category:"Mini-Games",icon:"🎮",description:"Jump through moving cyber pipes with gravity physics and live score.",html:`<div class="game-container">
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
  padding: 8px;
  box-sizing: border-box;
}
.game-container {
  text-align: center;
  background: #111726;
  padding: 14px;
  border-radius: 16px;
  border: 1px solid #1e293b;
  box-shadow: 0 10px 40px rgba(0, 242, 254, 0.2);
  max-width: 100%;
  box-sizing: border-box;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
h3 { margin: 0; color: #00f2fe; font-size: 1.1rem; }
.score { font-size: 15px; font-weight: bold; color: #4ade80; }
canvas {
  background: #020617;
  border: 2px solid #00f2fe;
  border-radius: 10px;
  display: block;
  max-width: 100%;
  height: auto;
  touch-action: manipulation;
}
.instructions {
  font-size: 11px;
  color: #94a3b8;
  margin-top: 8px;
}
#restartBtn {
  background: #00f2fe;
  color: #000;
  border: none;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
  touch-action: manipulation;
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
canvas.addEventListener('touchstart', (e) => { e.preventDefault(); jump(); }, { passive: false });

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
  padding: 8px;
  box-sizing: border-box;
}
.snake-box {
  background: #0f172a;
  padding: 14px;
  border-radius: 16px;
  border: 1px solid #334155;
  text-align: center;
  max-width: 100%;
  box-sizing: border-box;
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
  max-width: 100%;
  height: auto;
}
.keys { font-size: 11px; color: #64748b; margin-top: 6px; }
.dpad { margin-top: 8px; }
.dpad button {
  background: #1e293b;
  color: #fff;
  border: 1px solid #475569;
  padding: 10px 18px;
  border-radius: 10px;
  margin: 3px;
  cursor: pointer;
  font-size: 16px;
  touch-action: manipulation;
  user-select: none;
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
  padding: 8px;
  box-sizing: border-box;
}
.bug-arena {
  background: #0f172a;
  padding: 14px;
  border-radius: 16px;
  border: 1px solid #334155;
  text-align: center;
  box-shadow: 0 10px 30px rgba(244,63,94,0.2);
  max-width: 100%;
  box-sizing: border-box;
}
h2 { margin: 0 0 10px 0; color: #f43f5e; font-size: 1.2rem; }
.stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-weight: bold;
  color: #38bdf8;
  font-size: 14px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(65px, 80px));
  gap: 8px;
  justify-content: center;
  margin-bottom: 14px;
}
.hole {
  width: 100%;
  max-width: 80px;
  height: 75px;
  background: #1e293b;
  border: 2px dashed #475569;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
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
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  touch-action: manipulation;
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
  padding: 8px;
  box-sizing: border-box;
}
.pong-box {
  background: #0b1120;
  padding: 14px;
  border-radius: 16px;
  border: 1px solid #1e293b;
  text-align: center;
  max-width: 100%;
  box-sizing: border-box;
}
.scoreboard {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 8px;
}
canvas {
  background: #030712;
  border: 2px solid #334155;
  border-radius: 8px;
  display: block;
  max-width: 100%;
  height: auto;
  touch-action: none;
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
  const scaleY = canvas.height / rect.height;
  player.y = (e.touches[0].clientY - rect.top) * scaleY - player.height / 2;
  e.preventDefault();
}, { passive: false });

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
}`}],Rm=()=>{const w=Zs.filter(E=>E.category==="Mini-Games"),[m,u]=j.useState(w[0]||null),[T,S]=j.useState(0),z=E=>{R.playClick(),u(E),S(q=>q+1)},g=()=>{R.playClick(),S(E=>E+1)},k=m?`
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <style>
          * { box-sizing: border-box; }
          html, body { 
            margin: 0; 
            padding: 8px; 
            width: 100%; 
            min-height: 100%; 
            overflow-x: hidden; 
            touch-action: manipulation; 
            display: flex;
            justify-content: center;
            align-items: center;
          }
          canvas { 
            max-width: 100% !important; 
            height: auto !important; 
            display: block; 
            margin: 0 auto; 
          }
          ${m.css}
        </style>
      </head>
      <body>
        ${m.html}
        <script>${m.js}<\/script>
      </body>
    </html>
  `:"";return n.jsxs("div",{className:"space-y-4 sm:space-y-6 max-w-4xl mx-auto",children:[n.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 pb-1",children:[n.jsx("div",{className:"flex items-center gap-1.5 sm:gap-2 overflow-x-auto touch-scroll pb-1",children:w.map(E=>{const q=(m==null?void 0:m.id)===E.id;return n.jsxs("button",{onClick:()=>z(E),className:`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 touch-manipulation ${q?"bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-black shadow-[0_0_15px_rgba(0,242,254,0.4)]":"bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:bg-slate-800"}`,children:[n.jsx("span",{className:"text-sm sm:text-base",children:E.icon}),n.jsx("span",{children:E.title})]},E.id)})}),n.jsxs("button",{onClick:g,className:"px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1.5 active:scale-95 touch-manipulation transition-all shrink-0",children:[n.jsx(st,{size:13}),n.jsx("span",{children:"Restart"})]})]}),n.jsxs("div",{className:"glass-panel p-3 sm:p-6 rounded-2xl sm:rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl space-y-3 sm:space-y-4",children:[n.jsxs("div",{className:"flex items-center justify-between px-1 sm:px-2",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-lg sm:text-xl",children:m==null?void 0:m.icon}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-extrabold text-white text-xs sm:text-base",children:m==null?void 0:m.title}),n.jsx("p",{className:"text-[10px] sm:text-[11px] text-slate-400 line-clamp-1",children:m==null?void 0:m.description})]})]}),n.jsxs("div",{className:"flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[9px] sm:text-[10px] font-mono shrink-0",children:[n.jsx(wm,{size:10}),n.jsx("span",{className:"hidden xs:inline",children:"Touch & Keys"}),n.jsx("span",{className:"xs:hidden",children:"Touch"})]})]}),n.jsx("div",{className:"relative rounded-xl sm:rounded-2xl overflow-hidden border-2 border-slate-800 bg-black min-h-[380px] sm:min-h-[480px] flex items-center justify-center shadow-inner",children:m&&n.jsx("iframe",{title:m.title,srcDoc:k,className:"w-full h-full min-h-[380px] sm:min-h-[480px] border-none",sandbox:"allow-scripts allow-modals"},T)}),n.jsxs("div",{className:"flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400 px-1 sm:px-2",children:[n.jsx("span",{className:"truncate mr-2",children:"🎮 On-screen touch buttons or arrows/spacebar"}),n.jsx("span",{className:"text-cyan-400 font-bold shrink-0",children:"Free Play"})]})]})]})},Om={Code2:On,Palette:Ni,Terminal:xn,Database:ds,Sparkles:rt,Server:Ei,Layers:Ci},Dm=()=>{const{selectedTrack:w,setSelectedTrack:m,completedLevels:u,setActiveGameLevel:T,xp:S,playerLevel:z,rankTitle:g,streak:k,soundMuted:E,toggleSound:q,setIsAchievementsOpen:A}=at(),[L,_]=j.useState("quests"),J=C=>{R.playClick(),m(C),T(1)},G=C=>{R.playClick(),_(C)},K=()=>{switch(w){case"html":return n.jsx(Nd,{});case"css":return n.jsx(Nm,{});case"js":return n.jsx(Em,{});case"mysql":return n.jsx(Pm,{});case"python":return n.jsx(Lm,{});case"php":return n.jsx(_m,{});case"django":return n.jsx(Mm,{});default:return n.jsx(Nd,{})}};return n.jsxs("div",{className:"space-y-6 sm:space-y-8 pb-16 md:pb-6",children:[n.jsxs("div",{className:"relative rounded-2xl sm:rounded-3xl overflow-hidden glass-panel p-5 sm:p-8 border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900/90 to-purple-950/40 shadow-2xl",children:[n.jsx("div",{className:"absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"}),n.jsxs("div",{className:"relative z-10 max-w-3xl",children:[n.jsxs("div",{className:"inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[11px] sm:text-xs font-mono font-semibold mb-2.5",children:[n.jsx(wi,{size:13}),n.jsx("span",{children:"BYTEVERSE CYBER ARCADE REALM"})]}),n.jsxs("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight",children:["Play Games. Slay Bosses. ",n.jsx("br",{className:"hidden sm:inline"}),n.jsx("span",{className:"bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent",children:"Become a Full-Stack Legend."})]}),n.jsx("p",{className:"text-xs sm:text-sm lg:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed",children:"Choose between 7 Tech Quests, the 60-Second Code Sprint, the Syntax Devourer Boss Raid, or instant Retro Mini-Games!"})]})]}),n.jsxs("div",{className:"p-3 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg flex items-center justify-between flex-wrap gap-2.5",children:[n.jsxs("div",{className:"flex items-center gap-2.5 sm:gap-6 flex-wrap",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-500 p-0.5 shadow-md shrink-0",children:n.jsxs("div",{className:"w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-xs text-cyan-300 font-mono",children:["L",z]})}),n.jsxs("div",{children:[n.jsx("div",{className:"text-[9px] sm:text-[10px] font-mono uppercase text-slate-400",children:"Rank"}),n.jsx("div",{className:"text-xs sm:text-sm font-black text-white",children:g})]})]}),n.jsxs("div",{className:"border-l border-slate-800 pl-2.5 sm:pl-5",children:[n.jsx("div",{className:"text-[9px] sm:text-[10px] font-mono uppercase text-slate-400",children:"Total XP"}),n.jsxs("div",{className:"text-xs sm:text-sm font-black text-amber-400 font-mono",children:[S.toLocaleString()," XP"]})]}),n.jsxs("div",{className:"border-l border-slate-800 pl-2.5 sm:pl-5",children:[n.jsx("div",{className:"text-[9px] sm:text-[10px] font-mono uppercase text-slate-400",children:"Streak"}),n.jsxs("div",{className:"text-xs sm:text-sm font-black text-rose-400 font-mono flex items-center gap-1",children:[n.jsx(nr,{size:12,className:"fill-current animate-pulse text-rose-400"}),n.jsxs("span",{children:[k,"d"]})]})]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsxs("button",{onClick:()=>{R.playClick(),A(!0)},className:"flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors active:scale-95 touch-manipulation",children:[n.jsx(gn,{size:13,className:"text-amber-400"}),n.jsx("span",{className:"text-[11px] sm:text-xs",children:"Badges"})]}),n.jsx("button",{onClick:q,className:`p-2 rounded-xl border transition-colors active:scale-95 touch-manipulation ${E?"bg-rose-500/10 border-rose-500/30 text-rose-400":"bg-cyan-500/10 border-cyan-500/30 text-cyan-400"}`,title:E?"Unmute Sound":"Mute Sound",children:E?n.jsx(_i,{size:15}):n.jsx(Li,{size:15})})]})]}),n.jsx("div",{className:"flex items-center gap-2 overflow-x-auto touch-scroll pb-1 border-b border-slate-800",children:[{id:"quests",label:"Tech Quests",fullLabel:"Tech Quests (7 Tracks)",icon:wi,color:"from-cyan-500 to-blue-500"},{id:"sprint",label:"60s Sprint",fullLabel:"60s Code Sprint",icon:Rn,color:"from-amber-500 to-orange-500"},{id:"boss",label:"Boss Raid",fullLabel:"Syntax Devourer (Boss)",icon:cs,color:"from-rose-500 to-red-600"},{id:"retro",label:"Retro Games",fullLabel:"Retro Mini-Games",icon:rt,color:"from-purple-500 to-pink-500"}].map(C=>{const W=C.icon,P=L===C.id;return n.jsxs("button",{onClick:()=>G(C.id),className:`flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap active:scale-95 touch-manipulation shrink-0 ${P?`bg-gradient-to-r ${C.color} text-slate-950 font-black shadow-lg scale-[1.02]`:"bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"}`,children:[n.jsx(W,{size:14,className:P?"text-slate-950 fill-current":""}),n.jsx("span",{className:"sm:hidden",children:C.label}),n.jsx("span",{className:"hidden sm:inline",children:C.fullLabel})]},C.id)})}),L==="quests"&&n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between mb-3 px-1",children:[n.jsxs("h3",{className:"text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2",children:[n.jsx("span",{children:"Select Learning Track"}),n.jsx("span",{className:"text-[10px] sm:text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-normal",children:"7 Technologies"})]}),n.jsx("span",{className:"text-[11px] text-slate-500 font-mono sm:hidden",children:"Swipe →"})]}),n.jsx("div",{className:"flex sm:grid sm:grid-cols-3 lg:grid-cols-7 gap-2.5 sm:gap-3 overflow-x-auto touch-scroll pb-2 sm:pb-0 -mx-3 px-3 sm:mx-0 sm:px-0",children:Du.map(C=>{const W=Om[C.icon]||On,P=w===C.id,M=(u[C.id]||[]).length,F=M>=C.levelsCount;return n.jsxs("button",{onClick:()=>J(C.id),className:`min-w-[140px] sm:min-w-0 p-3 sm:p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between relative active:scale-95 shrink-0 sm:shrink ${P?"bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(0,242,254,0.25)] ring-1 ring-cyan-400/50 scale-[1.02]":"bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60"}`,children:[F&&n.jsx("span",{className:"absolute top-2 right-2 text-emerald-400",children:n.jsx(lt,{size:15})}),n.jsxs("div",{children:[n.jsx("div",{className:`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-2 bg-gradient-to-br ${C.accentColor} text-slate-950 shadow-md`,children:n.jsx(W,{size:18})}),n.jsx("h4",{className:"font-bold text-xs sm:text-sm text-white",children:C.name}),n.jsx("span",{className:"text-[9px] sm:text-[10px] text-slate-400 font-mono block leading-tight mt-0.5 truncate",children:C.category})]}),n.jsxs("div",{className:"mt-2.5 pt-2 border-t border-slate-800/80 w-full",children:[n.jsxs("div",{className:"flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-slate-400 mb-1",children:[n.jsx("span",{children:"Progress"}),n.jsxs("span",{children:[M,"/",C.levelsCount]})]}),n.jsx("div",{className:"w-full bg-slate-800 h-1.5 rounded-full overflow-hidden",children:n.jsx("div",{className:`h-full rounded-full bg-gradient-to-r ${C.accentColor} transition-all duration-300`,style:{width:`${M/C.levelsCount*100}%`}})})]})]},C.id)})})]}),n.jsx("div",{className:"pt-1",children:K()})]}),L==="sprint"&&n.jsx(Im,{}),L==="boss"&&n.jsx(Am,{}),L==="retro"&&n.jsx(Rm,{})]})},Hm=[{id:"html_home",category:"HTML Tutorial",title:"HTML HOME",summary:"HTML is the standard markup language for Web pages. With HTML you can create your own Website.",eli5:{story:"Imagine you want to build a Lego castle or draw your dream house! HTML is like the plastic Lego bricks. You need bricks for the walls, a big sign for the front door, and a frame for the windows. Without HTML, there is nothing on the screen at all!",analogy:"🧱 Lego Bricks: HTML gives you the physical blocks to snap together before you paint them or add moving motors.",rules:["Every web page begins with a blueprint called <!DOCTYPE html>.","Tags look like little alligator mouths < > holding words inside.","Most tags give a hug to your words with an opening tag <p> and a closing tag </p>."]},body:`HTML is easy to learn - You will enjoy it!
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
</div>`,codeType:"html",tips:"Modern browsers block videos from autoplaying with sound. Always add muted along with autoplay!",exercise:{question:"Which attribute provides play, pause, and volume buttons on a <video> element?",options:["buttons","player","controls","media"],correct:2,hint:'It is called "controls".'}},{id:"html_styles",category:"HTML Styles & Colors",title:"HTML Styles (Inline CSS)",summary:"The HTML style attribute is used to add styles to an element, such as color, font, size, and background.",eli5:{story:"Imagine you have a plain wooden toy car. It works fine, but it is just plain wood! The style attribute is your magic paintbrush that paints it neon blue, turns the wheels shiny silver, and gives it a giant racing stripe!",analogy:"🎨 Magic Paintbrush: style='color:red' paints any word or box in your favorite shade instantly.",rules:['Write style="property:value;" inside the opening tag.',"Use color: to paint the text.","Use background-color: to paint behind the text."]},body:'### The HTML Style Attribute:\nTo style an HTML element directly, use the `style` attribute:\n```html\n<p style="color:red;">I am a red paragraph.</p>\n<p style="color:blue; font-size:20px;">I am big and blue.</p>\n```\n\n### Core Properties:\n- `background-color`: Sets the background color of an element.\n- `color`: Sets the text color.\n- `font-family`: Defines the font to be used (e.g. Arial, \'Courier New\', sans-serif).\n- `font-size`: Defines the text size (e.g. 18px, 1.5rem, 150%).\n- `text-align`: Defines the horizontal alignment (`left`, `center`, `right`, `justify`).',tryItCode:`<div style="background:#0f172a; padding:24px; border-radius:12px; border:1px solid #334155; text-align:center;">
  <h1 style="color:#00f2fe; font-family:'Courier New', monospace; font-size:26px; margin:0;">Neon Terminal</h1>
  <p style="color:#e2e8f0; font-size:15px; margin-top:8px;">Styled with pure HTML inline style attributes!</p>
  <button style="background:#10b981; color:#0f172a; font-weight:bold; padding:10px 20px; border-radius:8px; border:none; cursor:pointer;">Launch Mission</button>
</div>`,codeType:"html",tips:"Always separate multiple CSS rules with semicolons (;) inside the style quotation marks.",exercise:{question:"Which CSS property inside a style attribute sets the background color of an element?",options:["bgcolor","background-color","color-background","canvas-color"],correct:1,hint:"It is written with a hyphen: background-color."}},{id:"html_quotations",category:"HTML Text Formatting",title:"HTML Quotations & Citations",summary:"HTML contains special quotation and citation elements to mark quotes, abbreviations, addresses, and citations.",eli5:{story:"When you repeat what your teacher or superhero said in a story, you put quotation marks around their words so everyone knows who said it. HTML has elements like <blockquote> and <abbr> that tell computers 'Hey, this is an official quote from someone else!'",analogy:"📜 The Speech Scroll: <blockquote> indents and showcases an important speech from someone famous.",rules:["<blockquote> is for long quotes from other sources.","<q> adds small inline quotation marks around words.","<abbr title='...'> shows what letters stand for when you hover over them."]},body:'### Quotation Elements in HTML:\n- `<blockquote>`: Defines a section that is quoted from another source. Browsers usually indent `<blockquote>` elements.\n- `<q>`: Defines a short inline quotation. Browsers normally insert quotation marks around the quotation.\n- `<abbr title="...">`: Defines an abbreviation or an acronym (hovering reveals full text).\n- `<address>`: Defines contact information for the author/owner of a document.\n- `<cite>`: Defines the title of a work (e.g. a book, poem, song, movie).\n- `<bdo dir="rtl">`: Bi-Directional Override (inverts reading direction, right-to-left).',tryItCode:`<div style="background:#0f172a; padding:20px; border-radius:12px; color:#e2e8f0; font-family:sans-serif;">
  <p>Affan says: <q style="color:#38bdf8;">Code is pure digital wizardry.</q></p>
  <blockquote cite="https://affansayed.vercel.app" style="border-left:4px solid #10b981; margin:16px 0; padding-left:16px; color:#94a3b8; font-style:italic;">
    "Anyone can learn to program if you explain it simply from the ground up."
  </blockquote>
  <p>Learn more about <abbr title="HyperText Markup Language" style="color:#f59e0b; text-decoration:underline;">HTML</abbr> today!</p>
</div>`,codeType:"html",exercise:{question:"Which HTML element specifies an abbreviation or acronym with an explanatory tooltip?",options:["<acronym>","<abbr>","<tooltip>","<short>"],correct:1,hint:"It is short for abbreviation: <abbr>."}},{id:"html_comments",category:"HTML Basics",title:"HTML Comments",summary:"HTML comments are not displayed in the browser, but they help document your HTML source code and debug errors.",eli5:{story:"Imagine you are building a secret fort with your best friend, and you write secret notes on the back of the cardboard boxes that only you can read. In HTML, comments are secret notes for programmers that the website visitor never sees on the screen!",analogy:"🤫 Secret Whispers: Computers ignore comments, but other human coders love reading them!",rules:["Comments start with <!-- and end with -->.","Anything inside the comment is completely invisible on the webpage.","Great for turning off broken code temporarily while testing."]},body:`### Syntax of HTML Comments:
\`\`\`html
<!-- This is a single line comment -->

<p>This paragraph is visible on screen.</p>

<!--
  This is a multi-line comment.
  You can hide large chunks of code for debugging!
  <button>Disabled Button</button>
-->
\`\`\`

### Why Use Comments?
1. **Documentation**: Explain what a section of code does for your team or your future self.
2. **Debugging**: Quickly disable broken elements without deleting your hard work.
3. **Section Dividers**: Organize long web pages into logical chapters (e.g. \`<!-- START NAVIGATION -->\`).`,tryItCode:`<div style="font-family:sans-serif; background:#0f172a; padding:20px; border-radius:12px; color:#e2e8f0;">
  <!-- This title shows up: -->
  <h2 style="color:#10b981;">Visible Content</h2>
  <p>The comment below is hidden from the rendered page:</p>
  <!-- <p style="color:red;">YOU CANNOT SEE THIS SECRET MESSAGE!</p> -->
  <p style="font-size:12px; color:#94a3b8;">Inspect page source to see the hidden message!</p>
</div>`,codeType:"html",exercise:{question:"Which of the following is the correct syntax for an HTML comment?",options:["// This is a comment","/* This is a comment */","<!-- This is a comment -->","# This is a comment"],correct:2,hint:"It begins with <!-- and ends with -->."}},{id:"html_colors",category:"HTML Styles & Colors",title:"HTML Colors (HEX, RGB, HSL)",summary:"HTML colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, and HSLA values.",eli5:{story:"When you mix red, green, and blue paint from your art box, you can create every color in the whole universe! On your computer screen, tiny red, green, and blue light bulbs shine together. When all three shine at full power (255), you get bright pure white light!",analogy:"🌈 The 3-Color Spotlight: Mixing Red, Green, and Blue light creates millions of stunning colors.",rules:["RGB values range from 0 (off) to 255 (maximum brightness).","HEX colors start with a hashtag # followed by 6 hex letters/numbers like #00f2fe.","RGBA adds an 'A' for Alpha transparency: rgba(0, 0, 0, 0.5) is half see-through glass!"]},body:"### Color Representation in HTML:\n1. **Color Names**: 140 standard color names are supported (`Red`, `MediumSeaGreen`, `Cyan`, `DarkSlateBlue`).\n2. **RGB**: `rgb(red, green, blue)` where each value is between 0 and 255.\n3. **HEX**: `#RRGGBB` where RR, GG, and BB are hexadecimal values between 00 and FF (e.g. `#ff0000` is pure red).\n4. **RGBA**: `rgba(red, green, blue, alpha)` where alpha is between 0.0 (fully transparent) and 1.0 (fully opaque).\n5. **HSL**: `hsl(hue, saturation, lightness)` where hue is 0-360 degrees on the color wheel.",tryItCode:`<div style="display:flex; flex-direction:column; gap:10px; font-family:sans-serif;">
  <div style="background:rgb(255, 99, 71); color:white; padding:12px; border-radius:8px; font-weight:bold;">
    rgb(255, 99, 71) - Tomato Red
  </div>
  <div style="background:#00f2fe; color:#0f172a; padding:12px; border-radius:8px; font-weight:bold;">
    #00f2fe - Cyber Neon Cyan (HEX)
  </div>
  <div style="background:rgba(16, 185, 129, 0.3); border:1px solid #10b981; color:#10b981; padding:12px; border-radius:8px; font-weight:bold;">
    rgba(16, 185, 129, 0.3) - Glassmorphism Green with 30% Alpha
  </div>
</div>`,codeType:"html",exercise:{question:"What does the 'A' represent in RGBA color syntax?",options:["Algorithm","Alpha (Opacity / Transparency)","Ambient Light","Automatic brightness"],correct:1,hint:"Alpha defines how transparent or see-through the color is."}},{id:"html_favicon",category:"HTML Head & Metadata",title:"HTML Favicon",summary:"A favicon is a small image displayed next to the page title in the browser tab, in bookmarks, and in search shortcuts.",eli5:{story:"Look at the tabs at the top of your web browser right now! Each tab has a tiny picture logo next to the title — YouTube has a red play button, Google has a multi-colored G. That tiny picture is called a Favicon (Favorite Icon)!",analogy:"🏷️ The Tab Flag: A favicon is like the tiny mascot flag hoisted on your browser tab.",rules:["Favicons are placed inside the <head> element.","Use <link rel='icon' type='image/x-icon' href='favicon.ico'>.","Square images (32x32 or 64x64 pixels) work best."]},body:`### Adding a Favicon to HTML:
To add a favicon to your website, save your favicon image to your web root and add a \`<link>\` tag inside \`<head>\`:
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>ByteVerse Academy</title>
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
</head>
<body>
  <h1>Welcome!</h1>
</body>
</html>
\`\`\`

### Modern Formats Supported:
- \`.ico\`: Supported by all historical browsers.
- \`.png\`: Excellent for high-resolution retina screens.
- \`.svg\`: Vector favicons that adapt automatically to dark mode / light mode!`,tryItCode:`<div style="background:#0f172a; padding:20px; border-radius:12px; border:1px solid #334155; font-family:sans-serif;">
  <div style="background:#1e293b; padding:10px 16px; border-radius:8px; display:inline-flex; items-center; gap:8px; align-items:center;">
    <span style="font-size:18px;">🚀</span>
    <span style="color:#fff; font-size:13px; font-weight:bold;">ByteVerse - Coding Academy</span>
    <span style="color:#64748b; font-size:12px; margin-left:12px;">&times;</span>
  </div>
  <p style="color:#94a3b8; font-size:12px; margin-top:12px;">The rocket emoji above represents how your favicon appears on the browser tab!</p>
</div>`,codeType:"html",exercise:{question:"Which HTML tag and rel attribute is used to link a favicon to a web page?",options:['<meta rel="favicon">','<link rel="icon">','<img rel="tabicon">','<icon src="...">'],correct:1,hint:'It is <link rel="icon" ...>.'}},{id:"html_iframes",category:"HTML Advanced Layout",title:"HTML Iframes",summary:"An HTML iframe is used to display a web page within a web page (inline frame).",eli5:{story:"Imagine your bedroom has a magical picture frame on the wall that shows a live video of Disneyland or your favorite video game in real-time. An <iframe> is a magical window cut into your website that peeks into another website completely!",analogy:"🪟 The Magic Window: <iframe> embeds maps, YouTube videos, or sandboxes directly onto your page.",rules:["<iframe src='URL'> defines the page to show inside the frame.","Always specify width and height in pixels or percentages.","Use title='...' for accessibility and screen readers."]},body:'### Syntax of HTML Iframes:\n```html\n<iframe src="https://example.com" width="600" height="400" title="Example Frame">\n</iframe>\n```\n\n### Key Attributes:\n- `src`: The address of the document to embed in the iframe.\n- `title`: Essential for accessibility (describes iframe content).\n- `loading="lazy"`: Defers loading until the iframe is near the viewport (speeds up page load).\n- `allowfullscreen`: Allows the iframe to open in fullscreen mode (essential for videos).\n- `sandbox`: Restricts scripts and forms inside the frame for security.',tryItCode:`<div style="background:#0f172a; padding:16px; border-radius:12px; border:1px solid #334155; text-align:center;">
  <h4 style="color:#38bdf8; margin:0 0 12px 0;">Embedded Wikipedia Iframe</h4>
  <iframe 
    src="https://en.wikipedia.org/wiki/HTML" 
    width="100%" 
    height="220" 
    style="border:1px solid #475569; border-radius:8px; background:#fff;"
    title="Wikipedia HTML Article"
  ></iframe>
</div>`,codeType:"html",exercise:{question:"Which attribute on an <iframe> defines the web address of the embedded document?",options:["href","src","link","target"],correct:1,hint:"Just like an <img> tag, it uses src."}},{id:"html_filepaths",category:"HTML Basics",title:"HTML File Paths",summary:"A file path describes the location of a file in a website's folder structure.",eli5:{story:"If you want to tell a friend where your favorite toy is, you might say 'Look in my closet, top shelf, inside the red box!' A file path gives the browser step-by-step directions through computer folders to find pictures, stylesheets, and sounds.",analogy:"🗺️ The Treasure Map: A file path guides the browser to the exact folder where the treasure is kept.",rules:["picture.jpg means the file is in the exact same folder.","images/picture.jpg means look inside the images folder.","../picture.jpg means go UP one folder level first."]},body:'### Types of File Paths:\n1. **Absolute File Paths**: A full URL to an internet resource:\n   `<img src="https://www.w3schools.com/images/picture.jpg">`\n2. **Relative File Paths**: Points to a file relative to the current page:\n   - `<img src="picture.jpg">`: File is in the same folder as current page.\n   - `<img src="images/picture.jpg">`: File is in the `images` folder inside current folder.\n   - `<img src="/images/picture.jpg">`: File is in the `images` folder at the root of the domain.\n   - `<img src="../picture.jpg">`: File is in the folder one level up from current folder.',tryItCode:`<div style="background:#0f172a; padding:20px; border-radius:12px; font-family:sans-serif; color:#e2e8f0;">
  <h4 style="color:#10b981; margin-top:0;">File Path Simulator:</h4>
  <ul style="line-height:1.8; font-family:monospace; font-size:13px;">
    <li><span style="color:#38bdf8;">./index.html</span> - Current directory</li>
    <li><span style="color:#f59e0b;">./assets/logo.png</span> - Subfolder path</li>
    <li><span style="color:#ec4899;">../database/schema.sql</span> - One folder up (parent)</li>
  </ul>
</div>`,codeType:"html",exercise:{question:'What does "../" indicate at the start of a relative file path in HTML?',options:["Search Google for the file","Move up one folder level from current location","Move down into a hidden folder","Restart the web browser"],correct:1,hint:"Two dots and a slash (../) navigates up to the parent directory."}},{id:"html_head",category:"HTML Head & Metadata",title:"HTML Head & Metadata",summary:"The HTML <head> element is a container for metadata (data about data) and is placed between the <html> tag and the <body> tag.",eli5:{story:"Before an astronaut launches into space, the mission control computers need to know the flight coordinates, the language to speak, and the screen size of the spacecraft. The <head> tag is the mission control center of your website!",analogy:"🧠 The Website Brain: <head> holds secret instructions, fonts, and stylesheets that tell the body how to look.",rules:["<head> comes before <body> and is never drawn on the visible page.","<meta charset='utf-8'> lets you write in every language and emoji on Earth.","<meta name='viewport' ...> makes the page look gorgeous on mobile phones."]},body:'### Key Elements Inside `<head>`:\n- `<title>`: Defines the document title shown in browser tab and search results.\n- `<style>`: Used to define internal CSS styling rules for a single document.\n- `<link>`: Links external resources like CSS stylesheets or favicons.\n- `<meta>`: Used to specify character set, page description, keywords, author, and viewport settings.\n- `<script>`: Embeds or links client-side JavaScript.\n- `<base>`: Specifies the base URL/target for all relative URLs in a page.\n\n### The Critical Mobile Viewport Tag:\n```html\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n```\nThis gives the browser instructions on how to control the page\'s dimensions and scaling on smartphones.',tryItCode:`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="description" content="ByteVerse Cyber Academy">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mission Control</title>
</head>
<body style="font-family:sans-serif; background:#0f172a; color:#fff; padding:20px;">
  <h3>Metadata successfully configured!</h3>
  <p>The viewport and character encoding are active.</p>
</body>
</html>`,codeType:"html",exercise:{question:"Which meta tag ensures that a web page scales properly across mobile smartphones and tablets?",options:['<meta name="screen-fix">','<meta name="viewport" content="width=device-width, initial-scale=1.0">','<meta name="mobile-friendly" content="true">','<meta name="resolution" content="1080p">'],correct:1,hint:"It configures the viewport width to match device-width."}},{id:"html_computercode",category:"HTML Text Formatting",title:"HTML Computer Code Elements",summary:"HTML contains several elements for defining user input and computer code.",eli5:{story:"When you read a computer manual, you notice that code snippets look different than regular storybooks. They use a special monospaced font where every letter is the exact same width! HTML has tags like <code> and <kbd> to show code on the screen.",analogy:"💻 Typewriter Letters: <code> gives words that vintage programmer monospace aesthetic.",rules:["<code> marks computer code or variables.","<kbd> marks keyboard keys to press like Ctrl+C.","<pre> preserves all spaces, tabs, and line breaks exactly as typed."]},body:"### Code Elements:\n- `<code>`: Defines a piece of computer code. (Does not preserve whitespace; pair with `<pre>`).\n- `<kbd>`: Defines keyboard input (e.g. `<kbd>Ctrl</kbd> + <kbd>S</kbd>`).\n- `<samp>`: Defines sample output from a computer program.\n- `<var>`: Defines a variable in programming or in a mathematical expression.\n- `<pre>`: Defines preformatted text, preserving indents and line breaks.",tryItCode:`<div style="background:#0f172a; padding:20px; border-radius:12px; color:#e2e8f0; font-family:sans-serif;">
  <p>Press <kbd style="background:#1e293b; padding:2px 6px; border-radius:4px; border:1px solid #475569;">Ctrl</kbd> + <kbd style="background:#1e293b; padding:2px 6px; border-radius:4px; border:1px solid #475569;">C</kbd> to copy.</p>
  <pre style="background:#020617; padding:12px; border-radius:8px; border:1px solid #1e293b; color:#38bdf8; font-family:monospace;">
function helloWorld() {
    console.log("ByteVerse Online");
}
  </pre>
</div>`,codeType:"html",exercise:{question:"Which HTML element preserves spaces and line breaks exactly as they are written in the source code?",options:["<code>","<pre>","<samp>","<var>"],correct:1,hint:"It stands for pre-formatted text: <pre>."}},{id:"html_entities",category:"HTML Text Formatting",title:"HTML Entities & Symbols",summary:"Reserved characters in HTML must be replaced with character entities so the browser does not confuse them with tags.",eli5:{story:"If you type a less-than sign < on your webpage, the browser thinks 'Oh boy, they are starting a new HTML tag!' To show a real < sign without confusing the computer, you use a special secret code word: &lt; (which stands for Less Than)!",analogy:"🔑 The Secret Passcode: Entities turn reserved keyboard symbols into harmless text.",rules:["&lt; displays a < less than sign.","&gt; displays a > greater than sign.","&copy; displays the official copyright © symbol."]},body:'### Common HTML Entities:\n| Result | Description | Entity Name | Entity Number |\n| :--- | :--- | :--- | :--- |\n| | non-breaking space | `&nbsp;` | `&#160;` |\n| < | less than | `&lt;` | `&#60;` |\n| > | greater than | `&gt;` | `&#62;` |\n| & | ampersand | `&amp;` | `&#38;` |\n| " | double quotation mark | `&quot;` | `&#34;` |\n| © | copyright | `&copy;` | `&#169;` |\n| € | euro | `&euro;` | `&#8364;` |\n| ♥ | black heart suit | `&hearts;` | `&#9829;` |',tryItCode:`<div style="background:#0f172a; padding:20px; border-radius:12px; color:#e2e8f0; font-family:sans-serif;">
  <h4 style="color:#38bdf8; margin-top:0;">HTML Entities in Action:</h4>
  <p>To print &lt;div&gt; in HTML, write: <code>&amp;lt;div&amp;gt;</code></p>
  <p>Price: 99 &euro; &bull; Made with &hearts; by Affan Sayed &copy; 2026</p>
</div>`,codeType:"html",exercise:{question:"Which entity name is used to display the copyright symbol (©) in HTML?",options:["&copy;","&copyright;","&cr;","&c;"],correct:0,hint:"It is written as &copy;."}},{id:"html_canvas",category:"HTML5 Graphics & APIs",title:"HTML5 Canvas Graphics",summary:"The HTML <canvas> element is used to draw graphics on the fly via JavaScript.",eli5:{story:"Imagine a blank canvas on an easel waiting for an artist. The <canvas> tag gives the web browser a blank white rectangle. Then, your JavaScript code acts like an ultra-fast robot paintbrush that paints rectangles, circles, stars, and video game spaceships at 60 frames per second!",analogy:"🎨 The Digital Sketchpad: Canvas allows live animations, charts, and arcade mini-games.",rules:["<canvas id='myCanvas' width='400' height='200'> creates the drawing board.","JavaScript uses getContext('2d') to grab the paintbrush.","ctx.fillRect(x, y, w, h) draws colored rectangles."]},body:'### Basic Canvas Drawing with JavaScript:\n```html\n<canvas id="myCanvas" width="200" height="100" style="border:1px solid #d3d3d3;"></canvas>\n\n<script>\n  const canvas = document.getElementById("myCanvas");\n  const ctx = canvas.getContext("2d");\n  ctx.fillStyle = "#00f2fe";\n  ctx.fillRect(10, 10, 150, 80);\n<\/script>\n```\n\n### Common Canvas 2D Methods:\n- `ctx.fillRect(x, y, width, height)`: Draws a filled rectangle.\n- `ctx.arc(x, y, radius, startAngle, endAngle)`: Creates a circular arc or full circle.\n- `ctx.beginPath()` / `ctx.stroke()`: Draws custom multi-point lines.\n- `ctx.drawImage(img, x, y)`: Draws sprites and pictures onto the canvas.',tryItCode:`<div style="text-align:center; background:#0f172a; padding:16px; border-radius:12px;">
  <canvas id="demoCanvas" width="300" height="150" style="background:#020617; border-radius:8px; border:1px solid #334155;"></canvas>
  <script>
    const c = document.getElementById('demoCanvas');
    if (c) {
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#10b981';
      ctx.fillRect(20, 20, 80, 80);
      ctx.fillStyle = '#00f2fe';
      ctx.beginPath();
      ctx.arc(190, 60, 40, 0, 2 * Math.PI);
      ctx.fill();
    }
  <\/script>
  <p style="color:#94a3b8; font-size:12px; margin-top:8px;">Green square and blue circle drawn directly with Canvas 2D API!</p>
</div>`,codeType:"html",exercise:{question:"Which JavaScript method is called on a canvas element to obtain the 2D drawing rendering context?",options:["canvas.get2D()","canvas.getContext('2d')","canvas.paint()","canvas.createBrush()"],correct:1,hint:"It is canvas.getContext('2d')."}},{id:"html_webstorage",category:"HTML5 Graphics & APIs",title:"HTML5 Web Storage (localStorage)",summary:"With HTML5 Web Storage, web applications can store data locally within the user's browser without expiring.",eli5:{story:"When you turn off your video game console, you want your high score and saved games to still be there when you turn it back on tomorrow. Before HTML5, websites had to use tiny cookies. With HTML5 Web Storage, your browser has a personal safe that holds scores and settings forever!",analogy:"💾 The Browser Memory Card: localStorage remembers your game progress even after you restart your device.",rules:["localStorage stores data with no expiration date.","sessionStorage only stores data until the browser tab is closed.","localStorage.setItem('key', 'value') saves data, and getItem('key') loads it back."]},body:`### LocalStorage vs SessionStorage:
- \`window.localStorage\`: Stores data with no expiration date. The data persists even when the browser is closed and reopened.
- \`window.sessionStorage\`: Stores data for one session (data is lost when the browser tab is closed).

### Methods:
\`\`\`javascript
// Save Data
localStorage.setItem("player_name", "Affan");

// Read Data
const name = localStorage.getItem("player_name");

// Remove Specific Item
localStorage.removeItem("player_name");

// Clear All Saved Data
localStorage.clear();
\`\`\``,tryItCode:`<div style="background:#0f172a; padding:20px; border-radius:12px; font-family:sans-serif; color:#e2e8f0; text-align:center;">
  <h4 style="color:#00f2fe; margin-top:0;">HTML5 Web Storage Tester</h4>
  <button onclick="localStorage.setItem('bv_test', 'Player 1 Ready'); alert('Saved to localStorage: ' + localStorage.getItem('bv_test'));" style="background:#10b981; color:#0f172a; font-weight:bold; padding:8px 16px; border-radius:8px; border:none; cursor:pointer;">
    Save &amp; Read from localStorage
  </button>
</div>`,codeType:"html",exercise:{question:"Which Web Storage object keeps stored data indefinitely even after closing and reopening the browser?",options:["sessionStorage","localStorage","tempStorage","cacheStorage"],correct:1,hint:"It stores data locally forever: localStorage."}}],zm=[{id:"css_home",category:"CSS Tutorial",title:"CSS HOME",summary:"CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.",eli5:{story:"Imagine you bought a plain gray toy robot made of plastic. That plastic body is HTML. Now, you open your box of paints and stickers! You paint the robot shiny neon blue, give it glowing sunglasses, and make its rocket boots shine. That magic paint box is CSS!",analogy:"🎨 The Paint & Costume Box: HTML is the bare skeleton; CSS is the skin, hair, clothes, shoes, and shiny accessories!",rules:["Color changes how words look (like red or blue paint).","Font-size makes letters as tiny as ants or as giant as dinosaurs.","Background-color paints the wall behind your text."]},body:`This tutorial will teach you CSS from basic to advanced.
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
</div>`,codeType:"html",notes:"CSS variables are fully dynamic: you can change them with JavaScript at runtime to toggle Dark Mode in 1 line of code!",exercise:{question:"What prefix must every CSS variable name start with?",options:["Two hyphens (--)","Dollar sign ($)","At symbol (@)","Hash (#)"],correct:0,hint:"--variable-name"}},{id:"css_backgrounds",category:"CSS Styling & Effects",title:"CSS Backgrounds & Gradients",summary:"CSS background properties are used to define the background effects for elements, including gradients and multi-layer images.",eli5:{story:"Imagine wallpapering your room. You can choose a solid dark neon paint, or hang a poster of a futuristic spaceship, or even spray paint a stunning two-tone sunset where pink blends smoothly into purple. That is what CSS backgrounds and gradients do!",analogy:"🌅 The Sunset Gradient: linear-gradient seamlessly blends colors across any card or button.",rules:["background-color sets a flat color.","background-image: linear-gradient(direction, color1, color2) blends colors.","background-size: cover makes images fill the whole area without stretching out of proportion."]},body:"### Background Properties in CSS:\n- `background-color`: Sets background color.\n- `background-image`: Sets one or more background images or gradients.\n- `background-repeat`: Controls if image repeats (`no-repeat`, `repeat-x`, `repeat-y`).\n- `background-size`: `cover` scales the image to cover the entire container; `contain` scales it to fit completely.\n- `background-position`: Sets the starting position (`center`, `top left`, etc.).\n\n### Linear Gradients:\n```css\n.hero-card {\n  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);\n}\n```",tryItCode:`<div style="background:linear-gradient(135deg, #0f172a 0%, #3b0764 50%, #020617 100%); padding:24px; border-radius:16px; border:1px solid #a855f7; text-align:center; font-family:sans-serif;">
  <h3 style="color:#f472b6; margin:0;">Cyber Gradient Card</h3>
  <p style="color:#cbd5e1; font-size:14px; margin-top:8px;">Rendered with CSS linear-gradient(135deg, ...)</p>
</div>`,codeType:"html",exercise:{question:"Which CSS background-size value scales an image to cover the entire container, clipping edges if necessary?",options:["stretch","contain","cover","fill-all"],correct:2,hint:"It covers the container: cover."}},{id:"css_text_shadows",category:"CSS Styling & Effects",title:"CSS Shadows (Box-Shadow & Text-Shadow)",summary:"CSS shadow effects allow you to add realistic 3D elevation and neon glows to boxes and typography.",eli5:{story:"When you hold your hand over a table with a lamp shining from above, your hand casts a soft dark shadow on the table below. It looks like it is floating in mid-air! In CSS, box-shadow makes cards look like they are floating above the computer screen!",analogy:"💡 The Floating Shadow: box-shadow gives elements depth (elevation) and neon sci-fi glows.",rules:["box-shadow: h-offset v-offset blur spread color;","text-shadow: h-offset v-offset blur color;","Multiple shadows can be layered with commas for neon laser glows!"]},body:`### CSS Box-Shadow Syntax:
\`\`\`css
.card {
  /* horizontal vertical blur spread color */
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
}
\`\`\`

### Neon Cyber Glow Effect:
\`\`\`css
.neon-text {
  color: #00f2fe;
  text-shadow: 0 0 10px #00f2fe, 0 0 20px #00f2fe, 0 0 40px #00f2fe;
}
\`\`\``,tryItCode:`<div style="background:#0f172a; padding:24px; border-radius:16px; text-align:center; font-family:sans-serif;">
  <h2 style="color:#00f2fe; text-shadow:0 0 10px rgba(0,242,254,0.8), 0 0 20px rgba(0,242,254,0.4); margin:0;">
    NEON LASER GLOW
  </h2>
  <button style="margin-top:16px; background:#10b981; color:#0f172a; font-weight:bold; padding:10px 20px; border-radius:10px; border:none; box-shadow:0 0 20px rgba(16,185,129,0.5); cursor:pointer;">
    Glowing Action Button
  </button>
</div>`,codeType:"html",exercise:{question:"Which CSS property is used to add shadows to text letters?",options:["font-shadow","letter-shadow","text-shadow","box-shadow"],correct:2,hint:"It is text-shadow."}},{id:"css_transforms",category:"CSS Advanced",title:"CSS 2D & 3D Transforms",summary:"CSS transforms allow you to translate, rotate, scale, and skew elements in both 2D and 3D space.",eli5:{story:"Remember spinning a pinwheel or scaling a photo with your fingers on an iPad screen? CSS transforms allow you to spin an element like a coin (rotate), make it grow or shrink (scale), or slide it smoothly across the floor (translate) without moving other elements out of place!",analogy:"🔄 The Hologram Projector: transform allows smooth rotating, scaling, and 3D flips.",rules:["transform: rotate(45deg) spins an element.","transform: scale(1.2) magnifies an element by 20%.","transform: translate(x, y) moves an element without affecting document layout flow."]},body:"### Key Transform Methods:\n- `translate(x, y)`: Moves an element from its current position.\n- `rotate(angle)`: Rotates an element clockwise by given degrees (`45deg`, `180deg`).\n- `scale(x, y)`: Increases or decreases the size of an element (`scale(1.1)`).\n- `skew(x-angle, y-angle)`: Skews an element along X and Y axes.\n- `matrix(n,n,n,n,n,n)`: Combines all 2D transform methods into one.",tryItCode:`<div style="background:#0f172a; padding:30px; border-radius:16px; text-align:center; font-family:sans-serif;">
  <div style="display:inline-block; background:linear-gradient(45deg, #00f2fe, #4facfe); color:#0f172a; font-weight:bold; padding:16px 24px; border-radius:12px; transform:rotate(-4deg) scale(1.05); box-shadow:0 10px 20px rgba(0,242,254,0.3);">
    🚀 Transformed Box (-4deg rotation)
  </div>
</div>`,codeType:"html",exercise:{question:"Which transform function is used to spin an element clockwise by 90 degrees?",options:["transform: spin(90);","transform: rotate(90deg);","transform: turn(90);","transform: tilt(90deg);"],correct:1,hint:"It is rotate(...) with 'deg' units."}},{id:"css_glassmorphism",category:"CSS Styling & Effects",title:"CSS Glassmorphism & Backdrop Filters",summary:"Glassmorphism is a modern UI design trend featuring translucent frosted-glass cards with blur filters and glowing borders.",eli5:{story:"Have you ever looked through a frosty window on a cold winter morning? You can see lights and shapes behind the glass, but they are soft and beautifully blurred! In modern web design, backdrop-filter: blur creates that exact futuristic frosted glass effect!",analogy:"🧊 Frosted Glass: Semi-transparent backgrounds with backdrop blur make any UI look like Apple VisionOS or Cyberpunk 2077.",rules:["Set background with semi-transparent RGBA like rgba(255, 255, 255, 0.1).","Apply backdrop-filter: blur(12px).","Add a subtle 1px border with rgba(255, 255, 255, 0.2) for the glass bevel edge."]},body:`### How to Create Modern Glassmorphism:
\`\`\`css
.glass-card {
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}
\`\`\``,tryItCode:`<div style="position:relative; background:url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=600') center/cover; padding:30px; border-radius:16px; font-family:sans-serif;">
  <div style="background:rgba(15, 23, 42, 0.65); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,0.2); padding:20px; border-radius:12px; color:#fff; text-align:center;">
    <h3 style="margin:0; color:#38bdf8;">Frosted Cyber Glass</h3>
    <p style="font-size:13px; color:#e2e8f0; margin-top:6px;">Notice how the circuit background behind is smoothly blurred!</p>
  </div>
</div>`,codeType:"html",exercise:{question:"Which CSS property is responsible for blurring the visual elements behind a translucent container?",options:["filter: blur()","backdrop-filter: blur()","background-blur","glass-blur"],correct:1,hint:"It applies to the backdrop: backdrop-filter."}}],qm=[{id:"js_home",category:"JS Tutorial",title:"JavaScript HOME",summary:"JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web.",eli5:{story:"HTML is the robot's body, and CSS is the robot's shiny paint. But without batteries, the robot just stands frozen! JavaScript is the batteries, the brain, and the muscles. It makes the robot walk, talk, play games, celebrate high scores, and respond when you click its buttons!",analogy:"🧠 Batteries & Brains: JavaScript brings everything to life! When you tap a button, JavaScript makes the magic happen.",rules:["HTML creates the buttons.","CSS makes the buttons pretty and glowing.",'JavaScript listens: "Did someone tap me? Quick, pop up confetti!"']},body:`JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.

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
console.log("🎮 Loaded XP on restart:", savedXP, "| Level:", Math.floor(savedXP / 100));`,codeType:"js",notes:"localStorage can only store strings! To save arrays or objects, convert them first with JSON.stringify(myObject).",exercise:{question:"Which method saves a key/value pair into browser localStorage?",options:["localStorage.save()","localStorage.setItem()","localStorage.put()","localStorage.store()"],correct:1,hint:"setItem(key, value)"}},{id:"js_strings_methods",category:"JS Strings & Numbers",title:"JS String Methods & Template Literals",summary:"JavaScript strings have built-in methods for searching, slicing, replacing, trimming, and formatting text.",eli5:{story:"Imagine you have a long sentence printed on a strip of paper. You have safety scissors to snip words out (slice), a magic eraser to swap words (replace), and an amplifier that shouts it in all capital letters (toUpperCase). String methods are those magical editing tools!",analogy:"✂️ The Word Editor: Methods let you chop, capitalize, or search through text effortlessly.",rules:["str.length counts the number of characters in the string.","str.includes('cat') checks if 'cat' is inside the text.","Template literals with backticks `Hello ${name}` let you inject variables cleanly."]},body:'### Key String Methods:\n- `str.length`: Returns length of string.\n- `str.slice(start, end)`: Extracts a part of a string and returns it.\n- `str.replace(old, new)`: Replaces a specified value with another value.\n- `str.toUpperCase()` / `toLowerCase()`: Converts case.\n- `str.trim()`: Removes whitespace from both ends of a string.\n- `str.split(",")`: Splits a string into an array of substrings.',tryItCode:`const hero = "  Affan Sayed, Cyber Architect  ";
console.log("Cleaned:", hero.trim());
console.log("Uppercase:", hero.trim().toUpperCase());
console.log("Split into parts:", hero.trim().split(", "));
console.log(\`Formatted with Template Literal: Welcome [\${hero.trim()}] to ByteVerse!\`);`,codeType:"js",exercise:{question:"Which string method removes whitespace from both the beginning and the end of a string?",options:["str.strip()","str.trim()","str.clean()","str.cut()"],correct:1,hint:"It is called trim()."}},{id:"js_array_iteration",category:"JS Arrays",title:"JS Array Iteration & Reduce",summary:"Array iteration methods operate on every array item, enabling functional data processing like map, filter, and reduce.",eli5:{story:"Imagine a conveyor belt in a candy factory. Every box of candy passes through. Map doubles the candy in each box. Filter throws away the empty boxes. And Reduce takes all the candy from all the boxes and puts it together into one giant celebration cake!",analogy:"🏭 The Factory Pipeline: Array methods transform, filter, and calculate totals in a single clean chain.",rules:["forEach runs a function on every item.","reduce((acc, curr) => acc + curr, 0) accumulates items into a single total.","find(item => item.id === 5) returns the first matching item."]},body:`### Array Iteration Methods:
\`\`\`javascript
const scores = [10, 20, 30, 40];

// Reduce to total sum
const total = scores.reduce((sum, score) => sum + score, 0);

// Find first score over 25
const topScore = scores.find(s => s > 25);

// Check if any score is 40 (some)
const hasPerfect = scores.some(s => s === 40);
\`\`\``,tryItCode:`const questXP = [100, 250, 400, 150];
const totalXP = questXP.reduce((total, xp) => total + xp, 0);
console.log("Individual Quest XP:", questXP);
console.log("Total Accumulated Player XP:", totalXP);
console.log("Level Milestone Reached:", totalXP >= 500 ? "Level 2 Master!" : "Keep Questing!");`,codeType:"js",exercise:{question:"Which method reduces an entire array to a single value (such as summing all numbers)?",options:["Array.reduce()","Array.total()","Array.summarize()","Array.collapse()"],correct:0,hint:"It is Array.reduce()."}},{id:"js_classes",category:"JS Objects & Classes",title:"JS ES6 Classes & Inheritance",summary:"JavaScript classes are templates for creating objects, encapsulating data with methods and supporting class inheritance.",eli5:{story:"Think of a blueprint for building superhero robots. The blueprint says every robot has a name, a battery level, and can shoot lasers! Once you have the blueprint (a Class), you can press a button and build 100 different robots with their own unique codenames!",analogy:"🤖 The Robot Blueprint: A class is the master plan; 'new Hero()' creates an actual living hero in your game.",rules:["Use class Hero { constructor(name) { this.name = name; } }.","Methods inside a class do not need the 'function' keyword.","Subclasses use 'extends' and call 'super()' to inherit from a parent class."]},body:`### Defining a Class:
\`\`\`javascript
class Player {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.xp = 0;
  }

  gainXP(amount) {
    this.xp += amount;
    return \`\${this.name} gained \${amount} XP! Total: \${this.xp}\`;
  }
}

const player1 = new Player("Affan", "Architect");
console.log(player1.gainXP(250));
\`\`\``,tryItCode:`class CyberHero {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
  activate() {
    return \`🔥 \${this.name} triggers [\${this.power}] special ability!\`;
  }
}

const hero = new CyberHero("Neon Phantom", "Ghost Shift");
console.log(hero.activate());`,codeType:"js",exercise:{question:"Which special method is automatically executed when a new object instance is created with 'new'?",options:["init()","constructor()","create()","build()"],correct:1,hint:"It constructs the object: constructor()."}},{id:"js_closures",category:"JS Advanced",title:"JS Closures & Lexical Scope",summary:"A closure gives a function access to its outer function's scope even after the outer function has finished executing.",eli5:{story:"Imagine a child going off to summer camp with a secret backpack packed by their parents. Even though the parents are miles away at home, the child can still reach into the backpack and use everything inside! A closure is an inner function carrying its backpack of outer variables wherever it travels!",analogy:"🎒 The Secret Backpack: A closure remembers and accesses variables from where it was born.",rules:["Functions inside other functions have access to the outer function's variables.","The variables are preserved in memory even after the outer function finishes.","Great for private variables and creating game score counters!"]},body:`### Understanding Closures:
\`\`\`javascript
function createScoreKeeper(initialScore = 0) {
  let score = initialScore; // private variable

  return {
    addPoints: function(points) {
      score += points;
      return score;
    },
    getScore: function() {
      return score;
    }
  };
}

const player1Game = createScoreKeeper(100);
player1Game.addPoints(50); // score is 150
\`\`\``,tryItCode:`function createMultiplier(factor) {
  // The inner function remembers 'factor' via closure!
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double 25:", double(25));
console.log("Triple 25:", triple(25));`,codeType:"js",exercise:{question:"What is a closure in JavaScript?",options:["A syntax error when a function is closed improperly","A function bundled with references to its surrounding lexical state","A way to permanently lock and delete variables","A built-in JSON compression tool"],correct:1,hint:"It bundles a function with its lexical scope."}}],Fm=[{id:"sql_home",category:"SQL Tutorial",title:"SQL HOME",summary:"SQL is a standard language for storing, manipulating and retrieving data in databases.",eli5:{story:'Imagine the biggest magical library in the universe, with 10 million storybooks! If you had to walk shelf by shelf looking for a book about dragons, you would be searching for 100 years. But in this library, there is a super-speedy robot librarian named SQL. You say: "Librarian! Give me all books about Dragons!" and in 0.001 seconds, the books land right in your hands!',analogy:"📚 The Super Librarian: You give SQL a question (a query), and it instantly pulls the exact cards from the filing cabinet.",rules:['SELECT means "Pick these specific columns/cards".','FROM means "Look inside this specific cabinet/table".','WHERE means "Only take cards that match this rule (like color = blue)".']},body:`Our SQL tutorial will teach you how to use SQL in MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems.

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
ORDER BY NumberOfCustomers DESC;`,codeType:"sql",tips:"Remember the SQL execution order: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY!",exercise:{question:"Why does SQL have a HAVING clause instead of just using WHERE?",options:["HAVING is faster","WHERE cannot be used with aggregate functions","HAVING works with strings only","WHERE is deprecated"],correct:1,hint:"WHERE filters individual rows; HAVING filters grouped aggregate results."}},{id:"sql_distinct",category:"SQL Basic Queries",title:"SQL SELECT DISTINCT",summary:"The SELECT DISTINCT statement is used to return only distinct (different) values, removing all duplicate records from the query result.",eli5:{story:"If you ask a classroom of 30 kids what country their parents were born in, 10 might say Canada, 10 might say India, and 10 might say Japan. If you just want a list of unique countries without hearing 'Canada' ten times in a row, you ask for DISTINCT answers!",analogy:"✂️ The Duplicate Remover: DISTINCT filters out duplicates so you only see unique values once.",rules:["SELECT DISTINCT column FROM table; eliminates duplicate values.","COUNT(DISTINCT column) counts unique items.","Works across multiple columns to return unique row combinations."]},body:"### Syntax:\n```sql\nSELECT DISTINCT Country FROM Customers;\nSELECT COUNT(DISTINCT Country) FROM Customers;\n```",tryItCode:"SELECT DISTINCT Country FROM Customers ORDER BY Country ASC;",codeType:"sql",exercise:{question:"Which SQL keyword eliminates duplicate rows from a query result set?",options:["DIFFERENT","UNIQUE","DISTINCT","ISOLATE"],correct:2,hint:"It is SELECT DISTINCT."}},{id:"sql_like_wildcards",category:"SQL Filtering & Sorting",title:"SQL LIKE Operator & Wildcards",summary:"The LIKE operator is used in a WHERE clause to search for a specified pattern in a column using % and _ wildcards.",eli5:{story:"Imagine searching your music playlist for songs that start with 'Cyber'. You don't know the full name, just the start! In SQL, the percent sign % is like a magic wild card in uno that matches any number of unknown letters!",analogy:"🃏 The Wildcard Joker: % matches zero, one, or 100 characters; _ matches exactly one single character.",rules:["WHERE name LIKE 'A%' finds names starting with 'A'.","WHERE name LIKE '%son' finds names ending with 'son'.","WHERE name LIKE '%or%' finds names having 'or' anywhere in the word."]},body:`### Common Wildcard Patterns:
- \`'a%'\`: Finds values that start with "a"
- \`'%a'\`: Finds values that end with "a"
- \`'%or%'\`: Finds values that have "or" in any position
- \`'_r%'\`: Finds values that have "r" in the second position
- \`'a_%'\`: Starts with "a" and is at least 2 characters long`,tryItCode:`SELECT CustomerName, City, Country 
FROM Customers 
WHERE City LIKE 'Lon%';`,codeType:"sql",exercise:{question:"Which wildcard in SQL represents zero, one, or multiple unknown characters?",options:["Question mark (?)","Asterisk (*)","Percent sign (%)","Underscore (_)"],correct:2,hint:"In SQL, the percent sign (%) matches multiple characters."}},{id:"sql_left_right_join",category:"SQL Joins",title:"SQL LEFT & RIGHT JOINs",summary:"Outer joins (LEFT JOIN, RIGHT JOIN) return all rows from one table, even if there are no matching rows in the other table.",eli5:{story:"Imagine every student in a class has a lunchbox, but some forgot theirs at home today! If you do an INNER JOIN, you only count kids who have a lunchbox. But with a LEFT JOIN, every single student stays on the list, even if their lunchbox column is blank (NULL)!",analogy:"📋 The Inclusive Roll Call: LEFT JOIN keeps every single row from the left table, filling blanks with NULLs.",rules:["LEFT JOIN returns all rows from the Left table + matched right rows.","If no match exists on the right side, columns contain NULL.","RIGHT JOIN returns all rows from the Right table."]},body:"### Syntax of LEFT JOIN:\n```sql\nSELECT Customers.CustomerName, Orders.OrderID\nFROM Customers\nLEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID\nORDER BY Customers.CustomerName;\n```",tryItCode:`SELECT Customers.CustomerName, Orders.OrderID, Orders.OrderDate
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
WHERE Orders.OrderID IS NULL;`,codeType:"sql",exercise:{question:"What value fills the right-hand columns in a LEFT JOIN when there is no matching record?",options:["0","EMPTY","NULL","FALSE"],correct:2,hint:"Unmatched fields return NULL."}},{id:"sql_constraints",category:"SQL Database Management (DDL)",title:"SQL Constraints & Keys",summary:"SQL constraints are used to specify rules for the data in a table, ensuring accuracy and reliability (PRIMARY KEY, FOREIGN KEY, NOT NULL).",eli5:{story:"Imagine a passport office. The computer has strict rules: Every citizen must have a Social Security Number that is 100% unique (PRIMARY KEY). You cannot leave the birthdate blank (NOT NULL). And children must be linked to a real registered parent (FOREIGN KEY)! Constraints are those safety rules for databases.",analogy:"🛡️ The Bouncer at the Door: Constraints reject invalid or duplicate data before it can corrupt the database.",rules:["PRIMARY KEY uniquely identifies each row (cannot be NULL).","FOREIGN KEY prevents actions that would destroy links between tables.","NOT NULL ensures a column cannot store blank/empty values."]},body:"### Common SQL Constraints:\n- `NOT NULL`: Column cannot have NULL value.\n- `UNIQUE`: All values in column must be distinct.\n- `PRIMARY KEY`: Unique identifier (`NOT NULL` + `UNIQUE`).\n- `FOREIGN KEY`: Uniquely identifies a row in another table (referential integrity).\n- `CHECK`: Ensures values in a column satisfy a boolean condition (e.g. `age >= 18`).\n- `DEFAULT`: Sets a default fallback value if none is specified.",tryItCode:`CREATE TABLE Players (
    PlayerID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL UNIQUE,
    XP INT DEFAULT 0,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,codeType:"sql",exercise:{question:"Which constraint uniquely identifies each record in a database table and cannot contain NULL values?",options:["FOREIGN KEY","CHECK","PRIMARY KEY","DEFAULT"],correct:2,hint:"It is the PRIMARY KEY."}}],Wm=[{id:"py_home",category:"Python Tutorial",title:"Python HOME",summary:"Python is a popular programming language. Python can be used on a server to create web applications.",eli5:{story:"Imagine a talking robot pet who understands plain English! Other languages make you type messy punctuation like { ; && || }. But Python is so polite and friendly that reading Python code feels like reading a bedtime story! Python is used to build real video games, steer rockets, and teach AI robots how to draw pictures.",analogy:`🐍 The Friendly Robot Pet: Tell it "print('Hello!')" and it immediately repeats it with a smile!`,rules:["Python reads like simple everyday English.","No confusing semicolons (;) needed at the end of lines.","Super easy for beginners to start writing code in 5 minutes!"]},body:`Python is an easy to learn, powerful programming language.
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
print(player1.level_up())`,codeType:"python",notes:"The self parameter is a reference to the current instance of the class, and is used to access variables that belong to the class.",exercise:{question:"Which method in a Python class is executed automatically when a new object is initialized?",options:["__start__()","__init__()","__create__()","__new__()"],correct:1,hint:"__init__(self)"}},{id:"py_list_comprehension",category:"Python Lists & Loops",title:"Python List Comprehensions",summary:"List comprehension offers a shorter, more readable syntax when you want to create a new list based on the values of an existing list.",eli5:{story:"Suppose you want to pick out all even numbers from 0 to 10. Normally you write a big for loop with 4 lines of code. But with List Comprehension, Python lets you say: 'Give me x for every x in range(10) if x is even' all in a single super-fast line!",analogy:"⚡ One-Liner Magic: List comprehensions replace clunky for-loops and append() calls with one elegant sentence.",rules:["Syntax: [expression for item in iterable if condition == True].","Much faster execution than standard append loops.","Can also be used for dictionary comprehensions {k: v for ...}!"]},body:`### Syntax & Examples:
\`\`\`python
# Traditional Loop:
numbers = [1, 2, 3, 4, 5]
squares = []
for n in numbers:
    squares.append(n ** 2)

# List Comprehension:
squares = [n ** 2 for n in numbers]
evens = [n for n in numbers if n % 2 == 0]
\`\`\``,tryItCode:`heroes = ["cyber ninja", "neon phantom", "byte wizard", "code titan"]
# Title-case all hero names in 1 line:
uppercase_heroes = [h.title() for h in heroes if "cyber" not in h]
print("Original:", heroes)
print("Processed List Comprehension:", uppercase_heroes)`,codeType:"python",exercise:{question:"What is the output of `[x * 2 for x in [1, 2, 3]]`?",options:["[1, 2, 3, 1, 2, 3]","[2, 4, 6]","[2, 2, 2]","SyntaxError"],correct:1,hint:"Each number (1, 2, 3) is multiplied by 2: [2, 4, 6]."}},{id:"py_lambda",category:"Python Functions",title:"Python Lambda Functions",summary:"A lambda function is a small anonymous function that can take any number of arguments, but can only have one expression.",eli5:{story:"Sometimes you just need a quick helper tool for 2 seconds to double a number or sort high scores, and you don't want to write a full def function() with names and returns. A lambda is a quick throwaway helper you write right on the spot!",analogy:"🛵 The Quick Scooter: A lambda is a tiny inline function without a name for quick calculations.",rules:["lambda arguments : expression","Can have any number of arguments, but only ONE expression.","Commonly used inside sorted(), filter(), and map()."]},body:`### Syntax & Examples:
\`\`\`python
# Simple double function
double = lambda x: x * 2
print(double(5)) # 10

# Multi-argument lambda
multiply = lambda a, b: a * b
print(multiply(4, 5)) # 20

# Sorting players by high score with lambda key:
players = [("Affan", 950), ("Sarah", 1200), ("Leo", 600)]
players.sort(key=lambda p: p[1], reverse=True)
\`\`\``,tryItCode:`players = [
  {"name": "Affan", "xp": 1200},
  {"name": "Elena", "xp": 1950},
  {"name": "Kai", "xp": 800}
]
# Sort by XP descending using lambda key:
leaderboard = sorted(players, key=lambda p: p["xp"], reverse=True)
for rank, p in enumerate(leaderboard, 1):
    print(f"#{rank} {p['name']}: {p['xp']} XP")`,codeType:"python",exercise:{question:"Which keyword creates small anonymous inline functions in Python?",options:["def","anon","lambda","inline"],correct:2,hint:"It is lambda."}},{id:"py_try_except",category:"Python Advanced",title:"Python Exception Handling (try...except)",summary:"The try block lets you test a block of code for errors, the except block handles the error, and finally executes code regardless of the result.",eli5:{story:"When a trapeze artist flies through the air at the circus, there is always a big safety net underneath. If they slip, the net catches them so nobody gets hurt! In Python, try...except is that safety net so your program doesn't crash if something goes wrong!",analogy:"🎪 The Circus Safety Net: try tests dangerous actions; except catches errors and keeps the game running smoothly.",rules:["try: run the risky code.","except ErrorType: catch and handle the error gracefully.","finally: code that always runs at the end (like closing database files)."]},body:`### Syntax:
\`\`\`python
try:
    number = int(input("Enter a number: "))
    result = 100 / number
    print(result)
except ZeroDivisionError:
    print("Cannot divide by zero!")
except ValueError:
    print("Invalid input, please enter digits only!")
except Exception as e:
    print(f"Unexpected error: {e}")
finally:
    print("Execution finished cleanly.")
\`\`\``,tryItCode:`def safe_division(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "⚠️ Error: Division by zero is undefined!"

print("10 / 2 =", safe_division(10, 2))
print("10 / 0 =", safe_division(10, 0))`,codeType:"python",exercise:{question:"Which block in Python always executes regardless of whether an exception was raised or not?",options:["catch","finally","always","guarantee"],correct:1,hint:"It is finally."}},{id:"py_file_handling",category:"Python Advanced",title:"Python File Handling & with open()",summary:"File handling is an important part of any application. Python has several functions for creating, reading, updating, and deleting files.",eli5:{story:"Imagine opening a notebook, writing your secret diary entry, and then closing the notebook and putting it in your desk drawer. In Python, you can open files on your computer to read stories or save game logs, and the with statement guarantees the book is safely closed when you are done!",analogy:"📖 The Notebook: open('save.txt', 'w') writes fresh text; 'r' reads the text back.",rules:["'r' opens for reading (default).","'w' opens for writing (overwrites existing content).","'a' opens for appending to the end of the file.","Always use 'with open(...) as f:' so files close automatically!"]},body:`### Modern Context Manager Syntax:
\`\`\`python
# Writing to a file
with open("game_log.txt", "w") as f:
    f.write("Affan scored 2500 XP in Boss Raid!\\n")

# Reading from a file
with open("game_log.txt", "r") as f:
    content = f.read()
    print(content)
\`\`\``,tryItCode:`# Simulated file read/write logic
file_buffer = {}

def write_file(filename, text):
    file_buffer[filename] = text
    return f"💾 Successfully wrote {len(text)} bytes to '{filename}'"

def read_file(filename):
    return file_buffer.get(filename, "File not found")

print(write_file("scores.txt", "Player 1: 500 XP\\nPlayer 2: 950 XP"))
print("Contents of scores.txt:\\n" + read_file("scores.txt"))`,codeType:"python",exercise:{question:"Which statement in Python ensures that a file stream is closed automatically even if an exception occurs?",options:["using open()","with open()","auto open()","safe_open()"],correct:1,hint:"It is the 'with' statement context manager."}}],$m=[{id:"php_home",category:"PHP Tutorial",title:"PHP HOME",summary:"PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.",eli5:{story:"Imagine walking into a bakery restaurant! You sit at a table in the front (the browser). You see a menu and order a chocolate birthday cake with custom candles. The secret kitchen in the back is PHP! The chef bakes the fresh cake according to your order, puts it on a plate, and sends it out to your table! You never touch the kitchen oven; PHP does all the cooking safely behind closed doors.",analogy:"👨‍🍳 The Restaurant Kitchen Chef: PHP works on the server to cook up dynamic HTML web pages before sending them to your screen.",rules:["PHP code runs on the server computer, NOT in the browser.","Starts with <?php and ends with ?>.","Variables always start with a dollar sign $ (like $money or $order)."]},body:`PHP is an acronym for "PHP: Hypertext Preprocessor".
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
?>`,codeType:"php",notes:"OOP makes large codebases modular, reusable, testable, and clean.",exercise:{question:"Which special method in a PHP class is called automatically when an object is instantiated?",options:["__init__()","__construct()","__start()","__create()"],correct:1,hint:"Two underscores: __construct()"}},{id:"php_superglobals",category:"PHP Superglobals & Forms",title:"PHP Superglobals ($_SERVER, $_POST, $_GET)",summary:"Superglobals are built-in variables that are always available in all scopes throughout a PHP script without needing global declarations.",eli5:{story:"Imagine a radio walkie-talkie channel that broadcasts to every room in the entire school at once! Superglobals in PHP are magic variables that are visible everywhere — inside functions, classes, and scripts — carrying incoming messages from web visitors!",analogy:"📢 The Public Broadcast: Superglobals hold browser information, form submissions, and cookie data automatically.",rules:["$_POST collects form submissions securely.","$_GET collects URL query parameters (like ?id=10).","$_SERVER holds information about headers, paths, and script locations."]},body:'### Common PHP Superglobals:\n- `$GLOBALS`: References all variables available in global scope.\n- `$_SERVER`: Holds server and execution environment information.\n- `$_REQUEST`: Contains `$_GET`, `$_POST`, and `$_COOKIE`.\n- `$_POST`: Collects data after submitting an HTML form with `method="post"`.\n- `$_GET`: Collects data sent in the URL query string.\n- `$_FILES`: Contains uploaded file items.\n- `$_ENV`: Environment variables.\n- `$_COOKIE`: HTTP Cookies.\n- `$_SESSION`: Session variables.',tryItCode:`<?php
// Simulating $_SERVER and $_GET in PHP
$mock_server = [
    'REQUEST_METHOD' => 'POST',
    'SERVER_NAME' => 'byteverse.io',
    'REMOTE_ADDR' => '127.0.0.1'
];

echo "Request Method: " . $mock_server['REQUEST_METHOD'] . "<br>";
echo "Server Host: " . $mock_server['SERVER_NAME'] . "<br>";
echo "Client IP: " . $mock_server['REMOTE_ADDR'];
?>`,codeType:"php",exercise:{question:"Which PHP superglobal contains parameters passed via the URL query string (e.g. ?page=2)?",options:["$_POST","$_URL","$_GET","$_QUERY"],correct:2,hint:"It is $_GET."}},{id:"php_password_hash",category:"PHP Security & Backend",title:"PHP Secure Password Hashing",summary:"Never store plain-text passwords in a database! Modern PHP provides password_hash() and password_verify() with industry-standard Bcrypt/Argon2.",eli5:{story:"If you bake a chocolate cake with flour, sugar, and cocoa, you can never take the baked cake and turn it back into flour and raw cocoa! A cryptographic hash is that one-way baking oven: you can bake a password into a scrambled string, but no hacker can ever un-bake it back into the secret word!",analogy:"🔒 The One-Way Blender: password_hash creates a secure cryptographic hash that cannot be reversed.",rules:["password_hash($pass, PASSWORD_BCRYPT) creates a secure salted hash.","password_verify($input, $hash) checks if the login attempt matches.","Never use outdated md5() or sha1() for passwords!"]},body:`### Creating and Verifying Hashes:
\`\`\`php
// 1. When registering a user:
$password = "CyberHero2026!";
$hashedPassword = password_hash($password, PASSWORD_BCRYPT);

// 2. When logging in:
if (password_verify($userTypedPassword, $hashedPassword)) {
    echo "Login verified!";
} else {
    echo "Incorrect password!";
}
\`\`\``,tryItCode:`<?php
// Password hashing demonstration
$secret = "SuperAffanSecurePass";
$hash = password_hash($secret, PASSWORD_BCRYPT);

echo "Original Password: " . $secret . "<br>";
echo "Bcrypt Hash (60 chars): " . substr($hash, 0, 30) . "...<br>";
echo "Match Check: " . (password_verify($secret, $hash) ? "✅ Valid Match!" : "❌ Invalid");
?>`,codeType:"php",exercise:{question:"Which PHP function is recommended to securely hash passwords?",options:["md5()","sha1()","password_hash()","encrypt()"],correct:2,hint:"It is password_hash()."}}],Bm=[{id:"dj_home",category:"Django Tutorial",title:"Django HOME",summary:"Django is a Python framework that makes it easier to build web applications. Django follows the MVT design pattern.",eli5:{story:"Imagine you want to build a giant theme park like Disneyland! You could build every roller coaster, ticket booth, snack stand, and security gate from zero scratch, or you could hire a world-famous master park team that already has pre-built roller coasters, security gates, and snack machines ready to turn on. Django is that master team for Python!",analogy:"🏰 The Disneyland Master Team: Django gives you login screens, admin dashboards, and database tools right out of the box so you don't have to reinvent the wheel.",rules:["Model: The toy warehouse storage (database).","View: The park worker who grabs toys from the warehouse.","Template: The beautiful display window shown to visitors."]},body:`Django is especially suited for database-driven websites, and it comes with lots of built-in features, like an admin interface, default database (SQLite), and user authentication.

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
    print(f"Staff Permissions: {user['is_staff']} | Active Session: {user['last_login']}")`,codeType:"python",notes:"Django never stores raw passwords in the database; it uses salted one-way password hashes with thousands of hashing rounds.",exercise:{question:"Which decorator is used to restrict a Django view to authenticated users only?",options:["@authenticated","@login_required","@protect","@auth_only"],correct:1,hint:"@login_required"}}],fi={html:Hm,css:zm,js:qm,mysql:Fm,python:Wm,php:$m,django:Bm},Um={html:[{name:"<!DOCTYPE html>",category:"Structure",syntax:"<!DOCTYPE html>",desc:"Tells browser to parse as modern HTML5 standard."},{name:"<html>",category:"Structure",syntax:'<html lang="en">...</html>',desc:"The root container for all web content."},{name:"<head>",category:"Metadata",syntax:"<head><meta .../><title>...</title></head>",desc:"Document metadata, stylesheets, and fonts."},{name:"<body>",category:"Structure",syntax:"<body>...</body>",desc:"All visible content rendered in the viewport."},{name:"<h1> - <h6>",category:"Typography",syntax:"<h1>Heading 1</h1>",desc:"Six levels of section headings (h1 is primary)."},{name:"<p>",category:"Typography",syntax:"<p>Paragraph text</p>",desc:"Standard block-level paragraph with margin."},{name:"<a>",category:"Links",syntax:'<a href="https://example.com" target="_blank">Link</a>',desc:"Hyperlink to another URL or anchor."},{name:"<img>",category:"Media",syntax:'<img src="cat.jpg" alt="Description" width="300" />',desc:"Embeds an image; alt attribute required for WCAG."},{name:"<button>",category:"Forms",syntax:'<button type="button">Click Me</button>',desc:"Clickable button element."},{name:"<input>",category:"Forms",syntax:'<input type="text" placeholder="Name" required />',desc:"User input field (text, email, password, etc.)."},{name:"<form>",category:"Forms",syntax:'<form action="/submit" method="POST">...</form>',desc:"Container for form controls submitted together."},{name:"<ul> & <li>",category:"Lists",syntax:"<ul><li>Item 1</li><li>Item 2</li></ul>",desc:"Unordered (bulleted) list."},{name:"<ol> & <li>",category:"Lists",syntax:"<ol><li>First</li><li>Second</li></ol>",desc:"Ordered (numbered) list."},{name:"<div>",category:"Layout",syntax:'<div class="container">...</div>',desc:"Generic block-level division container."},{name:"<span>",category:"Layout",syntax:'<span class="highlight">Text</span>',desc:"Generic inline text container."},{name:"<canvas>",category:"Graphics",syntax:'<canvas id="myCanvas" width="400" height="200"></canvas>',desc:"Raster drawing surface scriptable with JS."},{name:"<audio>",category:"Media",syntax:'<audio controls src="sound.mp3"></audio>',desc:"Native audio player element."},{name:"<video>",category:"Media",syntax:'<video controls width="400" src="movie.mp4"></video>',desc:"Native video player element."},{name:"<header>",category:"Semantic",syntax:"<header><h1>Brand</h1><nav>...</nav></header>",desc:"Introductory container for a page or section."},{name:"<nav>",category:"Semantic",syntax:'<nav><a href="/">Home</a></nav>',desc:"Block of major navigation links."},{name:"<article>",category:"Semantic",syntax:"<article><h2>Post Title</h2><p>...</p></article>",desc:"Self-contained independent composition."},{name:"<section>",category:"Semantic",syntax:"<section><h2>Chapter</h2><p>...</p></section>",desc:"Thematic grouping of content."},{name:"<aside>",category:"Semantic",syntax:"<aside><p>Sidebar info</p></aside>",desc:"Content tangentially related to surrounding content."},{name:"<footer>",category:"Semantic",syntax:"<footer><p>&copy; 2026 ByteVerse</p></footer>",desc:"Footer for its nearest section or root."}],css:[{name:"display: flex",category:"Flexbox",syntax:"display: flex; gap: 1rem;",desc:"Enables 1D flexible layout mode on children."},{name:"justify-content",category:"Flexbox",syntax:"justify-content: center | space-between;",desc:"Aligns items along the main axis."},{name:"align-items",category:"Flexbox",syntax:"align-items: center | flex-start;",desc:"Aligns items along the cross axis."},{name:"display: grid",category:"Grid",syntax:"display: grid; grid-template-columns: repeat(3, 1fr);",desc:"Enables 2D grid layout with rows & columns."},{name:"grid-gap / gap",category:"Grid",syntax:"gap: 16px 24px;",desc:"Sets gutter spacing between grid rows and columns."},{name:"position",category:"Layout",syntax:"position: relative | absolute | fixed | sticky;",desc:"Determines element positioning flow in document."},{name:"box-sizing",category:"Box Model",syntax:"box-sizing: border-box;",desc:"Includes padding and border within total width/height."},{name:"margin",category:"Box Model",syntax:"margin: 0 auto; /* horizontal centering */",desc:"Clears an area outside of an element border."},{name:"padding",category:"Box Model",syntax:"padding: 1rem 1.5rem;",desc:"Clears an area inside the element around content."},{name:"backdrop-filter",category:"Effects",syntax:"backdrop-filter: blur(12px);",desc:"Blurs the graphical area behind an element (glassmorphism)."},{name:"background",category:"Color",syntax:"background: linear-gradient(135deg, #0f172a, #1e293b);",desc:"Sets all background styling including gradients."},{name:"border-radius",category:"Borders",syntax:"border-radius: 9999px; /* pill shape */",desc:"Rounds the corners of an element outer border."},{name:"box-shadow",category:"Effects",syntax:"box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5);",desc:"Adds cast shadow effects around an element frame."},{name:"transition",category:"Animation",syntax:"transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);",desc:"Smoothly animates CSS property changes over time."},{name:"@keyframes",category:"Animation",syntax:"@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }",desc:"Defines an animation sequence of intermediate keyframe steps."},{name:"@media",category:"Responsive",syntax:"@media (max-width: 768px) { .sidebar { display: none; } }",desc:"Applies CSS rules conditionally based on device viewport."},{name:"CSS Variables",category:"Variables",syntax:":root { --neon: #10b981; } .card { color: var(--neon); }",desc:"Custom properties reusable across the stylesheet."}],js:[{name:"let & const",category:"Variables",syntax:"const PI = 3.14; let score = 0;",desc:"Block-scoped modern variable declarations (prefer const)."},{name:"Arrow Functions",category:"Functions",syntax:"const add = (a, b) => a + b;",desc:'Concise function syntax with lexical "this" binding.'},{name:"Array.map()",category:"Arrays",syntax:"const doubled = [1, 2, 3].map(n => n * 2);",desc:"Returns new array transformed by callback."},{name:"Array.filter()",category:"Arrays",syntax:"const evens = [1, 2, 3, 4].filter(n => n % 2 === 0);",desc:"Returns elements that satisfy the predicate test."},{name:"Array.reduce()",category:"Arrays",syntax:"const sum = [1, 2, 3].reduce((acc, curr) => acc + curr, 0);",desc:"Reduces array to a single accumulator value."},{name:"Template Literals",category:"Strings",syntax:"`Hello, ${user.name}! You have ${xp} XP.`",desc:"Interpolated strings enclosed by backticks."},{name:"Destructuring",category:"Objects",syntax:"const { name, age } = user; const [first, second] = arr;",desc:"Unpacks properties or elements into variables."},{name:"Spread Operator",category:"Arrays",syntax:"const merged = [...arr1, ...arr2];",desc:"Expands iterable elements in place."},{name:"document.querySelector",category:"DOM",syntax:'const btn = document.querySelector("#submit-btn");',desc:"Returns first element matching CSS selector."},{name:"addEventListener",category:"Events",syntax:'btn.addEventListener("click", (e) => { ... });',desc:"Attaches an event handler without overwriting."},{name:"fetch() API",category:"Async",syntax:'const res = await fetch("https://api.example.com/data");',desc:"Standard browser API for HTTP network requests."},{name:"async / await",category:"Async",syntax:"async function load() { const data = await fetch(...); }",desc:"Syntactic sugar for handling Promises cleanly."},{name:"localStorage",category:"Storage",syntax:'localStorage.setItem("user", JSON.stringify(data));',desc:"Persistent browser key-value client storage."},{name:"JSON.parse / stringify",category:"JSON",syntax:"JSON.parse(str); JSON.stringify(obj);",desc:"Serializes and parses JSON string representations."}],mysql:[{name:"SELECT",category:"Query",syntax:"SELECT column1, column2 FROM users;",desc:"Retrieves data from one or more database tables."},{name:"WHERE",category:"Filter",syntax:"SELECT * FROM products WHERE price < 50;",desc:"Filters rows based on specified condition."},{name:"ORDER BY",category:"Sorting",syntax:"SELECT * FROM users ORDER BY created_at DESC;",desc:"Sorts the result set ascending (ASC) or descending (DESC)."},{name:"INSERT INTO",category:"DML",syntax:'INSERT INTO users (name, email) VALUES ("Affan", "affan@dev.com");',desc:"Inserts new records into a table."},{name:"UPDATE",category:"DML",syntax:"UPDATE users SET xp = xp + 10 WHERE id = 1;",desc:"Modifies existing records in a table."},{name:"DELETE FROM",category:"DML",syntax:"DELETE FROM sessions WHERE expired_at < NOW();",desc:"Deletes existing records matching WHERE clause."},{name:"INNER JOIN",category:"Joins",syntax:"SELECT u.name, o.total FROM users u INNER JOIN orders o ON u.id = o.user_id;",desc:"Returns records that have matching values in both tables."},{name:"LEFT JOIN",category:"Joins",syntax:"SELECT u.name, o.id FROM users u LEFT JOIN orders o ON u.id = o.user_id;",desc:"Returns all rows from left table, plus matched right rows."},{name:"GROUP BY",category:"Aggregate",syntax:"SELECT country, COUNT(*) FROM customers GROUP BY country;",desc:"Groups summary rows by common column values."},{name:"HAVING",category:"Aggregate",syntax:"SELECT country, COUNT(*) FROM customers GROUP BY country HAVING COUNT(*) > 5;",desc:"Filters grouped data (like WHERE, but for aggregates)."},{name:"PRIMARY KEY",category:"DDL",syntax:"CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, ...);",desc:"Uniquely identifies each record; no duplicate or NULL values."},{name:"CREATE INDEX",category:"Performance",syntax:"CREATE INDEX idx_user_email ON users(email);",desc:"Creates an index to accelerate query lookup speeds."}],python:[{name:"print()",category:"I/O",syntax:'print(f"Cyber Hero: {hero.name}")',desc:"Prints formatted output to stdout."},{name:"def function():",category:"Functions",syntax:`def calculate_xp(level: int) -> int:
    return level * 100`,desc:"Defines a named function with parameters and return value."},{name:"List Comprehension",category:"Collections",syntax:"squares = [x**2 for x in range(10) if x % 2 == 0]",desc:"Concise syntax to filter and map iterables into a list."},{name:"Dictionary",category:"Collections",syntax:'player = {"name": "Affan", "xp": 1200, "rank": "Master"}',desc:"Key-value mapping data structure."},{name:"Tuple",category:"Collections",syntax:"coordinates = (1920, 1080)",desc:"Immutable, ordered sequence of items."},{name:"class OOP:",category:"OOP",syntax:`class Hero:
    def __init__(self, name):
        self.name = name`,desc:"Defines a class blueprint with constructor and methods."},{name:"try / except",category:"Exceptions",syntax:`try:
    res = 10 / n
except ZeroDivisionError:
    res = 0`,desc:"Catches and handles runtime exceptions."},{name:"with open():",category:"Files",syntax:`with open("data.json", "r") as f:
    data = json.load(f)`,desc:"Context manager that automatically closes files."},{name:"lambda",category:"Functions",syntax:'sort_by_xp = sorted(players, key=lambda p: p["xp"])',desc:"Inline anonymous single-expression function."},{name:"import module",category:"Modules",syntax:`import math, random
from datetime import datetime`,desc:"Imports modules and standard library packages."}],php:[{name:"echo",category:"Output",syntax:'echo "<h1>Welcome to ByteVerse</h1>";',desc:"Outputs one or more strings to the HTTP response."},{name:"$variable",category:"Variables",syntax:'$username = "Affan"; $total_xp = 500;',desc:"Declares a variable starting with dollar sign ($)."},{name:"$_POST & $_GET",category:"Superglobals",syntax:'$email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);',desc:"Superglobals holding incoming form and query data."},{name:"session_start()",category:"Sessions",syntax:'session_start(); $_SESSION["user_id"] = $user["id"];',desc:"Initializes or resumes an active session."},{name:"PDO Connection",category:"Database",syntax:'$pdo = new PDO("mysql:host=localhost;dbname=app", $user, $pass);',desc:"Modern, secure abstraction for database interaction."},{name:"Prepared Statement",category:"Security",syntax:`$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([$id]);`,desc:"Prevents SQL injection attacks by separating SQL from data."},{name:"password_hash()",category:"Security",syntax:"$hash = password_hash($password, PASSWORD_BCRYPT);",desc:"Creates strong, salted cryptographic password hash."},{name:"htmlspecialchars()",category:"Security",syntax:'echo htmlspecialchars($input, ENT_QUOTES, "UTF-8");',desc:"Escapes HTML entities to defend against XSS attacks."},{name:"class & __construct",category:"OOP",syntax:`class Warrior {
  public function __construct(public string $name) {}
}`,desc:"Object-oriented class with constructor property promotion."}],django:[{name:"django-admin",category:"CLI",syntax:"django-admin startproject myproject",desc:"Creates the core Django project root structure."},{name:"python manage.py",category:"CLI",syntax:`python manage.py startapp core
python manage.py runserver`,desc:"Runs management commands against current project."},{name:"makemigrations",category:"ORM",syntax:`python manage.py makemigrations
python manage.py migrate`,desc:"Generates migration files and updates database schema."},{name:"models.Model",category:"ORM",syntax:`class Post(models.Model):
    title = models.CharField(max_length=200)`,desc:"Defines database table schema using Python classes."},{name:"Model.objects.all()",category:"ORM",syntax:'posts = Post.objects.filter(published=True).order_by("-date")',desc:"ORM QuerySet for filtering and sorting records."},{name:"urls.py & path()",category:"Routing",syntax:'urlpatterns = [ path("posts/<int:id>/", views.post_detail, name="post-detail") ]',desc:"Maps URL routes to Python view handler functions."},{name:"{% extends %}",category:"Templates",syntax:`{% extends "base.html" %}
{% block content %}...{% endblock %}`,desc:"Template inheritance system in Django DTL."},{name:"{{ variable }}",category:"Templates",syntax:"<h1>Welcome, {{ user.username }}!</h1>",desc:"Renders variable value from view context dictionary."},{name:"{% csrf_token %}",category:"Security",syntax:'<form method="post">{% csrf_token %}...</form>',desc:"Injects hidden CSRF verification token for POST forms."},{name:"admin.site.register",category:"Admin",syntax:`from django.contrib import admin
admin.site.register(Post)`,desc:"Registers model with the automatic Django admin portal."}]},xi={html:{id:"html",name:"HTML5 Web Architect",badge:"🧱",description:"Certified mastery of HTML5 semantic structure, web forms, multimedia, and modern DOM elements according to W3C standards.",passingScore:75,durationMinutes:10,xpReward:250,questions:[{id:"html_1",question:"What does HTML stand for in modern web development?",options:["Hyper Text Markup Language","High Tech Modern Language","Hyperlink and Text Management Language","Home Tool Markup Language"],correct:0,explanation:"HTML stands for Hyper Text Markup Language. It was created by Tim Berners-Lee in 1991 and is the standard markup language used worldwide to structure web pages."},{id:"html_2",question:"Which of the following is the correct HTML5 document type declaration?",code:"<!DOCTYPE ...>",options:['<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">',"<!DOCTYPE html5>","<!DOCTYPE html>",'<doctype html type="web">'],correct:2,explanation:"In HTML5, the declaration is case-insensitive and simply written as <!DOCTYPE html>. It tells modern browsers to render in standard mode rather than quirks mode."},{id:"html_3",question:"Which HTML5 semantic element is best suited to contain independent, self-contained content such as a blog post or news story?",options:["<section>","<article>","<aside>","<div>"],correct:1,explanation:"The <article> element specifies independent, self-contained content that could be distributed or reused independently (e.g. blog post, forum post, product card). <section> groups thematic content."},{id:"html_4",question:"What is the required attribute for an <img> tag to provide alternative text for screen readers and search engines?",code:'<img src="logo.png" ...="ByteVerse Logo">',options:["title","caption","alt","description"],correct:2,explanation:"The alt attribute provides an alternative text for an image if it cannot be displayed and is essential for web accessibility (WCAG) and SEO."},{id:"html_5",question:"Which HTML attribute specifies that an <input> field must be filled out before submitting a form?",options:['validate="true"',"required","mandatory","must-fill"],correct:1,explanation:'The "required" boolean attribute in HTML5 specifies that the user must enter a value before the browser allows the enclosing form to be submitted.'},{id:"html_6",question:"What is the correct way to open a hyperlink in a new browser tab or window?",code:'<a href="https://affansayed.vercel.app" ... >Affan Portfolio</a>',options:['target="_new"','target="_blank"','window="open"','rel="newtab"'],correct:1,explanation:'target="_blank" tells the browser to open the linked document in a new window or tab. It is modern best practice to pair this with rel="noopener noreferrer" for security.'},{id:"html_7",question:"Which HTML5 element is used to draw graphics, animations, or games on the fly via JavaScript scripting?",options:["<graphic>","<draw>","<canvas>","<paint>"],correct:2,explanation:"The HTML5 <canvas> element provides a scriptable 2D/WebGL raster drawing surface used for charts, visual effects, and retro games."},{id:"html_8",question:"Which tag pair is used to create an unordered bullet-point list?",options:["<ol> and <li>","<ul> and <li>","<dl> and <dt>","<list> and <item>"],correct:1,explanation:"<ul> defines an unordered (bulleted) list, while <ol> defines an ordered (numbered) list. Individual items inside both are marked with <li>."},{id:"html_9",question:"Where should the <title> tag be placed in an HTML document according to standard specifications?",options:["Inside the <body> tag at the top","Inside the <head> element","Directly after the <!DOCTYPE html> tag","Inside the <header> element"],correct:1,explanation:"The <title> element is required in all HTML documents and must be placed inside the <head> element. It defines the title of the document shown in the browser tab."},{id:"html_10",question:"Which HTML5 input type offers built-in mobile keypad optimization and regex email validation?",options:['<input type="text" validate="email">','<input type="email">','<input type="mail">','<input type="address">'],correct:1,explanation:'HTML5 introduced <input type="email">, which activates the @ symbol keyboard on mobile devices and triggers native browser email format verification.'},{id:"html_11",question:"Which HTML tag is used to embed audio files natively without requiring third-party plugins like Flash?",options:["<sound>","<audio>","<music>","<mp3>"],correct:1,explanation:"The HTML5 <audio> tag is used to embed audio files. It supports attributes such as controls, autoplay, and loop, with <source> children for multiple codecs."},{id:"html_12",question:'What does the HTML "target" attribute set to "_self" do?',options:["Opens the link in the same browsing context/frame (default)","Opens the link in the parent frame","Opens the link in a modal dialog","Cancels navigation"],correct:0,explanation:"_self is the default value; it opens the linked document in the exact same frame or window where the user clicked it."}]},css:{id:"css",name:"CSS3 Visual & Layout Specialist",badge:"🎨",description:"Certified mastery of modern CSS3 styling, Flexbox, CSS Grid layouts, responsive media queries, and keyframe animations.",passingScore:75,durationMinutes:10,xpReward:250,questions:[{id:"css_1",question:"What does CSS stand for in web engineering?",options:["Cascading Style Sheets","Computer Screen Styling","Creative Styling Syntax","Colorful Sheet Styles"],correct:0,explanation:"CSS stands for Cascading Style Sheets. It dictates how HTML elements are formatted, styled, laid out, and animated on screens or print."},{id:"css_2",question:"Which CSS Box Model property determines the space between the content boundary and the element border?",options:["margin","padding","outline","spacing"],correct:1,explanation:"Padding clears an area around the content inside the border. Margin clears an area outside the border. The order from inside out: Content -> Padding -> Border -> Margin."},{id:"css_3",question:"To center a child element both vertically and horizontally using CSS Flexbox on the parent container, which combination is correct?",code:`.parent {
  display: flex;
  /* Which rules center children? */
}`,options:["align-items: center; justify-content: center;","text-align: center; vertical-align: middle;","float: center; margin: auto;","place-items: center-all;"],correct:0,explanation:"In Flexbox, justify-content: center aligns items along the primary axis (horizontal by default), while align-items: center aligns items along the cross axis (vertical)."},{id:"css_4",question:"Which CSS property defines a responsive 3-column equal grid layout with CSS Grid?",options:["grid-template-columns: repeat(3, 1fr);","grid-columns: 33% 33% 33%;","grid-layout: 3-column-flex;","display: grid-3;"],correct:0,explanation:"grid-template-columns: repeat(3, 1fr) creates three equal columns using fractional units (1fr each), distributing available space cleanly without rounding errors."},{id:"css_5",question:'What is the default value of the "position" property for HTML elements?',options:["relative","absolute","static","fixed"],correct:2,explanation:"HTML elements are positioned static by default. Static elements are not affected by top, bottom, left, or right properties and flow according to normal page layout."},{id:"css_6",question:"Which selector has the HIGHEST specificity according to the CSS Cascading rule?",options:["An ID selector (#navbar)","A class selector (.active-item)","An element selector (p)","A universal selector (*)"],correct:0,explanation:"CSS Specificity hierarchy: Inline styles (1000) > IDs (100) > Classes/attributes/pseudo-classes (10) > Elements/pseudo-elements (1). Thus #navbar overrides .active-item."},{id:"css_7",question:'Which modern CSS property is used to achieve the trendy "Glassmorphism" frosted-glass blur effect?',options:["filter: glass(10px);","backdrop-filter: blur(12px);","background-blur: 12px;","opacity-filter: frosted;"],correct:1,explanation:"backdrop-filter: blur(...) applies visual blurring effects to the area behind an element, enabling modern frosted-glass and cyber-glassmorphic aesthetic designs."},{id:"css_8",question:"Which CSS declaration ensures an element's padding and border are included inside its total width and height calculation?",options:["box-sizing: border-box;","box-sizing: content-box;","dimension-model: inclusive;","border-calculation: inner;"],correct:0,explanation:"box-sizing: border-box forces the browser to calculate width and height including padding and border, preventing unexpected layout overflows."},{id:"css_9",question:"How do you define a custom CSS Variable (Custom Property) at the global root level?",code:`:root {
  /* Which syntax is valid? */
}`,options:["$cyber-cyan: #00f2fe;","--cyber-cyan: #00f2fe;","@cyber-cyan: #00f2fe;","var-cyber-cyan = #00f2fe;"],correct:1,explanation:"CSS Custom Properties must begin with two hyphens (e.g., --cyber-cyan: #00f2fe;) and are accessed using the var(--cyber-cyan) function."},{id:"css_10",question:"Which media query targets mobile screens with a viewport width of 768 pixels or narrower?",options:["@media (max-width: 768px) { ... }","@media screen and (min-width: 768px) { ... }","@media mobile-only { ... }","@viewport (width <= 768px) { ... }"],correct:0,explanation:"@media (max-width: 768px) applies styles only when the viewport width is 768px or less, making it the standard responsive breakpoint for mobile and small tablet screens."},{id:"css_11",question:"Which CSS rule specifies an animation sequence that transitions from start to end?",options:["@animation myKeyframes { ... }","@keyframes myFadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }","@transition myMotion { ... }","@frames fadeIn { from; to; }"],correct:1,explanation:"The @keyframes at-rule defines the animation sequence using percentages (0% to 100%) or keywords (from, to)."},{id:"css_12",question:'What does the "z-index" property control in CSS?',options:["The 3D zoom magnification of an element","The vertical scrolling speed of an element","The stacking order of positioned elements along the z-axis","The rendering opacity level"],correct:2,explanation:"z-index specifies the 3D stacking order of positioned elements (relative, absolute, fixed, or sticky). An element with higher z-index displays in front of lower ones."}]},js:{id:"js",name:"Modern JavaScript ES6+ Engineer",badge:"⚡",description:"Certified expertise in modern ECMAScript standards, asynchronous promises, DOM manipulation, closures, and object manipulation.",passingScore:75,durationMinutes:10,xpReward:250,questions:[{id:"js_1",question:"What is the output of the following JavaScript equality check?",code:`console.log(0 == false);
console.log(0 === false);`,options:["true followed by true","true followed by false","false followed by false","TypeError"],correct:1,explanation:"The loose equality operator (==) performs type coercion (converting false to 0, so 0 == 0 is true). The strict equality operator (===) checks both value and type without coercion, returning false."},{id:"js_2",question:"Which keyword declares a block-scoped variable that cannot be reassigned after initialization?",options:["var","let","const","immutable"],correct:2,explanation:"const declares a block-scoped variable that cannot be reassigned. Note that if the const holds an object or array, its properties or elements can still be mutated."},{id:"js_3",question:"What does the Array.prototype.map() method return?",code:`const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);`,options:["Mutates the original array in place","Returns a single aggregated number","Returns a brand new array with transformed elements","Returns undefined"],correct:2,explanation:"map() creates a brand new array populated with the results of calling the provided callback function on every element in the calling array, without mutating the original."},{id:"js_4",question:"Which method properly parses a JSON string into a native JavaScript object?",options:["JSON.stringify(str)","JSON.parse(str)","JSON.toObject(str)","Object.fromJSON(str)"],correct:1,explanation:"JSON.parse() parses a JSON string, constructing the JavaScript value or object described by the string. JSON.stringify() converts a JavaScript object into a JSON string."},{id:"js_5",question:"How do you handle asynchronous operations cleanly using modern ES2017 syntax?",code:`async function fetchPlayerData() {
  const res = ... fetch("/api/player");
  const data = ... res.json();
}`,options:["then","await","yield","defer"],correct:1,explanation:"The await keyword can be placed before any Promise inside an async function. It pauses execution until the Promise resolves, returning the unwrapped value."},{id:"js_6",question:'What is the value of "this" inside a standard arrow function `() => {}`?',options:["The HTML DOM element that triggered the event","Lexically inherited from the surrounding enclosing scope","Always points to window or globalThis","Undefined in all strict contexts"],correct:1,explanation:"Arrow functions do not have their own this binding. Instead, they lexically bind this from the outer enclosing scope at creation time."},{id:"js_7",question:"Which DOM method selects the FIRST element that matches a specified CSS selector string?",options:["document.getElementsByClassName()","document.querySelector()","document.querySelectorAll()","document.findElement()"],correct:1,explanation:"document.querySelector() returns the first Element within the document that matches the specified selector, or null if no matches are found."},{id:"js_8",question:"What is the output of `typeof null` in JavaScript?",options:['"null"','"undefined"','"object"','"number"'],correct:2,explanation:'In JavaScript, typeof null returns "object". This is a historic bug from the initial 1995 JS release that was kept for backwards compatibility.'},{id:"js_9",question:"Which method registers an event listener on a DOM element without overriding existing listeners?",options:["element.onclick = fn;",'element.addEventListener("click", fn);','element.attach("click", fn);','element.listen("click", fn);'],correct:1,explanation:"addEventListener allows multiple event handlers to be attached to the same event on an element and supports capture/bubble configuration."},{id:"js_10",question:"What does the spread operator (...) do when used with an array?",code:`const a = [1, 2];
const b = [...a, 3, 4];`,options:["Merges arrays into a 2D matrix","Expands the elements of the iterable array in place","Calculates mathematical spread/variance","Converts the array to a string"],correct:1,explanation:"The spread operator (...) expands an iterable array or object into individual elements or keys, allowing clean shallow copies and concatenations."},{id:"js_11",question:"What is a Closure in JavaScript?",options:["A function that immediately terminates execution","A syntax error when a bracket is not closed","A function bundled together with references to its surrounding lexical state","A method to encrypt JavaScript source code"],correct:2,explanation:"A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In JS, closures give access to an outer function's scope from an inner function."},{id:"js_12",question:"Which storage API in web browsers stores data with NO expiration date until explicitly cleared by the user or code?",options:["sessionStorage","localStorage","cookie (default)","memoryStorage"],correct:1,explanation:"localStorage data persists across browser sessions indefinitely until cleared. sessionStorage is wiped as soon as the browser tab is closed."}]},python:{id:"python",name:"Python Core & Algorithms Developer",badge:"🐍",description:"Certified expertise in Python 3 syntax, data structures (lists, tuples, dicts, sets), OOP classes, list comprehensions, and exception handling.",passingScore:75,durationMinutes:10,xpReward:250,questions:[{id:"py_1",question:"What is the correct file extension for Python script files?",options:[".pyt",".py",".pt",".python"],correct:1,explanation:"Standard Python source code files use the .py extension, which is recognized by the Python interpreter and modern code editors."},{id:"py_2",question:"Which Python data structure is IMMUTABLE (cannot be modified after creation)?",options:["List [1, 2, 3]",'Dictionary {"key": "val"}',"Tuple (1, 2, 3)","Set {1, 2, 3}"],correct:2,explanation:"Tuples are immutable sequences in Python. Once a tuple is created, elements cannot be added, removed, or changed. Lists, dicts, and sets are mutable."},{id:"py_3",question:"What is the output of the following list comprehension in Python?",code:`evens = [x * 2 for x in range(4)]
print(evens)`,options:["[0, 2, 4, 6]","[2, 4, 6, 8]","[0, 1, 2, 3]","[2, 4, 6]"],correct:0,explanation:"range(4) produces numbers 0, 1, 2, 3. Multiplying each by 2 yields [0, 2, 4, 6]. List comprehensions offer a concise, readable way to construct lists."},{id:"py_4",question:"Which keyword is used to define a function in Python?",code:`... calculate_score(player):
    return player.xp * 10`,options:["function","def","func","define"],correct:1,explanation:'Python uses the "def" keyword (short for define) followed by the function name, parentheses for parameters, and a colon.'},{id:"py_5",question:"In Python Object-Oriented Programming, what does the first parameter of an instance method represent by convention?",code:`class CyberHero:
    def __init__(self, name):
        self.name = name`,options:["A pointer to the parent class","The current instance of the class (self)","A static reference to the module","The constructor callback"],correct:1,explanation:'By convention, "self" refers to the current instance of the class. It allows instance methods and attributes to be accessed and modified.'},{id:"py_6",question:"What is the output of `bool([])` in Python?",options:["True","False","None","ValueError"],correct:1,explanation:'In Python, empty sequences and collections (such as empty lists [], empty strings "", empty dicts {}, and 0) evaluate to False in a boolean context.'},{id:"py_7",question:"Which statement correctly handles potential exceptions in Python code without crashing?",code:`... :
    result = 10 / 0
... ZeroDivisionError:
    print("Cannot divide by zero")`,options:["try ... catch","try ... except","attempt ... rescue","guard ... handle"],correct:1,explanation:"Python uses try ... except blocks to catch and handle runtime exceptions gracefully. You can also append else and finally clauses."},{id:"py_8",question:"Which built-in function returns the total number of items in a list, string, or dictionary?",options:["count()","length()","size()","len()"],correct:3,explanation:"len() is the standard Python built-in function that calls the underlying __len__() method of any sized object."},{id:"py_9",question:"How do you create an anonymous single-expression inline function in Python?",options:["def inline(x): return x * 2","lambda x: x * 2","arrow (x) => x * 2","anon x: x * 2"],correct:1,explanation:"The lambda keyword creates small anonymous functions. A lambda can take any number of arguments, but can only have one expression."},{id:"py_10",question:"What is the recommended modern way to safely open and read a file in Python, ensuring it is automatically closed?",code:`... open("data.txt", "r") as file:
    content = file.read()`,options:["using","with","using_file","open_safe"],correct:1,explanation:'The "with" statement creates a Context Manager. It guarantees that the file stream is closed immediately upon exiting the block, even if an exception occurs.'},{id:"py_11",question:"Which operator performs integer floor division in Python 3?",code:"result = 7 // 2",options:["/","//","%","div"],correct:1,explanation:"The single slash (/) returns a float (7 / 2 = 3.5). The double slash (//) performs floor division, rounding down to the nearest integer (7 // 2 = 3)."},{id:"py_12",question:"Which dictionary method retrieves a value for a key, returning a default fallback if the key does not exist?",code:`player = {"name": "Affan"}
xp = player....("xp", 0)`,options:["find()","get()","fetch()","lookup()"],correct:1,explanation:"dict.get(key, default) avoids KeyError exceptions. If key is found, it returns the associated value; otherwise, it returns the provided default value."}]},mysql:{id:"mysql",name:"MySQL Database & Query Architect",badge:"🐬",description:"Certified expertise in relational database design, SQL syntax, multi-table JOINs, indexing, aggregation, and data normalization.",passingScore:75,durationMinutes:10,xpReward:250,questions:[{id:"sql_1",question:"What does SQL stand for in data engineering?",options:["Structured Query Language","Standard Questionnaire Logic","Sequential Query Language","System Query Layout"],correct:0,explanation:"SQL stands for Structured Query Language. It is the standard language for relational database management systems (RDBMS) like MySQL, PostgreSQL, and SQLite."},{id:"sql_2",question:"Which SQL clause is used to filter records based on specific criteria?",code:"SELECT * FROM users ... score > 500;",options:["HAVING","WHERE","FILTER","WHEN"],correct:1,explanation:"The WHERE clause filters rows before any groupings are applied. HAVING is used to filter grouped results after GROUP BY."},{id:"sql_3",question:"Which SQL JOIN returns all rows from the left table, and the matched rows from the right table (with NULLs for unmatched right rows)?",options:["INNER JOIN","LEFT JOIN","RIGHT JOIN","CROSS JOIN"],correct:1,explanation:"A LEFT JOIN (or LEFT OUTER JOIN) returns all records from the left table, and the matched records from the right table. Unmatched records on the right return NULL values."},{id:"sql_4",question:"Which SQL statement inserts new rows into a database table?",options:["ADD INTO table VALUES (...)","INSERT INTO table (col1, col2) VALUES (val1, val2);","UPDATE table SET col1 = val1;","CREATE ROW table (...)"],correct:1,explanation:"INSERT INTO is the standard SQL DML command used to add one or more new records into a specified table."},{id:"sql_5",question:"What is the function of a PRIMARY KEY in a relational database table?",options:["Encrypts sensitive table data","Uniquely identifies each record and guarantees no duplicate or NULL values","Automatically calculates row totals","Connects the database to external APIs"],correct:1,explanation:"A PRIMARY KEY constraint uniquely identifies each record in a database table. Primary keys must contain UNIQUE values, and cannot contain NULL values."},{id:"sql_6",question:"Which aggregate function calculates the total sum of a numeric column in SQL?",code:"SELECT ...(total_amount) FROM orders;",options:["COUNT()","TOTAL()","SUM()","ADD()"],correct:2,explanation:"SUM() returns the total sum of a numeric column. COUNT() returns the number of rows, AVG() returns the numerical average, and MAX() returns the highest value."},{id:"sql_7",question:"To eliminate duplicate values and return only unique rows in a query result, which keyword is used?",code:"SELECT ... country FROM customers;",options:["UNIQUE","DISTINCT","DIFFERENT","FILTER"],correct:1,explanation:"The SELECT DISTINCT statement is used to return only distinct (different) values, removing all duplicate records from the final result set."},{id:"sql_8",question:"Which SQL command permanently removes a table along with its entire structure, indexes, and data from the database?",options:["DELETE TABLE users;","TRUNCATE TABLE users;","DROP TABLE users;","REMOVE TABLE users;"],correct:2,explanation:"DROP TABLE destroys the table definition and all its data. DELETE FROM deletes records while keeping table structure. TRUNCATE empties all records quickly."},{id:"sql_9",question:"Which clause is used in conjunction with aggregate functions to group the result set by one or more columns?",options:["ORDER BY","GROUP BY","PARTITION BY","CLUSTER BY"],correct:1,explanation:"The GROUP BY statement groups rows that have the same values in specified columns into summary rows (e.g. find number of customers per city)."},{id:"sql_10",question:"In SQL transaction management, which command saves all changes made during the current transaction permanently to disk?",options:["SAVEPOINT","ROLLBACK","COMMIT","PERSIST"],correct:2,explanation:"COMMIT ends the transaction and makes all database modifications permanent. ROLLBACK reverts all changes back to the start of the transaction or savepoint."},{id:"sql_11",question:'What does the LIKE operator with "%cyber" match in a SQL query?',code:'SELECT * FROM tags WHERE name LIKE "%cyber";',options:['Any value that starts with "cyber"','Any value that ends with "cyber"','Any value that contains "cyber" anywhere','Only the exact word "cyber"'],correct:1,explanation:'In SQL LIKE patterns, % represents zero, one, or multiple characters. "%cyber" matches any string ending with "cyber" (e.g. "neoncyber", "cyber").'},{id:"sql_12",question:"Why are database INDEXES created on frequently queried columns?",options:["To compress the table size","To dramatically speed up data retrieval operations (SELECT performance)","To enforce foreign key constraints","To prevent SQL injection attacks"],correct:1,explanation:"Indexes are used to quickly locate data without having to search every row in a database table every time. They speed up SELECT queries at the cost of slightly slower INSERT/UPDATE operations."}]},php:{id:"php",name:"PHP Web Backend & Security Developer",badge:"🐘",description:"Certified expertise in server-side scripting, superglobals, PDO database connections, session management, and web security best practices.",passingScore:75,durationMinutes:10,xpReward:250,questions:[{id:"php_1",question:"What does PHP originally and recursively stand for?",options:["Personal Home Page (originally) / PHP: Hypertext Preprocessor (recursive)","Programmed Hypertext Parser","Private Hosting Protocol","Public Homepage Processor"],correct:0,explanation:'PHP stood for Personal Home Page when Rasmus Lerdorf created it in 1994. It is now officially a recursive acronym for "PHP: Hypertext Preprocessor".'},{id:"php_2",question:"All standard variable names in PHP must begin with which character?",options:["&","@","$","#"],correct:2,explanation:'In PHP, all variables must begin with a dollar sign ($), followed by the name of the variable (e.g. $username = "Affan";).'},{id:"php_3",question:"Which PHP superglobal array collects form data submitted with the HTTP POST method?",options:["$_GET","$_POST","$_REQUEST","$_SERVER"],correct:1,explanation:'$_POST is a PHP superglobal variable which is used to collect form data after submitting an HTML form with method="post", keeping sensitive data out of the URL.'},{id:"php_4",question:"Which modern PHP database extension provides a consistent database abstraction layer and supports prepared statements against SQL injection?",options:["mysql_query() (deprecated)","PDO (PHP Data Objects)","SQLDirect","DB_Connect"],correct:1,explanation:"PDO (PHP Data Objects) is the modern, secure standard for interacting with databases in PHP. It supports multiple RDBMS engines and parameterized prepared statements."},{id:"php_5",question:"Which function securely generates a salted cryptographic hash of a user password in modern PHP?",code:"$hash = ...( $password, PASSWORD_BCRYPT );",options:["md5()","sha1()","password_hash()","crypt_secure()"],correct:2,explanation:"password_hash() uses strong, one-way cryptographic algorithms (like Bcrypt and Argon2) with automatic secure salt generation. password_verify() is used to check the password."},{id:"php_6",question:"What function MUST be called at the very top of a PHP script before any HTML output to initialize or resume a user session?",options:["session_start()","session_begin()","init_session()","start_cookie()"],correct:0,explanation:"session_start() creates a session or resumes the current one based on a session identifier passed via a GET or POST request, or passed via a cookie."},{id:"php_7",question:"What is the string concatenation operator in PHP?",code:'$greeting = "Hello " ... $name;',options:["+","&",".","::"],correct:2,explanation:"In PHP, the period (.) is the string concatenation operator. The plus (+) operator is strictly for arithmetic addition."},{id:"php_8",question:"What is the difference between `include` and `require` in PHP when the target file is not found?",options:["include causes a fatal error; require only gives a warning","require emits a fatal E_COMPILE_ERROR and stops script execution; include only emits a warning (E_WARNING) and continues execution","They are 100% identical aliases","require is only used for classes"],correct:1,explanation:"require will produce a fatal error (E_COMPILE_ERROR) and stop the script if the file does not exist. include will only produce a warning (E_WARNING) and the script will continue."},{id:"php_9",question:"How do you prevent Cross-Site Scripting (XSS) attacks when echoing user input back to an HTML page in PHP?",code:'echo ...( $userInput, ENT_QUOTES, "UTF-8" );',options:["strip_tags()","htmlspecialchars()","urldecode()","sanitize()"],correct:1,explanation:`htmlspecialchars() converts special characters (like <, >, ", ') into HTML entities, preventing malicious scripts from executing in the victim's browser.`},{id:"php_10",question:"What is the correct way to declare a constructor in a modern PHP class?",code:`class CyberWarrior {
  public function ...($name) {
    $this->name = $name;
  }
}`,options:["CyberWarrior()","__construct()","__init__()","constructor()"],correct:1,explanation:'PHP uses the magic method __construct() (with two leading underscores) as the class constructor, automatically called when a new instance is created with "new".'},{id:"php_11",question:"Which operator was introduced in PHP 7 to return the first operand if it exists and is not null, or the second operand otherwise (Null Coalescing)?",code:'$username = $_GET["user"] ... "Anonymous";',options:["?:","??","!!","||"],correct:1,explanation:"The null coalescing operator (??) returns its first operand if it exists and is not null; otherwise it returns its second operand. It prevents undefined index notices."},{id:"php_12",question:"What is the correct closing tag for standard PHP script blocks?",options:["</php>","?>","%}",";;;"],correct:1,explanation:"A PHP script block starts with <?php and ends with ?>. (Note: in pure PHP files, omitting the closing ?> tag is recommended to prevent accidental trailing whitespace)."}]},django:{id:"django",name:"Django Full-Stack Architecture Specialist",badge:"🦄",description:"Certified expertise in Django web framework, MTV (Model-Template-View) design pattern, ORM database models, migrations, and REST APIs.",passingScore:75,durationMinutes:10,xpReward:250,questions:[{id:"dj_1",question:"What architectural design pattern does the Django web framework follow?",options:["MVC (Model-View-Controller)","MTV (Model-Template-View)","MVVM (Model-View-ViewModel)","Micro-Kernel"],correct:1,explanation:"Django follows the MTV pattern: Model describes database structure, Template describes presentation layer (HTML), and View contains business logic and connects Model to Template."},{id:"dj_2",question:"Which CLI command creates a brand new Django project with the default boilerplate files?",options:["python manage.py new-project myproject","django-admin startproject myproject","django create myproject","python -m django init"],correct:1,explanation:"django-admin startproject <name> creates the root project directory, settings.py, urls.py, wsgi.py, and manage.py."},{id:"dj_3",question:"Which two CLI commands are used in sequence to generate and then execute database schema changes in Django ORM?",options:["makemigrations followed by migrate","db:generate followed by db:push","build_schema followed by apply","syncdb followed by commit"],correct:0,explanation:"python manage.py makemigrations inspects models.py and creates migration files. python manage.py migrate executes those SQL DDL changes against the active database."},{id:"dj_4",question:"In a Django template, which syntax is used to print/render the value of a variable passed from the view context?",options:["{% user.name %}","{{ user.name }}","${user.name}","<%= user.name %>"],correct:1,explanation:"In the Django Template Language (DTL), double curly braces {{ variable }} are used for variable rendering, while {% tag %} is used for logic (loops, if statements, blocks)."},{id:"dj_5",question:"What built-in Django feature automatically protects POST web forms from malicious cross-site request forgery attacks?",code:`<form method="post">
  {% ... %}
  <input ...>
</form>`,options:["xss_token","csrf_token","auth_protect","secure_form"],correct:1,explanation:"{% csrf_token %} injects a hidden input field with a cryptographically secure token checked by Django's CSRF middleware on every POST submission."},{id:"dj_6",question:"Which Django model field defines a many-to-one relationship (e.g. many Comments belong to one Blog Post)?",code:`class Comment(models.Model):
    post = models....(Post, on_delete=models.CASCADE)`,options:["OneToOneField","ManyToManyField","ForeignKey","BelongsToField"],correct:2,explanation:"models.ForeignKey creates a many-to-one relationship. on_delete=models.CASCADE specifies that when the referenced Post is deleted, all child comments are deleted too."},{id:"dj_7",question:'How do you query ALL records from a Django model named "Hero" using the ORM?',options:["Hero.objects.all()","Hero.find_all()","Hero.query.get()","SELECT * FROM Hero"],correct:0,explanation:'Django models use an ORM Manager called "objects". Hero.objects.all() returns a QuerySet containing all model instances from the database.'},{id:"dj_8",question:"Which setting in settings.py lists all the apps enabled in the Django project instance?",options:["ACTIVE_APPS","INSTALLED_APPS","MIDDLEWARE","REGISTERED_PLUGINS"],correct:1,explanation:'INSTALLED_APPS is a list of all Django applications enabled in the project. Whenever you create a new app with "startapp", you must register it here.'},{id:"dj_9",question:"What is the command to create an administrative superuser account for the built-in Django Admin portal?",options:["python manage.py make_root","python manage.py createsuperuser","django-admin new-admin","python manage.py admin --create"],correct:1,explanation:"python manage.py createsuperuser prompts for username, email, and password to grant full administrator privileges in Django's automatic /admin portal."},{id:"dj_10",question:"In Django REST Framework (DRF), what component transforms complex model QuerySets into native Python datatypes that can easily be rendered into JSON?",options:["Router","Serializer","Renderer","Transformer"],correct:1,explanation:"Serializers allow complex data such as querysets and model instances to be converted to native Python datatypes that can then be easily rendered into JSON or XML."},{id:"dj_11",question:"Which Django template tag allows a child template to inherit and extend a master base template?",options:['{% import "base.html" %}','{% extends "base.html" %}','{% include "base.html" %}','{% inherit "base.html" %}'],correct:1,explanation:'{% extends "base.html" %} tells the template engine that this template "extends" another template. Inside, it overrides specific {% block content %} blocks.'},{id:"dj_12",question:"What is the primary function of Django Middleware?",options:["To format CSS files for production","A framework of hooks into Django's request/response processing pipeline","To connect Django directly to Redis cache only","To automate git deployments"],correct:1,explanation:"Middleware is a framework of hooks into Django's request/response processing. It is a lightweight, low-level plugin system for globally altering Django's input or output."}]}},Vm=({defaultTrack:w="html",onSwitchToTutorials:m})=>{const{addXP:u}=at(),[T,S]=j.useState("lobby"),[z,g]=j.useState(w),[k,E]=j.useState(()=>{try{return localStorage.getItem("byteverse_student_name")||"Affan Developer"}catch{return"Affan Developer"}}),[q,A]=j.useState(0),[L,_]=j.useState({}),[J,G]=j.useState({}),[K,C]=j.useState(600),[W,P]=j.useState(!1),[M,F]=j.useState(!1),[ee,ue]=j.useState(""),[te,ve]=j.useState(!1),ke=j.useRef(null),ye=xi[z]||xi.html,Te=ye.questions,je=Te[q];j.useEffect(()=>{try{localStorage.setItem("byteverse_student_name",k)}catch{}},[k]),j.useEffect(()=>(T==="in_progress"?ke.current=setInterval(()=>{C(N=>N<=1?(clearInterval(ke.current),ce(),0):N-1)},1e3):ke.current&&clearInterval(ke.current),()=>{ke.current&&clearInterval(ke.current)}),[T]);const Ee=(N=z)=>{R.playClick(),g(N),_({}),G({}),A(0),C((ye.durationMinutes||10)*60),P(!1),F(!1),S("in_progress"),window.scrollTo({top:0,behavior:"smooth"})},fe=N=>{R.playClick(),_(U=>({...U,[je.id]:N}))},ie=N=>{R.playClick(),G(U=>({...U,[N]:!U[N]}))},Ce=()=>{let N=0;Te.forEach(de=>{L[de.id]===de.correct&&N++});const U=Math.round(N/Te.length*100),se=U>=ye.passingScore;return{correctCount:N,total:Te.length,percentage:U,passed:se}},ce=()=>{ke.current&&clearInterval(ke.current),R.playLevelUp();const N=Math.random().toString(16).substring(2,8).toUpperCase(),U=`BV-${z.toUpperCase()}-${new Date().getFullYear()}-${N}`;ue(U),Ce().passed&&u(ye.xpReward),S("results"),P(!1),window.scrollTo({top:0,behavior:"smooth"})},b=N=>{const U=Math.floor(N/60),se=N%60;return`${U}:${se<10?"0":""}${se}`},X=()=>{R.playClick(),navigator.clipboard.writeText(ee),ve(!0),setTimeout(()=>ve(!1),2e3)},c=()=>{R.playClick(),window.print()},l=Object.keys(L).length,f=Te.length-l;if(T==="lobby")return n.jsxs("div",{className:"space-y-6 animate-fadeIn pb-12",children:[n.jsxs("div",{className:"relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/30 shadow-2xl overflow-hidden",children:[n.jsx("div",{className:"absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),n.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6",children:[n.jsxs("div",{className:"space-y-3 max-w-2xl",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold",children:[n.jsx(rt,{size:14}),n.jsx("span",{children:"OFFICIAL W3C-ALIGNED CERTIFICATION"})]}),n.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:"ByteVerse MCQ Certification Center"}),n.jsx("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed font-sans",children:"Test your practical coding acumen through timed, industry-standard multiple choice exams. Score 75% or higher to earn an official Cyber Certificate of Mastery stamped and verified by founder Affan Sayed."})]}),n.jsxs("div",{className:"p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-2 min-w-[260px]",children:[n.jsx("label",{className:"text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider block",children:"Certificate Recipient Name:"}),n.jsx("input",{type:"text",value:k,onChange:N=>E(N.target.value),placeholder:"Enter Your Full Name",className:"w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-emerald-500/40 text-emerald-300 font-bold text-sm focus:outline-none focus:border-emerald-400"}),n.jsx("span",{className:"text-[10px] text-slate-500 block font-mono",children:"Will appear on your verified digital certificate."})]})]})]}),n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("h2",{className:"text-sm font-mono text-slate-400 uppercase tracking-wider font-bold",children:"Select Your Certification Track:"}),n.jsx("span",{className:"text-xs font-mono text-emerald-400 font-semibold",children:"7 Official Courses Available"})]}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:Object.values(xi).map(N=>{const U=z===N.id;return n.jsxs("div",{onClick:()=>{R.playClick(),g(N.id)},className:`cursor-pointer p-5 sm:p-6 rounded-2xl transition-all relative overflow-hidden group touch-manipulation ${U?"bg-slate-900 border-2 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)] scale-[1.01]":"bg-slate-950/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/70"}`,children:[n.jsxs("div",{className:"flex items-start justify-between gap-3 mb-3",children:[n.jsx("span",{className:"text-3xl",children:N.badge}),n.jsxs("span",{className:"text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold",children:["+",N.xpReward," XP"]})]}),n.jsx("h3",{className:"text-lg font-black text-white group-hover:text-emerald-300 transition-colors",children:N.name}),n.jsx("p",{className:"text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed",children:N.description}),n.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400",children:[n.jsxs("span",{className:"flex items-center gap-1",children:[n.jsx(fa,{size:12,className:"text-emerald-400"}),N.durationMinutes," Mins"]}),n.jsxs("span",{className:"flex items-center gap-1",children:[n.jsx(tr,{size:12,className:"text-cyan-400"}),N.questions.length," Questions"]}),n.jsxs("span",{className:"text-amber-400 font-bold",children:[N.passingScore,"% to Pass"]})]})]},N.id)})})]}),n.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6",children:[n.jsxs("div",{className:"space-y-1.5 text-center sm:text-left",children:[n.jsx("span",{className:"text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider",children:"Ready to Certify:"}),n.jsxs("h3",{className:"text-2xl font-black text-white flex items-center gap-2 justify-center sm:justify-start",children:[n.jsx("span",{children:ye.badge}),n.jsxs("span",{children:[ye.name," Exam"]})]}),n.jsxs("p",{className:"text-xs text-slate-400",children:[ye.questions.length," Questions • ",ye.durationMinutes," Minutes • Passing criteria: ",ye.passingScore,"% (9/12 correct)"]})]}),n.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[m&&n.jsxs("button",{onClick:m,className:"flex-1 sm:flex-none px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center justify-center gap-2 transition-all min-h-[46px] touch-manipulation",children:[n.jsx(An,{size:15}),n.jsx("span",{children:"Study Tutorials First"})]}),n.jsx("button",{onClick:()=>Ee(),className:"flex-1 sm:flex-none px-7 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm shadow-[0_0_25px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 transition-transform active:scale-95 min-h-[46px] touch-manipulation",children:n.jsx("span",{children:"Begin Official Exam »"})})]})]})]});if(T==="in_progress"){const N=K<120,U=J[je.id],se=L[je.id];return n.jsxs("div",{className:"space-y-5 animate-fadeIn pb-16",children:[n.jsxs("div",{className:"sticky top-2 z-30 p-3 sm:p-4 rounded-2xl glass-panel bg-slate-950/95 border border-slate-800 shadow-xl flex items-center justify-between gap-3 flex-wrap",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:ye.badge}),n.jsxs("div",{children:[n.jsx("span",{className:"text-xs font-mono font-bold text-white block",children:ye.name}),n.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:["Question ",q+1," of ",Te.length," (",l," answered)"]})]})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("div",{className:`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold border transition-colors ${N?"bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse":"bg-slate-900 text-emerald-400 border-emerald-500/30"}`,children:[n.jsx(fa,{size:15}),n.jsx("span",{children:b(K)})]}),n.jsx("button",{onClick:()=>P(!0),className:"px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-md transition-all active:scale-95 min-h-[38px] touch-manipulation",children:"Finish & Submit"})]})]}),n.jsxs("div",{className:"p-3 sm:p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-1.5 overflow-x-auto touch-scroll",children:[n.jsx("span",{className:"text-[11px] font-mono text-slate-500 uppercase tracking-wider font-bold mr-2 shrink-0",children:"Jump to:"}),Te.map((de,be)=>{const Se=be===q,Pe=L[de.id]!==void 0,ge=J[de.id];return n.jsxs("button",{onClick:()=>{R.playClick(),A(be)},className:`relative w-8 h-8 rounded-lg font-mono text-xs font-bold transition-all shrink-0 flex items-center justify-center touch-manipulation ${Se?"ring-2 ring-emerald-400 bg-emerald-500/30 text-white font-black":Pe?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"}`,children:[n.jsx("span",{children:be+1}),ge&&n.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-purple-500 ring-2 ring-slate-950"})]},de.id)})]}),n.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-slate-800 pb-3",children:[n.jsxs("span",{className:"text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5",children:[n.jsxs("span",{children:["Question ",q+1]}),n.jsx("span",{className:"text-slate-600",children:"•"}),n.jsx("span",{className:"text-slate-400",children:"1 Mark"})]}),n.jsxs("button",{onClick:()=>ie(je.id),className:`px-3 py-1 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all min-h-[36px] touch-manipulation ${U?"bg-purple-500/20 text-purple-300 border border-purple-500/40":"bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-slate-700/50"}`,children:[n.jsx(dm,{size:13,className:U?"fill-current":""}),n.jsx("span",{children:U?"Flagged for Review":"Flag Question"})]})]}),n.jsx("h2",{className:"text-lg sm:text-xl font-bold text-white leading-relaxed",children:je.question}),je.code&&n.jsx("div",{className:"rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-emerald-300 overflow-x-auto touch-scroll",children:n.jsx("pre",{className:"whitespace-pre-wrap",children:je.code})}),n.jsx("div",{className:"space-y-3 pt-2",children:je.options.map((de,be)=>{const Se=se===be;return n.jsxs("button",{onClick:()=>fe(be),className:`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all flex items-center justify-between gap-3 min-h-[52px] touch-manipulation ${Se?"bg-emerald-500/15 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)] font-semibold":"bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-950"}`,children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:`w-7 h-7 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors ${Se?"bg-emerald-400 text-slate-950":"bg-slate-900 border border-slate-800 text-slate-400"}`,children:String.fromCharCode(65+be)}),n.jsx("span",{className:"text-sm font-sans",children:de})]}),n.jsx("div",{className:`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${Se?"border-emerald-400 bg-emerald-400":"border-slate-700"}`,children:Se&&n.jsx(er,{size:12,className:"text-slate-950 stroke-[3]"})})]},be)})}),n.jsxs("div",{className:"pt-4 border-t border-slate-800 flex items-center justify-between gap-3",children:[n.jsxs("button",{onClick:()=>{q>0&&(R.playClick(),A(q-1))},disabled:q===0,className:`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all min-h-[44px] touch-manipulation ${q>0?"bg-slate-800 text-slate-200 hover:bg-slate-700":"bg-slate-900/40 text-slate-600 cursor-not-allowed"}`,children:[n.jsx(bi,{size:16}),n.jsx("span",{children:"Previous"})]}),q<Te.length-1?n.jsxs("button",{onClick:()=>{R.playClick(),A(q+1)},className:"px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md min-h-[44px] touch-manipulation",children:[n.jsx("span",{children:"Next Question"}),n.jsx(ma,{size:16})]}):n.jsxs("button",{onClick:()=>P(!0),className:"px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 active:scale-95 min-h-[44px] touch-manipulation",children:[n.jsx("span",{children:"Submit Exam Now"}),n.jsx(rt,{size:14})]})]})]}),W&&n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn",children:n.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-slate-900 border border-emerald-500/40 shadow-2xl max-w-md w-full space-y-4",children:[n.jsxs("div",{className:"flex items-center gap-3 text-emerald-400",children:[n.jsx(am,{size:28}),n.jsx("h3",{className:"text-xl font-bold text-white",children:"Ready to Finalize?"})]}),n.jsxs("div",{className:"text-sm text-slate-300 space-y-2",children:[n.jsxs("p",{children:["You have answered ",n.jsx("strong",{className:"text-emerald-400",children:l})," out of ",n.jsx("strong",{className:"text-white",children:Te.length})," questions."]}),f>0&&n.jsxs("p",{className:"p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs",children:["Warning: You still have ",f," unanswered questions! Unanswered questions receive 0 marks."]}),n.jsx("p",{className:"text-xs text-slate-400",children:"Once submitted, your responses will be scored immediately and your certification certificate generated."})]}),n.jsxs("div",{className:"flex items-center gap-3 pt-2",children:[n.jsx("button",{onClick:()=>P(!1),className:"flex-1 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs min-h-[44px] touch-manipulation",children:"Return to Exam"}),n.jsx("button",{onClick:ce,className:"flex-1 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/30 min-h-[44px] touch-manipulation",children:"Confirm & Submit"})]})]})})]})}const{correctCount:D,total:B,percentage:Y,passed:Q}=Ce();return n.jsxs("div",{className:"space-y-8 animate-fadeIn pb-20",children:[n.jsxs("div",{className:`p-6 sm:p-8 rounded-3xl border shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 ${Q?"bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 border-emerald-500/40 shadow-emerald-500/10":"bg-gradient-to-br from-rose-950/40 via-slate-900 to-slate-950 border-rose-500/40 shadow-rose-500/10"}`,children:[n.jsxs("div",{className:"flex items-center gap-5 text-center md:text-left flex-col md:flex-row",children:[n.jsx("div",{className:`w-20 h-20 rounded-2xl flex items-center justify-center font-black text-3xl shrink-0 border shadow-xl ${Q?"bg-emerald-500/20 border-emerald-400 text-emerald-300":"bg-rose-500/20 border-rose-400 text-rose-300"}`,children:Q?"🏆":"📚"}),n.jsxs("div",{className:"space-y-1",children:[n.jsx("span",{className:`text-xs font-mono font-bold uppercase tracking-widest ${Q?"text-emerald-400":"text-rose-400"}`,children:Q?"Certification Examination Passed!":"Certification Attempt Incomplete"}),n.jsx("h1",{className:"text-2xl sm:text-3xl font-black text-white",children:Q?"Official Certification Earned":"Keep Studying! You Can Do It!"}),n.jsx("p",{className:"text-xs sm:text-sm text-slate-300",children:Q?`Outstanding performance! You met the ${ye.passingScore}% threshold with an accuracy of ${Y}%. Your verified credential has been issued below.`:`You scored ${Y}% (${D}/${B} correct). You need ${ye.passingScore}% to earn the official credential. Review the answers below and try again!`})]})]}),n.jsxs("div",{className:"flex items-center gap-3 shrink-0",children:[n.jsxs("div",{className:"p-3 sm:p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-center min-w-[90px]",children:[n.jsx("span",{className:"text-[10px] font-mono text-slate-400 uppercase block",children:"Score"}),n.jsxs("span",{className:`text-2xl font-black font-mono ${Q?"text-emerald-400":"text-rose-400"}`,children:[Y,"%"]})]}),n.jsxs("div",{className:"p-3 sm:p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-center min-w-[90px]",children:[n.jsx("span",{className:"text-[10px] font-mono text-slate-400 uppercase block",children:"Accuracy"}),n.jsxs("span",{className:"text-2xl font-black font-mono text-white",children:[D,"/",B]})]}),Q&&n.jsxs("div",{className:"p-3 sm:p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center min-w-[90px]",children:[n.jsx("span",{className:"text-[10px] font-mono text-emerald-400 uppercase block",children:"Reward"}),n.jsxs("span",{className:"text-2xl font-black font-mono text-emerald-300",children:["+",ye.xpReward," XP"]})]})]})]}),Q&&n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2",children:[n.jsxs("span",{className:"text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-2",children:[n.jsx(vm,{size:16}),n.jsx("span",{children:"Verifiable Credential Document"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsxs("button",{onClick:X,className:"px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-all min-h-[40px] touch-manipulation",title:"Copy Credential ID",children:[te?n.jsx(er,{size:13,className:"text-emerald-400"}):n.jsx(vi,{size:13}),n.jsx("span",{children:te?"Hash Copied!":ee})]}),n.jsxs("button",{onClick:c,className:"px-4 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md transition-all active:scale-95 min-h-[40px] touch-manipulation",children:[n.jsx(ym,{size:14}),n.jsx("span",{children:"Print / Save PDF"})]})]})]}),n.jsxs("div",{id:"byteverse-certificate",className:"relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-slate-950 via-[#0b101c] to-slate-950 border-2 border-emerald-500/40 shadow-[0_0_60px_rgba(16,185,129,0.15)] text-center space-y-8 overflow-hidden print:border-black print:text-black print:bg-white",children:[n.jsx("div",{className:"absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-emerald-400 pointer-events-none"}),n.jsx("div",{className:"absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-emerald-400 pointer-events-none"}),n.jsx("div",{className:"absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-emerald-400 pointer-events-none"}),n.jsx("div",{className:"absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-emerald-400 pointer-events-none"}),n.jsxs("div",{className:"space-y-2",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-extrabold tracking-widest uppercase",children:[n.jsx("span",{children:"BYTEVERSE CODE ACADEMY"}),n.jsx("span",{children:"•"}),n.jsx("span",{children:"W3C-ALIGNED STANDARD"})]}),n.jsx("h2",{className:"text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 tracking-tight uppercase",children:"Certificate of Code Mastery"}),n.jsxs("p",{className:"text-xs sm:text-sm font-mono text-slate-400 tracking-wider",children:["DOCUMENT VERIFICATION HASH: ",n.jsx("span",{className:"text-emerald-400 font-bold",children:ee})]})]}),n.jsxs("div",{className:"space-y-3 max-w-2xl mx-auto",children:[n.jsx("p",{className:"text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-400",children:"This is to officially certify that"}),n.jsx("div",{className:"text-3xl sm:text-5xl font-black text-white tracking-wide border-b-2 border-emerald-500/30 pb-3 inline-block px-8",children:k}),n.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-2",children:["has successfully passed the comprehensive examination for ",n.jsx("strong",{className:"text-emerald-300 font-bold",children:ye.name})," with a final score of ",n.jsxs("strong",{className:"text-emerald-400 font-bold",children:[Y,"%"]}),", demonstrating proficiency in modern web architecture, algorithmic logic, and industry syntax standards."]})]}),n.jsxs("div",{className:"pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-3xl mx-auto",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-emerald-400 p-0.5 shadow-xl shadow-amber-500/20",children:n.jsxs("div",{className:"w-full h-full bg-slate-950 rounded-full flex flex-col items-center justify-center text-[10px] font-mono font-bold text-amber-300 leading-tight",children:[n.jsx(tr,{size:18,className:"text-amber-400 mb-0.5"}),n.jsx("span",{children:"VERIFIED"}),n.jsx("span",{className:"text-[8px] text-slate-400",children:"PASSED"})]})}),n.jsxs("div",{className:"text-left font-mono text-[11px] text-slate-400",children:[n.jsxs("div",{className:"text-emerald-400 font-bold",children:["Issued on ",new Date().toLocaleDateString()]}),n.jsx("div",{children:"Certified by W3-Curriculum"})]})]}),n.jsxs("div",{className:"text-center sm:text-right space-y-1",children:[n.jsx("div",{className:"font-serif italic text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 font-extrabold",children:"Affan Sayed"}),n.jsx("div",{className:"text-xs font-mono font-bold text-white",children:"Affan Sayed"}),n.jsx("div",{className:"text-[10px] font-mono text-slate-400",children:"Founder & Lead Architect, ByteVerse"}),n.jsxs("a",{href:"https://affansayed.vercel.app/",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-[10px] font-mono text-cyan-400 hover:text-cyan-300 underline",children:[n.jsx("span",{children:"affansayed.vercel.app"}),n.jsx(im,{size:10})]})]})]})]})]}),n.jsxs("div",{className:"flex items-center justify-center flex-wrap gap-4 pt-4",children:[n.jsxs("button",{onClick:()=>Ee(),className:"px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-2 min-h-[46px] touch-manipulation transition-all",children:[n.jsx(st,{size:15}),n.jsx("span",{children:"Retake Exam"})]}),n.jsxs("button",{onClick:()=>F(!M),className:`px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 min-h-[46px] touch-manipulation transition-all ${M?"bg-emerald-500 text-slate-950 font-black shadow-md":"bg-slate-900 border border-emerald-500/30 text-emerald-300 hover:bg-slate-800"}`,children:[n.jsx(On,{size:15}),n.jsx("span",{children:M?"Hide Detailed Answers":"Review Questions & Explanations"})]}),n.jsxs("button",{onClick:()=>{R.playClick(),S("lobby")},className:"px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs flex items-center gap-2 min-h-[46px] touch-manipulation transition-transform active:scale-95",children:[n.jsx("span",{children:"Choose Another Course"}),n.jsx(yn,{size:15})]})]}),M&&n.jsxs("div",{className:"space-y-5 animate-fadeIn pt-4",children:[n.jsxs("div",{className:"border-b border-slate-800 pb-3 flex items-center justify-between",children:[n.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[n.jsx(An,{size:18,className:"text-emerald-400"}),n.jsx("span",{children:"Comprehensive Answer Key & W3 Explanations"})]}),n.jsxs("span",{className:"text-xs font-mono text-slate-400",children:[D," Correct • ",B-D," Incorrect"]})]}),n.jsx("div",{className:"space-y-4",children:Te.map((N,U)=>{const se=L[N.id],de=se===N.correct,be=se!==void 0;return n.jsxs("div",{className:`p-6 rounded-2xl border transition-all ${de?"bg-slate-950/80 border-emerald-500/30":"bg-slate-950/80 border-rose-500/30"}`,children:[n.jsxs("div",{className:"flex items-start justify-between gap-3 mb-2",children:[n.jsxs("span",{className:"text-xs font-mono font-bold text-slate-400",children:["Question ",U+1]}),n.jsxs("span",{className:`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold flex items-center gap-1 ${de?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/30":"bg-rose-500/20 text-rose-400 border border-rose-500/30"}`,children:[de?n.jsx(lt,{size:12}):n.jsx(It,{size:12}),n.jsx("span",{children:de?"Correct (+1)":be?"Incorrect (0)":"Unanswered (0)"})]})]}),n.jsx("h4",{className:"text-sm font-bold text-white mb-2",children:N.question}),N.code&&n.jsx("div",{className:"p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-emerald-300 mb-3 overflow-x-auto touch-scroll",children:n.jsx("pre",{className:"whitespace-pre-wrap",children:N.code})}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 my-3",children:N.options.map((Se,Pe)=>{const ge=se===Pe,qe=N.correct===Pe;return n.jsxs("div",{className:`p-3 rounded-xl text-xs font-mono flex items-center justify-between border ${qe?"bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold":ge&&!de?"bg-rose-500/20 border-rose-400 text-rose-200 line-through":"bg-slate-900/50 border-slate-800/80 text-slate-400"}`,children:[n.jsxs("span",{children:[String.fromCharCode(65+Pe),". ",Se]}),qe&&n.jsx(er,{size:14,className:"text-emerald-400 shrink-0 ml-2"}),ge&&!de&&n.jsx(It,{size:14,className:"text-rose-400 shrink-0 ml-2"})]},Pe)})}),n.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1",children:[n.jsx("span",{className:"font-mono text-emerald-400 font-bold block uppercase tracking-wider text-[11px]",children:"💡 W3 Concept Explanation:"}),n.jsx("p",{className:"leading-relaxed font-sans",children:N.explanation})]})]},N.id)})})]})]})},Gm=()=>{const{addXP:w}=at(),[m,u]=j.useState("tutorials"),[T,S]=j.useState("html"),[z,g]=j.useState("html_home"),[k,E]=j.useState(!1),[q,A]=j.useState(""),[L,_]=j.useState(!1),[J,G]=j.useState(""),[K,C]=j.useState(null),[W,P]=j.useState(!1),[M,F]=j.useState(null),[ee,ue]=j.useState(null),[te,ve]=j.useState(()=>{try{const V=localStorage.getItem("byteverse_completed_exercises");return V?JSON.parse(V):[]}catch{return[]}}),[ke,ye]=j.useState(""),[Te,je]=j.useState("all"),[Ee,fe]=j.useState(null);j.useEffect(()=>{try{localStorage.setItem("byteverse_completed_exercises",JSON.stringify(te))}catch{}},[te]);const ie=fi[T]||fi.html,Ce=ie.findIndex(V=>V.id===z),ce=Ce>=0?Ce:0,b=ie[ce],[X,c]=j.useState(null);b&&b.id!==X&&(G(b.tryItCode),C(null),F(null),ue(null),c(b.id)),j.useEffect(()=>(typeof window<"u"&&"speechSynthesis"in window&&(window.speechSynthesis.cancel(),_(!1)),()=>{typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis.cancel()}),[b==null?void 0:b.id,m]);const l=V=>{if(typeof window>"u"||!("speechSynthesis"in window)){alert("Text-to-speech is supported in all modern browsers like Chrome, Edge, Safari.");return}if(L)window.speechSynthesis.cancel(),_(!1);else{window.speechSynthesis.cancel();const me=new SpeechSynthesisUtterance(V);me.rate=.92,me.pitch=1.05,me.onend=()=>_(!1),me.onerror=()=>_(!1),_(!0),window.speechSynthesis.speak(me)}},f=V=>{R.playClick(),S(V);const me=fi[V]||[];me.length>0&&g(me[0].id),A(""),ye(""),je("all"),C(null)},D=V=>{R.playClick(),g(V),E(!1),window.scrollTo({top:0,behavior:"smooth"})},B=()=>{ce>0&&(R.playClick(),g(ie[ce-1].id),window.scrollTo({top:0,behavior:"smooth"}))},Y=()=>{ce<ie.length-1&&(R.playClick(),g(ie[ce+1].id),window.scrollTo({top:0,behavior:"smooth"}))},Q=()=>{R.playCorrect();const V=b.codeType;if(V==="html")C({type:"html",content:J});else if(V==="js")try{let me=[];const _e=console.log;console.log=(...De)=>{me.push(De.map(ct=>typeof ct=="object"?JSON.stringify(ct):String(ct)).join(" "))},new Function(J)(),console.log=_e,C({type:"text",content:me.length?me.join(`
`):"Code executed with 0 runtime errors."})}catch(me){C({type:"error",content:me.message})}else C(V==="sql"?{type:"text",content:`Query Result Set (3 rows returned in 0.002s):
-------------------------------------------------
| CustomerID | CustomerName    | City    | Country |
| 1          | Alfreds Futter  | Berlin  | Germany |
| 2          | Ana Trujillo    | México  | Mexico  |
| 3          | Antonio Moreno  | México  | Mexico  |
-------------------------------------------------`}:{type:"text",content:`[${V.toUpperCase()} Runtime Simulation]:
Execution successful.
Process finished with exit code 0.`})},N=()=>{R.playClick(),G(b.tryItCode),C(null)},U=()=>{R.playClick(),navigator.clipboard.writeText(J),P(!0),setTimeout(()=>P(!1),2e3)},se=V=>{R.playClick(),F(V),b.exercise&&(V===b.exercise.correct?(R.playCorrect(),ue("correct"),te.includes(b.id)||(ve(me=>[...me,b.id]),w(30))):(R.playError(),ue("wrong")))},de=ie.filter(V=>V.title.toLowerCase().includes(q.toLowerCase())||V.summary.toLowerCase().includes(q.toLowerCase())),be=[...new Set(de.map(V=>V.category))],Se=ie.filter(V=>te.includes(V.id)).length,Pe=Math.round(Se/ie.length*100),ge=Um[T]||[],qe=["all",...new Set(ge.map(V=>V.category))],Je=ge.filter(V=>{const me=V.name.toLowerCase().includes(ke.toLowerCase())||V.desc.toLowerCase().includes(ke.toLowerCase())||V.syntax.toLowerCase().includes(ke.toLowerCase()),_e=Te==="all"||V.category===Te;return me&&_e});return n.jsxs("div",{className:"space-y-5 pb-16 md:pb-8 animate-fadeIn",children:[n.jsxs("div",{className:"rounded-2xl glass-panel border border-emerald-500/20 bg-slate-950 p-2 sm:p-2.5 shadow-xl flex items-center justify-between gap-2 overflow-x-auto touch-scroll",children:[n.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2 shrink-0",children:[m==="tutorials"&&n.jsx("button",{onClick:()=>E(!k),className:"md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white min-h-[40px] min-w-[40px] flex items-center justify-center touch-manipulation",title:"Toggle Lessons Menu",children:k?n.jsx(xa,{size:18}):n.jsx(gm,{size:18})}),n.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 font-mono text-xs font-bold",children:[n.jsx(An,{size:14}),n.jsx("span",{className:"hidden sm:inline",children:"W3-ACADEMY"}),n.jsx("span",{className:"sm:hidden font-mono uppercase",children:T})]})]}),n.jsx("div",{className:"flex items-center gap-1 sm:gap-1.5",children:Du.map(V=>{const me=T===V.id;return n.jsx("button",{onClick:()=>f(V.id),className:`px-3 py-1.5 rounded-xl font-mono text-xs font-bold uppercase transition-all whitespace-nowrap min-h-[38px] touch-manipulation ${me?"bg-emerald-500 text-slate-950 shadow-[0_0_12px_rgba(16,185,129,0.5)] font-black":"text-slate-400 hover:text-slate-200 hover:bg-slate-900"}`,children:V.name},V.id)})})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-3 p-2 sm:p-3 rounded-2xl glass-panel bg-slate-950/80 border border-slate-800 shadow-md",children:[n.jsxs("div",{className:"flex items-center gap-1.5 w-full sm:w-auto",children:[n.jsxs("button",{onClick:()=>{R.playClick(),u("tutorials")},className:`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold font-mono flex items-center justify-center gap-2 transition-all min-h-[42px] touch-manipulation ${m==="tutorials"?"bg-emerald-500 text-slate-950 shadow-md font-black":"text-slate-400 hover:text-white hover:bg-slate-900"}`,children:[n.jsx(An,{size:14}),n.jsx("span",{children:"Course Tutorials"})]}),n.jsxs("button",{onClick:()=>{R.playClick(),u("exams")},className:`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold font-mono flex items-center justify-center gap-2 transition-all min-h-[42px] touch-manipulation ${m==="exams"?"bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-md font-black":"text-slate-400 hover:text-white hover:bg-slate-900"}`,children:[n.jsx(hm,{size:15}),n.jsx("span",{children:"MCQ Certification Exam"}),n.jsx("span",{className:"hidden md:inline px-1.5 py-0.2 rounded-full bg-slate-900 text-emerald-300 text-[10px] font-bold",children:"CERT"})]}),n.jsxs("button",{onClick:()=>{R.playClick(),u("cheatsheet")},className:`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold font-mono flex items-center justify-center gap-2 transition-all min-h-[42px] touch-manipulation ${m==="cheatsheet"?"bg-cyan-500 text-slate-950 shadow-md font-black":"text-slate-400 hover:text-white hover:bg-slate-900"}`,children:[n.jsx(xn,{size:14}),n.jsx("span",{children:"Syntax Quick-Ref"})]})]}),m==="tutorials"&&n.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end px-2 sm:px-0",children:[n.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono",children:[n.jsx("span",{className:"text-slate-400",children:"Track Progress:"}),n.jsxs("span",{className:"text-emerald-400 font-bold",children:[Se," / ",ie.length]}),n.jsxs("span",{className:"text-[11px] text-slate-500",children:["(",Pe,"%)"]})]}),n.jsx("div",{className:"w-24 sm:w-32 h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500",style:{width:`${Pe}%`}})})]})]}),m==="exams"&&n.jsx(Vm,{defaultTrack:T,onSwitchToTutorials:()=>u("tutorials")}),m==="cheatsheet"&&n.jsxs("div",{className:"space-y-6 animate-fadeIn pb-12",children:[n.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-cyan-500/30 shadow-xl space-y-3",children:[n.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2",children:[n.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold",children:[n.jsx(xn,{size:14}),n.jsxs("span",{children:["RAPID REFERENCE GUIDE • ",T.toUpperCase()]})]}),n.jsxs("span",{className:"text-xs font-mono text-slate-400",children:[Je.length," syntax references"]})]}),n.jsxs("h2",{className:"text-2xl sm:text-3xl font-black text-white",children:[T.toUpperCase()," Syntax Quick-Reference Cheat Sheet"]}),n.jsx("p",{className:"text-xs sm:text-sm text-slate-300",children:"Instantly search, copy, and inspect canonical W3-standard syntax, parameters, and descriptions for all core elements and keywords."}),n.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3 pt-3",children:[n.jsxs("div",{className:"relative w-full sm:flex-1",children:[n.jsx(ki,{size:15,className:"absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"}),n.jsx("input",{type:"text",value:ke,onChange:V=>ye(V.target.value),placeholder:`Search ${T.toUpperCase()} tags, functions, syntax...`,className:"w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"})]}),n.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto touch-scroll w-full sm:w-auto pb-1 sm:pb-0",children:qe.map(V=>n.jsx("button",{onClick:()=>{R.playClick(),je(V)},className:`px-3 py-1.5 rounded-xl font-mono text-[11px] font-bold uppercase whitespace-nowrap transition-all min-h-[36px] touch-manipulation ${Te===V?"bg-cyan-500 text-slate-950 font-black shadow-sm":"bg-slate-900 text-slate-400 hover:text-white border border-slate-800"}`,children:V},V))})]})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:Je.map((V,me)=>n.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all space-y-3 group",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2",children:[n.jsx("span",{className:"font-mono text-sm font-black text-cyan-300",children:V.name}),n.jsx("span",{className:"px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono font-bold text-slate-400",children:V.category})]}),n.jsxs("div",{className:"relative p-3 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto touch-scroll flex items-center justify-between gap-2",children:[n.jsx("code",{className:"whitespace-pre-wrap",children:V.syntax}),n.jsx("button",{onClick:()=>{R.playClick(),navigator.clipboard.writeText(V.syntax),fe(V.name),setTimeout(()=>fe(null),1500)},className:"shrink-0 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors",title:"Copy Syntax",children:Ee===V.name?n.jsx(er,{size:13,className:"text-emerald-400"}):n.jsx(vi,{size:13})})]}),n.jsx("p",{className:"text-xs text-slate-300 leading-relaxed font-sans",children:V.desc})]},me))})]}),m==="tutorials"&&n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-6 items-start",children:[n.jsxs("aside",{className:`
            fixed md:relative inset-y-0 left-0 z-40 md:z-auto w-72 md:w-full md:col-span-3 lg:col-span-3
            glass-panel bg-slate-950 md:bg-slate-950/80 border border-slate-800 rounded-none md:rounded-2xl p-4
            transition-transform duration-300 overflow-y-auto touch-scroll max-h-[85vh]
            ${k?"translate-x-0 shadow-2xl":"-translate-x-full md:translate-x-0"}
          `,children:[n.jsxs("div",{className:"md:hidden flex items-center justify-between pb-3 mb-3 border-b border-slate-800",children:[n.jsxs("span",{className:"font-bold text-sm text-white flex items-center gap-2",children:[n.jsx(An,{size:16,className:"text-emerald-400"}),n.jsx("span",{children:"Select Lesson"})]}),n.jsx("button",{onClick:()=>E(!1),className:"text-slate-400 hover:text-white p-1 rounded-lg bg-slate-900 border border-slate-800",children:n.jsx(xa,{size:18})})]}),n.jsxs("div",{className:"relative mb-4",children:[n.jsx(ki,{size:14,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"}),n.jsx("input",{type:"text",value:q,onChange:V=>A(V.target.value),placeholder:"Filter topics...",className:"w-full pl-8 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-emerald-400 placeholder:text-slate-500"})]}),n.jsx("div",{className:"space-y-4",children:be.map((V,me)=>n.jsxs("div",{className:"space-y-1",children:[n.jsx("div",{className:"text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider px-2 py-1",children:V}),n.jsx("div",{className:"space-y-0.5",children:de.filter(_e=>_e.category===V).map(_e=>{const De=_e.id===b.id,ct=te.includes(_e.id);return n.jsxs("button",{onClick:()=>D(_e.id),className:`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between min-h-[38px] touch-manipulation ${De?"bg-emerald-500/20 text-emerald-300 font-bold border-l-4 border-emerald-400 shadow-sm":"text-slate-300 hover:text-white hover:bg-slate-900/60"}`,children:[n.jsx("span",{className:"truncate",children:_e.title}),ct&&n.jsx(lt,{size:13,className:"text-emerald-400 shrink-0 ml-1"})]},_e.id)})})]},me))})]}),n.jsxs("main",{className:"md:col-span-9 lg:col-span-9 space-y-6",children:[n.jsxs("div",{className:"glass-panel p-3 rounded-2xl border border-slate-800 flex items-center justify-between gap-2",children:[n.jsxs("button",{onClick:B,disabled:ce===0,className:`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all min-h-[42px] touch-manipulation ${ce>0?"bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm active:scale-95":"bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800"}`,children:[n.jsx(bi,{size:16}),n.jsx("span",{children:"< Previous"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsxs("span",{className:"text-xs font-mono text-slate-400",children:[ce+1," / ",ie.length]}),te.includes(b.id)&&n.jsxs("span",{className:"px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1",children:[n.jsx(lt,{size:11})," Mastered"]})]}),n.jsxs("button",{onClick:Y,disabled:ce===ie.length-1,className:`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all min-h-[42px] touch-manipulation ${ce<ie.length-1?"bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm active:scale-95":"bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800"}`,children:[n.jsx("span",{children:"Next >"}),n.jsx(ma,{size:16})]})]}),n.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-3",children:[n.jsx("div",{className:"text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider",children:b.category}),n.jsx("h1",{className:"text-2xl sm:text-3xl font-black text-white tracking-tight",children:b.title}),n.jsx("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed font-sans",children:b.summary})]}),b.eli5&&n.jsxs("div",{className:"glass-panel p-6 sm:p-7 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-950/20 via-slate-900/90 to-slate-950 shadow-xl space-y-4",children:[n.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-amber-500/20",children:[n.jsxs("span",{className:"text-xs font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-2",children:[n.jsx("span",{className:"text-lg",children:"👶"}),n.jsx("span",{children:"Explain Like I'm 5 (Super Simple Concept)"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsxs("button",{onClick:()=>{var me,_e,De;const V=`${b.title}. Story: ${b.eli5.story}. Analogy: ${b.eli5.analogy||""}. Rule 1: ${((me=b.eli5.rules)==null?void 0:me[0])||""}. Rule 2: ${((_e=b.eli5.rules)==null?void 0:_e[1])||""}. Rule 3: ${((De=b.eli5.rules)==null?void 0:De[2])||""}`;l(V)},className:`px-3 py-1.5 rounded-full text-xs font-bold font-mono flex items-center gap-1.5 transition-all active:scale-95 shadow-md min-h-[36px] touch-manipulation ${L?"bg-rose-500 text-white animate-pulse":"bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40"}`,title:"Click to have this explanation read aloud",children:[L?n.jsx(_i,{size:14}):n.jsx(Li,{size:14}),n.jsx("span",{children:L?"Stop Reading":"🔊 Read Aloud for Kids"})]}),n.jsx("span",{className:"text-[11px] text-amber-300/80 font-mono font-semibold bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30",children:"Easy Story Mode"})]})]}),n.jsxs("div",{className:"text-sm text-slate-200 leading-relaxed font-sans bg-slate-900/60 p-4 rounded-2xl border border-slate-800",children:[n.jsx("p",{className:"font-medium text-amber-200/90 text-xs font-mono uppercase mb-1",children:"📖 The Fun Story:"}),b.eli5.story]}),b.eli5.analogy&&n.jsx("div",{className:"p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-300 font-semibold flex items-center gap-2.5",children:n.jsx("span",{children:b.eli5.analogy})}),b.eli5.rules&&n.jsxs("div",{className:"space-y-1.5 pt-1",children:[n.jsx("span",{className:"text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider block",children:"3 Simple Rules Anyone Can Remember:"}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2",children:b.eli5.rules.map((V,me)=>n.jsxs("div",{className:"p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2",children:[n.jsxs("span",{className:"text-amber-400 font-bold font-mono",children:["#",me+1]}),n.jsx("span",{children:V})]},me))})]})]}),n.jsxs("div",{className:"rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl space-y-0",children:[n.jsxs("div",{className:"bg-slate-900 px-5 py-3 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2",children:[n.jsxs("span",{className:"text-xs font-bold text-white font-mono flex items-center gap-2",children:[n.jsx(On,{size:16,className:"text-emerald-400"}),n.jsxs("span",{children:["Example: ",b.title]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsxs("button",{onClick:N,className:"px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 min-h-[32px] touch-manipulation",title:"Reset to Original Code",children:[n.jsx(st,{size:12}),n.jsx("span",{children:"Reset"})]}),n.jsxs("button",{onClick:U,className:"px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 min-h-[32px] touch-manipulation",children:[W?n.jsx(er,{size:13,className:"text-emerald-400"}):n.jsx(vi,{size:13}),n.jsx("span",{children:W?"Copied":"Copy"})]})]})]}),n.jsxs("div",{className:"p-4 sm:p-5 bg-slate-950",children:[n.jsx("textarea",{value:J,onChange:V=>G(V.target.value),className:"w-full h-44 sm:h-52 p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-300 font-mono text-xs focus:outline-none focus:border-emerald-400 leading-relaxed resize-y",spellCheck:"false"}),n.jsxs("div",{className:"mt-3 flex items-center justify-between flex-wrap gap-2",children:[n.jsxs("button",{onClick:Q,className:"px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2 transition-transform active:scale-95 min-h-[44px] touch-manipulation",children:[n.jsx(zt,{size:15,className:"fill-current"}),n.jsx("span",{children:"Try it Yourself »"})]}),n.jsx("span",{className:"text-[11px] text-slate-500 font-mono",children:"Edit code above and click to test"})]})]}),K&&n.jsxs("div",{className:"border-t border-slate-800 p-4 sm:p-5 bg-slate-900/90 font-mono text-xs animate-fadeIn",children:[n.jsxs("div",{className:"text-[11px] font-bold text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-1.5",children:[n.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-ping"}),n.jsx("span",{children:"Live Result / Preview:"})]}),K.type==="html"?n.jsx("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 text-white min-h-[140px] overflow-auto",dangerouslySetInnerHTML:{__html:K.content}}):n.jsx("pre",{className:`p-3.5 rounded-xl bg-slate-950 border border-slate-800 whitespace-pre-wrap overflow-x-auto ${K.type==="error"?"text-rose-400":"text-emerald-300"}`,children:K.content})]})]}),n.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4",children:[n.jsx("div",{className:"text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-line",children:b.body}),b.tips&&n.jsxs("div",{className:"p-4 rounded-2xl bg-amber-500/10 border-l-4 border-amber-400 text-amber-200 text-xs sm:text-sm flex items-start gap-3",children:[n.jsx(ga,{size:20,className:"shrink-0 text-amber-400 mt-0.5"}),n.jsxs("div",{children:[n.jsx("strong",{className:"block text-amber-300 font-bold mb-0.5",children:"Tip:"}),n.jsx("span",{children:b.tips})]})]}),b.notes&&n.jsxs("div",{className:"p-4 rounded-2xl bg-cyan-500/10 border-l-4 border-cyan-400 text-cyan-200 text-xs sm:text-sm flex items-start gap-3",children:[n.jsx(fm,{size:20,className:"shrink-0 text-cyan-400 mt-0.5"}),n.jsxs("div",{children:[n.jsx("strong",{className:"block text-cyan-300 font-bold mb-0.5",children:"Note:"}),n.jsx("span",{children:b.notes})]})]})]}),b.referenceTable&&n.jsxs("div",{className:"glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-3",children:[n.jsxs("h3",{className:"text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2",children:[n.jsx(cm,{size:16,className:"text-emerald-400"}),n.jsx("span",{children:"Reference Guide"})]}),n.jsx("div",{className:"overflow-x-auto touch-scroll",children:n.jsxs("table",{className:"w-full text-left font-mono text-xs border-collapse",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"border-b border-slate-800 text-slate-400",children:[n.jsx("th",{className:"p-2.5",children:"Syntax / Element"}),n.jsx("th",{className:"p-2.5",children:"Description"})]})}),n.jsx("tbody",{className:"divide-y divide-slate-800/60",children:b.referenceTable.map((V,me)=>n.jsxs("tr",{className:"hover:bg-slate-900/60",children:[n.jsx("td",{className:"p-2.5 text-emerald-300 font-bold",children:V.item}),n.jsx("td",{className:"p-2.5 text-slate-300 font-sans",children:V.description})]},me))})]})})]}),b.exercise&&n.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-slate-900 to-slate-950 space-y-4",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[n.jsx(om,{size:18,className:"text-emerald-400"}),n.jsx("span",{children:"Test Yourself With Exercises!"})]}),n.jsx("span",{className:"text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold",children:"+30 XP"})]}),n.jsx("p",{className:"text-xs sm:text-sm font-semibold text-slate-200",children:b.exercise.question}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:b.exercise.options.map((V,me)=>{const _e=M===me;return n.jsxs("button",{onClick:()=>se(me),className:`text-left p-3.5 rounded-xl border text-xs font-mono transition-all flex items-center justify-between min-h-[46px] touch-manipulation ${_e&&ee==="correct"?"bg-emerald-500/20 border-emerald-400 text-emerald-200 font-bold":_e&&ee==="wrong"?"bg-rose-500/20 border-rose-400 text-rose-200":"bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700"}`,children:[n.jsx("span",{children:V}),n.jsx("span",{className:"text-[10px] text-slate-500 ml-2",children:String.fromCharCode(65+me)})]},me)})}),ee==="correct"&&n.jsxs("div",{className:"p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-fadeIn",children:[n.jsx(lt,{size:16}),n.jsx("span",{children:"Correct Answer! You earned +30 XP!"})]}),ee==="wrong"&&n.jsx("div",{className:"p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-semibold flex items-center gap-2 animate-fadeIn",children:n.jsxs("span",{children:["Incorrect. Hint: ",b.exercise.hint]})})]}),n.jsxs("div",{className:"glass-panel p-3 rounded-2xl border border-slate-800 flex items-center justify-between gap-2",children:[n.jsxs("button",{onClick:B,disabled:ce===0,className:`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all min-h-[42px] touch-manipulation ${ce>0?"bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm active:scale-95":"bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800"}`,children:[n.jsx(bi,{size:16}),n.jsx("span",{children:"< Previous"})]}),n.jsxs("button",{onClick:Y,disabled:ce===ie.length-1,className:`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all min-h-[42px] touch-manipulation ${ce<ie.length-1?"bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm active:scale-95":"bg-slate-900 text-slate-600 cursor-not-allowed border border-slate-800"}`,children:[n.jsx("span",{children:"Next >"}),n.jsx(ma,{size:16})]})]})]})]})]})},gi=[{id:1,category:"HTML & CSS",question:"Which CSS property is used to change the text color?",options:["color","font-color","text-color","foreground"],correctIndex:0,timeLimit:12},{id:2,category:"JavaScript",question:"What is the output of `typeof null` in JavaScript?",options:['"object"','"null"','"undefined"','"number"'],correctIndex:0,timeLimit:12},{id:3,category:"Python",question:"Which method adds an element to the end of a Python list?",options:["append()","push()","add()","insert_last()"],correctIndex:0,timeLimit:12},{id:4,category:"MySQL",question:"Which SQL clause is used to eliminate duplicate rows from results?",options:["DISTINCT","UNIQUE","DIFFERENT","FILTER_DUP"],correctIndex:0,timeLimit:12},{id:5,category:"PHP",question:"Which superglobal holds information about headers, paths, and script locations?",options:["$_SERVER","$_ENV","$_GLOBALS","$_REQUEST"],correctIndex:0,timeLimit:12},{id:6,category:"Django",question:`What does the "T" stand for in Django's MTV architectural pattern?`,options:["Template","Table","Test","Token"],correctIndex:0,timeLimit:12},{id:7,category:"HTML & CSS",question:"Which HTML5 element represents self-contained content like a blog post or tweet?",options:["<article>","<section>","<aside>","<container>"],correctIndex:0,timeLimit:12},{id:8,category:"JavaScript",question:"Which array method checks if at least one item satisfies a condition?",options:["some()","every()","includes()","find()"],correctIndex:0,timeLimit:12},{id:9,category:"Python",question:"How do you create a tuple with a single element in Python?",options:["(42,)","(42)","[42]","{42}"],correctIndex:0,timeLimit:12},{id:10,category:"MySQL",question:"Which SQL keyword joins two queries together and keeps only unique rows?",options:["UNION","COMBINE","JOIN ALL","CONCAT"],correctIndex:0,timeLimit:12}],Qm=()=>{const{addXP:w,unlockAchievement:m,triggerConfetti:u}=at(),[T,S]=j.useState(!1),[z,g]=j.useState(0),[k,E]=j.useState(0),[q,A]=j.useState(0),[L,_]=j.useState(null),[J,G]=j.useState(!1),[K,C]=j.useState(12),W=gi[z];j.useEffect(()=>{let ue;return T&&!L&&!J&&K>0?ue=setInterval(()=>{C(te=>te-1)},1e3):K===0&&!L&&(R.playError(),_("timeup")),()=>clearInterval(ue)},[T,L,J,K]);const P=()=>{R.playStreak(),S(!0),g(0),E(0),A(0),_(null),G(!1),C(12),m("duelist")},M=ue=>{L||J||(ue===W.correctIndex?(R.playCorrect(),E(te=>te+100),_("p1")):(R.playError(),E(te=>Math.max(0,te-25))))},F=ue=>{L||J||(ue===W.correctIndex?(R.playCorrect(),A(te=>te+100),_("p2")):(R.playError(),A(te=>Math.max(0,te-25))))},ee=()=>{R.playClick(),z+1<gi.length?(g(ue=>ue+1),_(null),C(12)):(R.playLevelUp(),u(),G(!0),w(150))};return n.jsxs("div",{className:"space-y-6 sm:space-y-8 pb-16 md:pb-6",children:[n.jsx("div",{className:"rounded-2xl sm:rounded-3xl glass-panel p-5 sm:p-8 border border-pink-500/20 bg-gradient-to-br from-slate-900 via-slate-900/90 to-pink-950/30 shadow-2xl",children:n.jsxs("div",{className:"max-w-3xl",children:[n.jsxs("div",{className:"inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-[11px] sm:text-xs font-mono font-semibold mb-2.5",children:[n.jsx(Pi,{size:13}),n.jsx("span",{children:"BYTEVERSE CO-OP & DUEL ARENA"})]}),n.jsxs("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight",children:["Learn & Play Together. ",n.jsx("br",{className:"hidden sm:inline"}),n.jsx("span",{className:"bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent",children:"2-Player Code Duel on Any Device."})]}),n.jsx("p",{className:"text-xs sm:text-sm lg:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed",children:"Challenge a friend on the same tablet, iPad, phone, or laptop! Race to answer code trivia and bug fixes across all 7 languages."})]})}),!T&&!J&&n.jsxs("div",{className:"glass-panel p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-800 text-center max-w-xl mx-auto space-y-5",children:[n.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-br from-pink-500 to-cyan-500 p-0.5 shadow-[0_0_30px_rgba(236,72,153,0.3)]",children:n.jsx("div",{className:"w-full h-full bg-slate-950 rounded-[14px] sm:rounded-[22px] flex items-center justify-center text-pink-400",children:n.jsx(Si,{size:32})})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl sm:text-2xl font-black text-white",children:"Ready for the Code Duel?"}),n.jsxs("p",{className:"text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed",children:["Place your phone or iPad on a desk! Player 1 takes the ",n.jsx("strong",{children:"Cyan side"})," and Player 2 takes the ",n.jsx("strong",{children:"Pink side"}),"."]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs font-mono",children:[n.jsxs("div",{className:"p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300",children:[n.jsx("div",{className:"font-bold text-xs sm:text-sm mb-0.5",children:"Player 1"}),n.jsx("span",{className:"text-[11px] text-slate-400",children:"Left / Top Deck"})]}),n.jsxs("div",{className:"p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-pink-500/10 border border-pink-500/30 text-pink-300",children:[n.jsx("div",{className:"font-bold text-xs sm:text-sm mb-0.5",children:"Player 2"}),n.jsx("span",{className:"text-[11px] text-slate-400",children:"Right / Bottom Deck"})]})]}),n.jsxs("button",{onClick:P,className:"w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-black text-sm sm:text-base bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white shadow-[0_0_25px_rgba(236,72,153,0.4)] active:scale-95 transition-transform flex items-center justify-center gap-2",children:[n.jsx(zt,{size:18,className:"fill-current"}),n.jsx("span",{children:"Start 2-Player Match"})]})]}),T&&!J&&n.jsxs("div",{className:"space-y-4 sm:space-y-6",children:[n.jsxs("div",{className:"glass-panel p-3.5 sm:p-4 rounded-2xl border border-slate-800 flex items-center justify-between gap-2 sm:gap-4",children:[n.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[n.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-xs sm:text-sm font-bold flex items-center justify-center",children:"P1"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-[10px] sm:text-xs text-slate-400 font-mono",children:"Player 1"}),n.jsxs("div",{className:"text-base sm:text-xl font-black text-cyan-400",children:[k," ",n.jsx("span",{className:"text-[10px] text-slate-400 font-normal",children:"PTS"})]})]})]}),n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-900 border border-slate-700 text-amber-400 font-mono text-xs sm:text-sm font-bold",children:[n.jsx(Sm,{size:14}),n.jsxs("span",{children:[K,"s"]})]}),n.jsxs("span",{className:"text-[10px] sm:text-[11px] text-slate-500 font-mono mt-0.5",children:["R",z+1,"/",gi.length]})]}),n.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 text-right",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-[10px] sm:text-xs text-slate-400 font-mono",children:"Player 2"}),n.jsxs("div",{className:"text-base sm:text-xl font-black text-pink-400",children:[q," ",n.jsx("span",{className:"text-[10px] text-slate-400 font-normal",children:"PTS"})]})]}),n.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-pink-500/20 border border-pink-400 text-pink-300 text-xs sm:text-sm font-bold flex items-center justify-center",children:"P2"})]})]}),n.jsxs("div",{className:"glass-panel p-4 sm:p-6 rounded-2xl border border-slate-800 text-center",children:[n.jsxs("span",{className:"text-[11px] sm:text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold",children:["Category: ",W.category]}),n.jsx("h2",{className:"text-base sm:text-xl font-bold text-white mt-1 leading-snug",children:W.question})]}),L&&n.jsxs("div",{className:"p-3.5 sm:p-4 rounded-2xl text-center font-bold text-xs sm:text-sm border flex flex-col sm:flex-row items-center justify-between gap-3 animate-fadeIn bg-slate-900/90 border-slate-700",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(rt,{size:16,className:"text-amber-400 shrink-0"}),n.jsxs("span",{children:[L==="p1"&&"🎉 Player 1 won the round! (+100 PTS)",L==="p2"&&"🎉 Player 2 won the round! (+100 PTS)",L==="timeup"&&"⏰ Time expired! No points."]})]}),n.jsx("button",{onClick:ee,className:"w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xs shadow-md active:scale-95 transition-transform",children:"Next Round →"})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",children:[n.jsxs("div",{className:"glass-panel p-4 sm:p-6 rounded-2xl border border-cyan-500/30 space-y-3 sm:space-y-4 bg-gradient-to-b from-cyan-950/20 to-slate-950/40",children:[n.jsxs("div",{className:"flex items-center justify-between pb-1.5 border-b border-cyan-500/20",children:[n.jsxs("span",{className:"text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5",children:[n.jsx(Rn,{size:13}),"Player 1 Deck"]}),n.jsx("span",{className:"text-[9px] sm:text-[10px] text-slate-500",children:"Tap fast to claim"})]}),n.jsx("div",{className:"space-y-2",children:W.options.map((ue,te)=>n.jsxs("button",{onClick:()=>M(te),disabled:L!==null,className:"w-full min-h-[44px] text-left p-2.5 sm:p-3.5 rounded-xl border border-slate-800 bg-slate-900/80 active:bg-cyan-500/20 active:border-cyan-400 text-xs font-mono text-slate-200 transition-all flex items-center justify-between group",children:[n.jsx("span",{className:"break-words pr-2",children:ue}),n.jsx("span",{className:"w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-[10px] shrink-0",children:te+1})]},te))})]}),n.jsxs("div",{className:"glass-panel p-4 sm:p-6 rounded-2xl border border-pink-500/30 space-y-3 sm:space-y-4 bg-gradient-to-b from-pink-950/20 to-slate-950/40",children:[n.jsxs("div",{className:"flex items-center justify-between pb-1.5 border-b border-pink-500/20",children:[n.jsxs("span",{className:"text-xs font-mono text-pink-400 font-bold flex items-center gap-1.5",children:[n.jsx(Rn,{size:13}),"Player 2 Deck"]}),n.jsx("span",{className:"text-[9px] sm:text-[10px] text-slate-500",children:"Tap fast to claim"})]}),n.jsx("div",{className:"space-y-2",children:W.options.map((ue,te)=>n.jsxs("button",{onClick:()=>F(te),disabled:L!==null,className:"w-full min-h-[44px] text-left p-2.5 sm:p-3.5 rounded-xl border border-slate-800 bg-slate-900/80 active:bg-pink-500/20 active:border-pink-400 text-xs font-mono text-slate-200 transition-all flex items-center justify-between group",children:[n.jsx("span",{className:"break-words pr-2",children:ue}),n.jsx("span",{className:"w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-[10px] shrink-0",children:String.fromCharCode(65+te)})]},te))})]})]})]}),J&&n.jsxs("div",{className:"glass-panel p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-800 text-center max-w-lg mx-auto space-y-5 animate-fadeIn",children:[n.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-500 p-0.5 shadow-[0_0_30px_rgba(245,158,11,0.4)]",children:n.jsx("div",{className:"w-full h-full bg-slate-950 rounded-[14px] sm:rounded-[22px] flex items-center justify-center text-yellow-400",children:n.jsx(gn,{size:36})})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-2xl sm:text-3xl font-black text-white",children:"Duel Complete!"}),n.jsxs("p",{className:"text-base sm:text-lg font-bold text-amber-400 mt-1.5",children:[k>q&&"🏆 Player 1 Takes the Crown!",q>k&&"🏆 Player 2 Takes the Crown!",k===q&&"🤝 Legendary Tie Match!"]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 text-center",children:[n.jsxs("div",{className:"p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-cyan-500/10 border border-cyan-500/30",children:[n.jsx("div",{className:"text-[10px] sm:text-xs text-slate-400 font-mono",children:"Player 1 Final"}),n.jsxs("div",{className:"text-xl sm:text-2xl font-black text-cyan-400",children:[k," PTS"]})]}),n.jsxs("div",{className:"p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-pink-500/10 border border-pink-500/30",children:[n.jsx("div",{className:"text-[10px] sm:text-xs text-slate-400 font-mono",children:"Player 2 Final"}),n.jsxs("div",{className:"text-xl sm:text-2xl font-black text-pink-400",children:[q," PTS"]})]})]}),n.jsx("div",{className:"text-xs text-emerald-400 font-semibold",children:"+150 Bonus XP awarded for team play!"}),n.jsxs("button",{onClick:P,className:"w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2",children:[n.jsx(st,{size:15}),n.jsx("span",{children:"Rematch"})]})]})]})},Ym=()=>{const[w,m]=j.useState("web"),[u,T]=j.useState("editor"),[S,z]=j.useState("html"),[g,k]=j.useState(!1),[E,q]=j.useState("All"),[A,L]=j.useState("Default Sandbox"),[_,J]=j.useState(`<div class="card">
  <h2>⚡ ByteVerse Sandbox</h2>
  <p>Edit HTML, CSS, and JS live on any device!</p>
  <button onclick="alert('Hello from ByteVerse Mobile & Desktop!')">Tap Me</button>
</div>`),[G,K]=j.useState(`body {
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
}`),[C,W]=j.useState('console.log("Playground ready.");'),[P,M]=j.useState(`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0" /><style>body { font-family: system-ui, sans-serif; background: #0a0d14; color: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; padding: 16px; box-sizing: border-box; } .card { background: #111726; border: 1px solid #1e293b; border-radius: 16px; padding: 24px; text-align: center; box-shadow: 0 10px 30px rgba(0,242,254,0.15); max-width: 320px; width: 100%; } h2 { color: #00f2fe; margin-top: 0; font-size: 1.25rem; } p { color: #94a3b8; font-size: 13px; line-height: 1.5; } button { background: linear-gradient(135deg, #00f2fe, #9d4edd); color: #fff; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; width: 100%; margin-top: 8px; }</style></head><body><div class="card"><h2>⚡ ByteVerse Sandbox</h2><p>Edit HTML, CSS, and JS live on any device!</p><button onclick="alert('Hello from ByteVerse Mobile & Desktop!')">Tap Me</button></div><script>console.log("Playground ready.");<\/script></body></html>`),[F,ee]=j.useState(`# Python Mobile & Desktop Runner
hero = "CyberPaladin"
level = 15
skills = ["Python", "Algorithms", "Django"]

print(f"Hero: {hero} (Level {level})")
print("Learned Skills:")
for idx, skill in enumerate(skills, 1):
    print(f"  {idx}. {skill}")
`),[ue,te]=j.useState(""),[ve,ke]=j.useState(`SELECT username, level, xp, rank_title 
FROM players 
WHERE level >= 5 
ORDER BY xp DESC;`),[ye,Te]=j.useState([{username:"NeoByte",level:18,xp:1850,rank_title:"Full-Stack Titan"},{username:"CyberValkyrie",level:12,xp:1240,rank_title:"System Architect"},{username:"ShadowCoder",level:7,xp:750,rank_title:"Algorithm Master"}]),je=`<div class="card">
  <h2>⚡ ByteVerse Sandbox</h2>
  <p>Edit HTML, CSS, and JS live on any device!</p>
  <button onclick="alert('Hello from ByteVerse Mobile & Desktop!')">Tap Me</button>
</div>`,Ee=`body {
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
}`,fe='console.log("Playground ready.");',ie=c=>{R.playCorrect(),J(c.html),K(c.css),W(c.js),L(c.title),k(!1);const l=`
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
    `;M(l),T("preview")},Ce=()=>{R.playClick(),J(je),K(Ee),W(fe),L("Default Sandbox");const c=`
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>${Ee}</style>
        </head>
        <body>
          ${je}
          <script>${fe}<\/script>
        </body>
      </html>
    `;M(c)},ce=()=>{R.playClick();const c=`
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>${G}</style>
        </head>
        <body>
          ${_}
          <script>${C}<\/script>
        </body>
      </html>
    `;M(c),T("preview")},b=()=>{R.playCorrect(),te(`>>> python main.py
Hero: CyberPaladin (Level 15)
Learned Skills:
  1. Python
  2. Algorithms
  3. Django
-----------------------------
[Finished in 0.04s]`),T("preview")},X=()=>{R.playCorrect(),Te([{username:"NeoByte",level:18,xp:1850,rank_title:"Full-Stack Titan"},{username:"CyberValkyrie",level:12,xp:1240,rank_title:"System Architect"},{username:"ShadowCoder",level:7,xp:750,rank_title:"Algorithm Master"}]),T("preview")};return n.jsxs("div",{className:"space-y-5 sm:space-y-6 pb-16 md:pb-6",children:[n.jsx("div",{className:"rounded-2xl sm:rounded-3xl glass-panel p-5 sm:p-8 border border-amber-500/20 bg-gradient-to-br from-slate-900 via-slate-900/90 to-amber-950/30 shadow-2xl",children:n.jsxs("div",{className:"max-w-3xl",children:[n.jsxs("div",{className:"inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] sm:text-xs font-mono font-semibold mb-2.5",children:[n.jsx(xn,{size:13}),n.jsx("span",{children:"BYTEVERSE FREE PLAYGROUND"})]}),n.jsxs("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight",children:["Infinite Sandbox. ",n.jsx("br",{className:"hidden sm:inline"}),n.jsx("span",{className:"bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent",children:"Responsive Coding on Any Device."})]}),n.jsx("p",{className:"text-xs sm:text-sm lg:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed",children:"Write code with touch-friendly controls. Switch between HTML, CSS, JS, Python, and SQL effortlessly."})]})}),n.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-800",children:[n.jsx("div",{className:"flex items-center gap-1.5 sm:gap-2 overflow-x-auto touch-scroll",children:[{id:"web",label:"HTML/CSS/JS",icon:On,color:"text-cyan-400"},{id:"python",label:"Python",icon:lm,color:"text-blue-400"},{id:"sql",label:"MySQL Studio",icon:ds,color:"text-emerald-400"}].map(c=>{const l=c.icon,f=w===c.id;return n.jsxs("button",{onClick:()=>{R.playClick(),m(c.id),T("editor")},className:`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 ${f?"bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]":"bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[n.jsx(l,{size:14}),n.jsx("span",{children:c.label})]},c.id)})}),n.jsxs("div",{className:"lg:hidden flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs",children:[n.jsx("button",{onClick:()=>T("editor"),className:`px-3 py-1 rounded-lg font-bold transition-all ${u==="editor"?"bg-amber-500 text-slate-950":"text-slate-400"}`,children:"Code"}),n.jsx("button",{onClick:()=>T("preview"),className:`px-3 py-1 rounded-lg font-bold transition-all ${u==="preview"?"bg-amber-500 text-slate-950":"text-slate-400"}`,children:"Live View"})]})]}),w==="web"&&n.jsxs("div",{className:"p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/80 to-purple-950/40 border border-cyan-500/30 shadow-lg space-y-3",children:[n.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300",children:n.jsx(rt,{size:16})}),n.jsxs("div",{children:[n.jsxs("h3",{className:"text-xs sm:text-sm font-bold text-white flex items-center gap-1.5",children:[n.jsx("span",{children:"1-Click Starter Presets"}),n.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono",children:"15 Templates"})]}),n.jsx("p",{className:"text-[11px] text-slate-400 hidden sm:block",children:"Launch ready-to-run arcade games, CSS FX, and mini-apps instantly."})]})]}),n.jsxs("button",{onClick:()=>{R.playClick(),k(!0)},className:"px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 touch-manipulation transition-all shrink-0",children:[n.jsx(Tm,{size:13,className:"text-slate-950 fill-current"}),n.jsx("span",{className:"sm:hidden",children:"15 Presets »"}),n.jsx("span",{className:"hidden sm:inline",children:"Browse All 15 Templates »"})]})]}),n.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto touch-scroll pb-1",children:[Zs.slice(0,7).map(c=>n.jsxs("button",{onClick:()=>ie(c),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs transition-all whitespace-nowrap active:scale-95 group shadow-sm ${A===c.title?"bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-bold":"bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400 text-slate-200"}`,children:[n.jsx("span",{className:"text-sm",children:c.icon}),n.jsx("span",{className:"group-hover:text-cyan-300",children:c.title})]},c.id)),n.jsxs("button",{onClick:()=>{R.playClick(),k(!0)},className:"flex items-center gap-1 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 text-xs font-bold whitespace-nowrap",children:[n.jsx("span",{children:"+8 More..."}),n.jsx(ma,{size:13})]})]}),A&&A!=="Default Sandbox"&&n.jsxs("div",{className:"flex items-center justify-between text-[11px] bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800/80",children:[n.jsxs("span",{className:"text-slate-300 flex items-center gap-1.5 font-mono",children:[n.jsx("span",{className:"text-cyan-400 animate-pulse",children:"●"})," Active Preset: ",n.jsx("strong",{className:"text-white",children:A})]}),n.jsxs("button",{onClick:Ce,className:"flex items-center gap-1 text-[11px] text-slate-400 hover:text-amber-400 underline transition-colors",children:[n.jsx(st,{size:11}),n.jsx("span",{children:"Reset to Blank"})]})]})]}),w==="web"&&n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6",children:[n.jsxs("div",{className:`glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3 sm:space-y-4 ${u==="preview"?"hidden lg:block":"block"}`,children:[n.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2",children:[n.jsx("div",{className:"flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs",children:["html","css","js"].map(c=>n.jsx("button",{onClick:()=>z(c),className:`px-2.5 py-1 rounded-lg font-mono font-bold uppercase text-[11px] transition-all ${S===c?"bg-cyan-500 text-slate-950":"text-slate-400 hover:text-slate-200"}`,children:c},c))}),n.jsxs("button",{onClick:ce,className:"px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-transform",children:[n.jsx(zt,{size:13,className:"fill-current"}),n.jsx("span",{children:"Run Live View"})]})]}),n.jsxs("div",{className:"font-mono text-xs",children:[S==="html"&&n.jsxs("div",{children:[n.jsx("div",{className:"text-[10px] text-orange-400 font-bold uppercase mb-1",children:"index.html"}),n.jsx("textarea",{value:_,onChange:c=>J(c.target.value),className:"w-full h-64 sm:h-72 p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-400 font-mono text-xs",spellCheck:"false"})]}),S==="css"&&n.jsxs("div",{children:[n.jsx("div",{className:"text-[10px] text-cyan-400 font-bold uppercase mb-1",children:"styles.css"}),n.jsx("textarea",{value:G,onChange:c=>K(c.target.value),className:"w-full h-64 sm:h-72 p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-400 font-mono text-xs",spellCheck:"false"})]}),S==="js"&&n.jsxs("div",{children:[n.jsx("div",{className:"text-[10px] text-yellow-400 font-bold uppercase mb-1",children:"script.js"}),n.jsx("textarea",{value:C,onChange:c=>W(c.target.value),className:"w-full h-64 sm:h-72 p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-400 font-mono text-xs",spellCheck:"false"})]})]})]}),n.jsxs("div",{className:`glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 flex flex-col space-y-3 ${u==="editor"?"hidden lg:flex":"flex"}`,children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("span",{className:"text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-1.5",children:[n.jsx(Xd,{size:13}),"Live Preview"]}),n.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:"Sandbox Frame"})]}),n.jsx("div",{className:"rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex-1 min-h-[300px] sm:min-h-[350px]",children:P?n.jsx("iframe",{title:"Web Playground Preview",srcDoc:P,className:"w-full h-full min-h-[300px] sm:min-h-[350px] border-none",sandbox:"allow-scripts allow-modals"}):n.jsxs("div",{className:"flex flex-col items-center justify-center h-full p-8 text-center text-slate-500 font-mono text-xs min-h-[250px]",children:[n.jsx(zt,{size:28,className:"mb-2 opacity-40 text-cyan-400"}),n.jsx("span",{children:'Click "Run Live View" to generate preview!'})]})})]})]}),w==="python"&&n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6",children:[n.jsxs("div",{className:`glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3 ${u==="preview"?"hidden lg:block":"block"}`,children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"text-xs font-mono text-blue-400 font-bold uppercase",children:"Python Script"}),n.jsxs("button",{onClick:b,className:"px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-transform",children:[n.jsx(zt,{size:13,className:"fill-current"}),n.jsx("span",{children:"Execute Script"})]})]}),n.jsx("textarea",{value:F,onChange:c=>ee(c.target.value),className:"w-full h-64 sm:h-72 p-3 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 focus:outline-none focus:border-blue-400",spellCheck:"false"})]}),n.jsxs("div",{className:`glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 flex flex-col space-y-3 ${u==="editor"?"hidden lg:flex":"flex"}`,children:[n.jsx("span",{className:"text-xs font-mono text-blue-400 font-bold uppercase",children:"Terminal (stdout)"}),n.jsx("div",{className:"rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex-1 p-3 sm:p-4 font-mono text-xs text-emerald-400 whitespace-pre-wrap min-h-[200px] sm:min-h-[280px]",children:ue||'# Click "Execute Script" to view terminal output.'})]})]}),w==="sql"&&n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6",children:[n.jsxs("div",{className:`glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3 ${u==="preview"?"hidden lg:block":"block"}`,children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"text-xs font-mono text-emerald-400 font-bold uppercase",children:"SQL Query Box"}),n.jsxs("button",{onClick:X,className:"px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-transform",children:[n.jsx(zt,{size:13,className:"fill-current"}),n.jsx("span",{children:"Run Query"})]})]}),n.jsx("textarea",{value:ve,onChange:c=>ke(c.target.value),className:"w-full h-64 sm:h-72 p-3 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 focus:outline-none focus:border-emerald-400",spellCheck:"false"})]}),n.jsxs("div",{className:`glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 flex flex-col space-y-3 ${u==="editor"?"hidden lg:flex":"flex"}`,children:[n.jsx("span",{className:"text-xs font-mono text-emerald-400 font-bold uppercase",children:"Results Table"}),n.jsx("div",{className:"rounded-xl overflow-x-auto touch-scroll border border-slate-800 bg-slate-950 p-2 flex-1 min-h-[200px] sm:min-h-[280px]",children:n.jsxs("table",{className:"w-full text-left font-mono text-xs border-collapse",children:[n.jsx("thead",{children:n.jsx("tr",{className:"border-b border-slate-800 text-emerald-400",children:Object.keys(ye[0]).map(c=>n.jsx("th",{className:"p-2 font-bold uppercase text-[9px] sm:text-[10px]",children:c},c))})}),n.jsx("tbody",{className:"divide-y divide-slate-800/60",children:ye.map((c,l)=>n.jsx("tr",{className:"hover:bg-slate-900/60",children:Object.values(c).map((f,D)=>n.jsx("td",{className:"p-2 text-slate-200 text-xs",children:String(f)},D))},l))})]})})]})]}),g&&n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn",onClick:()=>k(!1),children:n.jsxs("div",{className:"w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] bg-slate-900 border border-cyan-500/30 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden",onClick:c=>c.stopPropagation(),children:[n.jsxs("div",{className:"p-3.5 sm:p-6 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-cyan-950/30 to-purple-950/30 flex items-start sm:items-center justify-between gap-2",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] sm:text-[11px] font-mono font-bold mb-1",children:[n.jsx(rt,{size:11}),n.jsx("span",{children:"BYTEVERSE TEMPLATE VAULT"})]}),n.jsx("h2",{className:"text-base sm:text-2xl font-black text-white",children:"1-Click Ready-to-Run Starter Presets"}),n.jsx("p",{className:"text-[11px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1 max-w-xl",children:"Pick any full working game, CSS animation, UI widget, or web app. Click to load, hack the code, and see changes in real-time!"})]}),n.jsx("button",{onClick:()=>k(!1),className:"p-1.5 sm:p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 touch-manipulation",title:"Close",children:n.jsx(xa,{size:18})})]}),n.jsx("div",{className:"px-3 sm:px-6 py-2.5 sm:py-3 border-b border-slate-800 bg-slate-900/60 flex items-center gap-1.5 sm:gap-2 overflow-x-auto touch-scroll",children:["All","Mini-Games","Visual FX","UI & Widgets","Web Apps"].map(c=>{const l=c==="All"?Zs.length:Zs.filter(D=>D.category===c).length,f=E===c;return n.jsxs("button",{onClick:()=>{R.playClick(),q(c)},className:`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 touch-manipulation ${f?"bg-cyan-500 text-slate-950 shadow-md font-black":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:[n.jsx("span",{children:c}),n.jsx("span",{className:`text-[10px] px-1.5 py-0.2 rounded-full ${f?"bg-slate-950/30 text-slate-950":"bg-slate-900 text-slate-400"}`,children:l})]},c)})}),n.jsx("div",{className:"p-3 sm:p-6 overflow-y-auto space-y-3 sm:space-y-4 max-h-[calc(92vh-180px)] touch-scroll",children:n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4",children:Zs.filter(c=>E==="All"||c.category===E).map(c=>n.jsxs("div",{className:"group relative bg-slate-950/70 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/60 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 transition-all duration-200 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-500/10",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-start justify-between gap-2 mb-2",children:[n.jsx("div",{className:"text-xl sm:text-2xl p-1.5 sm:p-2 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform",children:c.icon}),n.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 font-mono border border-slate-700",children:c.category})]}),n.jsx("h3",{className:"font-bold text-white text-xs sm:text-sm group-hover:text-cyan-300 transition-colors",children:c.title}),n.jsx("p",{className:"text-[11px] sm:text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed",children:c.description})]}),n.jsxs("button",{onClick:()=>ie(c),className:"mt-3 sm:mt-4 w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 touch-manipulation min-h-[44px] transition-all shadow-md",children:[n.jsx(zt,{size:13,className:"fill-current"}),n.jsx("span",{children:"Launch in Sandbox"})]})]},c.id))})}),n.jsxs("div",{className:"p-3 sm:p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400 flex-wrap gap-2",children:[n.jsx("span",{children:"💡 Tip: All starter code is 100% editable inside HTML, CSS, and JS tabs!"}),n.jsx("button",{onClick:()=>k(!1),className:"px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors",children:"Close"})]})]})})]})},Pd=[{id:"first_step",title:"First Byte",description:"Solve your very first coding challenge in ByteVerse",icon:"Sparkles",color:"text-cyan-400",bg:"bg-cyan-500/10 border-cyan-500/30"},{id:"html_master",title:"HTML Architect",description:"Complete all levels in the HTML Tower Builder",icon:"Code2",color:"text-orange-400",bg:"bg-orange-500/10 border-orange-500/30"},{id:"css_wizard",title:"Style Wizard",description:"Conquer the Flexbox & Grid Arena in CSS",icon:"Palette",color:"text-blue-400",bg:"bg-blue-500/10 border-blue-500/30"},{id:"js_ninja",title:"Bug Exterminator",description:"Smash every bug in the JavaScript Logic Lab",icon:"Terminal",color:"text-yellow-400",bg:"bg-yellow-500/10 border-yellow-500/30"},{id:"python_charmer",title:"Python Charmer",description:"Complete the Python Algorithm Maze",icon:"Sparkles",color:"text-indigo-400",bg:"bg-indigo-500/10 border-indigo-500/30"},{id:"sql_sleuth",title:"SQL Sleuth",description:"Crack the Heist Mystery by executing SQL queries",icon:"Database",color:"text-emerald-400",bg:"bg-emerald-500/10 border-emerald-500/30"},{id:"server_chef",title:"Server Chef",description:"Master PHP $_GET, $_POST and server responses",icon:"Server",color:"text-purple-400",bg:"bg-purple-500/10 border-purple-500/30"},{id:"django_captain",title:"Django Architect",description:"Master Django MTV architecture and URL routing",icon:"Layers",color:"text-emerald-500",bg:"bg-emerald-600/10 border-emerald-600/30"},{id:"streak_master",title:"Flame Keeper",description:"Maintain an active daily learning streak",icon:"Flame",color:"text-rose-400",bg:"bg-rose-500/10 border-rose-500/30"},{id:"duelist",title:"Co-Op Gladiator",description:"Play a 2-Player Split-Screen Code Duel in Co-Op Arena",icon:"Users",color:"text-pink-400",bg:"bg-pink-500/10 border-pink-500/30"},{id:"scholar",title:"Academy Scholar",description:"Study 3 language guides in the pure Study Academy",icon:"BookOpen",color:"text-teal-400",bg:"bg-teal-500/10 border-teal-500/30"},{id:"code_sprinter",title:"Speed Demon",description:"Score over 400 points in 60-Second Code Sprint Mode",icon:"Zap",color:"text-amber-400",bg:"bg-amber-500/10 border-amber-500/30"},{id:"boss_slayer",title:"Syntax Slayer",description:"Defeat The Syntax Devourer in the Cyber Boss Raid",icon:"Skull",color:"text-rose-500",bg:"bg-rose-500/10 border-rose-500/30"}],Jm={Sparkles:rt,Code2:On,Palette:Ni,Terminal:xn,Database:ds,Server:Ei,Layers:Ci,Flame:nr,Users:Pi,BookOpen:An,Zap:Rn,Skull:cs},Km=()=>{const{isAchievementsOpen:w,setIsAchievementsOpen:m,achievements:u,xp:T,playerLevel:S,rankTitle:z}=at();if(!w)return null;const g=()=>{R.playClick(),m(!1)};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn",children:n.jsxs("div",{className:"relative w-full max-w-2xl rounded-3xl glass-panel border border-slate-700 bg-slate-950 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col",onClick:k=>k.stopPropagation(),children:[n.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"}),n.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"p-2.5 rounded-2xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/30",children:n.jsx(gn,{size:24})}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:"Trophy & Badges Cabinet"}),n.jsxs("p",{className:"text-xs text-slate-400",children:["Lvl ",S," • ",z," • ",u.length," of ",Pd.length," Unlocked"]})]})]}),n.jsx("button",{onClick:g,className:"p-2 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors",children:n.jsx(xa,{size:20})})]}),n.jsx("div",{className:"overflow-y-auto py-4 space-y-3 pr-1 my-2",children:n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:Pd.map(k=>{const E=u.includes(k.id),q=Jm[k.icon]||tr;return n.jsxs("div",{className:`p-3.5 rounded-2xl border transition-all flex items-start gap-3.5 ${E?`${k.bg} shadow-sm`:"bg-slate-900/40 border-slate-800/80 opacity-50"}`,children:[n.jsx("div",{className:`p-2.5 rounded-xl border shrink-0 ${E?"bg-slate-950/80 border-slate-700/60":"bg-slate-950 border-slate-800 text-slate-600"}`,children:E?n.jsx(q,{size:20,className:k.color}):n.jsx(xm,{size:20})}),n.jsxs("div",{className:"flex-1 min-w-0",children:[n.jsxs("div",{className:"flex items-center justify-between gap-1",children:[n.jsx("h4",{className:"font-bold text-sm text-white truncate",children:k.title}),E&&n.jsx("span",{className:"text-emerald-400 shrink-0",children:n.jsx(lt,{size:15})})]}),n.jsx("p",{className:"text-xs text-slate-400 mt-1 leading-snug",children:k.description})]})]},k.id)})})}),n.jsxs("div",{className:"pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400",children:[n.jsx("span",{children:"Earn XP across all tracks to unlock more prestige titles!"}),n.jsx("button",{onClick:g,className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-colors",children:"Close"})]})]})})},Xm=()=>{const{mode:w,setMode:m}=at();return n.jsxs("div",{className:"min-h-screen flex flex-col bg-[#0a0d14] text-slate-100 cyber-grid",children:[n.jsx(Cm,{}),n.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8",children:[w==="arcade"&&n.jsx(Dm,{}),w==="academy"&&n.jsx(Gm,{}),w==="coop"&&n.jsx(Qm,{}),w==="playground"&&n.jsx(Ym,{})]}),n.jsx(Km,{}),n.jsx("footer",{className:"border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-xl mt-20 pt-12 pb-10",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10",children:[n.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-purple-950/30 border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col md:flex-row items-center justify-between gap-6",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-cyan-500/20 shrink-0",children:n.jsx("div",{className:"w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-black font-mono text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400",children:"AS"})}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold",children:"Created & Engineered By"}),n.jsxs("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1",children:[n.jsx(rt,{size:10})," Verified Creator"]})]}),n.jsx("h3",{className:"text-xl sm:text-2xl font-black text-white tracking-tight",children:"Affan Sayed"}),n.jsx("p",{className:"text-xs sm:text-sm text-slate-400 max-w-xl mt-0.5",children:"Designed to teach complete coding fundamentals from 0% to mastery with W3-style interactive lessons, ELI5 5-year-old storytelling, and live mini-games."})]})]}),n.jsx("div",{className:"flex items-center gap-3 shrink-0",children:n.jsxs("a",{href:"https://affansayed.vercel.app/",target:"_blank",rel:"noreferrer",className:"px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-black text-xs shadow-lg shadow-cyan-500/25 transition-transform active:scale-95 flex items-center gap-1.5",children:[n.jsx("span",{children:"Visit Affan's Portfolio"}),n.jsx("span",{className:"text-slate-950",children:"→"})]})})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-800/60",children:[n.jsx(Md,{size:"sm",showTagline:!1,onClick:()=>m("arcade")}),n.jsxs("div",{className:"flex items-center gap-6 text-xs text-slate-400 font-medium",children:[n.jsx("button",{onClick:()=>m("arcade"),className:"hover:text-cyan-400 transition-colors",children:"Arcade Games"}),n.jsx("button",{onClick:()=>m("academy"),className:"hover:text-emerald-400 transition-colors",children:"Study Academy"}),n.jsx("button",{onClick:()=>m("coop"),className:"hover:text-pink-400 transition-colors",children:"Co-Op Arena"}),n.jsx("button",{onClick:()=>m("playground"),className:"hover:text-amber-400 transition-colors",children:"Sandbox"})]}),n.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/40 text-xs font-mono shadow-md",children:[n.jsx("span",{className:"text-slate-400",children:"Masterminded by"}),n.jsx(mm,{size:13,className:"text-rose-500 fill-current animate-pulse"}),n.jsx("span",{className:"font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400",children:"Affan Sayed"}),n.jsx("span",{className:"text-slate-600",children:"•"}),n.jsx("span",{className:"text-slate-400",children:"© 2026 ByteVerse"})]})]})]})})]})};function Zm(){return n.jsx(Vh,{children:n.jsx(Xm,{})})}$h.createRoot(document.getElementById("root")).render(n.jsx(Oh.StrictMode,{children:n.jsx(Zm,{})}));
