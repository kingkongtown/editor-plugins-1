/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:56
*/
KISSY.add("editor-plugins/lib/drag-upload",["util","editor","event/dom","node","dom"],function(x,c,y,o){function i(c){this.config=c||{}}var l=c("util"),j=c("editor"),m=c("event/dom"),r=c("node"),s=j.Utils,k=c("dom");l.augment(i,{pluginRenderUI:function(c){function i(b){b=b.originalEvent.target;"img"===k.nodeName(b)&&b.src.match(/^file:\/\//)&&(n[b.src]=b)}function o(b,e){var p=new window.FileReader;p.onload=function(g){var a=b.name,g=g.target.result,d=new XMLHttpRequest;d.open("POST",t,!0);d.onreadystatechange=
function(){if(4===d.readyState){if(200===d.status||304===d.status){if(""!==d.responseText){var a=l.parseJson(d.responseText);e[0].src=a.imgUrl}}else window.alert("\u670d\u52a1\u5668\u7aef\u51fa\u9519\uff01"),e.remove();d.onreadystatechange=null}};a="\r\n------kissy-editor-yiminghe\r\n"+("Content-Disposition: form-data; name='"+u+"'; filename='"+encodeURIComponent(a)+"'\r\n");a+="Content-Type: "+(b.type||"application/octet-stream")+"\r\n\r\n";a+=g+"\r\n";h=j.Utils.normParams(h);for(var c in h)a+="------kissy-editor-yiminghe\r\n",a+=
"Content-Disposition: form-data; name='"+c+"'\r\n\r\n",a+=h[c]+"\r\n";a+="------kissy-editor-yiminghe--";d.setRequestHeader("Content-Type","multipart/form-data, boundary=----kissy-editor-yiminghe");d.sendAsBinary("Content-Type: multipart/form-data; boundary=----kissy-editor-yiminghe\r\nContent-Length: "+a.length+"\r\n"+a+"\r\n");p.onload=null};p.readAsBinaryString(b)}var f=this.config,u=f.fileInput||"Filedata",v=f.sizeLimit||Number.MAX_VALUE,h=f.serverParams||{},t=f.serverUrl||"",w=RegExp((f.suffix||
"png,jpg,jpeg,gif").split(/,/).join("|")+"$","i"),n={},q=!1;c.docReady(function(){var b=c.get("document")[0];m.on(b,"dragenter",function(){q||(m.on(b,"DOMNodeInserted",i),q=!0)});m.on(b,"drop",function(e){m.remove(b,"DOMNodeInserted",i);q=!1;e.halt();var e=e.originalEvent,c,g;l.isEmptyObject(n)?(g=b.elementFromPoint(e.clientX,e.clientY),c=g.lastChild):(l.each(n,function(a){"img"===k.nodeName(a)&&(c=a.nextSibling,g=a.parentNode,k.remove(a))}),n={});e=e.dataTransfer;e.dropEffect="copy";if(e=e.files)for(var a=
0;a<e.length;a++){var d=e[a],f=d.size;if(d.name.match(w)&&!(f/1E3>v)){var f=r('<img src="'+s.debugUrl("theme/tao-loading.gif")+'"/>'),h=f[0];g.insertBefore(h,c);var j=k.nodeName(h.parentNode);("head"===j||"html"===j)&&k.insertBefore(h,b.body.firstChild);o(d,f)}}})});window.XMLHttpRequest&&!XMLHttpRequest.prototype.sendAsBinary&&(XMLHttpRequest.prototype.sendAsBinary=function(b,c){var f;f=window.BlobBuilder?new window.BlobBuilder:window.WebKitBlobBuilder();for(var g=b.length,a=new window.Uint8Array(g),
d=0;d<g;d++)a[d]=b.charCodeAt(d);f.append(a.buffer);this.send(f.getBlob(c))})}});o.exports=i});