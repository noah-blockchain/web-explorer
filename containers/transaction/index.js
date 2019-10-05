import React from 'react'

export default ({ children, rawData = [] }) => {
  const data = !rawData[0]
    ? null
    : {
        txs: rawData[0]._id,
        addressIn: rawData[0]._walletDebit,
        addressOut: rawData[0]._walletCredit,
        time: rawData[0].createdAt,
        _asset: rawData[0]._asset
      }

  const child = React.Children.map(children, child =>
    React.cloneElement(child, { data })
  )

  return <>{child}</>
}
