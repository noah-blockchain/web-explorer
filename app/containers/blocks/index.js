import React from 'react'
import fetchBlocks from '~/containers/blocks/fetchData'

export default class Container extends React.Component {
  state = {
    page: 1,
    rawData: []
  }

  setPage = async page => {
    if (page !== this.state.page) {
      const rawData = await fetchBlocks(page).catch(() => [])
      return this.setState({ page, rawData })
    }
  }

  componentDidMount() {
    this.setState({
      rawData: this.props.rawData
    })
  }

  render() {
    const { children } = this.props
    const { rawData = [] } = this.state

    const data = rawData.map(item => ({
      height: item.height,
      txs: item.hash,
      size: item.size,
      txCount: item.txCount,
      reward: item.reward,
      time: item.timestamp,
      validators: item.validators.length
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
      React.cloneElement(child, { data: data, pagination })
    )

    return <>{child}</>
  }
}
