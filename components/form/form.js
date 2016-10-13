// popup edit, popup delete

(function (utils) {
  'use strict';

  class Form {
    /**
     * Конструктор класс Form
     * @parm {Object} options
     */
    constructor(options) {
      this.el = options.el;
      this._eventsHandlers = {};
      this.container = this.el.querySelector('.js-form-container');
      this.shim = this.el.querySelector('.js-form-shim');

      this.cssActive = options.cssActive || 'is-active';
      this.cssDisabled = options.cssDisabled || 'is-disabled';

      this.init()
    }

    init() {
      this.addEventListeners();

      this.render('welcome');
      setTimeout(this.hide.bind(this), 1000);
    }

    addEventListeners() {
      this.shim.addEventListener('click', () => {
        if (this.el.classList.contains(this.cssActive)) {
          this.hide();
        }
      });

      this.el.addEventListener('reset', this.hide.bind(this));
      this.el.addEventListener('submit', this.onFormSubmit.bind(this));
    }

    hide() {
      this.el.classList.remove(this.cssActive);
      setTimeout(() => {
        this.el.classList.add(this.cssDisabled);
      }, 200);
    }

    onFormSubmit(event) {
      event.preventDefault();

      this.hide();
      this.trigger('submit', this.el);
    }

    show() {
      this.el.classList.remove(this.cssDisabled);
      this.el.classList.add(this.cssActive);
    }

    render(name, data = {}) {
      this.el.dataset.action = name;
      this.tpl = utils.getTemplate(`form-${name}`);
      this.container.innerHTML = utils.renderTemplate(this.tpl, data);
      this.show()
    }

    trigger (name, data) {
      const event = new CustomEvent(name, {
        bubbles: true,
        detail: data
      });

      if (this._eventsHandlers[name]) {
        this._eventsHandlers[name].forEach(callback => callback(event));
      }
    }

    on (name, callback) {
      if (!this._eventsHandlers[name]) {
        this._eventsHandlers[name] = [];
      }

      this._eventsHandlers[name].push(callback);
    }

  }

  // export
  window.Form = Form;
})(window.Utils);