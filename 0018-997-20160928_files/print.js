function CallPrint(idPrint, newPage) {
	
	var prtContent = document.getElementById(idPrint);
	
	var WinPrint = window.open('#',
								'',
								'left=50,top=50,width=800,height =640,toolbar=0,scrollbars=1,status=0'
								);

	WinPrint.onload = function() {

		WinPrint.$('body *').detach();

		var closeWin = document.createElement("button");
		closeWin.setAttribute("id", "closeWin");
		closeWin.setAttribute("onClick", "javascript:CallCloseWin()");

		WinPrint.document.body.appendChild(closeWin);

		var startPrint = document.createElement("button");
		startPrint.setAttribute("id", "startPrint");
		startPrint.setAttribute("onClick", "javascript:CallStartPrint()");

		WinPrint.document.body.appendChild(startPrint);

		var print = document.createElement("div");
		print.className = "contentpane";
		print.setAttribute("id", "print");
		print.appendChild(prtContent.cloneNode(true));

		WinPrint.document.body.appendChild(print);

		WinPrint.document.getElementById(newPage).setAttribute('class', 'nextpage');


		WinPrint.$('#npa-text').css({ 'height' : '100%', 'overflow-y' : 'visible' });
		WinPrint.$('#startPrint, #closeWin').css({ 'position' : 'fixed', 'margin' : '10px' });
		WinPrint.$('#startPrint').css({ 'right': '120px', 'width' : '163px', 'height' : '46px', 'background-image': 'url("./0018-997-20160928_files/startPrint.png")', 'background-repeat': 'no-repeat' });
		WinPrint.$('#closeWin').css({ 'right': '0px', 'width' : '98px', 'height' : '46px', 'background-image': 'url("./0018-997-20160928_files/closeWin.png")', 'background-repeat': 'no-repeat' });
		WinPrint.focus();
		}
}

function CallCloseWin(){
	window.close();
}

function CallStartPrint(){
	window.print();
}