import config from '~/config'

if (typeof fetch === 'undefined') {
  var fetch = require('node-fetch')
}

async function fetchData(page = 1, coin) {
  // http://176.9.44.144:9070/api/v1/coins/NOAH/transactions
  const response = await fetch(
    `${config.api}coins/${coin.toUpperCase()}/transactions?page=${page}`
  )

  const status = response.status
  const body = await response.json()
  if (status == 200) {
    return body
  }

  throw new Error()
}

module.exports = fetchData
