import React from 'react'
import fetchCoins from '~/containers/coins/fetchData'

export default class Container extends React.Component {
  state = {
    page: 1,
    rawData: {
      data: []
    },
    filter: null,
    order_by: null
  }

  componentDidMount() {
    this.setState({
      rawData: this.props.rawData
    })
  }

  getFilterString(filter, order_by) {
    if (filter !== null && filter.length > 0) {
      return `?filter=${filter}&order_by=${order_by}`
    }
    return ''
  }

  getOrder(filter) {
    if (this.state.filter !== filter) return 'DESC'
    if (this.state.order_by === 'DESC') return 'ASC'
    if (this.state.order_by === 'ASC') return 'DEFAULT'
    if (this.state.order_by === 'DEFAULT') return 'DESC'
  }

  setFilter = async (filter) => {
    const order_by = this.getOrder(filter)
    console.log('ORDER BY', order_by);
    const rawData = await fetchCoins(this.getFilterString(filter, order_by)).catch(() => [])
    return this.setState({ filter, order_by, rawData })
  }

  render() {
    const { children } = this.props
    const { rawData = [] } = this.state
    const data = []
    const filter = {
      filter: this.state.filter,
      order_by: this.state.order_by,
      setFilter: this.setFilter
    }

    rawData.data.forEach(item => {
      if (item.symbol !== 'NOAH') {
        data.push({
          crr: item.crr,
          volume: item.volume,
          reserveBalance: item.reserveBalance,
          name: item.name,
          symbol: item.symbol
        })
      }
    })

    const child = React.Children.map(children, child =>
      React.cloneElement(child, { data, filter })
    )

    return <>{child}</>
  }
}
