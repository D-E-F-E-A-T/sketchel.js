# sketchel.js
The first(?) API wrapper for sketchel.

# Examples
### Get users avatar
```js
const sketchel = require('sketchel.js')
const avatar = require('fs').createWriteStream('./avatar.png')
sketchel.getAvatar('nekomikoreimu').then(body => body.pipe(avatar))
```
### Get user
```js
const sketchel = require('./index')
sketchel.getUser('nekomikoreimu').then(body => console.log(body))
```

# How to install?
`npm i sketchel.js`
