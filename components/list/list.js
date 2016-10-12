// popup edit, popup delete

(function (utils) {
  'use strict';

  class List {
    /**
     * Конструктор класс List
     * @parm {Object} options
     * Events action
     */
    constructor(options) {
      this.el = options.el;
      this.data = options.data;

      this.tplItem = utils.getTemplate('list-item');

      this.refresh()
    }

    refresh() {
      this.render();
      this.addEventListeners();
    }

    render() {
      let html = '';
      this.data.items.forEach((item) => {
        html += utils.renderTemplate(this.tplItem, item);
      });

      this.el.innerHTML = html;
    }

    addEventListeners() {
      this.el.addEventListener('click', this.processClick.bind(this))
    }

    processClick(event) {
      const button = event.target.closest('.js-list-item-button');
      if (!button) {
        return;
      }

      const item = button.closest('.js-list-item');
      const data = {
        id: item.id,
        action: item.action,
      };

      this.el.trigger('action', data);
      console.log(button);
    }

  }

  // export
  window.List = List;
})(window.Utils);