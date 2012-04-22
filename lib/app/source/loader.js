function onLoad() {
	if (!window.device) {
		onDeviceReady();
	} else {
		document.addEventListener('deviceready', onDeviceReady, false);
	}	
}

function onDeviceReady() {
	window.app = new App().renderInto(document.body);
}