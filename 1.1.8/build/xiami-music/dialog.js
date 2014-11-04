define("kg/editor-plugins/1.1.8/xiami-music/dialog",["util","editor","../flash/dialog","../menubutton","dom","node"],function(i,t,e){function a(i,t){return i.length>t&&(i=i.substring(0,t)+"..."),i}function l(){l.superclass.constructor.apply(this,arguments)}function s(i,t,e){return'<a class="{prefixCls}editor-xiami-page-item {prefixCls}editor-button ks-inline-block'+(i===t?" {prefixCls}editor-xiami-curpage":"")+'" data-value="'+t+'" href="#">'+(e||t)+"</a>"}function r(i){return o.urlDecode(i.song_name)+" - "+o.urlDecode(i.artist_name)}var o=i("util"),n=i("editor"),d=i("../flash/dialog"),p=i("../menubutton"),m=i("dom"),x=i("node"),u=n.Utils,c=u.debugUrl("theme/tao-loading.gif"),g="http://www.xiami.com/app/nineteen/search/key/{key}/page/{page}",f="ke_xiami",h="xiami-music",v="搜 索",_="输入歌曲名、专辑名、艺人名",b=0,C='<div style="padding:40px 0 70px 0;"><form action="#" class="{prefixCls}editor-xiami-form" style="margin:0 20px;"><p class="{prefixCls}editor-xiami-title"></p><p class="{prefixCls}editor-xiami-url-wrap"><input class="{prefixCls}editor-xiami-url {prefixCls}editor-input" style="width:370px;"/> &nbsp;  <a class="{prefixCls}editor-xiami-submit {prefixCls}editor-button ks-inline-block">'+v+'</a></p><p style="margin:10px 0"><label>对 齐： <select class="{prefixCls}editor-xiami-align" title="对齐"><option value="none">无</option><option value="left">左对齐</option><option value="right">右对齐</option></select></label><label style="margin-left:70px;">间距：  <input  data-verify="^\\d+$"  data-warning="间距请输入非负整数" class="{prefixCls}editor-xiami-margin {prefixCls}editor-input" style="width:60px;" value="'+b+'"/> 像素</label></p></form><div class="{prefixCls}editor-xiami-list"></div></div>',y='<div style="padding:5px 20px 20px;"><a class="{prefixCls}editor-xiami-ok {prefixCls}editor-button ks-inline-block" style="margin-right:20px;">确&nbsp;定</a><a class="{prefixCls}editor-xiami-cancel {prefixCls}editor-button ks-inline-block">取&nbsp;消</a></div>';o.extend(l,d,{_config:function(){var i=this,t=i.editor,e=t.get("prefixCls");i._cls=f,i._type=h,i._title="虾米音乐",i._bodyHTML=o.substitute(C,{prefixCls:e}),i._footHTML=o.substitute(y,{prefixCls:e})},_initD:function(){function t(t){var a=u.val();if(a.replace(/[^\x00-\xff]/g,"@@").length>30)return void window.alert("长度上限30个字符（1个汉字=2个字符）");if(!o.trim(a)||a===_)return void window.alert("不能为空！");e._xiamiSubmit.addClass(l+"editor-button-disabled",void 0);var s=o.substitute(g,{key:encodeURIComponent(u.val()),page:t});e._xiamiaList.html('<img style="display:block;width:32px;height:32px;margin:5px auto 0 auto;" src="'+c+'"/><p style="width: 130px; margin: 15px auto 0; color: rgb(150, 150, 150);">正在搜索，请稍候......</p>'),e._xiamiaList.show(),i(["io"],function(i){i({cache:!1,url:s,dataType:"jsonp",success:function(i){i.page=t,e._listSearch(i)},error:function(){e._xiamiSubmit.removeClass(l+"editor-button-disabled",void 0);var i='<p style="text-align:center;margin:10px 0;">不好意思，超时了，请重试！</p>';e._xiamiaList.html(i)}})})}var e=this,a=e.editor,l=a.get("prefixCls"),s=e.dialog,r=s.get("el"),d=s.get("footer"),u=r.one("."+l+"editor-xiami-url");e.dAlign=p.Select.decorate(r.one("."+l+"editor-xiami-align"),{prefixCls:"ks-editor-big-",width:80,menuCfg:{prefixCls:"ks-editor-",render:r}}),e.addRes(e.dAlign),e._xiamiInput=u,n.Utils.placeholder(u,_),e.addRes(u),e._xiamiaList=r.one("."+l+"editor-xiami-list"),e._xiamiSubmit=r.one("."+l+"editor-xiami-submit"),e._xiamiSubmit.on("click",function(i){e._xiamiSubmit.hasClass("ks-editor-button-disabled",void 0)||t(1),i.halt()}),e.addRes(e._xiamiSubmit),u.on("keydown",function(i){13===i.keyCode&&t(1)}),e.dMargin=r.one("."+l+"editor-xiami-margin"),e._xiamiUrlWrap=r.one("."+l+"editor-xiami-url-wrap"),e._xiamiTitle=r.one("."+l+"editor-xiami-title");var f=d.one("."+l+"editor-xiami-ok");d.one("."+l+"editor-xiami-cancel").on("click",function(i){s.hide(),i.halt()}),e.addRes(d),f.on("click",function(i){var t=e.selectedFlash,l=a.restoreRealElement(t);e._dinfo={url:e._getFlashUrl(l),attrs:{title:t.attr("title"),style:"margin:"+(parseInt(e.dMargin.val(),10)||0)+"px;float:"+e.dAlign.get("value")+";"}},e._gen(),i.halt()},e),e.addRes(f),e._xiamiaList.on("click",function(i){i.preventDefault();var a=x(i.target),s=a.closest(function(i){return e._xiamiaList.contains(i)&&m.hasClass(i,l+"editor-xiami-add")},void 0),r=a.closest(function(i){return e._xiamiaList.contains(i)&&m.hasClass(i,l+"editor-xiami-page-item")},void 0);s?(e._dinfo={url:"http://www.xiami.com/widget/"+s.attr("data-value")+"/singlePlayer.swf",attrs:{title:s.attr("title"),style:"margin:"+(parseInt(e.dMargin.val(),10)||0)+"px;float:"+e.dAlign.get("value")+";"}},e._gen()):r&&t(parseInt(r.attr("data-value"),10)),i.halt()}),e.addRes(e._xiamiaList)},_listSearch:function(i){var t,e=this,l=e.editor,n=l.get("prefixCls"),d=i.results,p="";if(i.key===o.trim(e._xiamiInput.val())){if(e._xiamiSubmit.removeClass(n+"editor-button-disabled",void 0),d&&d.length){for(p="<ul>",t=0;t<d.length;t++){var m=d[t],x=r(m);p+='<li title="'+x+'"><span class="'+n+'editor-xiami-song">'+a(x,35)+'</span><a href="#" title="'+x+'" class="'+n+'editor-xiami-add" data-value="'+(m.album_id+"_"+m.song_id)+'">添加</a></li>'}p+="</ul>";var u=i.page,c=Math.floor(i.total/8),g=u-1,f=u+1;if(c>1){for(p+='<p class="'+n+'editor-xiami-paging">',2>=g&&(f=Math.min(2-g+f,c-1),g=2),f=Math.min(f,c-1),f===c-1&&(g=Math.max(2,f-3)),1!==u&&(p+=s(u,u-1,"上一页")),p+=s(u,1,"1"),2!==g&&(p+='<span class="'+n+'editor-xiami-page-more">...</span>'),t=g;f>=t;t++)p+=s(u,t,void 0);f!==c&&(f!==c-1&&(p+='<span class="'+n+'editor-xiami-page-more">...</span>'),p+=s(u,c,c)),u!==c&&(p+=s(u,u+1,"下一页")),p+="</p>"}}else p='<p style="text-align:center;margin:10px 0;">不好意思，没有找到结果！</p>';e._xiamiaList.html(o.substitute(p,{prefixCls:n}))}},_updateD:function(){var i=this,t=i.editor,e=t.get("prefixCls"),a=i.selectedFlash;a?(i._xiamiInput.val(a.attr("title")),i._xiamiTitle.html(a.attr("title")),i.dAlign.set("value",a.css("float")),i.dMargin.val(parseInt(a.style("margin"),10)||0),i._xiamiUrlWrap.hide(),i.dialog.get("footer").show(),i._xiamiTitle.show()):(n.Utils.resetInput(i._xiamiInput),i.dAlign.set("value","none"),i.dMargin.val(b),i._xiamiUrlWrap.show(),i.dialog.get("footer").hide(),i._xiamiTitle.hide(),i._xiamiSubmit.removeClass(e+"editor-button-disabled",void 0)),i._xiamiaList.hide(),i._xiamiaList.html("")},_getDInfo:function(){var i=this;return o.mix(i._dinfo.attrs,{width:257,height:33}),i._dinfo}}),e.exports=l});