# Download URL Extractor - Chrome Extension

A simple Chrome extension that extracts and displays all downloadable URLs (links and resources) from the current webpage.

## Features

- Extracts all hyperlinks (`<a>` tags) from the page.
- Extracts resource URLs from elements like images, scripts, stylesheets, videos, etc.
- Displays the URLs in a popup for easy access.
- Prioritizes video file links (e.g., .mp4, .avi, .mkv) if available.

## Installation

### From Chrome Web Store (if published)
1. Visit the [Chrome Web Store page](https://chrome.google.com/webstore/detail/download-url-extractor/...).
2. Click "Add to Chrome".
3. Confirm the installation.

### Manual Installation (for development/testing)
1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right.
4. Click "Load unpacked" and select the extension folder.
5. The extension will be loaded and ready to use.

## Usage

1. Navigate to any webpage.
2. Click the extension icon in the Chrome toolbar.
3. Click "Extract URLs" to fetch all downloadable URLs from the page.
4. A list of URLs will appear; click any link to open it in a new tab.

## Files

- `manifest.json`: Extension manifest file.
- `content.js`: Content script that collects URLs from the webpage.
- `popup.html`: HTML for the extension popup.
- `popup.js`: JavaScript for handling popup interactions.

## Permissions

- `activeTab`: To access the current tab's content.
- `scripting`: To inject content scripts.

## Development

To modify the extension:
1. Edit the files in this repository.
2. Reload the extension in `chrome://extensions/` by clicking the refresh icon.
3. Test on various websites.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This extension is for educational purposes. Ensure compliance with website terms of service and copyright laws when downloading content.