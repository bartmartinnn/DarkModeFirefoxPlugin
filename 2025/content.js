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

enableDarkMode(); // Start enabled by default

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'TOGGLE_DARK_MODE') {
    if (message.enabled) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }
}); 