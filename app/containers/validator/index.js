import React from 'react'

export default ({ children, rawData = [] }) => {
  const data = !rawData.data
    ? null
    : {
        name: rawData.data.meta.name,
        public_key: rawData.data.public_key,
        description: rawData.data.meta.description,
        site_url: rawData.data.meta.site_url,
        stake: rawData.data.stake,
        status: rawData.data.status === 1 ? 'offline' : 'online',
        uptime: rawData.data.uptime
      }

  const child = React.Children.map(children, child =>
    React.cloneElement(child, { data })
  )

  return <>{child}</>
}
