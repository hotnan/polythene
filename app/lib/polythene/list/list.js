define(["polythene/polythene/polythene","mithril","polythene/list-tile/list-tile","css!./list"],function(e,n,l){"use strict";var t;return t=function(t,i){var r,s,o,a,c;return i=i||{},s=i.tag||"div",r=i.mode?i.mode:null,o={"class":["list",r,i.hoverable?"hoverable":null,i.header?"has-subheader":null,i["class"]].join(" "),config:i.config},i.header&&(c=Object.assign({},i.header),c["class"]=["subheader",c["class"]||null].join(" ")),a=[c?n.component(l,c):null,i.tiles?i.tiles:null],n(s,o,e.insertContent(a,i))},{controller:function(){return{view:n.prop()}},view:function(e,n){var l;return n=n||{},l=e.view(),l&&n.cache?l:(l=t(e,n),n.cache&&e.view(l),l)}}});