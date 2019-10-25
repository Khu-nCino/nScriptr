chrome.runtime.onInstalled.addListener(() => {
	// Default background color for colorpicker in app.component.ts
	chrome.storage.sync.set({ color: '#3aa757' });

	chrome.webNavigation.onCompleted.addListener(() => {
	  chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
		 chrome.pageAction.show(id);
	  });
	}, { url: [{ urlMatches: 'google.com' }] });
 });