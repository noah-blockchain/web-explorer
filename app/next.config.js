const withLess = require('@zeit/next-less')
const withImages = require('next-images')
require('dotenv').config()

module.exports = withLess(
  withImages({
    inlineImageLimit: 0,
    env: {
      API: process.env.API,
      STATUS: process.env.STATUS
    }
  })
)
