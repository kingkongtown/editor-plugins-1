define("kg/editor-plugins/1.1.6/font-family",["util","editor","./font/ui","./font-family/cmd","./menubutton"],function(e,t,n){function i(e){this.config=e||{}}var a=e("util"),o=e("editor"),l=e("./font/ui"),u=e("./font-family/cmd");e("./menubutton"),a.augment(i,{pluginRenderUI:function(e){u.init(e);var t=this.config,n={};a.mix(n,{children:[{content:"宋体",value:"SimSun"},{content:"黑体",value:"SimHei"},{content:"隶书",value:"LiSu"},{content:"楷体",value:"KaiTi_GB2312"},{content:"微软雅黑",value:'"Microsoft YaHei"'},{content:"Georgia",value:"Georgia"},{content:"Times New Roman",value:'"Times New Roman"'},{content:"Impact",value:"Impact"},{content:"Courier New",value:'"Courier New"'},{content:"Arial",value:"Arial"},{content:"Verdana",value:"Verdana"},{content:"Tahoma",value:"Tahoma"}],width:"130px"}),a.each(n.children,function(e){var t=e.elAttrs||{},n=e.value;t.style=t.style||"",t.style+=";font-family:"+n,e.elAttrs=t}),t.menu=a.mix(n,t.menu),e.addSelect("fontFamily",a.mix({cmdType:"fontFamily",defaultCaption:"字体",width:130,mode:o.Mode.WYSIWYG_MODE},t),l.Select)}}),n.exports=i});