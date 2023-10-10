// add listener to execute script on loading a website
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete') {
      chrome.scripting
        .executeScript({
          target: { tabId: tabId },
          files: ['scripts/content.js'],
        })
        .then(() => {
          console.log('Executed script');
        });
	}
});

// add listener to execute script onMessage
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.replace) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting
        .executeScript({
          target: { tabId: tabs[0].id },
          files: ['scripts/content.js'],
        })
        .then(() => {
          console.log('Executed script');
        });
    });
  }
});