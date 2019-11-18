# sketchel.js
The first(?) API wrapper for sketchel.

# Examples
### Get users avatar
```js
const sketchel = require('sketchel.js')
const avatar = require('fs').createWriteStream('./avatar.png')
sketchel.getAvatar('nekomikoreimu').pipe(avatar)
```
