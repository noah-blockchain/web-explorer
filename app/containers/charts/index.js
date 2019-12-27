import React from 'react'

export default ({ children, rawData = [] }) => {
  const data =  Array.isArray(rawData) ? rawData : [
    { date: '00-00-0000', value: 0 },
    { date: '00-00-0000', value: 0 }
  ];


  const child = React.Children.map(children, child =>
    React.cloneElement(child, { data })
  )

  return <>{child}</>
}
