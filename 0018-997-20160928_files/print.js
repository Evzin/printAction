/*
 * Данная функция принимает два параметра
 * idPrint - идентификатор элемента, который мы желаем распечатать
 * newPage - идентификатор элемента, который при печати будет начинаться с новой страницы
 */

function CallPrint(idPrint, newPage) {

	/*
	 *Берем элемент для печати
	 */
	var prtContent = document.getElementById(idPrint);

	/*
	 *Создаем новое окно с текущим документом
	 */

	var WinPrint = window.open('#',
								'',
								'left=50,top=50,width=800,height =640,toolbar=0,scrollbars=1,status=0'
								);

	/*
	 *Функция сробатывающая при загрузке созданого окна
	 */

	WinPrint.onload = function() {

		/*
		 *Удаляем все содержимое тела документа
		 */

		WinPrint.$('body *').detach();

		/*
		 *Создаем новую кнопку для закрытия окна
		 */

		var closeWin = document.createElement("button");
		closeWin.setAttribute("id", "closeWin");
		closeWin.setAttribute("onClick", "javascript:CallCloseWin()");

		WinPrint.document.body.appendChild(closeWin);

		/*
		 *Создаем новую кнопку для печати документа
		 */

		var startPrint = document.createElement("button");
		startPrint.setAttribute("id", "startPrint");
		startPrint.setAttribute("onClick", "javascript:CallStartPrint()");

		WinPrint.document.body.appendChild(startPrint);

		/*
		 *Создаем новый блок и вставляем в него элемент для печати
		 */

		var print = document.createElement("div");
		print.className = "contentpane";
		print.setAttribute("id", "print");
		print.appendChild(prtContent.cloneNode(true));

		WinPrint.document.body.appendChild(print);

		/*
		 *Добавляем в элемент новый класс со стилями для разрыва строниц
		 */

		WinPrint.document.getElementById(newPage).setAttribute('class', 'nextpage');

		/*
		 * Добавляем стили, которые сработают только во вновь созданом окне
		 */

		WinPrint.$('#npa-text').css({ 'height' : '100%', 'overflow-y' : 'visible' });

		/*
		 * Задаем фокус на созданом окне
		 */

		WinPrint.focus();
		}
}

/*
 * Функция закрытия окна
 */

function CallCloseWin(){
	window.close();
}

/*
 * Функция печати документа
 */

function CallStartPrint(){
	window.print();
}