const config = {
  languages: ['en'],
  api:
    process.env.API !== undefined
      ? process.env.API
      : 'https://explorer-api.testnet.noah-blockchain.com/api/v1/',
  status:
    process.env.API !== undefined
      ? process.env.API + 'status-page'
      : 'https://explorer-api.testnet.noah-blockchain.com/api/v1/status-page',
  charts_api:
    process.env.API_CHARTS !== undefined
      ? process.env.API_CHARTS
      : 'https://coin-price-backend.testnet.noah-blockchain.com/',
  wallet_url: process.env.WALLET_URL
}
export default config
