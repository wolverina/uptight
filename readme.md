# Uptight

_Uptight adds back the ability to maintain user stylesheets in Chrome. This functionality was [stripped out](https://code.google.com/p/chromium/issues/detail?id=318566) in version 32._

_This is different than the custom stylesheet extensions authored prior to Chrome 32, as those provide easy access to the Custom.css file, which Chrome now ignores. This extension provides a Custom.css file that Chrome 32+ does not ignore._

## Installation

1. Download this extension and put it somewhere safe in your directory structure.
2. Go to chrome://extensions in the URL bar.
3. Enable "Developer mode."
4. Select "Load unpacked extension."
5. Navigate to the location of this extension and confirm. This will install the extension.

## Usage

1. Include your custom styles within the Custom.css file included with this extension.
2. Go to chrome://extensions
3. Reload the extension by selecting the "Reload" link underneath its permissions data. This will update the Custom.css file.

**Extra credit:** To avoid having to navigate to the Custom.css file each time, you can create a bash alias that you can use from your UNIX terminal:

`alias editcss='vim ~/path/to/uptight/Custom.css'`