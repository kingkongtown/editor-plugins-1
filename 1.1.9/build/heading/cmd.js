define("kg/editor-plugins/1.1.10/heading/cmd",["editor"],function(e,n,a){var t=e("editor");a.exports={init:function(e){if(!e.hasCommand("heading")){e.addCommand("heading",{exec:function(e,n){var a;e.execCommand("save"),"p"!==n&&(a=e.queryCommandValue("heading")),n===a&&(n="p"),new t.Style({element:n}).apply(e.get("document")[0]),e.execCommand("save")}});var n=t.Utils.getQueryCmd("heading");e.addCommand(n,{exec:function(e){var n=e.getSelection();if(n&&!n.isInvalid){var a=n.getStartElement(),d=new t.ElementPath(a),i=d.block||d.blockLimit,m=i&&i.nodeName()||"";if(m.match(/^h\d$/)||"p"===m)return m}}})}}}});