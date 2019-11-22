import React from 'react'

export default ({ children, rawData = [] }) => {
  //console.log(rawData.data)
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
      creator: rawData.data.creator,
      start_price: rawData.data.start_price,
      start_volume: rawData.data.start_volume,
      start_reserve_balance: rawData.data.start_reserve_balance
    }

  const child = React.Children.map(children, child =>
    React.cloneElement(child, { data })
  )

  return <>{child}</>
}
