define('kg/editor-plugins/1.1.3/checkbox-source-area',["editor","util","node"],function(require, exports, module) {function e(e){var t=this;t.editor=e,t._init()}function t(){}var o=require("editor"),i=require("util"),n=require("node"),r=o.Mode.SOURCE_MODE,d=o.Mode.WYSIWYG_MODE;i.augment(e,{_init:function(){var e=this,t=e.editor,o=t.get("statusBarEl");e.holder=n('<span style="zoom:1;display:inline-block;height:22px;line-height:22px;"><label style="vertical-align:middle;"><input style="margin:0 5px;" type="checkbox" />编辑源代码</label></span>'),e.holder.appendTo(o);var i=e.el=e.holder.one("input");i.on("click",e._check,e),t.on("wysiwygMode",e._wysiwygmode,e),t.on("sourceMode",e._sourcemode,e)},_sourcemode:function(){this.el.attr("checked",!0)},_wysiwygmode:function(){this.el.attr("checked",!1)},_check:function(){var e=this,t=e.editor,o=e.el;o.attr("checked")?t.set("mode",r):t.set("mode",d)},destroy:function(){this.holder.remove()}}),i.augment(t,{pluginRenderUI:function(t){var o=new e(t);t.on("destroy",function(){o.destroy()})}}),module.exports=t;});