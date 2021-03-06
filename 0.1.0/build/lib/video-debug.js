/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 14:01
*/
/*
combined modules:
editor-plugins/lib/video
*/
KISSY.add('editor-plugins/lib/video', [
    'editor',
    './flash-common/utils',
    './flash-common/base-class',
    './fake-objects',
    './button'
], function (S, require, exports, module) {
    /**
 * @ignore
 * video button.
 * @author yiminghe@gmail.com
 */
    var Editor = require('editor');
    var flashUtils = require('./flash-common/utils');
    var FlashBaseClass = require('./flash-common/base-class');
    var fakeObjects = require('./fake-objects');
    require('./button');
    var CLS_VIDEO = 'ke_video', TYPE_VIDEO = 'video';
    function Video(config) {
        this.config = config;
    }
    Video.prototype = {
        pluginRenderUI: function (editor) {
            fakeObjects.init(editor);
            var dataProcessor = editor.htmlDataProcessor, dataFilter = dataProcessor && dataProcessor.dataFilter;
            var provider = [];
            function getProvider(url) {
                for (var i = 0; i < provider.length; i++) {
                    var p = provider[i];
                    if (p.reg.test(url)) {
                        return p;
                    }
                }
                return undefined;
            }
            var videoCfg = this.config;
            if (videoCfg.providers) {
                provider.push.apply(provider, videoCfg.providers);
            }
            videoCfg.getProvider = getProvider;
            if (dataFilter) {
                dataFilter.addRules({
                    tags: {
                        'object': function (element) {
                            var classId = element.getAttribute('classid'), i;
                            var childNodes = element.childNodes;
                            if (!classId) {
                                // Look for the inner <embed>
                                for (i = 0; i < childNodes.length; i++) {
                                    if (childNodes[i].nodeName === 'embed') {
                                        if (!flashUtils.isFlashEmbed(childNodes[i])) {
                                            return null;
                                        }
                                        if (getProvider(childNodes[i].getAttribute('src'))) {
                                            return dataProcessor.createFakeParserElement(element, CLS_VIDEO, TYPE_VIDEO, true);
                                        }
                                    }
                                }
                                return null;
                            }
                            for (i = 0; i < childNodes.length; i++) {
                                var c = childNodes[i];
                                if (c.nodeName === 'param' && c.getAttribute('name').toLowerCase() === 'movie') {
                                    if (getProvider(c.getAttribute('value') || c.getAttribute('VALUE'))) {
                                        return dataProcessor.createFakeParserElement(element, CLS_VIDEO, TYPE_VIDEO, true);
                                    }
                                }
                            }
                        },
                        'embed': function (element) {
                            if (!flashUtils.isFlashEmbed(element)) {
                                return null;
                            }
                            if (getProvider(element.getAttribute('src'))) {
                                return dataProcessor.createFakeParserElement(element, CLS_VIDEO, TYPE_VIDEO, true);
                            }
                        }    //4 比 flash 的优先级 5 高！
                    }
                }, //4 比 flash 的优先级 5 高！
                4);
            }
            var flashControl = new FlashBaseClass({
                    editor: editor,
                    cls: CLS_VIDEO,
                    type: TYPE_VIDEO,
                    pluginConfig: this.config,
                    bubbleId: 'video',
                    contextMenuId: 'video',
                    contextMenuHandlers: {
                        '\u89C6\u9891\u5C5E\u6027': function () {
                            var selectedEl = this.get('editorSelectedEl');
                            if (selectedEl) {
                                flashControl.show(selectedEl);
                            }
                        }
                    }
                });
            editor.addButton('video', {
                tooltip: '\u63D2\u5165\u89C6\u9891',
                listeners: {
                    click: function () {
                        flashControl.show();
                    }
                },
                mode: Editor.Mode.WYSIWYG_MODE
            });
        }
    };
    module.exports = Video;
});




