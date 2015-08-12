chrome.omnibox.onInputEntered.addListener(function (query) {
	chrome.tabs.update(null, {url: ('http://mdn.io/' + query) });
});