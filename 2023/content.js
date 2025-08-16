(function() {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        :root {
            color-scheme: light dark;
        }
        body, html {
            background-color: #121212 !important;
            color: #ffffff !important;
        }
        * {
            background-color: inherit !important;
            color: inherit !important;
            border-color: inherit !important;
        }
        .h2 h3 { /* Assuming .title is the class for titles */
            color: #FFD700 !important; /* Gold color for visibility */
        }
        /* Add more specific selectors as needed */
    `;
    document.head.appendChild(style);
})();