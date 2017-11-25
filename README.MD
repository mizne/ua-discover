# ua-discover

## Installation

To use with node:

```bash
$ npm install ua-discover -S
```

CommonJs module:

```javascript
const ua = require('ua-discover');
```
or ES6 module:

```javascript
import * as ua from 'ua-discover';
```
or AMD module:

```javascript
require(['ua-discover'], function (ua) {
  console.log(ua)
});
```

To use directly in the browser:

```html
<script src="https://unpkg.com/ua-discover@latest/dist/ua-discover.js"></script>
```

## Usage

```javascript
  ua.browser.isAlipay;
  ua.browser.isBrowser;
  ua.browser.isMobile;
  ua.browser.isQQ;
  ua.browser.isWechat;
  ua.browser.isWeibo;

  ua.device.isAndroid;
  ua.device.isIos;
  ua.device.isIpad;
  ua.device.isIpod;
  ua.device.isIphon;
```


## License

MIT © [mizne](mailto:w20054319@126.com)
