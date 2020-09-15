//filtro de url para bloquear
defaultFilters = [
    "*://*.reddit.com/*",
    "*://*.youtube.com/*",
    "*://*.wallpapershome.com/*",
    "*://*.tpc.googlesyndication.com/daca_images/simgad/14665391136553537509/*",
] 

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)

