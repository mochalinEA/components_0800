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
      this.data = options.data;
      this.container = this.el.querySelector('.js-form-container');

      this.cssActive = options.cssActive || 'is-active';
      this.cssDisabled = options.cssDisabled || 'is-disabled';

      this.addEventListeners();
      this.render('welcome');
    }

    addEventListeners() {
      this.el.addEventListener('click', () => {
        console.log(this.el.classList);
        console.log(this.el.classList.contains(this.cssActive));

        if (this.el.classList.contains(this.cssActive)) {
          this.hide();
        } else {
          this.show();
        }
      })
    }

    render(name, data = {}) {
      this.tpl = utils.getTemplate(`form-${name}`);
      let html = utils.renderTemplate(this.tpl, data);

      console.log(this.container);
      this.container.innerHTML = html;
    }

    show() {
      console.log('show');
      this.el.classList.remove(this.cssDisabled);
      this.el.classList.add(this.cssActive);
    }

    hide() {
      console.log('hide');
      this.el.classList.remove(this.cssActive);
      setTimeout(() => {
        this.el.classList.add(this.cssDisabled);
      }, 200);
    }

  }

  // export
  window.Form = Form;
})(window.Utils);