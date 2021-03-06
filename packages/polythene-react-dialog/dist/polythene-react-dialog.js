(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core'), require('polythene-core-dialog'), require('polythene-react-dialog-pane'), require('polythene-react-shadow')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core', 'polythene-core-dialog', 'polythene-react-dialog-pane', 'polythene-react-shadow'], factory) :
	(factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core'],global['polythene-core-dialog'],global['polythene-react-dialog-pane'],global['polythene-react-shadow']));
}(this, (function (exports,polytheneReactBase,polytheneCore,polytheneCoreDialog,polytheneReactDialogPane,polytheneReactShadow) { 'use strict';

var listTileClasses = {
  component: "pe-list-tile",

  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",

  // states
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky"
};

var menuClasses = {
  component: "pe-menu",

  // elements
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target: "pe-menu__target",

  // states
  permanent: "pe-menu--permanent",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",

  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

var classes = {
  component: "pe-dialog",

  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",

  // states
  fullScreen: "pe-dialog--full-screen",
  backdrop: "pe-dialog--backdrop",
  open: "pe-dialog--open",

  // lookup
  menuContent: menuClasses.content
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DialogInstance = polytheneReactBase.StateComponent(_extends({}, polytheneCoreDialog.coreDialogInstance, {
  createProps: function createProps(vnode, args) {
    return polytheneCoreDialog.coreDialogInstance.createProps(vnode, _extends(args, { Shadow: polytheneReactShadow.Shadow, DialogPane: polytheneReactDialogPane.DialogPane }));
  },
  createContent: function createContent(vnode, args) {
    return polytheneCoreDialog.coreDialogInstance.createContent(vnode, _extends(args, { Shadow: polytheneReactShadow.Shadow, DialogPane: polytheneReactDialogPane.DialogPane }));
  }
}));

DialogInstance.displayName = "DialogInstance";

var options = {
  name: "dialog",
  htmlShowClass: classes.open,
  defaultId: "default_dialog",
  holderSelector: "div." + classes.holder,
  instance: DialogInstance,
  placeholder: "span." + classes.placeholder,
  transitions: polytheneCoreDialog.transitions
};

var Multiple = polytheneCore.Multi({ options: options, renderer: polytheneReactBase.renderer });
var Dialog = polytheneReactBase.StateComponent(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(function (p) {
  return Dialog[p] = Multiple[p];
});

Dialog.displayName = "Dialog";

exports.DialogInstance = DialogInstance;
exports.Dialog = Dialog;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-dialog.js.map
