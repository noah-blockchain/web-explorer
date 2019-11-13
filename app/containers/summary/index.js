import React from 'react'

export default ({ children, rawData = {} }) => {
  console.info(rawData, 'RAW')
  rawData = rawData.data
  const data = {
    freeFloatNoah: rawData.freeFloatNoah,
    txTotalCount: rawData.txTotalCount,
    txPerSecond: rawData.txPerSecond,
    activeValidators: rawData.activeValidators,
    noahEmission: rawData.noahEmission,
    totalDelegatedNoah: rawData.totalDelegatedNoah,
    uptime: rawData.uptime,
    customCoinsCount: rawData.customCoinsCount
  }

  const child = React.Children.map(children, child =>
    React.cloneElement(child, { data })
  )

  return <>{child}</>
}
