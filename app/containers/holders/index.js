import React from 'react'
import fetchHoldersAddress from '~/containers/holders/fetchData'

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
      const rawData = await fetchHoldersAddress(page).catch(() => [])
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
    let { rawData = [] } = this.state
    let data = []
    try {
      data = rawData.data.map(item => {
        return {
          amount: item.amount,
          address: item.coin
        }
      })
    } catch (e) {
      rawData = {
        data: [],
        meta: {
          per_page: 0,
          last_page: 0
        }
      }
    }
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
