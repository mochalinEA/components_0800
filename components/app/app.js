(function () {
  'use strict';

  // import
  let Utils = window.Utils;
  let Menu = window.Menu;
  let List = window.List;
  let Form = window.Form;

  const data = {
    items: [
      {
        id: 1,
        title: 'Nunjucks',
        href: 'https://mozilla.github.io/nunjucks/',
      },
      {
        id: 2,
        title: 'yandex',
        href: 'http://ya.ru',
      },
      {
        id: 3,
        title: 'Курсовой проект 8:00',
        href: 'https://github.com/iketari/components_0800',
      }
    ]

  };

  new List({
    el: document.querySelector('.js-list'),
    data
  });

  new Form({
    el: document.querySelector('.js-form'),
    data
  });
})();
