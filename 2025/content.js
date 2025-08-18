// Inject dark mode CSS
let style = null;

function enableDarkMode() {
  if (!style) {
    style = document.createElement('style');
    style.textContent = `
      html, body {
        background: #181a1b !important;
        color: #e8e6e3 !important;
      }
      * {
        background-color: transparent !important;
        color: inherit !important;
        border-color: #444 !important;
      }
      img, video, [style*="background-image"] {
        filter: brightness(0.8) contrast(1.2) !important;
      }
      a { color: #8ab4f8 !important; }
    `;
    document.head.appendChild(style);
  }
}

function disableDarkMode() {
  if (style) {
    style.remove();
    style = null;
  }
}

// Helper to get domain
function getDomain() {
  return window.location.hostname;
}

// On load, check storage for this domain's dark mode preference
chrome.storage.local.get([getDomain()], (result) => {
  if (result[getDomain()]) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'TOGGLE_DARK_MODE') {
    if (message.enabled) {
      enableDarkMode();
      // Save preference for this domain
      let obj = {};
      obj[getDomain()] = true;
      chrome.storage.local.set(obj);
    } else {
      disableDarkMode();
      let obj = {};
      obj[getDomain()] = false;
      chrome.storage.local.set(obj);
    }
  }
});