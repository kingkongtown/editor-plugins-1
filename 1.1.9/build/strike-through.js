define("kg/editor-plugins/1.1.10/strike-through",["./font/ui","./strike-through/cmd","./button"],function(t,o,i){function n(){}var u=t("./font/ui"),r=t("./strike-through/cmd");t("./button"),n.prototype={pluginRenderUI:function(t){r.init(t),t.addButton("strikeThrough",{cmdType:"strikeThrough",tooltip:"删除线"},u.Button)}},i.exports=n});