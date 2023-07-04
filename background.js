chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Define the website you want to block
    var blockedSite = "youtube.com";
    
    // Check if the requested URL contains the blocked site
    if (details.url.indexOf(blockedSite) > -1) {
      // Cancel the request
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);