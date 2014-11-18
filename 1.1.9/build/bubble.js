define("kg/editor-plugins/1.1.10/bubble",["util","ua","overlay","editor"],function(e){function t(e,t,i){return i>=e&&t>=i}function i(e,i){var o=e.get("y"),r=o+e.get("el").outerHeight(),l=i.get("y"),n=l+i.get("el").outerHeight();return t(o,r,n)||t(o,r,l)}function o(e){var t=null,o=e.get("editor"),r=o.getControls();return l.each(r,function(o){o.isKeBubble&&o!==e&&o.get("visible")&&i(e,o)&&(t?t.get("y")<o.get("y")&&(t=o):t=o)}),t}function r(e){var t=e.get("editorSelectedEl");if(!t)return void 0;var i=e.get("editor"),o=i.get("window"),r=i.get("iframe").offset(),l=r.top,d=r.left,f=d+o.width(),s=l+o.height(),a=t.offset();a=u.Utils.getXY(a,i);var g,v,c=a.top,b=a.left,h=b+t.width(),p=c+t.height();return n.ie&&"img"===t[0].nodeName.toLowerCase()&&p>s?void 0:(p>s&&s>c?v=s-30:p>l&&s>p&&(v=p),h>d&&d>b?g=d:b>d&&f>b&&(g=b),void 0!==g&&void 0!==v?[g,v]:void 0)}var l=e("util"),n=e("ua"),d=e("overlay"),u=e("editor"),f={zIndex:u.baseZIndex(u.ZIndexManager.BUBBLE_VIEW),elCls:"{prefixCls}editor-bubble",prefixCls:"{prefixCls}editor-",effect:{effect:"fade",duration:.3}};u.prototype.addBubble=function(e,t,i){function n(){g.hide();var e=v.get("window");e&&(e.detach("scroll",s),b.stop())}function u(){var e=r(g);if(e){g.move(e[0],e[1]);var t=o(g);t&&(e[1]=t.get("y")+t.get("el").outerHeight(),g.move(e[0],e[1])),g.get("visible")||g.show()}}function s(){g.get("editorSelectedEl")&&(g.hide(),b())}function a(){var e=v.get("window");e.on("scroll",s),u()}var g,v=this,c=v.get("prefixCls");i=i||{},i.editor=v,l.mix(i,f),i.elCls=l.substitute(i.elCls,{prefixCls:c}),i.prefixCls=l.substitute(i.prefixCls,{prefixCls:c}),g=new d(i),g.isKeBubble=1,v.addControl(e+"/bubble",g),v.on("selectionChange",function(e){var i,o,r=e.path,d=r.elements;if(r&&d){if(o=r.lastElement,!o)return;i=t(o),i?(g.set("editorSelectedEl",i),g.hide(),l.later(a,10)):n()}}),v.on("sourceMode",n);var b=l.buffer(u,350)}});