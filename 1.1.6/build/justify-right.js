define("kg/editor-plugins/1.1.6/justify-right",["editor","./justify-right/cmd","./button","node"],function(t,e,n){function o(){var t=this.get("editor");t.execCommand("justifyRight"),t.focus()}function i(){}var d=t("editor"),c=t("./justify-right/cmd");t("./button");var u=t("node");i.prototype={pluginRenderUI:function(t){c.init(t),t.addButton("justifyRight",{tooltip:"右对齐",checkable:!0,listeners:{click:o,afterSyncUI:function(){var e=this;t.on("selectionChange",function(){t.get("mode")!==d.Mode.SOURCE_MODE&&(t.queryCommandValue("justifyRight")?e.set("checked",!0):e.set("checked",!1))})}},mode:d.Mode.WYSIWYG_MODE}),t.docReady(function(){t.get("document").on("keydown",function(e){e.ctrlKey&&e.keyCode===u.Event.KeyCode.R&&(t.execCommand("justifyRight"),e.preventDefault())})})}},n.exports=i});