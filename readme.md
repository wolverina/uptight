# Uptight

_Uptight adds back the ability to maintain user stylesheets, which is functionality that was [stripped out](https://code.google.com/p/chromium/issues/detail?id=318566) in version 32._

## Installation

1. Download this extension and put it somewhere safe in your directory structure.
2. Go to chrome://extensions in the URL bar.
3. Enable "Developer mode."
4. Select "Load unpacked extension."
5. Navigate to the location of this extension and confirm. This will install the extension.

## Usage

1. Place your custom styles within the Custom.css file that was included with this extension.
2. Go to chrome://extensions
3. Reload the extension by selecting the "Reload" link underneath its permissions data. This will update the Custom.css file.

**Extra credit:** To avoid having to navigate to the Custom.css file each time, you can create a bash alias that you can use from your UNIX terminal:

`alias editcss='vim ~/path/to/uptight/Custom.css'`