define("kg/editor-plugins/1.1.5/font/ui",["editor","../button","../menubutton"],function(e,t,n){var o=e("editor"),i=e("../button"),c=e("../menubutton"),a=c.Select.extend({initializer:function(){var e=this,t=e.get("editor");e.on("click",function(n){var o=n.target.get("value"),i=e.get("cmdType");t.execCommand(i,o)}),t.on("selectionChange",function(){if(t.get("mode")!==o.Mode.SOURCE_MODE){var n=e.get("cmdType"),i=e.get("menu"),c=i.get&&i.get("children");if(c){var a=t.queryCommandValue(n);if(a!==!1){a=(a+"").toLowerCase();for(var u=0;u<c.length;u++){var d=c[u],r=d.get("value");if(a===r.toLowerCase())return void e.set("value",r)}}e.set("value",null)}}})}}),u=i.extend({initializer:function(){var e=this,t=e.get("editor"),n=e.get("cmdType");e.on("click",function(){var o=e.get("checked");o?(t.execCommand(n),t.focus()):(t.execCommand(n,!1),t.focus())}),t.on("selectionChange",function(){if(t.get("mode")!==o.Mode.SOURCE_MODE){var n=e.get("cmdType");t.queryCommandValue(n)?e.set("checked",!0):e.set("checked",!1)}})}},{ATTRS:{checkable:{value:!0},mode:{value:o.Mode.WYSIWYG_MODE}}});n.exports={Button:u,Select:a}});