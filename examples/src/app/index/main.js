define(function(require) {
    'use strict';

    var m = require('mithril'),
        headerPanel = require('polythene/header-panel/header-panel'),
        listTile = require('polythene/list-tile/list-tile'),
        icon = require('polythene/icon/icon'),
        github = require('github'),
        item,
        content,
        links;

    require('css!polythene/theme/theme');
    require('css!app-css');
    require('css!./main');

    links = [{
        baseUrl: 'svg',
        name: 'SVG'
    }, {
        baseUrl: 'icon',
        name: 'Icon'
    }, {
        baseUrl: 'button',
        name: 'Button'
    }, {
        baseUrl: 'icon-button',
        name: 'Icon Button'
    }, {
        baseUrl: 'fab',
        name: 'Floating Action Button'
    }, {
        baseUrl: 'item',
        name: 'Item'
    }, {
        baseUrl: 'toolbar',
        name: 'Toolbar'
    }, {
        baseUrl: 'header-panel',
        name: 'Header Panel'
    }, {
        baseUrl: 'shadow',
        name: 'Shadow'
    }, {
        baseUrl: 'ripple',
        name: 'Ripple'
    }, {
        baseUrl: 'list-tile',
        name: 'List Tile'
    }, {
        baseUrl: 'list',
        name: 'List'
    }];

    item = function(title, url) {
        return m.component(listTile, {
            title: title,
            icon: {
                type: 'medium',
                class: 'index-cirle-icon',
                svg: {
                    name: 'arrow-right',
                    iconset: 'mdi'
                }
            },
            url: {
                href: url
            }
        });
    };

    content = {
        view: function() {
            var minScale,
                onHeaderTransform;

            minScale = 0.65;

            onHeaderTransform = function (e) {
                var titleStyle = document.querySelector('.title').style;
                var m = e.height - e.condensedHeight;
                var scale = Math.max(minScale, (m - e.y) / (m / (1 - minScale)) + minScale);
                titleStyle.transform = titleStyle.webkitTransform =
                    'scale(' + scale + ') translateZ(0)';
            };

            return [
                m.component(headerPanel, {
                    class: 'app-header index-header',
                    mode: 'waterfall-tall',
                    keepCondensedHeader: true,
                    header: {
                        toolbar: {
                            bottomBar: m('.indent.title', [
                                m.component(icon, {
                                    svg: {
                                        src: 'app/img/recycle.svg'
                                    },
                                    class: 'logo'
                                }),
                                'Polythene Examples'
                            ])
                        }
                    },
                    content: m('div', {
                        class: 'index'
                    }, m('.index-list', links.map(function(link) {
                        return item(link.name, link.baseUrl + '.html');
                    }))),
                    transform: onHeaderTransform
                }),
                github
            ];
        }
    };

    m.mount(document.body, content);
});