import React from 'react'

export default ({ children, rawData = [] }) => {
  const data = !rawData[0]
    ? null
    : {
        txs: rawData[0]._id,
        height: rawData[0].height,
        time: rawData[0].createdAt,
        confirmations: rawData[0].confirmations,
        prevBlockHash: rawData[0].prevBlockHash
      }

  const child = React.Children.map(children, child =>
    React.cloneElement(child, { data })
  )

  return <>{child}</>
}
