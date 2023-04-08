!function(){var e={184:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var s=n.apply(null,r);s&&e.push(s)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var l in r)a.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";function e(){return e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},e.apply(this,arguments)}var t=window.wp.element,a=r(184),n=r.n(a);wp.hooks.addFilter("blocks.registerBlockType","greenshift/extraglobal",(function(e,t){return void 0!==e.attributes&&("core/cover"!=t&&"core/column"!=t&&"core/columns"!=t&&"core/group"!=t&&"core/image"!=t&&"core/button"!=t||(e.attributes=Object.assign(e.attributes,{gshideOnMobile:{type:"boolean"},gshideOnTablet:{type:"boolean"},gshideOnDesktop:{type:"boolean"}})),"core/group"==t&&(e.attributes=Object.assign(e.attributes,{gsStickyHeader:{type:"boolean"},gsStickyHeaderShadow:{type:"boolean"},gsStickyBg:{type:"string"},gsStickyColor:{type:"string"}})),"core/template-part"==t&&(e.attributes=Object.assign(e.attributes,{gsHeaderAlpha:{type:"boolean"}}))),e}));const o=wp.compose.createHigherOrderComponent((e=>r=>{const{ToggleControl:a,ColorPalette:n,BaseControl:o}=wp.components,{InspectorAdvancedControls:s}=wp.blockEditor,{attributes:l,setAttributes:c,isSelected:i}=r;return"core/cover"!=r.name&&"core/column"!=r.name&&"core/columns"!=r.name&&"core/group"!=r.name&&"core/image"!=r.name&&"core/button"!=r.name?"core/template-part"==r.name&&"header"==r.attributes.tagName?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,r),i&&(0,t.createElement)(s,null,(0,t.createElement)(a,{label:wp.i18n.__("Transparent Header?","greenshift"),checked:!!l.gsHeaderAlpha,onChange:e=>c({gsHeaderAlpha:!l.gsHeaderAlpha})}))):(0,t.createElement)(e,r):(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,r),i&&(0,t.createElement)(s,null,"core/group"==r.name&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a,{label:wp.i18n.__("Sticky to Head on scroll?","greenshift"),checked:!!l.gsStickyHeader,onChange:e=>c({gsStickyHeader:!l.gsStickyHeader})}),l.gsStickyHeader&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a,{label:wp.i18n.__("Disable shadow?","greenshift"),checked:!!l.gsStickyHeaderShadow,onChange:e=>c({gsStickyHeaderShadow:!l.gsStickyHeaderShadow})}),(0,t.createElement)(o,{help:wp.i18n.__("Replace Background when header is sticked?","greenshift")},(0,t.createElement)(n,{value:l.gsStickyBg,onChange:e=>c({gsStickyBg:e}),enableAlpha:!0})),(0,t.createElement)(o,{help:wp.i18n.__("Replace Text color when header is sticked?","greenshift")},(0,t.createElement)(n,{value:l.gsStickyColor,onChange:e=>c({gsStickyColor:e}),enableAlpha:!0})))),(0,t.createElement)(a,{label:wp.i18n.__("Hide on desktop","greenshift"),checked:!!l.gshideOnDesktop,onChange:e=>c({gshideOnDesktop:!l.gshideOnDesktop})}),(0,t.createElement)(a,{label:wp.i18n.__("Hide on tablet","greenshift"),checked:!!l.gshideOnTablet,onChange:e=>c({gshideOnTablet:!l.gshideOnTablet})}),(0,t.createElement)(a,{label:wp.i18n.__("Hide on mobile","greenshift"),checked:!!l.gshideOnMobile,onChange:e=>c({gshideOnMobile:!l.gshideOnMobile})})))}),"addFRhideControls");wp.hooks.addFilter("editor.BlockEdit","greenshift/extraglobal-control",o);const s=wp.compose.createHigherOrderComponent((r=>a=>{const{attributes:{gshideOnDesktop:o,gshideOnTablet:s,gshideOnMobile:l,gsStickyHeader:c,gsHeaderAlpha:i},className:g,name:d}=a;return"core/cover"!=d&&"core/column"!=d&&"core/columns"!=d&&"core/group"!=d&&"core/template-part"!=d&&"core/image"!=d&&"core/button"!=d?(0,t.createElement)(r,a):(0,t.createElement)(r,e({},a,{className:n()(g,c?"gs-sticky-header":"",o?"gs-desktop-hide":"",s?"gs-tablet-hide":"",l?"gs-mobile-hide":"",i?"gs-header-alpha":"")}))}),"withClientIdClassName");wp.hooks.addFilter("editor.BlockListBlock","greenshift/extraglobal-editor-class",s),wp.hooks.addFilter("blocks.getSaveContent.extraProps","greenshift/extraglobal-apply-class",(function(e,t,r){if("core/cover"==t.name||"core/column"==t.name||"core/columns"==t.name||"core/group"==t.name||"core/image"==t.name||"core/button"==t.name){const{gshideOnMobile:t,gshideOnTablet:a,gshideOnDesktop:n}=r;void 0!==t&&t&&(e.className=e.className+" gs-mobile-hide"),void 0!==n&&n&&(e.className=e.className+" gs-desktop-hide"),void 0!==a&&a&&(e.className=e.className+" gs-tablet-hide")}if("core/group"==t.name){const{gsStickyHeader:t}=r;void 0!==t&&t&&(e.className=e.className+" gs-sticky-header")}if("core/template-part"==t.name){const{gsHeaderAlpha:t}=r;void 0!==t&&t&&(e.className=e.className+" gs-header-alpha")}return e}))}()}();