import React from 'react'
import { getAmountWithCoin, txTypeFilter } from '../../utils/tx'
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
      const rawData = await fetchValidatorsAddress(page).catch(() => [])
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
    // console.log('rawData deligator >>>>>>', rawData)
    let data = []
    try {
      data = rawData.data.map(item => {
        return {
          value: item.value,
          address: item.address,
          symbol: item.symbol,
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
    // console.log('data deligators_by_validator', data)
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
