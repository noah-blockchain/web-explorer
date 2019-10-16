import React from 'react'

export default ({ children, rawData = [] }) => {
  const data = rawData.data
  console.log(data.balances, "DATA");
  const child = React.Children.map(children, child =>
    React.cloneElement(child, { data })
  )

  return <>{child}</>
}
