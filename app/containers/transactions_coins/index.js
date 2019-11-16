import React from 'react'
import { getAmountWithCoin, txTypeFilter } from '../../utils/tx'
import fetchTransactionsCoins from '~/containers/transactions_coins/fetchData'

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
    if (page !== this.state.page) {
      const rawData = await fetchTransactionsCoins(
        page,
        this.props.coin
      ).catch(() => [])
      return this.setState({ page, rawData })
    }
  }

  componentWillMount() {
    this.setState({
      rawData: this.props.rawData
    })
  }

  render() {
    const { children } = this.props
    const { rawData = [] } = this.state
    let data = []
    console.log(this.props.rawData, "hello")

    if(rawData.data.length > 1) {
      data = rawData.data.map(item => {
        return {
          txs: item.hash,
          block: item.block,
          addressOut: item.from,
          time: item.timestamp,
          payload: item.payload,
          type: txTypeFilter(item.type),
          // amount: getAmountWithCoin(item)
        }
      })
    }

    const pagination = {
      setPage: this.setPage,
      activePage: this.state.page,
      lastPage: rawData.meta.last_page,
      startPage:
        this.state.page < 3
          ? 1
          : this.state.page < rawData.meta.per_page
          ? this.state.page - 1
          : 11
    }

    const child = React.Children.map(children, child =>
      React.cloneElement(child, { data, pagination })
    )

    return <>{child}</>
  }
}
