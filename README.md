# Privacy Buddy Chrome Extension

A lightweight Chrome extension that automatically deletes browsing history for user-specified websites, enhancing user privacy by managing sensitive browsing data.

## Features
- Add or remove URLs to a private browsing list via a popup interface.
- Automatically detects visits to specified websites and deletes their history entries.
- Uses Chrome's `tabs` and `history` APIs for real-time monitoring and deletion.
- Persists user-defined URLs using `chrome.storage.sync`.
- Clean and responsive popup UI.

## Installation
1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (top-right toggle).
4. Click **Load unpacked** and select the `privacy-buddy` folder.
5. The extension icon should appear in the Chrome toolbar.

## Usage
1. Click the extension icon to open the popup.
2. Enter a domain (e.g., `google.com`) in the input field and click **Add**. **Currently _https://www.google.com/_ format is not supported**
4. Visit the specified website; its history entry will be deleted automatically after a short delay.
5. Use the **Delete** button in the popup to remove URLs from the list.

## Requirements
- Google Chrome (version 88 or later, Manifest V3 compatible).
- Permissions: `tabs`, `history`, `storage`, `activeTab`.

## Limitations
- History entries are deleted after a short delay, so they may briefly appear in `chrome://history/`.
- Incognito mode requires enabling "Allow in Incognito" in `chrome://extensions/`.
- Currently matches domains exactly (e.g., `google.com`); wildcard support planned for future updates.

## Development
To modify or contribute:
1. Clone the repository: `git clone https://github.com/your-username/privacy-buddy.git`
2. Make changes to the code.
3. Reload the extension in Chrome (`chrome://extensions/` > **Refresh**).

## License
[MIT License](LICENSE) - feel free to use and modify this project.

## Contact
For issues or suggestions, open an issue on this repository or contact **faisalhasan** on discord. 
