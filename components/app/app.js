(function () {
  'use strict';

  // import
  let Page = window.Page;
  let List = window.List;
  let Form = window.Form;
  let Model = window.Model;

  const page = new Page({
    el: document.querySelector('.js-page'),
    cssActive: 'is-active'
  });

  const list = new List({
    el: document.querySelector('.js-list')
  });

  const form = new Form({
    el: document.querySelector('.js-form')
  });

  const listModel = new Model({
    resource: './data/list.json'
  });

  listModel.on('update', () => {
    list.setData(listModel.getData());
    list.render();
  });

  listModel.fetch();

  list.on('edit', (event) => {
    form.render(event.detail.action, event.detail);
  });

  list.on('delete', (event) => {
    form.render(event.detail.action, event.detail);
  });

  form.on('submit', event => {
    listModel.parseForm(event.detail);
  });
})();
