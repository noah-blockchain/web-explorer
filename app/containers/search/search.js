import config from '~/config'
import { isNumeric } from '../../utils/validators'

const fetchUrl = async url => {
  const response = await fetch(url)
  const status = response.status
  const body = await response.json()
  if (status == 200) return body
  throw new Error()
}

const search = async (value = '') => {
  const wallet = 'NOAHx'
  const transaction = 'Nt'

  if (value.startsWith(wallet)) {
    const result = await fetchUrl(`${config.api}addresses/${value}`)
    return { type: 'wallet', result: result.data }
  }

  if (value.startsWith(transaction)) {
    const result = await fetchUrl(`${config.api}transactions/${value}`)
    return { type: 'transaction', result: result.data }
  }

  if (isNumeric(value)) {
    const result = await fetchUrl(`${config.api}blocks/${value}`)
    return { type: 'block', result: result.data }
  }

  throw new Error()
}

module.exports = search
