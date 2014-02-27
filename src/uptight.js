var x = new XMLHttpRequest();
x.open('GET', 'Custom.css');
x.onload = function() {
    chrome.applyStyleSheet(x.responseText);
};
