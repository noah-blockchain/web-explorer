import config from '~/config'

if (typeof fetch === 'undefined') {
  var fetch = require('node-fetch')
}

async function fetchData() {
  const response = await fetch(`${config.status}`)

  const status = response.status
  const body = await response.json()
  console.log(body, 'BODY')
  if (status == 200) {
    return body
  }

  throw new Error()
}

module.exports = fetchData
