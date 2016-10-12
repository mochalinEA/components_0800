(function () {
  'use strict';

  class Utils {

    /**
     * Набор воспомогательных утилит
     */
    constructor () {
    }

    getTemplate(name) {
      console.log(name);
      return document.querySelector(`#templates > .tpl-${name}`).innerHTML;
    }

    renderTemplate(tpl, data) {
      return nunjucks.renderString(tpl, data);
    }

    trigger (name, data) {
      let event = new CustomEvent(name, {
        bubbles: true,
        detail: data
      });

      this.el.dispatchEvent(event);
    }

  }

  // export
  window.Utils = new Utils();
})();