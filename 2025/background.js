let darkModeEnabled = true;

chrome.action.onClicked.addListener((tab) => {
  darkModeEnabled = !darkModeEnabled;
  chrome.tabs.sendMessage(tab.id, { type: 'TOGGLE_DARK_MODE', enabled: darkModeEnabled });
  chrome.action.setTitle({
    tabId: tab.id,
    title: darkModeEnabled ? 'Turn off Dark Mode' : 'Turn on Dark Mode'
  });
}); 