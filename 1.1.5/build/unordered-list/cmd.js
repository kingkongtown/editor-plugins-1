define("kg/editor-plugins/1.1.5/unordered-list/cmd",["editor","../list-utils/cmd"],function(e,t,n){var i=e("editor"),d=e("../list-utils/cmd"),r="insertUnorderedList",o=d.ListCommand,a=d.queryActive,m=new o("ul");n.exports={init:function(e){e.hasCommand(r)||e.addCommand(r,{exec:function(e,t){e.focus(),m.exec(e,t)}});var t=i.Utils.getQueryCmd(r);e.hasCommand(t)||e.addCommand(t,{exec:function(e){var t=e.getSelection();if(t&&!t.isInvalid){var n=t.getStartElement(),d=new i.ElementPath(n);return a("ul",d)}}})}}});