!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-css","polythene-theme"],t):t(e.polythene={},e["polythene-core"],e["polythene-core-css"],e["polythene-theme"])}(this,function(e,t,l,i){"use strict";function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}var s={component:"pe-list-tile",content:"pe-list-tile__content",highSubtitle:"pe-list-tile__high-subtitle",primary:"pe-list-tile__primary",secondary:"pe-list-tile__secondary",subtitle:"pe-list-tile__subtitle",title:"pe-list-tile__title",contentFront:"pe-list-tile__content-front",compact:"pe-list-tile--compact",compactFront:"pe-list-tile--compact-front",disabled:"pe-list-tile--disabled",hasFront:"pe-list-tile--front",hasHighSubtitle:"pe-list-tile--high-subtitle",hasSubtitle:"pe-list-tile--subtitle",hoverable:"pe-list-tile--hoverable",selectable:"pe-list-tile--selectable",selected:"pe-list-tile--selected",sticky:"pe-list-tile--sticky"},_={single_height:48,single_line_height:21,single_with_icon_height:56,single_with_icon_line_height:29,padding:13,compact_padding:9,subtitle_line_count:1,has_subtitle_padding:15,high_subtitle_line_count:2,has_high_subtitle_padding:13,front_item_width:72,compact_front_item_width:64,side_padding:2*i.vars.grid_unit_component,compact_side_padding:1*i.vars.grid_unit_component,font_size_title:16,font_size_subtitle:14,line_height_subtitle:20,font_size_list_header:14,font_size_small:12,color_light_title:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_primary),color_light_subtitle:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_secondary),color_light_info:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_tertiary),color_light_text_disabled:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_disabled),color_light_list_header:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_tertiary),color_light_secondary:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_secondary),color_light_hover_background:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_background_hover),color_light_focus_background:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_background_hover),color_light_selected_background:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_background_hover),color_dark_title:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_primary),color_dark_subtitle:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_secondary),color_dark_info:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_tertiary),color_dark_text_disabled:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_disabled),color_dark_list_header:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_tertiary),color_dark_secondary:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_secondary),color_dark_hover_background:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_background_hover),color_dark_selected_background:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_background_hover)},a=function(e){return{"padding-left":e+"px","padding-right":e+"px"}},c=function(e,t){return{"padding-top":e+"px","padding-bottom":(t||e)+"px"}},d=function(e,t){return[n({},e,[l.flex.layout,{position:"relative",overflow:"hidden",".pe-list-tile--sticky":[l.mixin.sticky(2)]," .pe-list-tile__primary, .pe-list-tile__secondary":[l.flex.layoutHorizontal,{textDecoration:"none",color:"inherit",border:"none"}]," .pe-list-tile__primary":[l.flex.flex(),{position:"relative"," .pe-list-tile__content:not(.pe-list-tile__content-front)":[l.flex.flex(),c(t.padding,t.padding+1)]}]," .pe-list-tile__secondary":{textAlign:"right",fontSize:t.font_size_title+"px",position:"relative"}," .pe-list-tile__content":[l.flex.layoutVertical,l.flex.selfCenter,a(t.side_padding),{".pe-list-tile__content-front":[c(t.padding-5),{".pe-list-tile--compact-front":{width:t.compact_front_item_width+"px"},":not(.pe-list-tile--compact-front)":{width:t.front_item_width+"px"}}]," small":{fontSize:t.font_size_small+"px"}}]," .pe-list-tile__content-front + .pe-list-tile__content":{paddingLeft:0}," .pe-list-tile__title":[l.mixin.ellipsis(1,t.single_line_height,"px"),{fontSize:t.font_size_title+"px",fontWeight:i.vars.font_weight_normal,lineHeight:t.single_line_height+"px"}]," .pe-list-tile__subtitle":[l.mixin.ellipsis(t.subtitle_line_count,t.line_height_subtitle,"px"),{fontSize:t.font_size_subtitle+"px",lineHeight:t.line_height_subtitle+"px",".pe-list-tile__high-subtitle":[l.mixin.ellipsis(t.high_subtitle_line_count,t.line_height_subtitle,"px"),{whiteSpace:"normal"}]}],".pe-list-tile--selected, &.pe-list-tile--disabled":{" a":{pointerEvents:"none"}},".pe-list-tile--subtitle":{" .pe-list-tile__content":[c(t.has_subtitle_padding,t.has_subtitle_padding+1),{" .pe-list-tile__title":{padding:0}}]},".pe-list-tile--high-subtitle":{" .pe-list-tile--high-subtitle .pe-list-tile__secondary":[l.flex.layoutHorizontal,l.flex.layoutStart]," .pe-list-tile__content":[l.flex.selfStart,c(t.has_high_subtitle_padding,t.has_high_subtitle_padding+1),{" .pe-list-tile__title":{padding:0}}]},".pe-list__header":{height:t.single_height+"px"," .pe-list-tile__content":{paddingTop:0,paddingBottom:0}," .pe-list-tile__title":[l.mixin.ellipsis(1,t.single_height,"px"),{fontSize:t.font_size_list_header+"px",fontWeight:i.vars.font_weight_medium,lineHeight:t.single_height+"px",padding:0}]}," .pe-list--compact &, &.pe-list-tile--compact":{":not(.pe-list__header)":{" .pe-list-tile__content":c(t.compact_padding,t.compact_padding+1)}},"@supports (-moz-appearance:none) and (display:contents)":{" .pe-list-tile__primary, .pe-list-tile__content":{overflow:"hidden"}},".pe-dialog .pe-menu__content &":{" .pe-list-tile__title":l.mixin.ellipsis("none")},".pe-menu__content &":{":not(.pe-list-tile--disabled)":{cursor:"default","&, .pe-list-tile__primary, .pe-list-tile__secondary":{" .pe-list-tile__title, .pe-list-tile__subtitle":{userSelect:"none"}}}},"html.pe-no-touch &.pe-list-tile--hoverable,       html.pe-no-touch &.pe-list-tile--selectable":{":not(.pe-list__header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover":{cursor:"pointer"}}}])]},p=function(e,t,l,i){return[o({},e.map(function(e){return e+t}).join(","),{color:l["color_"+i+"_title"],backgroundColor:l["color_"+i+"_background"],".pe-list__header":{color:l["color_"+i+"_list_header"]," .pe-list-tile__primary, pe-list-tile__secondary":{backgroundColor:"inherit"}}," .pe-list-tile__subtitle":{color:l["color_"+i+"_subtitle"]}," .pe-list-tile__secondary":{color:l["color_"+i+"_secondary"]},".pe-list-tile--disabled":{"&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle":{color:l["color_"+i+"_text_disabled"]}},".pe-list-tile--selected":{" .pe-list-tile__primary, pe-list-tile__secondary":{backgroundColor:l["color_"+i+"_selected_background"]}},"&.pe-list-tile--sticky":{backgroundColor:l["color_"+i+"_background"]||"inherit"},":not(.pe-list-tile--disabled)":{" a.pe-list-tile__primary:focus, a.pe-list-tile__secondary:focus":{backgroundColor:l["color_"+i+"_focus_background"]||"inherit"}}})]},u=function(e,t,l,i){return[o({},e.map(function(e){return e+t+":hover"}).join(","),{":not(.pe-list__header):not(.pe-list-tile--disabled)":{" .pe-list-tile__primary, .pe-list-tile__secondary":{backgroundColor:l["color_"+i+"_hover_background"]}}})]},h=function(e,t){return[p([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),p(["",".pe-light-tone",".pe-light-tone "],e,t,"light"),u(["html.pe-no-touch .pe-dark-tone .pe-list-tile--hoverable","html.pe-no-touch .pe-dark-tone .pe-list-tile--hoverable "],e,t,"dark"),u(["html.pe-no-touch .pe-list-tile--hoverable","html.pe-no-touch .pe-list-tile--hoverable ","html.pe-no-touch .pe-light-tone .pe-list-tile--hoverable","html.pe-no-touch .pe-light-tone .pe-list-tile--hoverable "],e,t,"light")]},g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},b=[d,h],f="."+s.component,m=function(e,t){return l.styler.generateStyles([e,f],g({},_,t),b)};l.styler.generateStyles([f],_,b);var v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},y=function(){return"div"},k=m,x=function(e,l,i,n,o){var _=n.element?n.element:n.url?"a":"div",a=[s.content,s.contentFront,n.compactFront?s.compactFront:null].join(" "),c=n.front?e("div",v({},i?{key:"front"}:null,{className:a}),n.front):n.indent?e("div",v({},i?{key:"front"}:null,{className:a})):null;return e(_,v({},t.filterSupportedAttributes(n),n.url,n.events,r({className:s.primary,style:null},[l.tabindex],n[l.tabindex]||0)),[c,e("div",{className:s.content,style:n.style},[n.content?v({},i?{key:"content"}:null,n.content):o,n.title&&!n.content?e("div",v({},i?{key:"title"}:null,{className:s.title}),n.title):null,n.subtitle?e("div",v({},i?{key:"subtitle"}:null,{className:s.subtitle}),n.subtitle):null,n.highSubtitle?e("div",v({},i?{key:"highSubtitle"}:null,{className:s.subtitle+" "+s.highSubtitle}),n.highSubtitle):null,n.subContent?e("div",v({},i?{key:"subContent"}:null,{className:s.subContent}),n.subContent):null])])},S=function(e,l,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return e(n.element?n.element:n.url?"a":"div",v({},n.url,{className:s.secondary},l?{key:"secondary"}:null,t.filterSupportedAttributes(n)),e("div",{className:s.content},[n.icon?e(i,n.icon):null,n.content?n.content:null]))},w=function(e,l){var i=l.keys,n=e.attrs,o=n.subtitle?s.hasSubtitle:n.highSubtitle?s.hasHighSubtitle:n.front||n.indent?s.hasFront:null;return v({},t.filterSupportedAttributes(n,{remove:["tabindex","tabIndex"]}),{className:[s.component,n.selected?s.selected:null,n.disabled?s.disabled:null,n.sticky?s.sticky:null,n.compact?s.compact:null,n.hoverable?s.hoverable:null,n.selectable?s.selectable:null,"dark"===n.tone?"pe-dark-tone":null,"light"===n.tone?"pe-light-tone":null,o,n.className||n[i.class]].join(" ")})},z=function(e,t){var l=t.renderer,i=t.requiresKeys,n=t.keys,o=t.Ripple,r=t.Icon,s=e.attrs,_=v({},i?{key:"primary"}:null,s);return delete _.id,delete _[n.class],[s.ink&&!s.disabled?l(o,v({},s.ripple,i?{key:"ripple"}:null)):null,x(l,n,i,_,s.children||e.children),s.secondary?S(l,i,r,s.secondary):null]},j=Object.freeze({getElement:y,theme:k,createProps:w,createContent:z});e.coreListTile=j,e.classes=s,e.vars=_,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-list-tile.js.map
