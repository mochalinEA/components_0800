(function () {
  'use strict';

  class Utils {

    /**
     * Набор воспомогательных утилит
     */
    constructor () {
    }

    getTemplate(name) {
      return document.querySelector(`#templates > .tpl-${name}`).innerHTML;
    }

    renderTemplate(tpl, data) {
      return nunjucks.renderString(tpl, data);
    }

    trigger (el, name, data) {
      let event = new CustomEvent(name, {
        bubbles: true,
        detail: data
      });

      el.dispatchEvent(event);
      console.log(event);
    }

  }

  // export
  window.Utils = new Utils();
})();