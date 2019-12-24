import config from '~/config'

if (typeof fetch === 'undefined') {
  var fetch = require('node-fetch')
}

async function fetchData(filter = '') {
  const response = await fetch(`${config.api}addresses-top${filter}`)

  const status = response.status
  const body = await response.json()
  console.log('BODY', body)
  if (status == 200) {
    return body.data
  }

  throw new Error()
}

module.exports = fetchData
