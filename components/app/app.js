(function () {
  'use strict';

  function getTemplate(name) {
    return document.querySelector(`#templates > .tpl-${name}`).innerHTML;
  }

  function renderTemplate(tpl, data) {
    return nunjucks.renderString(tpl, data);
  }

  const tpl = getTemplate('item');
  const html = renderTemplate(tpl, {
    id: 2,
    title: 'yandex',
    href: 'http://ya.ru',
  });

  console.log('>>>', html);
})();
