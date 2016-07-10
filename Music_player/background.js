chrome.browserAction.onClicked.addListener(function() {
	chrome.windows.create({
		url: 'popup.html',
		width: 450,
		height: 450,
		focused: true,
		type: 'popup'
	});	
});