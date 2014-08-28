KISSY.add('kg/editor-plugins/1.1.0/image/dialog-tpl',[],function(S ,require, exports, module) {module.exports="<div class='{prefixCls}img-tabs'>\n    <div class='{prefixCls}img-tabs-bar ks-clear'>\n        <div\n                class='{prefixCls}img-tabs-tab-selected {prefixCls}img-tabs-tab'\n\n                hidefocus='hidefocus'>\n            网络图片\n        </div>\n        <div\n                class='{prefixCls}img-tabs-tab'\n                hidefocus='hide\n    focus'>\n            本地上传\n        </div>\n    </div>\n    <div class='{prefixCls}img-tabs-body'>\n        <div class='{prefixCls}img-tabs-panel {prefixCls}img-tabs-panel-selected'>\n            <label>\n        <span class='{prefixCls}image-title'>\n        图片地址：\n        </span>\n                <input\n                        data-verify='^(https?:/)?/[^\\s]'\n                        data-warning='网址格式为：http:// 或 /'\n                        class='{prefixCls}img-url {prefixCls}input'\n                        style='width:390px;vertical-align:middle;'\n                        />\n            </label>\n        </div>\n        <div class='{prefixCls}img-tabs-panel'>\n            <form class='{prefixCls}img-upload-form' enctype='multipart/form-data'>\n                <p style='zoom:1;'>\n                    <input class='{prefixCls}input {prefixCls}img-local-url'\n                           readonly='readonly'\n                           style='margin-right: 15px;\n            vertical-align: middle;\n            width: 368px;\n            color:#969696;'/>\n                    <a\n                            style='padding:3px 11px;\n            position:absolute;\n            left:390px;\n            top:0;\n            z-index:1;'\n                            class='{prefixCls}image-up {prefixCls}button ks-inline-block'>浏览...</a>\n                </p>\n\n                <div class='{prefixCls}img-up-extraHTML'>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n<div style='\n            padding:0 20px 5px 20px;'>\n    <table\n            style='width:100%;margin-top:8px;'\n            class='{prefixCls}img-setting'>\n        <tr>\n            <td>\n                <label>\n                    宽度：\n                </label>\n                <input\n                        data-verify='^(自动|((?!0$)\\d+))?$'\n                        data-warning='宽度请输入正整数'\n                        class='{prefixCls}img-width {prefixCls}input'\n                        style='vertical-align:middle;width:60px'\n                        /> 像素\n\n            </td>\n            <td>\n                <label>\n                    高度：\n                    <label>\n                        <input\n                                data-verify='^(自动|((?!0$)\\d+))?$'\n                                data-warning='高度请输入正整数'\n                                class='{prefixCls}img-height {prefixCls}input'\n                                style='vertical-align:middle;width:60px'\n                                /> 像素 </label>\n\n                    <input\n                            type='checkbox'\n                            class='{prefixCls}img-ratio'\n                            style='vertical-align:middle;margin-left:5px;'\n                            checked='checked'/>\n                    锁定高宽比\n                </label>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <label>\n                    对齐：\n                </label>\n                <select class='{prefixCls}img-align' title='对齐'>\n                    <option value='none'>无</option>\n                    <option value='left'>左对齐</option>\n                    <option value='right'>右对齐</option>\n                </select>\n\n            </td>\n            <td><label>\n                间距：\n            </label>\n                <input\n                        data-verify='^\\d+$'\n                        data-warning='间距请输入非负整数'\n                        class='{prefixCls}img-margin {prefixCls}input'\n                        style='width:60px'/> 像素\n\n            </td>\n        </tr>\n        <tr>\n            <td colspan='2' style='padding-top: 6px'>\n                <label>\n                    链接网址：\n                </label>\n                <input\n                        class='{prefixCls}img-link {prefixCls}input'\n                        style='width:235px;vertical-align:middle;'\n                        data-verify='^(?:(?:\\s*)|(?:https?://[^\\s]+)|(?:#.+))$'\n                        data-warning='请输入合适的网址格式'\n                        />\n\n                <label>\n                    <input\n                            class='{prefixCls}img-link-blank'\n                            style='vertical-align:middle;\n                margin-left:5px;'\n                            type='checkbox'/>\n                    &nbsp; 在新窗口打开链接\n                </label>\n            </td>\n        </tr>\n    </table>\n</div>\n";});