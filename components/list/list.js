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
      this._eventsHandlers = {};

      this.tplItem = utils.getTemplate('list-item');
      this.container = this.el.querySelector('.js-list-container');

      this.addEventListeners();
    }

    render() {
      let html = '';
      this.data.items.forEach((item) => {
        html += utils.renderTemplate(this.tplItem, item);
      });

      this.container.innerHTML = html;
    }

    addEventListeners() {
      this.el.addEventListener('click', this.processClick.bind(this))
    }

    processClick(event) {
      const button = event.target.closest('.js-list-item-button');
      if (!button) {
        return;
      }

      this.trigger(button.dataset.action, button.dataset);
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

    setData(data) {
      this.data = data;
    }

    on (name, callback) {
      if (!this._eventsHandlers[name]) {
        this._eventsHandlers[name] = [];
      }

      this._eventsHandlers[name].push(callback);
    }



  }

  // export
  window.List = List;
})(window.Utils);