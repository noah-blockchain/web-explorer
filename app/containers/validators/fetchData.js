import config from '~/config'

if (typeof fetch === 'undefined') {
  var fetch = require('node-fetch')
}

async function fetchData(page = 1, coin, limit=5) {
  const response = await fetch(`${config.api}coins/${coin.toUpperCase()}/validators?page=${page}&limit=${limit}`)
  const status = response.status
  const body = await response.json()

  if (status == 200) {
    return body
  }

  throw new Error()
}

module.exports = fetchData
