define("kg/editor-plugins/1.1.6/justify-center",["editor","./justify-center/cmd","./button","node"],function(e,t,n){function o(){var e=this.get("editor");e.execCommand("justifyCenter"),e.focus()}function i(){}var c=e("editor"),d=e("./justify-center/cmd");e("./button");var u=e("node");i.prototype={pluginRenderUI:function(e){d.init(e),e.addButton("justifyCenter",{tooltip:"居中对齐",checkable:!0,listeners:{click:o,afterSyncUI:function(){var t=this;e.on("selectionChange",function(){e.get("mode")!==c.Mode.SOURCE_MODE&&(e.queryCommandValue("justifyCenter")?t.set("checked",!0):t.set("checked",!1))})}},mode:c.Mode.WYSIWYG_MODE}),e.docReady(function(){e.get("document").on("keydown",function(t){t.ctrlKey&&t.keyCode===u.Event.KeyCode.E&&(e.execCommand("justifyCenter"),t.preventDefault())})})}},n.exports=i});