import React from 'react'

export default ({ children, rawData = {} }) => {
  console.info(rawData, "RAW")
  rawData = rawData.data
  const data = {
    uptime: `${rawData.uptime} %`,
    emission: `${rawData.emission} NOAH`,
    noahPrice: `$${rawData.bipPriceUsd} million total`,
    averageCommission: `${rawData.avrgCommission} NOAH`,
    lastBlock: rawData.latestBlockHeight,
    transactions: rawData.totalTransactions,
    validators: rawData.validators,
    coins: `${rawData.coinsLow} ~ ${rawData.coinsHigh} NOAH only`
  }

  const child = React.Children.map(children, child =>
    React.cloneElement(child, { data })
  )

  return <>{child}</>
}
