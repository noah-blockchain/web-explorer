const config = {
  languages: ['en'],
  api: process.env.API !== undefined ? process.env.API : 'https://explorer-api.testnet.noah-blockchain.com/api/v1/',
  status: process.env.API !== undefined ? process.env.API + 'status-page' : 'https://explorer-api.testnet.noah-blockchain.com/api/v1/status-page'
}

export default config
