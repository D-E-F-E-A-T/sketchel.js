const fetch = require('node-fetch')

module.exports = {
  getAvatar: (id = 'nekomikoreimu') => {
    fetch(`https://sketchel.art/api/v1/get-avatar/${id}`)
      .then(res => {
        if (res.status === 404) return new Error('Userid doesn\'t exist.')
        return res.body
      })
  }
}
