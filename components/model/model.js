(function () {
  'use strict';

  class Model {
    constructor ({resource, data = {}}) {
      this._resourse = resource;
      this._data = data;
      this._eventsHandlers = {};
    }

    getData() {
      return this._data;
    }

    setData(data) {
      this._data = data;
      this.trigger('update');
    }

    setItem(data) {
      this._data.items[data.id] = data;
      this.trigger('update');
    }

    parseForm(data) {
      if (!data.dataset || !data.dataset.action) {
        return;
      }

      switch (data.dataset.action) {
        case 'edit':
          let id = data.elements.formId.value || this._data.items.length;
          this.setItem({
            id,
            title: data.elements.formTitle.value,
            href: data.elements.formHref.value
          });
          break;
        case 'delete':
          this.removeItem(data.elements.formId.value);
          break;
      }
    }

    removeItem(num) {
      delete this._data.items[num];
      this.trigger('update');
    }

    trigger(name) {
      if (this._eventsHandlers[name]) {
        this._eventsHandlers[name].forEach(callback => callback());
      }
    }

    on(name, callback) {
      if (!this._eventsHandlers[name]) {
        this._eventsHandlers[name] = [];
      }

      this._eventsHandlers[name].push(callback);
    }

    fetch() {
      this._makeRequest('GET', this._resourse, this.setData.bind(this));
    }


    _makeRequest(method, resource, callback) {
      let xhr = new XMLHttpRequest();
      xhr.open(method, resource, true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
          return;
        }

        if (xhr.status === 200) {
          callback(JSON.parse(xhr.responseText));
        }
      };

      xhr.send();
    }
  }


  // export
  window.Model = Model;
})();