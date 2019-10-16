import React from 'react'
import { getAmountWithCoin, txTypeFilter } from '../../utils/tx'
import fetchTransactions from '~/containers/transactions/fetchData'

export default class Container extends React.Component {
  state = {
    page: 1,
    rawData: {
      data: [],
      meta: {
        per_page: 0,
        last_page: 0
      }
    }
  }

  setPage = async page => {
    if(page !== this.state.page) {
      const rawData = await fetchTransactions(page).catch(() => [])
      return this.setState({ page, rawData })
    }
  }

  componentDidMount() {
    console.log(this.props.rawData, "RAW")
    this.setState({
      rawData: this.props.rawData
    })
  }

  render() {
    const { children } = this.props
    const { rawData = [] } = this.state

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
