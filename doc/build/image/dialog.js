define('kg/editor-plugins/1.1.3/image/dialog',["util","editor","io","../dialog","tabs","../menubutton","./dialog-tpl","ua","node"],function(require, exports, module) {function e(e){for(var i=e;i;){var t=i.nodeName();if("a"===t)return i;if(s.$block[t]||s.$blockLimit[t])return null;i=i.parent()}return null}function i(e,i){var t=this;t.editor=e,t.imageCfg=i||{},t.cfg=t.imageCfg.upload||null,t.suffix=t.cfg&&t.cfg.suffix||"png,jpg,jpeg,gif",t.suffixReg=new RegExp(t.suffix.split(/,/).join("|")+"$","i"),t.suffixWarning="只允许后缀名为"+t.suffix+"的图片"}var t=require("util"),r=require("editor"),a=require("io"),n=require("../dialog"),l=require("tabs"),o=require("../menubutton"),g=require("./dialog-tpl"),s=r.XHTML_DTD,m=require("ua"),d=require("node"),c="http://",f="自动",u=10,p='<div style="padding:5px 20px 20px;"><a href="javascript:void(\'确定\')" class="{prefixCls}img-insert {prefixCls}button ks-inline-block" style="margin-right:30px;">确定</a> <a  href="javascript:void(\'取消\')" class="{prefixCls}img-cancel {prefixCls}button ks-inline-block">取消</a></div>',h="请点击浏览上传图片",v=r.Utils.valInput;i.prototype={_prepare:function(){function e(e){return e.files?e.files[0].size:0}var i=this,s=i.editor,u=s.get("prefixCls")+"editor-";i.dialog=i.d=new n({width:500,headerContent:"图片",bodyContent:t.substitute(g,{prefixCls:u}),footerContent:t.substitute(p,{prefixCls:u}),mask:!0}).render();var k=i.d.get("el"),b=k.one("."+u+"img-cancel"),x=k.one("."+u+"img-insert"),C=r.Utils.verifyInputs,L=k.one("."+u+"img-setting");i.uploadForm=k.one("."+u+"img-upload-form"),i.imgLocalUrl=k.one("."+u+"img-local-url"),i.tab=new l({srcNode:i.d.get("body").one("."+u+"img-tabs"),prefixCls:u+"img-"}).render(),i.imgLocalUrl.val(h),i.imgUrl=k.one("."+u+"img-url"),i.imgHeight=k.one("."+u+"img-height"),i.imgWidth=k.one("."+u+"img-width"),i.imgRatio=k.one("."+u+"img-ratio"),i.imgAlign=o.Select.decorate(k.one("."+u+"img-align"),{prefixCls:u+"big-",width:80,menuCfg:{prefixCls:u+"",render:k}}),i.imgMargin=k.one("."+u+"img-margin"),i.imgLink=k.one("."+u+"img-link"),i.imgLinkBlank=k.one("."+u+"img-link-blank");var _=r.Utils.placeholder;_(i.imgUrl,c),_(i.imgHeight,f),_(i.imgWidth,f),_(i.imgLink,"http://"),i.imgHeight.on("keyup",function(){var e=parseInt(v(i.imgHeight),10);e&&i.imgRatio[0].checked&&!i.imgRatio[0].disabled&&i.imgRatioValue&&v(i.imgWidth,Math.floor(e*i.imgRatioValue))}),i.imgWidth.on("keyup",function(){var e=parseInt(v(i.imgWidth),10);e&&i.imgRatio[0].checked&&!i.imgRatio[0].disabled&&i.imgRatioValue&&v(i.imgHeight,Math.floor(e/i.imgRatioValue))}),b.on("click",function(e){i.d.hide(),e.halt()});var y=d('<a class="'+u+'button ks-inline-block" style="position:absolute;z-index:'+r.baseZIndex(r.ZIndexManager.LOADING_CANCEL)+';left:-9999px;top:-9999px;">取消上传</a>').appendTo(document.body,void 0);if(i.loadingCancel=y,x.on("click",function(n){if(n.halt(),i.imageCfg.remote!==!1&&1!==t.indexOf(i.tab.getSelectedTab(),i.tab.getTabs())||!i.cfg){if(!C(k.all("input")))return;i._insert()}else{if(!C(L.all("input")))return;if(i.imgLocalUrl.val()===h)return void alert("请先选择文件!");if(!i.suffixReg.test(i.imgLocalUrl.val()))return alert(i.suffixWarning),i.uploadForm[0].reset(),void i.imgLocalUrl.val(h);var l=e(i.fileInput[0]);if(U&&l/1e3>U)return void alert("上传图片最大："+U/1e3+"M");i.d.loading(),y.on("click",function(e){e.halt(),g.abort()});var o=r.Utils.normParams(i.cfg.serverParams)||{};o["document-domain"]=document.domain;var g=a({data:o,url:i.cfg.serverUrl,form:i.uploadForm[0],dataType:"json",type:"post",complete:function(e,t){if(y.css({left:-9999,top:-9999}),i.d.unloading(),"abort"!==t){if(e||(e={error:"服务器出错，请重试"}),e.error)return void alert(e.error);v(i.imgUrl,e.imgUrl),(new Image).src=e.imgUrl,i._insert()}}}),s=i.d.get("el"),m=s.offset(),d=s[0].offsetWidth,c=s[0].offsetHeight;y.css({left:m.left+d/2.5,top:m.top+c/1.5})}}),i.cfg){i.cfg.extraHTML&&k.one("."+u+"img-up-extraHTML").html(i.cfg.extraHTML);var I=k.one("."+u+"image-up"),U=i.cfg&&i.cfg.sizeLimit;i.fileInput=d('<input type="file" style="position:absolute;cursor:pointer;left:'+(m.ie?"360":m.chrome?"319":"369")+'px;z-index:2;top:0px;height:26px;" size="1" name="'+(i.cfg.fileInput||"Filedata")+'"/>').insertAfter(i.imgLocalUrl),U&&(h="单张图片容量不超过 "+U/1e3+" M"),i.imgLocalUrl.val(h),i.fileInput.css("opacity",0),i.fileInput.on("mouseenter",function(){I.addClass(""+u+"button-hover")}),i.fileInput.on("mouseleave",function(){I.removeClass(""+u+"button-hover")}),i.fileInput.on("change",function(){var e=i.fileInput.val();i.imgLocalUrl.val(e.replace(/.+[\/\\]/,""))}),i.imageCfg.remote===!1&&i.tab.removeItemAt(0,1)}else i.tab.removeItemAt(1,1);i._prepare=t.noop},_insert:function(){var i,r=this,a=v(r.imgUrl),n=parseInt(v(r.imgHeight),10),l=parseInt(v(r.imgWidth),10),o=r.imgAlign.get("value"),g=parseInt(r.imgMargin.val(),10),s="";n&&(s+="height:"+n+"px;"),l&&(s+="width:"+l+"px;"),"none"!==o&&(s+="float:"+o+";"),isNaN(g)||0===g||(s+="margin:"+g+"px;"),r.d.hide(),r.selectedEl?(i=r.selectedEl,r.editor.execCommand("save"),r.selectedEl.attr({src:a,_ke_saved_src:a,style:s})):(i=d("<img "+(s?'style="'+s+'"':"")+' src="'+a+'" _ke_saved_src="'+a+'" alt="" />',r.editor.get("document")[0]),r.editor.insertElement(i)),setTimeout(function(){var a,n,l,o,g=e(i),s=t.trim(v(r.imgLink)),m=r.editor.getSelection(),c=r.imgLinkBlank.attr("checked")?"_blank":"_self",f=0;if(g&&(a=g.attr("target")||"_self",s!==g.attr("href")||a!==c?(i._4eBreakParent(g),(n=i.prev())&&"a"===n.nodeName()&&!n[0].childNodes.length&&n.remove(),(l=i.next())&&"a"===l.nodeName()&&!l[0].childNodes.length&&l.remove()):f=1),!f&&s){r.selectedEl||(o=m.createBookmarks()),g=d("<a>"),g.attr("_ke_saved_href",s).attr("href",s).attr("target",c);var u=i[0];u.parentNode.replaceChild(g[0],u),g.append(u)}o?m.selectBookmarks(o):r.selectedEl&&r.editor.getSelection().selectElement(r.selectedEl),f||r.editor.execCommand("save")},100)},_update:function(i){var t,a=this,n=0,l=r.Utils.resetInput;if(a.selectedEl=i,i&&a.imageCfg.remote!==!1){v(a.imgUrl,i.attr("src"));var o=parseInt(i.style("width"),10),g=parseInt(i.style("height"),10);g?v(a.imgHeight,g):l(a.imgHeight),o?v(a.imgWidth,o):l(a.imgWidth),a.imgAlign.set("value",i.style("float")||"none");var s=parseInt(i.style("margin"),10)||0;a.imgMargin.val(s),a.imgRatio[0].disabled=!1,a.imgRatioValue=o/g,t=e(i)}else{var m=a.editor,d=m.getSelection(),c=d&&d.getCommonAncestor();c&&(t=e(c));var f=a.imageCfg.defaultMargin;void 0===f&&(f=u),2===a.tab.get("bar").get("children").length&&(n=1),a.imgLinkBlank.attr("checked",!0),l(a.imgUrl),l(a.imgLink),l(a.imgHeight),l(a.imgWidth),a.imgAlign.set("value","none"),a.imgMargin.val(f),a.imgRatio[0].disabled=!0,a.imgRatioValue=null}t?(v(a.imgLink,t.attr("_ke_saved_href")||t.attr("href")),a.imgLinkBlank.attr("checked","_blank"===t.attr("target"))):(l(a.imgLink),a.imgLinkBlank.attr("checked",!0)),a.uploadForm[0].reset(),a.imgLocalUrl.val(h);var p=a.tab;p.setSelectedTab(p.getTabAt(n))},show:function(e){var i=this;i._prepare(),i._update(e),i.d.show()},destroy:function(){var e=this;e.d.destroy(),e.tab.destroy(),e.loadingCancel&&e.loadingCancel.remove(),e.imgAlign&&e.imgAlign.destroy()}},module.exports=i;});