import React from 'react'
import { getAmountWithCoin, txTypeFilter } from '../../utils/tx'

export default class Container extends React.Component {
  state = {
    page: 1
  }

  setPage = page => {
    return this.setState({ page })
  }

  render() {
    const { children, rawData = [] } = this.props

    const data = rawData.data.map(item => {
      return ({
        txs: item.hash,
        block: item.block,
        addressOut: item.from,
        time: item.timestamp,
        _asset: item._asset,
        type: txTypeFilter(item.type),
        amount: getAmountWithCoin(item)
      })
    })
    console.log(rawData)

    const pagination = {
      setPage: this.setPage,
      activePage: this.state.page,
      lastPage: rawData.meta.last_page,
      startPage:
        this.state.page < 3
          ? 1
          : this.state.page < rawData.meta.per_page
          ? this.state.page - 2
          : 11
    }

    const child = React.Children.map(children, child =>
      React.cloneElement(child, { data, pagination })
    )

    return <>{child}</>
  }
}
