define("kg/editor-plugins/1.1.10/justify-left",["editor","./justify-left/cmd","./button","node"],function(e,t,n){function o(){var e=this.get("editor");e.execCommand("justifyLeft"),e.focus()}function i(){}var d=e("editor"),c=e("./justify-left/cmd");e("./button");var f=e("node");i.prototype={pluginRenderUI:function(e){c.init(e),e.addButton("justifyLeft",{tooltip:"左对齐",checkable:!0,listeners:{click:o,afterSyncUI:function(){var t=this;e.on("selectionChange",function(){e.get("mode")!==d.Mode.SOURCE_MODE&&(e.queryCommandValue("justifyLeft")?t.set("checked",!0):t.set("checked",!1))})}},mode:d.Mode.WYSIWYG_MODE}),e.docReady(function(){e.get("document").on("keydown",function(t){t.ctrlKey&&t.keyCode===f.Event.KeyCode.L&&(e.execCommand("justifyLeft"),t.preventDefault())})})}},n.exports=i});