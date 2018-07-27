chrome.runtime.onInstalled.addListener(function(details) {
    chrome.storage.sync.set({creep: true});
    chrome.alarms.create(reloadElements, {delayInMinutes: 0.1, periodInMinutes: 0.1});
    console.log("turn creep on");
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'facebook.com'},
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });
});

// listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(function(id, info, tab){
    if (tab.url.toLowerCase().indexOf("facebook.com") > -1){
        chrome.pageAction.show(tab.id);
        chrome.tabs.executeScript(null, {"file": "/creep.js"});
    }
});

chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.pageAction.show(tab.id);
});