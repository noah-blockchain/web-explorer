import config from '~/config'
import moment from 'moment'

if (typeof fetch === 'undefined') {
  var fetch = require('node-fetch')
}

async function fetchData(name, period='MONTH', date =null) {
  if(date === null) date = moment().format("DD-MM-YYYY")
  const response = await fetch(`${config.charts_api}prices/${name.toUpperCase()}/?period=${period}&date=${date}`)
  console.log(`${config.charts_api}prices/${name.toUpperCase()}/?period=${period}&date=${date}`)
  const status = response.status
  const body = await response.json()

  if (status == 200) {
    return body
  }

  throw new Error()
}

module.exports = fetchData
