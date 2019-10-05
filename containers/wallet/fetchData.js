import config from '~/config'

if (typeof fetch === 'undefined') {
  var fetch = require('node-fetch')
}

async function fetchData(id) {
  const response = await fetch(`${config.api}/walletsGetInfo/${id}`)

  const status = response.status
  const body = await response.json()

  if (status == 200) {
    return body
  }

  throw new Error()
}

module.exports = fetchData
