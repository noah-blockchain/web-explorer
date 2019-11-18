import React from 'react'

export default ({ children, rawData = [] }) => {
  const data = !rawData.data
    ? null
    : {
        crr: rawData.data.crr,
        volume: rawData.data.volume,
        reserveBalance: rawData.data.reserve_balance,
        timestamp: rawData.data.created_at,
        name: rawData.data.name,
        symbol: rawData.data.symbol,
        price: rawData.data.price,
        capitalization: rawData.data.capitalization,
        delegated: rawData.data.delegated,
        creator: rawData.data.creator
      }

  const child = React.Children.map(children, child =>
    React.cloneElement(child, { data })
  )

  return <>{child}</>
}
