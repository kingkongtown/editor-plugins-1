KISSY.add('kg/editor-plugins/1.1.0/bold/cmd',["editor","../font/cmd"],function(S ,require, exports, module) {var e=require("editor"),t=require("../font/cmd"),n=new e.Style({element:"strong",overrides:[{element:"b"},{element:"span",attributes:{style:"font-weight: bold;"}}]});module.exports={init:function(e){t.addButtonCmd(e,"bold",n)}};});