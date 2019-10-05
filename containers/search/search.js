import config from '~/config'

const fetchUrl = async url => {
  const response = await fetch(url)
  const status = response.status
  const body = await response.json()
  if (status == 200) return body
  throw new Error()
}

const search = async (value = '') => {
  const wallet = 'nhwlt'
  const transaction = 'nhtrn'
  const block = 'nhblk'

  if (value.startsWith(wallet)) {
    const result = await fetchUrl(`${config.api}walletsGetInfo/${value}`)
    return { type: 'wallet', result }
  }

  if (value.startsWith(transaction)) {
    const result = await fetchUrl(`${config.api}/extTransactionsFind/${value}`)
    return { type: 'transaction', result: result[0] }
  }

  if (value.startsWith(block)) {
    const result = await fetchUrl(`${config.api}/api/extBlocksFind/${value}`)
    return { type: 'block', result: result[0] }
  }

  throw new Error()
}

module.exports = search
