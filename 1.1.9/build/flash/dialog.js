define("kg/editor-plugins/1.1.10/flash/dialog",["util","editor","../flash-common/utils","../dialog","../menubutton"],function(t,e,i){function l(t,e){var i=this;i.editor=t,i.config=e||{},s.Utils.lazyRun(i,"_prepareShow","_realShow"),i._config()}var a=t("util"),s=t("editor"),r=t("../flash-common/utils"),n=t("../dialog"),d=t("../menubutton"),o="ke_flash",h="flash",p="请输入如 http://www.xxx.com/xxx.swf",f='<div style="padding:20px 20px 0 20px"><p><label>网址： <input  data-verify="^https?://[^\\s]+$"  data-warning="网址格式为：http://" class="{prefixCls}editor-flash-url {prefixCls}editor-input" style="width:300px;" /></label></p><table style="margin:10px 0 5px  40px;width:300px;"><tr><td><label>宽度： <input  data-verify="^(?!0$)\\d+$"  data-warning="宽度请输入正整数" class="{prefixCls}editor-flash-width {prefixCls}editor-input" style="width:60px;" /> 像素 </label></td><td><label>高度： <input  data-verify="^(?!0$)\\d+$"  data-warning="高度请输入正整数" class="{prefixCls}editor-flash-height {prefixCls}editor-input" style="width:60px;" /> 像素 </label></td></tr><tr><td><label>对齐： </label><select class="{prefixCls}editor-flash-align" title="对齐"><option value="none">无</option><option value="left">左对齐</option><option value="right">右对齐</option></select></td><td><label>间距： </label><input  data-verify="^\\d+$"  data-warning="间距请输入非负整数" class="{prefixCls}editor-flash-margin {prefixCls}editor-input" style="width:60px;" value="5"/> 像素</td></tr></table></div>',g='<div style="padding:10px 0 35px 20px;"><a class="{prefixCls}editor-flash-ok {prefixCls}editor-button ks-inline-block" style="margin-left:40px;margin-right:20px;">确定</a> <a class="{prefixCls}editor-flash-cancel {prefixCls}editor-button ks-inline-block">取消</a></div>';a.augment(l,{addRes:s.Utils.addRes,destroyRes:s.Utils.destroyRes,_config:function(){var t=this,e=t.editor,i=e.get("prefixCls");t._urlTip=p,t._type=h,t._cls=o,t._configDWidth="400px",t._title="Flash",t._bodyHTML=a.substitute(f,{prefixCls:i}),t._footHTML=a.substitute(g,{prefixCls:i})},_prepareShow:function(){var t=this;t.dialog=new n({headerContent:t._title,bodyContent:t._bodyHTML,footerContent:t._footHTML,width:t._configDWidth||"500px",mask:!0}).render(),t.addRes(t.dialog),t._initD()},_realShow:function(){this._updateD(),this.dialog.show()},_getFlashUrl:function(t){return r.getUrl(t)},_updateD:function(){var t=this,e=t.editor,i=t.config,l=t.selectedFlash;if(l){var a=e.restoreRealElement(l);if(!a)return;l.css("width")&&t.dWidth.val(parseInt(l.css("width"),10)),l.css("height")&&t.dHeight.val(parseInt(l.css("height"),10)),t.dAlign.set("value",l.css("float")),s.Utils.valInput(t.dUrl,t._getFlashUrl(a)),t.dMargin.val(parseInt(a.style("margin"),10)||0)}else s.Utils.resetInput(t.dUrl),t.dWidth.val(i.defaultWidth||""),t.dHeight.val(i.defaultHeight||""),t.dAlign.set("value","none"),t.dMargin.val("5")},show:function(t){var e=this;e.selectedFlash=t,e._prepareShow()},_initD:function(){var t=this,e=t.dialog,i=t.editor,l=i.get("prefixCls"),a=e.get("el");t.dHeight=a.one("."+l+"editor-flash-height"),t.dWidth=a.one("."+l+"editor-flash-width"),t.dUrl=a.one("."+l+"editor-flash-url"),t.dAlign=d.Select.decorate(a.one("."+l+"editor-flash-align"),{prefixCls:l+"editor-big-",width:80,menuCfg:{prefixCls:l+"editor-",render:a}}),t.dMargin=a.one("."+l+"editor-flash-margin");var r=a.one("."+l+"editor-flash-ok"),n=a.one("."+l+"editor-flash-cancel");r.on("click",t._gen,t),n.on("click",function(t){e.hide(),t.halt()}),s.Utils.placeholder(t.dUrl,t._urlTip),t.addRes(t.dAlign)},_getDInfo:function(){var t=this;return{url:t.dUrl.val(),attrs:{width:t.dWidth.val(),height:t.dHeight.val(),style:"margin:"+(parseInt(t.dMargin.val(),10)||0)+"px;float:"+t.dAlign.get("value")+";"}}},_gen:function(t){t&&t.halt();var e=this,i=e.editor,l=e._getDInfo(),n=l&&a.trim(l.url),d=l&&l.attrs;if(l){var o=s.Utils.verifyInputs(e.dialog.get("el").all("input"));if(o){e.dialog.hide();var h=r.insertFlash(i,n,d,e._cls,e._type);e.selectedFlash&&i.getSelection().selectElement(h),i.notifySelectionChange()}}},destroy:function(){this.destroyRes()}}),i.exports=l});