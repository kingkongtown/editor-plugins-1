define("kg/editor-plugins/1.1.6/fore-color",["./color/btn","./fore-color/cmd"],function(o,r,n){function t(o){this.config=o||{}}var i=o("./color/btn"),e=o("./fore-color/cmd");t.prototype={pluginRenderUI:function(o){e.init(o),i.init(o,{cmdType:"foreColor",defaultColor:"rgb(204, 0, 0)",tooltip:"文本颜色"})}},n.exports=t});