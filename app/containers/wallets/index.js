import React from 'react'
import fetchWallets from '~/containers/wallets/fetchData'

export default class Container extends React.Component {
  state = {
    page: 1,
    rawData: {
      data: [],
      meta: {
        per_page: 0,
        last_page: 0
      }
    },
    filter: null,
    order_by: null
  }

  componentDidMount() {
    this.setState({
      rawData: this.props.rawData
    })
  }

  getFilterString(filter, order_by, page = 1) {
    if (filter !== null && filter.length > 0) {
      return `?filter=${filter}&order_by=${order_by}&page=${page}`
    }
    return `?page=${page}`
  }

  getOrder(filter) {
    if (this.state.filter !== filter) return 'DESC'
    if (this.state.order_by === 'DESC') return 'ASC'
    if (this.state.order_by === 'ASC') return 'DEFAULT'
    if (this.state.order_by === 'DEFAULT') return 'DESC'
  }

  setFilter = async filter => {
    const order_by = this.getOrder(filter)
    const rawData = await fetchWallets(
      this.getFilterString(filter, order_by, this.state.page)
    ).catch(() => [])
    return this.setState({ filter, order_by, rawData })
  }

  setPage = async page => {
    if (page !== this.state.page) {
      const rawData = await fetchWallets(
        this.getFilterString(this.state.filter, this.state.order_by, page)
      ).catch(() => [])
      return this.setState({ page, rawData })
    }
  }

  render() {
    const { children } = this.props
    const { rawData = [] } = this.state
    //console.log('rawData', rawData)
    const data = []
    const filter = {
      filter: this.state.filter,
      order_by: this.state.order_by,
      setFilter: this.setFilter
    }
    rawData.data.forEach(item => {
        data.push({
          address: item.address,
          balance: item.balance
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
          : this.state.page - 2
    }

    const child = React.Children.map(children, child =>
      React.cloneElement(child, { data, filter, pagination })
    )

    return <>{child}</>
  }
}
