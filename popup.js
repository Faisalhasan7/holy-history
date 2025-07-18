document.addEventListener('DOMContentLoaded', () => {
  const urlInput = document.getElementById('urlInput');
  const addUrlButton = document.getElementById('addUrl');
  const urlList = document.getElementById('urlList');

  // Load and display the list of private URLs
  function loadUrls() {
    chrome.storage.sync.get(['privateUrls'], (result) => {
      const privateUrls = result.privateUrls || [];
      urlList.innerHTML = ''; // Clear existing list
      privateUrls.forEach((url) => {
        const li = document.createElement('li');
        li.textContent = url;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => removeUrl(url);
        li.appendChild(deleteButton);
        urlList.appendChild(li);
      });
    });
  }

  // Add a new URL to the private list
  addUrlButton.addEventListener('click', () => {
    const url = urlInput.value.trim();
    if (url) {
      chrome.storage.sync.get(['privateUrls'], (result) => {
        const privateUrls = result.privateUrls || [];
        if (!privateUrls.includes(url)) {
          privateUrls.push(url);
          chrome.storage.sync.set({ privateUrls }, () => {
            urlInput.value = ''; // Clear input
            loadUrls(); // Refresh list
          });
        }
      });
    }
  });

  // Remove a URL from the private list
  function removeUrl(url) {
    chrome.storage.sync.get(['privateUrls'], (result) => {
      const privateUrls = result.privateUrls || [];
      const updatedUrls = privateUrls.filter((item) => item !== url);
      chrome.storage.sync.set({ privateUrls: updatedUrls }, () => {
        loadUrls(); // Refresh list
      });
    });
  }

  // Initial load of URLs
  loadUrls();
});