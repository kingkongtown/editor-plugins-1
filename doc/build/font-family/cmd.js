define("kg/editor-plugins/1.1.5/font-family/cmd",["../font/cmd"],function(e,t,n){var f=e("../font/cmd"),i={element:"span",styles:{"font-family":"#(value)"},overrides:[{element:"font",attributes:{face:null}}]};n.exports={init:function(e){f.addSelectCmd(e,"fontFamily",i)}}});