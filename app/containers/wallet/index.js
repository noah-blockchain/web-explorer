import React from 'react'

export default ({ children, rawData = [] }) => {
  const data = rawData.data
  const child = React.Children.map(children, child =>
    React.cloneElement(child, { data })
  )

  return <>{child}</>
}
