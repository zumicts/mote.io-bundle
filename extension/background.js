function updateIcon() {
  chrome.tabs.create({'url': 'http://mote.io/start'}, function(tab) {
    // Tab opened.
  });
}

chrome.browserAction.onClicked.addListener(updateIcon);
