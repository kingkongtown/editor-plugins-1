define("kg/editor-plugins/1.1.5/fore-color/cmd",["../color/cmd"],function(o,e,n){var l=o("../color/cmd"),r={element:"span",styles:{color:"#(color)"},overrides:[{element:"font",attributes:{color:null}}],childRule:function(o){return!("a"===o.nodeName()||o.all("a").length)}};n.exports={init:function(o){o.hasCommand("foreColor")||o.addCommand("foreColor",{exec:function(o,e){o.execCommand("save"),l.applyColor(o,e,r),o.execCommand("save")}})}}});