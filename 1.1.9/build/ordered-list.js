define("kg/editor-plugins/1.1.8/ordered-list",["./list-utils/btn","./ordered-list/cmd"],function(e,t,i){function n(){}var o=e("./list-utils/btn"),r=e("./ordered-list/cmd");n.prototype={pluginRenderUI:function(e){r.init(e),o.init(e,{cmdType:"insertOrderedList",buttonId:"orderedList",menu:{width:75,children:[{content:"1,2,3...",value:"decimal"},{content:"a,b,c...",value:"lower-alpha"},{content:"A,B,C...",value:"upper-alpha"},{content:"i,ii,iii...",value:"lower-roman"},{content:"I,II,III...",value:"upper-roman"}]},tooltip:"有序列表"})}},i.exports=n});