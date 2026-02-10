import { BaseHelpers } from "./helpers/base-helpers";
BaseHelpers.addLoadedClass();
BaseHelpers.addTouchClass();

/* -------------------------------------------------------------------------------------------------------------------------------------------------
Force Repaint code for fix Chrome GPU blur bag
-----------------------------------------------------------------------------------------------------------------------------------------------------*/
function forceRepaint() {
  document.body.style.transform = "translateZ(0.0001px)";
  requestAnimationFrame(() => {
    document.body.style.transform = "";
  });
}

// при загрузке
window.addEventListener("load", () => {
  setTimeout(forceRepaint, 60);
});

// при скролле
let repaintTick = false;

window.addEventListener("scroll", () => {
  if (!repaintTick) {
    requestAnimationFrame(() => {
      forceRepaint();
      repaintTick = false;
    });
    repaintTick = true;
  }
});

// при ресайзе
window.addEventListener("resize", forceRepaint);

/* -------------------------------------------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------------------------------------------*/
