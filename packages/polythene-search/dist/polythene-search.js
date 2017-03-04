!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mithril"),require("polythene-textfield"),require("polythene-core"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-textfield","polythene-core","polythene-css","polythene-theme"],t):t(e.polythene=e.polythene||{},e.m,e["polythene-textfield"],e["polythene-core"],e["polythene-css"],e["polythene-theme"])}(this,function(e,t,i,n,r,l){"use strict";function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}t="default"in t?t.default:t,i="default"in i?i.default:i;var o=l.vars.rgba,_=8,p=20,u=20,s=48,h=16,f=0,c=l.vars.unit_block_border_radius,g=0,x=56,b=_,y=0,v=0,m={font_size_input:u,line_height_input:p,inset_height:s,inset_input_indent:h,inset_input_right_padding:f,inset_border_radius:c,full_width_height:x,full_width_side_margin:g,full_width_side_padding:b,full_width_input_right_padding:y,full_width_border_radius:v,color_light_label_text:o(l.vars.color_light_foreground,l.vars.blend_light_text_disabled),color_light_background:o(l.vars.color_light_background),color_dark_label_text:o(l.vars.color_dark_foreground,l.vars.blend_dark_text_disabled),color_dark_background:o(l.vars.color_dark_background)},w=function(e,t){var i=(t.inset_height-t.line_height_input)/2,n=(t.full_width_height-t.line_height_input)/2,a=l.vars.unit_indent-t.full_width_side_padding-l.vars.grid_unit_icon_button;return[d({},e,[r.flex.flex(),{position:"relative"," .pe-textfield":[r.flex.flex(),{padding:0,position:"relative",zIndex:1}]," .pe-textfield__input-area":{padding:0,":after":{display:"none"}}," .pe-textfield__input, .pe-textfield__label":{fontSize:t.font_size_input+"px",lineHeight:t.line_height_input+"px"}," .pe-textfield__input":{border:"none"}," .pe-textfield__label":{top:0,bottom:0}," .pe-search__content":r.flex.layoutHorizontal," .pe-search__content > *":[r.flex.layoutVertical,r.flex.selfCenter],".pe-search--inset":{"border-radius":t.inset_border_radius+"px",padding:"0 "+t.inset_side_padding+"px","&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label":{height:t.inset_height+"px"}," .pe-textfield__input, .pe-textfield__label":{paddingTop:i+"px",paddingBottom:i+"px",paddingLeft:t.inset_input_indent+"px",paddingRight:t.inset_input_right_padding+"px"}},".pe-search--full-width":{borderRadius:t.full_width_border_radius+"px",padding:"0 "+t.full_width_side_padding+"px","&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label":{height:t.full_width_height+"px"}," .pe-textfield__input, .pe-textfield__label":{paddingTop:n+"px",paddingBottom:n+"px",paddingLeft:a+"px",paddingRight:t.full_width_input_right_padding+"px"}}}])]},k=function(e,t,i,n){return[a({},e+t,{backgroundColor:i["color_"+n+"_background"]," .pe-textfield__label":{color:i["color_"+n+"_label_text"]}})]},S=function(e,t){return[k("",e,t,"light"),k(".pe-dark-theme ",e,t,"dark")]},j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},O=[w,S],q=".pe-search",z=function(e,t){return r.styler.generateStyles([e,q],j({},m,t),O)};r.styler.generateStyles([q],m,O);var P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},I={component:"pe-search",content:"pe-search__content",searchInset:"pe-search--inset",searchFullWidth:"pe-search--full-width"},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.focus&&e.dirty?"focus_dirty":e.focus?"focus":e.dirty?"dirty":"none"},W=function(e){var r=e.state,l=e.attrs,d=l.element||"div",a=P({},n.filterSupportedAttributes(l),{class:[I.component,l.fullWidth?I.searchFullWidth:I.searchInset,l.class].join(" ")},l.events),o=R(r.searchState),_=(l.buttons||{})[o]||{},p=l.textfield||{},u=t("div",{class:I.content},[_.before,t(i,P({},p,{getState:function(e){r.searchState=P({},e),p.getState&&p.getState(r.searchState)}})),_.after]);return t(d,a,[l.before,u,l.after])},B={theme:z,oninit:function(e){e.state.searchState=void 0},view:W};e.default=B,e.classes=I,e.vars=m,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-search.js.map
