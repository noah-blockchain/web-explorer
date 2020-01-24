import config from '~/config'

if (typeof fetch === 'undefined') {
  var fetch = require('node-fetch')
}

async function fetchData(public_key = '', page = 1) {
  const response = await fetch(
    `${config.api}validators/${public_key}/delegators?page=${page}`
  )
  const status = response.status
  const body = await response.json()
  console.log(body, 'DELEGATORS')

  if (status == 200) {
    return body
  }

  throw new Error()
}

module.exports = fetchData
