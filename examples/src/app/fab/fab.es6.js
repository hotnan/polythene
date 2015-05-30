'use strict';

import m from 'mithril';
import fab from 'polythene/fab/fab';
import nav from 'app/app/nav';
import github from 'app/app/github';

require('polythene-theme/theme');
require('app/app/app.css!');
require('./fab.css!');

const NAME = 'Floating Action Button';

let app,
    fabIcon,
    block,
    titleBlock,
    content;

fabIcon = {
    svg: {
        iconSet: 'mdi',
        name: 'plus'
    }
};

block = {
    view: function(ctrl, args) {
        return m.component(fab, args.fab);
    }
};

titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {class: args.class || ''}, [
            m('.p-block-header', args.title),
            args.content
        ]);
    }
};

content = m('.demo-content', [
    m.component(titleBlock, {
        title: 'Regular size',
        content: [
            m.component(block, {
                fab: {
                    icon: fabIcon,
                    class: 'demo-fab',
                    z: 1
                }
            })
        ]
    }),
    m.component(titleBlock, {
        title: 'Small size',
        content: [
            m.component(block, {
                fab: {
                    mini: true,
                    icon: fabIcon,
                    class: 'demo-fab green',
                    z: 1
                }
            }),
            m.component(block, {
                fab: {
                    icon: fabIcon,
                    class: 'demo-fab mini red',
                    z: 1
                }
            })
        ]
    }),
    m.component(titleBlock, {
        title: 'Dark theme, raised more',
        class: 'dark-theme',
        content: [
            m.component(block, {
                fab: {
                    icon: fabIcon,
                    class: 'demo-fab',
                    z: 2
                }
            })
        ]
    }),
    m.component(titleBlock, {
        title: 'Fully raised',
        content: [
            m.component(block, {
                fab: {
                    icon: fabIcon,
                    class: 'demo-fab',
                    z: 5
                }
            })
        ]
    })
]);

app = {};
app.view = function() {
    return [
        nav(NAME, [content, github])
    ];
};

m.mount(document.body, app);