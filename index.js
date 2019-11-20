const fetch = require('node-fetch')
const BASE_URL = 'https://sketchel.art/api/v1'

module.exports = {
  getAvatar: (id = false) => {
    return new Promise((resolve, reject) => {
      if (!id) reject(new Error('Didn\'t provide ID.'))

      fetch(`${BASE_URL}/get-avatar/${id}`)
        .then(res => {
          if (res.status === 404) reject(new Error('Userid doesn\'t exist.'))
          resolve(res.body)
        })
    })
  },
  getUser: (id = false) => {
    return new Promise((resolve, reject) => {
      if (!id) reject(new Error('Didn\'t provide ID.'))

      fetch(`${BASE_URL}/get-user/${id}`)
        .then(res => {
          if (res.status === 404) reject(new Error('Userid doesn\'t exist.'))
          res.json().then(body => resolve(body))
        })
    })
  }
}
