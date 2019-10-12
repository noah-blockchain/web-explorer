import React from 'react'
import { getAmountWithCoin, txTypeFilter } from '../../utils/tx'

export default ({ children, rawData = [] }) => {
  const data = !rawData.data
    ? null
    : {
      txs: rawData.data.hash,
      block: rawData.data.block,
      addressOut: rawData.data.from,
      time: rawData.data.timestamp,
      type: txTypeFilter(rawData.data.type),
      amount: getAmountWithCoin(rawData.data)
    }
  console.log(data)

  const child = React.Children.map(children, child =>
    React.cloneElement(child, { data })
  )

  return <>{child}</>
}
