import React from 'react'

export default ({ children, rawData = [] }) => {
  const data = !rawData.data
    ? null
    : {

      crr: rawData.data.crr,
      volume: rawData.data.volume,
      reserveBalance: rawData.data.reserveBalance,
      name: rawData.data.name,
      symbol: rawData.data.symbol,
      price: rawData.data.price,
      capitalization: rawData.data.capitalization,
      delegated: rawData.data.delegated,
      timestamp: rawData.data.timestamp,
      creator: rawData.data.creator,
    }
  console.log(data)

  const child = React.Children.map(children, child =>
    React.cloneElement(child, { data })
  )

  return <>{child}</>
}
