/*! For license information please see 4428e004.ede416ac.js.LICENSE.txt */
"use strict";(self.webpackChunkdocuilib=self.webpackChunkdocuilib||[]).push([[8092],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},201:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7378),n(3905)),i=["components"],u={sidebar_position:5,sidebar_label:"ThemeManager",title:"ThemeManager"},c=void 0,l={unversionedId:"foundation/theme-manager",id:"foundation/theme-manager",isDocsHomePage:!1,title:"ThemeManager",description:"Use ThemeManager to set default global behavior for your app.",source:"@site/../docs/foundation/theme-manager.md",sourceDirName:"foundation",slug:"/foundation/theme-manager",permalink:"/react-native-ui-lib/docs/foundation/theme-manager",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/foundation/theme-manager.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"ThemeManager",title:"ThemeManager"},sidebar:"tutorialSidebar",previous:{title:"Modifiers",permalink:"/react-native-ui-lib/docs/foundation/modifiers"},next:{title:"ActionBar",permalink:"/react-native-ui-lib/docs/components/basic/ActionBar"}},p=[],s={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeManager")," to set default global behavior for your app."),(0,a.kt)("h4",{id:"setcomponenttheme"},"setComponentTheme"),(0,a.kt)("p",null,"Set default props for a component by passing an object or a callback (for dynamic, runtime default props)\nThe default value will be overridden if a prop is being passed to the component instance (see ",(0,a.kt)("inlineCode",{parentName:"p"},"setComponentForcedTheme")," for that)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ThemeManager.setComponentTheme(componentName, defaultPropsObject);")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ThemeManager.setComponentTheme(componentName, componentProps => newDefaultPropsObject);"))),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {ThemeManager} from 'react-native-ui-lib';\n\nThemeManager.setComponentTheme('Text', {\n    text70: true, // will set the text70 typography modifier prop to be true by default\n    grey10: true, // will set the grey10 color modifier prop to be true by default \n});\n\n\nThemeManager.setComponentTheme('Button', (props, context) => {\n\n  return {\n    // this will apply a different backgroundColor\n    // depending on whether the Button has an outline or not\n    backgroundColor: props.outline ? 'black' : 'green',\n  };\n});\n")),(0,a.kt)("h4",{id:"setcomponentforcedtheme"},"setComponentForcedTheme"),(0,a.kt)("p",null,"Same as ",(0,a.kt)("inlineCode",{parentName:"p"},"setComponentTheme"),", but can't be overridden by props passed to the component. "),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"ThemeManager.setComponentForcedTheme('Card', (props, context) => {\n  return {\n    containerStyle: [styles.defaultContainerStyle, props.containerStyle]\n  };\n});\n")))}f.isMDXComponent=!0},2525:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,u,c=o(e),l=1;l<arguments.length;l++){for(var p in i=Object(arguments[l]))n.call(i,p)&&(c[p]=i[p]);if(t){u=t(i);for(var s=0;s<u.length;s++)r.call(i,u[s])&&(c[u[s]]=i[u[s]])}}return c}},1535:function(e,t,n){var r=n(2525),o=60103,a=60106;var i=60109,u=60110,c=60112;var l=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),a=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),i=s("react.provider"),u=s("react.context"),c=s("react.forward_ref"),s("react.suspense"),l=s("react.memo"),p=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||d}function h(){}function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||d}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var v=g.prototype=new h;v.constructor=g,r(v,b.prototype),v.isPureReactComponent=!0;var k={current:null},j=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,a={},i=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,r)&&!O.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var l=Array(c),p=0;p<c;p++)l[p]=arguments[p+2];a.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:u,props:a,_owner:k.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,n,r,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===r?"."+P(c,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),_(i,t,n,"",(function(e){return e}))):null!=i&&(T(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var p=r+P(u=e[l],l);c+=_(u,t,n,p,i)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),l=0;!(u=e.next()).done;)c+=_(u=u.value,t,n,p=r+P(u,l++),i);else if("object"===u)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function S(e,t,n){if(null==e)return e;var r=[],o=0;return _(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var M={current:null};function N(){var e=M.current;if(null===e)throw Error(m(321));return e}},7378:function(e,t,n){n(1535)}}]);