(function () {
	'use strict';

	class Menu {

		/**
		* Конструктор класс Menu
		* @parm {Object} options
		*/
		constructor (options) {
			this.el = options.el; // HTMLElement меню

			this._init();
			this._initEvents();
		}

		_init () {
			this.items = this.el.querySelectorAll('.menu__item');
		}

		/**
		* Установка обработчиков событий 
		*/
		_initEvents () {
			this.el.addEventListener('click', this._onCLick.bind(this));
		}


		/**
		* Обработчик всех кликов по меню
		* @param {MouseEvent} event
		*/
		_onCLick (event) {
			event.preventDefault();
			let target = event.target;

			if (target.classList.contains('menu__toggle')) {
				this.toggle();
			}

			if (target.classList.contains('menu__item')) {
				this.toggleItem(event.target);
			}
		}

		/**
		* Выбор элемента меню
		* @param {HTMLElement} elem
		*/
		toggleItem (elem) {
			elem.classList.toggle('menu__item_selected');
			elem.style.color = elem.dataset.highlight;
		}

		/**
		* Переключение состояния меню
		*/
		toggle() {
			this.el.classList.toggle('menu_close');
		}

		/**
		* Получение данных о состоянии меню 
		* @returns {Array}
		*/
		getData () {
			return Array.prototype.filter.call(this.items, item => {
				return item.classList.contains('menu__item_selected');
			}).map(el => el.innerHTML);
		}
	}

	// export
	window.Menu = Menu;


})();