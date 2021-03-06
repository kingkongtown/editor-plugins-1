define('kg/editor-plugins/1.1.4/fore-color/cmd',["../color/cmd"],function(require, exports, module) {
/**
 * @ignore
 * foreColor command.
 * @author yiminghe@gmail.com
 */

var cmd = require('../color/cmd');

var COLOR_STYLES = {
    element: 'span',
    styles: { 'color': '#(color)' },
    overrides: [
        { element: 'font', attributes: { 'color': null } }
    ],
    childRule: function (el) {
        // <span style='color:red'><a href='g.cn'>abcdefg</a></span>
        // 不起作用
        return !(el.nodeName() === 'a' || el.all('a').length);
    }
};

module.exports = {
    init: function (editor) {
        if (!editor.hasCommand('foreColor')) {
            editor.addCommand('foreColor', {
                exec: function (editor, c) {
                    editor.execCommand('save');
                    cmd.applyColor(editor, c, COLOR_STYLES);
                    editor.execCommand('save');
                }
            });
        }
    }
};

});