/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:57
*/
KISSY.add("editor-plugins/lib/fake-objects",["editor","html-parser","util","node","dom"],function(i,f,s,p){var i=f("editor"),l=f("html-parser"),e=f("util"),m=f("node"),n=f("dom"),o=i.Utils.debugUrl("theme/spacer.gif");i.addMembers({createFakeElement:function(a,b,c,d,q,k){var g=a.attr("style")||"";a.attr("width")&&(g="width:"+a.attr("width")+"px;"+g);a.attr("height")&&(g="height:"+a.attr("height")+"px;"+g);var h=e.trim(a.attr("class")),a={"class":b+" "+h,src:o,_ke_real_element:encodeURIComponent(q||a.outerHtml()),
_ke_real_node_type:a[0].nodeType,style:g};k&&(delete k.width,delete k.height,e.mix(a,k,!1));c&&(a._ke_real_element_type=c);d&&(a._ke_resizable=d);return new m("<img/>",a,this.get("document")[0])},restoreRealElement:function(a){if(parseInt(a.attr("_ke_real_node_type"),10)!==n.NodeType.ELEMENT_NODE)return null;var a=e.urlDecode(a.attr("_ke_real_element")),b=m("<div>",this.get("document")[0]);b.html(a);return b.first().remove()}});var r={tags:{$:function(a){var b=a.getAttribute("_ke_real_element"),c;
b&&(c=(new l.Parser(e.urlDecode(b))).parse());if(b=c&&c.childNodes[0]){if(c=a.getAttribute("style")){var d=/(?:^|\s)width\s*:\s*(\d+)/i.exec(c),a=d&&d[1];c=(d=/(?:^|\s)height\s*:\s*(\d+)/i.exec(c))&&d[1];a&&b.setAttribute("width",a);c&&b.setAttribute("height",c)}return b}}}};p.exports={init:function(a){var b=a.htmlDataProcessor,c=b&&b.htmlFilter;b.createFakeParserElement||(c&&c.addRules(r),e.mix(b,{restoreRealElement:function(d){if(parseInt(d.attr("_ke_real_node_type"),10)!==n.NodeType.ELEMENT_NODE)return null;
var d=e.urlDecode(d.attr("_ke_real_element")),b=m("<div>",a.get("document")[0]);b.html(d);return b.first().remove()},createFakeParserElement:function(a,b,c,g,h){var f=l.serialize(a),j=a.getAttribute("style")||"";a.getAttribute("width")&&(j="width:"+a.getAttribute("width")+"px;"+j);a.getAttribute("height")&&(j="height:"+a.getAttribute("height")+"px;"+j);var i=e.trim(a.getAttribute("class")),a={"class":b+" "+i,src:o,_ke_real_element:encodeURIComponent(f),_ke_real_node_type:a.nodeType+"",style:j,align:a.getAttribute("align")||
""};h&&(delete h.width,delete h.height,e.mix(a,h,!1));c&&(a._ke_real_element_type=c);g&&(a._ke_resizable="_ke_resizable");return new l.Tag("img",a)}}))}}});