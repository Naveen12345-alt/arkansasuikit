import e from"@babel/runtime/helpers/extends";import t from"@babel/runtime/helpers/defineProperty";import n from"@babel/runtime/helpers/slicedToArray";import r from"@babel/runtime/helpers/objectWithoutProperties";import o,{useState as i}from"react";var a=[],l=[];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}!function(e,t){if(e&&"undefined"!=typeof document){var n,r=!0===t.prepend?"prepend":"append",o=!0===t.singleTag,i="string"==typeof t.container?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(o){var c=a.indexOf(i);-1===c&&(c=a.push(i)-1,l[c]={}),n=l[c]&&l[c][r]?l[c][r]:l[c][r]=s()}else n=s();65279===e.charCodeAt(0)&&(e=e.substring(1)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(document.createTextNode(e))}function s(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),t.attributes)for(var n=Object.keys(t.attributes),o=0;o<n.length;o++)e.setAttribute(n[o],t.attributes[n[o]]);var a="prepend"===r?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}(".btn {\n  font-family: 'Ubuntu', sans-serif;\n  position: relative;\n  font-weight: 400;\n  font-size: 1.3rem;\n  line-height: 2;\n  height: 50px;\n  transition: all 200ms linear;\n  border-radius: 4px;\n  width: 240px;\n  letter-spacing: 1px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  align-self: center;\n  border: none;\n  box-shadow: 0 12px 35px 0 rgba(16, 39, 112, 0.25);\n  outline: 0;\n  overflow: hidden;\n  transition: background 400ms;\n  cursor: pointer; }\n\nspan.ripple {\n  position: absolute;\n  /* The absolute position we mentioned earlier */\n  border-radius: 50%;\n  transform: scale(0);\n  animation: ripple 600ms linear;\n  background-color: rgba(255, 255, 255, 0.7); }\n\n@keyframes ripple {\n  to {\n    opacity: 0;\n    transform: scale(2); } }\n",{});var p={Button:function(t){var a,l=t.children,c=t.onClick,p=t.btnColor,u=void 0===p?"teal":p,d=t.labelColor,b=t.disabled,f=t.type,m=t.style,h=r(t,["children","onClick","btnColor","labelColor","disabled","type","style"]),y=i(!1),g=n(y,2),x=g[0],v=g[1],w=function(e){!function(e){var t=e.currentTarget;if("Disabled Button"!==t.childNodes[0].nodeValue){var n=document.createElement("span"),r=Math.max(t.clientWidth,t.clientHeight),o=r/2;n.style.width=n.style.height="".concat(r,"px"),n.style.left="".concat(e.clientX-t.offsetLeft-o,"px"),n.style.top="".concat(e.clientY-t.offsetTop-o,"px"),n.classList.add("ripple");var i=t.getElementsByClassName("ripple")[0];i&&i.remove(),t.appendChild(n)}}(e),v(!x)},O={backgroundColor:u,color:d||"white"},k={border:"1px solid ".concat(u),color:u,backgroundColor:"white"},C={color:d||"white",backgroundColor:u},j={backgroundColor:u,color:d||"white",borderRadius:"25px"},E={cursor:"default",backgroundColor:u,color:d||"white",opacity:.4};switch(f){case"rounded":a=j;break;case"block":a={width:"95%",margin:"0 auto"};break;case"outline":a=x?C:k;break;default:a={backgroundColor:u,color:d||"white"}}return o.createElement(o.Fragment,null,o.createElement("button",e({style:s(b?s(s(s({},O),a),E):s(s({},O),a),m),onMouseEnter:w,onMouseLeave:w},h,{type:"button",onClick:b?function(){}:c,className:"btn"}),l||"button"))}};export default p;
//# sourceMappingURL=index.esm.js.map
