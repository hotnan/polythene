define(function(require) {
    'use strict';

    var m = require('mithril'),
        list = require('polythene/list/list'),
        ripple = require('polythene/ripple/ripple'),
        listTile = require('polythene/list-tile/list-tile'),
        toolbar = require('polythene/toolbar/toolbar'),
        iconBtn = require('polythene/icon-button/icon-button'),
        nav = require('nav'),
        github = require('github'),
        titleBlock,
        titleLineText,
        infoLineText,
        iconButtons,
        btn,
        toolbarRow,
        content;

    require('css!polythene/theme/theme');
    require('css!app-css');
    require('css!app/list-tile/main');
    require('css!./main');

    titleLineText = 'Two-line item';
    infoLineText = 'Secondary text';

    btn = function(group, name) {
        return m.component(iconBtn, {
            icon: {
                svg: {
                    group: group,
                    name: name
                }
            },
            after: m.component(ripple)
        });
    };

    toolbarRow = [
        btn('navigation', 'menu'),
        m('span[flex]', 'Toolbar'),
        btn('navigation', 'refresh'),
        btn('content', 'add')
    ];

    iconButtons = function(opts, iconOpts) {
        opts = opts || {};
        iconOpts = iconOpts || {};
        return [
            m.component(iconBtn, {
                icon: {
                    svg: {
                        group: 'navigation',
                        name: 'menu'
                    },
                    type: 'large',
                    className: 'md'
                },
                wash: (iconOpts.wash !== undefined) ? iconOpts.wash : true,
                disabled: iconOpts.disabled,
                className: 'demo-button',
                after: m.component(ripple, opts)
            }),
            m.component(iconBtn, {
                icon: {
                    svg: {
                        group: 'navigation',
                        name: 'menu'
                    },
                    className: 'md'
                },
                wash: (iconOpts.wash !== undefined) ? iconOpts.wash : true,
                disabled: iconOpts.disabled,
                className: 'demo-button',
                after: m.component(ripple, opts)
            })
        ];
    };

    titleBlock = {
        view: function(ctrl, args) {
            return m('.p-block', {class: args.className}, [
                m('.p-block-header', args.title),
                args.content
            ]);
        }
    };

    content = {
        view: function() {
            return [
                m.component(nav, {
                    baseFileName: 'ripple',
                    title: 'Ripple',
                    subtitle: 'Mithril version'
                }),

                m.component(titleBlock, {
                    title: 'Constrained ripple',
                    content: iconButtons()
                }),

                m.component(titleBlock, {
                    title: 'Unconstrained ripple',
                    content: iconButtons({constrained: false}, {wash: false})
                }),

                m.component(titleBlock, {
                    title: 'Disabled ripple',
                    content: iconButtons({constrained: false, disabled: true}, {disabled: true})
                }),

                m.component(titleBlock, {
                    title: 'Colored ripple',
                    content: iconButtons({className: 'colored-ripple'}, {wash: false})
                }),

                m.component(titleBlock, {
                    title: 'Dark ripple',
                    className: "dark-theme",
                    content: iconButtons()
                }),

                m.component(titleBlock, {
                    title: 'Large ripple',
                    content: m.component(list, {
                        className: 'demo-list demo-bordered',
                        tiles: [
                            m.component(listTile, {
                                title: titleLineText,
                                info: infoLineText,
                                after: m.component(ripple)
                            })
                        ]
                    })
                }),

                m.component(titleBlock, {
                    title: 'Custom opacity and speed',
                    content: m.component(list, {
                        className: 'demo-list demo-bordered',
                        tiles: [
                            m.component(listTile, {
                                title: titleLineText,
                                info: infoLineText,
                                after: m.component(ripple, {
                                    className: 'colored-ripple',
                                    initialOpacity: 0.6,
                                    opacityDecayVelocity: 0.2
                                })
                            })
                        ]
                    })
                }),

                m.component(titleBlock, {
                    title: 'Callbacks',
                    content: m.component(list, {
                        className: 'demo-list demo-bordered',
                        tiles: [
                            m.component(listTile, {
                                title: titleLineText,
                                info: infoLineText,
                                after: m.component(ripple, {
                                    start: function(e) {
                                        console.log('ripple start', e);
                                    },
                                    end: function(e) {
                                        console.log('ripple end', e);
                                    }
                                })
                            })
                        ]
                    })
                }),

                m.component(titleBlock, {
                    title: 'Combined ripples',
                    content: m.component(toolbar, {
                        mode: 'tall',
                        topBar: toolbarRow,
                        middleBar: m.trust('<div flex class="middle indent">label aligns to the middle</div>'),
                        bottomBar: m.trust('<div class="bottom indent" style="color: #666; font-size: 18px;">some stuffs align to the bottom</div>'),
                        after: m.component(ripple)
                    })
                }),

                github
            ];
        }
    };

    m.mount(document.body, content);
});