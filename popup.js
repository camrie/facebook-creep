var checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', function() {
    console.log("runJS");
    if(this.checked) {
        chrome.tabs.executeScript({ 
            file: 'creep.js'
        })
    } else {
        chrome.tabs.reload();
    }
});