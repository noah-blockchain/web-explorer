import React from 'react'
import Router from 'next/router'
import search from './search'

export default ({ children }) => {
  const onSubmit = async e => {
    e.preventDefault()
    const input = e.target.querySelector('input')
    const value = input ? input.value : null

    if (!value) return null

    const res = await search(value).catch(() => null)

    try {
      if (!res) Router.push('/404')
      if (res.type === 'wallet') Router.push(`/wallets/${res.result.address}`)
      if (res.type === 'transaction')
        Router.push(`/transactions/${res.result.hash}`)
      if (res.type === 'block') Router.push(`/blocks/${res.result.height}`)
      if (res.type === 'coins') Router.push(`/coins/${res.result.name}`)
    } catch (e) {}
  }

  const child = React.Children.map(children, child =>
    React.cloneElement(child, { onSubmit })
  )

  return <>{child}</>
}
