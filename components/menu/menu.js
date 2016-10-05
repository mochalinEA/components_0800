(function () {
	'use strict';

	class Menu {

		/**
		* Конструктор класс Menu
		* @parm {Object} options
		*/
		constructor (options) {
			this.el = options.el;
			this.data = options.data;

			this._initEvents();

			this.render();
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

			if (target.classList.contains('menu__title')) {
				this.toggle();
			}

			if (target.classList.contains('menu__item')) {
				this.toggleItem(target);
			}

			if (target.classList.contains('menu__remove')) {
				let item  = target.closest('.menu__item');
				this.removeItem(item);
			}

			if (target.classList.contains('menu__remove')) {
				let item  = target.closest('.menu__item');
				this.removeItem(item);
			}

			if (target.classList.contains('menu__add')) {
				let list = this.el.querySelector('.menu__list');
				let itemData = {
					anchor: this.el.querySelector('.menu__input').value,
					removable: true,
				};

				if (itemData.anchor.length) {
					this.addItem(itemData, list);
				}
			}
		}

		/**
		 * Отрисовка компонента
		 */
		render () {
			this.renderList();
			this.renderForm();
		}

		/**
		 * Отрисовка списка
		 */
		renderList () {
			this.el.innerHTML = '';

			let title = document.createElement('a');
			title.classList.add('menu__title');
			title.innerHTML = this.data.title;

			let list = document.createElement('ul');
			list.classList.add('menu__list');

			this.data.items.forEach(itemData => {
				this.addItem(itemData, list);
			});

			this.el.appendChild(title);
			this.el.appendChild(list);
		}

		/**
		 * Добавление новго элемента в список
		 * @param {Object} itemData
		 * @param {HTMLElement} list
		 */
		addItem (itemData, list) {
			let item = document.createElement('li');
			item.classList.add('menu__item');
			item.innerHTML = itemData.anchor;

			if (itemData.removable) {
				let removeButton = document.createElement('button');
				removeButton.classList.add('menu__remove');
				removeButton.innerHTML = 'x';

				item.appendChild(removeButton);
			}

			list.appendChild(item);
		}

		/**
		 * Отрисовка формы добавления нового элемента
		 */
		renderForm () {
			let form = document.createElement('form');
			form.classList.add('menu__form', 'pure-form');

			let input = document.createElement('input');
			input.setAttribute('type', 'text');
			input.classList.add('menu__input', 'pure-input-rounded');

			let button = document.createElement('button');
			button.setAttribute('tupe', 'submit');
			button.classList.add('menu__add', 'pure-button');
			button.innerHTML = 'Add';

			form.appendChild(input);
			form.appendChild(button);

			this.el.appendChild(form)
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
		 * Удаление выбранного элемента
		 * @param {HTMLElement} elem
		 */
		removeItem (elem) {
			elem.remove();
		}

		/**
		* Переключение состояния меню
		*/
		toggle () {
			this.el.classList.toggle('menu_close');
		}
	}

	// export
	window.Menu = Menu;


})();