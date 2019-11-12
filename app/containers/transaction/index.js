import React from 'react'
import { getAmountWithCoin, txTypeFilter } from '../../utils/tx'

export default ({ children, rawData = [] }) => {
  console.log(rawData, "DATA")
  const data = !rawData.data
    ? null
    : {
      txs: rawData.data.hash,
      block: rawData.data.block,
      addressOut: rawData.data.from,
      time: rawData.data.timestamp,
      payload: rawData.data.payload,
      type: txTypeFilter(rawData.data.type),
      amount: getAmountWithCoin(rawData.data),

      fee: rawData.data.fee,
      nonce: rawData.data.nonce,
      gas: rawData.data.gas,
      gasPrice: rawData.data.gas_price,
      to: rawData.data.to

    }
  console.log(data)

  const child = React.Children.map(children, child =>
    React.cloneElement(child, { data })
  )

  return <>{child}</>
}
