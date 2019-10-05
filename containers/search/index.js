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
      if (!res) Router.push('/blocks/404')

      if (res.type === 'wallet') Router.push(`/wallets/${res.result._id}`)
      if (res.type === 'transaction')
        Router.push(`/transactions/${res.result._id}`)
      if (res.type === 'block') Router.push(`/blocks/${res.result._id}`)
    } catch (e) {}
  }

  const child = React.Children.map(children, child =>
    React.cloneElement(child, { onSubmit })
  )

  return <>{child}</>
}
