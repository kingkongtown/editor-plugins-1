define("kg/editor-plugins/1.1.4/flash",["editor","./flash-common/base-class","./flash-common/utils","./fake-objects","./button"],function(e,t,n){function s(e){this.config=e||{}}var a=e("editor"),o=e("./flash-common/base-class"),l=e("./flash-common/utils"),r=e("./fake-objects");e("./button");var i="ke_flash",c="flash";s.prototype={pluginRenderUI:function(e){r.init(e);var t=e.htmlDataProcessor,n=t.dataFilter;n.addRules({tags:{object:function(e){var n,s=e.getAttribute("classid");if(!s){var a=e.childNodes;for(n=0;n<a.length;n++)if("embed"===a[n].nodeName)return l.isFlashEmbed(a[n][n])?null:t.createFakeParserElement(e,i,c,!0);return null}return t.createFakeParserElement(e,i,c,!0)},embed:function(e){return l.isFlashEmbed(e)?t.createFakeParserElement(e,i,c,!0):null}}},5);var s=new o({editor:e,cls:i,type:c,pluginConfig:this.config,bubbleId:"flash",contextMenuId:"flash",contextMenuHandlers:{"Flash属性":function(){var e=this.get("editorSelectedEl");e&&s.show(e)}}});this.flashControl=s,e.addButton("flash",{tooltip:"插入Flash",listeners:{click:function(){s.show()}},mode:a.Mode.WYSIWYG_MODE})}},n.exports=s});