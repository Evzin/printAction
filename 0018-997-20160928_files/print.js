function CallPrint(idPrint) {
	
	var prtContent = document.getElementById(idPrint);
	
	var WinPrint = window.open('#',
								'',
								'left=50,top=50,width=800,height =640,toolbar=0,scrollbars=1,status=0'
								);

	WinPrint.onload = function() {
	
		var a = $(idPrint).clone();
		WinPrint.$('body *').detach();
	
		var print = document.createElement("div");
		print.className = "contentpane";
		print.setAttribute("id", "print");
		print.appendChild(prtContent.cloneNode(true));

		WinPrint.document.body.appendChild(print);

		WinPrint.focus();
		WinPrint.print();
		}
}