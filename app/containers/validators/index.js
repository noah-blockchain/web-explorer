import React from 'react'
import fetchValidatorsAddress from '~/containers/validators/fetchData'

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
      const rawData = await fetchValidatorsAddress(page, this.props.coin).catch(() => [])
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
          coin: item.coin,
          public_key: item.public_key,
          name: item.name,
          icon_url: item.icon_url
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
          : this.state.page - 2
    }

    const child = React.Children.map(children, child =>
      React.cloneElement(child, { data, pagination })
    )

    return <>{child}</>
  }
}
