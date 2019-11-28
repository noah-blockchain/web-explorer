import React from 'react'
import fetchDelegatorsAddress from '~/containers/delegators/fetchData'

export default class Container extends React.Component {
  state = {
    page: 1,
    rawData: {
      data: [],
      meta: {
        per_page: 0,
        last_page: 0,
        current_page: 1
      }
    }
  }

  setPage = async page => {
    if (page !== this.state.page) {
      const rawData = await fetchDelegatorsAddress(
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
    let { rawData = [] } = this.state
    let data = []
    console.log('rawData', rawData)
    try {
      data = rawData.data.map(item => {
        return {
          value: item.value,
          address: item.address,
          public_key: item.public_key,
          noah_value: item.noah_value
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
      activePage: rawData.meta.current_page,
      lastPage: rawData.meta.last_page,
      startPage:
        this.state.page < 3
          ? 1
          : this.state.page < rawData.meta.per_page
          ? this.state.page - 2
          : 4
    }

    const child = React.Children.map(children, child =>
      React.cloneElement(child, { data, pagination })
    )

    return <>{child}</>
  }
}
