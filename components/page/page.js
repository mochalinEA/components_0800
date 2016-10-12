(function () {
  'use strict';

  class Page {
    /**
     * Конструктор класс Page
     * @parm {Object} options
     */
    constructor(options) {
      this.el = options.el;
      this.cssActive = options.cssActive || 'is-active';
      this.timeout = options.timeout || 10;

      setTimeout(this.show.bind(this), this.timeout);
    }

    show() {
      this.el.classList.add(this.cssActive);
    }

    hide() {
      this.el.classList.remove(this.cssActive);
    }

  }

  // export
  window.Page = Page;
})();