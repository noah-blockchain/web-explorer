import React from 'react'

export default ({ children, rawData = [] }) => {
  const data = rawData

  const child = React.Children.map(children, child =>
    React.cloneElement(child, { data })
  )

  return <>{child}</>
}
