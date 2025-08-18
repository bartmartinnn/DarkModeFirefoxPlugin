// Helper to get domain from URL
function getDomainFromUrl(url) {
  try {
    return new URL(url).hostname;
  } catch (e) {
    return null;
  }
}

chrome.action.onClicked.addListener((tab) => {
  const domain = getDomainFromUrl(tab.url);
  if (!domain) return;
  chrome.storage.local.get([domain], (result) => {
    const enabled = !result[domain]; // toggle
    let obj = {};
    obj[domain] = enabled;
    chrome.storage.local.set(obj, () => {
      chrome.tabs.sendMessage(tab.id, { type: 'TOGGLE_DARK_MODE', enabled });
      chrome.action.setTitle({
        tabId: tab.id,
        title: enabled ? 'Turn off Dark Mode' : 'Turn on Dark Mode'
      });
    });
  });
});