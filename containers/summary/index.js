import React from 'react'

export default ({ children, rawData = {} }) => {
  const data = {
    uptime: `${rawData.uptime} %`,
    emission: `${rawData.emission} NOAH`,
    noahPrice: `$${rawData.priceLow} ~ $${rawData.priceHigh} million total`,
    averageCommission: `${rawData.avrgCommission} NOAH`,
    lastBlock: rawData.lastBlock,
    // transactions: '1876689 0.20 TPS for days',
    validators: rawData.validators,
    coins: `${rawData.coinsLow} ~ ${rawData.coinsHigh} NOAH only`
  }

  const child = React.Children.map(children, child =>
    React.cloneElement(child, { data })
  )

  return <>{child}</>
}
