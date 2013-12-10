Ext.data.JsonP.BUI_Component_UIBase_Close({"tagname":"class","name":"BUI.Component.UIBase.Close","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-BUI.Component.UIBase.Close","members":{"cfg":[{"name":"closeAction","tagname":"cfg","owner":"BUI.Component.UIBase.Close","meta":{},"id":"cfg-closeAction"},{"name":"closeTpl","tagname":"cfg","owner":"BUI.Component.UIBase.Close","meta":{},"id":"cfg-closeTpl"},{"name":"closeable","tagname":"cfg","owner":"BUI.Component.UIBase.Close","meta":{},"id":"cfg-closeable"}],"property":[{"name":"closeAction","tagname":"property","owner":"BUI.Component.UIBase.Close","meta":{"protected":true},"id":"property-closeAction"},{"name":"closeBtn","tagname":"property","owner":"BUI.Component.UIBase.Close","meta":{"protected":true},"id":"property-closeBtn"},{"name":"closeTpl","tagname":"property","owner":"BUI.Component.UIBase.Close","meta":{"protected":true},"id":"property-closeTpl"},{"name":"closeable","tagname":"property","owner":"BUI.Component.UIBase.Close","meta":{},"id":"property-closeable"}],"method":[{"name":"close","tagname":"method","owner":"BUI.Component.UIBase.Close","meta":{},"id":"method-close"}],"event":[{"name":"beforeclosed","tagname":"event","owner":"BUI.Component.UIBase.Close","meta":{},"id":"event-beforeclosed"},{"name":"closeclick","tagname":"event","owner":"BUI.Component.UIBase.Close","meta":{},"id":"event-closeclick"},{"name":"closed","tagname":"event","owner":"BUI.Component.UIBase.Close","meta":{},"id":"event-closed"},{"name":"closing","tagname":"event","owner":"BUI.Component.UIBase.Close","meta":{},"id":"event-closing"}],"css_var":[],"css_mixin":[]},"linenr":60,"files":[{"filename":"close.js","href":"close.html#BUI-Component-UIBase-Close"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":["BUI.Overlay.Overlay","BUI.Tab.TabPanelItem"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixed into</h4><div class='dependency'><a href='#!/api/BUI.Overlay.Overlay' rel='BUI.Overlay.Overlay' class='docClass'>BUI.Overlay.Overlay</a></div><div class='dependency'><a href='#!/api/BUI.Tab.TabPanelItem' rel='BUI.Tab.TabPanelItem' class='docClass'>BUI.Tab.TabPanelItem</a></div><h4>Files</h4><div class='dependency'><a href='source/close.html#BUI-Component-UIBase-Close' target='_blank'>close.js</a></div></pre><div class='doc-contents'><p>Close extension class.\nRepresent a close button.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-closeAction' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Close'>BUI.Component.UIBase.Close</span><br/><a href='source/close.html#BUI-Component-UIBase-Close-cfg-closeAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Close-cfg-closeAction' class='name expandable'>closeAction</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>关闭时隐藏还是移除DOM结构\n\n\n\"hide\" : default 隐藏. ...</div><div class='long'><p>关闭时隐藏还是移除DOM结构<br/></p>\n\n<ul>\n<li>\"hide\" : default 隐藏.</li>\n<li>\"destroy\"：当点击关闭按钮时移除（destroy)控件</li>\n<li>'remove' : 当存在父控件时使用remove，同时从父元素中删除</li>\n</ul>\n\n<p>Defaults to: <code>'hide'</code></p></div></div></div><div id='cfg-closeTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Close'>BUI.Component.UIBase.Close</span><br/><a href='source/close.html#BUI-Component-UIBase-Close-cfg-closeTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Close-cfg-closeTpl' class='name expandable'>closeTpl</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>关闭按钮的默认模版\n\n  var overlay = new Overlay({\n    closeTpl : 'x',\n    closeable : true,\n    trigger : '#t1'\n  });\n  overla...</div><div class='long'><p>关闭按钮的默认模版</p>\n\n<pre><code>  var overlay = new Overlay({\n    closeTpl : '<a href=\"#\" title=\"close\">x</a>',\n    closeable : true,\n    trigger : '#t1'\n  });\n  overlay.render();\n</code></pre>\n\n</div></div></div><div id='cfg-closeable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Close'>BUI.Component.UIBase.Close</span><br/><a href='source/close.html#BUI-Component-UIBase-Close-cfg-closeable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Close-cfg-closeable' class='name expandable'>closeable</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>是否出现关闭按钮 ...</div><div class='long'><p>是否出现关闭按钮</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-closeAction' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Close'>BUI.Component.UIBase.Close</span><br/><a href='source/close.html#BUI-Component-UIBase-Close-property-closeAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Close-property-closeAction' class='name not-expandable'>closeAction</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'><p>关闭时隐藏还是移除DOM结构\ndefault \"hide\".可以设置 \"destroy\" ，当点击关闭按钮时移除（destroy)控件</p>\n</div><div class='long'><p>关闭时隐藏还是移除DOM结构\ndefault \"hide\".可以设置 \"destroy\" ，当点击关闭按钮时移除（destroy)控件</p>\n</div></div></div><div id='property-closeBtn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Close'>BUI.Component.UIBase.Close</span><br/><a href='source/close.html#BUI-Component-UIBase-Close-property-closeBtn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Close-property-closeBtn' class='name expandable'>closeBtn</a><span> : <a href=\"#!/api/jQuery\" rel=\"jQuery\" class=\"docClass\">jQuery</a></span><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>关闭按钮. ...</div><div class='long'><p>关闭按钮.</p>\n<p>Defaults to: <code>{view: 1}</code></p></div></div></div><div id='property-closeTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Close'>BUI.Component.UIBase.Close</span><br/><a href='source/close.html#BUI-Component-UIBase-Close-property-closeTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Close-property-closeTpl' class='name expandable'>closeTpl</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>关闭按钮的默认模版 ...</div><div class='long'><p>关闭按钮的默认模版</p>\n<p>Defaults to: <code>{view: true}</code></p></div></div></div><div id='property-closeable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Close'>BUI.Component.UIBase.Close</span><br/><a href='source/close.html#BUI-Component-UIBase-Close-property-closeable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Close-property-closeable' class='name expandable'>closeable</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>是否出现关闭按钮 ...</div><div class='long'><p>是否出现关闭按钮</p>\n<p>Defaults to: <code>{view: 1}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-close' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Close'>BUI.Component.UIBase.Close</span><br/><a href='source/close.html#BUI-Component-UIBase-Close-method-close' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Close-method-close' class='name expandable'>close</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>关闭弹出框，如果closeAction = 'hide'那么就是隐藏，如果 closeAction = 'destroy'那么就是释放,'remove'从父控件中删除，并释放 ...</div><div class='long'><p>关闭弹出框，如果closeAction = 'hide'那么就是隐藏，如果 closeAction = 'destroy'那么就是释放,'remove'从父控件中删除，并释放</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-beforeclosed' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Close'>BUI.Component.UIBase.Close</span><br/><a href='source/close.html#BUI-Component-UIBase-Close-event-beforeclosed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Close-event-beforeclosed' class='name expandable'>beforeclosed</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>关闭前，发生在closing后，closed前，用于处理关闭前的一些工作 ...</div><div class='long'><p>关闭前，发生在closing后，closed前，用于处理关闭前的一些工作</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>关闭事件</p>\n<ul><li><span class='pre'>action</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>关闭执行的行为，hide,destroy,remove</p>\n</div></li></ul></div></li></ul></div></div></div><div id='event-closeclick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Close'>BUI.Component.UIBase.Close</span><br/><a href='source/close.html#BUI-Component-UIBase-Close-event-closeclick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Close-event-closeclick' class='name expandable'>closeclick</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>触发点击关闭按钮的事件,return false 阻止关闭 ...</div><div class='long'><p>触发点击关闭按钮的事件,return false 阻止关闭</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>关闭事件</p>\n<ul><li><span class='pre'>domTarget</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>点击的关闭按钮节点</p>\n</div></li></ul></div></li></ul></div></div></div><div id='event-closed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Close'>BUI.Component.UIBase.Close</span><br/><a href='source/close.html#BUI-Component-UIBase-Close-event-closed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Close-event-closed' class='name expandable'>closed</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>已经关闭 ...</div><div class='long'><p>已经关闭</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>关闭事件</p>\n<ul><li><span class='pre'>action</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>关闭执行的行为，hide,destroy,remove</p>\n</div></li></ul></div></li></ul></div></div></div><div id='event-closing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Component.UIBase.Close'>BUI.Component.UIBase.Close</span><br/><a href='source/close.html#BUI-Component-UIBase-Close-event-closing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Component.UIBase.Close-event-closing' class='name expandable'>closing</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>正在关闭，可以通过return false 阻止关闭事件 ...</div><div class='long'><p>正在关闭，可以通过return false 阻止关闭事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>关闭事件</p>\n<ul><li><span class='pre'>action</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>关闭执行的行为，hide,destroy,remove</p>\n</div></li></ul></div></li></ul></div></div></div></div></div></div></div>"});