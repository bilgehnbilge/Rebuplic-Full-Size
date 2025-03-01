chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  const url = details.url;
  if (url.includes('egazete.cumhuriyet.com.tr') && url.includes('_thumbnail')) {
    const fullSizeUrl = url.replace('_thumbnail', '');
    chrome.tabs.update(details.tabId, { url: fullSizeUrl });
  }
}, { url: [{ hostContains: 'egazete.cumhuriyet.com.tr' }] });