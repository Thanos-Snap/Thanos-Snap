chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: []},
    ["blocking"]
)

