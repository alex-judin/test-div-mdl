	var blackWindow = document.getElementById("mywindow");
	var panelMenu = document.getElementById("panel");

	function panelShow() 
	{
		document.getElementById("panel").setAttribute('class','menu-panel-open');
		//blackWindow.style.width = screen.width - 345 + "px";
		blackWindow.style.display = 'block';
		//panelMenu.style.height = documentElement.clientHeight + "px";


	}

	function panelClose()
	{
		document.getElementById("panel").removeAttribute('class','menu-panel-open');
		document.getElementById("panel").setAttribute('class','menu-panel');		
		blackWindow.style.display = 'none';
	}