import React from 'react'

export default class Container extends React.Component {
  state = {
    page: 1
  }

  setPage = page => {
    return this.setState({ page })
  }

  render() {
    const { children, rawData = [] } = this.props

    const data = rawData.map(item => ({
      txs: item._id,
      addressIn: item._walletDebit,
      addressOut: item._walletCredit,
      time: item.createdAt,
      _asset: item._asset
    }))

    const pagination = {
      setPage: this.setPage,
      activePage: this.state.page,
      lastPage: 15,
      startPage:
        this.state.page < 3
          ? 1
          : this.state.page < 12
          ? this.state.page - 2
          : 11
    }

    const child = React.Children.map(children, child =>
      React.cloneElement(child, { data, pagination })
    )

    return <>{child}</>
  }
}
