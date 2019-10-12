import React from 'react'

export default ({ children, rawData = [] }) => {
  console.log(rawData)
  const data = !rawData.data
    ? null
    : {
      height: rawData.data.height,
      txs: rawData.data.hash,
      size: rawData.data.size,
      txCount: rawData.data.txCount,
      reward: rawData.data.reward,
      time: rawData.data.timestamp,
      validators: rawData.data.validators.length
      }

  const child = React.Children.map(children, child =>
    React.cloneElement(child, { data })
  )

  return <>{child}</>
}
