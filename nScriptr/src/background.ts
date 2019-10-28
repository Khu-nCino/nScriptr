chrome.runtime.onInstalled.addListener(() => {
	// Default background color for colorpicker in app.component.ts
	chrome.storage.sync.set({ color: '#3aa757' });

	chrome.webNavigation.onCompleted.addListener(() => {
	  chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
		 chrome.pageAction.show(id);
	  });
	  
	}, { url: [
		{ hostContains: 'google.com' },
		{ hostContains: 'developer.chrome.com' },
		{ hostContains: '.lightning.force.com' },
		{ hostContains: '.cloudforce.com' },
		{ hostContains: '.salesforce.com' }
	] });
 });
