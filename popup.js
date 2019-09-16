let downButton = document.getElementById('down');
let upButton = document.getElementById('up');

upButton.onclick = function(element) {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        var checkForwardSlash = url.slice(-1); 
        if(checkForwardSlash != "/"){
        //console.log(result);
        var url2 = url.replace(/\d+$/, function(s) {
            return +s+1;
                });
        chrome.tabs.update(tabs.id, {url: url2});


        }
        else{
        var result = url.substring(0, url.length-1);
        //console.log(result);
        var url2 = result.replace(/\d+$/, function(s) {
            return +s+1;
        });
        chrome.tabs.update(tabs.id, {url: url2});
        }
    });
};


downButton.onclick = function(element) {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        var checkForwardSlash = url.slice(-1); 
        if(checkForwardSlash != "/"){
        //console.log(result);
        var url2 = url.replace(/\d+$/, function(s) {
            return +s-1;
                });
        chrome.tabs.update(tabs.id, {url: url2});


        }
        else{
        var result = url.substring(0, url.length-1);
        //console.log(result);
        var url2 = result.replace(/\d+$/, function(s) {
            return +s-1;
        });
        chrome.tabs.update(tabs.id, {url: url2});
        }
    });
};