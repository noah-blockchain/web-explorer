const config = {
  languages: ['en'],
  api: process.env.API  !== undefined ? process.env.API : 'https://explorer-api.testnet.noah-blockchain.com/api/v1/' ,
  status: process.env.STATUS !== undefined ? process.env.STATUS : 'https://explorer-api.testnet.noah-blockchain.com/api/v1/status-page'
}

export default config
