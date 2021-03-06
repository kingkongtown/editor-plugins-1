define('kg/editor-plugins/1.1.8/unordered-list/cmd',["editor","../list-utils/cmd"],function(require, exports, module) {
/**
 * @ignore
 * ol command
 * @author yiminghe@gmail.com
 */

var Editor = require('editor');
var listCmd = require('../list-utils/cmd');
var insertUnorderedList = 'insertUnorderedList',
    ListCommand = listCmd.ListCommand,
    queryActive = listCmd.queryActive,
    ulCmd = new ListCommand('ul');

module.exports = {
    init: function (editor) {
        if (!editor.hasCommand(insertUnorderedList)) {
            editor.addCommand(insertUnorderedList, {
                exec: function (editor, type) {
                    editor.focus();
                    ulCmd.exec(editor, type);
                }
            });
        }

        var queryUl = Editor.Utils.getQueryCmd(insertUnorderedList);

        if (!editor.hasCommand(queryUl)) {
            editor.addCommand(queryUl, {
                exec: function (editor) {
                    var selection = editor.getSelection();
                    if (selection && !selection.isInvalid) {
                        var startElement = selection.getStartElement();
                        var elementPath = new Editor.ElementPath(startElement);
                        return queryActive('ul', elementPath);
                    }
                }
            });
        }
    }
};

});