import { vars } from "polythene-theme";
import { flex } from "polythene-core-css";

export default (selector, componentVars) => [{
  [selector]: [
    flex.layoutCenterCenter,
    {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: vars.z_dialog,
      height: "100%", // 100vh would make the dialog go beneath Mobile Safari toolbar
      padding: componentVars.padding_vertical + "px " + componentVars.padding_horizontal + "px",
      
      ".pe-dialog--full-screen": {
        padding: 0,

        " .pe-dialog__content": {
          width: "100%", // for IE11
        }

        // dialog-content styles: see dialog pane
      },

      " .pe-dialog__content": {
        position: "relative",
        borderRadius: componentVars.border_radius + "px",
      }
    }
  ],
  
  // The idea is to prevent scrolling of the background, but
  // Mobile Safari won't let that,
  // and Windows browsers will show a jump to the right because the scrollbar disappears.
  // So in all *something* gets broken when trying this.

  // " body.pe-dialog--open": {
  //   overflow: "hidden",
  //   left: 0,
  //   "-webkit-overflow-scrolling": "touch",
  //   top: 0,
  //   width: "100%"
  // }
}];
