define("kg/editor-plugins/1.1.5/italic",["./font/ui","./italic/cmd","./button","node"],function(t,n,i){function o(){}var e=t("./font/ui"),c=t("./italic/cmd");t("./button");var d=t("node");o.prototype={pluginRenderUI:function(t){c.init(t),t.addButton("italic",{cmdType:"italic",tooltip:"斜体"},e.Button),t.docReady(function(){t.get("document").on("keydown",function(n){n.ctrlKey&&n.keyCode===d.Event.KeyCode.I&&(t.execCommand("italic"),n.preventDefault())})})}},i.exports=o});