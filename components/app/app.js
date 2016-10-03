(function () {
	'use strict';

	// import
	let Menu = window.Menu;

	let data = {
		title: 'Рабочие',
		items: [
			{
				anchor: 'mail.ru'
			},
			{
				anchor: 'yandex.ru'
			},
			{
				anchor: 'google.com'
			}
		]
	};

	let menu = new Menu({
		el: document.querySelector('.js-menu'),
		data
	});

})();