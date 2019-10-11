import React from 'react'

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
      let  addressIn = '-';
      if(item.data.to !== undefined) {
        addressIn = item.data.to
      } else if(item.data.pub_key !== undefined) {
        addressIn = item.data.pub_key
      } else if(item.data.list !== undefined) {
        addressIn =  item.data.list.map((data)=> data.to)
        addressIn = addressIn.join("<br/>")
      } else if(item.data.coin_to_buy) {
        addressIn = 'BUY'
      }
      return ({
        txs: item.hash,
        addressIn: addressIn,
        addressOut: item.from,
        time: item.timestamp,
        _asset: item._asset
      })
    })

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
      React.cloneElement(child, { data, pagination })
    )

    return <>{child}</>
  }
}
