// Listen for tab updates (when a page is loaded)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    // Retrieve the list of private URLs from storage
    chrome.storage.sync.get(['privateUrls'], (result) => {
      const privateUrls = result.privateUrls || [];
      const currentUrl = new URL(tab.url).hostname; // Get domain (e.g., example.com)

      // Check if the current URL matches any private URLs
      if (privateUrls.some(url => currentUrl.includes(url))) {
        // Delete the history entry for this URL after a short delay
        setTimeout(() => {
          chrome.history.deleteUrl({ url: tab.url }, () => {
            console.log(`Deleted history for: ${tab.url}`);
          });
        }, 1000); // 1-second delay to ensure history is logged before deletion
      }
    });
  }
});