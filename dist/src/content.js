// content.js
// Collect all downloadable URLs from the page, excluding specific domains

function collectDownloadableUrls(excludedDomains = []) {
  const urls = new Set();

  // Function to check if URL should be excluded
  function isExcluded(url) {
    try {
      const urlObj = new URL(url);
      return excludedDomains.some(domain => urlObj.hostname.includes(domain));
    } catch (e) {
      return false; // Invalid URL, exclude
    }
  }

  // Collect href from <a> tags
  const links = document.querySelectorAll('a[href]');
  links.forEach(link => {
    const href = link.href;
    if (href && href.startsWith('http') && !isExcluded(href)) {
      urls.add(href);
    }
  });

  // Collect src from various elements
  const srcElements = document.querySelectorAll('img[src], script[src], link[href], video[src], audio[src], iframe[src]');
  srcElements.forEach(element => {
    const src = element.src || element.href;
    if (src && src.startsWith('http') && !isExcluded(src)) {
      urls.add(src);
    }
  });

  // Also collect from meta refresh or other redirects if any
  // For simplicity, focus on main resources

  return Array.from(urls);
}

// Send the URLs to the popup when requested
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getUrls') {
    const urls = collectDownloadableUrls(request.excludedDomains || []);
    sendResponse({ urls: urls });
  }
});