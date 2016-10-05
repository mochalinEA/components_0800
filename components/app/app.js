(function () {
	'use strict';

	// import
	let Menu = window.Menu;

	let data = {
		title: 'Рабочие',
		items: [
			{
				anchor: 'mail.ru',
				removable: true,
			},
			{
				anchor: 'yandex.ru',
				removable: true,
			},
			{
				anchor: 'kgb.by',
				removable: false,
			},
			{
				anchor: 'google.com',
				removable: true,
			}
		]
	};

	new Menu({
		el: document.querySelector('.js-menu'),
		data
	});

})();