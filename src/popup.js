// popup.js

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('extractBtn').addEventListener('click', () => {
    const excludeInput = document.getElementById('excludeInput').value;
    const excludedDomains = excludeInput.split(',').map(domain => domain.trim()).filter(domain => domain);

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: 'getUrls', excludedDomains: excludedDomains }, (response) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
          const urlList = document.getElementById('urlList');
          urlList.innerHTML = '<li>Unable to extract URLs from this page.</li>';
          return;
        }
        const urlList = document.getElementById('urlList');
        urlList.innerHTML = ''; // Clear previous list
        if (response && response.urls) {
          response.urls.forEach(url => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = url;
            a.textContent = url;
            a.target = '_blank'; // Open in new tab
            li.appendChild(a);
            urlList.appendChild(li);
          });
        } else {
          urlList.innerHTML = '<li>No URLs found.</li>';
        }
      });
    });
  });
});