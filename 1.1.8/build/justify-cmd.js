define("kg/editor-plugins/1.1.8/justify-cmd",["editor"],function(e,t,a){function n(e,t){e.focus(),e.execCommand("save");for(var a,n,r=e.getSelection(),i=r.createBookmarks(),c=r.getRanges(),m=c.length-1;m>=0;m--)for(a=c[m].createIterator(),a.enlargeBr=!0;n=a.getNextParagraph();)n.removeAttr("align"),o(n,t)?n.css("text-align",""):n.css("text-align",t);r.selectBookmarks(i),e.execCommand("save"),e.notifySelectionChange()}function o(e,t){var a=e.css("text-align").replace(i,"")||c;return a===t}var r=e("editor"),i=/(-moz-|-webkit-|start|auto)/gi,c="left";a.exports={addCommand:function(e,t,a){e.hasCommand(t)||(e.addCommand(t,{exec:function(e){n(e,a)}}),e.addCommand(r.Utils.getQueryCmd(t),{exec:function(e){var t=e.getSelection();if(t&&!t.isInvalid){var n=t.getStartElement(),i=new r.ElementPath(n),c=i.block||i.blockLimit;return c&&"body"!==c.nodeName()?o(c,a):!1}}}))}}});