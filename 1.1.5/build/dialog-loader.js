define("kg/editor-plugins/1.1.6/dialog-loader",["editor","overlay","dom","ua"],function(o,i,e){var d,n=o("editor"),a=o("overlay"),l=o("dom"),t=o("ua"),g={loading:function(o){d||(d=new a({x:0,width:6===t.ie?l.docWidth():"100%",y:0,zIndex:n.baseZIndex(n.ZIndexManager.LOADING),prefixCls:o+"editor-",elCls:o+"editor-global-loading"})),d.set("height",l.docHeight()),d.show(),d.loading()},unloading:function(){d.hide()}};e.exports={useDialog:function(i,e,d,n){i.focus();var a=i.get("prefixCls");return i.getControl(e+"/dialog")?void setTimeout(function(){i.showDialog(e,n)},0):(g.loading(a),void o(["./"+e+"/dialog"],function(o){g.unloading(),i.addControl(e+"/dialog",new o(i,d)),i.showDialog(e,n)}))}}});