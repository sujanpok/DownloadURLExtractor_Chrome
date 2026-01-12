// content.js
// Collect all downloadable URLs from the page

function collectDownloadableUrls() {
  const urls = new Set();

  // Collect href from <a> tags
  const links = document.querySelectorAll('a[href]');
  links.forEach(link => {
    const href = link.href;
    if (href && href.startsWith('http')) {
      urls.add(href);
    }
  });

  // Collect src from various elements
  const srcElements = document.querySelectorAll('img[src], script[src], link[href], video[src], audio[src], iframe[src]');
  srcElements.forEach(element => {
    const src = element.src || element.href;
    if (src && src.startsWith('http')) {
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
    const urls = collectDownloadableUrls();
    sendResponse({ urls: urls });
  }
});