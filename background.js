chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.query({}, function(tabs) {
        let urls = tabs.map(tab => tab.url);
        console.log(urls);
        alert(urls.join('\n'));
    });
});
